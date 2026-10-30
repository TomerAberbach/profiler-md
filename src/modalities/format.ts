import type { Heading, PhrasingContent, RootContent } from 'mdast'
import {
  capitalizeFirst,
  formatConjunction,
  formatPercent,
} from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  nameLocationPhrasing,
  paragraph,
  phrasing,
} from '../helpers/markdown.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { absoluteURLPath, formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import { defaultShowEntry } from '../options.ts'
import type {
  AggregatedProfileEntry,
  FormattingProfileToMdOptions,
} from '../options.ts'
import type { Diff, DiffSides } from './diff.ts'
import type { Metric, MetricImprovement } from './metric.ts'
import type { EntryCategory } from './registry.ts'
import { formatDiffTable } from './table.ts'
import type { Table } from './table.ts'

/** The document title for an input with the given metrics. */
export const formatTitle = (metrics: Metric[]): string =>
  capitalizeFirst(
    `${formatConjunction(metrics.map(metric => metric.phrases.titleNoun))} profile`,
  )

/**
 * A paragraph stating the base URL, so a reader can resolve a path shown
 * relative to it. A diff whose sides have their own base URLs states each.
 *
 * A relative path the profiler wrote is shown as written, and keeps a leading
 * `../`, so the note misstates its base. No committed input contains one.
 */
export const formatBaseURLNote = ({
  baseURL,
  baseSideBaseURL,
}: FormattingProfileToMdOptions): RootContent[] => {
  if (!baseURL) {
    return []
  }

  const baseURLs = baseSideBaseURL
    ? phrasing`${formatBaseURL(baseSideBaseURL)} on the base side and to ${formatBaseURL(baseURL)} on the current side`
    : [formatBaseURL(baseURL)]
  return [
    paragraph(
      phrasing`Paths starting with ${inlineCode(`./`)} or ${inlineCode(`../`)} are relative to ${baseURLs}.`,
    ),
  ]
}

const formatBaseURL = (baseURL: URL): PhrasingContent =>
  inlineCode(absoluteURLPath(baseURL))

/**
 * Wraps each measure's sections in a heading naming its metric when there are
 * several measures.
 */
export const formatMeasureSections = <M extends { metric: Metric }>(
  measures: M[],
  headingLevel: number,
  formatSections: (measure: M, headingLevel: number) => RootContent[],
): RootContent[] =>
  measures.flatMap(measure =>
    measures.length === 1
      ? formatSections(measure, headingLevel)
      : formatSectionGroup(
          [
            heading(
              headingLevel,
              capitalizeFirst(measure.metric.phrases.titleNoun),
            ),
          ],
          formatSections(measure, headingLevel + 1),
        ),
  )

/** The most rows a breakdown shows, a quarter of the top N. */
export const breakdownLimit = ({
  topN,
}: Pick<FormattingProfileToMdOptions, `topN`>): number => Math.ceil(topN / 4)

/**
 * The note shown in place of a measure's sections when the input recorded no
 * value for it, e.g. a heap profile dumped when nothing was retained.
 * {@link scope} qualifies where nothing was recorded (a call stack profile's
 * ` in any sample`) and may be empty.
 */
export const formatZeroTotalNote = (
  metric: Metric,
  scope: string,
): RootContent =>
  paragraph(`No ${metric.phrases.pastParticipleVerbPhrase}${scope}.`)

/**
 * The name displayed for {@link category}, from any modality's set of
 * categories.
 *
 * A category's value is an identifier, so its displayed name capitalizes it and
 * spells out the abbreviations and run-together words a reader would otherwise
 * expand. Categories both modalities define share a name.
 */
export const formatCategory = (category: EntryCategory): string =>
  CATEGORY_NAMES[category]

