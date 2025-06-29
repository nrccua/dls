/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable filenames/match-exported */

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';

export const DLS_COMPONENT_SLOT_NAMES = {
  [DLS_COMPONENT_NAMES.BAR_CHART]: {
    Y_AXIS_LABEL: 'yAxisLabel',
  },
  [DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART]: {
    BAR_LABELS: 'barLabels',
  },
  [DLS_COMPONENT_NAMES.PIE_CHART]: {
    PIE_LEGEND_LABEL: 'pieLegendLabel',
    TITLE_TEXT: 'titleText',
  },
  [DLS_COMPONENT_NAMES.SCATTER_PLOT]: {
    SCATTER_LABELS: 'scatterLabels',
    SCATTER_TOOLTIP_LABEL: 'scatterToolTipLabel',
    SCATTER_TOOLTIP_TEXT: 'scatterToolTipText',
  },
  [DLS_COMPONENT_NAMES.STACKED_BAR_CHART]: {
    TOOLTIP_TEXT: 'tooltipText',
  },
} as const;

export default DLS_COMPONENT_SLOT_NAMES;
