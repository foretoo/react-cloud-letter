import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  publicDir: false,
  plugins: [ react() ],
  build: {
    lib: {
      entry: "/src/component/cloud-letter.tsx",
      name: "cloud-letter",
      formats: [ "es" ],
    },
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: "cloud-style.css",
      },
      external: [
        "react",
        "react-dom"
      ],
    }
  },
})
