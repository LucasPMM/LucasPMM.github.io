import type { JSX } from 'preact'
import { useEffect, useId, useRef, useState } from 'preact/hooks'

export type PreferenceSelectOption = Readonly<{
  label: string
  value: string
}>

type PreferenceSelectProps = {
  accessibleLabel: string
  className?: string
  compactValue: string
  icon: JSX.Element
  onChange: (value: string) => void
  options: readonly PreferenceSelectOption[]
  value: string
  visibleValue: string
}

export const PreferenceSelect = ({
  accessibleLabel,
  className,
  compactValue,
  icon,
  onChange,
  options,
  value,
  visibleValue,
}: PreferenceSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)
  const optionsId = useId()

  useEffect(() => {
    const trigger = triggerRef.current
    if (!trigger) return
    trigger.dataset.value = value
    trigger.setAttribute('aria-label', `${accessibleLabel}: ${visibleValue}`)
    optionsRef.current?.setAttribute('aria-label', accessibleLabel)
    getOptionElements().forEach((optionElement) => {
      optionElement.setAttribute('aria-selected', String(optionElement.dataset.value === value))
    })
  }, [accessibleLabel, value, visibleValue])

  useEffect(() => {
    if (!isOpen) return
    const selectedOption = optionsRef.current?.querySelector<HTMLButtonElement>(
      '[role="option"][aria-selected="true"]',
    )
    selectedOption?.focus()
  }, [isOpen, value])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent): void => {
      if (!(event.target instanceof Node) || containerRef.current?.contains(event.target)) return
      setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  const getOptionElements = (): readonly HTMLButtonElement[] =>
    Array.from(optionsRef.current?.querySelectorAll<HTMLButtonElement>('[role="option"]') ?? [])

  const closeAndFocusTrigger = (): void => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleOptionClick = (nextValue: string): void => {
    onChange(nextValue)
    closeAndFocusTrigger()
  }

  const handleTriggerKeyDown = (event: JSX.TargetedKeyboardEvent<HTMLButtonElement>): void => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    setIsOpen(true)
  }

  const handleOptionKeyDown = (event: JSX.TargetedKeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeAndFocusTrigger()
      return
    }

    if (event.key === 'Tab') {
      setIsOpen(false)
      return
    }

    const optionElements = getOptionElements()
    const currentIndex = optionElements.indexOf(event.currentTarget)
    const edgeIndexes: Readonly<Record<string, number | undefined>> = {
      Home: 0,
      End: optionElements.length - 1,
    }
    const edgeIndex = edgeIndexes[event.key]

    if (edgeIndex !== undefined) {
      event.preventDefault()
      optionElements[edgeIndex]?.focus()
      return
    }

    const directions: Readonly<Record<string, number | undefined>> = {
      ArrowDown: 1,
      ArrowUp: -1,
    }
    const direction = directions[event.key]
    if (!direction || currentIndex < 0 || optionElements.length === 0) return
    event.preventDefault()
    const nextIndex = (currentIndex + direction + optionElements.length) % optionElements.length
    optionElements[nextIndex]?.focus()
  }

  const classes = ['preference-select', className].filter(Boolean).join(' ')

  return (
    <div class={classes} ref={containerRef}>
      <button
        ref={triggerRef}
        class="preference-select-trigger"
        type="button"
        role="combobox"
        aria-controls={optionsId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${accessibleLabel}: ${visibleValue}`}
        data-value={value}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span class="preference-select-icon" aria-hidden="true">
          {icon}
        </span>
        <span class="preference-select-value" aria-hidden="true">
          {visibleValue}
        </span>
        <span class="preference-select-compact-value" aria-hidden="true">
          {compactValue}
        </span>
        <svg
          class="preference-select-chevron"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>
      <div
        ref={optionsRef}
        class="preference-select-options"
        id={optionsId}
        role="listbox"
        aria-label={accessibleLabel}
        hidden={!isOpen}
      >
        {options.map((option) => (
          <button
            class="preference-select-option"
            type="button"
            role="option"
            aria-selected={option.value === value}
            data-value={option.value}
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            onKeyDown={handleOptionKeyDown}
          >
            <span class="preference-select-option-check" aria-hidden="true">
              ✓
            </span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
