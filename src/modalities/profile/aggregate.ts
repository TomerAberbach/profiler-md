import { HashInterner } from '../../helpers/intern.ts'
import { makeSourceLocation } from '../../location.ts'
import type { SourceLocation } from '../../location.ts'
import type { Metric } from '../../metric.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileToMdContext,
} from '../../options.ts'
import { normalizeFrameForContext } from '../../origins/index.ts'
import type { OriginDetector } from '../../origins/index.ts'
import type { InputAggregator } from '../aggregator.ts'
import type {
  Profile,
  ProfileStackFrame,
  Sample,
  SampleLineMetrics,
} from './type.ts'

export class ProfileAggregator implements InputAggregator<AggregatedProfile> {
  readonly #profile: Profile

  public constructor(profile: Profile) {
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
    ProfileStackFrameTable.for(this.#profile.frames).addToDetector(detector)
  }

  public aggregate(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ): AggregatedProfile {
    const { metrics, frames, samples, lineMetrics } = this.#profile

    const functions = ProfileStackFrameTable.for(frames).resolve(context)
    const aggregator = new SamplesAggregator(
      metrics,
      functions,
      options,
      context,
    )
    for (const sample of samples) {
      aggregator.addSample(sample)
    }
    for (const lineMetric of lineMetrics ?? []) {
      aggregator.addLineMetrics(lineMetric)
    }
    return aggregator.aggregate()
  }
}

/**
 * A profile's distinct {@link ProfileStackFrame}s, owning everything derived
 * from them: origin detection over the raw frames and, once the context is
 * resolved, the {@link ProfileFunctionTable} the frames resolve to.
 *
 * One table exists per frames array. Formats that yield multiple profiles
 * sometimes share the frames; the table shares the derived data
 * so each computation runs once, not once per profile.
 */
class ProfileStackFrameTable {
  /**
   * A `WeakMap` rather than per-file state so sharing needs no extra
   * parameter passed through the pipeline: each table is reclaimed with its
   * frames array.
   */
  static readonly #tables = new WeakMap<
    ProfileStackFrame[],
    ProfileStackFrameTable
  >()

  public static for(frames: ProfileStackFrame[]): ProfileStackFrameTable {
    let table = ProfileStackFrameTable.#tables.get(frames)
    if (!table) {
      table = new ProfileStackFrameTable(frames)
      ProfileStackFrameTable.#tables.set(frames, table)
    }
    return table
  }

  readonly #frames: ProfileStackFrame[]

  /** Per frame index, a lazily-filled cache of the frame's parsed function. */
  readonly #functions: ProfileFunction[] = []

  #detected = false
  #functionTable: ProfileFunctionTable | undefined

  private constructor(frames: ProfileStackFrame[]) {
    this.#frames = frames
  }

  /** Adds the raw frames to {@link detector}, once, until decided. */
  public addToDetector(detector: OriginDetector): void {
    if (this.#detected) {
      return
    }
    this.#detected = true

    const { length } = this.#frames
    for (let index = 0; !detector.decided && index < length; index++) {
      const { name, location } = this.#getOrCreateFunction(index)
      detector.add({ id: index, name, location })
    }
  }

  #getOrCreateFunction(index: number): ProfileFunction {
    let func = this.#functions[index]
    if (!func) {
      func = parseProfileFunction(this.#frames[index]!)
      this.#functions[index] = func
    }
    return func
  }

  /**
   * Returns the {@link ProfileFunctionTable} the frames resolve to under
   * {@link context}, normalizing them with the resolved origin on first call.
   *
   * Memoized without keying on the context: a frames array belongs to one file
   * and is parsed fresh each conversion, so it never sees another context.
   */
  public resolve(context: ProfileToMdContext): ProfileFunctionTable {
    this.#functionTable ??= this.#normalize(context)
    return this.#functionTable
  }

  #normalize(context: ProfileToMdContext): ProfileFunctionTable {
    return new ProfileFunctionTable(
      this.#frames.map(frame => normalizeFrameForContext(frame, context)),
    )
  }
}

/**
 * A profile's distinct frames normalized by the resolved origin, resolving a
 * frame index to its {@link ProfileFunction}.
 */
