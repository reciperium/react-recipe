import { Meta, StoryObj } from "@storybook/react";
import Timer from "./Timer";

const meta: Meta<typeof Timer> = {
  component: Timer,
};

export default meta;
type Story = StoryObj<typeof Timer>;

export const Default: Story = {
  args: {
    children: "1 minute",
  },
};
