/**
 * Procedural low-poly cows that wander the arena.
 * Larger and slower than the other animals, with a barrel body, small
 * horns, an udder, and a thin tail that ends in a tuft.
 */

import * as THREE from 'three';
import { getTerrainHeight } from './terrain';
import { Holdable, HoldableProvider } from './holdable';

const WALK_SPEED = 1.0;
const TURN_RATE = 1.6;
const REACH_RADIUS = 1.5;
const PAUSE_CHANCE = 0.5;
const PAUSE_TIME = [2.5, 6.0];

const PALETTE = [
  { body: 0xf2ede3, spot: 0x1a1a1a }, // classic holstein white + black
  { body: 0xb8845a, spot: 0xffffff }, // brown + white
  { body: 0x2a2422, spot: 0xe8d4a8 }, // black + cream
  { body: 0xd9c5a0, spot: 0x6b3e22 }  // tan + dark brown
];

interface CowParts {
  group: THREE.Group;
  legs: { mesh: THREE.Mesh; phase: number }[];
  tail: THREE.Object3D;
  tailTuft: THREE.Object3D;
  head: THREE.Object3D;
  body: THREE.Object3D;
}

interface Cow {
  parts: CowParts;
  pos: THREE.Vector3;
  yaw: number;
  target: THREE.Vector3;
  pauseTimer: number;
  walkPhase: number;
  bounds: number;
  heightData: Uint8Array | null;
  held: boolean;
}

function buildCowMesh(): CowParts {
  const palette = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const bodyMat = new THREE.MeshStandardMaterial({ color: palette.body, roughness: 0.9, metalness: 0.0 });
  const spotMat = new THREE.MeshStandardMaterial({ color: palette.spot, roughness: 0.9, metalness: 0.0 });
  const hornMat = new THREE.MeshStandardMaterial({ color: 0xe8dcc0, roughness: 0.5 });
  const noseMat = new THREE.MeshStandardMaterial({ color: 0xd9a4a4, roughness: 0.7 });
  const udderMat = new THREE.MeshStandardMaterial({ color: 0xe8a8a8, roughness: 0.8 });
  const hoofMat = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 0.7 });

  const group = new THREE.Group();
  group.name = 'Cow';

  // Body — chunky barrel
  const bodyGeo = new THREE.BoxGeometry(0.75, 0.7, 1.4);
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 0.95;
  body.castShadow = true;
  group.add(body);

  // Random spots on the flanks
  const spotCount = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < spotCount; i++) {
    const w = 0.18 + Math.random() * 0.18;
    const h = 0.14 + Math.random() * 0.14;
    const spotGeo = new THREE.BoxGeometry(w, h, 0.05);
    const side = Math.random() < 0.5 ? -1 : 1;
    const spot = new THREE.Mesh(spotGeo, spotMat);
    spot.position.set(
      side * 0.38,
      0.78 + Math.random() * 0.3,
      (Math.random() - 0.5) * 1.1
    );
    spot.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
    group.add(spot);
  }
  // Top spot
  const topSpotGeo = new THREE.BoxGeometry(0.4, 0.05, 0.5);
  const topSpot = new THREE.Mesh(topSpotGeo, spotMat);
  topSpot.position.set((Math.random() - 0.5) * 0.2, 1.31, (Math.random() - 0.5) * 0.4);
  group.add(topSpot);

  // Head pivot at front
  const headPivot = new THREE.Group();
  headPivot.position.set(0, 1.05, 0.78);
  group.add(headPivot);

  const neckGeo = new THREE.BoxGeometry(0.42, 0.42, 0.32);
  const neck = new THREE.Mesh(neckGeo, bodyMat);
  neck.position.set(0, -0.06, 0.04);
  neck.castShadow = true;
  headPivot.add(neck);

  const headGeo = new THREE.BoxGeometry(0.46, 0.42, 0.5);
  const head = new THREE.Mesh(headGeo, bodyMat);
  head.position.set(0, 0.04, 0.38);
  head.castShadow = true;
  headPivot.add(head);

  // Snout (lighter)
  const snoutGeo = new THREE.BoxGeometry(0.34, 0.22, 0.2);
  const snout = new THREE.Mesh(snoutGeo, noseMat);
  snout.position.set(0, -0.08, 0.62);
  headPivot.add(snout);

  // Nostrils
  const nostrilGeo = new THREE.BoxGeometry(0.05, 0.05, 0.04);
  const nostrilL = new THREE.Mesh(nostrilGeo, hoofMat);
  nostrilL.position.set(-0.08, -0.05, 0.72);
  headPivot.add(nostrilL);
  const nostrilR = nostrilL.clone();
  nostrilR.position.x = 0.08;
  headPivot.add(nostrilR);

  // Eyes
  const eyeGeo = new THREE.BoxGeometry(0.07, 0.07, 0.04);
  const eyeL = new THREE.Mesh(eyeGeo, hoofMat);
  eyeL.position.set(-0.13, 0.1, 0.62);
  headPivot.add(eyeL);
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.13;
  headPivot.add(eyeR);

  // Floppy side ears
  const earGeo = new THREE.BoxGeometry(0.16, 0.1, 0.22);
  const earL = new THREE.Mesh(earGeo, bodyMat);
  earL.position.set(-0.27, 0.16, 0.22);
  earL.rotation.z = 0.4;
  headPivot.add(earL);
  const earR = earL.clone();
  earR.position.x = 0.27;
  earR.rotation.z = -0.4;
  headPivot.add(earR);

  // Small horns — short cones
  const hornGeo = new THREE.ConeGeometry(0.05, 0.18, 6);
  const hornL = new THREE.Mesh(hornGeo, hornMat);
  hornL.position.set(-0.16, 0.28, 0.22);
  hornL.rotation.z = 0.5;
  headPivot.add(hornL);
  const hornR = hornL.clone();
  hornR.position.x = 0.16;
  hornR.rotation.z = -0.5;
  headPivot.add(hornR);

  // Udder under the back belly
  const udderGeo = new THREE.BoxGeometry(0.32, 0.18, 0.32);
  const udder = new THREE.Mesh(udderGeo, udderMat);
  udder.position.set(0, 0.55, -0.4);
  group.add(udder);
  // Teats
  const teatGeo = new THREE.BoxGeometry(0.05, 0.08, 0.05);
  for (const [x, z] of [[-0.08, -0.32], [0.08, -0.32], [-0.08, -0.48], [0.08, -0.48]]) {
    const teat = new THREE.Mesh(teatGeo, udderMat);
    teat.position.set(x, 0.43, z);
    group.add(teat);
  }

  // Tail — root pivot at back, with a tuft pivot at the tip
  const tailRoot = new THREE.Group();
  tailRoot.position.set(0, 1.2, -0.7);
  tailRoot.rotation.x = -0.2;
  group.add(tailRoot);

  const tailGeo = new THREE.BoxGeometry(0.07, 0.07, 0.6);
  const tail = new THREE.Mesh(tailGeo, bodyMat);
  tail.position.z = -0.3;
  tail.castShadow = true;
  tailRoot.add(tail);

  // Tuft pivot at the end of the tail
  const tuftPivot = new THREE.Group();
  tuftPivot.position.set(0, 0, -0.6);
  tailRoot.add(tuftPivot);
  const tuftGeo = new THREE.BoxGeometry(0.16, 0.16, 0.18);
  const tuft = new THREE.Mesh(tuftGeo, spotMat);
  tuft.position.z = -0.09;
  tuft.castShadow = true;
  tuftPivot.add(tuft);

  // Legs — thicker and longer than dog
  const legs: CowParts['legs'] = [];
  const legPositions: [number, number, number][] = [
    [-0.28, 0.55, 0],
    [0.28, 0.55, Math.PI],
    [-0.28, -0.55, Math.PI],
    [0.28, -0.55, 0]
  ];
  for (const [x, z, phase] of legPositions) {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.78, z);
    group.add(pivot);

    const legGeo = new THREE.BoxGeometry(0.18, 0.7, 0.18);
    const leg = new THREE.Mesh(legGeo, bodyMat);
    leg.position.y = -0.35;
    leg.castShadow = true;
    pivot.add(leg);

    const hoofGeo = new THREE.BoxGeometry(0.2, 0.1, 0.22);
    const hoof = new THREE.Mesh(hoofGeo, hoofMat);
    hoof.position.y = -0.74;
    pivot.add(hoof);

    legs.push({ mesh: pivot as unknown as THREE.Mesh, phase });
  }

  return { group, legs, tail: tailRoot, tailTuft: tuftPivot, head: headPivot, body };
}