const CATEGORY_NAMES: Record<EntryCategory, string> = {
  ours: `Ours`,
  'third-party': `Third-party`,
  stdlib: `Standard library`,
  native: `Native`,
  unknown: `Unknown`,
  'garbage-collector': `Garbage collector`,
  compiler: `Compiler`,
  jit: `JIT`,
  kernel: `Kernel`,
  idle: `Idle`,
  object: `Object`,
  array: `Array`,
  string: `String`,
  'concatenated-string': `Concatenated string`,
  'sliced-string': `Sliced string`,
  function: `Function`,
  code: `Code`,
  regexp: `Regular expression`,
  number: `Number`,
  'big-number': `Big number`,
  symbol: `Symbol`,
  'object-shape': `Object shape`,
  internal: `Internal`,
  synthetic: `Synthetic`,
  script: `Script`,
  parsing: `Parsing`,
  compilation: `Compilation`,
  'garbage-collection-pause': `Garbage collection pause`,
  'garbage-collection': `Garbage collection`,
  style: `Style`,
  layout: `Layout`,
  paint: `Paint`,
  io: `I/O`,
  other: `Other`,
}

export type NamedFunction = {
  name: string
  location?: SourceLocation
}

export const formatFunctionHeading = (
  headingLevel: number,
  func: NamedFunction,
  options: FormattingProfileToMdOptions,
): Heading =>
  heading(
    headingLevel,
    nameLocationPhrasing(
      func.name,
      inlineCode(formatSourceLocation(func.location, options)),
    ),
  )

type ShowEntry = FormattingProfileToMdOptions[`showEntry`]

/**
 * The options a modality's sections format with. When `showEntry` would hide
 * every entry the sections can show ({@link showsAnyEntry} is false), it is
 * ignored so the body is shown rather than vanishes. When `defaultShowEntry`
 * would show an entry, the caller's filter hid them, which logs a warning.
 * Otherwise the default filter hid them, which logs an info line.
 */
export const resolveEntryFilter = ({
  options,
  formatsAnyEntry,
  showsAnyEntry,
  entities,
}: {
  options: FormattingProfileToMdOptions

  /** Whether the sections would show an entry if `showEntry` showed every one. */
  formatsAnyEntry: boolean

  /** Whether {@link ShowEntry} shows an entry the sections can show. */
  showsAnyEntry: (showEntry: ShowEntry) => boolean
  entities: string
}): FormattingProfileToMdOptions => {
  if (!formatsAnyEntry || showsAnyEntry(options.showEntry)) {
    return options
  }

  const message = `entry filter ignored because it hides every ${entities}, so all ${entities}s are shown`
  if (showsAnyEntry(defaultShowEntry)) {
    options.logger.warn?.(message)
  } else {
    options.logger.info?.(`default ${message}`)
  }
  return { ...options, showEntry: () => true }
}

export type DiffEntityCategories<Entity> = {
  categories: EntryCategory[]
  categoryOf: (entity: Entity) => EntryCategory
}

/**
 * A diff's ranking of entities by one measure: the entities whose value
 * increased and decreased the most, overall and within each category.
 */
type DiffEntityRanking<Entity> = {
  increases: ActiveDiffEntity<Entity>[]
  decreases: ActiveDiffEntity<Entity>[]
  categoryRankings: DiffCategoryRanking<ActiveDiffEntity<Entity>>[]

  /** The least share a category accounts for to get its own ranking. */
  minCategoryShare: number

  /**
   * Whether any ranked entity has a value on either side, changed or not.
   * Only entities the entry filter shows are ranked.
   */
  hasActive: boolean
}

/** A diffed entity paired with its base and current values for one measure. */
export type ActiveDiffEntity<Entity> = {
  entity: Entity
  baseValue: number
  currentValue: number
}

/** One category's own increases and decreases within a diff ranking. */
type DiffCategoryRanking<Item> = {
  category: EntryCategory
  increases: Item[]
  decreases: Item[]
}

/**
 * Selects the entities whose measure increased and decreased the most from
 * {@link candidates}, keeping only those active on at least one side and shown
 * by {@link options}, as {@link rankDiffEntities} does.
 */
export const selectDiffEntities = <
  Entity extends Diff<DeepReadonly<AggregatedProfileEntry>>,
