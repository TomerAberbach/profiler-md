import { stronglyConnectedComponents } from '../../helpers/graph.ts'
import type { SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  FunctionCategory,
  ProfileToMdContext,
} from '../../options.ts'
import { hasRuntimeInsertedArcsForOrigin } from '../../origins/index.ts'
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import type { Metric } from '../metric.ts'
import { parseStackFrameFunction, StackFrameTable } from '../stack-frame.ts'
import type {
  StackFrameFunction,
  StackFrameFunctionTable,
} from '../stack-frame.ts'
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
   * Per parsed function index, the outgoing arcs the cycle analysis walks,
   * empty for a function whose origin marks them runtime-inserted.
   */
  readonly #cycleCalls: CallGraphFunction[`calls`][]

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

    this.#mergedFunctions = this.#mergeFunctions()
    this.#cycleCalls = this.#cycleAnalysisCalls()
    this.#totalValues = new Float64Array(metrics.length)
  }

  /**
   * The merged function each parsed function aggregates into, by parsed
   * function index.
   *
   * A function's identity is its normalized name and location, so parsed
   * functions that normalize alike (e.g. callgrind's `fn` and its
   * recursion-separated `fn'2`) merge into one function. A frame the origin
   * dropped merges into a single shared anonymous function.
   */
  #mergeFunctions(): AggregatedCallGraphFunction[] {
    return this.#functions.map((_, index) => {
      const frameFunction = this.#frameFunctions.function(index)
      const key = frameFunction?.key ?? ANONYMOUS_FUNCTION_KEY
      return (
        this.#keyToFunction.get(key) ??
        this.#registerFunction(
          key,
          frameFunction ?? parseStackFrameFunction({}),
        )
      )
    })
  }

  /**
   * Each parsed function's outgoing arcs, by parsed function index, empty for
   * a function whose outgoing calls come from its runtime rather than the
   * profiled program.
   *
   * Only the cycle analysis reads these, so a runtime's arcs cannot join the
   * functions they intersperse into one cycle. Every other stage reads the
   * parsed arcs, so the arcs still count toward totals and appear in the
   * caller/callee metrics.
   */
  #cycleAnalysisCalls(): CallGraphFunction[`calls`][] {
    const runtimeInserted = new Set<AggregatedCallGraphFunction>()
    for (const func of this.#keyToFunction.values()) {
      if (hasRuntimeInsertedArcsForOrigin(func, this.#context.origin)) {
        runtimeInserted.add(func)
      }
    }
    return this.#functions.map((parsed, index) =>
      runtimeInserted.has(this.#mergedFunctions[index]!) ? [] : parsed.calls,
    )
  }

  #registerFunction(
    key: string | symbol,
    { name, location }: StackFrameFunction,
  ): AggregatedCallGraphFunction {
    const func: AggregatedCallGraphFunction = {
      type: `function`,
      id: this.#keyToFunction.size,
      name,
      location,
      // `aggregate` assigns categories at the end, in one pass over the full
      // set of functions.
      category: `unknown`,
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
    this.#aggregateCosts()
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

  /** Aggregates selves, per-line selves, and arcs onto the merged functions. */
  #aggregateCosts(): void {
    for (const [index, parsed] of this.#functions.entries()) {
      const func = this.#mergedFunctions[index]!

      addValues(func.selfValues, parsed.selfValues)
      addValues(this.#totalValues, parsed.selfValues)
      this.#aggregateLineCosts(func, parsed.lineToValues)

      for (const call of parsed.calls) {
        this.#aggregateArc(func, call)
      }
    }
  }

  /** Aggregates a parsed function's per-line selves onto its merged function. */
  #aggregateLineCosts(
    func: AggregatedCallGraphFunction,
    lineToValues: CallGraphFunction[`lineToValues`],
  ): void {
    for (const [line, values] of lineToValues) {
      let lineMetrics = func.lineToMetrics.get(line)
      if (!lineMetrics) {
        lineMetrics = new Float64Array(this.#metrics.length)
        func.lineToMetrics.set(line, lineMetrics)
      }
      addValues(lineMetrics, values)
    }
  }

  /** Aggregates one outgoing arc onto both of its endpoints. */
  #aggregateArc(
    func: AggregatedCallGraphFunction,
    call: CallGraphFunction[`calls`][number],
  ): void {
    const callee = this.#mergedFunctions[call.callee]!
    this.#aggregateCalleeMetrics(func, callee, call)
    this.#aggregateCallerMetrics(func, callee, call)
  }

  /** Aggregates an arc onto its caller's metrics for the callee. */
  #aggregateCalleeMetrics(
    func: AggregatedCallGraphFunction,
    callee: AggregatedCallGraphFunction,
    call: CallGraphFunction[`calls`][number],
  ): void {
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
  }

  /** Aggregates an arc onto its callee's metrics for the caller. */
  #aggregateCallerMetrics(
    func: AggregatedCallGraphFunction,
    callee: AggregatedCallGraphFunction,
    call: CallGraphFunction[`calls`][number],
  ): void {
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
   *   understates the member a cycle is entered at: the rest of the cycle's
   *   subtree counts toward the members that call out to it, not toward the
   *   entry point. Totalling a cycle as one unit, the standard alternative,
   *   fails on real captures. The calls between libc's own functions join many
   *   unrelated functions into one cycle, and every function in it would then
   *   report the whole program's cost. The arcs themselves stay in the
   *   caller/callee metrics, so recursion is still visible.
   * - When several parsed nodes merge into one function, their subtrees
   *   overlap rather than add: a recursion level's cost is already inside the
   *   outer level's arcs. The merged function reports the largest instance's
   *   total, floored at its (summed) self cost so no total falls below its
   *   self cost.
   */
  #computeTotals(): void {
    const componentIndices = stronglyConnectedComponents(
      this.#cycleCalls,
      call => call.callee,
    )
    for (let index = 0; index < this.#functions.length; index++) {
      raiseValues(
        this.#mergedFunctions[index]!.totalValues,
        this.#acyclicTotalValues(index, componentIndices),
      )
    }

    for (const func of this.#keyToFunction.values()) {
      raiseValues(func.totalValues, func.selfValues)
    }
  }

  /**
   * A parsed function's total: its self cost plus the inclusive costs of the
   * outgoing arcs that leave its recursion cycle, which
   * {@link componentIndices} assigns each parsed function.
   */
  #acyclicTotalValues(index: number, componentIndices: number[]): Float64Array {
    const totalValues = new Float64Array(this.#metrics.length)
    addValues(totalValues, this.#functions[index]!.selfValues)
    for (const call of this.#functions[index]!.calls) {
      if (componentIndices[call.callee] !== componentIndices[index]) {
        addValues(totalValues, call.totalValues)
      }
    }
    return totalValues
  }

  /**
   * Assigns each function's category and builds the graph's category metrics
   * from the functions' self values, like the sampling aggregator's
   * categorization. It runs at the end so
   * {@link ProfileToMdOptions.categorizeFunctions} receives the full set of
   * functions. Skips a function with no recorded self cost so it can't
   * introduce an otherwise-empty category.
   */
  #categorize(
    functions: AggregatedCallGraphFunction[],
  ): Map<FunctionCategory, AggregatedCallGraphCategoryMetrics> {
    const categories = this.#options.categorizeFunctions(
      functions,
      this.#context,
    )
    const categoryToMetrics = new Map<
      FunctionCategory,
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

/** Raises {@link target} to {@link values} element-wise. */
const raiseValues = (target: Float64Array, values: ArrayLike<number>): void => {
  for (let i = 0; i < target.length; i++) {
    target[i] = Math.max(target[i]!, values[i] ?? 0)
  }
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
  category: FunctionCategory

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

  /** @see {@link AggregatedCallStackProfile.context} */
  context: ProfileToMdContext

  /** Metrics recorded in this call graph. */
  metrics: Metric[]

  /**
   * For each metric in {@link AggregatedCallGraph.metrics}, the whole
   * input's recorded cost: the sum of every function's self values.
   */
  totalValues: Float64Array

  /** Function category to the summed self values of that category. */
  categoryToMetrics: Map<FunctionCategory, AggregatedCallGraphCategoryMetrics>

  /** Aggregated data for all functions in this call graph. */
  functions: AggregatedCallGraphFunction[]
}
