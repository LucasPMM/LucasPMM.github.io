import { describe, expect, it } from 'vitest'
import type { TranslationKey } from '@/lib/i18n'
import { formatExperiencePeriod } from './formatExperiencePeriod'

const labels: Partial<Record<TranslationKey, string>> = {
  'common.present': 'Present',
}

const t = (key: TranslationKey, options?: { count?: number }): string => {
  if (key === 'common.yearShort') return `${options?.count} yr`
  if (key === 'common.yearsShort') return `${options?.count} yrs`
  if (key === 'common.monthShort' || key === 'common.monthsShort') return `${options?.count} mos`
  return labels[key] ?? key
}

describe('formatExperiencePeriod', () => {
  it('calculates inclusive calendar-month durations from canonical dates', () => {
    expect(
      formatExperiencePeriod(
        '2020-06-01',
        undefined,
        'en',
        t,
        new Date('2026-09-11T00:00:00.000Z'),
      ),
    ).toBe('Jun 2020 — Present · 6 yrs 4 mos')
  })

  it('formats a completed role', () => {
    expect(formatExperiencePeriod('2018-09-01', '2020-06-30', 'en', t)).toBe(
      'Sep 2018 — Jun 2020 · 1 yr 10 mos',
    )
  })
})
