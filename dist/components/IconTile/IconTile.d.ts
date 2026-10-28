import { type SxProps, type Theme } from "@mui/material/styles";
import type { SvgIconComponent } from "@mui/icons-material";
declare const COLORS: {
    readonly primary: {
        readonly bg: "#006e94";
        readonly ink: "#006e94";
    };
    readonly success: {
        readonly bg: "#059669";
        readonly ink: "#047857";
    };
    readonly warning: {
        readonly bg: "#f59e0b";
        readonly ink: "#b45309";
    };
    readonly error: {
        readonly bg: "#dc2626";
        readonly ink: "#b91c1c";
    };
    readonly info: {
        readonly bg: "#0284c7";
        readonly ink: "#0369a1";
    };
    readonly neutral: {
        readonly bg: "#6b7280";
        readonly ink: "#374151";
    };
};
declare const SIZES: {
    readonly sm: {
        readonly box: 32;
        readonly icon: 16;
        readonly radius: "0.375rem";
    };
    readonly md: {
        readonly box: 40;
        readonly icon: 20;
        readonly radius: "0.75rem";
    };
    readonly lg: {
        readonly box: 48;
        readonly icon: 24;
        readonly radius: "0.75rem";
    };
};
export interface IconTileProps {
    /** Ícono de Material UI (ej. `FactoryRounded`), sin instanciar. */
    icon: SvgIconComponent;
    color?: keyof typeof COLORS;
    /** `sm` 32px, `md` 40px, `lg` 48px. */
    size?: keyof typeof SIZES;
    className?: string;
    sx?: SxProps<Theme>;
}
/** Ícono dentro de un cuadrado de fondo suave: encabeza cards, opciones y estados. Es decorativo. */
export declare function IconTile({ icon: Icon, color, size, className, sx, }: IconTileProps): import("react").JSX.Element;
export {};
