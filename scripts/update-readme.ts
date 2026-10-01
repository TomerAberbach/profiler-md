import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import {
  exampleComboLabel,
  parseExampleFilename,
  variants,
} from '../src/cli/examples.ts'
import type { Example, ExampleVariant } from '../src/cli/examples.ts'
import { formatUsageExamples } from '../src/cli/help.ts'
import {
  languageAliasToPrimary,
  languageIconUrl,
  languages,
} from '../src/cli/languages.ts'
import type { Language } from '../src/cli/languages.ts'
import { formatToSpec } from '../src/formats/index.ts'
import type { Format } from '../src/formats/index.ts'

const check = process.argv.includes(`--check`)

const help = execSync(`node src/cli/index.ts --help`, { encoding: `utf8` })

type Combo = {
  language: string
  origin: Example[`origin`]
  config: string
  variants: Map<ExampleVariant, string>
}

const examplesByLanguage = new Map<string, Map<Format, Map<string, Combo>>>()
for (const filename of readdirSync(`examples/output`)) {
  const {
    language: languageId,
    origin,
    config,
    variant,
    format,
  } = parseExampleFilename(filename)
  const primary = languageAliasToPrimary.get(languageId) ?? languageId

  const language = languages.get(primary)
  if (!language) {
    throw new Error(
      `examples/output/${filename} maps to unknown language ${primary}`,
    )
  }
  if (!language.formats.includes(format)) {
    throw new Error(
      `examples/output/${filename}: format ${format} is not declared for ${primary}`,
    )
  }

  let byFormat = examplesByLanguage.get(primary)
  if (!byFormat) {
    byFormat = new Map()
    examplesByLanguage.set(primary, byFormat)
  }
  let byCombo = byFormat.get(format)
  if (!byCombo) {
    byCombo = new Map()
    byFormat.set(format, byCombo)
  }
  const comboKey = `${languageId}.${origin}.${config}`
  let combo = byCombo.get(comboKey)
  if (!combo) {
    combo = { language: languageId, origin, config, variants: new Map() }
    byCombo.set(comboKey, combo)
  }
  combo.variants.set(variant, filename)
}

const escapeHtml = (text: string): string =>
  text.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`)

const anchor = (text: string, href: string): string =>
  `<a href="${href}">${escapeHtml(text)}</a>`

const iconImage = (
  { name, icon }: { name: string; icon: string },
  size: number,
): string =>
  `<img src="${languageIconUrl(icon)}" alt="${escapeHtml(name)}" width="${size}" height="${size}" />`

const variantLinks = (combo: Combo): string =>
  variants
    .flatMap(variant => {
      const filename = combo.variants.get(variant)
      return filename ? [anchor(variant, `examples/output/${filename}`)] : []
    })
    .join(`&nbsp;·&nbsp;`)

const languageMembers = (language: Language) => [
  language,
  ...(language.aliases ?? []),
]

const languageIcons = (language: Language, size: number): string =>
  languageMembers(language)
    .map(member => iconImage(member, size))
    .join(` `)

const languageNames = (language: Language): string =>
  languageMembers(language)
    .map(member => escapeHtml(member.name))
    .join(`⁠/⁠`)

const formatLink = (format: Format): string =>
  anchor(formatToSpec[format].title, `docs/formats/${format}.md`)

const languageEntries = [...languages.entries()]

const languageMatrix = (): string => {
  const exampleRows = languageEntries.flatMap(languageExampleRows)
  return `${languageGrid()}

### Examples

Each example links to the Markdown for a base profile, a current profile, and
the diff between them.

