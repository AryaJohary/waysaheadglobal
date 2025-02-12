import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/waysaheadglobal/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});