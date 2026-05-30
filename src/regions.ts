/**
 * Themed world regions — distinct WoW-flavoured "ecosystems" scattered across
 * the open terrain so exploring turns up real places, not just hills:
 *
 *   • Town     — a fortified hamlet (keep, towers, gate, longhouses, market,
 *                wells) on a cobbled plaza.
 *   • Farmland — tilled crop plots in fenced rows with haystacks and a barn.
 *   • Swamp    — murky pools ringed by reeds, dead trees, lily pads, mushrooms.
 *
 * Each region sits on the terrain via the shared height sampler and reports
 * world-space colliders for its solid structures (same pattern as the
 * ecosystem villages), so the player can't walk through buildings.
 */

import * as THREE from 'three';
import type { Collider } from './arena';
// @ts-ignore - shared JS builders (also consumed by the Node PNG renderer).
import { createRoundHut, createLonghouse, createCastleKeep, createWatchtower, createVillageGate, createMarketStall, createWell, createBarrel, createCrate, createBanner, createCampfire, createFenceSegment, createRockFormation, makeRng } from './procedural-structures.js';

type HeightFn = (x: number, z: number) => number;

function mat(color: number, roughness = 0.95): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: 0, flatShading: true });
}

/** Drop a prebuilt structure onto the terrain at (x,z) with yaw + scale. */
function place(
  parent: THREE.Object3D,
  child: THREE.Object3D,
  height: HeightFn,
  x: number,
  z: number,
  yaw = 0,
  scale = 1,
): THREE.Object3D {
  child.position.set(x, height(x, z), z);
  child.rotation.y = yaw;
  child.scale.multiplyScalar(scale);
  parent.add(child);
  return child;
}

// ---------------------------------------------------------------------------
// New low-poly props (kept here; the structure kit covers buildings).
// ---------------------------------------------------------------------------

/** A raised soil plot striped with furrows and dotted with leafy crop rows. */
function tilledPlot(width: number, depth: number, rng: () => number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'CropPlot';
  const soil = new THREE.Mesh(new THREE.BoxGeometry(width, 0.18, depth), mat(0x5a3b22));
  soil.position.y = 0.09;
  soil.receiveShadow = true;
  g.add(soil);

  // Furrow stripes + crop tufts along rows.
  const rows = Math.max(3, Math.floor(width / 1.1));
  const cropMat = mat(0x6f8a32);
  const furrowMat = mat(0x47301c);
  for (let r = 0; r < rows; r++) {
    const px = -width / 2 + (r + 0.5) * (width / rows);
    const furrow = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, depth * 0.92), furrowMat);
    furrow.position.set(px, 0.12, 0);
    g.add(furrow);
    const tufts = Math.floor(depth / 0.9);
    for (let t = 0; t < tufts; t++) {
      const pz = -depth / 2 + (t + 0.5) * (depth / tufts) + (rng() - 0.5) * 0.2;
      const h = 0.35 + rng() * 0.35;
      const crop = new THREE.Mesh(new THREE.ConeGeometry(0.18, h, 5), cropMat);
      crop.position.set(px, 0.18 + h / 2, pz);
      crop.castShadow = true;
      g.add(crop);
    }
  }
  return g;
}

/** Stacked golden hay cones. */
function haystack(scale = 1): THREE.Group {
  const g = new THREE.Group();
  g.name = 'Haystack';
  const hay = mat(0xc7a23d);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 0.9, 9), hay);
  base.position.y = 0.45;
  const top = new THREE.Mesh(new THREE.ConeGeometry(1.0, 1.1, 9), hay);
  top.position.y = 1.35;
  base.castShadow = top.castShadow = true;
  g.add(base, top);
  g.scale.multiplyScalar(scale);
  return g;
}

/** Bare, gnarled dead tree for the swamp. */
function deadTree(rng: () => number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'DeadTree';
  const bark = mat(0x3b342b);
  const h = 3.5 + rng() * 2.5;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.34, h, 6), bark);
  trunk.position.y = h / 2;
  trunk.castShadow = true;
  g.add(trunk);
  const branches = 3 + Math.floor(rng() * 3);
  for (let i = 0; i < branches; i++) {
    const len = 1.0 + rng() * 1.4;
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.12, len, 5), bark);
    const ang = rng() * Math.PI * 2;
    br.position.set(0, h * (0.55 + rng() * 0.4), 0);
    br.rotation.set(Math.PI / 2.6, ang, ang * 0.5);
    g.add(br);
  }
  return g;
}

/** A still, murky water pool that hugs the ground. */
function murkyPool(radius: number): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 28),
    new THREE.MeshStandardMaterial({
      color: 0x2f3f33,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
    }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.04;
  m.name = 'MurkyPool';
  return m;
}

