import type { HighlighterCore, ThemedToken } from '@shikijs/core'
import type { Ansis } from 'ansis'
import type { Heading, Table, TableRow } from 'mdast'
import {
  headingNameLocationKey,
  nameLocationKey,
  nodeText,
} from '../helpers/markdown.ts'
import { makeAnsis } from './ansis.ts'
import { isTTYOutput } from './output.ts'
import kindlingTheme from './theme-kindling.ts'

export type HighlightMarkdownOptions = {
  outputPath: string
}

export const highlightMarkdown = async (
  markdown: string,
  { outputPath }: HighlightMarkdownOptions,
): Promise<string> => {
  const ansis = makeAnsis({ isTTY: isTTYOutput(outputPath) })
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
  const unranked: UnrankedDiffRows = { rows: [], increaseSign: null }
  for (const node of root.children) {
    if (node.type === `heading`) {
      visitHeading(node, sections, unranked, lineToIntensity)
    } else if (node.type === `table`) {
      // Tables cannot cross heading boundaries, so the innermost section is
      // still current when the table is reached.
      visitTable(node, sections.at(-1), unranked, lineToIntensity)
    }
  }
  tintHeldRows(unranked, lineToIntensity)

  return lineToIntensity
}

/**
 * What a diff row's change is: `1` where it is a regression, `-1` where it is
 * an improvement, and `0` where its metric's improvement direction is unknown,
 * so the ranking covering it calls it neither.
 */
type RegressionSign = 1 | -1 | 0

/**
 * The regression sign each ranking heading a diff emits states about the rows
 * under it, whatever the sign of their deltas.
 */
const RANKING_REGRESSION_SIGNS: ReadonlyMap<string, RegressionSign> = new Map([
  [`Regressions`, 1],
  [`Improvements`, -1],
  [`Increases`, 0],
  [`Decreases`, 0],
])

/**
 * What an increase is in a profile whose rankings state nothing about one,
 * which happens when no ranking has rows to state it with. A profiler records
 * what a program consumed, so an increase is a regression.
 */
const DEFAULT_INCREASE_SIGN: RegressionSign = 1

/**
 * The diff rows no ranking heading covers, which is every summary table, held
 * until the profile's rankings state what an increase in it is. A summary table
 * precedes the rankings measuring the same thing, so its rows are tinted once
 * those rankings are reached.
 */
type UnrankedDiffRows = {
  rows: RelativeDiffRow[]

  /** The regression sign of an increase, null until a ranking states it. */
  increaseSign: RegressionSign | null
}

/** One diff row's line and its delta as a share of the profile total. */
type RelativeDiffRow = { lineIndex: number; relativeDelta: number }

/**
 * Holds {@link rows} until a ranking states what an increase is, or tints them
 * where one already has.
 */
const holdRows = (
  unranked: UnrankedDiffRows,
  rows: RelativeDiffRow[],
  lineToIntensity: Map<number, number>,
): void => {
  unranked.rows.push(...rows)
  if (unranked.increaseSign !== null) {
    tintHeldRows(unranked, lineToIntensity)
  }
}

/**
 * Records what a ranking states an increase is, tinting the rows held for it. A
 * ranking with no row to state it passes null, leaving the held rows for a
 * later one.
 */
const stateIncreaseSign = (
  unranked: UnrankedDiffRows,
  increaseSign: RegressionSign | null,
  lineToIntensity: Map<number, number>,
): void => {
  if (increaseSign === null) {
    return
  }
  unranked.increaseSign = increaseSign
  tintHeldRows(unranked, lineToIntensity)
}

/**
 * Tints the held rows by what the profile's rankings stated an increase is, or
 * by the sign of their deltas where the rankings stated nothing.
 */
const tintHeldRows = (
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  const increaseSign = unranked.increaseSign ?? DEFAULT_INCREASE_SIGN
  if (increaseSign !== 0) {
    for (const { lineIndex, relativeDelta } of unranked.rows) {
      setIntensity(lineToIntensity, lineIndex, increaseSign * relativeDelta)
    }
  }
  unranked.rows.length = 0
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
  nameLocationToIntensity: Map<string, NameIntensity>

  /**
   * The regression sign of this scope's diff rows, from the nearest ranking
   * heading at or above it, or null where no ranking heading covers them.
   */
  regressionSign: RegressionSign | null
}

/**
 * An intensity registered for a `name (location)` key, with the heading level
 * of the section whose table registered it.
 */
