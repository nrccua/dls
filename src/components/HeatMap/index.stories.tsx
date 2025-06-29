/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import { defaultData, defaultProcessDataFn } from './mocks';

import { HeatMap, HeatMapProps } from '.';

const finalData = defaultProcessDataFn(defaultData);

export default {
  args: {
    data: finalData,
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    mapProps: {
      color: 'red',
    },
  },
  argTypes: Playground({}, HeatMap),
  component: HeatMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / HeatMap',
} as Meta<HeatMapProps>;

export const Default: StoryObj<HeatMapProps> = {};

export const CustomColor: StoryObj<HeatMapProps> = {
  args: {
    color: '#FF0000',
  },
};
