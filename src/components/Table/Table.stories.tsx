import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Chip,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "../../index";

const meta = {
  title: "Componentes/Table y Tabs",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
\`Table\` y \`Tabs\` de Material UI con el estilo de CG: encabezado en mayúsculas de 10px, celdas de 12px
y fila con fondo tenue al pasar el mouse (\`hover\`). La tabla va dentro de \`TableContainer\`, que le pone
el borde y la sombra. Las columnas numéricas llevan \`align="right"\`.
`,
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [
  { name: "Intranet", client: "Acme S.A.", hours: 128, status: "Activo" },
  { name: "Portal", client: "Globex", hours: 64, status: "Pendiente" },
];

export const Tabla: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Proyecto</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell align="right">Horas</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={row.status === "Activo" ? "success" : "warning"}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};

export const Pestanas: Story = {
  render: function Render() {
    const [value, setValue] = useState(0);
    return (
      <Tabs value={value} onChange={(_event, next) => setValue(next)}>
        <Tab label="General" />
        <Tab label="Horas" />
        <Tab label="Equipo" />
      </Tabs>
    );
  },
};
