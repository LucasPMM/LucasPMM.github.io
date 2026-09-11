import { useI18n } from '@/lib/i18n'
import { AboutSection } from './components/AboutSection'
import { AppHeader } from './components/AppHeader'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { ContactSection } from './components/ContactSection'
import { EducationSection } from './components/EducationSection'
import { ExperienceSection } from './components/ExperienceSection'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SelectedWorkSection } from './components/SelectedWorkSection'

export const PortfolioPage = () => {
  const { t } = useI18n()
  return (
    <>
      <a class="skip-link" href="#main-content">
        {t('common.skipToContent')}
      </a>
      <AppHeader />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SelectedWorkSection />
        <EducationSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
      <footer class="page-footer">
        <div class="page-shell">
          <span>© {new Date().getFullYear()} Lucas Mariz.</span>
          <span>{t('footer.copy')}</span>
        </div>
      </footer>
    </>
  )
}
