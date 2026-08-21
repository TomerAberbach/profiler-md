import { fc, test } from '@fast-check/vitest'
import { afterEach, beforeAll, beforeEach, describe, expect, vi } from 'vitest'
import {
  heading,
  inlineCode,
  mdastToMarkdown,
  nameLocationPhrasing,
  paragraph,
  table,
  text,
} from '../helpers/markdown.ts'
import { highlightMarkdown } from './highlight-markdown.ts'
import type { HighlightMarkdownOptions } from './highlight-markdown.ts'

// Warm up the shiki highlighter once for the whole suite.
beforeAll(async () => {
  vi.stubEnv(`FORCE_COLOR`, `3`)
  await highlight(`warmup`, highlightMarkdownOptions)
  vi.unstubAllEnvs()
})

afterEach(() => vi.unstubAllEnvs())

describe(`ANSI rendering`, () => {
  beforeEach(() => vi.stubEnv(`FORCE_COLOR`, `3`))

  test(`plain text is wrapped in foreground color tags`, async () => {
    const highlighted = await highlight(`hello`, highlightMarkdownOptions)

    expect(highlighted).toMatch(/<fg:\d+,\d+,\d+>hello<\/fg>/u)
  })

  test(`two input lines produce exactly one newline in output`, async () => {
    const highlighted = await highlight(
      `line one\nline two`,
      highlightMarkdownOptions,
    )

    expect(highlighted.split(`\n`)).toHaveLength(2)
  })

  test(`empty string produces empty output`, async () => {
    const highlighted = await highlight(``, highlightMarkdownOptions)

    expect(highlighted).toBe(``)
  })
})

describe(`markdown syntax highlighting`, () => {
  beforeEach(() => vi.stubEnv(`FORCE_COLOR`, `3`))

  test(`headings are highlighted`, async () => {
    const highlighted = await highlight(`# Hello`, highlightMarkdownOptions)

    expect(highlighted).toMatchInlineSnapshot(
      `"<bold><fg:122,101,53>#</fg></bold><bold><fg:219,188,127> Hello</fg></bold>"`,
    )
  })

  test(`inline code is highlighted`, async () => {
    const highlighted = await highlight(
      `some \`code\` here`,
      highlightMarkdownOptions,
    )

    expect(highlighted).toMatchInlineSnapshot(
      `"<fg:211,198,170>some </fg><fg:219,188,127>\`</fg><fg:203,157,104>code</fg><fg:219,188,127>\`</fg><fg:211,198,170> here</fg>"`,
    )
  })

  test(`bold text applies bold style`, async () => {
    const highlighted = await highlight(`**text**`, highlightMarkdownOptions)

    expect(highlighted).toMatch(/^<bold>.*text.*<\/bold>$/u)
  })

  test(`italic text applies italic style`, async () => {
    const highlighted = await highlight(`*text*`, highlightMarkdownOptions)

    expect(highlighted).toMatch(/^<italic>.*text.*<\/italic>$/u)
  })
})

