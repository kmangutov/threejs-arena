/**
 * Procedural tree — same visual language as the GLB tree (tapered low-poly
 * trunk + alpha-billboard foliage clusters) but generated from parameters
 * the editor can tweak live, with no GLB asset.
 *
 * Foliage uses the shared alpha-puff shader from trees.ts so the silhouette
 * matches the rest of the forest exactly. The trunk is a lathe-of-segments
 * tapered cone with simple branch stubs to read as a tree, not a pole.
 *
 * Reverse-engineered from douges.dev tree shader pattern: every foliage
 * vertex is pushed outward in screen space by UV.xy * scale, producing a
 * puffy billboard cluster from very few verts. The alpha mask cuts leaves.
 */

import * as THREE from 'three';
import { createFoliageMaterialPublic, getFoliageAlphaTexture } from './trees';

export interface ProceduralTreeParams {
  seed: number;
  trunkHeight: number;
  trunkRadius: number;
  trunkColor: number;
  branchCount: number;       // number of small foliage clusters
  foliageColor: number;
  foliageScale: number;      // overall canopy size
  foliagePuff: number;       // per-vertex billboard offset (u_scale)
  bend: number;              // trunk lean
}

export const DEFAULT_TREE_PARAMS: ProceduralTreeParams = {
  seed: 42,
  trunkHeight: 3.4,
  trunkRadius: 0.22,
  trunkColor: 0x4a3526,
  branchCount: 6,
  foliageColor: 0x5d8a37,
  foliageScale: 1.6,
  foliagePuff: 0.55,
  bend: 0.18,
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

let cachedAlpha: THREE.Texture | null = null;

export class ProceduralTree extends THREE.Group {
  params: ProceduralTreeParams;

  constructor(initial: Partial<ProceduralTreeParams> = {}) {
    super();
    this.name = 'ProceduralTree';
    this.params = { ...DEFAULT_TREE_PARAMS, ...initial };

    this.userData.editableParams = {
      schema: treeSchema(),
      get: () => this.params,
      set: (next: Partial<ProceduralTreeParams>) => {
        this.params = { ...this.params, ...next };
        this.rebuild();
      },
      regenerate: () => this.rebuild(),
    };

    // Load alpha map once (shared across all procedural trees).
    if (!cachedAlpha) {
      getFoliageAlphaTexture().then(tex => {
        cachedAlpha = tex;
        this.rebuild();
      }).catch(err => console.warn('[proceduralTree] foliage alpha load failed', err));
    }
    this.rebuild();
  }

  rebuild(): void {
    for (const c of [...this.children]) {
      this.remove(c);
      disposeDeep(c);
    }
    const p = this.params;
    const rng = mulberry32(p.seed);

    // Trunk: tapered cylinder with a slight bend; flat-shaded so the faceted
    // facets match the rest of the low-poly aesthetic.
    const trunkGeo = buildTaperedTrunk(p.trunkHeight, p.trunkRadius, p.bend, rng);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: p.trunkColor,
      roughness: 1.0,
      flatShading: true,
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.name = 'Trunk';
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    this.add(trunk);

    if (!cachedAlpha) return; // foliage appears once texture loads

    const foliageMat = createFoliageMaterialPublic(cachedAlpha, p.foliageColor);
    // Match the douges shader convention: u_scale drives billboard expansion.
    setMaterialUniform(foliageMat, 'u_scale', p.foliagePuff);

    // Cluster icosphere foliage around the top portion of the trunk.
    for (let i = 0; i < p.branchCount; i++) {
      const cluster = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.55 * p.foliageScale, 1),
        foliageMat,
      );
      const ty = p.trunkHeight * (0.6 + rng() * 0.5);
      const off = p.trunkRadius * 3 * (0.4 + rng() * 0.8);
      const ang = rng() * Math.PI * 2;
      cluster.position.set(
        Math.cos(ang) * off + p.bend * ty,
        ty + (rng() - 0.5) * 0.4,
        Math.sin(ang) * off,
      );
      const s = 0.7 + rng() * 0.7;
      cluster.scale.setScalar(s);
      cluster.castShadow = true;
      cluster.receiveShadow = true;
      cluster.name = `FoliageCluster_${i}`;
      this.add(cluster);
    }
  }
}

function treeSchema() {
  return [
    { key: 'seed',         label: 'Seed',          type: 'int' as const,   min: 0, max: 99999, step: 1 },
    { key: 'trunkHeight',  label: 'Trunk height',  type: 'float' as const, min: 1, max: 8, step: 0.1 },
    { key: 'trunkRadius',  label: 'Trunk radius',  type: 'float' as const, min: 0.05, max: 0.8, step: 0.01 },
    { key: 'branchCount',  label: 'Clusters',      type: 'int' as const,   min: 1, max: 20, step: 1 },
    { key: 'foliageScale', label: 'Canopy scale',  type: 'float' as const, min: 0.3, max: 4.0, step: 0.05 },
    { key: 'foliagePuff',  label: 'Leaf puff',     type: 'float' as const, min: 0.1, max: 1.5, step: 0.02 },
    { key: 'bend',         label: 'Trunk bend',    type: 'float' as const, min: -0.4, max: 0.4, step: 0.02 },
  ];
}

function buildTaperedTrunk(height: number, radius: number, bend: number, rng: () => number): THREE.BufferGeometry {
  const SEGMENTS = 7;
  const RADIAL = 8;
  // Build a lathe with per-ring radius scaling so the trunk tapers organically.
  const points: THREE.Vector2[] = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    const r = radius * (1.0 - t * 0.55) * (0.9 + (rng() - 0.5) * 0.15);
    points.push(new THREE.Vector2(r, t * height));
  }
  const geo = new THREE.LatheGeometry(points, RADIAL);
  // Apply a lean — translate each vertex by `bend * y` in X.
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    pos.setX(i, pos.getX(i) + bend * pos.getY(i));
  }
  geo.computeVertexNormals();
  return geo;
}

function setMaterialUniform(m: THREE.MeshStandardMaterial, name: string, value: number): void {
  // The douges shader binds uniforms via onBeforeCompile against a shared
  // object; we can't mutate per-tree without breaking that sharing. Best-effort:
  // monkey-patch onBeforeCompile to additionally set our local uniform.
  const prevHook = m.onBeforeCompile;
  m.onBeforeCompile = (shader, renderer) => {
    if (prevHook) prevHook(shader, renderer);
    if (shader.uniforms[name]) {
      shader.uniforms[name] = { value };
    }
  };
  m.needsUpdate = true;
}

function disposeDeep(obj: THREE.Object3D): void {
  obj.traverse(o => {
    const m = o as THREE.Mesh;
    if (m.geometry) m.geometry.dispose();
    const mat = m.material as THREE.Material | THREE.Material[] | undefined;
    if (Array.isArray(mat)) mat.forEach(x => x.dispose());
    else if (mat) mat.dispose();
  });
}
