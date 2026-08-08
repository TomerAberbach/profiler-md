import { fc, test } from '@fast-check/vitest'
import { expect } from 'vitest'
import { parseMd } from '../helpers/testing.ts'
import { profileToMd } from '../index.ts'
import {
  selfTimeTables,
  totalTimeTables,
} from '../modalities/sampling-profile/testing.ts'
import { categoryTables } from '../testing.ts'

/**
 * A speedscope profile whose single sampled function has the given untrusted
 * name and optional file, exercising function name cells, headings, and
 * location cells end-to-end.
 */
const makeProfileData = (name: string, file?: string): string =>
  JSON.stringify({
    $schema: `https://www.speedscope.app/file-format-schema.json`,
    profiles: [
      {
        type: `sampled`,
        name: `Profile`,
        unit: `milliseconds`,
        samples: [[0]],
        weights: [10],
      },
    ],
    shared: { frames: [{ name, ...(file === undefined ? {} : { file }) }] },
  })

/** All inline code span values in the document, in document order. */
const inlineCodeValues = (md: string): string[] => {
  const values: string[] = []
  const visit = (node: unknown) => {
    const record = node as {
      type?: unknown
      value?: unknown
      children?: unknown[]
    }
    if (record.type === `inlineCode` && typeof record.value === `string`) {
      values.push(record.value)
    }
    for (const child of record.children ?? []) {
      visit(child)
    }
  }
  visit(parseMd(md))
  return values
}

/**
 * Frame names without newlines, which code spans normalize to spaces, and
 * without backslash-pipe, which is unrepresentable in a GFM table cell and so
 * normalized with a space (see
 * https://github.com/syntax-tree/mdast-util-gfm-table/issues/7).
 */
const frameName = fc
  .string({ minLength: 1, maxLength: 30 })
  .map(name => name.replaceAll(/\r\n|[\r\n]/gu, ` `))
  .filter(name => name.trim().length > 0 && !name.includes(`\\|`))

test.prop([frameName])(
  `function names round-trip through Markdown exactly`,
  name => {
    const md = profileToMd({
      data: makeProfileData(name),
      format: `speedscope`,
    })

    expect(inlineCodeValues(md)).toContain(name)
  },
  10_000,
)

test.each([
  `a|b`,
  `a\`b`,
  `a\`\`b`,
  `\`quoted\``,
  `*emphasis*`,
  `_under_score_`,
  `# heading`,
  `[link](x)`,
  `<img src=x>`,
])(`adversarial function name round-trips exactly: %s`, name => {
  const md = profileToMd({ data: makeProfileData(name), format: `speedscope` })

  expect(inlineCodeValues(md)).toContain(name)
})

test(`a newline in a function name normalizes to a space without breaking structure`, () => {
  const md = profileToMd({
    data: makeProfileData(`evil\nname`),
    format: `speedscope`,
  })

  expect(inlineCodeValues(md)).toContain(`evil name`)
  const functionRow = {
    '%': `100.0%`,
    Time: `10.0ms`,
    Samples: `1`,
    Function: `evil name`,
    Location: `<unknown>`,
  }
  expect(categoryTables(md)).toEqual([
    [{ Category: `native`, '%': `100.0%`, Time: `10.0ms`, Samples: `1` }],
  ])
  expect(selfTimeTables(md)).toEqual([[functionRow]])
  expect(totalTimeTables(md)).toEqual([[functionRow]])
})

test(`a backslash-pipe in a function name normalizes with a space without breaking structure`, () => {
  const md = profileToMd({
    data: makeProfileData(`RegExp: a\\|b`),
    format: `speedscope`,
  })

  expect(inlineCodeValues(md)).toContain(`RegExp: a\\ |b`)
  const functionRow = {
    '%': `100.0%`,
    Time: `10.0ms`,
    Samples: `1`,
    Function: `RegExp: a\\ |b`,
    Location: `<unknown>`,
  }
  expect(selfTimeTables(md)).toEqual([[functionRow]])
  expect(totalTimeTables(md)).toEqual([[functionRow]])
})

test(`file paths with Markdown syntax round-trip exactly in locations`, () => {
  const md = profileToMd({
    data: makeProfileData(`main`, `path/with_underscores*and*stars.py`),
    format: `speedscope`,
  })

  expect(inlineCodeValues(md)).toContain(`path/with_underscores*and*stars.py`)
})
