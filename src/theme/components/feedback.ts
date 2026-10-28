import type { Components, Theme } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

/** Colores suaves por estado, como los badges y las alertas de CG. */
const soft = {
  primary: { bg: t.primary50, ink: t.primary, line: t.primary100 },
  success: { bg: t.successSoft, ink: t.successInk, line: t.successLine },
  warning: { bg: t.warningSoft, ink: t.warningInk, line: t.warningLine },
  error: { bg: t.dangerSoft, ink: t.dangerInk, line: t.dangerLine },
  info: { bg: t.infoSoft, ink: t.infoInk, line: t.infoLine },
} as const;

const chipColor = (color: keyof typeof soft) => ({
  props: { color, variant: "filled" as const },
  style: {
    backgroundColor: soft[color].bg,
    color: soft[color].ink,
    borderColor: soft[color].line,
  },
});

/** Badge de estado: píldora de 12px (14px en `medium`), con fondo suave del color del estado. */
export const MuiChip: Components<Theme>["MuiChip"] = {
  defaultProps: { size: "small" },
  styleOverrides: {
    root: {
      height: "auto",
      border: "1px solid transparent",
      borderRadius: t.radiusPill,
      fontSize: t.textXs,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    label: { padding: "4px 10px" },
    sizeMedium: {
      fontSize: t.textSm,
      "& .MuiChip-label": { padding: "6px 12px" },
    },
  },
  variants: [
    {
      props: { color: "default", variant: "filled" },
      style: { backgroundColor: t.surfaceSunken, color: t.inkMuted },
    },
    chipColor("primary"),
    chipColor("success"),
    chipColor("warning"),
    chipColor("error"),
    chipColor("info"),
    {
      props: { color: "default", variant: "outlined" },
      style: {
        backgroundColor: "transparent",
        color: t.inkSoft,
        borderColor: t.lineStrong,
      },
    },
    ...(Object.keys(soft) as (keyof typeof soft)[]).map((color) => ({
      props: { color, variant: "outlined" as const },
      style: {
        backgroundColor: "transparent",
        color: soft[color].ink,
        borderColor: soft[color].line,
      },
    })),
  ],
};

/** Barra de progreso: fina, en píldora, con el riel en el gris de los bordes. */
export const MuiLinearProgress: Components<Theme>["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      height: 4,
      borderRadius: t.radiusPill,
      backgroundColor: t.line,
    },
    bar: { borderRadius: t.radiusPill },
  },
};

/** Avatar con inicial sobre fondo primario suave. */
export const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: {
      width: "1.75rem",
      height: "1.75rem",
      backgroundColor: t.primary50,
      color: t.primary,
      fontSize: t.textXs,
      fontWeight: 700,
    },
  },
};

const alertSeverity = (severity: "success" | "warning" | "error" | "info") => ({
  props: { severity, variant: "standard" as const },
  style: {
    backgroundColor: soft[severity].bg,
    color: soft[severity].ink,
    borderColor: soft[severity].line,
    "& .MuiAlert-icon": { color: "inherit" },
  },
});

/** Mensaje inline dentro de la página o de un formulario. */
export const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: {
      border: "1px solid",
      borderRadius: t.radiusItem,
      padding: "12px",
      fontSize: t.textSm,
      fontWeight: 500,
      lineHeight: "1.25rem",
      alignItems: "flex-start",
    },
    icon: { padding: 0, marginRight: 12, opacity: 1 },
    message: { padding: 0 },
  },
  variants: [
    alertSeverity("info"),
    alertSeverity("success"),
    alertSeverity("warning"),
    alertSeverity("error"),
  ],
};

export const MuiCircularProgress: Components<Theme>["MuiCircularProgress"] = {
  defaultProps: { size: 48, thickness: 4 },
};
