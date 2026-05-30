/**
 * Low-poly procedural terrain using simplex noise
 */

import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';
import { REGION_FOOTPRINTS } from './regions';

// A large open world (one unit per segment, so SIZE === SEGMENTS keeps the
// integer-floor height lookup valid). Rolling hills via layered noise, with a
// flattened heart so the town / combat area stays walkable.
const TERRAIN_SIZE = 320;
const TERRAIN_SEGMENTS = 320;
const TERRAIN_MAX_HEIGHT = 7;
const FLATTEN_RADIUS = 44;   // radius (segments) of the gently-flat center

/**
 * Generate height data using layered simplex noise — broad rolling wavelengths
 * plus finer detail, normalized to 0-255. The map center is eased toward a calm
 * plateau so structures sit on near-flat ground.
 */
function generateHeightData(width: number, height: number): Uint8Array {
  const noise2D = createNoise2D();
  const size = width * height;
  const data = new Uint8Array(size);
  const cx = width / 2;
  const cz = height / 2;

  // Sample the raw noise field (same octaves) at any segment coord.
  const sample = (x: number, y: number) =>
    (noise2D(x / 120, y / 120) * 0.55 +
      noise2D(x / 55, y / 55) * 0.30 +
      noise2D(x / 24, y / 24) * 0.15) * 0.5 + 0.5;

  // Each themed region gets a flat plateau at its local ground height so
  // buildings sit level instead of clipping through hills.
  const plateaus = REGION_FOOTPRINTS.map(f => {
    const sx = f.x + cx, sz = f.z + cz;
    return { sx, sz, r: f.r, n: sample(sx, sz) };
  });

  for (let i = 0; i < size; i++) {
    const x = i % width;
    const y = Math.floor(i / width);

    let n = sample(x, y);

    // Flatten the center toward a common mid height (settled-clearing look).
    const dist = Math.hypot(x - cx, y - cz);
    const flat = 1 - Math.min(1, Math.max(0, (dist - FLATTEN_RADIUS) / 28 + 1));
    n = THREE.MathUtils.lerp(n, 0.32, flat * 0.85);

    // Region plateaus: flat within the footprint, easing back to hills over 14u.
    for (const p of plateaus) {
      const d = Math.hypot(x - p.sx, y - p.sz);
      const k = 1 - THREE.MathUtils.smoothstep(d, p.r, p.r + 14);
      if (k > 0) n = THREE.MathUtils.lerp(n, p.n, k);
    }

    data[i] = Math.round(Math.min(1, Math.max(0, n)) * 255);
  }

  return data;
}

/**
 * Get terrain height at world coordinates
 */
export function getTerrainHeight(x: number, z: number, heightData: Uint8Array | null): number {
  if (!heightData) return 0;
  const centerX = TERRAIN_SIZE / 2;
  const centerZ = TERRAIN_SIZE / 2;
  const localX = Math.floor(x + centerX);
  const localZ = Math.floor(z + centerZ);

  // Clamp to terrain bounds
  const clampedX = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, localX));
  const clampedZ = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, localZ));

  const dataIndex = clampedZ * TERRAIN_SEGMENTS + clampedX;
  const normalizedHeight = heightData[dataIndex] / 255;
  return normalizedHeight * TERRAIN_MAX_HEIGHT;
}

/**
 * Build the terrain material: a MeshStandardMaterial (full scene lighting,
 * shadows and fog) whose diffuse colour is computed procedurally in the
 * fragment shader from world position. Height + slope drive a warm WoW band
 * palette (lush lowland → olive → dry tan → pale rock + rocky cliffs), and
 * multi-octave value-noise fbm adds macro patches, dirt breakup, sun-bleached
 * patches and fine grain so the ground reads as hand-painted, not flat bands.
 */
