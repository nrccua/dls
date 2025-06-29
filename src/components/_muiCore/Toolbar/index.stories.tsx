/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IconButton, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Menu from '~/icons/Menu';

import { Toolbar } from './internal';

export default {
  args: {
    children: (
      <>
        <IconButton aria-label="menu" color="inherit" edge="start" size="large">
          <Menu />
        </IconButton>
        <Typography color="inherit" variant="h6">
          Photos
        </Typography>
      </>
    ),
  },
  argTypes: {},
  component: Toolbar,
  parameters: {},
  tags: ['autodocs'],
  title: 'MUI Core / Toolbar',
} as Meta<Toolbar>;

export const Primary: StoryObj<Toolbar> = { args: { color: 'primary' } };
export const DisableGutters: StoryObj<Toolbar> = {
  args: { disableGutters: true },
};
export const Regular: StoryObj<Toolbar> = {
  args: { variant: 'regular' },
};
export const Dense: StoryObj<Toolbar> = {
  args: { variant: 'dense' },
};
