# Merge prep: fold the best of `codex/wow-tbc-aesthetic` into `wow-aesthetic`

Two branches independently chased the same goal (WoW TBC outdoor look) from the
same base commit `0df292b`:

- **`wow-aesthetic`** (this worktree, `../wow-arena-aesthetic`) — committed as
  `3aaa28e`.
- **`codex/wow-tbc-aesthetic`** (`../wow-arena-codex-tbc`) — **uncommitted working
  tree only, no commits past base.**

> ⚠️ Because codex has no commits, you cannot `git merge`/`cherry-pick` it. Either
> commit its working tree first on its own branch, or port the wanted pieces by
> copying files / re-applying hunks by hand. This doc assumes the manual port.

This is a **preparation doc only — nothing has been merged yet.**

---

## 1. Convergent / duplicate work — IGNORE (already covered by `wow-aesthetic`)

The two branches arrived at near-identical solutions here. Ours is in place; do
**not** take codex's versions (avoid pointless churn/conflicts):

| Area | Both did | Notes |
|---|---|---|
| `tools/screenshot.mjs` `--clean` flag | Hide all non-`CANVAS` body children + hide `AxisGizmo` | **Implementations are character-for-character identical.** Keep ours. |
| `src/grass.ts` neon-spike fix | Denser (`24k`–`38k`), shorter (~`0.48`), warm olive→lime, base-occlusion `clarity ≈ 0.24*uv.y + 0.76`, **per-channel tint clamp** to kill blue spikes | Same fix. Keep ours (count 38k vs their 24k — taste, see §4). |
| `src/grass.ts` inner radius | Decoupled from prop-exclusion via `Math.min(innerRadius, 2.5)` | Identical. Keep ours. |
| `src/terrain.ts` bands | Warm golden-green lowlands → olive → tan → pale rock | Same intent, slightly different hexes (§4). |
| Full-map water plane | **Removed** from `createArena()` (was washing the basin teal) | Identical decision. Keep ours. |
| `src/trees.ts` black-blob fix | Lighter warm-green foliage + **lit brown `MeshStandardMaterial` trunk** (was unlit black); broadened trunk material type | Same fix, near-identical hexes (§4). |
| `src/proceduralTree.ts` | Warm trunk + lighter foliage default | Same. |
| `src/atmosphere.ts` grade | Lower warmth (`0.035`) + near-neutral shadows (`0.008`) | Same direction; saturation/exposure differ (§4). |
| `package.json` | Added `puppeteer` devDep | Identical (the screenshot tool always needed it). |

---

## 2. Unique to codex — INCORPORATE (it did these and we don't have them)

Ranked by aesthetic payoff.

### 2a. Procedural structures library — **HIGH value** ⭐
- **New file:** `src/procedural-structures.js` (~511 lines). A framework-agnostic
  builder kit: `createCrate`, `createBarrel`, `createBanner`, `createCampfire`,
  `createFenceSegment`, `createWell`, `createRockFormation`, `createRoundHut`,
  `createLonghouse`, `createMarketStall`, `createWatchtower`, `createVillageGate`,
  `createCastleKeep`, `createVillageCluster`, `createStructureGallery`. Exports
  `DEFAULT_STRUCTURE_PALETTE` + `makeRng`.
- **Why:** the TBC reference shots (Area52, the Elwynn village in `hq720`) are
  defined by *buildings*. Our scene has only the old simple single hut. This is
  the single biggest thing we're missing.
- Each builder attaches `userData.collider` so colliders can be extracted after
  world-matrix placement.

### 2b. Village clusters wired into the ecosystem — **HIGH value** ⭐
- `src/ecosystem.ts` changes:
  - New `villageCount` param (default `2`) + editor schema entry.
  - `buildVillages()` scatters `createVillageCluster(...)` (some `fortified`) as
    scenic landmarks *outside* the combat ring, with full world-space collider
    extraction (handles cylinder + rotated box).
  - Replaces the inline `buildSingleHut` with `createRoundHut(...)` from 2a.
  - `toStructurePalette(palette)` maps the biome palette → structure palette
    (plaster/thatch/stone + auto-derived light/dark variants).
  - `getColliders()` also collects the `Villages` group's colliders.
- Depends on 2a.

### 2c. Layered pillars + unified warm stone material — **MEDIUM value**
- `src/arena.ts`:
  - `createStoneMaterial(color)` helper (warm tan `0xb09a78`, no metalness)
    shared by pillars, ramps (`0x9c8465`), and walls (`0xa28b6e`) — replaces the
    old gray/brown `MeshStandard`s.
  - `createPillar` now returns a **`THREE.Group`** of stacked pieces (broad foot,
    tapered shaft, capital, conical cap, 6–8 radial segments) for a chunky
    hand-shaped TBC silhouette; collider radius widened to `1.45` to match the
    visible foot.
- Note: return type changes `THREE.Mesh` → `THREE.Group`; check any caller that
  assumed a mesh (none obvious, but verify).

