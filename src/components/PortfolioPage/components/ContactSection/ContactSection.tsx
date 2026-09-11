import { ExternalLink } from '@/components/ui/ExternalLink'
import { profile } from '@/content/profile'
import { useI18n } from '@/lib/i18n'

export const ContactSection = () => {
  const { t } = useI18n()
  return (
    <section class="contact-section" id="contact">
      <div class="page-shell contact-inner">
        <p class="eyebrow">{t('contact.eyebrow')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.body')}</p>
        <div class="contact-links">
          <ExternalLink className="button button-primary" href={profile.githubUrl}>
            {t('contact.github')}
          </ExternalLink>
          <ExternalLink className="button button-outline" href={profile.linkedinUrl}>
            {t('contact.linkedin')}
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
