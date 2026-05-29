/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/no-extraneous-dependencies */

import { configure } from '@testing-library/dom';
import '@testing-library/jest-dom/vitest';
import fetch from 'isomorphic-fetch';
import { TextDecoder, TextEncoder } from 'node:util';

(globalThis as typeof globalThis & { fetch: typeof fetch }).fetch = fetch;
(globalThis as typeof globalThis & { TextDecoder: typeof TextDecoder }).TextDecoder = TextDecoder;
(globalThis as typeof globalThis & { TextEncoder: typeof TextEncoder }).TextEncoder = TextEncoder;

configure({
  computedStyleSupportsPseudoElements: true,
});
