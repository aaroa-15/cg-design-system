import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { tokens as t } from "../../tokens";

export interface InsertDividerProps {
  /** Texto de la píldora que aparece al pasar el mouse. */
  label: string;
  /** Nombre accesible, con la posición: "Agregar sección en la posición 2". */
  "aria-label": string;
  onClick: () => void;
  /** Lo oculta sin sacarlo del layout, por ejemplo mientras se arrastran los ítems. */
  hidden?: boolean;
}

const visiblePill = {
  opacity: 1,
  pointerEvents: "auto",
  transform: "translate(-50%, -50%) scale(1)",
} as const;

/**
 * Punto de inserción entre dos ítems de una lista: una línea punteada que, al pasar el mouse o con
 * el foco, muestra una píldora para agregar un ítem en esa posición.
 */
export function InsertDivider({
  label,
  "aria-label": ariaLabel,
  onClick,
  hidden = false,
}: InsertDividerProps) {
  return (
    <Box
      component="button"
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      sx={{
        position: "relative",
        zIndex: 1,
        display: "block",
        width: "100%",
        height: 12,
        p: 0,
        border: 0,
        bgcolor: "transparent",
        cursor: "pointer",
        overflow: "visible",
        visibility: hidden ? "hidden" : "visible",
        "&:focus-visible": { outline: "none" },
        // Agranda el área clickeable sin ocupar más lugar en el layout.
        "&::before": { content: '""', position: "absolute", inset: "-6px 0" },
        "&:hover .CgInsertDivider-line, &:focus-visible .CgInsertDivider-line":
          { borderColor: t.primary },
        "&:hover .CgInsertDivider-pill, &:focus-visible .CgInsertDivider-pill":
          visiblePill,
        "@media (hover: none)": { "& .CgInsertDivider-pill": visiblePill },
      }}
    >
      <Box
        className="CgInsertDivider-line"
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          borderTop: `1px dashed ${t.line}`,
          transition: `border-color ${t.duration} ease`,
        }}
      />
      <Box
        className="CgInsertDivider-pill"
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          display: "flex",
          alignItems: "center",
          gap: 1,
          height: 22,
          px: 2.5,
          borderRadius: t.radiusPill,
          color: t.inkInverse,
          bgcolor: t.primary,
          fontSize: t.textXs,
          fontWeight: 600,
          whiteSpace: "nowrap",
          boxShadow: `0 4px 12px ${alpha(t.primary, 0.25)}`,
          pointerEvents: "none",
          opacity: 0,
          transform: "translate(-50%, -50%) scale(0.9)",
          transition: `opacity ${t.duration} ease, transform ${t.duration} ease`,
        }}
      >
        <AddRoundedIcon sx={{ fontSize: 16 }} />
        {label}
      </Box>
    </Box>
  );
}
