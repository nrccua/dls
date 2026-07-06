# AGENTS.md

## Scope

These instructions apply to the whole repo. Prefer existing patterns, keep
changes focused, and treat package compatibility and public OSS readability as
part of the work.

## Before Editing

- Use the Node version in `.nvmrc`; run `nvm use` before `npm` commands.
- Inspect nearby implementation, tests, stories, docs, exports, and known
  public API usage before changing an area.
- Use `rg` to find similar components, helpers, theme tokens, constants, export
  paths, and public APIs.
- If ownership is unclear, keep the change local and call out the uncertainty
  instead of turning one use case into a design-system pattern.

## What DLS Is

- DLS is the public package `@encoura/dls`.
- DLS owns generic, theme-driven design-system foundations for Encoura React
  applications: base components, themes, helpers, hooks, constants, and public
  types that can be reused without private product context.
- DLS should stay decoupled from product-specific business logic, network calls,
  routing, feature flags, and private data models.
- A library change reaches users only after the package is released and a
  consuming project upgrades to that release and deploys.

## OSS Boundary

- Keep commits, branch names, PR titles, PR bodies, changelog-facing text, and
  public docs free of non-public references, organization-specific details,
  private project names, and private incident context.
- If additional context exists outside the public repo, keep it outside the
  public repo. Use friendly, public explanations such as "requested by
  maintainers" or "follow-up from maintainership discussion" when context is
  needed.
- Do not commit secrets, local config values, service tokens, licensed assets,
  screenshots containing private data, or other non-public artifacts.

## Commands

- Install: `npm install`
- Start Storybook: `npm start`
- Build package: `npm run build`
- Build Storybook: `npm run build-storybook`
- Watch package build for local package testing: `npm run watch`
- Broad validation: `npm test`
- Markdown lint: `npm run test:lint:md`
- Prettier check: `npm run test:prettier`
- Typecheck: `npm run test:types`
- Unit tests: `npm run test:unit`
- Storybook browser tests: `npm run test:storybook`

Prefer focused validation first, then broaden when shared behavior, public API,
theme behavior, or release output changes. `npm test` runs the full script set,
including build and Storybook browser tests, so expect it to take longer than a
targeted command.

## Repo Map

- `src/index.ts`: top-level public exports.
- `src/components`: exported DLS components and Storybook-only MUI reference
  stories under `_muiCore` and `_muiX`.
- `src/constants`: public constants, including component names, slot names,
  chart colors, and sort directions.
- `src/context`, `src/helpers`, `src/hooks`, `src/styles`, `src/types`: shared
  context, utilities, hooks, theme exports, and public types.
- `src/_foundations`: Storybook foundations for colors, palette, typography,
  spacing, shape, shadows, and theme demos.
- `src/_docs`: Storybook docs pages that mirror the root README, changelog, and
  docs folder.
- `docs`: contributor, guide, standards, icon, and maintainer documentation.
- `.storybook`: Storybook/Vite config, preview providers, and Chromatic helpers.
- `public`: static assets copied into Storybook and package output.
- `dist`: generated package output. Do not hand-edit or commit local builds.

## Package Boundaries

- Use DLS for reusable, product-agnostic UI foundations driven by props,
  composition, slots, and theme values.
- Use higher-level packages or consuming projects for business logic, network
  calls, routing, feature flags, product-specific UX, product data models, or
  one-off workflows.
- Do not add custom chart wrappers back to DLS. Theme compatibility examples or
  reference stories are fine, but product chart abstractions belong in a layer
  with the right ownership boundary.
- Keep MUI reference stories documentation-only. `_muiCore` and `_muiX` stories
  should not be exported from `src/components/index.ts` or treated as public
  DLS components.
- Preserve package consumers unless there is an explicit migration plan. For
  public API changes, search available usage and document migration notes.

## Public API

- Public exports flow through `src/index.ts` and grouped barrels for
  `components`, `constants`, `context`, `helpers`, `hooks`, `styles`, and
  `types`.
- If a new component/helper/type is intended for consumers, export it from the
  nearest barrel and confirm the package build emits the desired path.
- Avoid exporting implementation-only helpers, story fixtures, mocks,
  Storybook-only reference components, or test utilities.
- Keep module augmentation files import-alias-free so consuming `tsconfig`
  includes can consume them from `node_modules`.

## Code And Styling

- Prefer TypeScript and explicit nullable handling.
- Use `~/*` for imports from `src`; keep relative imports inside the same
  component/helper folder. Storybook and Vitest also define `src` as an alias.
- Match nearby component folders: usually `index.tsx`, optional `styles.ts`,
  `index.stories.tsx`, mocks, and focused tests where logic exists.
- Put reusable component styling in sibling `styles.ts` files with the DLS
  styled helper or MUI styled patterns already used nearby.
- Prefer DLS and MUI theme values over hard-coded pixels, colors, z-indexes,
  shadows, and typography. Use theme spacing, typography, palette, shape, and
  component slot/class conventions where possible.
- Use deep lodash imports instead of named imports from `lodash`; lint enforces
  this for bundle-size reasons.
- Shared UI should account for applicable loading, empty, error, disabled,
  responsive, localization, and theme-variant states.
- DLS components should stay flexible through props, slots, and composition
  rather than hidden product assumptions.

## Stories, Tests, And Visuals

- Add/update unit tests for changed helpers, hooks, and non-trivial component
  logic.
- Add/update Storybook stories for shared UI states, variants, themes, and edge
  cases. Prefer examples that demonstrate generic behavior without private
  product context.
- Add Storybook `play` functions when behavior can be exercised in the browser,
  such as opening menus, selecting rows, confirming dialogs, or validating empty
  states.
- For Chromatic-sensitive stories, use stable dimensions/data, fixed dates,
  disabled animation where appropriate, and the helpers in
  `.storybook/chromatic.ts`.
- Storybook browser tests require Playwright Chromium; `pretest:storybook`
  installs it locally.
- Update snapshots or visual baselines only when the rendered change is
  intentional.

## Release And PRs

- DLS does not squash commits before release analysis. Each commit that lands on
  `main` must use the correct conventional-commit token because semantic-release
  reads the commits directly.
- Keep commit and PR text public-safe. Do not include non-public tracking or
  project context.
- Use release-triggering commit prefixes only when the package should publish a
  consumer-facing release. Docs/tests/tooling-only changes should use
  non-runtime prefixes such as `docs:`, `test:`, `build:`, or `chore:`.
- Keep the release-token rules in
  [`docs/CONTRIBUTING.md#committing-code`](./docs/CONTRIBUTING.md#committing-code)
  as the source of truth.
- Use `.github/pull_request_template.md`; call out consumer impact, validation,
  screenshots for UI work, skipped checks, and any needed package testing or
  release plan.
- Chromatic may require GitHub environment approval before the check runs.

## Avoid

- Do not commit `node_modules/`, `dist/`, `storybook-static/`, `coverage/`,
  local `.env`, `.npmrc`, logs, tarballs, screenshots, or videos.
- Do not hand-edit generated package output in `dist`.
- Do not change release workflows, semantic-release config, dependency
  versions, or package metadata unless the task requires it.
