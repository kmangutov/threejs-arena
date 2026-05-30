/**
 * Shared low-poly Warcraft-style structure kit.
 *
 * The live game and tools/render-structures.mjs both consume these builders,
 * so structure contact sheets render the same geometry that ships in-world.
 */

import * as THREE from 'three';

export const DEFAULT_STRUCTURE_PALETTE = {
  plaster: 0xb89a6a,
  plasterLight: 0xd1b47d,
  timber: 0x5a351d,
  timberDark: 0x301b10,
  thatch: 0x7c4b20,
  thatchLight: 0xa56b2b,
  stone: 0x93846e,
  stoneLight: 0xb8a58b,
  stoneDark: 0x5d554d,
  iron: 0x403d3b,
  clothRed: 0x8d2d25,
  clothBlue: 0x315d85,
  clothGold: 0xc9a13d,
  ember: 0xff8a24,
};

export function makeRng(seed) {
  let a = seed | 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function palette(overrides = {}) {
  return { ...DEFAULT_STRUCTURE_PALETTE, ...overrides };
}

function mat(color, roughness = 0.95) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0,
    flatShading: true,
  });
}

function glowMat(color) {
  return new THREE.MeshBasicMaterial({ color });
}

function addMesh(
  group,
  geometry,
  material,
  {
    name = 'Piece',
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [1, 1, 1],
  } = {},
) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function place(group, child, x, z, y = 0, yaw = 0, scale = 1) {
  child.position.set(x, y, z);
  child.rotation.y = yaw;
  child.scale.setScalar(scale);
  group.add(child);
  return child;
}

function addBeam(group, material, x, y, z, sx, sy, sz, rz = 0, ry = 0) {
  return addMesh(group, new THREE.BoxGeometry(sx, sy, sz), material, {
    name: 'TimberBeam',
    position: [x, y, z],
    rotation: [0, ry, rz],
  });
}

function addBattlements(group, material, width, depth, y, count = 4) {
  const block = 0.42;
  const height = 0.48;
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const x = THREE.MathUtils.lerp(-width * 0.42, width * 0.42, t);
    const z = THREE.MathUtils.lerp(-depth * 0.42, depth * 0.42, t);
    addMesh(group, new THREE.BoxGeometry(block, height, block), material, {
      name: 'Battlement',
      position: [x, y, -depth * 0.5],
    });
    addMesh(group, new THREE.BoxGeometry(block, height, block), material, {
      name: 'Battlement',
      position: [x, y, depth * 0.5],
    });
    addMesh(group, new THREE.BoxGeometry(block, height, block), material, {
      name: 'Battlement',
      position: [-width * 0.5, y, z],
    });
    addMesh(group, new THREE.BoxGeometry(block, height, block), material, {
      name: 'Battlement',
      position: [width * 0.5, y, z],
    });
  }
}

function addDoorBraces(group, material, x, y, z, width, height, yaw = 0) {
  for (const offset of [-width * 0.38, width * 0.38]) {
    addMesh(group, new THREE.BoxGeometry(0.09, height * 0.9, 0.09), material, {
      name: 'DoorBrace',
      position: [x + offset * Math.cos(yaw), y, z - offset * Math.sin(yaw)],
      rotation: [0, yaw, 0],
    });
  }
  addMesh(group, new THREE.BoxGeometry(width * 0.9, 0.1, 0.1), material, {
    name: 'DoorBrace',
    position: [x, y + height * 0.18, z],
    rotation: [0, yaw, 0],
  });
}

function addWindow(group, p, x, y, z, yaw = 0, width = 0.62, height = 0.82) {
  const dark = mat(0x1d1710);
  const wood = mat(p.timberDark);
  addMesh(group, new THREE.BoxGeometry(width, height, 0.075), dark, {
    name: 'WindowInset',
    position: [x, y, z],
    rotation: [0, yaw, 0],
  });
  for (const offset of [-width * 0.57, width * 0.57]) {
    addMesh(group, new THREE.BoxGeometry(0.1, height + 0.16, 0.1), wood, {
      name: 'WindowFrame',
      position: [x + offset * Math.cos(yaw), y, z - offset * Math.sin(yaw)],
      rotation: [0, yaw, 0],
    });
  }
  for (const offset of [-height * 0.58, height * 0.58]) {
    addMesh(group, new THREE.BoxGeometry(width + 0.2, 0.1, 0.1), wood, {
      name: 'WindowFrame',
      position: [x, y + offset, z],
      rotation: [0, yaw, 0],
    });
  }
  addMesh(group, new THREE.BoxGeometry(width * 0.88, 0.07, 0.095), wood, {
    name: 'WindowMullion',
    position: [x, y, z],
    rotation: [0, yaw, 0],
  });
}

function addStoneBand(group, material, width, depth, y, height = 0.25) {
  addMesh(group, new THREE.BoxGeometry(width, height, depth), material, {
    name: 'StoneBand',
    position: [0, y, 0],
  });
}

