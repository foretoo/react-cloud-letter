import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vitejs.dev/config/
export default defineConfig({
  mode: "production",
  publicDir: false,
  assetsInclude: ".css",
  plugins: [ preact() ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  build: {
    minify: true,
    emptyOutDir: false,
    assetsDir: ".",
    rollupOptions: {
      input: "/src/public.tsx",
      output: {
        dir: "public",
        assetFileNames: "style.css",
        entryFileNames: "bundle.js",
      },
    }
  },
})
