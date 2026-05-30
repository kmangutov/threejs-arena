#!/usr/bin/env node
/**
 * Headless screenshot of the running game.
 *
 * Usage: node tools/screenshot.mjs [--url=...] [--out=path.png] [--wait=ms] [--editor] [--snapshotpanel]
 */

import puppeteer from 'puppeteer';
import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);

const url = args.url || 'http://localhost:3000/threejs-arena/?mode=standalone';
const out = args.out || 'tools/screenshots/latest.png';
const wait = parseInt(args.wait || '2500', 10);

mkdirSync(dirname(out), { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  args: [
    '--no-sandbox',
    '--headless=new',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--use-gl=angle',
    '--disable-gpu-sandbox',
  ],
  defaultViewport: { width: 1280, height: 720 },
});

const page = await browser.newPage();
const errors = [];
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', msg => {
  if (msg.type() === 'error') errors.push('console: ' + msg.text());
});

await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, wait));

if (args.clean) {
  // Beauty shot: hide the gameplay HUD overlays and the dev axis gizmo so the
  // frame is pure world. Keeps the 3D look comparable to the WoW reference shots.
  await page.evaluate(() => {
    // Hide every body child except the WebGL canvas — robustly strips all HUD,
    // help text, dev panels and any injected overlays.
    for (const el of Array.from(document.body.children)) {
      if (el.tagName !== 'CANVAS') el.style.display = 'none';
    }
    const g = (window).__game;
    const gizmo = g?.scene?.getObjectByName?.('AxisGizmo');
    if (gizmo) gizmo.visible = false;
  });
  await new Promise(r => setTimeout(r, 100));
}

if (args.grasscloseup) {
  // Move player into a grass-dense area + zoom camera in for a stomp shot.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    // Shrink grass exclusion so it spawns under the player.
    const eco = g.scene.children.find(c => c.name === 'Ecosystem');
    if (eco?.userData?.editableParams) {
      eco.userData.editableParams.set({ innerRadius: 0 });
    }
    // Position player + tighten camera.
    g.player.position.set(14, 0, 0);
    g.cameraRig.targetDistance = 4;
    g.cameraRig.currentDistance = 4;
    g.cameraRig.targetPitch = 0.55;
    g.cameraRig.currentPitch = 0.55;
  });
  await new Promise(r => setTimeout(r, 700));
}

if (args.hitboxes) {
  await page.evaluate(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'F4' }));
  });
  await new Promise(r => setTimeout(r, 300));
}

if (args.dencam) {
  // Place player ON the den, take a steep overhead so den + wolves are framed.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const den = g.scene.getObjectByName('WolvesSpawningGround');
    if (!den) { console.log('[dencam] no den found'); return; }
    g.player.position.set(den.position.x, 0, den.position.z);
    g.cameraRig.targetDistance = 16;
    g.cameraRig.currentDistance = 16;
    g.cameraRig.targetPitch = 1.0;
    g.cameraRig.currentPitch = 1.0;
    g.cameraRig.targetYaw = 0;
    g.cameraRig.currentYaw = 0;
    console.log('[dencam] den at', den.position.x, den.position.z);
  });
  await new Promise(r => setTimeout(r, 700));
}

if (args.dumpwolves) {
  // Print wolf states so we can verify hunt/attack flow without a UI.
  const dump = await page.evaluate(() => {
    const g = (window).__game;
    const wolves = g.wolves;
    if (!wolves) return 'no wolves';
    const arr = (wolves).wolves;
    return arr.map((w, i) => ({
      i,
      state: w.state,
      pos: [Math.round(w.pos.x), Math.round(w.pos.z)],
      hasPrey: !!w.prey,
      preyHp: w.prey ? Math.round(w.prey.hp) : null,
    }));
  });
  console.log('[wolves]', JSON.stringify(dump, null, 2));
}

if (args.combatcam) {
  // Find a wolf that's actively attacking and frame around its prey.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const arr = (g.wolves).wolves;
    // Prefer a wolf in attack state; fall back to hunt; fall back to first.
    let target = arr.find(w => w.state === 'attack')
              || arr.find(w => w.state === 'hunt')
              || arr[0];
    if (!target) return;
    const px = target.prey ? target.prey.pos.x : target.pos.x;
    const pz = target.prey ? target.prey.pos.z : target.pos.z;
    g.player.position.set(px, 0, pz);
    g.cameraRig.targetDistance = 6;
    g.cameraRig.currentDistance = 6;
    g.cameraRig.targetPitch = 0.45;
    g.cameraRig.currentPitch = 0.45;
    g.cameraRig.targetYaw = 0.6;
    g.cameraRig.currentYaw = 0.6;
  });
  await new Promise(r => setTimeout(r, 500));
}

if (args.rivercam) {
  // Top-down high-altitude view to show both river ribbons.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    g.player.position.set(0, 0, 0);
    g.cameraRig.targetDistance = 38;
    g.cameraRig.currentDistance = 38;
    g.cameraRig.targetPitch = 1.35;     // almost straight down
    g.cameraRig.currentPitch = 1.35;
    g.cameraRig.targetYaw = 0;
    g.cameraRig.currentYaw = 0;
  });
  await new Promise(r => setTimeout(r, 700));
}

