import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControlLabel, Stack, Switch } from "../../index";

const meta = {
  title: "Componentes/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Switch\` de Material UI: un interruptor para activar o desactivar una opción que se aplica al
instante. Con texto, se envuelve en \`FormControlLabel\`.
`,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <FormControlLabel control={<Switch {...args} />} label="Notificaciones" />
  ),
};

export const Estados: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Switch />} label="Apagado" />
      <FormControlLabel control={<Switch defaultChecked />} label="Encendido" />
      <FormControlLabel control={<Switch disabled />} label="Deshabilitado" />
    </Stack>
  ),
};
