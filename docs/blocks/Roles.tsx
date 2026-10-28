import type { ReactNode } from "react";
import { Typography, type TypographyProps } from "../../src";
import { cell, code } from "./Tokens";

type Variant = NonNullable<TypographyProps["variant"]>;

const ROLES: [variant: Variant, sample: string, look: string][] = [
  ["h1", "Título de página", "24px (30px desde tablet), negrita"],
  ["subtitle1", "Bajada de página", "14px, medio"],
  ["h2", "Título de sección o modal", "20px, negrita"],
  ["h3", "Título de card", "16px, negrita"],
  ["h4", "Título de bloque dentro de una card", "14px, negrita"],
  ["h5", "Título chico (lista, tarjeta flotante)", "12px, negrita"],
  ["h6", "Encabezado de grupo", "12px, semibold, gris"],
  ["subtitle2", "Subtítulo chico", "12px, semibold"],
  ["overline", "Overline de bloque", "12px, negrita, mayúsculas"],
  ["body1", "Texto base", "14px"],
  ["body2", "Texto secundario", "12px, gris"],
  ["caption", "Nota al pie de un campo o una imagen", "11px, gris"],
  ["meta", "Metadato · hace 2 días", "10px, gris claro"],
  ["kpi", "1.284", "20px, peso máximo (cifras)"],
];

function Row({
  sample,
  usage,
  look,
}: {
  sample: ReactNode;
  usage: string;
  look: string;
}) {
  return (
    <tr>
      <td style={cell}>{sample}</td>
      <td style={{ ...cell, whiteSpace: "nowrap" }}>
        <span
          style={{ ...code, display: "block", fontSize: 13, fontWeight: 600 }}
        >
          {usage}
        </span>
      </td>
      <td style={cell}>{look}</td>
    </tr>
  );
}

/** Los roles tipográficos, cada uno dibujado con su propio estilo. */
export function RoleTable() {
  return (
    <table
      style={{
        width: "100%",
        margin: "16px 0 24px",
        borderCollapse: "collapse",
        fontFamily: "var(--cg-font-sans)",
        color: "var(--cg-ink-soft)",
      }}
    >
      <thead>
        <tr>
          {["Muestra", "Typography", "Aspecto"].map((heading) => (
            <th
              key={heading}
              style={{
                ...cell,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--cg-ink-muted)",
              }}
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ROLES.map(([variant, sample, look]) => (
          <Row
            key={variant}
            sample={<Typography variant={variant}>{sample}</Typography>}
            usage={`variant="${variant}"`}
            look={look}
          />
        ))}
      </tbody>
    </table>
  );
}
