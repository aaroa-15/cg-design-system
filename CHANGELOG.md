# Novedades

Todos los cambios visibles de la librería, del más nuevo al más viejo. El formato sigue
[Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen
[versionado semántico](https://semver.org/lang/es/):

- **Mayor** (`2.0.0`): cambios que rompen código existente, como quitar una prop o un token.
- **Menor** (`1.1.0`): componentes, props o tokens nuevos.
- **Parche** (`1.0.1`): correcciones que no cambian cómo se usa la librería.

## Sin publicar

### Agregado

- `Slider`: el de Material UI, exportado desde la lib, con una story de uso.
- `LinearProgress` con el estilo de CG (4px, en píldora, riel gris), con una story.
- `Popover`: tarjeta flotante pegada a un elemento, sin oscurecer la página, para editar algo en el
  lugar o mostrar un detalle. Se cierra con un clic afuera o con Escape; `keepOpenOn` deja saltar
  entre disparadores, `accent` pinta el borde superior y `repositionKey` la reacomoda.
- `Carousel` suma `footer`: una línea opcional debajo de los indicadores (por ejemplo "Plantilla 2 de
  5: Lite"), que los lectores de pantalla anuncian al cambiar de diapositiva.
- `SelectableCard` suma `size` (`md` para grillas, `sm` para listas: más compacta, sin subir y con
  sombra suave al elegirla) y `direction` (`column` o `row`).
- `InlineField`: dato para completar dentro de un texto corrido (pendiente con borde punteado, cargado
  con el valor subrayado; estados `active` y `customized`). Pensado para abrir un `Popover`.
- `NumberBadge`: número de orden en un círculo (`active` lo rellena; `size` `sm` o `md`).
- `SelectableCard` suma `actions` (botones de ícono que aparecen al pasar el mouse, siempre visibles
  en pantallas táctiles) y `dragging` (elevada mientras se arrastra). Al pasar el mouse, el
  `IconTile` de adentro muestra un halo.
- `SelectableCardCta`: línea de acción al pie de una `SelectableCard` ("Seleccionar →") que toma el
  color primario y corre la flecha al pasar el mouse o cuando la card está elegida.
- `InsertDivider`: punto de inserción entre dos ítems de una lista, con una píldora "Agregar aquí".
- `IconButton` con `color="error"`: gris en reposo y rojo al pasar el mouse.
- `Accordion`: bloque desplegable con encabezado (título, subtítulo, dato a la derecha) e ícono + / −.
- `SegmentedControl`: elección única entre pocas opciones siempre visibles ("Baja / Media / Alta").
- `DescriptionList`: pares término → valor, en filas simples (`plain`) o en celdas con borde
  (`bordered`, en 1 o 2 columnas).
- `Card` suma la variante `soft`: fondo y borde primarios suaves para destacar un bloque.
- Se exportan `keyframes` (animaciones propias) y `Snackbar` (avisos breves).
- `Accordion` acepta `unmountOnCollapse` para no dejar el contenido en el DOM mientras está cerrado.
- `Button` suma la prop `pill` (forma de píldora), con su story.
- Roles tipográficos que faltaban: `h4` (título de bloque, 14px), `h5` (12px, negrita), `h6`
  (encabezado de grupo), `subtitle2` (12px, semibold) y `caption` (nota, 11px).
- `SelectableCard` acepta los atributos nativos del botón (`aria-labelledby`, `aria-describedby`,
  `id`, `className`...), para dar nombre y descripción accesibles a una opción con contenido largo.

### Corregido

- `Button`: `outlined` medía 2px más de ancho y de alto que `contained` y `text` (el borde se sumaba
  al padding). Ahora las tres variantes miden lo mismo.
- `Button`: `outlined` y `text` ignoraban `color` y quedaban siempre grises. Ahora, sin `color` son
  neutros (gris, el nuevo color `neutral`) y con `color` toman ese color, como en Material UI.
- `Stepper`: sus medidas estaban en la escala de 8px y con el theme de CG quedaba apretado. Ahora usa
  la escala de CG (4px); el texto de la vista compacta pasa a 14px y "Ver pasos anteriores" es un
  botón de texto.
- `Chip` con `variant="outlined"` no mostraba el borde (quedaba como texto suelto). Ahora lleva el
  borde gris (o el suave de su `color`) y fondo transparente.

## 0.2.0 — 2026-10-27

### Cambiado (rompe código existente)

- Los íconos pasan de **Lucide** a **Material Icons** (`@mui/icons-material`, variante Rounded). Es
  la nueva `peerDependency` en lugar de `lucide-react`: los proyectos tienen que instalarla y cambiar
  sus íconos (por ejemplo `Plus` → `AddRounded`, `Pencil` → `EditRounded`, `X` → `CloseRounded`).
  La página **Íconos** de la documentación tiene el catálogo con las equivalencias por concepto.
  `Navbar`, `SideNav`, `EmptyState` e `IconTile` reciben íconos de Material UI.

### Agregado

- `Card` suma la prop `lift`: sube al pasar el mouse, con una sombra del color primario, igual que
  `Button`.
- `SelectableCard`: card para elegir una opción de un conjunto. Es un botón con `aria-pressed`, sube
  al pasar el mouse y la elegida muestra borde, fondo y check primarios. Padding responsive.
- `IconTile`: ícono dentro de un cuadrado con fondo suave, con `color` y `size` (`sm`, `md`, `lg`).
- Token `--cg-text-3xl` (30px).

### Cambiado

- `Button`: el texto pasa a peso 600 (semibold), para que se lea más firme.
- La tipografía pasa a ser **Inter** (variable), incluida en la lib: `CgThemeProvider` la carga sola,
  sin pedirla a Google Fonts. Se suma la dependencia `@fontsource-variable/inter`.
- `Chip` más grande: 12px y peso 600 en `small` (el tamaño por defecto, unos 24px de alto) y 14px
  en `medium`.
- `SelectableCard`: el check de la card elegida es un círculo relleno con tilde blanco.
- `Container`: márgenes laterales de 16px (24px desde 640px) y ancho fluido hasta 1200px en `lg` y
  1536px en `xl`, sin saltos de ancho entre cortes. Los cortes de pantalla y `Grid` no cambian.
- `h1` (título de página) más grande: 24px en mobile y 30px desde 640px.

## 0.1.0 — 2026-10-27

La librería pasa de CSS propio a **Material UI con el estilo de CG aplicado desde el theme**. Ver la
página **Migración a Material UI** de la documentación para las equivalencias.

### Cambiado (rompe código existente)

- Los componentes son los de Material UI, con sus mismas props: `Button` (`variant` contained,
  outlined y text; `color="error"`; `startIcon` y `endIcon`; `loading`), `TextField` (reemplaza a
  `Input` y `Textarea`), `Checkbox` y `Switch` dentro de `FormControlLabel` (reemplazan a `Checkbox` y
  `Toggle`), `Chip` y `Avatar` (reemplazan a `Badge` y `Avatar`), `Alert` con `severity`, `Typography`
  (reemplaza a `Text`), `Card`, `Grid` y `Stack`.
- `Button` mantiene las props `shadow` y `lift`.
- `Card` suma las variantes `hero` y `split`; `Typography` suma `meta` y `kpi`. `KpiCard` usa `color`
  en lugar de `tone`.
- `Navbar` recibe `linkComponent` en lugar de `renderLink`.
- `Modal`, `Dropdown`, `Loader`, `EmptyState`, `SideNav`, `Header` y `Footer` se reescriben sobre
  Material UI con la misma API.
- Los cortes de pantalla usan las claves de MUI (`base` pasa a `xs`) y `spacing(1)` es 4px, la misma
  escala de siempre.
- `@mui/material`, `@emotion/react` y `@emotion/styled` pasan a ser `peerDependencies`.

### Agregado

- `CgThemeProvider` y `cgTheme`: el theme de MUI con la identidad de CG.
- `Carousel`: estructura de carrusel con diapositiva activa al centro, flechas, indicadores en píldora,
  teclado y gesto de deslizar. El contenido de cada diapositiva lo define quien lo usa; puede ser
  controlado (`index`) o no.
- `Stepper`: indicador de pasos para asistentes, traído de document-generator-fe. Barra con todos los
  pasos en pantallas grandes, solo números cuando no entran los nombres y "Paso 2 de 7" con barra de
  progreso en mobile. Con `onStepClick` se puede volver a los pasos completos.
- Estilos de CG para `Table`, `Tabs`, `Menu` y los demás componentes de MUI que usan los proyectos.

### Quitado

- Los estilos CSS (`styles.css`, `base.css`, `tailwind.css`), las clases `.cg-*` y la dependencia de
  Radix UI. `tokens.css` se mantiene.
- Los componentes propios `Input`, `Textarea`, `Checkbox` y `Toggle`, `Badge`, `Text`, `Stack`, `Grid`
  y `GridItem`, `FieldLabel`, `FieldHint` y `FieldError`.

## Historial anterior

Primera versión de la librería, migrada desde la skill `cg-design-system`.

### Agregado

- Tokens de CG como variables CSS (`tokens.css`) y como objeto TypeScript (`tokens`).
- Objeto `theme` con los mismos valores agrupados: `theme.colors.primary.main`,
  `theme.colors.primary[50]`, `theme.radius.button`.
- Acentos decorativos `purple`, `rose` y `orange` para distinguir categorías, cada uno con sólido,
  `soft`, `line` e `ink`: `theme.colors.purple.soft`.
- Estilos de todos los componentes en CSS puro (`styles.css`), sin depender de Tailwind.
- Componentes React: `Button`, `Input`, `Textarea`, `Dropdown`, `Checkbox`, `Toggle`, `Card`,
  `KpiCard`, `Badge`, `Avatar`, `Alert`, `Loader`, `EmptyState` y `Modal`.
- `Text`: componente para los roles tipográficos (`<Text variant="section-title">`), con `as` para
  cambiar la etiqueta HTML.
- `Grid` y `GridItem`: grilla de 4 columnas en mobile, 8 en tablet y 12 en desktop. `span` ocupa
  todo el ancho si pide más columnas de las que hay; `columns`, `span` y `gap` aceptan un valor por
  pantalla (`{ base: 1, sm: 2 }`).
- `Stack`: apila elementos en columna o en fila con un espacio de la escala (`gap`), con
  alineación y dirección que puede cambiar por pantalla.
- Layout: `AppLayout`, `Header`, `Navbar`, `Footer`, `PageHeader` y `SideNav`.
- Piezas `FieldLabel`, `FieldError` y `FieldHint` para armar campos propios.
- Tema opcional para Tailwind v4 (`tailwind.css`) y reset global opcional (`base.css`).
- Logos de Consultoría Global.
- `Button`: prop `color` para cambiar la paleta de cualquier variante, y props `fullWidth` e
  `iconOnly`.
- `Button`: `fullWidth` acepta un alias (`below-sm`, `below-md`, `below-lg`, `below-xl`) para
  ocupar todo el ancho solo en pantallas más angostas que ese corte.
- `Card`: `variant="hero"` para el banner de bienvenida, con degradado institucional oscuro y los
  textos, botones y badges de adentro adaptados al fondo oscuro.
- Tokens `brandDarker`, `gradientHero`, `onDarkActive` y `onDarkLine`.
- `Dropdown`: navegación con teclado (flechas, Enter, Escape) y roles de accesibilidad.
- `Modal`: lleva el foco al abrirse y lo devuelve al cerrarse.
- `Dropdown`: la lista se maneja con Radix UI. Se dibuja por encima de todo (no queda cortada en
  modales ni paneles con scroll), se da vuelta sola si no hay lugar debajo y, dentro de un modal,
  Escape cierra solo la lista.
- `Modal`: se maneja con Radix UI. El foco ya no puede salir del modal con Tab, el resto de la
  página queda oculto para los lectores de pantalla y el foco vuelve a lo que lo abrió.
- `Navbar`: el menú de usuario se maneja con Radix UI. Se recorre con las flechas, Enter elige y
  las opciones se anuncian como ítems de menú.

### Cambiado respecto de la skill

- Los componentes ya no usan clases de Tailwind: renderizan clases `.cg-*`.
- `Button` ya no acepta `variant="custom"` ni `size="none"`.
- `Input` ya no exporta `fieldLabelClasses` y similares; usar `FieldLabel`, `FieldError` y
  `FieldHint`.
- Los `id` de los campos se generan solos cuando no se pasa uno.
- `Loader` usa el spinner de CSS en lugar del ícono `Loader2`.
