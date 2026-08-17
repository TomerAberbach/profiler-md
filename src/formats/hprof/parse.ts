import { DynamicTypedArray } from '../../helpers/array.ts'
import { streamToUint8Array } from '../../helpers/bytes.ts'
import { nodeAdjacencyGraphFromSuccessors } from '../../modalities/heap-snapshot/index.ts'
import type {
  HeapSnapshot,
  HeapSnapshotNode,
  UnresolvedHeapSnapshotNodeCategory,
} from '../../modalities/heap-snapshot/index.ts'
import {
  JVM_PRIMITIVE_DESCRIPTOR_NAMES,
  jvmSourceClassName,
} from '../../origins/jvm.ts'
import { FormatParseError } from '../error.ts'
import { ObjectIdToOrdinal } from './object-ids.ts'

/**
 * Parses an HPROF binary heap dump.
 *
 * @see https://github.com/JetBrains/jdk8u_jdk/blob/master/src/share/demo/jvmti/hprof/manual.html
 * @see https://github.com/openjdk/jdk/blob/master/src/hotspot/share/services/heapDumper.cpp
 */
export const parseHprof = (bytes: Uint8Array): HeapSnapshot[] => {
  const dump = readDump(bytes)
  const nodes = readNodes(dump)
  return [buildHeapSnapshot(dump, nodes)]
}

export const parseHprofAsync = async (
  stream: ReadableStream<Uint8Array>,
): Promise<HeapSnapshot[]> => parseHprof(await streamToUint8Array(stream))

/** The prefix of the format name every dump begins with, which the version follows. */
export const HPROF_MAGIC = new TextEncoder().encode(`JAVA PROFILE `)

/** The format name every dump begins with, at a version the parser reads. */
const HPROF_FORMAT_NAME = /^JAVA PROFILE 1\.0\.\d+$/u

/** Top-level record tags. */
const HPROF_UTF8 = 0x01
const HPROF_LOAD_CLASS = 0x02
const HPROF_HEAP_DUMP = 0x0c
const HPROF_HEAP_DUMP_SEGMENT = 0x1c

/** Heap dump sub-record tags. */
const HPROF_GC_ROOT_UNKNOWN = 0xff
const HPROF_GC_ROOT_JNI_GLOBAL = 0x01
const HPROF_GC_ROOT_JNI_LOCAL = 0x02
const HPROF_GC_ROOT_JAVA_FRAME = 0x03
const HPROF_GC_ROOT_NATIVE_STACK = 0x04
const HPROF_GC_ROOT_STICKY_CLASS = 0x05
const HPROF_GC_ROOT_THREAD_BLOCK = 0x06
const HPROF_GC_ROOT_MONITOR_USED = 0x07
const HPROF_GC_ROOT_THREAD_OBJECT = 0x08
const HPROF_GC_CLASS_DUMP = 0x20
const HPROF_GC_INSTANCE_DUMP = 0x21
const HPROF_GC_OBJECT_ARRAY_DUMP = 0x22
const HPROF_GC_PRIMITIVE_ARRAY_DUMP = 0x23

/** The basic types a field, array element, or constant can have. */
const TYPE_OBJECT = 2
const TYPE_BOOLEAN = 4
const TYPE_CHAR = 5
const TYPE_FLOAT = 6
const TYPE_DOUBLE = 7
const TYPE_BYTE = 8
const TYPE_SHORT = 9
const TYPE_INT = 10
const TYPE_LONG = 11

/** The Java name of each primitive type, for naming primitive arrays. */
const PRIMITIVE_TYPE_NAMES: ReadonlyMap<number, string> = new Map([
  [TYPE_BOOLEAN, `boolean`],
  [TYPE_CHAR, `char`],
  [TYPE_FLOAT, `float`],
  [TYPE_DOUBLE, `double`],
  [TYPE_BYTE, `byte`],
  [TYPE_SHORT, `short`],
  [TYPE_INT, `int`],
  [TYPE_LONG, `long`],
])

/** The class every class object is an instance of. */
const CLASS_CONSTRUCTOR_NAME = `java.lang.Class`

/** A parsed dump's header and the records read from a single pass over it. */
type Dump = {
  bytes: Uint8Array
  view: DataView

  /** The byte width of every identifier in the dump. */
  idSize: IdentifierSize

  readId: (offset: number) => number

  /** The size of a value of each basic type, indexed by the type. */
  typeSizes: Int32Array

  /**
   * The offset of each string's `HPROF_UTF8` record body, by string ID.
   *
   * A dump holds the whole runtime symbol table, most of it method names and
   * signatures a heap snapshot never shows, so the bytes are decoded on demand
   * rather than up front.
   */
  stringRecordOffsets: Map<number, number>

  /** The name string ID of each loaded class, by class object ID. */
  classNameStringIds: Map<number, number>

  /** The `[start, end)` body offsets of each heap dump record, flattened. */
  heapDumpRanges: number[]
}

