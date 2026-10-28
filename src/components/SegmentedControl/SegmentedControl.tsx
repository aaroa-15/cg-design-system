import { alpha } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { tokens as t } from "../../tokens";

export interface SegmentedControlOption<T extends string> {
  value: T;
  label: string;
}

export interface SegmentedControlProps<T extends string> {
  options: SegmentedControlOption<T>[];
  value: T;
  /** Solo se llama al elegir una opción distinta de la actual. */
  onChange: (value: T) => void;
  /** Nombre del grupo para lectores de pantalla. */
  "aria-label": string;
  /** Ocupa todo el ancho, con las opciones repartidas en partes iguales. */
  fullWidth?: boolean;
}

/** Elección única entre pocas opciones (2 a 4), siempre visibles, como "Baja / Media / Alta". */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  "aria-label": ariaLabel,
  fullWidth = false,
}: SegmentedControlProps<T>) {
  return (
    <ToggleButtonGroup
      exclusive
      fullWidth={fullWidth}
      size="small"
      value={value}
      aria-label={ariaLabel}
      onChange={(_, next: T | null) => {
        if (next !== null && next !== value) onChange(next);
      }}
      sx={{
        p: 1,
        gap: 1,
        bgcolor: t.surfaceSunken,
        borderRadius: t.radiusItem,
        "& .MuiToggleButtonGroup-grouped": {
          border: 0,
          borderRadius: `${t.radiusSm} !important`,
          px: 3,
          py: 1.5,
          fontSize: t.textSm,
          fontWeight: 600,
          textTransform: "none",
          color: t.inkMuted,
          "&:hover": { bgcolor: alpha(t.primary, 0.06) },
          "&.Mui-selected": {
            color: t.primary,
            bgcolor: t.surface,
            boxShadow: t.shadowSm,
            "&:hover": { bgcolor: t.surface },
          },
        },
      }}
    >
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
