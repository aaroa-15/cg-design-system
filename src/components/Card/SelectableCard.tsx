import Box from "@mui/material/Box";
import { alpha, styled, type SxProps, type Theme } from "@mui/material/styles";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tokens as t } from "../../tokens";
import { liftStyles } from "./liftStyles";

export interface SelectableCardProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onClick" | "type" | "aria-pressed" | "color"
> {
  /** Contenido de la card. El layout interno (ícono, título, texto) lo define quien la usa. */
  children: ReactNode;
  /** Marca la card como elegida: borde y fondo primarios y un check arriba a la derecha. */
  selected?: boolean;
  onClick?: () => void;
  /** `md` para opciones destacadas en una grilla; `sm` para ítems de una lista. */
  size?: "md" | "sm";
  /** Disposición del contenido. */
  direction?: "column" | "row";
  /** Sube al pasar el mouse. Por defecto, solo en `md`. */
  lift?: boolean;
  /** Oculta el check de la card seleccionada, si el contenido ya muestra el estado. */
  hideCheck?: boolean;
  /**
   * Botones de ícono arriba a la derecha (reordenar, eliminar). Aparecen al pasar el mouse o con
   * el foco, y siempre en pantallas táctiles.
   */
  actions?: ReactNode;
  /** La card se está arrastrando: queda elevada y con las acciones visibles. */
  dragging?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

type StyleProps = Required<
  Pick<SelectableCardProps, "size" | "direction" | "lift" | "dragging">
> & { withActions: boolean };

const STYLE_PROPS = ["lift", "size", "direction", "dragging", "withActions"];

const ActionCard = styled("button", {
  shouldForwardProp: (prop) =>
    !STYLE_PROPS.includes(prop as string) && prop !== "sx",
})<StyleProps>(({ theme, size, direction, lift, dragging, withActions }) => {
  const compact = size === "sm";
  return {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: direction,
    alignItems: direction === "row" ? "flex-start" : "stretch",
    gap: theme.spacing(3),
    padding: compact ? theme.spacing(3.5, 4) : theme.spacing(4),
    ...(!compact && {
      [theme.breakpoints.up("sm")]: { padding: theme.spacing(5) },
    }),
    ...(withActions && { paddingRight: theme.spacing(18) }),
    textAlign: "left",
    font: "inherit",
    color: "inherit",
    cursor: "pointer",
    backgroundColor: t.surface,
    border: `${compact ? "1px" : "1.5px"} solid ${t.line}`,
    borderRadius: compact ? t.radiusPanel : t.radiusCard,
    boxShadow: dragging ? `0 12px 28px ${alpha(t.primary, 0.22)}` : "none",
    transition: `border-color ${t.duration} ease, background-color ${t.duration} ease, box-shadow ${t.duration} ease`,
    ...(lift && liftStyles),
    "& .CgIconTile-root": { transition: `box-shadow ${t.duration} ease` },
    "& .CgSelectableCardCta": { color: t.inkMuted },
    "& .CgSelectableCardCta svg": {
      transition: `transform ${t.duration} ease`,
    },
    "&:hover:not(:disabled)": {
      ...(lift && liftStyles["&:hover:not(:disabled)"]),
      borderColor: t.primary,
      ...(compact && { backgroundColor: alpha(t.primary, 0.03) }),
      "& .CgIconTile-root": {
        boxShadow: `0 0 0 8px ${alpha(t.primary, 0.12)}`,
      },
      "& .CgSelectableCardCta": { color: t.primary },
      "& .CgSelectableCardCta svg": { transform: "translateX(4px)" },
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}`,
    },
    "&[aria-pressed='true']": {
      borderColor: t.primary,
      backgroundColor: alpha(t.primary, 0.05),
      ...(!dragging && {
        boxShadow: compact
          ? `0 2px 8px ${alpha(t.primary, 0.12)}`
          : `0 12px 28px -8px ${alpha(t.primary, 0.35)}`,
      }),
      "& .CgSelectableCardCta": { color: t.primary },
    },
    "&:disabled": { cursor: "default", backgroundColor: t.surfaceMuted },
  };
});

/**
 * Card que se elige de un conjunto (un tipo de servicio, una plantilla, una sección). Es un botón con
 * `aria-pressed`: se activa con clic, Enter o Espacio. El contenido lo pone quien la usa.
 */
export function SelectableCard({
  children,
  selected = false,
  onClick,
  size = "md",
  direction = "column",
  lift = size === "md",
  hideCheck = false,
  actions,
  dragging = false,
  disabled,
  sx,
  ...buttonProps
}: SelectableCardProps) {
  const card = (
    <ActionCard
      {...buttonProps}
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      size={size}
      direction={direction}
      lift={lift}
      dragging={dragging}
      withActions={Boolean(actions)}
      sx={sx}
    >
      {selected && !hideCheck && (
        <CheckCircleRoundedIcon
          aria-hidden
          color="primary"
          sx={{ position: "absolute", top: 14, right: 14, fontSize: 22 }}
        />
      )}
      {children}
    </ActionCard>
  );

  if (!actions) return card;

  // Las acciones no pueden ir dentro del botón (un botón no admite otros botones adentro).
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: size === "sm" ? t.radiusPanel : t.radiusCard,
        bgcolor: t.surface,
        "& .CgSelectableCard-actions": {
          opacity: dragging ? 1 : 0,
          transition: `opacity ${t.durationFast} ease`,
        },
        "&:hover .CgSelectableCard-actions, &:focus-within .CgSelectableCard-actions":
          { opacity: 1 },
        "@media (hover: none)": {
          "& .CgSelectableCard-actions": { opacity: 1 },
        },
      }}
    >
      {card}
      <Box
        className="CgSelectableCard-actions"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          gap: 0.5,
        }}
      >
        {actions}
      </Box>
    </Box>
  );
}

/**
 * Línea de acción al pie de una `SelectableCard` ("Seleccionar →"). Toma el color primario y la
 * flecha se corre al pasar el mouse o cuando la card está elegida.
 */
export function SelectableCardCta({ children }: { children: ReactNode }) {
  return (
    <Box
      component="span"
      className="CgSelectableCardCta"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        fontSize: t.textSm,
        fontWeight: 700,
        transition: `color ${t.duration} ease`,
      }}
    >
      {children}
      <ArrowForwardRoundedIcon aria-hidden sx={{ fontSize: 16 }} />
    </Box>
  );
}