<details>
<summary><b>Browse ${exampleRows.length} examples</b></summary>
<br />
<table>
<thead>
<tr><th>Language</th><th>Profile</th><th>Format</th><th>Markdown</th></tr>
</thead>
<tbody>
${exampleRows.join(`\n`)}
</tbody>
</table>
</details>`
}

const gridColumnCount = 4
const gridCellWidth = `${100 / gridColumnCount}%`

const languageGrid = (): string => {
  const rows: string[] = []
  for (
    let index = 0;
    index < languageEntries.length;
    index += gridColumnCount
  ) {
    rows.push(gridRow(languageEntries.slice(index, index + gridColumnCount)))
  }
  return `<table>\n${rows.join(`\n`)}\n</table>`
}

const gridRow = (entries: [string, Language][]): string => {
  const cells = entries.map(gridCell)
  // Empty cells keep a partial row's borders spanning every column
  while (cells.length < gridColumnCount) {
    cells.push(`<td width="${gridCellWidth}"></td>`)
  }
  return `<tr>\n${cells.join(`\n`)}\n</tr>`
}

const gridCell = ([id, language]: [string, Language]): string => {
  const formatLinks = language.formats.map(formatLink).join(` · `)
  return `<td align="center" width="${gridCellWidth}"><br /><a href="docs/languages/${id}.md">${languageIcons(language, 40)}<br /><b>${languageNames(language)}</b></a><br /><sub>${formatLinks}</sub><br /><br /></td>`
}

const languageExampleRows = ([id, language]: [string, Language]): string[] => {
  const includeLanguage = languageMembers(language).length > 1
  const cells = language.formats.flatMap(format =>
    sortedExampleCombos(id, format).map(
      combo =>
        `<td>${escapeHtml(exampleComboLabel(combo, { includeLanguage }))}</td><td>${formatLink(format)}</td><td>${variantLinks(combo)}</td>`,
    ),
  )
  if (cells.length === 0) {
    return []
  }

  const languageCell = `<td rowspan="${cells.length}" align="center"><a href="docs/languages/${id}.md">${languageIcons(language, 32)}<br /><sub><b>${languageNames(language)}</b></sub></a></td>`
  return cells.map(
    (cell, index) => `<tr>${index === 0 ? languageCell : ``}${cell}</tr>`,
  )
}

const sortedExampleCombos = (id: string, format: Format): Combo[] =>
  [...(examplesByLanguage.get(id)?.get(format)?.values() ?? [])].sort(
    (first, second) =>
      first.language.localeCompare(second.language) ||
      first.origin.localeCompare(second.origin) ||
      first.config.localeCompare(second.config),
  )

const examplePath = `examples/output/javascript.node.base.cpuprofile.md`
const exampleLines = readFileSync(examplePath, `utf8`).split(`\n`)
const hottestIndex = exampleLines.indexOf(`## Hottest functions`)
const hottestLines = exampleLines.slice(hottestIndex)
const excerptRowCount = 5
const excerpt = [
  ...exampleLines.slice(0, hottestIndex),
  ...hottestLines.slice(
    0,
    hottestLines.findIndex(line => line.startsWith(`|`)) + 2 + excerptRowCount,
  ),
  `…`,
].join(`\n`)

const original = readFileSync(`readme.md`, `utf8`)
let readme = original

readme = readme.replace(
  /<!-- EXAMPLE_OUTPUT START -->[\S\s]*?<!-- EXAMPLE_OUTPUT END -->/u,
  `<!-- EXAMPLE_OUTPUT START -->\n\n\`\`\`md\n${excerpt}\n\`\`\`\n\n<!-- EXAMPLE_OUTPUT END -->`,
)

readme = readme.replace(
  /<!-- CLI_EXAMPLES START -->[\S\s]*?<!-- CLI_EXAMPLES END -->/u,
  `<!-- CLI_EXAMPLES START -->\n\n\`\`\`sh\n${formatUsageExamples()}\`\`\`\n\n<!-- CLI_EXAMPLES END -->`,
)

readme = readme.replace(
  /<!-- CLI_HELP START -->[\S\s]*?<!-- CLI_HELP END -->/u,
  `<!-- CLI_HELP START -->\n\n\`\`\`sh\n$ profiler-md --help\n${help.trimEnd()}\n\`\`\`\n\n<!-- CLI_HELP END -->`,
)

readme = readme.replace(
  /<!-- LANGUAGE_MATRIX START -->[\S\s]*?<!-- LANGUAGE_MATRIX END -->/u,
  `<!-- LANGUAGE_MATRIX START -->\n\n${languageMatrix()}\n\n<!-- LANGUAGE_MATRIX END -->`,
)

if (check) {
  if (original !== readme) {
    process.stderr.write(
      `readme.md is out of date. Run \`pnpm update-readme\` to fix.\n`,
    )
    process.exit(1)
  }
} else {
  writeFileSync(`readme.md`, readme)
}
