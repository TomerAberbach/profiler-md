import { ProfilerMdError } from '../../error.ts'
import type {
  FormattingProfileToMdOptions,
  FunctionCategory,
} from '../../options.ts'
import type { Diff } from '../diff.ts'
import { matchDiffedEntries, matchDiffedMaps } from '../diff.ts'
import type { DiffMetric } from '../metric.ts'
import { matchDiffedMetrics } from '../metric.ts'
import type {
  AggregatedCallGraph,
  AggregatedCallGraphCategoryMetrics,
  AggregatedCallGraphFunction,
} from './aggregate.ts'

/**
 * A function matched across the base and current call graphs by name and
 * location, ignoring line and column.
 *
 * The name, location, and category come from the current graph when the
 * function is present in it, and from the base graph otherwise.
 *
 * Each side's values are indexed by that side's graph's
 * {@link AggregatedCallGraph.metrics}. Read them using
 * {@link DiffMetric.baseIndex} and {@link DiffMetric.currentIndex}.
 */
export type AggregatedCallGraphFunctionDiff = Pick<
  AggregatedCallGraphFunction,
  `name` | `location` | `category`
> &
  Diff<AggregatedCallGraphFunction>

/** A diff of two aggregated call graphs. */
export type AggregatedCallGraphDiff = {
  /** The base call graph. */
  base: AggregatedCallGraph

  /** The current call graph. */
  current: AggregatedCallGraph

  /** Metrics recorded in both the base and current call graphs. */
  metrics: DiffMetric[]

  /**
   * Function category to that category's metrics in each call graph. Each
   * side's values are indexed like {@link AggregatedCallGraphFunctionDiff}'s.
   */
  categoryToMetrics: Map<
    FunctionCategory,
    Diff<AggregatedCallGraphCategoryMetrics>
  >

  /** Functions in either call graph, matched across the two. */
  functions: AggregatedCallGraphFunctionDiff[]
}

/**
 * Diffs {@link base} and {@link current} by matching up their metrics,
 * functions, and categories.
 *
 * Throws if the call graphs have no metrics in common, because unlike sampling
 * profiles, call graphs have no sample count to fall back on.
 */
export const diffAggregatedCallGraphs = (
  base: AggregatedCallGraph,
  current: AggregatedCallGraph,
  options: FormattingProfileToMdOptions,
): AggregatedCallGraphDiff => {
  const metrics = matchDiffedMetrics(base.metrics, current.metrics)
  if (metrics.length === 0) {
    throw new ProfilerMdError(`cannot diff profiles with no metrics in common`)
  }

  const { entryMatchKey } = options
  const functions = matchDiffedEntries(
    base.functions,
    current.functions,
    func => entryMatchKey(func, base.context),
    func => entryMatchKey(func, current.context),
  ).map(({ base: baseFunc, current: currentFunc }) => {
    const { name, location, category } = (currentFunc ?? baseFunc)!
    return { name, location, category, base: baseFunc, current: currentFunc }
  })

  return {
    base,
    current,
    metrics,
    categoryToMetrics: matchDiffedMaps(
      base.categoryToMetrics,
      current.categoryToMetrics,
    ),
    functions,
  }
}
