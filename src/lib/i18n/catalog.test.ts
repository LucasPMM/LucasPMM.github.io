import { describe, expect, it } from 'vitest'
import { en, fr, ptBR } from './catalog'

describe('translation catalogs', () => {
  it('keeps key parity across all supported languages', () => {
    const englishKeys = Object.keys(en).sort()
    expect(Object.keys(ptBR).sort()).toEqual(englishKeys)
    expect(Object.keys(fr).sort()).toEqual(englishKeys)
  })
})
