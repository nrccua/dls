/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Theme, ThemeOptions } from '@mui/material/styles';
import { OptionsObject } from 'notistack';

export type { OptionsObject };

export type CustomTheme<T extends object> = Theme & T;

export type CustomThemeOptions<T extends object = Record<string, never>> = ThemeOptions & T;

export interface ICustomDims {
  customDims: {
    heights: Record<string, number>;
    widths: Record<string, number>;
  };
}

export interface IMapDataProps {
  [key: string]: unknown;
}

export type Px = `${number}px` | '';

export type Size = 'default' | 'large';

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export interface SortObject {
  sortBy: string;
  sortDirection: SortDirection;
}

export interface GraphQLError {
  extensions: {
    code: string;
    message: string;
    stackTrace?: string;
  };
  locations: {
    column: number;
    line: number;
  }[];
  message: string;
  path: string[];
}

export interface ServerError {
  extraInfo?: undefined | string;
  graphQLErrors?: [] | string[];
  message: string;
  networkError: {
    name: string;
    response: unknown;
    result: {
      errors: GraphQLError[];
    };
  };
}

export type VariantType = 'SMALL' | 'X_SMALL';
