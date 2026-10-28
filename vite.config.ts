/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Build en modo librería: genera dist/index.js (ESM).
// Los tipos (.d.ts) los emite `tsc -p tsconfig.build.json`.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      // Los provee el proyecto que instala la lib: no se incluyen en el build
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^@mui\//,
        /^@emotion\//,
        // La fuente la resuelve el bundler del proyecto (CSS + woff2)
        /^@fontsource-variable\//,
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    css: true,
    passWithNoTests: true,
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.stories.tsx", "src/index.ts"],
    },
  },
});