/** Instanced reed blades clustered around a center. */
function reedPatch(rng: () => number, count: number, spread: number): THREE.InstancedMesh {
  const blade = new THREE.ConeGeometry(0.06, 1.3, 4);
  blade.translate(0, 0.65, 0);
  const reeds = new THREE.InstancedMesh(blade, mat(0x4a5a2b), count);
  reeds.name = 'Reeds';
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const a = rng() * Math.PI * 2;
    const r = Math.sqrt(rng()) * spread;
    dummy.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
    dummy.rotation.set((rng() - 0.5) * 0.3, rng() * Math.PI, (rng() - 0.5) * 0.3);
    dummy.scale.setScalar(0.7 + rng() * 0.8);
    dummy.updateMatrix();
    reeds.setMatrixAt(i, dummy.matrix);
  }
  return reeds;
}

/** A tinted ground patch (e.g. boggy soil) laid just over the terrain. */
function groundPatch(radius: number, color: number, opacity = 1): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(radius, 24),
    new THREE.MeshStandardMaterial({ color, roughness: 1, metalness: 0, transparent: opacity < 1, opacity }),
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.02;
  m.receiveShadow = true;
  m.name = 'GroundPatch';
  return m;
}

// ---------------------------------------------------------------------------
// Regions
// ---------------------------------------------------------------------------

function buildTown(height: HeightFn, center: THREE.Vector3): THREE.Group {
  const g = new THREE.Group();
  g.name = 'Town';
  // Anchor the region at its terrain height; child props use a height offset
  // RELATIVE to the center (h below), so the group Y must be the real ground.
  g.position.set(center.x, height(center.x, center.z), center.z);
  const rng = makeRng(9001);
  const h: HeightFn = (x, z) => height(center.x + x, center.z + z) - height(center.x, center.z);

  // Cobbled plaza so the town reads as built-up ground.
  const plaza = groundPatch(20, 0x7a7367);
  plaza.position.y = 0.03;
  g.add(plaza);

  place(g, createCastleKeep({ scale: 1.15 }), h, 0, -10, 0);
  place(g, createWatchtower({}), h, -12, -8, 0.3);
  place(g, createWatchtower({}), h, 12, -8, -0.3);
  place(g, createVillageGate({ scale: 1.1 }), h, 0, 12, 0);
  place(g, createLonghouse({ seed: 3 }), h, -11, 4, Math.PI / 2);
  place(g, createLonghouse({ seed: 7 }), h, 11, 4, -Math.PI / 2);
  place(g, createRoundHut({ seed: 21 }), h, -6, 8, 0.4, 0.9);
  place(g, createRoundHut({ seed: 22 }), h, 6, 8, -0.4, 0.9);
  place(g, createMarketStall({ color: 0x315d85 }), h, -4, -2, 0.2);
  place(g, createMarketStall({ color: 0x8d2d25 }), h, 4, -2, -0.2);
  place(g, createWell({}), h, 0, 2, 0);
  place(g, createCampfire({}), h, 0, 6, 0);
  for (let i = 0; i < 5; i++) {
    place(g, createBarrel({}), h, -7 + rng() * 14, -6 + rng() * 4, rng() * 6);
    place(g, createCrate({}), h, -7 + rng() * 14, 0 + rng() * 6, rng() * 6);
  }
  place(g, createBanner({ color: 0x8d2d25 }), h, -2, 11, 0);
  place(g, createBanner({ color: 0x315d85 }), h, 2, 11, 0);
  return g;
}

function buildFarmland(height: HeightFn, center: THREE.Vector3): THREE.Group {
  const g = new THREE.Group();
  g.name = 'Farmland';
  // Anchor the region at its terrain height; child props use a height offset
  // RELATIVE to the center (h below), so the group Y must be the real ground.
  g.position.set(center.x, height(center.x, center.z), center.z);
  const rng = makeRng(4242);
  const h: HeightFn = (x, z) => height(center.x + x, center.z + z) - height(center.x, center.z);

  // Barn (a big longhouse) anchors the farm.
  place(g, createLonghouse({ seed: 11 }), h, -16, -10, 0.2, 1.3);
  place(g, createWell({}), h, -10, 6, 0);
  place(g, createRoundHut({ seed: 33 }), h, -18, 4, -0.3, 0.85);

  // A grid of fenced crop plots.
  const plotW = 8, plotD = 6, gap = 3;
  for (let cx = 0; cx < 2; cx++) {
    for (let cz = 0; cz < 2; cz++) {
      const px = 2 + cx * (plotW + gap);
      const pz = -6 + cz * (plotD + gap);
      place(g, tilledPlot(plotW, plotD, rng), h, px, pz, 0);
      // Fence the plot: two side rails per axis.
      place(g, createFenceSegment({ length: plotW + 1 }), h, px, pz - plotD / 2 - 0.4, 0);
      place(g, createFenceSegment({ length: plotW + 1 }), h, px, pz + plotD / 2 + 0.4, 0);
      place(g, createFenceSegment({ length: plotD + 1 }), h, px - plotW / 2 - 0.4, pz, Math.PI / 2);
      place(g, createFenceSegment({ length: plotD + 1 }), h, px + plotW / 2 + 0.4, pz, Math.PI / 2);
    }
  }

  for (let i = 0; i < 4; i++) {
    place(g, haystack(0.8 + rng() * 0.5), h, -6 + rng() * 4, -8 + rng() * 16, rng() * 6);
  }
  return g;
}

