import path from "path"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias:{
      "@": path.resolve(__dirname,"./src")
    }
  },
  server: {
    proxy: {
      '/api': {
        target: "https://tempfortest-frontend.onrender.com", // Replace with your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
