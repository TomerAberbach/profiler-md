import type {
  HighlighterCore,
  LanguageRegistration,
  ThemedToken,
} from '@shikijs/core'
import type { Ansis } from 'ansis'
import type { Heading, Parent, Root, RootContent, Table, TableRow } from 'mdast'
import { parseRgb } from '../helpers/color.ts'
import type { Rgb } from '../helpers/color.ts'
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

  const [shiki, root] = await Promise.all([
    loadShiki(),
    parseMarkdown(markdown),
  ])
  const highlighter = getHighlighter(fenceLanguagesOf(root), shiki)
  const lineToIntensity = computeLineToIntensity(root)
  const { tokens, fg } = (await highlighter).codeToTokens(markdown, {
    lang: `markdown`,
    theme: `kindling`,
  })
  return renderTokens(tokens, fg!, lineToIntensity, ansis)
}

/**
 * Parses Markdown that profiler-md itself serialized with the inverse of the
 * serializer, so escaped content (`\|`, variable-length code fences, etc.)
 * decodes back to the original strings.
 */
const parseMarkdown = async (markdown: string): Promise<Root> => {
  // Load the parser lazily so runs that don't highlight (file output, piped
  // stdout, NO_COLOR) never pay for loading it
  const [{ fromMarkdown }, { gfmTableFromMarkdown }, { gfmTable }] =
    await Promise.all([
      import(`mdast-util-from-markdown`),
      import(`mdast-util-gfm-table`),
      import(`micromark-extension-gfm-table`),
    ])
  return fromMarkdown(markdown, {
    extensions: [gfmTable()],
    mdastExtensions: [gfmTableFromMarkdown()],
  })
}

/**
 * A highlighter for the Markdown parsed into {@link root}, with the `kindling`
 * theme and the grammar of each code fence language in it that
 * {@link FENCE_LANGUAGES} lists. A fence in another language is highlighted as
 * plain code.
 */
export const getMarkdownHighlighter = async (
  root: Root,
): Promise<HighlighterCore> =>
  getHighlighter(fenceLanguagesOf(root), await loadShiki())

const getHighlighter = (
  fenceLanguages: readonly string[],
  shiki: Shiki,
): Promise<HighlighterCore> => {
  const key = fenceLanguages.join(` `)
  let highlighter = languagesToHighlighter.get(key)
  if (highlighter === undefined) {
    highlighter = createHighlighterCore(fenceLanguages, shiki)
    languagesToHighlighter.set(key, highlighter)
  }
  return highlighter
}

/**
 * Highlighters keyed by their sorted fence languages. A highlighter is never
 * extended with a language after it is created, because the Markdown grammar's
 * fence rules are fixed when it loads.
 */
const languagesToHighlighter = new Map<string, Promise<HighlighterCore>>()

/** The sorted languages of {@link root}'s code fences that have a grammar. */
const fenceLanguagesOf = (root: Root): string[] => {
  const languages = new Set<string>()
  const visit = (node: RootContent | Root): void => {
    if (node.type === `code`) {
      if (node.lang && FENCE_LANGUAGES.has(node.lang)) {
        languages.add(node.lang)
      }
    } else if (FENCE_CONTAINER_TYPES.has(node.type)) {
      for (const child of (node as Parent).children) {
        visit(child)
      }
    }
  }
  visit(root)
  return [...languages].sort()
}

/** The node types that can contain a code fence. */
const FENCE_CONTAINER_TYPES: ReadonlySet<string> = new Set([
  `root`,
  `blockquote`,
  `list`,
  `listItem`,
])

/**
 * Loads the modules every highlighter requires, so the load can start before
 * the fence languages are known.
 */
const loadShiki = (): ReturnType<typeof importShiki> =>
  (shikiPromise ??= importShiki())

let shikiPromise: ReturnType<typeof importShiki> | null = null

const importShiki = async () => {
  const [shikiCore, onigurumaEngine, onigurumaEngineWasm, markdown] =
    await Promise.all([
      import(`@shikijs/core`),
      import(`@shikijs/engine-oniguruma`),
      import(`@shikijs/engine-oniguruma/wasm-inlined`),
      import(`@shikijs/langs/markdown`),
    ])
  return { shikiCore, onigurumaEngine, onigurumaEngineWasm, markdown }
}

