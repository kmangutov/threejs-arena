import * as THREE from 'three';

/**
 * A creature the player can pick up, carry, and release. Implementations
 * own the mesh and pause their own AI while `held` is true.
 */
export interface Holdable {
  /** World mesh to reparent into the carry slot. */
  mesh: THREE.Object3D;
  /** True while parented to the player; AI/physics should idle. */
  held: boolean;
  /** Marks this creature as picked up. Caller handles reparenting. */
  pickUp(): void;
  /** Snap creature world-state to release pos and resume AI. */
  releaseAt(pos: THREE.Vector3, yaw: number): void;
}

export interface HoldableProvider {
  findNearestHoldable(pos: THREE.Vector3, maxDist: number): Holdable | null;
}
