/**
 * Floating combat-text numbers (RuneScape-style font, no background).
 * Damage = red, heal = green. New numbers stagger upward so multiple hits
 * on the same target don't overlap.
 */

import * as THREE from 'three';

export type SplatKind = 'damage' | 'heal';

interface ActiveSplat {
  sprite: THREE.Sprite;
  age: number;
  life: number;
  basePos: THREE.Vector3;
  followTarget: THREE.Object3D | null;
  baseY: number;             // starting Y offset above target
  riseOffset: number;        // extra Y added per stack so newer splats sit higher
}

const SPLAT_LIFE = 1.2;
const SPLAT_RISE = 1.3;
const TEXTURE_SIZE = 128;
const STACK_OFFSET = 0.55;   // world units of vertical separation per active splat on the same target

const COLORS: Record<SplatKind, string> = {
  damage: '#ff2a2a',
  heal: '#2cd64a'
};

let fontReady = false;
const FONT_FAMILY = 'RuneScape, "RuneScape UF", "Press Start 2P", Impact, sans-serif';

function ensureFontLoaded(): void {
  if (fontReady) return;
  fontReady = true;
  if ((document as any).fonts?.load) {
    (document as any).fonts.load(`bold 64px RuneScape`).catch(() => {});
  }
}

function buildTextTexture(amount: number, color: string): THREE.CanvasTexture {
  ensureFontLoaded();
  const canvas = document.createElement('canvas');
  canvas.width = TEXTURE_SIZE;
  canvas.height = TEXTURE_SIZE;
  const ctx = canvas.getContext('2d')!;

  const cx = TEXTURE_SIZE / 2;
  const cy = TEXTURE_SIZE / 2;

  const text = String(amount);
  ctx.font = `bold 64px ${FONT_FAMILY}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Heavy black outline for readability over any background.
  ctx.lineWidth = 8;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(0,0,0,0.95)';
  ctx.strokeText(text, cx, cy);

  ctx.fillStyle = color;
  ctx.fillText(text, cx, cy);

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

export class DamageSplatSystem {
  private scene: THREE.Scene;
  private active: ActiveSplat[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  spawnDamage(target: THREE.Object3D, amount: number): void {
    this.spawn(target, amount, 'damage');
  }

  spawnHeal(target: THREE.Object3D, amount: number): void {
    this.spawn(target, amount, 'heal');
  }

  spawn(target: THREE.Object3D, amount: number, kind: SplatKind = 'damage'): void {
    const tex = buildTextTexture(amount, COLORS[kind]);
    const material = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false,
      depthWrite: false
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.3, 1.3, 1);
    sprite.renderOrder = 999;

    // Stack: count current active splats already on this target so new ones
    // sit above the existing column instead of stomping on them.
    const stackCount = this.active.reduce(
      (n, s) => (s.followTarget === target ? n + 1 : n),
      0
    );

    const baseY = 2.3 + stackCount * STACK_OFFSET;
    const basePos = target.position.clone();
    basePos.x += (Math.random() - 0.5) * 0.5;
    basePos.z += (Math.random() - 0.5) * 0.3;

    sprite.position.copy(basePos);
    sprite.position.y += baseY;

    this.scene.add(sprite);
    this.active.push({
      sprite,
      age: 0,
      life: SPLAT_LIFE,
      basePos,
      followTarget: target,
      baseY,
      riseOffset: 0
    });
  }

  update(delta: number): void {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const s = this.active[i];
      s.age += delta;
      const t = s.age / s.life;
      if (t >= 1) {
        this.scene.remove(s.sprite);
        s.sprite.material.map?.dispose();
        s.sprite.material.dispose();
        this.active.splice(i, 1);
        continue;
      }

      if (s.followTarget && s.followTarget.parent) {
        s.basePos.x = s.followTarget.position.x;
        s.basePos.z = s.followTarget.position.z;
      }

      s.sprite.position.x = s.basePos.x;
      s.sprite.position.z = s.basePos.z;
      s.sprite.position.y = s.basePos.y + s.baseY + t * SPLAT_RISE;

      const opacity = t < 0.1 ? t / 0.1 : (t > 0.7 ? Math.max(0, 1 - (t - 0.7) / 0.3) : 1);
      s.sprite.material.opacity = opacity;
      const scale = 1.3 * (t < 0.1 ? 0.7 + (t / 0.1) * 0.3 : 1);
      s.sprite.scale.set(scale, scale, 1);
    }
  }
}
