import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CgThemeProvider, SegmentedControl } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

const OPTIONS = [
  { value: "low", label: "Baja" },
  { value: "high", label: "Alta" },
];

describe("SegmentedControl", () => {
  it("marca la opción actual", () => {
    setup(
      <SegmentedControl
        aria-label="Nivel"
        options={OPTIONS}
        value="low"
        onChange={vi.fn()}
      />,
    );
    expect(screen.getByRole("button", { name: "Baja" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("avisa solo al elegir una opción distinta", () => {
    const onChange = vi.fn();
    setup(
      <SegmentedControl
        aria-label="Nivel"
        options={OPTIONS}
        value="low"
        onChange={onChange}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Baja" }));
    fireEvent.click(screen.getByRole("button", { name: "Alta" }));
    expect(onChange).toHaveBeenCalledExactlyOnceWith("high");
  });
});
