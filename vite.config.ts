import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const figmaWidgetReactPlugin = react({
  babel: {
    plugins: [
      // Custom JSX factory for Figma widgets
      [
        '@babel/plugin-transform-react-jsx',
        { pragma: 'figma.widget.h', pragmaFrag: 'figma.widget.Fragment' },
      ],
    ],
  },
});

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
  plugins: [figmaWidgetReactPlugin],
});
