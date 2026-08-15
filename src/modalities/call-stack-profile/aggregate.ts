import { HashInterner } from '../../helpers/intern.ts'
import type { SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  FunctionCategory,
  ProfileToMdContext,
} from '../../options.ts'
import { countMetricForOrigin } from '../../origins/index.ts'
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import type { Metric } from '../metric.ts'
import { parseStackFrameFunction, StackFrameTable } from '../stack-frame.ts'
import type {
  StackFrameFunction,
  StackFrameFunctionTable,
} from '../stack-frame.ts'
import type {
  CallStackProfile,
  Observation,
  ObservationLineMetrics,
} from './type.ts'

export class CallStackProfileAggregator implements InputAggregator<AggregatedCallStackProfile> {
  readonly #profile: CallStackProfile

  public constructor(profile: CallStackProfile) {
    this.#profile = profile
  }

  /**
   * Applies the parser's origin hint, then adds the profile's distinct frames
   * to {@link detector} until decided.
   */
  public detectOrigin(detector: OriginDetector): void {
    if (this.#profile.originHint !== undefined) {
      detector.hint(this.#profile.originHint)
    }
    StackFrameTable.for(this.#profile.frames).addToDetector(detector)
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedCallStackProfile {
    const { metrics, countMetric, frames, observations, lineMetrics } =
      this.#profile

    const functions = StackFrameTable.for(frames).resolve(context)
    const aggregator = new ObservationsAggregator(
      metrics,
      // The origin's answer overrides the format's, where the format's
      // emitters disagree on what one count unit is.
      countMetricForOrigin(context.format, context.origin) ?? countMetric,
      functions,
      options,
      context,
    )
    for (const observation of observations) {
      aggregator.addObservation(observation)
    }
    for (const lineMetric of lineMetrics ?? []) {
      aggregator.addLineMetrics(lineMetric)
    }
    return aggregator.aggregate()
  }
}

/** Aggregates a profile's observations over its normalized distinct frames. */
class ObservationsAggregator {
  readonly #metrics: Metric[]
  readonly #countMetric: Metric | null

  /**
   * The normalized distinct frames' functions. {@link Observation.frameIndices} are
   * indices into the table.
   */
  readonly #functions: StackFrameFunctionTable
  readonly #options: AggregationProfileToMdOptions
  readonly #context: ProfileToMdContext

  #totalCount: number
  readonly #totalValues: Float64Array

  // Call stacks are deduplicated by a numeric hash of their frames' function
  // IDs rather than a joined string key, whose building and hashing dominated
  // stack creation. The interner owns the canonical call stack list.
  readonly #callStackInterner = new HashInterner<
    AggregatedCallStackProfileFunction[],
    AggregatedCallStackProfileCallStack
  >(
    (frames, sink) => {
      for (const frame of frames) {
        sink.add(frame.id)
      }
    },
    (callStack, frames) => sameStackFrameIds(callStack.frames, frames),
  )

  readonly #idToCallStack: AggregatedCallStackProfileCallStack[]
  readonly #keyToFunction: Map<
    number | string | symbol,
    AggregatedCallStackProfileFunction
  >

  /** Per frame index, its registered function, a frame-index fast path. */
  readonly #frameIndexToFunction: AggregatedCallStackProfileFunction[]

  public constructor(
    /** @see {@link AggregatedCallStackProfile.metrics} */
    metrics: Metric[],
    /** @see {@link AggregatedCallStackProfile.countMetric} */
    countMetric: Metric | null,
    functions: StackFrameFunctionTable,
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ) {
    this.#metrics = metrics
    this.#countMetric = countMetric
    this.#functions = functions
    this.#options = options
    this.#context = context

    this.#totalCount = 0
    this.#totalValues = new Float64Array(this.#metrics.length)

    this.#idToCallStack = []
    this.#keyToFunction = new Map()
    this.#frameIndexToFunction = []
  }

  /**
   * Adds {@link Observation.count} occurrences (default `1`) of one profile
   * record. An empty {@link Observation.frameIndices} is a stackless
   * observation, attributed to a single shared anonymous function.
   *
   * Passing a count is equivalent to calling this once per occurrence, but runs
   * in time independent of the count. Pre-aggregated formats use it to avoid a
   * per-occurrence loop.
   */
  public addObservation({
    id,
    values,
    frameIndices,
    line,
    count = 1,
  }: Observation): void {
    if (count <= 0) {
      return
    }

    const callStack = this.#getOrCreateCallStack(frameIndices, id)
    const callee = callStack.frames[0]!

    // Line metrics aggregate per observation rather than per call stack in
    // `#propagateCallStackMetrics`: frames that normalize to the same function
    // intern to the same call stack while sampling different executing lines.
    //
    // When the observation has no explicit line, fall back to the leaf frame's
    // executing line, the one its origin's `normalizeStackFrame` derived so it
    // appears in the function's line breakdown.
    let leafLine = line
    if (leafLine === undefined) {
      const leafIndex = frameIndices[0]
      leafLine =
        leafIndex === undefined
          ? undefined
          : this.#functions.executingLine(leafIndex)
    }

    let lineMetrics
    if (leafLine !== undefined) {
      lineMetrics = callee.lineToMetrics.get(leafLine)
      if (!lineMetrics) {
        lineMetrics = {
          count: 0,
          values: new Float64Array(this.#metrics.length),
        }
        callee.lineToMetrics.set(leafLine, lineMetrics)
      }
    }

    this.#totalCount += count
    callStack.selfCount += count
    if (lineMetrics) {
      lineMetrics.count += count
    }

    for (let i = 0; i < values.length; i++) {
      const value = values[i]! * count
      this.#totalValues[i]! += value
      callStack.selfValues[i]! += value
      if (lineMetrics) {
        lineMetrics.values[i]! += value
      }
    }
  }

  /**
   * Propagates each canonical call stack's aggregated self metrics to its
   * functions' self and total metrics, leaf caller metrics, and frame-pair
   * callee metrics.
   *
   * These attributions depend only on a stack's frames, so summing the stack's
   * aggregated self metrics reproduces the per-observation aggregation
   * losslessly in one pass per unique call stack, rather than one O(depth) pass
   * per observation.
   */
  #propagateCallStackMetrics(): void {
    const callStacks = this.#callStackInterner.items
    const metricCount = this.#metrics.length
    const functionIdToLastSeenEpoch = new Uint32Array(this.#keyToFunction.size)

    for (let epoch = 1; epoch <= callStacks.length; epoch++) {
      const { frames, selfCount, selfValues } = callStacks[epoch - 1]!

      const leaf = frames[0]!
      leaf.selfCount += selfCount
      for (let i = 0; i < metricCount; i++) {
        leaf.selfValues[i]! += selfValues[i]!
      }

      const leafCaller = frames[1]
      if (leafCaller) {
        let callerMetrics = leaf.callerIdToMetrics.get(leafCaller.id)
        if (!callerMetrics) {
          callerMetrics = {
            caller: leafCaller,
            selfCount: 0,
            selfValues: new Float64Array(metricCount),
          }
          leaf.callerIdToMetrics.set(leafCaller.id, callerMetrics)
        }
        callerMetrics.selfCount += selfCount
        for (let i = 0; i < metricCount; i++) {
          callerMetrics.selfValues[i]! += selfValues[i]!
        }
      }

      // A per-stack epoch deduplicates functions that recur within a single
      // call stack so their totals count it just once.
      for (const func of frames) {
        if (functionIdToLastSeenEpoch[func.id] === epoch) {
          continue
        }
        functionIdToLastSeenEpoch[func.id] = epoch

        func.totalCount += selfCount
        for (let i = 0; i < metricCount; i++) {
          func.totalValues[i]! += selfValues[i]!
        }
      }

      // A frame pair (caller, callee) can recur within a single call stack
      // (recursion), so a per-pair epoch deduplicates it to count the stack
      // just once, the same way the function epoch above deduplicates
      // functions.
      const maxFramePairCount = frames.length - 1
      for (let i = 0; i < maxFramePairCount; i++) {
        const callee = frames[i]!
        const caller = frames[i + 1]!

        let calleeMetrics = caller.calleeIdToMetrics.get(callee.id)
        if (!calleeMetrics) {
          calleeMetrics = {
            callee,
            totalCount: 0,
            totalValues: new Float64Array(metricCount),
            lastSeenEpoch: epoch,
          }
          caller.calleeIdToMetrics.set(callee.id, calleeMetrics)

          // Mirror the new frame pair on the callee, so its set of direct
          // callers is complete even when it never appears as a leaf (its self
          // metrics stay zero). The default entry filter reads that set to
          // decide whether `ours` code calls the function directly.
          if (!callee.callerIdToMetrics.has(caller.id)) {
            callee.callerIdToMetrics.set(caller.id, {
              caller,
              selfCount: 0,
              selfValues: new Float64Array(metricCount),
            })
          }
        } else if (calleeMetrics.lastSeenEpoch === epoch) {
          // This is a recursive call. Don't count this callee twice.
          continue
        } else {
          calleeMetrics.lastSeenEpoch = epoch
        }

        calleeMetrics.totalCount += selfCount
        for (let j = 0; j < metricCount; j++) {
          calleeMetrics.totalValues[j]! += selfValues[j]!
        }
      }
    }
  }

  public addLineMetrics({ frame, lines }: ObservationLineMetrics): void {
    const func = this.#getOrCreateFunction(frame)
    if (!func) {
      return
    }
    for (const { line, count, values } of lines) {
      let lineMetrics = func.lineToMetrics.get(line)
      if (!lineMetrics) {
        lineMetrics = {
          count: 0,
          values: new Float64Array(this.#metrics.length),
        }
        func.lineToMetrics.set(line, lineMetrics)
      }
      lineMetrics.count += count
      for (let i = 0; i < values.length; i++) {
        lineMetrics.values[i]! += values[i]!
      }
    }
  }

  #getOrCreateCallStack(
    frameIndices: number[],
    id: number | undefined,
  ): AggregatedCallStackProfileCallStack {
    // A stable stack ID lets repeat stacks (the common case, since a profile
    // has far fewer unique stacks than observations) skip resolving frames and
    // the hash-keyed lookup, becoming a single sparse-array index.
    if (id !== undefined) {
      const cached = this.#idToCallStack[id]
      if (cached) {
        return cached
      }
    }

    // A stackless observation has no frames (or only dropped ones); attribute
    // it to a shared anonymous frame.
    const frames: AggregatedCallStackProfileFunction[] = []
    for (const index of frameIndices) {
      const func = this.#getOrCreateFunction(index)
      if (func) {
        frames.push(func)
      }
    }
    if (frames.length === 0) {
      frames.push(this.#getOrCreateAnonymousFunction())
    }
    const callStack = this.#internCallStack(frames)

    // Distinct IDs can resolve to the same logical stack, so memoize against
    // the canonical call stack the hash deduplicated to, not a fresh one.
    if (id !== undefined) {
      this.#idToCallStack[id] = callStack
    }
    return callStack
  }

  /**
   * Returns the canonical call stack for {@link frames}, creating it on first
   * sight. Stacks are keyed by a numeric hash of their frames' function IDs; a
   * hash collision falls back to comparing IDs, so distinct stacks that hash
   * alike stay distinct.
   */
  #internCallStack(
    frames: AggregatedCallStackProfileFunction[],
  ): AggregatedCallStackProfileCallStack {
    const index = this.#callStackInterner.intern(frames, () => ({
      frames,
      selfCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
    }))
    return this.#callStackInterner.items[index]!
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  #getOrCreateFunction(
    index: number,
  ): AggregatedCallStackProfileFunction | undefined {
    const cached = this.#frameIndexToFunction[index]
    if (cached) {
      return cached
    }

    // A function's identity is its normalized name and location, so frames that
    // normalize alike (e.g. one function recorded at several lines) merge into
    // one function; distinct frames sharing that identity merge too.
    const frameFunction = this.#functions.function(index)
    if (!frameFunction) {
      return undefined
    }
    const func =
      this.#keyToFunction.get(frameFunction.key) ??
      this.#registerFunction(frameFunction.key, frameFunction)
    this.#frameIndexToFunction[index] = func
    return func
  }

  /**
   * The single shared anonymous function for stackless observations, keyed by a
   * symbol so it can never collide with a {@link StackFrameFunction.key}.
   */
  #getOrCreateAnonymousFunction(): AggregatedCallStackProfileFunction {
    return (
      this.#keyToFunction.get(ANONYMOUS_FUNCTION_KEY) ??
      this.#registerFunction(
        ANONYMOUS_FUNCTION_KEY,
        parseStackFrameFunction({}),
      )
    )
  }

  #registerFunction(
    key: number | string | symbol,
    { name, location }: StackFrameFunction,
  ): AggregatedCallStackProfileFunction {
    const func: AggregatedCallStackProfileFunction = {
      type: `function`,
      id: this.#keyToFunction.size,
      name,
      location,
      // Categories are assigned at the end of `aggregate`, in one pass over the
      // full set of functions.
      category: `unknown`,
      selfCount: 0,
      totalCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
      totalValues: new Float64Array(this.#metrics.length),
      lineToMetrics: new Map(),
      callerIdToMetrics: new Map(),
      calleeIdToMetrics: new Map(),
    }
    this.#keyToFunction.set(key, func)
    return func
  }

  public aggregate(): AggregatedCallStackProfile {
    this.#propagateCallStackMetrics()

    const rates = new Float64Array(this.#metrics.length)
    // A profile that counted nothing has no rate to average, so its rates stay
    // zero.
    if (this.#totalCount > 0) {
      for (let i = 0; i < rates.length; i++) {
        rates[i] = this.#totalValues[i]! / this.#totalCount
      }
    }

    const functions = [...this.#keyToFunction.values()]
    const callStacks = this.#callStackInterner.items

    return {
      type: `call-stack-profile`,
      context: this.#context,
      metrics: this.#metrics,
      countMetric: this.#countMetric,
      totalCount: this.#totalCount,
      totalValues: this.#totalValues,
      rates,
      categoryToMetrics: this.#categorize(functions),
      functions,
      callStacks,
    }
  }

  /**
   * Assigns each function's category and builds the profile's category metrics.
   *
   * Categorization runs here, at the end of aggregation, so it sees the full
   * set of functions, from which {@link ProfileToMdOptions.categorizeFunctions}
   * can determine the origin (when the context's origin is `null`) before
   * categorizing.
   *
   * The category metrics are built from each function's self metrics rather
   * than aggregated per observation: a self observation's leaf is exactly its
   * function, so summing self values over the functions of a category
   * reproduces the per-observation total losslessly, in time linear in the
   * function count rather than the observation count.
   */
  #categorize(
    functions: AggregatedCallStackProfileFunction[],
  ): Map<FunctionCategory, AggregatedCallStackProfileCategoryMetrics> {
    const categories = this.#options.categorizeFunctions(
      functions,
      this.#context,
    )
    const categoryToMetrics = new Map<
      FunctionCategory,
      AggregatedCallStackProfileCategoryMetrics
    >()

    for (let i = 0; i < functions.length; i++) {
      const func = functions[i]!
      const category = categories[i]!
      func.category = category

      // Only leaf functions (those with self observations) contributed to the
      // category metrics during aggregation, so skip functions that were never
      // a leaf to avoid introducing empty categories that wouldn't otherwise
      // appear.
      if (func.selfCount === 0) {
        continue
      }

      let metric = categoryToMetrics.get(category)
      if (!metric) {
        metric = {
          count: 0,
          values: new Float64Array(this.#metrics.length),
        }
        categoryToMetrics.set(category, metric)
      }
      metric.count += func.selfCount
      for (let i = 0; i < func.selfValues.length; i++) {
        metric.values[i]! += func.selfValues[i]!
      }
    }

    return categoryToMetrics
  }
}

/**
 * Key for the single shared anonymous function that stackless observations
 * (empty {@link Observation.frameIndices}) are attributed to. A symbol so it
 * can never collide with a {@link StackFrameFunction.key}. All stackless
 * observations merge into one bucket because nothing distinguishes them.
 */
const ANONYMOUS_FUNCTION_KEY = Symbol(`anonymous`)

/** Whether two frame lists reference the same functions in the same order. */
const sameStackFrameIds = (
  left: AggregatedCallStackProfileFunction[],
  right: AggregatedCallStackProfileFunction[],
): boolean => {
  if (left.length !== right.length) {
    return false
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i]!.id !== right[i]!.id) {
      return false
    }
  }
  return true
}

