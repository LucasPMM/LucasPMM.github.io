import type { TOptions } from 'i18next'
import type { Locale, TranslationKey } from '@/lib/i18n'

type Translator = (key: TranslationKey, options?: TOptions) => string

const toDate = (value: string): Date => new Date(`${value}T00:00:00.000Z`)

const formatMonthYear = (date: Date, locale: Locale): string =>
  new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)

const getInclusiveMonthCount = (startDate: Date, endDate: Date): number =>
  (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
  endDate.getUTCMonth() -
  startDate.getUTCMonth() +
  1

const formatDuration = (monthCount: number, t: Translator): string => {
  const years = Math.floor(monthCount / 12)
  const months = monthCount % 12
  const yearKey: TranslationKey = years === 1 ? 'common.yearShort' : 'common.yearsShort'
  const monthKey: TranslationKey = months === 1 ? 'common.monthShort' : 'common.monthsShort'
  return [
    years > 0 ? t(yearKey, { count: years }) : null,
    months > 0 ? t(monthKey, { count: months }) : null,
  ]
    .filter((part): part is string => Boolean(part))
    .join(' ')
}

export const formatExperiencePeriod = (
  startValue: string,
  endValue: string | undefined,
  locale: Locale,
  t: Translator,
  now = new Date(),
): string => {
  const startDate = toDate(startValue)
  const endDate = endValue ? toDate(endValue) : now
  const startLabel = formatMonthYear(startDate, locale)
  const endLabel = endValue ? formatMonthYear(endDate, locale) : t('common.present')
  const duration = formatDuration(getInclusiveMonthCount(startDate, endDate), t)
  return `${startLabel} — ${endLabel} · ${duration}`
}
