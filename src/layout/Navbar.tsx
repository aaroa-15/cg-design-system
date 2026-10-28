import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  Fragment,
  useState,
  type ComponentType,
  type ElementType,
} from "react";
import { tokens as t } from "../tokens";

/** Ícono de Material UI (ej. `PersonRounded`), sin instanciar. */
type IconComponent = ComponentType<{ "aria-hidden"?: boolean }>;

/** Opción dentro del menú desplegable de un ítem. */
export interface NavbarSubItem {
  label: string;
  icon?: IconComponent;
  /** Si lleva `href` es un link; si no, un botón que ejecuta `onSelect`. */
  href?: string;
  onSelect?: () => void;
  /** `danger` para acciones destructivas, como cerrar sesión. */
  tone?: "default" | "danger";
  /** Dibuja una línea separadora antes de la opción. */
  separator?: boolean;
}

/** Ítem de la barra: un link, un botón o un menú con opciones. */
export interface NavbarItem {
  label: string;
  icon?: IconComponent;
  /** Si lleva `href` es un link; si no, un botón que ejecuta `onSelect`. */
  href?: string;
  onSelect?: () => void;
  /** Opciones del menú desplegable: convierte el ítem en un menú. */
  items?: NavbarSubItem[];
  /** Lado de la barra donde se ubica. Por defecto, a la izquierda. */
  align?: "start" | "end";
  /** Pinta el ítem para destacarlo. Un color del tema: `theme.palette.primary.main`. */
  color?: string;
}

/** Textos de la barra. Por defecto en español; se pueden reemplazar de a uno. */
export interface NavbarLabels {
  openMenu: string;
  closeMenu: string;
}

export interface NavbarProps {
  items: NavbarItem[];
  /** Ruta actual: marca el ítem activo. */
  currentPath?: string;
  /**
   * Componente con el que se dibujan los links, como el `LinkComponent` de MUI. Recibe `href`.
   * Por defecto `<a>`; pasar el del router del proyecto (react-router, Next, TanStack...).
   */
  linkComponent?: ElementType;
  labels?: Partial<NavbarLabels>;
}

const defaultLabels: NavbarLabels = {
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
};

const ON_DARK_HOVER = "rgb(255 255 255 / 0.1)";

const linkSx = (color?: string, current?: boolean) => ({
  borderRadius: 0,
  px: 6,
  py: 3,
  color: "inherit",
  fontWeight: 600,
  letterSpacing: "0.025em",
  borderRight: `1px solid ${ON_DARK_HOVER}`,
  backgroundColor: color ?? (current ? ON_DARK_HOVER : "transparent"),
  "&:hover": color
    ? { backgroundColor: color, filter: "brightness(0.92)" }
    : { backgroundColor: ON_DARK_HOVER },
});

/**
 * Barra azul institucional con la navegación principal, armada con el `AppBar` de MUI. Cada ítem
 * puede ir a la izquierda o a la derecha, llevar ícono, pintarse con un color o abrir un menú.
 */
