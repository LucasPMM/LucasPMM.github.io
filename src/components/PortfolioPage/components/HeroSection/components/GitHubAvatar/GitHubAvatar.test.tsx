import { fireEvent, render, screen } from '@testing-library/preact'
import { describe, expect, it } from 'vitest'
import { I18nProvider } from '@/lib/i18n'
import { GitHubAvatar } from './GitHubAvatar'

describe('GitHubAvatar', () => {
  it('uses the local fallback after the GitHub image fails', () => {
    render(
      <I18nProvider>
        <GitHubAvatar />
      </I18nProvider>,
    )
    const avatar = screen.getByRole('img', { name: 'Lucas Mariz' })
    fireEvent.error(avatar)
    expect(avatar).toHaveAttribute('src', '/avatar-fallback.svg')
  })
})
