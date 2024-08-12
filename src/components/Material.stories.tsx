import type { Meta } from "@storybook/react";

import Material from "./Material";

export default {
  component: Material,
} as Meta<typeof Material>;

export const Default = ({}) => {
  return <Material>Hello</Material>;
};
