import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        manualChunks: undefined,
        assetFileNames: "[name].[ext]",
      },
    },
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1500,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
