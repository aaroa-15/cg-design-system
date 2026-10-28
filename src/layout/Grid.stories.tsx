import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Card, Grid, KpiCard, TextField, Typography } from "../index";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Grid\` de Material UI. El theme de CG usa sus mismos cortes de pantalla (640, 768, 1024 y
1280px) y \`spacing(1)\` = 4px, así que \`spacing={4}\` son los 16px de siempre.

- El contenedor lleva \`container\`; cada celda es un \`Grid\` con \`size\`, que puede cambiar por pantalla:
  \`size={{ xs: 2, md: 4, lg: 3 }}\`.
- La grilla del sistema es de **4 columnas en mobile, 8 desde 768px y 12 desde 1024px**:
  \`columns={{ xs: 4, md: 8, lg: 12 }}\`.
- Para formularios: \`columns={{ xs: 1, sm: 2 }}\`, y los campos largos con \`size={{ xs: 1, sm: 2 }}\`.

La explicación completa está en **Fundamentos / Grilla**. Para ver el cambio de columnas, achicá la
ventana o usá el botón de tamaño de pantalla de la barra de Storybook.
`,
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const SYSTEM_COLUMNS = { xs: 4, md: 8, lg: 12 };

/** Doce celdas de una columna: se ven 4, 8 o 12 por fila según el ancho de la pantalla. */
export const Columnas: Story = {
  render: () => (
    <Grid container columns={SYSTEM_COLUMNS} spacing={2}>
      {Array.from({ length: 12 }, (_, index) => (
        <Grid key={index} size={1}>
          <Card sx={{ p: 6 }}>
            <Typography align="center">{index + 1}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  ),
};

/** Indicadores de un cuarto, gráfico de dos tercios y panel lateral de un tercio. */
export const Dashboard: Story = {
  render: () => (
    <Grid container columns={SYSTEM_COLUMNS} spacing={6}>
      <Grid size={{ xs: 2, md: 4, lg: 3 }}>
        <KpiCard label="Activos" value={128} />
      </Grid>
      <Grid size={{ xs: 2, md: 4, lg: 3 }}>
        <KpiCard label="Pendientes" value={12} color="warning" />
      </Grid>
      <Grid size={{ xs: 2, md: 4, lg: 3 }}>
        <KpiCard label="Vencidos" value={3} color="error" />
      </Grid>
      <Grid size={{ xs: 2, md: 4, lg: 3 }}>
        <KpiCard label="Cerrados" value={86} color="success" />
      </Grid>
      <Grid size={{ xs: 4, md: 5, lg: 8 }}>
        <Card sx={{ p: 6 }}>Gráfico</Card>
      </Grid>
      <Grid size={{ xs: 4, md: 3, lg: 4 }}>
        <Card sx={{ p: 6 }}>Últimos movimientos</Card>
      </Grid>
      <Grid size={{ xs: 4, md: 8, lg: 12 }}>
        <Alert severity="warning">Hay 3 proyectos vencidos.</Alert>
      </Grid>
    </Grid>
  ),
};

/** Una columna en mobile y dos desde 640px; la descripción ocupa todo el ancho. */
export const Formulario: Story = {
  render: () => (
    <Grid container columns={{ xs: 1, sm: 2 }} spacing={4}>
      <Grid size={1}>
        <TextField label="Nombre" required placeholder="Ej. Intranet" />
      </Grid>
      <Grid size={1}>
        <TextField
          label="Código"
          helperText="Se genera solo si lo dejás vacío"
        />
      </Grid>
      <Grid size={{ xs: 1, sm: 2 }}>
        <TextField label="Descripción" multiline minRows={3} />
      </Grid>
    </Grid>
  ),
};

/** `size` que cambia por pantalla: todo el ancho en mobile, mitad en tablet, tercio en desktop. */
export const SizePorPantalla: Story = {
  render: () => (
    <Grid container columns={SYSTEM_COLUMNS} spacing={2}>
      {[1, 2, 3].map((index) => (
        <Grid key={index} size={{ xs: 4, md: 4, lg: 4 }}>
          <Card sx={{ p: 6 }}>
            <Typography align="center">
              {"size={{ xs: 4, md: 4, lg: 4 }}"}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  ),
};
