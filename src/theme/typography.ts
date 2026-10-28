import type { ThemeOptions } from "@mui/material/styles";
import { tokens as t } from "../tokens";

/**
 * Roles tipográficos de CG:
 * h1 título de página · h2 título de sección · h3 título de card · h4 título de bloque ·
 * h5 título chico · h6 encabezado de grupo · subtitle1 subtítulo de página · subtitle2 subtítulo
 * chico · body1 texto · body2 texto secundario · caption nota · meta metadato · overline etiqueta ·
 * kpi cifra grande.
 */
export const typography: ThemeOptions["typography"] = {
  fontFamily: t.fontSans,
  fontSize: 14,
  // 24px en mobile y 30px desde el corte `sm` (640px) del theme.
  h1: {
    fontSize: t.text2xl,
    fontWeight: 700,
    lineHeight: 1.25,
    "@media (min-width: 640px)": { fontSize: t.text3xl },
  },
  h2: { fontSize: t.textXl, fontWeight: 700, lineHeight: 1.4 },
  h3: { fontSize: t.textBase, fontWeight: 700, lineHeight: 1.5 },
  h4: { fontSize: t.textSm, fontWeight: 700, lineHeight: 1.5, color: t.ink },
  h5: { fontSize: t.textXs, fontWeight: 700, lineHeight: 1.5, color: t.ink },
  h6: {
    fontSize: t.textXs,
    fontWeight: 600,
    lineHeight: 1.5,
    color: t.inkMuted,
  },
  subtitle1: {
    fontSize: t.textSm,
    fontWeight: 500,
    lineHeight: 1.5,
    color: t.inkSoft,
  },
  subtitle2: {
    fontSize: t.textXs,
    fontWeight: 600,
    lineHeight: 1.5,
    color: t.inkSoft,
  },
  body1: { fontSize: t.textSm, lineHeight: 1.5, color: t.inkSoft },
  body2: { fontSize: t.textXs, lineHeight: 1.5, color: t.inkMuted },
  caption: { fontSize: t.textCaption, lineHeight: 1.4, color: t.inkMuted },
  meta: {
    fontSize: t.textMicro,
    lineHeight: 1.5,
    color: t.inkSubtle,
  },
  overline: {
    fontSize: t.textXs,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  kpi: {
    fontSize: t.textXl,
    fontWeight: 900,
    lineHeight: 1,
    color: t.inkStrong,
  },
  button: { textTransform: "none", fontWeight: Number(t.weightSemibold) },
};
