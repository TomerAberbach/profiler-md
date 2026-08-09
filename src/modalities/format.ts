import type { Heading, RootContent } from 'mdast'
import { capitalizeFirst, formatConjunction } from '../helpers/format.ts'
import { selectTopN } from '../helpers/heap.ts'
import {
  formatSectionGroup,
  heading,
  inlineCode,
  nameLocationPhrasing,
  paragraph,
} from '../helpers/markdown.ts'
import type { DeepReadonly } from '../helpers/types.ts'
import { formatSourceLocation } from '../location.ts'
import type { SourceLocation } from '../location.ts'
import type {
  AggregatedProfileEntry,
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../options.ts'
import type { Diff } from './diff.ts'
import type { HeapSnapshotNodeCategory } from './heap-snapshot/type.ts'
import type { Metric } from './metric.ts'
import { formatDiffTable } from './table.ts'
import type { Table } from './table.ts'

/** The document title for an input with the given metrics. */
export const formatTitle = (metrics: Metric[]): string =>
  capitalizeFirst(
    `${formatConjunction(metrics.map(metric => metric.phrases.titleNoun))} profile`,
  )

/**
 * Formats a Markdown section per measure in {@link measures} via
 * {@link formatSections}, wrapping each measure's sections in a heading with
 * the metric's name when there are multiple measures.
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
 * The note shown when the entry filter would hide every function, e.g. a
 * profile sampled entirely inside external code with no frame of ours (a
 * runtime dump, a lock profile parked in the JDK).
 */
export const ENTRY_FILTER_DISABLED_NOTE = `The entry filter hides every sampled function, so all functions are shown.`

/**
 * The name displayed for {@link category}, from either modality's set of
 * categories.
 *
 * A category's value is an identifier, so its displayed name capitalizes it and
 * spells out the abbreviations and run-together words a reader would otherwise
 * expand. Categories both modalities define share a name.
 */
export const formatCategory = (category: Category): string =>
  CATEGORY_NAMES[category]

/** A category from either modality's set of categories. */
export type Category = FunctionCategory | HeapSnapshotNodeCategory

const CATEGORY_NAMES: Record<Category, string> = {
  ours: `Ours`,
  'third-party': `Third-party`,
  stdlib: `Standard library`,
  native: `Native`,
  unknown: `Unknown`,
  'garbage collector': `Garbage collector`,
  compiler: `Compiler`,
  jit: `JIT`,
  kernel: `Kernel`,
  idle: `Idle`,
  object: `Object`,
  array: `Array`,
  string: `String`,
  'concatenated string': `Concatenated string`,
  'sliced string': `Sliced string`,
  function: `Function`,
  code: `Code`,
  regexp: `Regular expression`,
  number: `Number`,
  'big number': `Big number`,
  symbol: `Symbol`,
  'object shape': `Object shape`,
  internal: `Internal`,
  synthetic: `Synthetic`,
}

/** A function with a display name and optional location. */
export type NamedFunction = {
  name: string
  location?: SourceLocation
}

/** Formats a heading for a function with its location. */
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

/**
 * Assembles the regressions and improvements subsections for one function
 * direction (self or total) under a {@link title} heading, with rows under the
 * given table {@link columns}.
 *
 * When nothing differed but {@link hasActive} functions exist on either side,
 * the section stays, with a "did not differ" note. When no functions are
 * active (the section a non-diff input would have omitted), it is omitted.
 */
export const formatDiffFunctionSections = <Entity, Row>({
  headingLevel,
  title,
  description,
  columns,
  hasActive,
  regressions,
  improvements,
  categoryRankings = [],
  rowOf,
}: {
  headingLevel: number
  title: string
  description: string
  columns: Table<Row>
  hasActive: boolean
  regressions: Entity[]
  improvements: Entity[]
  categoryRankings?: DiffCategoryRanking<Entity>[]
  rowOf: (entity: Entity) => Diff<Row>
}): RootContent[] => {
  const sections = [
    ...formatDiffRankingSections({
      headingLevel,
      subtitle: `Regressions`,
      sentence: `Functions with the largest increase in ${description}.`,
      columns,
      entities: regressions,
      categoryRankings,
      entitiesOf: ranking => ranking.regressions,
      rowOf,
    }),
    ...formatDiffRankingSections({
      headingLevel,
      subtitle: `Improvements`,
      sentence: `Functions with the largest decrease in ${description}.`,
      columns,
      entities: improvements,
      categoryRankings,
      entitiesOf: ranking => ranking.improvements,
      rowOf,
    }),
  ]

  if (sections.length === 0) {
    if (!hasActive) {
      return []
    }
    sections.push(paragraph(`No function differed in ${description}.`))
  }

  return formatSectionGroup([heading(headingLevel, title)], sections)
}

/**
 * One ranking's subsection: the {@link subtitle} heading, the {@link sentence}
 * introducing it, and the tables ranking {@link entities}.
 */
const formatDiffRankingSections = <Entity, Row>({
  headingLevel,
  subtitle,
  sentence,
  columns,
  entities,
  categoryRankings,
  entitiesOf,
  rowOf,
}: {
  headingLevel: number
  subtitle: string
  sentence: string
  columns: Table<Row>
  entities: Entity[]
  categoryRankings: DiffCategoryRanking<Entity>[]
  entitiesOf: (ranking: DiffCategoryRanking<Entity>) => Entity[]
  rowOf: (entity: Entity) => Diff<Row>
}): RootContent[] =>
  entities.length === 0
    ? []
    : [
        heading(headingLevel + 1, subtitle),
        paragraph(sentence),
        ...formatDiffRankingTables({
          headingLevel: headingLevel + 2,
          columns,
          entities,
          categoryEntities: categoryRankings.map(ranking => ({
            category: ranking.category,
            entities: entitiesOf(ranking),
          })),
          rowOf,
        }),
      ]

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
  categoryEntities: { category: Category; entities: Entity[] }[]
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
 * entries, whose subsection then repeats the ranking's own table.
 *
 * A ranking whose entries all fall in one category has such a subsection, so
 * the table is shown once, under the heading naming that category.
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

/** One category's own regressions and improvements within a diff ranking. */
export type DiffCategoryRanking<Item> = {
  category: Category
  regressions: Item[]
  improvements: Item[]
}

/**
 * The options a modality's sections format with. When the entry filter would
 * hide every entry ({@link showsAnyEntry} is false), the filter is disabled
 * and a note saying so ({@link disabledNote}) leads the sections, so the body
 * is shown rather than vanishes.
 */
export const resolveEntryFilter = ({
  options,
  showsAnyEntry,
  disabledNote,
}: {
  options: FormattingProfileToMdOptions
  showsAnyEntry: boolean
  disabledNote: string
}): {
  sectionOptions: FormattingProfileToMdOptions
  notes: RootContent[]
} =>
  showsAnyEntry
    ? { sectionOptions: options, notes: [] }
    : {
        sectionOptions: { ...options, showEntry: () => true },
        notes: [paragraph(disabledNote)],
      }

/** Returns whether either side of the diffed entity should be shown. */
export const showDiffEntity = <
  Entry extends DeepReadonly<AggregatedProfileEntry>,
>(
  { base, current }: Diff<Entry>,
  options: FormattingProfileToMdOptions,
): boolean =>
  (base !== undefined && options.showEntry(base)) ||
  (current !== undefined && options.showEntry(current))

/** A diffed entity paired with its base and current values for one measure. */
export type ActiveDiffEntity<Entity> = {
  entity: Entity
  baseValue: number
  currentValue: number
}

/**
 * Selects the top regressed and improved entities from {@link candidates},
 * keeping only those active on at least one side and shown by {@link options}.
 *
 * {@link categories} additionally selects the top of each category, ranked the
 * same way among that category's own entities.
 */
export const selectDiffEntities = <
  Entity extends Diff<DeepReadonly<AggregatedProfileEntry>>,
>(
  candidates: ActiveDiffEntity<Entity>[],
  options: FormattingProfileToMdOptions,
  categories?: {
    categories: Category[]
    categoryOf: (entity: Entity) => Category
  },
): {
  hasActive: boolean
  regressions: ActiveDiffEntity<Entity>[]
  improvements: ActiveDiffEntity<Entity>[]
  categoryRankings: DiffCategoryRanking<ActiveDiffEntity<Entity>>[]
} => {
  const active = candidates.filter(
    ({ entity, baseValue, currentValue }) =>
      (baseValue > 0 || currentValue > 0) && showDiffEntity(entity, options),
  )
  const regressed = active.filter(
    ({ baseValue, currentValue }) => currentValue > baseValue,
  )
  const improved = active.filter(
    ({ baseValue, currentValue }) => currentValue < baseValue,
  )
  const topRegressions = (entities: ActiveDiffEntity<Entity>[]) =>
    selectTopN(
      entities,
      options.topN,
      ({ baseValue, currentValue }) => currentValue - baseValue,
    )
  const topImprovements = (entities: ActiveDiffEntity<Entity>[]) =>
    selectTopN(
      entities,
      options.topN,
      ({ baseValue, currentValue }) => baseValue - currentValue,
    )

  return {
    hasActive: active.length > 0,
    regressions: topRegressions(regressed),
    improvements: topImprovements(improved),
    categoryRankings: (categories?.categories ?? []).map(category => {
      const inCategory = ({ entity }: ActiveDiffEntity<Entity>) =>
        categories!.categoryOf(entity) === category
      return {
        category,
        regressions: topRegressions(regressed.filter(inCategory)),
        improvements: topImprovements(improved.filter(inCategory)),
      }
    }),
  }
}
