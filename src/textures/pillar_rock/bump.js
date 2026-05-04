// Pillar rock bump (height) map — exaggerated multi-scale relief.
// Combines large boulder-shaped lumps, mid-scale stone clumps, and fine
// pebble grain. Cracks are deeply recessed with soft halos so the bump
// shader reads them as carved channels rather than painted lines.

import { seededRandom, noise2D, fbm } from './_noise.js';

const PARAMS = {
  // Boulder mask — a few large warped circles that group rock into chunks.
  boulderCount: 5,
  boulderRadius: 0.45,        // fraction of texture size
  boulderEdgeSoftness: 0.35,
  boulderRaise: 0.35,         // how much boulders push up vs base

  // FBM relief
  fbmOctaves: 5,
  fbmGain: 0.58,
  fbmLacunarity: 2.2,
  fbmStrength: 0.9,
  contrast: 1.55,             // > 1 = more dramatic highs/lows

  // Pebble specks (raised)
  speckCount: 700,
  speckMaxR: 2.4,

  // Cracks (deep recess)
  crackCount: 9,
  crackBaseWidth: 1.4,
  crackHaloWidth: 6.0,        // soft dark halo around each crack for depth
  crackJitter: 0.6,

  // Final polish
  edgeFalloff: 0.08            // tile edge darkening so seams disappear
};

export function generate(size, seed) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const rand = seededRandom(seed);

  // Pre-pick boulder centers so we can sample them per-pixel.
  const boulders = [];
  for (let i = 0; i < PARAMS.boulderCount; i++) {
    boulders.push({
      cx: rand() * size,
      cy: rand() * size,
      r: PARAMS.boulderRadius * size * (0.7 + rand() * 0.6),
      jx: (rand() - 0.5) * 0.8,
      jy: (rand() - 0.5) * 0.8
    });
  }

  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Boulder mask — distance to nearest boulder center, warped by noise.
      let boulderH = 0;
      for (const b of boulders) {
        const wx = x + noise2D(x * 0.02, y * 0.02, seed + 31) * 18 * b.jx;
        const wy = y + noise2D(x * 0.02, y * 0.02, seed + 47) * 18 * b.jy;
        const dx = wx - b.cx;
        const dy = wy - b.cy;
        const d = Math.sqrt(dx * dx + dy * dy) / b.r;
        const k = Math.max(0, 1 - d);
        // Soft falloff
        const lump = Math.pow(k, 1 + PARAMS.boulderEdgeSoftness * 2);
        if (lump > boulderH) boulderH = lump;
      }

      // Multi-octave noise relief
      const f = fbm(x * 0.012, y * 0.012, seed, PARAMS.fbmOctaves, PARAMS.fbmLacunarity, PARAMS.fbmGain);

      // Combine: 0.42 base + boulder lift + fbm
      let h = 0.42 + boulderH * PARAMS.boulderRaise + (f - 0.5) * PARAMS.fbmStrength;

      // Contrast push around 0.5
      h = 0.5 + (h - 0.5) * PARAMS.contrast;

      // Tile edge fade so repeats hide their seams
      const edgeX = Math.min(x, size - x) / size;
      const edgeY = Math.min(y, size - y) / size;
      const edgeMask = Math.min(edgeX, edgeY) / PARAMS.edgeFalloff;
      const edgeFactor = Math.min(1, edgeMask);
      h = h * (0.85 + 0.15 * edgeFactor);

      const v = Math.max(0, Math.min(255, h * 255));
      const i = (y * size + x) * 4;
      data[i] = v; data[i + 1] = v; data[i + 2] = v; data[i + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);

  // Pebble specks — bright raised dots with a tiny dark side for fake AO.
  for (let i = 0; i < PARAMS.speckCount; i++) {
    const x = rand() * size;
    const y = rand() * size;
    const r = 0.6 + rand() * PARAMS.speckMaxR;

    // shadow side
    ctx.fillStyle = `rgba(0,0,0,${0.25 + rand() * 0.2})`;
    ctx.beginPath();
    ctx.arc(x + r * 0.4, y + r * 0.4, r * 1.05, 0, Math.PI * 2);
    ctx.fill();

    // bright top
    const shade = 215 + Math.floor(rand() * 40);
    ctx.fillStyle = `rgba(${shade},${shade},${shade},0.95)`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cracks — first a soft wide dark halo, then a sharp dark core.
  const drawCrack = (alpha, width) => {
    ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  // Pre-build crack paths
  const cracks = [];
  for (let i = 0; i < PARAMS.crackCount; i++) {
    const points = [];
    let x = rand() * size;
    let y = rand() * size;
    points.push([x, y]);
    const segments = 4 + Math.floor(rand() * 4);
    let angle = rand() * Math.PI * 2;
    for (let j = 0; j < segments; j++) {
      angle += (rand() - 0.5) * Math.PI * PARAMS.crackJitter;
      const length = 18 + rand() * 32;
      x += Math.cos(angle) * length;
      y += Math.sin(angle) * length;
      points.push([x, y]);
    }
    cracks.push(points);
  }

  // Halo pass
  drawCrack(0.45, PARAMS.crackHaloWidth);
  for (const pts of cracks) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
  }

  // Core pass
  drawCrack(0.95, PARAMS.crackBaseWidth);
  for (const pts of cracks) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.stroke();
  }

  return canvas;
}

export function createTexture(THREE, size = 256, seed = Date.now()) {
  const canvas = generate(size, seed);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}