type Shiki = Awaited<ReturnType<typeof importShiki>>

const createHighlighterCore = async (
  fenceLanguages: readonly string[],
  { shikiCore, onigurumaEngine, onigurumaEngineWasm, markdown }: Shiki,
): Promise<HighlighterCore> => {
  const grammars = await Promise.all(
    fenceLanguages.map(language => FENCE_LANGUAGES.get(language)!()),
  )
  const fenceRules = fenceLanguages.map((language, i) =>
    // A grammar module lists its own grammar after the grammars it embeds.
    fenceRule(language, grammars[i]!.default.at(-1)!.scopeName),
  )
  return shikiCore.createHighlighterCore({
    langs: [
      withFenceRules(markdown.default[0]!, fenceRules),
      // A grammar that embeds Markdown (e.g. Erlang's, for doc comments)
      // includes its own copy, which would replace the one with the fence
      // rules.
      ...grammars.flatMap(({ default: grammar }) =>
        grammar.filter(({ scopeName }) => scopeName !== MARKDOWN_SCOPE_NAME),
      ),
    ],
    themes: [kindlingTheme],
    engine: onigurumaEngine.createOnigurumaEngine(onigurumaEngineWasm),
    // Shiki warns past 10 instances to catch a highlighter created per call,
    // but there is one per set of fence languages.
    warnings: false,
  })
}

const MARKDOWN_SCOPE_NAME = `text.html.markdown`

/**
 * The grammar of each code fence language the docs use, keyed as a fence
 * writes the language.
 */
const FENCE_LANGUAGES: ReadonlyMap<
  string,
  () => Promise<{ default: LanguageRegistration[] }>
> = new Map([
  [`c`, () => import(`@shikijs/langs/c`)],
  [`elixir`, () => import(`@shikijs/langs/elixir`)],
  [`erlang`, () => import(`@shikijs/langs/erlang`)],
  [`fortran`, () => import(`@shikijs/langs/fortran-free-form`)],
  [`go`, () => import(`@shikijs/langs/go`)],
  [`java`, () => import(`@shikijs/langs/java`)],
  [`js`, () => import(`@shikijs/langs/js`)],
  [`julia`, () => import(`@shikijs/langs/julia`)],
  [`php`, () => import(`@shikijs/langs/php`)],
  [`rust`, () => import(`@shikijs/langs/rust`)],
  [`sh`, () => import(`@shikijs/langs/sh`)],
  [`swift`, () => import(`@shikijs/langs/swift`)],
  [`toml`, () => import(`@shikijs/langs/toml`)],
  [`zig`, () => import(`@shikijs/langs/zig`)],
])

/**
 * A copy of the Markdown grammar {@link markdown} that tries
 * {@link fenceRules} before its own fence rules, which cover only some
 * languages.
 *
 * Shiki can also inject a rule into a grammar, but it discards the Markdown
 * grammar's injections when it reloads that grammar for a lazily embedded
 * language.
 */
const withFenceRules = (
  markdown: LanguageRegistration,
  fenceRules: readonly GrammarRule[],
): LanguageRegistration => {
  const repository = { ...markdown.repository }
  repository.fenced_code_block = {
    patterns: [...fenceRules, ...repository.fenced_code_block!.patterns!],
  }
  return { ...markdown, repository }
}

type GrammarRule = LanguageRegistration[`repository`][string]

/**
 * A fence rule for {@link language} embedding {@link scopeName}, written like
 * the Markdown grammar's own fence rules.
 */
const fenceRule = (language: string, scopeName: string): GrammarRule => ({
  begin: `(^|\\G)(\\s*)(\`{3,}|~{3,})\\s*(?i:(${language})((\\s+|[,:?{])[^\`]*)?$)`,
  beginCaptures: {
    3: { name: `punctuation.definition.markdown` },
    4: { name: `fenced_code.block.language.markdown` },
    5: { name: `fenced_code.block.language.attributes.markdown` },
  },
  end: String.raw`(^|\G)(\2|\s{0,3})(\3)\s*$`,
  endCaptures: { 3: { name: `punctuation.definition.markdown` } },
  name: `markup.fenced_code.block.markdown`,
  patterns: [
    {
      begin: String.raw`(^|\G)(\s*)(.*)`,
      contentName: `meta.embedded.block.${language}`,
      patterns: [{ include: scopeName }],
      while: `(^|\\G)(?!\\s*([\`~]{3,})\\s*$)`,
    },
  ],
})

