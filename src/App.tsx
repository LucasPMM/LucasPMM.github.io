import { PortfolioPage } from '@/components/PortfolioPage'
import { I18nProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <PortfolioPage />
    </ThemeProvider>
  </I18nProvider>
)
