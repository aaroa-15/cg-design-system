import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box, Slider, Typography } from "../../index";

const meta = {
  title: "Componentes/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
Es el \`Slider\` de Material UI con el color primario de CG. Sirve para elegir un valor dentro de un
rango, como un porcentaje mínimo.

- Llevar siempre un texto que diga qué se elige y el valor actual (\`aria-labelledby\`).
- \`valueLabelDisplay="auto"\` muestra el valor al arrastrar; \`getAriaValueText\` lo lee en voz alta.
- Si cambiar el valor dispara una búsqueda, usar \`onChangeCommitted\` para pedirla al soltar.
`,
      },
    },
  },
  decorators: [(Story) => <Box sx={{ maxWidth: 360 }}>{Story()}</Box>],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Porcentaje: Story = {
  render: function Render() {
    const [value, setValue] = useState(0.6);
    const percent = (v: number) => `${Math.round(v * 100)}%`;
    return (
      <>
        <Typography id="similitud" variant="body1">
          Similitud mínima: <strong>{percent(value)}</strong>
        </Typography>
        <Slider
          aria-labelledby="similitud"
          value={value}
          min={0.3}
          max={0.95}
          step={0.05}
          valueLabelDisplay="auto"
          valueLabelFormat={percent}
          getAriaValueText={percent}
          onChange={(_, next) => setValue(next as number)}
        />
      </>
    );
  },
};