/** A class dumped in the heap, describing the layout of its instances. */
type DumpedClass = {
  superObjectId: number
  loaderObjectId: number
  signersObjectId: number
  protectionDomainObjectId: number

  /** The bytes the dump records for this class's static field values. */
  staticFieldsSize: number

  /** The name string ID of each instance field this class declares. */
  fieldNameStringIds: Float64Array

  /** The basic type of each instance field this class declares. */
  fieldTypes: Uint8Array

  /** The name string ID of each static field holding an object reference. */
  staticNameStringIds: Float64Array

  /** The object each static field references, `0` for a null reference. */
  staticObjectIds: Float64Array

  /**
   * The instance fields of this class followed by its super classes', the
   * order an instance's field values are written in. Resolved on first use,
   * since a dump holds classes with no instances.
   */
  flattenedFields?: FlattenedFields
}

/** The instance fields of a class and every class it inherits from. */
type FlattenedFields = {
  nameStringIds: Float64Array
  types: Uint8Array
}

/** The nodes a dump's heap records define, indexed by node ordinal. */
type Nodes = {
  /** Node count, including the synthetic GC root at ordinal 0. */
  nodeCount: number

  /** The ordinal of each dumped object, by object ID. */
  ordinalOf: ObjectIdToOrdinal

  /** The offset of each node's sub-record body, by ordinal. */
  recordOffsets: Float64Array

  /** The bytes the dump records for each node, by ordinal. */
  selfSizes: Float64Array

  /** Each dumped class, by the ordinal of its class object. */
  classes: Map<number, DumpedClass>

  /**
   * The root sub-record tag that reported each node as a GC root, `0` for a
   * node no root reports.
   */
  rootTags: Uint8Array
}

const readDump = (bytes: Uint8Array): Dump => {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const { idSize, recordsOffset } = readHeader(bytes, view)

  const dump: Dump = {
    bytes,
    view,
    idSize,
    readId: idReader(view, idSize),
    typeSizes: basicTypeSizes(idSize),
    stringRecordOffsets: new Map(),
    classNameStringIds: new Map(),
    heapDumpRanges: [],
  }
  readTopLevelRecords(dump, recordsOffset)

  if (dump.heapDumpRanges.length === 0) {
    throw new FormatParseError(`no heap dump records`)
  }

  return dump
}

/** The byte width of every identifier in a dump, stated by its header. */
type IdentifierSize = 4 | 8

/**
 * Reads the identifier size out of the header, along with the offset the
 * records begin at.
 */
const readHeader = (
  bytes: Uint8Array,
  view: DataView,
): { idSize: IdentifierSize; recordsOffset: number } => {
  const headerEnd = bytes.indexOf(0)
  if (headerEnd === -1 || headerEnd > MAX_FORMAT_NAME_LENGTH) {
    throw new FormatParseError(`missing null-terminated format name`)
  }
  const header = DECODER.decode(bytes.subarray(0, headerEnd))
  if (!HPROF_FORMAT_NAME.test(header)) {
    throw new FormatParseError(`unsupported format name, got: ${header}`)
  }

  const offset = headerEnd + 1
  if (offset + 12 > bytes.length) {
    throw new FormatParseError(`truncated header`)
  }
  const idSize = view.getUint32(offset)
  if (idSize !== 4 && idSize !== 8) {
    throw new FormatParseError(`unsupported identifier size, got: ${idSize}`)
  }

  // The identifier size and the timestamp follow the header's name.
  return { idSize, recordsOffset: offset + 12 }
}

/**
 * Reads an identifier of {@link idSize} bytes.
 *
 * An identifier is the object's address in the dumped process, which fits a
 * double exactly on every platform the JVM runs on: the address space is at
 * most 48 bits wide.
 */
const idReader = (
  view: DataView,
  idSize: IdentifierSize,
): ((offset: number) => number) =>
  idSize === 8
    ? (offset: number): number =>
        view.getUint32(offset) * 0x1_00_00_00_00 + view.getUint32(offset + 4)
    : (offset: number): number => view.getUint32(offset)

/** The size of a value of each basic type, indexed by the type. */
const basicTypeSizes = (idSize: IdentifierSize): Int32Array => {
  const typeSizes = new Int32Array(TYPE_LONG + 1).fill(-1)
  typeSizes[TYPE_OBJECT] = idSize
  typeSizes[TYPE_BOOLEAN] = 1
  typeSizes[TYPE_CHAR] = 2
  typeSizes[TYPE_FLOAT] = 4
  typeSizes[TYPE_DOUBLE] = 8
  typeSizes[TYPE_BYTE] = 1
  typeSizes[TYPE_SHORT] = 2
  typeSizes[TYPE_INT] = 4
  typeSizes[TYPE_LONG] = 8
  return typeSizes
}

/**
 * Walks every top-level record, recording the strings, the loaded class names,
 * and the heap dump ranges the rest of the parse reads.
 */
