import type { ComponentType } from "react";
export interface SideNavItem<T extends string = string> {
    id: T;
    label: string;
    /** Ícono de Material UI (ej. `GroupRounded`), sin instanciar. */
    icon?: ComponentType<{
        "aria-hidden"?: boolean;
    }>;
}
export interface SideNavProps<T extends string = string> {
    title: string;
    items: SideNavItem<T>[];
    /** `id` del ítem seleccionado. */
    active: T;
    onSelect: (id: T) => void;
}
/** Menú lateral de sección, con `List` de MUI: va dentro de una Card junto al panel de contenido. */
export declare function SideNav<T extends string = string>({ title, items, active, onSelect, }: SideNavProps<T>): import("react").JSX.Element;
