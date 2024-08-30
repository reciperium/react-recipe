import Instructions from "./Instructions";
import { Token, parse } from "@reciperium/recipe-parser-wasm";
export default {
  component: Instructions,
};

const recipe = `>> tags: vegan, high-protein, high-fiber
>> lang: en

Add {boiled chickpeas}(400 gr) to the &{blender} with {garlic}(1),
{tahini}(2 tsp), {lemon}(1/2), {olive oil}(2 tsp), {salt} and {pepper}.

Blend for t{3 minutes}.

Let's test a recipeRef as well: @{woile/teff-crepes}.
Serve or store`;

const parsedRecipe = parse(recipe);
const tokens: Token[] = parsedRecipe.tokens;
export const Default = () => <Instructions tokens={tokens} baseUrl={"https://reciperium.com"}/>;
