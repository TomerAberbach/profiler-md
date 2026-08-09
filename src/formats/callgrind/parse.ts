import plur from 'plur'
import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import type { SourceLocationInput } from '../../location.ts'
import type {
  CallGraph,
  CallGraphFunction,
} from '../../modalities/call-graph/index.ts'
import { determineMetric } from '../../modalities/metric.ts'
import type { Metric } from '../../modalities/metric.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import { FormatParseError } from '../error.ts'

export const parseCallgrind = (bytes: Uint8Array): CallGraph[] => {
  const builder = new CallgrindProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseCallgrindAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<CallGraph[]> => {
  const builder = new CallgrindProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

/**
 * One function's accumulated costs: its identity (name, source file, ELF
 * object), self costs (overall and per line), and its outgoing calls. Value
 * arrays are indexed by the builder's global event indices.
 */
type CallgrindFunction = {
  index: number
  name: string
  file: string
  object: string
  selfValues: number[]
  lineToValues: Map<number, number[]>
  calleeToCalls: Map<CallgrindFunction, CallgrindCall>
}

/** One arc's accumulated call count and inclusive cost. */
type CallgrindCall = {
  callCount: number
  totalValues: number[]
}

/**
 * A `calls=` line pending the cost line that contains the call's inclusive
 * cost: the callee's name, resolved from the `cfn=` context the `calls=`
 * required, and the calls' count.
 */
type PendingCall = {
  calleeName: string
  callCount: number
}

/**
 * The position-spec keys, each dispatching to one of the compression
 * dictionaries shared between cost and call specs (`ob`/`cob` for objects,
 * `fl`/`fi`/`fe`/`cfi`/`cfl` for files, `fn`/`cfn` for functions).
 */
const SPEC_KEYS: ReadonlySet<string> = new Set([
  `ob`,
  `fl`,
  `fi`,
  `fe`,
  `fn`,
  `cob`,
  `cfi`,
  `cfl`,
  `cfn`,
  `calls`,
  `jump`,
  `jcnd`,
])

/** The key of a `key: value` header line, e.g. `events: Ir` or `creator: x`. */
const HEADER_KEY = /^[A-Za-z][\w-]*$/u

/** A compressed name's numeric ID between its parentheses. */
const COMPRESSED_NAME_ID = /^\d+$/u

/**
 * Resolves a possibly-compressed name against its {@link dictionary}: `(N)`
 * defines (when a name follows) or references an ID. Anything else is a
 * literal name.
 */
const resolveName = (
  dictionary: Map<number, string>,
  value: string,
): string => {
  // A position spec's name may follow its `=` after any run of spaces.
  const rest = value.trimStart()
  if (!rest.startsWith(`(`)) {
    return rest
  }
  const close = rest.indexOf(`)`)
  const idText = close === -1 ? `` : rest.slice(1, close)
  if (!COMPRESSED_NAME_ID.test(idText)) {
    // A literal name starting with `(` (e.g. Valgrind's `(below main)`),
    // not a compression reference.
    return rest
  }

  const id = Number(idText)
  // The format's whitespace rules allow any run of spaces between `(N)` and
  // the name it defines, so an empty remainder distinguishes a reference from a
  // definition.
  const name = rest.slice(close + 1).trimStart()
  if (name.length > 0) {
    dictionary.set(id, name)
    return name
  }

  const known = dictionary.get(id)
  if (known === undefined) {
    throw new FormatParseError(`name (${id}) referenced before definition`)
  }
  return known
}

class CallgrindProfileBuilder {
  /** Global event names, in first-seen order across parts. */
  readonly #eventNames: string[] = []
  readonly #eventIndices = new Map<string, number>()

  /** Long event names from `event:` description lines, keyed by abbreviation. */
  readonly #eventLongNames = new Map<string, string>()

  /** The `creator:` header's value, the writer's self-identification. */
  #creator: string | undefined

  /**
   * Per part-local cost-line value position, the global event index it
   * accumulates into. `undefined` until the part's `events:` line.
   */
  #partEventIndices: number[] | undefined

  /** The subposition columns declared by `positions:`, defaulting to `line`. */
  #subpositionCount = 1
  #lineSubpositionIndex = 0

  /**
   * Per subposition column, the previous cost line's value, the base for the
   * `+n`/`-n`/`*` relative-subposition compression.
   */
  #lastSubpositions: number[] = []

  // The name-compression dictionaries.
  readonly #objectNames = new Map<number, string>()
  readonly #fileNames = new Map<number, string>()
  readonly #functionNames = new Map<number, string>()

  // The current cost position context.
  #object = ``
  #file = ``
  /** The current cost file: `#file`, or an inlining switch via `fi=`/`fe=`. */
  #costFile = ``
  #function: CallgrindFunction | undefined

  // The pending call context (`cob=`/`cfi=`/`cfn=`), consumed by the cost line
  // following a `calls=` line, which contains the call's inclusive cost.
  #callObject: string | undefined
  #callFile: string | undefined
  #callName: string | undefined
  #pendingCall: PendingCall | undefined

  readonly #functions = new Map<string, CallgrindFunction>()

  public addLine(line: string): void {
    if (line.length === 0 || line.startsWith(`#`)) {
      return
    }

    const equals = specKeyEnd(line)
    if (equals !== -1) {
      this.#addSpec(line.slice(0, equals), line.slice(equals + 1))
      return
    }

    const colon = headerKeyEnd(line)
    if (colon !== -1) {
      this.#addHeader(line.slice(0, colon), line.slice(colon + 1).trim())
      return
    }

    if (startsCostLine(line)) {
      this.#addCostLine(line)
      return
    }

    throw new FormatParseError(
      `unrecognized line, got: ${JSON.stringify(line)}`,
    )
  }

  #addHeader(key: string, rest: string): void {
    switch (key) {
      case `events`:
        this.#setPartEvents(rest)
        break

      case `event`:
        this.#addEventLongName(rest)
        break

      case `positions`:
        this.#setPositions(rest)
        break

      case `creator`:
        this.#creator = rest
        break

      case `part`:
        this.#startPart()
        break

      // Metadata (`version:`, `creator:`, `cmd:`, `summary:`, `totals:`, ...)
      // and unknown keys: the header allows arbitrary `key: value` lines.
      default:
        break
    }
  }

  /** Maps the part's cost-line value positions onto global event indices. */
  #setPartEvents(rest: string): void {
    const names = rest.split(/\s+/u).filter(name => name.length > 0)
    if (names.length === 0) {
      throw new FormatParseError(`empty events header`)
    }
    this.#partEventIndices = names.map(name => this.#eventIndex(name))
  }

  #eventIndex(name: string): number {
    let index = this.#eventIndices.get(name)
    if (index === undefined) {
      index = this.#eventNames.length
      this.#eventIndices.set(name, index)
      this.#eventNames.push(name)
    }
    return index
  }

  /**
   * Records the long name from an `event: <abbrev> [= formula] [: long name]`
   * description line. Derived (formula) events never appear on cost lines, so
   * the parser keeps only the long name, a more readable metric name.
   */
  #addEventLongName(rest: string): void {
    const colon = rest.indexOf(`:`)
    if (colon === -1) {
      return
    }
    const abbreviation = /^\w+/u.exec(rest)?.[0]
    const longName = rest.slice(colon + 1).trim()
    if (abbreviation && longName.length > 0) {
      this.#eventLongNames.set(abbreviation, longName)
    }
  }

  /** Declares the subposition columns cost lines start with. */
  #setPositions(rest: string): void {
    const columns = rest.split(/\s+/u).filter(name => name.length > 0)
    if (
      columns.length === 0 ||
      columns.some(column => column !== `instr` && column !== `line`)
    ) {
      throw new FormatParseError(
        `invalid positions header, got: ${JSON.stringify(rest)}`,
      )
    }
    this.#subpositionCount = columns.length
    this.#lineSubpositionIndex = columns.indexOf(`line`)
    this.#lastSubpositions = []
  }

  /**
   * Restarts the position context for a new dump part. The name-compression
   * dictionaries persist across parts of one file.
   */
  #startPart(): void {
    this.#object = ``
    this.#file = ``
    this.#costFile = ``
    this.#function = undefined
    this.#clearPendingCall()
    // A part's specs are self-contained, so the callee name a `calls=` would
    // otherwise resolve against stops at the boundary.
    this.#callName = undefined
    this.#lastSubpositions = []
  }

  #addSpec(key: string, rest: string): void {
    switch (key) {
      case `ob`:
        this.#object = resolveName(this.#objectNames, rest)
        break
      case `fl`:
        this.#file = resolveName(this.#fileNames, rest)
        this.#costFile = this.#file
        this.#dropPendingCall()
        break
      case `fi`:
      case `fe`:
        this.#costFile = resolveName(this.#fileNames, rest)
        break
      case `fn`:
        this.#function = this.#getOrCreateFunction(
          this.#object,
          this.#file,
          resolveName(this.#functionNames, rest),
        )
        // A new function starts back in its own file, ending any `fi=` switch.
        this.#costFile = this.#file
        this.#dropPendingCall()
        break
      case `cob`:
        this.#callObject = resolveName(this.#objectNames, rest)
        break
      case `cfi`:
      case `cfl`:
        this.#callFile = resolveName(this.#fileNames, rest)
        break
      case `cfn`:
        this.#callName = resolveName(this.#functionNames, rest)
        break
      case `calls`: {
        // `calls=count target-subpositions`. The count accumulates on the
        // caller→callee arc. The following cost line contains the call's
        // inclusive cost. Aggregation ignores the target position.
        if (this.#callName === undefined) {
          throw new FormatParseError(`calls= without a preceding cfn=`)
        }
        const count = rest.split(/\s+/u, 1)[0]!
        this.#pendingCall = {
          calleeName: this.#callName,
          callCount: count.length === 0 ? 0 : parseCost(count),
        }
        break
      }
      // Jump specs (`jump=`/`jcnd=`) contain control-flow counts, not costs.
      case `jump`:
      case `jcnd`:
        break
    }
  }

  #getOrCreateFunction(
    object: string,
    file: string,
    name: string,
  ): CallgrindFunction {
    const key = `${object}\0${file}\0${name}`
    let func = this.#functions.get(key)
    if (!func) {
      func = {
        index: this.#functions.size,
        name,
        file,
        object,
        selfValues: [],
        lineToValues: new Map(),
        calleeToCalls: new Map(),
      }
      this.#functions.set(key, func)
    }
    return func
  }

  #addCostLine(line: string): void {
    const eventIndices = this.#partEventIndices
    if (!eventIndices) {
      throw new FormatParseError(`cost line before events header`)
    }
    const func = this.#function
    if (!func) {
      throw new FormatParseError(`cost line before fn=`)
    }

    // Each subposition and cost ends with a space, so a cost line's last value
    // may be followed by one, which would otherwise split into an empty token.
    const tokens = line.trimEnd().split(/\s+/u)
    const costLine = this.#parseSubpositions(tokens)
    const values = this.#parseValues(tokens, eventIndices)

    const pendingCall = this.#pendingCall
    if (pendingCall) {
      this.#addCallCost(func, pendingCall, values)
      return
    }
    this.#addSelfCost(func, costLine, values)
  }

  /**
   * Resolves the line's leading subposition columns, returning the one the
   * `positions:` header declared as the source line.
   */
  #parseSubpositions(tokens: string[]): number | undefined {
    if (tokens.length < this.#subpositionCount) {
      throw new FormatParseError(`cost line with missing subpositions`)
    }

    let costLine: number | undefined
    for (let column = 0; column < this.#subpositionCount; column++) {
      const subposition = this.#parseSubposition(tokens[column]!, column)
      if (column === this.#lineSubpositionIndex) {
        costLine = subposition
      }
    }
    return costLine
  }

  /** Reads the line's cost values into the global event indices. */
  #parseValues(tokens: string[], eventIndices: number[]): number[] {
    if (tokens.length > this.#subpositionCount + eventIndices.length) {
      throw new FormatParseError(`cost line with more values than events`)
    }
    const values: number[] = []
    for (let i = this.#subpositionCount; i < tokens.length; i++) {
      // A cost line may omit trailing values, which default to zero.
      values[eventIndices[i - this.#subpositionCount]!] = parseCost(tokens[i]!)
    }
    return values
  }

  /** Accumulates a pending `calls=` and its inclusive cost onto the arc. */
  #addCallCost(
    caller: CallgrindFunction,
    pendingCall: PendingCall,
    values: number[],
  ): void {
    // A call without `cob=`/`cfi=` targets the current object and the current
    // cost file rather than the function's own file: Valgrind omits `cfi=`
    // when the callee's file matches the last written file context, which an
    // `fi=` inlining switch is part of.
    const callee = this.#getOrCreateFunction(
      this.#callObject ?? this.#object,
      this.#callFile ?? this.#costFile,
      pendingCall.calleeName,
    )
    // Callgrind folds recursion into a function's own costs, so a direct
    // self-call arc's inclusive cost is already counted in them. Keeping it
    // would double count.
    if (callee !== caller) {
      let call = caller.calleeToCalls.get(callee)
      if (!call) {
        call = { callCount: 0, totalValues: [] }
        caller.calleeToCalls.set(callee, call)
      }
      call.callCount += pendingCall.callCount
      addValues(call.totalValues, values)
    }
    this.#clearPendingCall()
  }

  /** Accumulates a cost recorded in the function's own body. */
  #addSelfCost(
    func: CallgrindFunction,
    costLine: number | undefined,
    values: number[],
  ): void {
    addValues(func.selfValues, values)
    // Line 0 means "no line information". A cost line in an `fi=`-switched
    // file belongs to a different file than the function's own, so its line
    // numbers would be misleading in the function's per-line breakdown.
    if (
      costLine !== undefined &&
      costLine > 0 &&
      this.#costFile === func.file
    ) {
      addValues(mapValues(func.lineToValues, costLine), values)
    }
  }

  #parseSubposition(token: string, column: number): number {
    let value: number
    if (token === `*`) {
      value = this.#lastSubpositions[column] ?? 0
    } else if (token.startsWith(`+`)) {
      value = (this.#lastSubpositions[column] ?? 0) + parseCost(token.slice(1))
    } else if (token.startsWith(`-`)) {
      value = (this.#lastSubpositions[column] ?? 0) - parseCost(token.slice(1))
    } else {
      value = parseCost(token)
    }
    this.#lastSubpositions[column] = value
    return value
  }

  /**
   * Consumes the call the cost line completed.
   *
   * The `cob=`/`cfi=` context resets, matching what Valgrind writes. Valgrind
   * omits `cfi=` for a call whose callee is in the caller's own file even
   * after a `cfi=` naming another file, so carrying the last one forward would
   * file the callee under the wrong source.
   *
   * The `cfn=` callee name stays, because a position spec holds until it is
   * written again, and a `calls=` with no `cfn=` of its own calls the last
   * callee named.
   */
  #clearPendingCall(): void {
    this.#pendingCall = undefined
    this.#callObject = undefined
    this.#callFile = undefined
  }

  /**
   * Abandons a `calls=` whose cost line never arrived (a truncated file, a
   * part boundary written without a `part:` header). The stale `calls=` would
   * otherwise consume the next function's first cost line as an arc to the
   * stale callee.
   *
   * Leaves the `cob=`/`cfi=`/`cfn=` context, which a later `calls=` in another
   * function still resolves against: Valgrind writes those specs only when they
   * differ from the last ones written, including across function boundaries.
   */
  #dropPendingCall(): void {
    this.#pendingCall = undefined
  }

  public build(): CallGraph[] {
    if (this.#eventNames.length === 0) {
      throw new FormatParseError(`missing events header`)
    }

    const originHint = creatorOriginHint(this.#creator)
    const functions = [...this.#functions.values()]
    return [
      {
        type: `call-graph`,
        ...(originHint === undefined ? {} : { originHint }),
        metrics: this.#eventNames.map(name =>
          callgrindEventMetric(
            name,
            this.#eventLongNames.get(name),
            this.#eventIndices.has(SYSTEM_CPU_TIME_EVENT),
          ),
        ),
        frames: functions.map(callgrindStackFrame),
        functions: functions.map(callGraphFunction),
      },
    ]
  }
}

