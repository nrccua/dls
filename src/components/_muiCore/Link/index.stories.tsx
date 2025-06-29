/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Link } from './internal';

export default {
  args: {
    children: <Typography>Click Me</Typography>,
  },
  component: Link,
  tags: ['autodocs'],
  title: 'MUI Core / Link',
} as Meta<Link>;

export const Primary: StoryObj<Link> = { args: { color: 'primary' } };
export const Secondary: StoryObj<Link> = { args: { color: 'secondary' } };
export const TextPrimary: StoryObj<Link> = { args: { color: 'textPrimary' } };
export const TextSecondary: StoryObj<Link> = {
  args: { color: 'textSecondary' },
};
export const NoUnderline: StoryObj<Link> = {
  args: { underline: 'none' },
};
export const HoverUnderline: StoryObj<Link> = {
  args: { underline: 'hover' },
};
