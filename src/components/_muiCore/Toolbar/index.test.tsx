/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Toolbar } from '@mui/material';

import { standard } from '~/helpers/test';

describe('Toolbar', () => {
  const Component = <Toolbar variant="dense" />;
  standard(Component);
});
