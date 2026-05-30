#!/usr/bin/env node
/**
 * Browser-independent Three.js structure renderer.
 *
 * This walks the exact Three.js scene graph consumed by the game, projects
 * mesh triangles through a PerspectiveCamera, performs a small z-buffered
 * Lambert-style software render, and writes PNGs with Node's built-in zlib.
 */

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { deflateSync } from 'zlib';
import * as THREE from 'three';
import {
  createStructureGallery,
  createVillageCluster,
} from '../src/procedural-structures.js';

const args = Object.fromEntries(
  process.argv.slice(2).map(arg => {
    const [key, value] = arg.replace(/^--/, '').split('=');
    return [key, value ?? true];
  }),
);

const outDir = args.out || 'tools/screenshots/structures';
const width = Number(args.width || 960);
const height = Number(args.height || 640);
const gutter = 20;
mkdirSync(outDir, { recursive: true });

const angles = [
  { name: 'three-quarter', position: [26, 20, 31], target: [0, 2.1, 1] },
  { name: 'front', position: [0, 15, 40], target: [0, 2.2, 0] },
  { name: 'side', position: [39, 15, 2], target: [0, 2.2, 0] },
  { name: 'aerial', position: [22, 42, 25], target: [0, 0.5, 0] },
];

async function renderSet(name, createSubject) {
  const images = [];
  for (const angle of angles) {
    const rgba = renderAngle(createSubject, angle);
    const path = join(outDir, `${name}-${angle.name}.png`);
    writeFileSync(path, encodePng(width, height, rgba));
    images.push({ rgba, path });
  }

  const sheetWidth = width * 2 + gutter * 3;
  const sheetHeight = height * 2 + gutter * 3;
  const sheet = solidImage(sheetWidth, sheetHeight, [42, 33, 26, 255]);
  images.forEach((image, index) => {
    blit(
      sheet,
      sheetWidth,
      image.rgba,
      width,
      height,
      gutter + (index % 2) * (width + gutter),
      gutter + Math.floor(index / 2) * (height + gutter),
    );
  });
  const sheetPath = join(outDir, `${name}-sheet.png`);
  writeFileSync(sheetPath, encodePng(sheetWidth, sheetHeight, sheet));
  return [...images.map(image => image.path), sheetPath];
}

function renderAngle(createSubject, angle) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 300);
  camera.position.set(...angle.position);
  camera.lookAt(new THREE.Vector3(...angle.target));
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(29, 48),
    new THREE.MeshLambertMaterial({ color: 0x769149 }),
  );
  ground.name = 'Ground';
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.04;
  scene.add(ground);
  scene.add(createSubject());
  scene.updateMatrixWorld(true);

  const rgba = solidImage(width, height, [159, 199, 208, 255]);
  const depth = new Float32Array(width * height);
  depth.fill(Infinity);
  const viewProjection = new THREE.Matrix4().multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse,
  );
  const light = new THREE.Vector3(0.55, 0.82, 0.35).normalize();

  scene.traverseVisible(object => {
    if (!object.isMesh || !object.geometry?.attributes?.position) return;
    renderMesh(object, viewProjection, light, rgba, depth);
  });
  return rgba;
}

function renderMesh(mesh, viewProjection, light, rgba, depth) {
  const geometry = mesh.geometry;
  const positions = geometry.attributes.position;
  const index = geometry.index;
  const triangleCount = index ? index.count / 3 : positions.count / 3;
  const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
  const color = material?.color?.clone?.() ?? new THREE.Color(0xffffff);
  const emissive = material?.emissive?.clone?.() ?? new THREE.Color(0x000000);
  const unlit = Boolean(material?.isMeshBasicMaterial);
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const edge1 = new THREE.Vector3();
  const edge2 = new THREE.Vector3();
  const normal = new THREE.Vector3();

  for (let tri = 0; tri < triangleCount; tri++) {
    const ia = index ? index.getX(tri * 3) : tri * 3;
    const ib = index ? index.getX(tri * 3 + 1) : tri * 3 + 1;
    const ic = index ? index.getX(tri * 3 + 2) : tri * 3 + 2;
    a.fromBufferAttribute(positions, ia).applyMatrix4(mesh.matrixWorld);
    b.fromBufferAttribute(positions, ib).applyMatrix4(mesh.matrixWorld);
    c.fromBufferAttribute(positions, ic).applyMatrix4(mesh.matrixWorld);
    normal.crossVectors(edge1.subVectors(b, a), edge2.subVectors(c, a)).normalize();

    const pa = project(a, viewProjection);
    const pb = project(b, viewProjection);
    const pc = project(c, viewProjection);
    if (!pa || !pb || !pc) continue;

    const lightAmount = unlit ? 1 : Math.max(0.3, 0.42 + Math.max(0, normal.dot(light)) * 0.72);
    const shaded = color.clone().multiplyScalar(lightAmount).add(emissive);
    rasterTriangle(pa, pb, pc, [
      Math.min(255, Math.round(shaded.r * 255)),
      Math.min(255, Math.round(shaded.g * 255)),
      Math.min(255, Math.round(shaded.b * 255)),
      255,
    ], rgba, depth);
  }
}

