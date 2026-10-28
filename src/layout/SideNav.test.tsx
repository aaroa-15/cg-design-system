import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, SideNav } from "../index";

const items = [
  { id: "usuarios", label: "Usuarios" },
  { id: "roles", label: "Roles" },
];

describe("SideNav", () => {
  it("marca el ítem activo y avisa al elegir otro", () => {
    const onSelect = vi.fn();
    render(
      <CgThemeProvider>
        <SideNav
          title="Configuración"
          items={items}
          active="usuarios"
          onSelect={onSelect}
        />
      </CgThemeProvider>,
    );
    expect(
      screen.getByRole("navigation", { name: "Configuración" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Usuarios" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    fireEvent.click(screen.getByRole("button", { name: "Roles" }));
    expect(onSelect).toHaveBeenCalledWith("roles");
  });
});
