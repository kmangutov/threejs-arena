/**
 * Collider debug overlay — toggleable wireframe rendering of every active
 * collider in the world (arena pillars + ramps + ecosystem huts + rocks).
 *
 * Each frame the overlay rebuilds from the live collider list so newly-added
 * or regenerated props are reflected immediately.
 *
 * Hotkey: F4 toggles. UI badge in the corner shows current state.
 */

import * as THREE from 'three';
import type { Collider, CylinderCollider, BoxCollider } from './arena';

interface Options {
  scene: THREE.Scene;
  getColliders: () => Collider[];
}

export class ColliderDebug {
  visible = false;
  private readonly scene: THREE.Scene;
  private readonly getColliders: () => Collider[];
  private root: THREE.Group;
  private badge: HTMLDivElement;

  constructor(opts: Options) {
    this.scene = opts.scene;
    this.getColliders = opts.getColliders;

    this.root = new THREE.Group();
    this.root.name = 'ColliderDebug';
    this.root.visible = false;
    this.root.userData.editorIgnore = true;
    this.scene.add(this.root);

    this.badge = document.createElement('div');
    this.badge.style.cssText = `
      position: fixed; top: 10px; left: 50%; transform: translateX(-50%);
      background: rgba(20,20,28,0.85); color: #ffd57a; border: 1px solid #555;
      border-radius: 4px; padding: 4px 10px; font: 11px monospace;
      z-index: 1000; pointer-events: auto; cursor: pointer;
    `;
    this.badge.textContent = 'F4 · Hitboxes: OFF';
    this.badge.title = 'Toggle collider visualization';
    this.badge.addEventListener('click', () => this.toggle());
    document.body.appendChild(this.badge);

    window.addEventListener('keydown', (e) => {
      if (e.code === 'F4') { e.preventDefault(); this.toggle(); }
    });
  }

  toggle(): void {
    this.visible = !this.visible;
    this.root.visible = this.visible;
    this.badge.textContent = `F4 · Hitboxes: ${this.visible ? 'ON' : 'OFF'}`;
    this.badge.style.color = this.visible ? '#7ef07e' : '#ffd57a';
    if (this.visible) this.rebuild();
  }

  /** Rebuild only when visible — debug overlay shouldn't cost anything when off. */
  update(): void {
    if (this.visible) this.rebuild();
  }

  private rebuild(): void {
    for (const c of [...this.root.children]) {
      this.root.remove(c);
      (c as THREE.Mesh).geometry?.dispose();
      const m = (c as THREE.Mesh).material;
      if (Array.isArray(m)) m.forEach(x => x.dispose());
      else (m as THREE.Material | undefined)?.dispose();
    }
    const colliders = this.getColliders();
    for (const col of colliders) {
      const wire = makeWire(col);
      if (wire) this.root.add(wire);
    }
  }
}

function makeWire(col: Collider): THREE.Object3D | null {
  if (col.type === 'cylinder') return cylinderWire(col);
  if (col.type === 'box') return boxWire(col);
  return null;
}

function cylinderWire(col: CylinderCollider): THREE.LineSegments {
  const geo = new THREE.EdgesGeometry(new THREE.CylinderGeometry(col.radius, col.radius, col.height, 16));
  const mat = new THREE.LineBasicMaterial({ color: 0x00ff88, depthTest: false, transparent: true, opacity: 0.85 });
  const line = new THREE.LineSegments(geo, mat);
  line.position.set(col.x, col.height / 2, col.z);
  line.renderOrder = 999;
  return line;
}

function boxWire(col: BoxCollider): THREE.LineSegments {
  const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(col.width, col.height, col.depth));
  const mat = new THREE.LineBasicMaterial({ color: 0x00aaff, depthTest: false, transparent: true, opacity: 0.85 });
  const line = new THREE.LineSegments(geo, mat);
  line.position.set(col.x, col.height / 2, col.z);
  line.rotation.y = col.rotation;
  line.renderOrder = 999;
  return line;
}
