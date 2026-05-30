import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/threejs-arena/',
  build: {
    outDir: 'docs',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        game: resolve(__dirname, 'index.html'),
        assetInspector: resolve(__dirname, 'asset-inspector.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
});
