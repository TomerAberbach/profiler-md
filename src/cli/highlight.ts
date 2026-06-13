import type { HighlighterCore, ThemedToken } from '@shikijs/core'
import type { Ansis } from 'ansis'
import { makeAnsis } from './ansis.ts'
import kindlingTheme from './theme-kindling.ts'

export type HighlightMarkdownOptions = {
  outputPath: string
}

export const highlightMarkdown = async (
  markdown: string,
  options: HighlightMarkdownOptions,
): Promise<string> => {
  const ansis = makeAnsis(options)
  if (!ansis.isSupported()) {
    return markdown
  }

  const highlighter = await getHighlighter()
  const { tokens, fg } = highlighter.codeToTokens(markdown, {
    lang: `markdown`,
    theme: `kindling`,
    includeExplanation: `scopeName`,
  })
  const lineToIntensity = computeLineToIntensity(tokens)
  return renderTokens(tokens, fg!, lineToIntensity, ansis)
}

const getHighlighter = (): Promise<HighlighterCore> =>
  (highlighterPromise ??= createHighlighterCore())

let highlighterPromise: Promise<HighlighterCore> | null = null

const createHighlighterCore = async (): Promise<HighlighterCore> => {
  // Trigger all module loading in parallel (no awaits here).
  const markdown = import(`@shikijs/langs/markdown`)
  const c = import(`@shikijs/langs/c`) // eslint-disable-line id-length
  const go = import(`@shikijs/langs/go`)
  const java = import(`@shikijs/langs/java`)
  const js = import(`@shikijs/langs/js`)
  const python = import(`@shikijs/langs/python`)
  const rust = import(`@shikijs/langs/rust`)
  const sh = import(`@shikijs/langs/sh`)
  const toml = import(`@shikijs/langs/toml`)
  const shikiCore = import(`@shikijs/core`)
  const onigurumaEngine = import(`@shikijs/engine-oniguruma`)
  const onigurumaEngineWasm = import(`@shikijs/engine-oniguruma/wasm-inlined`)

  return (await shikiCore).createHighlighterCore({
    langs: [markdown, c, go, java, js, python, rust, sh, toml],
    themes: [kindlingTheme],
    engine: (await onigurumaEngine).createOnigurumaEngine(onigurumaEngineWasm),
  })
}

const computeLineToIntensity = (
  lines: ThemedToken[][],
): Map<number, number> => {
  const lineToIntensity = new Map<number, number>()
  const sections: HeadingSection[] = []
  let currentTable: TableState | null = null

  const endTable = (): void => {
    if (currentTable !== null) {
      flushDiffTable(currentTable, lineToIntensity)
      currentTable = null
    }
  }

  for (const [lineIndex, lineTokens] of lines.entries()) {
    const line = parseLine(lineTokens)
    switch (line.type) {
      case `heading`: {
        // Close all heading sections deeper than this current one. e.g. an H3
        // following an H6 closes the prior H6 through H3 headings.
        while (sections.length > 0 && sections.at(-1)!.level >= line.level) {
          sections.pop()
        }
        // Tables cannot cross heading boundaries, so any current table has now
        // ended.
        endTable()

        const intensity = lookupAncestorIntensity(
          sections,
          line.inlineCode,
          line.afterInlineCode,
        )
        sections.push({
          level: line.level,
          intensity,
          nameLocationToIntensity: new Map(),
        })
        if (intensity !== null) {
          lineToIntensity.set(lineIndex, intensity)
        }
        break
      }
      case `table-row`:
        if (currentTable === null) {
          // This is the first row of the table, so it must be the header.
          currentTable = parseTableHeader(line.text)
          break
        }
        if (currentTable.percentColumnIndex !== -1) {
          const intensity = tableRowIntensity(
            line.text,
            currentTable,
            sections.at(-1),
          )
          if (intensity !== null) {
            lineToIntensity.set(lineIndex, intensity)
          }
        } else if (currentTable.deltaColumnIndex !== -1) {
          // Intensities for diff rows are relative to the largest delta in the
          // table, which isn't known until the table ends, so buffer them.
          const delta = diffRowDelta(line.text, currentTable)
          if (delta !== null) {
            currentTable.pendingDiffRows.push({ lineIndex, delta })
          }
        }
        break

      case `other`:
        // This line is not a table row so if there's a current table, then it
        // ended.
        endTable()
        break
    }
  }
  endTable()

  return lineToIntensity
}

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingSection = {
  /** Heading level (1–6) that opened this scope. */
  level: HeadingLevel

  /**
   * Heat intensity inherited by this scope from an ancestor heading lookup, or
   * null at top level.
   */
  intensity: number | null

  /** Maps `name (location)` keys to intensities for child heading lookups. */
  nameLocationToIntensity: Map<string, number>
}

