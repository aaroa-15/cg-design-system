import type { Meta, StoryObj } from "@storybook/react-vite";
import { InlineField, Typography } from "../../index";

const meta = {
  title: "Componentes/InlineField",
  component: InlineField,
  parameters: {
    docs: {
      description: {
        component: `
Dato para completar dentro de un texto corrido, como un documento con huecos. Pendiente se ve con
borde punteado y el nombre del dato; cargado, con el valor subrayado. \`active\` marca el que se está
editando y \`customized\` uno con un valor propio de esa aparición.

Es un botón: \`onClick\` recibe el elemento para anclar ahí un \`Popover\` con el campo.
`,
      },
    },
  },
  args: { label: "Cliente" },
} satisfies Meta<typeof InlineField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Estados: Story = {
  render: () => (
    <Typography variant="body1" sx={{ lineHeight: 2, maxWidth: 560 }}>
      Sres de <InlineField label="Cliente" /> nos complace presentar esta
      propuesta para <InlineField label="Cantidad FTE" active /> perfiles, con
      inicio en <InlineField label="Fecha" value="marzo de 2027" /> y foco en{" "}
      <InlineField label="Objetivo" value="modernización" customized />.
    </Typography>
  ),
};
