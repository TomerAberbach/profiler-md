import {
  makeSourceLocation,
  unresolvedSourceReferenceString,
  withSourceReferenceId,
} from '../location.ts'
import type {
  SourceLocation,
  SourcePosition,
  UnresolvedSourceReference,
} from '../location.ts'
import type {
  AggregationProfileToMdOptions,
  ProfileEntry,
  ProfileToMdContext,
} from '../options.ts'
import { ANONYMOUS_FUNCTION_NAME } from '../origins/categorize.ts'
import { originSpecOf } from '../origins/index.ts'
import type { OriginDetector } from '../origins/index.ts'

/**
 * A frame record: a parser's record of one function reference, with each
 * position the profiler recorded stored under its semantic.
 *
 * Its {@link name} and {@link definition} identify the function, so frame
 * records sharing them are the same function. {@link executing} is never part
 * of the identity, and the leaf frame's executing line feeds its function's
 * per-line breakdown.
 *
 * A parser fills each slot from what the profiler records there, per the
 * profiler's own source or spec, and leaves a slot the profiler doesn't record
 * empty. It NEVER infers one position from another. The resolved origin's
 * `normalizeStackFrame` then splits out the source and positions for variants
 * that pack them into the frame string. It also moves a position that a
 * profiler records under a different semantic into its slot.
 */
export type StackFrame = {
  name?: string

  /**
   * Where the function is defined, if known: the source it is in and, when
   * the profiler records it, the position within that source.
   *
   * The position is inside the definition because it is a position within
   * that source, so it can't exist without one.
   */
  definition?: UnresolvedSourceReference & {
    position?: SourcePosition
  }

  /**
   * The position this frame was at when recorded, if known.
   *
   * It is meaningful without a {@link definition}, because the line is still a
   * line of the function.
   */
  executing?: SourcePosition

  /**
   * Where this function was called: a position in the caller's source, if the
   * profiler recorded it.
   *
   * Identifies and locates the function only under an origin declaring
   * `call-site` identity (`OriginSpec.functionIdentity`), for a profiler that
   * records no other position.
   */
  callSite?: UnresolvedSourceReference & { position: SourcePosition }
}

/** A frame's parsed name and location, the unit functions aggregate by. */
export type StackFrameFunction = {
  /** @see {@link StackFrame.name} */
  name: string

  /** The function's parsed identifying source and position. */
  location: SourceLocation | undefined

  /**
   * The function's identity key, built from its name and identifying location.
   * Two frames that parse to the same key are the same function.
   */
  key: string
}

/**
 * Which recorded position identifies and locates a profile's functions:
 * `definition` (the default), or `call-site` for an origin whose profiler
 * records only where each function was called. Under `call-site`, a function
 * called from several sites is one function per site.
 */
export type FunctionIdentity = `definition` | `call-site`

/**
 * An input's distinct frame records, owning everything derived from them:
 * origin detection over the raw frame records and, once the context is
 * resolved, the {@link StackFrameFunctionTable} the frame records resolve to.
 *
 * One table exists per frames array. Formats that yield multiple inputs
 * sometimes share the frames; the table shares the derived data
 * so each computation runs once, not once per input.
 */
export class StackFrameTable {
  /**
   * A `WeakMap` rather than per-input state so sharing needs no extra
   * parameter passed through the pipeline: each table is reclaimed with its
   * frames array.
   */
  static readonly #tables = new WeakMap<StackFrame[], StackFrameTable>()

  public static for(frames: StackFrame[]): StackFrameTable {
    let table = StackFrameTable.#tables.get(frames)
    if (!table) {
      table = new StackFrameTable(frames)
      StackFrameTable.#tables.set(frames, table)
    }
    return table
  }

  readonly #frames: StackFrame[]
  readonly #functions: StackFrameFunctions

  #detected = false
  #functionTable: StackFrameFunctionTable | undefined

  private constructor(frames: StackFrame[]) {
    this.#frames = frames
    this.#functions = new StackFrameFunctions(frames, `definition`)
  }

  /** Adds the raw frames to {@link detector}, once, until decided. */
  public addToDetector(detector: OriginDetector): void {
    if (this.#detected) {
      return
    }
    this.#detected = true

    const { length } = this.#frames
    for (let index = 0; !detector.decided && index < length; index++) {
      const { name, location } = this.#functions.get(index)!
      detector.add({ name, location })
    }
  }

