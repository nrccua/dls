/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InputLabelProps } from '@mui/material/InputLabel';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { TextFieldProps } from '@mui/material/TextField';
import { major as muiMajorVersion } from '@mui/material/version';

export interface TextFieldInputDefaults {
  input?: Partial<OutlinedInputProps>;
  inputLabel?: Partial<InputLabelProps>;
}

/**
 * Builds theme `defaultProps` for the TextField input and label slots.
 *
 * Material UI v7 TextField spreads `slotProps` over the legacy `InputProps` and
 * `InputLabelProps`, so defaults set in `slotProps` would discard whatever a
 * consumer passes through the legacy props. On v7 the defaults are set through
 * the legacy props instead, so a consumer's value replaces them as before.
 * v9 removed the legacy props and merges `slotProps` per slot.
 */
export const textFieldInputDefaults = (
  { input, inputLabel }: TextFieldInputDefaults,
  majorVersion = muiMajorVersion,
): Partial<TextFieldProps> =>
  majorVersion < 9
    ? // The legacy props are not part of the v9 types this package builds against.
      ({ InputLabelProps: inputLabel, InputProps: input } as unknown as Partial<TextFieldProps>)
    : { slotProps: { input, inputLabel } };
