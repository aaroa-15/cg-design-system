import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import LinearProgress from "@mui/material/LinearProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {
  alpha,
  type Breakpoint,
  type SxProps,
  type Theme,
} from "@mui/material/styles";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Fragment, useId, useState } from "react";

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

const defaultLabels: StepperLabels = {
  nav: "Pasos",
  stepOf: (position, total) => `Paso ${position} de ${total}`,
  progress: "Avance",
  previousSteps: "Ver pasos anteriores",
  previousStepsMenu: "Pasos anteriores",
};

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

type StepStatus = "done" | "current" | "upcoming";

const visuallyHidden = {
  position: "absolute",
  // En sx, el número 1 es 100%: los px van explícitos
  width: "1px",
  height: "1px",
  m: "-1px",
  p: 0,
  border: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
} as const;

function StepMarker({
  status,
  number,
}: {
  status: StepStatus;
  number: number;
}) {
  return (
    <Box
      component="span"
      className="CgStepper-marker"
      sx={(theme) => ({
        flexShrink: 0,
        width: 26,
        height: 26,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums",
        transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        ...(status === "done" && {
          bgcolor: alpha(theme.palette.primary.main, 0.12),
          color: theme.palette.primary.main,
        }),
        ...(status === "current" && {
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.14)}`,
        }),
        ...(status === "upcoming" && {
          color: theme.palette.text.secondary,
          boxShadow: `inset 0 0 0 1.5px ${theme.palette.divider}`,
        }),
      })}
    >
      {status === "done" ? (
        <CheckRoundedIcon aria-hidden="true" sx={{ fontSize: 16 }} />
      ) : (
        number
      )}
    </Box>
  );
}

/**
 * Indicador de pasos para un asistente (wizard). En pantallas grandes es una barra con todos los
 * pasos; si no entran los nombres, quedan solo los números y el nombre del actual. En mobile pasa a
 * "Paso 2 de 5" con una barra de progreso y un menú para volver a los pasos anteriores.
 */
export function Stepper({
  steps,
  currentStepId,
  onStepClick,
  compactBelow = "sm",
  hideLabelsBelow,
  labels,
  sx,
}: StepperProps) {
  const text = { ...defaultLabels, ...labels };
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const menuId = useId();

  const total = steps.length;
  if (total === 0) return null;

  const currentIndex = Math.max(
    steps.findIndex((step) => step.id === currentStepId),
    0,
  );
  const currentStep = steps[currentIndex];
  const labelsHiddenQuery = `@container (max-width: ${(hideLabelsBelow ?? total * 160) - 0.02}px)`;
  const nameOf = (step: StepperStep) => step.name ?? step.label;

  return (
    <Box sx={sx}>
      {/* Vista compacta */}
      <Box sx={{ display: { xs: "block", [compactBelow]: "none" } }}>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, mb: 2 }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 500, flexShrink: 0 }}
          >
            {text.stepOf(currentIndex + 1, total)}
          </Typography>
          <Typography variant="body1" noWrap sx={{ fontWeight: 600 }}>
            {currentStep && nameOf(currentStep)}
          </Typography>
        </Box>
        <LinearProgress
          aria-label={text.progress}
          variant="determinate"
          value={Math.round(((currentIndex + 1) / total) * 100)}
        />
        {currentIndex > 0 && onStepClick && (
          <>
            <Button
              aria-haspopup="menu"
              aria-expanded={Boolean(menuAnchor)}
              aria-controls={menuAnchor ? menuId : undefined}
              onClick={(event) => setMenuAnchor(event.currentTarget)}
              variant="text"
              color="primary"
              sx={{ mt: 2, minHeight: 44 }}
            >
              {text.previousSteps}
            </Button>
            <Menu
              id={menuId}
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={() => setMenuAnchor(null)}
              slotProps={{ list: { "aria-label": text.previousStepsMenu } }}
            >
              {steps.slice(0, currentIndex).map((step) => (
                <MenuItem
                  key={step.id}
                  onClick={() => {
                    setMenuAnchor(null);
                    onStepClick(step.id);
                  }}
                  sx={{ minHeight: 44 }}
                >
                  {nameOf(step)}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Box>

      {/* Barra completa */}
      <Box
        sx={{
          display: { xs: "none", [compactBelow]: "block" },
          // Los nombres se ocultan según el ancho del stepper (una barra lateral le quita espacio),
          // por eso se consulta el contenedor y no la pantalla.
          containerType: "inline-size",
          minWidth: 0,
        }}
      >
        <Box
          component="nav"
          aria-label={text.nav}
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: 56,
            px: 5,
            py: 3,
            bgcolor: "background.paper",
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <Box
            component="ol"
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 3,
              m: 0,
              p: 0,
              listStyle: "none",
            }}
          >
            {steps.map((step, index) => {
              const status: StepStatus =
                index < currentIndex
                  ? "done"
                  : index === currentIndex
                    ? "current"
                    : "upcoming";
              const isInteractive = status === "done" && Boolean(onStepClick);

              const content = (
                <>
                  <StepMarker status={status} number={index + 1} />
                  <Box
                    component="span"
                    className="CgStepper-label"
                    sx={{
                      ...(status !== "current" && {
                        [labelsHiddenQuery]: visuallyHidden,
                      }),
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      fontWeight: status === "current" ? 600 : 500,
                      color:
                        status === "current"
                          ? "text.primary"
                          : "text.secondary",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {step.label}
                  </Box>
                </>
              );

              return (
                <Fragment key={step.id}>
                  {index > 0 && (
                    <Box
                      component="li"
                      aria-hidden
                      sx={(theme) => ({
                        flex: "1 1 16px",
                        minWidth: 12,
                        height: 2,
                        borderRadius: 1,
                        bgcolor:
                          index <= currentIndex
                            ? alpha(theme.palette.primary.main, 0.45)
                            : theme.palette.divider,
                      })}
                    />
                  )}
                  <Box component="li" sx={{ flexShrink: 0 }}>
                    {isInteractive ? (
                      <ButtonBase
                        onClick={() => onStepClick?.(step.id)}
                        disableRipple
                        sx={(theme) => ({
                          gap: 2,
                          borderRadius: 999,
                          pr: 1,
                          [labelsHiddenQuery]: { pr: 0 },
                          "&:hover .CgStepper-label": {
                            color: "primary.main",
                          },
                          "&:hover .CgStepper-marker": {
                            bgcolor: alpha(theme.palette.primary.main, 0.2),
                          },
                          "&.Mui-focusVisible": {
                            outline: `2px solid ${theme.palette.primary.main}`,
                            outlineOffset: 3,
                          },
                        })}
                      >
                        {content}
                      </ButtonBase>
                    ) : (
                      <Box
                        component="span"
                        aria-current={status === "current" ? "step" : undefined}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        {content}
                      </Box>
                    )}
                  </Box>
                </Fragment>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
