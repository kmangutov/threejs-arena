/**
 * Generative rivers — one or more winding ribbons of water that cross the
 * terrain. Each river is a Catmull-Rom curve through seeded control points;
 * the ribbon is built as a ground-hugging strip (custom triangle strip)
 * width-shaped by a sin-modulated banking so the water reads as flowing
 * through valleys.
 *
 * Water material is a shader: scrolling sin-noise UVs on a translucent blue
 * base so the surface looks alive without needing a normal map asset.
 *
 * Editable via the SceneEditor: seed, river count, width, depth-tint,
 * regenerate.
 */

import * as THREE from 'three';

export interface RiverParams {
  seed: number;
  riverCount: number;
  width: number;
  segments: number;       // points along the curve (more = smoother)
  span: number;           // total length end-to-end (across the map)
  meander: number;        // amplitude of meander offset
  shallowColor: number;
  deepColor: number;
  flowSpeed: number;
}

export const DEFAULT_RIVER_PARAMS: RiverParams = {
  seed: 7,
  riverCount: 2,
  width: 6.5,             // wide enough to read as a real river, not a creek
  segments: 120,
  span: 110,              // run well past the map edge
  meander: 18,            // bigger curves so the river feels geographic
  shallowColor: 0x6ec0c8,
  deepColor: 0x163b56,
  flowSpeed: 0.25,
};

