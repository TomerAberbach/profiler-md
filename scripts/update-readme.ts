import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { formats, languages } from '../src/cli/formats.ts'
import { formatTable } from '../src/helpers/markdown.ts'

const check = process.argv.includes(`--check`)

const help = execSync(`node src/cli/index.ts --help`, { encoding: `utf8` })

const matrix = formatTable(
  [`Language`, `Formats`],
  Array.from(
    languages.entries(),
    ([id, { name, aliases, formats: langFormats, examples }]) => [
      [{ id, name }, ...(aliases ?? [])]
        .map(language => `[${language.name}](docs/languages/${language.id}.md)`)
        .join(`\u2060/\u2060`),
      langFormats
        .map(format => {
          const link = `[${formats.get(format)!.name}](docs/formats/${format}.md)`
          const formatExamples = examples?.[format]
          if (!formatExamples?.length) {
            return link
          }
          const exampleLinks = formatExamples
            .map(({ filename, label }) => `[${label}](examples/${filename}.md)`)
            .join(`, `)
          return `${link} (${exampleLinks})`.replaceAll(` `, `\u00A0`)
        })
        .join(`<br>`),
    ],
  ),
)

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
