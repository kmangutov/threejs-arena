/**
 * Snapshot system — capture canvas PNG + scene pose (camera, player) to JSON.
 *
 * Hotkeys:
 *   F2 — take snapshot (image downloaded; pose stored in localStorage and
 *        offered as a download via the panel)
 *   F3 — toggle snapshot panel (list / restore / re-download)
 *
 * Pose JSON captures camera position, yaw, pitch, distance, plus the
 * player's world position and facing. Restore re-applies these so a saved
 * vantage point can be reproduced for evaluation.
 */

import * as THREE from 'three';
import type { CameraRig } from './camera';
import type { PlayerController } from './player';

const STORAGE_KEY = 'wow-arena.snapshots.v1';
const MAX_SNAPSHOTS = 30;

export interface Pose {
  camera: {
    position: [number, number, number];
    yaw: number;
    pitch: number;
    distance: number;
  };
  player: {
    position: [number, number, number];
    facingYaw: number;
  };
  gameTimeMinutes?: number;
}

export interface SnapshotRecord {
  id: string;
  label: string;
  timestamp: number;
  thumbnail: string; // data URL, scaled-down
  pose: Pose;
}

interface Hooks {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  rig: CameraRig;
  player: PlayerController;
}

export class SnapshotSystem {
  private readonly hooks: Hooks;
  private records: SnapshotRecord[] = [];
  private panel: HTMLDivElement;
  private open = false;

  constructor(hooks: Hooks) {
    this.hooks = hooks;
    this.records = loadStored();
    this.panel = this.buildPanel();
    document.body.appendChild(this.panel);

    window.addEventListener('keydown', (e) => {
      if (e.code === 'F2') { e.preventDefault(); this.capture(); }
      if (e.code === 'F3') { e.preventDefault(); this.toggle(); }
    });

    this.renderList();
  }

  capture(label?: string): SnapshotRecord {
    // Force a fresh frame so the canvas pixels match current scene state.
    this.hooks.renderer.render(this.hooks.scene, this.hooks.camera);
    const canvas = this.hooks.renderer.domElement;
    const fullDataUrl = canvas.toDataURL('image/png');
    const thumb = downscale(canvas, 192);

    const pose = this.readPose();
    const id = `snap-${Date.now()}`;
    const rec: SnapshotRecord = {
      id,
      label: label ?? new Date().toLocaleTimeString(),
      timestamp: Date.now(),
      thumbnail: thumb,
      pose,
    };
    this.records.unshift(rec);
    if (this.records.length > MAX_SNAPSHOTS) this.records.length = MAX_SNAPSHOTS;
    persist(this.records);

    // Trigger a PNG download for the full-resolution image.
    download(fullDataUrl, `${id}.png`);
    // And a sidecar JSON with the pose.
    download(jsonBlobUrl(pose), `${id}.json`);

    this.renderList();
    console.log('[snapshot]', id, pose);
    return rec;
  }

  restore(id: string): void {
    const rec = this.records.find(r => r.id === id);
    if (!rec) return;
    this.applyPose(rec.pose);
  }

  toggle(): void {
    this.open = !this.open;
    this.panel.style.display = this.open ? 'block' : 'none';
  }

  // --- pose I/O ----------------------------------------------------------

  private readPose(): Pose {
    const cam = this.hooks.camera as THREE.PerspectiveCamera;
    const rig = this.hooks.rig as unknown as Record<string, number>;
    return {
      camera: {
        position: [cam.position.x, cam.position.y, cam.position.z],
        yaw: (rig.currentYaw ?? rig.targetYaw ?? 0) as number,
        pitch: (rig.currentPitch ?? rig.targetPitch ?? 0) as number,
        distance: (rig.targetDistance ?? 8) as number,
      },
      player: {
        position: [
          this.hooks.player.position.x,
          this.hooks.player.position.y,
          this.hooks.player.position.z,
        ],
        facingYaw: this.hooks.player.facingYaw,
      },
    };
  }