function mulberry32(seed: number): () => number {
  let a = seed | 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  varying float vDepth;     // 0 at bank, 1 at center
  attribute float aDepth;

  void main() {
    vUv = uv;
    vDepth = aDepth;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;
  varying float vDepth;
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform float uTime;
  uniform float uFlow;

  // Cheap sin-based ripples — two layers crossing at different angles for
  // a flowing-water shimmer without sampling a texture.
  float ripple(vec2 p, float t) {
    return sin(p.x * 18.0 + t * 2.4) * 0.5
         + sin((p.x + p.y * 0.5) * 11.0 - t * 1.7) * 0.5;
  }

  void main() {
    vec2 p = vUv;
    p.y -= uTime * uFlow;
    float r = ripple(p, uTime);
    float shimmer = smoothstep(-0.2, 1.0, r) * 0.18;
    vec3 col = mix(uShallow, uDeep, vDepth) + vec3(shimmer);
    // Soft alpha edge — blend with terrain at the banks.
    float alpha = mix(0.55, 0.92, vDepth);
    gl_FragColor = vec4(col, alpha);
  }
`;

export class Rivers extends THREE.Group {
  params: RiverParams;
  private heightSampler: (x: number, z: number) => number;
  private material: THREE.ShaderMaterial | null = null;

  constructor(heightSampler: (x: number, z: number) => number, initial: Partial<RiverParams> = {}) {
    super();
    this.name = 'Rivers';
    this.heightSampler = heightSampler;
    this.params = { ...DEFAULT_RIVER_PARAMS, ...initial };

    this.userData.editableParams = {
      schema: riverSchema(),
      get: () => this.params,
      set: (next: Partial<RiverParams>) => {
        this.params = { ...this.params, ...next };
        this.rebuild();
      },
      regenerate: () => this.rebuild(),
    };

    this.rebuild();
  }

  update(elapsed: number): void {
    if (this.material) this.material.uniforms.uTime.value = elapsed;
  }

  rebuild(): void {
    for (const c of [...this.children]) {
      this.remove(c);
      (c as THREE.Mesh).geometry?.dispose();
    }
    if (this.material) { this.material.dispose(); this.material = null; }

    const p = this.params;
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uShallow: { value: new THREE.Color(p.shallowColor) },
        uDeep: { value: new THREE.Color(p.deepColor) },
        uTime: { value: 0 },
        uFlow: { value: p.flowSpeed },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const rng = mulberry32(p.seed);
    const bankMat = new THREE.MeshLambertMaterial({
      color: 0xc7a87a,    // sandy beige
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < p.riverCount; i++) {
      const built = buildRiverRibbon(rng, p, this.heightSampler, this.material, bankMat);
      this.add(built);
    }
  }
}

function riverSchema() {
  return [
    { key: 'seed',          label: 'Seed',          type: 'int' as const,   min: 0, max: 99999, step: 1 },
    { key: 'riverCount',    label: 'Rivers',        type: 'int' as const,   min: 0, max: 6, step: 1 },
    { key: 'width',         label: 'Width',         type: 'float' as const, min: 0.5, max: 8.0, step: 0.1 },
    { key: 'meander',       label: 'Meander',       type: 'float' as const, min: 0, max: 25, step: 0.5 },
    { key: 'flowSpeed',     label: 'Flow speed',    type: 'float' as const, min: -1, max: 1, step: 0.02 },
  ];
}

function buildRiverRibbon(
  rng: () => number,
  p: RiverParams,
  height: (x: number, z: number) => number,
  material: THREE.ShaderMaterial,
  bankMat: THREE.Material,
): THREE.Group {
  // Random crossing chord across the map: pick two angles on a bounding
  // circle, draw a smooth curve between them with meandering control points.
  const radius = p.span * 0.5;
  const angA = rng() * Math.PI * 2;
  const angB = angA + Math.PI + (rng() - 0.5) * 0.8; // roughly across the map
  const start = new THREE.Vector3(Math.cos(angA) * radius, 0, Math.sin(angA) * radius);
  const end = new THREE.Vector3(Math.cos(angB) * radius, 0, Math.sin(angB) * radius);

  // Build CR control points by interpolating + jittering perpendicular to
  // the chord direction. This produces a curve that runs roughly straight
  // but meanders left/right organically.
  const dir = new THREE.Vector3().subVectors(end, start);
  const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  const CONTROL = 6;
  const controls: THREE.Vector3[] = [];
  for (let i = 0; i <= CONTROL; i++) {
    const t = i / CONTROL;
    const base = new THREE.Vector3().lerpVectors(start, end, t);
    const meanderAmt = Math.sin(t * Math.PI) * p.meander * (rng() - 0.5) * 2;
    base.addScaledVector(perp, meanderAmt);
    controls.push(base);
  }
  const curve = new THREE.CatmullRomCurve3(controls, false, 'catmullrom', 0.5);

  // Sample curve into a ribbon. For each segment, place TWO verts (left/right
  // banks) at width/2 perpendicular to the local tangent. Store an aDepth
  // attribute that's 1 at center and 0 at bank — but since we only have two
  // bank verts, depth alternates: bank=0; we add a third center spine vert
  // for proper shading.
  const SEG = p.segments;
  const positions: number[] = [];
  const uvs: number[] = [];
  const depths: number[] = [];
  const indices: number[] = [];

  const Y_OFFSET = 0.06; // slightly above ground to avoid z-fighting
  for (let i = 0; i <= SEG; i++) {
    const t = i / SEG;
    const pos = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
    const w = p.width * (0.85 + 0.15 * Math.sin(t * Math.PI * 4)); // subtle width pulse

    // Sample terrain at center and snap river surface to slightly below
    // local terrain so it reads as carved into the ground at riverbed depth.
    const h = height(pos.x, pos.z);
    const yCenter = h - 0.18;

    const left = pos.clone().addScaledVector(side, -w * 0.5);
    const right = pos.clone().addScaledVector(side, w * 0.5);
    const lh = height(left.x, left.z);
    const rh = height(right.x, right.z);

    positions.push(left.x, Math.min(lh, yCenter) + Y_OFFSET, left.z);
    positions.push(pos.x, yCenter + Y_OFFSET, pos.z);
    positions.push(right.x, Math.min(rh, yCenter) + Y_OFFSET, right.z);

    uvs.push(0, t * 10);
    uvs.push(0.5, t * 10);
    uvs.push(1, t * 10);

    depths.push(0, 1, 0);

    if (i < SEG) {
      const a = i * 3;
      // Left-center triangle
      indices.push(a, a + 1, a + 3);
      indices.push(a + 3, a + 1, a + 4);
      // Center-right triangle
      indices.push(a + 1, a + 2, a + 4);
      indices.push(a + 4, a + 2, a + 5);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('aDepth', new THREE.Float32BufferAttribute(depths, 1));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const water = new THREE.Mesh(geo, material);
  water.name = 'RiverWater';
  water.renderOrder = -1;

  // Sandy banks: a wider strip following the same curve, sitting flush with
  // terrain. Two side-strips (one per bank) drawn just outside the water
  // edges. Gives the river a visible silhouette from any angle.
  const bankWidth = p.width * 0.45;
  const bankL = buildBankStrip(curve, p.segments, -p.width * 0.5 - bankWidth * 0.5, bankWidth, height);
  const bankR = buildBankStrip(curve, p.segments, p.width * 0.5 + bankWidth * 0.5, bankWidth, height);

  const group = new THREE.Group();
  group.name = 'River';
  group.add(new THREE.Mesh(bankL, bankMat));
  group.add(new THREE.Mesh(bankR, bankMat));
  group.add(water);
  return group;
}

/** Build a flat strip following the curve, offset sideways from the centerline. */
function buildBankStrip(
  curve: THREE.CatmullRomCurve3,
  segments: number,
  offset: number,
  width: number,
  height: (x: number, z: number) => number,
): THREE.BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const Y = 0.04;
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const pos = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const side = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
    const center = pos.clone().addScaledVector(side, offset);
    const inner = center.clone().addScaledVector(side, -width * 0.5);
    const outer = center.clone().addScaledVector(side, width * 0.5);
    // Hug terrain so the bank sits on the ground.
    const ih = height(inner.x, inner.z);
    const oh = height(outer.x, outer.z);
    positions.push(inner.x, ih + Y, inner.z);
    positions.push(outer.x, oh + Y, outer.z);
    uvs.push(0, t * 6, 1, t * 6);
    if (i < segments) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2);
      indices.push(a + 2, a + 1, a + 3);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}
