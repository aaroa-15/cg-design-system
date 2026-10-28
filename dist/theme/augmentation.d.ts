import "@mui/material/Paper";
import "@mui/material/Typography";
import "@mui/material/styles";
declare module "@mui/material/Paper" {
    interface PaperPropsVariantOverrides {
        /** Banner de bienvenida sobre el degradado institucional oscuro. Una sola por pantalla. */
        hero: true;
        /** Card dividida en paneles lado a lado (menú + contenido); se apilan en pantallas angostas. */
        split: true;
    }
}
declare module "@mui/material/styles" {
    interface TypographyVariants {
        kpi: React.CSSProperties;
        meta: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        kpi?: React.CSSProperties;
        meta?: React.CSSProperties;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        /** Cifra grande de un indicador. */
        kpi: true;
        /** Metadato de 10px, de bajo énfasis. */
        meta: true;
    }
}