const readTopLevelRecords = (dump: Dump, recordsOffset: number): void => {
  const {
    bytes,
    view,
    idSize,
    readId,
    stringRecordOffsets,
    classNameStringIds,
    heapDumpRanges,
  } = dump

  let offset = recordsOffset
  while (offset < bytes.length) {
    if (offset + 9 > bytes.length) {
      throw new FormatParseError(`truncated record header`)
    }
    const tag = bytes[offset]!
    const length = view.getUint32(offset + 5)
    const body = offset + 9
    const end = body + length
    if (end > bytes.length) {
      throw new FormatParseError(
        `truncated record body of tag 0x${tag.toString(16)}, got: ${length} bytes`,
      )
    }

    switch (tag) {
      case HPROF_UTF8:
        stringRecordOffsets.set(readId(body), body)
        break
      case HPROF_LOAD_CLASS:
        classNameStringIds.set(readId(body + 4), readId(body + 4 + idSize + 4))
        break
      case HPROF_HEAP_DUMP:
      case HPROF_HEAP_DUMP_SEGMENT:
        heapDumpRanges.push(body, end)
        break
      default:
        break
    }

    offset = end
  }
}

/** The longest format name a dump can begin with, e.g. `JAVA PROFILE 1.0.2`. */
const MAX_FORMAT_NAME_LENGTH = 64

const DECODER = new TextDecoder()

/**
 * Walks every heap dump sub-record in order, passing each one's tag and the
 * offset of its body.
 */
const forEachSubRecord = (
  dump: Dump,
  visit: (tag: number, body: number) => void,
): void => {
  const { bytes, heapDumpRanges } = dump
  for (let range = 0; range < heapDumpRanges.length; range += 2) {
    let offset = heapDumpRanges[range]!
    const end = heapDumpRanges[range + 1]!
    while (offset < end) {
      const tag = bytes[offset]!
      const body = offset + 1
      visit(tag, body)
      offset = subRecordEnd(dump, tag, body)
    }
  }
}

/** The offset just past the sub-record of {@link tag} whose body is at {@link body}. */
const subRecordEnd = (dump: Dump, tag: number, body: number): number => {
  const { bytes, view, idSize, typeSizes } = dump
  switch (tag) {
    case HPROF_GC_ROOT_UNKNOWN:
    case HPROF_GC_ROOT_STICKY_CLASS:
    case HPROF_GC_ROOT_MONITOR_USED:
      return body + idSize
    case HPROF_GC_ROOT_JNI_GLOBAL:
      return body + idSize * 2
    case HPROF_GC_ROOT_NATIVE_STACK:
    case HPROF_GC_ROOT_THREAD_BLOCK:
      return body + idSize + 4
    case HPROF_GC_ROOT_JNI_LOCAL:
    case HPROF_GC_ROOT_JAVA_FRAME:
    case HPROF_GC_ROOT_THREAD_OBJECT:
      return body + idSize + 8
    case HPROF_GC_CLASS_DUMP:
      return classDumpEnd(dump, body)
    case HPROF_GC_INSTANCE_DUMP:
      return body + idSize * 2 + 8 + view.getUint32(body + idSize * 2 + 4)
    case HPROF_GC_OBJECT_ARRAY_DUMP:
      return body + idSize * 2 + 8 + view.getUint32(body + idSize + 4) * idSize
    case HPROF_GC_PRIMITIVE_ARRAY_DUMP: {
      const length = view.getUint32(body + idSize + 4)
      const type = bytes[body + idSize + 8]!
      return body + idSize + 9 + length * basicTypeSize(typeSizes, type)
    }
    default:
      throw new FormatParseError(
        `unsupported heap dump sub-record tag, got: 0x${tag.toString(16).padStart(2, `0`)}`,
      )
  }
}

/**
 * The offset just past the class dump whose body is at {@link body}.
 *
 * A class dump's length depends on its constant pool and field descriptors, so
 * it is measured by reading past them.
 */
const classDumpEnd = (dump: Dump, body: number): number => {
  const { bytes, view, idSize, typeSizes } = dump

  let offset = constantPoolEnd(dump, body)
  const staticFieldCount = view.getUint16(offset)
  offset += 2
  for (let index = 0; index < staticFieldCount; index++) {
    offset += idSize + 1 + basicTypeSize(typeSizes, bytes[offset + idSize]!)
  }

  const instanceFieldCount = view.getUint16(offset)
  return offset + 2 + instanceFieldCount * (idSize + 1)
}

/**
 * The offset just past the constant pool of the class dump whose body is at
 * {@link body}, where its static field descriptors begin.
 */
const constantPoolEnd = (dump: Dump, body: number): number => {
  const { bytes, view, idSize, typeSizes } = dump

  // The class object, the stack trace serial number, the super class, the
  // loader, the signers, the protection domain, the two reserved identifiers,
  // and the instance size.
  let offset = body + idSize * 7 + 8
  const constantPoolCount = view.getUint16(offset)
  offset += 2
  for (let index = 0; index < constantPoolCount; index++) {
    offset += 3 + basicTypeSize(typeSizes, bytes[offset + 2]!)
  }
  return offset
}

const basicTypeSize = (typeSizes: Int32Array, type: number): number => {
  const size = typeSizes[type] ?? -1
  if (size < 0) {
    throw new FormatParseError(`unsupported basic type, got: ${type}`)
  }
  return size
}

