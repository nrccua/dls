/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { PopupProps } from 'react-map-gl/mapbox';

import { StyledPopup, StyledSpan, StyledTypography } from './styles';

export interface RowsDataProps {
  title: string;
  value: string | number | undefined;
}

export interface MapPopupProps {
  popupProps: PopupProps;
  rows?: Array<RowsDataProps>;
}

export const MapPopup: React.FC<MapPopupProps> = ({
  popupProps,
  rows,
}: MapPopupProps): React.ReactElement<unknown> | null => {
  return rows ? (
    <StyledPopup closeButton={false} closeOnClick={false} {...popupProps}>
      {rows.map(row => (
        <StyledTypography key={row.title} variant="body2">
          {row.title}:<StyledSpan>{row.value}</StyledSpan>
        </StyledTypography>
      ))}
    </StyledPopup>
  ) : null;
};

export default MapPopup;
