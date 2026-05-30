import { defineConfig } from 'vite';

export default defineConfig({
  base: '/threejs-arena/',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 3000,
    open: true,
    // The repo lives on a Windows-mounted path (/mnt/c) under WSL2, where
    // inotify file events don't fire — without polling, Vite never sees edits
    // and serves stale modules. Polling makes HMR/reload actually work here.
    watch: {
      usePolling: true,
      interval: 200
    }
  }
});
