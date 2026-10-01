import { describe, expect, test } from 'vitest'
import {
  largestStringsTables,
  selfSizeInstancesTables,
  selfSizeTables,
} from '../../modalities/heap-snapshot/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  categorySectionTables,
  categoryTables,
  expectLogs,
} from '../../testing.ts'
import { convertJsonToMd } from '../testing.ts'
import { jscHeapSnapshotFormatSpec } from './index.ts'
import {
  EDGE_INDEX,
  EDGE_INTERNAL,
  EDGE_PROPERTY,
  EDGE_VARIABLE,
  makeJSCEdge,
  makeJSCNode,
  makeJSCSnapshot,
  NODE_INTERNAL,
} from './testing.ts'

describe(`matches`, () => {
  test(`accepts version 2 (Safari)`, () => {
    expect(
      jscHeapSnapshotFormatSpec.matches({
        version: 2,
        type: `Inspector`,
        nodes: [],
        nodeClassNames: [],
        edges: [],
        edgeTypes: [],
        edgeNames: [],
      }),
    ).toBe(true)
  })

  test(`accepts version 3 (Bun)`, () => {
    expect(
      jscHeapSnapshotFormatSpec.matches({
        version: 3,
        type: `Inspector`,
        nodes: [],
        nodeClassNames: [],
        edges: [],
        edgeTypes: [],
        edgeNames: [],
      }),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(jscHeapSnapshotFormatSpec.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(jscHeapSnapshotFormatSpec.matches(`string`)).toBe(false)
  })

  test(`rejects bad version`, () => {
    expect(
      jscHeapSnapshotFormatSpec.matches({
        version: `hi`,
        type: `Inspector`,
        nodes: [],
      }),
    ).toBe(false)
  })

  test(`rejects wrong type`, () => {
    expect(
      jscHeapSnapshotFormatSpec.matches({ version: 2, type: `V8`, nodes: [] }),
    ).toBe(false)
  })

  test(`rejects V8 format`, () => {
    expect(
      jscHeapSnapshotFormatSpec.matches({
        snapshot: { meta: { node_fields: [] } },
        edges: [],
      }),
    ).toBe(false)
  })
})

describe(`convert`, () => {
  test(`formats all sections`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 200, nameIndex: 1 }),
        ...makeJSCNode({ id: 2, size: 80, nameIndex: 1 }),
        ...makeJSCNode({ id: 3, size: 60, nameIndex: 2 }),
        ...makeJSCNode({ id: 4, size: 120, nameIndex: 3 }),
      ],
      nodeClassNames: [`<root>`, `Object`, `string`, `Function`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 1, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 0, to: 2, type: EDGE_PROPERTY, nameIndex: 1 }),
        ...makeJSCEdge({ from: 0, to: 3, type: EDGE_PROPERTY, nameIndex: 2 }),
        ...makeJSCEdge({ from: 0, to: 4, type: EDGE_PROPERTY, nameIndex: 3 }),
      ],
      edgeNames: [`ref`, `ref2`, `str`, `fn`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Object`, '%': `60.9%`, Size: `280 B`, Nodes: `2` },
        { Category: `Function`, '%': `26.1%`, Size: `120 B`, Nodes: `1` },
        { Category: `String`, '%': `13.0%`, Size: `60 B`, Nodes: `1` },
        { Category: `Internal`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
      ],
    ])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `60.9%`,
          Size: `280 B`,
          Instances: `2`,
          Constructor: `Object`,
        },
        {
          '%': `26.1%`,
          Size: `120 B`,
          Instances: `1`,
          Constructor: `Function`,
        },
      ],
    ])
    expect(selfSizeInstancesTables(md, `Object`)).toEqual([
      [{ '%': `100.0%`, Size: `280 B`, Instances: `2`, Path: `(GC root)` }],
    ])
    expect(largestStringsTables(md)).toEqual([
      [{ '%': `13.0%`, Size: `60 B`, Path: `(GC root)` }],
    ])
  })

  test(`Index edges use bracket notation`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 100, nameIndex: 1 }),
        ...makeJSCNode({ id: 2, size: 50, nameIndex: 2 }),
      ],
      nodeClassNames: [`root`, `Array`, `string`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 1, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 1, to: 2, type: EDGE_INDEX, nameIndex: 0 }),
      ],
      edgeNames: [`items`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(
      largestStringsTables(md).map(table => table.map(row => row.Path)),
    ).toEqual([[`[0] Array`]])
  })

  test(`edges reference nodes by identifier, not ordinal`, () => {
    // Node identifiers reflect allocation order, not the nodes' positions in
    // the flat array. Reading them as ordinals connects the wrong nodes, or
    // drops edges whose id exceeds the node count.
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 7, size: 100, nameIndex: 1 }),
        ...makeJSCNode({ id: 5, size: 50, nameIndex: 2 }),
      ],
      nodeClassNames: [`<root>`, `Holder`, `string`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 7, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 7, to: 5, type: EDGE_PROPERTY, nameIndex: 1 }),
      ],
      edgeNames: [`holder`, `data`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(
      largestStringsTables(md).map(table => table.map(row => row.Path)),
    ).toEqual([[`.data Holder`]])
  })

  test(`Internal edges carry no name`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 100, nameIndex: 1 }),
        ...makeJSCNode({ id: 2, size: 50, nameIndex: 2 }),
      ],
      nodeClassNames: [`<root>`, `Structure`, `string`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 1, type: EDGE_PROPERTY, nameIndex: 0 }),
        // An Internal edge's fourth field is unused, so it must not be read as
        // an index into `edgeNames`.
        ...makeJSCEdge({ from: 1, to: 2, type: EDGE_INTERNAL, nameIndex: 0 }),
      ],
      edgeNames: [`structure`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(
      largestStringsTables(md).map(table => table.map(row => row.Path)),
    ).toEqual([[`Structure`]])
  })

  test(`categorizes a constructor whose nodes all report zero self size by its first node`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 0, nameIndex: 1 }),
        ...makeJSCNode({
          id: 2,
          size: 0,
          nameIndex: 1,
          flags: NODE_INTERNAL,
        }),
        ...makeJSCNode({ id: 3, size: 1000, nameIndex: 2 }),
        ...makeJSCNode({ id: 4, size: 300, nameIndex: 3 }),
      ],
      nodeClassNames: [`<root>`, `Widget`, `Payload`, `string`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 1, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 0, to: 2, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 0, to: 3, type: EDGE_PROPERTY, nameIndex: 0 }),
        ...makeJSCEdge({ from: 1, to: 4, type: EDGE_PROPERTY, nameIndex: 0 }),
      ],
      edgeNames: [`ref`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    // `Widget` holds no bytes of its own, so no node of it outweighs another.
    expect(categorySectionTables(md, `Retained size`)).toEqual({
      Object: [
        {
          '%': `76.9%`,
          Size: `1,000 B`,
          Instances: `1`,
          Constructor: `Payload`,
        },
        { '%': `23.1%`, Size: `300 B`, Instances: `2`, Constructor: `Widget` },
      ],
    })
  })

  test(`out-of-bounds edge ordinal does not crash`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 100, nameIndex: 0 }),
      ],
      nodeClassNames: [`Object`],
      edges: makeJSCEdge({ from: 0, to: 99, type: 1, nameIndex: 0 }),
      edgeNames: [`ref`],
    })

    expect(() =>
      convertJsonToMd(
        jscHeapSnapshotFormatSpec,
        snapshot,
        normalizeProfileToMdOptions(),
      ),
    ).not.toThrow()
  })

  test(`all four edge types are formatted with correct notation`, () => {
    const snapshot = makeJSCSnapshot({
      nodes: [
        ...makeJSCNode({ id: 0, size: 0, nameIndex: 0, flags: NODE_INTERNAL }),
        ...makeJSCNode({ id: 1, size: 0, nameIndex: 0 }),
        ...makeJSCNode({ id: 2, size: 10, nameIndex: 0 }),
        ...makeJSCNode({ id: 3, size: 10, nameIndex: 0 }),
        ...makeJSCNode({ id: 4, size: 10, nameIndex: 0 }),
      ],
      nodeClassNames: [`Object`],
      edges: [
        ...makeJSCEdge({ from: 0, to: 1, type: EDGE_INTERNAL, nameIndex: 0 }),
        ...makeJSCEdge({ from: 1, to: 2, type: EDGE_PROPERTY, nameIndex: 1 }),
        ...makeJSCEdge({ from: 1, to: 3, type: EDGE_INDEX, nameIndex: 2 }),
        ...makeJSCEdge({ from: 1, to: 4, type: EDGE_VARIABLE, nameIndex: 2 }),
      ],
      edgeNames: [`internalProp`, `propName`, `varName`],
    })

    const md = convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      snapshot,
      normalizeProfileToMdOptions(),
    )

    expect(
      selfSizeInstancesTables(md, `Object`).map(table =>
        table.map(row => row.Path),
      ),
    ).toEqual([
      [`.propName Object`, `[2] Object`, `.varName Object`, `(GC root)`],
    ])
  })
})

describe(`malformed snapshots`, () => {
  const snapshot = makeJSCSnapshot({
    nodes: [
      ...makeJSCNode({ id: 0, size: 0, nameIndex: 0 }),
      ...makeJSCNode({ id: 1, size: 16, nameIndex: 1 }),
    ],
    nodeClassNames: [`<root>`, `Foo`],
    edges: makeJSCEdge({ from: 0, to: 1, type: EDGE_INTERNAL, nameIndex: 0 }),
    edgeNames: [],
  })
  const convert = (json: unknown) =>
    convertJsonToMd(
      jscHeapSnapshotFormatSpec,
      json,
      normalizeProfileToMdOptions(),
    )

  test(`rejects a GCDebugging snapshot, which auto-detection recognizes`, () => {
    const gcDebugging = { ...snapshot, type: `GCDebugging` }

    expect(jscHeapSnapshotFormatSpec.matches(gcDebugging)).toBe(true)
    expect(() => convert(gcDebugging)).toThrow(
      `unsupported snapshot type, got: GCDebugging`,
    )
  })

  test(`leaves a node with a missing class name out of the constructors, with a warning`, () => {
    const md = convert(
      makeJSCSnapshot({
        nodes: [
          ...makeJSCNode({ id: 0, size: 0, nameIndex: 0 }),
          ...makeJSCNode({ id: 1, size: 16, nameIndex: 1 }),
          ...makeJSCNode({ id: 2, size: 48, nameIndex: 7 }),
        ],
        nodeClassNames: [`<root>`, `Foo`],
        edges: [
          ...makeJSCEdge({ from: 0, to: 1, type: EDGE_INTERNAL, nameIndex: 0 }),
          ...makeJSCEdge({ from: 0, to: 2, type: EDGE_INTERNAL, nameIndex: 0 }),
        ],
        edgeNames: [],
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Object`, '%': `100.0%`, Size: `64 B`, Nodes: `2` },
        { Category: `Internal`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
      ],
    ])
    expect(selfSizeTables(md)).toEqual([
      [{ '%': `25.0%`, Size: `16 B`, Instances: `1`, Constructor: `Foo` }],
    ])
    expectLogs([
      `debug: origin candidates, in priority order: bun, safari`,
      `info: fallback origin: safari`,
      `debug: no entry marked another origin`,
      `warn: skipped 1 class name reference matching no entry in nodeClassNames`,
    ])
  })
})
