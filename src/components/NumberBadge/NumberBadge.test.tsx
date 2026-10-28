import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CgThemeProvider, NumberBadge } from "../../index";

describe("NumberBadge", () => {
  it("muestra el número", () => {
    render(
      <CgThemeProvider>
        <NumberBadge active>3</NumberBadge>
      </CgThemeProvider>,
    );
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
