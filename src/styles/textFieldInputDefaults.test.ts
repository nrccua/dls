/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';

import { textFieldInputDefaults } from './textFieldInputDefaults';

const defaults = { input: { notched: true }, inputLabel: { shrink: true } };

describe('textFieldInputDefaults', () => {
  it('should use the legacy props on Material UI v7 so consumer props still replace them', () => {
    expect(textFieldInputDefaults(defaults, 7)).toEqual({
      InputLabelProps: { shrink: true },
      InputProps: { notched: true },
    });
  });

  it('should use slot props on Material UI v9', () => {
    expect(textFieldInputDefaults(defaults, 9)).toEqual({
      slotProps: { input: { notched: true }, inputLabel: { shrink: true } },
    });
  });
});
