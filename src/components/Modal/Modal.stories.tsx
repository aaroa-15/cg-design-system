import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "../../index";
import { Dropdown } from "../Dropdown/Dropdown";
import { Modal, type ModalProps } from "./Modal";

// Botón que abre el modal, para poder probarlo dentro de la documentación
function ModalDemo({
  trigger,
  children,
  footer,
  ...props
}: Omit<ModalProps, "isOpen" | "onClose" | "footer"> & {
  trigger: string;
  footer?: (close: () => void) => ModalProps["footer"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        {trigger}
      </Button>
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={close}
        footer={footer?.(close)}
      >
        {children}
      </Modal>
    </>
  );
}

const meta = {
  title: "Componentes/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
Ventana sobre la página para formularios, confirmaciones y mensajes.

- Cierra con Escape y con el botón. **No** cierra al hacer clic afuera salvo \`closeOnBackdrop\`, así no
  se pierde un formulario por un clic accidental.
- Bloquea el scroll de la página y toma el foco al abrirse. Mientras está abierto, el foco no sale
  del modal con Tab; al cerrarse vuelve a lo que lo abrió.
- El color del header comunica la intención: \`primary\` para formularios y confirmaciones neutras,
  \`danger\` para eliminar y errores, \`warning\` para cambios sin guardar, \`success\` para hitos.
- Las acciones van en el \`footer\`, no dentro del cuerpo: secundario a la izquierda, primario a la derecha.

| Tamaño | Ancho máximo | Uso |
| --- | --- | --- |
| \`sm\` | 448px | Confirmaciones y feedback |
| \`md\` (por defecto) | 624px | Formularios |
| \`lg\` / \`xl\` / \`2xl\` | 672 / 768 / 896px | Formularios largos, detalle con tabla |
| \`full\` | 95% de la pantalla | Vistas previas, grillas grandes |
`,
      },
    },
  },
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Nuevo proyecto",
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Altas y ediciones van en un modal `md`, con los campos en la grilla de formulario. */
export const Formulario: Story = {
  render: () => (
    <ModalDemo
      trigger="Abrir formulario"
      title="Nuevo proyecto"
      subtitle="Datos generales"
      footer={(close) => (
        <>
          <Button variant="outlined" onClick={close}>
            Cancelar
          </Button>
          <Button onClick={close}>Guardar</Button>
        </>
      )}
    >
      <Grid container columns={{ xs: 1, sm: 2 }} spacing={4}>
        <Grid size={1}>
          <TextField label="Nombre" required placeholder="Ej. Intranet" />
        </Grid>
        <Grid size={1}>
          <Dropdown
            label="Cliente"
            required
            options={[
              { value: "acme", label: "Acme S.A." },
              { value: "globex", label: "Globex" },
            ]}
            onChange={() => {}}
          />
        </Grid>
        <Grid size={{ xs: 1, sm: 2 }}>
          <TextField multiline minRows={3} label="Descripción" />
        </Grid>
      </Grid>
    </ModalDemo>
  ),
};

/** Toda acción destructiva se confirma en un modal `sm` con header `danger`. */
export const Confirmacion: Story = {
  render: () => (
    <ModalDemo
      trigger="Eliminar proyecto"
      title="Eliminar proyecto"
      variant="danger"
      size="sm"
      footer={(close) => (
        <>
          <Button variant="outlined" onClick={close}>
            Cancelar
          </Button>
          <Button color="error" onClick={close}>
            Eliminar
          </Button>
        </>
      )}
    >
      <Typography variant="body1">
        ¿Estás seguro que deseás eliminar el proyecto <strong>Intranet</strong>?
        Esta acción no se puede deshacer.
      </Typography>
    </ModalDemo>
  ),
};

export const Variantes: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap" }}>
      {(["primary", "success", "warning", "danger"] as const).map((variant) => (
        <ModalDemo
          key={variant}
          trigger={variant}
          title={`Modal ${variant}`}
          variant={variant}
          size="sm"
          closeOnBackdrop
        >
          <Typography variant="body1">
            Este modal se cierra también al hacer clic afuera.
          </Typography>
        </ModalDemo>
      ))}
    </Stack>
  ),
};

/** Con contenido largo, el scroll queda solo en el cuerpo: header y footer no se mueven. */
export const ContenidoLargo: Story = {
  render: () => (
    <ModalDemo
      trigger="Abrir modal largo"
      title="Términos y condiciones"
      size="lg"
      footer={(close) => <Button onClick={close}>Entendido</Button>}
    >
      <Stack spacing={3}>
        {Array.from({ length: 12 }, (_, index) => (
          <Typography variant="body1" key={index}>
            Párrafo {index + 1}. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
        ))}
      </Stack>
    </ModalDemo>
  ),
};
