import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const distributionDirectory = join(process.cwd(), 'dist')
const indexHtml = readFileSync(join(distributionDirectory, 'index.html'), 'utf8')
const robots = readFileSync(join(distributionDirectory, 'robots.txt'), 'utf8')
const sitemap = readFileSync(join(distributionDirectory, 'sitemap.xml'), 'utf8')

const requiredIndexFragments = [
  'id="main-content"',
  'Lucas Mariz',
  'Cagliari Calcio',
  'Role Vectors',
  'Planner',
  'rel="canonical"',
  'href="/favicon.svg"',
]
const missingIndexFragments = requiredIndexFragments.filter(
  (fragment) => !indexHtml.includes(fragment),
)

if (missingIndexFragments.length > 0) {
  throw new Error(`The prerendered page is missing: ${missingIndexFragments.join(', ')}`)
}

if (!robots.includes('Sitemap: https://lucaspmm.github.io/sitemap.xml')) {
  throw new Error('robots.txt does not reference the canonical sitemap.')
}

if (!sitemap.includes('<loc>https://lucaspmm.github.io/</loc>')) {
  throw new Error('sitemap.xml does not contain the canonical portfolio URL.')
}

if (indexHtml.includes('/Curriculum/')) {
  throw new Error('The production build still contains the legacy project-site base path.')
}

console.log('Static build verification passed.')
