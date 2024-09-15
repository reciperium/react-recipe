import { Meta, StoryObj } from "@storybook/react";
import Ingredient from "./Ingredient";

const meta: Meta<typeof Ingredient> = {
  component: Ingredient,
};

export default meta;
type Story = StoryObj<typeof Ingredient>;

export const Default: Story = {
  args: {
    quantity: "250",
    unit: "gr",
    children: "Tomato",
  },
};
