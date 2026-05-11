import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest'
import { highlightMarkdown } from './highlight.ts'
import type { HighlightMarkdownOptions } from './highlight.ts'

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

// Warm sand (#d3c6aa = 211,198,170) is the default.
const defaultRowRed = 211
// Golden amber (#dbbc7f = 219,188,127) is the default.
const defaultHeadingRed = 219

const highlightMarkdownOptions: HighlightMarkdownOptions = { outputPath: `-` }
