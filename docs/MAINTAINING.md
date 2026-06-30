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

DLS no longer exports custom chart components. MUI X Charts and Recharts are
both current front-end standards, but chart wrappers tend to encode product data
shapes, report UX, and visual decisions that are too specific for this package.

Keep DLS thin and avoid adding new custom chart wrappers here. When a product
needs reusable chart abstractions, place them in that product's application
library or another package with the right ownership boundary. DLS may still host
reference stories or theme compatibility notes for charting libraries, but those
examples should not be exported from `src/components/index.ts` or treated as
public DLS components.
