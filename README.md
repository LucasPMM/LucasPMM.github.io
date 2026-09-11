# Lucas Mariz Portfolio

A small, static personal portfolio for GitHub Pages. It presents Lucas Mariz's
professional experience, academic path, selected production work, research, and
projects in English, Brazilian Portuguese, and French.

The curated showcase includes Jig Solver, the private Planner financial
assistant, Simplex, Pokémon Base, Greedy K-means, and LZ78 Compression. Private
projects are described without exposing source or application links.

## Stack

- Preact, TypeScript, and Vite
- i18next with typed, key-parity translation catalogs
- Native CSS based on the tokens in `docs/DESIGN.md`
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

The build output is written to `dist/`. Set `VITE_BASE_PATH` when publishing as
a GitHub Pages project site. The recommended repository name is
`LucasPMM.github.io`, which uses the default `/` base path.

The production check also verifies canonical metadata, the sitemap,
`robots.txt`, and representative prerendered content.

## Content and implementation rules

Read these files before making changes:

- `AGENTS.md`
- `docs/ENGINEERING_CONVENTIONS.md`
- `docs/DESIGN.md`
- `docs/ROADMAP.md`

Source code, comments, tests, and documentation are written in English. All
visitor-facing copy belongs in the three-language catalog. Do not commit changes
without explicit authorization from Lucas; authorized messages must follow
English Conventional Commits.