/**
 * Recovers heat intensities from the parsed Markdown, whose escaped content
 * decodes back to the original name and location strings, so heading ↔ table
 * keys agree by construction.
 */
const computeLineToIntensity = (root: Root): Map<number, number> => {
  const lineToIntensity = new Map<number, number>()
  const sections: HeadingSection[] = []
  const unranked: UnrankedDiffRows = { rows: [], increaseSign: null }
  for (const node of root.children) {
    if (node.type === `heading`) {
      visitHeading(node, sections, unranked, lineToIntensity)
    } else if (node.type === `table`) {
      // Tables cannot cross heading boundaries, so the innermost section is
      // still current when the table is reached.
      visitTable(node, sections, unranked, lineToIntensity)
    }
  }
  tintHeldRows(unranked, lineToIntensity)

  return lineToIntensity
}

type HeadingSection = {
  level: Heading[`depth`]

  /**
   * The intensity of the ancestor table row naming this heading's function, or
   * null where none names it.
   */
  intensity: number | null

  /** Whether the heading names a function, as a breakdown's heading does. */
  isFunction: boolean

  /**
   * The total the diff tables in this scope imply for their profile section,
   * or null where none has. A table under a function heading breaks down that
   * function's value, so it implies none.
   */
  profileTotal: number | null

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

/**
 * The diff rows no ranking heading covers, which is every summary table, held
 * until the profile section's rankings state what an increase in it is. A
 * summary table precedes the rankings measuring the same thing, so its rows are
 * tinted once those rankings are reached.
 */
type UnrankedDiffRows = {
  rows: RelativeDiffRow[]

  /** The regression sign of an increase, null until a ranking states it. */
  increaseSign: RegressionSign | null
}

/**
 * What a diff row's change is: `1` where it is a regression, `-1` where it is
 * an improvement, and `0` where its metric's improvement direction is unknown,
 * so the ranking covering it calls it neither.
 */
type RegressionSign = 1 | -1 | 0

/**
 * One diff row's line and its delta as a share of the profile section's total.
 */
type RelativeDiffRow = { lineIndex: number; relativeDelta: number }

const visitHeading = (
  heading: Heading,
  sections: HeadingSection[],
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  closeDeeperSections(sections, heading.depth)

  const rankingSign = RANKING_REGRESSION_SIGNS.get(nodeText(heading))
  if (heading.depth === PROFILE_HEADING_DEPTH) {
    // Each profile section's rankings state what an increase is in its own
    // metric, so the rows held for the profile section above take what its
    // rankings stated.
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
    isFunction: key !== null,
    profileTotal: null,
    nameLocationToIntensity: new Map(),
    regressionSign: rankingSign ?? sections.at(-1)?.regressionSign ?? null,
  })
  if (intensity !== null) {
    // ATX headings, the only kind the serializer emits, are single-line.
    lineToIntensity.set(shikiLineIndex(heading), intensity)
  }
}

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

/** The heading level opening one profile section of the output. */
const PROFILE_HEADING_DEPTH = 1

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
  sections: HeadingSection[],
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  const headingSection = sections.at(-1)
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
      sections,
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

type DiffColumnIndexes = {
  change: number
  delta: number
  percent: number
}

/**
 * Tints each diff row by its delta's share of the profile section's total, the
 * same absolute scale non-diff tables get from their `%` column, so a row's
 * tint is proportional to how much of the profile section its change moved.
 *
 * A row is tinted red where its change is a regression and green where it is an
 * improvement, which {@link HeadingSection.regressionSign} states for the rows
 * a ranking heading covers. Where a ranking calls a change neither, the rows
 * stay untinted. Rows no ranking covers are held until a ranking states what an
 * increase is, which its own rows reveal: the delta sign a `Regressions`
 * heading covers is the sign a regression has throughout the profile section.
 */
