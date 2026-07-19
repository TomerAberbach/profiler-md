import { execSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import {
  exampleComboLabel,
  parseExampleFilename,
  variants,
} from '../src/cli/examples.ts'
import type { Example, ExampleVariant } from '../src/cli/examples.ts'
import { languageAliasToPrimary, languages } from '../src/cli/languages.ts'
import { formatConverters } from '../src/formats/index.ts'
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

const variantLinks = (combo: Combo): string =>
  variants
    .flatMap(variant => {
      const filename = combo.variants.get(variant)
      return filename ? [anchor(variant, `examples/output/${filename}`)] : []
    })
    .join(`, `)

const formatCell = (id: string, format: Format): string => {
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
      first.origin.localeCompare(second.origin) ||
      first.config.localeCompare(second.config),
  )

  const items = combos
    .map(
      combo =>
        `<li>${escapeHtml(exampleComboLabel(combo))} (${variantLinks(combo)})</li>`,
    )
    .join(``)
  return `<details><summary>${link}</summary><ul>${items}</ul></details>`
}

const rows = Array.from(
  languages.entries(),
  ([id, { name, aliases, formats: langFormats }]) => {
    const languageCell = anchor(
      [name, ...(aliases ?? []).map(alias => alias.name)].join(`⁠/⁠`),
      `docs/languages/${id}.md`,
    )
    const formatsCell = langFormats
      .map(format => formatCell(id, format))
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

const original = readFileSync(`readme.md`, `utf8`)
let readme = original

readme = readme.replace(
  /<!-- CLI_HELP START -->[\S\s]*?<!-- CLI_HELP END -->/u,
  `<!-- CLI_HELP START -->\n\n\`\`\`sh\n$ profiler-md --help\n${help.trimEnd()}\n\`\`\`\n\n<!-- CLI_HELP END -->`,
)

readme = readme.replace(
  /<!-- LANGUAGE_MATRIX START -->[\S\s]*?<!-- LANGUAGE_MATRIX END -->/u,
  `<!-- LANGUAGE_MATRIX START -->\n\n${matrix}\n\n<!-- LANGUAGE_MATRIX END -->`,
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