/**
 * Reads every dumped object into a node, in the order the dump writes them.
 *
 * Ordinal 0 is a synthetic GC root, the super-node referencing every root
 * object, so the dominator analysis has a single entry point.
 */
const readNodes = (dump: Dump): Nodes => {
  const { readId } = dump

  const ordinalOf = new ObjectIdToOrdinal()
  const recordOffsets = new DynamicTypedArray(new Float64Array(1 << 16))
  const selfSizes = new DynamicTypedArray(new Float64Array(1 << 16))
  const classes = new Map<number, DumpedClass>()
  // The object ID and tag of each root sub-record, flattened, resolved after
  // the pass because a dump reports roots before the objects they name.
  const rootRecords: number[] = []

  // Ordinal 0 is the synthetic GC root, which the dump has no record for.
  let nodeCount = 1
  recordOffsets.ensureCapacity(1)
  selfSizes.ensureCapacity(1)

  /**
   * Adds a node for the object at {@link body}, or returns the ordinal already
   * assigned when the dump repeats an object ID, so a repeated ID stays one
   * node read from the first record for it.
   */
  const addNode = (
    objectId: number,
    body: number,
    selfSize: number,
  ): number => {
    const assigned = ordinalOf.get(objectId)
    if (assigned !== -1) {
      return assigned
    }

    const ordinal = nodeCount++
    ordinalOf.set(objectId, ordinal)
    recordOffsets.ensureCapacity(nodeCount)[ordinal] = body
    selfSizes.ensureCapacity(nodeCount)[ordinal] = selfSize
    return ordinal
  }

  forEachSubRecord(dump, (tag, body) => {
    switch (tag) {
      case HPROF_GC_CLASS_DUMP: {
        const dumpedClass = readClass(dump, body)
        const ordinal = addNode(
          readId(body),
          body,
          dumpedClass.staticFieldsSize,
        )
        if (!classes.has(ordinal)) {
          classes.set(ordinal, dumpedClass)
        }
        break
      }
      case HPROF_GC_INSTANCE_DUMP:
      case HPROF_GC_OBJECT_ARRAY_DUMP:
      case HPROF_GC_PRIMITIVE_ARRAY_DUMP:
        addNode(readId(body), body, dumpedObjectSize(dump, tag, body))
        break
      default:
        rootRecords.push(readId(body), tag)
        break
    }
  })

  const rootTags = resolveRootTags(ordinalOf, nodeCount, rootRecords)

  return {
    nodeCount,
    ordinalOf,
    recordOffsets: recordOffsets.array.subarray(0, nodeCount),
    selfSizes: selfSizes.array.subarray(0, nodeCount),
    classes,
    rootTags,
  }
}

/**
 * The bytes the dump records for the object at {@link body}: an instance's
 * field values, or an array's elements.
 */
const dumpedObjectSize = (dump: Dump, tag: number, body: number): number => {
  const { bytes, view, idSize, typeSizes } = dump
  switch (tag) {
    case HPROF_GC_INSTANCE_DUMP:
      return view.getUint32(body + idSize * 2 + 4)
    case HPROF_GC_OBJECT_ARRAY_DUMP:
      return view.getUint32(body + idSize + 4) * idSize
    default:
      return (
        view.getUint32(body + idSize + 4) *
        basicTypeSize(typeSizes, bytes[body + idSize + 8]!)
      )
  }
}

/**
 * The root sub-record tag that reported each node as a GC root, by ordinal.
 *
 * A dump reports the same object as a root through several references (a class
 * both loaded and referenced from a frame, say), so the first tag reported for
 * an object stands. It also reports roots for objects it dumps no record for,
 * such as a JNI local of a thread that exited.
 */
const resolveRootTags = (
  ordinalOf: ObjectIdToOrdinal,
  nodeCount: number,
  rootRecords: readonly number[],
): Uint8Array => {
  const rootTags = new Uint8Array(nodeCount)
  for (let index = 0; index < rootRecords.length; index += 2) {
    const ordinal = ordinalOf.get(rootRecords[index]!)
    if (ordinal !== -1 && rootTags[ordinal] === 0) {
      rootTags[ordinal] = rootRecords[index + 1]!
    }
  }
  return rootTags
}

