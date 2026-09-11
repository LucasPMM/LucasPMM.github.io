import type { TranslationKey } from '@/lib/i18n'

export type Education = {
  id: 'computer-science' | 'computational-mathematics' | 'it-technician'
  degreeKey: TranslationKey
  institution: string
  institutionKey?: TranslationKey
  period: string
  statusKey: TranslationKey
}

export const education: readonly Education[] = [
  {
    id: 'computer-science',
    degreeKey: 'education.computerScience.degree',
    institution: 'Universidade Federal de Minas Gerais (UFMG)',
    period: '2023—2027',
    statusKey: 'education.computerScience.status',
  },
  {
    id: 'computational-mathematics',
    degreeKey: 'education.computationalMath.degree',
    institution: 'Universidade Federal de Minas Gerais (UFMG)',
    period: '2019—2023',
    statusKey: 'education.computationalMath.status',
  },
  {
    id: 'it-technician',
    degreeKey: 'education.technician.degree',
    institution: '',
    institutionKey: 'education.technician.institution',
    period: '2015—2017',
    statusKey: 'education.technician.status',
  },
]