/**
 * An aggregation of data from every observation of functions with a given
 * category within a profile.
 */
export type AggregatedCallStackProfileCategoryMetrics = {
  /** The number of observations recorded for functions with this category. */
  count: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded for functions with this category.
   */
  values: Float64Array
}

/**
 * An aggregation of observations recorded at a given line within a function's
 * body.
 */
type AggregatedCallStackProfileLineMetrics = {
  /**
   * The number of observations recorded directly within the function's body at
   * this line.
   */
  count: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded directly within the function's body at
   * this line.
   */
  values: Float64Array
}

/**
 * An aggregation of observations recorded directly within a function's body
 * with a given direct caller.
 */
type AggregatedCallStackProfileCallerMetrics = {
  /** The caller corresponding to the ID. */
  caller: AggregatedCallStackProfileFunction

  /**
   * The number of observations recorded directly within the function's body
   * with this caller.
   */
  selfCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded directly within the function's body with
   * this caller.
   */
  selfValues: Float64Array
}

/**
 * An aggregation of observations recorded within a function's body, _and_ all
 * its callees, with a given direct callee.
 */
type AggregatedCallStackProfileCalleeMetrics = {
  /** The callee corresponding to the ID. */
  callee: AggregatedCallStackProfileFunction

  /**
   * The number of observations recorded directly within the function's body,
   * _and_ all its callees, with this callee.
   */
  totalCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded directly within the function's body,
   * _and_ all its callees, with this callee.
   */
  totalValues: Float64Array

  /**
   * Internal aggregation bookkeeping: the epoch of the most recent call stack
   * whose total this frame pair was counted into, so one that recurs within
   * one call stack is counted just once.
   */
  lastSeenEpoch: number
}