/** Reads a class dump's super class, loader, and field descriptors. */
const readClass = (dump: Dump, body: number): DumpedClass => {
  const { bytes, view, idSize, readId, typeSizes } = dump

  const superObjectId = readId(body + idSize + 4)
  const loaderObjectId = readId(body + idSize * 2 + 4)
  const signersObjectId = readId(body + idSize * 3 + 4)
  const protectionDomainObjectId = readId(body + idSize * 4 + 4)

  let offset = constantPoolEnd(dump, body)
  const staticFieldCount = view.getUint16(offset)
  offset += 2
  const staticNameStringIds: number[] = []
  const staticObjectIds: number[] = []
  let staticFieldsSize = 0
  for (let index = 0; index < staticFieldCount; index++) {
    const nameStringId = readId(offset)
    const type = bytes[offset + idSize]!
    offset += idSize + 1
    if (type === TYPE_OBJECT) {
      staticNameStringIds.push(nameStringId)
      staticObjectIds.push(readId(offset))
    }
    const valueSize = basicTypeSize(typeSizes, type)
    staticFieldsSize += valueSize
    offset += valueSize
  }

  const instanceFieldCount = view.getUint16(offset)
  offset += 2
  const fieldNameStringIds = new Float64Array(instanceFieldCount)
  const fieldTypes = new Uint8Array(instanceFieldCount)
  for (let index = 0; index < instanceFieldCount; index++) {
    fieldNameStringIds[index] = readId(offset)
    fieldTypes[index] = bytes[offset + idSize]!
    offset += idSize + 1
  }

  return {
    superObjectId,
    loaderObjectId,
    signersObjectId,
    protectionDomainObjectId,
    staticFieldsSize,
    fieldNameStringIds,
    fieldTypes,
    staticNameStringIds: new Float64Array(staticNameStringIds),
    staticObjectIds: new Float64Array(staticObjectIds),
  }
}

const buildHeapSnapshot = (dump: Dump, nodes: Nodes): HeapSnapshot => {
  const { nodeCount, selfSizes } = nodes
  const references = readReferences(dump, nodes)
  const nodeAdjacencyGraph = nodeAdjacencyGraphFromSuccessors(
    references.successorCounts,
    references.successorOrdinals,
    references.successorEdgeIndices,
  )
  const names = new NodeNames(dump, nodes)

  return {
    type: `heap-snapshot`,
    nodeCount,
    edgeCount: references.successorOrdinals.length,
    nodeAdjacencyGraph,
    selfSizeOf: nodeOrdinal => selfSizes[nodeOrdinal]!,
    nodes: heapSnapshotNodes(dump, nodes, names),
    formatEdgeLabel: (retainerOrdinal, edgeIndex) =>
      formatRetainerEdgeLabel(dump, nodes, names, retainerOrdinal, edgeIndex),
    formatNodeLabel: nodeOrdinal => names.labelOf(nodeOrdinal),
    // The GC root is the only node the dump doesn't record, and every other
    // node is a Java object that can reference user code.
    isInternalNode: nodeOrdinal => nodeOrdinal === GC_ROOT_ORDINAL,
    unresolvedCategoryOf: nodeOrdinal =>
      unresolvedCategoryOf(nodeOrdinal, dump, nodes),
  }
}

/** Classifies a node by the heap dump record that declares it. */
const unresolvedCategoryOf = (
  nodeOrdinal: number,
  { bytes }: Dump,
  { recordOffsets }: Nodes,
): UnresolvedHeapSnapshotNodeCategory => {
  if (nodeOrdinal === GC_ROOT_ORDINAL) {
    return { category: `synthetic` }
  }
  switch (bytes[recordOffsets[nodeOrdinal]! - 1]!) {
    case HPROF_GC_CLASS_DUMP:
      // A class object describes the layout its instances share, which is
      // what an object shape is in the languages that name one.
      return { category: `object shape` }
    case HPROF_GC_INSTANCE_DUMP:
      return { category: `object` }
    default:
      return { category: `array` }
  }
}

const GC_ROOT_ORDINAL = 0

/** Every reference between nodes, grouped by the node that holds it. */
type References = {
  /** The target of each reference, ordered by the node holding it. */
  successorOrdinals: Int32Array

  /**
   * The position of each reference among the references its node holds, which
   * a label is resolved from by re-reading the node's record.
   */
  successorEdgeIndices: Int32Array

  /** The number of references each node holds. */
  successorCounts: Int32Array
}

/**
 * Reads the references every node holds: the GC root's to each root object,
 * an instance's object-typed fields, an array's elements, and a class's static
 * fields, loader, signers, and protection domain.
 *
 * An instance is not treated as referencing its own class. A class is reachable
 * as a system-class root already, and attributing every instance's retention to
 * its class would make each class retain the objects its instances hold.
 */
