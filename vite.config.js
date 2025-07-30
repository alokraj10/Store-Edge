import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Store-Edge/' : '/',
  server: {
    port: 5173,
    strictPort: true // Prevent port hopping
  },
  preview: {
    port: 4173
  }
});