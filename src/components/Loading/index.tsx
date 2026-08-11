/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { CircularProgress, CircularProgressProps } from '@mui/material';
import { CSSProperties, FC, ReactElement } from 'react';

import { StyledContainer, StyledTypography } from './styles';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LoadingProps {
  circularProgressProps?: CircularProgressProps;
  style?: CSSProperties;
  title?: string;
  /**
   * Accessible name announced for the spinner. Defaults to `Loading ...`, and `title` takes
   * precedence when provided so the announcement matches the visible text.
   */
  'aria-label'?: string;
}

export const Loading: FC<LoadingProps> = ({
  circularProgressProps = {
    size: 24,
    thickness: 4.5,
  },
  style,
  title,
  'aria-label': ariaLabel = 'Loading ...',
}: LoadingProps): ReactElement<LoadingProps> => (
  <StyledContainer data-chromatic="ignore" data-testid="loading" style={style}>
    <CircularProgress aria-label={title || ariaLabel} size={24} thickness={4.5} title={title} {...circularProgressProps} />

    {title && <StyledTypography variant="overline">{title}</StyledTypography>}
  </StyledContainer>
);

export default Loading;
