import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})
