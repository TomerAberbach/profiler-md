import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { expect, test } from 'vitest'
import { DEVICON_VERSION, languages } from './languages.ts'

test(`every language icon is a Devicon icon with an original SVG`, () => {
  const lines = readFileSync(
    join(import.meta.dirname, `devicon-icons.txt`),
    `utf8`,
  ).split(`\n`)
  expect(lines[0]).toContain(`v${DEVICON_VERSION}`)
  const deviconIcons = new Set(
    lines.filter(line => line !== `` && !line.startsWith(`#`)),
  )

  const unknownIcons = [...languages.values()]
    .flatMap(language => [language, ...(language.aliases ?? [])])
    .map(({ icon }) => icon)
    .filter(icon => !deviconIcons.has(icon))

  expect(unknownIcons).toStrictEqual([])
})
