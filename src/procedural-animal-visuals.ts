import * as THREE from 'three';

export type FurPattern = 'mottle' | 'spots' | 'stripes';

export interface AnimalActionState {
  flinchTimer: number;
  attackTimer: number;
  grazeTimer: number;
}

export const FLINCH_DURATION = 0.3;
export const ATTACK_DURATION = 0.42;
export const GRAZE_DURATION = 3.4;

export function makeAnimalActionState(): AnimalActionState {
  return { flinchTimer: 0, attackTimer: 0, grazeTimer: 0 };
}

export function tickAnimalActions(actions: AnimalActionState, delta: number): void {
  actions.flinchTimer = Math.max(0, actions.flinchTimer - delta);
  actions.attackTimer = Math.max(0, actions.attackTimer - delta);
  actions.grazeTimer = Math.max(0, actions.grazeTimer - delta);
}

export function triggerFlinch(actions: AnimalActionState): void {
  actions.flinchTimer = FLINCH_DURATION;
}

export function triggerAttack(actions: AnimalActionState): void {
  actions.attackTimer = ATTACK_DURATION;
}

export function triggerGraze(actions: AnimalActionState): void {
  actions.grazeTimer = GRAZE_DURATION;
}

export function actionPulse(timer: number, duration: number): number {
  if (timer <= 0) return 0;
  return Math.sin((1 - timer / duration) * Math.PI);
}

export function grazeCycle(timer: number): number {
  if (timer <= 0) return 0;
  const progress = 1 - timer / GRAZE_DURATION;
  return 0.75 + Math.sin(progress * Math.PI * 6) * 0.25;
}

export function makeFurTexture(
  baseHex: number,
  accentHex: number,
  pattern: FurPattern,
  seed = Math.floor(Math.random() * 0x7fffffff),
): THREE.CanvasTexture {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d')!;
  const random = makeRng(seed);

  context.fillStyle = toCss(baseHex);
  context.fillRect(0, 0, size, size);
  context.fillStyle = toCss(accentHex);
  if (pattern === 'stripes') {
    for (let x = -size; x < size * 2; x += 18 + random() * 10) {
      context.save();
      context.translate(x, -8);
      context.rotate(-0.34 + (random() - 0.5) * 0.16);
      context.fillRect(0, 0, 6 + random() * 7, size * 1.7);
      context.restore();
    }
  } else {
    const marks = pattern === 'spots' ? 9 : 22;
    for (let i = 0; i < marks; i++) {
      const x = random() * size;
      const y = random() * size;
      const radius = pattern === 'spots' ? 9 + random() * 16 : 3 + random() * 9;
      context.beginPath();
      context.ellipse(
        x,
        y,
        radius,
        radius * (0.55 + random() * 0.7),
        random() * Math.PI,
        0,
        Math.PI * 2,
      );
      context.fill();
    }
  }

  // Low-contrast flecks keep large primitive faces from reading as flat fill.
  for (let i = 0; i < 280; i++) {
    const shade = random() < 0.52 ? '#ffffff' : '#000000';
    context.globalAlpha = 0.035 + random() * 0.055;
    context.fillStyle = shade;
    const d = 0.6 + random() * 1.6;
    context.fillRect(random() * size, random() * size, d, d);
  }
  context.globalAlpha = 1;

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.5, 1.5);
  return texture;
}

function makeRng(seed: number): () => number {
  let value = seed | 0;
  return () => {
    value |= 0;
    value = (value + 0x6D2B79F5) | 0;
    let result = Math.imul(value ^ (value >>> 15), 1 | value);
    result = (result + Math.imul(result ^ (result >>> 7), 61 | result)) ^ result;
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function toCss(hex: number): string {
  return `#${hex.toString(16).padStart(6, '0')}`;
}
