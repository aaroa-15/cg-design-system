import { type SxProps, type Theme } from "@mui/material/styles";
import type { ReactNode } from "react";
export interface SelectableCardProps {
    /** Contenido de la card. El layout interno (ícono, título, texto) lo define quien la usa. */
    children: ReactNode;
    /** Marca la card como elegida: borde y fondo primarios y un check arriba a la derecha. */
    selected?: boolean;
    onClick?: () => void;
    /** Sube al pasar el mouse. Activado por defecto. */
    lift?: boolean;
    /** Oculta el check de la card seleccionada, si el contenido ya muestra el estado. */
    hideCheck?: boolean;
    disabled?: boolean;
    sx?: SxProps<Theme>;
}
/**
 * Card que se elige de un conjunto (un tipo de servicio, una plantilla...). Es un botón con
 * `aria-pressed`: se activa con clic, Enter o Espacio. El contenido lo pone quien la usa.
 */
export declare function SelectableCard({ children, selected, onClick, lift, hideCheck, disabled, sx, }: SelectableCardProps): import("react").JSX.Element;
