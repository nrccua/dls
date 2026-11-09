/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createSvgIcon } from '@mui/material/utils';
import { createElement } from 'react';

/*
 * Internal icons used by DLS components and themes. Paths come from Material
 * Design Icons (https://pictogrammers.com/library/mdi/), as published by
 * `mdi-material-ui`. They are defined locally because `mdi-material-ui`
 * releases are tied to a single Material UI major version, while DLS supports
 * both v7 and v9; `@mui/material/utils` exports `createSvgIcon` in both.
 */
const createIcon = (path: string, name: string): ReturnType<typeof createSvgIcon> =>
  createSvgIcon(createElement('path', { d: path }), name);

export const ChevronDown = createIcon('M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z', 'ChevronDown');
export const ChevronLeft = createIcon('M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z', 'ChevronLeft');
export const ChevronRight = createIcon('M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z', 'ChevronRight');
export const ChevronUp = createIcon('M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z', 'ChevronUp');
export const FilterVariant = createIcon('M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z', 'FilterVariant');
export const PageFirst = createIcon(
  'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  'PageFirst',
);
export const PageLast = createIcon(
  'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  'PageLast',
);
