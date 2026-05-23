import * as THREE from 'three';
import type { Collider } from './arena';
import { getTerrainHeight } from './terrain';
import { clampToBounds } from './prey';

export interface AnimalPhysicsConfig {
  radius: number;
  bounds: number;
  heightData: Uint8Array | null;
  colliders: Collider[];
}

export function resolveAnimalPhysics(pos: THREE.Vector3, cfg: AnimalPhysicsConfig): number {
  let groundY = getTerrainHeight(pos.x, pos.z, cfg.heightData);

  for (const col of cfg.colliders) {
    if (col.type === 'cylinder') {
      const dx = pos.x - col.x;
      const dz = pos.z - col.z;
      const dist = Math.hypot(dx, dz);
      const minDist = col.radius + cfg.radius;

      if (col.climbable && col.topY !== undefined && dist < col.radius + cfg.radius * 0.8) {
        groundY = Math.max(groundY, col.topY);
      } else if (dist < minDist && dist > 0.001) {
        const push = minDist - dist;
        pos.x += (dx / dist) * push;
        pos.z += (dz / dist) * push;
      }
    } else {
      const cosR = Math.cos(col.rotation);
      const sinR = Math.sin(col.rotation);
      const dx = pos.x - col.x;
      const dz = pos.z - col.z;
      const localX = dx * cosR - dz * sinR;
      const localZ = dx * sinR + dz * cosR;
      const halfW = col.width / 2;
      const halfD = col.depth / 2;

      if (Math.abs(localX) >= halfW + cfg.radius || Math.abs(localZ) >= halfD + cfg.radius) continue;

      const overlapX = halfW + cfg.radius - Math.abs(localX);
      const overlapZ = halfD + cfg.radius - Math.abs(localZ);
      if (overlapX <= 0 || overlapZ <= 0) continue;

      if (overlapX < overlapZ) {
        const pushLocalX = overlapX * Math.sign(localX || 1);
        pos.x += pushLocalX * cosR;
        pos.z += pushLocalX * sinR;
      } else {
        const pushLocalZ = overlapZ * Math.sign(localZ || 1);
        pos.x -= pushLocalZ * sinR;
        pos.z += pushLocalZ * cosR;
      }
    }
  }

  clampToBounds(pos, cfg.bounds);
  return groundY;
}
