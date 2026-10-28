import { alpha } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

/** Estilos de `lift`, compartidos con `SelectableCard`. */
export const liftStyles = {
  transition: `transform 250ms ease, box-shadow 250ms ease, border-color ${t.duration} ease, background-color ${t.duration} ease`,
  "&:hover:not(:disabled)": {
    transform: "translateY(-6px)",
    boxShadow: `0 20px 36px -12px ${alpha(t.primary, 0.35)}`,
  },
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
    "&:hover:not(:disabled)": { transform: "none" },
  },
} as const;
