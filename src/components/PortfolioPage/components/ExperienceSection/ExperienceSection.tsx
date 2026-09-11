import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/content/experience'
import { formatExperiencePeriod } from '@/lib/date'
import { useI18n } from '@/lib/i18n'

export const ExperienceSection = () => {
  const { locale, t } = useI18n()
  return (
    <section class="content-section page-shell" id="experience">
      <SectionHeading
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        intro={t('experience.intro')}
      />
      <div class="timeline">
        {experiences.map((experience) => (
          <article class="timeline-item" key={experience.id}>
            <div class="timeline-marker" aria-hidden="true" />
            <div class="timeline-card">
              <div class="timeline-card-header">
                <div>
                  <h3>{t(experience.roleKey)}</h3>
                  <p class="company-line">
                    {experience.company}
                    {experience.employmentKey ? ` · ${t(experience.employmentKey)}` : null}
                  </p>
                </div>
                <p class="date-label">
                  {formatExperiencePeriod(experience.startDate, experience.endDate, locale, t)}
                </p>
              </div>
              <p class="location-label">{t(experience.locationKey)}</p>
              <p>{t(experience.summaryKey)}</p>
              {experience.bulletKeys.length > 0 ? (
                <ul class="impact-list">
                  {experience.bulletKeys.map((bulletKey) => (
                    <li key={bulletKey}>{t(bulletKey)}</li>
                  ))}
                </ul>
              ) : null}
              <ul class="technology-list" aria-label={t('nav.capabilities')}>
                {experience.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
