import { crx } from '@crxjs/vite-plugin';
import path from 'node:path';
import { defineConfig } from 'vite';
import manifest from './src/manifest';

export default defineConfig({
  plugins: [crx({ manifest })],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5184,
    strictPort: true,
    hmr: { port: 5185 },
  },
});
