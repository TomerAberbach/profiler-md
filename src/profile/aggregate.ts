import { DynamicTypedArray } from '../helpers/array.ts'
import { makeSourceLocation } from '../location.ts'
import type { SourceLocation, SourceLocationInput } from '../location.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileToMdContext,
} from '../options.ts'
import type { Metric } from './metric.ts'

export class ProfileAggregator<Node extends { id?: number }> {
  readonly #metrics: Metric[]
  readonly #functionKey: (node: Node) => number | string
  readonly #functionInput: (node: Node) => ProfileFunctionInput
  readonly #options: NormalizedProfileToMdOptions
  readonly #context: ProfileToMdContext

  #totalSampleCount: number
  #sampleEpoch: number
  readonly #totalValues: Float64Array

  readonly #keyToCallStack: Map<string, AggregatedProfileCallStack>
  readonly #keyToFunction: Map<
    number | string | symbol,
    AggregatedProfileFunction
  >

  readonly #idToFunction: AggregatedProfileFunction[]
  readonly #functionIdToLastSeenEpoch: DynamicTypedArray<Uint32Array>
  readonly #frameIndexToFramePairKey: DynamicTypedArray<Int32Array>

  public constructor(
    {
      metrics,
      functionKey,
      functionInput,
    }: {
      /** @see {@link AggregatedProfile.metrics} */
      metrics: Metric[]

      /** Returns a unique key for the function corresponding to {@link node}. */
      functionKey: (node: Node) => number | string

      /**
       * Returns the {@link ProfileFunctionInput} for the function corresponding
       * to {@link node}.
       */
      functionInput: (node: Node) => ProfileFunctionInput
    },
    options: NormalizedProfileToMdOptions,
    context: ProfileToMdContext,
  ) {
    this.#metrics = metrics
    this.#functionKey = functionKey
    this.#functionInput = functionInput
    this.#options = options
    this.#context = context

    this.#totalSampleCount = 0
    this.#sampleEpoch = 0
    this.#totalValues = new Float64Array(this.#metrics.length)

    this.#keyToCallStack = new Map()
    this.#keyToFunction = new Map()
    this.#idToFunction = []
    this.#functionIdToLastSeenEpoch = new DynamicTypedArray(new Uint32Array(1))
    this.#frameIndexToFramePairKey = new DynamicTypedArray(new Int32Array(64))
  }