/**
 * An aggregation of data from every observation involving a given function
 * within a profile.
 */
export type AggregatedCallStackProfileFunction = {
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
   * The number of observations recorded directly within the function's body,
   * excluding its callees.
   */
  selfCount: number

  /**
   * The number of observations recorded directly within the function's body
   * _and_ all its callees.
   */
  totalCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded directly within the function's body,
   * excluding its callees.
   */
  selfValues: Float64Array

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded directly within the function's body _and_
   * all its callees.
   */
  totalValues: Float64Array

  /** 1-based line number to values and count for that line. */
  lineToMetrics: Map<number, AggregatedCallStackProfileLineMetrics>

  /**
   * Direct caller id to values and count with that caller's calls to
   * this function.
   */
  callerIdToMetrics: Map<number, AggregatedCallStackProfileCallerMetrics>

  /**
   * Direct callee id to values and count for that callee's calls where
   * this function was a direct or transitive caller.
   */
  calleeIdToMetrics: Map<number, AggregatedCallStackProfileCalleeMetrics>
}

/**
 * An aggregation of data from every observation involving a given function call
 * stack within a profile.
 */
export type AggregatedCallStackProfileCallStack = {
  /** The functions on the call stack in callee to caller order. */
  frames: AggregatedCallStackProfileFunction[]

  /** The number of observations recorded with this exact call stack. */
  selfCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded with this exact call stack.
   */
  selfValues: Float64Array
}

