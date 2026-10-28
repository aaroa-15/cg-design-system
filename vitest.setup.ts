import { setProjectAnnotations } from "@storybook/react-vite";
import "@testing-library/jest-dom/vitest";
import preview from "./.storybook/preview";

// Las stories se renderizan con los mismos decoradores que en Storybook (el theme de CG)
setProjectAnnotations(preview);
