import type { JSX } from 'preact'
import { useI18n } from '@/lib/i18n'
import { type ThemeChoice, useTheme } from '@/lib/theme'
import { parseThemeChoice } from '@/lib/theme/theme'

export const ThemeSwitcher = () => {
  const { t } = useI18n()
  const { choice, setChoice } = useTheme()

  const handleChange = (event: JSX.TargetedEvent<HTMLSelectElement>): void => {
    const nextChoice = parseThemeChoice(event.currentTarget.value)
    if (!nextChoice) return
    setChoice(nextChoice)
  }

  const options: readonly { label: string; value: ThemeChoice }[] = [
    { value: 'auto', label: t('controls.themeAuto') },
    { value: 'light', label: t('controls.themeLight') },
    { value: 'dark', label: t('controls.themeDark') },
  ]

  return (
    <label class="select-control theme-control">
      <span class="visually-hidden">{t('controls.theme')}</span>
      <select value={choice} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
