import { readFileSync } from "node:fs";
import { theme, tokens } from "./tokens";

const css = readFileSync("src/styles/tokens.css", "utf8").replace(
  /\/\*[\s\S]*?\*\//g,
  "",
);
const cssTokens = [...css.matchAll(/--cg-([\w-]+)\s*:\s*([^;]+);/g)].map(
  ([, name = "", value = ""]) => ({
    key: name.replace(/-(\w)/g, (_, char: string) => char.toUpperCase()),
    value: value
      .replace(/\s+/g, " ")
      .replace(/\( /g, "(")
      .replace(/ \)/g, ")")
      .trim(),
  }),
);

describe("tokens", () => {
  it("tiene los mismos tokens que tokens.css (si falla: npm run tokens)", () => {
    expect(Object.keys(tokens)).toEqual(cssTokens.map((token) => token.key));
  });

  it("tiene los mismos valores que tokens.css (si falla: npm run tokens)", () => {
    const literals = cssTokens.filter((token) => !token.value.includes("var("));
    for (const { key, value } of literals) {
      expect(tokens[key as keyof typeof tokens], key).toBe(value);
    }
  });

  it("resuelve las referencias a otros tokens", () => {
    expect(
      Object.values(tokens).filter((value) => value.includes("var(")),
    ).toEqual([]);
  });
});

describe("theme", () => {
  it("agrupa los tokens por tema", () => {
    expect(theme.colors.primary.main).toBe(tokens.primary);
    expect(theme.colors.primary[50]).toBe(tokens.primary50);
    expect(theme.colors.primary.hover).toBe(tokens.primaryHover);
    expect(theme.colors.danger.soft).toBe(tokens.dangerSoft);
    expect(theme.colors.canvas).toBe(tokens.canvas);
    expect(theme.radius.button).toBe(tokens.radiusButton);
    expect(theme.space[4]).toBe(tokens.space4);
  });

  it("tiene exactamente los mismos valores que tokens (si falla: npm run tokens)", () => {
    const leaves = (node: object | string): string[] =>
      typeof node === "string" ? [node] : Object.values(node).flatMap(leaves);
    expect(leaves(theme).sort()).toEqual(Object.values(tokens).sort());
  });
});
