# Lucas Mariz Portfolio

A small, static personal portfolio for GitHub Pages. It presents Lucas Mariz's
professional experience, academic path, selected production work, research, and
projects in English, Brazilian Portuguese, and French.

Target production URL: [https://lucaspmm.github.io/](https://lucaspmm.github.io/)

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

The build output is written to `dist/`. This repository targets the
`LucasPMM.github.io` GitHub Pages user site and therefore uses `/` as its Vite
base path.

The production check also verifies canonical metadata, the sitemap,
`robots.txt`, and representative prerendered content.

## GitHub Pages activation

The deployment workflow runs only after the `CI` workflow succeeds for a push
to `master` or `main`. It rebuilds the exact verified revision and publishes
only `dist/`.

To activate the final site:

1. Rename `LucasPMM/Curriculum` to `LucasPMM/LucasPMM.github.io` under
   **Settings → General**.
2. Under **Settings → Pages**, change the publishing source from the legacy
   branch configuration to **GitHub Actions**.
3. Update the local remote:

   ```bash
   git remote set-url origin git@github.com:LucasPMM/LucasPMM.github.io.git
   ```

4. Merge the modernization branch into the default branch. A successful CI run
   will trigger the deployment workflow automatically.
5. Set the repository description, Website field, GitHub profile Website, and
   LinkedIn link to `https://lucaspmm.github.io/`.

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
