import { type CardProps as MuiCardProps } from "@mui/material/Card";
export interface CardProps extends MuiCardProps {
    /** La card sube al pasar el mouse, con una sombra del color primario. */
    lift?: boolean;
}
/** `Card` de Material UI con el estilo de CG, más la prop `lift`. */
export declare const Card: import("react").ForwardRefExoticComponent<Omit<CardProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
