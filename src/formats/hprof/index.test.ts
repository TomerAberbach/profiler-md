import { describe, expect, test } from 'vitest'
import { streamOf } from '../../helpers/testing.ts'
import {
  retainedSizeTables,
  selfSizeInstancesTables,
  selfSizeTables,
} from '../../modalities/heap-snapshot/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import { categoryTables } from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { hprofConverter } from './index.ts'
import {
  HPROF_BYTE,
  HPROF_INT,
  HPROF_OBJECT,
  HPROF_ROOT_JAVA_FRAME,
  HPROF_ROOT_JNI_GLOBAL,
  HPROF_ROOT_STICKY_CLASS,
  makeHprof,
} from './testing.ts'
import type { HprofDump } from './testing.ts'

/**
 * Object identifiers a dump would hold as addresses. They start well past the
 * string identifiers so the two can't be confused.
 */
const STRING_CLASS = 0x1000
const HOLDER_CLASS = 0x1008
const ENTRY_CLASS = 0x1010
const OBJECT_ARRAY_CLASS = 0x1018
const HOLDER = 0x2000
const ENTRY = 0x2008
const STRING = 0x2010
const BYTES = 0x2018
const ELEMENTS = 0x2020

/**
 * A holder reachable from a Java frame, referencing an entry through an array
 * and a string through a field, with the string's characters in a byte array.
 */
const HOLDER_GRAPH: HprofDump = {
  classes: [
    {
      id: STRING_CLASS,
      name: `java/lang/String`,
      fields: [{ name: `value`, type: HPROF_OBJECT }],
    },
    {
      id: HOLDER_CLASS,
      name: `com/example/Holder`,
      fields: [
        { name: `elements`, type: HPROF_OBJECT },
        { name: `label`, type: HPROF_OBJECT },
        { name: `size`, type: HPROF_INT },
      ],
    },
    {
      id: ENTRY_CLASS,
      name: `com/example/Entry`,
      fields: [{ name: `key`, type: HPROF_INT }],
    },
    { id: OBJECT_ARRAY_CLASS, name: `[Lcom/example/Entry;` },
  ],
  instances: [
    {
      id: HOLDER,
      classId: HOLDER_CLASS,
      fields: { elements: ELEMENTS, label: STRING, size: 1 },
    },
    { id: ENTRY, classId: ENTRY_CLASS, fields: { key: 7 } },
    { id: STRING, classId: STRING_CLASS, fields: { value: BYTES } },
  ],
  objectArrays: [
    { id: ELEMENTS, classId: OBJECT_ARRAY_CLASS, elements: [0, ENTRY] },
  ],
  primitiveArrays: [{ id: BYTES, type: HPROF_BYTE, length: 64 }],
  roots: [{ id: HOLDER, tag: HPROF_ROOT_JAVA_FRAME }],
}

const holderGraph = makeHprof(HOLDER_GRAPH)

const convert = (bytes: Uint8Array): string =>
  convertBytesToMd(hprofConverter, bytes, normalizeProfileToMdOptions())

/** The retainer path of each instance the ranking of {@link name} lists. */
const retainerPaths = (md: string, name: string): (string | undefined)[][] =>
  selfSizeInstancesTables(md, name).map(table => table.map(row => row.Path))

describe(`matches`, () => {
  test(`accepts a dump`, () => {
    expect(hprofConverter.matches(makeHprof())).toBe(true)
  })

  test(`accepts a version whose parsing fails`, () => {
    expect(
      hprofConverter.matches(makeHprof({ header: `JAVA PROFILE 9.9.9` })),
    ).toBe(true)
  })

  test(`rejects other bytes`, () => {
    expect(
      hprofConverter.matches(new TextEncoder().encode(`{"nodes":[]}`)),
    ).toBe(false)
  })

  test(`rejects bytes shorter than the format name`, () => {
    expect(hprofConverter.matches(new TextEncoder().encode(`JAVA`))).toBe(false)
  })
})

