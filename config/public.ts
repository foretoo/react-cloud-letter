import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  publicDir: false,
  assetsInclude: ".css",
  plugins: [ react() ],
  build: {
    minify: true,
    emptyOutDir: false,
    assetsDir: ".",
    rollupOptions: {
      input: "/src/index.tsx",
      output: {
        dir: "public",
        assetFileNames: "style.css",
        entryFileNames: "bundle.js",
      },
    }
  },
})
