/**
 * A minimal Java Flight Recorder writer for deterministic unit tests.
 *
 * It emits a single uncompressed chunk with just the types, constant pools, and
 * events that {@link parseJfr} reads, which is enough to exercise the parser and
 * aggregator without depending on the binary fixture.
 */

/** A method to place in the constant pools, referenced by index. */
export type JfrTestMethod = {
  name: string
  className: string

  /** The JVM method descriptor, e.g. `(Ljava/lang/Object;)Z`. */
  descriptor?: string
}

/** A frame referencing a {@link JfrTestMethod} by index. */
export type JfrTestFrame = { method: number; line?: number }

/** A call stack referenced by events by index. */
export type JfrTestStack = { frames: JfrTestFrame[] }

/** An event referencing a {@link JfrTestStack} by index. */
export type JfrTestEvent = {
  /**
   * The event type:
   * - `cpu`: `jdk.ExecutionSample`
   * - `wallclock`: async-profiler `profiler.WallClockSample` (coalesced)
   * - `alloc`: `jdk.ObjectAllocationSample` (the modern sampled event)
   * - `alloc-tlab`: `jdk.ObjectAllocationInNewTLAB` (legacy TLAB event)
   * - `lock`: `jdk.JavaMonitorEnter`
   * - `nativelock`: async-profiler `profiler.NativeLock`
   */
  type: `cpu` | `wallclock` | `alloc` | `alloc-tlab` | `lock` | `nativelock`
  stack: number

  /** Allocated bytes (alloc) or blocked nanoseconds (lock); ignored for cpu. */
  weight?: number

  /** How many samples a `wallclock` event coalesces; defaults to `1`. */
  samples?: number
}

// Metadata class IDs. Avoid 0 and 1, which are reserved for the metadata and
// constant pool events in the chunk body.
const LONG = 2
const INT = 3
const BOOLEAN = 4
const STRING = 5
const SYMBOL = 6
const METHOD = 7
const CLASS = 8
const STACK_FRAME = 9
const STACK_TRACE = 10
const EXECUTION_SAMPLE = 20
const OBJECT_ALLOCATION_SAMPLE = 21
const JAVA_MONITOR_ENTER = 22
const WALL_CLOCK_SAMPLE = 23
const OBJECT_ALLOCATION_IN_NEW_TLAB = 24
const NATIVE_LOCK = 25

/** A class id used for a field whose type the metadata never declares. */
const UNKNOWN_FIELD_CLASS = 901

/**
 * Structural defects for parser-robustness tests, all expressed as undeclared
 * type references the parser must recover from. Each option is a list, so a
 * recording can carry several at once.
 */
export type JfrMalformations = {
  /**
   * Constant pool type ids the metadata never declares, each emitted as an
   * empty pool before the known pools. Exercises the parser skipping an unknown
   * pool and still reading the pools after it.
   */
  emptyUnknownPools?: number[]

  /**
   * JFR type names whose declaration gains a trailing field of an undeclared
   * type, making their events unreadable. Exercises the parser abandoning such
   * an event without corrupting the events that follow.
   */
  unreadableEventTypes?: string[]
}

