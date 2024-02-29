/// <reference types="vitest" />
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: true,
    outDir: 'dist',
    rollupOptions: {
      input: {
        api: resolve(__dirname, 'src', 'main.tsx'),
      },
      output: {
        entryFileNames: 'code.js',
      },
    },
    target: 'es2015',
  },
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: resolve(__dirname, 'coverage', 'api'),
    },
  },
});
