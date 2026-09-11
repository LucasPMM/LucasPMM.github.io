import type { TranslationKey } from '@/lib/i18n'

export type Project = {
  id: 'simplex' | 'pokemon' | 'kmeans' | 'lz78'
  titleKey: TranslationKey
  summaryKey: TranslationKey
  url: string
  technologies: readonly string[]
}

export const jigSolver = {
  url: 'https://jigsolver.app/',
  technologies: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'OpenCV', 'Three.js'],
} as const

export const projects: readonly Project[] = [
  {
    id: 'simplex',
    titleKey: 'projects.simplex.title',
    summaryKey: 'projects.simplex.summary',
    url: 'https://github.com/LucasPMM/simplex',
    technologies: ['Python', 'Optimization'],
  },
  {
    id: 'pokemon',
    titleKey: 'projects.pokemon.title',
    summaryKey: 'projects.pokemon.summary',
    url: 'https://github.com/LucasPMM/Pokemon-Base',
    technologies: ['TypeScript'],
  },
  {
    id: 'kmeans',
    titleKey: 'projects.kmeans.title',
    summaryKey: 'projects.kmeans.summary',
    url: 'https://github.com/LucasPMM/greedy-kmeans',
    technologies: ['Python', 'Jupyter', 'Clustering'],
  },
  {
    id: 'lz78',
    titleKey: 'projects.lz78.title',
    summaryKey: 'projects.lz78.summary',
    url: 'https://github.com/LucasPMM/lz78-compression',
    technologies: ['Python', 'Compression'],
  },
]
