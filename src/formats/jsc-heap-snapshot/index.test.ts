/* eslint-disable no-irregular-whitespace */

import { expect, test } from 'vitest'
import { detectJSCHeapSnapshot, jscHeapSnapshotToMd } from './index.ts'

// JSC node flags
const FLAG_NONE = 0b0000
const FLAG_INTERNAL = 0b0001

// JSC node field layout: [id, size, classNameIndex, flags]
// JSC edge field layout: [fromOrdinal, toOrdinal, edgeType, edgeNameIndex]

const makeSnapshot = ({
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
}) =>
  JSON.stringify({
    version: 2,
    type: `Inspector`,
    nodes,
    nodeClassNames,
    edges,
    edgeTypes,
    edgeNames,
  })

test(`jscHeapSnapshotToMd renders all sections`, () => {
  // 5 nodes, 4 edges
  //
  // Node layout (4 fields: id, size, classNameIndex, flags):
  //   0: root      0 B    internal: GC root, no predecessors
  //   1: Object  200 B
  //   2: Object   80 B
  //   3: string   60 B
  //   4: Function 120 B
  //
  // Edges: root -> each child via Property
  const CLASS_ROOT = 0
  const CLASS_OBJECT = 1
  const CLASS_STRING = 2
  const CLASS_FUNCTION = 3

  const EDGE_PROPERTY = 1

  const snapshot = makeSnapshot({
    nodes: [
      0,
      0,
      CLASS_ROOT,
      FLAG_INTERNAL, // Ordinal 0: GC root (internal)
      1,
      200,
      CLASS_OBJECT,
      FLAG_NONE, // Ordinal 1: Object 200B
      2,
      80,
      CLASS_OBJECT,
      FLAG_NONE, // Ordinal 2: Object 80B
      3,
      60,
      CLASS_STRING,
      FLAG_NONE, // Ordinal 3: string 60B
      4,
      120,
      CLASS_FUNCTION,
      FLAG_NONE, // Ordinal 4: Function 120B
    ],
    nodeClassNames: [`<root>`, `Object`, `string`, `Function`],
    edges: [
      0,
      1,
      EDGE_PROPERTY,
      0, // Root -> Object(1) via "ref"
      0,
      2,
      EDGE_PROPERTY,
      1, // Root -> Object(2) via "ref2"
      0,
      3,
      EDGE_PROPERTY,
      2, // Root -> string(3) via "str"
      0,
      4,
      EDGE_PROPERTY,
      3, // Root -> Function(4) via "fn"
    ],
    edgeNames: [`ref`, `ref2`, `str`, `fn`],
  })

  const markdown = jscHeapSnapshotToMd(snapshot)

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap snapshot

    Allocated 460 B across 5 objects and 4 references.

    | Category |     % |  Size | Objects |
    | -------- | ----: | ----: | ------: |
    | object   | 60.9% | 280 B |       2 |
    | closure  | 26.1% | 120 B |       1 |
    | string   | 13.0% |  60 B |       1 |
    | internal |  0.0% |   0 B |       1 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    |     % |  Size | Instances | Constructor |
    | ----: | ----: | --------: | ----------- |
    | 60.9% | 280 B |         2 | \`Object\`    |
    | 26.1% | 120 B |         1 | \`Function\`  |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`Object\`

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 280 B |         2 | \`(GC root)\` |

    ##### \`Function\`

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 120 B |         1 | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    |     % |  Size | Instances | Constructor |
    | ----: | ----: | --------: | ----------- |
    | 60.9% | 280 B |         2 | \`Object\`    |
    | 26.1% | 120 B |         1 | \`Function\`  |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`Object\`

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 280 B |         2 | \`(GC root)\` |

    ##### \`Function\`

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 120 B |         1 | \`(GC root)\` |

    ## Largest strings

    Strings ranked by bytes allocated for them.

    |     % | Size | Path        |
    | ----: | ---: | ----------- |
    | 13.0% | 60 B | \`(GC root)\` |
    "
  `)
})

test(`jscHeapSnapshotToMd uses bracket notation for Index edges`, () => {
  // Root -> Array -> string element[0]
  const CLASS_ROOT = 0
  const CLASS_ARRAY = 1
  const CLASS_STRING = 2

  const EDGE_PROPERTY = 1
  const EDGE_INDEX = 2

  const snapshot = makeSnapshot({
    nodes: [
      0,
      0,
      CLASS_ROOT,
      FLAG_INTERNAL,
      1,
      100,
      CLASS_ARRAY,
      FLAG_NONE,
      2,
      50,
      CLASS_STRING,
      FLAG_NONE,
    ],
    nodeClassNames: [`root`, `Array`, `string`],
    edges: [
      0,
      1,
      EDGE_PROPERTY,
      0, // Root -> Array via "items"
      1,
      2,
      EDGE_INDEX,
      0, // Array -> string via [0]
    ],
    edgeNames: [`items`],
  })

  const markdown = jscHeapSnapshotToMd(snapshot)

  // String's retainer path goes through Array via index notation
  expect(markdown).toContain(`[0] Array`)
})

test(`detectJSCHeapSnapshot accepts valid snapshot`, () => {
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

test(`detectJSCHeapSnapshot rejects null`, () => {
  expect(detectJSCHeapSnapshot(null)).toBeUndefined()
})

test(`detectJSCHeapSnapshot rejects non-objects`, () => {
  expect(detectJSCHeapSnapshot(`string`)).toBeUndefined()
})

test(`detectJSCHeapSnapshot rejects wrong version`, () => {
  expect(
    detectJSCHeapSnapshot({ version: 1, type: `Inspector`, nodes: [] }),
  ).toBeUndefined()
})

test(`detectJSCHeapSnapshot rejects wrong type`, () => {
  expect(
    detectJSCHeapSnapshot({ version: 2, type: `V8`, nodes: [] }),
  ).toBeUndefined()
})

test(`detectJSCHeapSnapshot rejects V8 format`, () => {
  expect(
    detectJSCHeapSnapshot({
      snapshot: { meta: { node_fields: [] } },
      edges: [],
    }),
  ).toBeUndefined()
})
