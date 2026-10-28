import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box, Button, Stack, Stepper, type StepperStep } from "../../index";

const pasos: StepperStep[] = [
  { id: "services", label: "Documento", name: "Servicios" },
  { id: "template", label: "Template" },
  { id: "sections", label: "Secciones" },
  { id: "placeholders", label: "Datos", name: "Datos de la propuesta" },
  { id: "tone", label: "Ajuste de tono" },
  { id: "content-editor", label: "Editor de contenido" },
  { id: "preview", label: "Vista previa" },
];

const meta = {
  title: "Componentes/Stepper",
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: `
Indicador de pasos para un asistente (wizard). Los pasos llegan por \`steps\` y el actual por
\`currentStepId\`; los anteriores se marcan como completos.

- **Responsive**: en pantallas grandes es una barra con todos los pasos. Si el stepper es más angosto
  que \`hideLabelsBelow\` (por defecto 160px por paso), los pasos que no son el actual quedan como
  números. Se mide el ancho del stepper, no de la pantalla, así funciona igual al lado de una barra
  lateral. Debajo de \`compactBelow\` (por defecto \`sm\`) pasa a "Paso 2 de 7" con una barra de progreso.
- Con \`onStepClick\`, los pasos completos se pueden clickear para volver. En la vista compacta aparece
  "Ver pasos anteriores", un menú con esos mismos pasos.
- \`label\` es el texto corto de la barra; \`name\`, opcional, el nombre completo para la vista compacta
  y el menú.
- Los textos (\`labels\`) se pueden reemplazar de a uno, por ejemplo para otro idioma.
`,
      },
    },
  },
  args: { steps: pasos, currentStepId: "tone" },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Se puede volver a un paso completo con un clic, o desde el menú en mobile. */
export const Navegable: Story = {
  render: function Render(args) {
    const [current, setCurrent] = useState(4);
    return (
      <Stack spacing={3}>
        <Stepper
          {...args}
          currentStepId={pasos[current]!.id}
          onStepClick={(id) =>
            setCurrent(pasos.findIndex((step) => step.id === id))
          }
        />
        <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
          >
            Anterior
          </Button>
          <Button
            disabled={current === pasos.length - 1}
            onClick={() => setCurrent(current + 1)}
          >
            Siguiente
          </Button>
        </Stack>
      </Stack>
    );
  },
};

/** En un contenedor angosto, solo el paso actual muestra su nombre. */
export const Angosto: Story = {
  render: (args) => (
    <Box sx={{ maxWidth: 640 }}>
      <Stepper {...args} />
    </Box>
  ),
};

export const PocosPasos: Story = {
  args: {
    steps: [
      { id: "datos", label: "Datos" },
      { id: "revision", label: "Revisión" },
      { id: "confirmacion", label: "Confirmación" },
    ],
    currentStepId: "revision",
  },
};

export const TextosPropios: Story = {
  args: {
    labels: {
      nav: "Steps",
      stepOf: (position, total) => `Step ${position} of ${total}`,
      progress: "Progress",
      previousSteps: "Previous steps",
      previousStepsMenu: "Previous steps",
    },
  },
};
