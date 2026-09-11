import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/content/education'
import { useI18n } from '@/lib/i18n'

export const EducationSection = () => {
  const { t } = useI18n()
  return (
    <section class="content-section page-shell" id="education">
      <SectionHeading eyebrow={t('education.eyebrow')} title={t('education.title')} />
      <div class="education-grid">
        {education.map((item) => (
          <article class="education-card" key={item.id}>
            <p class="date-label">{item.period}</p>
            <h3>{t(item.degreeKey)}</h3>
            <p>{item.institutionKey ? t(item.institutionKey) : item.institution}</p>
            <p class="status-line">{t(item.statusKey)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
