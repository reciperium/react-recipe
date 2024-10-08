import { StoryObj } from "@storybook/react";
import RecipeRef from "./RecipeRef";

export default {
  component: RecipeRef,
};

type Story = StoryObj<typeof RecipeRef>;
export const Default: Story = {
  args: {
    children: "Oat Milk",
    path: "woile/oat-milk",
    baseUrl: "https://reciperium.com/",
    quantity: "200",
    unit: "ml",
  },
};
