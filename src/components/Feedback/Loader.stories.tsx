import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Feedback";

const meta = {
  title: "Componentes/Loader",
  component: Loader,
  parameters: {
    docs: {
      description: {
        component: `
Indicador de carga de una sección o de la página completa.

Para contenido con forma conocida (tablas, listas) se prefieren los \`Skeleton\` de MUI. Dentro
de un botón, usar su prop \`loading\`.
`,
      },
    },
  },
  args: { text: "Cargando proyectos..." },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SinTexto: Story = { args: { text: undefined } };

/** Para la carga inicial de la aplicación. */
export const PaginaCompleta: Story = {
  args: { fullPage: true, text: "Cargando..." },
  parameters: { layout: "fullscreen", docs: { story: { height: "320px" } } },
};
