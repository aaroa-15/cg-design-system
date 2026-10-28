import { type ComponentType, type ElementType } from "react";
/** Ícono de Material UI (ej. `PersonRounded`), sin instanciar. */
type IconComponent = ComponentType<{
    "aria-hidden"?: boolean;
}>;
/** Opción dentro del menú desplegable de un ítem. */
export interface NavbarSubItem {
    label: string;
    icon?: IconComponent;
    /** Si lleva `href` es un link; si no, un botón que ejecuta `onSelect`. */
    href?: string;
    onSelect?: () => void;
    /** `danger` para acciones destructivas, como cerrar sesión. */
    tone?: "default" | "danger";
    /** Dibuja una línea separadora antes de la opción. */
    separator?: boolean;
}
/** Ítem de la barra: un link, un botón o un menú con opciones. */
export interface NavbarItem {
    label: string;
    icon?: IconComponent;
    /** Si lleva `href` es un link; si no, un botón que ejecuta `onSelect`. */
    href?: string;
    onSelect?: () => void;
    /** Opciones del menú desplegable: convierte el ítem en un menú. */
    items?: NavbarSubItem[];
    /** Lado de la barra donde se ubica. Por defecto, a la izquierda. */
    align?: "start" | "end";
    /** Pinta el ítem para destacarlo. Un color del tema: `theme.palette.primary.main`. */
    color?: string;
}
/** Textos de la barra. Por defecto en español; se pueden reemplazar de a uno. */
export interface NavbarLabels {
    openMenu: string;
    closeMenu: string;
}
export interface NavbarProps {
    items: NavbarItem[];
    /** Ruta actual: marca el ítem activo. */
    currentPath?: string;
    /**
     * Componente con el que se dibujan los links, como el `LinkComponent` de MUI. Recibe `href`.
     * Por defecto `<a>`; pasar el del router del proyecto (react-router, Next, TanStack...).
     */
    linkComponent?: ElementType;
    labels?: Partial<NavbarLabels>;
}
/**
 * Barra azul institucional con la navegación principal, armada con el `AppBar` de MUI. Cada ítem
 * puede ir a la izquierda o a la derecha, llevar ícono, pintarse con un color o abrir un menú.
 */
export declare function Navbar({ items, currentPath, linkComponent, labels, }: NavbarProps): import("react").JSX.Element;
export {};
