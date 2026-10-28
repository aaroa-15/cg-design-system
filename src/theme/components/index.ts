import type { Components, Theme } from "@mui/material/styles";
import { tokens as t } from "../../tokens";
import { MuiButton, MuiIconButton } from "./button";
import {
  MuiAlert,
  MuiAvatar,
  MuiChip,
  MuiCircularProgress,
  MuiLinearProgress,
} from "./feedback";
import {
  MuiCheckbox,
  MuiFormControlLabel,
  MuiFormHelperText,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiSelect,
  MuiSwitch,
} from "./fields";
import {
  MuiBackdrop,
  MuiCard,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiDialog,
  MuiMenu,
  MuiMenuItem,
  MuiPaper,
  MuiTab,
  MuiTableCell,
  MuiTableContainer,
  MuiTableRow,
  MuiTabs,
} from "./surfaces";

export const components: Components<Theme> = {
  MuiAlert,
  MuiAvatar,
  MuiBackdrop,
  MuiButton,
  MuiCard,
  MuiCardActions,
  MuiCardContent,
  MuiCardHeader,
  MuiCheckbox,
  MuiChip,
  MuiCircularProgress,
  MuiDialog,
  MuiIconButton,
  MuiFormControlLabel,
  MuiFormHelperText,
  MuiInputLabel,
  MuiLinearProgress,
  MuiMenu,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiPaper,
  MuiSelect,
  MuiSwitch,
  MuiTab,
  MuiTableCell,
  MuiTableContainer,
  MuiTableRow,
  MuiTabs,
  // Contenedor de página: márgenes de 16px (24px desde `sm`) y ancho fluido hasta 1200px en `lg`
  // y 1536px en `xl`, sin saltos con los cortes de CG. No cambia los cortes de pantalla ni Grid.
  MuiContainer: {
    variants: [
      {
        props: (props) => !props.disableGutters,
        style: {
          paddingLeft: t.space4,
          paddingRight: t.space4,
          "@media (min-width: 640px)": {
            paddingLeft: t.space6,
            paddingRight: t.space6,
          },
        },
      },
    ],
    styleOverrides: {
      maxWidthLg: { "@media (min-width: 1024px)": { maxWidth: 1200 } },
      maxWidthXl: { "@media (min-width: 1280px)": { maxWidth: 1536 } },
    },
  },
  MuiStack: { defaultProps: { useFlexGap: true } },
  MuiTextField: { defaultProps: { fullWidth: true } },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        kpi: "p",
        meta: "p",
        subtitle1: "p",
        subtitle2: "p",
        overline: "p",
      },
    },
  },
};