/** The index of a spec line's `=`, or `-1` when the line is not a spec. */
const specKeyEnd = (line: string): number => {
  // A spec key is at most 5 characters (`calls`), so an `=` any further in
  // can't make the line a spec.
  const equals = line.indexOf(`=`)
  return equals > 0 &&
    equals <= MAX_SPEC_KEY_LENGTH &&
    SPEC_KEYS.has(line.slice(0, equals))
    ? equals
    : -1
}

const MAX_SPEC_KEY_LENGTH = 5

/** The index of a header line's `:`, or `-1` when the line is not a header. */
const headerKeyEnd = (line: string): number => {
  const colon = line.indexOf(`:`)
  return colon > 0 && HEADER_KEY.test(line.slice(0, colon)) ? colon : -1
}

/**
 * Whether a non-empty line starts with a subposition: a number (decimal or
 * `0x` hex) or a relative `+n`/`-n`/`*`.
 */
const startsCostLine = (line: string): boolean => {
  const first = line.codePointAt(0)!
  return (
    (first >= CHAR_0 && first <= CHAR_9) ||
    first === CHAR_PLUS ||
    first === CHAR_MINUS ||
    first === CHAR_STAR
  )
}

const CHAR_0 = 48
const CHAR_9 = 57
const CHAR_PLUS = 43
const CHAR_MINUS = 45
const CHAR_STAR = 42

