import { Meta, StoryObj } from "@storybook/react";

import { flattenObj } from "../../lib/object-parser";
import Model from "./Model";
import modelData from "./Model.mock-data";

const meta: Meta<typeof Model> = {
  title: "Utils/Model",
  component: Model,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Model>;

export const Default: Story = {
  render: (args) => {
    return <Model {...args} />;
  },
  args: {
    ...flattenObj(modelData),
  },
};