type Heading = {
  type: `heading`

  level: HeadingLevel

  /** The first backtick-quoted span on this line, including the backticks. */
  inlineCode: string | null

  /**
   * The text following {@link Heading.inlineCode} or the empty string if
   * {@link Heading.inlineCode} is null.
   */
  afterInlineCode: string
}

type TableRow = {
  type: `table-row`

  /** The full Markdown of the table row. */
  text: string
}

type Line = Heading | TableRow | { type: `other` }

const parseLine = (tokens: ThemedToken[]): Line => {
  if (tokens.length === 0) {
    return { type: `other` }
  }

  const headingLevel = determineHeadingLevel(tokens)
  if (headingLevel !== null) {
    const { inlineCode, afterInlineCode } = extractHeadingParts(tokens)
    return { type: `heading`, level: headingLevel, inlineCode, afterInlineCode }
  }

  if (tokens.some(token => tokenHasScope(token, `markup.table.markdown`))) {
    return { type: `table-row`, text: joinTokens(tokens) }
  }

  return { type: `other` }
}

const determineHeadingLevel = (tokens: ThemedToken[]): HeadingLevel | null => {
  for (const token of tokens) {
    for (const { scopeName } of token.explanation?.[0]?.scopes ?? []) {
      if (scopeName.startsWith(`heading.`) && scopeName.endsWith(`.markdown`)) {
        const level = Number.parseInt(
          scopeName.slice(`heading.`.length, -`.markdown`.length),
          10,
        )
        if (level >= 1 && level <= 6) {
          return level as HeadingLevel
        }
      }
    }
  }
  return null
}

const extractHeadingParts = (
  line: ThemedToken[],
): Pick<Heading, `inlineCode` | `afterInlineCode`> => {
  const inlineCodeRange = findInlineCodeRange(line)
  if (inlineCodeRange === null) {
    return { inlineCode: null, afterInlineCode: `` }
  }

  const [start, endExclusive] = inlineCodeRange
  const inlineCode = joinTokens(line.slice(start, endExclusive))
  const afterInlineCode = joinTokens(line.slice(endExclusive))
  return { inlineCode, afterInlineCode }
}

const findInlineCodeRange = (line: ThemedToken[]): [number, number] | null => {
  const start = line.findIndex(token =>
    tokenHasScope(token, `markup.inline.raw.string.markdown`),
  )
  if (start === -1) {
    return null
  }

  let endExclusive = start + 1
  while (
    endExclusive < line.length &&
    tokenHasScope(line[endExclusive]!, `markup.inline.raw.string.markdown`)
  ) {
    endExclusive++
  }

  return [start, endExclusive]
}

const tokenHasScope = (token: ThemedToken, scope: string): boolean =>
  !!token.explanation?.[0]?.scopes.some(({ scopeName }) => scopeName === scope)

const joinTokens = (tokens: ThemedToken[]): string =>
  tokens.map(token => token.content).join(``)

const lookupAncestorIntensity = (
  sections: HeadingSection[],
  inlineCode: string | null,
  afterInlineCode: string,
): number | null => {
  if (inlineCode === null) {
    return null
  }

  const trimmed = afterInlineCode.trim()
  if (!trimmed.startsWith(`(`) || !trimmed.endsWith(`)`)) {
    return null
  }

  const location = trimmed.slice(1, -1)
  const key = `${inlineCode} (${location})`
  for (let i = sections.length - 1; i >= 0; i--) {
    const intensity = sections[i]!.nameLocationToIntensity.get(key)
    if (intensity !== undefined) {
      return intensity
    }
  }

  return null
}