function buildSwamp(height: HeightFn, center: THREE.Vector3): THREE.Group {
  const g = new THREE.Group();
  g.name = 'Swamp';
  // Anchor the region at its terrain height; child props use a height offset
  // RELATIVE to the center (h below), so the group Y must be the real ground.
  g.position.set(center.x, height(center.x, center.z), center.z);
  const rng = makeRng(1337);
  const h: HeightFn = (x, z) => height(center.x + x, center.z + z) - height(center.x, center.z);

  // Boggy ground tint under the whole region.
  g.add(groundPatch(34, 0x46502f, 0.85));

  // A few murky pools with reed fringes and lily pads.
  const pools = [
    { x: 0, z: 0, r: 9 },
    { x: -16, z: 10, r: 6 },
    { x: 14, z: -8, r: 5 },
  ];
  const lilyMat = mat(0x3f6a34);
  for (const p of pools) {
    const pool = murkyPool(p.r);
    pool.position.set(p.x, h(p.x, p.z) + 0.04, p.z);
    g.add(pool);
    const reeds = reedPatch(rng, 90, p.r + 3);
    reeds.position.set(p.x, h(p.x, p.z), p.z);
    g.add(reeds);
    for (let i = 0; i < 5; i++) {
      const a = rng() * Math.PI * 2, rr = rng() * p.r * 0.8;
      const pad = new THREE.Mesh(new THREE.CircleGeometry(0.4 + rng() * 0.3, 7), lilyMat);
      pad.rotation.x = -Math.PI / 2;
      pad.position.set(p.x + Math.cos(a) * rr, h(p.x, p.z) + 0.06, p.z + Math.sin(a) * rr);
      g.add(pad);
    }
  }

  // Dead trees + the odd rock + mushroom clump.
  for (let i = 0; i < 8; i++) {
    const a = rng() * Math.PI * 2, r = 6 + rng() * 24;
    place(g, deadTree(rng), h, Math.cos(a) * r, Math.sin(a) * r, rng() * Math.PI);
  }
  for (let i = 0; i < 4; i++) {
    const a = rng() * Math.PI * 2, r = 8 + rng() * 22;
    place(g, createRockFormation({ seed: i + 1, count: 4, scale: 0.7 }), h, Math.cos(a) * r, Math.sin(a) * r, rng() * 6);
  }
  return g;
}

/** Walk the placed regions and collect world-space colliders for solid props. */
function extractColliders(group: THREE.Object3D): Collider[] {
  const out: Collider[] = [];
  group.updateMatrixWorld(true);
  const pos = new THREE.Vector3();
  const scl = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const rot = new THREE.Euler();
  group.traverse((obj) => {
    const c = obj.userData.collider as
      | { type: 'cylinder'; radius: number; height: number }
      | { type: 'box'; width: number; depth: number; height: number }
      | undefined;
    if (!c) return;
    obj.getWorldPosition(pos);
    obj.getWorldScale(scl);
    if (c.type === 'cylinder') {
      out.push({ type: 'cylinder', x: pos.x, z: pos.z, radius: c.radius * Math.max(scl.x, scl.z), height: c.height * scl.y });
    } else {
      obj.getWorldQuaternion(quat);
      rot.setFromQuaternion(quat, 'YXZ');
      out.push({ type: 'box', x: pos.x, z: pos.z, width: c.width * scl.x, depth: c.depth * scl.z, height: c.height * scl.y, rotation: rot.y });
    }
  });
  return out;
}

/**
 * Region centers + clearing radii. Exported so the forest can keep its trees
 * out of the built-up / boggy areas (so each region reads as a clearing).
 */
export const REGION_FOOTPRINTS: ReadonlyArray<{ x: number; z: number; r: number }> = [
  { x: 0, z: -88, r: 30 },   // town
  { x: 86, z: 16, r: 30 },   // farmland
  { x: -76, z: 70, r: 34 },  // swamp
];

export function createRegions(height: HeightFn): THREE.Group {
  const group = new THREE.Group();
  group.name = 'Regions';
  group.add(buildTown(height, new THREE.Vector3(0, 0, -88)));
  group.add(buildFarmland(height, new THREE.Vector3(86, 0, 16)));
  group.add(buildSwamp(height, new THREE.Vector3(-76, 0, 70)));
  group.userData.colliders = extractColliders(group);
  return group;
}
