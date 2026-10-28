import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import type { ComponentType } from "react";
import { tokens as t } from "../tokens";

export interface SideNavItem<T extends string = string> {
  id: T;
  label: string;
  /** Ícono de Material UI (ej. `GroupRounded`), sin instanciar. */
  icon?: ComponentType<{ "aria-hidden"?: boolean }>;
}

export interface SideNavProps<T extends string = string> {
  title: string;
  items: SideNavItem<T>[];
  /** `id` del ítem seleccionado. */
  active: T;
  onSelect: (id: T) => void;
}

/** Menú lateral de sección, con `List` de MUI: va dentro de una Card junto al panel de contenido. */
export function SideNav<T extends string = string>({
  title,
  items,
  active,
  onSelect,
}: SideNavProps<T>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        width: { xs: "100%", lg: 280 },
        backgroundColor: t.surfaceMuted,
        borderRight: `1px solid ${t.line}`,
      }}
    >
      <Box sx={{ p: 4, borderBottom: `1px solid ${t.line}` }}>
        <Typography
          variant="overline"
          component="h2"
          sx={{ fontSize: t.textSm, color: t.inkMuted }}
        >
          {title}
        </Typography>
      </Box>
      <List component="nav" aria-label={title} sx={{ p: 3, overflowY: "auto" }}>
        {items.map(({ id, label, icon: Icon }) => (
          <ListItemButton
            key={id}
            selected={id === active}
            aria-current={id === active ? "page" : undefined}
            onClick={() => onSelect(id)}
            sx={{
              gap: 3,
              mb: 1,
              px: 3,
              py: 2.5,
              borderRadius: t.radiusItem,
              color: t.inkSoft,
              "&:hover": { backgroundColor: t.surfaceSunken },
              "&.Mui-selected, &.Mui-selected:hover": {
                backgroundColor: t.primary50,
                color: t.primary,
              },
            }}
          >
            {Icon && (
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  color: id === active ? t.primary : t.inkSubtle,
                  "& svg": { width: "1rem", height: "1rem" },
                }}
              >
                <Icon aria-hidden />
              </ListItemIcon>
            )}
            <ListItemText
              primary={label}
              slotProps={{
                primary: { sx: { fontSize: t.textSm, fontWeight: 500 } },
              }}
              sx={{ m: 0 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
