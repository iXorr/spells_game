import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(import.meta.dirname, 'src'),
      '@app' : path.resolve(import.meta.dirname, 'src/app'),
      '@widgets' : path.resolve(import.meta.dirname, 'src/widgets'),
      '@shared' : path.resolve(import.meta.dirname, 'src/shared'),
    }
  },

  plugins: [vue()],
})
