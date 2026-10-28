import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, DescriptionList, Stack, Typography } from "../../index";

const meta = {
  title: "Componentes/DescriptionList",
  component: DescriptionList,
  parameters: {
    docs: {
      description: {
        component: `
Pares término → valor: un resumen de configuración (\`plain\`) o los atributos de un elemento en
celdas con borde (\`bordered\`, en 1 o 2 columnas).
`,
      },
    },
  },
  args: { items: [{ term: "Idioma", value: "Español" }] },
} satisfies Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `DescriptionList`: filas simples o celdas con borde en dos columnas. */
export const Variantes: Story = {
  render: () => (
    <Stack spacing={6} sx={{ maxWidth: 560 }}>
      <Card sx={{ p: 6 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Configuración
        </Typography>
        <DescriptionList
          items={[
            { term: "Idioma", value: "Español" },
            { term: "Creatividad", value: "Equilibrada" },
          ]}
        />
      </Card>
      <DescriptionList
        variant="bordered"
        columns={2}
        items={[
          { term: "Tipo", value: "PRESENTATION" },
          { term: "Idioma", value: "Español" },
          { term: "Etapa", value: "PROPOSAL" },
          { term: "Caracteres", value: "462" },
        ]}
      />
    </Stack>
  ),
};
