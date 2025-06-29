/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Button } from '@mui/material';
import { StoryObj } from '@storybook/react-webpack5';
import { ReactElement, useState } from 'react';

import { ButtonGroup } from './internal';

const ButtonChildren = (): ReactElement<unknown> => {
  const buttonLabels = ['One', 'Two', 'Three'];
  const [active, setActive] = useState('One');

  return (
    <>
      {buttonLabels.map(
        (buttonLabel): ReactElement<unknown> => (
          <Button
            key={buttonLabel}
            onClick={(): void => {
              setActive(buttonLabel);
            }}
            variant={active === buttonLabel ? 'contained' : 'outlined'}
          >
            {buttonLabel}
          </Button>
        ),
      )}
    </>
  );
};

const buttonChildren = <ButtonChildren />;

export default {
  args: {
    children: buttonChildren,
  },
  component: ButtonGroup,
  tags: ['autodocs'],
  title: 'MUI Core / ButtonGroup',
} as StoryObj<ButtonGroup>;

export const Primary: StoryObj<ButtonGroup> = { args: { color: 'primary' } };
export const Secondary: StoryObj<ButtonGroup> = {
  args: { color: 'secondary' },
};
export const Disabled: StoryObj<ButtonGroup> = {
  args: { disabled: true },
};
export const FullWidth: StoryObj<ButtonGroup> = {
  args: { fullWidth: true },
};
