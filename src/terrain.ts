/**
 * Low-poly procedural terrain using simplex noise
 */

import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

// A large open world (one unit per segment, so SIZE === SEGMENTS keeps the
// integer-floor height lookup valid). Rolling hills via layered noise, with a
// flattened heart so the town / combat area stays walkable.
const TERRAIN_SIZE = 240;
const TERRAIN_SEGMENTS = 240;
const TERRAIN_MAX_HEIGHT = 7;
const FLATTEN_RADIUS = 34;   // radius (segments) of the gently-flat center

/**
 * Generate height data using layered simplex noise — broad rolling wavelengths
 * plus finer detail, normalized to 0-255. The map center is eased toward a calm
 * plateau so structures sit on near-flat ground.
 */
function generateHeightData(width: number, height: number): Uint8Array {
  const noise2D = createNoise2D();
  const size = width * height;
  const data = new Uint8Array(size);
  const cx = width / 2;
  const cz = height / 2;

  for (let i = 0; i < size; i++) {
    const x = i % width;
    const y = Math.floor(i / width);

    // Layered octaves: broad rolling hills → medium swells → fine texture.
    const v =
      noise2D(x / 120, y / 120) * 0.55 +
      noise2D(x / 55, y / 55) * 0.30 +
      noise2D(x / 24, y / 24) * 0.15;

    let n = v * 0.5 + 0.5; // → 0..1

    // Flatten the center toward a common mid height (settled-clearing look).
    const dist = Math.hypot(x - cx, y - cz);
    const flat = 1 - Math.min(1, Math.max(0, (dist - FLATTEN_RADIUS) / 28 + 1));
    n = THREE.MathUtils.lerp(n, 0.32, flat * 0.85);

    data[i] = Math.round(Math.min(1, Math.max(0, n)) * 255);
  }

  return data;
}

/**
 * Get terrain height at world coordinates
 */
export function getTerrainHeight(x: number, z: number, heightData: Uint8Array | null): number {
  if (!heightData) return 0;
  const centerX = TERRAIN_SIZE / 2;
  const centerZ = TERRAIN_SIZE / 2;
  const localX = Math.floor(x + centerX);
  const localZ = Math.floor(z + centerZ);

  // Clamp to terrain bounds
  const clampedX = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, localX));
  const clampedZ = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, localZ));

  const dataIndex = clampedZ * TERRAIN_SEGMENTS + clampedX;
  const normalizedHeight = heightData[dataIndex] / 255;
  return normalizedHeight * TERRAIN_MAX_HEIGHT;
}

/**
 * Create the low-poly terrain mesh
 */
export function createTerrain(): { mesh: THREE.Mesh; heightData: Uint8Array } {
  // Generate height data
  const heightData = generateHeightData(TERRAIN_SEGMENTS, TERRAIN_SEGMENTS);

  // Create base geometry
  const geometry = new THREE.PlaneGeometry(
    TERRAIN_SIZE,
    TERRAIN_SIZE,
    TERRAIN_SEGMENTS - 1,
    TERRAIN_SEGMENTS - 1
  );
  geometry.rotateX(-Math.PI / 2); // Lay it flat

  // Convert to non-indexed for independent vertex colors/shading
  const lowPolyGeom = geometry.toNonIndexed();
  const posAttribute = lowPolyGeom.getAttribute('position');

  // Apply height data to vertices
  for (let i = 0; i < posAttribute.count; i++) {
    const x = Math.floor(posAttribute.getX(i) + TERRAIN_SIZE / 2);
    const z = Math.floor(posAttribute.getZ(i) + TERRAIN_SIZE / 2);
    const clampedX = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, x));
    const clampedZ = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, z));
    const dataIndex = clampedZ * TERRAIN_SEGMENTS + clampedX;

    const h = (heightData[dataIndex] / 255) * TERRAIN_MAX_HEIGHT;
    posAttribute.setY(i, h);
  }

  // Compute normals for lighting (flat shading does the low-poly look)
  lowPolyGeom.computeVertexNormals();

  // Apply height-based vertex colors with painterly per-vertex variation.
  // Bands picked from elevation, then jittered by a cheap hash so the
  // surface reads as hand-painted (WoW outdoor-zone vibe) instead of flat
  // colour rings.
  const colors = [];
  const color = new THREE.Color();
  const noise = createNoise2D();

  for (let i = 0; i < posAttribute.count; i++) {
    const x = posAttribute.getX(i);
    const y = posAttribute.getY(i);
    const z = posAttribute.getZ(i);

    // Warm WoW outdoor palette, banded by elevation FRACTION so it scales with
    // TERRAIN_MAX_HEIGHT: lush lowland green (same family as the grass) → olive
    // → dry tan slopes → pale rock peaks.
    const f = y / TERRAIN_MAX_HEIGHT;
    if (f < 0.15) color.setHex(0x5b7a2e);
    else if (f < 0.38) color.setHex(0x6f8a38);
    else if (f < 0.60) color.setHex(0x8a9648);
    else if (f < 0.80) color.setHex(0xb09a5c);
    else color.setHex(0xcabfa0);

    // Slow noise for patch variation + a fine hash for per-vertex sparkle.
    const patch = noise(x * 0.06, z * 0.06);     // -1..1
    const fine = noise(x * 0.4 + 13.3, z * 0.4 - 7.1) * 0.5;
    const tint = patch * 0.10 + fine * 0.05;
    color.r = Math.max(0, Math.min(1, color.r + tint));
    color.g = Math.max(0, Math.min(1, color.g + tint * 0.9));
    color.b = Math.max(0, Math.min(1, color.b + tint * 0.6));

    colors.push(color.r, color.g, color.b);
  }

  lowPolyGeom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  // Create material with vertex colors and flat shading
  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    flatShading: true,
    side: THREE.DoubleSide
  });

  const terrain = new THREE.Mesh(lowPolyGeom, material);
  terrain.receiveShadow = true;
  terrain.name = 'Terrain';

  return { mesh: terrain, heightData };
}

/**
 * Create water plane at base level
 */
export function createWaterPlane(): THREE.Mesh {
  const waterGeometry = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE);
  waterGeometry.rotateX(-Math.PI / 2);

  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a5f7f,
    roughness: 0.3,
    metalness: 0.8,
    transparent: true,
    opacity: 0.4,
    depthWrite: false
  });

  const water = new THREE.Mesh(waterGeometry, waterMaterial);
  water.position.y = 0.05; // Slightly above ground
  water.name = 'Water';

  return water;
}
