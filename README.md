# CG Design System

Librería de componentes de Consultoría Global — React + TypeScript + Material UI con el estilo de CG.

Reúne la identidad visual de los productos de CG (colores, tipografía, espaciado, botones, formularios,
modales, layout) en un solo paquete versionado. Cada producto la instala y usa los mismos componentes,
en vez de copiar estilos o redefinirlos, así todos se ven igual y un cambio de marca se hace en un solo
lugar.

La documentación completa (instalación, fundamentos, cada componente con ejemplos y novedades) está en
Storybook: `npm run storybook`.

## Stack tecnológico

- **React** + **TypeScript** — componentes y tipado de sus props. Es el único requisito para los
  proyectos que consumen la lib.
- **Vite** (modo librería) — empaqueta la lib en `dist/`. No levanta una app: no hay `index.html`.
- **Material UI** (+ Emotion) — los componentes son los de MUI, con las mismas props. El estilo de CG
  (paleta, tipografía, radios, sombras) se aplica una sola vez desde el theme (`src/theme/`), así los
  proyectos no escriben estilos propios. La lib solo agrega lo que MUI no trae: `Modal`, `Dropdown`,
  `KpiCard`, `EmptyState`, `Loader` y el layout (`Navbar`, `SideNav`, `Header`, `Footer`), más las
  props `shadow` y `lift` de `Button`.
- **Tokens** — `src/styles/tokens.css` es la fuente de los valores (colores, tamaños, radios...); de ahí
  se genera `src/tokens.ts`, que alimenta el theme. También se publica como variables CSS.
- **@mui/icons-material** (variante Rounded) — única librería de íconos.
- **Storybook** — sitio de documentación (instalación, fundamentos, componentes y novedades) y entorno
  para desarrollar componentes aislados.
- **Vitest** + **React Testing Library** — tests de componentes, con reporte de coverage
  (`@vitest/coverage-v8`).
- **ESLint** + **Prettier** — lint y formateo de código.
- **Husky** + **lint-staged** — pre-commit hook que corre lint y formateo solo sobre los archivos
  modificados.
- **Bitbucket Pipelines** — CI: formateo, lint, tests, build y auditoría de seguridad (`npm audit`) en
  cada push a `main` y en cada PR.

## Instalación y uso

La lib se instala directo desde este repo, apuntando a un tag de versión. En el `package.json` del
proyecto:

```json
"dependencies": {
  "@cg/design-system": "git+ssh://git@bitbucket.org/consultoriaglobal/cg-design-system.git#semver:^0.1.0"
}
```

`#semver:^0.1.0` toma la última versión `0.1.x`; para fijar una exacta, usar `#v0.1.0`. El proyecto tiene
que tener `react`, `react-dom` y `@mui/icons-material` instalados.

Quien instala necesita acceso de lectura a este repo. Eso incluye al pipeline del proyecto: para que
su `npm ci` pueda clonarlo hay que darle una clave SSH con acceso (en Bitbucket, _Repository settings →
Access keys_ de este repo). Sin SSH, se puede usar la URL `git+https://bitbucket.org/consultoriaglobal/cg-design-system.git`.

Instalar también Material UI y Emotion, y envolver la app en el theme una sola vez, en el punto de
entrada:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

```tsx
import { CgThemeProvider } from "@cg/design-system";

createRoot(document.getElementById("root")!).render(
  <CgThemeProvider>
    <App />
  </CgThemeProvider>,
);
```

Y usar los componentes, con las props de Material UI:

```tsx
import { Button, TextField } from "@cg/design-system";

<TextField label="Nombre" required />;
<Button>Guardar</Button>;
<Button variant="outlined" color="error" size="small" shadow>
  Eliminar
</Button>;
```

### Componentes disponibles

