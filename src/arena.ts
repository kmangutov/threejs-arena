/**
 * Arena - Nagrand-style blockout with pillars and terrain
 */

import * as THREE from 'three';
// @ts-ignore - JS texture modules
import { createDiffuse as createPillarDiffuse, createBump as createPillarBump } from './textures/pillar_rock/index.js';
import { createTerrain } from './terrain';
import { createForest } from './trees';

// Arena dimensions
const ARENA_SIZE = 40;
const PILLAR_HEIGHT = 4;
const PILLAR_RADIUS = 1.2;

// Collision shapes
export interface CylinderCollider {
  type: 'cylinder';
  x: number;
  z: number;
  radius: number;
  height: number;
  /** Y position of the cylinder's TOP. If set and `climbable`, the player can stand on it. */
  topY?: number;
  /** If true, the player can stand on top of this cylinder (otherwise it's a wall). */
  climbable?: boolean;
}

export interface BoxCollider {
  type: 'box';
  x: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  rotation: number;
}

export type Collider = CylinderCollider | BoxCollider;

// Store colliders and terrain data for export
const colliders: Collider[] = [];
let terrainHeightData: Uint8Array | null = null;

// Cached textures
let pillarDiffuse: THREE.CanvasTexture | undefined;
let pillarBump: THREE.CanvasTexture | undefined;

function getPillarDiffuse(): THREE.CanvasTexture {
  if (pillarDiffuse) return pillarDiffuse;
  pillarDiffuse = createPillarDiffuse(THREE, 512, 54321) as THREE.CanvasTexture;
  pillarDiffuse.repeat.set(1, 2);
  return pillarDiffuse;
}

function getPillarBump(): THREE.CanvasTexture {
  if (pillarBump) return pillarBump;
  pillarBump = createPillarBump(THREE, 512, 54321) as THREE.CanvasTexture;
  pillarBump.repeat.set(1, 2);
  return pillarBump;
}


/**
 * Create a pillar at the given position
 */
function createStoneMaterial(color = 0xb09a78): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    map: getPillarDiffuse(),
    bumpMap: getPillarBump(),
    bumpScale: 1.2,
    roughness: 0.95,
    metalness: 0.0,
  });
}

function addStonePiece(
  group: THREE.Group,
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  y: number,
): void {
  const piece = new THREE.Mesh(geometry, material);
  piece.position.y = y;
  piece.castShadow = true;
  piece.receiveShadow = true;
  group.add(piece);
}

function createPillar(x: number, z: number): THREE.Group {
  const pillar = new THREE.Group();
  pillar.name = 'Pillar';
  pillar.position.set(x, 0, z);
  const material = createStoneMaterial();

  // Chunky layered silhouette: broad foot, tapered shaft and capital. Eight
  // radial segments preserve the hand-shaped TBC arena profile.
  addStonePiece(
    pillar,
    new THREE.CylinderGeometry(PILLAR_RADIUS * 1.3, PILLAR_RADIUS * 1.5, 0.5, 8),
    material,
    0.25,
  );
  addStonePiece(
    pillar,
    new THREE.CylinderGeometry(PILLAR_RADIUS * 0.86, PILLAR_RADIUS * 1.08, PILLAR_HEIGHT - 0.8, 8),
    material,
    PILLAR_HEIGHT * 0.5,
  );
  addStonePiece(
    pillar,
    new THREE.CylinderGeometry(PILLAR_RADIUS * 1.28, PILLAR_RADIUS * 0.98, 0.45, 8),
    material,
    PILLAR_HEIGHT - 0.22,
  );
  addStonePiece(
    pillar,
    new THREE.ConeGeometry(PILLAR_RADIUS * 0.42, 0.8, 6),
    material,
    PILLAR_HEIGHT + 0.35,
  );

  // Register collider
  colliders.push({
    type: 'cylinder',
    x,
    z,
    radius: PILLAR_RADIUS * 1.45, // Match the broad visible foot
    height: PILLAR_HEIGHT
  });

  return pillar;
}

/**
 * Create a ramp/box for LOS features
 */
function createRamp(
  x: number,
  z: number,
  width: number,
  depth: number,
  height: number,
  rotation: number = 0
): THREE.Group {
  const group = new THREE.Group();

  // Main box
  const boxGeometry = new THREE.BoxGeometry(width, height, depth);
  const material = createStoneMaterial(0x9c8465);
  const box = new THREE.Mesh(boxGeometry, material);
  box.position.y = height / 2;
  box.castShadow = true;
  box.receiveShadow = true;
  group.add(box);

  group.position.set(x, 0, z);
  group.rotation.y = rotation;
  group.name = 'Ramp';

  // Register collider
  colliders.push({
    type: 'box',
    x,
    z,
    width,
    depth,
    height,
    rotation
  });

  return group;
}