describe(`heat intensity`, () => {
  beforeEach(() => vi.stubEnv(`FORCE_COLOR`, `3`))

  test(`unthemed table data rows have no heat tinting`, async () => {
    const markdown = [
      `| Name | Value |`,
      `| ---- | ----- |`,
      `| foo  | bar   |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 2)).toBe(defaultRowRed)
  })

  test(`top-level themed table (H3 + % + Location)`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name   | %    | Location |`,
      `| ------ | ---- | -------- |`,
      `| \`high\` | 100% | a.ts     |`,
      `| \`low\`  | 10%  | b.ts     |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    // Heading has no heat.
    expect(maxRed(highlighted, 0)).toBe(defaultHeadingRed)
    // Table header has no heat.
    expect(maxRed(highlighted, 2)).toBe(defaultRowRed)
    // Table header separator has no heat.
    expect(maxRed(highlighted, 3)).toBe(defaultRowRed)
    // 100% row is maximally red-shifted.
    expect(maxRed(highlighted, 4)).toBe(246)
    // 10% row is slightly red-shifted.
    expect(maxRed(highlighted, 5)).toBe(228)
  })

  describe(`H5 heading lookup`, () => {
    const baseMarkdown = [
      `### Functions`,
      ``,
      `| Name   | %    | Location |`,
      `| ------ | ---- | -------- |`,
      `| \`high\` | 100% | a.ts     |`,
      ``,
    ].join(`\n`)

    test(`H5 with matching backtick name and (location) is heat-tinted`, async () => {
      const markdown = `${baseMarkdown}\n##### \`high\` (a.ts)`

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      // H5 heading inherits intensity 1 from the table.
      expect(maxRed(highlighted, 6)).toBe(246)
    })

    test(`H5 without inline code gets no intensity`, async () => {
      const markdown = `${baseMarkdown}\n##### Plain heading (a.ts)`

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 6)).toBe(defaultHeadingRed)
    })

    test(`H5 with inline code but missing parens gets no intensity`, async () => {
      const markdown = `${baseMarkdown}\n##### \`high\` a.ts`

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 6)).toBe(defaultHeadingRed)
    })

    test(`H5 with inline code not in table gets no intensity`, async () => {
      const markdown = `${baseMarkdown}\n##### \`missing\` (x.ts)`

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 6)).toBe(defaultHeadingRed)
    })
  })

  test(`nested table under H5 gets tinted relative to parent table`, async () => {
    // H5 has intensity 0.75 (from 75% row). Nested table rows use 0.75 * pct.
    const markdown = [
      `### Functions`,
      ``,
      `| Name  | %   | Location |`,
      `| ----- | --- | -------- |`,
      `| \`foo\` | 75% | a.ts     |`,
      ``,
      `##### \`foo\` (a.ts)`,
      ``,
      `| Inner | %    |`,
      `| ----- | ---- |`,
      `| x     | 100% |`,
      `| y     | 10%  |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    // 100% row.
    expect(maxRed(highlighted, 10)).toBe(240)
    // 10% row.
    expect(maxRed(highlighted, 11)).toBe(220)
  })

  describe(`heading state resets`, () => {
    test(`H1 clears previous heading sections so subsequent H5 lookup finds nothing`, async () => {
      const markdown = [
        `### Functions`,
        ``,
        `| Name   | %   | Location |`,
        `| ------ | --- | -------- |`,
        `| \`func\` | 75% | a.ts     |`,
        ``,
        `# Reset`,
        ``,
        `##### \`func\` (a.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 8)).toBe(defaultHeadingRed)
    })

    test(`H2 clears previous heading sections so subsequent H5 lookup finds nothing`, async () => {
      const markdown = [
        `### Functions`,
        ``,
        `| Name   | %   | Location |`,
        `| ------ | --- | -------- |`,
        `| \`func\` | 75% | a.ts     |`,
        ``,
        `## Reset`,
        ``,
        `##### \`func\` (a.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 8)).toBe(defaultHeadingRed)
    })

    test(`second H3 clears previous heading sections so first section's entries don't bleed`, async () => {
      const markdown = [
        `### First`,
        ``,
        `| Name   | %    | Location |`,
        `| ------ | ---- | -------- |`,
        `| \`func\` | 100% | a.ts     |`,
        ``,
        `### Second`,
        ``,
        `##### \`func\` (a.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 8)).toBe(defaultHeadingRed)
    })

    test(`a closed section's names stay available to a following sibling`, async () => {
      const markdown = [
        `### Functions`,
        ``,
        `#### Categories`,
        ``,
        `##### stdlib`,
        ``,
        `| Name   | %    | Location |`,
        `| ------ | ---- | -------- |`,
        `| \`func\` | 100% | a.ts     |`,
        ``,
        `#### Callers`,
        ``,
        `##### \`func\` (a.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 12)).toBe(246)
    })

    test(`a closed section's names don't reach a later section measuring a different total`, async () => {
      const markdown = [
        `# Profile`,
        ``,
        `## Allocated heap`,
        ``,
        `### Functions`,
        ``,
        `#### Categories`,
        ``,
        `##### stdlib`,
        ``,
        `| Name   | %    | Location |`,
        `| ------ | ---- | -------- |`,
        `| \`func\` | 100% | a.ts     |`,
        ``,
        `## Retained heap`,
        ``,
        `### Functions`,
        ``,
        `##### \`func\` (a.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 18)).toBe(defaultHeadingRed)
    })

    test(`both tables in the same H3 scope populate the lookup map`, async () => {
      const markdown = [
        `### Functions`,
        ``,
        `| Name   | %    | Location |`,
        `| ------ | ---- | -------- |`,
        `| \`first\` | 100% | a.ts    |`,
        ``,
        `| Name    | %    | Location |`,
        `| ------- | ---- | -------- |`,
        `| \`second\` | 100% | b.ts   |`,
        ``,
        `##### \`second\` (b.ts)`,
      ].join(`\n`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, 10)).toBe(246)
    })
  })

  test(`table with % but no Location after H3 is themed`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name | %    |`,
      `| ---- | ---- |`,
      `| foo  | 80%  |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 4)).toBe(241)
  })

  test(`malformed percent cell produces no heat`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name | %    | Location |`,
      `| ---- | ---- | -------- |`,
      `| foo  | abc% | a.ts     |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 4)).toBe(defaultRowRed)
  })

  test(`zero percent row has no heat`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name | %   | Location |`,
      `| ---- | --- | -------- |`,
      `| foo  | 0%  | a.ts     |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 4)).toBe(defaultRowRed)
  })

  test(`fractional percent produces mild heat`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name | %    | Location |`,
      `| ---- | ---- | -------- |`,
      `| foo  | 3.5% | a.ts     |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 4)).toBe(217)
  })
})

