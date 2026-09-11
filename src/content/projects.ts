import type { TranslationKey } from '@/lib/i18n'

export type ProjectDetails = {
  approachKey: TranslationKey
  contributionKey: TranslationKey
  outcomeKey: TranslationKey
}

export type Project = ProjectDetails & {
  id: 'planner' | 'simplex' | 'pokemon' | 'kmeans' | 'lz78'
  titleKey: TranslationKey
  summaryKey: TranslationKey
  statusKey?: TranslationKey
  url?: string
  technologies: readonly string[]
}

export const jigSolver: ProjectDetails & {
  technologies: readonly string[]
  url: string
} = {
  url: 'https://jigsolver.app/',
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Python', 'FastAPI', 'OpenCV'],
  approachKey: 'projects.jig.approach',
  contributionKey: 'projects.jig.contribution',
  outcomeKey: 'projects.jig.outcome',
}

export const projects: readonly Project[] = [
  {
    id: 'planner',
    titleKey: 'projects.planner.title',
    summaryKey: 'projects.planner.summary',
    statusKey: 'projects.private',
    approachKey: 'projects.planner.approach',
    contributionKey: 'projects.planner.contribution',
    outcomeKey: 'projects.planner.outcome',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Firebase', 'Zod'],
  },
  {
    id: 'simplex',
    titleKey: 'projects.simplex.title',
    summaryKey: 'projects.simplex.summary',
    approachKey: 'projects.simplex.approach',
    contributionKey: 'projects.simplex.contribution',
    outcomeKey: 'projects.simplex.outcome',
    url: 'https://github.com/LucasPMM/simplex',
    technologies: ['Python', 'NumPy', 'Linear optimization'],
  },
  {
    id: 'pokemon',
    titleKey: 'projects.pokemon.title',
    summaryKey: 'projects.pokemon.summary',
    approachKey: 'projects.pokemon.approach',
    contributionKey: 'projects.pokemon.contribution',
    outcomeKey: 'projects.pokemon.outcome',
    url: 'https://github.com/LucasPMM/Pokemon-Base',
    technologies: ['Angular 7', 'TypeScript', 'RxJS', 'Chart.js'],
  },
  {
    id: 'kmeans',
    titleKey: 'projects.kmeans.title',
    summaryKey: 'projects.kmeans.summary',
    approachKey: 'projects.kmeans.approach',
    contributionKey: 'projects.kmeans.contribution',
    outcomeKey: 'projects.kmeans.outcome',
    url: 'https://github.com/LucasPMM/greedy-kmeans',
    technologies: ['Python', 'Jupyter', 'scikit-learn', 'Clustering'],
  },
  {
    id: 'lz78',
    titleKey: 'projects.lz78.title',
    summaryKey: 'projects.lz78.summary',
    approachKey: 'projects.lz78.approach',
    contributionKey: 'projects.lz78.contribution',
    outcomeKey: 'projects.lz78.outcome',
    url: 'https://github.com/LucasPMM/lz78-compression',
    technologies: ['Python', 'Trie', 'Lossless compression'],
  },
]
