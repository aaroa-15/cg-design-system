import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  KpiCard,
  SelectableCard,
  SelectableCardCta,
  Stack,
  Typography,
} from "../../index";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import { useState } from "react";

const meta = {
  title: "Componentes/Card",
  component: Card,
  subcomponents: {
    CardHeader,
    CardContent,
    CardActions,
    KpiCard,
    SelectableCard,
  },
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Card\` de Material UI: superficie blanca con borde y sombra suave, el contenedor base de todo el
contenido.

- Se compone con \`CardHeader\` (\`title\` y \`subheader\`), \`CardContent\` y \`CardActions\`, o se usa sola con
  \`sx={{ p: 6 }}\`.
- Tiene dos variantes propias: \`hero\` (banner de bienvenida) y \`split\` (paneles lado a lado).
- \`lift\`: la card sube al pasar el mouse, igual que en \`Button\`.
- Para elegir una opción de un conjunto, usar \`SelectableCard\`. Para una card que solo navega,
  envolver el contenido en \`CardActionArea\` de MUI.
- No anidar cards con sombra dentro de otras: adentro se separa con un borde o un fondo tenue.
`,
      },
    },
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}>{Story()}</div>],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Compuesta: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader
        title="Proyecto Intranet"
        subheader="Actualizado hace 2 días"
      />
      <CardContent>
        <Typography>
          Portal interno con gestión de proyectos, horas y licencias.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  ),
};

/** Card simple, sin subcomponentes. */
export const ConPadding: Story = {
  args: {
    sx: { p: 6 },
    children: "Contenido con el padding estándar de 24px.",
  },
};

/**
 * Banner de bienvenida de una pantalla de inicio: `variant="hero"`. Los textos de adentro se adaptan
 * solos al fondo oscuro. Una sola por pantalla, y sin inputs ni tablas adentro.
 */
export const Hero: Story = {
  decorators: [
    (Story) => <div style={{ width: "min(100%, 960px)" }}>{Story()}</div>,
  ],
  render: () => (
    <Card variant="hero" sx={{ p: 6 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
          <Chip label="Sesión activa" color="primary" />
          <Typography variant="h1">¡Buen día, Carlos!</Typography>
          <Typography variant="body2">
            El pulso de tus clientes, oportunidades y actividades de hoy.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
          <Button size="small">Nuevo negocio</Button>
          <Button variant="outlined" size="small">
            Nueva empresa
          </Button>
        </Stack>
      </Stack>
    </Card>
  ),
};

/**
 * Tarjeta de indicador. El color del borde y de la cifra comunica el estado. Se disponen en una
 * grilla de 2 columnas en mobile y 4 en desktop.
 */
export const Indicadores: Story = {
  decorators: [
    (Story) => <div style={{ width: "min(100%, 720px)" }}>{Story()}</div>,
  ],
  render: () => (
    <Grid container columns={{ xs: 2, md: 4 }} spacing={4}>
      <Grid size={1}>
        <KpiCard label="Activos" value={128} />
      </Grid>
      <Grid size={1}>
        <KpiCard label="Aprobados" value={96} color="success" />
      </Grid>
      <Grid size={1}>
        <KpiCard label="Pendientes" value={24} color="warning" />
      </Grid>
      <Grid size={1}>
        <KpiCard label="Vencidos" value={8} color="error" />
      </Grid>
      <Grid size={1}>
        <KpiCard label="En revisión" value={12} color="info" />
      </Grid>
      <Grid size={1}>
        <KpiCard label="Borradores" value={5} color="neutral" />
      </Grid>
    </Grid>
  ),
};

/** Con `lift`, la card sube al pasar el mouse. */
export const ConLift: Story = {
  args: {
    lift: true,
    sx: { p: 6 },
    children: "Pasá el mouse por encima.",
  },
};

const OPCIONES = [
  {
    id: "factory",
    icon: FactoryRoundedIcon,
    title: "Software Factory",
    text: "Células de desarrollo, mantenimiento evolutivo y correctivo.",
  },
  {
    id: "security",
    icon: ShieldRoundedIcon,
    title: "Seguridad",
    text: "Auditorías, hardening y respuesta ante incidentes.",
  },
  {
    id: "data",
    icon: LayersRoundedIcon,
    title: "Gobierno de datos",
    text: "Catálogo, calidad y linaje de los datos de la organización.",
  },
];

/**
 * `SelectableCard`: una opción dentro de un conjunto. Es un botón con `aria-pressed`, sube al pasar
 * el mouse (`lift`, activado por defecto) y la elegida muestra borde, fondo y check primarios. El
 * contenido lo arma quien la usa. En la grilla: 1 columna en mobile, 2 en tablet y 3 en desktop.
 */
export const Seleccionable: Story = {
  decorators: [
    (Story) => <div style={{ width: "min(100%, 960px)" }}>{Story()}</div>,
  ],
  render: function Render() {
    const [selected, setSelected] = useState("factory");
    return (
      <Grid container spacing={5}>
        {OPCIONES.map(({ id, icon: Icon, title, text }) => (
          <Grid key={id} size={{ xs: 12, sm: 6, lg: 4 }}>
            <SelectableCard
              selected={selected === id}
              onClick={() => setSelected(id)}
            >
              <Icon aria-hidden />
              <Typography variant="h3" component="span">
                {title}
              </Typography>
              <Typography variant="body2" component="span">
                {text}
              </Typography>
              <SelectableCardCta>
                {selected === id ? "Seleccionado" : "Seleccionar"}
              </SelectableCardCta>
            </SelectableCard>
          </Grid>
        ))}
      </Grid>
    );
  },
};

/** `size="sm"` y `direction="row"`: ítems de una lista que se eligen, sin subir ni check. */
export const SeleccionableEnLista: Story = {
  decorators: [
    (Story) => <div style={{ width: "min(100%, 420px)" }}>{Story()}</div>,
  ],
  render: function Render() {
    const [selected, setSelected] = useState(0);
    return (
      <Stack spacing={2}>
        {["Presentación", "Quiénes somos", "La propuesta"].map((name, i) => (
          <SelectableCard
            key={name}
            size="sm"
            direction="row"
            hideCheck
            selected={selected === i}
            onClick={() => setSelected(i)}
          >
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: 600 }}
            >
              {i + 1}. {name}
            </Typography>
          </SelectableCard>
        ))}
      </Stack>
    );
  },
};

/** `variant="soft"`: fondo y borde primarios suaves, para destacar un bloque como un formulario. */
export const Suave: Story = {
  args: {
    variant: "soft",
    sx: { p: 6 },
    children: "Escribe tu propia instrucción para la IA.",
  },
};