const visitDiffTable = (
  dataRows: Table[`children`],
  columnIndexes: DiffColumnIndexes,
  sections: HeadingSection[],
  unranked: UnrankedDiffRows,
  lineToIntensity: Map<number, number>,
): void => {
  const diffRows = dataRows.flatMap(
    row => parseDiffRow(row, columnIndexes) ?? [],
  )
  const total = profileTotalOf(diffRows, sections)
  const regressionSign = sections.at(-1)?.regressionSign ?? null
  if (regressionSign === 0 || total === null) {
    return
  }

  const rows = diffRows.flatMap(({ lineIndex, delta }) =>
    delta === 0 ? [] : { lineIndex, relativeDelta: delta / total },
  )
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

/**
 * What an increase is in a profile section whose rankings have no rows to
 * state one with. A profiler records what a program consumed, so an increase
 * is a regression.
 */
const DEFAULT_INCREASE_SIGN: RegressionSign = 1

const setIntensity = (
  lineToIntensity: Map<number, number>,
  lineIndex: number,
  intensity: number,
): void => {
  lineToIntensity.set(lineIndex, Math.max(-1, Math.min(1, intensity)))
}

type DiffRow = {
  lineIndex: number
  delta: number
  candidate: TotalCandidate | null
}

const parseDiffRow = (
  row: TableRow,
  columnIndexes: DiffColumnIndexes,
): DiffRow | null => {
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
    lineIndex: shikiLineIndex(row),
    delta,
    candidate: totalCandidate(
      nodeText(changeCell),
      delta,
      nodeText(percentCell),
    ),
  }
}

/**
 * Parses a `Delta` cell (e.g. `+33.0ms`, `-1m 5s`, `+1.2 MiB`, or a unitless
 * count like `+1,384`) into a signed magnitude. Units are normalized so
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

const UNITLESS_DELTA_REGEX = /^[+-]?[\d.]+$/u

/**
 * The profile section's total to measure a diff table's deltas against, or
 * null where none is known.
 *
 * The total isn't printed, but each row implies it: `Change` is
 * `delta ÷ base value` and `%` holds the base and current shares of their
 * totals, so `|delta ÷ Change| ÷ base%` recovers the base total (for `new` and
 * `removed` rows the delta itself is the changed side's whole value). The
 * estimate divides by rounded percentages, so take it from the row with the
 * largest share, where rounding error is proportionally smallest.
 *
 * Every table of a profile section's rankings implies one total, which this
 * records on the table's section and each enclosing section that has none. A
 * table under a function heading breaks down that function's value, so its `%`
 * column holds shares of the function: it takes the nearest section's total,
 * and implies its own only where no section has one.
 */
const profileTotalOf = (
  diffRows: readonly DiffRow[],
  sections: HeadingSection[],
): number | null => {
  if (sections.at(-1)?.isFunction) {
    const recorded = sections.findLast(
      section => section.profileTotal !== null,
    )?.profileTotal
    return recorded ?? impliedTotal(diffRows)
  }

  const total = impliedTotal(diffRows)
  if (total !== null) {
    for (const section of sections) {
      section.profileTotal ??= total
    }
  }
  return total
}

const impliedTotal = (diffRows: readonly DiffRow[]): number | null => {
  let bestCandidate: TotalCandidate | null = null
  for (const { candidate } of diffRows) {
    if (
      candidate !== null &&
      candidate.percent > (bestCandidate?.percent ?? 0)
    ) {
      bestCandidate = candidate
    }
  }
  return bestCandidate === null
    ? null
    : bestCandidate.value / bestCandidate.percent
}

type TotalCandidate = { percent: number; value: number }

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
  return !changeFraction || !basePercent
    ? null
    : { percent: basePercent, value: Math.abs(delta / changeFraction) }
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

type PercentColumnIndexes = {
  percent: number
  location: number
}

/**
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
    lineToIntensity.set(shikiLineIndex(row), intensity)
  }
}

/**
 * Mdast positions are 1-based lines counted over the same `\n` separators as
 * Shiki's token lines.
 */
const shikiLineIndex = (node: Heading | TableRow): number =>
  node.position!.start.line - 1

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
  }
  return styled
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
