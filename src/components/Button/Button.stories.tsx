import type { Meta, StoryObj } from "@storybook/react-vite";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Stack } from "../../index";
import { Button } from "./Button";

const meta = {
  title: "Componentes/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Button\` de Material UI (con \`shadow\` y \`lift\` de CG) con el estilo de CG aplicado desde el theme: se importa de
\`@cg/design-system\` y usa las mismas props que MUI.

- Un solo \`contained\` por vista, modal o barra de acciones. Lo demás es \`outlined\` o \`text\`.
- \`color="error"\` solo para acciones destructivas o irreversibles, y siempre confirmadas en un modal.
- Texto en infinitivo y con mayúscula inicial: "Guardar", "Nuevo proyecto". Sin mayúsculas sostenidas.
- En una barra de acciones: secundario a la izquierda, primario a la derecha, todo alineado a la derecha.
`,
      },
    },
  },
  args: { children: "Guardar" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Probá las props desde el panel de controles. */
export const Playground: Story = {};

/** `variant` define la jerarquía: contained (principal), outlined (secundaria), text (terciaria). */
export const Variantes: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: "wrap", alignItems: "center" }}
    >
      <Button variant="contained">Guardar</Button>
      <Button variant="outlined">Cancelar</Button>
      <Button variant="text">Ver más</Button>
      <Button color="error">Eliminar</Button>
    </Stack>
  ),
};

/**
 * `color` cambia la paleta de cualquier variante. Sin `color`, `outlined` y `text` son neutros
 * (gris): el secundario de siempre. Con `color`, toman ese color, por ejemplo un link de acción
 * `variant="text" color="primary"`.
 */
export const Colores: Story = {
  render: () => (
    <Stack spacing={3}>
      {(["contained", "outlined", "text"] as const).map((variant) => (
        <Stack
          key={variant}
          direction="row"
          spacing={3}
          sx={{ flexWrap: "wrap", alignItems: "center" }}
        >
          {(
            [
              "neutral",
              "primary",
              "secondary",
              "success",
              "info",
              "warning",
              "error",
            ] as const
          ).map((color) => (
            <Button key={color} variant={variant} color={color}>
              {color}
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};

/** `size` y los íconos con `startIcon` / `endIcon`. */
export const TamañosEIconos: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: "wrap", alignItems: "center" }}
    >
      <Button size="small">Pequeño</Button>
      <Button>Mediano</Button>
      <Button size="large">Grande</Button>
      <Button startIcon={<AddRoundedIcon fontSize="small" />}>Nuevo</Button>
      <Button
        variant="outlined"
        startIcon={<EditRoundedIcon fontSize="small" />}
      >
        Editar
      </Button>
      <Button color="error" startIcon={<DeleteRoundedIcon fontSize="small" />}>
        Eliminar
      </Button>
      <Button endIcon={<ArrowForwardRoundedIcon fontSize="small" />}>
        Continuar
      </Button>
    </Stack>
  ),
};

/** `loading` muestra un spinner y deshabilita el botón. `disabled` lo deshabilita sin spinner. */
export const Estados: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: "wrap", alignItems: "center" }}
    >
      <Button loading>Guardando</Button>
      <Button disabled>Deshabilitado</Button>
    </Stack>
  ),
};

/** `shadow` agrega una sombra del color del botón; `lift` lo sube al pasar el mouse. */
export const Realce: Story = {
  render: () => (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: "wrap", alignItems: "center" }}
    >
      <Button shadow>Con sombra</Button>
      <Button lift>Con elevación</Button>
      <Button shadow lift>
        Ambas
      </Button>
      <Button shadow color="success">
        Success
      </Button>
      <Button shadow variant="outlined">
        Outlined
      </Button>
    </Stack>
  ),
};

/** `pill`: bordes totalmente redondeados, para las acciones principales de un flujo (Atrás / Continuar). */
export const Pildora: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
      <Button pill variant="outlined" size="large">
        Atrás
      </Button>
      <Button pill size="large">
        Continuar
      </Button>
    </Stack>
  ),
};