class ProfileFunctionTable {
  /**
   * A `null` slot is a frame the origin dropped (a pseudo-frame, not a
   * function), removed from every call stack.
   */
  readonly #frames: (ProfileStackFrame | null)[]

  /** Per frame index, a lazily-filled cache of the frame's parsed function. */
  readonly #functions: ProfileFunction[] = []

  public constructor(frames: (ProfileStackFrame | null)[]) {
    this.#frames = frames
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  public function(index: number): ProfileFunction | undefined {
    let func = this.#functions[index]
    if (!func) {
      const frame = this.#frames[index]
      if (!frame) {
        return undefined
      }
      func = parseProfileFunction(frame)
      this.#functions[index] = func
    }
    return func
  }

  /** Returns the line the frame was sampled at, if known. */
  public executingLine(index: number): number | undefined {
    return this.#frames[index]?.line
  }
}

/** A frame's parsed name and location, the unit functions aggregate by. */
type ProfileFunction = {
  /** @see {@link ProfileStackFrame.name} */
  name: string

  /** @see {@link ProfileStackFrame.location} */
  location: SourceLocation | undefined

  /**
   * The function's identity key: its normalized name and location (URL/path,
   * plus definition line and column). Two frames that parse to the same key
   * are the same function.
   *
   * The location's own line/column are part of the identity, but a frame's
   * executing line ({@link ProfileStackFrame.line}) is not; that contributes
   * to the line breakdown instead.
   */
  key: string
}

/** Aggregates a profile's samples over its normalized distinct frames. */
class SamplesAggregator {
  readonly #metrics: Metric[]

  /**
   * The normalized distinct frames' functions. {@link Sample.frameIndices} are
   * indices into the table.
   */
  readonly #functions: ProfileFunctionTable
  readonly #options: AggregationProfileToMdOptions
  readonly #context: ProfileToMdContext

  #totalSampleCount: number
  readonly #totalValues: Float64Array

  // Call stacks are deduplicated by a numeric hash of their frames' function
  // IDs rather than a joined string key, whose building and hashing dominated
  // stack creation. The interner owns the canonical call stack list.
  readonly #callStackInterner = new HashInterner<
    AggregatedProfileFunction[],
    AggregatedProfileCallStack
  >(
    (frames, sink) => {
      for (const frame of frames) {
        sink.add(frame.id)
      }
    },
    (callStack, frames) => sameFrameIds(callStack.frames, frames),
  )

  readonly #idToCallStack: AggregatedProfileCallStack[]
  readonly #keyToFunction: Map<
    number | string | symbol,
    AggregatedProfileFunction
  >

  /** Per frame index, its registered function, a frame-index fast path. */
  readonly #frameIndexToFunction: AggregatedProfileFunction[]

  public constructor(
    /** @see {@link AggregatedProfile.metrics} */
    metrics: Metric[],
    functions: ProfileFunctionTable,
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
  ) {
    this.#metrics = metrics
    this.#functions = functions
    this.#options = options
    this.#context = context

    this.#totalSampleCount = 0
    this.#totalValues = new Float64Array(this.#metrics.length)

    this.#idToCallStack = []
    this.#keyToFunction = new Map()
    this.#frameIndexToFunction = []
  }

  /**
   * Adds {@link Sample.sampleCount} occurrences (default `1`) of a profile
   * sample. An empty {@link Sample.frameIndices} is a stackless sample,
   * attributed to a single shared anonymous function.
   *
   * Passing a count is equivalent to calling this once per occurrence, but runs
   * in time independent of the count. Pre-aggregated formats use it to avoid a
   * per-occurrence loop.
   */
  public addSample({
    id,
    values,
    frameIndices,
    line,
    sampleCount = 1,
  }: Sample): void {
    if (sampleCount <= 0) {
      return
    }

    const callStack = this.#getOrCreateCallStack(frameIndices, id)
    const callee = callStack.frames[0]!

    // Line metrics accumulate per sample rather than per call stack in
    // `#propagateCallStackMetrics`: frames that normalize to the same function
    // intern to the same call stack while sampling different executing lines.
    //
    // When the sample has no explicit line, fall back to the leaf frame's
    // sampled line, the one its origin's `normalizeFrame` derived so it
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
          sampleCount: 0,
          values: new Float64Array(this.#metrics.length),
        }
        callee.lineToMetrics.set(leafLine, lineMetrics)
      }
    }

