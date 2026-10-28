import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { tokens as t } from "../tokens";

export interface FooterProps {
  /** Ej. "Versión 1.0.0". */
  version?: string;
  /** Reemplaza la línea de crédito por defecto. */
  children?: ReactNode;
}

/** Línea de crédito al pie de la aplicación. */
export function Footer({ version, children }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{ mt: 12, py: 8, textAlign: "center", color: t.inkMuted }}
    >
      <Typography sx={{ fontSize: t.textCaption, color: "inherit" }}>
        {children ?? (
          <>
            {new Date().getFullYear()} Powered by Consultoría Global ©
            {version ? ` - ${version}` : ""}
          </>
        )}
      </Typography>
    </Box>
  );
}
