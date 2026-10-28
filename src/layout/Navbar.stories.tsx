import type { Meta, StoryObj } from "@storybook/react-vite";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { forwardRef, useState, type ComponentProps } from "react";
import { theme } from "../tokens";
import { Navbar, type NavbarItem } from "./Navbar";

const items: NavbarItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Reportes", href: "/reportes" },
  {
    label: "Ana Pérez",
    align: "end",
    items: [
      { label: "Mi Perfil", icon: PersonRoundedIcon, href: "/cuenta" },
      {
        label: "Cerrar Sesión",
        icon: LogoutRoundedIcon,
        tone: "danger",
        separator: true,
        onSelect: () => {},
      },
    ],
  },
];

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { height: "260px" },
      description: {
        component: `
Barra azul institucional con la navegación principal. Cada ítem se describe con props:

- \`align\`: \`"start"\` (izquierda, por defecto) o \`"end"\` (derecha).
- \`icon\`: opcional, un ícono de Material UI sin instanciar.
- \`color\`: pinta el ítem para destacarlo, con un color del tema: \`theme.colors.primary.main\` (de \`@cg/design-system\`).
- \`items\`: sus opciones. Convierte el ítem en un menú desplegable; cada opción puede llevar ícono,
  \`href\` o \`onSelect\`, \`tone="danger"\` y una línea separadora antes (\`separator\`).
- \`href\` o \`onSelect\`: sin \`items\`, el ítem es un link o un botón.

El menú de usuario no es una pieza aparte: es un ítem a la derecha con sus opciones.

- En mobile todo se agrupa detrás de un botón de hamburguesa, y las opciones de cada menú quedan bajo
  el título de su ítem. Probalo achicando la ventana o con el selector de viewport de la barra superior.
- Entre 4 y 7 ítems de primer nivel. Los ítems que el usuario no puede ver no se muestran. Los menús son
  para agrupar acciones; la navegación de segundo nivel va en un \`SideNav\` dentro de la página.
- No depende de ningún router: los links se dibujan con \`linkComponent\`, que recibe \`href\`.
- Cerrar sesión siempre pide confirmación con un modal \`sm\`.

\`\`\`tsx
<Navbar
  currentPath={location.pathname}
  items={[
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "/proyectos" },
    {
      label: user.fullName,
      align: "end",
      items: [
        { label: "Mi Perfil", icon: PersonRoundedIcon, href: "/cuenta" },
        { label: "Cerrar Sesión", icon: LogoutRoundedIcon, tone: "danger", separator: true,
          onSelect: () => setIsLogoutModalOpen(true) },
      ],
    },
  ]}
  linkComponent={RouterLink}
/>
\`\`\`
`,
      },
    },
  },
  args: {
    currentPath: "/proyectos",
    items,
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** `currentPath` marca el ítem activo. En la demo los links solo cambian el ítem activo, sin navegar. */
export const ItemActivo: Story = {
  render: function Render(args) {
    const [currentPath, setCurrentPath] = useState(args.currentPath);
    return (
      <Navbar
        {...args}
        currentPath={currentPath}
        linkComponent={forwardRef<HTMLAnchorElement, ComponentProps<"a">>(
          function DemoLink({ href, onClick, ...props }, ref) {
            return (
              <a
                ref={ref}
                href={href}
                {...props}
                onClick={(event) => {
                  event.preventDefault();
                  if (href) setCurrentPath(href);
                  onClick?.(event);
                }}
              />
            );
          },
        )}
      />
    );
  },
};

/** Ítems a ambos lados, con ícono y pintados con un color del tema: una acción destacada a la derecha. */
export const UbicacionIconosYColor: Story = {
  args: {
    items: [
      { label: "Inicio", href: "/" },
      { label: "Proyectos", href: "/proyectos" },
      {
        label: "Nuevo proyecto",
        icon: AddRoundedIcon,
        href: "/proyectos/nuevo",
        color: theme.colors.primary.main,
        align: "end",
      },
      {
        label: "Ana Pérez",
        icon: PersonRoundedIcon,
        align: "end",
        items: [{ label: "Mi Perfil", href: "/cuenta" }],
      },
    ],
  },
};

/** Un ítem sin `href` es un botón: ejecuta `onSelect` en lugar de navegar. */
export const Acciones: Story = {
  args: {
    items: [
      { label: "Inicio", href: "/" },
      { label: "Exportar", onSelect: () => {}, align: "end" },
      {
        label: "Salir",
        color: theme.colors.danger.main,
        onSelect: () => {},
        align: "end",
      },
    ],
  },
};

/** Los textos de la barra se pueden reemplazar de a uno, por ejemplo para otro idioma. */
export const TextosPropios: Story = {
  args: {
    labels: { openMenu: "Open menu", closeMenu: "Close menu" },
  },
};
