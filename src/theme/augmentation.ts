import "@mui/material/Button";
import "@mui/material/Paper";
import "@mui/material/Typography";
import "@mui/material/styles";

// Variantes propias de CG, para usarlas como las de MUI: <Card variant="hero">, <Typography variant="kpi">

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    /** Banner de bienvenida sobre el degradado institucional oscuro. Una sola por pantalla. */
    hero: true;
    /** Card dividida en paneles lado a lado (menú + contenido); se apilan en pantallas angostas. */
    split: true;
    /** Fondo y borde primarios suaves, para destacar un bloque (por ejemplo, un formulario). */
    soft: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    /** Gris de los botones secundarios: lo usan `outlined` y `text` cuando no llevan `color`. */
    neutral: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
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
