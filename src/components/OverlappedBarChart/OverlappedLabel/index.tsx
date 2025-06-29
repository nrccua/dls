/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTheme } from '@mui/material/styles';
import isNumber from 'lodash/isNumber';
import * as React from 'react';
import { LabelProps } from 'recharts';

import { StyledText } from './styles';

export type OverlappedLabelProps = LabelProps & {
  barTextColors?: string[];
  data: Record<string, number | string>[];
  index: number;
  innerBarTextColor?: string;
  isOutsideBar?: boolean;
  label: string;
  textColor?: string;
  outsideBarDataKey: string;
};

export const OverlappedLabel: React.FC<OverlappedLabelProps> = ({
  barTextColors,
  color,
  data,
  height,
  index,
  innerBarTextColor,
  isOutsideBar,
  label,
  outsideBarDataKey,
  textColor,
  value,
  width,
  x,
  y,
}: OverlappedLabelProps): React.ReactElement<OverlappedLabelProps> => {
  const { palette, spacing } = useTheme();

  if (!value && isOutsideBar)
    return (
      <g>
        <StyledText
          dominantBaseline="middle"
          fill={palette.text.primary}
          textAnchor="middle"
          x={(x as number) + (width as number) / 2}
          y={(y as number) - parseInt(spacing(1), 10)}
        >
          No data found
        </StyledText>
      </g>
    );

  let baselineY = Number(y);
  const outsideBarValue = Number(data?.[index]?.[outsideBarDataKey]);
  const outsideBarHeight =
    (outsideBarValue / Number(value)) * Number(height || 0);

  // isInsideInnerBar means whether the label should be inside the bars, that themselves are inside the outside bar
  const isInsideInnerBar =
    !isOutsideBar && Number(height) >= parseInt(spacing(6.5), 10);

  if (
    !isOutsideBar &&
    (Number.isNaN(outsideBarHeight) ||
      (Number(height) < 50 &&
        outsideBarHeight - Number(height) < parseInt(spacing(4.5), 10)) ||
      !outsideBarValue)
  ) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  if (!isInsideInnerBar) {
    baselineY = Number(y) - parseInt(spacing(1), 10);
  } else {
    baselineY = Number(y) + parseInt(spacing(6), 10);
  }

  const textFill = isInsideInnerBar
    ? innerBarTextColor || barTextColors?.[0] || palette.text.primary
    : textColor || color || palette.text.primary;
  return (
    <g>
      <StyledText
        dominantBaseline="middle"
        fill={textFill}
        textAnchor="middle"
        x={(x as number) + (width as number) / 2}
        y={baselineY - parseInt(spacing(2), 10)}
      >
        {(label?.[0] || '').toUpperCase() + label.substring(1)}
      </StyledText>
      <StyledText
        dominantBaseline="middle"
        fill={textFill}
        textAnchor="middle"
        x={(x as number) + (width as number) / 2}
        y={baselineY}
      >
        {isNumber(value) ? value.toLocaleString('en-US') : value}
      </StyledText>
    </g>
  );
};

export default OverlappedLabel;
