import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://151.80.117.157:8081', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