  /**
   * Adds {@link Sample.sampleCount} occurrences (default `1`) of a profile
   * sample. An empty {@link Sample.nodes} is a stackless sample, attributed to a
   * single shared anonymous function.
   *
   * Passing a count is equivalent to calling this once per occurrence, but runs
   * in time independent of the count. Pre-aggregated formats use it to avoid a
   * per-occurrence loop.
   */
  public addSample({
    values,
    nodes,
    line,
    sampleCount = 1,
  }: Sample<Node>): void {
    if (sampleCount <= 0) {
      return
    }

    const callStack = this.#getOrCreateCallStack(nodes)
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

    let lineMetrics
    if (line !== undefined) {
      lineMetrics = callee.lineToMetrics.get(line)
      if (!lineMetrics) {
        lineMetrics = {
          sampleCount: 0,
          values: new Float64Array(this.#metrics.length),
        }
        callee.lineToMetrics.set(line, lineMetrics)
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

    const maxFramePairCount = callStack.frames.length - 1
    const frameIndexToFramePairKey =
      this.#frameIndexToFramePairKey.ensureCapacity(maxFramePairCount)
    let seenFramePairCount = 0
    for (let i = 0; i < maxFramePairCount; i++) {
      const callee = callStack.frames[i]!
      const caller = callStack.frames[i + 1]!
      const pairKey = caller.id * funcCount + callee.id

      let pairAlreadySeen = false
      for (let j = 0; j < seenFramePairCount; j++) {
        if (frameIndexToFramePairKey[j] === pairKey) {
          pairAlreadySeen = true
          break
        }
      }
      if (pairAlreadySeen) {
        continue
      }
      frameIndexToFramePairKey[seenFramePairCount++] = pairKey

      let calleeMetrics = caller.calleeIdToMetrics.get(callee.id)
      if (!calleeMetrics) {
        calleeMetrics = {
          callee,
          totalSampleCount: 0,
          totalValues: new Float64Array(this.#metrics.length),
        }
        caller.calleeIdToMetrics.set(callee.id, calleeMetrics)
      }
      calleeMetrics.totalSampleCount += sampleCount
      for (let i = 0; i < values.length; i++) {
        calleeMetrics.totalValues[i]! += values[i]! * sampleCount
      }
    }
  }

  public addLineMetrics({
    node,
    lines,
  }: {
    node: Node
    lines: {
      line: number
      sampleCount: number
      values: number[]
    }[]
  }): void {
    const func = this.#getOrCreateFunction(node)
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

  #getOrCreateCallStack(nodes: Node[]): AggregatedProfileCallStack {
    // A stackless sample has no nodes; attribute it to a shared anonymous frame.
    const frames =
      nodes.length === 0
        ? [this.#getOrCreateAnonymousFunction()]
        : nodes.map(node => this.#getOrCreateFunction(node))
    const key = frames.map(frame => frame.id).join(`,`)
    let callStack = this.#keyToCallStack.get(key)
    if (callStack) {
      return callStack
    }

    callStack = {
      frames,
      selfSampleCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
    }
    this.#keyToCallStack.set(key, callStack)
    return callStack
  }

  #getOrCreateFunction(node: Node): AggregatedProfileFunction {
    const { id } = node
    if (id !== undefined) {
      const func = this.#idToFunction[id]
      if (func) {
        return func
      }
    }

    const key = this.#functionKey(node)
    const func =
      this.#keyToFunction.get(key) ??
      this.#registerFunction(key, this.#functionInput(node))
    if (id !== undefined) {
      this.#idToFunction[id] = func
    }
    return func
  }

  /**
   * The single shared anonymous function for stackless samples, keyed by a
   * symbol so it can never collide with a caller's {@link functionKey}.
   */
  #getOrCreateAnonymousFunction(): AggregatedProfileFunction {
    return (
      this.#keyToFunction.get(ANONYMOUS_FUNCTION_KEY) ??
      this.#registerFunction(ANONYMOUS_FUNCTION_KEY, {})
    )
  }

  #registerFunction(
    key: number | string | symbol,
    { name, location }: ProfileFunctionInput,
  ): AggregatedProfileFunction {
    const entry = {
      id: this.#keyToFunction.size,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      name: name || `(anonymous)`,
      location: makeSourceLocation(location),
    }
    const func: AggregatedProfileFunction = {
      type: `function`,
      ...entry,
      // Categories are assigned at the end of `aggregate`, once the origin can
      // be detected from the full set of functions.
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
    const callStacks = [...this.#keyToCallStack.values()]

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
 * `nodes`) are attributed to. A symbol so it can never collide with a caller's
 * {@link ProfileAggregator}'s `functionKey`. All stackless samples merge into
 * one bucket because there's no information to tell them apart.
 */
const ANONYMOUS_FUNCTION_KEY = Symbol(`anonymous`)

/** Base information used for constructing a {@link AggregatedProfileFunction}. */
export type ProfileFunctionInput = {
  /** The name of the function, if known. */
  name?: string

  /** Where the function was defined, if known. */
  location?: SourceLocationInput
}

/** A single sample within a profile. */
export type Sample<Node extends { id?: number }> = {
  /** The values recorded for each metric in {@link AggregatedProfile.metrics}. */
  values: number[]

  /**
   * The functions on the call stack in callee to caller order. Empty for a
   * stackless sample, which is attributed to a shared anonymous function.
   */
  nodes: Node[]

  /** The 1-based line number where the sample was taken, if known. */
  line?: number

  /**
   * The number of identical occurrences of this sample, defaulting to `1`.
   *
   * Used by pre-aggregated formats to add a summed count in one call instead of
   * looping. Metric {@link Sample.values} are scaled by it, so per-occurrence
   * callers should leave it `1` and pass per-occurrence values.
   */
  sampleCount?: number
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
export type AggregatedProfileLineMetrics = {
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
export type AggregatedProfileCallerMetrics = {
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
export type AggregatedProfileCalleeMetrics = {
  /** The callee corresponding to the ordinal. */
  callee: AggregatedProfileFunction

  /**
   * The number of samples taken directly within the function's, _and_ all
   * its callees, with this callee.
   */
  totalSampleCount: number

  /**
   * For each metric in {@link AggregatedProfile.metrics}, the sum of values from
   * samples taken directly within the function's body, _and_ all its
   * callees. with this callee.
   */
  totalValues: Float64Array
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

  /** A string describing the category of functions this function belongs to.*/
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
 * This behavior is so that it's safe to remove that suffix from any of the call
 * stacks and end up with a non-empty call stack to format.
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