>(
  candidates: ActiveDiffEntity<Entity>[],
  sides: DiffSides,
  options: FormattingProfileToMdOptions,
  categories?: DiffEntityCategories<Entity>,
): DiffEntityRanking<Entity> => {
  const active = candidates.filter(
    ({ entity, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) &&
      showDiffEntity(entity, sides, options.showEntry),
  )
  return rankDiffEntities(active, options, categories)
}

/** Whether {@link showEntry} shows a diffed entity's entry on either side. */
export const showDiffEntity = <
  Entry extends DeepReadonly<AggregatedProfileEntry>,
>(
  { base, current }: Diff<Entry>,
  sides: DiffSides,
  showEntry: ShowEntry,
): boolean =>
  (base !== undefined && showEntry(base, sides.base.context)) ||
  (current !== undefined && showEntry(current, sides.current.context))

/**
 * Selects the top N entities whose measure increased and decreased the most
 * from {@link entities}, which have a value on either side.
 * {@link diffRankings} states which of the two a metric counts as a
 * regression.
 *
 * {@link categories} additionally selects the top of each category, ranked the
 * same way among that category's own entities.
 */
export const rankDiffEntities = <Entity>(
  entities: ActiveDiffEntity<Entity>[],
  {
    topN,
    minCategoryShare,
  }: Pick<FormattingProfileToMdOptions, `topN` | `minCategoryShare`>,
  categories?: DiffEntityCategories<Entity>,
): DiffEntityRanking<Entity> => {
  const increased = entities.filter(
    ({ baseValue, currentValue }) => currentValue > baseValue,
  )
  const decreased = entities.filter(
    ({ baseValue, currentValue }) => currentValue < baseValue,
  )
  const topIncreases = (entities: ActiveDiffEntity<Entity>[]) =>
    selectTopN(
      entities,
      topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    )
  const topDecreases = (entities: ActiveDiffEntity<Entity>[]) =>
    selectTopN(
      entities,
      topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    )

  return {
    increases: topIncreases(increased),
    decreases: topDecreases(decreased),
    categoryRankings: (categories?.categories ?? []).map(category => {
      const inCategory = ({ entity }: ActiveDiffEntity<Entity>) =>
        categories!.categoryOf(entity) === category
      return {
        category,
        increases: topIncreases(increased.filter(inCategory)),
        decreases: topDecreases(decreased.filter(inCategory)),
      }
    }),
    minCategoryShare,
    hasActive: entities.length > 0,
  }
}

/**
 * Selects at most {@link limit} of {@link items}, ranked by the size of their
 * change either way. An item whose value did not change is left out.
 */
export const selectLargestChanges = <Item>(
  items: Item[],
  limit: number,
  changeOf: (item: Item) => number,
): Item[] =>
  selectTopN(
    items.filter(item => changeOf(item) !== 0),
    limit,
    item => Math.abs(changeOf(item)),
  )

/**
 * The increase and decrease subsections of {@link ranking}, each a table and
 * its category subsections, as {@link formatDiffPartitionSections} lays them
 * out.
 */
export const formatDiffMeasureSections = <Entity, Row>({
  headingLevel,
  title,
  description,
  improvement,
  columns,
  ranking,
  selfValueNoun,
  rowOf,
  formatDetailSections,
  entities,
}: DiffMeasureSectionsArgs<Entity, Row>): RootContent[] =>
  formatDiffPartitionSections({
    headingLevel,
    title,
    improvement,
    hasActive: ranking.hasActive,
    unchangedSentence: unchangedDiffSentence(entities.singular, description),
    detailSections:
      formatDetailSections?.(shownDiffEntities(improvement, ranking)) ?? [],
    formatPartition: ({ change, title: subtitle }) =>
      formatDiffRankingSections({
        headingLevel: headingLevel + 1,
        subtitle,
        sentence: diffRankingSentence(entities.plural, change, description),
        columns,
        ...changedEntities(change, ranking),
        categoryRankings: ranking.categoryRankings,
        selfValueNoun,
        minCategoryShare: ranking.minCategoryShare,
        rowOf: ({ entity }) => rowOf(entity),
      }),
  })

export type DiffMeasureSectionsArgs<Entity, Row> = {
  headingLevel: number
  title: string
  description: string
  improvement: MetricImprovement
  columns: Table<Row>
  ranking: DiffEntityRanking<Entity>

  /** The self value a category's share is of, e.g. "self samples". */
  selfValueNoun: string
  rowOf: (entity: Entity) => Diff<Row>

  /** The sections breaking down the distinct entities the rankings show. */
  formatDetailSections?: (shownEntities: Entity[]) => RootContent[]

  /** The noun for the ranked entities. */
  entities: EntityNoun
}

/**
 * The partitions {@link formatPartition} formats for each of a measure's
 * {@link diffRankings}, under a {@link title} heading, followed by
 * {@link detailSections}.
 *
 * When no partition has rows but {@link hasActive} entities exist on either
 * side, the section stays, with {@link unchangedSentence}. When no entities are
 * active (the section a non-diff input would have omitted), it is omitted.
 */
export const formatDiffPartitionSections = ({
  headingLevel,
  title,
  improvement,
  hasActive,
  unchangedSentence,
  detailSections = [],
  formatPartition,
}: {
  headingLevel: number
  title: string
  improvement: MetricImprovement
  hasActive: boolean
  unchangedSentence: string
  detailSections?: RootContent[]
  formatPartition: (ranking: DiffRanking) => RootContent[]
}): RootContent[] => {
  const sections = diffRankings(improvement).flatMap(formatPartition)
  if (sections.length === 0) {
    if (!hasActive) {
      return []
    }
    sections.push(paragraph(unchangedSentence))
  }

  return formatSectionGroup(
    [heading(headingLevel, title)],
    [...sections, ...detailSections],
  )
}

/** The noun for a kind of entity, as a sentence about a ranking states it. */
export type EntityNoun = { singular: string; plural: string }

export const FUNCTION_NOUN: EntityNoun = {
  singular: `function`,
  plural: `Functions`,
}

const formatDiffRankingSections = <Entity, Row>({
  headingLevel,
  subtitle,
  sentence,
  columns,
  entities,
  categoryRankings,
  selfValueNoun,
  minCategoryShare,
  entitiesOf,
  rowOf,
}: {
  headingLevel: number
  subtitle: string
  sentence: string
  columns: Table<Row>
  entities: Entity[]
  categoryRankings: DiffCategoryRanking<Entity>[]

  /** The self value a category's share is of, e.g. "self samples". */
  selfValueNoun: string
  minCategoryShare: number
  entitiesOf: (ranking: DiffCategoryRanking<Entity>) => Entity[]
  rowOf: (entity: Entity) => Diff<Row>
}): RootContent[] => {
  if (entities.length === 0) {
    return []
  }

  const categoryEntities = categoryRankings.map(ranking => ({
    category: ranking.category,
    entities: entitiesOf(ranking),
  }))
  return [
    heading(headingLevel, subtitle),
    paragraph(
      categoryEntities.some(({ entities }) => entities.length > 0)
        ? `${sentence} ${formatDiffCategoryShareSentence(minCategoryShare, selfValueNoun)}`
        : sentence,
    ),
    ...formatDiffRankingTables({
      headingLevel: headingLevel + 1,
      columns,
      entities,
      categoryEntities,
      rowOf,
    }),
  ]
}

/**
 * The sentence stating the share a category of a diff ranking accounts for, on
 * whichever side it is larger.
 */
const formatDiffCategoryShareSentence = (
  minCategoryShare: number,
  selfValueNoun: string,
): string =>
  `Categories account for at least ${formatPercent(minCategoryShare)} of ${selfValueNoun} on the base or the current side.`

/**
 * The table ranking {@link entities}, followed by the per-category tables
 * repeating that ranking within each category.
 *
 * A category ranking exactly {@link entities} repeats the overall table, which
 * then shows once, under the heading naming the category every entity falls in.
 */
const formatDiffRankingTables = <Entity, Row>({
  headingLevel,
  columns,
  entities,
  categoryEntities,
  rowOf,
}: {
  headingLevel: number
  columns: Table<Row>
  entities: Entity[]
  categoryEntities: { category: EntryCategory; entities: Entity[] }[]
  rowOf: (entity: Entity) => Diff<Row>
}): RootContent[] => [
  ...(isRepeatedByCategory(
    entities,
    categoryEntities.map(({ entities }) => entities),
  )
    ? []
    : [formatDiffTable(columns, entities.map(rowOf))]),
  ...categoryEntities.flatMap(({ category, entities }) =>
    entities.length === 0
      ? []
      : [
          heading(headingLevel, formatCategory(category)),
          formatDiffTable(columns, entities.map(rowOf)),
        ],
  ),
]

/**
 * Whether one of {@link categoryRankings} ranks exactly {@link ranking}'s
 * entries, whose subsection then repeats the ranking's own table. A ranking
 * whose entries all fall in one category has such a subsection.
 */
export const isRepeatedByCategory = <Entity>(
  ranking: readonly Entity[],
  categoryRankings: readonly (readonly Entity[])[],
): boolean =>
  categoryRankings.some(
    entries =>
      entries.length === ranking.length &&
      entries.every((entry, index) => entry === ranking[index]),
  )

/**
 * The distinct entities a diff's rankings show, in the order they first
 * appear.
 */
const shownDiffEntities = <Entity>(
  improvement: MetricImprovement,
  ranking: DiffEntityRanking<Entity>,
): Entity[] =>
  Array.from(
    new Set(
      diffRankings(improvement).flatMap(({ change }) => {
        const { entities, entitiesOf } = changedEntities(change, ranking)
        return [...entities, ...ranking.categoryRankings.flatMap(entitiesOf)]
      }),
    ),
    ({ entity }) => entity,
  )

/** One of a diff's two rankings: the change it ranks, and its heading. */
type DiffRanking = {
  change: DiffChange
  title: string
}

/** A direction of change between a diff's two sides. */
type DiffChange = `increase` | `decrease`

/**
 * The two rankings a diff shows for a measure in {@link improvement}'s metric,
 * in the order they are shown: what the metric's improvement direction calls
 * worse first, or the increases first where that direction is unknown.
 *
 * A heading names the change itself wherever that direction is unknown, so
 * the output never calls a change an improvement it cannot measure as one.
 */
const diffRankings = (
  improvement: MetricImprovement,
): [DiffRanking, DiffRanking] => {
  switch (improvement) {
    case `decrease`:
      return [
        { change: `increase`, title: `Regressions` },
        { change: `decrease`, title: `Improvements` },
      ]
    case `increase`:
      return [
        { change: `decrease`, title: `Regressions` },
        { change: `increase`, title: `Improvements` },
      ]
    case `unknown`:
      return [
        { change: `increase`, title: `Increases` },
        { change: `decrease`, title: `Decreases` },
      ]
  }
}

/** The sentence opening a ranking of {@link plural} by {@link description}. */
export const rankingSentence = (plural: string, description: string): string =>
  `${plural} with the most ${description}.`

/** The sentence opening a ranking of {@link plural} by their {@link change} in {@link description}. */
export const diffRankingSentence = (
  plural: string,
  change: DiffChange,
  description: string,
): string => `${plural} with the largest ${change} in ${description}.`

/** The sentence standing in for a diff ranking where nothing changed. */
export const unchangedDiffSentence = (
  singular: string,
  description: string,
): string => `No ${singular} differed in ${description}.`

/**
 * The entities a ranking of one direction of change shows, and those each of
 * its category subsections shows.
 */
const changedEntities = <Entity>(
  change: DiffChange,
  { increases, decreases }: { increases: Entity[]; decreases: Entity[] },
): {
  entities: Entity[]
  entitiesOf: (ranking: DiffCategoryRanking<Entity>) => Entity[]
} =>
  change === `increase`
    ? { entities: increases, entitiesOf: ranking => ranking.increases }
    : { entities: decreases, entitiesOf: ranking => ranking.decreases }
