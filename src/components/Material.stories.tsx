import { Meta, StoryObj } from "@storybook/react";
import Material from "./Material";

const meta: Meta<typeof Material> = {
  component: Material,
};

export default meta;
type Story = StoryObj<typeof Material>;

export const Default: Story = {
  args: {
    children: "Non-stick pan",
  },
};