export function createCrate({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Crate';
  const wood = mat(p.timber);
  const dark = mat(p.timberDark);
  addMesh(group, new THREE.BoxGeometry(0.8, 0.8, 0.8), wood, { position: [0, 0.4, 0] });
  addBeam(group, dark, 0, 0.4, 0.415, 0.12, 0.82, 0.04);
  addBeam(group, dark, 0, 0.4, -0.415, 0.12, 0.82, 0.04);
  addBeam(group, dark, 0.415, 0.4, 0, 0.04, 0.82, 0.12);
  addBeam(group, dark, -0.415, 0.4, 0, 0.04, 0.82, 0.12);
  addBeam(group, dark, 0, 0.4, 0.42, 0.1, 1.05, 0.05, -0.72);
  group.scale.setScalar(scale);
  return group;
}

export function createBarrel({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Barrel';
  addMesh(group, new THREE.CylinderGeometry(0.42, 0.42, 0.92, 10), mat(p.timber), {
    position: [0, 0.46, 0],
  });
  for (const y of [0.14, 0.46, 0.78]) {
    addMesh(group, new THREE.TorusGeometry(0.43, 0.035, 5, 10), mat(p.iron), {
      position: [0, y, 0],
      rotation: [Math.PI / 2, 0, 0],
    });
  }
  group.scale.setScalar(scale);
  return group;
}

export function createBench({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Bench';
  const wood = mat(p.timber);
  const dark = mat(p.timberDark);
  addMesh(group, new THREE.BoxGeometry(2.35, 0.18, 0.62), wood, {
    name: 'BenchSeat',
    position: [0, 0.8, 0],
  });
  addMesh(group, new THREE.BoxGeometry(2.35, 0.18, 0.38), wood, {
    name: 'BenchBack',
    position: [0, 1.42, -0.34],
    rotation: [0.12, 0, 0],
  });
  for (const x of [-0.92, 0.92]) {
    addMesh(group, new THREE.CylinderGeometry(0.1, 0.14, 0.82, 6), dark, {
      name: 'BenchLeg',
      position: [x, 0.4, -0.2],
    });
    addMesh(group, new THREE.CylinderGeometry(0.1, 0.14, 0.82, 6), dark, {
      name: 'BenchLeg',
      position: [x, 0.4, 0.2],
    });
    addBeam(group, dark, x, 1.13, -0.36, 0.13, 1.2, 0.13, -0.12);
  }
  addBeam(group, dark, 0, 0.53, 0, 1.95, 0.12, 0.12);
  group.scale.setScalar(scale);
  return group;
}

export function createBanner({ color, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const cloth = color ?? p.clothRed;
  const group = new THREE.Group();
  group.name = 'Banner';
  addMesh(group, new THREE.CylinderGeometry(0.055, 0.075, 3.1, 6), mat(p.timberDark), {
    position: [0, 1.55, 0],
  });
  addMesh(group, new THREE.BoxGeometry(0.95, 1.35, 0.06), mat(cloth), {
    position: [0.5, 2.25, 0],
  });
  addMesh(group, new THREE.ConeGeometry(0.14, 0.35, 4), mat(p.clothGold), {
    position: [0, 3.25, 0],
  });
  group.scale.setScalar(scale);
  return group;
}

export function createCampfire({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Campfire';
  const rock = mat(p.stoneDark);
  const log = mat(p.timberDark);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    addMesh(group, new THREE.DodecahedronGeometry(0.16, 0), rock, {
      position: [Math.cos(a) * 0.6, 0.13, Math.sin(a) * 0.6],
    });
  }
  addMesh(group, new THREE.CylinderGeometry(0.11, 0.11, 1.05, 6), log, {
    position: [0, 0.23, 0],
    rotation: [Math.PI / 2, 0, Math.PI / 4],
  });
  addMesh(group, new THREE.CylinderGeometry(0.11, 0.11, 1.05, 6), log, {
    position: [0, 0.23, 0],
    rotation: [Math.PI / 2, 0, -Math.PI / 4],
  });
  addMesh(group, new THREE.ConeGeometry(0.36, 1.0, 7), glowMat(p.ember), {
    name: 'Flame',
    position: [0, 0.83, 0],
  });
  addMesh(group, new THREE.ConeGeometry(0.2, 0.7, 7), glowMat(0xffd45a), {
    name: 'FlameCore',
    position: [0.05, 0.68, 0],
  });
  group.scale.setScalar(scale);
  return group;
}

export function createFenceSegment({ length = 4, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'FenceSegment';
  const wood = mat(p.timberDark);
  for (const x of [-length * 0.5, 0, length * 0.5]) {
    addMesh(group, new THREE.CylinderGeometry(0.1, 0.14, 1.55, 6), wood, {
      position: [x, 0.78, 0],
    });
    addMesh(group, new THREE.ConeGeometry(0.15, 0.35, 5), wood, {
      position: [x, 1.72, 0],
    });
  }
  addBeam(group, wood, 0, 0.62, 0, length, 0.16, 0.16, 0.08);
  addBeam(group, wood, 0, 1.08, 0, length, 0.16, 0.16, -0.08);
  group.scale.setScalar(scale);
  return group;
}

export function createSignpost({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Signpost';
  const wood = mat(p.timber);
  const dark = mat(p.timberDark);
  addMesh(group, new THREE.CylinderGeometry(0.1, 0.16, 2.75, 6), dark, {
    position: [0, 1.38, 0],
  });
  addMesh(group, new THREE.ConeGeometry(0.18, 0.42, 5), dark, {
    position: [0, 2.96, 0],
  });
  addMesh(group, new THREE.BoxGeometry(1.75, 0.42, 0.16), wood, {
    name: 'SignBoard',
    position: [0.62, 2.2, 0],
    rotation: [0, 0, 0.06],
  });
  addMesh(group, new THREE.BoxGeometry(1.4, 0.38, 0.16), wood, {
    name: 'SignBoard',
    position: [-0.48, 1.72, 0],
    rotation: [0, Math.PI, -0.08],
  });
  addMesh(group, new THREE.BoxGeometry(1.0, 0.08, 0.19), dark, {
    name: 'SignMark',
    position: [0.68, 2.2, 0.1],
    rotation: [0, 0, 0.06],
  });
  addMesh(group, new THREE.BoxGeometry(0.72, 0.08, 0.19), dark, {
    name: 'SignMark',
    position: [-0.5, 1.72, 0.1],
    rotation: [0, 0, -0.08],
  });
  group.scale.setScalar(scale);
  return group;
}

export function createWell({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'VillageWell';
  const stone = mat(p.stone);
  const wood = mat(p.timberDark);
  addMesh(group, new THREE.CylinderGeometry(1.1, 1.2, 0.8, 12, 1, true), stone, {
    position: [0, 0.4, 0],
  });
  addMesh(group, new THREE.TorusGeometry(1.15, 0.18, 6, 12), stone, {
    position: [0, 0.8, 0],
    rotation: [Math.PI / 2, 0, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(0.08, 0.1, 2.6, 6), wood, {
    position: [-0.95, 1.65, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(0.08, 0.1, 2.6, 6), wood, {
    position: [0.95, 1.65, 0],
  });
  addBeam(group, wood, 0, 2.85, 0, 2.45, 0.14, 0.14);
  addMesh(group, new THREE.CylinderGeometry(0.16, 0.16, 1.85, 8), wood, {
    name: 'WellSpindle',
    position: [0, 2.0, 0],
    rotation: [0, 0, Math.PI / 2],
  });
  addMesh(group, new THREE.CylinderGeometry(0.035, 0.035, 1.25, 6), mat(p.iron), {
    name: 'WellRope',
    position: [0, 1.28, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(0.24, 0.3, 0.42, 8, 1, true), mat(p.timber), {
    name: 'WellBucket',
    position: [0, 0.72, 0],
  });
  addMesh(group, new THREE.BoxGeometry(2.8, 0.16, 1.7), mat(p.thatch), {
    name: 'WellRoof',
    position: [0, 3.05, 0.52],
    rotation: [0.56, 0, 0],
  });
  addMesh(group, new THREE.BoxGeometry(2.8, 0.16, 1.7), mat(p.thatch), {
    name: 'WellRoof',
    position: [0, 3.05, -0.52],
    rotation: [-0.56, 0, 0],
  });
  addBeam(group, wood, 0, 3.52, 0, 3.0, 0.13, 0.13);
  addMesh(group, new THREE.CylinderGeometry(0.05, 0.05, 0.62, 6), mat(p.iron), {
    name: 'WellHandle',
    position: [1.1, 2.0, 0],
    rotation: [0, 0, Math.PI / 2],
  });
  group.scale.setScalar(scale);
  return group;
}

export function createRockFormation({ seed = 1, count = 5, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = 'RockFormation';
  const stone = mat(p.stoneDark);
  for (let i = 0; i < count; i++) {
    const a = rng() * Math.PI * 2;
    const r = i === 0 ? 0 : 0.55 + rng() * 1.15;
    const size = i === 0 ? 1.55 : 0.45 + rng() * 0.85;
    addMesh(group, new THREE.DodecahedronGeometry(0.72, 0), stone, {
      name: 'Boulder',
      position: [Math.cos(a) * r, size * 0.43, Math.sin(a) * r],
      rotation: [rng() * 0.35, rng() * Math.PI * 2, rng() * 0.35],
      scale: [size, size * (0.65 + rng() * 0.3), size],
    });
  }
  group.scale.setScalar(scale);
  return group;
}

export function createRoundHut({ seed = 1, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = 'RoundHut';
  const plaster = mat(p.plaster);
  const wood = mat(p.timberDark);
  const thatch = mat(p.thatch);
  addMesh(group, new THREE.CylinderGeometry(1.88, 2.0, 0.38, 9), mat(p.stoneDark), {
    name: 'HutFoundation',
    position: [0, 0.19, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(1.65, 1.85, 2.35, 9), plaster, {
    name: 'HutWalls',
    position: [0, 1.175, 0],
  });
  addMesh(group, new THREE.ConeGeometry(2.35, 1.8, 9), thatch, {
    name: 'HutRoof',
    position: [0, 3.18, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(2.18, 2.18, 0.16, 9), mat(p.thatchLight), {
    name: 'RoofTrim',
    position: [0, 2.36, 0],
  });
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    addMesh(group, new THREE.CylinderGeometry(0.055, 0.075, 2.4, 5), wood, {
      name: 'WallPost',
      position: [Math.sin(a) * 1.72, 1.2, Math.cos(a) * 1.72],
    });
  }
  addMesh(group, new THREE.BoxGeometry(0.95, 1.58, 0.08), mat(p.timberDark), {
    name: 'Door',
    position: [0, 0.79, 1.855],
  });
  addDoorBraces(group, mat(p.timber), 0, 0.82, 1.92, 0.9, 1.42);
  addMesh(group, new THREE.TorusGeometry(1.74, 0.075, 5, 9), wood, {
    name: 'HutWallBand',
    position: [0, 1.78, 0],
    rotation: [Math.PI / 2, 0, 0],
  });
  addWindow(group, p, 1.76, 1.34, 0, Math.PI / 2, 0.42, 0.68);
  addBeam(group, wood, -0.57, 0.86, 1.92, 0.13, 1.72, 0.14);
  addBeam(group, wood, 0.57, 0.86, 1.92, 0.13, 1.72, 0.14);
  addBeam(group, wood, 0, 1.64, 1.91, 1.2, 0.16, 0.14);
  addMesh(group, new THREE.BoxGeometry(1.65, 0.14, 0.88), thatch, {
    name: 'DoorAwning',
    position: [0, 1.94, 2.15],
    rotation: [0.17, 0, 0],
  });
  addMesh(group, new THREE.ConeGeometry(0.18, 0.55, 6), wood, {
    name: 'RoofCap',
    position: [0, 4.34, 0],
  });
  if (rng() < 0.72) {
    addMesh(group, new THREE.CylinderGeometry(0.22, 0.28, 1.45, 6), mat(p.stoneDark), {
      name: 'Chimney',
      position: [0.82, 3.42, -0.25],
      rotation: [0, 0, -0.12],
    });
  }
  if (rng() < 0.52) {
    place(group, createBarrel({ scale: 0.72, palette: p }), -1.48, 1.52, 0, 0.2);
  }
  group.userData.collider = { type: 'cylinder', radius: 1.85, height: 2.35 };
  group.scale.setScalar(scale);
  return group;
}

export function createLonghouse({ seed = 1, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = 'Longhouse';
  const plaster = mat(p.plasterLight);
  const wood = mat(p.timberDark);
  const thatch = mat(p.thatch);
  addMesh(group, new THREE.BoxGeometry(5.05, 0.35, 3.25), mat(p.stoneDark), {
    name: 'LonghouseFoundation',
    position: [0, 0.18, 0],
  });
  addMesh(group, new THREE.BoxGeometry(4.7, 2.3, 2.9), plaster, {
    name: 'LonghouseWalls',
    position: [0, 1.15, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.05, 0.22, 2.35), thatch, {
    name: 'RoofSlope',
    position: [0, 2.87, 0.76],
    rotation: [0.62, 0, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.05, 0.22, 2.35), thatch, {
    name: 'RoofSlope',
    position: [0, 2.87, -0.76],
    rotation: [-0.62, 0, 0],
  });
  for (const x of [-2.15, -0.72, 0.72, 2.15]) {
    addBeam(group, wood, x, 1.25, 1.48, 0.14, 2.5, 0.16);
    addBeam(group, wood, x, 1.25, -1.48, 0.14, 2.5, 0.16);
  }
  addBeam(group, wood, 0, 2.4, 0, 5.25, 0.16, 0.16);
  addBeam(group, wood, 0, 3.7, 0, 5.32, 0.14, 0.14);
  addBeam(group, wood, -0.63, 0.92, 1.54, 0.14, 1.84, 0.14);
  addBeam(group, wood, 0.63, 0.92, 1.54, 0.14, 1.84, 0.14);
  addBeam(group, wood, 0, 1.82, 1.54, 1.38, 0.16, 0.14);
  addMesh(group, new THREE.BoxGeometry(1.05, 1.72, 0.08), mat(p.timber), {
    name: 'Door',
    position: [0, 0.86, 1.48],
  });
  addDoorBraces(group, wood, 0, 0.88, 1.57, 1.0, 1.62);
  addWindow(group, p, -1.48, 1.35, 1.54);
  addWindow(group, p, 1.48, 1.35, 1.54);
  addWindow(group, p, -1.48, 1.35, -1.54, Math.PI);
  addWindow(group, p, 1.48, 1.35, -1.54, Math.PI);
  addMesh(group, new THREE.BoxGeometry(1.55, 0.18, 0.8), mat(p.stone), {
    name: 'FrontStep',
    position: [0, 0.12, 1.86],
  });
  addMesh(group, new THREE.CylinderGeometry(0.2, 0.25, 1.2, 6), mat(p.stoneDark), {
    name: 'Chimney',
    position: [1.48, 3.34, -0.42],
    rotation: [0, 0, -0.12],
  });
  if (rng() < 0.75) {
    place(group, createCrate({ scale: 0.72, palette: p }), 1.7, 1.75, 0, 0.12);
  }
  group.userData.collider = { type: 'box', width: 4.7, depth: 2.9, height: 2.3 };
  group.scale.setScalar(scale);
  return group;
}

export function createTimberHouse({ seed = 1, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = 'TimberHouse';
  const plaster = mat(p.plasterLight);
  const wood = mat(p.timberDark);
  const roof = mat(p.thatch);
  const stone = mat(p.stoneDark);

  addMesh(group, new THREE.BoxGeometry(5.4, 0.55, 4.2), stone, {
    name: 'HouseFoundation',
    position: [0, 0.28, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.0, 3.7, 3.8), plaster, {
    name: 'HouseWalls',
    position: [0, 2.15, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.65, 0.24, 3.0), roof, {
    name: 'HouseRoof',
    position: [0, 4.72, 0.98],
    rotation: [0.64, 0, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.65, 0.24, 3.0), roof, {
    name: 'HouseRoof',
    position: [0, 4.72, -0.98],
    rotation: [-0.64, 0, 0],
  });
  addBeam(group, wood, 0, 5.62, 0, 5.92, 0.18, 0.18);
  addBeam(group, wood, 0, 2.08, 1.96, 5.35, 0.18, 0.16);
  addBeam(group, wood, 0, 2.08, -1.96, 5.35, 0.18, 0.16);
  for (const x of [-2.42, -1.22, 0, 1.22, 2.42]) {
    addBeam(group, wood, x, 2.17, 1.98, 0.15, 3.9, 0.15);
    addBeam(group, wood, x, 2.17, -1.98, 0.15, 3.9, 0.15);
  }
  addMesh(group, new THREE.BoxGeometry(1.18, 2.0, 0.1), mat(p.timber), {
    name: 'HouseDoor',
    position: [0, 1.02, 1.99],
  });
  addDoorBraces(group, wood, 0, 1.04, 2.06, 1.08, 1.86);
  for (const x of [-1.55, 1.55]) {
    addWindow(group, p, x, 1.43, 2.04);
    addWindow(group, p, x, 3.03, 2.04, 0, 0.7, 0.72);
    addWindow(group, p, x, 2.65, -2.04, Math.PI, 0.7, 0.72);
  }
  for (const z of [-0.78, 0.78]) {
    addBeam(group, wood, -2.54, 2.17, z, 0.15, 3.9, 0.15);
    addBeam(group, wood, 2.54, 2.17, z, 0.15, 3.9, 0.15);
  }
  addWindow(group, p, -2.56, 2.28, 0, -Math.PI / 2, 0.7, 0.82);
  addWindow(group, p, 2.56, 2.28, 0, Math.PI / 2, 0.7, 0.82);
  addMesh(group, new THREE.BoxGeometry(2.1, 0.2, 1.0), stone, {
    name: 'HouseStep',
    position: [0, 0.15, 2.45],
  });
  addMesh(group, new THREE.CylinderGeometry(0.28, 0.34, 2.25, 7), stone, {
    name: 'HouseChimney',
    position: [1.82, 5.15, -0.52],
    rotation: [0, 0, -0.08],
  });
  if (rng() < 0.8) {
    place(group, createBench({ scale: 0.7, palette: p }), -1.28, 2.62, 0, 0);
  }
  if (rng() < 0.58) {
    place(group, createBarrel({ scale: 0.68, palette: p }), 2.35, 2.18, 0, 0.2);
  }
  group.userData.collider = { type: 'box', width: 5.4, depth: 4.2, height: 4.0 };
  group.scale.setScalar(scale);
  return group;
}

export function createAnvil({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Anvil';
  const iron = mat(p.iron);
  const wood = mat(p.timberDark);
  addMesh(group, new THREE.CylinderGeometry(0.32, 0.45, 0.72, 7), wood, {
    name: 'AnvilStump',
    position: [0, 0.36, 0],
  });
  addMesh(group, new THREE.BoxGeometry(0.96, 0.22, 0.42), iron, {
    name: 'AnvilBody',
    position: [-0.08, 0.86, 0],
  });
  addMesh(group, new THREE.BoxGeometry(1.16, 0.14, 0.56), iron, {
    name: 'AnvilFace',
    position: [-0.02, 1.04, 0],
  });
  addMesh(group, new THREE.ConeGeometry(0.28, 0.82, 5), iron, {
    name: 'AnvilHorn',
    position: [0.72, 0.89, 0],
    rotation: [0, 0, -Math.PI / 2],
  });
  group.scale.setScalar(scale);
  return group;
}

export function createHandcart({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Handcart';
  const wood = mat(p.timber);
  const dark = mat(p.timberDark);
  const iron = mat(p.iron);
  addMesh(group, new THREE.BoxGeometry(1.72, 0.24, 2.0), wood, {
    name: 'CartBed',
    position: [0, 0.92, 0],
  });
  for (const x of [-0.82, 0.82]) {
    addMesh(group, new THREE.BoxGeometry(0.14, 0.78, 2.04), dark, {
      name: 'CartSide',
      position: [x, 1.27, 0],
    });
    for (const z of [-0.72, 0, 0.72]) {
      addMesh(group, new THREE.CylinderGeometry(0.055, 0.07, 0.72, 6), dark, {
        name: 'CartSlat',
        position: [x, 1.25, z],
      });
    }
  }
  for (const x of [-1.0, 1.0]) {
    addMesh(group, new THREE.TorusGeometry(0.68, 0.12, 5, 10), iron, {
      name: 'CartWheel',
      position: [x, 0.68, 0],
      rotation: [0, Math.PI / 2, 0],
    });
    for (let i = 0; i < 6; i++) {
      addMesh(group, new THREE.BoxGeometry(0.08, 1.12, 0.08), dark, {
        name: 'CartSpoke',
        position: [x, 0.68, 0],
        rotation: [i * Math.PI / 6, 0, 0],
      });
    }
  }
  for (const x of [-0.58, 0.58]) {
    addMesh(group, new THREE.BoxGeometry(0.13, 0.13, 2.3), dark, {
      name: 'CartHandle',
      position: [x, 0.86, 2.04],
      rotation: [-0.08, 0, 0],
    });
  }
  place(group, createCrate({ scale: 0.72, palette: p }), -0.35, -0.12, 1.05, 0.08);
  group.scale.setScalar(scale);
  return group;
}

export function createBlacksmith({ seed = 1, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = 'BlacksmithWorkshop';
  const plaster = mat(p.plaster);
  const wood = mat(p.timberDark);
  const stone = mat(p.stoneDark);
  const roof = mat(p.thatch);

  addMesh(group, new THREE.BoxGeometry(5.8, 0.46, 4.2), stone, {
    name: 'SmithyFoundation',
    position: [0, 0.23, 0],
  });
  addMesh(group, new THREE.BoxGeometry(4.9, 2.85, 3.7), plaster, {
    name: 'SmithyWalls',
    position: [-0.35, 1.68, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.6, 0.22, 2.85), roof, {
    name: 'SmithyRoof',
    position: [-0.35, 3.66, 0.92],
    rotation: [0.62, 0, 0],
  });
  addMesh(group, new THREE.BoxGeometry(5.6, 0.22, 2.85), roof, {
    name: 'SmithyRoof',
    position: [-0.35, 3.66, -0.92],
    rotation: [-0.62, 0, 0],
  });
  addBeam(group, wood, -0.35, 4.5, 0, 5.85, 0.17, 0.17);
  for (const x of [-2.68, -1.18, 0.3, 1.82]) {
    addBeam(group, wood, x, 1.66, 1.92, 0.15, 3.1, 0.15);
    addBeam(group, wood, x, 1.66, -1.92, 0.15, 3.1, 0.15);
  }
  addBeam(group, wood, -0.35, 1.72, 1.94, 5.2, 0.17, 0.15);
  addMesh(group, new THREE.BoxGeometry(1.12, 1.92, 0.1), mat(p.timber), {
    name: 'SmithyDoor',
    position: [-0.5, 1.0, 1.96],
  });
  addDoorBraces(group, wood, -0.5, 1.0, 2.03, 1.0, 1.78);
  addWindow(group, p, 1.1, 1.64, 2.02, 0, 0.7, 0.74);

  addMesh(group, new THREE.CylinderGeometry(0.48, 0.62, 3.25, 7), stone, {
    name: 'ForgeChimney',
    position: [-1.86, 3.62, -0.5],
  });
  addMesh(group, new THREE.CylinderGeometry(0.7, 0.74, 0.24, 7), mat(p.stone), {
    name: 'ChimneyCap',
    position: [-1.86, 5.27, -0.5],
  });

  addMesh(group, new THREE.BoxGeometry(2.7, 0.16, 3.35), roof, {
    name: 'ForgeLeanTo',
    position: [3.28, 2.56, 0],
    rotation: [0, 0, -0.13],
  });
  for (const z of [-1.38, 1.38]) {
    addMesh(group, new THREE.CylinderGeometry(0.08, 0.12, 2.55, 6), wood, {
      name: 'LeanToPost',
      position: [4.46, 1.28, z],
    });
  }
  addMesh(group, new THREE.BoxGeometry(1.65, 0.72, 1.2), stone, {
    name: 'ForgeHearth',
    position: [3.25, 0.58, -0.28],
  });
  addMesh(group, new THREE.BoxGeometry(1.06, 0.1, 0.62), glowMat(p.ember), {
    name: 'ForgeEmbers',
    position: [3.25, 0.98, -0.28],
  });
  place(group, createAnvil({ scale: 0.78, palette: p }), 3.4, 1.05, 0, -0.18);
  if (rng() < 0.75) {
    place(group, createBarrel({ scale: 0.68, palette: p }), 4.34, -1.0, 0, 0.12);
  }
  group.userData.collider = { type: 'box', width: 5.8, depth: 4.2, height: 3.1 };
  group.scale.setScalar(scale);
  return group;
}

export function createMarketStall({ color, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'MarketStall';
  const wood = mat(p.timberDark);
  const cloth = mat(color ?? p.clothBlue);
  addMesh(group, new THREE.BoxGeometry(3.0, 0.25, 1.45), mat(p.timber), {
    position: [0, 1.0, 0],
  });
  for (const x of [-1.35, 1.35]) {
    for (const z of [-0.58, 0.58]) {
      addMesh(group, new THREE.CylinderGeometry(0.07, 0.1, 2.65, 6), wood, {
        position: [x, 1.33, z],
      });
    }
  }
  addMesh(group, new THREE.BoxGeometry(3.35, 0.16, 1.95), cloth, {
    name: 'Awning',
    position: [0, 2.7, 0],
    rotation: [0, 0, 0.07],
  });
  place(group, createCrate({ scale: 0.66, palette: p }), -1.05, 0.95, 0);
  place(group, createBarrel({ scale: 0.65, palette: p }), 1.1, 0.98, 0);
  group.scale.setScalar(scale);
  return group;
}

export function createWatchtower({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'Watchtower';
  const stone = mat(p.stone);
  const wood = mat(p.timberDark);
  addMesh(group, new THREE.CylinderGeometry(1.55, 1.8, 4.7, 9), stone, {
    name: 'TowerBase',
    position: [0, 2.35, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(2.0, 2.0, 0.38, 9), mat(p.stoneLight), {
    name: 'TowerTop',
    position: [0, 4.82, 0],
  });
  addMesh(group, new THREE.CylinderGeometry(1.72, 1.82, 0.34, 9), mat(p.stoneDark), {
    name: 'TowerFoundation',
    position: [0, 0.17, 0],
  });
  addMesh(group, new THREE.TorusGeometry(1.62, 0.13, 5, 9), mat(p.stoneLight), {
    name: 'TowerBand',
    position: [0, 2.6, 0],
    rotation: [Math.PI / 2, 0, 0],
  });
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    addMesh(group, new THREE.BoxGeometry(0.38, 0.68, 0.38), stone, {
      name: 'TowerCrenel',
      position: [Math.sin(a) * 1.72, 5.32, Math.cos(a) * 1.72],
      rotation: [0, a, 0],
    });
  }
  addMesh(group, new THREE.BoxGeometry(0.88, 1.75, 0.08), mat(p.timberDark), {
    name: 'TowerDoor',
    position: [0, 0.88, 1.79],
  });
  addWindow(group, p, 0, 3.5, 1.62, 0, 0.38, 0.88);
  addWindow(group, p, 1.58, 2.05, 0, Math.PI / 2, 0.36, 0.82);
  place(group, createBanner({ color: p.clothRed, scale: 0.74, palette: p }), 0, 0, 5.0);
  addBeam(group, wood, 0, 4.7, 0, 3.3, 0.12, 0.12);
  group.userData.collider = { type: 'cylinder', radius: 1.8, height: 4.7 };
  group.scale.setScalar(scale);
  return group;
}

export function createVillageGate({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'VillageGate';
  const wood = mat(p.timberDark);
  for (const x of [-2.15, 2.15]) {
    addMesh(group, new THREE.CylinderGeometry(0.28, 0.42, 4.8, 7), wood, {
      position: [x, 2.4, 0],
    });
    addMesh(group, new THREE.ConeGeometry(0.48, 0.9, 6), wood, {
      position: [x, 5.18, 0],
    });
  }
  addBeam(group, wood, 0, 4.02, 0, 5.0, 0.38, 0.42);
  addBeam(group, wood, 0, 3.42, 0, 4.7, 0.18, 0.18, 0.0);
  addBeam(group, wood, -1.06, 3.98, 0, 2.25, 0.17, 0.17, 0.68);
  addBeam(group, wood, 1.06, 3.98, 0, 2.25, 0.17, 0.17, -0.68);
  for (const x of [-1.35, -0.68, 0, 0.68, 1.35]) {
    addMesh(group, new THREE.ConeGeometry(0.12, 0.48, 5), wood, {
      name: 'GateSpike',
      position: [x, 4.58, 0],
    });
  }
  place(group, createBanner({ color: p.clothRed, scale: 0.62, palette: p }), -2.15, 0.05, 2.9);
  place(group, createBanner({ color: p.clothBlue, scale: 0.62, palette: p }), 2.15, 0.05, 2.9);
  group.scale.setScalar(scale);
  return group;
}

export function createCastleKeep({ scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'CastleKeep';
  const stone = mat(p.stone);
  const light = mat(p.stoneLight);
  addMesh(group, new THREE.BoxGeometry(6.9, 5.4, 6.0), stone, {
    name: 'KeepBody',
    position: [0, 2.7, 0],
  });
  addStoneBand(group, light, 7.2, 6.3, 0.34, 0.68);
  addStoneBand(group, light, 7.06, 6.16, 3.72, 0.24);
  addMesh(group, new THREE.BoxGeometry(4.05, 2.45, 3.8), stone, {
    name: 'UpperKeep',
    position: [0, 6.42, -0.62],
  });
  addBattlements(group, light, 6.9, 6.0, 5.66, 6);
  addBattlements(group, light, 4.05, 3.8, 7.82, 4);
  for (const [x, z] of [[-3.25, -2.82], [3.25, -2.82], [-3.25, 2.82], [3.25, 2.82]]) {
    addMesh(group, new THREE.CylinderGeometry(1.2, 1.35, 6.5, 8), stone, {
      name: 'CornerTower',
      position: [x, 3.25, z],
    });
    addMesh(group, new THREE.ConeGeometry(1.52, 2.35, 8), mat(p.clothBlue), {
      name: 'TowerRoof',
      position: [x, 7.65, z],
    });
    addMesh(group, new THREE.TorusGeometry(1.22, 0.14, 5, 8), light, {
      name: 'TowerBand',
      position: [x, 4.65, z],
      rotation: [Math.PI / 2, 0, 0],
    });
  }
  addMesh(group, new THREE.BoxGeometry(1.8, 2.75, 0.08), mat(p.timberDark), {
    name: 'KeepDoor',
    position: [0, 1.38, 3.02],
  });
  addMesh(group, new THREE.BoxGeometry(2.5, 0.5, 0.5), light, {
    name: 'DoorLintel',
    position: [0, 2.92, 3.12],
  });
  addDoorBraces(group, mat(p.iron), 0, 1.38, 3.09, 1.72, 2.52);
  addMesh(group, new THREE.BoxGeometry(2.45, 0.22, 1.15), light, {
    name: 'KeepStep',
    position: [0, 0.13, 3.64],
  });
  for (const x of [-2.05, 2.05]) {
    addWindow(group, p, x, 4.38, 3.08, 0, 0.38, 0.92);
  }
  addWindow(group, p, 0, 6.58, 1.31, 0, 0.44, 0.98);
  place(group, createBanner({ color: p.clothRed, scale: 0.85, palette: p }), 0, 3.1, 5.15);
  place(group, createBanner({ color: p.clothBlue, scale: 0.7, palette: p }), -1.25, 1.34, 7.05);
  place(group, createBanner({ color: p.clothRed, scale: 0.7, palette: p }), 1.25, 1.34, 7.05);
  group.userData.collider = { type: 'box', width: 6.9, depth: 6.0, height: 5.4 };
  group.scale.setScalar(scale);
  return group;
}

export function createVillageCluster({ seed = 1, fortified = false, scale = 1, palette: colors = {} } = {}) {
  const p = palette(colors);
  const rng = makeRng(seed);
  const group = new THREE.Group();
  group.name = fortified ? 'FortifiedVillage' : 'Village';

  place(group, createWell({ scale: 0.78, palette: p }), 0, 0);
  place(group, createRoundHut({ seed: seed + 11, scale: 0.82, palette: p }), -4.8, -2.8, 0, 0.72);
  place(group, createRoundHut({ seed: seed + 17, scale: 0.72, palette: p }), 4.4, -3.5, 0, -0.58);
  place(group, createLonghouse({ seed: seed + 23, scale: 0.72, palette: p }), -1.2, 5.0, 0, Math.PI);
  place(group, createTimberHouse({ seed: seed + 29, scale: 0.58, palette: p }), -7.0, 3.8, 0, 0.28);
  place(group, createBlacksmith({ seed: seed + 31, scale: 0.55, palette: p }), 7.2, 4.9, 0, -0.72);
  place(group, createMarketStall({ color: rng() < 0.5 ? p.clothRed : p.clothBlue, scale: 0.72, palette: p }), 4.3, 2.1, 0, -0.4);
  place(group, createBench({ scale: 0.72, palette: p }), 1.25, 1.55, 0, -0.52);
  place(group, createCampfire({ scale: 0.72, palette: p }), -1.2, -2.0);
  place(group, createRockFormation({ seed: seed + 37, count: 4, scale: 0.7, palette: p }), -7.0, -0.3);
  place(group, createFenceSegment({ length: 5, scale: 0.85, palette: p }), -5.0, 1.0, 0, Math.PI / 2);
  place(group, createFenceSegment({ length: 5, scale: 0.85, palette: p }), 1.4, -5.5, 0, 0.1);
  place(group, createSignpost({ scale: 0.76, palette: p }), 1.7, -3.1, 0, 0.45);
  place(group, createCrate({ scale: 0.72, palette: p }), 2.45, 2.3, 0, -0.12);
  place(group, createCrate({ scale: 0.56, palette: p }), 3.0, 2.65, 0, 0.18);
  place(group, createBarrel({ scale: 0.7, palette: p }), -3.2, 4.5, 0, 0.1);
  place(group, createHandcart({ scale: 0.58, palette: p }), 3.2, -4.5, 0, -0.35);
  place(group, createBanner({ color: p.clothRed, scale: 0.66, palette: p }), -4.9, -0.35);
  if (fortified) {
    place(group, createVillageGate({ scale: 0.72, palette: p }), 0.2, -7.0, 0, 0);
    place(group, createWatchtower({ scale: 0.66, palette: p }), 10.0, 7.2, 0, -0.35);
    place(group, createFenceSegment({ length: 4.5, scale: 0.8, palette: p }), 5.4, -4.4, 0, -0.75);
  }
  group.scale.setScalar(scale);
  return group;
}

export function createStructureGallery({ palette: colors = {} } = {}) {
  const p = palette(colors);
  const group = new THREE.Group();
  group.name = 'StructureGallery';
  place(group, createRoundHut({ seed: 11, scale: 0.9, palette: p }), -13.0, -4.0);
  place(group, createLonghouse({ seed: 21, scale: 0.85, palette: p }), -7.2, -4.0, 0, -0.12);
  place(group, createTimberHouse({ seed: 32, scale: 0.78, palette: p }), -0.6, -4.0);
  place(group, createBlacksmith({ seed: 43, scale: 0.72, palette: p }), 5.3, -4.0);
  place(group, createMarketStall({ scale: 0.9, palette: p }), 11.0, -4.0);
  place(group, createWell({ scale: 0.82, palette: p }), 15.4, -4.0);
  place(group, createWatchtower({ scale: 0.82, palette: p }), 19.0, -4.0);
  place(group, createVillageGate({ scale: 0.88, palette: p }), -11.5, 5.7);
  place(group, createCastleKeep({ scale: 0.63, palette: p }), -3.6, 6.4);
  place(group, createRockFormation({ seed: 44, count: 6, scale: 0.92, palette: p }), 5.0, 5.4);
  place(group, createCampfire({ scale: 0.8, palette: p }), 8.5, 5.2);
  place(group, createBench({ scale: 0.82, palette: p }), 10.7, 5.0, 0, -0.12);
  place(group, createHandcart({ scale: 0.68, palette: p }), 12.6, 4.3, 0, 0.18);
  place(group, createCrate({ scale: 0.9, palette: p }), 12.4, 5.0);
  place(group, createBarrel({ scale: 0.86, palette: p }), 13.8, 5.1);
  place(group, createSignpost({ scale: 0.96, palette: p }), 15.2, 3.6, 0, 0.2);
  return group;
}

export const PROCEDURAL_ASSETS = [
  { id: 'castle-keep', label: 'Castle Keep', category: 'Landmarks', create: createCastleKeep },
  { id: 'timber-house', label: 'Timber House', category: 'Buildings', create: createTimberHouse },
  { id: 'blacksmith', label: 'Blacksmith Workshop', category: 'Buildings', create: createBlacksmith },
  { id: 'longhouse', label: 'Longhouse', category: 'Buildings', create: createLonghouse },
  { id: 'round-hut', label: 'Round Hut', category: 'Buildings', create: createRoundHut },
  { id: 'watchtower', label: 'Watchtower', category: 'Fortifications', create: createWatchtower },
  { id: 'village-gate', label: 'Village Gate', category: 'Fortifications', create: createVillageGate },
  { id: 'market-stall', label: 'Market Stall', category: 'Village Props', create: createMarketStall },
  { id: 'well', label: 'Roofed Well', category: 'Village Props', create: createWell },
  { id: 'bench', label: 'Bench', category: 'Village Props', create: createBench },
  { id: 'handcart', label: 'Handcart', category: 'Village Props', create: createHandcart },
  { id: 'anvil', label: 'Anvil', category: 'Village Props', create: createAnvil },
  { id: 'signpost', label: 'Signpost', category: 'Village Props', create: createSignpost },
  { id: 'banner', label: 'Banner', category: 'Village Props', create: createBanner },
  { id: 'fence-segment', label: 'Fence Segment', category: 'Village Props', create: createFenceSegment },
  { id: 'campfire', label: 'Campfire', category: 'Village Props', create: createCampfire },
  { id: 'crate', label: 'Crate', category: 'Village Props', create: createCrate },
  { id: 'barrel', label: 'Barrel', category: 'Village Props', create: createBarrel },
  { id: 'rock-formation', label: 'Rock Formation', category: 'Nature', create: createRockFormation },
  { id: 'village', label: 'Village Cluster', category: 'Collections', create: createVillageCluster },
  {
    id: 'fortified-village',
    label: 'Fortified Village',
    category: 'Collections',
    create: options => createVillageCluster({ ...options, fortified: true }),
  },
  { id: 'structure-gallery', label: 'Full Asset Gallery', category: 'Collections', create: createStructureGallery },
];

export function createProceduralAsset(id, options = {}) {
  const asset = PROCEDURAL_ASSETS.find(item => item.id === id);
  if (!asset) throw new Error(`Unknown procedural asset: ${id}`);
  return asset.create(options);
}
