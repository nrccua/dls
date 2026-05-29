/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.resolve(dirname, 'src');

export default defineConfig({
  resolve: {
    alias: {
      src: srcPath,
      '~': srcPath,
    },
  },
  test: {
    coverage: {
      enabled: true,
      exclude: [
        'src/_foundations/**',
        'src/constants/**',
        'src/context/index.ts',
        'src/helpers/index.ts',
        'src/components/**',
        'src/hooks/index.ts',
        'src/index.ts',
        'src/styles/**',
      ],
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    include: ['src/**/*.test.{ts,tsx}', 'src/**/*.spec.{ts,tsx}'],
    name: 'unit',
    setupFiles: ['./vitest.setup.ts'],
  },
});
