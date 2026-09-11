import renderToString from 'preact-render-to-string'
import { App } from '@/App'
import { en } from '@/lib/i18n/catalog'

export const prerender = () => ({
  html: renderToString(<App />),
  head: {
    lang: 'en',
    title: en['metadata.title'],
  },
})
