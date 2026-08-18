import { ByteBuffer } from '../../helpers/testing.ts'

/** Basic types a field or array element can have. */
export const HPROF_OBJECT = 2
const HPROF_BOOLEAN = 4
const HPROF_CHAR = 5
const HPROF_FLOAT = 6
const HPROF_DOUBLE = 7
export const HPROF_BYTE = 8
const HPROF_SHORT = 9
export const HPROF_INT = 10
const HPROF_LONG = 11

/** Root sub-record tags. */
export const HPROF_ROOT_JNI_GLOBAL = 0x01
export const HPROF_ROOT_JAVA_FRAME = 0x03
export const HPROF_ROOT_STICKY_CLASS = 0x05
const HPROF_ROOT_THREAD_OBJECT = 0x08

/** A class, written as both a load-class record and a class dump. */
type HprofClass = {
  id: number
  name: string
  superId?: number
  loaderId?: number

  /** Static fields holding an object reference, by field name. */
  staticFields?: Record<string, number>

  /** Instance fields this class declares, in declaration order. */
  fields?: { name: string; type: number }[]
}

/**
 * An instance, whose field values are written in its superclass chain's order.
 */
type HprofInstance = {
  id: number
  classId: number

  /** Field values by field name, defaulting to zero for a field left out. */
  fields?: Record<string, number>
}

type HprofObjectArray = {
  id: number
  classId: number
  elements: number[]
}

type HprofPrimitiveArray = {
  id: number
  type: number
  length: number
}

type HprofRoot = { id: number; tag: number }

/** The records a written dump holds. */
export type HprofDump = {
  header?: string
  idSize?: number
  segmented?: boolean
  classes?: HprofClass[]
  instances?: HprofInstance[]
  objectArrays?: HprofObjectArray[]
  primitiveArrays?: HprofPrimitiveArray[]
  roots?: HprofRoot[]
}

export const makeHprof = ({
  header = `JAVA PROFILE 1.0.2`,
  idSize = 8,
  segmented = true,
  classes = [],
  instances = [],
  objectArrays = [],
  primitiveArrays = [],
  roots = [],
}: HprofDump = {}): Uint8Array => {
  const writer = new ByteWriter(idSize)
  const strings = new StringTable()

  writer.utf8(header)
  writer.u1(0)
  writer.u4(idSize)
  writer.u4(0)
  writer.u4(0)

  // Assigned before anything is written so the string records precede the ones
  // referencing them, as a dump's do.
  for (const dumpedClass of classes) {
    strings.idOf(dumpedClass.name)
    for (const name of Object.keys(dumpedClass.staticFields ?? {})) {
      strings.idOf(name)
    }
    for (const field of dumpedClass.fields ?? []) {
      strings.idOf(field.name)
    }
  }
  for (const [name, id] of strings.entries()) {
    writer.record(HPROF_UTF8, body => {
      body.id(id)
      body.utf8(name)
    })
  }
  for (const [index, dumpedClass] of classes.entries()) {
    writer.record(HPROF_LOAD_CLASS, body => {
      body.u4(index + 1)
      body.id(dumpedClass.id)
      body.u4(0)
      body.id(strings.idOf(dumpedClass.name))
    })
  }

  const classById = new Map(
    classes.map(dumpedClass => [dumpedClass.id, dumpedClass]),
  )
  const fieldsOf = (classId: number): { name: string; type: number }[] => {
    const dumpedClass = classById.get(classId)
    if (!dumpedClass) {
      return []
    }
    return [
      ...(dumpedClass.fields ?? []),
      ...(dumpedClass.superId === undefined
        ? []
        : fieldsOf(dumpedClass.superId)),
    ]
  }

  const heap = new ByteWriter(idSize)
  for (const dumpedClass of classes) {
    heap.u1(HPROF_CLASS_DUMP)
    heap.id(dumpedClass.id)
    heap.u4(0)
    heap.id(dumpedClass.superId ?? 0)
    heap.id(dumpedClass.loaderId ?? 0)
    heap.id(0)
    heap.id(0)
    heap.id(0)
    heap.id(0)
    heap.u4(
      (dumpedClass.fields ?? []).reduce(
        (size, field) => size + typeSize(field.type, idSize),
        0,
      ),
    )
    heap.u2(0)
    const staticFields = Object.entries(dumpedClass.staticFields ?? {})
    heap.u2(staticFields.length)
    for (const [name, value] of staticFields) {
      heap.id(strings.idOf(name))
      heap.u1(HPROF_OBJECT)
      heap.id(value)
    }
    const fields = dumpedClass.fields ?? []
    heap.u2(fields.length)
    for (const field of fields) {
      heap.id(strings.idOf(field.name))
      heap.u1(field.type)
    }
  }

  for (const instance of instances) {
    const fields = fieldsOf(instance.classId)
    heap.u1(HPROF_INSTANCE_DUMP)
    heap.id(instance.id)
    heap.u4(0)
    heap.id(instance.classId)
    heap.u4(
      fields.reduce((size, field) => size + typeSize(field.type, idSize), 0),
    )
    for (const field of fields) {
      heap.value(field.type, instance.fields?.[field.name] ?? 0)
    }
  }

  for (const array of objectArrays) {
    heap.u1(HPROF_OBJECT_ARRAY_DUMP)
    heap.id(array.id)
    heap.u4(0)
    heap.u4(array.elements.length)
    heap.id(array.classId)
    for (const element of array.elements) {
      heap.id(element)
    }
  }

  for (const array of primitiveArrays) {
    heap.u1(HPROF_PRIMITIVE_ARRAY_DUMP)
    heap.id(array.id)
    heap.u4(0)
    heap.u4(array.length)
    heap.u1(array.type)
    // The elements themselves are never read, only their bytes counted.
    heap.raw(new Uint8Array(array.length * typeSize(array.type, idSize)))
  }

  for (const root of roots) {
    heap.u1(root.tag)
    heap.id(root.id)
    switch (root.tag) {
      case HPROF_ROOT_JNI_GLOBAL:
        heap.id(0)
        break
      case HPROF_ROOT_JAVA_FRAME:
      case HPROF_ROOT_THREAD_OBJECT:
        heap.u4(0)
        heap.u4(0)
        break
      default:
        break
    }
  }

  writer.record(segmented ? HPROF_HEAP_DUMP_SEGMENT : HPROF_HEAP_DUMP, body =>
    body.raw(heap.bytes),
  )
  if (segmented) {
    writer.record(HPROF_HEAP_DUMP_END, () => {})
  }

  return writer.bytes
}