const readReferences = (dump: Dump, nodes: Nodes): References => {
  const { readId } = dump
  const { nodeCount, rootTags, ordinalOf, recordOffsets } = nodes

  const successorOrdinals = new DynamicTypedArray(new Int32Array(1 << 16))
  const successorEdgeIndices = new DynamicTypedArray(new Int32Array(1 << 16))
  const successorCounts = new Int32Array(nodeCount)
  let referenceCount = 0

  let nodeOrdinal = GC_ROOT_ORDINAL
  let nodeEdgeIndex = 0
  const addReference = (targetOrdinal: number): void => {
    if (targetOrdinal === -1) {
      return
    }
    successorOrdinals.ensureCapacity(referenceCount + 1)[referenceCount] =
      targetOrdinal
    successorEdgeIndices.ensureCapacity(referenceCount + 1)[referenceCount] =
      nodeEdgeIndex++
    referenceCount++
    successorCounts[nodeOrdinal]!++
  }
  const startNode = (ordinal: number): void => {
    nodeOrdinal = ordinal
    nodeEdgeIndex = 0
  }

  for (let ordinal = 1; ordinal < nodeCount; ordinal++) {
    if (rootTags[ordinal] !== 0) {
      addReference(ordinal)
    }
  }

  /**
   * The ordinal of the node the record at {@link body} was read into, or -1
   * for a record whose object ID a preceding record already defined, whose
   * references were read from that record.
   *
   * Records are visited in the order their nodes were assigned ordinals, which
   * is the order the successor arrays must be written in.
   */
  const ordinalOfRecord = (body: number): number => {
    const ordinal = ordinalOf.get(readId(body))
    return recordOffsets[ordinal] === body ? ordinal : -1
  }

  forEachSubRecord(dump, (tag, body) => {
    switch (tag) {
      case HPROF_GC_CLASS_DUMP: {
        const ordinal = ordinalOfRecord(body)
        if (ordinal !== -1) {
          startNode(ordinal)
          addClassReferences(nodes, ordinal, addReference)
        }
        break
      }
      case HPROF_GC_INSTANCE_DUMP: {
        const ordinal = ordinalOfRecord(body)
        if (ordinal !== -1) {
          startNode(ordinal)
          addInstanceReferences(dump, nodes, body, addReference)
        }
        break
      }
      case HPROF_GC_OBJECT_ARRAY_DUMP: {
        const ordinal = ordinalOfRecord(body)
        if (ordinal !== -1) {
          startNode(ordinal)
          addArrayReferences(dump, nodes, body, addReference)
        }
        break
      }
      default:
        break
    }
  })

  return {
    successorOrdinals: successorOrdinals.array.subarray(0, referenceCount),
    successorEdgeIndices: successorEdgeIndices.array.subarray(
      0,
      referenceCount,
    ),
    successorCounts,
  }
}

/** Passes the references a class object holds: its static fields, loader, signers, and protection domain. */
const addClassReferences = (
  nodes: Nodes,
  classOrdinal: number,
  addReference: (targetOrdinal: number) => void,
): void => {
  const { ordinalOf, classes } = nodes
  const {
    staticObjectIds,
    loaderObjectId,
    signersObjectId,
    protectionDomainObjectId,
  } = classes.get(classOrdinal)!

  for (const staticObjectId of staticObjectIds) {
    addReference(ordinalOf.get(staticObjectId))
  }
  addReference(ordinalOf.get(loaderObjectId))
  addReference(ordinalOf.get(signersObjectId))
  addReference(ordinalOf.get(protectionDomainObjectId))
}

/** Passes the references the object-typed fields of the instance at {@link body} hold. */
const addInstanceReferences = (
  dump: Dump,
  nodes: Nodes,
  body: number,
  addReference: (targetOrdinal: number) => void,
): void => {
  const { idSize, readId, typeSizes } = dump
  const { ordinalOf } = nodes

  const fields = flattenedFieldsOf(
    dump,
    nodes,
    ordinalOf.get(readId(body + idSize + 4)),
  )
  let offset = body + idSize * 2 + 8
  for (const type of fields.types) {
    if (type === TYPE_OBJECT) {
      addReference(ordinalOf.get(readId(offset)))
    }
    offset += basicTypeSize(typeSizes, type)
  }
}

/** Passes the references the elements of the object array at {@link body} hold. */
const addArrayReferences = (
  dump: Dump,
  nodes: Nodes,
  body: number,
  addReference: (targetOrdinal: number) => void,
): void => {
  const { view, idSize, readId } = dump

  const length = view.getUint32(body + idSize + 4)
  let offset = body + idSize * 2 + 8
  for (let index = 0; index < length; index++) {
    addReference(nodes.ordinalOf.get(readId(offset)))
    offset += idSize
  }
}

/**
 * The instance fields of the class at {@link classOrdinal} followed by its
 * super classes', the order an instance's field values are written in.
 *
 * A class whose own dump the heap lacks contributes no fields, which leaves the
 * instance's remaining field values unread rather than misread, since the
 * missing layout is what says how wide they are.
 */
const flattenedFieldsOf = (
  dump: Dump,
  nodes: Nodes,
  classOrdinal: number,
): FlattenedFields => {
  const dumpedClass = nodes.classes.get(classOrdinal)
  if (!dumpedClass) {
    return EMPTY_FIELDS
  }
  if (dumpedClass.flattenedFields) {
    return dumpedClass.flattenedFields
  }

  const superFields = flattenedFieldsOf(
    dump,
    nodes,
    nodes.ordinalOf.get(dumpedClass.superObjectId),
  )
  const { fieldNameStringIds, fieldTypes } = dumpedClass
  const nameStringIds = new Float64Array(
    fieldNameStringIds.length + superFields.nameStringIds.length,
  )
  nameStringIds.set(fieldNameStringIds)
  nameStringIds.set(superFields.nameStringIds, fieldNameStringIds.length)
  const types = new Uint8Array(nameStringIds.length)
  types.set(fieldTypes)
  types.set(superFields.types, fieldTypes.length)

  const flattenedFields = { nameStringIds, types }
  dumpedClass.flattenedFields = flattenedFields
  return flattenedFields
}

