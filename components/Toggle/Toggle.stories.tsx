import { Meta, StoryObj } from '@storybook/react';

import {  flattenObj } from '../../lib/object-parser';
import Toggle from './Toggle';
import toggleData from './Toggle.mock-data';


const meta:  Meta<typeof Toggle> = {
  title: 'component/Toggle',
  component: Toggle,
  tags:['autodocs'],
  argTypes: {
    'background':{control:'color'}
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    render: (args) => {
      return <Toggle {...args} />;
    },
    args: {
      ...flattenObj(toggleData),
    },
  };
