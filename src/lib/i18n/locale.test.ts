import { describe, expect, it } from 'vitest'
import { resolveLocale } from './locale'

describe('resolveLocale', () => {
  it('prefers a valid persisted override', () => {
    expect(resolveLocale({ storedLocale: 'fr', browserLocales: ['pt-BR'] })).toBe('fr')
  })

  it('matches exact and base browser locales', () => {
    expect(resolveLocale({ browserLocales: ['pt-PT'] })).toBe('pt-BR')
    expect(resolveLocale({ browserLocales: ['fr-CA'] })).toBe('fr')
  })

  it('falls back to English for missing or unsupported values', () => {
    expect(resolveLocale({ browserLocales: ['de-DE'] })).toBe('en')
    expect(resolveLocale({ storedLocale: 'invalid', browserLocales: [] })).toBe('en')
  })
})
