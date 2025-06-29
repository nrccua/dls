/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { FormCheckbox } from '.';

describe('FormCheckbox', () => {
  const Component = <FormCheckbox id="primarycheckbox" label="The label" />;
  standard(Component);
});