    this.#totalSampleCount += sampleCount
    callStack.selfSampleCount += sampleCount
    if (lineMetrics) {
      lineMetrics.sampleCount += sampleCount
    }

    for (let i = 0; i < values.length; i++) {
      const value = values[i]! * sampleCount
      this.#totalValues[i]! += value
      callStack.selfValues[i]! += value
      if (lineMetrics) {
        lineMetrics.values[i]! += value
      }
    }
  }

  /**
   * Propagates each canonical call stack's accumulated self metrics to its
   * functions' self and total metrics, leaf caller metrics, and frame-pair
   * callee metrics.
   *
   * These attributions depend only on a stack's frames, so summing the stack's
   * accumulated self metrics reproduces the per-sample accumulation losslessly
   * in one pass per unique call stack, rather than one O(depth) pass per
   * sample.
   */
  #propagateCallStackMetrics(): void {
    const callStacks = this.#callStackInterner.items
    const metricCount = this.#metrics.length
    const functionIdToLastSeenEpoch = new Uint32Array(this.#keyToFunction.size)

    for (let epoch = 1; epoch <= callStacks.length; epoch++) {
      const { frames, selfSampleCount, selfValues } = callStacks[epoch - 1]!

      const leaf = frames[0]!
      leaf.selfSampleCount += selfSampleCount
      for (let i = 0; i < metricCount; i++) {
        leaf.selfValues[i]! += selfValues[i]!
      }

      const leafCaller = frames[1]
      if (leafCaller) {
        let callerMetrics = leaf.callerIdToMetrics.get(leafCaller.id)
        if (!callerMetrics) {
          callerMetrics = {
            caller: leafCaller,
            selfSampleCount: 0,
            selfValues: new Float64Array(metricCount),
          }
          leaf.callerIdToMetrics.set(leafCaller.id, callerMetrics)
        }
        callerMetrics.selfSampleCount += selfSampleCount
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

        func.totalSampleCount += selfSampleCount
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
            totalSampleCount: 0,
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
              selfSampleCount: 0,
              selfValues: new Float64Array(metricCount),
            })
          }
        } else if (calleeMetrics.lastSeenEpoch === epoch) {
          // This is a recursive call. Don't count this callee twice.
          continue
        } else {
          calleeMetrics.lastSeenEpoch = epoch
        }

        calleeMetrics.totalSampleCount += selfSampleCount
        for (let j = 0; j < metricCount; j++) {
          calleeMetrics.totalValues[j]! += selfValues[j]!
        }
      }
    }
  }

  public addLineMetrics({ frame, lines }: SampleLineMetrics): void {
    const func = this.#getOrCreateFunction(frame)
    if (!func) {
      return
    }
    for (const { line, sampleCount, values } of lines) {
      let lineMetrics = func.lineToMetrics.get(line)
      if (!lineMetrics) {
        lineMetrics = {
          sampleCount: 0,
          values: new Float64Array(this.#metrics.length),
        }
        func.lineToMetrics.set(line, lineMetrics)
      }
      lineMetrics.sampleCount += sampleCount
      for (let i = 0; i < values.length; i++) {
        lineMetrics.values[i]! += values[i]!
      }
    }
  }

  #getOrCreateCallStack(
    frameIndices: number[],
    id: number | undefined,
  ): AggregatedProfileCallStack {
    // A stable stack ID lets repeat stacks (the common case, since a profile
    // has far fewer unique stacks than samples) skip resolving frames and the
    // hash-keyed lookup, becoming a single sparse-array index.
    if (id !== undefined) {
      const cached = this.#idToCallStack[id]
      if (cached) {
        return cached
      }
    }

    // A stackless sample has no frames (or only dropped ones); attribute it to
    // a shared anonymous frame.
    const frames: AggregatedProfileFunction[] = []
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
    frames: AggregatedProfileFunction[],
  ): AggregatedProfileCallStack {
    const index = this.#callStackInterner.intern(frames, () => ({
      frames,
      selfSampleCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
    }))
    return this.#callStackInterner.items[index]!
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  #getOrCreateFunction(index: number): AggregatedProfileFunction | undefined {
    const cached = this.#frameIndexToFunction[index]
    if (cached) {
      return cached
    }

    // A function's identity is its normalized name and location, so frames that
    // normalize alike (e.g. one function sampled at several lines) merge into
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
   * The single shared anonymous function for stackless samples, keyed by a
   * symbol so it can never collide with a {@link ProfileFunction.key}.
   */
  #getOrCreateAnonymousFunction(): AggregatedProfileFunction {
    return (
      this.#keyToFunction.get(ANONYMOUS_FUNCTION_KEY) ??
      this.#registerFunction(ANONYMOUS_FUNCTION_KEY, parseProfileFunction({}))
    )
  }

  #registerFunction(
    key: number | string | symbol,
    { name, location }: ProfileFunction,
  ): AggregatedProfileFunction {
    const func: AggregatedProfileFunction = {
      type: `function`,
      id: this.#keyToFunction.size,
      name,
      location,
      // Categories are assigned at the end of `aggregate`, in one pass over the
      // full set of functions.
      category: ``,
      selfSampleCount: 0,
      totalSampleCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
      totalValues: new Float64Array(this.#metrics.length),
      lineToMetrics: new Map(),
      callerIdToMetrics: new Map(),
      calleeIdToMetrics: new Map(),
    }
    this.#keyToFunction.set(key, func)
    return func
  }

  public aggregate(): AggregatedProfile {
    this.#propagateCallStackMetrics()

    const samplingRates = new Float64Array(this.#metrics.length)
    for (let i = 0; i < samplingRates.length; i++) {
      samplingRates[i] = this.#totalValues[i]! / this.#totalSampleCount
    }

    const functions = [...this.#keyToFunction.values()]
    const callStacks = this.#callStackInterner.items

    return {
      type: `profile`,
      context: this.#context,
      metrics: this.#metrics,
      totalSampleCount: this.#totalSampleCount,
      totalValues: this.#totalValues,
      samplingRates,
      categoryToMetrics: this.#categorize(functions),
      functions,
      callStacks,
    }
  }

  /**
   * Assigns each function's category and builds the profile's category metrics.
   *
   * Categorization runs here, at the end of aggregation, so it sees the full
   * set of functions, from which {@link ProfileToMdOptions.categorizeEntries}
   * can determine the origin (when the context's origin is `null`) before
   * categorizing.
   *
   * The category metrics are built from each function's self metrics rather
   * than accumulated per sample: a self-sample's leaf is exactly its function,
   * so summing self values over the functions of a category reproduces the
   * per-sample total losslessly, in time linear in the function count rather
   * than the sample count.
   */
  #categorize(
    functions: AggregatedProfileFunction[],
  ): Map<string, AggregatedProfileCategoryMetrics> {
    const categories = this.#options.categorizeEntries(functions, this.#context)
    const categoryToMetrics = new Map<
      string,
      AggregatedProfileCategoryMetrics
    >()

    for (let i = 0; i < functions.length; i++) {
      const func = functions[i]!
      const category = categories[i]!
      func.category = category

      // Only leaf functions (those with self samples) contributed to the
      // category metrics during aggregation, so skip functions that were never
      // a leaf to avoid introducing empty categories that wouldn't otherwise
      // appear.
      if (func.selfSampleCount === 0) {
        continue
      }

      let metric = categoryToMetrics.get(category)
      if (!metric) {
        metric = {
          sampleCount: 0,
          values: new Float64Array(this.#metrics.length),
        }
        categoryToMetrics.set(category, metric)
      }
      metric.sampleCount += func.selfSampleCount
      for (let i = 0; i < func.selfValues.length; i++) {
        metric.values[i]! += func.selfValues[i]!
      }
    }

    return categoryToMetrics
  }
}

const parseProfileFunction = (frame: ProfileStackFrame): ProfileFunction => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  name: frame.name || `(anonymous)`,
  location: makeSourceLocation(frame.location),
  key: functionIdentityKey(frame),
})

