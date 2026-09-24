import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({ mode, command }) => ({
  base: command === 'build' && mode === 'github-pages' ? '/jtcc-business-pitch/' : '/',
  plugins: [react(), tailwindcss()],
}));
