import Box from "@mui/material/Box";
import { alpha, type SxProps, type Theme } from "@mui/material/styles";
import type { SvgIconComponent } from "@mui/icons-material";
import { tokens as t } from "../../tokens";

const COLORS = {
  primary: { bg: t.primary, ink: t.primary },
  success: { bg: t.success, ink: t.successInk },
  warning: { bg: t.warning, ink: t.warningInk },
  error: { bg: t.danger, ink: t.dangerInk },
  info: { bg: t.info, ink: t.infoInk },
  neutral: { bg: t.inkMuted, ink: t.inkSoft },
} as const;

const SIZES = {
  sm: { box: 32, icon: 16, radius: t.radiusSm },
  md: { box: 40, icon: 20, radius: t.radiusItem },
  lg: { box: 48, icon: 24, radius: t.radiusItem },
} as const;

export interface IconTileProps {
  /** Ícono de Material UI (ej. `FactoryRounded`), sin instanciar. */
  icon: SvgIconComponent;
  color?: keyof typeof COLORS;
  /** `sm` 32px, `md` 40px, `lg` 48px. */
  size?: keyof typeof SIZES;
  className?: string;
  sx?: SxProps<Theme>;
}

/** Ícono dentro de un cuadrado de fondo suave: encabeza cards, opciones y estados. Es decorativo. */
export function IconTile({
  icon: Icon,
  color = "primary",
  size = "lg",
  className,
  sx,
}: IconTileProps) {
  const c = COLORS[color];
  const s = SIZES[size];

  return (
    <Box
      aria-hidden
      className={["CgIconTile-root", className].filter(Boolean).join(" ")}
      sx={[
        {
          flexShrink: 0,
          width: s.box,
          height: s.box,
          borderRadius: s.radius,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: alpha(c.bg, 0.12),
          color: c.ink,
          transition: `box-shadow ${t.duration} ease`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Icon sx={{ fontSize: s.icon }} />
    </Box>
  );
}
