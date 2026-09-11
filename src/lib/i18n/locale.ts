export const supportedLocales = ['en', 'pt-BR', 'fr'] as const
export type Locale = (typeof supportedLocales)[number]

export const fallbackLocale: Locale = 'en'
export const localeStorageKey = 'portfolio.locale'

const exactLocaleMatches: Readonly<Record<string, Locale>> = {
  en: 'en',
  'pt-br': 'pt-BR',
  fr: 'fr',
}

const baseLocaleMatches: Readonly<Record<string, Locale>> = {
  en: 'en',
  pt: 'pt-BR',
  fr: 'fr',
}

export const parseLocale = (candidate: string | null | undefined): Locale | null => {
  if (!candidate) return null
  return exactLocaleMatches[candidate.toLowerCase()] ?? null
}

const matchBrowserLocale = (candidate: string): Locale | null => {
  const normalizedCandidate = candidate.toLowerCase()
  const exactMatch = exactLocaleMatches[normalizedCandidate]
  if (exactMatch) return exactMatch
  const [baseLanguage] = normalizedCandidate.split('-')
  if (!baseLanguage) return null
  return baseLocaleMatches[baseLanguage] ?? null
}

type ResolveLocaleOptions = {
  storedLocale?: string | null
  browserLocales?: readonly string[]
}

export const resolveLocale = ({
  storedLocale,
  browserLocales = [],
}: ResolveLocaleOptions): Locale => {
  const parsedStoredLocale = parseLocale(storedLocale)
  if (parsedStoredLocale) return parsedStoredLocale
  const browserMatch = browserLocales.map(matchBrowserLocale).find(Boolean)
  return browserMatch ?? fallbackLocale
}

const readStoredLocale = (): string | null => {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(localeStorageKey)
  } catch {
    return null
  }
}

const readBrowserLocales = (): readonly string[] => {
  if (typeof navigator === 'undefined') return []
  const languages = navigator.languages?.filter(Boolean) ?? []
  if (languages.length > 0) return languages
  if (navigator.language) return [navigator.language]
  return []
}

export const detectInitialLocale = (): Locale =>
  resolveLocale({
    storedLocale: readStoredLocale(),
    browserLocales: readBrowserLocales(),
  })

export const persistLocale = (locale: Locale): void => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(localeStorageKey, locale)
  } catch {
    return
  }
}
