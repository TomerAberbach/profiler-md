import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { formats } from '../formats/index.ts'
import { languages } from './languages.ts'

const docsPath = (...segments: string[]): string =>
  join(import.meta.dirname, `../../docs`, ...segments)

describe(`every help topic has a doc file`, () => {
  test.each(formats)(`docs/formats/%s.md exists`, format => {
    expect(existsSync(docsPath(`formats`, `${format}.md`))).toBe(true)
  })

  test.each([...languages.keys()])(`docs/languages/%s.md exists`, language => {
    expect(existsSync(docsPath(`languages`, `${language}.md`))).toBe(true)
  })
})
