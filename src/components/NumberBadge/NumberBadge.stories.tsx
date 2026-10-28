import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberBadge, Stack } from "../../index";

const meta = {
  title: "Componentes/NumberBadge",
  component: NumberBadge,
  parameters: {
    docs: {
      description: {
        component: `
Número de orden en un círculo: la posición de un ítem en una lista, un paso o una sección.
\`active\` lo rellena para marcar el ítem actual o elegido; \`size\` es \`sm\` (24px) o \`md\` (26px).
`,
      },
    },
  },
  args: { children: 1 },
} satisfies Meta<typeof NumberBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basico: Story = {};

export const Estados: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <NumberBadge active>1</NumberBadge>
      <NumberBadge>2</NumberBadge>
      <NumberBadge size="sm">3</NumberBadge>
      <NumberBadge size="sm">12</NumberBadge>
    </Stack>
  ),
};
