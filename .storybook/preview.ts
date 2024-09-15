import type { Preview } from "@storybook/react";
import '../src/index.css';
import withContext from "./withContext";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withContext],
  // args: {
  //   theme: recipeThemes[0],
  // },
  // argTypes: {
  //   theme: {
  //     options: recipeThemes,
  //     control: { type: "select" }, // Automatically inferred when 'options' is defined
  //   },
  // },
};

export default preview;
