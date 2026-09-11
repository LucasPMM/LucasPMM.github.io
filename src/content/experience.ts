import type { TranslationKey } from '@/lib/i18n'

export type Experience = {
  id: 'abilitya' | 'pluritech'
  company: string
  roleKey: TranslationKey
  employmentKey?: TranslationKey
  locationKey: TranslationKey
  summaryKey: TranslationKey
  bulletKeys: readonly TranslationKey[]
  startDate: `${number}-${number}-${number}`
  endDate?: `${number}-${number}-${number}`
  technologies: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    id: 'abilitya',
    company: 'ABILITYA',
    roleKey: 'experience.abilitya.role',
    employmentKey: 'experience.abilitya.employment',
    locationKey: 'experience.abilitya.location',
    summaryKey: 'experience.abilitya.summary',
    bulletKeys: [
      'experience.abilitya.bulletScale',
      'experience.abilitya.bulletAutomation',
      'experience.abilitya.bulletQuality',
      'experience.abilitya.bulletCagliari',
    ],
    startDate: '2020-06-01',
    technologies: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Cypress', 'Maestro'],
  },
  {
    id: 'pluritech',
    company: 'Pluritech Brasil',
    roleKey: 'experience.pluritech.role',
    locationKey: 'experience.pluritech.location',
    summaryKey: 'experience.pluritech.summary',
    bulletKeys: [],
    startDate: '2018-09-01',
    endDate: '2020-06-30',
    technologies: ['Angular', 'Ionic', 'JavaScript'],
  },
]
