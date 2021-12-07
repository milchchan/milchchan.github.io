import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].js",
        manualChunks: undefined,
        assetFileNames: "assets/[name].[ext]",
      },
    },
    cssCodeSplit: false,
    chunkSizeWarningLimit: 500,
  },
  plugins: [vue()]
})
