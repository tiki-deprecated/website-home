import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import ViteFaviconsPlugin from 'vite-plugin-favicon'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    ViteFaviconsPlugin({
      logo: './src/assets/images/tiki-logo.png'
    })
  ],
  css: {
    devSourcemap: true
  },
  build: {
    cssMinify: true,
    rollupOptions: {
      treeshake: {
        preset: 'smallest'
      }
    },
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
