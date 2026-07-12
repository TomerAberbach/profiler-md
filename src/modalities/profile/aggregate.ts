import { DynamicTypedArray } from '../../helpers/array.ts'
import { HashInterner } from '../../helpers/intern.ts'
import type { SourceLocation } from '../../location.ts'
import type { Metric } from '../../metric.ts'
import type {
  AggregateProfileToMdOptions,
  ProfileToMdContext,
  UnresolvedProfileToMdContext,
} from '../../options.ts'
import {
  functionIdentityKey,
  parseFrameFunction,
  resolveFrames,
} from '../../origins/index.ts'
import type { FrameFunction, ResolvedFrames } from '../../origins/index.ts'
import type {
  Profile,
  ProfileStackFrame,
  Sample,
  SampleLineMetrics,
} from './type.ts'

/** Aggregates each {@link Profile} through the uniform pipeline. */
export const aggregateProfiles = (
  profiles: Profile[],
  options: AggregateProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedProfile[] => {
  // Multi-profile formats typically share one frames array reference (see
  // {@link Profile.frames}), so resolve the origin and normalize once per
  // distinct array rather than once per profile.
  const resolutions = new Map<ProfileStackFrame[], ResolvedFrames>()
  return profiles.map(profile => {
    let resolution = resolutions.get(profile.frames)
    if (!resolution) {
      resolution = resolveFrames(profile.frames, context)
      resolutions.set(profile.frames, resolution)
    }
    return aggregateProfile(profile, resolution, options, context)
  })
}

/**
 * Aggregates one {@link Profile}'s samples over its resolved distinct frames.
 */
const aggregateProfile = (
  { metrics, samples, lineMetrics }: Profile,
  { origin, frames, frameFunctions }: ResolvedFrames,
  options: AggregateProfileToMdOptions,
  context: UnresolvedProfileToMdContext,
): AggregatedProfile => {
  const resolvedContext: ProfileToMdContext = { ...context, origin }

  const aggregator = new ProfileAggregator(
    metrics,
    frames,
    options,
    resolvedContext,
    frameFunctions,
  )
  for (const sample of samples) {
    aggregator.addSample(sample)
  }
  for (const lineMetric of lineMetrics ?? []) {
    aggregator.addLineMetrics(lineMetric)
  }
  return aggregator.aggregate()
}

export class ProfileAggregator {
  readonly #metrics: Metric[]

  /**
   * The normalized distinct frames. {@link Sample.frameIndices} are indices
   * into them; a frame's function identity is its normalized name and location.
   * A `null` slot is a frame the origin dropped (see
   * {@link OriginSpec.normalizeFrame}).
   */
  readonly #frames: (ProfileStackFrame | null)[]
  readonly #options: AggregateProfileToMdOptions
  readonly #context: ProfileToMdContext

  #totalSampleCount: number
  #sampleEpoch: number
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
  readonly #functionIdToLastSeenEpoch: DynamicTypedArray<Uint32Array>

  /**
   * Per frame index, a cache of the frame's parsed name and location, filled
   * lazily by {@link ProfileAggregator.#getOrCreateFunction} and shared with
   * every other aggregator over the same frames, so each frame's location is
   * parsed once, not once per profile.
   */
  readonly #frameFunctions: (FrameFunction | undefined)[]

  public constructor(
    /** @see {@link AggregatedProfile.metrics} */
    metrics: Metric[],
    frames: (ProfileStackFrame | null)[],
    options: AggregateProfileToMdOptions,
    context: ProfileToMdContext,
    frameFunctions: (FrameFunction | undefined)[] = [],
  ) {
    this.#metrics = metrics
    this.#frames = frames
    this.#options = options
    this.#context = context
    this.#frameFunctions = frameFunctions

    this.#totalSampleCount = 0
    this.#sampleEpoch = 0
    this.#totalValues = new Float64Array(this.#metrics.length)

    this.#idToCallStack = []
    this.#keyToFunction = new Map()
    this.#frameIndexToFunction = []
    this.#functionIdToLastSeenEpoch = new DynamicTypedArray(new Uint32Array(1))
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
    const caller = callStack.frames[1]

    let callerMetrics
    if (caller) {
      callerMetrics = callee.callerIdToMetrics.get(caller.id)
      if (!callerMetrics) {
        callerMetrics = {
          caller,
          selfSampleCount: 0,
          selfValues: new Float64Array(this.#metrics.length),
        }
        callee.callerIdToMetrics.set(caller.id, callerMetrics)
      }
    }

    // When the sample has no explicit line, fall back to the leaf frame's
    // sampled line, the one its origin's `normalizeFrame` derived
    // (py-spy/rbspy), so it surfaces in the function's line breakdown.
    let leafLine = line
    if (leafLine === undefined) {
      const leafIndex = frameIndices[0]
      leafLine =
        leafIndex === undefined ? undefined : this.#frames[leafIndex]?.line
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
    callee.selfSampleCount += sampleCount
    if (callerMetrics) {
      callerMetrics.selfSampleCount += sampleCount
    }
    if (lineMetrics) {
      lineMetrics.sampleCount += sampleCount
    }

    for (let i = 0; i < values.length; i++) {
      const value = values[i]! * sampleCount
      this.#totalValues[i]! += value
      callStack.selfValues[i]! += value
      callee.selfValues[i]! += value
      if (callerMetrics) {
        callerMetrics.selfValues[i]! += value
      }
      if (lineMetrics) {
        lineMetrics.values[i]! += value
      }
    }

    // A per-call epoch, decoupled from the sample count, deduplicates functions
    // that recur within a single call stack so their totals count it just once.
    const epoch = ++this.#sampleEpoch
    const funcCount = this.#keyToFunction.size
    const functionIdToLastSeenEpoch =
      this.#functionIdToLastSeenEpoch.ensureCapacity(funcCount)
    for (const func of callStack.frames) {
      if (functionIdToLastSeenEpoch[func.id] === epoch) {
        continue
      }
      functionIdToLastSeenEpoch[func.id] = epoch

      func.totalSampleCount += sampleCount
      for (let i = 0; i < values.length; i++) {
        func.totalValues[i]! += values[i]! * sampleCount
      }
    }

    // A frame pair (caller, callee) can recur within a single call stack
    // (recursion), so a per-edge epoch deduplicates it to count the stack just
    // once, the same way the function epoch above deduplicates functions.
    const maxFramePairCount = callStack.frames.length - 1
    for (let i = 0; i < maxFramePairCount; i++) {
      const callee = callStack.frames[i]!
      const caller = callStack.frames[i + 1]!

      let calleeMetrics = caller.calleeIdToMetrics.get(callee.id)
      if (!calleeMetrics) {
        calleeMetrics = {
          callee,
          totalSampleCount: 0,
          totalValues: new Float64Array(this.#metrics.length),
          lastSeenEpoch: epoch,
        }
        caller.calleeIdToMetrics.set(callee.id, calleeMetrics)

        // Mirror the new edge on the callee, so its set of direct callers is
        // complete even when it never appears as a leaf (its self metrics stay
        // zero). The default entry filter reads that set to decide whether
        // `ours` code calls the function directly.
        if (!callee.callerIdToMetrics.has(caller.id)) {
          callee.callerIdToMetrics.set(caller.id, {
            caller,
            selfSampleCount: 0,
            selfValues: new Float64Array(this.#metrics.length),
          })
        }
      } else if (calleeMetrics.lastSeenEpoch === epoch) {
        // This is a recursive call. Don't count this callee twice.
        continue
      } else {
        calleeMetrics.lastSeenEpoch = epoch
      }

      calleeMetrics.totalSampleCount += sampleCount
      for (let i = 0; i < values.length; i++) {
        calleeMetrics.totalValues[i]! += values[i]! * sampleCount
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
    const frame = this.#frames[index]
    if (!frame) {
      return undefined
    }
    const key = functionIdentityKey(frame)
    let func = this.#keyToFunction.get(key)
    if (!func) {
      let frameFunction = this.#frameFunctions[index]
      if (!frameFunction) {
        frameFunction = parseFrameFunction(frame)
        this.#frameFunctions[index] = frameFunction
      }
      func = this.#registerFunction(key, frameFunction)
    }
    this.#frameIndexToFunction[index] = func
    return func
  }

  /**
   * The single shared anonymous function for stackless samples, keyed by a
   * symbol so it can never collide with a {@link functionIdentityKey}.
   */
  #getOrCreateAnonymousFunction(): AggregatedProfileFunction {
    return (
      this.#keyToFunction.get(ANONYMOUS_FUNCTION_KEY) ??
      this.#registerFunction(ANONYMOUS_FUNCTION_KEY, parseFrameFunction({}))
    )
  }

  #registerFunction(
    key: number | string | symbol,
    { name, location }: FrameFunction,
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
    const samplingRates = new Float64Array(this.#metrics.length)
    for (let i = 0; i < samplingRates.length; i++) {
      samplingRates[i] = this.#totalValues[i]! / this.#totalSampleCount
    }

    const functions = [...this.#keyToFunction.values()]
    const callStacks = this.#callStackInterner.items

    return {
      type: `profile`,
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
   * Categorization runs here, at the end of aggregation, so it sees the full set
   * of functions, from which {@link ProfileToMdOptions.categorizeEntries} can
   * determine the origin (when the context's origin is `null`) before
   * categorizing.
   *
   * The category metrics are built from each function's self metrics rather than
   * accumulated per sample: a self-sample's leaf is exactly its function, so
   * summing self values over the functions of a category reproduces the
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
      // category metrics during aggregation, so skip functions that were never a
      // leaf to avoid introducing empty categories that wouldn't otherwise
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

/**
 * Key for the single shared anonymous function that stackless samples (empty
 * {@link Sample.frameIndices}) are attributed to. A symbol so it can never collide
 * with a {@link functionIdentityKey}. All stackless samples merge into one
 * bucket because nothing distinguishes them.
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
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from
   * samples taken directly within the function's body with this caller.
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
   * The number of samples taken directly within the function's body, _and_
   * all its callees, with this callee.
   */
  totalSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from
   * samples taken directly within the function's body, _and_ all its
   * callees, with this callee.
   */
  totalValues: Float64Array

  /**
   * Internal aggregation bookkeeping: the epoch of the most recent call stack
   * whose total this edge was counted into, so a frame pair that recurs within
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
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from samples
   * taken directly within the function's body, excluding its callees.
   */
  selfValues: Float64Array

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from samples
   * taken directly within the function's body _and_ all its callees.
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

/**
 * Returns the list of callers of {@link callStacks} that is the longest common
 * suffix of their frames, except it never returns a call stack as long as one
 * of the input call stacks.
 *
 * That cap makes it safe to remove the suffix from any call stack and still
 * have a non-empty call stack to format.
 */
export const findCommonCallStack = (
  callStacks: { frames: AggregatedProfileFunction[] }[],
): AggregatedProfileFunction[] => {
  if (callStacks.length <= 1) {
    return []
  }

  const minLength = Math.min(...callStacks.map(cs => cs.frames.length))
  const firstFrames = callStacks[0]!.frames
  let suffixLength = 0

  for (let i = 1; i < minLength; i++) {
    const suffix = firstFrames.slice(-i).map(frame => frame.id)
    if (
      callStacks.every(callStack =>
        callStack.frames.slice(-i).every((frame, j) => frame.id === suffix[j]),
      )
    ) {
      suffixLength = i
    } else {
      break
    }
  }

  return suffixLength > 0 ? firstFrames.slice(-suffixLength) : []
}