const EMPTY_FIELDS: FlattenedFields = {
  nameStringIds: new Float64Array(0),
  types: new Uint8Array(0),
}

function* heapSnapshotNodes(
  dump: Dump,
  nodes: Nodes,
  names: NodeNames,
): Iterable<HeapSnapshotNode> {
  const { bytes, idSize, readId } = dump
  const { nodeCount, recordOffsets, ordinalOf } = nodes

  yield unresolvedCategoryOf(GC_ROOT_ORDINAL, dump, nodes)

  for (let ordinal = 1; ordinal < nodeCount; ordinal++) {
    const { category } = unresolvedCategoryOf(ordinal, dump, nodes)
    const body = recordOffsets[ordinal]!
    switch (bytes[body - 1]!) {
      case HPROF_GC_CLASS_DUMP:
        yield {
          category,
          type: `constructor`,
          name: CLASS_CONSTRUCTOR_NAME,
        }
        break
      case HPROF_GC_INSTANCE_DUMP:
        yield {
          category,
          type: `constructor`,
          name: names.classNameOf(ordinalOf.get(readId(body + idSize + 4))),
        }
        break
      default:
        yield {
          category,
          type: `constructor`,
          name: names.labelOf(ordinal),
        }
        break
    }
  }
}

/**
 * The display names of a dump's nodes: the class an instance belongs to, an
 * array's element type, and the class a class object describes.
 *
 * Names are decoded and converted from the JVM's internal spelling on demand
 * and memoized per class, since a dump holds far more classes than the ones its
 * shown nodes belong to.
 */
class NodeNames {
  readonly #dump: Dump
  readonly #nodes: Nodes
  readonly #classNames = new Map<number, string>()

  public constructor(dump: Dump, nodes: Nodes) {
    this.#dump = dump
    this.#nodes = nodes
  }

  /** The Java name of the class whose class object is at {@link classOrdinal}. */
  public classNameOf(classOrdinal: number): string {
    const cached = this.#classNames.get(classOrdinal)
    if (cached !== undefined) {
      return cached
    }

    const name = javaClassName(this.#rawClassNameOf(classOrdinal))
    this.#classNames.set(classOrdinal, name)
    return name
  }

  /** The label of a node in a retainer path or a retained node listing. */
  public labelOf(nodeOrdinal: number): string {
    if (nodeOrdinal === GC_ROOT_ORDINAL) {
      return `(GC root)`
    }

    const { bytes, idSize, readId } = this.#dump
    const body = this.#nodes.recordOffsets[nodeOrdinal]!
    switch (bytes[body - 1]!) {
      case HPROF_GC_CLASS_DUMP:
        return `class ${this.classNameOf(nodeOrdinal)}`
      case HPROF_GC_INSTANCE_DUMP:
        return this.classNameOf(
          this.#nodes.ordinalOf.get(readId(body + idSize + 4)),
        )
      case HPROF_GC_OBJECT_ARRAY_DUMP:
        // An array's class identifier follows its element count, where an
        // instance's precedes its field bytes.
        return this.classNameOf(
          this.#nodes.ordinalOf.get(readId(body + idSize + 8)),
        )
      default:
        return `${primitiveTypeName(bytes[body + idSize + 8]!)}[]`
    }
  }

  /** The name of a field, static field, or class, by its string ID. */
  public stringOf(stringId: number): string {
    const { bytes, view, idSize, stringRecordOffsets } = this.#dump
    const body = stringRecordOffsets.get(stringId)
    if (body === undefined) {
      return `(unknown)`
    }
    // The string's bytes follow its ID and run to the end of the record, whose
    // length the four bytes preceding the body state.
    return DECODER.decode(
      bytes.subarray(body + idSize, body + view.getUint32(body - 4)),
    )
  }

  /** The class's name in the JVM's internal spelling, e.g. `[Ljava/lang/Object;`. */
  #rawClassNameOf(classOrdinal: number): string {
    if (classOrdinal === -1) {
      return `(unknown)`
    }

    const { bytes, readId, classNameStringIds } = this.#dump
    const body = this.#nodes.recordOffsets[classOrdinal]!
    if (bytes[body - 1] !== HPROF_GC_CLASS_DUMP) {
      return `(unknown)`
    }
    const nameStringId = classNameStringIds.get(readId(body))
    return nameStringId === undefined
      ? `(unknown)`
      : this.stringOf(nameStringId)
  }
}

const primitiveTypeName = (type: number): string =>
  PRIMITIVE_TYPE_NAMES.get(type) ?? `(unknown)`

/**
 * Converts a class name from the JVM's internal spelling to Java's, so that
 * `java/util/HashMap$Node` reads as `java.util.HashMap$Node` and the array
 * descriptor `[[Ljava/lang/String;` as `java.lang.String[][]`.
 *
 * HotSpot writes the internal name of every class, including the array classes
 * the format's own specification describes as human-readable.
 */
