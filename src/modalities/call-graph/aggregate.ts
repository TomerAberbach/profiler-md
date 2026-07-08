import type { SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { dropsCallGraphArcsForOrigin } from '../../origins/index.ts'
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import type { Metric } from '../metric.ts'
import { parseStackFrameFunction, StackFrameTable } from '../stack-frame.ts'
import type { StackFrameFunctionTable } from '../stack-frame.ts'
import type { CallGraph, CallGraphFunction } from './type.ts'

export class CallGraphAggregator implements InputAggregator<AggregatedCallGraph> {
  readonly #graph: CallGraph

  public constructor(graph: CallGraph) {
    this.#graph = graph
  }

  /**
   * Applies the parser's origin hint, then adds the graph's function frames to
   * {@link detector} until decided.
   */
  public detectOrigin(detector: OriginDetector): void {
    if (this.#graph.originHint !== undefined) {
      detector.hint(this.#graph.originHint)
    }
    StackFrameTable.for(this.#graph.frames).addToDetector(detector)
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedCallGraph {
    return new FunctionsAggregator(
      this.#graph,
      StackFrameTable.for(this.#graph.frames).resolve(context),
      options,
      context,
    ).aggregate()
  }
}

/**
 * Aggregates a call graph's parsed function nodes over its normalized frames:
 * merges functions whose normalized frames share an identity (summing selves,
 * lines, and arcs), computes cycle-safe totals, and categorizes the result.
 */
class FunctionsAggregator {
  readonly #metrics: Metric[]
  readonly #functions: CallGraphFunction[]

  /**
   * The normalized frames' functions. A parsed function's index into
   * {@link CallGraph.functions} is its index into the table.
   */
  readonly #frameFunctions: StackFrameFunctionTable
  readonly #options: AggregationProfileToMdOptions
  readonly #context: ProfileToMdContext

  readonly #keyToFunction = new Map<
    string | symbol,
    AggregatedCallGraphFunction
  >()

  /** Per parsed function index, the merged function it aggregates into. */
  readonly #mergedFunctions: AggregatedCallGraphFunction[]

  /**
   * Per parsed function index, its outgoing arcs, empty for a function whose
   * origin drops them.
   */
  readonly #calls: CallGraphFunction[`calls`][]

  readonly #totalValues: Float64Array

  public constructor(
    { metrics, functions }: CallGraph,
    frameFunctions: StackFrameFunctionTable,
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ) {
    this.#metrics = metrics
    this.#functions = functions
    this.#frameFunctions = frameFunctions
    this.#options = options
    this.#context = context

    // A function's identity is its normalized name and location, so parsed
    // functions that normalize alike (e.g. callgrind's `fn` and its
    // recursion-separated `fn'2`) merge into one function. A frame the origin
    // dropped merges into a single shared anonymous function.
    this.#mergedFunctions = functions.map((_, index) => {
      const frameFunction = frameFunctions.function(index)
      const key = frameFunction?.key ?? ANONYMOUS_FUNCTION_KEY
      return (
        this.#keyToFunction.get(key) ??
        this.#registerFunction(key, frameFunction ? index : -1)
      )
    })

    // An origin drops the arcs of a function whose calls its runtime
    // interposes instead of the profiled program making them. Dropping them
    // here comes before the cycle analysis they would otherwise distort.
    const dropped = new Set<AggregatedCallGraphFunction>()
    for (const func of this.#keyToFunction.values()) {
      if (dropsCallGraphArcsForOrigin(func, context.origin)) {
        dropped.add(func)
      }
    }
    this.#calls = functions.map((parsed, index) =>
      dropped.has(this.#mergedFunctions[index]!) ? [] : parsed.calls,
    )

    this.#totalValues = new Float64Array(metrics.length)
  }

  #registerFunction(
    key: string | symbol,
    index: number,
  ): AggregatedCallGraphFunction {
    const { name, location } =
      (index === -1 ? undefined : this.#frameFunctions.function(index)) ??
      parseStackFrameFunction({})
    const func: AggregatedCallGraphFunction = {
      type: `function`,
      id: this.#keyToFunction.size,
      name,
      location,
      // `aggregate` assigns categories at the end, in one pass over the full
      // set of functions.
      category: ``,
      selfValues: new Float64Array(this.#metrics.length),
      totalValues: new Float64Array(this.#metrics.length),
      lineToMetrics: new Map(),
      callerIdToMetrics: new Map(),
      calleeIdToMetrics: new Map(),
    }
    this.#keyToFunction.set(key, func)
    return func
  }

  public aggregate(): AggregatedCallGraph {
    this.#accumulateCosts()
    this.#computeTotals()

    const functions = [...this.#keyToFunction.values()]
    return {
      type: `call-graph`,
      context: this.#context,
      metrics: this.#metrics,
      totalValues: this.#totalValues,
      categoryToMetrics: this.#categorize(functions),
      functions,
    }
  }

  /** Accumulates selves, per-line selves, and arcs onto the merged functions. */
  #accumulateCosts(): void {
    for (const [index, parsed] of this.#functions.entries()) {
      const func = this.#mergedFunctions[index]!

      addValues(func.selfValues, parsed.selfValues)
      addValues(this.#totalValues, parsed.selfValues)
      for (const [line, values] of parsed.lineToValues) {
        let lineMetrics = func.lineToMetrics.get(line)
        if (!lineMetrics) {
          lineMetrics = new Float64Array(this.#metrics.length)
          func.lineToMetrics.set(line, lineMetrics)
        }
        addValues(lineMetrics, values)
      }

      for (const call of this.#calls[index]!) {
        this.#accumulateArc(func, call)
      }
    }
  }

  /** Accumulates one outgoing arc onto both of its endpoints. */
  #accumulateArc(
    func: AggregatedCallGraphFunction,
    call: CallGraphFunction[`calls`][number],
  ): void {
    const callee = this.#mergedFunctions[call.callee]!

    let calleeMetrics = func.calleeIdToMetrics.get(callee.id)
    if (!calleeMetrics) {
      calleeMetrics = {
        callee,
        callCount: 0,
        totalValues: new Float64Array(this.#metrics.length),
      }
      func.calleeIdToMetrics.set(callee.id, calleeMetrics)
    }
    calleeMetrics.callCount += call.callCount
    addValues(calleeMetrics.totalValues, call.totalValues)

    let callerMetrics = callee.callerIdToMetrics.get(func.id)
    if (!callerMetrics) {
      callerMetrics = {
        caller: func,
        callCount: 0,
        totalValues: new Float64Array(this.#metrics.length),
      }
      callee.callerIdToMetrics.set(func.id, callerMetrics)
    }
    callerMetrics.callCount += call.callCount
    addValues(callerMetrics.totalValues, call.totalValues)
  }

  /**
   * Computes each merged function's total values.
   *
   * A function's total is its self cost plus its outgoing arcs' inclusive
   * costs, with exceptions handled on the parsed graph, before the identity
   * merge, because an emitter's recursion separation (callgrind's `fn'2`)
   * keeps the parsed graph acyclic where the merged graph is not:
   *
   * - Arcs within a recursion cycle re-count the same work each time around
   *   the loop and can inflate far past the whole program's total, so totals
   *   exclude them. Each member is totalled on its own, so the total
   *   understates the member a cycle is entered through: the rest of the
   *   cycle's subtree counts toward the members that call out to it, not
   *   toward the entry point. Totalling a cycle as one unit, the textbook
   *   alternative, fails on real captures: a native binary's lazy binding and
   *   libc's internal cross-calls fuse many unrelated functions into one cycle,
   *   and every function in it would then report the whole program's cost. The
   *   arcs themselves stay in the caller/callee metrics, so recursion is still
   *   visible.
   * - When several parsed nodes merge into one function, their subtrees
   *   overlap rather than add: a recursion level's cost is already inside the
   *   outer level's arcs. The merged function reports the largest instance's
   *   total, floored at its (summed) self cost so totals never read below
   *   self.
   */
  #computeTotals(): void {
    const metricCount = this.#metrics.length
    const componentIndices = stronglyConnectedComponents(this.#calls)
    for (const [index, parsed] of this.#functions.entries()) {
      const parsedTotal = new Float64Array(metricCount)
      addValues(parsedTotal, parsed.selfValues)
      for (const call of this.#calls[index]!) {
        if (componentIndices[call.callee] !== componentIndices[index]) {
          addValues(parsedTotal, call.totalValues)
        }
      }

      const func = this.#mergedFunctions[index]!
      for (let i = 0; i < metricCount; i++) {
        func.totalValues[i] = Math.max(func.totalValues[i]!, parsedTotal[i]!)
      }
    }

    for (const func of this.#keyToFunction.values()) {
      for (let i = 0; i < metricCount; i++) {
        func.totalValues[i] = Math.max(
          func.totalValues[i]!,
          func.selfValues[i]!,
        )
      }
    }
  }

  /**
   * Assigns each function's category and builds the graph's category metrics
   * from the functions' self values, like the sampling aggregator's
   * categorization. It runs at the end so
   * {@link ProfileToMdOptions.categorizeEntries} receives the full set of
   * functions. A function with no recorded self cost is skipped so it can't
   * introduce an otherwise-empty category.
   */
  #categorize(
    functions: AggregatedCallGraphFunction[],
  ): Map<string, AggregatedCallGraphCategoryMetrics> {
    const categories = this.#options.categorizeEntries(functions, this.#context)
    const categoryToMetrics = new Map<
      string,
      AggregatedCallGraphCategoryMetrics
    >()

    for (const [index, func] of functions.entries()) {
      const category = categories[index]!
      func.category = category

      if (!func.selfValues.some(value => value > 0)) {
        continue
      }

      let metrics = categoryToMetrics.get(category)
      if (!metrics) {
        metrics = { values: new Float64Array(this.#metrics.length) }
        categoryToMetrics.set(category, metrics)
      }
      addValues(metrics.values, func.selfValues)
    }

    return categoryToMetrics
  }
}

/**
 * Key for the single shared anonymous function that dropped frames merge
 * into. A symbol so it can never collide with a function identity key.
 */
const ANONYMOUS_FUNCTION_KEY = Symbol(`anonymous`)

/** Adds {@link values} into {@link target} element-wise. */
const addValues = (target: Float64Array, values: ArrayLike<number>): void => {
  for (let i = 0; i < target.length; i++) {
    target[i]! += values[i] ?? 0
  }
}

/**
 * Assigns each parsed function its strongly-connected component index via
 * iterative Tarjan, over the outgoing arcs {@link calls} holds per function.
 * Functions in one component form a recursion cycle.
 */
const stronglyConnectedComponents = (
  calls: CallGraphFunction[`calls`][],
): number[] => {
  const indices = Array.from({ length: calls.length }, () => -1)
  const lowLinks = Array.from({ length: calls.length }, () => -1)
  const componentIndices = Array.from({ length: calls.length }, () => -1)
  const onStack = Array.from({ length: calls.length }, () => false)
  const stack: number[] = []
  let nextIndex = 0
  let nextComponent = 0

  const calleesOf = (index: number) =>
    calls[index]!.map(({ callee }) => callee)[Symbol.iterator]()

  for (let start = 0; start < calls.length; start++) {
    if (indices[start] !== -1) {
      continue
    }

    // Each frame is a function plus its outgoing-arc iterator, so the
    // traversal resumes mid-edge-list after returning from a callee.
    const traversal = [{ index: start, callees: calleesOf(start) }]
    indices[start] = nextIndex
    lowLinks[start] = nextIndex
    nextIndex++
    stack.push(start)
    onStack[start] = true

    while (traversal.length > 0) {
      const frame = traversal.at(-1)!
      const next = frame.callees.next()

      if (!next.done) {
        const callee = next.value
        if (indices[callee] === -1) {
          indices[callee] = nextIndex
          lowLinks[callee] = nextIndex
          nextIndex++
          stack.push(callee)
          onStack[callee] = true
          traversal.push({ index: callee, callees: calleesOf(callee) })
        } else if (onStack[callee]) {
          lowLinks[frame.index] = Math.min(
            lowLinks[frame.index]!,
            indices[callee]!,
          )
        }
        continue
      }

      traversal.pop()
      const funcIndex = frame.index
      if (lowLinks[funcIndex] === indices[funcIndex]) {
        while (true) {
          const member = stack.pop()!
          onStack[member] = false
          componentIndices[member] = nextComponent
          if (member === funcIndex) {
            break
          }
        }
        nextComponent++
      }
      const parent = traversal.at(-1)
      if (parent) {
        lowLinks[parent.index] = Math.min(
          lowLinks[parent.index]!,
          lowLinks[funcIndex]!,
        )
      }
    }
  }

  return componentIndices
}

/** An aggregation of the self costs of functions with a given category. */
export type AggregatedCallGraphCategoryMetrics = {
  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the summed self
   * values of functions with this category.
   */
  values: Float64Array
}

/** One function's recorded costs during calls from a given direct caller. */
type AggregatedCallGraphCallerMetrics = {
  /** The caller corresponding to the ID. */
  caller: AggregatedCallGraphFunction

  /** The recorded number of calls, or `0` when the format records none. */
  callCount: number

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the cost recorded
   * in the function and its callees during calls from this caller.
   */
  totalValues: Float64Array
}

/** One function's recorded costs during its calls to a given direct callee. */
type AggregatedCallGraphCalleeMetrics = {
  /** The callee corresponding to the ID. */
  callee: AggregatedCallGraphFunction

  /** The recorded number of calls, or `0` when the format records none. */
  callCount: number

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the cost recorded
   * in the callee and its callees during this function's calls to it.
   */
  totalValues: Float64Array
}

/** An aggregation of one function's recorded costs within a call graph. */
export type AggregatedCallGraphFunction = {
  type: `function`

  /** An index that uniquely identifies this function. */
  id: number

  /** The name of the function in code. */
  name: string

  /** Where the function was defined, if known. */
  location?: SourceLocation

  /** The category of functions this function belongs to. */
  category: string

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the cost recorded
   * directly in the function's body, excluding its callees.
   */
  selfValues: Float64Array

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the cost recorded
   * in the function's body and all its callees: its self values plus its
   * outgoing arcs' inclusive values, excluding the arcs to functions in its own
   * recursion cycle, which re-count the same work.
   */
  totalValues: Float64Array

  /** 1-based line number to the self values recorded at that line. */
  lineToMetrics: Map<number, Float64Array>

  /** Direct caller ID to the costs recorded during that caller's calls. */
  callerIdToMetrics: Map<number, AggregatedCallGraphCallerMetrics>

  /** Direct callee ID to the costs recorded during calls to that callee. */
  calleeIdToMetrics: Map<number, AggregatedCallGraphCalleeMetrics>
}

/** An aggregation of an input parsed as a weighted call graph. */
export type AggregatedCallGraph = {
  type: `call-graph`

  /** @see {@link AggregatedSamplingProfile.context} */
  context: ProfileToMdContext

  /** Metrics recorded in this call graph. */
  metrics: Metric[]

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the whole
   * input's recorded cost: the sum of every function's self values.
   */
  totalValues: Float64Array

  /** Function category to the summed self values of that category. */
  categoryToMetrics: Map<string, AggregatedCallGraphCategoryMetrics>

  /** Aggregated data for all functions in this call graph. */
  functions: AggregatedCallGraphFunction[]
}
