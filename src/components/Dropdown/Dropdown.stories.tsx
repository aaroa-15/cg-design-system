import type { Meta, StoryObj } from "@storybook/react-vite";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import { useState } from "react";
import { Dropdown, type DropdownProps } from "./Dropdown";

const paises = [
  { value: "uy", label: "Uruguay" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
  { value: "py", label: "Paraguay" },
  { value: "br", label: "Brasil" },
  { value: "pe", label: "Perú" },
  { value: "co", label: "Colombia" },
  { value: "mx", label: "México" },
  { value: "es", label: "España" },
];

// El Dropdown es controlado: este envoltorio guarda el valor para poder probarlo
function Controlled(props: DropdownProps<string>) {
  const [value, setValue] = useState(props.value);
  return <Dropdown {...props} value={value} onChange={setValue} />;
}

const meta = {
  title: "Componentes/Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
Selector de opciones armado con MUI: un \`TextField select\` o, con \`searchable\`, un \`Autocomplete\`.
Reemplaza al \`<select>\` nativo cuando hacen falta íconos o buscador.

- Se maneja con mouse o teclado: flechas para recorrer, Enter para elegir, Escape para cerrar.
- Si no hay lugar debajo, la lista abre hacia arriba, y se dibuja por encima de todo.
- Las opciones se ordenan alfabéticamente salvo que se pase \`sortOptions={false}\`.
`,
      },
      // La lista flotante necesita lugar dentro del marco de la documentación
      story: { height: "340px" },
    },
  },
  args: { label: "País", options: paises, onChange: () => {} },
  render: (args) => <Controlled {...(args as DropdownProps<string>)} />,
  decorators: [(Story) => <div style={{ maxWidth: 360 }}>{Story()}</div>],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ConValor: Story = { args: { value: "uy", required: true } };

/** Recomendado a partir de unas 8 opciones. */
export const ConBuscador: Story = {
  args: { searchable: true, leftIcon: <PublicRoundedIcon fontSize="small" /> },
};

export const ConIconos: Story = {
  args: {
    label: "Cliente",
    options: [
      {
        value: 1,
        label: "Acme S.A.",
        icon: <BusinessRoundedIcon fontSize="small" />,
      },
      {
        value: 2,
        label: "Globex",
        icon: <BusinessRoundedIcon fontSize="small" />,
      },
      {
        value: 3,
        label: "Initech",
        icon: <BusinessRoundedIcon fontSize="small" />,
      },
    ],
  },
  render: function Render(args) {
    const [value, setValue] = useState<string | number | null>(null);
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
};

/** Cuando el orden tiene significado (prioridades, etapas), se desactiva el orden alfabético. */
export const SinOrdenar: Story = {
  args: {
    label: "Prioridad",
    sortOptions: false,
    options: [
      { value: "alta", label: "Alta" },
      { value: "media", label: "Media" },
      { value: "baja", label: "Baja" },
    ],
  },
};

export const ConError: Story = {
  args: { required: true, error: "Elegí un país" },
};

export const Deshabilitado: Story = {
  args: { value: "ar", disabled: true },
  parameters: { docs: { story: { height: "auto" } } },
};
