/**
 * Scene Editor — toggleable DOM panel for live-editing three.js objects.
 *
 * Activate with backtick (`). While open:
 *   - Click any object in the scene to select it (raycast).
 *   - Walk up/down its parent/child chain in the panel.
 *   - Edit transform (pos/rot/scale) and PBR material props live.
 *
 * The editor traverses the live scene, so newly-spawned objects (animals,
 * pillars, etc.) are automatically pickable — no registration required.
 */

import * as THREE from 'three';

const EDITOR_HOTKEY = 'Backquote';

type Listener = (obj: THREE.Object3D | null) => void;

export class SceneEditor {
  open = false;
  selected: THREE.Object3D | null = null;

  private readonly scene: THREE.Scene;
  private readonly camera: THREE.Camera;
  private readonly canvas: HTMLCanvasElement;
  private readonly raycaster = new THREE.Raycaster();
  private readonly panel: HTMLDivElement;
  private readonly listeners = new Set<Listener>();
  private highlight: THREE.LineSegments | null = null;

  constructor(scene: THREE.Scene, camera: THREE.Camera, canvas: HTMLCanvasElement) {
    this.scene = scene;
    this.camera = camera;
    this.canvas = canvas;

    this.panel = this.buildPanel();
    document.body.appendChild(this.panel);

    window.addEventListener('keydown', (e) => {
      if (e.code === EDITOR_HOTKEY) {
        e.preventDefault();
        this.toggle();
      }
      if (e.code === 'Escape' && this.open) {
        this.select(null);
      }
    });

    // Pointer picking while editor is open. Capture-phase so it runs before
    // the targeting system's click handler.
    canvas.addEventListener('pointerdown', (e) => {
      if (!this.open) return;
      if (e.button !== 0) return;
      e.stopPropagation();
      e.preventDefault();
      this.pickAt(e.clientX, e.clientY);
    }, true);
  }

  onSelectionChange(fn: Listener): void {
    this.listeners.add(fn);
  }

  toggle(): void {
    this.open = !this.open;
    this.panel.style.display = this.open ? 'block' : 'none';
    if (!this.open) this.clearHighlight();
    else this.render();
  }

  select(obj: THREE.Object3D | null): void {
    this.selected = obj;
    this.updateHighlight();
    this.render();
    for (const l of this.listeners) l(obj);
  }

  /** Render world-space helpers (called each frame). */
  update(): void {
    if (!this.highlight || !this.selected) return;
    let box: THREE.Box3;
    if (this.selected.userData.isInstanceProxy) {
      // Proxy lives outside the scene graph — derive its world bbox from the
      // source InstancedMesh's bounding box scaled+translated by the proxy.
      const src = this.selected.userData.source as THREE.InstancedMesh;
      if (!src.geometry.boundingBox) src.geometry.computeBoundingBox();
      const bb = src.geometry.boundingBox!;
      box = new THREE.Box3(
        bb.min.clone().multiply(this.selected.scale).add(this.selected.position),
        bb.max.clone().multiply(this.selected.scale).add(this.selected.position),
      );
    } else {
      this.selected.updateWorldMatrix(true, true);
      box = new THREE.Box3().setFromObject(this.selected);
    }
    if (box.isEmpty()) return;
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    this.highlight.position.copy(center);
    this.highlight.scale.set(Math.max(size.x, 0.01), Math.max(size.y, 0.01), Math.max(size.z, 0.01));
  }

  private pickAt(x: number, y: number): void {
    const rect = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((x - rect.left) / rect.width) * 2 - 1,
      -((y - rect.top) / rect.height) * 2 + 1
    );
    this.raycaster.setFromCamera(ndc, this.camera as THREE.PerspectiveCamera);
    const hits = this.raycaster.intersectObjects(this.scene.children, true);
    const hit = hits.find(h => {
      let o: THREE.Object3D | null = h.object;
      while (o) {
        if (o.userData?.editorIgnore) return false;
        if (o.name === 'SkyEnvironment') return false;
        o = o.parent;
      }
      return true;
    });
    if (!hit) return;

    // Per-instance pick: if we hit an InstancedMesh, wrap that specific
    // instance in a proxy so its transform can be edited individually.
    if (hit.instanceId !== undefined && (hit.object as THREE.InstancedMesh).isInstancedMesh) {
      const proxy = makeInstanceProxy(hit.object as THREE.InstancedMesh, hit.instanceId);
      this.select(proxy);
      return;
    }

