import Card from "@mui/material/Card";
import type { ComponentProps, ReactNode } from "react";
declare const TONES: {
    readonly primary: {
        readonly border: "#006e94";
        readonly ink: "#006e94";
    };
    readonly neutral: {
        readonly border: "#9ca3af";
        readonly ink: "#111827";
    };
    readonly success: {
        readonly border: "#059669";
        readonly ink: "#047857";
    };
    readonly warning: {
        readonly border: "#f59e0b";
        readonly ink: "#b45309";
    };
    readonly error: {
        readonly border: "#dc2626";
        readonly ink: "#b91c1c";
    };
    readonly info: {
        readonly border: "#0284c7";
        readonly ink: "#0369a1";
    };
};
export interface KpiCardProps extends Omit<ComponentProps<typeof Card>, "children" | "color"> {
    label: string;
    value: ReactNode;
    /** Color del borde izquierdo y de la cifra. */
    color?: keyof typeof TONES;
}
/** Tarjeta de indicador: etiqueta en mayúsculas + cifra grande, con borde izquierdo de color. */
export declare function KpiCard({ label, value, color, sx, ...props }: KpiCardProps): import("react").JSX.Element;
export {};
