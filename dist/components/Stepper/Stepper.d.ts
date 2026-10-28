import { type Breakpoint, type SxProps, type Theme } from "@mui/material/styles";
export interface StepperStep {
    id: string;
    /** Texto corto que se ve en la barra de pasos. */
    label: string;
    /** Nombre completo, para la vista compacta y el menú. Si falta, se usa `label`. */
    name?: string;
}
/** Textos del stepper. Por defecto en español; se pueden reemplazar de a uno. */
export interface StepperLabels {
    /** Nombre de la navegación, para lectores de pantalla. */
    nav: string;
    /** Indicador de la vista compacta: "Paso 2 de 5". */
    stepOf: (position: number, total: number) => string;
    /** Nombre de la barra de progreso de la vista compacta. */
    progress: string;
    /** Botón que abre el menú de pasos anteriores en la vista compacta. */
    previousSteps: string;
    /** Nombre del menú de pasos anteriores. */
    previousStepsMenu: string;
}
export interface StepperProps {
    steps: StepperStep[];
    /** `id` del paso actual. Los anteriores se marcan como completos. */
    currentStepId: string;
    /** Si está, los pasos completos se pueden clickear para volver a ellos. */
    onStepClick?: (stepId: string) => void;
    /** Debajo de este corte se muestra la vista compacta (texto + barra de progreso). */
    compactBelow?: Breakpoint;
    /**
     * Ancho del stepper (en px) debajo del cual solo se ve el nombre del paso actual y los demás quedan
     * como números. Depende del ancho del propio stepper, no de la pantalla. Por defecto, 160px por paso.
     */
    hideLabelsBelow?: number;
    labels?: Partial<StepperLabels>;
    sx?: SxProps<Theme>;
}
/**
 * Indicador de pasos para un asistente (wizard). En pantallas grandes es una barra con todos los
 * pasos; si no entran los nombres, quedan solo los números y el nombre del actual. En mobile pasa a
 * "Paso 2 de 5" con una barra de progreso y un menú para volver a los pasos anteriores.
 */
export declare function Stepper({ steps, currentStepId, onStepClick, compactBelow, hideLabelsBelow, labels, sx, }: StepperProps): import("react").JSX.Element | null;
