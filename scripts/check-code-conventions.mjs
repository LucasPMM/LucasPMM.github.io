import { readdirSync, readFileSync } from 'node:fs'
import { extname, join, relative } from 'node:path'
import ts from 'typescript'

const rootDirectory = process.cwd()
const checkedDirectories = ['src', 'scripts', 'e2e']
const checkedExtensions = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx'])

const listSourceFiles = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name)
    if (entry.isDirectory()) return listSourceFiles(entryPath)
    if (checkedExtensions.has(extname(entry.name))) return [entryPath]
    return []
  })

const formatPosition = (sourceFile, node) => {
  const position = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile))
  return `${relative(rootDirectory, sourceFile.fileName)}:${position.line + 1}:${position.character + 1}`
}

const findViolations = (filePath) => {
  const sourceText = readFileSync(filePath, 'utf8')
  const scriptKind = filePath.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    scriptKind,
  )
  const violations = []

  const inspect = (node) => {
    if (ts.isVariableDeclarationList(node) && (node.flags & ts.NodeFlags.Let) !== 0) {
      violations.push(
        `${formatPosition(sourceFile, node)} Avoid let; use const and immutable values.`,
      )
    }
    if (ts.isIfStatement(node) && node.elseStatement) {
      violations.push(
        `${formatPosition(sourceFile, node.elseStatement)} Avoid else; use a guard clause.`,
      )
    }
    if (ts.isSwitchStatement(node)) {
      violations.push(`${formatPosition(sourceFile, node)} Avoid switch; use a lookup map.`)
    }
    ts.forEachChild(node, inspect)
  }

  inspect(sourceFile)
  return violations
}

const sourceFiles = checkedDirectories.flatMap((directory) =>
  listSourceFiles(join(rootDirectory, directory)),
)
const violations = sourceFiles.flatMap(findViolations)

if (violations.length > 0) {
  throw new Error(`Code convention violations:\n${violations.join('\n')}`)
}

console.log(`Code conventions passed for ${sourceFiles.length} files.`)
