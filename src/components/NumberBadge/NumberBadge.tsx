import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import type { ReactNode } from "react";
import { tokens as t } from "../../tokens";

const SIZES = { sm: 24, md: 26 } as const;

export interface NumberBadgeProps {
  /** El número (o texto corto) a mostrar. */
  children: ReactNode;
  /** Relleno primario sólido, para el ítem actual o elegido. */
  active?: boolean;
  /** `sm` 24px, `md` 26px. */
  size?: keyof typeof SIZES;
}

/** Número de orden en un círculo: posición en una lista, un paso o una sección. */
export function NumberBadge({
  children,
  active = false,
  size = "md",
}: NumberBadgeProps) {
  return (
    <Box
      component="span"
      sx={{
        flexShrink: 0,
        minWidth: SIZES[size],
        height: SIZES[size],
        px: 1,
        boxSizing: "border-box",
        borderRadius: t.radiusPill,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: t.textXs,
        fontWeight: 700,
        fontVariantNumeric: "tabular-nums",
        color: active ? t.inkInverse : t.primary,
        bgcolor: active ? t.primary : alpha(t.primary, 0.12),
        transition: `background-color ${t.duration} ease, color ${t.duration} ease`,
      }}
    >
      {children}
    </Box>
  );
}
