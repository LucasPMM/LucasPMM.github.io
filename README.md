# Lucas Mariz Portfolio

A small, static personal portfolio for GitHub Pages. It presents Lucas Mariz's
professional experience, academic path, selected production work, research, and
projects in English, Brazilian Portuguese, and French.

Production: [https://lucaspmm.github.io/](https://lucaspmm.github.io/)

The curated showcase includes Jig Solver, the private Planner financial
assistant, Simplex, Pokémon Base, Greedy K-means, and LZ78 Compression. Private
projects are described without exposing source or application links.

## Stack

- Preact, TypeScript, and Vite
- i18next with typed, key-parity translation catalogs
- Native CSS with semantic light and dark theme tokens
- Biome for linting and formatting
- Vitest and Testing Library for behavior tests
- Playwright for responsive browser checks
- Vite prerendering for useful HTML before client hydration
- Lefthook and Commitlint for local Git conventions

The site has no backend, CMS, or client-side secret. The profile image loads
from the public GitHub username endpoint and falls back to a local asset.

## Requirements

- Node.js 24
- pnpm 10

## Local development

```bash
pnpm install
pnpm dev
```

Install the Git hooks once per clone:

```bash
pnpm exec lefthook install
```

## Quality checks

```bash
pnpm check
```

Run the browser suite separately after installing the Playwright browser:

```bash
pnpm exec playwright install chromium
pnpm test:e2e
```

## Production build

```bash
pnpm build
pnpm preview
```

The build output is written to `dist/`. This repository targets the
`LucasPMM.github.io` GitHub Pages user site and therefore uses `/` as its Vite
base path.

The production check also verifies canonical metadata, the sitemap,
`robots.txt`, and representative prerendered content.

## Deployment

The deployment workflow runs only after the `CI` workflow succeeds for a push
to `master` or `main`. It rebuilds the exact verified revision and publishes
only `dist/` to the GitHub Pages user site.

The modernization roadmap was completed on September 11, 2026. The repository
is named `LucasPMM.github.io`, uses `/` as its Vite base path, and the production
site is live at the URL above.

## Optional content maintenance

These are editorial enhancements rather than release blockers:

- Have the French catalog reviewed by a native or professional speaker.
- Add the exact Cambridge certificate name, year, and credential URL if it
  should be public.
- Add nonconfidential quantitative outcomes for ABILITYA or Pluritech when
  reliable evidence is available.
- Add a professional email or downloadable résumé only if a new public contact
  channel is desired.
- Recheck public project links whenever the GitHub profile is reorganized.

## Content and implementation rules

Read `AGENTS.md` before making changes. It is the repository's maintained
engineering and design rule set.

Source code, comments, tests, and documentation are written in English. All
visitor-facing copy belongs in the three-language catalog. Do not commit changes
without explicit authorization from Lucas; authorized messages must follow
English Conventional Commits.
