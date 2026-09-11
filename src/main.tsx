import '@fontsource/lora/latin-400.css'
import '@fontsource/lora/latin-500.css'
import '@fontsource/lora/latin-700.css'
import '@fontsource/public-sans/latin-400.css'
import '@fontsource/public-sans/latin-500.css'
import '@fontsource/public-sans/latin-600.css'
import '@fontsource/public-sans/latin-700.css'
import { render } from 'preact'
import { App } from './App'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

const appRoot = document.getElementById('app')
if (!appRoot) throw new Error('Application root was not found.')

render(<App />, appRoot)
