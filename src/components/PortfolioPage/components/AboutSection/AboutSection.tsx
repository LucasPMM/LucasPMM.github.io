import { SectionHeading } from '@/components/ui/SectionHeading'
import { useI18n } from '@/lib/i18n'

export const AboutSection = () => {
  const { t } = useI18n()
  return (
    <section class="content-section page-shell" id="about">
      <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />
      <p class="about-copy">{t('about.body')}</p>
    </section>
  )
}
