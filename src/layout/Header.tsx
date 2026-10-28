import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { tokens as t } from "../tokens";

export interface HeaderProps {
  logoSrc: string;
  logoAlt?: string;
  /** Texto de la píldora a la derecha (ej. "Gestión Inteligente"). */
  tagline?: string;
}

const accent = (opacity: number, width: string, offset: string) => ({
  content: '""',
  position: "absolute" as const,
  right: 0,
  top: 0,
  height: "100%",
  width,
  background: `linear-gradient(to left, color-mix(in srgb, ${t.brand} ${opacity}%, transparent), transparent)`,
  transform: `translateX(${offset}) skewX(12deg)`,
});

/** Franja blanca con el logo. Se oculta en mobile, donde solo queda la navbar. */
export function Header({
  logoSrc,
  logoAlt = "Consultoría Global",
  tagline,
}: HeaderProps) {
  return (
    <Box
      component="header"
      sx={{
        display: { xs: "none", sm: "block" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: t.surface,
        boxShadow: t.shadowSm,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1400,
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1.5,
        }}
      >
        {/* Acentos diagonales institucionales, solo desktop */}
        <Box
          aria-hidden="true"
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: 0,
            top: 0,
            zIndex: -1,
            width: "50%",
            height: "100%",
            pointerEvents: "none",
            "&::before": accent(5, "100%", "4rem"),
            "&::after": accent(10, "75%", "2rem"),
          }}
        />
        <Box
          component="img"
          src={logoSrc}
          alt={logoAlt}
          sx={{ height: "4rem", width: "auto", objectFit: "contain" }}
        />
        {tagline && (
          <Box
            sx={{
              display: { xs: "none", md: "inline-flex" },
              alignItems: "center",
              gap: 3,
              px: 4,
              py: 1.5,
              border: `1px solid color-mix(in srgb, ${t.brand} 20%, transparent)`,
              borderRadius: t.radiusPill,
              backgroundColor: `color-mix(in srgb, ${t.surface} 70%, transparent)`,
              backdropFilter: "blur(4px)",
              boxShadow: t.shadowSm,
              fontSize: t.textXs,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: t.brand,
              "&::before": {
                content: '""',
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: t.radiusPill,
                backgroundColor: t.brand,
              },
            }}
          >
            {tagline}
          </Box>
        )}
      </Container>
    </Box>
  );
}
