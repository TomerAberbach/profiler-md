/* eslint-disable no-irregular-whitespace */

import { expect, test } from 'vitest'
import { v8HeapSnapshotToMd } from './index.ts'

const NODE_TYPE_STRING = 2
const NODE_TYPE_OBJECT = 3
const NODE_TYPE_CODE = 4
const NODE_TYPE_CLOSURE = 5
const NODE_TYPE_SYNTHETIC = 9

const EDGE_TYPE_INTERNAL = 3
const EDGE_TYPE_HIDDEN = 4

const makeSnapshot = ({
  nodes,
  edges,
  strings,
  locations = [],
  nodeCount,
  edgeCount,
}: {
  nodes: number[]
  edges: number[]
  strings: string[]
  locations?: number[]
  nodeCount: number
  edgeCount: number
}) =>
  JSON.stringify({
    snapshot: {
      meta: {
        node_fields: [
          `type`,
          `name`,
          `id`,
          `self_size`,
          `edge_count`,
          `detachedness`,
        ],
        node_types: [
          [
            `hidden`,
            `array`,
            `string`,
            `object`,
            `code`,
            `closure`,
            `regexp`,
            `number`,
            `native`,
            `synthetic`,
            `concatenated string`,
            `sliced string`,
            `symbol`,
            `bigint`,
            `object shape`,
          ],
          `string`,
          `number`,
          `number`,
          `number`,
          `number`,
        ],
        edge_fields: [`type`, `name_or_index`, `to_node`],
        edge_types: [
          [
            `context`,
            `element`,
            `property`,
            `internal`,
            `hidden`,
            `shortcut`,
            `weak`,
          ],
          `string_or_number`,
          `node`,
        ],
        location_fields: [`object_index`, `script_id`, `line`, `column`],
      },
      node_count: nodeCount,
      edge_count: edgeCount,
      trace_function_count: 0,
      extra_native_bytes: 0,
    },
    nodes,
    edges,
    strings,
    locations,
    trace_function_infos: [],
    trace_tree: [],
    samples: [],
  })

