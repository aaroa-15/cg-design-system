#!/usr/bin/env node
/**
 * release — publica una versión de la librería como tag de git.
 *
 *   npm run release -- <patch|minor|major|x.y.z> [--push]
 *
 * Los proyectos instalan la lib directo desde este repo apuntando a un tag, así que el tag tiene
 * que traer el build. Como `dist/` no se commitea en main, el script arma un commit aparte, que
 * solo vive en el tag, con:
 *
 *   - `dist/` incluido
 *   - un package.json sin `scripts` ni `devDependencies`: npm, al instalar desde git un paquete
 *     que tiene script `build` o `prepare`, instala todas sus devDependencies y lo compila. Sin
 *     ellos, usa el `dist/` del tag tal cual.
 *
 * Pasos: valida el estado del repo → corre los chequeos → sube la versión en package.json y
 * CHANGELOG.md y lo commitea en main → compila → crea el commit publicado y el tag.
 * Con --push sube main y el tag; sin esa opción, muestra los comandos para hacerlo a mano.
 */
import { execFileSync, execSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const RELEASE_BRANCH = "main";
const UNRELEASED = "## Sin publicar";

const args = process.argv.slice(2);
const bump = args.find((arg) => !arg.startsWith("--"));
const shouldPush = args.includes("--push");

// Devuelve la salida del comando, o vacío cuando se muestra en pantalla (stdio: "inherit")
const git = (gitArgs, options = {}) =>
  (
    execFileSync("git", gitArgs, {
      cwd: root,
      encoding: "utf8",
      ...options,
    }) ?? ""
  ).trim();
const run = (command) => execSync(command, { cwd: root, stdio: "inherit" });
const fail = (message) => {
  console.error(`\n✗ ${message}`);
  process.exit(1);
};
const step = (message) => console.log(`\n▸ ${message}`);

const readPackage = () =>
  JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

function nextVersion(current, kind) {
  if (/^\d+\.\d+\.\d+$/.test(kind)) return kind;
  const [major, minor, patch] = current.split(".").map(Number);
  if (kind === "major") return `${major + 1}.0.0`;
  if (kind === "minor") return `${major}.${minor + 1}.0`;
  if (kind === "patch") return `${major}.${minor}.${patch + 1}`;
  return null;
}

// ---------- Validaciones --------------------------------------------------

const version = bump && nextVersion(readPackage().version, bump);
if (!version) {
  fail("Uso: npm run release -- <patch|minor|major|x.y.z> [--push]");
}
const tag = `v${version}`;

if (git(["rev-parse", "--abbrev-ref", "HEAD"]) !== RELEASE_BRANCH) {
  fail(`Los releases se hacen desde ${RELEASE_BRANCH}.`);
}
if (git(["status", "--porcelain"])) {
  fail(
    "Hay cambios sin commitear. Commitealos o descartalos antes de publicar.",
  );
}
if (git(["tag", "--list", tag])) {
  fail(`El tag ${tag} ya existe.`);
}

const changelogPath = join(root, "CHANGELOG.md");
const changelog = readFileSync(changelogPath, "utf8");
const [beforeUnreleased, afterUnreleased] = changelog.split(`${UNRELEASED}\n`);
if (afterUnreleased === undefined) {
  fail(`CHANGELOG.md no tiene la sección "${UNRELEASED}".`);
}
const unreleasedNotes = afterUnreleased.split(/^## /m)[0].trim();
if (!unreleasedNotes) {
  fail(`No hay cambios anotados en "${UNRELEASED}" de CHANGELOG.md.`);
}

// ---------- Chequeos ------------------------------------------------------

step("Chequeos: formato, lint y tests");
run("npm run format:check");
run("npm run lint");
run("npm run test:run");

// ---------- Versión en main -----------------------------------------------

step(`Versión ${version} en package.json y CHANGELOG.md`);
run(`npm version ${version} --no-git-tag-version`);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  changelogPath,
  `${beforeUnreleased}${UNRELEASED}\n\n## ${version} — ${today}\n${afterUnreleased}`,
);
run("npx prettier --write CHANGELOG.md package.json");

git(["add", "package.json", "package-lock.json", "CHANGELOG.md"]);
git(["commit", "-m", `Release ${tag}`], { stdio: "inherit" });

// ---------- Build y commit publicado ---------------------------------------

step("Build");
run("npm run build");

step(`Tag ${tag} con el build incluido`);
const published = readPackage();
delete published.scripts;
delete published.devDependencies;
delete published["lint-staged"];

// Se arma el commit con un índice temporal: no toca los archivos de trabajo ni la rama actual
const indexFile = join(root, ".git", "release-index");
const env = { ...process.env, GIT_INDEX_FILE: indexFile };
try {
  git(["read-tree", "HEAD"], { env });
  git(["add", "--force", "dist"], { env });
  const packageBlob = git(["hash-object", "-w", "--stdin"], {
    input: `${JSON.stringify(published, null, 2)}\n`,
  });
  git(
    [
      "update-index",
      "--add",
      "--cacheinfo",
      `100644,${packageBlob},package.json`,
    ],
    { env },
  );
  const tree = git(["write-tree"], { env });
  const commit = git([
    "commit-tree",
    tree,
    "-p",
    "HEAD",
    "-m",
    `${tag} (build publicado)`,
  ]);
  git(["tag", "-a", tag, commit, "-m", `${tag}\n\n${unreleasedNotes}`]);
} finally {
  rmSync(indexFile, { force: true });
}

// ---------- Push -----------------------------------------------------------

if (shouldPush) {
  step("Push de main y del tag");
  git(["push", "origin", RELEASE_BRANCH], { stdio: "inherit" });
  git(["push", "origin", tag], { stdio: "inherit" });
  console.log(`\n✓ ${tag} publicado.`);
} else {
  console.log(`\n✓ ${tag} creado en local. Para publicarlo:\n`);
  console.log(`    git push origin ${RELEASE_BRANCH}`);
  console.log(`    git push origin ${tag}\n`);
}
