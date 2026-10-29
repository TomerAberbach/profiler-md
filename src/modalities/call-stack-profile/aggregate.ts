import { HASH_SEED, HashInterner, mixHash } from '../../helpers/intern.ts'
import type { SourceLocation } from '../../location.ts'
import type {
  AggregationProfileToMdOptions,
  FunctionCategory,
  ProfileToMdContext,
} from '../../options.ts'
import { originSpecOf } from '../../origins/index.ts'
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator, OtherSideInput } from '../aggregator.ts'
import type { Metric } from '../metric.ts'
import {
  FunctionMerger,
  parseStackFrameFunction,
  StackFrameTable,
} from '../stack-frame.ts'
import type {
  StackFrameFunction,
  StackFrameFunctionTable,
} from '../stack-frame.ts'
import type {
  CallStackProfile,
  Observation,
  ObservationLineMetrics,
} from './type.ts'

/** An aggregation of all observations within a call stack profile. */
export type AggregatedCallStackProfile = {
  type: `call-stack-profile`

  /**
   * The context (format and resolved origin) this profile was aggregated under.
   * Match keys vary by origin, so build each diffed side's keys under that
   * side's own context. Sides that resolved different origins can normalize
   * match keys differently and miss matches.
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

export class CallStackProfileAggregator implements InputAggregator<AggregatedCallStackProfile> {
  readonly #profile: CallStackProfile

  public constructor(profile: CallStackProfile) {
    this.#profile = profile
  }

  public detectOrigin(detector: OriginDetector): void {
    if (this.#profile.originHint !== undefined) {
      detector.hint(this.#profile.originHint)
    }
    StackFrameTable.for(this.#profile.frames).addToDetector(detector)
  }

  /** The identity keys of the input's functions with no line. */
  public linelessFunctionKeys(
    context: ProfileToMdContext,
  ): ReadonlySet<string> {
    return StackFrameTable.for(this.#profile.frames)
      .resolve(context)
      .linelessFunctionKeys()
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
    otherSide?: OtherSideInput,
  ): AggregatedCallStackProfile {
    const { metrics, countMetric, frames, observations, lineMetrics } =
      this.#profile

    const functions = StackFrameTable.for(frames).resolve(context)
    const aggregator = new ObservationsAggregator(
      metrics,
      // The origin's answer overrides the format's, where the format's
      // origins disagree on what one count measures.
      originSpecOf(context.origin).countMetric(context.format) ?? countMetric,
      functions,
      options,
      context,
      otherSide && otherSideFunctionKeys(otherSide),
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

/**
 * The identity keys of the other side's functions with no line, or none when
 * the other side's input is another modality's.
 */
const otherSideFunctionKeys = ({
  aggregator,
  context,
}: OtherSideInput): ReadonlySet<string> =>
  aggregator instanceof CallStackProfileAggregator
    ? aggregator.linelessFunctionKeys(context)
    : new Set()

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
 * An aggregation of data from every observation involving a given function
 * within a profile.
 */
export type AggregatedCallStackProfileFunction = {
  type: `function`

  /** An index that uniquely identifies this function. */
  id: number

  name: string

  /** Where the function was defined, if known. */
  location?: SourceLocation

  /**
   * Whether the function merges several functions of a diff side that have no
   * line and share a match key, so the entry match names and locates it.
   */
  merged?: boolean

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
 * An aggregation of observations recorded at a given line within a function's
 * body.
 */
export type AggregatedCallStackProfileLineMetrics = {
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
 * An aggregation of data from every observation involving a given function call
 * stack within a profile.
 */
export type AggregatedCallStackProfileCallStack = {
  /** The functions on the call stack in callee to caller order. */
  frames: AggregatedCallStackProfileFunction[]

  /** @see {@link Observation.truncated} */
  truncated: boolean

  /** The number of observations recorded with this exact call stack. */
  selfCount: number

  /**
   * For each metric in {@link AggregatedCallStackProfile.metrics}, the sum of
   * values from observations recorded with this exact call stack.
   */
  selfValues: Float64Array
}

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
  // call stack creation. The interner owns the canonical call stack list.
  readonly #callStackInterner = new HashInterner<
    Pick<AggregatedCallStackProfileCallStack, `frames` | `truncated`>,
    AggregatedCallStackProfileCallStack
  >(
    ({ frames, truncated }) => {
      let hash = HASH_SEED
      for (const frame of frames) {
        hash = mixHash(hash, frame.id)
      }
      return truncated ? mixHash(hash, -1) : hash
    },
    (callStack, { frames, truncated }) =>
      callStack.truncated === truncated &&
      sameStackFrameIds(callStack.frames, frames),
  )

  /** Reused for every lookup, because the interner keeps no key. */
  readonly #callStackKey: Pick<
    AggregatedCallStackProfileCallStack,
    `frames` | `truncated`
  > = { frames: [], truncated: false }

  readonly #idToCallStack: AggregatedCallStackProfileCallStack[]
  readonly #keyToFunction: Map<
    number | string | symbol,
    AggregatedCallStackProfileFunction
  >

  readonly #frameIndexToFunction: AggregatedCallStackProfileFunction[]

  readonly #functionMerger: FunctionMerger

  public constructor(
    /** @see {@link AggregatedCallStackProfile.metrics} */
    metrics: Metric[],
    /** @see {@link AggregatedCallStackProfile.countMetric} */
    countMetric: Metric | null,
    functions: StackFrameFunctionTable,
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
    /** @see {@link FunctionMerger} */
    otherSideKeys: ReadonlySet<string> | undefined,
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
    this.#functionMerger = new FunctionMerger(options, context, otherSideKeys)
  }

  /**
   * Adds {@link Observation.count} occurrences (default `1`) of one
   * observation. An empty {@link Observation.frameIndices} is a stackless
   * observation, attributed to a single shared anonymous function.
   *
   * Passing a count is equivalent to calling this once per occurrence, but runs
   * in time independent of the count.
   */
  public addObservation({
    id,
    values,
    frameIndices,
    executingLine,
    count = 1,
    truncated = false,
  }: Observation): void {
    if (count <= 0) {
      return
    }

    const callStack = this.#getOrCreateCallStack(frameIndices, truncated, id)
    const callee = callStack.frames[0]!

    // Line metrics aggregate per observation rather than per call stack in
    // `#propagateCallStackMetrics`: frames that normalize to the same function
    // intern to the same call stack while recording different executing lines.
    let leafLine = executingLine
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
    truncated: boolean,
    id: number | undefined,
  ): AggregatedCallStackProfileCallStack {
    // A stable call stack ID lets repeat call stacks (the common case, since a
    // profile has far fewer unique call stacks than observations) skip
    // resolving frames and the hash-keyed lookup, becoming a single
    // sparse-array index.
    if (id !== undefined) {
      const cached = this.#idToCallStack[id]
      if (cached) {
        return cached
      }
    }

    const hasMarker =
      frameIndices.length > 0 &&
      this.#functions.isTruncationMarker(frameIndices.at(-1)!)
    const rootEnd = frameIndices.length - (hasMarker ? 1 : 0)
    const frames: AggregatedCallStackProfileFunction[] = []
    for (let i = 0; i < rootEnd; i++) {
      const func = this.#getOrCreateFunction(frameIndices[i]!)
      if (func) {
        frames.push(func)
      }
    }
    if (hasMarker) {
      if (frames.length > 0) {
        truncated = true
      } else {
        // A marker with no frame below it is the only record of the call
        // stack, so it stays a frame rather than joining the stackless
        // observations.
        const marker = this.#getOrCreateFunction(frameIndices[rootEnd]!)
        if (marker) {
          frames.push(marker)
        }
      }
    }
    if (frames.length === 0) {
      frames.push(this.#getOrCreateAnonymousFunction())
    }
    const callStack = this.#internCallStack(frames, truncated)

    // Distinct IDs can resolve to the same call stack, so memoize against
    // the canonical call stack the hash deduplicated to, not a fresh one.
    if (id !== undefined) {
      this.#idToCallStack[id] = callStack
    }
    return callStack
  }

  #getOrCreateAnonymousFunction(): AggregatedCallStackProfileFunction {
    return (
      this.#keyToFunction.get(ANONYMOUS_FUNCTION_KEY) ??
      this.#registerFunction(
        ANONYMOUS_FUNCTION_KEY,
        parseStackFrameFunction({}),
      )
    )
  }

  #internCallStack(
    frames: AggregatedCallStackProfileFunction[],
    truncated: boolean,
  ): AggregatedCallStackProfileCallStack {
    const key = this.#callStackKey
    key.frames = frames
    key.truncated = truncated
    const index = this.#callStackInterner.intern(key, () => ({
      frames,
      truncated,
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
    // one function.
    const frameFunction = this.#functions.function(index)
    if (!frameFunction) {
      return undefined
    }
    const func = this.#functionMerger.resolve(
      frameFunction,
      this.#keyToFunction,
      (key, func) => this.#registerFunction(key, func),
    )
    this.#frameIndexToFunction[index] = func
    return func
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
   * Function, caller, and callee attributions depend only on a call stack's
   * frames, so summing each unique call stack's aggregated self metrics
   * reproduces the per-observation aggregation losslessly in one pass per
   * unique call stack, rather than one O(depth) pass per observation.
   */
  #propagateCallStackMetrics(): void {
    const callStacks = this.#callStackInterner.items
    const metricCount = this.#metrics.length
    const functionCount = this.#keyToFunction.size
    const functionIdToLastSeenEpoch = new Uint32Array(functionCount)

    // A function is called from few sites, so across call stacks a callee
    // repeats its previous caller more often than not. The cache then replaces
    // the frame pair's hash lookup with two indexed reads.
    const lastCallerIdByCalleeId = new Int32Array(functionCount).fill(-1)
    const lastMetricsByCalleeId = new Array<
      AggregatedCallStackProfileCalleeMetrics | undefined
    >(functionCount)

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

      // An epoch per call stack deduplicates functions that recur within it, so
      // their totals count it once. A per-pair epoch deduplicates a frame pair
      // that recurs (recursion) the same way.
      const lastIndex = frames.length - 1
      for (let i = 0; i <= lastIndex; i++) {
        const callee = frames[i]!

        if (functionIdToLastSeenEpoch[callee.id] !== epoch) {
          functionIdToLastSeenEpoch[callee.id] = epoch
          callee.totalCount += selfCount
          for (let j = 0; j < metricCount; j++) {
            callee.totalValues[j]! += selfValues[j]!
          }
        }

        if (i === lastIndex) {
          break
        }
        const caller = frames[i + 1]!

        let calleeMetrics: AggregatedCallStackProfileCalleeMetrics
        if (lastCallerIdByCalleeId[callee.id] === caller.id) {
          calleeMetrics = lastMetricsByCalleeId[callee.id]!
        } else {
          let metrics = caller.calleeIdToMetrics.get(callee.id)
          if (!metrics) {
            metrics = {
              callee,
              totalCount: 0,
              totalValues: new Float64Array(metricCount),
              lastSeenEpoch: 0,
            }
            caller.calleeIdToMetrics.set(callee.id, metrics)

            // Mirror the new frame pair on the callee, so its set of direct
            // callers is complete even when it never appears as a leaf. Its
            // self metrics then stay zero.
            if (!callee.callerIdToMetrics.has(caller.id)) {
              callee.callerIdToMetrics.set(caller.id, {
                caller,
                selfCount: 0,
                selfValues: new Float64Array(metricCount),
              })
            }
          }
          lastCallerIdByCalleeId[callee.id] = caller.id
          lastMetricsByCalleeId[callee.id] = metrics
          calleeMetrics = metrics
        }

        if (calleeMetrics.lastSeenEpoch === epoch) {
          continue
        }
        calleeMetrics.lastSeenEpoch = epoch

        calleeMetrics.totalCount += selfCount
        for (let j = 0; j < metricCount; j++) {
          calleeMetrics.totalValues[j]! += selfValues[j]!
        }
      }
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

      // A function that was never a leaf would add an empty category.
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
 * Key for the single shared anonymous function that stackless observations
 * (empty {@link Observation.frameIndices}) are attributed to. A symbol so it
 * can never collide with a {@link StackFrameFunction.key}. All stackless
 * observations merge into one bucket because nothing distinguishes them.
 */
const ANONYMOUS_FUNCTION_KEY = Symbol(`anonymous`)
