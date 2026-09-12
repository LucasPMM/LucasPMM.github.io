import { fireEvent, render, screen, waitFor } from '@testing-library/preact'
import { describe, expect, it, vi } from 'vitest'
import { PreferenceSelect } from './PreferenceSelect'

const options = [
  { value: 'en', label: 'English' },
  { value: 'pt-BR', label: 'Português' },
]

const icon = <svg aria-hidden="true" />

describe('PreferenceSelect', () => {
  it('opens its options and reports a selection', () => {
    const handleChange = vi.fn()
    const { rerender } = render(
      <PreferenceSelect
        accessibleLabel="Language"
        compactValue="EN"
        icon={icon}
        onChange={handleChange}
        options={options}
        value="en"
        visibleValue="English"
      />,
    )

    const trigger = screen.getByRole('combobox', { name: 'Language: English' })
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })
    fireEvent.click(screen.getByRole('option', { name: 'Português' }))
    expect(handleChange).toHaveBeenCalledWith('pt-BR')

    rerender(
      <PreferenceSelect
        accessibleLabel="Language"
        compactValue="PT"
        icon={icon}
        onChange={handleChange}
        options={options}
        value="pt-BR"
        visibleValue="Português"
      />,
    )

    expect(screen.getByRole('combobox', { name: 'Language: Português' })).toHaveAttribute(
      'data-value',
      'pt-BR',
    )
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('supports arrow navigation and Escape', async () => {
    render(
      <PreferenceSelect
        accessibleLabel="Language"
        compactValue="EN"
        icon={icon}
        onChange={vi.fn()}
        options={options}
        value="en"
        visibleValue="English"
      />,
    )

    const trigger = screen.getByRole('combobox', { name: 'Language: English' })
    fireEvent.click(trigger)
    const englishOption = screen.getByRole('option', { name: 'English' })
    const portugueseOption = screen.getByRole('option', { name: 'Português' })
    await waitFor(() => expect(englishOption).toHaveFocus())
    fireEvent.keyDown(englishOption, { key: 'ArrowDown' })
    expect(portugueseOption).toHaveFocus()
    fireEvent.keyDown(portugueseOption, { key: 'Escape' })
    expect(trigger).toHaveFocus()
    expect(screen.queryByRole('listbox')).toBeNull()
  })
})
