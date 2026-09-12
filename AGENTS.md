# Agent Instructions — Lucas Mariz Portfolio

## Scope and source of truth

- These instructions apply to every coding agent working in this repository.
- Read this file and `README.md` before making changes.
- Treat the implementation, tests, package scripts, and configuration files as
  the source of truth. `src/styles/tokens.css` owns visual tokens.
- Keep implementation, tests, and documentation synchronized in the same
  change.
- Read the nearest nested `AGENTS.md` before editing a scoped module. Nested
  instructions may add invariants without replacing these repository-wide
  rules.

## Language policy

- Write source code, code comments, test descriptions, commit-facing notes,
  README content, agent instructions, and technical documentation in English.
- Never hardcode user-facing copy in a component. Add it to the typed i18n
  catalog in English, Brazilian Portuguese, and French.
- English is the application fallback locale.

## Tooling

- Node.js 24 is required. Keep `.nvmrc`, `.node-version`, CI, and
  `package.json` aligned.
- pnpm is the only package manager. Use `pnpm`, `pnpm exec`, and `pnpm dlx`;
  never add npm or Yarn commands to project documentation or scripts.
- Biome is the only JavaScript/TypeScript/CSS linter and formatter. The root
  `biome.json` is the single source of truth.
- Run `pnpm check` before handing off an implementation change. Run the
  production build and relevant browser checks when UI or deployment changes.

## Git and commits

- Commit messages must be written in English and follow Conventional Commits.
- Never run `git commit` unless the user explicitly asks for a commit in the
  current conversation. Permission to plan, implement, edit, test, or prepare
  a change is not permission to commit it.
- Commit authorization applies only to changes the user has already reviewed.
  Any later edit requires a new review and a new explicit commit request.
- Lefthook must run the configured pre-commit checks, and Commitlint must
  validate commit messages. Never bypass hooks with `--no-verify`.

## TypeScript and control flow

- Do not use `let`, `else`, `else if`, or `switch` in TypeScript or JavaScript.
- Prefer arrow functions for Preact components and helpers.
- Prefer immutable values, guard clauses, early returns, lookup maps, and small
  named helpers.
- Keep components presentational where possible and move content, browser
  preference detection, and external-data logic into dedicated modules.

## Components and responsive design

- Keep files focused. Split large sections into small, named components.
- Every reusable component belongs in a PascalCase folder with a matching
  `Component.tsx` file, an `index.ts` barrel, and focused tests when it owns
  behavior.
- A component used by only one parent belongs in that parent's
  `components/ComponentName/` folder with the same file/barrel structure.
- Import components through their folder barrels.
- Treat mobile and desktop as first-class layouts. Avoid horizontal overflow,
  preserve accessible touch targets, and verify representative phone and
  desktop viewports.
- Use semantic design tokens for every surface, border, foreground, and state
  so light and dark themes remain visually equivalent.
- Add only purposeful transitions and always respect `prefers-reduced-motion`.

## Design system

- Preserve the warm editorial identity: parchment-like surfaces, Lora display
  type, Public Sans body type, generous spacing, and rounded cards.
- Use the semantic variables in `src/styles/tokens.css`; never duplicate raw
  color values in components.
- Keep ember orange as a restrained accent for primary actions and selected
  details, with ink-colored text where needed for contrast.
- Preserve equivalent hierarchy and contrast in light and dark themes.
- Treat the existing CSS and browser tests as the specification for responsive
  layout, interaction states, and reduced motion.

## Internationalization and theme

- Supported locales are `en`, `pt-BR`, and `fr`, with matching catalog keys.
- On a first visit, detect the browser locale. If it is missing or unsupported,
  use English.
- On a first visit, detect `prefers-color-scheme`. If it is missing or
  unsupported, use light mode.
- Persist explicit user overrides and apply theme selection before first paint.
- Update the document language and localized metadata whenever the locale
  changes.
- Language controls must use language names rather than flags alone.

## Static deployment and public data

- The site must remain statically buildable for GitHub Pages. Do not introduce
  a backend, server runtime, or client-side secret for portfolio features.
- The GitHub avatar may use the public username image endpoint with a local
  fallback.
- Keep the project showcase curated. External APIs may enrich nonessential
  metadata at build time, but the page must not depend on runtime API success.
- Preserve the editorial project order: Jig Solver, Planner, Simplex, Pokémon
  Base, Greedy K-means, and LZ78 Compression.
- Never expose private repository URLs, credentials, tokens, residential
  addresses, or other unnecessary personal data in the generated site.
- Deploy only the `dist` artifact after CI succeeds on a trusted default-branch
  push. Keep GitHub Actions on stable major release tags and permissions at the
  minimum required level.

## Documentation maintenance

- Keep `README.md` limited to the current product, setup, validation,
  deployment, and genuinely useful maintenance notes.
- Do not retain completed roadmaps, migration tutorials, or generated design
  references after their rules have moved into code or this file; Git history
  preserves that context.
