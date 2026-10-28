#!/usr/bin/env node
/**
 * copy-assets — copia a dist/ lo que se publica tal cual, sin pasar por el build de Vite:
 *
 *   - tokens.css (variables CSS, para quien no use el theme de MUI)
 *   - los logos
 */
import { copyFileSync, cpSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

for (const file of ["tokens.css"]) {
  copyFileSync(join(root, "src/styles", file), join(root, "dist", file));
}
cpSync(join(root, "src/assets/logos"), join(root, "dist/logos"), {
  recursive: true,
});
