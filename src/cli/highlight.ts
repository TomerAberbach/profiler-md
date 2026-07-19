import type { HighlighterCore, ThemedToken } from '@shikijs/core'
import type { Ansis } from 'ansis'
import type { Heading, Table, TableRow } from 'mdast'
import {
  headingNameLocationKey,
  nameLocationKey,
  nodeText,
} from '../helpers/markdown.ts'
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

  const [highlighter, lineToIntensity] = await Promise.all([
    getHighlighter(),
    computeLineToIntensity(markdown),
  ])
  const { tokens, fg } = highlighter.codeToTokens(markdown, {
    lang: `markdown`,
    theme: `kindling`,
  })
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

/**
 * Recovers heat intensities by re-parsing the Markdown (which this tool itself
 * serialized) with the inverse of the serializer, so escaped content (`\|`,
 * variable-length code fences, etc.) decodes back to the original name and
 * location strings and heading ↔ table keys agree by construction.
 *
 * mdast positions are 1-based lines counted over the same `\n` separators as
 * Shiki's token lines, so `position.start.line - 1` is the Shiki line index.
 */
const computeLineToIntensity = async (
  markdown: string,
): Promise<Map<number, number>> => {
  // Load the parser lazily (like Shiki above) so runs that don't highlight
  // (file output, piped stdout, NO_COLOR), which return before this is
  // called, never pay for loading it.
  const [{ fromMarkdown }, { gfmTableFromMarkdown }, { gfmTable }] =
    await Promise.all([
      import(`mdast-util-from-markdown`),
      import(`mdast-util-gfm-table`),
      import(`micromark-extension-gfm-table`),
    ])
  const root = fromMarkdown(markdown, {
    extensions: [gfmTable()],
    mdastExtensions: [gfmTableFromMarkdown()],
  })

  const lineToIntensity = new Map<number, number>()
  const sections: HeadingSection[] = []
  for (const node of root.children) {
    if (node.type === `heading`) {
      visitHeading(node, sections, lineToIntensity)
    } else if (node.type === `table`) {
      // Tables cannot cross heading boundaries, so the innermost section is
      // still current when the table is reached.
      visitTable(node, sections.at(-1), lineToIntensity)
    }
  }

  return lineToIntensity
}

type HeadingSection = {
  /** Heading level (1–6) that opened this scope. */
  level: Heading[`depth`]

  /**
   * Heat intensity inherited by this scope from an ancestor heading lookup, or
   * null at top level.
   */
  intensity: number | null

  /** Maps `name (location)` keys to intensities for child heading lookups. */
  nameLocationToIntensity: Map<string, number>
}

const visitHeading = (
  heading: Heading,
  sections: HeadingSection[],
  lineToIntensity: Map<number, number>,
): void => {
  // Close all heading sections deeper than this current one. e.g. an H3
  // following an H6 closes the prior H6 through H3 headings.
  while (sections.length > 0 && sections.at(-1)!.level >= heading.depth) {
    sections.pop()
  }

  const key = headingNameLocationKey(heading)
  const intensity = key === null ? null : lookupAncestorIntensity(sections, key)
  sections.push({
    level: heading.depth,
    intensity,
    nameLocationToIntensity: new Map(),
  })
  if (intensity !== null) {
    // ATX headings, the only kind the serializer emits, are single-line.
    lineToIntensity.set(heading.position!.start.line - 1, intensity)
  }
}

const lookupAncestorIntensity = (
  sections: HeadingSection[],
  key: string,
): number | null => {
  for (let i = sections.length - 1; i >= 0; i--) {
    const intensity = sections[i]!.nameLocationToIntensity.get(key)
    if (intensity !== undefined) {
      return intensity
    }
  }
  return null
}

