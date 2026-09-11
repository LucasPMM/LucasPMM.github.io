import { ExternalLink } from '@/components/ui/ExternalLink'
import { profile } from '@/content/profile'
import { useI18n } from '@/lib/i18n'
import { GitHubAvatar } from './components/GitHubAvatar'

export const HeroSection = () => {
  const { t } = useI18n()
  const chips = [
    t('hero.chipWebMobile'),
    t('hero.chipWhiteLabel'),
    t('hero.chipComputerVision'),
    t('hero.chipAppliedAi'),
  ]

  return (
    <section class="hero-section page-shell" id="top">
      <GitHubAvatar />
      <p class="eyebrow">{t('hero.eyebrow')}</p>
      <h1>
        {t('hero.titleStart')} <span class="scribble">{t('hero.titleAccent')}</span>
      </h1>
      <p class="hero-summary">{t('hero.summary')}</p>
      <ul class="chip-list" aria-label={t('nav.capabilities')}>
        {chips.map((chip) => (
          <li key={chip}>{chip}</li>
        ))}
      </ul>
      <div class="hero-actions">
        <a class="button button-primary" href="#selected-work">
          {t('hero.viewWork')}
        </a>
        <ExternalLink className="text-link" href={profile.githubUrl}>
          {t('hero.github')}
        </ExternalLink>
        <ExternalLink className="text-link" href={profile.linkedinUrl}>
          {t('hero.linkedin')}
        </ExternalLink>
      </div>
    </section>
  )
}
