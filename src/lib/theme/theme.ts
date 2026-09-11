export const themeChoices = ['auto', 'light', 'dark'] as const
export type ThemeChoice = (typeof themeChoices)[number]
export type ResolvedTheme = Exclude<ThemeChoice, 'auto'>

export const themeStorageKey = 'portfolio.theme'

export const parseThemeChoice = (candidate: string | null | undefined): ThemeChoice | null => {
  if (candidate === 'auto' || candidate === 'light' || candidate === 'dark') return candidate
  return null
}

export const resolveTheme = (
  choice: ThemeChoice,
  systemPrefersDark: boolean | null,
): ResolvedTheme => {
  if (choice === 'light' || choice === 'dark') return choice
  if (systemPrefersDark) return 'dark'
  return 'light'
}

const readStoredTheme = (): ThemeChoice | null => {
  if (typeof window === 'undefined') return null
  try {
    return parseThemeChoice(window.localStorage.getItem(themeStorageKey))
  } catch {
    return null
  }
}

export const readSystemPreference = (): boolean | null => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return null
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const detectInitialThemeChoice = (): ThemeChoice => readStoredTheme() ?? 'auto'

export const persistThemeChoice = (choice: ThemeChoice): void => {
  if (typeof window === 'undefined') return
  try {
    if (choice === 'auto') {
      window.localStorage.removeItem(themeStorageKey)
      return
    }
    window.localStorage.setItem(themeStorageKey, choice)
  } catch {
    return
  }
}
