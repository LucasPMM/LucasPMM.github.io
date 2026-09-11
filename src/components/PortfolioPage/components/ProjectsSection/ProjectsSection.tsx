import { ExternalLink } from '@/components/ui/ExternalLink'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { jigSolver, projects } from '@/content/projects'
import { useI18n } from '@/lib/i18n'
import { ProjectCard } from './components/ProjectCard'
import { ProjectDetails } from './components/ProjectDetails'

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
          <ProjectDetails details={jigSolver} />
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
            src={`${import.meta.env.BASE_URL}projects/jig-solver/solver-workspace.webp`}
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
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
