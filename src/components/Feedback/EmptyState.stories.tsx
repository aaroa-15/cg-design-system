import type { Meta, StoryObj } from "@storybook/react-vite";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button } from "../../index";
import { EmptyState } from "./Feedback";

const meta = {
  title: "Componentes/EmptyState",
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          "Lo que se muestra cuando una lista o una búsqueda no tiene resultados. La descripción dice qué hacer a continuación.",
      },
    },
  },
  args: {
    icon: <SearchRoundedIcon />,
    title: "Sin resultados",
    description: "Ajustá los filtros para ver otros resultados.",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const ConAccion: Story = {
  args: {
    icon: <FolderOpenRoundedIcon />,
    title: "Todavía no hay proyectos",
    description: "Creá el primero para empezar a cargar horas.",
    action: (
      <Button startIcon={<AddRoundedIcon fontSize="small" />}>
        Nuevo proyecto
      </Button>
    ),
  },
};