const javaClassName = (rawName: string): string => {
  let dimensions = 0
  while (rawName[dimensions] === `[`) {
    dimensions++
  }
  if (dimensions === 0) {
    return jvmSourceClassName(rawName)
  }

  const descriptor = rawName.slice(dimensions)
  const elementName = descriptor.startsWith(`L`)
    ? jvmSourceClassName(descriptor.slice(1, -1))
    : (JVM_PRIMITIVE_DESCRIPTOR_NAMES.get(descriptor) ?? descriptor)
  return elementName + `[]`.repeat(dimensions)
}

/**
 * Formats one step of a retainer path: the reference's label followed by the
 * label of the node holding it.
 */
const formatRetainerEdgeLabel = (
  dump: Dump,
  nodes: Nodes,
  names: NodeNames,
  retainerOrdinal: number,
  edgeIndex: number,
): string => {
  const retainerLabel = names.labelOf(retainerOrdinal)
  // The GC root's references are the root objects themselves, which no record
  // labels.
  if (retainerOrdinal === GC_ROOT_ORDINAL) {
    return retainerLabel
  }

  return `${referenceLabel(dump, nodes, names, retainerOrdinal, edgeIndex)} ${retainerLabel}`
}

/**
 * The label of the reference at {@link edgeIndex} among those the node at
 * {@link retainerOrdinal} holds: the field name for an instance or class, and
 * the index for an array element.
 *
 * The node's record is read again rather than a label kept per reference, of
 * which a dump holds millions and a converted snapshot shows a few dozen.
 */
const referenceLabel = (
  dump: Dump,
  nodes: Nodes,
  names: NodeNames,
  retainerOrdinal: number,
  edgeIndex: number,
): string => {
  const body = nodes.recordOffsets[retainerOrdinal]!
  switch (dump.bytes[body - 1]!) {
    case HPROF_GC_CLASS_DUMP:
      return classReferenceLabel(nodes, names, retainerOrdinal, edgeIndex)
    case HPROF_GC_INSTANCE_DUMP:
      return instanceFieldLabel(dump, nodes, names, body, edgeIndex)
    default:
      return arrayElementLabel(dump, nodes, body, edgeIndex)
  }
}

/** The label of the reference at {@link edgeIndex} among those a class object holds. */
const classReferenceLabel = (
  nodes: Nodes,
  names: NodeNames,
  classOrdinal: number,
  edgeIndex: number,
): string => {
  const { ordinalOf, classes } = nodes
  const {
    staticObjectIds,
    staticNameStringIds,
    loaderObjectId,
    signersObjectId,
    protectionDomainObjectId,
  } = classes.get(classOrdinal)!

  let index = 0
  for (
    let staticIndex = 0;
    staticIndex < staticObjectIds.length;
    staticIndex++
  ) {
    if (ordinalOf.get(staticObjectIds[staticIndex]!) === -1) {
      continue
    }
    if (index++ === edgeIndex) {
      return `.${names.stringOf(staticNameStringIds[staticIndex]!)}`
    }
  }
  for (const [objectId, label] of [
    [loaderObjectId, `<class loader>`],
    [signersObjectId, `<signers>`],
    [protectionDomainObjectId, `<protection domain>`],
  ] as const) {
    if (ordinalOf.get(objectId) === -1) {
      continue
    }
    if (index++ === edgeIndex) {
      return label
    }
  }
  return `.(unknown)`
}

/** The name of the field at {@link edgeIndex} among the references the instance at {@link body} holds. */
const instanceFieldLabel = (
  dump: Dump,
  nodes: Nodes,
  names: NodeNames,
  body: number,
  edgeIndex: number,
): string => {
  const { idSize, readId, typeSizes } = dump
  const { ordinalOf } = nodes

  const fields = flattenedFieldsOf(
    dump,
    nodes,
    ordinalOf.get(readId(body + idSize + 4)),
  )
  let index = 0
  let offset = body + idSize * 2 + 8
  for (let field = 0; field < fields.types.length; field++) {
    const type = fields.types[field]!
    if (
      type === TYPE_OBJECT &&
      ordinalOf.get(readId(offset)) !== -1 &&
      index++ === edgeIndex
    ) {
      return `.${names.stringOf(fields.nameStringIds[field]!)}`
    }
    offset += basicTypeSize(typeSizes, type)
  }
  return `.(unknown)`
}

/** The index of the element at {@link edgeIndex} among the references the array at {@link body} holds. */
const arrayElementLabel = (
  dump: Dump,
  nodes: Nodes,
  body: number,
  edgeIndex: number,
): string => {
  const { view, idSize, readId } = dump
  const { ordinalOf } = nodes

  const length = view.getUint32(body + idSize + 4)
  let index = 0
  let offset = body + idSize * 2 + 8
  for (let element = 0; element < length; element++, offset += idSize) {
    if (ordinalOf.get(readId(offset)) !== -1 && index++ === edgeIndex) {
      return `[${element}]`
    }
  }
  return `[]`
}