/** Parses a decimal or `0x`-prefixed hexadecimal unsigned integer. */
const parseCost = (token: string): number => {
  // `Number('')` is `0`, so an empty token needs its own rejection. A bare `+`
  // or `-` subposition leaves one when its sign is sliced off.
  const value =
    token.length === 0
      ? Number.NaN
      : token.startsWith(`0x`)
        ? Number.parseInt(token, 16)
        : Number(token)
  if (Number.isNaN(value) || value < 0) {
    throw new FormatParseError(`invalid number, got: ${JSON.stringify(token)}`)
  }
  return value
}

/** Adds {@link values} into {@link target} element-wise, growing it. */
const addValues = (target: number[], values: number[]): void => {
  for (let i = 0; i < values.length; i++) {
    target[i] = (target[i] ?? 0) + (values[i] ?? 0)
  }
}

const mapValues = <K>(map: Map<K, number[]>, key: K): number[] => {
  let values = map.get(key)
  if (!values) {
    values = []
    map.set(key, values)
  }
  return values
}

/**
 * Maps the file's `creator:` header to a registered origin: Valgrind's
 * callgrind tool writes `callgrind-<version>` and rbspy writes `rbspy`. The
 * writers' entries lack origin-level markers. A native frame from Valgrind
 * looks like one from any other native profiler, and a pure-Ruby rbspy capture
 * has no `[c function]` frame. The header's self-identification becomes the
 * origin hint instead.
 */