/** Builds a single-chunk JFR recording from synthetic methods, stacks, events. */
export const makeJfr = ({
  methods,
  stackTraces,
  events,
  malformations: { emptyUnknownPools = [], unreadableEventTypes = [] } = {},
}: {
  methods: JfrTestMethod[]
  stackTraces: JfrTestStack[]
  events: JfrTestEvent[]

  /** Optional structural defects for parser-robustness tests. */
  malformations?: JfrMalformations
}): Uint8Array => {
  // Intern symbols and classes into 1-based constant pool keys.
  const symbolKeys = new Map<string, number>()
  const symbolKey = (string: string): number => {
    let key = symbolKeys.get(string)
    if (key === undefined) {
      key = symbolKeys.size + 1
      symbolKeys.set(string, key)
    }
    return key
  }

  const classKeys = new Map<string, number>()
  const classKey = (className: string): number => {
    let key = classKeys.get(className)
    if (key === undefined) {
      key = classKeys.size + 1
      classKeys.set(className, key)
    }
    return key
  }

  const methodEntries = methods.map((method, index) => ({
    key: index + 1,
    classKey: classKey(method.className),
    nameKey: symbolKey(method.name),
    descriptorKey: symbolKey(method.descriptor ?? ``),
  }))

  // Class names are referenced as symbols, so intern them before the symbol
  // pool is emitted below.
  for (const className of classKeys.keys()) {
    symbolKey(className)
  }

  // Constant pool event.
  const pool = new ByteWriter()
  pool.varint(0) // Start time
  pool.varint(0) // Duration
  pool.varint(0) // Delta
  pool.byte(0) // Flush flags
  pool.varint(4 + emptyUnknownPools.length) // Pool count

  for (const typeId of emptyUnknownPools) {
    // An undeclared pool type with no entries. The parser can't size unknown
    // entries, but an empty one occupies no bytes, so the known pools below
    // must still be read.
    pool.varint(typeId)
    pool.varint(0)
  }

  pool.varint(SYMBOL)
  pool.varint(symbolKeys.size)
  for (const [string, key] of symbolKeys) {
    pool.varint(key)
    pool.string(string)
  }

  pool.varint(CLASS)
  pool.varint(classKeys.size)
  for (const [className, key] of classKeys) {
    pool.varint(key)
    pool.varint(symbolKey(className)) // Name symbol reference
  }

  pool.varint(METHOD)
  pool.varint(methodEntries.length)
  for (const { key, classKey, nameKey, descriptorKey } of methodEntries) {
    pool.varint(key)
    pool.varint(classKey)
    pool.varint(nameKey)
    pool.varint(descriptorKey)
  }

  pool.varint(STACK_TRACE)
  pool.varint(stackTraces.length)
  for (const [index, { frames }] of stackTraces.entries()) {
    pool.varint(index + 1)
    pool.varint(frames.length)
    for (const { method, line } of frames) {
      pool.varint(method + 1) // Method key
      // Line number, or -1 (as an unsigned 32-bit int) when unknown.
      pool.varint(line ?? 0xff_ff_ff_ff)
    }
  }

  // Events. Field order in each body must match the metadata declaration. A
  // trailing unreadable field (from `unreadableEventTypes`) carries no body
  // bytes: the parser throws on it before reading and skips to the event's end.
  const eventWriters: ByteWriter[] = []
  for (const { type, stack, weight, samples } of events) {
    const body = new ByteWriter()
    switch (type) {
      case `cpu`:
        body.varint(stack + 1)
        eventWriters.push(sizedEvent(EXECUTION_SAMPLE, body))
        break
      case `wallclock`:
        body.varint(stack + 1)
        body.varint(samples ?? 1)
        eventWriters.push(sizedEvent(WALL_CLOCK_SAMPLE, body))
        break
      case `alloc`:
        body.varint(stack + 1)
        body.varint(weight ?? 0)
        eventWriters.push(sizedEvent(OBJECT_ALLOCATION_SAMPLE, body))
        break
      case `alloc-tlab`:
        body.varint(stack + 1)
        body.varint(weight ?? 0)
        eventWriters.push(sizedEvent(OBJECT_ALLOCATION_IN_NEW_TLAB, body))
        break
      case `lock`:
        body.varint(weight ?? 0)
        body.varint(stack + 1)
        eventWriters.push(sizedEvent(JAVA_MONITOR_ENTER, body))
        break
      case `nativelock`:
        body.varint(weight ?? 0)
        body.varint(stack + 1)
        eventWriters.push(sizedEvent(NATIVE_LOCK, body))
        break
    }
  }

  const metadata = makeMetadata(unreadableEventTypes)
  const constantPool = sizedEvent(CONSTANT_POOL_EVENT, pool)

  const bodyParts = [
    metadata.toBytes(),
    constantPool.toBytes(),
    ...eventWriters.map(writer => writer.toBytes()),
  ]
  const bodyLength = bodyParts.reduce((sum, part) => sum + part.length, 0)

  const HEADER_SIZE = 68
  const chunkSize = HEADER_SIZE + bodyLength
  const bytes = new Uint8Array(chunkSize)
  const view = new DataView(bytes.buffer)
  bytes.set([0x46, 0x4c, 0x52, 0x00], 0) // FLR\0
  view.setUint16(4, 2) // Major
  view.setUint16(6, 0) // Minor
  view.setBigInt64(8, BigInt(chunkSize))
  view.setBigInt64(16, BigInt(HEADER_SIZE + metadata.toBytes().length)) // Constant pool offset
  view.setBigInt64(24, BigInt(HEADER_SIZE)) // Metadata offset
  view.setBigInt64(56, 1_000_000_000n) // Ticks per second

  let offset = HEADER_SIZE
  for (const part of bodyParts) {
    bytes.set(part, offset)
    offset += part.length
  }
  return bytes
}

const CONSTANT_POOL_EVENT = 1
const METADATA_EVENT = 0

