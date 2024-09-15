import type { Preview } from "@storybook/react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [withContext],
  decorators: [],
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
