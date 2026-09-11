import { ExternalLink } from '@/components/ui/ExternalLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cagliariApp, roleVectorsPaper } from '@/content/selectedWork'
import { useI18n } from '@/lib/i18n'

export const SelectedWorkSection = () => {
  const { t } = useI18n()
  return (
    <section class="content-section selected-work-section" id="selected-work">
      <div class="page-shell">
        <SectionHeading
          eyebrow={t('work.eyebrow')}
          title={t('work.title')}
          intro={t('work.intro')}
        />
        <div class="work-grid">
          <article class="work-card work-card-featured">
            <p class="card-kicker">{t('work.cagliari.kind')}</p>
            <h3>{t('work.cagliari.title')}</h3>
            <p>{t('work.cagliari.summary')}</p>
            <div class="metric-block">
              <strong>{t('work.cagliari.metric')}</strong>
              <span>{t('work.cagliari.metricLabel')}</span>
            </div>
            <div class="card-links">
              <ExternalLink className="text-link" href={cagliariApp.appStoreUrl}>
                {t('work.cagliari.appStore')}
              </ExternalLink>
              <ExternalLink className="text-link" href={cagliariApp.playStoreUrl}>
                {t('work.cagliari.playStore')}
              </ExternalLink>
            </div>
          </article>
          <article class="work-card">
            <p class="card-kicker">{t('work.paper.kind')}</p>
            <h3>{t('work.paper.title')}</h3>
            <p>{t('work.paper.summary')}</p>
            <div class="metric-block">
              <strong>{t('work.paper.metric')}</strong>
              <span>{t('work.paper.metricLabel')}</span>
            </div>
            <div class="card-links">
              <ExternalLink className="text-link" href={roleVectorsPaper.paperUrl}>
                {t('work.paper.paperLink')}
              </ExternalLink>
              <ExternalLink className="text-link" href={roleVectorsPaper.scheduleUrl}>
                {t('work.paper.scheduleLink')}
              </ExternalLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
