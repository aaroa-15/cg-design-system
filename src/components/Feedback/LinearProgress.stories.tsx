import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, LinearProgress, Typography } from "../../index";

const meta = {
  title: "Componentes/LinearProgress",
  component: LinearProgress,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`LinearProgress\` de Material UI con el estilo de CG: 4px de alto, en píldora y con el riel
en el gris de los bordes.

- \`variant="determinate"\` con \`value\` (0 a 100) para un avance que se conoce, como "3 de 8
  datos completos". Sin \`variant\`, es una carga sin porcentaje.
- Llevar siempre un \`aria-label\` y, al lado, el avance en texto.
`,
      },
    },
  },
  decorators: [(Story) => <Box sx={{ maxWidth: 320 }}>{Story()}</Box>],
  args: {
    variant: "determinate",
    value: 38,
    "aria-label": "Datos completados",
  },
} satisfies Meta<typeof LinearProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avance: Story = {
  render: (args) => (
    <>
      <Typography variant="body1" sx={{ fontWeight: 700, mb: 1.5 }}>
        3 de 8 datos completos
      </Typography>
      <LinearProgress {...args} />
    </>
  ),
};

export const SinPorcentaje: Story = {
  args: { variant: "indeterminate", value: undefined },
};
