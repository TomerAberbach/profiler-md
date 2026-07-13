import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { exampleComboLabel, parseExampleFilename } from '../src/cli/examples.ts'
import type { ExampleVariant } from '../src/cli/examples.ts'
import { languageAliasToPrimary, languages } from '../src/cli/languages.ts'
import { formatConverters } from '../src/formats/index.ts'
import type { Format } from '../src/formats/index.ts'

const check = process.argv.includes(`--check`)

const help = execSync(`node src/cli/index.ts --help`, { encoding: `utf8` })

// Discover every `examples/output/*.md` and group it by primary language, then format,
// then emitter/config combo, so the matrix links them all without hand
// maintenance. Variants are kept per combo and linked in base → current → diff
// order.
type Combo = {
  language: string
  emitter: string
  config: string
  variants: Map<ExampleVariant, string>
}
const variantOrder: ExampleVariant[] = [`base`, `current`, `diff`]

const examplesByLanguage = new Map<string, Map<Format, Map<string, Combo>>>()
for (const filename of readdirSync(`examples/output`)) {
  const {
    language: languageId,
    emitter,
    config,
    variant,
    format,
  } = parseExampleFilename(filename)
  const primary = languageAliasToPrimary.get(languageId) ?? languageId

  const language = languages.get(primary)
  if (!language) {
    throw new Error(
      `examples/output/${filename} maps to unknown language "${primary}"`,
    )
  }
  if (!language.formats.includes(format)) {
    throw new Error(
      `examples/output/${filename}: format "${format}" is not declared for "${primary}"`,
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
  const comboKey = `${languageId}.${emitter}.${config}`
  let combo = byCombo.get(comboKey)
  if (!combo) {
    combo = { language: languageId, emitter, config, variants: new Map() }
    byCombo.set(comboKey, combo)
  }
  combo.variants.set(variant, filename)
}

// The matrix is emitted as raw HTML (and `prettier-ignore`d in the readme) so a
// format with multiple combos can list them as a bulleted sublist. Markdown
// links aren't parsed inside HTML tables, so links are `<a>` tags.
const escapeHtml = (text: string): string =>
  text.replaceAll(`&`, `&amp;`).replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`)

const anchor = (text: string, href: string): string =>
  `<a href="${href}">${escapeHtml(text)}</a>`

const variantLinks = (combo: Combo): string =>
  variantOrder
    .filter(variant => combo.variants.has(variant))
    .map(variant =>
      anchor(variant, `examples/output/${combo.variants.get(variant)!}`),
    )
    .join(`, `)

const renderFormatCell = (id: string, format: Format): string => {
  const link = anchor(
    formatConverters[format].title,
    `docs/formats/${format}.md`,
  )
  const combos = [...(examplesByLanguage.get(id)?.get(format)?.values() ?? [])]
  if (combos.length === 0) {
    return `<div>${link}</div>`
  }

  combos.sort(
    (first, second) =>
      first.language.localeCompare(second.language) ||
      first.emitter.localeCompare(second.emitter) ||
      first.config.localeCompare(second.config),
  )

  // A single combo has no distinguishing label, so its links sit inline after
  // the format. Multiple combos become a bulleted sublist, each labelled by the
  // dimensions (language → emitter → config) that vary across the cell.
  if (combos.length === 1) {
    return `<div>${link}: ${variantLinks(combos[0]!)}</div>`
  }

  const vary = {
    lang: new Set(combos.map(combo => combo.language)).size > 1,
    emitter: new Set(combos.map(combo => combo.emitter)).size > 1,
    config: new Set(combos.map(combo => combo.config)).size > 1,
  }
  const items = combos
    .map(
      combo =>
        `<li>${escapeHtml(exampleComboLabel(combo, vary))} (${variantLinks(combo)})</li>`,
    )
    .join(``)
  return `<div>${link}:<ul>${items}</ul></div>`
}

const rows = Array.from(
  languages.entries(),
  ([id, { name, aliases, formats: langFormats }]) => {
    const languageCell = anchor(
      [name, ...(aliases ?? []).map(alias => alias.name)].join(`⁠/⁠`),
      `docs/languages/${id}.md`,
    )
    const formatsCell = langFormats
      .map(format => renderFormatCell(id, format))
      .join(`\n`)
    return `<tr>\n<td>${languageCell}</td>\n<td>\n${formatsCell}\n</td>\n</tr>`
  },
).join(`\n`)

const matrix = `<table>
<thead>
<tr><th>Language</th><th>Formats</th></tr>
</thead>
<tbody>
${rows}
</tbody>
</table>`

let readme = readFileSync(`readme.md`, `utf8`)

readme = readme.replace(
  /<!-- CLI_HELP START -->[\S\s]*?<!-- CLI_HELP END -->/u,
  `<!-- CLI_HELP START -->\n\n\`\`\`sh\n$ profiler-md --help\n${help.trimEnd()}\n\`\`\`\n\n<!-- CLI_HELP END -->`,
)

readme = readme.replace(
  /<!-- LANGUAGE_MATRIX START -->[\S\s]*?<!-- LANGUAGE_MATRIX END -->/u,
  `<!-- LANGUAGE_MATRIX START -->\n\n${matrix}\n\n<!-- LANGUAGE_MATRIX END -->`,
)

if (check) {
  const original = readFileSync(`readme.md`, `utf8`)
  if (original !== readme) {
    process.stderr.write(
      `readme.md is out of date. Run \`pnpm update-readme\` to fix.\n`,
    )
    process.exit(1)
  }
} else {
  writeFileSync(`readme.md`, readme)
}
