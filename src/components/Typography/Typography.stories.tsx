import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "../../index";

const meta = {
  title: "Componentes/Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Typography\` de Material UI. Los roles tipográficos de CG son sus variantes:

| \`variant\` | Uso | Aspecto |
| --- | --- | --- |
| \`h1\` | Título de página | 24px, negrita |
| \`subtitle1\` | Bajada de página | 14px, medio |
| \`h2\` | Título de sección o de modal | 20px, negrita |
| \`h3\` | Título de card | 16px, negrita |
| \`overline\` | Etiqueta de bloque | 12px, negrita, mayúsculas |
| \`body1\` (por defecto) | Texto base | 14px |
| \`body2\` | Texto secundario | 12px, gris |
| \`meta\` | Metadato | 10px, gris claro |
| \`kpi\` | Cifra grande de un indicador | 20px, peso máximo |
`,
      },
    },
  },
  args: { children: "Texto de ejemplo" },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Roles: Story = {
  render: () => (
    <Stack spacing={3}>
      <Typography variant="h1">Título de página</Typography>
      <Typography variant="subtitle1">Bajada de página</Typography>
      <Typography variant="h2">Título de sección</Typography>
      <Typography variant="h3">Título de card</Typography>
      <Typography variant="overline">Etiqueta de bloque</Typography>
      <Typography>Texto base de la interfaz.</Typography>
      <Typography variant="body2">Texto secundario.</Typography>
      <Typography variant="meta">Metadato · hace 2 días</Typography>
      <Typography variant="kpi">1.284</Typography>
    </Stack>
  ),
};
