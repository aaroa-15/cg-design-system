import { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
export interface ButtonProps extends MuiButtonProps {
    /** Agrega una sombra del color del botón, que crece al pasar el mouse. */
    shadow?: boolean;
    /** El botón sube un poco al pasar el mouse. */
    lift?: boolean;
}
/** `Button` de Material UI con el estilo de CG, más las props `shadow` y `lift`. */
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
