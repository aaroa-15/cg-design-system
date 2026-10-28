import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, InlineField } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("InlineField", () => {
  it("pendiente muestra el nombre del dato", () => {
    setup(<InlineField label="Cliente" />);
    expect(screen.getByRole("button")).toHaveTextContent("Cliente");
  });

  it("cargado muestra el valor", () => {
    setup(<InlineField label="Cliente" value="Banco Galicia" />);
    expect(screen.getByRole("button")).toHaveTextContent("Banco Galicia");
  });

  it("entrega el elemento al hacer clic, para anclar un Popover", () => {
    const onClick = vi.fn();
    setup(<InlineField label="Cliente" onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledWith(screen.getByRole("button"));
  });

  it("pasa atributos del botón y no expone active ni customized", () => {
    setup(
      <InlineField
        label="Cliente"
        active
        customized
        value="X"
        aria-label="Cliente: X. Editar"
        data-field="CLIENTE"
      />,
    );
    const field = screen.getByRole("button", { name: "Cliente: X. Editar" });
    expect(field).toHaveAttribute("data-field", "CLIENTE");
    expect(field).not.toHaveAttribute("active");
    expect(field).not.toHaveAttribute("customized");
  });
});
