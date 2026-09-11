import type { ComponentChildren } from 'preact'
import { useI18n } from '@/lib/i18n'

type ExternalLinkProps = {
  children: ComponentChildren
  className?: string
  href: string
}

export const ExternalLink = ({ children, className, href }: ExternalLinkProps) => {
  const { t } = useI18n()
  return (
    <a class={className} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <span class="visually-hidden">({t('common.openExternal')})</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