  /**
   * Returns the {@link StackFrameFunctionTable} the frames resolve to under
   * {@link context}, normalizing them with the resolved origin on first call.
   *
   * Memoized without keying on the context: a frames array comes from one raw
   * input and is parsed fresh each conversion, so it is never resolved under
   * another context.
   */
  public resolve(context: ProfileToMdContext): StackFrameFunctionTable {
    this.#functionTable ??= this.#normalize(context)
    return this.#functionTable
  }

  #normalize(context: ProfileToMdContext): StackFrameFunctionTable {
    const { functionIdentity, isTruncationMarker, normalizeStackFrame } =
      originSpecOf(context.origin)
    return new StackFrameFunctionTable(
      this.#frames.map(frame =>
        dropLocationName(frame, normalizeStackFrame(frame, context.format)),
      ),
      functionIdentity,
      index => isTruncationMarker(this.#frames[index]!, context.format),
    )
  }
}

/**
 * Drops the name of {@link normalized} when {@link frame}, the frame before
 * normalization, is named with its own file reference, because such a frame
 * has no function name. Unrelated profilers independently converged on this
 * idiom (e.g. Excimer, rbspy), so it applies to every origin and format. Only a
 * file reference qualifies, because a function can share its logical
 * reference's name, like a method named after its class or module.
 */
const dropLocationName = (
  frame: StackFrame,
  normalized: StackFrame | null,
): StackFrame | null =>
  normalized &&
  frame.name !== undefined &&
  frame.definition?.type === `file` &&
  frame.name === frame.definition.urlOrPath
    ? { ...normalized, name: undefined }
    : normalized

/**
 * An input's distinct frames normalized by the resolved origin, resolving a
 * frame index to its {@link StackFrameFunction}.
 */
export class StackFrameFunctionTable {
  /**
   * A `null` slot is a frame the origin dropped (a pseudo-frame, not a
   * function), removed from every call stack.
   */
  readonly #frames: (StackFrame | null)[]

  readonly #functions: StackFrameFunctions

  #linelessFunctionKeys: Set<string> | undefined

  /** Whether the raw frame at an index is the origin's truncation marker. */
  readonly #isTruncationMarker: (index: number) => boolean

  public constructor(
    frames: (StackFrame | null)[],
    identity: FunctionIdentity,
    isTruncationMarker: (index: number) => boolean,
  ) {
    this.#frames = frames
    this.#functions = new StackFrameFunctions(frames, identity)
    this.#isTruncationMarker = isTruncationMarker
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  public function(index: number): StackFrameFunction | undefined {
    return this.#functions.get(index)
  }

  /** The identity keys of the table's functions with no definition line. */
  public linelessFunctionKeys(): ReadonlySet<string> {
    if (!this.#linelessFunctionKeys) {
      this.#linelessFunctionKeys = new Set()
      for (let index = 0; index < this.#frames.length; index++) {
        const func = this.function(index)
        if (func && func.location?.line === undefined) {
          this.#linelessFunctionKeys.add(func.key)
        }
      }
    }
    return this.#linelessFunctionKeys
  }

  public executingLine(index: number): number | undefined {
    return this.#frames[index]?.executing?.line
  }

  /**
   * Whether the frame is the origin's truncation marker
   * (`OriginSpec.isTruncationMarker`).
   */
  public isTruncationMarker(index: number): boolean {
    return this.#isTruncationMarker(index)
  }
}

export const parseStackFrameFunction = (
  frame: StackFrame,
): StackFrameFunction => {
  const identifying = identifyingReference(frame, `definition`)
  return makeStackFrameFunction(
    frame,
    identifying,
    functionIdentityKey(frame.name, identifying),
  )
}

/**
 * Each frame's function, memoized per frame index. Frames sharing an identity
 * key resolve to one function, so each distinct location is resolved once.
 */
class StackFrameFunctions {
  readonly #frames: readonly (StackFrame | null)[]
  readonly #identity: FunctionIdentity
  readonly #functions: StackFrameFunction[] = []
  readonly #keyToFunction = new Map<string, StackFrameFunction>()