describe(`diff table intensity`, () => {
  beforeEach(() => vi.stubEnv(`FORCE_COLOR`, `3`))

  // Diff tables always have `Change` and `%` columns alongside `Delta`, like
  // real output. Together they recover the profile total: `|Delta ÷ Change|`
  // is the base value, and dividing it by the base share in `%` yields the
  // total.
  const diffTable = (rows: string[]): string =>
    [
      `| Change  |   Delta | %           |`,
      `| ------- | ------: | ----------- |`,
      ...rows,
    ].join(`\n`)

  test(`header and separator rows are untinted`, async () => {
    const highlighted = await highlight(
      diffTable([`| +50.0%  |   +1ms  | 0.2% → 0.3% |`]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 0)).toBe(defaultRowRed)
    expect(maxRed(highlighted, 1)).toBe(defaultRowRed)
  })

  test(`increase rows are red-tinted by their delta's share of the profile total`, async () => {
    // Both rows imply a 1s total, so +16ms tints at 1.6% and +4ms at 0.4%.
    const highlighted = await highlight(
      diffTable([
        `| +100.0% |  +16ms  | 1.6% → 3.2% |`,
        `| +100.0% |   +4ms  | 0.4% → 0.8% |`,
      ]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 2)).toBe(215)
    expect(maxRed(highlighted, 3)).toBe(213)
  })

  test(`decrease rows are green-tinted by their delta's share of the profile total`, async () => {
    const highlighted = await highlight(
      diffTable([
        `| -50.0%  |  -16ms  | 3.2% → 1.6% |`,
        `| -50.0%  |   -4ms  | 0.8% → 0.4% |`,
      ]),
      highlightMarkdownOptions,
    )

    expect(maxGreen(highlighted, 2)).toBe(203)
    expect(maxGreen(highlighted, 3)).toBe(201)
  })

  test(`a delta moving a large share of the profile tints strongly`, async () => {
    // -250ms of a 500ms total: half the profile improved.
    const highlighted = await highlight(
      diffTable([`| -50.0%  | -250ms  | 100.0% → 50.0% |`]),
      highlightMarkdownOptions,
    )

    expect(maxGreen(highlighted, 2)).toBe(228)
  })

  test(`new and removed rows recover the total from their changed side's share`, async () => {
    const highlighted = await highlight(
      diffTable([
        `| new     |   +4ms  | 0.0% → 0.4% |`,
        `| removed |  -16ms  | 1.6% → 0.0% |`,
      ]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 2)).toBe(213)
    expect(maxGreen(highlighted, 3)).toBe(203)
  })

  test(`a single-value % cell provides the base share`, async () => {
    const highlighted = await highlight(
      diffTable([`| -3.4%   | -44.00ms | 99.5%      |`]),
      highlightMarkdownOptions,
    )

    expect(maxGreen(highlighted, 2)).toBe(206)
  })

  test.each([
    { larger: `+1s`, smaller: `+250ms` },
    { larger: `+1m 5s`, smaller: `+16.25s` },
    { larger: `+1 MiB`, smaller: `+256 KiB` },
    { larger: `+1,000`, smaller: `+250` },
  ])(
    `$larger and $smaller deltas are normalized before comparison`,
    async ({ larger, smaller }) => {
      const highlighted = await highlight(
        diffTable([
          `| +100.0% | ${larger} | 25.0% → 50.0% |`,
          `| +100.0% | ${smaller} | 6.3% → 12.5% |`,
        ]),
        highlightMarkdownOptions,
      )

      expect(maxRed(highlighted, 2)).toBe(228)
      expect(maxRed(highlighted, 3)).toBe(219)
    },
  )

  test(`— unchanged row is untinted`, async () => {
    const highlighted = await highlight(
      diffTable([
        `| +100.0% |  +16ms  | 1.6% → 3.2% |`,
        `| —       |   0ms   | 0.8% → 0.8% |`,
      ]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 3)).toBe(defaultRowRed)
    expect(maxGreen(highlighted, 3)).toBe(defaultRowGreen)
  })

  test(`table with only unchanged rows is untinted`, async () => {
    const highlighted = await highlight(
      diffTable([`| —       |   0ms   | 0.8% → 0.8% |`]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 2)).toBe(defaultRowRed)
    expect(maxGreen(highlighted, 2)).toBe(defaultRowGreen)
  })

  test(`table whose total cannot be recovered is untinted`, async () => {
    // Every share rounds below the output's precision, so no row can anchor a
    // total estimate.
    const highlighted = await highlight(
      diffTable([`| new     |   +1ms  | 0.0% → <0.1% |`]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 2)).toBe(defaultRowRed)
  })

  /** A diff table under {@link ranking}'s heading, as a diff's rankings are. */
  const rankingSection = (ranking: string, rows: string[]): string =>
    [`#### ${ranking}`, ``, diffTable(rows)].join(`\n`)

  test(`a decrease under Regressions is red-tinted`, async () => {
    // A metric a higher value is better for ranks its decreases as
    // regressions, and a regression is red however its delta is signed.
    const highlighted = await highlight(
      rankingSection(`Regressions`, [`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 4)).toBe(215)
  })

  test(`an increase under Improvements is green-tinted`, async () => {
    const highlighted = await highlight(
      rankingSection(`Improvements`, [`| +100.0% |  +16ms  | 1.6% → 3.2% |`]),
      highlightMarkdownOptions,
    )

    expect(maxGreen(highlighted, 4)).toBe(203)
  })

  test(`rows under Increases and Decreases are untinted`, async () => {
    // The metric's improvement direction is unknown, so neither ranking's rows
    // are colored as better or worse.
    const highlighted = await highlight(
      [
        rankingSection(`Increases`, [`| +100.0% |  +16ms  | 1.6% → 3.2% |`]),
        rankingSection(`Decreases`, [`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
      ].join(`\n\n`),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 4)).toBe(defaultRowRed)
    expect(maxGreen(highlighted, 10)).toBe(defaultRowGreen)
  })

  test(`a summary table is untinted in a document whose metric's improvement direction is unknown`, async () => {
    // No ranking heading covers the summary table, and the document's
    // `Increases` heading states that its changes are neither better nor worse.
    const highlighted = await highlight(
      [
        `# Weight profile diff`,
        ``,
        diffTable([`| +100.0% |  +16ms  | 1.6% → 3.2% |`]),
        ``,
        rankingSection(`Increases`, [`| +100.0% |  +16ms  | 1.6% → 3.2% |`]),
      ].join(`\n`),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 4)).toBe(defaultRowRed)
  })

  test(`a summary table is tinted by what its profile's rankings call an increase`, async () => {
    // The `Regressions` ranking covers a decrease, so a decrease is a
    // regression throughout the profile, including in the summary table above
    // it that no ranking heading covers.
    const highlighted = await highlight(
      [
        `# Throughput profile diff`,
        ``,
        diffTable([`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
        ``,
        rankingSection(`Regressions`, [`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
      ].join(`\n`),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 4)).toBe(215)
  })

  test(`each profile's summary table takes what its own rankings call an increase`, async () => {
    const highlighted = await highlight(
      [
        `# Throughput profile diff`,
        ``,
        diffTable([`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
        ``,
        rankingSection(`Regressions`, [`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
        ``,
        `# CPU profile diff`,
        ``,
        diffTable([`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
        ``,
        rankingSection(`Regressions`, [`| +100.0% |  +16ms  | 1.6% → 3.2% |`]),
      ].join(`\n`),
      highlightMarkdownOptions,
    )

    expect(maxRed(highlighted, 4)).toBe(215)
    expect(maxGreen(highlighted, 16)).toBe(203)
  })

  test(`a summary table with no ranking after it is tinted by the sign of its deltas`, async () => {
    const highlighted = await highlight(
      [
        `# CPU profile diff`,
        ``,
        diffTable([`| -50.0%  |  -16ms  | 3.2% → 1.6% |`]),
        ``,
        `No function differed in time spent.`,
      ].join(`\n`),
      highlightMarkdownOptions,
    )

    expect(maxGreen(highlighted, 4)).toBe(203)
  })

  test(`diff table rows don't propagate intensity to matching headings`, async () => {
    const markdown = [
      `### Regressions`,
      ``,
      `| Change | Delta | %           | Base | Current | Function | Location |`,
      `| ------ | ----- | ----------- | ---- | ------- | -------- | -------- |`,
      `| +50.0% | +1ms  | 0.2% → 0.3% | 2ms  | 3ms     | \`func\`   | a.ts     |`,
      ``,
      `##### \`func\` (a.ts)`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 6)).toBe(defaultHeadingRed)
  })
})

describe(`Markdown escaping resilience`, () => {
  beforeEach(() => vi.stubEnv(`FORCE_COLOR`, `3`))

  test(`escaped pipe in a name cell doesn't shift the % column`, async () => {
    const markdown = [
      `### Functions`,
      ``,
      `| Name    | %    | Location |`,
      `| ------- | ---- | -------- |`,
      `| \`a\\|b\` | 100% | \`x.ts\` |`,
    ].join(`\n`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, 4)).toBe(246)
  })

  test(`H5 with raw pipe matches a table name cell with an escaped pipe`, async () => {
    const markdown = functionDocument(`a|b`, `x.ts`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, h5LineIndex(markdown))).toBe(246)
  })

  test(`H5 with a code span location matches a code span Location cell`, async () => {
    const markdown = functionDocument(`f`, `a.ts`)

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    expect(maxRed(highlighted, h5LineIndex(markdown))).toBe(246)
  })

  test(`a carriage return in paragraph text doesn't shift heat lines`, async () => {
    const markdown = mdastToMarkdown([
      heading(3, `Functions`),
      paragraph(`Functions ranked by\rself time`),
      table(
        [`Function`, `%`, `Location`],
        [[[inlineCode(`f`)], [text(`100%`)], [inlineCode(`a.ts`)]]],
      ),
    ])

    const highlighted = await highlight(markdown, highlightMarkdownOptions)

    const rowIndex = markdown
      .split(`\n`)
      .findIndex(line => line.startsWith(`| \`f\``))
    expect(maxRed(highlighted, rowIndex)).toBe(246)
  })

  test.each([
    { description: `a longer code fence`, name: `a\`b` },
    { description: `a padded code fence`, name: `\`x\`` },
  ])(
    `H5 lookup works for a name serialized with $description`,
    async ({ name }) => {
      const markdown = functionDocument(name, `x.ts`)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, h5LineIndex(markdown))).toBe(246)
    },
  )

  /**
   * Name and location strings biased toward Markdown syntax the serializer
   * escapes context-sensitively. Blank-after-trim values never appear in real
   * output (mirroring the `frameName` arbitrary in
   * `src/formats/escaping.test.ts`).
   */
  const adversarialValue = fc
    .string({
      unit: fc.constantFrom(
        `|`,
        `\\`,
        `\``,
        `_`,
        `*`,
        `(`,
        `)`,
        ` `,
        `a`,
        `1`,
        `.`,
      ),
      minLength: 1,
      maxLength: 12,
    })
    .filter(value => value.trim().length > 0)

  // Modest run count since each case runs Shiki tokenization.
  test.prop([adversarialValue, adversarialValue], { numRuns: 40 })(
    `heading ↔ table key lookup survives serialization escaping`,
    async (name, location) => {
      const markdown = functionDocument(name, location)

      const highlighted = await highlight(markdown, highlightMarkdownOptions)

      expect(maxRed(highlighted, h5LineIndex(markdown))).toBe(246)
    },
  )
})

