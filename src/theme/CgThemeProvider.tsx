import "@fontsource-variable/inter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { cgTheme } from ".";

export interface CgThemeProviderProps {
  children: ReactNode;
  /** Aplica el reset y el fondo base de CG. Desactivar si el proyecto ya tiene el suyo. */
  baseline?: boolean;
}

/** Envuelve la app una sola vez: todos los componentes de MUI toman el estilo de CG. */
export function CgThemeProvider({
  children,
  baseline = true,
}: CgThemeProviderProps) {
  return (
    <ThemeProvider theme={cgTheme}>
      {baseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
}
