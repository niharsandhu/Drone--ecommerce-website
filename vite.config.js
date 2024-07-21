// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/javascript': ['js', 'jsx'],
      'text/css': ['css'],
      'text/html': ['html']
    }
  },
  build: {
    rollupOptions: {
      external: ['@splidejs/react-splide'],}}
});
