import type { Meta, StoryObj } from "@storybook/react-vite";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { InputAdornment, Stack, TextField } from "../../index";

const meta = {
  title: "Componentes/TextField",
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`TextField\` de Material UI con el estilo de campos de CG. De arriba hacia abajo: label (12px,
negrita, mayúsculas, con asterisco rojo si es requerido), control (14px, radio de 12px) y texto de ayuda
o error (11px).

- Texto de ayuda: \`helperText\`. Error: \`error\` (boolean) y el mensaje en \`helperText\`.
- Varias líneas: \`multiline\` con \`minRows\`. Tamaño chico: \`size="small"\`.
- Ícono a la izquierda: un \`InputAdornment\` en \`slotProps.input.startAdornment\`.
- Para listas de opciones, \`select\` o el componente \`Dropdown\`.
`,
      },
    },
  },
  args: { label: "Nombre", placeholder: "Ej. Intranet" },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}>{Story()}</div>],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Requerido: Story = { args: { required: true } };

export const ConAyuda: Story = {
  args: { helperText: "Se genera solo si lo dejás vacío" },
};

export const ConError: Story = {
  args: {
    label: "Email",
    defaultValue: "ana.perez@",
    error: true,
    helperText: "Ingresá un email válido",
  },
};

export const ConIcono: Story = {
  args: {
    label: "Buscar",
    slotProps: {
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        ),
      },
    },
  },
};

export const Estados: Story = {
  render: () => (
    <Stack spacing={4}>
      <TextField label="Chico" size="small" defaultValue="size small" />
      <TextField label="Deshabilitado" disabled defaultValue="No editable" />
      <TextField
        label="Solo lectura"
        defaultValue="Solo lectura"
        slotProps={{ input: { readOnly: true } }}
      />
      <TextField label="Descripción" multiline minRows={3} />
    </Stack>
  ),
};
