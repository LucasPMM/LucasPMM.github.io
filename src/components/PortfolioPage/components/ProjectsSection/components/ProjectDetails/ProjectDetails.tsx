import type { ProjectDetails as ProjectDetailsContent } from '@/content/projects'
import { useI18n } from '@/lib/i18n'

type ProjectDetailsProps = {
  details: ProjectDetailsContent
}

export const ProjectDetails = ({ details }: ProjectDetailsProps) => {
  const { t } = useI18n()
  return (
    <dl class="project-details">
      <div>
        <dt>{t('projects.detail.approach')}</dt>
        <dd>{t(details.approachKey)}</dd>
      </div>
      <div>
        <dt>{t('projects.detail.contribution')}</dt>
        <dd>{t(details.contributionKey)}</dd>
      </div>
      <div>
        <dt>{t('projects.detail.outcome')}</dt>
        <dd>{t(details.outcomeKey)}</dd>
      </div>
    </dl>
  )
}
