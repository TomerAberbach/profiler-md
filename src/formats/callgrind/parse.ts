import { decodeUtf8Lines, decodeUtf8LinesAsync } from '../../helpers/bytes.ts'
import { determineMetric } from '../../profile/index.ts'
import type { Metric, Profile, Sample } from '../../profile/index.ts'

export const parseCallgrind = (bytes: Uint8Array): Profile[] => {
  const builder = new CallgrindProfileBuilder()
  for (const line of decodeUtf8Lines(bytes)) {
    builder.addLine(line)
  }
  return builder.build()
}

export const parseCallgrindAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<Profile[]> => {
  const builder = new CallgrindProfileBuilder()
  for await (const line of decodeUtf8LinesAsync(stream)) {
    builder.addLine(line)
  }
  return builder.build()
}

/**
 * One function's accumulated costs: its identity (name, source file, ELF
 * object), self costs (overall and per line), and its outgoing calls' inclusive
 * costs. Value arrays are indexed by the builder's global event indices.
 */
type CallgrindFunction = {
  index: number
  name: string
  file: string
  object: string
  selfValues: number[]
  lineToValues: Map<number, number[]>
  calleeToValues: Map<CallgrindFunction, number[]>
}

/**
 * The position-spec keys, each dispatching to one of the three compression
 * dictionaries the format shares between cost and call specs (`ob`/`cob` for
 * objects, `fl`/`fi`/`fe`/`cfi`/`cfl` for files, `fn`/`cfn` for functions).
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

const notCallgrind = (reason: string): Error =>
  new Error(`Not a callgrind profile: ${reason}`)

/**
 * Resolves a possibly-compressed name against its {@link dictionary}: `(N)`
 * defines (when a name follows) or references an ID; anything else is a
 * literal name.
 */
const resolveName = (dictionary: Map<number, string>, rest: string): string => {
  if (!rest.startsWith(`(`)) {
    return rest
  }
  const close = rest.indexOf(`)`)
  const idText = close === -1 ? `` : rest.slice(1, close)
  if (!COMPRESSED_NAME_ID.test(idText)) {
    // Not a compression reference, just a literal name starting with `(`
    // (e.g. Valgrind's `(below main)`).
    return rest
  }

  const id = Number(idText)
  if (close < rest.length - 1) {
    const name = rest.slice(close + 2)
    dictionary.set(id, name)
    return name
  }

  const known = dictionary.get(id)
  if (known === undefined) {
    throw notCallgrind(`name (${id}) referenced before definition`)
  }
  return known
}

class CallgrindProfileBuilder {
  /** Global event names, in first-seen order across parts. */
  readonly #eventNames: string[] = []
  readonly #eventIndices = new Map<string, number>()

  /** Long event names from `event:` description lines, keyed by abbreviation. */
  readonly #eventLongNames = new Map<string, string>()

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

  // The three name-compression dictionaries.
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
  // following a `calls=` line, which carries the call's inclusive cost.
  #callObject: string | undefined
  #callFile: string | undefined
  #callName: string | undefined
  #pendingCall = false

  readonly #functions = new Map<string, CallgrindFunction>()

  public addLine(line: string): void {
    if (line.length === 0 || line.startsWith(`#`)) {
      return
    }

    // A spec key is at most 5 characters (`calls`), so an `=` any further in
    // can't make the line a spec.
    const equals = line.indexOf(`=`)
    if (equals > 0 && equals <= 5 && SPEC_KEYS.has(line.slice(0, equals))) {
      this.#addSpec(line.slice(0, equals), line.slice(equals + 1))
      return
    }

    const colon = line.indexOf(`:`)
    if (colon > 0 && HEADER_KEY.test(line.slice(0, colon))) {
      this.#addHeader(line.slice(0, colon), line.slice(colon + 1).trim())
      return
    }

    // A cost line starts with a subposition: a number (decimal or `0x` hex) or
    // a relative `+n`/`-n`/`*`.
    // The line is non-empty (checked above), so a first code point exists.
    const first = line.codePointAt(0)!
    if (
      (first >= CHAR_0 && first <= CHAR_9) ||
      first === CHAR_PLUS ||
      first === CHAR_MINUS ||
      first === CHAR_STAR
    ) {
      this.#addCostLine(line)
      return
    }

    throw notCallgrind(`unrecognized line ${JSON.stringify(line)}`)
  }

