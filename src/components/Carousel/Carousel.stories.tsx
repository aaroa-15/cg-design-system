import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Carousel,
  Typography,
} from "../../index";

const meta = {
  title: "Componentes/Carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: `
Estructura de un carrusel con una diapositiva activa al centro y las vecinas más chicas y tenues a los
costados. **No trae contenido**: cada hijo es una diapositiva y lo define quien lo usa (una \`Card\`, una
imagen, lo que haga falta).

- Se mueve con las flechas, los indicadores, el teclado (flechas, Inicio y Fin), un clic en una vecina
  o deslizando el dedo. En mobile las flechas se ocultan y queda el gesto.
- Puede ser **controlado** (\`index\` + \`onIndexChange\`), como en un asistente donde la selección importa
  fuera del carrusel, o manejar su propio estado (\`defaultIndex\`).
- El tamaño se ajusta con \`slideWidth\` y \`slideHeight\` (un valor o uno por pantalla), \`scale\` y \`gap\`.
  Con \`slideHeight\` fijo, todas las diapositivas miden lo mismo.
- Respeta \`prefers-reduced-motion\`: sin animaciones si el sistema lo pide.
- Los textos (\`labels\`) se pueden reemplazar de a uno, por ejemplo para otro idioma.
`,
      },
    },
  },
  args: { slideHeight: "220px", children: null },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const plantillas = [
  { name: "Básica", detail: "Estructura mínima para una propuesta rápida." },
  { name: "Enterprise", detail: "Incluye gobierno de datos y anexos legales." },
  { name: "Lite", detail: "Una sola página, pensada para clientes nuevos." },
  { name: "Modernización", detail: "Diagnóstico, hoja de ruta y estimación." },
];

/** La card de cada diapositiva es de ejemplo: el carrusel no la conoce. */
function Slide({ name, detail }: (typeof plantillas)[number]) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title={name} subheader="Plantilla" />
      <CardContent>
        <Typography>{detail}</Typography>
      </CardContent>
    </Card>
  );
}

export const Playground: Story = {
  render: (args) => (
    <Carousel {...args}>
      {plantillas.map((plantilla) => (
        <Slide key={plantilla.name} {...plantilla} />
      ))}
    </Carousel>
  ),
};

/** El estado vive afuera: la selección se puede leer o cambiar desde otro lugar. */
export const Controlado: Story = {
  render: function Render(args) {
    const [index, setIndex] = useState(1);
    return (
      <Box>
        <Carousel {...args} index={index} onIndexChange={setIndex}>
          {plantillas.map((plantilla) => (
            <Slide key={plantilla.name} {...plantilla} />
          ))}
        </Carousel>
        <Typography align="center" sx={{ mt: 2 }}>
          Elegida: <strong>{plantillas[index]?.name}</strong>
        </Typography>
      </Box>
    );
  },
};

/** Sin alto fijo, cada diapositiva toma el de su contenido. */
/** `footer`: una línea opcional debajo de los indicadores, que se anuncia al cambiar de diapositiva. */
export const ConFooter: Story = {
  args: {
    footer: (index: number, total: number) =>
      `Plantilla ${index + 1} de ${total}`,
  },
  render: Playground.render,
};

export const SinIndicadores: Story = {
  args: { hideIndicators: true, slideHeight: undefined },
  render: (args) => (
    <Carousel {...args}>
      {plantillas.map((plantilla) => (
        <Slide key={plantilla.name} {...plantilla} />
      ))}
    </Carousel>
  ),
};

export const TextosPropios: Story = {
  args: {
    labels: {
      region: "Templates",
      previous: "Previous",
      next: "Next",
      goTo: (position) => `Go to slide ${position}`,
      slide: (position, total) => `${position} of ${total}`,
    },
  },
  render: Playground.render,
};
