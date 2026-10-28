import type { Components, Theme } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

/**
 * Botones de CG. Equivalencia con la API anterior:
 * primary → variant="contained", secondary → "outlined", ghost → "text", danger → color="error".
 * El color `neutral` (gris) es el que usan `outlined` y `text` cuando no se pasa `color`.
 */
export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: { variant: "contained", disableElevation: true },
  styleOverrides: {
    root: {
      // Borde de 1px en todas las variantes para que midan lo mismo que outlined.
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: t.radiusButton,
      textTransform: "none",
      fontWeight: Number(t.weightSemibold),
      lineHeight: "1.25rem",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      "&.Mui-focusVisible": {
        boxShadow: `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}`,
      },
      "&.Mui-disabled": { opacity: 0.5 },
    },
    startIcon: { "& svg": { width: "1rem", height: "1rem" } },
    endIcon: { "& svg": { width: "1rem", height: "1rem" } },
    sizeSmall: { padding: "5px 11px", fontSize: t.textXs, lineHeight: "1rem" },
    sizeMedium: { padding: "7px 15px", fontSize: t.textSm },
    sizeLarge: {
      padding: "9px 19px",
      fontSize: t.textBase,
      lineHeight: "1.5rem",
    },
    contained: { borderColor: "transparent" },
    text: { borderColor: "transparent" },
    outlined: { backgroundColor: t.surface },
  },
  variants: [
    {
      props: { variant: "outlined", color: "neutral" },
      style: {
        color: t.inkSoft,
        borderColor: t.lineStrong,
        "&:hover": {
          backgroundColor: t.surfaceMuted,
          borderColor: t.lineStrong,
        },
      },
    },
    {
      props: { variant: "text", color: "neutral" },
      style: {
        color: t.inkSoft,
        "&:hover": { backgroundColor: t.surfaceSunken, color: t.inkStrong },
      },
    },
  ],
};

/** `color="error"` en un botón de ícono: gris en reposo y rojo al pasar el mouse (eliminar en una lista). */
export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  variants: [
    {
      props: { color: "error" },
      style: {
        color: t.inkMuted,
        "&:hover": { color: t.danger, backgroundColor: t.dangerSoft },
      },
    },
  ],
};
