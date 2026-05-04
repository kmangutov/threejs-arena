// Shared seeded RNG + value noise used by both the diffuse and bump generators.

export function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

export function noise2D(x, y, seed) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;

  const hash = (a, b) => {
    const n = a + b * 57 + seed;
    return seededRandom(n * 13)();
  };

  const v00 = hash(xi, yi);
  const v10 = hash(xi + 1, yi);
  const v01 = hash(xi, yi + 1);
  const v11 = hash(xi + 1, yi + 1);

  const sx = xf * xf * (3 - 2 * xf);
  const sy = yf * yf * (3 - 2 * yf);

  return v00 * (1 - sx) * (1 - sy) +
         v10 * sx * (1 - sy) +
         v01 * (1 - sx) * sy +
         v11 * sx * sy;
}

// Fractal brownian motion — sums multiple noise octaves for chunky relief.
export function fbm(x, y, seed, octaves = 4, lacunarity = 2.1, gain = 0.55) {
  let amp = 1;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise2D(x * freq, y * freq, seed + i * 17);
    norm += amp;
    amp *= gain;
    freq *= lacunarity;
  }
  return sum / norm;
}
