import { createTheme } from "@mui/material/styles";
import "./augmentation";
import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";

/**
 * Theme de MUI con la identidad de Consultoría Global. Usa los cortes de pantalla de CG
 * (640, 768, 1024 y 1280px) y `spacing(1)` = 4px, así `spacing={4}` son los 16px de siempre.
 */
export const cgTheme = createTheme({
  palette,
  typography,
  components,
  spacing: 4,
  shape: { borderRadius: 12 },
  breakpoints: { values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 } },
});
