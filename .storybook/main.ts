import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    // "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {

    },
  },
  async viteFinal(config, options) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      build: {
        chunkSizeWarningLimit: 1024
      }
    });
  },

};
export default config;
