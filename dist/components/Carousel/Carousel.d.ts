import type { SxProps, Theme } from "@mui/material/styles";
import { type ReactNode } from "react";
/** Textos del carrusel. Por defecto en español; se pueden reemplazar de a uno. */
export interface CarouselLabels {
    /** Nombre de la región, para lectores de pantalla. */
    region: string;
    previous: string;
    next: string;
    /** Texto del indicador de una diapositiva: "Ir a la diapositiva 2". */
    goTo: (position: number) => string;
    /** Nombre de cada diapositiva: "2 de 5". */
    slide: (position: number, total: number) => string;
}
type Responsive<T> = T | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", T>>;
export interface CarouselProps {
    /** Cada hijo es una diapositiva. El contenido lo pone quien usa el componente. */
    children: ReactNode;
    /** Diapositiva activa (modo controlado). Sin esta prop, el carrusel guarda su propio estado. */
    index?: number;
    /** Diapositiva inicial cuando el carrusel no es controlado. */
    defaultIndex?: number;
    onIndexChange?: (index: number) => void;
    /** Ancho de la diapositiva activa: un valor CSS o uno por pantalla. */
    slideWidth?: Responsive<string>;
    /** Alto fijo de las diapositivas. Sin él, toman el alto de su contenido. */
    slideHeight?: Responsive<string>;
    /** Escala de las diapositivas que no están activas, entre 0 y 1. */
    scale?: number;
    /** Espacio entre diapositivas, de la escala de CG (3 = 12px). */
    gap?: number;
    /** Oculta las flechas. En pantallas táctiles igual se desliza. */
    hideArrows?: boolean;
    /** Oculta los indicadores de abajo. */
    hideIndicators?: boolean;
    labels?: Partial<CarouselLabels>;
    sx?: SxProps<Theme>;
}
/**
 * Carrusel con una diapositiva activa al centro y las vecinas más chicas y tenues a los costados.
 * Es solo la estructura: se mueve con las flechas, los indicadores, el teclado (flechas, Inicio y
 * Fin), un clic en una vecina o deslizando el dedo. El contenido de cada diapositiva lo define quien
 * lo usa, y el carrusel puede ser controlado (`index` + `onIndexChange`) o manejar su propio estado.
 */
export declare function Carousel({ children, index, defaultIndex, onIndexChange, slideWidth, slideHeight, scale, gap, hideArrows, hideIndicators, labels, sx, }: CarouselProps): import("react").JSX.Element | null;
export {};
