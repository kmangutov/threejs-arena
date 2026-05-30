# TBC Aesthetic Integration

To bring the latest environment work into another branch, cherry-pick the
`codex/wow-tbc-aesthetic` commit and resolve any ecosystem edits in favor of
the shared structure builders in `src/procedural-structures.js`.

The newest pieces are the procedural huts, castle, watchtower, gate, rocks,
village props, and seeded village clusters wired into `src/ecosystem.ts`.
Use `npm run render:structures` to regenerate the multi-angle PNG contact
sheets under `tools/screenshots/structures/` after merging.
