// vite.config.js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import path from 'path';

const resolveSrc = (file) => path.resolve(__dirname, 'src', file);

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolveSrc(''),
    },
  },
});
