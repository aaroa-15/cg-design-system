import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CgThemeProvider, Chip, tokens } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

// jsdom devuelve los colores como rgb(...): se compara contra un elemento de referencia.
const toRgb = (color: string) => {
  const probe = document.createElement("span");
  probe.style.color = color;
  return probe.style.color;
};

describe("Chip", () => {
  it("outlined muestra el borde, no lo deja transparente", () => {
    setup(<Chip label="#Ventas" variant="outlined" />);
    const chip = screen.getByText("#Ventas").closest(".MuiChip-root")!;
    expect(getComputedStyle(chip).borderColor).toBe(toRgb(tokens.lineStrong));
  });

  it("outlined de color usa el borde suave de ese color", () => {
    setup(<Chip label="60% similitud" variant="outlined" color="primary" />);
    const chip = screen.getByText("60% similitud").closest(".MuiChip-root")!;
    expect(getComputedStyle(chip).borderColor).toBe(toRgb(tokens.primary100));
  });
});
