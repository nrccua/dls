/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { defaultData, defaultProcessDataFn } from './mocks';

import { GeomarketMap, GeomarketMapProps } from '.';

export default {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/geomarkets.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  argTypes: Playground({}, GeomarketMap),
  component: GeomarketMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / GeomarketMap',
} as Meta<GeomarketMapProps>;

export const Default: StoryObj<GeomarketMapProps> = {};

export const CustomColor: StoryObj<GeomarketMapProps> = {
  args: {
    mapProps: {
      color: '#FF0000',
    },
  },
};

export const SelectedGeomarket: StoryObj<GeomarketMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/geomarkets.json',
    processDataFn: defaultProcessDataFn,
    selectedGeomarket: ['MS-01'],
  },
};

export const MultipleSelectedGeomarkets: StoryObj<GeomarketMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: 'maps/geomarkets.json',
    processDataFn: defaultProcessDataFn,
    selectedGeomarket: ['MS-01', 'MS-02'],
  },
};