  private applyPose(p: Pose): void {
    this.hooks.player.position.set(...p.player.position);
    this.hooks.player.facingYaw = p.player.facingYaw;
    // Touch private rig fields via index — keeps editor decoupled from camera.ts
    const rig = this.hooks.rig as unknown as Record<string, number>;
    rig.targetYaw = p.camera.yaw;
    rig.currentYaw = p.camera.yaw;
    rig.targetPitch = p.camera.pitch;
    rig.currentPitch = p.camera.pitch;
    rig.targetDistance = p.camera.distance;
    // CameraRig.update on the next frame will move the camera into place.
  }

  // --- panel -------------------------------------------------------------

  private buildPanel(): HTMLDivElement {
    const p = document.createElement('div');
    p.id = 'snapshot-panel';
    p.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; width: 240px;
      max-height: 60vh; overflow: auto;
      background: rgba(20, 20, 28, 0.92); border: 1px solid #555;
      border-radius: 6px; color: #ddd; font: 11px/1.4 monospace;
      padding: 8px; z-index: 1000; display: none;
    `;
    return p;
  }

  private renderList(): void {
    this.panel.innerHTML = '';
    const header = document.createElement('div');
    header.innerHTML = `<b style="color:#ffd57a">Snapshots</b> <span style="color:#888">[F2] capture · [F3] toggle</span>`;
    header.style.marginBottom = '6px';
    this.panel.appendChild(header);

    const cap = document.createElement('button');
    cap.textContent = 'Capture now (F2)';
    cap.style.cssText = 'width:100%;background:#2a4a2a;color:#dfd;border:1px solid #4f6;padding:4px;cursor:pointer;margin-bottom:6px;font:11px monospace';
    cap.addEventListener('click', () => this.capture());
    this.panel.appendChild(cap);

    if (!this.records.length) {
      const e = document.createElement('div');
      e.style.color = '#888';
      e.textContent = 'No snapshots yet.';
      this.panel.appendChild(e);
      return;
    }

    for (const rec of this.records) {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;gap:6px;margin:4px 0;padding:4px;border:1px solid #333;border-radius:3px';

      const img = document.createElement('img');
      img.src = rec.thumbnail;
      img.style.cssText = 'width:64px;height:36px;object-fit:cover;border:1px solid #222';
      row.appendChild(img);

      const meta = document.createElement('div');
      meta.style.cssText = 'flex:1;display:flex;flex-direction:column;gap:2px';
      const t = document.createElement('div');
      t.textContent = rec.label;
      t.style.color = '#9cf';
      meta.appendChild(t);

      const btns = document.createElement('div');
      btns.style.cssText = 'display:flex;gap:4px';
      btns.appendChild(miniBtn('Restore', () => this.restore(rec.id)));
      btns.appendChild(miniBtn('JSON', () => download(jsonBlobUrl(rec.pose), `${rec.id}.json`)));
      btns.appendChild(miniBtn('×', () => {
        this.records = this.records.filter(r => r.id !== rec.id);
        persist(this.records);
        this.renderList();
      }));
      meta.appendChild(btns);

      row.appendChild(meta);
      this.panel.appendChild(row);
    }
  }
}

// ---------- helpers ----------

function miniBtn(label: string, onClick: () => void): HTMLButtonElement {
  const b = document.createElement('button');
  b.textContent = label;
  b.style.cssText = 'background:#2a2a3a;color:#ddd;border:1px solid #555;border-radius:3px;padding:2px 4px;cursor:pointer;font:10px monospace';
  b.addEventListener('click', onClick);
  return b;
}

function downscale(src: HTMLCanvasElement, maxW: number): string {
  const ratio = src.height / src.width;
  const w = Math.min(maxW, src.width);
  const h = Math.round(w * ratio);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  ctx.drawImage(src, 0, 0, w, h);
  return c.toDataURL('image/jpeg', 0.7);
}

function download(url: string, filename: string): void {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function jsonBlobUrl(obj: unknown): string {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  return URL.createObjectURL(blob);
}

function loadStored(): SnapshotRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persist(records: SnapshotRecord[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    // Likely quota exceeded; trim and retry once.
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, 10)));
    } catch {
      console.warn('[snapshot] failed to persist:', e);
    }
  }
}
