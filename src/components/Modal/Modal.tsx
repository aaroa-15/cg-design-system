import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import type { ReactNode } from "react";
import { tokens as t } from "../../tokens";

const HEADER_GRADIENTS = {
  primary: `linear-gradient(to right, ${t.primary}, ${t.primaryDark})`,
  danger: "linear-gradient(to right, #dc2626, #991b1b)",
  success: "linear-gradient(to right, #10b981, #047857)",
  warning: "linear-gradient(to right, #f59e0b, #b45309)",
} as const;

const WIDTHS = {
  sm: "448px",
  md: "624px",
  lg: "672px",
  xl: "768px",
  "2xl": "896px",
  full: "95vw",
} as const;

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  /** Color del header: comunica la intención del modal. */
  variant?: keyof typeof HEADER_GRADIENTS;
  children: ReactNode;
  /** Barra de acciones: secundario a la izquierda, primario a la derecha. */
  footer?: ReactNode;
  /** Botones extra en el header, a la izquierda del de cerrar. */
  headerActions?: ReactNode;
  /** `sm` para confirmaciones, `md` (por defecto) para formularios. */
  size?: keyof typeof WIDTHS;
  /** Cierra al hacer clic fuera del modal. Desactivado por defecto para no perder formularios. */
  closeOnBackdrop?: boolean;
  /** Texto accesible del botón de cerrar. */
  closeLabel?: string;
}

/**
 * Ventana sobre la página, armada con el `Dialog` de MUI: se dibuja en el body, atrapa el foco
 * mientras está abierta, bloquea el scroll de la página y devuelve el foco al cerrarse.
 */
export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  variant = "primary",
  children,
  footer,
  headerActions,
  size = "md",
  closeOnBackdrop = false,
  closeLabel = "Cerrar",
}: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={(_event, reason) => {
        if (reason === "backdropClick" && !closeOnBackdrop) return;
        onClose();
      }}
      fullWidth
      maxWidth={false}
      slotProps={{
        paper: {
          sx: {
            maxWidth: WIDTHS[size],
            ...(size === "full" && { height: "95vh" }),
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          px: 6,
          py: 4,
          background: HEADER_GRADIENTS[variant],
          color: t.inkInverse,
        }}
      >
        <div>
          <DialogTitle
            sx={{
              p: 0,
              color: "inherit",
              fontSize: t.textXl,
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            {title}
          </DialogTitle>
          {subtitle && (
            <Typography
              sx={{
                mt: 1.5,
                color: "inherit",
                fontSize: t.textXs,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.8,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </div>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {headerActions}
          <IconButton
            aria-label={closeLabel}
            onClick={onClose}
            sx={{
              color: "rgb(255 255 255 / 0.7)",
              "&:hover": {
                color: t.inkInverse,
                backgroundColor: "rgb(255 255 255 / 0.1)",
              },
              "& svg": { width: "1.25rem", height: "1.25rem" },
            }}
          >
            <CloseRoundedIcon aria-hidden="true" />
          </IconButton>
        </Box>
      </Box>

      <DialogContent sx={{ p: 6 }}>{children}</DialogContent>

      {footer && (
        <DialogActions
          sx={{
            px: 6,
            py: 4,
            gap: 3,
            borderTop: `1px solid ${t.lineSoft}`,
            backgroundColor: t.surfaceMuted,
            "& > :not(style) ~ :not(style)": { ml: 0 },
          }}
        >
          {footer}
        </DialogActions>
      )}
    </Dialog>
  );
}
