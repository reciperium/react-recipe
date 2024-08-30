import { Token } from "@reciperium/recipe-parser-wasm";
import Word from "./Word";
import Ingredient from "./Ingredient";
import RecipeRef from "./RecipeRef";
import Material from "./Material";
import Timer from "./Timer";
import React from "react";

export type Props = {
  tokens: Token[];
  RecipeRefResolver?: React.ElementType;
  baseUrl: string;
};

const RecipeRefResolverDefault: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => <>{children}</>;

export default function Instructions({
  tokens,
  RecipeRefResolver = RecipeRefResolverDefault,
  baseUrl,
}: Props) {
  const firstIndex =
    tokens?.findIndex(
      (token) => token.token !== "Metadata" && token.token !== "Space"
    ) || 0;
  return (
    <div className="recipe-content whitespace-pre text-wrap">
      {tokens.slice(firstIndex).map((token, i) => {
        switch (token.token) {
          case "Space":
            return token.content;
          case "Word":
            return <Word key={i}>{token.content}</Word>;
          case "Ingredient":
            return (
              <Ingredient
                key={i}
                quantity={token.content.quantity}
                unit={token.content.unit}
              >
                {token.content.name}
              </Ingredient>
            );
          case "RecipeRef":
            return (
              <RecipeRef
                key={i}
                quantity={token.content.quantity}
                unit={token.content.unit}
                path={token.content.name}
                baseUrl={baseUrl}
              >
                <RecipeRefResolver>{token.content.name}</RecipeRefResolver>
              </RecipeRef>
            );
          case "Material":
            return <Material key={i}>{token.content}</Material>;
          case "Timer":
            return <Timer key={i}>{token.content}</Timer>;
        }
      })}
    </div>
  );
}
