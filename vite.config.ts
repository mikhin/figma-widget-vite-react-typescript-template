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
        api: resolve(__dirname, 'src', 'api', 'index.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
    target: 'es2015',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '~api': resolve(__dirname, 'src', 'api'),
      '~test-utils': resolve(__dirname, 'src', 'test-utils'),
      '~types': resolve(__dirname, 'src', 'types'),
      '~utils': resolve(__dirname, 'src', 'utils'),
    },
  },
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: resolve(__dirname, 'coverage', 'api'),
    },
    exclude: ['node_modules', 'src/ui/**/*.spec.tsx'],
    name: 'api',
  },
});
