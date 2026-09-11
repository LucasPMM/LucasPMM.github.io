# Lucas Mariz Portfolio Modernization Roadmap

> Updated on September 11, 2026. User-provided career and education details are
> the primary source of truth. Public GitHub, LinkedIn, the local Planner
> repository, and the local Jig Solver repository provide supporting technical
> context.

## 1. Product objective

Replace the 2018 résumé page with a fast, accessible, multilingual personal
portfolio that answers four questions in under one minute:

1. Who is Lucas Mariz today?
2. What professional and academic path brought him here?
3. What problems, technologies, and projects does he work on?
4. How can a visitor learn more or get in touch?

The product remains intentionally small: a statically generated site with no
backend or CMS, deployed automatically to GitHub Pages.

## 2. Current repository assessment

### Preserve

- The Git history and the narrative value of modernizing the original résumé.
- A single-page, scannable experience.
- The design system in `docs/DESIGN.md`: warm paper surfaces, editorial
  typography, generous spacing, rounded cards, and a restrained ember accent.

### Replace or correct

- Bulma 0.7.1, Font Awesome 5, and legacy CDN dependencies.
- Invalid HTML, icon-only semantics, and missing social/SEO metadata.
- The outdated student-only biography and incorrect education dates.
- Placeholder project copy and skill lists without context or evidence.
- The local 2018 portrait.
- The residential address and personal phone number. The public site should
  show at most city/country and professional contact channels.
- The missing professional timeline, responsive system, theme handling,
  localization, tests, and deployment pipeline.

## 3. Confirmed content source of truth

### Public identity

- **Display name:** Lucas Mariz.
- **Primary role:** Senior Software Engineer.
- **Professional focus:** JavaScript, TypeScript, React, React Native, scalable
  product architecture, automation, and testability.
- **Current technical interests:** Computer Vision, applied AI, optimization,
  software architecture, developer experience, and automation.

### Professional experience

#### Senior Software Engineer — ABILITYA

- Employment: full-time.
- Period: June 2020 to present.
- Location: Milan, Lombardy, Italy — remote.
- Core experience: JavaScript, TypeScript, React, and React Native.
- Responsibilities and impact areas:
  - evolve scalable white-label application architecture;
  - build engineering and product automations;
  - improve testability across the React web/mobile ecosystem;
  - establish end-to-end coverage with Cypress and Maestro.
  - share engineering responsibility for the official Cagliari Calcio app,
    serving more than 10,000 users across Android and iOS.

The portfolio must calculate duration from canonical dates instead of storing a
text value such as “6 years 4 months.” Quantitative evidence still needs to be
collected, for example the number of brands/tenants, release-frequency change,
test coverage, execution-time reduction, or escaped-defect reduction. No metric
may be invented.

#### Frontend Developer — Pluritech Brasil

- Period: September 2018 to June 2020.
- Public location: Belo Horizonte, Brazil. Do not publish the street address
  from the old LinkedIn entry.
- Core experience: Angular and Ionic.
- Content angle: early professional experience building cross-platform web and
  mobile interfaces before moving into the React ecosystem.

### Selected professional and academic work

#### Cagliari Calcio official app

- Lucas is one of the engineers responsible for the official supporter app as
  part of his work at ABILITYA.