  public constructor(
    frames: readonly (StackFrame | null)[],
    identity: FunctionIdentity,
  ) {
    this.#frames = frames
    this.#identity = identity
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  public get(index: number): StackFrameFunction | undefined {
    let func = this.#functions[index]
    if (!func) {
      const frame = this.#frames[index]
      if (!frame) {
        return undefined
      }
      const identifying = identifyingReference(frame, this.#identity)
      const key = functionIdentityKey(frame.name, identifying)
      func = this.#keyToFunction.get(key)
      if (!func) {
        func = makeStackFrameFunction(frame, identifying, key)
        this.#keyToFunction.set(key, func)
      }
      this.#functions[index] = func
    }
    return func
  }
}

const identifyingReference = (
  frame: StackFrame,
  identity: FunctionIdentity,
): StackFrame[`definition`] =>
  identity === `call-site` ? frame.callSite : frame.definition

const makeStackFrameFunction = (
  frame: StackFrame,
  identifying: StackFrame[`definition`],
  key: string,
): StackFrameFunction => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  name: frame.name || ANONYMOUS_FUNCTION_NAME,
  location: makeSourceLocation(identifying, identifying?.position),
  key,
})

/**
 * Resolves each frame's function to the aggregated function it adds to. A diff
 * side merges the functions with no definition line that share a match key and
 * whose identity keys are absent from the other side, because the diff has no
 * position to pair them by (e.g. the lambdas of one JVM class, whose names
 * differ only by a runtime address). A function the other side has pairs with
 * itself instead. A merged function takes the entry match's name and location
 * once a second function merges into it, and a function alone with its match
 * key keeps its own.
 */
export class FunctionMerger {
  readonly #options: AggregationProfileToMdOptions
  readonly #context: ProfileToMdContext

  /**
   * On a diff side, the identity keys of the other side's functions with no
   * line.
   */
  readonly #otherSideKeys: ReadonlySet<string> | undefined

  /** Each function's own key to its match. */
  readonly #ownKeyToMatch = new Map<string, FunctionMatch>()

  /** Each merged function's key to the own key of its first function. */
  readonly #keyToFirstOwnKey = new Map<string, string>()

  public constructor(
    options: AggregationProfileToMdOptions,
    context: ProfileToMdContext,
    otherSideKeys: ReadonlySet<string> | undefined,
  ) {
    this.#options = options
    this.#context = context
    this.#otherSideKeys = otherSideKeys
  }

  public resolve<Func extends ProfileEntry & MergeableFunction>(
    frameFunction: StackFrameFunction,
    keyToFunction: ReadonlyMap<unknown, Func>,
    register: (key: string, frameFunction: StackFrameFunction) => Func,
  ): Func {
    const match = this.#matchOf(frameFunction)
    if (!match) {
      return (
        keyToFunction.get(frameFunction.key) ??
        register(frameFunction.key, frameFunction)
      )
    }

    const func = keyToFunction.get(match.key)
    if (!func) {
      this.#keyToFirstOwnKey.set(match.key, frameFunction.key)
      const first = register(match.key, frameFunction)
      // Caches the match keys of the function's own name and location, so the
      // diff pairs it by those once a merge renames it.
      this.#options.entryMatchKeys(first, this.#context)
      return first
    }
    if (
      !func.merged &&
      this.#keyToFirstOwnKey.get(match.key) !== frameFunction.key
    ) {
      func.name = match.name
      func.location = match.location
      func.merged = true
    }
    return func
  }

  /**
   * The match of {@link func} on a diff side when it has no line and the other
   * side lacks its identity key.
   */
  #matchOf(func: StackFrameFunction): FunctionMatch | undefined {
    const otherSideKeys = this.#otherSideKeys
    if (
      !otherSideKeys ||
      func.location?.line !== undefined ||
      otherSideKeys.has(func.key)
    ) {
      return undefined
    }
    const cached = this.#ownKeyToMatch.get(func.key)
    if (cached) {
      return cached
    }

    const keys = this.#options.entryMatchKeys(
      { name: func.name, location: func.location },
      this.#context,
    )
    const match = {
      key: `\0match\0${keys.nameAndLocation}`,
      name: keys.name,
      location: withSourceReferenceId(func.location, keys.location),
    }
    this.#ownKeyToMatch.set(func.key, match)
    return match
  }
}

/** An aggregated function a {@link FunctionMerger} can merge into. */
type MergeableFunction = {
  name: string
  location?: SourceLocation
  merged?: boolean
}

/**
 * The key a function with no line merges by, and the name and location it
 * takes once merged. An entry match that pairs by name alone leaves it no
 * location.
 */
type FunctionMatch = {
  key: string
  name: string
  location: SourceLocation | undefined
}

const functionIdentityKey = (
  name = ``,
  identifying?: StackFrame[`definition`],
): string =>
  identifying === undefined
    ? name
    : `${name}\0${identifying.type}\0${unresolvedSourceReferenceString(identifying)}\0${identifying.position?.line ?? ``}\0${identifying.position?.column ?? ``}`
