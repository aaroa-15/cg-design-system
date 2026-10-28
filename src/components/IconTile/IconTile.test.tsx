import FactoryRoundedIcon from "@mui/icons-material/FactoryRounded";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CgThemeProvider, IconTile } from "../../index";

const setup = (ui: React.ReactElement) =>
  render(<CgThemeProvider>{ui}</CgThemeProvider>);

describe("IconTile", () => {
  it("es decorativo: no lo leen los lectores de pantalla", () => {
    const { container } = setup(<IconTile icon={FactoryRoundedIcon} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });

  it("dibuja el ícono que recibe", () => {
    const { container } = setup(<IconTile icon={FactoryRoundedIcon} />);
    expect(container.querySelector("svg")).toHaveAttribute(
      "data-testid",
      "FactoryRoundedIcon",
    );
  });

  it("ajusta el tamaño del ícono al de la caja", () => {
    const { container } = setup(
      <IconTile icon={FactoryRoundedIcon} size="sm" />,
    );
    expect(container.querySelector("svg")).toHaveStyle({ fontSize: "16px" });
  });
});
