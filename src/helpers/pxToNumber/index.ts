/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isNumber from 'lodash/isNumber';

import { Px } from '~/types';

export const pxToNumber = (value: Px | number): number => {
  return isNumber(value) ? value : Number(value.replace('px', ''));
};

export default pxToNumber;