describe(`parse`, () => {
  test(`rejects a name that isn't the format's`, () => {
    expect(() =>
      hprofConverter.parse(makeHprof({ header: `JAVA PROFILE 9.9.9` })),
    ).toThrow(`unsupported format name, got: JAVA PROFILE 9.9.9`)
  })

  test(`rejects an identifier size the JVM never writes`, () => {
    const bytes = makeHprof()
    // The identifier size follows the null-terminated name.
    new DataView(bytes.buffer, bytes.byteOffset).setUint32(
      bytes.indexOf(0) + 1,
      2,
    )
    expect(() => hprofConverter.parse(bytes)).toThrow(
      `unsupported identifier size, got: 2`,
    )
  })

  test(`rejects a truncated record`, () => {
    expect(() => hprofConverter.parse(holderGraph.subarray(0, 40))).toThrow(
      /truncated record/u,
    )
  })

  test(`rejects a sub-record tag the format doesn't define`, () => {
    const bytes = makeHprof({
      primitiveArrays: [{ id: BYTES, type: HPROF_BYTE, length: 8 }],
    })
    // Android's dialect writes a heap dump info sub-record here.
    bytes[bytes.lastIndexOf(0x23)] = 0xfe
    expect(() => hprofConverter.parse(bytes)).toThrow(
      `unsupported heap dump sub-record tag, got: 0xfe`,
    )
  })

  test(`rejects a dump with no heap`, () => {
    const bytes = makeHprof()
    expect(() => hprofConverter.parse(bytes.subarray(0, 31))).toThrow(
      `no heap dump records`,
    )
  })
})

