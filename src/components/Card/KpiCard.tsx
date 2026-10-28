import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import type { ComponentProps, ReactNode } from "react";
import { tokens as t } from "../../tokens";

const TONES = {
  primary: { border: t.primary, ink: t.primary },
  neutral: { border: t.inkSubtle, ink: t.inkStrong },
  success: { border: t.success, ink: t.successInk },
  warning: { border: t.warning, ink: t.warningInk },
  error: { border: t.danger, ink: t.dangerInk },
  info: { border: t.info, ink: t.infoInk },
} as const;

export interface KpiCardProps extends Omit<
  ComponentProps<typeof Card>,
  "children" | "color"
> {
  label: string;
  value: ReactNode;
  /** Color del borde izquierdo y de la cifra. */
  color?: keyof typeof TONES;
}

/** Tarjeta de indicador: etiqueta en mayúsculas + cifra grande, con borde izquierdo de color. */
export function KpiCard({
  label,
  value,
  color = "primary",
  sx,
  ...props
}: KpiCardProps) {
  const tone = TONES[color];
  return (
    <Card
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          p: 3,
          borderLeft: `4px solid ${tone.border}`,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Typography
        variant="meta"
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </Typography>
      <Typography variant="kpi" sx={{ mt: 1, color: tone.ink }}>
        {value}
      </Typography>
    </Card>
  );
}
