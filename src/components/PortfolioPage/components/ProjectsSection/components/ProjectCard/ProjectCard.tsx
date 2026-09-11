import { ExternalLink } from '@/components/ui/ExternalLink'
import type { Project } from '@/content/projects'
import { useI18n } from '@/lib/i18n'
import { ProjectDetails } from '../ProjectDetails'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useI18n()
  return (
    <article class="project-card">
      {project.statusKey ? <p class="card-kicker">{t(project.statusKey)}</p> : null}
      <h3>{t(project.titleKey)}</h3>
      <p class="project-summary">{t(project.summaryKey)}</p>
      <ProjectDetails details={project} />
      <ul class="technology-list" aria-label={t('nav.capabilities')}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {project.url ? (
        <ExternalLink className="text-link" href={project.url}>
          {t('projects.sourceLink')}
        </ExternalLink>
      ) : null}
    </article>
  )
}
