import { PreferenceSelect } from '@/components/ui/PreferenceSelect'
import { type Locale, useI18n } from '@/lib/i18n'
import { parseLocale } from '@/lib/i18n/locale'

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n()

  const handleChange = (value: string): void => {
    const nextLocale = parseLocale(value)
    if (!nextLocale) return
    setLocale(nextLocale)
  }

  const labels: Readonly<Record<Locale, string>> = {
    en: t('controls.languageEnglish'),
    'pt-BR': t('controls.languagePortuguese'),
    fr: t('controls.languageFrench'),
  }
  const compactLabels: Readonly<Record<Locale, string>> = {
    en: 'EN',
    'pt-BR': 'PT',
    fr: 'FR',
  }
  const options = Object.entries(labels).map(([value, label]) => ({ value, label }))

  return (
    <PreferenceSelect
      accessibleLabel={t('controls.language')}
      className="language-control"
      compactValue={compactLabels[locale]}
      icon={
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="10" cy="10" r="7.25" />
          <path d="M2.75 10h14.5M10 2.75c2 2.1 3 4.5 3 7.25s-1 5.15-3 7.25C8 15.15 7 12.75 7 10s1-5.15 3-7.25Z" />
        </svg>
      }
      onChange={handleChange}
      options={options}
      value={locale}
      visibleValue={labels[locale]}
    />
  )
}
