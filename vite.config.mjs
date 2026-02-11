import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
        inlineDynamicImports: true,
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
