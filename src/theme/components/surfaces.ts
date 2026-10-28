import { alpha, type Components, type Theme } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

export const MuiCard: Components<Theme>["MuiCard"] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: {
      border: `1px solid ${t.line}`,
      borderRadius: t.radiusCard,
      boxShadow: t.shadowSm,
      backgroundImage: "none",
    },
  },
  variants: [
    {
      props: { variant: "hero" },
      style: {
        background: `linear-gradient(to right, ${t.brandDarker}, ${t.brandDark})`,
        borderColor: "transparent",
        color: t.inkInverse,
        "& .MuiTypography-root": { color: t.inkInverse },
        "& .MuiTypography-body2, & .MuiTypography-meta": {
          color: t.primary100,
        },
      },
    },
    {
      props: { variant: "split" },
      style: {
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        minHeight: "20rem",
        "& > .MuiCardContent-root": { flex: "1 1 15rem", paddingTop: 24 },
      },
    },
    {
      props: { variant: "soft" },
      style: {
        backgroundColor: alpha(t.primary, 0.04),
        borderColor: alpha(t.primary, 0.35),
        boxShadow: "none",
      },
    },
  ],
};

export const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  defaultProps: { slotProps: { title: { variant: "h3" } } },
  styleOverrides: { root: { padding: "24px 24px 16px" } },
};

export const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: { padding: "0 24px 24px", "&:last-child": { paddingBottom: 24 } },
  },
};

export const MuiCardActions: Components<Theme>["MuiCardActions"] = {
  styleOverrides: { root: { padding: "0 24px 24px" } },
};

export const MuiPaper: Components<Theme>["MuiPaper"] = {
  styleOverrides: { root: { backgroundImage: "none" } },
};

export const MuiDialog: Components<Theme>["MuiDialog"] = {
  styleOverrides: {
    paper: { borderRadius: t.radiusPanel, boxShadow: t.shadowXl },
  },
};

export const MuiBackdrop: Components<Theme>["MuiBackdrop"] = {
  styleOverrides: {
    root: { backgroundColor: "rgb(0 0 0 / 0.5)", backdropFilter: "blur(4px)" },
    invisible: { backdropFilter: "none", backgroundColor: "transparent" },
  },
};

export const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    paper: {
      border: `1px solid ${t.lineSoft}`,
      borderRadius: t.radiusCard,
      boxShadow: t.shadowXl,
    },
    list: { padding: "4px 0" },
  },
};

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: {
      gap: 12,
      padding: "10px 16px",
      fontSize: t.textSm,
      color: t.inkSoft,
      "&:hover": { backgroundColor: t.surfaceMuted },
      "&.Mui-selected": {
        backgroundColor: t.primary50,
        color: t.primary,
        fontWeight: 500,
      },
      "&.Mui-selected:hover": { backgroundColor: t.primary50 },
      "& svg": { width: "1rem", height: "1rem", flexShrink: 0 },
    },
  },
};

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: { borderBottom: `1px solid ${t.line}`, minHeight: 0 },
    indicator: { height: 2, backgroundColor: t.primary },
  },
};

export const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: {
      minHeight: 0,
      padding: "0 16px 12px",
      fontSize: t.textSm,
      fontWeight: 700,
      textTransform: "none",
      color: t.inkMuted,
      "&:hover": { color: t.inkSoft },
      "&.Mui-selected": { color: t.primary },
    },
  },
};

export const MuiTableContainer: Components<Theme>["MuiTableContainer"] = {
  styleOverrides: {
    root: {
      border: `1px solid ${t.lineSoft}`,
      borderRadius: t.radiusCard,
      boxShadow: t.shadowSm,
      backgroundColor: t.surface,
    },
  },
};

export const MuiTableCell: Components<Theme>["MuiTableCell"] = {
  styleOverrides: {
    root: {
      padding: "8px 12px",
      fontSize: t.textXs,
      fontWeight: 500,
      color: t.inkSoft,
      borderBottom: `1px solid ${t.lineSoft}`,
    },
    head: {
      padding: "10px 12px",
      backgroundColor: t.surfaceMuted,
      fontSize: t.textMicro,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: t.inkMuted,
    },
    sizeSmall: { padding: "6px 12px" },
  },
};

export const MuiTableRow: Components<Theme>["MuiTableRow"] = {
  styleOverrides: {
    root: { "&.MuiTableRow-hover:hover": { backgroundColor: t.surfaceMuted } },
  },
};
