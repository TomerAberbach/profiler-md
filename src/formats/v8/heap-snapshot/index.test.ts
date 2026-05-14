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

test(`v8HeapSnapshotToMd renders all sections`, () => {
  // 7 nodes, 9 edges, location on the closure enabling an Instances sub-table.
  //
  // Node layout (6 fields each: type, name, id, self_size, edge_count, detachedness):
  //   0: synthetic root               edges to all other reachable nodes
  //   1: object  MyClass       200 B
  //   2: closure myFn           64 B  (location: scriptId=1, line=5, col=10)
  //   3: string  "hello world" 110 B
  //   4: code    myFn (SFI)     48 B  SharedFunctionInfo for the closure
  //   5: synthetic (Script)           intermediate node for script name resolution
  //   6: string  "" (script name, 0 B) "file:///project/src/a.ts"
  //
  // Script name resolution path for the closure:
  //   node2 -[internal "shared"]-> node4 -[internal "script"]-> node5 -[internal "name"]-> node6
  const snapshot = makeSnapshot({
    nodeCount: 7,
    edgeCount: 9,
    nodes: [
      NODE_TYPE_SYNTHETIC,
      0,
      1,
      0,
      4,
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
      NODE_TYPE_CODE,
      2,
      11,
      48,
      1,
      0, // `SharedFunctionInfo`
      NODE_TYPE_SYNTHETIC,
      4,
      13,
      0,
      1,
      0, // `Script`
      NODE_TYPE_STRING,
      5,
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
      24, // Root -> SFI (flat 24)
      EDGE_TYPE_INTERNAL,
      6,
      24, // `myFn` -[shared]-> SFI
      EDGE_TYPE_HIDDEN,
      0,
      30, // `myFn` filler
      EDGE_TYPE_HIDDEN,
      0,
      30, // `myFn` filler
      EDGE_TYPE_INTERNAL,
      7,
      30, // SFI -[script]-> Script
      EDGE_TYPE_INTERNAL,
      8,
      36, // Script -[name]-> script name
    ],
    strings: [
      ``, // 0: root name / filler
      `MyClass`, // 1
      `myFn`, // 2
      `hello world`, // 3
      `(Script)`, // 4
      `file:///project/src/a.ts`, // 5: script name
      `shared`, // 6: edge name
      `script`, // 7: edge name
      `name`, // 8: edge name
    ],
    // Closure (flat=12) at scriptId=1, line=5, col=10
    locations: [12, 1, 5, 10],
  })

  const markdown = v8HeapSnapshotToMd(snapshot, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap snapshot

    Allocated 422 B across 7 nodes and 9 edges.

    | Category  |     % |  Size | Nodes |
    | --------- | ----: | ----: | ----: |
    | object    | 47.4% | 200 B |     1 |
    | string    | 26.1% | 110 B |     2 |
    | closure   | 15.2% |  64 B |     1 |
    | code      | 11.4% |  48 B |     1 |
    | synthetic |  0.0% |   0 B |     2 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

    |     % |  Size | Instances | Constructor | Location   |
    | ----: | ----: | --------: | ----------- | ---------- |
    | 47.4% | 200 B |         1 | \`MyClass\`   | \`<native>\` |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`MyClass\` (\`<native>\`)

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 200 B |         1 | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

    |     % |  Size | Instances | Constructor | Location   |
    | ----: | ----: | --------: | ----------- | ---------- |
    | 47.4% | 200 B |         1 | \`MyClass\`   | \`<native>\` |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`MyClass\` (\`<native>\`)

    |      % |  Size | Instances | Path        |
    | -----: | ----: | --------: | ----------- |
    | 100.0% | 200 B |         1 | \`(GC root)\` |

    ## Largest closures

    Closures ranked by bytes that would be freed if the closure were garbage collected.

    |     % | Retained | Instances | Paths | Name   | Location      | Example path |
    | ----: | -------: | --------: | ----: | ------ | ------------- | ------------ |
    | 15.2% |     64 B |         1 |     1 | \`myFn\` | src/a.ts:6:11 | \`(GC root)\`  |

    ## Largest strings

    Strings ranked by bytes allocated for them.

    |     % |  Size | Value                      | Path        |
    | ----: | ----: | -------------------------- | ----------- |
    | 26.1% | 110 B | \`hello world\`              | \`(GC root)\` |
    |  0.0% |   0 B | \`file:///project/src/a.ts\` | \`(GC root)\` |
    "
  `)
})
