# Maintaining the DLS

This document captures maintenance guidance for keeping the DLS generic,
portable, and useful across downstream React applications.

## Package Scope

The DLS should stay thin. A component is a good fit for this package when it is:

- Generic enough to be reused across multiple products
- Driven by props, composition, slots, and theme values instead of application
  assumptions
- Decoupled from business logic, network calls, routing, and product-specific
  data models
- Flexible enough for downstream teams to change the UX without forking the
  component

A component is a candidate for deprecation, replacement, or migration out of
the DLS when it is highly design-constrained, models a one-off product flow, or
cannot be adapted without changing its internals.

## MUI Reference Stories

The `_muiCore` and `_muiX` folders under `src/components` are intentionally
Storybook-only reference stories. They preview how upstream MUI Core and MUI X
components render under each DLS theme, using the Storybook theme picker.

These stories should not be exported from `src/components/index.ts` or treated
as public DLS components. Their value is documentation and visual regression
coverage: Chromatic snapshots make MUI upgrades easier to evaluate because
theme-level rendering changes are visible before they reach downstream apps.

## Story Coverage

New and changed components should include Storybook stories for important
states, variants, and edge cases. Prefer examples that demonstrate real
component behavior without relying on private product context.

Add Storybook `play` functions when behavior can be exercised through the
browser, such as opening menus, selecting rows, confirming dialogs, or validating
empty states. Over time, these interactions should help Storybook coverage
reflect the component behaviors that matter most.

## Chart Components

The current chart components are custom wrappers around Recharts. They should be
maintained conservatively and treated as deprecation candidates when their fixed
UX or styling makes them difficult to reuse across products.

For future chart work, evaluate whether MUI X Charts can provide a more flexible
foundation before adding new custom Recharts-based components to the DLS.
