import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ComponentProps, ReactNode } from "react";
import { tokens as t } from "../../tokens";

export interface LoaderProps extends ComponentProps<typeof Box> {
  text?: string;
  /** Ocupa toda la pantalla, para la carga inicial de la app. */
  fullPage?: boolean;
}

/** Indicador de carga de sección o de página completa, sobre el `CircularProgress` de MUI. */
export function Loader({ text, fullPage, sx, ...props }: LoaderProps) {
  return (
    <Box
      role="status"
      sx={[
        {
          display: "flex",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          p: 8,
          ...(fullPage && { minHeight: "100vh", bgcolor: t.surfaceMuted }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Stack spacing={4} sx={{ alignItems: "center" }}>
        <CircularProgress aria-label={text ?? "Cargando"} />
        {text && (
          <Typography sx={{ fontWeight: 500, color: t.inkMuted }}>
            {text}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export interface EmptyStateProps extends Omit<
  ComponentProps<typeof Stack>,
  "title"
> {
  /** Ícono de Material UI: el tamaño y el color los pone el componente. */
  icon: ReactNode;
  title: string;
  description?: string;
  /** Acción sugerida, normalmente un Button. */
  action?: ReactNode;
}

/** Estado vacío: ícono grande y tenue + título + sugerencia de qué hacer. */
export function EmptyState({
  icon,
  title,
  description,
  action,
  sx,
  ...props
}: EmptyStateProps) {
  return (
    <Stack
      spacing={3}
      sx={[
        { alignItems: "center", px: 4, py: 12, textAlign: "center" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Box
        sx={{
          display: "inline-flex",
          color: t.line,
          "& svg": { width: "3rem", height: "3rem" },
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{ fontSize: t.textLg, fontWeight: 500, color: t.inkMuted }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{ maxWidth: "28rem", color: t.inkSubtle }}
        >
          {description}
        </Typography>
      )}
      {action && <Box sx={{ mt: 2 }}>{action}</Box>}
    </Stack>
  );
}