const HPROF_UTF8 = 0x01
const HPROF_LOAD_CLASS = 0x02
const HPROF_HEAP_DUMP = 0x0c
const HPROF_HEAP_DUMP_SEGMENT = 0x1c
const HPROF_HEAP_DUMP_END = 0x2c

const HPROF_CLASS_DUMP = 0x20
const HPROF_INSTANCE_DUMP = 0x21
const HPROF_OBJECT_ARRAY_DUMP = 0x22
const HPROF_PRIMITIVE_ARRAY_DUMP = 0x23

const typeSize = (type: number, idSize: number): number =>
  type === HPROF_OBJECT ? idSize : (TYPE_SIZES.get(type) ?? 0)

const TYPE_SIZES: ReadonlyMap<number, number> = new Map([
  [HPROF_BOOLEAN, 1],
  [HPROF_CHAR, 2],
  [HPROF_FLOAT, 4],
  [HPROF_DOUBLE, 8],
  [HPROF_BYTE, 1],
  [HPROF_SHORT, 2],
  [HPROF_INT, 4],
  [HPROF_LONG, 8],
])

/** Assigns each distinct name a string ID, in first-use order. */
class StringTable {
  readonly #idsByName = new Map<string, number>()

  public idOf(name: string): number {
    let id = this.#idsByName.get(name)
    if (id === undefined) {
      id = STRING_ID_BASE + this.#idsByName.size
      this.#idsByName.set(name, id)
    }
    return id
  }

  public entries(): Iterable<[string, number]> {
    return this.#idsByName
  }
}

/** Where string IDs start, clear of the object IDs a test writes. */
const STRING_ID_BASE = 1

/** Writes a dump's big-endian records. */
class ByteWriter {
  readonly #idSize: number
  readonly #buffer = new ByteBuffer()

  public constructor(idSize: number) {
    this.#idSize = idSize
  }

  public get bytes(): Uint8Array {
    return this.#buffer.toBytes()
  }

  public u1(value: number): void {
    this.#buffer.byte(value)
  }

  public u2(value: number): void {
    this.u1(value >>> 8)
    this.u1(value & 0xff)
  }

  public u4(value: number): void {
    this.u2((value >>> 16) & 0xffff)
    this.u2(value & 0xffff)
  }

  public u8(value: number): void {
    this.u4(Math.floor(value / 0x1_00_00_00_00))
    this.u4(value >>> 0)
  }

  public id(value: number): void {
    if (this.#idSize === 8) {
      this.u8(value)
    } else {
      this.u4(value)
    }
  }

  /** Writes a value at the width of its basic type. */
  public value(type: number, value: number): void {
    switch (typeSize(type, this.#idSize)) {
      case 1:
        this.u1(value)
        break
      case 2:
        this.u2(value)
        break
      case 4:
        this.u4(value)
        break
      default:
        this.u8(value)
        break
    }
  }

  public utf8(value: string): void {
    this.raw(new TextEncoder().encode(value))
  }

  public raw(bytes: Uint8Array): void {
    this.#buffer.bytes(bytes)
  }

  /** Writes a top-level record, measuring its body's length for its header. */
  public record(tag: number, writeBody: (body: ByteWriter) => void): void {
    const body = new ByteWriter(this.#idSize)
    writeBody(body)
    this.u1(tag)
    this.u4(0)
    this.u4(body.bytes.length)
    this.raw(body.bytes)
  }
}
