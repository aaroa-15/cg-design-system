export interface HeaderProps {
    logoSrc: string;
    logoAlt?: string;
    /** Texto de la píldora a la derecha (ej. "Gestión Inteligente"). */
    tagline?: string;
}
/** Franja blanca con el logo. Se oculta en mobile, donde solo queda la navbar. */
export declare function Header({ logoSrc, logoAlt, tagline, }: HeaderProps): import("react").JSX.Element;
