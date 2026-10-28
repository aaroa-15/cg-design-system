import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, Dropdown } from "../../index";

const options = [
  { value: "uy", label: "Uruguay" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
];

const setup = (props: Partial<React.ComponentProps<typeof Dropdown>> = {}) => {
  const onChange = vi.fn();
  render(
    <CgThemeProvider>
      <Dropdown label="País" options={options} onChange={onChange} {...props} />
    </CgThemeProvider>,
  );
  return { onChange };
};

describe("Dropdown", () => {
  it("muestra el placeholder sin valor y la opción elegida con valor", () => {
    setup();
    expect(screen.getByText("Seleccionar...")).toBeInTheDocument();
  });

  it("muestra la opción seleccionada", () => {
    setup({ value: "uy" });
    expect(screen.getByRole("combobox")).toHaveTextContent("Uruguay");
  });

  it("elige una opción de la lista, ordenada alfabéticamente", () => {
    const { onChange } = setup();
    fireEvent.mouseDown(screen.getByRole("combobox"));
    const items = within(screen.getByRole("listbox")).getAllByRole("option");
    expect(items.map((item) => item.textContent)).toEqual([
      "Argentina",
      "Chile",
      "Uruguay",
    ]);
    fireEvent.click(items[1]!);
    expect(onChange).toHaveBeenCalledWith("cl");
  });

  it("respeta el orden dado con sortOptions={false}", () => {
    setup({ sortOptions: false });
    fireEvent.mouseDown(screen.getByRole("combobox"));
    const items = within(screen.getByRole("listbox")).getAllByRole("option");
    expect(items[0]).toHaveTextContent("Uruguay");
  });

  it("muestra el error", () => {
    setup({ error: "Elegí un país" });
    expect(screen.getByText("Elegí un país")).toBeInTheDocument();
  });

  it("con searchable filtra al escribir", async () => {
    const { onChange } = setup({ searchable: true });
    await userEvent.type(screen.getByRole("combobox"), "chi");
    const items = screen.getAllByRole("option");
    expect(items).toHaveLength(1);
    fireEvent.click(items[0]!);
    expect(onChange).toHaveBeenCalledWith("cl");
  });
});