function pickTarget(bounds: number): THREE.Vector3 {
  const r = bounds * 0.85;
  return new THREE.Vector3(
    (Math.random() * 2 - 1) * r,
    0,
    (Math.random() * 2 - 1) * r
  );
}

export class CowHerd implements HoldableProvider {
  private cows: Cow[] = [];
  private group: THREE.Group;
  private bounds: number;
  private heightData: Uint8Array | null;

  constructor(scene: THREE.Scene, count: number, bounds: number, heightData: Uint8Array | null) {
    this.bounds = bounds;
    this.heightData = heightData;
    this.group = new THREE.Group();
    this.group.name = 'CowHerd';
    scene.add(this.group);

    for (let i = 0; i < count; i++) this.spawnCow();
  }

  private spawnCow(): void {
    const parts = buildCowMesh();
    const start = pickTarget(this.bounds);
    const cow: Cow = {
      parts,
      pos: start.clone(),
      yaw: Math.random() * Math.PI * 2,
      target: pickTarget(this.bounds),
      pauseTimer: Math.random() * 2,
      walkPhase: Math.random() * Math.PI * 2,
      bounds: this.bounds,
      heightData: this.heightData,
      held: false
    };
    parts.group.position.copy(start);
    parts.group.rotation.y = cow.yaw;
    this.group.add(parts.group);
    this.cows.push(cow);
  }

  update(delta: number): void {
    for (const cow of this.cows) {
      if (cow.held) continue;
      this.updateCow(cow, delta);
    }
  }

