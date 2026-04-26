import { DynamicTypedArray } from '../helpers/array.ts'
import { makeProfileLocation } from '../location.ts'
import type { ProfileLocation, ProfileLocationInput } from '../location.ts'
import type {
  NormalizedProfileToMdOptions,
  UniqueProfileEntry,
} from '../options.ts'
import type { Metric } from './metric.ts'

export class ProfileBuilder<Node extends { id: number }> {
  readonly #metrics: Metric[]
  readonly #functionKey: (node: Node) => number | string
  readonly #functionInput: (node: Node) => ProfileFunctionInput
  readonly #options: NormalizedProfileToMdOptions

  #totalSampleCount: number
  readonly #totalValues: Float64Array
  readonly #categoryToMetrics: Map<
    string,
    { sampleCount: number; values: Float64Array }
  >

  readonly #keyToCallStack: Map<string, ProfileCallStack>
  readonly #keyToFunction: Map<number | string, ProfileFunction>
  readonly #idToFunction: ProfileFunction[]
  readonly #functionIdToLastSeenSampleCount: DynamicTypedArray<Uint32Array>
  readonly #frameIndexToFramePairKey: DynamicTypedArray<Int32Array>

  public constructor(
    {
      metrics,
      functionKey,
      functionInput,
    }: {
      /** @see {@link Profile.metrics} */
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
  ) {
    this.#metrics = metrics
    this.#functionKey = functionKey
    this.#functionInput = functionInput
    this.#options = options

    this.#totalSampleCount = 0
    this.#totalValues = new Float64Array(this.#metrics.length)
    this.#categoryToMetrics = new Map()

    this.#keyToCallStack = new Map()
    this.#keyToFunction = new Map()
    this.#idToFunction = []
    this.#functionIdToLastSeenSampleCount = new DynamicTypedArray(
      new Uint32Array(1),
    )
    this.#frameIndexToFramePairKey = new DynamicTypedArray(new Int32Array(64))
  }

