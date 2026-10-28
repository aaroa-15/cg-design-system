import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Card, CgThemeProvider, SelectableCard, cgTheme } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("SelectableCard", () => {
  it("es un botón que dispara onClick", () => {
    const onClick = vi.fn();
    setup(<SelectableCard onClick={onClick}>Software Factory</SelectableCard>);
    fireEvent.click(screen.getByRole("button", { name: "Software Factory" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("expone el estado con aria-pressed", () => {
    const { rerender } = setup(<SelectableCard>Lite</SelectableCard>);
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
    rerender(
      <CgThemeProvider>
        <SelectableCard selected>Lite</SelectableCard>
      </CgThemeProvider>,
    );
    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("muestra el check solo si está seleccionada y no se oculta", () => {
    const { container, rerender } = setup(
      <SelectableCard selected>Lite</SelectableCard>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
    rerender(
      <CgThemeProvider>
        <SelectableCard selected hideCheck>
          Lite
        </SelectableCard>
      </CgThemeProvider>,
    );
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("no dispara onClick si está deshabilitada", () => {
    const onClick = vi.fn();
    setup(
      <SelectableCard disabled onClick={onClick}>
        Lite
      </SelectableCard>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("pasa los atributos del botón, como aria-labelledby", () => {
    setup(
      <>
        <span id="titulo">Plantilla Lite</span>
        <SelectableCard aria-labelledby="titulo">
          <span>Plantilla Lite</span>
          <span>Una sola página</span>
        </SelectableCard>
      </>,
    );
    expect(
      screen.getByRole("button", { name: "Plantilla Lite" }),
    ).toBeInTheDocument();
  });

  it("size y direction no llegan al DOM", () => {
    setup(
      <SelectableCard size="sm" direction="row">
        Lite
      </SelectableCard>,
    );
    expect(screen.getByRole("button")).not.toHaveAttribute("size");
    expect(screen.getByRole("button")).not.toHaveAttribute("direction");
  });

  it("dibuja las acciones fuera del botón", () => {
    setup(
      <SelectableCard
        actions={<button type="button">Eliminar</button>}
        dragging
      >
        Presentación
      </SelectableCard>,
    );
    const card = screen.getByRole("button", { name: "Presentación" });
    const remove = screen.getByRole("button", { name: "Eliminar" });
    expect(card).not.toContainElement(remove);
    expect(card).not.toHaveAttribute("dragging");
  });

  it("lift no llega al DOM", () => {
    setup(<SelectableCard lift>Lite</SelectableCard>);
    expect(screen.getByRole("button")).not.toHaveAttribute("lift");
  });
});

describe("Card", () => {
  it("lift no llega al DOM", () => {
    setup(<Card lift>Contenido</Card>);
    expect(screen.getByText("Contenido")).not.toHaveAttribute("lift");
  });
});

describe("Typography", () => {
  it("h1 es de 24px en mobile y 30px desde 640px", () => {
    const h1 = cgTheme.typography.h1 as Record<string, unknown>;
    expect(h1.fontSize).toBe("1.5rem");
    expect(h1["@media (min-width: 640px)"]).toEqual({ fontSize: "1.875rem" });
  });
});
