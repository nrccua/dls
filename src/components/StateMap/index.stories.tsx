/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { defaultData, defaultProcessDataFn } from './mocks';

import { StateMap, StateMapProps } from '.';

export default {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  argTypes: Playground({}, StateMap),
  component: StateMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / StateMap',
} as Meta<StateMapProps>;

export const Default: StoryObj<StateMapProps> = {};

export const CustomColor: StoryObj<StateMapProps> = {
  args: {
    mapProps: {
      color: '#FF0000',
    },
  },
};

export const SelectedState: StoryObj<StateMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    processDataFn: defaultProcessDataFn,
    selectedState: ['48'],
  },
};

export const MultipleSelectedStates: StoryObj<StateMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/states.json',
    processDataFn: defaultProcessDataFn,
    selectedState: ['48', '40'],
  },
};
