import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Box,
  Button,
  Popover,
  Stack,
  TextField,
  Typography,
} from "../../index";

const meta = {
  title: "Componentes/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
Tarjeta flotante pegada a un elemento, sin oscurecer la página. Sirve para editar algo en el lugar
(un dato dentro de un documento), mostrar un detalle o un formulario corto. Para tareas largas o que
bloquean, usar \`Modal\`.

- Se cierra con un clic afuera o con Escape (\`onClose\`).
- \`keepOpenOn\`: selector de otros disparadores; un clic en ellos no la cierra, así se puede saltar de
  uno a otro.
- \`accent\` pinta el borde superior (\`primary\`, \`secondary\` o \`none\`).
- \`repositionKey\`: si el disparador cambia de tamaño (crece mientras se escribe), cambiar este valor
  reacomoda la tarjeta.
`,
      },
    },
  },
  args: {
    open: false,
    anchorEl: null,
    onClose: () => {},
    label: "Completar cliente",
    children: null,
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditarEnElLugar: Story = {
  render: function Render() {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [value, setValue] = useState("");
    return (
      <Box sx={{ minHeight: 260 }}>
        <Typography variant="body1">
          Sres de{" "}
          <Button
            variant="outlined"
            size="small"
            onClick={(e) => setAnchor(e.currentTarget)}
          >
            {value || "Cliente"}
          </Button>{" "}
          nos complace presentarles esta propuesta.
        </Typography>
        <Popover
          open={!!anchor}
          anchorEl={anchor}
          onClose={() => setAnchor(null)}
          label="Completar cliente"
          repositionKey={value}
        >
          <Typography variant="h3">Cliente</Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Aparece en 3 secciones
          </Typography>
          <TextField
            autoFocus
            size="small"
            placeholder="Escribe cliente"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Stack direction="row" sx={{ mt: 3, justifyContent: "flex-end" }}>
            <Button size="small" onClick={() => setAnchor(null)}>
              Listo
            </Button>
          </Stack>
        </Popover>
      </Box>
    );
  },
};
