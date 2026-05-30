import { describe, expect, it } from 'vitest';
import {
  addWallPlaneCollider,
  collectStructureColliders,
  createStable,
  createVillageGate,
} from '../procedural-structures.js';
import * as THREE from 'three';

describe('procedural structure colliders', () => {
  it('compiles authored planes into transformed runtime boxes', () => {
    const root = new THREE.Group();
    root.position.set(4, 0, -2);
    root.rotation.y = Math.PI / 2;
    root.scale.setScalar(2);
    addWallPlaneCollider(root, {
      x: 1,
      z: -0.5,
      width: 3,
      height: 2,
      thickness: 0.2,
      rotation: Math.PI / 4,
    });

    const [collider] = collectStructureColliders(root);
    expect(collider.type).toBe('box');
    expect(collider.x).toBeCloseTo(3);
    expect(collider.z).toBeCloseTo(-4);
    expect(collider.width).toBeCloseTo(6);
    expect(collider.depth).toBeCloseTo(0.4);
    expect(collider.height).toBeCloseTo(4);
    expect(collider.rotation).toBeCloseTo(Math.PI * 0.75);
  });

  it('keeps the stable enterable with wall-plane partitions', () => {
    const colliders = collectStructureColliders(createStable());
    expect(colliders).toHaveLength(5);
    expect(colliders.every(collider => collider.type === 'box')).toBe(true);
  });

  it('keeps the village gate opening between separate post cylinders', () => {
    const colliders = collectStructureColliders(createVillageGate());
    expect(colliders).toHaveLength(2);
    expect(colliders.every(collider => collider.type === 'cylinder')).toBe(true);
    expect(colliders.map(collider => collider.x)).toEqual([-2.15, 2.15]);
  });
});
