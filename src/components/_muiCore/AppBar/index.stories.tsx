/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarProps, IconButton, Toolbar, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Menu from '~/icons/Menu';

import { AppBar } from './internal';

const appBarChildren = (
  <Toolbar>
    <IconButton aria-label="menu" color="inherit" edge="start" size="medium">
      <Menu />
    </IconButton>

    <Typography style={{ marginLeft: 8 }} variant="h6">
      Title
    </Typography>
  </Toolbar>
);

/**
 * The default App Bar exports
 */
export default {
  args: {
    children: appBarChildren,
    position: 'static',
  },
  component: AppBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'MUI Core / AppBar',
} as Meta<AppBar>;

type Story = StoryObj<AppBarProps>;

export const Primary: Story = { args: { color: 'primary' } };

export const Secondary: Story = { args: { color: 'secondary' } };

export const Transparent: Story = { args: { color: 'transparent' } };