function project(world, viewProjection) {
  const ndc = world.clone().applyMatrix4(viewProjection);
  if (
    !Number.isFinite(ndc.x) ||
    !Number.isFinite(ndc.y) ||
    !Number.isFinite(ndc.z) ||
    ndc.z < -1 ||
    ndc.z > 1
  ) return null;
  return {
    x: (ndc.x * 0.5 + 0.5) * width,
    y: (-ndc.y * 0.5 + 0.5) * height,
    z: ndc.z,
  };
}

function rasterTriangle(a, b, c, color, rgba, depth) {
  const minX = Math.max(0, Math.floor(Math.min(a.x, b.x, c.x)));
  const maxX = Math.min(width - 1, Math.ceil(Math.max(a.x, b.x, c.x)));
  const minY = Math.max(0, Math.floor(Math.min(a.y, b.y, c.y)));
  const maxY = Math.min(height - 1, Math.ceil(Math.max(a.y, b.y, c.y)));
  const area = edge(a, b, c.x, c.y);
  if (Math.abs(area) < 1e-5) return;

  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const w0 = edge(b, c, px, py) / area;
      const w1 = edge(c, a, px, py) / area;
      const w2 = edge(a, b, px, py) / area;
      if (w0 < 0 || w1 < 0 || w2 < 0) continue;
      const z = w0 * a.z + w1 * b.z + w2 * c.z;
      const offset = y * width + x;
      if (z >= depth[offset]) continue;
      depth[offset] = z;
      const rgbaOffset = offset * 4;
      rgba[rgbaOffset] = color[0];
      rgba[rgbaOffset + 1] = color[1];
      rgba[rgbaOffset + 2] = color[2];
      rgba[rgbaOffset + 3] = color[3];
    }
  }
}

function edge(a, b, x, y) {
  return (x - a.x) * (b.y - a.y) - (y - a.y) * (b.x - a.x);
}

function solidImage(imageWidth, imageHeight, color) {
  const rgba = Buffer.alloc(imageWidth * imageHeight * 4);
  for (let i = 0; i < rgba.length; i += 4) {
    rgba[i] = color[0];
    rgba[i + 1] = color[1];
    rgba[i + 2] = color[2];
    rgba[i + 3] = color[3];
  }
  return rgba;
}

function blit(dst, dstWidth, src, srcWidth, srcHeight, left, top) {
  for (let y = 0; y < srcHeight; y++) {
    const srcStart = y * srcWidth * 4;
    const dstStart = ((top + y) * dstWidth + left) * 4;
    src.copy(dst, dstStart, srcStart, srcStart + srcWidth * 4);
  }
}

function encodePng(imageWidth, imageHeight, rgba) {
  const raw = Buffer.alloc((imageWidth * 4 + 1) * imageHeight);
  for (let y = 0; y < imageHeight; y++) {
    const row = y * (imageWidth * 4 + 1);
    raw[row] = 0;
    rgba.copy(raw, row + 1, y * imageWidth * 4, (y + 1) * imageWidth * 4);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    pngChunk('IHDR', ihdr(imageWidth, imageHeight)),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ]);
}

function ihdr(imageWidth, imageHeight) {
  const data = Buffer.alloc(13);
  data.writeUInt32BE(imageWidth, 0);
  data.writeUInt32BE(imageHeight, 4);
  data[8] = 8;
  data[9] = 6;
  return data;
}

function pngChunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const chunk = Buffer.concat([typeBuffer, data]);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(chunk), 0);
  return Buffer.concat([length, chunk, crc]);
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const written = [];
written.push(...await renderSet('structures', () => createStructureGallery()));
written.push(...await renderSet('village', () => createVillageCluster({
  seed: 73,
  fortified: true,
  scale: 1.18,
})));
console.log(JSON.stringify({ ok: true, written }, null, 2));
