import type { ReactNode } from "react";
export interface FooterProps {
    /** Ej. "Versión 1.0.0". */
    version?: string;
    /** Reemplaza la línea de crédito por defecto. */
    children?: ReactNode;
}
/** Línea de crédito al pie de la aplicación. */
export declare function Footer({ version, children }: FooterProps): import("react").JSX.Element;
