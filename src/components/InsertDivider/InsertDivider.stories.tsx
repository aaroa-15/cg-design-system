import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Card, InsertDivider, Stack } from "../../index";

const meta = {
  title: "Componentes/InsertDivider",
  component: InsertDivider,
  parameters: {
    docs: {
      description: {
        component: `
Punto de inserción entre dos ítems de una lista: una línea punteada que, al pasar el mouse o con el
foco, muestra una píldora para agregar un ítem ahí. En pantallas táctiles la píldora se ve siempre.

- \`aria-label\` dice la posición ("Agregar sección en la posición 2"); \`label\` es el texto visible.
- \`hidden\` lo oculta sin mover el layout, por ejemplo mientras se reordena la lista.
`,
      },
    },
  },
  args: {
    label: "Añadir sección aquí",
    "aria-label": "Agregar sección en la posición 2",
    onClick: () => {},
  },
} satisfies Meta<typeof InsertDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EntreItems: Story = {
  render: (args) => (
    <Box sx={{ maxWidth: 360 }}>
      <Stack>
        <Card sx={{ p: 4 }}>Presentación</Card>
        <InsertDivider {...args} />
        <Card sx={{ p: 4 }}>Quiénes somos</Card>
      </Stack>
    </Box>
  ),
};
