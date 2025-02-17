import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  build: {
    outDir: '../server/frontend',
    emptyOutDir: true
  },

  resolve: {
    alias: {
      '@' : path.resolve(import.meta.dirname, 'src'),
      '@app' : path.resolve(import.meta.dirname, 'src/app'),
      '@pages' : path.resolve(import.meta.dirname, 'src/pages'),
      '@entities' : path.resolve(import.meta.dirname, 'src/entities'),
      '@shared' : path.resolve(import.meta.dirname, 'src/shared'),
    }
  },

  plugins: [vue()],
})
