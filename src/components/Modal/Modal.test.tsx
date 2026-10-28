import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, Modal } from "../../index";

const setup = (props: Partial<React.ComponentProps<typeof Modal>> = {}) => {
  const onClose = vi.fn();
  render(
    <CgThemeProvider>
      <Modal isOpen onClose={onClose} title="Nuevo proyecto" {...props}>
        Contenido
      </Modal>
    </CgThemeProvider>,
  );
  return { onClose };
};

describe("Modal", () => {
  it("muestra el título, el contenido y el footer", () => {
    setup({ subtitle: "Datos generales", footer: <button>Guardar</button> });
    expect(
      screen.getByRole("dialog", { name: "Nuevo proyecto" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Datos generales")).toBeInTheDocument();
    expect(screen.getByText("Contenido")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
  });

  it("no renderiza nada si está cerrado", () => {
    setup({ isOpen: false });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("cierra con el botón y con Escape", () => {
    const { onClose } = setup({ closeLabel: "Cerrar ventana" });
    fireEvent.click(screen.getByRole("button", { name: "Cerrar ventana" }));
    fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it("no cierra al hacer clic afuera, salvo con closeOnBackdrop", () => {
    const first = setup();
    fireEvent.click(document.querySelector(".MuiBackdrop-root")!);
    expect(first.onClose).not.toHaveBeenCalled();
  });

  it("cierra al hacer clic afuera con closeOnBackdrop", () => {
    const { onClose } = setup({ closeOnBackdrop: true });
    fireEvent.click(document.querySelector(".MuiBackdrop-root")!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