  findNearestHoldable(pos: THREE.Vector3, maxDist: number): Holdable | null {
    let best: Cow | null = null;
    let bestSq = maxDist * maxDist;
    for (const cow of this.cows) {
      if (cow.held) continue;
      const dx = cow.pos.x - pos.x;
      const dz = cow.pos.z - pos.z;
      const d = dx * dx + dz * dz;
      if (d < bestSq) { bestSq = d; best = cow; }
    }
    if (!best) return null;
    return this.makeHoldable(best);
  }

  private makeHoldable(cow: Cow): Holdable {
    return {
      mesh: cow.parts.group,
      get held() { return cow.held; },
      set held(v: boolean) { cow.held = v; },
      pickUp: () => { cow.held = true; },
      releaseAt: (pos, yaw) => {
        cow.held = false;
        cow.pos.set(pos.x, 0, pos.z);
        cow.yaw = yaw;
        cow.target = pickTarget(cow.bounds);
        cow.pauseTimer = 0.6 + Math.random() * 0.6;
        for (const leg of cow.parts.legs) leg.mesh.rotation.x = 0;
        cow.parts.body.position.y = 0.95;
        cow.parts.head.rotation.x = 0;
        cow.parts.tail.rotation.y = 0;
        cow.parts.tailTuft.rotation.set(0, 0, 0);
      }
    };
  }

  private updateCow(cow: Cow, delta: number): void {
    const moving = cow.pauseTimer <= 0;

    if (!moving) {
      cow.pauseTimer -= delta;
      // Idle: lazy tail flick to swat flies, slow head dip (grazing)
      const t = performance.now() * 0.003;
      cow.parts.tail.rotation.y = Math.sin(t) * 0.25;
      cow.parts.tailTuft.rotation.y = Math.sin(t - 0.6) * 0.5;
      cow.parts.head.rotation.x = 0.2 + Math.sin(t * 0.4) * 0.15;
      for (const leg of cow.parts.legs) leg.mesh.rotation.x *= 0.9;
      this.applyTerrain(cow);
      return;
    }

    cow.parts.head.rotation.x *= 0.9;

    const dx = cow.target.x - cow.pos.x;
    const dz = cow.target.z - cow.pos.z;
    const distSq = dx * dx + dz * dz;

    if (distSq < REACH_RADIUS * REACH_RADIUS) {
      if (Math.random() < PAUSE_CHANCE) {
        cow.pauseTimer = PAUSE_TIME[0] + Math.random() * (PAUSE_TIME[1] - PAUSE_TIME[0]);
      }
      cow.target = pickTarget(cow.bounds);
      return;
    }

    const desiredYaw = Math.atan2(dx, dz);
    let yawDiff = desiredYaw - cow.yaw;
    while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
    while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
    const turn = Math.max(-TURN_RATE * delta, Math.min(TURN_RATE * delta, yawDiff));
    cow.yaw += turn;

    const turnPenalty = 1 - Math.min(1, Math.abs(yawDiff) / Math.PI) * 0.6;
    const speed = WALK_SPEED * turnPenalty;
    cow.pos.x += Math.sin(cow.yaw) * speed * delta;
    cow.pos.z += Math.cos(cow.yaw) * speed * delta;

    if (Math.abs(cow.pos.x) > cow.bounds || Math.abs(cow.pos.z) > cow.bounds) {
      cow.pos.x = Math.max(-cow.bounds, Math.min(cow.bounds, cow.pos.x));
      cow.pos.z = Math.max(-cow.bounds, Math.min(cow.bounds, cow.pos.z));
      cow.target = pickTarget(cow.bounds);
    }

    // Slower, heavier walk cycle
    cow.walkPhase += delta * 6 * turnPenalty;
    const swing = Math.sin(cow.walkPhase) * 0.55;
    const swingOpp = Math.sin(cow.walkPhase + Math.PI) * 0.55;
    cow.parts.legs[0].mesh.rotation.x = swing;
    cow.parts.legs[1].mesh.rotation.x = swingOpp;
    cow.parts.legs[2].mesh.rotation.x = swingOpp;
    cow.parts.legs[3].mesh.rotation.x = swing;

    // Heavier body bob
    const bob = Math.abs(Math.sin(cow.walkPhase * 2)) * 0.06;
    cow.parts.body.position.y = 0.95 + bob;

    // Tail swings gently; tuft trails with phase lag and bigger amplitude
    cow.parts.tail.rotation.y = Math.sin(cow.walkPhase * 0.7) * 0.3;
    cow.parts.tailTuft.rotation.y = Math.sin(cow.walkPhase * 0.7 - 0.6) * 0.7;

    cow.parts.head.rotation.x = Math.sin(cow.walkPhase) * 0.06;

    this.applyTerrain(cow);
  }

  private applyTerrain(cow: Cow): void {
    const y = getTerrainHeight(cow.pos.x, cow.pos.z, cow.heightData);
    cow.parts.group.position.set(cow.pos.x, y, cow.pos.z);
    cow.parts.group.rotation.y = cow.yaw;
  }
}