type TableState = {
  /** Column index of the `%` cell, or -1 if absent. */
  percentColumnIndex: number

  /** Column index of the `Delta` cell in a diff table, or -1 if absent. */
  deltaColumnIndex: number

  /**
   * Column index of the backtick-quoted name cell, or -1 until lazily detected
   * from a data row.
   */
  nameColumnIndex: number

  /** Column index of the `Location` cell, or -1 if absent. */
  locationColumnIndex: number

  /** Diff rows buffered until the table ends. See {@link flushDiffTable}. */
  pendingDiffRows: { lineIndex: number; delta: number }[]
}

const parseTableHeader = (line: string): TableState => {
  const cells = parseTableCells(line)
  return {
    percentColumnIndex: cells.indexOf(`%`),
    deltaColumnIndex: cells.indexOf(`Delta`),
    locationColumnIndex: cells.indexOf(`Location`),
    nameColumnIndex: -1,
    pendingDiffRows: [],
  }
}

const tableRowIntensity = (
  row: string,
  table: TableState,
  headingSection: HeadingSection | undefined,
): number | null => {
  const cells = parseTableCells(row)
  const percentageCell = cells[table.percentColumnIndex]
  if (percentageCell === undefined) {
    return null
  }

  const percentage = parsePercent(percentageCell)
  if (percentage === null) {
    return null
  }

  if (table.locationColumnIndex !== -1 && headingSection !== undefined) {
    if (table.nameColumnIndex === -1) {
      table.nameColumnIndex = cells.findIndex(
        cell => cell.startsWith(`\``) && cell.endsWith(`\``),
      )
    }
    if (table.nameColumnIndex !== -1) {
      const nameCell = cells[table.nameColumnIndex]!
      const locationCell = cells[table.locationColumnIndex]!
      const intensity = (headingSection.intensity ?? 1) * percentage
      headingSection.nameLocationToIntensity.set(
        `${nameCell} (${locationCell})`,
        intensity,
      )
      return intensity
    }
  }

  return (headingSection?.intensity ?? 1) * percentage
}

const diffRowDelta = (row: string, table: TableState): number | null => {
  const cells = parseTableCells(row)
  const deltaCell = cells[table.deltaColumnIndex]
  if (deltaCell === undefined) {
    return null
  }
  return parseDelta(deltaCell)
}

/**
 * Parses a `Delta` cell (e.g. `+33.0ms`, `-1m 5s`, `+1.2 MB`) into a signed
 * magnitude. Units are normalized so magnitudes are comparable within a single
 * table, which only ever mixes units of the same dimension (time or size).
 */
const parseDelta = (cell: string): number | null => {
  let magnitude = 0
  let matched = false
  for (const match of cell.matchAll(DELTA_PART_REGEX)) {
    const scale = DELTA_UNIT_SCALES.get(match.groups!.unit!)
    if (scale === undefined) {
      return null
    }
    magnitude += Number.parseFloat(match.groups!.value!) * scale
    matched = true
  }
  if (!matched) {
    return null
  }
  return cell.trimStart().startsWith(`-`) ? -magnitude : magnitude
}

const DELTA_PART_REGEX = /(?<value>[\d.]+)\s*(?<unit>[A-Za-zµ]+)/gu

const DELTA_UNIT_SCALES: ReadonlyMap<string, number> = new Map([
  [`µs`, 1e-3],
  [`ms`, 1],
  [`s`, 1e3],
  [`m`, 60e3],
  [`h`, 3600e3],
  [`d`, 86_400e3],
  [`B`, 1],
  [`kB`, 1e3],
  [`MB`, 1e6],
  [`GB`, 1e9],
  [`TB`, 1e12],
  [`PB`, 1e15],
])

/**
 * Assigns each buffered diff row a signed intensity equal to its delta
 * relative to the largest absolute delta in the table, so tinting reflects
 * each row's share of the table's churn rather than its raw percent change
 * (which saturates for `new`, `removed`, and changes of 100% or more).
 */
