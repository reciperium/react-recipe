import CookMode from "./components/CookMode";
import Ingredient from "./components/Ingredient";
import Instructions from "./components/Instructions";
import Material from "./components/Material";
import RecipeRef from "./components/RecipeRef";
import { Switch } from "./components/Switch";
import Timer from "./components/Timer";
import Word from "./components/Word";
import { useWakeLock } from "./hooks/use-wake-lock";
import { RecipeProvider, recipeThemes, useRecipeContext } from "./provider";
import { ind } from "./utils";

export {
  CookMode,
  ind,
  Ingredient,
  Instructions,
  Material,
  RecipeProvider,
  RecipeRef,
  recipeThemes,
  Switch,
  Timer,
  useRecipeContext,
  useWakeLock,
  Word
};

