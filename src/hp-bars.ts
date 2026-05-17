/**
 * HP-bar overlay — draws a small floating bar above any prey that's wounded
 * or recently engaged. Bars are Sprite billboards (always face camera) with
 * a canvas texture, so they're cheap and scale-correct across the scene.
 *
 * The overlay scans all registered prey providers each frame and reuses a
 * pool of sprites keyed by mesh.uuid, so spawning/despawning prey doesn't
 * leak GPU resources.
 */

import * as THREE from 'three';
import type { PreyRef } from './prey';

interface Tracked {
  sprite: THREE.Sprite;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  lastHp: number;
  lastMax: number;
  lastSeen: number;
  meshRef: THREE.Object3D;
}

const FADE_DELAY_MS = 4000;   // bar visible this long after last damage

export interface PreyEnumerator {
  forEachPrey(fn: (ref: PreyRef) => void): void;
}

export class HpBarOverlay {
  private scene: THREE.Scene;
  private providers: PreyEnumerator[];
  private tracked = new Map<string, Tracked>();

  constructor(scene: THREE.Scene, providers: PreyEnumerator[]) {
    this.scene = scene;
    this.providers = providers;
  }

  update(): void {
    const now = performance.now();
    const seen = new Set<string>();

    for (const prov of this.providers) {
      prov.forEachPrey((ref) => {
        // Only render bars for wounded or recently-hit prey — full-HP, undamaged
        // animals don't need clutter.
        const isWounded = ref.hp < ref.maxHp;
        if (!isWounded) return;

        const key = ref.mesh.uuid;
        seen.add(key);
        let t = this.tracked.get(key);
        if (!t) {
          t = this.makeBar(ref.mesh);
          this.tracked.set(key, t);
        }
        if (t.lastHp !== ref.hp || t.lastMax !== ref.maxHp) {
          this.paint(t, ref.hp, ref.maxHp);
          t.lastHp = ref.hp;
          t.lastMax = ref.maxHp;
        }
        t.lastSeen = now;

        // Position above the prey mesh (use bounding sphere center + radius).
        ref.mesh.updateWorldMatrix(true, false);
        const pos = new THREE.Vector3();
        ref.mesh.getWorldPosition(pos);
        t.sprite.position.set(pos.x, pos.y + 1.6, pos.z);
        t.sprite.visible = true;
      });
    }

    // Hide / drop bars whose owners have gone stale.
    for (const [key, t] of this.tracked) {
      if (!seen.has(key) || now - t.lastSeen > FADE_DELAY_MS) {
        t.sprite.visible = false;
        if (now - t.lastSeen > FADE_DELAY_MS + 4000 || !t.meshRef.parent) {
          this.scene.remove(t.sprite);
          t.texture.dispose();
          (t.sprite.material as THREE.SpriteMaterial).dispose();
          this.tracked.delete(key);
        }
      }
    }
  }

  private makeBar(mesh: THREE.Object3D): Tracked {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 24;
    const ctx = canvas.getContext('2d')!;
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.4, 0.26, 1);
    sprite.renderOrder = 998;
    this.scene.add(sprite);
    return {
      sprite, canvas, ctx, texture,
      lastHp: -1, lastMax: -1, lastSeen: 0, meshRef: mesh,
    };
  }

  private paint(t: Tracked, hp: number, maxHp: number): void {
    const { ctx, canvas, texture } = t;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const pct = Math.max(0, Math.min(1, hp / maxHp));
    // Black frame
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Background bar
    ctx.fillStyle = '#3a2222';
    ctx.fillRect(4, 4, canvas.width - 8, canvas.height - 8);
    // Filled portion — colour shifts red → orange → green from low to high.
    let r = 80, g = 200, b = 60;
    if (pct < 0.6) { r = 220; g = 160; b = 50; }
    if (pct < 0.3) { r = 220; g = 60; b = 50; }
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(4, 4, (canvas.width - 8) * pct, canvas.height - 8);
    // Text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${Math.ceil(hp)}/${maxHp}`, canvas.width / 2, canvas.height / 2);
    texture.needsUpdate = true;
  }
}
