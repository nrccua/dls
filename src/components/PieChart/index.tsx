/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-array-index-key */

import { TypographyProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme, useThemeProps } from '@mui/material/styles';
import clsx from 'clsx';
import numeral from 'numeral';
import React, { useMemo } from 'react';
import {
  Cell,
  Label,
  Legend,
  LegendProps,
  Pie,
  PieProps,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Tooltip,
  TooltipProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

import DEFAULT_CHART_COLORS from '~/constants/DEFAULT_CHART_COLORS';
import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { VariantType } from '~/types';

import InnerPieComponent from './InnerPieComponent';
import { PieLegend } from './PieLegend';
import { StyledGridBody, StyledGridTitle, StyledTypography } from './styles';
import {
  CustomLegendComponentType,
  HighlightComponentType,
  PieDataProps as TypesPieDataProps,
} from './types';

type TitleProps = TypographyProps & {
  title: string;
};
export type PieDataProps = TypesPieDataProps;

export interface PieChartProps {
  chartLegendTextFontSize?: number | string;
  chartLegendTextFontSizeSmall?: number | string; // Used when the chartWidth & chartHeight is less than 350 px
  children?: React.ReactElement<unknown>;
  colors?: string[];
  CustomLegendIcon?: CustomLegendComponentType;
  data: Array<TypesPieDataProps>;
  height?: number;
  HighlightComponent?: HighlightComponentType;
  legendProps?: LegendProps;
  pieChartProps?: CategoricalChartProps;
  pieProps?: Partial<PieProps>;
  responsiveContainerProps?: ResponsiveContainerProps;
  titleProps?: Partial<TitleProps>;
  tooltipProps?: TooltipProps<ValueType, NameType>;
  variant?: VariantType;
  width?: number | string;
}

export const DEFAULT_PIE_GAP_ANGLE = 1;
export const DEFAULT_PIE_MIN_ANGLE = 1;

/**
 * The existence of HighlightComponent will automatically push the Legend from inside the PieChart
 */
export const PieChart: React.FC<PieChartProps> = (
  inProps: PieChartProps,
): React.ReactElement<PieChartProps> => {
  const {
    chartLegendTextFontSize,
    chartLegendTextFontSizeSmall,
    children,
    colors = [],
    CustomLegendIcon,
    data,
    height,
    HighlightComponent,
    legendProps,
    pieChartProps,
    pieProps,
    responsiveContainerProps,
    titleProps,
    tooltipProps,
    variant,
    width,
  } = useThemeProps({ name: DLS_COMPONENT_NAMES.PIE_CHART, props: inProps });

  const { palette, spacing, typography } = useTheme();

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const pieTotalValue = useMemo(
    () => data.reduce((acc, { value }) => acc + value, 0),
    [data],
  );

  const hasHighlight = !!HighlightComponent;

  const mouseEnter = (_: unknown, hoveredIndex: number): void => {
    setActiveIndex(hoveredIndex);
  };

  const resetMouseEnter = (): void => {
    setActiveIndex(null);
  };

  return (
    <Grid
      container
      direction="column"
      size={{
        xs: 12,
      }}
      spacing={2}
    >
      {titleProps && (
        <StyledGridTitle>
          <StyledTypography
            align="center"
            hasHighlight={hasHighlight}
            variantSize={variant}
            {...titleProps}
            className={clsx(titleProps.className && titleProps.className)}
          >
            {titleProps.title}
          </StyledTypography>
        </StyledGridTitle>
      )}

      <StyledGridBody>
        <ResponsiveContainer
          debounce={50}
          height={height || (variant ? 300 : 350)}
          width={width || '100%'}
          {...responsiveContainerProps}
        >
          <RechartsPieChart
            margin={{
              bottom: parseInt(String(spacing(1)), 10),
              left: parseInt(String(spacing(1)), 10),
              right: parseInt(String(spacing(1)), 10),
              top: parseInt(String(spacing(1)), 10),
            }}
            style={{ fontFamily: typography.fontFamily, position: 'absolute' }}
            {...pieChartProps}
          >
            <Pie
              data={data}
              dataKey="value"
              innerRadius="80%"
              minAngle={DEFAULT_PIE_MIN_ANGLE}
              onMouseEnter={mouseEnter}
              onMouseLeave={resetMouseEnter}
              outerRadius="100%"
              paddingAngle={DEFAULT_PIE_GAP_ANGLE}
              {...(pieProps as Omit<PieProps, 'dataKey' | 'ref'>)}
            >
              {data.map(({ color }, i) => (
                <Cell
                  fill={
                    color ||
                    colors[i] ||
                    DEFAULT_CHART_COLORS[i] ||
                    palette.grey[700]
                  }
                  fillOpacity={
                    activeIndex === null || activeIndex === i ? 1 : 0.4
                  }
                  key={`cell-${i}`}
                />
              ))}
              {activeIndex !== null && HighlightComponent ? (
                <Label
                  content={
                    <InnerPieComponent
                      HighlightComponent={HighlightComponent}
                      payload={data[activeIndex]}
                      pieTotalValue={pieTotalValue}
                    />
                  }
                  position="center"
                />
              ) : null}
            </Pie>

            <Legend
              align={data.length > 4 || hasHighlight ? 'right' : 'center'}
              content={
                <PieLegend
                  chartLegendTextFontSize={chartLegendTextFontSize}
                  chartLegendTextFontSizeSmall={chartLegendTextFontSizeSmall}
                  CustomLegendIcon={CustomLegendIcon}
                  pieTotalValue={pieTotalValue}
                  showAsSquare={
                    legendProps?.align === 'right' && data.length > 3
                  }
                />
              }
              layout="vertical"
              onMouseEnter={mouseEnter}
              onMouseLeave={resetMouseEnter}
              verticalAlign={data.length > 6 ? 'top' : 'middle'}
              {...(legendProps as Legend)}
            />

            <Tooltip
              formatter={(v: ValueType): string => numeral(v).format('0,0')}
              wrapperStyle={{ outline: 'none' }}
              {...tooltipProps}
            />

            {children}
          </RechartsPieChart>
        </ResponsiveContainer>
      </StyledGridBody>
    </Grid>
  );
};

export default PieChart;
