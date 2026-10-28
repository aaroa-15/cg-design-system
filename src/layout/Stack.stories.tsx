import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Card, Stack, Typography } from "../index";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Stack\` de Material UI: apila elementos con un espacio del sistema entre cada uno, uno debajo del
otro (por defecto) o uno al lado del otro con \`direction="row"\`.

- \`spacing\` usa la escala de CG: \`spacing(1)\` = 4px, así 2 = 8px, 3 = 12px, 4 = 16px, 6 = 24px y 8 = 32px.
- \`direction\` y \`spacing\` aceptan un valor por pantalla: \`direction={{ xs: "column", md: "row" }}\`.
- La alineación y el salto de línea van en \`sx\`: \`sx={{ alignItems: "center", flexWrap: "wrap" }}\`.
- Para repartir en columnas alineadas, usar \`Grid\`.
`,
      },
    },
  },
  args: {
    spacing: 4,
    direction: "column",
    children: [
      <Card key="a" sx={{ p: 6 }}>
        Primero
      </Card>,
      <Card key="b" sx={{ p: 6 }}>
        Segundo
      </Card>,
      <Card key="c" sx={{ p: 6 }}>
        Tercero
      </Card>,
    ],
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Uno al lado del otro, centrados verticalmente. */
export const EnFila: Story = {
  args: { direction: "row", spacing: 2, sx: { alignItems: "center" } },
};

/** Acciones al pie de un formulario: alineadas a la derecha. */
export const Acciones: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ justifyContent: "flex-end" }}>
      <Button variant="outlined">Cancelar</Button>
      <Button>Guardar</Button>
    </Stack>
  ),
};

/** Título a la izquierda y acción a la derecha. */
export const Separados: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing={4}
      sx={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Typography variant="h3">Proyectos</Typography>
      <Button size="small">Nuevo proyecto</Button>
    </Stack>
  ),
};

/** Apilados en mobile y en fila desde 768px: achicá la ventana para verlo. */
export const SegunPantalla: Story = {
  render: () => (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
      <Card sx={{ p: 6 }}>Resumen</Card>
      <Card sx={{ p: 6 }}>Detalle</Card>
    </Stack>
  ),
};