    // Otherwise climb to the most useful "named" ancestor (Group with a name).
    let target: THREE.Object3D = hit.object;
    while (target.parent && target.parent !== this.scene && !target.name) {
      target = target.parent;
    }
    this.select(target);
  }

  private updateHighlight(): void {
    this.clearHighlight();
    if (!this.selected) return;
    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
    const mat = new THREE.LineBasicMaterial({ color: 0xffff00, depthTest: false, transparent: true, opacity: 0.9 });
    const lines = new THREE.LineSegments(geo, mat);
    lines.renderOrder = 999;
    lines.userData.editorIgnore = true;
    this.scene.add(lines);
    this.highlight = lines;
    this.update();
  }

  private clearHighlight(): void {
    if (!this.highlight) return;
    this.scene.remove(this.highlight);
    this.highlight.geometry.dispose();
    (this.highlight.material as THREE.Material).dispose();
    this.highlight = null;
  }

  private buildPanel(): HTMLDivElement {
    const p = document.createElement('div');
    p.id = 'scene-editor';
    p.style.cssText = `
      position: fixed; top: 20px; right: 20px; width: 320px;
      max-height: calc(100vh - 40px); overflow: auto;
      background: rgba(20, 20, 28, 0.92); border: 1px solid #555;
      border-radius: 6px; color: #ddd; font: 12px/1.4 monospace;
      padding: 10px; z-index: 1000; display: none;
    `;
    return p;
  }

  private render(): void {
    if (!this.open) return;
    const sel = this.selected;
    this.panel.innerHTML = '';

    const header = document.createElement('div');
    header.innerHTML = `<b style="color:#ffd57a">Scene Editor</b> <span style="color:#888">[\`] toggle · click to pick · [Esc] deselect</span>`;
    header.style.marginBottom = '8px';
    this.panel.appendChild(header);

    if (!sel) {
      const hint = document.createElement('div');
      hint.style.color = '#888';
      hint.textContent = 'Click anything in the scene to select it.';
      this.panel.appendChild(hint);
      this.appendQuickList();
      return;
    }

    const title = document.createElement('div');
    title.style.cssText = 'margin-bottom:6px;color:#9cf';
    title.textContent = `${sel.type}  "${sel.name || '(unnamed)'}"`;
    this.panel.appendChild(title);

    // Parent / children navigation
    const nav = document.createElement('div');
    nav.style.cssText = 'margin-bottom:8px;display:flex;gap:6px;flex-wrap:wrap';
    if (sel.parent && sel.parent !== this.scene) {
      const up = button('↑ parent', () => this.select(sel.parent!));
      nav.appendChild(up);
    }
    if (sel.children.length) {
      const c = document.createElement('select');
      c.style.cssText = 'background:#222;color:#ddd;border:1px solid #444;padding:2px';
      c.innerHTML = `<option>↓ child (${sel.children.length})…</option>`;
      sel.children.forEach((child, i) => {
        const opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = `${i}: ${child.type} ${child.name || ''}`;
        c.appendChild(opt);
      });
      c.addEventListener('change', () => {
        const i = parseInt(c.value, 10);
        if (!isNaN(i)) this.select(sel.children[i]);
      });
      nav.appendChild(c);
    }
    this.panel.appendChild(nav);

    // Transform — for InstanceProxy selections, fire userData.onMutate after
    // each edit so the change is written back to the source InstancedMesh.
    const onChange = () => { this.update(); (sel as any).userData?.onMutate?.(); };
    this.appendSection('Position', ['x', 'y', 'z'].map(k => vec3Row(sel.position, k as 'x', 0.05, onChange)));
    this.appendSection('Rotation (deg)', ['x', 'y', 'z'].map(k => eulerRow(sel.rotation, k as 'x', onChange)));
    this.appendSection('Scale', ['x', 'y', 'z'].map(k => vec3Row(sel.scale, k as 'x', 0.05, onChange)));

    // Visible toggle
    this.panel.appendChild(toggleRow('Visible', sel.visible, v => { sel.visible = v; }));

    // Generator params (if object exposes them via userData.editableParams)
    const ep = (sel as any).userData?.editableParams;
    if (ep && typeof ep.get === 'function' && typeof ep.set === 'function' && Array.isArray(ep.schema)) {
      this.appendEditableParams(ep);
    }

    // Material
    const mat = (sel as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
    if (mat) {
      const mats = Array.isArray(mat) ? mat : [mat];
      mats.forEach((m, i) => this.appendMaterial(m, mats.length > 1 ? ` [${i}]` : ''));
    }

    // Delete
    const del = button('Delete from scene', () => {
      if (sel.userData.isInstanceProxy) {
        // Zero the matrix so the instance disappears (real removal would
        // require shifting the InstancedMesh's instance buffer).
        const src = sel.userData.source as THREE.InstancedMesh;
        const m = new THREE.Matrix4().makeScale(0, 0, 0);
        src.setMatrixAt(sel.userData.instanceId as number, m);
        src.instanceMatrix.needsUpdate = true;
      } else {
        sel.parent?.remove(sel);
      }
      this.select(null);
    });
    del.style.cssText += 'margin-top:10px;background:#5a1a1a;color:#fbb';
    this.panel.appendChild(del);
  }

  private appendQuickList(): void {
    const h = document.createElement('div');
    h.style.cssText = 'margin-top:10px;color:#888';
    h.textContent = 'Top-level scene roots:';
    this.panel.appendChild(h);
    const list = document.createElement('div');
    for (const child of this.scene.children) {
      if (child.userData?.editorIgnore) continue;
      const b = button(`${child.name || child.type}`, () => this.select(child));
      b.style.cssText += 'display:block;width:100%;text-align:left;margin:2px 0';
      list.appendChild(b);
    }
    this.panel.appendChild(list);
  }

  private appendSection(label: string, rows: HTMLElement[]): void {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin:6px 0;padding:4px;border-top:1px solid #333';
    const l = document.createElement('div');
    l.style.cssText = 'color:#888;margin-bottom:2px';
    l.textContent = label;
    wrap.appendChild(l);
    rows.forEach(r => wrap.appendChild(r));
    this.panel.appendChild(wrap);
  }

  private appendEditableParams(ep: {
    schema: Array<{ key: string; label: string; type: 'int' | 'float' | 'select'; min?: number; max?: number; step?: number; options?: string[] }>;
    get: () => Record<string, unknown>;
    set: (next: Record<string, unknown>) => void;
    regenerate?: () => void;
  }): void {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin:6px 0;padding:4px;border-top:1px solid #333';
    const l = document.createElement('div');
    l.style.cssText = 'color:#ffd57a;margin-bottom:4px';
    l.textContent = 'Generator Parameters';
    wrap.appendChild(l);

    const current = ep.get();

    for (const field of ep.schema) {
      const value = current[field.key];
      if (field.type === 'select' && field.options) {
        const sel = document.createElement('select');
        sel.style.cssText = 'flex:1;background:#222;color:#ddd;border:1px solid #444;padding:2px 4px;font:11px monospace';
        for (const opt of field.options) {
          const o = document.createElement('option');
          o.value = opt; o.textContent = opt;
          if (opt === value) o.selected = true;
          sel.appendChild(o);
        }
        sel.addEventListener('change', () => ep.set({ [field.key]: sel.value }));
        wrap.appendChild(row(field.label, sel));
      } else {
        const step = field.step ?? (field.type === 'int' ? 1 : 0.05);
        const input = numberInput(Number(value ?? 0), step, v => {
          ep.set({ [field.key]: field.type === 'int' ? Math.round(v) : v });
        });
        if (field.min !== undefined) input.min = String(field.min);
        if (field.max !== undefined) input.max = String(field.max);
        wrap.appendChild(row(field.label, input));
      }
    }

    if (ep.regenerate) {
      const b = button('Regenerate (randomize seed)', () => {
        ep.set({ seed: Math.floor(Math.random() * 99999) });
      });
      b.style.cssText += 'margin-top:6px;background:#2a3a5a;color:#cde;width:100%';
      wrap.appendChild(b);
    }

    this.panel.appendChild(wrap);
  }

  private appendMaterial(m: THREE.Material, suffix: string): void {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'margin:6px 0;padding:4px;border-top:1px solid #333';
    const l = document.createElement('div');
    l.style.cssText = 'color:#888;margin-bottom:2px';
    l.textContent = `Material ${m.type}${suffix}`;
    wrap.appendChild(l);

    const mm = m as THREE.MeshStandardMaterial;
    if (mm.color) {
      wrap.appendChild(colorRow('color', mm.color));
    }
    if ('emissive' in mm && mm.emissive) {
      wrap.appendChild(colorRow('emissive', mm.emissive));
    }
    if ('roughness' in mm && typeof mm.roughness === 'number') {
      wrap.appendChild(sliderRow('roughness', mm.roughness, 0, 1, 0.01, v => { mm.roughness = v; }));
    }
    if ('metalness' in mm && typeof mm.metalness === 'number') {
      wrap.appendChild(sliderRow('metalness', mm.metalness, 0, 1, 0.01, v => { mm.metalness = v; }));
    }
    if ('opacity' in mm) {
      wrap.appendChild(sliderRow('opacity', mm.opacity, 0, 1, 0.01, v => {
        mm.opacity = v;
        mm.transparent = v < 1;
        mm.needsUpdate = true;
      }));
    }
    this.panel.appendChild(wrap);
  }
}