const creatorOriginHint = (creator: string | undefined): string | undefined => {
  if (creator === undefined) {
    return undefined
  }
  if (creator.startsWith(`callgrind`)) {
    return `valgrind`
  }
  if (creator === `rbspy`) {
    return `rbspy`
  }
  return undefined
}

const callgrindStackFrame = (func: CallgrindFunction): StackFrame => ({
  // Callgrind writes `???` for an unknown function name, and dropping it shows
  // the frame as `(anonymous)` instead of literal question marks. A
  // recursion-separated instance (`--separate-recs`'s `fn'2`) stays a distinct
  // call-graph node, because its arcs partition the recursion levels. Dropping
  // the suffix here lets the aggregator fold the levels into one function.
  name:
    func.name === UNKNOWN ? undefined : func.name.replace(RECURSION_SUFFIX, ``),
  // A function compiled without debug info has no source file. Its ELF object
  // (e.g. `/usr/lib/libc.so.6`) is the next best location, so categorization by
  // path still applies to system libraries.
  location: locationOf(func.file) ?? locationOf(func.object),
})

/** Callgrind's recursion-separation suffix, e.g. `_dl_start'2`. */
const RECURSION_SUFFIX = /'\d+$/u

const locationOf = (file: string): SourceLocationInput | undefined =>
  file === `` || file === UNKNOWN
    ? undefined
    : { type: `file`, urlOrPath: file }

