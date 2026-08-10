/**
 * Splitting a ranking into per-category subsections, shared by the modalities
 * that categorize functions.
 */

import type { RootContent } from 'mdast'
import { selectTopN } from '../helpers/heap.ts'
import { formatSectionGroup, heading } from '../helpers/markdown.ts'
import { formatCategory, isRepeatedByCategory } from './format.ts'
import type { Category } from './format.ts'

/**
 * The categories {@link entries} break down into, ordered by descending share
 * of the total.
 *
 * A category qualifies by accounting for at least {@link minCategoryShare}
 * of the summed {@link selfValueOf} across {@link entries}. Self values are
 * used because they are disjoint, so each category's share is its part of that
 * sum: a total value includes a function's callees, so summing totals counts a
 * call in both the caller's total and the callee's, and the shares add up to
 * more than 1.
 *
 * A single qualifying category still breaks the ranking down, since its
 * subsection ranks that category's own entries rather than the whole ranking's.
 */
export const subsectionCategories = <Entry, Category extends string>({
  entries,
  selfValueOf,
  categoryOf,
  minCategoryShare,
}: {
  entries: readonly Entry[]
  selfValueOf: (entry: Entry) => number
  categoryOf: (entry: Entry) => Category
  minCategoryShare: number
}): Category[] =>
  admittedCategories(
    categoryShares(
      sumByCategory({ entries, valueOf: selfValueOf, categoryOf }),
    ),
    minCategoryShare,
  )

/**
 * The categories the diffed {@link entries} break down into, ordered by
 * descending share.
 *
 * A category's share is the larger of its two shares, its entries' summed base
 * self values over every entry's, and the same on the current side. Taking the
 * larger admits a category large enough on either side, so a category the
 * current profile replaced or introduced qualifies by the side it exists on.
 *
 * A share is of one side, as in {@link subsectionCategories}, so
 * {@link minCategoryShare} means the same for a diff as for a single input.
 * Summing the entries of each side rather than each entry's larger share keeps
 * that: a category small on both sides, whose value moved from one of its
 * entries to another, would otherwise add up to a share neither side has.
 *
 * Qualification is {@link subsectionCategories}'.
 */
export const subsectionDiffCategories = <Entry, Category extends string>({
  entries,
  baseSelfValueOf,
  currentSelfValueOf,
  categoryOf,
  minCategoryShare,
}: {
  entries: readonly Entry[]
  baseSelfValueOf: (entry: Entry) => number
  currentSelfValueOf: (entry: Entry) => number
  categoryOf: (entry: Entry) => Category
  minCategoryShare: number
}): Category[] =>
  admittedCategories(
    largerSideShares(
      sumSidesByCategory({
        entries,
        baseSelfValueOf,
        currentSelfValueOf,
        categoryOf,
      }),
    ),
    minCategoryShare,
  )

/** The functions a ranking displays, overall and within each category. */
export type FunctionRanking<Func> = {
  hottestFunctions: Func[]
  categoryRankings: { category: Category; functions: Func[] }[]
  displayedFunctions: Func[]
}

/**
 * Ranks {@link functions} by {@link valueOf}, overall and within each of
 * {@link categories}, keeping the top {@link topN} of each.
 *
 * Every ranked function has the same breakdowns below it, whichever ranking
 * displays it, so {@link FunctionRanking.displayedFunctions} contains each
 * function once, sorted by {@link valueOf} like the rankings above it.
 */
export const rankFunctions = <Func extends { category: Category }>({
  functions,
  categories,
  valueOf,
  topN,
}: {
  functions: Func[]
  categories: Category[]
  valueOf: (func: Func) => number
  topN: number
}): FunctionRanking<Func> => {
  const hottestFunctions = selectTopN(functions, topN, valueOf)
  const categoryRankings = categories.map(category => ({
    category,
    functions: selectTopN(
      functions.filter(func => func.category === category),
      topN,
      valueOf,
    ),
  }))
  const displayedFunctions = [
    ...new Set([
      ...hottestFunctions,
      ...categoryRankings.flatMap(({ functions }) => functions),
    ]),
  ].sort((func1, func2) => valueOf(func2) - valueOf(func1))
  return { hottestFunctions, categoryRankings, displayedFunctions }
}

/**
 * The table ranking {@link FunctionRanking.hottestFunctions}, followed by the
 * per-category subsections repeating that ranking within each category.
 * {@link formatFunctionTable} builds every table.
 *
 * A category subsection ranking exactly the hottest functions repeats the
 * overall table, so the table shows once, under the heading naming that
 * category.
 */
