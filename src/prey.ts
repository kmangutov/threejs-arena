/**
 * Shared prey contract for animal modules that can be hunted by predators
 * (wolves). Each huntable animal mutates its own internal state on
 * damage()/scare() and exposes its current position + alive flag through
 * the lightweight PreyRef wrapper.
 */

import * as THREE from 'three';

export interface PreyRef {
  mesh: THREE.Object3D;
  /** Live world position (updated each frame by the owner). */
  readonly pos: THREE.Vector3;
  readonly alive: boolean;
  readonly hp: number;
  readonly maxHp: number;
  /** Returns true if this hit killed the prey. */
  damage(amount: number): boolean;
  /** Mark prey as panicked away from a threat for `durationMs`. */
  scare(fromX: number, fromZ: number, durationMs: number): void;
}

export interface PreyProvider {
  findNearestPrey(pos: THREE.Vector3, maxDist: number): PreyRef | null;
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
  };
}