test(`v8HeapSnapshotToMd renders all five sections`, () => {
  // 8 nodes, 10 edges, location on the closure enabling an Instances sub-table.
  // The DetachedClass object has detachedness=1 to populate the detached section.
  //
  // Node layout (6 fields each: type, name, id, self_size, edge_count, detachedness):
  //   0: synthetic root  — edges to all other reachable nodes
  //   1: object  MyClass        200 B
  //   2: closure myFn            64 B  (location: scriptId=1, line=5, col=10)
  //   3: string  "hello world"  110 B
  //   4: object  DetachedClass   80 B  detached=1
  //   5: code    myFn (SFI)      48 B  — SharedFunctionInfo for the closure
  //   6: synthetic (Script)             — intermediate node for script name resolution
  //   7: string  "" (script name, 0 B) — "file:///project/src/a.ts"
  //
  // Script name resolution path for the closure:
  //   node2 -[internal "shared"]-> node5 -[internal "script"]-> node6 -[internal "name"]-> node7
  const snapshot = makeSnapshot({
    nodeCount: 8,
    edgeCount: 10,
    nodes: [
      NODE_TYPE_SYNTHETIC,
      0,
      1,
      0,
      5,
      0, // Root
      NODE_TYPE_OBJECT,
      1,
      3,
      200,
      0,
      0, // `MyClass`
      NODE_TYPE_CLOSURE,
      2,
      5,
      64,
      3,
      0, // `myFn` closure
      NODE_TYPE_STRING,
      3,
      7,
      110,
      0,
      0, // "hello world"
      NODE_TYPE_OBJECT,
      4,
      9,
      80,
      0,
      1, // `DetachedClass`
      NODE_TYPE_CODE,
      2,
      11,
      48,
      1,
      0, // `SharedFunctionInfo`
      NODE_TYPE_SYNTHETIC,
      5,
      13,
      0,
      1,
      0, // `Script`
      NODE_TYPE_STRING,
      6,
      15,
      0,
      0,
      0, // Script name
    ],
    edges: [
      EDGE_TYPE_HIDDEN,
      0,
      6, // Root -> `MyClass` (flat 6)
      EDGE_TYPE_HIDDEN,
      0,
      12, // Root -> `myFn` (flat 12)
      EDGE_TYPE_HIDDEN,
      0,
      18, // Root -> string (flat 18)
      EDGE_TYPE_HIDDEN,
      0,
      24, // Root -> `DetachedClass` (flat 24)
      EDGE_TYPE_HIDDEN,
      0,
      30, // Root -> SFI (flat 30)
      EDGE_TYPE_INTERNAL,
      7,
      30, // `myFn` -[shared]-> SFI
      EDGE_TYPE_HIDDEN,
      0,
      36, // `myFn` filler
      EDGE_TYPE_HIDDEN,
      0,
      36, // `myFn` filler
      EDGE_TYPE_INTERNAL,
      8,
      36, // SFI -[script]-> Script
      EDGE_TYPE_INTERNAL,
      9,
      42, // Script -[name]-> script name
    ],
    strings: [
      ``, // 0: root name / filler
      `MyClass`, // 1
      `myFn`, // 2
      `hello world`, // 3
      `DetachedClass`, // 4
      `(Script)`, // 5
      `file:///project/src/a.ts`, // 6: script name
      `shared`, // 7: edge name
      `script`, // 8: edge name
      `name`, // 9: edge name
    ],
    // Closure (flat=12) at scriptId=1, line=5, col=10
    locations: [12, 1, 5, 10],
  })

  const markdown = v8HeapSnapshotToMd(snapshot, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap snapshot

    Allocated 502 B across 8 objects and 10 references.

    | Category  |     % |  Size | Objects |
    | --------- | ----: | ----: | ------: |
    | object    | 55.8% | 280 B |       2 |
    | string    | 21.9% | 110 B |       2 |
    | closure   | 12.7% |  64 B |       1 |
    | code      |  9.6% |  48 B |       1 |
    | synthetic |  0.0% |   0 B |       2 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    |     % |  Size | Instances | Constructor     | Location   |
    | ----: | ----: | --------: | --------------- | ---------- |
    | 39.8% | 200 B |         1 | \`MyClass\`       | \`<native>\` |
    | 15.9% |  80 B |         1 | \`DetachedClass\` | \`<native>\` |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`MyClass\` (\`<native>\`)

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 200 B |         1 | \`(GC root)\` |

    ##### \`DetachedClass\` (\`<native>\`)

    |      % | Size | Instances | Path        |
    | -----: | ---: | --------: | ----------- |
    | 100.0% | 80 B |         1 | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    |     % |  Size | Instances | Constructor     | Location   |
    | ----: | ----: | --------: | --------------- | ---------- |
    | 39.8% | 200 B |         1 | \`MyClass\`       | \`<native>\` |
    | 15.9% |  80 B |         1 | \`DetachedClass\` | \`<native>\` |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`MyClass\` (\`<native>\`)

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 200 B |         1 | \`(GC root)\` |

    ##### \`DetachedClass\` (\`<native>\`)

    |      % | Size | Instances | Path        |
    | -----: | ---: | --------: | ----------- |
    | 100.0% | 80 B |         1 | \`(GC root)\` |

    ## Largest closures

    Closures ranked by bytes that would be freed if the closure were garbage collected.

    |     % | Retained | Instances | Paths | Name   | Location      | Example path |
    | ----: | -------: | --------: | ----: | ------ | ------------- | ------------ |
    | 12.7% |     64 B |         1 |     1 | \`myFn\` | src/a.ts:6:11 | \`(GC root)\`  |

    ## Largest strings

    Strings ranked by bytes allocated for them.

    |     % |  Size | Value                      | Path        |
    | ----: | ----: | -------------------------- | ----------- |
    | 21.9% | 110 B | \`hello world\`              | \`(GC root)\` |
    |  0.0% |   0 B | \`file:///project/src/a.ts\` | \`(GC root)\` |
    "
  `)
})

test(`v8HeapSnapshotToMd omits detached section when there are no detached objects`, () => {
  const snapshot = makeSnapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      NODE_TYPE_SYNTHETIC,
      0,
      1,
      0,
      2,
      0, // Root
      NODE_TYPE_OBJECT,
      1,
      3,
      100,
      0,
      0, // `MyClass`
      NODE_TYPE_STRING,
      2,
      5,
      50,
      0,
      0, // "hi"
    ],
    edges: [
      EDGE_TYPE_HIDDEN,
      0,
      6, // Root -> `MyClass`
      EDGE_TYPE_HIDDEN,
      0,
      12, // Root -> string
    ],
    strings: [``, `MyClass`, `hi`],
  })

  const markdown = v8HeapSnapshotToMd(snapshot, { cwd: `/project` })

  expect(markdown).not.toContain(`## Detached objects`)
})
