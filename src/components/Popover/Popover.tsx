import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Popper, { type PopperProps } from "@mui/material/Popper";
import type { SxProps, Theme } from "@mui/material/styles";
import { useEffect, useRef, type ReactNode, type Ref } from "react";
import { tokens as t } from "../../tokens";

type PopperInstance = PopperProps["popperRef"] extends Ref<infer I> | undefined
  ? I
  : never;

export interface PopoverProps {
  open: boolean;
  /** Elemento al que se pega la tarjeta. */
  anchorEl: HTMLElement | null;
  /** Se llama al hacer clic afuera o al presionar Escape. */
  onClose: () => void;
  /** Nombre de la tarjeta para lectores de pantalla (es un `role="dialog"`). */
  label: string;
  children: ReactNode;
  placement?:
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "top-start"
    | "top"
    | "top-end"
    | "left"
    | "right";
  /** Ancho máximo en px. En pantallas angostas nunca pasa del ancho disponible. */
  width?: number;
  /** Color del borde superior, que indica qué se está editando. */
  accent?: "primary" | "secondary" | "none";
  /** Selector CSS: un clic en esos elementos no cierra la tarjeta (por ejemplo, otros disparadores). */
  keepOpenOn?: string;
  /** Si el disparador cambia de tamaño, cambiar este valor reacomoda la tarjeta. */
  repositionKey?: unknown;
  sx?: SxProps<Theme>;
}

/**
 * Tarjeta flotante pegada a un elemento, sin oscurecer la página: para editar algo en el lugar,
 * mostrar un detalle o un formulario corto. Se cierra con un clic afuera o con Escape.
 */
export function Popover({
  open,
  anchorEl,
  onClose,
  label,
  children,
  placement = "bottom-start",
  width = 380,
  accent = "primary",
  keepOpenOn,
  repositionKey,
  sx,
}: PopoverProps) {
  const popperRef = useRef<PopperInstance>(null);

  useEffect(() => {
    popperRef.current?.update();
  }, [repositionKey]);

  return (
    <Popper
      open={open && !!anchorEl}
      anchorEl={anchorEl}
      popperRef={popperRef}
      placement={placement}
      modifiers={[
        { name: "offset", options: { offset: [0, 10] } },
        { name: "preventOverflow", options: { padding: 16 } },
      ]}
      sx={{ zIndex: "modal", width: `min(${width}px, calc(100vw - 32px))` }}
    >
      <ClickAwayListener
        onClickAway={(event) => {
          const target = event.target as HTMLElement | null;
          if (keepOpenOn && target?.closest(keepOpenOn)) return;
          onClose();
        }}
      >
        <Paper
          role="dialog"
          aria-label={label}
          onKeyDown={(event) => {
            if (event.key === "Escape" && !event.defaultPrevented) {
              event.preventDefault();
              onClose();
            }
          }}
          sx={[
            {
              p: 4,
              border: `1px solid ${t.line}`,
              borderRadius: t.radiusCard,
              boxShadow: t.shadowXl,
              ...(accent !== "none" && {
                borderTop: "3px solid",
                borderTopColor: `${accent}.main`,
              }),
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
        >
          {children}
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
}