- **De Material UI, con el estilo de CG:** `Button` (con `shadow` y `lift`), `TextField`, `Checkbox`,
  `FormControlLabel`, `Switch`, `Select`, `Card` (`CardHeader`, `CardContent`, `CardActions`; variantes
  `hero` y `split`), `Chip`, `Avatar`, `Alert`, `Typography` (con las variantes `meta` y `kpi`), `Grid`,
  `Stack`, `Table`, `Tabs`, y los demás que exporta el paquete.
- **Propios de CG:** `Dropdown`, `Modal`, `KpiCard`, `EmptyState`, `Loader`.
- **Layout:** `Header`, `Navbar`, `Footer`, `SideNav`.

Cómo se personalizan:

- **Props de MUI**: `variant`, `color`, `size`. El editor las autocompleta.
- **`sx`**: un ajuste puntual, con valores del theme (`bgcolor: "primary.main"`, `p: 6`).
- **El theme**: si algo debe cambiar en todos los proyectos, se cambia en `src/theme/components/`.

### Qué exporta el paquete

| Import                         | Contenido                                                            |
| ------------------------------ | -------------------------------------------------------------------- |
| `@cg/design-system`            | `CgThemeProvider`, `cgTheme`, componentes, tipos, `tokens` y `theme` |
| `@cg/design-system/tokens.css` | Las variables CSS de los tokens, para estilos fuera de MUI           |
| `@cg/design-system/logos/*`    | Logos: `cg-logo-horizontal.webp` y `cg-isotipo.webp` (favicon).      |

Los valores también se pueden leer desde TypeScript, agrupados en `theme` o como lista plana en `tokens`:

```tsx
import { theme, tokens } from "@cg/design-system";

theme.colors.primary.main; // "#006e94"
theme.colors.primary[50]; // "#e6f4f8"
tokens.primary; // "#006e94", el mismo valor
```

### Verificar que un proyecto respeta el sistema

La lib trae un comando que revisa el código del proyecto que la instala:

```bash
npx cg-lint src
```

Informa, con archivo y línea, dónde hay colores escritos a mano, textos de menos de 10px o fuentes
propias. Termina con error si encuentra algo, así que se puede sumar al pre-commit o al pipeline. Una
excepción puntual se marca con el comentario `cg-lint-ignore` en la línea.

### Cambiar un token

Los valores se editan solo en `src/styles/tokens.css`. Después hay que correr `npm run tokens` para
regenerar `src/tokens.ts`; si se olvida, el test `src/tokens.test.ts` falla.

## Estructura del proyecto

```
src/
  index.ts               # punto de entrada: exporta el theme, los componentes y los tipos
  tokens.ts              # tokens como objeto TS; GENERADO desde tokens.css, no se edita a mano
  theme/                 # el estilo de CG sobre Material UI
    index.ts             # createTheme: paleta, tipografía, cortes de pantalla y espaciado
    palette.ts           # colores
    typography.ts        # roles tipográficos (h1, body1, meta, kpi...)
    augmentation.ts      # tipos de las variantes propias (Card hero, Typography kpi)
    CgThemeProvider.tsx  # ThemeProvider + CssBaseline
    components/          # estilos por componente de MUI: button.ts, fields.ts, feedback.ts...
  styles/tokens.css      # variables CSS: fuente única de verdad de los valores
  components/            # un componente propio o una story por carpeta
    Button/
      Button.tsx         # wrapper de MUI con shadow y lift
      Button.stories.tsx # documentación y ejemplos en Storybook
      Button.test.tsx
  layout/                # shell de la aplicación: Header, Navbar, Footer, SideNav
  assets/logos/          # logo horizontal e isotipo
CHANGELOG.md             # novedades de cada versión; se muestra en la documentación
docs/                    # páginas de documentación de Storybook (MDX)
  blocks/                # piezas de las páginas: tablas de tokens, catálogo de íconos
.storybook/              # configuración de Storybook
bin/                     # cg-lint: detecta estilos fuera del sistema en un proyecto
scripts/                 # scripts del repo (generar tokens, copiar assets al build, release)
dist/                    # salida del build; no se commitea en main
```