  /** Adds a single profile sample. */
  public addSample({ values, nodes, line }: Sample<Node>): void {
    if (nodes.length === 0) {
      return
    }

    const callStack = this.#getOrCreateCallStack(nodes)
    const callee = callStack.frames[0]!
    const caller = callStack.frames[1]

    let categoryMetrics = this.#categoryToMetrics.get(callee.category)
    if (!categoryMetrics) {
      categoryMetrics = {
        sampleCount: 0,
        values: new Float64Array(this.#metrics.length),
      }
      this.#categoryToMetrics.set(callee.category, categoryMetrics)
    }

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

    this.#totalSampleCount++
    categoryMetrics.sampleCount++
    callStack.selfSampleCount++
    callee.selfSampleCount++
    if (callerMetrics) {
      callerMetrics.selfSampleCount++
    }
    if (lineMetrics) {
      lineMetrics.sampleCount++
    }

    for (let i = 0; i < values.length; i++) {
      this.#totalValues[i]! += values[i]!
      categoryMetrics.values[i]! += values[i]!
      callStack.selfValues[i]! += values[i]!
      callee.selfValues[i]! += values[i]!
      if (callerMetrics) {
        callerMetrics.selfValues[i]! += values[i]!
      }
      if (lineMetrics) {
        lineMetrics.values[i]! += values[i]!
      }
    }

    const funcCount = this.#keyToFunction.size
    const functionIdToLastSeenSampleCount =
      this.#functionIdToLastSeenSampleCount.ensureCapacity(funcCount)
    for (const func of callStack.frames) {
      if (functionIdToLastSeenSampleCount[func.id] === this.#totalSampleCount) {
        continue
      }
      functionIdToLastSeenSampleCount[func.id] = this.#totalSampleCount

      func.totalSampleCount++
      for (let i = 0; i < values.length; i++) {
        func.totalValues[i]! += values[i]!
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
      calleeMetrics.totalSampleCount++
      for (let i = 0; i < values.length; i++) {
        calleeMetrics.totalValues[i]! += values[i]!
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

  #getOrCreateCallStack(nodes: Node[]): ProfileCallStack {
    const frames = nodes.map(node => this.#getOrCreateFunction(node))
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

  #getOrCreateFunction(node: Node): ProfileFunction {
    let func = this.#idToFunction[node.id]
    if (func) {
      return func
    }

    const key = this.#functionKey(node)
    func = this.#keyToFunction.get(key)
    if (func) {
      this.#idToFunction[node.id] = func
      return func
    }

    const { name: nameInput, location: locationInput } =
      this.#functionInput(node)
    const entry: UniqueProfileEntry = {
      id: this.#keyToFunction.size,
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      name: nameInput || `(anonymous)`,
      location: locationInput ? makeProfileLocation(locationInput) : undefined,
    }
    func = {
      ...entry,
      category: categorizeFunction(entry, this.#options),
      selfSampleCount: 0,
      totalSampleCount: 0,
      selfValues: new Float64Array(this.#metrics.length),
      totalValues: new Float64Array(this.#metrics.length),
      lineToMetrics: new Map(),
      callerIdToMetrics: new Map(),
      calleeIdToMetrics: new Map(),
    }
    this.#idToFunction[node.id] = func
    this.#keyToFunction.set(key, func)
    return func
  }

  public build(): Profile {
    const samplingIntervals = new Float64Array(this.#metrics.length)
    for (let i = 0; i < samplingIntervals.length; i++) {
      samplingIntervals[i] = this.#totalValues[i]! / this.#totalSampleCount
    }

    const functions = [...this.#keyToFunction.values()]
    const callStacks = [...this.#keyToCallStack.values()]

    return {
      metrics: this.#metrics,
      totalSampleCount: this.#totalSampleCount,
      totalValues: this.#totalValues,
      samplingIntervals,
      categoryToMetrics: this.#categoryToMetrics,
      functions,
      callStacks,
    }
  }
}

/** Base information used for constructing a {@link ProfileFunction}. */
export type ProfileFunctionInput = {
  /** The name of the function, if known. */
  name?: string

  /** Where the function was defined, if known. */
  location?: ProfileLocationInput
}

/** A single sample within a profile. */
export type Sample<Node extends { id: number }> = {
  /** The values recorded for each metric in {@link Profile.metrics}. */
  values: number[]

  /** The functions on the stack in callee to caller order. */
  nodes: Node[]

  /** The 1-based line number where the sample was taken, if known. */
  line?: number
}

/**
 * An aggregation of data from every sample involving a given function within a
 * profile.
 */
export type ProfileFunction = {
  /** An index that uniquely identifies this function. */
  id: number

  /** The name of the function in code. */
  name: string

  /** Where the function was defined, if known. */
  location?: ProfileLocation

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
   * For each metric in {@link Profile.metrics}, the sum of values from samples
   * taken directly within the function's body, excluding its callees.
   */
  selfValues: Float64Array

  /**
   * For each metric in {@link Profile.metrics}, the sum of values from samples
   * taken directly within the function's body _and_ all its callees.
   */
  totalValues: Float64Array

  /** 1-based line number to values and sample count for that line. */
  lineToMetrics: Map<
    number,
    {
      /**
       * The number of samples taken directly within the function's body at this
       * line.
       */
      sampleCount: number

      /**
       * For each metric in {@link Profile.metrics}, the sum of values from
       * samples taken directly within the function's body at this line.
       */
      values: Float64Array
    }
  >

  /**
   * Direct caller id to values and sample count with that caller's calls to
   * this function.
   */
  callerIdToMetrics: Map<
    number,
    {
      /** The caller corresponding to the ID. */
      caller: ProfileFunction

      /**
       * The number of samples taken directly within the function's body with
       * this caller.
       */
      selfSampleCount: number

      /**
       * For each metric in {@link Profile.metrics}, the sum of values from
       * samples taken directly within the function's body with this caller.
       */
      selfValues: Float64Array
    }
  >

  /**
   * Direct callee id to values and sample count for that callee's calls where
   * this function was a direct or transitive caller.
   */
  calleeIdToMetrics: Map<
    number,
    {
      /** The callee corresponding to the ordinal. */
      callee: ProfileFunction

      /**
       * The number of samples taken directly within the function's, _and_ all
       * its callees, with this callee.
       */
      totalSampleCount: number

      /**
       * For each metric in {@link Profile.metrics}, the sum of values from
       * samples taken directly within the function's body, _and_ all its
       * callees. with this callee.
       */
      totalValues: Float64Array
    }
  >
}

/**
 * An aggregation of data from every sample involving a given function call
 * stack within a profile.
 */
export type ProfileCallStack = {
  /** The functions on the stack in callee to caller order. */
  frames: ProfileFunction[]

  /** The number of samples taken with this exact call stack. */
  selfSampleCount: number

  /**
   * For each metric in {@link Profile.metrics}, the sum of values from samples
   * taken with this exact call stack.
   */
  selfValues: Float64Array
}

/** An aggregation of all samples within a profile. */
export type Profile = {
  /** Metrics sampled in this profile. */
  metrics: Metric[]

  /** The number of samples taken within this profile. */
  totalSampleCount: number

  /**
   * For each metric in {@link Profile.metrics}, the sum of values from samples
   * taken within this profile.
   */
  totalValues: Float64Array

  /**
   * For each metric in {@link Profile.metrics}, the number of samples taken
   * per metric value.
   */
  samplingIntervals: Float64Array

  /**
   * Function category to values and sample count for calls of functions with
   * that category.
   */
  categoryToMetrics: Map<
    string,
    {
      /** The number of samples taken for functions with this category. */
      sampleCount: number

      /**
       * For each metric in {@link Profile.metrics}, the sum of values from
       * samples taken for functions with this category.
       */
      values: Float64Array
    }
  >

  /** Aggregated data for all functions called in this profile. */
  functions: ProfileFunction[]

  /** Aggregated data for all call stacks encountered in this profile. */
  callStacks: ProfileCallStack[]
}

const categorizeFunction = (
  entry: UniqueProfileEntry,
  { isThirdPartyEntry }: NormalizedProfileToMdOptions,
): string => {
  const { name, location } = entry

  if (
    name.startsWith(`(`) &&
    name.endsWith(`)`) &&
    !name.startsWith(`(anonymous`)
  ) {
    // This is a special sentinel function name like `(garbage collector)`,
    // `(idle)`, etc.
    return name.slice(1, -1)
  }

  if (name.startsWith(`RegExp: `)) {
    return `regexp`
  }

  if (!location || location.url.protocol === `node:`) {
    return `native`
  }

  return isThirdPartyEntry(entry) ? `third-party` : `ours`
}

/**
 * Returns the list of callers of {@link callStacks} that is the longest common
 * suffix of their frames, except it never returns a call stack as long as one
 * of the input call stacks.
 *
 * This behavior is so that it's safe to remove that suffix from any of the call
 * stacks and end up with a non-empty call stack to render.
 */
export const findCommonCallStack = (
  callStacks: { frames: ProfileFunction[] }[],
): ProfileFunction[] => {
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
