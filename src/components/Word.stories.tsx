import { Meta, StoryObj } from "@storybook/react";
import Word from "./Word";

const meta: Meta<typeof Word> = {
  component: Word,
};

export default meta;
type Story = StoryObj<typeof Word>;

export const Default: Story = {
  args: {
    children: "Hello",
  },
};
