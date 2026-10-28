import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CloudOffRoundedIcon from "@mui/icons-material/CloudOffRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import GppMaybeRoundedIcon from "@mui/icons-material/GppMaybeRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import type { SvgIconComponent } from "@mui/icons-material";

type Entry = [icon: SvgIconComponent, name: string, use: string];

/**
 * Qué ícono corresponde a cada acción o concepto. Para sumar uno: elegir en Material Icons
 * (variante Rounded) el más literal y agregarlo acá, así el próximo producto usa el mismo.
 */
const catalog: Record<string, Entry[]> = {
  acciones: [
    [AddRoundedIcon, "AddRounded", "Crear, agregar"],
    [EditRoundedIcon, "EditRounded", "Editar"],
    [DeleteRoundedIcon, "DeleteRounded", "Eliminar (en danger)"],
    [SaveRoundedIcon, "SaveRounded", "Guardar (opcional)"],
    [SearchRoundedIcon, "SearchRounded", "Buscar"],
    [FilterListRoundedIcon, "FilterListRounded", "Filtrar"],
    [CloseRoundedIcon, "CloseRounded", "Cerrar, quitar, limpiar"],
    [CheckRoundedIcon, "CheckRounded", "Confirmar, seleccionado"],
    [RefreshRoundedIcon, "RefreshRounded", "Actualizar, reintentar"],
    [UndoRoundedIcon, "UndoRounded", "Deshacer, restablecer"],
    [DownloadRoundedIcon, "DownloadRounded", "Descargar, exportar"],
    [ContentCopyRoundedIcon, "ContentCopyRounded", "Copiar"],
    [OpenInNewRoundedIcon, "OpenInNewRounded", "Abrir en otra pestaña"],
    [LogoutRoundedIcon, "LogoutRounded", "Cerrar sesión (en danger)"],
    [MenuRoundedIcon, "MenuRounded", "Abrir menú (mobile)"],
    [ArrowForwardRoundedIcon, "ArrowForwardRounded", "Ir, acceder"],
  ],
  navegacion: [
    [
      ExpandMoreRoundedIcon,
      "ExpandMoreRounded",
      "Desplegable; rota 180° al abrir",
    ],
    [
      ChevronRightRoundedIcon,
      "ChevronRightRounded",
      "Sección colapsada, siguiente",
    ],
    [ChevronLeftRoundedIcon, "ChevronLeftRounded", "Anterior"],
  ],
  estados: [
    [CheckCircleRoundedIcon, "CheckCircleRounded", "Éxito, aprobado"],
    [ErrorRoundedIcon, "ErrorRounded", "Error"],
    [WarningRoundedIcon, "WarningRounded", "Advertencia, atención"],
    [InfoRoundedIcon, "InfoRounded", "Información"],
    [HelpRoundedIcon, "HelpRounded", "Ayuda"],
    [ScheduleRoundedIcon, "ScheduleRounded", "Pendiente, en curso"],
    [GppMaybeRoundedIcon, "GppMaybeRounded", "Sin permisos"],
    [CloudOffRoundedIcon, "CloudOffRounded", "Servicio caído"],
    [LockRoundedIcon, "LockRounded", "Bloqueado, solo lectura"],
  ],
  negocio: [
    [HomeRoundedIcon, "HomeRounded", "Inicio"],
    [DashboardRoundedIcon, "DashboardRounded", "Panel, resumen"],
    [WorkRoundedIcon, "WorkRounded", "Proyecto"],
    [FolderRoundedIcon, "FolderRounded", "Carpeta, grupo de proyectos"],
    [
      DescriptionRoundedIcon,
      "DescriptionRounded",
      "Requerimiento, tarea, documento",
    ],
    [AssignmentRoundedIcon, "AssignmentRounded", "Listado, registro de tareas"],
    [PersonRoundedIcon, "PersonRounded", "Persona, perfil"],
    [GroupRoundedIcon, "GroupRounded", "Equipo, colaboradores, RRHH"],
    [ManageAccountsRoundedIcon, "ManageAccountsRounded", "Gestión de usuarios"],
    [ShieldRoundedIcon, "ShieldRounded", "Roles y permisos"],
    [BusinessRoundedIcon, "BusinessRounded", "Cliente, empresa"],
    [PlaceRoundedIcon, "PlaceRounded", "Lugar, ubicación"],
    [PublicRoundedIcon, "PublicRounded", "País, región"],
    [
      CalendarMonthRoundedIcon,
      "CalendarMonthRounded",
      "Fecha, feriado, licencia",
    ],
    [ScheduleRoundedIcon, "ScheduleRounded", "Hora, horas trabajadas"],
    [TagRoundedIcon, "TagRounded", "Legajo, identificador"],
    [MailRoundedIcon, "MailRounded", "Email"],
    [PhoneRoundedIcon, "PhoneRounded", "Teléfono"],
    [SettingsRoundedIcon, "SettingsRounded", "Configuración, administración"],
    [SchoolRoundedIcon, "SchoolRounded", "Formación, estudios"],
    [
      WorkspacePremiumRoundedIcon,
      "WorkspacePremiumRounded",
      "Certificación, logro",
    ],
    [LayersRoundedIcon, "LayersRounded", "Skills, capas, niveles"],
    [LightbulbRoundedIcon, "LightbulbRounded", "Sugerencia"],
    [StarRoundedIcon, "StarRounded", "Favorito"],
    [NotificationsRoundedIcon, "NotificationsRounded", "Notificación"],
    [BarChartRoundedIcon, "BarChartRounded", "Reportes, métricas"],
    [PieChartRoundedIcon, "PieChartRounded", "Reportes, distribución"],
    [CakeRoundedIcon, "CakeRounded", "Cumpleaños"],
  ],
};

export function IconCatalog({ group }: { group: keyof typeof catalog }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
        gap: 12,
        margin: "16px 0 24px",
        fontFamily: "var(--cg-font-sans)",
      }}
    >
      {catalog[group]?.map(([Icon, name, use]) => (
        <div
          key={`${name}-${use}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 12,
            border: "1px solid var(--cg-line)",
            borderRadius: "var(--cg-radius-card)",
            background: "var(--cg-surface)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              padding: 8,
              borderRadius: "var(--cg-radius-button)",
              background: "var(--cg-primary-50)",
              color: "var(--cg-primary)",
            }}
          >
            <Icon aria-hidden sx={{ fontSize: 20 }} />
          </span>
          <span style={{ minWidth: 0 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--cg-font-mono)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--cg-ink)",
              }}
            >
              {name}
            </span>
            <span
              style={{
                display: "block",
                fontSize: 12,
                color: "var(--cg-ink-muted)",
              }}
            >
              {use}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

const sizes: [size: number, use: string][] = [
  [12, "Chips, error de campo"],
  [14, "Menús, botones sm"],
  [16, "Por defecto"],
  [20, "Navbar, alertas"],
  [24, "Título de página"],
  [32, "Dentro de un círculo"],
  [48, "Estados vacíos"],
];

export function IconSizes() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: 24,
        margin: "16px 0 24px",
        fontFamily: "var(--cg-font-sans)",
        color: "var(--cg-primary)",
      }}
    >
      {sizes.map(([size, use]) => (
        <div key={size} style={{ textAlign: "center" }}>
          <WorkRoundedIcon aria-hidden sx={{ fontSize: size }} />
          <div
            style={{ fontSize: 12, fontWeight: 700, color: "var(--cg-ink)" }}
          >
            {size}px
          </div>
          <div style={{ fontSize: 11, color: "var(--cg-ink-muted)" }}>
            {use}
          </div>
        </div>
      ))}
    </div>
  );
}
