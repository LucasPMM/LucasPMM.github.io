import { ExternalLink } from '@/components/ui/ExternalLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { jigSolver, projects } from '@/content/projects'
import { useI18n } from '@/lib/i18n'

export const ProjectsSection = () => {
  const { t } = useI18n()
  return (
    <section class="content-section page-shell" id="projects">
      <SectionHeading
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        intro={t('projects.intro')}
      />
      <article class="jig-card">
        <div class="jig-copy">
          <p class="card-kicker">{t('projects.jig.status')}</p>
          <h3>{t('projects.jig.title')}</h3>
          <p>{t('projects.jig.summary')}</p>
          <ul class="technology-list" aria-label={t('nav.capabilities')}>
            {jigSolver.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <ExternalLink className="button button-secondary" href={jigSolver.url}>
            {t('projects.jig.link')}
          </ExternalLink>
        </div>
        <div class="product-frame">
          <img
            src="/projects/jig-solver/solver-workspace.webp"
            alt={t('projects.jig.imageAlt')}
            width="1440"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>
      <div class="project-grid">
        {projects.map((project) => (
          <article class="project-card" key={project.id}>
            <h3>{t(project.titleKey)}</h3>
            <p>{t(project.summaryKey)}</p>
            <ul class="technology-list" aria-label={t('nav.capabilities')}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <ExternalLink className="text-link" href={project.url}>
              {t('projects.sourceLink')}
            </ExternalLink>
          </article>
        ))}
      </div>
    </section>
  )
}
