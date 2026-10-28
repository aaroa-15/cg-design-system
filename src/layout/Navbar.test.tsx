import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, Navbar, type NavbarProps } from "../index";

const onSelect = vi.fn();

const items: NavbarProps["items"] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Exportar", onSelect, align: "end" },
  {
    label: "Ana Pérez",
    align: "end",
    items: [
      { label: "Mi Perfil", href: "/cuenta" },
      { label: "Cerrar Sesión", tone: "danger", separator: true, onSelect },
    ],
  },
];

const setup = (props: Partial<NavbarProps> = {}) =>
  render(
    <CgThemeProvider>
      <Navbar items={items} {...props} />
    </CgThemeProvider>,
  );

describe("Navbar", () => {
  it("dibuja los links con su href y los botones sin href", () => {
    setup();
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(
      screen.getByRole("button", { name: "Exportar" }),
    ).toBeInTheDocument();
  });

  it("marca el ítem de la ruta actual", () => {
    setup({ currentPath: "/proyectos" });
    expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Inicio" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("ejecuta onSelect de un ítem sin href", () => {
    onSelect.mockClear();
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Exportar" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("abre el menú de un ítem con opciones", () => {
    onSelect.mockClear();
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Ana Pérez" }));
    expect(screen.getByRole("menuitem", { name: "Mi Perfil" })).toHaveAttribute(
      "href",
      "/cuenta",
    );
    fireEvent.click(screen.getByRole("menuitem", { name: "Cerrar Sesión" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("usa linkComponent para dibujar los links", () => {
    setup({
      linkComponent: ({ href, children, ...rest }: Record<string, never>) => (
        <a data-router href={href} {...rest}>
          {children}
        </a>
      ),
    });
    expect(screen.getByRole("link", { name: "Inicio" })).toHaveAttribute(
      "data-router",
    );
  });

  it("abre y cierra el menú mobile", () => {
    setup({ labels: { openMenu: "Abrir", closeMenu: "Cerrar" } });
    const toggle = screen.getByRole("button", { name: "Abrir" });
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Cerrar" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
