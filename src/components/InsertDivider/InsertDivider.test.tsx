import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, InsertDivider } from "../../index";

describe("InsertDivider", () => {
  it("es un botón con el nombre de la posición", () => {
    const onClick = vi.fn();
    render(
      <CgThemeProvider>
        <InsertDivider
          label="Agregar sección"
          aria-label="Agregar sección en la posición 2"
          onClick={onClick}
        />
      </CgThemeProvider>,
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Agregar sección en la posición 2" }),
    );
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
