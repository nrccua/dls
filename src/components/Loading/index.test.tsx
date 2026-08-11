/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Loading } from '.';

describe('Loading', () => {
  // The unit project does not enable Vitest globals, so Testing Library's automatic cleanup never
  // registers and rendered trees would otherwise accumulate across tests.
  afterEach(cleanup);

  it('gives the spinner an accessible name by default', () => {
    render(<Loading />);

    expect(screen.getByRole('progressbar', { name: 'Loading ...' })).toBeInTheDocument();
  });

  it('names the spinner from aria-label when provided', () => {
    render(<Loading aria-label="Loading results" />);

    expect(screen.getByRole('progressbar', { name: 'Loading results' })).toBeInTheDocument();
  });

  it('prefers title over aria-label so the announcement matches the visible text', () => {
    render(<Loading aria-label="Loading results" title="Loading students" />);

    expect(screen.getByRole('progressbar', { name: 'Loading students' })).toBeInTheDocument();
    expect(screen.getByText('Loading students')).toBeInTheDocument();
  });

  it('lets circularProgressProps override the name', () => {
    render(<Loading circularProgressProps={{ 'aria-label': 'Custom name' }} />);

    expect(screen.getByRole('progressbar', { name: 'Custom name' })).toBeInTheDocument();
  });

  // The container is a roleless <div>, where ARIA prohibits an accessible name. Keeping the name off
  // it is the point of the markup, so guard against it drifting back.
  it('does not put an accessible name on the roleless container', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading')).not.toHaveAttribute('aria-label');
    expect(screen.getByTestId('loading')).not.toHaveAttribute('aria-labelledby');
  });
});
