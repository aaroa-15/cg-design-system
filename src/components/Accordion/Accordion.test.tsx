import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion, CgThemeProvider } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("Accordion", () => {
  it("se despliega al hacer clic en el encabezado", () => {
    setup(
      <Accordion title="Tono" meta="2 seleccionadas">
        Contenido
      </Accordion>,
    );
    const summary = screen.getByRole("button", { name: /Tono/ });
    expect(summary).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(summary);
    expect(summary).toHaveAttribute("aria-expanded", "true");
    expect(summary).toHaveTextContent("2 seleccionadas");
  });
});

describe("Accordion con unmountOnCollapse", () => {
  it("no deja el contenido en el DOM mientras está cerrado", () => {
    setup(
      <Accordion title="Detalle" unmountOnCollapse>
        Contenido pesado
      </Accordion>,
    );
    expect(screen.queryByText("Contenido pesado")).not.toBeInTheDocument();
  });
});
