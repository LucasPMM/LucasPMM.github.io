import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import type { TranslationKey } from '@/lib/i18n'
import { useI18n } from '@/lib/i18n'

const navigationItems: readonly { href: string; labelKey: TranslationKey }[] = [
  { href: '#about', labelKey: 'nav.about' },
  { href: '#experience', labelKey: 'nav.experience' },
  { href: '#selected-work', labelKey: 'nav.work' },
  { href: '#education', labelKey: 'nav.education' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#contact', labelKey: 'nav.contact' },
]

const NavigationLinks = () => {
  const { t } = useI18n()
  return (
    <>
      {navigationItems.map((item) => (
        <a key={item.href} href={item.href}>
          {t(item.labelKey)}
        </a>
      ))}
    </>
  )
}

export const AppHeader = () => {
  const { t } = useI18n()
  return (
    <header class="app-header">
      <div class="page-shell header-inner">
        <a class="brand" href="#top" aria-label="Lucas Mariz">
          <span class="brand-mark" aria-hidden="true">
            LM
          </span>
          <span>Lucas Mariz</span>
        </a>
        <nav class="desktop-nav">
          <NavigationLinks />
        </nav>
        <div class="header-controls">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <details class="mobile-nav">
            <summary aria-label={t('controls.menu')}>
              <span aria-hidden="true">≡</span>
            </summary>
            <nav>
              <NavigationLinks />
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