function createTerrainMaterial(): THREE.MeshStandardMaterial {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1.0,
    metalness: 0.0,
    flatShading: true,
    side: THREE.DoubleSide,
  });

  const MAXH = TERRAIN_MAX_HEIGHT.toFixed(1);

  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n varying vec3 vTerrWorld;')
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\n vTerrWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;',
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        /* glsl */ `
        #include <common>
        varying vec3 vTerrWorld;

        float thash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
        }
        float tnoise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          float a = thash(i), b = thash(i + vec2(1.0, 0.0));
          float c = thash(i + vec2(0.0, 1.0)), d = thash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        float tfbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * tnoise(p); p *= 2.03; a *= 0.5; }
          return v;
        }
        vec3 terrainColor() {
          vec3 wp = vTerrWorld;
          float f = clamp(wp.y / ${MAXH}, 0.0, 1.0);

          // Face slope from screen-space derivatives (works with flat shading).
          vec3 fdx = dFdx(wp); vec3 fdy = dFdy(wp);
          float slope = 1.0 - clamp(abs(normalize(cross(fdx, fdy)).y), 0.0, 1.0);

          float macro = tfbm(wp.xz * 0.025);
          float meso  = tfbm(wp.xz * 0.12 + 11.3);
          float fine  = tnoise(wp.xz * 0.75);

          const vec3 LOW   = vec3(0.357, 0.478, 0.180); // lush lowland
          const vec3 MID   = vec3(0.435, 0.541, 0.220); // meadow olive
          const vec3 DRY   = vec3(0.541, 0.588, 0.282); // dry grass
          const vec3 TAN   = vec3(0.690, 0.604, 0.361); // tan slope soil
          const vec3 ROCKT = vec3(0.792, 0.749, 0.627); // pale peak
          const vec3 SLOPE = vec3(0.430, 0.392, 0.330); // cliff rock
          const vec3 DIRT  = vec3(0.420, 0.333, 0.196); // bare earth

          vec3 col = LOW;
          col = mix(col, MID, smoothstep(0.08, 0.30, f));
          col = mix(col, DRY, smoothstep(0.32, 0.55, f));
          col = mix(col, TAN, smoothstep(0.55, 0.78, f));
          col = mix(col, ROCKT, smoothstep(0.80, 0.96, f));

          // Macro light/dark patches.
          col *= 0.84 + 0.30 * macro;
          // Bare-earth patches in the lowlands.
          col = mix(col, DIRT, smoothstep(0.58, 0.95, meso) * 0.40 * (1.0 - f));
          // Sun-bleached golden patches.
          col = mix(col, col * vec3(1.06, 1.04, 0.90), smoothstep(0.25, 0.85, macro) * 0.5);
          // Fine grain.
          col += (fine - 0.5) * 0.045;
          // Steep faces turn to exposed rock.
          col = mix(col, SLOPE * (0.8 + 0.4 * macro), smoothstep(0.34, 0.62, slope));

          return max(col, vec3(0.0));
        }
        `,
      )
      .replace(
        'vec4 diffuseColor = vec4( diffuse, opacity );',
        'vec4 diffuseColor = vec4( terrainColor(), opacity );',
      );
  };

  return material;
}

/**
 * Create the low-poly terrain mesh
 */
export function createTerrain(): { mesh: THREE.Mesh; heightData: Uint8Array } {
  // Generate height data
  const heightData = generateHeightData(TERRAIN_SEGMENTS, TERRAIN_SEGMENTS);

  // Create base geometry
  const geometry = new THREE.PlaneGeometry(
    TERRAIN_SIZE,
    TERRAIN_SIZE,
    TERRAIN_SEGMENTS - 1,
    TERRAIN_SEGMENTS - 1
  );
  geometry.rotateX(-Math.PI / 2); // Lay it flat

  // Convert to non-indexed for independent vertex colors/shading
  const lowPolyGeom = geometry.toNonIndexed();
  const posAttribute = lowPolyGeom.getAttribute('position');

  // Apply height data to vertices
  for (let i = 0; i < posAttribute.count; i++) {
    const x = Math.floor(posAttribute.getX(i) + TERRAIN_SIZE / 2);
    const z = Math.floor(posAttribute.getZ(i) + TERRAIN_SIZE / 2);
    const clampedX = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, x));
    const clampedZ = Math.max(0, Math.min(TERRAIN_SEGMENTS - 1, z));
    const dataIndex = clampedZ * TERRAIN_SEGMENTS + clampedX;

    const h = (heightData[dataIndex] / 255) * TERRAIN_MAX_HEIGHT;
    posAttribute.setY(i, h);
  }

  // Compute normals for lighting (flat shading does the low-poly look)
  lowPolyGeom.computeVertexNormals();

  // Painterly terrain surface — the diffuse colour is computed procedurally in
  // the fragment shader from world position (see createTerrainMaterial), so the
  // ground gets height/slope band blending plus multi-octave fbm detail instead
  // of flat colour rings.
  const material = createTerrainMaterial();

  const terrain = new THREE.Mesh(lowPolyGeom, material);
  terrain.receiveShadow = true;
  terrain.name = 'Terrain';

  return { mesh: terrain, heightData };
}

/**
 * Create water plane at base level
 */
export function createWaterPlane(): THREE.Mesh {
  const waterGeometry = new THREE.PlaneGeometry(TERRAIN_SIZE, TERRAIN_SIZE);
  waterGeometry.rotateX(-Math.PI / 2);

  const waterMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a5f7f,
    roughness: 0.3,
    metalness: 0.8,
    transparent: true,
    opacity: 0.4,
    depthWrite: false
  });

  const water = new THREE.Mesh(waterGeometry, waterMaterial);
  water.position.y = 0.05; // Slightly above ground
  water.name = 'Water';

  return water;
}