export function Navbar({
  items,
  currentPath,
  linkComponent,
  labels,
}: NavbarProps) {
  const text = { ...defaultLabels, ...labels };
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isCurrent = (href?: string) =>
    href !== undefined && currentPath === href;
  const closeMobile = () => setIsMobileOpen(false);

  // `href` solo lo recibe un link: un botón con `onSelect` no navega
  const asLink = (href?: string) =>
    href !== undefined
      ? { href, ...(linkComponent && { component: linkComponent }) }
      : {};

  const start = items.filter((item) => item.align !== "end");
  const end = items.filter((item) => item.align === "end");

  const renderDesktop = (item: NavbarItem) => (
    <DesktopItem
      key={item.label}
      item={item}
      isCurrent={isCurrent}
      asLink={asLink}
    />
  );

  return (
    <AppBar
      component="nav"
      color="inherit"
      enableColorOnDark
      sx={{
        position: { xs: "sticky", sm: "relative" },
        top: 0,
        background: `linear-gradient(to bottom, ${t.brandLight}, ${t.brand})`,
        borderBlock: `1px solid ${t.brandDark}`,
        boxShadow: t.shadowMd,
        color: t.inkInverse,
        fontSize: t.textSm,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1400 }}>
        <Toolbar disableGutters sx={{ minHeight: 52 }}>
          <IconButton
            aria-label={isMobileOpen ? text.closeMenu : text.openMenu}
            aria-expanded={isMobileOpen}
            color="inherit"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            sx={{ display: { sm: "none" }, ml: -2 }}
          >
            {isMobileOpen ? (
              <CloseRoundedIcon aria-hidden="true" fontSize="small" />
            ) : (
              <MenuRoundedIcon aria-hidden="true" fontSize="small" />
            )}
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" }, flexWrap: "wrap" }}>
            {start.map(renderDesktop)}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexWrap: "wrap",
              ml: "auto",
              "& > *": {
                borderRight: 0,
                borderLeft: `1px solid ${ON_DARK_HOVER}`,
              },
              "& > :first-of-type": { borderLeft: 0 },
            }}
          >
            {end.map(renderDesktop)}
          </Box>
        </Toolbar>
      </Container>

      <Collapse
        in={isMobileOpen}
        unmountOnExit
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          width: "100%",
          display: { sm: "none" },
          backgroundColor: t.brandMobile,
          borderBottom: `1px solid ${t.brand}`,
          boxShadow: t.shadowLg,
        }}
      >
        <Box component="ul" sx={{ m: 0, py: 2, px: 0, listStyle: "none" }}>
          {[...start, ...end].map((item) => (
            <MobileItem
              key={item.label}
              item={item}
              isCurrent={isCurrent}
              asLink={asLink}
              onDone={closeMobile}
            />
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
}

interface ItemProps {
  item: NavbarItem;
  isCurrent: (href?: string) => boolean;
  asLink: (href?: string) => object;
}

function DesktopItem({ item, isCurrent, asLink }: ItemProps) {
  const { label, icon: Icon, href, onSelect, items: subItems, color } = item;
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);

  if (subItems) {
    const hasCurrent = subItems.some((sub) => isCurrent(sub.href));
    return (
      <>
        <Button
          color="inherit"
          variant="text"
          aria-haspopup="menu"
          aria-expanded={!!anchor}
          startIcon={Icon && <Icon aria-hidden />}
          endIcon={
            <ExpandMoreRoundedIcon
              aria-hidden
              style={{
                transform: anchor ? "rotate(180deg)" : undefined,
                transition: "transform 300ms",
              }}
            />
          }
          onClick={(event) => setAnchor(event.currentTarget)}
          sx={linkSx(color, hasCurrent)}
        >
          {label}
        </Button>
        <Menu
          anchorEl={anchor}
          open={!!anchor}
          onClose={() => setAnchor(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          slotProps={{ paper: { sx: { width: "12rem", mt: 2 } } }}
        >
          {subItems.map((sub) => (
            <Fragment key={sub.label}>
              {sub.separator && <Divider component="li" />}
              <SubMenuItem
                sub={sub}
                asLink={asLink}
                onDone={() => setAnchor(null)}
              />
            </Fragment>
          ))}
        </Menu>
      </>
    );
  }

  return (
    <Button
      color="inherit"
      variant="text"
      startIcon={Icon && <Icon aria-hidden />}
      aria-current={isCurrent(href) ? "page" : undefined}
      onClick={onSelect}
      sx={linkSx(color, isCurrent(href))}
      {...asLink(href)}
    >
      {label}
    </Button>
  );
}

function SubMenuItem({
  sub,
  asLink,
  onDone,
}: {
  sub: NavbarSubItem;
  asLink: ItemProps["asLink"];
  onDone: () => void;
}) {
  const { label, icon: Icon, href, onSelect, tone } = sub;
  return (
    <MenuItem
      onClick={() => {
        onSelect?.();
        onDone();
      }}
      sx={tone === "danger" ? { color: t.danger } : undefined}
      {...asLink(href)}
    >
      {Icon && (
        <Box
          sx={{
            display: "inline-flex",
            p: 1.5,
            borderRadius: t.radiusItem,
            bgcolor: tone === "danger" ? t.dangerSoft : t.primary50,
            color: tone === "danger" ? "inherit" : t.primary,
            "& svg": { width: "0.875rem", height: "0.875rem" },
          }}
        >
          <Icon aria-hidden />
        </Box>
      )}
      {label}
    </MenuItem>
  );
}

function MobileItem({
  item,
  isCurrent,
  asLink,
  onDone,
}: ItemProps & { onDone: () => void }) {
  const { label, icon: Icon, href, onSelect, items: subItems, color } = item;
  const rowSx = (extra?: object) => ({
    justifyContent: "flex-start",
    width: "100%",
    borderRadius: 0,
    px: 6,
    py: 3.5,
    color: t.inkInverse,
    fontWeight: 500,
    backgroundColor: color ?? "transparent",
    "&:hover": { backgroundColor: color ?? ON_DARK_HOVER },
    ...extra,
  });

  if (subItems) {
    return (
      <li>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            px: 6,
            pt: 3.5,
            pb: 2,
            fontSize: t.textXs,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            opacity: 0.7,
            "& svg": { width: "1rem", height: "1rem" },
          }}
        >
          {Icon && <Icon aria-hidden />}
          {label}
        </Box>
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
          {subItems.map((sub) => {
            const SubIcon = sub.icon;
            return (
              <li key={sub.label}>
                <Button
                  color="inherit"
                  variant="text"
                  startIcon={SubIcon && <SubIcon aria-hidden />}
                  aria-current={isCurrent(sub.href) ? "page" : undefined}
                  onClick={() => {
                    sub.onSelect?.();
                    onDone();
                  }}
                  sx={rowSx({
                    pl: 10,
                    ...(sub.tone === "danger" && { color: t.dangerLine }),
                  })}
                  {...asLink(sub.href)}
                >
                  {sub.label}
                </Button>
              </li>
            );
          })}
        </Box>
      </li>
    );
  }

  return (
    <li>
      <Button
        color="inherit"
        variant="text"
        startIcon={Icon && <Icon aria-hidden />}
        aria-current={isCurrent(href) ? "page" : undefined}
        onClick={() => {
          onSelect?.();
          onDone();
        }}
        sx={rowSx()}
        {...asLink(href)}
      >
        {label}
      </Button>
    </li>
  );
}
