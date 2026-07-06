## Summary

_Provide public context and explain the solution._

## Consumer / Release Impact

_Describe affected exports, components, helpers, themes, docs, or package
consumers. Note "No runtime/package impact" for docs, tests, or tooling-only
changes._

## QA Steps

_List commands run, Storybook checks, package tarball validation, or other
verification. If validation is not applicable, say why._

## Screenshots

_Provide pictures or recordings for UI work, if available._

## DLS Contributor Notes

- [ ] Keep the PR title/body and all commits public-safe; do not include
      non-public references, private links, or private organization/project
      context
- [ ] Verify each commit uses the correct conventional-commit token because DLS
      does not squash commits before semantic-release analyzes them; see
      [`docs/CONTRIBUTING.md#committing-code`](../docs/CONTRIBUTING.md#committing-code)
- [ ] Add or update unit tests for changed helpers, hooks, and non-trivial
      component logic
- [ ] Add or update Storybook stories/docs for shared UI changes and new visual
      states
- [ ] Verify public exports from `src/index.ts` and grouped barrels when adding
      consumer-facing APIs
- [ ] Confirm component, theme, and docs changes stay generic enough for DLS