/**
 * Create individual boundary wall segments with entrance gaps
 * Each wall is split into left and right segments with a centered entrance
 */
function createBoundaryWalls(): THREE.Group {
  const walls = new THREE.Group();
  walls.name = 'BoundaryWalls';

  const wallHeight = 1.5;
  const wallThickness = 0.5;
  const halfSize = ARENA_SIZE / 2;
  const entranceWidth = 6; // Width of the gap for each entrance

  const wallMaterial = createStoneMaterial(0xa28b6e);

  // Create wall segment and register collider
  const createWallSegment = (
    length: number,
    x: number,
    z: number,
    rotY: number
  ) => {
    const geometry = new THREE.BoxGeometry(length, wallHeight, wallThickness);
    const wall = new THREE.Mesh(geometry, wallMaterial);
    wall.position.set(x, wallHeight / 2, z);
    wall.rotation.y = rotY;
    wall.castShadow = true;
    wall.receiveShadow = true;
    walls.add(wall);

    // Register as collider
    colliders.push({
      type: 'box',
      x,
      z,
      width: rotY === 0 ? length : wallThickness,
      depth: rotY === 0 ? wallThickness : length,
      height: wallHeight,
      rotation: rotY
    });

    return wall;
  };

  const halfSegmentLength = (ARENA_SIZE - entranceWidth) / 2;
  const offset = halfSegmentLength / 2 + entranceWidth / 2;

  // North wall (z = -halfSize) - split left and right
  createWallSegment(halfSegmentLength, -offset, -halfSize, 0);
  createWallSegment(halfSegmentLength, offset, -halfSize, 0);

  // South wall (z = halfSize) - split left and right
  createWallSegment(halfSegmentLength, -offset, halfSize, 0);
  createWallSegment(halfSegmentLength, offset, halfSize, 0);

  // West wall (x = -halfSize) - split top and bottom
  createWallSegment(halfSegmentLength, -halfSize, -offset, Math.PI / 2);
  createWallSegment(halfSegmentLength, -halfSize, offset, Math.PI / 2);

  // East wall (x = halfSize) - split top and bottom
  createWallSegment(halfSegmentLength, halfSize, -offset, Math.PI / 2);
  createWallSegment(halfSegmentLength, halfSize, offset, Math.PI / 2);

  return walls;
}

/**
 * Get all collision shapes
 */
export function getColliders(): Collider[] {
  return colliders;
}

/**
 * Get terrain height data for physics
 */
export function getTerrainHeightData(): Uint8Array | null {
  return terrainHeightData;
}

/**
 * Build the complete arena scene
 */
export function createArena(): THREE.Group {
  // Clear colliders in case of re-creation
  colliders.length = 0;

  const arena = new THREE.Group();
  arena.name = 'Arena';

  // Terrain (replaces flat ground plane)
  const { mesh: terrain, heightData } = createTerrain();
  terrainHeightData = heightData;
  arena.add(terrain);

  // Rivers provide water where it belongs. A full-map water sheet made the
  // central lowlands read as a flooded teal basin.

  // 4 main pillars in cardinal positions (Nagrand-style)
  const pillarOffset = 8;
  arena.add(createPillar(-pillarOffset, -pillarOffset));
  arena.add(createPillar(pillarOffset, -pillarOffset));
  arena.add(createPillar(-pillarOffset, pillarOffset));
  arena.add(createPillar(pillarOffset, pillarOffset));

  // Center obstacles for LOS
  arena.add(createRamp(-3, 0, 2, 4, 1.2, Math.PI / 6));
  arena.add(createRamp(3, 0, 2, 4, 1.2, -Math.PI / 6));

  // Boundary walls
  arena.add(createBoundaryWalls());

  // Forest
  arena.add(createForest(terrainHeightData));

  return arena;
}

/**
 * Create lighting for the arena
 */
export function createArenaLighting(): THREE.Group {
  const lights = new THREE.Group();
  lights.name = 'Lighting';

  // Ambient light
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  lights.add(ambient);

  // Main directional light (sun)
  const sun = new THREE.DirectionalLight(0xffffee, 1.0);
  sun.position.set(10, 20, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 2048;
  sun.shadow.mapSize.height = 2048;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 50;
  sun.shadow.camera.left = -25;
  sun.shadow.camera.right = 25;
  sun.shadow.camera.top = 25;
  sun.shadow.camera.bottom = -25;
  lights.add(sun);

  // Hemisphere light for softer ambient
  const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3d5c3d, 0.3);
  lights.add(hemi);

  return lights;
}
