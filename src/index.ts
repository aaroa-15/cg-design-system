// Punto de entrada de @cg/design-system.
// Es Material UI con el estilo de CG aplicado desde el theme: la app se envuelve una vez en
// `CgThemeProvider` y los componentes se importan de acá, con las mismas props que MUI.

export { cgTheme } from "./theme";
export {
  CgThemeProvider,
  type CgThemeProviderProps,
} from "./theme/CgThemeProvider";
export { theme, tokens, type Theme, type TokenName } from "./tokens";

import type {
  SxProps as MuiSxProps,
  Theme as MuiTheme,
} from "@mui/material/styles";
/** Estilos puntuales de un componente (la prop `sx`), con valores del theme de CG. */
export type SxProps = MuiSxProps<MuiTheme>;

// Componentes de CG (props propias, sobre MUI)
export { Button, type ButtonProps } from "./components/Button/Button";
export {
  Carousel,
  type CarouselLabels,
  type CarouselProps,
} from "./components/Carousel/Carousel";
export { Card, type CardProps } from "./components/Card/Card";
export { KpiCard, type KpiCardProps } from "./components/Card/KpiCard";
export {
  SelectableCard,
  SelectableCardCta,
  type SelectableCardProps,
} from "./components/Card/SelectableCard";
export {
  InsertDivider,
  type InsertDividerProps,
} from "./components/InsertDivider/InsertDivider";
export { IconTile, type IconTileProps } from "./components/IconTile/IconTile";
export {
  InlineField,
  type InlineFieldProps,
} from "./components/InlineField/InlineField";
export {
  NumberBadge,
  type NumberBadgeProps,
} from "./components/NumberBadge/NumberBadge";
export {
  Dropdown,
  type DropdownOption,
  type DropdownProps,
} from "./components/Dropdown/Dropdown";
export {
  EmptyState,
  Loader,
  type EmptyStateProps,
  type LoaderProps,
} from "./components/Feedback/Feedback";
export {
  Accordion,
  type AccordionProps,
} from "./components/Accordion/Accordion";
export {
  DescriptionList,
  type DescriptionListItem,
  type DescriptionListProps,
} from "./components/DescriptionList/DescriptionList";
export { Modal, type ModalProps } from "./components/Modal/Modal";
export {
  SegmentedControl,
  type SegmentedControlOption,
  type SegmentedControlProps,
} from "./components/SegmentedControl/SegmentedControl";
export { Popover, type PopoverProps } from "./components/Popover/Popover";
export {
  Stepper,
  type StepperLabels,
  type StepperProps,
  type StepperStep,
} from "./components/Stepper/Stepper";

// Layout de aplicación
export { Footer, type FooterProps } from "./layout/Footer";
export { Header, type HeaderProps } from "./layout/Header";
export {
  Navbar,
  type NavbarItem,
  type NavbarLabels,
  type NavbarProps,
  type NavbarSubItem,
} from "./layout/Navbar";
export { SideNav, type SideNavItem, type SideNavProps } from "./layout/SideNav";

// Componentes de Material UI, ya con el estilo de CG
export {
  Alert,
  Avatar,
  Box,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  CircularProgress,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  Menu,
  MenuItem,
  Select,
  Skeleton,
  Slider,
  Snackbar,
  Stack,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Tooltip,
  Typography,
  alpha,
  keyframes,
  styled,
  useMediaQuery,
  useTheme,
  type AlertProps,
  type AvatarProps,
  type CheckboxProps,
  type ChipProps,
  type GridProps,
  type SliderProps,
  type StackProps,
  type SwitchProps,
  type TextFieldProps,
  type TypographyProps,
} from "@mui/material";
