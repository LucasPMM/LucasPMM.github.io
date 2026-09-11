import i18next, { type TOptions } from 'i18next'
import { en, resources, type TranslationKey } from './catalog'
import { detectInitialLocale, fallbackLocale } from './locale'

const initialLocale = detectInitialLocale()

void i18next.init({
  lng: initialLocale,
  fallbackLng: fallbackLocale,
  supportedLngs: Object.keys(resources),
  resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  showSupportNotice: false,
  initAsync: false,
})

export const translate = (key: TranslationKey, options?: TOptions): string =>
  i18next.t(key, en[key], options ?? {})

export { i18next }
