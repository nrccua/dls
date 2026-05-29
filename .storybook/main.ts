/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/react-vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-links', '@storybook/addon-vitest'],
  core: {
    disableTelemetry: true,
  },
  docs: {
    defaultName: 'Documentation',
  },
  features: {},
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../src/**/*.mdx'],
  staticDirs: ['../public'],
  typescript: {
    check: true,
    checkOptions: {
      typescript: {
        memoryLimit: 8192,
      },
    },
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      exclude: ['**/*.stories.tsx', '**/.storybook/**'],
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: false,
      shouldRemoveUndefinedFromOptional: true,
      skipChildrenPropWithoutDoc: false,
    },
  },
  viteFinal: async config => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      src: path.resolve(dirname, '../src'),
      '~': path.resolve(dirname, '../src'),
    };
    config.define = {
      ...config.define,
      'process.env': {
        ...Object.fromEntries(Object.entries(process.env).filter(([key]) => key.startsWith('STORYBOOK_'))),
      },
    };

    return config;
  },
};

export default config;
