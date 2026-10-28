import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button, CgThemeProvider, cgTheme } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("Button", () => {
  it("es contained por defecto y dispara onClick", () => {
    const onClick = vi.fn();
    setup(<Button onClick={onClick}>Guardar</Button>);
    const button = screen.getByRole("button", { name: "Guardar" });
    expect(button).toHaveClass("MuiButton-contained");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("el theme de CG define el primario #006e94", () => {
    expect(cgTheme.palette.primary.main).toBe("#006e94");
  });

  it("shadow y lift no llegan al DOM", () => {
    setup(
      <Button shadow lift>
        Guardar
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).not.toHaveAttribute("shadow");
    expect(button).not.toHaveAttribute("lift");
  });

  it("outlined y text sin color son neutros; con color toman ese color", () => {
    setup(
      <>
        <Button variant="outlined">Cancelar</Button>
        <Button variant="text" color="primary">
          Ver todas
        </Button>
        <Button variant="outlined" color="secondary">
          Personalizar
        </Button>
      </>,
    );
    expect(screen.getByRole("button", { name: "Cancelar" })).toHaveClass(
      "MuiButton-colorNeutral",
    );
    expect(screen.getByRole("button", { name: "Ver todas" })).toHaveClass(
      "MuiButton-colorPrimary",
    );
    expect(screen.getByRole("button", { name: "Personalizar" })).toHaveClass(
      "MuiButton-colorSecondary",
    );
  });

  it("funciona fuera de CgThemeProvider: outlined sin color cae en primario", () => {
    render(<Button variant="outlined">Cancelar</Button>);
    expect(screen.getByRole("button", { name: "Cancelar" })).toHaveClass(
      "MuiButton-colorPrimary",
    );
  });

  it("contained, outlined y text miden lo mismo (mismo borde y padding)", () => {
    setup(
      <>
        <Button>Uno</Button>
        <Button variant="outlined">Dos</Button>
        <Button variant="text">Tres</Button>
      </>,
    );
    const boxes = ["Uno", "Dos", "Tres"].map((name) => {
      const style = getComputedStyle(screen.getByRole("button", { name }));
      return [style.borderTopWidth, style.paddingTop, style.paddingLeft].join(
        " ",
      );
    });
    expect(new Set(boxes).size).toBe(1);
  });

  it("outlined con color muestra el borde de ese color", () => {
    setup(
      <Button variant="outlined" color="primary">
        Ver todas
      </Button>,
    );
    expect(
      getComputedStyle(screen.getByRole("button")).borderTopColor,
    ).not.toBe("rgba(0, 0, 0, 0)");
  });

  it("pill no llega al DOM", () => {
    setup(<Button pill>Continuar</Button>);
    expect(screen.getByRole("button")).not.toHaveAttribute("pill");
  });

  it("no dispara onClick si está deshabilitado", () => {
    const onClick = vi.fn();
    setup(
      <Button disabled onClick={onClick}>
        Guardar
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });
});
