import "@fontsource-variable/inter";
import type { ReactNode } from "react";
export interface CgThemeProviderProps {
    children: ReactNode;
    /** Aplica el reset y el fondo base de CG. Desactivar si el proyecto ya tiene el suyo. */
    baseline?: boolean;
}
/** Envuelve la app una sola vez: todos los componentes de MUI toman el estilo de CG. */
export declare function CgThemeProvider({ children, baseline, }: CgThemeProviderProps): import("react").JSX.Element;
