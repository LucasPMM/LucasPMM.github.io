# Portfolio Engineering Conventions

This document is the source of truth for implementation conventions shared by
humans and coding assistants.

## Language

- Source code, code comments, test descriptions, README content, agent
  instructions, and technical documentation must be written in English.
- Runtime copy must be localized and must never be embedded directly in a
  component.
- Translation catalogs must contain the same keys for English, Brazilian
  Portuguese, and French.

## Runtime and package manager

- Node.js 24 is the only supported Node.js major version.
- `.nvmrc`, `.node-version`, `package.json`, and CI must remain aligned.
- pnpm is the only supported package manager.
- Use `pnpm exec` for project binaries. Do not document npm, npx, or Yarn
  commands.
- Add a preinstall guard that rejects unsupported package managers.

## Quality tools

- Biome is the only JavaScript, TypeScript, JSON, and CSS formatter/linter.
- The root `biome.json` is the single source of truth. Do not create per-folder
  overrides.
- Vitest and Testing Library cover component behavior and browser-preference
  helpers.
- Playwright covers the deployed navigation, locale/theme behavior, responsive
  layouts, and avatar fallback.
- The minimum handoff gate is `pnpm check`.

The intended scripts are:

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "pnpm lint:biome && pnpm lint:conventions",
  "lint:biome": "biome lint .",
  "lint:conventions": "node scripts/check-code-conventions.mjs",
  "format": "biome check --write .",
  "format:check": "biome format .",
  "typecheck": "tsc --noEmit",
  "test": "vitest run",
  "test:e2e": "playwright test",
  "check": "pnpm typecheck && pnpm lint && pnpm test && pnpm format:check && pnpm build"
}
```

## TypeScript and control flow

- Do not use `let`, `else`, `else if`, or `switch` in TypeScript or JavaScript.
- Prefer `const`, guard clauses, early returns, lookup objects, and small named
  helpers.
- Prefer arrow functions for Preact components and helpers unless a library API
  requires a function declaration.
- The convention checker runs with the normal lint command and rejects the
  forbidden syntax.
- Avoid unsafe casts and non-null assertions. Model content and browser state
  with explicit types.

## Component structure

Every reusable component has its own PascalCase directory, a matching source
file, and a barrel:

```text
components/
└── ProjectCard/
    ├── ProjectCard.tsx
    ├── ProjectCard.test.tsx
    └── index.ts
```

Imports target the barrel:

```ts
import { ProjectCard } from '@/components/ProjectCard'
```

Components used by only one parent are colocated under that parent's
`components/` directory:

```text
Hero/
├── Hero.tsx
├── index.ts
└── components/
    └── GitHubAvatar/
        ├── GitHubAvatar.tsx
        ├── GitHubAvatar.test.tsx
        └── index.ts
```

Additional rules:

- Keep page composition thin and delegate each meaningful section to a named
  component.
- Keep content records outside components.
- Keep browser preference and persistence logic in dedicated `lib` modules.
- Use semantic HTML before introducing abstractions.
- Add a shared icon registry instead of importing icon components throughout
  feature code.
- Avoid generic wrappers that exist only to reduce line count.

## Content model

- Stable neutral data belongs in typed modules under `src/content`.
- User-facing prose belongs in the translation catalogs.
- Dates are stored as canonical values and localized at render time.
- Career durations are calculated from dates; do not commit text such as
  “6 years 4 months” that immediately becomes stale.
- Project order is editorial. Never derive the showcase from repository update
  time, star count, or API order.
- Do not invent metrics, proficiency levels, roles, or project outcomes.

## Internationalization

- Supported locale identifiers are `en`, `pt-BR`, and `fr`.
- English is the fallback locale.
- On a first visit, resolve the locale in this order:
  1. a supported browser locale from `navigator.languages` or
     `navigator.language`;
  2. English.
- After a visitor explicitly selects a language, persist that override locally
  and prefer it on later visits.
- Match regional browser values by both exact tag and base language, so `fr-CA`
  may select `fr` and `pt-PT` may select the available Portuguese catalog.
- Update `<html lang>`, title, description, Open Graph copy, accessible names,
  and visible content together.
- Use visible language names. Flags may be decorative but cannot be the label.
- French copy requires human review before release.

## Theme

- On a first visit, use `prefers-color-scheme` when available.
- Fall back to light mode when the preference is missing or cannot be resolved.
- Persist only an explicit user override. An `auto` option should resume system
  detection and respond to later operating-system changes.
- Apply the resolved theme before the first paint to avoid a flash of the wrong
  palette.
- Use only semantic color tokens in components. Both themes must preserve the
  warm editorial identity defined by `docs/DESIGN.md`.
- Keep the ember accent below five percent of the page and use ink-colored text
  on the orange CTA to meet contrast requirements.

## Responsive behavior and accessibility

- Design mobile-first and verify at 320 px, a representative tablet width, and
  desktop.
- Avoid fixed content widths that cause horizontal scrolling.
- Navigation and every essential action must work without hover.
- Provide visible focus, semantic landmarks, ordered headings, a skip link, and
  localized accessible names.
- Keep primary touch targets at least 44 by 44 pixels.
- Support keyboard-only navigation, 200 percent zoom, reduced motion, and
  high-contrast text.
- Images require intrinsic dimensions and meaningful localized alternative
  text. Decorative images use an empty alt value.

## GitHub data and privacy

- Load the profile image from the public GitHub username image endpoint and
  provide a local fallback asset.
- Do not make the page depend on a runtime GitHub API request.
- Optional repository metadata enrichment runs at build time and degrades
  gracefully when unavailable.
- Never expose an API token in client code or the generated bundle.
- The Jig Solver application is public at `https://jigsolver.app/`, while its
  source repository is private. Link to the product, not the private repository.
- Do not publish residential addresses or personal phone numbers.

## Git workflow

- Commit messages use Conventional Commits and are written in English.
- Coding agents may create a commit only after an explicit user request in the
  current conversation.
- Authorization covers only changes the user has already reviewed. Any later
  edit requires another review and explicit commit request.
- Lefthook runs `pnpm lint` before a commit.
- Commitlint validates the commit message in the `commit-msg` hook.
- Never bypass repository hooks with `--no-verify`.

## Continuous integration and deployment

- Pull requests and pushes to `main` or `master` run type checking, Biome,
  convention checks, unit tests, responsive browser tests, and a production
  build.
- Deployment to GitHub Pages starts only after the `CI` workflow succeeds for a
  trusted push to `main` or `master`.
- Vite outputs static files to `dist`; GitHub Actions publishes that artifact.
- Use `base: '/'` for the selected `LucasPMM.github.io` repository name.
- Keep the workflow permissions minimal: repository contents read, Pages write,
  and ID token write for the deploy job.
- Reference maintained GitHub Actions by their stable major release tag so
  compatible fixes are adopted without obscuring the workflow.

## Documentation synchronization

- Update the roadmap when scope or completion state changes.
- Update `docs/DESIGN.md` when a visual token or invariant changes.
- Update README setup and deployment instructions with the implementation that
  introduces them.
- A behavior change is not complete while its tests or documentation are stale.
