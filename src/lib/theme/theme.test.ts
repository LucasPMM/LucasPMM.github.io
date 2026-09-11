import { describe, expect, it } from 'vitest'
import { parseThemeChoice, resolveTheme } from './theme'

describe('theme resolution', () => {
  it('uses an explicit visitor choice', () => {
    expect(resolveTheme('dark', false)).toBe('dark')
    expect(resolveTheme('light', true)).toBe('light')
  })

  it('uses the system preference in auto mode', () => {
    expect(resolveTheme('auto', true)).toBe('dark')
    expect(resolveTheme('auto', false)).toBe('light')
  })

  it('falls back to light when the system preference is unavailable', () => {
    expect(resolveTheme('auto', null)).toBe('light')
    expect(parseThemeChoice('invalid')).toBeNull()
  })
})