**Convenciones:**

- Componentes: `PascalCase.tsx`, cada uno en su carpeta junto a su story y su test.
- Tests: `NombreDelArchivo.test.tsx`, al lado del archivo que testean.
- Los estilos de un componente de MUI viven en `src/theme/components/`, no en el componente.
- Ningún color, tamaño de texto o radio literal: se usan los `tokens` o el theme.
- Un componente propio se agrega solo si MUI no lo trae; si MUI lo trae, se estiliza desde el theme.
- Agregar un componente implica: componente + story + test + entrada en `CHANGELOG.md`.

## Puesta en marcha

Para trabajar en la lib:

```bash
npm install
npm run storybook
```

Abre la documentación en `http://localhost:6006`, con recarga automática al editar un componente.

## Scripts disponibles

| Script                    | Descripción                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| `npm run storybook`       | Levanta la documentación en modo desarrollo.                          |
| `npm run build-storybook` | Genera la documentación estática en `storybook-static/`.              |
| `npm run build`           | Type-checks y genera `dist/` (JS, tipos y CSS).                       |
| `npm run tokens`          | Regenera `src/tokens.ts` a partir de `src/styles/tokens.css`.         |
| `npm run release`         | Publica una versión (ver "Versionado y release").                     |
| `npm run lint`            | Corre ESLint sobre todo el proyecto.                                  |
| `npm run format`          | Formatea todo el proyecto con Prettier.                               |
| `npm run format:check`    | Verifica el formateo sin modificar archivos.                          |
| `npm run test`            | Corre los tests en modo watch.                                        |
| `npm run test:run`        | Corre los tests una vez (modo CI).                                    |
| `npm run test:coverage`   | Corre los tests y genera reporte de coverage (`coverage/index.html`). |

## Pre-commit

Cada commit corre automáticamente ESLint (`--fix`) y Prettier sobre los archivos modificados (ver
`.husky/pre-commit` y la config `lint-staged` en `package.json`). Se activa solo al correr `npm install`
(script `prepare`).

## CI

`bitbucket-pipelines.yml` corre en cada push a `main` y en cada PR: `format:check`, `lint`, `test:run`,
`build`, `build-storybook` y `npm audit`.

El sitio de documentación compilado (`storybook-static/`) queda como artefacto descargable del pipeline.
Todavía no se despliega solo: falta definir dónde se aloja.

## Versionado y release

Las versiones siguen versionado semántico:

- **Mayor** (`2.0.0`): cambios que rompen código existente, como quitar una prop o un token.
- **Menor** (`1.1.0`): componentes, props o tokens nuevos.
- **Parche** (`1.0.1`): correcciones que no cambian cómo se usa la librería.

Mientras la versión sea `0.x`, un cambio que rompe sube el número del medio.

### Durante el desarrollo

Cada PR que cambia algo visible para quien usa la lib anota el cambio en `CHANGELOG.md`, bajo
"Sin publicar". Esa sección es lo que después se ve en **Novedades** de la documentación.

### Publicar una versión

Desde `main`, con todo commiteado:

```bash
npm run release -- minor          # o patch, major, o una versión exacta como 1.0.0
git push origin main
git push origin v0.2.0            # el tag que creó el script
```

Con `npm run release -- minor --push` el script hace los dos push al final.

El script (`scripts/release.mjs`):

1. Verifica que estés en `main`, sin cambios pendientes, y que haya algo anotado en "Sin publicar".
2. Corre formato, lint y tests.
3. Sube la versión en `package.json`, le pone versión y fecha a la sección del changelog y lo commitea.
4. Compila y crea el tag `vX.Y.Z`.

El tag apunta a un commit que no está en `main`: es el de `main` más la carpeta `dist/` y un
`package.json` sin `scripts` ni `devDependencies`. Así el proyecto que instala recibe el build listo y
npm no intenta compilar la lib ni bajar Storybook.
