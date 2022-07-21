import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  build: {
    // minify: false,
    assetsDir: ".",
    rollupOptions: {
      input: "/src/index.tsx",
      // output: {
      //   dir: "dist",
      //   assetFileNames: "style.css",
      //   entryFileNames: "bundle.js",
      // },
      external: [
        "react",
        "react-dom"
      ],
    }
  },
  server: {
    open: "/src/index.html",
    host: true,
  },
})
