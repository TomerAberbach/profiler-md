import { makeSourceLocation } from '../location.ts'
import type { SourceLocation, SourceLocationInput } from '../location.ts'
import type { ProfileToMdContext } from '../options.ts'
import { normalizeStackFrameForContext } from '../origins/index.ts'
import type { OriginDetector } from '../origins/index.ts'

/**
 * A function occurrence at an executing position.
 *
 * Its {@link name} and {@link location} (the function's *definition* location)
 * identify the function; frames sharing them are the same function.
 *
 * {@link line} is the *executing* line and is used for the per-line breakdown,
 * not identity.
 *
 * A converter produces these raw; the resolved origin's `normalizeStackFrame` then
 * splits out the location and line for variants that pack them into the frame
 * string.
 */
export type StackFrame = {
  /** The function's name, if known. */
  name?: string

  /** Where the function was defined, if known. */
  location?: SourceLocationInput

  /**
   * The 1-based line where this frame was sampled, if known.
   *
   * Distinct from {@link location}'s line (the definition line): this is the
   * executing line, which the aggregator forwards to the leaf function's
   * per-line breakdown. Never a function-identity component.
   */
  line?: number
}

/**
 * An input's distinct {@link StackFrame}s, owning everything derived
 * from them: origin detection over the raw frames and, once the context is
 * resolved, the {@link StackFrameFunctionTable} the frames resolve to.
 *
 * One table exists per frames array. Formats that yield multiple inputs
 * sometimes share the frames; the table shares the derived data
 * so each computation runs once, not once per input.
 */
export class StackFrameTable {
  /**
   * A `WeakMap` rather than per-file state so sharing needs no extra
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

  /** Per frame index, a lazily-filled cache of the frame's parsed function. */
  readonly #functions: StackFrameFunction[] = []

  #detected = false
  #functionTable: StackFrameFunctionTable | undefined

  private constructor(frames: StackFrame[]) {
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

  #getOrCreateFunction(index: number): StackFrameFunction {
    let func = this.#functions[index]
    if (!func) {
      func = parseStackFrameFunction(this.#frames[index]!)
      this.#functions[index] = func
    }
    return func
  }

  /**
   * Returns the {@link StackFrameFunctionTable} the frames resolve to under
   * {@link context}, normalizing them with the resolved origin on first call.
   *
   * Memoized without keying on the context: a frames array belongs to one file
   * and is parsed fresh each conversion, so it never sees another context.
   */
  public resolve(context: ProfileToMdContext): StackFrameFunctionTable {
    this.#functionTable ??= this.#normalize(context)
    return this.#functionTable
  }

  #normalize(context: ProfileToMdContext): StackFrameFunctionTable {
    return new StackFrameFunctionTable(
      this.#frames.map(frame => normalizeStackFrameForContext(frame, context)),
    )
  }
}

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

  /** Per frame index, a lazily-filled cache of the frame's parsed function. */
  readonly #functions: StackFrameFunction[] = []

  public constructor(frames: (StackFrame | null)[]) {
    this.#frames = frames
  }

  /** Returns the frame's function, or `undefined` for a dropped frame. */
  public function(index: number): StackFrameFunction | undefined {
    let func = this.#functions[index]
    if (!func) {
      const frame = this.#frames[index]
      if (!frame) {
        return undefined
      }
      func = parseStackFrameFunction(frame)
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
export type StackFrameFunction = {
  /** @see {@link StackFrame.name} */
  name: string

  /** @see {@link StackFrame.location} */
  location: SourceLocation | undefined

  /**
   * The function's identity key: its normalized name and location (URL/path,
   * plus definition line and column). Two frames that parse to the same key
   * are the same function.
   *
   * The location's own line/column are part of the identity, but a frame's
   * executing line ({@link StackFrame.line}) is not; that contributes
   * to the line breakdown instead.
   */
  key: string
}

export const parseStackFrameFunction = (
  frame: StackFrame,
): StackFrameFunction => ({
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  name: frame.name || `(anonymous)`,
  location: makeSourceLocation(frame.location),
  key: functionIdentityKey(frame),
})

/** Builds {@link StackFrameFunction.key} from a frame's name and location. */
const functionIdentityKey = ({ name = ``, location }: StackFrame): string =>
  location === undefined
    ? name
    : `${name}\0${location.urlOrPath}\0${location.line ?? ``}\0${location.column ?? ``}`
