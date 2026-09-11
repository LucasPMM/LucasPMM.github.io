import type { TOptions } from 'i18next'
import { type ComponentChildren, createContext } from 'preact'
import { useContext, useEffect, useMemo, useState } from 'preact/hooks'
import type { TranslationKey } from '@/lib/i18n/catalog'
import { i18next, translate } from '@/lib/i18n/i18n'
import { detectInitialLocale, type Locale, parseLocale, persistLocale } from '@/lib/i18n/locale'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, options?: TOptions) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const updateMetaContent = (selector: string, content: string): void => {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) return
  element.content = content
}

const syncDocumentMetadata = (locale: Locale): void => {
  document.documentElement.lang = locale
  document.title = translate('metadata.title')
  updateMetaContent('meta[name="description"]', translate('metadata.description'))
  updateMetaContent('meta[property="og:title"]', translate('metadata.title'))
  updateMetaContent('meta[property="og:description"]', translate('metadata.description'))
}

type I18nProviderProps = {
  children: ComponentChildren
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  useEffect(() => {
    const handleLanguageChange = (language: string): void => {
      const nextLocale = parseLocale(language)
      if (!nextLocale) return
      setLocaleState(nextLocale)
      syncDocumentMetadata(nextLocale)
    }

    i18next.on('languageChanged', handleLanguageChange)
    syncDocumentMetadata(locale)
    return () => {
      i18next.off('languageChanged', handleLanguageChange)
    }
  }, [locale])

  const setLocale = (nextLocale: Locale): void => {
    persistLocale(nextLocale)
    void i18next.changeLanguage(nextLocale)
  }

  const value = useMemo(() => ({ locale, setLocale, t: translate }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider.')
  return context
}
