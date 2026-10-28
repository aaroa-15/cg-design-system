import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, Box, FormControlLabel, Stack, Switch } from "../../index";

const meta = {
  title: "Componentes/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
Bloque que se despliega. El encabezado lleva el título, un subtítulo opcional y un dato a la derecha
(\`meta\`, por ejemplo "2 seleccionadas"). \`unmountOnCollapse\` quita el contenido del DOM mientras
está cerrado.
`,
      },
    },
  },
  args: { title: "Instrucciones de tono", children: "Contenido" },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `Accordion` con opciones adentro: el patrón de una lista de instrucciones por categoría. */
export const ConOpciones: Story = {
  render: () => (
    <Box sx={{ maxWidth: 480 }}>
      <Accordion
        title="Instrucciones de tono"
        subtitle="Elige una opción"
        meta="1 seleccionada"
        defaultExpanded
      >
        <Stack>
          {["Más formal", "Más cercano"].map((label, i) => (
            <FormControlLabel
              key={label}
              labelPlacement="start"
              label={label}
              control={<Switch defaultChecked={i === 0} />}
              sx={{ justifyContent: "space-between", mx: 0 }}
            />
          ))}
        </Stack>
      </Accordion>
    </Box>
  ),
};
