import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { forwardRef } from "react";
import { tokens as t } from "../../tokens";

export interface ButtonProps extends MuiButtonProps {
  /** Agrega una sombra del color del botón, que crece al pasar el mouse. */
  shadow?: boolean;
  /** El botón sube un poco al pasar el mouse. */
  lift?: boolean;
  /** Forma de píldora: bordes totalmente redondeados y más aire a los costados. */
  pill?: boolean;
}

type StyleProps = Pick<ButtonProps, "shadow" | "lift" | "pill">;

// Sin contar el borde de 1px que llevan todas las variantes.
const PILL_PADDING = { small: 15, medium: 19, large: 27 } as const;

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    prop !== "shadow" && prop !== "lift" && prop !== "pill",
})<StyleProps>(({ theme, shadow, lift, pill, color, size = "medium" }) => {
  const accent =
    (color && color !== "inherit" && theme.palette[color]?.main) ||
    theme.palette.primary.main;

  return {
    ...(pill && {
      borderRadius: t.radiusPill,
      paddingLeft: PILL_PADDING[size],
      paddingRight: PILL_PADDING[size],
    }),
    ...(shadow && {
      "&:not(.Mui-disabled)": {
        boxShadow: `0 8px 20px ${alpha(accent, 0.35)}`,
      },
      "&:not(.Mui-disabled):hover": {
        boxShadow: `0 12px 28px ${alpha(accent, 0.48)}`,
      },
      // La sombra pisa el anillo de foco: se vuelven a sumar
      "&.Mui-focusVisible:not(.Mui-disabled)": {
        boxShadow: `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}, 0 8px 20px ${alpha(accent, 0.35)}`,
      },
    }),
    ...(lift && {
      "&:not(.Mui-disabled):hover": { transform: "translateY(-2px)" },
    }),
  };
});

/**
 * Botón de CG, con las props `shadow`, `lift` y `pill`. Sin `color`, `contained` es primario y
 * `outlined` / `text` son neutros (gris); con `color`, cualquier variante toma ese color.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ color, variant = "contained", ...props }, ref) {
    // Fuera de CgThemeProvider (por ejemplo, en un test) no existe `neutral`: se usa primario.
    const hasNeutral = Boolean(useTheme().palette.neutral);
    const resolvedColor =
      color ?? (variant === "contained" || !hasNeutral ? "primary" : "neutral");
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        color={resolvedColor}
        {...props}
      />
    );
  },
);