export const formatRankingTables = <Func>({
  ranking: { hottestFunctions, categoryRankings },
  formatFunctionTable,
  headingLevel,
}: {
  ranking: FunctionRanking<Func>
  formatFunctionTable: (functions: Func[]) => RootContent
  headingLevel: number
}): RootContent[] => [
  ...(isRepeatedByCategory(
    hottestFunctions,
    categoryRankings.map(({ functions }) => functions),
  )
    ? []
    : [formatFunctionTable(hottestFunctions)]),
  ...formatSectionGroup(
    [heading(headingLevel, `Categories`)],
    categoryRankings.flatMap(({ category, functions }) =>
      functions.length === 0
        ? []
        : [
            heading(headingLevel + 1, formatCategory(category)),
            formatFunctionTable(functions),
          ],
    ),
  ),
]

/** Per-category sums of one side's values, with the total they sum to. */
type CategorySums<Category extends string> = {
  categoryToValue: Map<Category, number>
  total: number
}

const sumByCategory = <Entry, Category extends string>({
  entries,
  valueOf,
  categoryOf,
}: {
  entries: readonly Entry[]
  valueOf: (entry: Entry) => number
  categoryOf: (entry: Entry) => Category
}): CategorySums<Category> => {
  const categoryToValue = new Map<Category, number>()
  let total = 0
  for (const entry of entries) {
    const value = valueOf(entry)
    if (value <= 0) {
      continue
    }
    total += value
    const category = categoryOf(entry)
    categoryToValue.set(category, (categoryToValue.get(category) ?? 0) + value)
  }
  return { categoryToValue, total }
}

/** The part of {@link CategorySums.total} each category accounts for. */
const categoryShares = <Category extends string>({
  categoryToValue,
  total,
}: CategorySums<Category>): Map<Category, number> => {
  const categoryToShare = new Map<Category, number>()
  for (const [category, value] of categoryToValue) {
    categoryToShare.set(category, shareOf(value, total))
  }
  return categoryToShare
}

/** Per-category sums of both sides' values, with the totals they sum to. */
type CategorySideSums<Category extends string> = {
  categoryToValues: Map<Category, [base: number, current: number]>
  baseTotal: number
  currentTotal: number
}

const sumSidesByCategory = <Entry, Category extends string>({
  entries,
  baseSelfValueOf,
  currentSelfValueOf,
  categoryOf,
}: {
  entries: readonly Entry[]
  baseSelfValueOf: (entry: Entry) => number
  currentSelfValueOf: (entry: Entry) => number
  categoryOf: (entry: Entry) => Category
}): CategorySideSums<Category> => {
  const categoryToValues = new Map<Category, [base: number, current: number]>()
  let baseTotal = 0
  let currentTotal = 0
  for (const entry of entries) {
    const baseValue = Math.max(baseSelfValueOf(entry), 0)
    const currentValue = Math.max(currentSelfValueOf(entry), 0)
    if (baseValue === 0 && currentValue === 0) {
      continue
    }
    baseTotal += baseValue
    currentTotal += currentValue

    const category = categoryOf(entry)
    const values = categoryToValues.get(category)
    if (values) {
      values[0] += baseValue
      values[1] += currentValue
    } else {
      categoryToValues.set(category, [baseValue, currentValue])
    }
  }
  return { categoryToValues, baseTotal, currentTotal }
}

/** The larger of the two parts each category accounts for on either side. */
const largerSideShares = <Category extends string>({
  categoryToValues,
  baseTotal,
  currentTotal,
}: CategorySideSums<Category>): Map<Category, number> => {
  const categoryToShare = new Map<Category, number>()
  for (const [category, [baseValue, currentValue]] of categoryToValues) {
    categoryToShare.set(
      category,
      Math.max(
        shareOf(baseValue, baseTotal),
        shareOf(currentValue, currentTotal),
      ),
    )
  }
  return categoryToShare
}

// A side where every entry's value is zero has no shares, which leaves that
// side out of the comparison rather than dividing by zero.
const shareOf = (value: number, total: number): number =>
  value > 0 && total > 0 ? value / total : 0

const admittedCategories = <Category extends string>(
  categoryToShare: Map<Category, number>,
  minCategoryShare: number,
): Category[] =>
  [...categoryToShare]
    .filter(([, share]) => share >= minCategoryShare)
    .sort(([, share1], [, share2]) => share2 - share1)
    .map(([category]) => category)
