import { type ComponentChildren, createContext } from 'preact'
import { useContext, useEffect, useMemo, useState } from 'preact/hooks'
import {
  detectInitialThemeChoice,
  persistThemeChoice,
  type ResolvedTheme,
  readSystemPreference,
  resolveTheme,
  type ThemeChoice,
} from '@/lib/theme/theme'

type ThemeContextValue = {
  choice: ThemeChoice
  theme: ResolvedTheme
  setChoice: (choice: ThemeChoice) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

type ThemeProviderProps = {
  children: ComponentChildren
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [choice, setChoiceState] = useState<ThemeChoice>(detectInitialThemeChoice)
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean | null>(readSystemPreference)
  const theme = resolveTheme(choice, systemPrefersDark)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    const themeColor = theme === 'dark' ? '#1b1917' : '#fdf9f4'
    const themeMeta = document.head.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (themeMeta) themeMeta.content = themeColor
  }, [theme])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handlePreferenceChange = (event: MediaQueryListEvent): void => {
      setSystemPrefersDark(event.matches)
    }
    mediaQuery.addEventListener('change', handlePreferenceChange)
    return () => mediaQuery.removeEventListener('change', handlePreferenceChange)
  }, [])

  const setChoice = (nextChoice: ThemeChoice): void => {
    persistThemeChoice(nextChoice)
    setChoiceState(nextChoice)
  }

  const value = useMemo(() => ({ choice, theme, setChoice }), [choice, theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider.')
  return context
}
