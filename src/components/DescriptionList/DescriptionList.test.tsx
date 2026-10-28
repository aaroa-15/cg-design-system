import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DescriptionList, CgThemeProvider } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("DescriptionList", () => {
  it.each(["plain", "bordered"] as const)(
    "%s: dibuja cada término con su valor",
    (variant) => {
      setup(
        <DescriptionList
          variant={variant}
          items={[{ term: "Idioma", value: "Español" }]}
        />,
      );
      expect(screen.getByRole("term")).toHaveTextContent("Idioma");
      expect(screen.getByRole("definition")).toHaveTextContent("Español");
    },
  );
});