describe(`convert`, () => {
  test(`ranks classes by the bytes their instances hold`, () => {
    const md = convert(holderGraph)

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Array`, '%': `71.4%`, Size: `80 B`, Nodes: `2` },
        { Category: `Object`, '%': `21.4%`, Size: `24 B`, Nodes: `2` },
        { Category: `String`, '%': `7.1%`, Size: `8 B`, Nodes: `1` },
        { Category: `Synthetic`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
        { Category: `Object shape`, '%': `0.0%`, Size: `0 B`, Nodes: `4` },
      ],
    ])
  })

  test(`names an instance by its class and an array by its element type`, () => {
    const md = convert(holderGraph)

    expect(selfSizeTables(md)).toEqual([
      [
        { '%': `57.1%`, Size: `64 B`, Instances: `1`, Constructor: `byte[]` },
        {
          '%': `17.9%`,
          Size: `20 B`,
          Instances: `1`,
          Constructor: `com.example.Holder`,
        },
        {
          '%': `14.3%`,
          Size: `16 B`,
          Instances: `1`,
          Constructor: `com.example.Entry[]`,
        },
        {
          '%': `7.1%`,
          Size: `8 B`,
          Instances: `1`,
          Constructor: `java.lang.String`,
        },
        {
          '%': `3.6%`,
          Size: `4 B`,
          Instances: `1`,
          Constructor: `com.example.Entry`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `4`,
          Constructor: `java.lang.Class`,
        },
      ],
    ])
  })

  test(`retains what a class's instances keep reachable`, () => {
    const md = convert(holderGraph)

    expect(retainedSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `112 B`,
          Instances: `1`,
          Constructor: `com.example.Holder`,
        },
        {
          '%': `64.3%`,
          Size: `72 B`,
          Instances: `1`,
          Constructor: `java.lang.String`,
        },
        { '%': `57.1%`, Size: `64 B`, Instances: `1`, Constructor: `byte[]` },
        {
          '%': `17.9%`,
          Size: `20 B`,
          Instances: `1`,
          Constructor: `com.example.Entry[]`,
        },
        {
          '%': `3.6%`,
          Size: `4 B`,
          Instances: `1`,
          Constructor: `com.example.Entry`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `4`,
          Constructor: `java.lang.Class`,
        },
      ],
    ])
  })

  test(`labels a field reference by its name and an element by its index`, () => {
    const md = convert(holderGraph)

    expect(
      retainerPaths(md, `com.example.Entry`),
      // The array's own instances match the heading too, since its name
      // contains the element class's.
    ).toEqual([
      [`.elements com.example.Holder`],
      [`[1] com.example.Entry[] ← .elements com.example.Holder`],
    ])
  })

  test(`reads an instance's inherited fields after its own`, () => {
    const md = convert(
      makeHprof({
        classes: [
          {
            id: HOLDER_CLASS,
            name: `com/example/Base`,
            fields: [{ name: `inherited`, type: HPROF_OBJECT }],
          },
          {
            id: ENTRY_CLASS,
            name: `com/example/Derived`,
            superId: HOLDER_CLASS,
            fields: [{ name: `own`, type: HPROF_OBJECT }],
          },
          { id: STRING_CLASS, name: `com/example/Held` },
        ],
        instances: [
          {
            id: ENTRY,
            classId: ENTRY_CLASS,
            fields: { own: HOLDER, inherited: STRING },
          },
          { id: HOLDER, classId: STRING_CLASS },
          { id: STRING, classId: STRING_CLASS },
        ],
        primitiveArrays: [{ id: BYTES, type: HPROF_BYTE, length: 8 }],
        roots: [
          { id: ENTRY, tag: HPROF_ROOT_JNI_GLOBAL },
          { id: BYTES, tag: HPROF_ROOT_STICKY_CLASS },
        ],
      }),
    )

    expect(retainerPaths(md, `com.example.Held`)).toEqual([
      [`.own com.example.Derived`, `.inherited com.example.Derived`],
    ])
  })

  test(`a class retains what its static fields reference`, () => {
    const md = convert(
      makeHprof({
        classes: [
          {
            id: HOLDER_CLASS,
            name: `com/example/Registry`,
            staticFields: { INSTANCES: ELEMENTS },
          },
          { id: OBJECT_ARRAY_CLASS, name: `[Ljava/lang/Object;` },
          { id: ENTRY_CLASS, name: `com/example/Entry` },
        ],
        instances: [{ id: ENTRY, classId: ENTRY_CLASS }],
        objectArrays: [
          { id: ELEMENTS, classId: OBJECT_ARRAY_CLASS, elements: [ENTRY] },
        ],
        roots: [{ id: HOLDER_CLASS, tag: HPROF_ROOT_STICKY_CLASS }],
      }),
    )

    expect(retainerPaths(md, `com.example.Entry`)).toEqual([
      [`[0] java.lang.Object[] ← .INSTANCES class com.example.Registry`],
    ])
  })

  test(`reads a dump written with 32-bit identifiers`, () => {
    const md = convert(
      makeHprof({
        idSize: 4,
        classes: [{ id: ENTRY_CLASS, name: `com/example/Entry` }],
        instances: [{ id: ENTRY, classId: ENTRY_CLASS }],
        primitiveArrays: [{ id: BYTES, type: HPROF_INT, length: 4 }],
        roots: [{ id: ENTRY, tag: HPROF_ROOT_STICKY_CLASS }],
      }),
    )

    expect(selfSizeTables(md)).toEqual([
      [
        { '%': `100.0%`, Size: `16 B`, Instances: `1`, Constructor: `int[]` },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `1`,
          Constructor: `java.lang.Class`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `1`,
          Constructor: `com.example.Entry`,
        },
      ],
    ])
  })

  test(`reads a heap written as one unsegmented record`, () => {
    const unsegmented = convert(
      makeHprof({ ...HOLDER_GRAPH, segmented: false }),
    )

    expect(unsegmented).toBe(convert(holderGraph))
  })

  test(`skips a reference to an object the dump has no record of`, () => {
    const md = convert(
      makeHprof({
        classes: [
          {
            id: HOLDER_CLASS,
            name: `com/example/Holder`,
            fields: [{ name: `gone`, type: HPROF_OBJECT }],
          },
        ],
        instances: [
          // A JNI weak reference the dump reports no object for.
          { id: HOLDER, classId: HOLDER_CLASS, fields: { gone: 0xdead } },
        ],
        roots: [{ id: HOLDER, tag: HPROF_ROOT_STICKY_CLASS }],
      }),
    )

    expect(retainerPaths(md, `com.example.Holder`)).toEqual([[`(GC root)`]])
  })

  test(`reads an object the dump records twice as one node`, () => {
    const md = convert(
      makeHprof({
        classes: [
          {
            id: HOLDER_CLASS,
            name: `com/example/Holder`,
            fields: [{ name: `entry`, type: HPROF_OBJECT }],
          },
          { id: ENTRY_CLASS, name: `com/example/Entry` },
        ],
        instances: [
          { id: HOLDER, classId: HOLDER_CLASS, fields: { entry: ENTRY } },
          { id: HOLDER, classId: HOLDER_CLASS, fields: { entry: ENTRY } },
          { id: ENTRY, classId: ENTRY_CLASS },
        ],
        roots: [{ id: HOLDER, tag: HPROF_ROOT_STICKY_CLASS }],
      }),
    )

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `8 B`,
          Instances: `1`,
          Constructor: `com.example.Holder`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `2`,
          Constructor: `java.lang.Class`,
        },
        {
          '%': `0.0%`,
          Size: `0 B`,
          Instances: `1`,
          Constructor: `com.example.Entry`,
        },
      ],
    ])
  })

  test(`streaming a dump converts it the same way`, async () => {
    expect(
      await convertToMdAsync(
        hprofConverter,
        streamOf(holderGraph),
        normalizeProfileToMdOptions(),
      ),
    ).toBe(convert(holderGraph))
  })
})