/**
 * Wrap a single instance of an InstancedMesh in a standalone Object3D so the
 * editor's existing transform UI can edit just that instance. Writes back to
 * the source InstancedMesh's instance matrix on every mutation via `onMutate`.
 */
function makeInstanceProxy(source: THREE.InstancedMesh, instanceId: number): THREE.Object3D {
  const proxy = new THREE.Object3D();
  proxy.name = `${source.name || source.parent?.name || 'Instance'}[${instanceId}]`;
  const m = new THREE.Matrix4();
  source.getMatrixAt(instanceId, m);
  m.decompose(proxy.position, proxy.quaternion, proxy.scale);
  proxy.userData.isInstanceProxy = true;
  proxy.userData.source = source;
  proxy.userData.instanceId = instanceId;
  proxy.userData.onMutate = () => {
    const out = new THREE.Matrix4();
    out.compose(proxy.position, proxy.quaternion, proxy.scale);
    source.setMatrixAt(instanceId, out);
    source.instanceMatrix.needsUpdate = true;
  };
  return proxy;
}

// ---------- small DOM helpers (kept local; not exported) ----------

function button(label: string, onClick: () => void): HTMLButtonElement {
  const b = document.createElement('button');
  b.textContent = label;
  b.style.cssText = 'background:#2a2a3a;color:#ddd;border:1px solid #555;border-radius:3px;padding:3px 6px;cursor:pointer;font:11px monospace';
  b.addEventListener('click', onClick);
  return b;
}