const UNKNOWN = `???`

const callGraphFunction = (func: CallgrindFunction): CallGraphFunction => ({
  selfValues: func.selfValues,
  lineToValues: func.lineToValues,
  calls: Array.from(func.calleeToCalls, ([callee, call]) => ({
    callee: callee.index,
    callCount: call.callCount,
    totalValues: call.totalValues,
  })),
})

/**
 * Maps a callgrind event to a metric. The standard cache-simulation and
 * branch-prediction abbreviations map to readable names, `--collect-systime`'s
 * durations to time metrics, and everything else to the file's `event:` long
 * name or the abbreviation itself, formatted as a plain counter.
 */
const callgrindEventMetric = (
  name: string,
  longName: string | undefined,
  nanosecondSystemTime: boolean,
): Metric => {
  // A sampling profiler exporting callgrind (e.g. rbspy) counts samples as
  // its only event. Custom phrases make the output read like a sampling
  // profile: "Sampling profile", "Collected 129 samples."
  if (name.toLowerCase() === `samples`) {
    return SAMPLES_METRIC
  }

  const systemTimePhrases = SYSTEM_TIME_EVENTS.get(name)
  if (systemTimePhrases) {
    return {
      type: `time`,
      milliseconds: nanosecondSystemTime ? 1e-6 : 1,
      phrases: systemTimePhrases,
    }
  }

  const singular = KNOWN_EVENTS.get(name)
  if (singular) {
    const displayName = plur(singular, 2)
    return {
      type: `custom`,
      proseUnit: singular,
      phrases: {
        titleNoun: displayName,
        columnNoun: displayName,
        pastTenseVerb: `recorded`,
        pastParticipleVerbPhrase: `${displayName} recorded`,
      },
    }
  }

  const displayName = longName ?? name
  return determineMetric({ name: displayName, unit: displayName })
}