type NameIntensity = {
  intensity: number
  registeredLevel: Heading[`depth`]
}

const visitHeading = (
  heading: Heading,
  sections: HeadingSection[],
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  closeDeeperSections(sections, heading.depth)

  const rankingSign = RANKING_REGRESSION_SIGNS.get(nodeText(heading))
  if (heading.depth === PROFILE_HEADING_DEPTH) {
    // Each profile's rankings state what an increase is in its own metric, so
    // the rows held for the profile above take what its rankings stated.
    tintHeldRows(unranked, lineToIntensity)
    unranked.increaseSign = null
  } else if (rankingSign === 0) {
    // A ranking naming the change itself states that the metric's improvement
    // direction is unknown, whatever rows it covers.
    stateIncreaseSign(unranked, 0, lineToIntensity)
  }

  const key = headingNameLocationKey(heading)
  const intensity = key === null ? null : lookupAncestorIntensity(sections, key)
  sections.push({
    level: heading.depth,
    intensity,
    nameLocationToIntensity: new Map(),
    regressionSign: rankingSign ?? sections.at(-1)?.regressionSign ?? null,
  })
  if (intensity !== null) {
    // ATX headings, the only kind the serializer emits, are single-line.
    lineToIntensity.set(heading.position!.start.line - 1, intensity)
  }
}

/** The heading level opening one profile's section of the output. */
const PROFILE_HEADING_DEPTH = 1

/**
 * Closes the heading sections at or deeper than {@link depth}. e.g. an H3
 * following an H6 closes the prior H6 through H3 headings.
 */
const closeDeeperSections = (
  sections: HeadingSection[],
  depth: Heading[`depth`],
): void => {
  while (sections.length > 0 && sections.at(-1)!.level >= depth) {
    inheritClosedNames(sections.pop()!, sections.at(-1))
  }
}

/**
 * Passes a closed section's names up to its {@link parent}, where they stay
 * available to the parent's later children, which cover the same entries: a
 * function reaching the output through a category subsection is broken down
 * under the sibling sections that follow it. A name the parent registered
 * itself is the more local one, so it takes precedence.
 *
 * A name stops at {@link MAX_INHERITED_LEVELS} above the section that
 * registered it, which is as far as the sibling sections covering the same
 * entries reach. Beyond that an intensity would apply under a heading measuring
 * a different total, e.g. a retained-heap section inheriting allocated-heap
 * intensities.
 */
const inheritClosedNames = (
  closed: HeadingSection,
  parent: HeadingSection | undefined,
): void => {
  if (!parent) {
    return
  }
  for (const [key, name] of closed.nameLocationToIntensity) {
    if (
      name.registeredLevel - parent.level <= MAX_INHERITED_LEVELS &&
      !parent.nameLocationToIntensity.has(key)
    ) {
      parent.nameLocationToIntensity.set(key, name)
    }
  }
}

/**
 * A category subsection's table is two levels below the section holding the
 * breakdown sections that follow it (`Categories` groups the subsections, and
 * the breakdowns are its siblings).
 */
const MAX_INHERITED_LEVELS = 2

const lookupAncestorIntensity = (
  sections: HeadingSection[],
  key: string,
): number | null => {
  for (let i = sections.length - 1; i >= 0; i--) {
    const name = sections[i]!.nameLocationToIntensity.get(key)
    if (name !== undefined) {
      return name.intensity
    }
  }
  return null
}

const visitTable = (
  table: Table,
  headingSection: HeadingSection | undefined,
  unranked: UnrankedDiffRows,
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
      headingSection?.regressionSign ?? null,
      unranked,
      lineToIntensity,
    )
  } else if (percentColumnIndex !== -1) {
    visitPercentTable(
      dataRows,
      { percent: percentColumnIndex, location: locationColumnIndex },
      headingSection,
      lineToIntensity,
    )
  }
}

type PercentColumnIndexes = {
  percent: number
  location: number
}

/**
 * Tints each row by its `%` cell, scaled by the intensity its heading section
 * inherited, so a row's tint is proportional to its share of the profile.
 *
 * A row naming a function registers its intensity under the section's
 * `name (location)` key, from which a later heading for that function takes its
 * own tint.
 */
