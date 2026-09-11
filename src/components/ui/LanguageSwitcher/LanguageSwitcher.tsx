import type { JSX } from 'preact'
import { type Locale, useI18n } from '@/lib/i18n'
import { parseLocale } from '@/lib/i18n/locale'

export const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n()

  const handleChange = (event: JSX.TargetedEvent<HTMLSelectElement>): void => {
    const nextLocale = parseLocale(event.currentTarget.value)
    if (!nextLocale) return
    setLocale(nextLocale)
  }

  const options: readonly { label: string; value: Locale }[] = [
    { value: 'en', label: t('controls.languageEnglish') },
    { value: 'pt-BR', label: t('controls.languagePortuguese') },
    { value: 'fr', label: t('controls.languageFrench') },
  ]

  return (
    <label class="select-control">
      <span class="visually-hidden">{t('controls.language')}</span>
      <select value={locale} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
