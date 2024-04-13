import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './public',
    emptyOutDir: false,
  },
  server: {
    proxy: {
      // '/': 'http://localhost:3000',
      '/api/server/newpost': 'http://localhost:3000',
      '/api/server/posts': 'http://localhost:3000',
      '/api/server/users': 'http://localhost:3000',
      '/api/server/getuser': 'http://localhost:3000',
      '/api/server/savesetting': 'http://localhost:3000',
      '/api/server/changepassword': 'http://localhost:3000',
      '/api/server/saveemail': 'http://localhost:3000',
    },
  },
  plugins: [react()],
});
