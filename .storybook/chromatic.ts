/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { MapProps } from '../src/components/Map';

const IS_CHROMATIC = process.env.STORYBOOK_CHROMATIC === 'true';

export const CHROMATIC_MAP_PARAMETERS = {
  chromatic: { disable: true },
};

export const CHROMATIC_RECHARTS_ANIMATION_PROPS = IS_CHROMATIC ? { isAnimationActive: false as const } : {};

export const CHROMATIC_RECHARTS_RESPONSIVE_CONTAINER_PROPS = IS_CHROMATIC ? { debounce: 0 as const } : {};

export const CHROMATIC_MAP_PROPS: Omit<Partial<MapProps>, 'mapboxAccessToken'> = {};

export const CHROMATIC_MAP_PLAY = undefined;
