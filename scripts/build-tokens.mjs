#!/usr/bin/env node
/**
 * build-tokens — genera src/tokens.ts a partir de src/styles/tokens.css.
 *
 *   npm run tokens
 *
 * tokens.css es la fuente de verdad: después de editarlo hay que correr este script. El test
 * src/tokens.test.ts falla si los dos archivos quedan desincronizados.
 *
 * Genera dos exports con los mismos valores:
 *
 *   tokens — lista plana:        tokens.primaryHover, tokens.radiusButton
 *   theme  — agrupado por tema:  theme.colors.primary.hover, theme.radius.button
 *
 * Las referencias `var(--cg-*)` se resuelven a su valor final, así sirven donde no hay variables
 * CSS (tema de Material UI, gráficos, canvas).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/styles/tokens.css"), "utf8");

// Secciones de tokens.css cuyos tokens son colores: en `theme` van dentro de `colors`.
// Una sección nueva de colores hay que sumarla acá.
const COLOR_SECTIONS = new Set([
  "Marca",
  "Superficies",
  "Texto",
  "Bordes",
  "Estados semánticos",
  "Acentos decorativos",
  "Overlays",
]);

// tokens.css separa las secciones con comentarios del tipo `/* ---------- Marca ------ */`
const SECTION_HEADER = /\/\* -{5,} (.+?) -{3,} \*\//g;
const parts = source.split(SECTION_HEADER);

// Un valor partido en varias líneas queda en una sola, sin espacios pegados a los paréntesis
const normalize = (value) =>
  value.replace(/\s+/g, " ").replace(/\( /g, "(").replace(/ \)/g, ")").trim();

/** nombre del token (kebab-case, sin `--cg-`) → { value, isColor } */
const raw = new Map();
for (let index = 1; index < parts.length; index += 2) {
  const isColor = COLOR_SECTIONS.has(parts[index]);
  const body = parts[index + 1].replace(/\/\*[\s\S]*?\*\//g, "");
  for (const [, name, value] of body.matchAll(
    /--cg-([\w-]+)\s*:\s*([^;]+);/g,
  )) {
    raw.set(name, { value: normalize(value), isColor });
  }
}

const resolveVars = (value) =>
  value.replace(/var\(--cg-([\w-]+)\)/g, (_, ref) => {
    if (!raw.has(ref))
      throw new Error(
        `tokens.css referencia un token inexistente: --cg-${ref}`,
      );
    return resolveVars(raw.get(ref).value);
  });

const camelCase = (name) =>
  name.replace(/-(\w)/g, (_, char) => char.toUpperCase());

// ---------- tokens: lista plana ---------------------------------------------

const entries = [...raw].map(
  ([name, { value }]) =>
    `  ${camelCase(name)}: ${JSON.stringify(resolveVars(value))},`,
);

// ---------- theme: agrupado -------------------------------------------------
// El grupo es la primera palabra del token y la clave es el resto:
//   primary        → primary.main
//   primary-hover  → primary.hover
//   primary-50     → primary[50]
// Un token de una sola palabra que no comparte grupo queda como valor directo (canvas, ease).

const theme = { colors: {} };
for (const [name, { value, isColor }] of raw) {
  const [group, ...rest] = name.split("-");
  const target = isColor ? theme.colors : theme;
  target[group] ??= {};
  target[group][rest.length ? camelCase(rest.join("-")) : "main"] =
    resolveVars(value);
}
for (const target of [theme.colors, theme]) {
  for (const [group, values] of Object.entries(target)) {
    const keys = Object.keys(values);
    if (group !== "colors" && keys.length === 1 && keys[0] === "main") {
      target[group] = values.main;
    }
  }
}

writeFileSync(
  join(root, "src/tokens.ts"),
  `// GENERADO por scripts/build-tokens.mjs a partir de src/styles/tokens.css. No editar a mano:
// cambiar tokens.css y correr \`npm run tokens\`.

/** Tokens de CG con su valor final, para usar donde no hay variables CSS. */
export const tokens = {
${entries.join("\n")}
} as const;

export type TokenName = keyof typeof tokens;

/**
 * Los mismos valores que \`tokens\`, agrupados: \`theme.colors.primary.main\`,
 * \`theme.colors.primary[50]\`, \`theme.colors.danger.soft\`, \`theme.radius.button\`.
 */
export const theme = ${JSON.stringify(theme, null, 2)} as const;

export type Theme = typeof theme;
`,
);
console.log(`src/tokens.ts: ${entries.length} tokens`);