- Owner-provided reach: more than 10,000 users across Android and iOS.
- Public evidence: the official product is available on the
  [App Store](https://apps.apple.com/it/app/cagliari-calcio/id441230439) and
  [Google Play](https://play.google.com/store/apps/details?id=com.cagliaricalcioapp.net).
- Portfolio framing: product responsibility, cross-platform delivery, and a
  live supporter experience. Do not imply sole ownership.

#### Role Vectors paper

- Title: **Role Vectors: Tracking-Based Representations of Football Players’
  Tactical Behavior**.
- Lucas is a co-author. The paper introduces an interpretable,
  tracking-derived representation of football players' relative tactical roles,
  including in-possession and off-ball behavior.
- Accepted and presented at the 13th Workshop on Machine Learning and Data
  Mining for Sports Analytics (MLSA 2026), in Naples, Italy, on September 7,
  2026.
- Public evidence: [paper](https://dtai.cs.kuleuven.be/events/MLSA26/papers/MLSA26_paper_208.pdf)
  and [conference schedule](https://dtai.cs.kuleuven.be/events/MLSA26/schedule.php).

### Academic background

- **Bachelor's degree, Computer Science — UFMG:** January 2023 to 2027,
  expected graduation in 2027.
- **Bachelor's degree, Computational Mathematics — UFMG:** January 2019 to
  January 2023, completed.
- **IT Technician — Colégio Técnico da UFMG (COLTEC):** 2015 to 2017,
  completed.

### Languages

- Portuguese: native.
- English: Cambridge C1.
- French: currently learning; do not claim a CEFR level.

### Remaining content inputs

- Official Cambridge certificate name, issue year, and optional credential URL.
- One or two additional nonconfidential quantitative outcomes from ABILITYA,
  beyond the confirmed 10,000+ Cagliari app audience.
- A concise Pluritech product/context description and one representative
  outcome.
- Preferred public contact channel: LinkedIn, professional email, or both.
- Whether a downloadable PDF résumé belongs in the first release.
- Final summaries and representative evidence for the four public showcase
  repositories.

## 4. Curated project showcase

Project selection is editorial and must not follow GitHub update time, stars, or
API order. The initial showcase is fixed to these five projects:

1. Jig Solver.
2. Simplex.
3. Pokémon Base.
4. Greedy K-means.
5. LZ78 Compression.

The GitHub account may be reorganized independently. Removing unrelated public
repositories must not change portfolio order or copy.

### 4.1 Jig Solver — primary case study

#### Verified facts

- Public product: [jigsolver.app](https://jigsolver.app/).
- Source repository: `LucasPMM/jig-solver`, currently private. The portfolio
  links to the product, not the private repository.
- Product purpose: solve physical jigsaw puzzles computationally and assist a
  person assembling the physical puzzle through a camera-oriented workflow.
- Web stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, TanStack Query,
  Three.js, Zod, Vitest, and Playwright.
- API and vision stack: Python 3.12, FastAPI, SQLAlchemy, Alembic, PostgreSQL,
  MinIO, NumPy, OpenCV, optional MobileSAM/PyTorch, Pytest, and Ruff.
- Delivery stack: pnpm workspace, Docker Compose, Caddy, Biome, Lefthook, and
  Commitlint.
- Current stage: the reference-guided solver and the camera assistant tracks
  documented as phases 3 and 4 are complete. The product already includes
  piece analysis, ranked compatibility, persisted placements, an asynchronous
  solver lifecycle, a Three.js workspace, multi-piece camera analysis, stable
  tracking/identity, border detection, guidance, physical confirmations, and
  benchmark coverage. Further product and quality work remains active.

#### Portfolio treatment

- Label: **Active project**.
- Primary link: `https://jigsolver.app/`.
- Short description:
  > A computer-vision platform that digitizes physical jigsaw pieces, evaluates
  > compatibility, reconstructs the puzzle, and guides physical assembly
  > through a camera-based assistant.
- Explain the engineering split: independent Python solving/vision engine,
  statically typed web client, and mobile-first camera experience.
- Mention the research dimensions: segmentation, contour/side analysis,
  descriptors, compatibility ranking, reconstruction, tracking, and evaluation.
- Use the existing solver workspace screenshot as the primary visual:
  `../../ufmg/jig-solver/apps/web/public/docs/solver-workspace.png`.
- During implementation, copy and optimize that image into
  `public/projects/jig-solver/solver-workspace.webp`. Keep the original project
  screenshot and portfolio derivative synchronized when visible UI changes.
- The optional secondary visual for a future case-study view is
  `../../ufmg/jig-solver/apps/web/public/docs/assistant-borders.png`.

### 4.2 Public repositories

| Display name | Repository | Known focus | Required content before release |
|---|---|---|---|
| Simplex | [`simplex`](https://github.com/LucasPMM/simplex) | Python | Problem, academic context, algorithm, and result |
| Pokémon Base | [`Pokemon-Base`](https://github.com/LucasPMM/Pokemon-Base) | TypeScript | Product goal, architecture, contribution, and screenshot |
| Greedy K-means | [`greedy-kmeans`](https://github.com/LucasPMM/greedy-kmeans) | Jupyter/Python | Experiment question, method, result, and visualization |
| LZ78 Compression | [`lz78-compression`](https://github.com/LucasPMM/lz78-compression) | Python | Algorithm scope, implementation choices, and learning outcome |

Each card should communicate problem, approach, Lucas's contribution, and
result. Technology tags are supporting metadata, not the description.

## 5. Technical stack decision

### Recommendation: Preact + TypeScript + Vite

- **Preact** provides component composition, hooks, and a React-like API with a
  small client footprint.
- **TypeScript** validates experience, education, project, locale, and theme
  models.
- **Vite** provides fast development, static production builds, and a direct
  GitHub Pages deployment path.
- **i18next core** provides `en`, `pt-BR`, and `fr`. A small Preact adapter
  subscribes to `languageChanged`; adding React compatibility solely for
  localization is unnecessary.
- **Native CSS** implements the existing tokens. Tailwind and a component
  framework would add another abstraction without solving a portfolio-specific
  problem.
- **Biome** is the only JavaScript, TypeScript, JSON, and CSS lint/format tool.
- **Vitest + Testing Library** cover behavior; **Playwright** covers locale,
  theme, responsive layout, external links, and avatar fallback.
- **GitHub Actions + GitHub Pages** run quality checks and deploy `dist`.

No backend, database, CMS, or client-side secret is required. No router is
required for the one-page MVP. Preact's Vite prerender support can emit useful
HTML at build time without introducing a server runtime.

### Repository tooling baseline

Adapt the Planner repository conventions:

- Node.js 24 pinned in `.nvmrc`, `.node-version`, `package.json`, and CI.
- pnpm as the only package manager, with a preinstall guard.
- A root `biome.json` as the only formatter/linter configuration.
- `scripts/check-code-conventions.mjs` to enforce the agreed TypeScript control
  flow rules.
- Lefthook running `pnpm lint` before commits.
- Commitlint enforcing English Conventional Commits.
- `pnpm check` as the minimum handoff gate.
- No commits from coding agents without explicit, current user authorization.

Repository rules are recorded in `AGENTS.md` and
`docs/ENGINEERING_CONVENTIONS.md`.

## 6. Component architecture

Follow the Planner component ownership model: every component has a PascalCase
folder, a matching source file, an `index.ts` barrel, and a focused test when it
owns behavior. A component used by one parent is nested under that parent's
`components` folder.

```text
.
├── .github/workflows/
│   ├── ci.yml
│   └── deploy.yml
├── public/
│   ├── projects/jig-solver/solver-workspace.webp
│   ├── avatar-fallback.webp
│   ├── favicon.svg
│   └── og-cover.png
├── scripts/
│   ├── check-code-conventions.mjs
│   └── require-pnpm.mjs
├── src/
│   ├── components/
│   │   ├── PortfolioPage/
│   │   │   ├── PortfolioPage.tsx
│   │   │   ├── PortfolioPage.test.tsx
│   │   │   ├── index.ts
│   │   │   └── components/
│   │   │       ├── AppHeader/
│   │   │       ├── HeroSection/
│   │   │       ├── AboutSection/
│   │   │       ├── ExperienceSection/
│   │   │       ├── SelectedWorkSection/
│   │   │       ├── EducationSection/
│   │   │       ├── ProjectsSection/
│   │   │       ├── SkillsSection/
│   │   │       └── ContactSection/
│   │   └── ui/
│   │       ├── ExternalLink/
│   │       ├── Icon/
│   │       ├── LanguageSwitcher/
│   │       ├── ProjectCard/
│   │       ├── SectionHeading/
│   │       └── ThemeSwitcher/
│   ├── content/
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── profile.ts
│   │   └── projects.ts
│   ├── lib/
│   │   ├── github/avatar.ts
│   │   ├── i18n/
│   │   │   ├── catalog.ts
│   │   │   ├── translations.json
│   │   │   ├── index.ts
│   │   │   └── components/I18nProvider/
│   │   └── theme/
│   │       ├── theme.ts
│   │       ├── index.ts
│   │       └── components/ThemeProvider/
│   ├── styles/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── tokens.css
│   ├── App.tsx
│   └── main.tsx
├── AGENTS.md
├── biome.json
├── commitlint.config.mjs
├── lefthook.yml
├── vite.config.ts
└── package.json
```

Stable neutral data—dates, links, technology identifiers, and project order—
lives in typed content modules. Every visitor-facing sentence lives in the
single typed translation catalog. This prevents three career histories from
drifting apart.

## 7. Information architecture and draft content

### 7.1 Header

- “LM” monogram and Lucas Mariz.
- Anchor navigation: About, Experience, Selected work, Education, Projects,
  Contact.
- Visible language and theme controls.
- A compact accessible mobile menu when anchor links no longer fit.

### 7.2 Hero

- Circular GitHub profile image.
- Eyebrow: `SENIOR SOFTWARE ENGINEER · REMOTE`.
- Proposed English headline:
  **“I build scalable digital products and explore how AI solves visual
  problems.”**
- Summary: senior web/mobile engineering in the JavaScript ecosystem, backed by
  Computational Mathematics, Computer Science, and applied Computer Vision.
- Chips: Web & Mobile, White-label Platforms, Computer Vision, Applied AI.
- One ember CTA: “View projects.” Secondary links: GitHub and LinkedIn.

### 7.3 About

Use one short editorial paragraph connecting:

- senior product engineering;
- React and React Native delivery;
- white-label architecture and automation;
- mathematical/computer-science education;
- current Computer Vision and optimization work.

Avoid unsupported adjectives and generic soft-skill claims.

### 7.4 Experience

Use a reverse-chronological timeline. Each entry contains role, company,
location/remote status, canonical dates, one problem statement, and two or three
impact bullets.

ABILITYA is the primary entry and emphasizes scale, white-label architecture,
automation, and Cypress/Maestro testability. Pluritech establishes the Angular
and Ionic foundation of the web/mobile career.

### 7.5 Selected work

- A production-product card for the official Cagliari Calcio app with the
  owner-provided 10,000+ audience metric, a precise shared-responsibility claim,
  and links to both official stores.
- A research card for the Role Vectors paper with its exact title, concise
  abstract-derived summary, MLSA 2026 presentation details, paper link, and
  schedule link.

### 7.6 Education

- Computer Science — UFMG — 2023–2027, expected.
- Computational Mathematics — UFMG — 2019–2023, completed.
- IT Technician — COLTEC/UFMG — 2015–2017, completed.

### 7.7 Projects

- A large Jig Solver case-study card with the real solver screenshot and a link
  to the public application.
- Four smaller cards for Simplex, Pokémon Base, Greedy K-means, and LZ78
  Compression.
- Never show a GitHub link for the private Jig Solver repository.
- If a public repository is removed during GitHub cleanup, either preserve a
  stable public case-study URL or remove its card intentionally. Do not leave a
  broken link.

### 7.8 Skills and languages

Group capabilities by context; do not use percentage bars:

- **Product engineering:** JavaScript, TypeScript, React, React Native, Angular,
  Ionic.
- **Quality and delivery:** Cypress, Maestro, automation, testability, GitHub
  Actions.
- **Applied research:** Python, OpenCV, Computer Vision, AI, optimization.
- **Languages:** Portuguese — native; English — Cambridge C1; French — learning.

### 7.9 Contact

- Invite conversations about software engineering, mobile products, Computer
  Vision, applied AI, and product ideas.
- Link GitHub and LinkedIn.
- Add an email only after confirming it as a public professional channel.
- Do not add a contact form in the MVP; it would introduce an external service,
  spam handling, and a privacy surface.

## 8. Screen outline

### Desktop

```text
┌──────────────────────────────────────────────────────────────────────┐
│ LM Lucas Mariz   About  Experience  Education  Projects   EN  Theme │
├──────────────────────────────────────────────────────────────────────┤
│                         [ GitHub photo ]                             │
│                   SENIOR SOFTWARE ENGINEER · REMOTE                  │
│   I build scalable digital products and explore how AI solves       │
│                         visual problems.                             │
│  [Web & Mobile] [White-label] [Computer Vision] [Applied AI]        │
│               [ View projects ]   GitHub   LinkedIn                  │
├──────────────────────────────────────────────────────────────────────┤
│ About                         short editorial introduction           │
├──────────────────────────────────────────────────────────────────────┤
│ Experience                    Education                              │
│ ● ABILITYA · 2020–present     ● Computer Science · 2023–2027        │
│ │ scale · automation · E2E    ● Computational Math · 2019–2023      │
│ ● Pluritech · 2018–2020       ● COLTEC · 2015–2017                  │
├──────────────────────────────────────────────────────────────────────┤
│ Active project                                                       │
│ ┌────────────────────── JIG SOLVER ────────────────────────────────┐ │
│ │ product + architecture + real solver screenshot + public link   │ │
│ └──────────────────────────────────────────────────────────────────┘ │
│ ┌──── Simplex ────┐ ┌── Pokémon Base ──┐ ┌─ Greedy K-means ─────┐ │
│ └─────────────────┘ └───────────────────┘ └──────────────────────┘ │
│ ┌──────────────────────── LZ78 Compression ───────────────────────┐ │
│ └─────────────────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────────────┤
│ Skills · Languages · Selected certification                          │
├──────────────────────────────────────────────────────────────────────┤
│ Let's talk                              GitHub · LinkedIn · PDF       │
└──────────────────────────────────────────────────────────────────────┘
```

### Mobile

```text
┌──────────────────────────┐
│ LM Lucas Mariz  EN  ◐  ☰ │
│      [GitHub photo]      │
│ Senior Software Engineer│
│ headline in 3–4 lines    │
│ wrapping chips           │
│ [ View projects ]        │
│ GitHub · LinkedIn        │
├──────────────────────────┤
│ About                    │
├──────────────────────────┤
│ Experience               │
│ vertical timeline        │
├──────────────────────────┤
│ Education                │
├──────────────────────────┤
│ Jig Solver               │
│ [real solver image]      │
│ product + architecture   │
├──────────────────────────┤
│ four project cards       │
│ one per row              │
├──────────────────────────┤
│ Skills · Languages       │
├──────────────────────────┤
│ Contact                  │
└──────────────────────────┘
```

## 9. Applying the design rules

### Light theme

- Canvas: `#fdf9f4`, never cold white at page level.
- Elevated surfaces: `#ffffff`; dust cards/chips: `#f9efe4`.
- Text: `#2d2f34`, `#3f434a`, and `#5e646e`.
- Ember `#f67748` on less than five percent of the page: primary CTA, one
  editorial scribble, and one selected/highlight state.
- Lora for headings and Public Sans for body copy, using the documented free
  substitutes for Garnett and UniversalSans.
- Maximum width 1200 px, 96 px section rhythm, and 32 px editorial cards.

`docs/DESIGN.md` contains a CTA text-color contradiction: one section requests
white and another requests black. Accessibility resolves it. White on
`#f67748` is approximately 2.74:1, while `#2d2f34` on `#f67748` is
approximately 4.88:1. Use ink-colored CTA text.

### Dark theme

The dark palette should still feel like paper and ink, not a blue/black
dashboard:

| Semantic token | Light | Dark proposal |
|---|---|---|
| canvas | `#fdf9f4` | `#1b1917` |
| elevated surface | `#ffffff` | `#24211f` |
| dust surface | `#f9efe4` | `#302a26` |
| border | `#ecedef` | `#47413d` |
| primary text | `#2d2f34` | `#f5eee7` |
| secondary text | `#5e646e` | `#c9beb4` |
| ember | `#f67748` | `#ff895e` |

### Interaction and accessibility

- Use approximately 130 ms transitions and respect `prefers-reduced-motion`.
- Do not hide content behind entrance animations.
- Provide a skip link, ordered headings, landmarks, and visible focus.
- Keep touch targets at least 44 by 44 pixels.
- Never rely on color alone for status.
- Test full keyboard navigation, 200 percent zoom, and reduced motion.
- Give the avatar intrinsic dimensions, localized alt text, and a local
  fallback.

## 10. Browser-derived language and theme

### Locale resolution

On the first visit:

1. Read `navigator.languages`, then `navigator.language`.
2. Match an exact supported tag when possible.
3. Match a supported base language when appropriate.
4. Fall back to **English** when no browser locale is available or supported.

After an explicit visitor choice, persist and prefer that override. Update
`document.documentElement.lang`, title, description, Open Graph copy, visible
content, and accessibility labels together.

Supported catalogs:

- `en` — product fallback.
- `pt-BR` — native-language version.
- `fr` — learning-language version; requires human review before release.

Use language names—English, Português, Français—rather than flags.

### Theme resolution

On the first visit:

1. Resolve `prefers-color-scheme` when supported.
2. Use light or dark according to the browser/operating-system preference.
3. Fall back to **light** when the preference is unavailable or unresolved.

Persist an explicit visitor override. An `auto` option removes the override and
resumes system detection. Apply the resolved theme in a small head script before
first paint to prevent a theme flash.

Tests must cover exact locale matching, base-language matching, unsupported
locale fallback, missing browser APIs, stored overrides, system theme changes,
and invalid persisted values.

## 11. GitHub avatar and repository metadata

Use the stable username endpoint for the profile image:

```tsx
<img
  src="https://github.com/LucasPMM.png?size=460"
  alt={translate('hero.avatarAlt')}
  width="230"
  height="230"
  decoding="async"
  fetchPriority="high"
  referrerPolicy="no-referrer"
/>
```

If the request fails, replace it once with `/avatar-fallback.webp`. Avoid an
error loop and reserve dimensions to prevent layout shift.

Project content remains local and curated. Optional GitHub metadata enrichment
may happen during the GitHub Actions build, store only non-sensitive fields,
and degrade without blocking the build. Do not expose a token or rely on a
runtime API request.

## 12. Execution roadmap

### Phase 0 — governance, content, and privacy (P0) — complete

- Add the adapted repository instructions and engineering conventions.
- Convert existing/new technical documentation to English when touched.
- Confirm the remaining content inputs in section 3.
- Remove the residential address and personal phone number.
- Preserve canonical career dates and calculate durations at runtime.
- Record confirmed source content and identify evidence gaps for the deeper
  project pass in phase 4.

**Exit:** English repository governance exists, approved source content is
structured, and unnecessary personal data is excluded.

### Phase 1 — technical foundation (P0) — complete

- Create Preact + TypeScript + Vite on a modernization branch.
- Pin Node.js 24 and pnpm; add the package-manager guard.
- Configure Biome, convention checking, Vitest, Playwright, Lefthook, and
  Commitlint.
- Add the Planner-style component folder/barrel convention.
- Add typed content schemas and the typed i18next catalog.
- Keep all work uncommitted until Lucas reviews it and explicitly requests a
  commit.

**Exit:** `pnpm check` and `pnpm build` produce a valid static site shell.

### Phase 2 — design system and responsive composition (P0) — complete

- Convert `docs/DESIGN.md` tokens into semantic CSS custom properties.
- Implement the component tree from section 6.
- Build the header, hero, timelines, cards, and footer mobile-first.
- Apply Lora/Public Sans, the 96 px section rhythm, and 32 px editorial cards.
- Add accessible focus, interaction, image, and error states.

**Exit:** the complete English layout works from 320 to 1440 px.

### Phase 3 — browser defaults, theme, and i18n (P0) — complete

- Implement browser-locale detection with English fallback.
- Implement system-theme detection with light fallback.
- Persist explicit overrides and prevent first-paint theme flash.
- Complete `en`, `pt-BR`, and `fr` catalogs with key parity tests.
- Update document language and localized metadata.
- Keep the French catalog ready for a final native or professional language
  review before public release.

**Exit:** every control and content section works in three languages and two
themes, including missing/unsupported browser preference paths.

### Phase 4 — deeper career and project evidence (P1, one day)

- Enrich the published ABILITYA and Pluritech timeline with additional
  nonconfidential evidence.
- Deepen the five fixed showcase projects beyond their initial summaries.
- Preserve the Cagliari and Role Vectors evidence cards and verify their public
  links during release checks.
- Build the Jig Solver feature card with its public URL, verified architecture,
  private-source treatment, and optimized real screenshot.
- Add concise evidence-based summaries for the four public repositories.
- Add optional build-time GitHub metadata without making it critical.

**Exit:** each project explains problem, approach, contribution, and result;
private links and invented metrics are absent.

### Phase 5 — quality, SEO, and performance (P0, one day)

- Add localized Open Graph metadata, favicon, canonical URL, sitemap, and
  `robots.txt`.
- Prerender useful page content before JavaScript hydration.
- Test keyboard navigation, contrast, 200 percent zoom, reduced motion, and
  avatar fallback.
- Run responsive Playwright checks in English, Portuguese, and French.
- Lighthouse mobile targets: Performance at least 95 and Accessibility, Best
  Practices, and SEO at least 95.

**Exit:** `pnpm check`, production build, browser tests, and accessibility
review pass.

### Phase 6 — rename and deploy (P0, half day)

- Rename the repository and update the local remote.
- Configure the correct Vite base path.
- Enable GitHub Pages through GitHub Actions.
- Update README, repository description/topics, canonical URL, and profile
  links.
- Smoke-test the public site and retain Git-history rollback.

**Exit:** the renamed site is live and all public links use the new URL.

**Estimated total:** approximately 5–7 focused days, including content,
implementation, review, and deployment.

## 13. Repository name recommendation

### Recommended: `LucasPMM.github.io`

This makes the repository the GitHub Pages user site and produces the clean URL
`https://lucaspmm.github.io/`. It also allows Vite `base: '/'`. The technical
repository name does not change the public title “Lucas Mariz.”

Alternatives for a project site:

1. `lucas-mariz` — personal and memorable; URL `/lucas-mariz/`.
2. `portfolio` — short and conventional; URL `/portfolio/`.
3. `portfolio-cv` — explicitly combines projects and résumé content.
4. `lucas-mariz.dev` — brandable, but resembles a domain that is not the Pages
   URL unless a real domain is configured.

Avoid `Curriculum`: in English it usually means a course/program syllabus;
`portfolio`, `résumé`, or `CV` communicates the product more clearly.

## 14. Safe rename tutorial

The current remote is `git@github.com:LucasPMM/Curriculum.git`, and the current
local default branch is `master`.

### A. Prepare

1. Ensure the new build is versioned and no local work is forgotten.
2. Record the old URL `https://lucaspmm.github.io/Curriculum/`. GitHub does not
   automatically redirect project-site URLs when a repository is renamed.
3. If preserving the old URL is critical, configure a custom domain before the
   rename. Otherwise, plan to update every public link.

### B. Rename on GitHub

1. Open `LucasPMM/Curriculum`.
2. Go to **Settings → General**.
3. Set **Repository name** to `LucasPMM.github.io`, or the selected alternative.
4. Confirm **Rename**.

GitHub redirects repository web traffic and Git operations, but the Pages URL
is the important exception.

### C. Update the local clone

For the recommended name:

```bash
git remote set-url origin git@github.com:LucasPMM/LucasPMM.github.io.git
git remote -v
```

Optionally standardize the primary branch:

```bash
git branch -m master main
git push -u origin main
```

After the push, change the default branch to `main` under
**Settings → Branches**. Remove the old remote branch only after `main`, CI, and
Pages are verified.

### D. Configure Pages

- For `LucasPMM.github.io`, use `base: '/'` in Vite.
- For `portfolio`, use `base: '/portfolio/'`.
- Under **Settings → Pages → Build and deployment**, choose
  **GitHub Actions**.
- Add `.github/workflows/deploy.yml` to install with pnpm, run `pnpm check`,
  build, and publish `dist`.
- Update the README URL and GitHub profile Website field.

### E. Verify

1. Confirm CI and deployment are green in GitHub Actions.
2. Open the public URL in a private browser window.
3. Verify direct loading, assets, anchor navigation, avatar fallback, external
   links, locale, theme, and mobile layout.
4. Update LinkedIn and any other source still pointing to `/Curriculum/`.

## 15. Definition of done

- Repository governance and technical documentation are in English.
- Source code and comments are in English; visitor copy is localized.
- No residential address or personal phone number is shipped.
- Career and education dates match section 3, with expected graduation in 2027.
- ABILITYA and Pluritech descriptions are accurate and contain no invented
  metrics.
- The showcase order is Jig Solver, Simplex, Pokémon Base, Greedy K-means, and
  LZ78 Compression.
- Jig Solver links only to the public application and uses a real optimized
  screenshot.
- The profile image comes from GitHub and has a local fallback.
- A first visit uses the browser locale or English fallback.
- A first visit uses the system color scheme or light fallback.
- Explicit locale/theme choices persist and invalid values recover safely.
- English, Brazilian Portuguese, and French catalogs have key parity.
- Both themes pass contrast and preserve the documented design system.
- The site works by keyboard, at 320 px, at 200 percent zoom, and with reduced
  motion.
- Biome is the only web formatter/linter, and `pnpm check` passes.
- Commit messages are English Conventional Commits, hooks are not bypassed, and
  coding agents do not commit without explicit authorization.
- GitHub Actions deploys only after all quality checks pass.
- README, canonical, Open Graph, GitHub profile, and LinkedIn use the final URL.

## Technical references

- [GitHub repository profile](https://github.com/LucasPMM)
- [Lucas Mariz LinkedIn profile](https://www.linkedin.com/in/lucas-mariz-4845b6164/)
- [Jig Solver public application](https://jigsolver.app/)
- [Renaming a repository — GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository)
- [Deploying a Vite site to GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages)
- [Custom workflows for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Preact getting started](https://preactjs.com/guide/v10/getting-started/)
- [Preact Vite prerendering](https://preactjs.com/blog/prerendering-preset-vite/)
- [i18next configuration and fallback](https://www.i18next.com/overview/configuration-options)
