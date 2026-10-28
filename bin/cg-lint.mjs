#!/usr/bin/env node
/**
 * cg-lint — detecta estilos que se salen del CG Design System.
 *
 *   npx cg-lint [directorio=src] [--json] [--max=20]
 *
 * Sin dependencias. Sale con código 1 si hay errores (sirve para CI / pre-commit).
 * Para exceptuar una línea puntual: agregar el comentario `cg-lint-ignore` en esa línea.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const args = process.argv.slice(2);
const root = args.find((a) => !a.startsWith("--")) ?? "src";
const asJson = args.includes("--json");
const maxShown = Number(
  args.find((a) => a.startsWith("--max="))?.split("=")[1] ?? 20,
);

const EXTENSIONS = new Set([
  ".tsx",
  ".jsx",
  ".ts",
  ".js",
  ".vue",
  ".svelte",
  ".html",
  ".css",
  ".scss",
]);
const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".git",
  ".next",
  "__tests__",
]);
// Los archivos de tokens son el único lugar donde se permiten valores crudos
const SKIP_FILES =
  /(^|[\\/])(cg-)?(tokens|tailwind|components)\.(css|ts)$|\.(test|spec|stories)\.[jt]sx?$/;

const PALETTE =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const COLOR_PREFIX =
  "bg|text|border|ring|ring-offset|from|to|via|fill|stroke|divide|outline|accent|decoration|placeholder|caret|shadow";

const RULES = [
  {
    id: "color-hex",
    level: "error",
    regex: /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g,
    fix: "Usar un token: clase bg-cg-* / text-cg-* / border-cg-*, o var(--cg-*) en CSS.",
  },
  {
    id: "color-funcion",
    level: "error",
    regex: /\b(?:rgba?|hsla?|oklch)\(\s*\d[^)]*\)/g,
    fix: "Usar var(--cg-*). Para transparencias en Tailwind: bg-cg-primary/10.",
  },
  {
    id: "paleta-tailwind",
    level: "warn",
    regex: new RegExp(
      `\\b(?:${COLOR_PREFIX})-(?:${PALETTE})-\\d{2,3}(?:\\/\\d+)?\\b`,
      "g",
    ),
    fix: "Reemplazar por el token semántico (ver Fundamentos / Colores en la documentación).",
  },
  {
    id: "texto-menor-a-10px",
    level: "error",
    regex: /\btext-\[[0-9](?:\.\d+)?px\]|font-size:\s*[0-9](?:\.\d+)?px/g,
    fix: "El mínimo legible es 10px: usar text-micro.",
  },
  {
    id: "tamano-arbitrario",
    level: "warn",
    regex: /\btext-\[\d+(?:\.\d+)?(?:px|rem|em)\]/g,
    fix: "Usar la escala: text-micro (10) · text-caption (11) · text-xs · text-sm · text-base · text-lg · text-xl · text-2xl.",
  },
  {
    id: "radio-arbitrario",
    level: "warn",
    regex: /\brounded(?:-[a-z]{1,2})?-\[[^\]]+\]/g,
    fix: "Usar rounded-2xl (botones y modales), rounded-xl (campos y cards), rounded-full (badges).",
  },
  {
    id: "fuente-propia",
    level: "error",
    regex: /font-family:\s*(?!\s|inherit|var\()[^;]+|\bfont-\[[^\]]+\]/g,
    fix: "La tipografía se define solo en --cg-font-sans / --cg-font-mono.",
  },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(extname(name)) && !SKIP_FILES.test(name))
      yield full;
  }
}

const findings = [];
let fileCount = 0;

try {
  for (const file of walk(root)) {
    fileCount++;
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      if (line.includes("cg-lint-ignore")) return;
      const reported = new Set();
      for (const rule of RULES) {
        for (const match of line.matchAll(rule.regex)) {
          // Una misma coincidencia se informa una sola vez, con la regla más específica
          const key = `${match.index}:${match[0]}`;
          if (reported.has(key)) continue;
          reported.add(key);
          findings.push({
            rule: rule.id,
            level: rule.level,
            file: relative(process.cwd(), file).replaceAll("\\", "/"),
            line: i + 1,
            match: match[0].trim(),
          });
        }
      }
    });
  }
} catch (error) {
  console.error(`cg-lint: no se pudo leer "${root}" (${error.message})`);
  process.exit(2);
}

const errors = findings.filter((f) => f.level === "error").length;
const warnings = findings.length - errors;

if (asJson) {
  console.log(
    JSON.stringify({ files: fileCount, errors, warnings, findings }, null, 2),
  );
} else {
  for (const rule of RULES) {
    const hits = findings.filter((f) => f.rule === rule.id);
    if (!hits.length) continue;

    console.log(
      `\n${rule.level === "error" ? "ERROR" : "AVISO"}  ${rule.id}  (${hits.length})`,
    );
    console.log(`  → ${rule.fix}`);

    const byValue = new Map();
    for (const hit of hits)
      byValue.set(hit.match, (byValue.get(hit.match) ?? 0) + 1);
    const top = [...byValue].sort((a, b) => b[1] - a[1]).slice(0, 8);
    console.log(
      `  más frecuentes: ${top.map(([value, n]) => `${value} ×${n}`).join(", ")}`,
    );

    for (const hit of hits.slice(0, maxShown))
      console.log(`  ${hit.file}:${hit.line}  ${hit.match}`);
    if (hits.length > maxShown)
      console.log(
        `  … y ${hits.length - maxShown} más (usar --max=N o --json)`,
      );
  }
  console.log(
    `\n${fileCount} archivos revisados — ${errors} errores, ${warnings} avisos${findings.length ? "" : " ✓ todo dentro del sistema"}`,
  );
}

process.exit(errors ? 1 : 0);