function row(label: string, control: HTMLElement): HTMLDivElement {
  const r = document.createElement('div');
  r.style.cssText = 'display:flex;align-items:center;gap:6px;margin:2px 0';
  const l = document.createElement('label');
  l.textContent = label;
  l.style.cssText = 'width:64px;color:#aaa';
  r.appendChild(l);
  r.appendChild(control);
  return r;
}

function numberInput(value: number, step: number, onInput: (v: number) => void): HTMLInputElement {
  const i = document.createElement('input');
  i.type = 'number';
  i.step = String(step);
  i.value = value.toFixed(4);
  i.style.cssText = 'flex:1;background:#222;color:#ddd;border:1px solid #444;padding:2px 4px;font:11px monospace';
  i.addEventListener('input', () => {
    const v = parseFloat(i.value);
    if (!isNaN(v)) onInput(v);
  });
  return i;
}

function vec3Row(v: THREE.Vector3, axis: 'x' | 'y' | 'z', step: number, after?: () => void): HTMLDivElement {
  return row(axis.toUpperCase(), numberInput(v[axis], step, val => { v[axis] = val; after?.(); }));
}

function eulerRow(e: THREE.Euler, axis: 'x' | 'y' | 'z', after?: () => void): HTMLDivElement {
  const deg = (e[axis] * 180) / Math.PI;
  return row(axis.toUpperCase(), numberInput(deg, 1, val => {
    e[axis] = (val * Math.PI) / 180;
    after?.();
  }));
}

function sliderRow(label: string, value: number, min: number, max: number, step: number, onInput: (v: number) => void): HTMLDivElement {
  const i = document.createElement('input');
  i.type = 'range';
  i.min = String(min); i.max = String(max); i.step = String(step); i.value = String(value);
  i.style.cssText = 'flex:1';
  const out = document.createElement('span');
  out.textContent = value.toFixed(2);
  out.style.cssText = 'width:36px;text-align:right;color:#9cf';
  i.addEventListener('input', () => {
    const v = parseFloat(i.value);
    onInput(v);
    out.textContent = v.toFixed(2);
  });
  const wrap = row(label, i);
  wrap.appendChild(out);
  return wrap;
}

function colorRow(label: string, c: THREE.Color): HTMLDivElement {
  const i = document.createElement('input');
  i.type = 'color';
  i.value = '#' + c.getHexString();
  i.style.cssText = 'width:48px;height:22px;background:transparent;border:1px solid #444;cursor:pointer';
  i.addEventListener('input', () => c.set(i.value));
  return row(label, i);
}

function toggleRow(label: string, value: boolean, onChange: (v: boolean) => void): HTMLDivElement {
  const i = document.createElement('input');
  i.type = 'checkbox';
  i.checked = value;
  i.addEventListener('change', () => onChange(i.checked));
  return row(label, i);
}
