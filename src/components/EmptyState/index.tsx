/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Button, { ButtonProps } from '@mui/material/Button';
import { GridProps } from '@mui/material/Grid';
import { IconProps } from '@mui/material/Icon';
import { TypographyProps } from '@mui/material/Typography';
import isString from 'lodash/isString';
import { ComponentClass, CSSProperties, FC, ReactElement, ReactNode } from 'react';

import { styled } from '~/helpers/styled';

import { StyledContainer, StyledGridContainer, StyledGridItem, StyledTypographyDescription, StyledTypographyTitle } from './styles';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  description?: string | ReactNode;
  descriptionTypographyProps?: TypographyProps;
  Icon?: FC<any> | ComponentClass<any>;
  iconProps?: IconProps;
  style?: CSSProperties;
  title?: string | ReactElement<unknown>;
  titleGridContainerProps?: GridProps;
  titleTypographyProps?: TypographyProps & {
    component?: string;
  };
}

export const EmptyState: FC<EmptyStateProps> = ({
  buttonProps,
  description,
  descriptionTypographyProps,
  Icon,
  iconProps,
  style,
  title,
  titleGridContainerProps,
  titleTypographyProps,
}: EmptyStateProps): ReactElement<EmptyStateProps> => {
  const StyledIcon = Icon
    ? styled(Icon)<
        IconProps & {
          titleAccess?: string;
        }
      >({
        height: 50,
        width: 50,
      })
    : undefined;

  const { sx: titleGridContainerSx, ...titleGridContainerRest }: GridProps = titleGridContainerProps ?? {};

  return (
    <StyledContainer style={style}>
      {StyledIcon && <StyledIcon color="disabled" titleAccess={isString(title) ? title : undefined} {...iconProps} />}

      {title && (
        <StyledGridContainer
          container
          {...titleGridContainerRest}
          sx={[{ alignItems: 'center', justifyContent: 'center' }, ...(Array.isArray(titleGridContainerSx) ? titleGridContainerSx : [titleGridContainerSx])]}
        >
          <StyledGridItem>
            <StyledTypographyTitle align="center" component="h6" variant="body1" {...titleTypographyProps}>
              {title}
            </StyledTypographyTitle>
          </StyledGridItem>
        </StyledGridContainer>
      )}

      {description && (
        <StyledTypographyDescription $withoutTitle={!title} align="center" color="textSecondary" variant="body1" {...descriptionTypographyProps}>
          {description}
        </StyledTypographyDescription>
      )}

      {buttonProps && <Button {...buttonProps} />}
    </StyledContainer>
  );
};

export default EmptyState;
