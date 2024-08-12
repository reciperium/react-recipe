import { RecipeProvider, useRecipeContext } from "../src";

import React from "react";

import type { Decorator } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

const withContext: Decorator = (Story, _c): React.ReactElement => {
  const [{ theme }, _updateArgs] = useArgs();
  return (
    <RecipeProvider>
      <ThemeUpdater theme={theme} />
      <Story />
    </RecipeProvider>
  );
};

const ThemeUpdater: React.FC<{ theme: string }> = ({ theme }) => {
  const { setTheme } = useRecipeContext();
  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return null;
};

export default withContext;
