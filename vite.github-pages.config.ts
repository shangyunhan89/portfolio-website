import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

const pagesBasePath = process.env.PAGES_BASE_PATH || '/';

export default defineConfig({
  base: pagesBasePath,
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [
    {
      name: 'github-pages-public-assets',
      enforce: 'pre',
      transform(code, id) {
        if (id.includes('node_modules') || !/\.[cm]?[jt]sx?$/.test(id)) return;

        return code.replace(
          /(['"])\/(images|icons)\//g,
          `$1${pagesBasePath}$2/`,
        );
      },
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, '.'),
    },
  },
  build: {
    outDir: 'dist-pages',
    emptyOutDir: true,
  },
});
