import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import {
  Children,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { tokens as t } from "../../tokens";

/** Textos del carrusel. Por defecto en español; se pueden reemplazar de a uno. */
export interface CarouselLabels {
  /** Nombre de la región, para lectores de pantalla. */
  region: string;
  previous: string;
  next: string;
  /** Texto del indicador de una diapositiva: "Ir a la diapositiva 2". */
  goTo: (position: number) => string;
  /** Nombre de cada diapositiva: "2 de 5". */
  slide: (position: number, total: number) => string;
}

const defaultLabels: CarouselLabels = {
  region: "Carrusel",
  previous: "Anterior",
  next: "Siguiente",
  goTo: (position) => `Ir a la diapositiva ${position}`,
  slide: (position, total) => `${position} de ${total}`,
};

type Responsive<T> = T | Partial<Record<"xs" | "sm" | "md" | "lg" | "xl", T>>;

export interface CarouselProps {
  /** Cada hijo es una diapositiva. El contenido lo pone quien usa el componente. */
  children: ReactNode;
  /** Diapositiva activa (modo controlado). Sin esta prop, el carrusel guarda su propio estado. */
  index?: number;
  /** Diapositiva inicial cuando el carrusel no es controlado. */
  defaultIndex?: number;
  onIndexChange?: (index: number) => void;
  /** Ancho de la diapositiva activa: un valor CSS o uno por pantalla. */
  slideWidth?: Responsive<string>;
  /** Alto fijo de las diapositivas. Sin él, toman el alto de su contenido. */
  slideHeight?: Responsive<string>;
  /** Escala de las diapositivas que no están activas, entre 0 y 1. */
  scale?: number;
  /** Espacio entre diapositivas, de la escala de CG (3 = 12px). */
  gap?: number;
  /** Oculta las flechas. En pantallas táctiles igual se desliza. */
  hideArrows?: boolean;
  /** Oculta los indicadores de abajo. */
  hideIndicators?: boolean;
  /**
   * Línea opcional debajo de los indicadores, por ejemplo "Plantilla 2 de 5: Lite". Los lectores de
   * pantalla la anuncian cada vez que cambia la diapositiva.
   */
  footer?: (index: number, total: number) => ReactNode;
  labels?: Partial<CarouselLabels>;
  sx?: SxProps<Theme>;
}

const SWIPE_THRESHOLD_PX = 50;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

/**
 * Carrusel con una diapositiva activa al centro y las vecinas más chicas y tenues a los costados.
 * Es solo la estructura: se mueve con las flechas, los indicadores, el teclado (flechas, Inicio y
 * Fin), un clic en una vecina o deslizando el dedo. El contenido de cada diapositiva lo define quien
 * lo usa, y el carrusel puede ser controlado (`index` + `onIndexChange`) o manejar su propio estado.
 */
export function Carousel({
  children,
  index,
  defaultIndex = 0,
  onIndexChange,
  slideWidth = { xs: "240px", sm: "280px", md: "320px", lg: "400px" },
  slideHeight,
  scale = 0.75,
  gap = 3,
  hideArrows = false,
  hideIndicators = false,
  footer,
  labels,
  sx,
}: CarouselProps) {
  const text = { ...defaultLabels, ...labels };
  const slides = Children.toArray(children);
  const total = slides.length;
  const lastIndex = total - 1;

  const [innerIndex, setInnerIndex] = useState(defaultIndex);
  const touchStartX = useRef<number | null>(null);

  const current = Math.min(
    Math.max(index ?? innerIndex, 0),
    Math.max(lastIndex, 0),
  );

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), lastIndex);
    if (clamped === current) return;
    if (index === undefined) setInnerIndex(clamped);
    onIndexChange?.(clamped);
  };

  const handleTouchEnd = (endX: number) => {
    if (touchStartX.current === null) return;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    goTo(current + (delta < 0 ? 1 : -1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const target = {
      ArrowLeft: current - 1,
      ArrowRight: current + 1,
      Home: 0,
      End: lastIndex,
    }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    goTo(target);
  };

  if (total === 0) return null;

  const arrowSx = {
    position: "absolute",
    top: "50%",
    zIndex: 1,
    width: 40,
    height: 40,
    mt: -5,
    color: t.inkSoft,
    backgroundColor: "rgb(255 255 255 / 0.85)",
    backdropFilter: "blur(6px)",
    border: `1px solid ${t.line}`,
    boxShadow: t.shadowMd,
    transition: `all 200ms ${EASE}`,
    "&:hover": {
      backgroundColor: t.surface,
      color: t.primary,
      borderColor: t.primary,
    },
    "&.Mui-disabled": { opacity: 0, pointerEvents: "none" },
    "& svg": { width: "1.25rem", height: "1.25rem" },
  } as const;

  return (
    <Box
      role="region"
      aria-roledescription="carrusel"
      aria-label={text.region}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={[
        {
          position: "relative",
          px: { xs: 0, sm: 12 },
          borderRadius: t.radiusPanel,
          outline: "none",
          "&:focus-visible": {
            boxShadow: `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {!hideArrows && (
        <IconButton
          aria-label={text.previous}
          disabled={current <= 0}
          onClick={() => goTo(current - 1)}
          sx={{
            ...arrowSx,
            left: { xs: 4, sm: 0 },
            display: { xs: "none", sm: "inline-flex" },
          }}
        >
          <ChevronLeftRoundedIcon aria-hidden="true" />
        </IconButton>
      )}

      <Box
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) =>
          handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)
        }
        sx={(theme) => ({
          // Todas las diapositivas se acomodan al tamaño de la activa. Las demás solo se pintan más
          // chicas con una escala fija, así el movimiento es un transform y no recalcula el layout.
          "--slide-w": slideWidth,
          "--slide-h": slideHeight ?? "auto",
          "--scale": String(scale),
          "--gap": theme.spacing(gap),
          "--small-w": "calc(var(--slide-w) * var(--scale))",
          "--pitch": "calc((var(--slide-w) + var(--small-w)) / 2 + var(--gap))",
          width: "calc(var(--slide-w) + 2 * (var(--small-w) + var(--gap)))",
          maxWidth: "100%",
          mx: "auto",
          overflow: "hidden",
          // Margen abajo para que la sombra de la activa no quede cortada por el overflow
          pt: 3,
          pb: 8,
          touchAction: "pan-y",
        })}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            left: "50%",
            transform: `translateX(calc(-1 * (${current} + 0.5) * var(--pitch)))`,
            transition: `transform 450ms ${EASE}`,
            "@media (prefers-reduced-motion: reduce)": { transition: "none" },
          }}
        >
          {slides.map((slide, slideIndex) => {
            const isActive = slideIndex === current;
            return (
              <Box
                key={slideIndex}
                sx={{
                  flex: "none",
                  width: "var(--pitch)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={text.slide(slideIndex + 1, total)}
                  aria-current={isActive || undefined}
                  onClick={() => goTo(slideIndex)}
                  sx={{
                    flex: "none",
                    width: "var(--slide-w)",
                    height: "var(--slide-h)",
                    cursor: isActive ? "default" : "pointer",
                    transform: isActive ? "scale(1)" : "scale(var(--scale))",
                    opacity: isActive ? 1 : 0.75,
                    filter: isActive ? "none" : "saturate(0.7)",
                    transition: `transform 450ms ${EASE}, opacity 300ms ${EASE}, filter 300ms ${EASE}`,
                    "@media (prefers-reduced-motion: reduce)": {
                      transition: "none",
                    },
                    // La activa se despega del fondo con una sombra del color de la marca
                    "& > *": {
                      boxShadow: isActive
                        ? `0 18px 36px -12px color-mix(in srgb, ${t.primary} 35%, transparent)`
                        : "none",
                      transition: `box-shadow 450ms ${EASE}`,
                    },
                  }}
                >
                  {slide}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {!hideArrows && (
        <IconButton
          aria-label={text.next}
          disabled={current >= lastIndex}
          onClick={() => goTo(current + 1)}
          sx={{
            ...arrowSx,
            right: { xs: 4, sm: 0 },
            display: { xs: "none", sm: "inline-flex" },
          }}
        >
          <ChevronRightRoundedIcon aria-hidden="true" />
        </IconButton>
      )}

      {!hideIndicators && total > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
            mt: 2,
          }}
        >
          {slides.map((_slide, slideIndex) => {
            const isActive = slideIndex === current;
            return (
              <Box
                key={slideIndex}
                component="button"
                type="button"
                aria-label={text.goTo(slideIndex + 1)}
                aria-current={isActive || undefined}
                onClick={() => goTo(slideIndex)}
                sx={{
                  // El activo se estira a píldora: la posición se lee sin contar puntos
                  width: isActive ? 24 : 8,
                  height: 8,
                  p: 0,
                  border: 0,
                  borderRadius: t.radiusPill,
                  cursor: "pointer",
                  backgroundColor: isActive ? t.primary : t.lineStrong,
                  transition: `all 300ms ${EASE}`,
                  "&:hover": {
                    backgroundColor: isActive ? t.primary : t.inkSubtle,
                  },
                  "&:focus-visible": {
                    outline: "none",
                    boxShadow: `0 0 0 2px ${t.surface}, 0 0 0 4px ${t.primary}`,
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                  },
                }}
              />
            );
          })}
        </Box>
      )}

      {footer && (
        <Typography
          role="status"
          aria-atomic="true"
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, textAlign: "center", overflowWrap: "anywhere" }}
        >
          {footer(current, total)}
        </Typography>
      )}
    </Box>
  );
}