const SAMPLES_METRIC: Metric = {
  type: `custom`,
  proseUnit: `sample`,
  phrases: {
    titleNoun: `sampling`,
    columnNoun: `samples`,
    pastTenseVerb: `collected`,
    pastParticipleVerbPhrase: `samples collected`,
  },
}

/** The event `--collect-systime=nsec` adds to `sysCount` and `sysTime`. */
const SYSTEM_CPU_TIME_EVENT = `sysCpuTime`

/**
 * The duration events `--collect-systime` records, for which the file contains
 * no unit. `nsec` is the only setting that also records
 * {@link SYSTEM_CPU_TIME_EVENT}, so its presence identifies nanoseconds. Every
 * other setting is read as the `yes`/`msec` default's milliseconds. That
 * misreads an explicit `--collect-systime=usec` by a factor of 1000.
 */
const SYSTEM_TIME_EVENTS: ReadonlyMap<string, Metric[`phrases`]> = new Map([
  [
    `sysTime`,
    {
      titleNoun: `system call`,
      columnNoun: `time`,
      pastTenseVerb: `spent`,
      pastParticipleVerbPhrase: `time spent in system calls`,
    },
  ],
  [
    SYSTEM_CPU_TIME_EVENT,
    {
      titleNoun: `system call CPU`,
      columnNoun: `time`,
      pastTenseVerb: `spent`,
      pastParticipleVerbPhrase: `CPU time spent in system calls`,
    },
  ],
])

/**
 * The standard cachegrind/callgrind event abbreviations, named (in the
 * singular, ready for count pluralization) per the Valgrind manual.
 */
const KNOWN_EVENTS: ReadonlyMap<string, string> = new Map([
  [`Ir`, `instruction`],
  [`Dr`, `data read`],
  [`Dw`, `data write`],
  [`I1mr`, `I1 cache read miss`],
  [`D1mr`, `D1 cache read miss`],
  [`D1mw`, `D1 cache write miss`],
  [`ILmr`, `LL instruction read miss`],
  [`DLmr`, `LL data read miss`],
  [`DLmw`, `LL data write miss`],
  [`I2mr`, `L2 instruction read miss`],
  [`D2mr`, `L2 data read miss`],
  [`D2mw`, `L2 data write miss`],
  [`Bc`, `conditional branch`],
  [`Bcm`, `conditional branch misprediction`],
  [`Bi`, `indirect branch`],
  [`Bim`, `indirect branch misprediction`],
  [`Ge`, `global bus event`],
  [`sysCount`, `system call`],
])
