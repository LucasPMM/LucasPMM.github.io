import { PreferenceSelect } from '@/components/ui/PreferenceSelect'
import { useI18n } from '@/lib/i18n'
import { type ThemeChoice, useTheme } from '@/lib/theme'
import { parseThemeChoice } from '@/lib/theme/theme'

export const ThemeSwitcher = () => {
  const { t } = useI18n()
  const { choice, setChoice, theme } = useTheme()

  const handleChange = (value: string): void => {
    const nextChoice = parseThemeChoice(value)
    if (!nextChoice) return
    setChoice(nextChoice)
  }

  const labels: Readonly<Record<ThemeChoice, string>> = {
    auto: t('controls.themeAuto'),
    light: t('controls.themeLight'),
    dark: t('controls.themeDark'),
  }
  const compactLabels: Readonly<Record<ThemeChoice, string>> = {
    auto: 'Auto',
    light: labels.light,
    dark: labels.dark,
  }
  const options = Object.entries(labels).map(([value, label]) => ({ value, label }))
  const themeIcon =
    theme === 'dark' ? (
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M16.5 12.25A6.75 6.75 0 0 1 7.75 3.5a6.75 6.75 0 1 0 8.75 8.75Z" />
      </svg>
    ) : (
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="3.25" />
        <path d="M10 1.75v2M10 16.25v2M1.75 10h2M16.25 10h2M4.17 4.17l1.42 1.42M14.41 14.41l1.42 1.42M15.83 4.17l-1.42 1.42M5.59 14.41l-1.42 1.42" />
      </svg>
    )

  return (
    <PreferenceSelect
      accessibleLabel={t('controls.theme')}
      className="theme-control"
      compactValue={compactLabels[choice]}
      icon={themeIcon}
      onChange={handleChange}
      options={options}
      value={choice}
      visibleValue={labels[choice]}
    />
  )
}