/** An aggregation of all observations within a call stack profile. */
export type AggregatedCallStackProfile = {
  type: `call-stack-profile`

  /**
   * The context (format and resolved origin) this profile was aggregated under.
   * Match-key normalization varies by origin, so each diffed side's keys must
   * be built under that side's own context; sides that resolved different
   * origins can normalize match keys differently and miss matches.
   */
  context: ProfileToMdContext

  /** Metrics recorded in this profile. */
  metrics: Metric[]

  /**
   * What one unit of {@link Observation.count} measures: a periodic sample of
   * the call stack, an entry into a function, an allocated object, a
   * microsecond of traced time.
   *
   * With a count metric, the output formats the count as a count and states a
   * rate per one of the things counted. With a time or size metric, the output
   * formats the count as that quantity and states no rate, since a quantity
   * has no unit to state a rate per.
   *
   * `null` when the counts measure nothing, so the profile reports its metrics
   * alone.
   */
  countMetric: Metric | null

  /** The number of counted units recorded within this profile. */
  totalCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded within this profile.
   */
  totalValues: Float64Array

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the average
   * metric value per counted unit (total value ÷ total count).
   *
   * Meaningless, and unreported, for a profile whose counts measure nothing or
   * that counted nothing.
   */
  rates: Float64Array

  /**
   * Function category to values and count for calls of functions with
   * that category.
   */
  categoryToMetrics: Map<
    FunctionCategory,
    AggregatedCallStackProfileCategoryMetrics
  >

  /** Aggregated data for all functions called in this profile. */
  functions: AggregatedCallStackProfileFunction[]

  /** Aggregated data for all call stacks encountered in this profile. */
  callStacks: AggregatedCallStackProfileCallStack[]
}
