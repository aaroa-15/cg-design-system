import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { tokens as t } from "../../tokens";

export interface DescriptionListItem {
  term: string;
  value: ReactNode;
}

export interface DescriptionListProps {
  items: DescriptionListItem[];
  /** `plain`: filas simples. `bordered`: celdas con borde, con el término como etiqueta. */
  variant?: "plain" | "bordered";
  /** Columnas desde tablet (en mobile siempre una). Solo en `bordered`. */
  columns?: 1 | 2;
}

/** Pares término → valor: un resumen de configuración o los atributos de un elemento. */
export function DescriptionList({
  items,
  variant = "plain",
  columns = 1,
}: DescriptionListProps) {
  if (variant === "plain") {
    return (
      <Box
        component="dl"
        sx={{
          m: 0,
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          columnGap: 6,
          rowGap: 2,
        }}
      >
        {items.map(({ term, value }) => (
          <Box key={term} sx={{ display: "contents" }}>
            <Typography component="dt" variant="body1" color="text.secondary">
              {term}
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ m: 0, fontWeight: 600, textAlign: "right" }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Box
      component="dl"
      sx={{
        m: 0,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: `repeat(${columns}, 1fr)` },
        border: `1px solid ${t.line}`,
        borderRadius: t.radiusCard,
        overflow: "hidden",
      }}
    >
      {items.map(({ term, value }) => (
        <Box
          key={term}
          sx={{
            px: 4,
            py: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            borderRight: `1px solid ${t.line}`,
            borderBottom: `1px solid ${t.line}`,
            // Los márgenes negativos esconden los bordes de las celdas del borde exterior.
            mr: "-1px",
            mb: "-1px",
          }}
        >
          <Typography component="dt" variant="overline" color="text.secondary">
            {term}
          </Typography>
          <Typography
            component="dd"
            variant="body1"
            sx={{ m: 0, fontWeight: 600, textAlign: "right" }}
          >
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
