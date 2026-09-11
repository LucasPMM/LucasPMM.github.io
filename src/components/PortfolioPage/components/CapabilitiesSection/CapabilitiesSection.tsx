import { SectionHeading } from '@/components/ui/SectionHeading'
import type { TranslationKey } from '@/lib/i18n'
import { useI18n } from '@/lib/i18n'

const groups: readonly { bodyKey: TranslationKey; titleKey: TranslationKey }[] = [
  {
    titleKey: 'capabilities.product.title',
    bodyKey: 'capabilities.product.body',
  },
  {
    titleKey: 'capabilities.quality.title',
    bodyKey: 'capabilities.quality.body',
  },
  {
    titleKey: 'capabilities.research.title',
    bodyKey: 'capabilities.research.body',
  },
  {
    titleKey: 'capabilities.languages.title',
    bodyKey: 'capabilities.languages.body',
  },
]

export const CapabilitiesSection = () => {
  const { t } = useI18n()
  return (
    <section class="content-section page-shell" id="capabilities">
      <SectionHeading eyebrow={t('capabilities.eyebrow')} title={t('capabilities.title')} />
      <div class="capability-grid">
        {groups.map((group) => (
          <article class="capability-card" key={group.titleKey}>
            <h3>{t(group.titleKey)}</h3>
            <p>{t(group.bodyKey)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
