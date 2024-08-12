import React from "react";

export const recipeThemes = ["raw", "highlighted"];
export type RecipeTheme = (typeof recipeThemes)[number];
export type useRecipeProps = {
  theme: RecipeTheme;
  setTheme: React.Dispatch<React.SetStateAction<string>>
};

const defaultContext: useRecipeProps = { theme: recipeThemes[0], setTheme: _ => {} };
export const RecipeContext = React.createContext<useRecipeProps>(defaultContext);

export const useRecipeContext = () =>
  React.useContext(RecipeContext) ?? defaultContext;

export type RecipeProviderProps = React.PropsWithChildren & {
  defaultTheme?: useRecipeProps["theme"] | undefined;
};

export const RecipeProvider: React.FC<RecipeProviderProps> = ({
  children,
  defaultTheme = recipeThemes[0],
}: RecipeProviderProps) => {
  const [theme, setTheme] =
    React.useState<useRecipeProps["theme"]>(() => defaultTheme);

  const providerValue = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <RecipeContext.Provider value={providerValue}>
      {children}
    </RecipeContext.Provider>
  );
};
