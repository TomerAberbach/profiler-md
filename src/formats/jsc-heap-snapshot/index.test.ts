import { describe, expect, test } from 'vitest'
import {
  categoryTables,
  largestStringsTables,
  selfSizeInstancesTables,
  selfSizeTables,
} from '../../testing/markdown.ts'
import { detectJSCHeapSnapshot, jscHeapSnapshotToMd } from './index.ts'
import type { JSCHeapSnapshot } from './parse.ts'

// Node flags
const NODE_INTERNAL = 0b0001

// Edge types
const EDGE_INTERNAL = 0
const EDGE_PROPERTY = 1
const EDGE_INDEX = 2
const EDGE_VARIABLE = 3

const makeJSCNode = ({
  id,
  size,
  nameIndex,
  flags = 0b0000,
}: {
  id: number
  size: number
  nameIndex: number
  flags?: number
}): number[] => [id, size, nameIndex, flags]

const makeJSCEdge = ({
  from,
  to,
  type,
  nameIndex,
}: {
  from: number
  to: number
  type: number
  nameIndex: number
}): number[] => [from, to, type, nameIndex]

const makeJSCSnapshot = ({
  nodes,
  nodeClassNames,
  edges,
  edgeTypes = [`Internal`, `Property`, `Index`, `Variable`],
  edgeNames,
}: {
  nodes: number[]
  nodeClassNames: string[]
  edges: number[]
  edgeTypes?: string[]
  edgeNames: string[]
}): JSCHeapSnapshot => ({
  version: 2,
  type: `Inspector`,
  nodes,
  nodeClassNames,
  edges,
  edgeTypes,
  edgeNames,
})

describe(`detect`, () => {
  test(`accepts valid snapshot`, () => {
    expect(
      detectJSCHeapSnapshot({
        version: 2,
        type: `Inspector`,
        nodes: [],
        nodeClassNames: [],
        edges: [],
        edgeTypes: [],
        edgeNames: [],
      }),
    ).toBeDefined()
  })

  test(`rejects null`, () => {
    expect(detectJSCHeapSnapshot(null)).toBeUndefined()
  })

  test(`rejects non-objects`, () => {
    expect(detectJSCHeapSnapshot(`string`)).toBeUndefined()
  })

  test(`rejects wrong version`, () => {
    expect(
      detectJSCHeapSnapshot({ version: 1, type: `Inspector`, nodes: [] }),
    ).toBeUndefined()
  })

  test(`rejects wrong type`, () => {
    expect(
      detectJSCHeapSnapshot({ version: 2, type: `V8`, nodes: [] }),
    ).toBeUndefined()
  })

  test(`rejects V8 format`, () => {
    expect(
      detectJSCHeapSnapshot({
        snapshot: { meta: { node_fields: [] } },
        edges: [],
      }),
    ).toBeUndefined()
  })
})

describe(`convert`, () => {
  test(`renders all sections`, () => {
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

    const md = jscHeapSnapshotToMd(JSON.stringify(snapshot))

    expect(categoryTables(md)).toEqual([
      [
        { Category: `object`, '%': `60.9%`, Size: `280 B`, Nodes: `2` },
        { Category: `closure`, '%': `26.1%`, Size: `120 B`, Nodes: `1` },
        { Category: `string`, '%': `13.0%`, Size: `60 B`, Nodes: `1` },
        { Category: `internal`, '%': `0.0%`, Size: `0 B`, Nodes: `1` },
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

    const md = jscHeapSnapshotToMd(JSON.stringify(snapshot))

    expect(
      largestStringsTables(md).map(table => table.map(row => row.Path)),
    ).toEqual([[`[0] Array`]])
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

    expect(() => jscHeapSnapshotToMd(JSON.stringify(snapshot))).not.toThrow()
  })

  test(`all four edge types render correct notation`, () => {
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

    const md = jscHeapSnapshotToMd(JSON.stringify(snapshot))

    expect(
      selfSizeInstancesTables(md, `Object`).map(table =>
        table.map(row => row.Path),
      ),
    ).toEqual([
      [`.propName Object`, `[2] Object`, `.varName Object`, `(GC root)`],
    ])
  })
})