const visitTable = (
  table: Table,
  headingSection: HeadingSection | undefined,
  lineToIntensity: Map<number, number>,
): void => {
  const [headerRow, ...dataRows] = table.children
  const headerCells = headerRow!.children.map(nodeText)
  const percentColumnIndex = headerCells.indexOf(`%`)
  const deltaColumnIndex = headerCells.indexOf(`Delta`)
  const locationColumnIndex = headerCells.indexOf(`Location`)

  // A `Delta` column marks a diff table. Diff tables also have a `%` column
  // (with `base% → current%` cells), so check `Delta` first: tinting diff
  // rows by percent would tint improvements red by their base share instead
  // of green by their delta.
  if (deltaColumnIndex !== -1) {
    visitDiffTable(
      dataRows,
      {
        change: headerCells.indexOf(`Change`),
        delta: deltaColumnIndex,
        percent: percentColumnIndex,
      },
      lineToIntensity,
    )
  } else if (percentColumnIndex !== -1) {
    // Column index of the backtick-quoted name cell, lazily detected from the
    // first data row that has one.
    let nameColumnIndex = -1

    for (const row of dataRows) {
      const cells = row.children
      const percentageCell = cells[percentColumnIndex]
      if (percentageCell === undefined) {
        continue
      }
      const percentage = parsePercent(nodeText(percentageCell))
      if (percentage === null) {
        continue
      }

      const intensity = (headingSection?.intensity ?? 1) * percentage
      if (locationColumnIndex !== -1 && headingSection !== undefined) {
        if (nameColumnIndex === -1) {
          nameColumnIndex = cells.findIndex(
            cell =>
              cell.children.length === 1 &&
              cell.children[0]!.type === `inlineCode`,
          )
        }
        const nameCell = cells[nameColumnIndex]
        const locationCell = cells[locationColumnIndex]
        if (nameCell !== undefined && locationCell !== undefined) {
          headingSection.nameLocationToIntensity.set(
            nameLocationKey(nodeText(nameCell), nodeText(locationCell)),
            intensity,
          )
        }
      }
      lineToIntensity.set(row.position!.start.line - 1, intensity)
    }
  }
}

type DiffColumnIndexes = {
  change: number
  delta: number
  percent: number
}

/**
 * Tints each diff row by its delta's share of the profile total, the same
 * absolute scale non-diff tables get from their `%` column, so a row's tint is
 * proportional to how much of the profile its change moved.
 *
 * The total isn't printed, but each row implies it: `Change` is
 * `delta ÷ base value` and `%` holds the base and current shares of their
 * totals, so `|delta ÷ Change| ÷ base%` recovers the base total (for `new` and
 * `removed` rows the delta itself is the changed side's whole value). The
 * estimate divides by rounded percentages, so take it from the row with the
 * largest share, where rounding error is proportionally smallest.
 */
const visitDiffTable = (
  dataRows: Table[`children`],
  columnIndexes: DiffColumnIndexes,
  lineToIntensity: Map<number, number>,
): void => {
  const pendingDiffRows: PendingDiffRow[] = []
  let bestCandidate: TotalCandidate | null = null
  for (const row of dataRows) {
    const diffRow = parseDiffRow(row, columnIndexes)
    if (diffRow === null) {
      continue
    }
    if (diffRow.delta !== 0) {
      pendingDiffRows.push({
        lineIndex: diffRow.lineIndex,
        delta: diffRow.delta,
      })
    }
    if (
      diffRow.candidate !== null &&
      diffRow.candidate.percent > (bestCandidate?.percent ?? 0)
    ) {
      bestCandidate = diffRow.candidate
    }
  }
  if (bestCandidate === null) {
    return
  }

  const total = bestCandidate.value / bestCandidate.percent
  for (const { lineIndex, delta } of pendingDiffRows) {
    lineToIntensity.set(lineIndex, Math.max(-1, Math.min(1, delta / total)))
  }
}

type PendingDiffRow = { lineIndex: number; delta: number }

/**
 * Reads one diff row's cells into its line index, parsed delta, and
 * total-estimate candidate, or null when a required cell is missing or the
 * delta is unparsable.
 */