if (args.hutcam) {
  // Walk camera to the nearest hut and frame it for hitbox visibility.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const eco = g.scene.children.find(c => c.name === 'Ecosystem');
    const huts = eco?.children.find(c => c.name === 'Huts');
    if (!huts || !huts.children.length) return;
    const hut = huts.children[0];
    // Player stands a bit east+north of the hut; camera looks back toward it.
    g.player.position.set(hut.position.x + 5, 0, hut.position.z + 5);
    g.cameraRig.targetDistance = 9;
    g.cameraRig.currentDistance = 9;
    g.cameraRig.targetPitch = 0.35;
    g.cameraRig.currentPitch = 0.35;
    // Yaw so the camera ends up between player and hut (camera placement is
    // behind player along -yaw, so yaw should point AWAY from hut).
    const ang = Math.atan2(5, 5);
    g.cameraRig.targetYaw = ang;
    g.cameraRig.currentYaw = ang;
  });
  await new Promise(r => setTimeout(r, 700));
}

if (args.bouldercam) {
  // Pan to the largest boulder in the scene.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const eco = g.scene.children.find(c => c.name === 'Ecosystem');
    if (!eco) return;
    const rocksGroup = eco.children.find(c => c.name === 'Rocks');
    if (!rocksGroup) return;
    const inst = rocksGroup.children[0];
    if (!inst || !inst.instanceMatrix) return;
    // Read raw scale from instanceMatrix.array (col-major).
    let biggest = { i: 0, s: 0, x: 0, z: 0, y: 0 };
    const arr = inst.instanceMatrix.array;
    for (let i = 0; i < inst.count; i++) {
      const o = i * 16;
      const sx = Math.hypot(arr[o + 0], arr[o + 1], arr[o + 2]);
      if (sx > biggest.s) biggest = { i, s: sx, x: arr[o + 12], y: arr[o + 13], z: arr[o + 14] };
    }
    g.player.position.set(biggest.x + 4, 0, biggest.z + 4);
    g.cameraRig.targetDistance = 9;
    g.cameraRig.currentDistance = 9;
    g.cameraRig.targetPitch = 0.3;
    g.cameraRig.currentPitch = 0.3;
    g.cameraRig.targetYaw = Math.atan2(-4, -4);
    g.cameraRig.currentYaw = Math.atan2(-4, -4);
    console.log('[bouldercam] biggest rock size=' + biggest.s.toFixed(2) + ' at', biggest.x.toFixed(1), biggest.y.toFixed(1), biggest.z.toFixed(1));
  });
  await new Promise(r => setTimeout(r, 800));
}

if (args.hero) {
  // A nicer cinematic angle for the final beauty shot.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const eco = g.scene.children.find(c => c.name === 'Ecosystem');
    if (eco?.userData?.editableParams) {
      eco.userData.editableParams.set({ innerRadius: 2 });
    }
    g.player.position.set(6, 0, 6);
    g.cameraRig.targetDistance = 10;
    g.cameraRig.currentDistance = 10;
    g.cameraRig.targetPitch = 0.35;
    g.cameraRig.currentPitch = 0.35;
    g.cameraRig.targetYaw = 1.2;
    g.cameraRig.currentYaw = 1.2;
  });
  await new Promise(r => setTimeout(r, 700));
}

if (args.aerial) {
  // Pull camera high and tilt down for an ecosystem review shot.
  await page.evaluate(() => {
    const g = (window).__game;
    if (!g) return;
    const rig = g.cameraRig;
    rig.targetDistance = 22;
    rig.targetPitch = 1.05; // ~60deg down
    rig.currentPitch = 1.05;
    rig.currentDistance = 22;
  });
  await new Promise(r => setTimeout(r, 300));
}

if (args.pose) {
  // --pose=x,y,z,yaw,pitch,distance
  await page.evaluate((pose) => {
    const g = (window).__game;
    if (!g) return;
    const [x, y, z, yaw, pitch, dist] = pose.split(',').map(Number);
    g.player.position.set(x, y, z);
    g.cameraRig.targetYaw = yaw;
    g.cameraRig.currentYaw = yaw;
    g.cameraRig.targetPitch = pitch;
    g.cameraRig.currentPitch = pitch;
    g.cameraRig.targetDistance = dist;
  }, args.pose);
  await new Promise(r => setTimeout(r, 300));
}

if (args.editor) {
  await page.evaluate(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Backquote' }));
  });
  await new Promise(r => setTimeout(r, 200));
}
if (args.biome) {
  // Switch ecosystem biome live (proves the param-set / regenerate flow).
  await page.evaluate((biome) => {
    const g = (window).__game;
    const eco = g.scene.children.find(c => c.name === 'Ecosystem');
    if (eco && eco.userData?.editableParams) {
      eco.userData.editableParams.set({ biome });
    }
  }, args.biome);
  await new Promise(r => setTimeout(r, 500));
}

if (args.snapshotpanel) {
  await page.evaluate(() => {
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'F3' }));
  });
  await new Promise(r => setTimeout(r, 200));
}

await page.screenshot({ path: out, type: 'png' });

console.log(JSON.stringify({ ok: true, out, errors }, null, 2));

await browser.close();
