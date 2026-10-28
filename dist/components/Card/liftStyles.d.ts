/** Estilos de `lift`, compartidos con `SelectableCard`. */
export declare const liftStyles: {
    readonly transition: "transform 250ms ease, box-shadow 250ms ease, border-color 200ms ease, background-color 200ms ease";
    readonly "&:hover:not(:disabled)": {
        readonly transform: "translateY(-6px)";
        readonly boxShadow: `0 20px 36px -12px ${string}`;
    };
    readonly "@media (prefers-reduced-motion: reduce)": {
        readonly transition: "none";
        readonly "&:hover:not(:disabled)": {
            readonly transform: "none";
        };
    };
};
