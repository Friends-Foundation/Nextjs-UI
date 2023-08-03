import { Meta, StoryObj } from "@storybook/react";
import Cards from "./Cards";
import { flattenObj } from "@/lib/object-parser";
import { cardsData } from "./Cards.mock-data";

const meta: Meta<typeof Cards> = {
  title: "component/Cards",
  component: Cards,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  render: (args) => {
    return <Cards {...args} />;
  },
  args: {
    ...flattenObj(cardsData),
  },
};
