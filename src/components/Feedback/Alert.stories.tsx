import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Stack } from "../../index";

const meta = {
  title: "Componentes/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Alert\` de Material UI: un mensaje inline dentro de la página o de un formulario. El estado se elige con \`severity\` (\`info\`, \`success\`, \`warning\`, \`error\`).

- Un error que pertenece a un campo va debajo del campo, no en un \`Alert\`.
- Un error general (falló el guardado) va en un \`Alert\` con \`severity="error"\` arriba de las acciones.
`,
      },
    },
  },
  args: { children: "Los cambios se guardan automáticamente." },
  decorators: [(Story) => <div style={{ maxWidth: 480 }}>{Story()}</div>],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Severidades: Story = {
  render: () => (
    <Stack spacing={3}>
      <Alert severity="info">Los cambios se guardan automáticamente.</Alert>
      <Alert severity="success">El proyecto se creó correctamente.</Alert>
      <Alert severity="warning">La sesión vence en 5 minutos.</Alert>
      <Alert severity="error">No se pudo guardar. Intentá de nuevo.</Alert>
    </Stack>
  ),
};
