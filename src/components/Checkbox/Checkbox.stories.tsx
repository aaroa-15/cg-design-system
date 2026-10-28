import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox, FormControlLabel, Stack } from "../../index";

const meta = {
  title: "Componentes/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Checkbox\` de Material UI. Para que lleve texto, se envuelve en \`FormControlLabel\`.

- \`Checkbox\` para una opción que se guarda junto con el formulario; \`Switch\` para una preferencia que se
  aplica al instante.
- Una lista de opciones relacionadas se agrupa con \`FormGroup\` de MUI.
`,
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <FormControlLabel
      control={<Checkbox {...args} />}
      label="Acepto los términos y condiciones"
    />
  ),
};

export const Estados: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Checkbox />} label="Sin marcar" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Marcado" />
      <FormControlLabel
        control={<Checkbox indeterminate />}
        label="Indeterminado"
      />
      <FormControlLabel control={<Checkbox disabled />} label="Deshabilitado" />
    </Stack>
  ),
};
