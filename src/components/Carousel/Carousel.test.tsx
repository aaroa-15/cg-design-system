import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Carousel, CgThemeProvider, type CarouselProps } from "../../index";

const setup = (props: Partial<CarouselProps> = {}) =>
  render(
    <CgThemeProvider>
      <Carousel {...props}>
        <div>Uno</div>
        <div>Dos</div>
        <div>Tres</div>
      </Carousel>
    </CgThemeProvider>,
  );

const active = () =>
  document.querySelector('[aria-current="true"][role="group"]');

describe("Carousel", () => {
  it("muestra el footer opcional y lo actualiza al avanzar", () => {
    setup({ footer: (i, total) => `Plantilla ${i + 1} de ${total}` });
    expect(screen.getByRole("status")).toHaveTextContent("Plantilla 1 de 3");
    fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(screen.getByRole("status")).toHaveTextContent("Plantilla 2 de 3");
  });

  it("sin footer no agrega la línea de estado", () => {
    setup();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("dibuja una diapositiva por hijo, con su posición", () => {
    setup();
    expect(
      screen.getByRole("region", { name: "Carrusel" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("group")).toHaveLength(3);
    expect(screen.getByRole("group", { name: "2 de 3" })).toHaveTextContent(
      "Dos",
    );
  });

  it("arranca en defaultIndex y avanza con las flechas", () => {
    setup({ defaultIndex: 1 });
    expect(active()).toHaveTextContent("Dos");
    fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(active()).toHaveTextContent("Tres");
    fireEvent.click(screen.getByRole("button", { name: "Anterior" }));
    expect(active()).toHaveTextContent("Dos");
  });

  it("deshabilita las flechas en los extremos", () => {
    setup({ defaultIndex: 0 });
    expect(screen.getByRole("button", { name: "Anterior" })).toBeDisabled();
    fireEvent.click(
      screen.getByRole("button", { name: "Ir a la diapositiva 3" }),
    );
    expect(screen.getByRole("button", { name: "Siguiente" })).toBeDisabled();
  });

  it("avisa el cambio con onIndexChange", () => {
    const onIndexChange = vi.fn();
    setup({ onIndexChange });
    fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(onIndexChange).toHaveBeenCalledWith(1);
  });

  it("controlado: no cambia solo, sigue a index", () => {
    const onIndexChange = vi.fn();
    const { rerender } = render(
      <CgThemeProvider>
        <Carousel index={0} onIndexChange={onIndexChange}>
          <div>Uno</div>
          <div>Dos</div>
        </Carousel>
      </CgThemeProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(onIndexChange).toHaveBeenCalledWith(1);
    expect(active()).toHaveTextContent("Uno");
    rerender(
      <CgThemeProvider>
        <Carousel index={1} onIndexChange={onIndexChange}>
          <div>Uno</div>
          <div>Dos</div>
        </Carousel>
      </CgThemeProvider>,
    );
    expect(active()).toHaveTextContent("Dos");
  });

  it("se mueve con el teclado", () => {
    setup();
    const region = screen.getByRole("region");
    fireEvent.keyDown(region, { key: "ArrowRight" });
    expect(active()).toHaveTextContent("Dos");
    fireEvent.keyDown(region, { key: "End" });
    expect(active()).toHaveTextContent("Tres");
    fireEvent.keyDown(region, { key: "Home" });
    expect(active()).toHaveTextContent("Uno");
  });

  it("elige una diapositiva con un clic en ella", () => {
    setup();
    fireEvent.click(screen.getByRole("group", { name: "3 de 3" }));
    expect(active()).toHaveTextContent("Tres");
  });

  it("avanza al deslizar y ignora los gestos cortos", () => {
    setup();
    const track =
      screen.getAllByRole("group")[0]!.parentElement!.parentElement!
        .parentElement!;
    fireEvent.touchStart(track, { touches: [{ clientX: 200 }] });
    fireEvent.touchEnd(track, { changedTouches: [{ clientX: 180 }] });
    expect(active()).toHaveTextContent("Uno");
    fireEvent.touchStart(track, { touches: [{ clientX: 200 }] });
    fireEvent.touchEnd(track, { changedTouches: [{ clientX: 100 }] });
    expect(active()).toHaveTextContent("Dos");
  });

  it("acepta textos propios y oculta lo que se pide", () => {
    setup({
      hideIndicators: true,
      labels: { next: "Next", region: "Templates" },
    });
    expect(
      screen.getByRole("region", { name: "Templates" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /Ir a la diapositiva/ }),
    ).toBeNull();
  });

  it("no renderiza nada sin diapositivas", () => {
    render(
      <CgThemeProvider>
        <Carousel>{[]}</Carousel>
      </CgThemeProvider>,
    );
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });
});
