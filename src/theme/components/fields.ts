import type { Components, Theme } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

const focusRing = "0 0 0 2px rgb(0 119 153 / 0.2)";
const focusRingDanger = "0 0 0 2px #fecaca";
const buttonFocusRing = `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}`;

/** Campo de texto: etiqueta arriba en mayúsculas, caja con borde gris y anillo de foco. */
export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      borderRadius: t.radiusField,
      backgroundColor: t.surface,
      fontSize: t.textSm,
      lineHeight: "1.25rem",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      // El borde lo pone fieldset; la etiqueta va arriba del campo y no abre muesca
      "& fieldset": { top: 0, borderColor: t.line },
      "& legend": { display: "none" },
      "&:hover fieldset": { borderColor: t.lineStrong },
      "&.Mui-focused": { boxShadow: focusRing },
      "&.Mui-focused fieldset": { borderColor: t.primary, borderWidth: 1 },
      "&.Mui-error fieldset": { borderColor: t.dangerField },
      "&.Mui-error.Mui-focused": { boxShadow: focusRingDanger },
      "&.Mui-disabled": { backgroundColor: t.surfaceMuted, opacity: 0.5 },
    },
    input: {
      padding: "10px 16px",
      "&::placeholder": { color: t.inkSubtle, opacity: 1 },
      "&.MuiInputBase-inputSizeSmall": {
        padding: "6px 12px",
        fontSize: t.textXs,
      },
    },
    multiline: { padding: 0 },
    adornedStart: { paddingLeft: 12 },
    adornedEnd: { paddingRight: 12 },
  },
};

export const MuiInputLabel: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      "&&": {
        position: "static",
        transform: "none",
        maxWidth: "100%",
        marginBottom: 4,
        marginLeft: 4,
        fontSize: t.textXs,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: t.inkSoft,
      },
      "&&.Mui-focused": { color: t.inkSoft },
      "&&.Mui-error": { color: t.inkSoft },
      "& .MuiFormLabel-asterisk": { color: t.dangerField, marginLeft: 4 },
    },
  },
};

export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: {
      margin: "4px 0 0 4px",
      fontSize: t.textCaption,
      lineHeight: 1.5,
      color: t.inkMuted,
      "&.Mui-error": { color: t.danger },
    },
  },
};

export const MuiSelect: Components<Theme>["MuiSelect"] = {
  styleOverrides: {
    select: { "&.MuiOutlinedInput-input": { paddingRight: 40 } },
    icon: { color: t.inkSubtle, right: 12 },
  },
};

export const MuiCheckbox: Components<Theme>["MuiCheckbox"] = {
  styleOverrides: {
    root: {
      padding: 4,
      color: t.lineStrong,
      "&:hover": { backgroundColor: "transparent", color: t.primary },
      "&.Mui-checked, &.MuiCheckbox-indeterminate": { color: t.primary },
      "&.Mui-focusVisible": { boxShadow: buttonFocusRing },
      "&.Mui-disabled": { opacity: 0.5 },
      "& .MuiSvgIcon-root": { fontSize: "1.375rem" },
    },
  },
};

export const MuiFormControlLabel: Components<Theme>["MuiFormControlLabel"] = {
  styleOverrides: {
    root: { marginLeft: -4, alignItems: "flex-start" },
    label: {
      fontSize: t.textSm,
      fontWeight: 600,
      lineHeight: "1.25rem",
      color: t.inkSoft,
      paddingTop: 4,
      "&.Mui-disabled": { opacity: 0.5 },
    },
  },
};

/** Interruptor: pista de 32×18 que se pinta del primario al activarse. */
export const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: { width: 32, height: 18, padding: 0, overflow: "visible" },
    switchBase: {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(14px)",
        color: t.surface,
        "& + .MuiSwitch-track": { backgroundColor: t.primary, opacity: 1 },
      },
      "&.Mui-focusVisible + .MuiSwitch-track": { boxShadow: buttonFocusRing },
      "&.Mui-disabled": { opacity: 0.5 },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: "none",
      border: `1px solid ${t.lineStrong}`,
      backgroundColor: t.surface,
    },
    track: { borderRadius: t.radiusPill, backgroundColor: t.line, opacity: 1 },
  },
};
