import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, Chip, Stack } from "../../index";

const meta = {
  title: "Componentes/Chip",
  component: Chip,
  subcomponents: { Avatar },
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Chip\` de Material UI, con el estilo de los badges de CG: píldora de 12px (14px en \`medium\`) y fondo suave
del color del estado. Etiqueta de estado o contador.

- El color comunica el estado: \`primary\`, \`success\`, \`warning\`, \`error\`, \`info\`, y \`default\` para lo neutro.
- Para mayúsculas, \`sx={{ textTransform: "uppercase", letterSpacing: "0.05em" }}\`.
- \`Avatar\` muestra la inicial de una persona sobre fondo primario suave. Es decorativo: el nombre va al lado.
`,
      },
    },
  },
  args: { label: "Activo", color: "primary" },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Colores: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
      <Chip label="Primario" color="primary" />
      <Chip label="Neutro" />
      <Chip label="Aprobado" color="success" />
      <Chip label="Pendiente" color="warning" />
      <Chip label="Vencido" color="error" />
      <Chip label="En revisión" color="info" />
    </Stack>
  ),
};

export const Avatares: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
      <Avatar sx={{ width: 24, height: 24, fontSize: 10 }}>A</Avatar>
      <Avatar>B</Avatar>
      <Avatar sx={{ width: 40, height: 40, fontSize: 14 }}>C</Avatar>
    </Stack>
  ),
};
