import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined";
import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconTile, Stack } from "../../index";

const meta = {
  title: "Componentes/IconTile",
  component: IconTile,
  parameters: {
    docs: {
      description: {
        component: `
Ícono de Material UI dentro de un cuadrado con el fondo suave de un color. Encabeza cards, opciones
elegibles (\`SelectableCard\`) y estados.

- El estilo lo da el ícono que se importa: \`Rounded\` (relleno, el de CG) u \`Outlined\` (de línea).
- \`color\` comunica la categoría o el estado; \`size\` es \`sm\` (32px), \`md\` (40px) o \`lg\` (48px).
- Es decorativo: el texto de al lado tiene que decir qué representa.
`,
      },
    },
  },
  args: { icon: FactoryRoundedIcon, color: "primary", size: "lg" },
} satisfies Meta<typeof IconTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basico: Story = {};

/** `Rounded` (relleno) contra `Outlined` (línea). */
export const RellenoYLinea: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <IconTile icon={FactoryRoundedIcon} />
      <IconTile icon={FactoryOutlinedIcon} />
    </Stack>
  ),
};

export const Colores: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      <IconTile icon={FactoryRoundedIcon} color="primary" />
      <IconTile icon={ShieldRoundedIcon} color="success" />
      <IconTile icon={WarningRoundedIcon} color="warning" />
      <IconTile icon={WarningRoundedIcon} color="error" />
      <IconTile icon={HubRoundedIcon} color="info" />
      <IconTile icon={StorageRoundedIcon} color="neutral" />
    </Stack>
  ),
};

export const Tamanios: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
      <IconTile icon={FactoryRoundedIcon} size="sm" />
      <IconTile icon={FactoryRoundedIcon} size="md" />
      <IconTile icon={FactoryRoundedIcon} size="lg" />
    </Stack>
  ),
};
