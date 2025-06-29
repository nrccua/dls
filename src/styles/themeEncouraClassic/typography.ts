/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypographyVariantsOptions } from '@mui/material/styles';

import { COLORS } from './palette';

const TYPOGRAPHY: TypographyVariantsOptions = {
  body1: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 24 / 16,
  },
  body2: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  button: {
    color: COLORS.PRIMARY_LIGHT,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 24 / 12,
    textTransform: 'none',
  },
  caption: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
  fontFamily: ['museo-sans', 'Helvetica', 'sans-serif'].join(','),
  fontSize: 18,
  fontWeightBold: 700,
  fontWeightLight: 300,
  fontWeightMedium: 500,
  fontWeightRegular: 500,
  h1: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 38 / 32,
  },
  h2: {
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 31 / 26,
  },
  h3: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 38 / 14,
  },
  h4: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 17 / 14,
  },
  h5: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  h6: {
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 14 / 11,
  },
  htmlFontSize: 16,
  overline: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: 12 / 10,
    textTransform: 'uppercase',
  },
  subtitle1: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 14 / 12,
  },
  subtitle2: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: 12 / 10,
  },
};

export default TYPOGRAPHY;