/**
 * A document with the real-output shape: an H3 section with a single-function
 * 100% table followed by that function's H5 heading, built with the same
 * serializers as production output.
 */
const functionDocument = (name: string, location: string): string =>
  mdastToMarkdown([
    heading(3, `Functions`),
    table(
      [`Function`, `%`, `Location`],
      [[[inlineCode(name)], [text(`100%`)], [inlineCode(location)]]],
    ),
    heading(5, nameLocationPhrasing(name, inlineCode(location))),
  ])

const h5LineIndex = (markdown: string): number =>
  markdown.split(`\n`).findIndex(line => line.startsWith(`#####`))

const highlight = async (
  markdown: string,
  options: HighlightMarkdownOptions,
): Promise<string> => formatAnsi(await highlightMarkdown(markdown, options))

const formatAnsi = (output: string): string =>
  output.replaceAll(/\x1B\[(?<code>[\d;]+)m/gu, (_, code: string) => {
    const parts = code.split(`;`)
    if (parts[0] === `38` && parts[1] === `2`) {
      const rgb = `${parts[2]},${parts[3]},${parts[4]}`
      return `<fg:${rgb}>`
    }
    return ANSI_CODE_TO_TAG[code] ?? ``
  })

const ANSI_CODE_TO_TAG: Record<string, string> = {
  '39': `</fg>`,
  '1': `<bold>`,
  '22': `</bold>`,
  '3': `<italic>`,
  '23': `</italic>`,
  '4': `<underline>`,
  '24': `</underline>`,
  '9': `<strike>`,
  '29': `</strike>`,
}

const getLineColors = (
  output: string,
  lineIndex: number,
): [number, number, number][] => {
  const line = output.split(`\n`)[lineIndex] ?? ``
  return [
    ...line.matchAll(/<fg:(?<red>\d+),(?<green>\d+),(?<blue>\d+)>/gu),
  ].map(match => [
    Number.parseInt(match.groups!.red!, 10),
    Number.parseInt(match.groups!.green!, 10),
    Number.parseInt(match.groups!.blue!, 10),
  ])
}

const maxRed = (output: string, lineIndex: number): number =>
  Math.max(0, ...getLineColors(output, lineIndex).map(([red]) => red))

const maxGreen = (output: string, lineIndex: number): number =>
  Math.max(0, ...getLineColors(output, lineIndex).map(([, green]) => green))

// Warm sand (#d3c6aa = 211,198,170) is the default.
const defaultRowRed = 211
const defaultRowGreen = 198
// Golden amber (#dbbc7f = 219,188,127) is the default.
const defaultHeadingRed = 219

const highlightMarkdownOptions: HighlightMarkdownOptions = { outputPath: `-` }
