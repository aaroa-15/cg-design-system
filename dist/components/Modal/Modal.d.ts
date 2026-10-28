import type { ReactNode } from "react";
declare const HEADER_GRADIENTS: {
    readonly primary: "linear-gradient(to right, #006e94, #005577)";
    readonly danger: "linear-gradient(to right, #dc2626, #991b1b)";
    readonly success: "linear-gradient(to right, #10b981, #047857)";
    readonly warning: "linear-gradient(to right, #f59e0b, #b45309)";
};
declare const WIDTHS: {
    readonly sm: "448px";
    readonly md: "624px";
    readonly lg: "672px";
    readonly xl: "768px";
    readonly "2xl": "896px";
    readonly full: "95vw";
};
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
export declare function Modal({ isOpen, onClose, title, subtitle, variant, children, footer, headerActions, size, closeOnBackdrop, closeLabel, }: ModalProps): import("react").JSX.Element;
export {};
