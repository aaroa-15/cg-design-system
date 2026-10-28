import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { tokens as t } from "../../tokens";

export interface InlineFieldProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick" | "type" | "value"
> {
  /** Nombre del dato, visible mientras está pendiente. */
  label: string;
  /** Valor cargado. Vacío, el dato se muestra como pendiente. */
  value?: string;
  /** Es el dato que se está editando. */
  active?: boolean;
  /** El valor es propio de esta aparición y no el general. */
  customized?: boolean;
  /** Recibe el elemento, para anclar ahí un `Popover`. */
  onClick?: (anchor: HTMLButtonElement) => void;
}

/**
 * Dato para completar dentro de un texto corrido: pendiente se ve con borde punteado y su nombre;
 * cargado, con el valor subrayado. Es un botón, pensado para abrir un `Popover` con el campo.
 */
export function InlineField({
  label,
  value = "",
  active = false,
  customized = false,
  onClick,
  ...buttonProps
}: InlineFieldProps) {
  const isFilled = value.length > 0;
  const underline = active
    ? t.primary
    : customized
      ? alpha(t.brand, 0.55)
      : alpha(t.primary, 0.4);

  return (
    <Box
      component="button"
      type="button"
      {...buttonProps}
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        onClick?.(event.currentTarget)
      }
      sx={{
        font: "inherit",
        lineHeight: "inherit",
        color: "text.primary",
        cursor: "pointer",
        px: 1,
        mx: 0.25,
        borderRadius: t.radiusSm,
        transition: `background-color ${t.duration} ease, box-shadow ${t.duration} ease, border-color ${t.duration} ease`,
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        "&:focus-visible": {
          outline: `2px solid ${t.primary}`,
          outlineOffset: 2,
        },
        ...(isFilled
          ? {
              border: "none",
              fontWeight: 600,
              bgcolor: active
                ? alpha(t.primary, 0.14)
                : customized
                  ? alpha(t.brand, 0.08)
                  : "transparent",
              boxShadow: `inset 0 -2px 0 ${underline}`,
            }
          : {
              border: "1px dashed",
              borderColor: active ? t.primary : alpha(t.warning, 0.7),
              bgcolor: active ? alpha(t.primary, 0.1) : alpha(t.warning, 0.1),
              color: active ? t.primary : t.inkMuted,
              fontSize: t.textXs,
              fontWeight: 600,
            }),
      }}
    >
      {isFilled ? value : label}
    </Box>
  );
}
