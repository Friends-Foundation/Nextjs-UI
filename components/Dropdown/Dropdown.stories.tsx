import { Meta, StoryObj } from "@storybook/react";

import { flattenObj } from "../../lib/object-parser";
import Dropdown from "./Dropdown";
import dropdownData from "./Dropdown.mock-data";

const meta: Meta<typeof Dropdown> = {
  title: "component/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    numberOfOptions: { control: { type: "number" } },
    CloseBtn: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => {
    return <Dropdown {...args} />;
  },
  args: {
    ...flattenObj(dropdownData),
  },
};