const flushDiffTable = (
  table: TableState,
  lineToIntensity: Map<number, number>,
): void => {
  let maxAbsDelta = 0
  for (const { delta } of table.pendingDiffRows) {
    maxAbsDelta = Math.max(maxAbsDelta, Math.abs(delta))
  }
  if (maxAbsDelta === 0) {
    return
  }

  for (const { lineIndex, delta } of table.pendingDiffRows) {
    if (delta !== 0) {
      lineToIntensity.set(lineIndex, delta / maxAbsDelta)
    }
  }
}

const parseTableCells = (line: string): string[] => {
  let inner = line.trim()
  if (inner.startsWith(`|`)) {
    inner = inner.slice(1)
  }
  if (inner.endsWith(`|`)) {
    inner = inner.slice(0, -1)
  }
  return inner.split(`|`).map(cell => cell.trim())
}

const parsePercent = (cell: string): number | null => {
  const trimmed = cell.trim()
  if (!trimmed.endsWith(`%`)) {
    return null
  }
  const value = Number.parseFloat(trimmed.slice(0, -1))
  return Number.isNaN(value) ? null : value / 100
}

const renderTokens = (
  tokens: ThemedToken[][],
  themeFg: string,
  lineToIntensity: Map<number, number>,
  ansis: Ansis,
): string =>
  tokens
    .map((line, lineIndex) => {
      const intensity = lineToIntensity.get(lineIndex) ?? 0
      return line
        .map(token => renderToken(token, themeFg, intensity, ansis))
        .join(``)
    })
    .join(`\n`)

const renderToken = (
  token: ThemedToken,
  themeFg: string,
  intensity: number,
  ansis: Ansis,
): string => {
  const baseRgb = parseRgb(token.color ?? themeFg)
  // Square root curve that quickly becomes tinted (for noticeable tint even at
  // ~0.15) and then slows down until hitting a max of tint 0.75 for an input
  // of 1 (full red or green is too bright).
  const tint = Math.abs(intensity) ** 0.5 * 0.75
  const { red, green, blue } =
    intensity > 0
      ? tintHeat(baseRgb, tint)
      : intensity < 0
        ? tintCool(baseRgb, tint)
        : baseRgb
  let styled = ansis.rgb(red, green, blue)(token.content)
  if (token.fontStyle) {
    if (token.fontStyle & FONT_STYLE_BOLD) {
      styled = ansis.bold(styled)
    }
    if (token.fontStyle & FONT_STYLE_ITALIC) {
      styled = ansis.italic(styled)
    }
    if (token.fontStyle & FONT_STYLE_UNDERLINE) {
      styled = ansis.underline(styled)
    }
    if (token.fontStyle & FONT_STYLE_STRIKETHROUGH) {
      styled = ansis.strikethrough(styled)
    }
  }
  return styled
}

type Rgb = { red: number; green: number; blue: number }

const parseRgb = (hex: string): Rgb => {
  const value = hex.replace(/^#/u, ``)
  return {
    red: Number.parseInt(value.slice(0, 2), 16),
    green: Number.parseInt(value.slice(2, 4), 16),
    blue: Number.parseInt(value.slice(4, 6), 16),
  }
}

const tintHeat = ({ red, green, blue }: Rgb, intensity: number): Rgb => ({
  red: Math.round(red + (255 - red) * intensity),
  green: Math.round(green * (1 - intensity * 0.7)),
  blue: Math.round(blue * (1 - intensity * 0.7)),
})

const tintCool = ({ red, green, blue }: Rgb, intensity: number): Rgb => ({
  red: Math.round(red * (1 - intensity * 0.7)),
  green: Math.round(green + (255 - green) * intensity),
  blue: Math.round(blue * (1 - intensity * 0.7)),
})

const FONT_STYLE_ITALIC = 1
const FONT_STYLE_BOLD = 2
const FONT_STYLE_UNDERLINE = 4
const FONT_STYLE_STRIKETHROUGH = 8