### 2d. Browser-free structure renderer — **MEDIUM value (tooling)**
- **New file:** `tools/render-structures.mjs` (~140 lines). Renders structure
  contact sheets via `SVGRenderer` + `linkedom` + `sharp` — **no GPU/WebGL**.
  Writes multi-angle PNG sheets to `tools/screenshots/structures/`.
- **⚠️ Caveat:** needs `linkedom` and `sharp` as deps — **codex's `package.json`
  only added `puppeteer`, NOT these.** Add them when incorporating, or the
  `render:structures` script fails.

### 2e. npm scripts + README docs — **LOW value, easy**
- `package.json` scripts: `"screenshot": "node tools/screenshot.mjs"` and
  `"render:structures": "node tools/render-structures.mjs"`.
- `README.md`: a "Headless beauty screenshot" + "structure contact sheets"
  section. Worth adding (also document our `~/.local/node20` + `LD_LIBRARY_PATH`
  WSL quirk — codex's README omits it).

---

## 3. Palette / numeric deltas — RECONCILE (taste, decide deliberately; don't auto-take)

Where both branches touched the same knob with different values. Pick one set so
the look is internally consistent after merge — don't blend half-and-half.

| Knob | `wow-aesthetic` (ours) | `codex` | Suggested |
|---|---|---|---|
| grass `count` | 38000 | 24000 | ours (denser) — perf-check in swiftshader |
| grass `baseColor`/`tipColor` | `0x4e6b28` / `0x9bbf55` | `0x536f2f` / `0xa4c45b` | either; pick after a side-by-side |
| grass `bladeWidth` | 0.11 | 0.075 | ours reads fuller; compare |
| terrain low band | `0x5b7a2e` | `0x738f3e` | compare — codex is a touch more golden |
| foliage color | `0x5d8a37` | `0x5f8538` | negligible; keep ours |
| trunk color | `0x4a3526` | `0x5b3b22` | codex slightly warmer/lighter; compare |
| grade saturation | 1.17 | 1.06 | **decide** — meaningfully different punch |
| `toneMappingExposure` | 1.0 | 1.05 | compare |
| grade exposure uniform | 1.0 (we also set it) | unchanged | keep ours |
| fog haze near/far | 32 / 92 (ours) | unchanged (45/110) | keep ours (more depth) |
| sky start time | 11:00 (ours) | unchanged (09:00) | keep ours (brighter key) |

> Lighting interacts: codex pairs lower saturation (1.06) + exposure 1.05 and the
> default 9am sun; we pair higher saturation (1.17) + exposure 1.0 + 11am + warm
> ground bounce + pulled-in fog. **Take one lighting "recipe" wholesale rather
> than mixing**, then re-tune one knob at a time.

---

## 4. Risks & gotchas

- **Codex has no commits** — must commit its tree first or hand-port (see top).
- **`.js` structure module in a TS project**: `ecosystem.ts` imports it with
  `// @ts-ignore`. `tsc --noEmit` should pass (it's JS), but confirm. Consider a
  `.d.ts` later for type safety.
- **`render-structures.mjs` deps missing** (`linkedom`, `sharp`) — add them.
- **Merge conflicts guaranteed** in every shared file (`grass.ts`, `terrain.ts`,
  `trees.ts`, `atmosphere.ts`, `ecosystem.ts`, `arena.ts`, `main.ts`,
  `proceduralTree.ts`, `screenshot.mjs`, `package.json`, `.gitignore`). Resolve
  per §1–§3 rather than accepting either side blindly.
- **`createPillar` return type** changes Mesh→Group — verify callers.
- **Validate after porting**: `npx tsc --noEmit`, `npm test`, then a
  `--clean --hero` + `--aerial` screenshot to confirm villages/pillars read well
  and the palette stays consistent. (Run via the `~/.local/node20` +
  `LD_LIBRARY_PATH=~/.local/chromelibs` setup.)

---

## 5. Suggested incorporation order (when we actually do it)

1. Copy `src/procedural-structures.js` verbatim (no conflict — new file).
2. Copy `tools/render-structures.mjs`; add `linkedom` + `sharp` to devDeps; add
   the two npm scripts.
3. Port `ecosystem.ts` village wiring (`buildVillages`, `toStructurePalette`,
   `createRoundHut` swap, `villageCount` param + schema, `getColliders` update)
   on top of *our* grass/palette lines.
4. Port `arena.ts` `createStoneMaterial` + layered `createPillar`.
5. Reconcile §3 palette/lighting deltas — pick one recipe, screenshot, tune.
6. Add README screenshot/structures docs (+ our WSL node/lib quirk).
7. `tsc --noEmit` + `npm test` + clean beauty screenshots to validate.

---

## Checklist

- [ ] Commit codex tree (or hand-port) so changes are portable
- [ ] Add `src/procedural-structures.js`
- [ ] Add `tools/render-structures.mjs` + `linkedom`/`sharp` deps + npm scripts
- [ ] Port ecosystem village clusters (keep our grass/palette edits)
- [ ] Port layered pillars + warm stone material
- [ ] Pick a single lighting/palette recipe (§3) and screenshot-verify
- [ ] README docs (incl. WSL node/lib setup)
- [ ] `tsc --noEmit`, `npm test`, `--clean` hero + aerial screenshots
