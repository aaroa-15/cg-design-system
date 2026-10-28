import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, Popover } from "../../index";

function setup(props: Partial<React.ComponentProps<typeof Popover>> = {}) {
  const onClose = vi.fn();
  const anchor = document.createElement("button");
  document.body.appendChild(anchor);
  render(
    <CgThemeProvider>
      <button type="button" data-trigger>
        Otro disparador
      </button>
      <button type="button">Afuera</button>
      <Popover
        open
        anchorEl={anchor}
        onClose={onClose}
        label="Completar cliente"
        keepOpenOn="[data-trigger]"
        {...props}
      >
        <input aria-label="Cliente" />
      </Popover>
    </CgThemeProvider>,
  );
  return { onClose };
}

describe("Popover", () => {
  it("es un diálogo con nombre", () => {
    setup();
    expect(
      screen.getByRole("dialog", { name: "Completar cliente" }),
    ).toBeInTheDocument();
  });

  it("se cierra con un clic afuera", async () => {
    const { onClose } = setup();
    // El detector de clics afuera se activa recién después de abrirse.
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(screen.getByRole("button", { name: "Afuera" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("no se cierra con un clic en keepOpenOn", async () => {
    const { onClose } = setup();
    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
    fireEvent.click(screen.getByRole("button", { name: "Otro disparador" }));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("se cierra con Escape", () => {
    const { onClose } = setup();
    fireEvent.keyDown(screen.getByLabelText("Cliente"), { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("no se dibuja cerrado", () => {
    setup({ open: false });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
