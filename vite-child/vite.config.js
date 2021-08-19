import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/micro-app/vite/`,
  plugins: [vue()],
  server: {
    port: 3002,
    cors: true
  }
})
