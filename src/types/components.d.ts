/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsOverrides, ComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';

import { HeatMapProps } from '../components/HeatMap';
import { MapProps } from '../components/Map';
import DLS_COMPONENT_NAMES from '../constants/DLS_COMPONENT_NAMES';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ComponentNameToClassKey {}

  interface ComponentsPropsList {
    [DLS_COMPONENT_NAMES.HEAT_MAP]: Partial<HeatMapProps>;
    [DLS_COMPONENT_NAMES.MAP]: Partial<MapProps>;
  }

  interface Components {
    [DLS_COMPONENT_NAMES.HEAT_MAP]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
    };
    [DLS_COMPONENT_NAMES.MAP]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.MAP];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.MAP];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.MAP];
    };
  }
}
