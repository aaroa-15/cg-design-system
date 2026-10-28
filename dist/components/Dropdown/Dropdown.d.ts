import type { ReactNode } from "react";
export interface DropdownOption<T extends string | number = string | number> {
    value: T;
    label: string;
    icon?: ReactNode;
}
export interface DropdownProps<T extends string | number = string | number> {
    options: DropdownOption<T>[];
    /** Valor seleccionado. Sin valor (o con uno que no está en las opciones) muestra el placeholder. */
    value?: T | null;
    onChange: (value: T) => void;
    label?: string;
    /** Mensaje de error: pinta el campo en rojo. */
    error?: string;
    disabled?: boolean;
    required?: boolean;
    /** Agrega un buscador: el campo pasa a ser un `Autocomplete`. Recomendado desde unas 8 opciones. */
    searchable?: boolean;
    /** Ordena las opciones alfabéticamente. Desactivar cuando el orden tiene significado. */
    sortOptions?: boolean;
    leftIcon?: ReactNode;
    id?: string;
    placeholder?: string;
    /** Texto cuando la búsqueda no encuentra opciones. */
    emptyText?: string;
}
/**
 * Selector de opciones armado con MUI: un `TextField select`, o un `Autocomplete` con buscador si
 * es `searchable`. Reemplaza al `<select>` nativo cuando hacen falta íconos o buscador.
 */
export declare function Dropdown<T extends string | number = string | number>({ options, value, onChange, label, error, disabled, required, searchable, sortOptions, leftIcon, id, placeholder, emptyText, }: DropdownProps<T>): import("react").JSX.Element;