  #addHeader(key: string, rest: string): void {
    switch (key) {
      case `events`: {
        const names = rest.split(/\s+/u).filter(name => name.length > 0)
        if (names.length === 0) {
          throw notCallgrind(`empty events header`)
        }
        this.#partEventIndices = names.map(name => {
          let index = this.#eventIndices.get(name)
          if (index === undefined) {
            index = this.#eventNames.length
            this.#eventIndices.set(name, index)
            this.#eventNames.push(name)
          }
          return index
        })
        break
      }

      case `event`: {
        // `event: <abbrev> [= formula] [: long name]`. Derived (formula)
        // events never appear on cost lines; only the long name matters, as a
        // nicer metric name.
        const colon = rest.indexOf(`:`)
        if (colon === -1) {
          break
        }
        const abbreviation = /^\w+/u.exec(rest)?.[0]
        const longName = rest.slice(colon + 1).trim()
        if (abbreviation && longName.length > 0) {
          this.#eventLongNames.set(abbreviation, longName)
        }
        break
      }

      case `positions`: {
        const columns = rest.split(/\s+/u).filter(name => name.length > 0)
        if (
          columns.length === 0 ||
          columns.some(column => column !== `instr` && column !== `line`)
        ) {
          throw notCallgrind(`invalid positions header ${JSON.stringify(rest)}`)
        }
        this.#subpositionCount = columns.length
        this.#lineSubpositionIndex = columns.indexOf(`line`)
        this.#lastSubpositions = []
        break
      }

      case `part`:
        // A new dump part restarts the position context (the name-compression
        // dictionaries persist across parts of one file).
        this.#object = ``
        this.#file = ``
        this.#costFile = ``
        this.#function = undefined
        this.#clearPendingCall()
        this.#lastSubpositions = []
        break

      // Metadata (`version:`, `creator:`, `cmd:`, `summary:`, `totals:`, ...)
      // and unknown keys: the header allows arbitrary `key: value` lines.
      default:
        break
    }
  }

  #addSpec(key: string, rest: string): void {
    switch (key) {
      case `ob`:
        this.#object = resolveName(this.#objectNames, rest)
        break
      case `fl`:
        this.#file = resolveName(this.#fileNames, rest)
        this.#costFile = this.#file
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
      case `calls`:
        // `calls=count target-subpositions`. The following cost line carries
        // the call's inclusive cost; the count and target position aren't
        // needed for aggregation.
        if (this.#callName === undefined) {
          throw notCallgrind(`calls= without a preceding cfn=`)
        }
        this.#pendingCall = true
        break
      // Jump specs (`jump=`/`jcnd=`) carry control-flow counts, not costs.
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
        calleeToValues: new Map(),
      }
      this.#functions.set(key, func)
    }
    return func
  }

  #addCostLine(line: string): void {
    const eventIndices = this.#partEventIndices
    if (!eventIndices) {
      throw notCallgrind(`cost line before events header`)
    }
    const func = this.#function
    if (!func) {
      throw notCallgrind(`cost line before fn=`)
    }

    const tokens = line.split(/\s+/u)
    if (tokens.length < this.#subpositionCount) {
      throw notCallgrind(`cost line with missing subpositions`)
    }

    let costLine: number | undefined
    for (let column = 0; column < this.#subpositionCount; column++) {
      const subposition = this.#parseSubposition(tokens[column]!, column)
      if (column === this.#lineSubpositionIndex) {
        costLine = subposition
      }
    }

    if (tokens.length > this.#subpositionCount + eventIndices.length) {
      throw notCallgrind(`cost line with more values than events`)
    }
    const values: number[] = []
    for (let i = this.#subpositionCount; i < tokens.length; i++) {
      // A cost line may omit trailing values, which default to zero.
      values[eventIndices[i - this.#subpositionCount]!] = parseCost(tokens[i]!)
    }

    if (this.#pendingCall) {
      // The call's inclusive cost accumulates on the caller→callee arc. A call
      // without `cob=`/`cfi=` targets the current object/*cost* file: Valgrind
      // omits `cfi=` when the callee's file matches the last written file
      // context, which an `fi=` inlining switch is part of.
      const callee = this.#getOrCreateFunction(
        this.#callObject ?? this.#object,
        this.#callFile ?? this.#costFile,
        this.#callName!,
      )
      // Callgrind folds recursion into a function's own costs, so a direct
      // self-call arc's inclusive cost is already counted in them; keeping it
      // would double count and misclassify the function as never a root.
      if (callee !== func) {
        addValues(mapValues(func.calleeToValues, callee), values)
      }
      this.#clearPendingCall()
      return
    }

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

  #clearPendingCall(): void {
    this.#pendingCall = false
    this.#callObject = undefined
    this.#callFile = undefined
    this.#callName = undefined
  }

  public build(): Profile[] {
    if (this.#eventNames.length === 0) {
      throw notCallgrind(`missing events header`)
    }

    const functions = [...this.#functions.values()]
    const samples = reconstructSamples(functions, this.#eventNames.length)

    // A sampling profiler exporting callgrind (e.g. rbspy) counts samples as
    // its only event. That's a sample count, not a metric: fold it into each
    // sample's count so the profile is ranked by sample count alone, like the
    // collapsed format, instead of a nonsensical "samples per sample" metric.
    if (
      this.#eventNames.length === 1 &&
      this.#eventNames[0]!.toLowerCase() === `samples`
    ) {
      return [
        {
          frames: functions.map(func => callgrindFrame(func)),
          metrics: [],
          samples: sampleCountsOf(samples),
        },
      ]
    }

    return [
      {
        frames: functions.map(func => callgrindFrame(func)),
        metrics: this.#eventNames.map(name =>
          callgrindEventMetric(name, this.#eventLongNames.get(name)),
        ),
        samples,
      },
    ]
  }
}

function* sampleCountsOf(samples: Iterable<Sample>): Generator<Sample> {
  for (const sample of samples) {
    yield {
      values: [],
      frameIndices: sample.frameIndices,
      line: sample.line,
      sampleCount: sample.values[0],
    }
  }
}

const CHAR_0 = 48
const CHAR_9 = 57
const CHAR_PLUS = 43
const CHAR_MINUS = 45
const CHAR_STAR = 42

/** Parses a decimal or `0x`-prefixed hexadecimal unsigned integer. */
const parseCost = (token: string): number => {
  const value = token.startsWith(`0x`)
    ? Number.parseInt(token, 16)
    : Number(token)
  if (Number.isNaN(value) || value < 0) {
    throw notCallgrind(`invalid number ${JSON.stringify(token)}`)
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

const callgrindFrame = (func: CallgrindFunction) => ({
  // Callgrind writes `???` for an unknown function name; dropping it renders
  // the frame as `(anonymous)` instead of literal question marks. A
  // recursion-separated instance (`--separate-recs`'s `fn'2`) stays a distinct
  // call-graph node — its arcs partition the recursion levels — but sheds the
  // suffix here so the aggregator folds the levels into one function.
  name:
    func.name === UNKNOWN ? undefined : func.name.replace(RECURSION_SUFFIX, ``),
  // A function compiled without debug info has no source file; its ELF object
  // (e.g. `/usr/lib/libc.so.6`) is the next best location and lets system
  // libraries categorize by path.
  location: locationOf(func.file) ?? locationOf(func.object),
})

/** Callgrind's recursion-separation suffix, e.g. `_dl_start'2`. */
const RECURSION_SUFFIX = /'\d+$/u

const locationOf = (file: string): { urlOrPath: string } | undefined =>
  file === `` || file === UNKNOWN ? undefined : { urlOrPath: file }

const UNKNOWN = `???`

/**
 * Maps a callgrind event to a metric. All events are plain counters; the
 * well-known cache-simulation and branch-prediction abbreviations get readable
 * names, others fall back to the file's `event:` long name or the abbreviation
 * itself.
 */
const callgrindEventMetric = (
  name: string,
  longName: string | undefined,
): Metric => {
  const displayName = KNOWN_EVENTS.get(name) ?? longName ?? name
  return determineMetric({ name: displayName, unit: displayName })
}

/**
 * The standard cachegrind/callgrind event abbreviations, named (in the plural,
 * per custom-metric convention) per the Valgrind manual.
 */
const KNOWN_EVENTS: ReadonlyMap<string, string> = new Map([
  [`Ir`, `instructions`],
  [`Dr`, `data reads`],
  [`Dw`, `data writes`],
  [`I1mr`, `I1 cache read misses`],
  [`D1mr`, `D1 cache read misses`],
  [`D1mw`, `D1 cache write misses`],
  [`ILmr`, `LL instruction read misses`],
  [`DLmr`, `LL data read misses`],
  [`DLmw`, `LL data write misses`],
  [`I2mr`, `L2 instruction read misses`],
  [`D2mr`, `L2 data read misses`],
  [`D2mw`, `L2 data write misses`],
  [`Bc`, `conditional branches`],
  [`Bcm`, `conditional branch mispredictions`],
  [`Bi`, `indirect branches`],
  [`Bim`, `indirect branch mispredictions`],
  [`Ge`, `global bus events`],
  [`sysCount`, `system calls`],
  // Sampling profilers exporting callgrind (e.g. rbspy) count samples.
  [`Samples`, `samples`],
])

/**
 * Reconstructs call-stack samples from the parsed call graph.
 *
 * A callgrind file records a weighted call *graph* — per-function self costs
 * plus per-arc call inclusive costs — not call stacks, and a weighted call
 * graph doesn't uniquely determine one. Samples are synthesized by walking the
 * graph top-down from the roots, assuming every invocation of a function
 * distributes its cost among its self cost and callees in the same proportions
 * (the standard callgrind-to-flamegraph heuristic, e.g. speedscope's): a
 * context's inclusive cost splits into its callee arcs and recorded self cost,
 * all scaled by the context's share, with self emitted as leaf samples spread
 * over the recorded per-line costs.
 *
 * Two structural artifacts of real files shape the walk:
 *
 * - **Cycles.** Recursion (beyond what callgrind's recursion separation
 *   already partitions) and artifacts like lazy-PLT trampolines produce
 *   cycles whose intra-cycle arc costs are meaningless — they re-count the
 *   same work each time around the loop, inflating far past the whole
 *   program's total. Like KCachegrind, each strongly-connected component
 *   collapses into one node: costs distribute over the resulting DAG (which
 *   also guarantees termination), intra-cycle arcs are discarded, and within
 *   a collapsed cycle each member keeps its own recorded self cost and
 *   arc-level attribution for arcs leaving the cycle.
 * - **Roots.** A root isn't just a function no call targets: each node acts
 *   as a root for its *surplus*, the part of its local total its inbound arcs
 *   don't cover. That's the whole total for a true entry point, zero for an
 *   ordinary callee, and crucially a thread's whole subtree for a thread
 *   entry point like `clone`, whose spawn arc carries only the spawn cost
 *   (Valgrind doesn't attribute a thread's cost to the spawning call).
 *
 * Distributing self proportionally anchors every function's emitted self cost
 * to its recorded value, and summed surpluses equal the file's summed self
 * costs whenever no node's inbound arcs exceed its local total — so
 * per-function self values and whole-profile totals are exact on
 * conservation-consistent files, and only the stack contexts are estimates.
 * A context whose cost falls below {@link PRUNE_FRACTION} of the profile (or
 * past {@link MAX_STACK_DEPTH}) is truncated: its whole subtree cost is
 * emitted as one leaf sample, conserving every ancestor's total while
 * bounding the walk on dense graphs whose distinct paths would otherwise
 * explode combinatorially.
 */
function* reconstructSamples(
  functions: CallgrindFunction[],
  eventCount: number,
): Generator<Sample> {
  const zeros = () => Array.from({ length: eventCount }, () => 0)

  const componentIndices = stronglyConnectedComponents(functions)
  const componentCount =
    componentIndices.length === 0 ? 0 : Math.max(...componentIndices) + 1

  /** An arc leaving a component, keeping which member function made it. */
  type ComponentArc = {
    caller: CallgrindFunction
    callee: number
    values: number[]
  }

  type Component = {
    members: CallgrindFunction[]
    arcs: ComponentArc[]
    /** Members' summed self plus outgoing arcs: the distribution denominator. */
    localTotal: number[]
    /** The local total minus inbound arcs: this component's cost as a root. */
    surplus: number[]
  }

  const components: Component[] = Array.from(
    { length: componentCount },
    () => ({ members: [], arcs: [], localTotal: zeros(), surplus: zeros() }),
  )
  for (const func of functions) {
    const component = components[componentIndices[func.index]!]!
    component.members.push(func)
    addValues(component.localTotal, func.selfValues)
    for (const [callee, values] of func.calleeToValues) {
      // Intra-component (cycle) arcs re-count the same work each time around
      // the loop; discard them and let members' recorded selves speak.
      if (componentIndices[callee.index] === componentIndices[func.index]) {
        continue
      }
      component.arcs.push({
        caller: func,
        callee: componentIndices[callee.index]!,
        values: [...values],
      })
      addValues(component.localTotal, values)
    }
  }
  for (const component of components) {
    for (let i = 0; i < eventCount; i++) {
      component.surplus[i] = component.localTotal[i]!
    }
  }
  for (const component of components) {
    for (const arc of component.arcs) {
      const { surplus } = components[arc.callee]!
      for (let i = 0; i < eventCount; i++) {
        surplus[i] = Math.max(0, surplus[i]! - (arc.values[i] ?? 0))
      }
    }
  }

  // Per event, the whole-profile total, whose PRUNE_FRACTION is that event's
  // significance threshold. A context is expanded only while some event stays
  // significant.
  const thresholds = zeros()
  for (const component of components) {
    addValues(thresholds, component.surplus)
  }
  for (let i = 0; i < thresholds.length; i++) {
    thresholds[i]! *= PRUNE_FRACTION
  }

  /**
   * Emits one component context: members' scaled selves as leaf samples (per
   * recorded line, plus a line-less sample for self recorded without line
   * information) and a recursive visit per outgoing arc, with the arc's owning
   * member as the direct caller frame.
   */
  function* visit(
    component: Component,
    inclusive: number[],
    stack: number[],
  ): Generator<Sample> {
    const local = component.localTotal
    const scale = inclusive.map((value, i) =>
      local[i]! > 0 ? value / local[i]! : 0,
    )

    // Inbound cost with no recorded local cost to distribute over (e.g. an
    // arc to a function that never got its own cost lines) has nowhere to go
    // proportionally; keep it as the component's self so it isn't lost.
    const residual = zeros()
    let residualPositive = false
    for (let i = 0; i < eventCount; i++) {
      if (local[i]! <= 0 && inclusive[i]! > 0) {
        residual[i] = inclusive[i]!
        residualPositive = true
      }
    }
    if (residualPositive) {
      yield {
        values: residual,
        frameIndices: [dominantMember(component).index, ...stack],
      }
    }

    for (const member of component.members) {
      yield* memberSelfSamples(member, scale, stack)
    }

    for (const arc of component.arcs) {
      const portion = zeros()
      let significant = false
      let positive = false
      for (let i = 0; i < eventCount; i++) {
        const value = (arc.values[i] ?? 0) * scale[i]!
        portion[i] = value
        if (value > 0) {
          positive = true
          if (value >= thresholds[i]!) {
            significant = true
          }
        }
      }
      if (!positive) {
        continue
      }

      const callee = components[arc.callee]!
      const callerStack = [arc.caller.index, ...stack]
      if (significant && callerStack.length < MAX_STACK_DEPTH) {
        yield* visit(callee, portion, callerStack)
      } else {
        // Truncate: attribute the whole subtree's cost to the callee (its
        // dominant member) as a leaf, conserving every ancestor's total.
        yield {
          values: portion,
          frameIndices: [dominantMember(callee).index, ...callerStack],
        }
      }
    }
  }

  function* memberSelfSamples(
    member: CallgrindFunction,
    scale: number[],
    stack: number[],
  ): Generator<Sample> {
    const frameIndices = [member.index, ...stack]
    const linelessSelf = [...member.selfValues]
    for (const [line, lineValues] of member.lineToValues) {
      const values = zeros()
      let positive = false
      for (let i = 0; i < eventCount; i++) {
        linelessSelf[i] = Math.max(
          0,
          (linelessSelf[i] ?? 0) - (lineValues[i] ?? 0),
        )
        const value = (lineValues[i] ?? 0) * scale[i]!
        if (value > 0) {
          positive = true
          values[i] = value
        }
      }
      if (positive) {
        yield { values, frameIndices, line }
      }
    }

    // Self recorded without line information (or under an `fi=` inlining
    // switch, whose lines belong to another file).
    const values = zeros()
    let positive = false
    for (let i = 0; i < eventCount; i++) {
      const value = (linelessSelf[i] ?? 0) * scale[i]!
      if (value > 0) {
        positive = true
        values[i] = value
      }
    }
    if (positive) {
      yield { values, frameIndices: [member.index, ...stack] }
    }
  }

  for (const component of components) {
    if (component.surplus.some(value => value > 0)) {
      yield* visit(component, component.surplus, [])
    }
  }
}

/** The member with the largest primary-event self cost (ties: first). */
const dominantMember = (component: {
  members: CallgrindFunction[]
}): CallgrindFunction => {
  let best = component.members[0]!
  for (const member of component.members) {
    if ((member.selfValues[0] ?? 0) > (best.selfValues[0] ?? 0)) {
      best = member
    }
  }
  return best
}

/**
 * Assigns each function its strongly-connected component index via iterative
 * Tarjan, in reverse-topological order (a callee's component index is always
 * less than its caller's when they differ).
 */
const stronglyConnectedComponents = (
  functions: CallgrindFunction[],
): number[] => {
  const indices = Array.from({ length: functions.length }, () => -1)
  const lowLinks = Array.from({ length: functions.length }, () => -1)
  const componentIndices = Array.from({ length: functions.length }, () => -1)
  const onStack = Array.from({ length: functions.length }, () => false)
  const stack: number[] = []
  let nextIndex = 0
  let nextComponent = 0

  for (const start of functions) {
    if (indices[start.index] !== -1) {
      continue
    }

    // Each frame is a function plus its outgoing-arc iterator, so the
    // traversal resumes mid-edge-list after returning from a callee.
    const frames = [
      { func: start, arcs: start.calleeToValues.keys()[Symbol.iterator]() },
    ]
    indices[start.index] = nextIndex
    lowLinks[start.index] = nextIndex
    nextIndex++
    stack.push(start.index)
    onStack[start.index] = true

    while (frames.length > 0) {
      const frame = frames.at(-1)!
      const next = frame.arcs.next()

      if (!next.done) {
        const callee = next.value
        if (indices[callee.index] === -1) {
          indices[callee.index] = nextIndex
          lowLinks[callee.index] = nextIndex
          nextIndex++
          stack.push(callee.index)
          onStack[callee.index] = true
          frames.push({
            func: callee,
            arcs: callee.calleeToValues.keys()[Symbol.iterator](),
          })
        } else if (onStack[callee.index]) {
          lowLinks[frame.func.index] = Math.min(
            lowLinks[frame.func.index]!,
            indices[callee.index]!,
          )
        }
        continue
      }

      frames.pop()
      const funcIndex = frame.func.index
      if (lowLinks[funcIndex] === indices[funcIndex]) {
        while (true) {
          const member = stack.pop()!
          onStack[member] = false
          componentIndices[member] = nextComponent
          if (member === funcIndex) {
            break
          }
        }
        nextComponent++
      }
      const parent = frames.at(-1)
      if (parent) {
        lowLinks[parent.func.index] = Math.min(
          lowLinks[parent.func.index]!,
          lowLinks[funcIndex]!,
        )
      }
    }
  }

  return componentIndices
}

/**
 * The fraction of an event's whole-profile total below which a context stops
 * being expanded (0.01%, matching speedscope's callgrind importer).
 */
const PRUNE_FRACTION = 1e-4

/**
 * The depth at which reconstruction stops expanding contexts. Real call
 * stacks rarely approach it, and it bounds recursion on pathological graphs.
 */
const MAX_STACK_DEPTH = 128
