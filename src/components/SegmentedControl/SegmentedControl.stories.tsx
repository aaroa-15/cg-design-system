import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box, SegmentedControl } from "../../index";

const meta = {
  title: "Componentes/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    docs: {
      description: {
        component: `
Elección única entre pocas opciones (2 a 4) que conviene ver todas a la vez. Para más opciones,
usar \`Dropdown\`. Solo avisa \`onChange\` al elegir una opción distinta de la actual.
`,
      },
    },
  },
  args: {
    "aria-label": "Creatividad",
    options: [],
    value: "",
    onChange: () => {},
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Creatividad: Story = {
  render: function Render() {
    const [value, setValue] = useState("BALANCED");
    return (
      <Box sx={{ maxWidth: 360 }}>
        <SegmentedControl
          fullWidth
          aria-label="Creatividad"
          value={value}
          onChange={setValue}
          options={[
            { value: "PRECISE", label: "Precisa" },
            { value: "BALANCED", label: "Equilibrada" },
            { value: "CREATIVE", label: "Creativa" },
          ]}
        />
      </Box>
    );
  },
};
