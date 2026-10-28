import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState, type ReactNode } from "react";
import { tokens as t } from "../../tokens";

export interface AccordionProps {
  title: string;
  /** Texto chico debajo del título. */
  subtitle?: string;
  /** Texto a la derecha del encabezado, como "2 seleccionadas". */
  meta?: ReactNode;
  defaultExpanded?: boolean;
  /** Quita el contenido del DOM mientras está cerrado (contenido pesado o que repite textos). */
  unmountOnCollapse?: boolean;
  children: ReactNode;
}

/** Bloque que se despliega: encabezado con ícono + / − y el contenido abajo. */
export function Accordion({
  title,
  subtitle,
  meta,
  defaultExpanded = false,
  unmountOnCollapse = false,
  children,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const Icon = expanded ? RemoveRoundedIcon : AddRoundedIcon;

  return (
    <MuiAccordion
      disableGutters
      elevation={0}
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      slotProps={{ transition: { unmountOnExit: unmountOnCollapse } }}
      sx={{
        border: `1px solid ${t.line}`,
        borderRadius: `${t.radiusCard} !important`,
        bgcolor: t.surface,
        "&::before": { display: "none" },
      }}
    >
      <AccordionSummary sx={{ px: 4 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 3, width: "100%" }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              flexShrink: 0,
              borderRadius: t.radiusSm,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: expanded ? t.inkInverse : t.primary,
              bgcolor: expanded ? t.primary : alpha(t.primary, 0.12),
              transition: `background-color ${t.duration} ease`,
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="h4" component="span" sx={{ display: "block" }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" component="span">
                {subtitle}
              </Typography>
            )}
          </Box>
          {meta && (
            <Typography
              variant="body2"
              component="span"
              sx={{ flexShrink: 0, fontWeight: 700, color: t.primary }}
            >
              {meta}
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 4, pt: 0, pb: 4 }}>
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
}
