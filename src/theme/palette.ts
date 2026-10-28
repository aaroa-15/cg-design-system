import type { PaletteOptions } from "@mui/material/styles";
import { tokens as t } from "../tokens";

/** Paleta de CG para MUI. Los valores salen de `tokens.css` (vía `src/tokens.ts`). */
export const palette: PaletteOptions = {
  primary: {
    main: t.primary,
    light: t.primaryLight,
    dark: t.primaryDark,
    contrastText: t.inkInverse,
  },
  secondary: {
    main: t.brand,
    light: t.brandLight,
    dark: t.brandDark,
    contrastText: t.inkInverse,
  },
  neutral: {
    main: t.inkSoft,
    light: t.inkMuted,
    dark: t.inkStrong,
    contrastText: t.inkInverse,
  },
  error: { main: t.danger, dark: t.dangerHover, contrastText: t.inkInverse },
  success: {
    main: t.success,
    dark: t.successHover,
    contrastText: t.inkInverse,
  },
  warning: {
    main: t.warning,
    dark: t.warningHover,
    contrastText: t.inkInverse,
  },
  info: { main: t.info, dark: t.infoHover, contrastText: t.inkInverse },
  background: { default: t.canvas, paper: t.surface },
  text: { primary: t.ink, secondary: t.inkMuted, disabled: t.inkSubtle },
  divider: t.line,
};