/** Builds {@link ProfileFunction.key} from a frame's name and location. */
const functionIdentityKey = ({
  name = ``,
  location,
}: ProfileStackFrame): string =>
  location === undefined
    ? name
    : `${name}\0${location.urlOrPath}\0${location.line ?? ``}\0${location.column ?? ``}`

/**
 * Key for the single shared anonymous function that stackless samples (empty
 * {@link Sample.frameIndices}) are attributed to. A symbol so it can never
 * collide with a {@link ProfileFunction.key}. All stackless samples merge into
 * one bucket because nothing distinguishes them.
 */
const ANONYMOUS_FUNCTION_KEY = Symbol(`anonymous`)

/** Whether two frame lists reference the same functions in the same order. */
const sameFrameIds = (
  left: AggregatedProfileFunction[],
  right: AggregatedProfileFunction[],
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
 * An aggregation of data from every sample of functions with a given category
 * within a profile.
 */
export type AggregatedProfileCategoryMetrics = {
  /** The number of samples taken for functions with this category. */
  sampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken for functions with this category.
   */
  values: Float64Array
}

/** An aggregation of samples taken at a given line within a function's body. */
type AggregatedProfileLineMetrics = {
  /**
   * The number of samples taken directly within the function's body at this
   * line.
   */
  sampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from
   * samples taken directly within the function's body at this line.
   */
  values: Float64Array
}

/**
 * An aggregation of samples taken directly within a function's body with a
 * given direct caller.
 */
type AggregatedProfileCallerMetrics = {
  /** The caller corresponding to the ID. */
  caller: AggregatedProfileFunction

  /**
   * The number of samples taken directly within the function's body with this
   * caller.
   */
  selfSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken directly within the function's body with this caller.
   */
  selfValues: Float64Array
}

/**
 * An aggregation of samples taken within a function's body, _and_ all its
 * callees, with a given direct callee.
 */
type AggregatedProfileCalleeMetrics = {
  /** The callee corresponding to the ID. */
  callee: AggregatedProfileFunction

  /**
   * The number of samples taken directly within the function's body, _and_ all
   * its callees, with this callee.
   */
  totalSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken directly within the function's body, _and_ all its
   * callees, with this callee.
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
 * An aggregation of data from every sample involving a given function within a
 * profile.
 */
export type AggregatedProfileFunction = {
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
   * The number of samples taken directly within the function's body, excluding
   * its callees.
   */
  selfSampleCount: number

  /**
   * The number of samples taken directly within the function's body _and_ all
   * its callees.
   */
  totalSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken directly within the function's body, excluding its
   * callees.
   */
  selfValues: Float64Array

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken directly within the function's body _and_ all its
   * callees.
   */
  totalValues: Float64Array

  /** 1-based line number to values and sample count for that line. */
  lineToMetrics: Map<number, AggregatedProfileLineMetrics>

  /**
   * Direct caller id to values and sample count with that caller's calls to
   * this function.
   */
  callerIdToMetrics: Map<number, AggregatedProfileCallerMetrics>

  /**
   * Direct callee id to values and sample count for that callee's calls where
   * this function was a direct or transitive caller.
   */
  calleeIdToMetrics: Map<number, AggregatedProfileCalleeMetrics>
}

/**
 * An aggregation of data from every sample involving a given function call
 * stack within a profile.
 */
export type AggregatedProfileCallStack = {
  /** The functions on the call stack in callee to caller order. */
  frames: AggregatedProfileFunction[]

  /** The number of samples taken with this exact call stack. */
  selfSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken with this exact call stack.
   */
  selfValues: Float64Array
}

/** An aggregation of all samples within a sampling profile. */
export type AggregatedProfile = {
  type: `profile`

  /**
   * The context (format and resolved origin) this profile was aggregated under.
   * Match-key normalization varies by origin, so each diffed side's keys must
   * be built under that side's own context; sides that resolved different
   * origins can normalize match keys differently and miss matches.
   */
  context: ProfileToMdContext

  /** Metrics sampled in this profile. */
  metrics: Metric[]

  /** The number of samples taken within this profile. */
  totalSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values
   * from samples taken within this profile.
   */
  totalValues: Float64Array

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the average metric
   * value per sample (total value ÷ total sample count).
   */
  samplingRates: Float64Array

  /**
   * Function category to values and sample count for calls of functions with
   * that category.
   */
  categoryToMetrics: Map<string, AggregatedProfileCategoryMetrics>

  /** Aggregated data for all functions called in this profile. */
  functions: AggregatedProfileFunction[]

  /** Aggregated data for all call stacks encountered in this profile. */
  callStacks: AggregatedProfileCallStack[]
}
