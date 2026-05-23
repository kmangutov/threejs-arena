/**
 * Shared prey contract for animal modules that can be hunted by predators
 * (wolves). Each huntable animal mutates its own internal state on
 * damage()/scare() and exposes its current position + alive flag through
 * the lightweight PreyRef wrapper.
 */

import * as THREE from 'three';
import type { EntityRefLike, EntityTeam } from './game-entity';

export interface PreyRef extends EntityRefLike {
  id: string;
  name: string;
  team: EntityTeam;
  mesh: THREE.Object3D;
  /** Live world position (updated each frame by the owner). */
  readonly pos: THREE.Vector3;
  readonly alive: boolean;
  readonly hp: number;
  readonly maxHp: number;
  /** Returns true if this hit killed the prey. */
  damage(amount: number, attacker?: EntityRefLike): boolean;
  /** Returns the actual amount restored. */
  heal(amount: number): number;
  /** Mark prey as panicked away from a threat for `durationMs`. */
  scare(fromX: number, fromZ: number, durationMs: number): void;
}

export interface PreyProvider {
  findNearestPrey(pos: THREE.Vector3, maxDist: number): PreyRef | null;
  forEachPrey(fn: (ref: PreyRef) => void): void;
}

/** State pack reused by each animal — keeps the per-module diff small. */
export interface PreyState {
  hp: number;
  maxHp: number;
  dead: boolean;
  deadTimer: number;
  fleeUntil: number;
  fleeFromX: number;
  fleeFromZ: number;
  /** Last time HP changed — drives the HP bar fade. */
  lastHitAt: number;
  combatTarget: PreyRef | null;
  attackTimer: number;
}

export function makePreyState(maxHp: number): PreyState {
  return {
    hp: maxHp,
    maxHp,
    dead: false,
    deadTimer: 0,
    fleeUntil: 0,
    fleeFromX: 0,
    fleeFromZ: 0,
    lastHitAt: 0,
    combatTarget: null,
    attackTimer: 0,
  };
}

export function clampToBounds(pos: THREE.Vector3, bounds: number): boolean {
  const x = pos.x;
  const z = pos.z;
  pos.x = Math.max(-bounds, Math.min(bounds, pos.x));
  pos.z = Math.max(-bounds, Math.min(bounds, pos.z));
  return pos.x !== x || pos.z !== z;
}

export function emitDamageSplat(mesh: THREE.Object3D, amount: number): void {
  mesh.userData.damageSplats?.spawnDamage?.(mesh, amount);
}

export function emitHealSplat(mesh: THREE.Object3D, amount: number): void {
  mesh.userData.damageSplats?.spawnHeal?.(mesh, amount);
}

export function healPreyState(state: PreyState, amount: number): number {
  if (state.dead || state.hp >= state.maxHp) return 0;
  const before = state.hp;
  state.hp = Math.min(state.maxHp, state.hp + amount);
  state.lastHitAt = performance.now();
  return state.hp - before;
}
