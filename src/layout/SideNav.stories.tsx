import type { Meta, StoryObj } from "@storybook/react-vite";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import { useState } from "react";
import { Card, CardContent, Stack, Typography } from "../index";
import { SideNav } from "./SideNav";

const items = [
  { id: "usuarios", label: "Usuarios", icon: ManageAccountsRoundedIcon },
  { id: "roles", label: "Roles y permisos", icon: ShieldRoundedIcon },
  { id: "equipos", label: "Equipos", icon: GroupRoundedIcon },
  { id: "feriados", label: "Feriados", icon: CalendarMonthRoundedIcon },
];

const meta = {
  title: "Layout/SideNav",
  component: SideNav,
  parameters: {
    docs: {
      description: {
        component: `
Menú lateral para la navegación de segundo nivel. Va dentro de una \`Card\`, a la izquierda del panel
de contenido: es el patrón maestro-detalle. Por debajo de 1024px ocupa todo el ancho y los paneles se
apilan.
`,
      },
    },
  },
  args: {
    title: "Configuración",
    items,
    active: "usuarios",
    onSelect: () => {},
  },
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MaestroDetalle: Story = {
  render: function Render(args) {
    const [active, setActive] = useState(args.active);
    const current = items.find((item) => item.id === active);
    return (
      <Card variant="split">
        <SideNav {...args} active={active} onSelect={setActive} />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h2">{current?.label}</Typography>
            <Typography variant="body1">
              Contenido de la sección seleccionada.
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    );
  },
};
