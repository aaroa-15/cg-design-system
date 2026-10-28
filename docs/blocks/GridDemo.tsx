import type { ReactNode } from "react";
import { Grid } from "../../src";

/** Celda de ejemplo: muestra el código que la generó. */
export function Cell({
  children,
  tone = "primary",
}: {
  children: ReactNode;
  tone?: "primary" | "muted";
}) {
  return (
    <div
      style={{
        padding: "10px 8px",
        borderRadius: "var(--cg-radius-sm)",
        border: `1px solid var(${tone === "primary" ? "--cg-primary-200" : "--cg-line"})`,
        background: `var(${tone === "primary" ? "--cg-primary-50" : "--cg-surface-muted"})`,
        color: `var(${tone === "primary" ? "--cg-primary-dark" : "--cg-ink-subtle"})`,
        fontFamily: "var(--cg-font-mono)",
        fontSize: 11,
        textAlign: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </div>
  );
}

const SCREENS: {
  name: string;
  detail: string;
  columns: number;
  breakpoint: "xs" | "md" | "lg";
}[] = [
  { name: "Mobile", detail: "menos de 768px", columns: 4, breakpoint: "xs" },
  { name: "Tablet", detail: "desde 768px", columns: 8, breakpoint: "md" },
  { name: "Desktop", detail: "desde 1024px", columns: 12, breakpoint: "lg" },
];

type Size = number | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", number>>;
type Item = { size: Size; label: string };

const ORDER = ["xs", "sm", "md", "lg", "xl"] as const;

/** Columnas que ocupa un `size` en una pantalla: un corte sin valor hereda el anterior. */
function sizeAt(size: Size, breakpoint: (typeof ORDER)[number]): number {
  if (typeof size === "number") return size;
  let value = 1;
  for (const key of ORDER) {
    if (size[key] !== undefined) value = size[key];
    if (key === breakpoint) break;
  }
  return value;
}

/**
 * La misma grilla dibujada como se ve en mobile, tablet y desktop, una debajo de la otra. Cada
 * vista fija sus columnas, así el ejemplo no depende del ancho de la ventana.
 */
export function ScreenPreview({ items }: { items: Item[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 20,
        margin: "16px 0 24px",
        padding: 20,
        border: "1px solid var(--cg-line)",
        borderRadius: "var(--cg-radius-card)",
        fontFamily: "var(--cg-font-sans)",
      }}
    >
      {SCREENS.map((screen) => (
        <div key={screen.name}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--cg-ink)",
            }}
          >
            {screen.name}{" "}
            <span style={{ fontWeight: 400, color: "var(--cg-ink-muted)" }}>
              · {screen.detail} · {screen.columns} columnas
            </span>
          </p>
          <div
            style={{
              maxWidth:
                screen.columns === 4
                  ? 280
                  : screen.columns === 8
                    ? 520
                    : "100%",
            }}
          >
            <Grid container columns={screen.columns} spacing={2}>
              {Array.from({ length: screen.columns }, (_, index) => (
                <Grid key={index} size={1}>
                  <Cell tone="muted">{index + 1}</Cell>
                </Grid>
              ))}
              {items.map((item, index) => {
                // El size de la pantalla simulada, no el del ancho real de la ventana
                const used = Math.min(
                  sizeAt(item.size, screen.breakpoint),
                  screen.columns,
                );
                const share = `${used} de ${screen.columns}`;
                return (
                  <Grid key={index} size={used}>
                    <Cell>
                      {item.label.length <= 12
                        ? `${item.label} · ${share}`
                        : share}
                    </Cell>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      ))}
    </div>
  );
}