const visitPercentTable = (
  dataRows: Table[`children`],
  columnIndexes: PercentColumnIndexes,
  headingSection: HeadingSection | undefined,
  lineToIntensity: Map<number, number>,
): void => {
  // Column index of the backtick-quoted name cell, lazily detected from the
  // first data row that has one.
  let nameColumnIndex = -1

  for (const row of dataRows) {
    const cells = row.children
    const percentageCell = cells[columnIndexes.percent]
    if (percentageCell === undefined) {
      continue
    }
    const percentage = parsePercent(nodeText(percentageCell))
    if (percentage === null) {
      continue
    }

    const intensity = (headingSection?.intensity ?? 1) * percentage
    if (columnIndexes.location !== -1 && headingSection !== undefined) {
      if (nameColumnIndex === -1) {
        nameColumnIndex = cells.findIndex(
          cell =>
            cell.children.length === 1 &&
            cell.children[0]!.type === `inlineCode`,
        )
      }
      const nameCell = cells[nameColumnIndex]
      const locationCell = cells[columnIndexes.location]
      if (nameCell !== undefined && locationCell !== undefined) {
        headingSection.nameLocationToIntensity.set(
          nameLocationKey(nodeText(nameCell), nodeText(locationCell)),
          { intensity, registeredLevel: headingSection.level },
        )
      }
    }
    lineToIntensity.set(row.position!.start.line - 1, intensity)
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
 * A row is tinted red where its change is a regression and green where it is an
 * improvement, which {@link regressionSign} states for the rows a ranking
 * heading covers. Where a ranking calls a change neither, the rows stay
 * untinted. Rows no ranking covers are held until a ranking states what an
 * increase is, which its own rows reveal: the delta sign a `Regressions`
 * heading covers is the sign a regression has throughout the profile.
 */
const visitDiffTable = (
  dataRows: Table[`children`],
  columnIndexes: DiffColumnIndexes,
  regressionSign: RegressionSign | null,
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  if (regressionSign === 0) {
    return
  }

  const rows = relativeDiffRows(dataRows, columnIndexes)
  if (regressionSign === null) {
    holdRows(unranked, rows, lineToIntensity)
    return
  }

  stateIncreaseSign(
    unranked,
    statedIncreaseSign(rows, regressionSign),
    lineToIntensity,
  )
  for (const { lineIndex, relativeDelta } of rows) {
    setIntensity(
      lineToIntensity,
      lineIndex,
      regressionSign * Math.abs(relativeDelta),
    )
  }
}

/**
 * What a ranking's rows state an increase is: a regression where the ranking
 * calls a positive delta one, or null where the ranking has no changed row to
 * state it with.
 */
const statedIncreaseSign = (
  rows: readonly RelativeDiffRow[],
  regressionSign: 1 | -1,
): RegressionSign | null => {
  const row = rows.find(({ relativeDelta }) => relativeDelta !== 0)
  return row === undefined
    ? null
    : ((regressionSign * Math.sign(row.relativeDelta)) as RegressionSign)
}

const setIntensity = (
  lineToIntensity: Map<number, number>,
  lineIndex: number,
  intensity: number,
): void => {
  lineToIntensity.set(lineIndex, Math.max(-1, Math.min(1, intensity)))
}

/**
 * Reads a diff table's changed rows into their line indexes and their deltas as
 * shares of the profile total, or an empty array where no row implies a total.
 *
 * The total isn't printed, but each row implies it: `Change` is
 * `delta ÷ base value` and `%` holds the base and current shares of their
 * totals, so `|delta ÷ Change| ÷ base%` recovers the base total (for `new` and
 * `removed` rows the delta itself is the changed side's whole value). The
 * estimate divides by rounded percentages, so take it from the row with the
 * largest share, where rounding error is proportionally smallest.
 */
const relativeDiffRows = (
  dataRows: Table[`children`],
  columnIndexes: DiffColumnIndexes,
): RelativeDiffRow[] => {
  const changedRows: { lineIndex: number; delta: number }[] = []
  let bestCandidate: TotalCandidate | null = null
  for (const row of dataRows) {
    const diffRow = parseDiffRow(row, columnIndexes)
    if (diffRow === null) {
      continue
    }
    if (diffRow.delta !== 0) {
      changedRows.push({ lineIndex: diffRow.lineIndex, delta: diffRow.delta })
    }
    if (
      diffRow.candidate !== null &&
      diffRow.candidate.percent > (bestCandidate?.percent ?? 0)
    ) {
      bestCandidate = diffRow.candidate
    }
  }
  if (bestCandidate === null) {
    return []
  }

  const total = bestCandidate.value / bestCandidate.percent
  return changedRows.map(({ lineIndex, delta }) => ({
    lineIndex,
    relativeDelta: delta / total,
  }))
}

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
