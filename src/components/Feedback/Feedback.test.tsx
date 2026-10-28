import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CgThemeProvider, EmptyState, KpiCard, Loader } from "../../index";

const wrap = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("Loader", () => {
  it("avisa el estado y muestra el texto", () => {
    wrap(<Loader text="Cargando proyectos..." />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Cargando proyectos...")).toBeInTheDocument();
  });
});

describe("EmptyState", () => {
  it("muestra título, descripción y acción", () => {
    wrap(
      <EmptyState
        icon={<svg data-testid="icon" />}
        title="Sin resultados"
        description="Ajustá los filtros"
        action={<button>Limpiar</button>}
      />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Sin resultados")).toBeInTheDocument();
    expect(screen.getByText("Ajustá los filtros")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Limpiar" })).toBeInTheDocument();
  });
});

describe("KpiCard", () => {
  it("muestra la etiqueta y la cifra", () => {
    wrap(<KpiCard label="Activos" value={128} color="success" />);
    expect(screen.getByText("Activos")).toBeInTheDocument();
    expect(screen.getByText("128")).toBeInTheDocument();
  });
});
