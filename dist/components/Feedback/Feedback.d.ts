import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { ComponentProps, ReactNode } from "react";
export interface LoaderProps extends ComponentProps<typeof Box> {
    text?: string;
    /** Ocupa toda la pantalla, para la carga inicial de la app. */
    fullPage?: boolean;
}
/** Indicador de carga de sección o de página completa, sobre el `CircularProgress` de MUI. */
export declare function Loader({ text, fullPage, sx, ...props }: LoaderProps): import("react").JSX.Element;
export interface EmptyStateProps extends Omit<ComponentProps<typeof Stack>, "title"> {
    /** Ícono de Material UI: el tamaño y el color los pone el componente. */
    icon: ReactNode;
    title: string;
    description?: string;
    /** Acción sugerida, normalmente un Button. */
    action?: ReactNode;
}
/** Estado vacío: ícono grande y tenue + título + sugerencia de qué hacer. */
export declare function EmptyState({ icon, title, description, action, sx, ...props }: EmptyStateProps): import("react").JSX.Element;
