/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as locales from '@mui/material/locale';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  Theme,
} from '@mui/material/styles';
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { FC, ReactElement } from 'react';

import { THEME_ACT } from '~/styles/themeAct';
import { THEME_ACT_ET } from '~/styles/themeActEt';
import { THEME_ENCOURA } from '~/styles/themeEncoura';
import { THEME_ENCOURA_CLASSIC } from '~/styles/themeEncouraClassic';
import { THEME_ENCOURAGE } from '~/styles/themeEncourage';
import { THEME_ENCOURAGE_E4E } from '~/styles/themeEncourageE4E';

export interface ThemeProviderProps extends MuiThemeProviderProps {
  theme:
    | 'ACT'
    | 'ACT_ET'
    | 'ENCOURA'
    | 'ENCOURA_CLASSIC'
    | 'ENCOURAGE'
    | 'ENCOURAGE_E4E'
    | Theme;
  locale?:
    | 'azAZ'
    | 'bgBG'
    | 'caES'
    | 'csCZ'
    | 'deDE'
    | 'enUS'
    | 'esES'
    | 'etEE'
    | 'faIR'
    | 'fiFI'
    | 'frFR'
    | 'heIL'
    | 'hiIN'
    | 'huHU'
    | 'hyAM'
    | 'idID'
    | 'isIS'
    | 'itIT'
    | 'jaJP'
    | 'koKR'
    | 'nlNL'
    | 'plPL'
    | 'ptBR'
    | 'ptPT'
    | 'roRO'
    | 'ruRU'
    | 'skSK'
    | 'svSE'
    | 'trTR'
    | 'ukUA'
    | 'viVN'
    | 'zhCN';
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  locale,
  ...themeProps
}: ThemeProviderProps): ReactElement<ThemeProviderProps> => {
  let themeImpl: Theme;
  switch (theme) {
    case 'ACT':
      themeImpl = createTheme(
        THEME_ACT,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ACT_ET':
      themeImpl = createTheme(
        THEME_ACT_ET,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ENCOURA':
      themeImpl = createTheme(
        THEME_ENCOURA,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ENCOURA_CLASSIC':
      themeImpl = createTheme(
        THEME_ENCOURA_CLASSIC,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ENCOURAGE':
      themeImpl = createTheme(
        THEME_ENCOURAGE,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    case 'ENCOURAGE_E4E':
      themeImpl = createTheme(
        THEME_ENCOURAGE_E4E,
        locale ? locales[locale] : locales.enUS,
      );
      break;
    default:
      themeImpl = theme;
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider {...themeProps} theme={themeImpl} />
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