/** Builds the metadata event declaring every type the parser reads. */
const makeMetadata = (unreadableEventTypes: string[]): ByteWriter => {
  const strings = new StringTable()

  type Attr = [string, string]
  type El = { name: string; attrs: Attr[]; children: El[] }

  const primitive = (id: number, name: string): El => ({
    name: `class`,
    attrs: [
      [`id`, String(id)],
      [`name`, name],
      [`simpleType`, `true`],
    ],
    children: [],
  })

  const field = (
    name: string,
    classId: number,
    options: { constantPool?: boolean; array?: boolean } = {},
  ): El => ({
    name: `field`,
    attrs: [
      [`name`, name],
      [`class`, String(classId)],
      ...(options.constantPool ? ([[`constantPool`, `true`]] as Attr[]) : []),
      ...(options.array ? ([[`dimension`, `1`]] as Attr[]) : []),
    ],
    children: [],
  })

  const type = (id: number, name: string, fields: El[]): El => ({
    name: `class`,
    attrs: [
      [`id`, String(id)],
      [`name`, name],
    ],
    // A field of an undeclared type the parser can't size, so it can't be
    // skipped; reading it throws and the whole event is abandoned.
    children: unreadableEventTypes.includes(name)
      ? [...fields, field(`bad`, UNKNOWN_FIELD_CLASS)]
      : fields,
  })

  const classes: El[] = [
    primitive(LONG, `long`),
    primitive(INT, `int`),
    primitive(BOOLEAN, `boolean`),
    primitive(STRING, `java.lang.String`),
    type(SYMBOL, `jdk.types.Symbol`, [field(`string`, STRING)]),
    type(METHOD, `jdk.types.Method`, [
      field(`type`, CLASS, { constantPool: true }),
      field(`name`, SYMBOL, { constantPool: true }),
      field(`descriptor`, SYMBOL, { constantPool: true }),
    ]),
    type(CLASS, `java.lang.Class`, [
      field(`name`, SYMBOL, { constantPool: true }),
    ]),
    type(STACK_FRAME, `jdk.types.StackFrame`, [
      field(`method`, METHOD, { constantPool: true }),
      field(`lineNumber`, INT),
    ]),
    type(STACK_TRACE, `jdk.types.StackTrace`, [
      field(`frames`, STACK_FRAME, { array: true }),
    ]),
    type(EXECUTION_SAMPLE, `jdk.ExecutionSample`, [
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
    ]),
    type(OBJECT_ALLOCATION_SAMPLE, `jdk.ObjectAllocationSample`, [
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
      field(`weight`, LONG),
    ]),
    type(JAVA_MONITOR_ENTER, `jdk.JavaMonitorEnter`, [
      field(`duration`, LONG),
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
    ]),
    type(WALL_CLOCK_SAMPLE, `profiler.WallClockSample`, [
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
      field(`samples`, INT),
    ]),
    type(OBJECT_ALLOCATION_IN_NEW_TLAB, `jdk.ObjectAllocationInNewTLAB`, [
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
      field(`allocationSize`, LONG),
    ]),
    type(NATIVE_LOCK, `profiler.NativeLock`, [
      field(`duration`, LONG),
      field(`stackTrace`, STACK_TRACE, { constantPool: true }),
    ]),
  ]

  const root: El = {
    name: `root`,
    attrs: [],
    children: [{ name: `metadata`, attrs: [], children: classes }],
  }

  // Intern all strings before emitting indices.
  const internElement = (element: El): void => {
    strings.intern(element.name)
    for (const [key, value] of element.attrs) {
      strings.intern(key)
      strings.intern(value)
    }
    for (const child of element.children) {
      internElement(child)
    }
  }
  internElement(root)

  const body = new ByteWriter()
  body.varint(0) // Start time
  body.varint(0) // Duration
  body.varint(0) // Metadata ID

  body.varint(strings.list.length)
  for (const string of strings.list) {
    body.string(string)
  }

  const writeElement = (element: El): void => {
    body.varint(strings.index(element.name))
    body.varint(element.attrs.length)
    for (const [key, value] of element.attrs) {
      body.varint(strings.index(key))
      body.varint(strings.index(value))
    }
    body.varint(element.children.length)
    for (const child of element.children) {
      writeElement(child)
    }
  }
  writeElement(root)

  return sizedEvent(METADATA_EVENT, body)
}

/** Wraps a body in `[size][typeId][body]` with `size` covering the whole event. */
const sizedEvent = (typeId: number, body: ByteWriter): ByteWriter => {
  const inner = new ByteWriter()
  inner.varint(typeId)
  inner.append(body.toBytes())
  const innerBytes = inner.toBytes()

  let size = innerBytes.length + 1
  while (varintLength(size) + innerBytes.length !== size) {
    size = varintLength(size) + innerBytes.length
  }

  const event = new ByteWriter()
  event.varint(size)
  event.append(innerBytes)
  return event
}

const varintLength = (value: number): number => {
  let length = 1
  while (value >= 0x80) {
    value = Math.floor(value / 128)
    length++
  }
  return length
}

class StringTable {
  public readonly list: string[] = []
  readonly #indices = new Map<string, number>()

  public intern(string: string): void {
    if (!this.#indices.has(string)) {
      this.#indices.set(string, this.list.length)
      this.list.push(string)
    }
  }

  public index(string: string): number {
    return this.#indices.get(string)!
  }
}

class ByteWriter {
  readonly #bytes: number[] = []

  public byte(value: number): void {
    this.#bytes.push(value & 0xff)
  }

  public varint(value: number): void {
    let remaining = value
    while (remaining >= 0x80) {
      this.#bytes.push((remaining & 0x7f) | 0x80)
      remaining = Math.floor(remaining / 128)
    }
    this.#bytes.push(remaining & 0x7f)
  }

  public string(value: string): void {
    const utf8 = new TextEncoder().encode(value)
    this.byte(3) // UTF-8 encoding
    this.varint(utf8.length)
    for (const byte of utf8) {
      this.#bytes.push(byte)
    }
  }

  public append(bytes: Uint8Array): void {
    for (const byte of bytes) {
      this.#bytes.push(byte)
    }
  }

  public toBytes(): Uint8Array {
    return Uint8Array.from(this.#bytes)
  }
}