const parseDiffRow = (
  row: TableRow,
  columnIndexes: DiffColumnIndexes,
): {
  lineIndex: number
  delta: number
  candidate: TotalCandidate | null
} | null => {
  const changeCell = row.children[columnIndexes.change]
  const deltaCell = row.children[columnIndexes.delta]
  const percentCell = row.children[columnIndexes.percent]
  if (
    changeCell === undefined ||
    deltaCell === undefined ||
    percentCell === undefined
  ) {
    return null
  }
  const delta = parseDelta(nodeText(deltaCell))
  if (delta === null) {
    return null
  }
  return {
    lineIndex: row.position!.start.line - 1,
    delta,
    candidate: totalCandidate(
      nodeText(changeCell),
      delta,
      nodeText(percentCell),
    ),
  }
}

type TotalCandidate = { percent: number; value: number }

/**
 * Derives a (share of total, value) pair from one diff row for estimating the
 * profile total as `value ÷ percent`, or null when the row implies no usable
 * share (unchanged rows, zero or unparsable percentages).
 */
const totalCandidate = (
  changeCell: string,
  delta: number,
  percentCell: string,
): TotalCandidate | null => {
  const [basePercent, currentPercent] = parsePercentSides(percentCell)
  const change = changeCell.trim()
  if (change === `new`) {
    return currentPercent
      ? { percent: currentPercent, value: Math.abs(delta) }
      : null
  }
  if (change === `removed`) {
    return basePercent ? { percent: basePercent, value: Math.abs(delta) } : null
  }

  const changeFraction = parsePercent(change)
  if (!changeFraction || !basePercent) {
    return null
  }
  return { percent: basePercent, value: Math.abs(delta / changeFraction) }
}

/**
 * Parses a `%` cell into `[base, current]` shares. A diff cell holds
 * `base% → current%`, collapsing to a single value when both sides format
 * identically. Either side may be unparsable (e.g. `<0.1%`), yielding null.
 */
const parsePercentSides = (
  cell: string,
): [base: number | null, current: number | null] => {
  const arrowIndex = cell.indexOf(`→`)
  if (arrowIndex === -1) {
    const percent = parsePercent(cell)
    return [percent, percent]
  }
  return [
    parsePercent(cell.slice(0, arrowIndex)),
    parsePercent(cell.slice(arrowIndex + 1)),
  ]
}

/**
 * Parses a `Delta` cell (e.g. `+33.0ms`, `-1m 5s`, `+1.2 MiB`, or a unitless
 * sample count like `+1,384`) into a signed magnitude. Units are normalized so
 * magnitudes are comparable within a single table, which only ever mixes units
 * of the same dimension (time or size).
 */
const parseDelta = (cell: string): number | null => {
  const normalized = cell.replaceAll(`,`, ``)
  let magnitude = 0
  let matched = false
  for (const match of normalized.matchAll(DELTA_PART_REGEX)) {
    const scale = DELTA_UNIT_SCALES.get(match.groups!.unit!)
    if (scale === undefined) {
      return null
    }
    magnitude += Number.parseFloat(match.groups!.value!) * scale
    matched = true
  }
  if (!matched) {
    const trimmed = normalized.trim()
    const value = UNITLESS_DELTA_REGEX.test(trimmed)
      ? Number.parseFloat(trimmed)
      : Number.NaN
    if (Number.isNaN(value)) {
      return null
    }
    magnitude = Math.abs(value)
  }
  return cell.trimStart().startsWith(`-`) ? -magnitude : magnitude
}

const DELTA_PART_REGEX = /(?<value>[\d.]+)\s*(?<unit>[A-Za-zµ]+)/gu

const UNITLESS_DELTA_REGEX = /^[+-]?[\d.]+$/u

const DELTA_UNIT_SCALES: ReadonlyMap<string, number> = new Map([
  [`µs`, 1e-3],
  [`ms`, 1],
  [`s`, 1e3],
  [`m`, 60e3],
  [`h`, 3600e3],
  [`d`, 86_400e3],
  [`B`, 1],
  [`KiB`, 2 ** 10],
  [`MiB`, 2 ** 20],
  [`GiB`, 2 ** 30],
  [`TiB`, 2 ** 40],
  [`PiB`, 2 ** 50],
])

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
