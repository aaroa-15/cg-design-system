import { composeStories } from "@storybook/react-vite";
import { render } from "@testing-library/react";
import type { ComponentType } from "react";

type StoryModule = Parameters<typeof composeStories>[0];

const modules = import.meta.glob<StoryModule>("./**/*.stories.tsx", {
  eager: true,
});

// Renderiza todas las stories: si un componente o su documentación se rompe, falla acá
describe.each(Object.entries(modules))("%s", (_path, module) => {
  const stories = Object.entries(
    composeStories(module) as Record<string, ComponentType>,
  );

  it.each(stories)("%s renderiza sin errores", (_name, Story) => {
    const { container } = render(<Story />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
