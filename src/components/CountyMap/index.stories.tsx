/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { defaultData, defaultProcessDataFn } from './mocks';

import { CountyMap, CountyMapProps } from '.';

export default {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/counties.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  argTypes: Playground({}, CountyMap),
  component: CountyMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / CountyMap',
} as Meta<CountyMapProps>;

export const Default: StoryObj<CountyMapProps> = {};

export const CustomColor: StoryObj<CountyMapProps> = {
  args: {
    mapProps: {
      color: '#FF0000',
    },
  },
};

export const SelectedCounty: StoryObj<CountyMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/counties.json',
    processDataFn: defaultProcessDataFn,
    selectedCounty: ['36103'],
  },
};

export const MultipleSelectedCounties: StoryObj<CountyMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/counties.json',
    processDataFn: defaultProcessDataFn,
    selectedCounty: ['36103', '09001', '36027', '25025'],
  },
};
