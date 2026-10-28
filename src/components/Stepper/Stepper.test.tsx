import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import {
  CgThemeProvider,
  Stepper,
  type StepperProps,
  type StepperStep,
} from "../../index";

const steps: StepperStep[] = [
  { id: "services", label: "Documento", name: "Servicios" },
  { id: "template", label: "Template" },
  { id: "sections", label: "Secciones" },
  { id: "placeholders", label: "Datos", name: "Datos de la propuesta" },
  { id: "tone", label: "Ajuste de tono" },
  { id: "content-editor", label: "Editor de contenido" },
  { id: "preview", label: "Vista previa" },
];

const setup = (props: Partial<StepperProps> = {}) =>
  render(
    <CgThemeProvider>
      <Stepper steps={steps} currentStepId="services" {...props} />
    </CgThemeProvider>,
  );

const getTrail = () => screen.getByRole("navigation", { name: "Pasos" });

describe("Stepper", () => {
  it("dibuja todos los pasos", () => {
    setup();
    expect(within(getTrail()).getByText("Documento")).toBeInTheDocument();
    expect(within(getTrail()).getByText("Vista previa")).toBeInTheDocument();
  });

  it("marca el paso actual", () => {
    setup({ currentStepId: "tone" });
    expect(
      within(getTrail()).getByText("Ajuste de tono").closest("[aria-current]"),
    ).toHaveAttribute("aria-current", "step");
  });

  it("permite volver solo a un paso completo", async () => {
    const user = userEvent.setup();
    const onStepClick = vi.fn();
    setup({ currentStepId: "tone", onStepClick });

    await user.click(
      within(getTrail()).getByRole("button", { name: /Template/ }),
    );

    expect(onStepClick).toHaveBeenCalledWith("template");
    expect(
      within(getTrail()).queryByRole("button", { name: /Vista previa/ }),
    ).not.toBeInTheDocument();
  });

  it("sin onStepClick, ningún paso es clickeable", () => {
    setup({ currentStepId: "tone" });
    expect(within(getTrail()).queryAllByRole("button")).toHaveLength(0);
  });

  it("en la vista compacta ofrece solo los pasos anteriores, con teclado", async () => {
    const onStepClick = vi.fn();
    const user = userEvent.setup();
    setup({ currentStepId: "tone", onStepClick });

    screen.getByRole("button", { name: "Ver pasos anteriores" }).focus();
    await user.keyboard("{Enter}");

    const menu = screen.getByRole("menu", { name: "Pasos anteriores" });
    expect(within(menu).getAllByRole("menuitem")).toHaveLength(4);
    expect(within(menu).getByText("Servicios")).toBeInTheDocument();
    expect(within(menu).queryByText("Ajuste de tono")).not.toBeInTheDocument();
    await user.keyboard("{Enter}");
    expect(onStepClick).toHaveBeenCalledExactlyOnceWith("services");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it.each([
    ["services", true],
    ["tone", false],
  ])(
    "oculta el menú compacto si no hay a dónde volver (%s)",
    (step, withHandler) => {
      setup({
        currentStepId: step,
        onStepClick: withHandler ? vi.fn() : undefined,
      });
      expect(
        screen.queryByRole("button", { name: "Ver pasos anteriores" }),
      ).not.toBeInTheDocument();
    },
  );

  it("la vista compacta muestra la posición, el nombre completo y el avance", () => {
    setup({ currentStepId: "placeholders" });
    expect(screen.getByText("Paso 4 de 7")).toBeInTheDocument();
    expect(screen.getByText("Datos de la propuesta")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "57",
    );
  });

  it("acepta textos propios", () => {
    setup({
      currentStepId: "template",
      labels: { nav: "Steps", stepOf: (p, t) => `Step ${p} of ${t}` },
    });
    expect(screen.getByRole("navigation", { name: "Steps" })).toBeVisible();
    expect(screen.getByText("Step 2 of 7")).toBeInTheDocument();
  });

  it("no dibuja nada sin pasos", () => {
    const { container } = render(<Stepper steps={[]} currentStepId="x" />);
    expect(container).toBeEmptyDOMElement();
  });
});
