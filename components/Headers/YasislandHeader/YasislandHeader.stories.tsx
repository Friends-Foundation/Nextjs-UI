import { Meta, StoryObj } from '@storybook/react';

import {  expandObj,flattenObj } from '../../../lib/object-parser';
import YasislandHeader, { YasislandHeaderProps } from './YasislandHeader';
import YasislandHeaderData from './YasislandHeader.mock-data';



const meta:  Meta<typeof YasislandHeader> = {
  title: 'component/YasislandHeader',
  component: YasislandHeader,
  tags:['autodocs'],
};

export default meta;

type Story = StoryObj<typeof YasislandHeader>;

export const Default: Story = {
    render: (args) => {
      return <YasislandHeader {...(expandObj({...args}) as YasislandHeaderProps)}  />;
    },
    args: {
      ...flattenObj(YasislandHeaderData),
    },
  };
