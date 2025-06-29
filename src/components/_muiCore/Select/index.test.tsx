/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { MenuItem, Select } from '@mui/material';
import noop from 'lodash/noop';

import { standard } from '~/helpers/test';

describe('Select', () => {
  const Component = (
    <Select
      aria-label="Select"
      defaultValue=""
      onChange={noop}
      SelectDisplayProps={{
        'aria-label': 'Select',
      }}
      value="ONE"
    >
      <MenuItem value="ONE">One</MenuItem>
    </Select>
  );
  standard(
    Component,
    {},
    {
      rules: {
        label: { enabled: false }, // specific unit test for the control without the label
      },
    },
  );
});
