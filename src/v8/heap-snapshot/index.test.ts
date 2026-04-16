import fs from 'node:fs/promises'
import { expect, test } from 'vitest'
import { fixturePath } from '../../testing/fixtures.ts'
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

    Allocated 502 B across 8 objects and 10 references.

    | Category  | Self % |  Self | Count |
    | --------- | -----: | ----: | ----: |
    | object    |  55.8% | 280 B |     2 |
    | string    |  21.9% | 110 B |     2 |
    | closure   |  12.7% |  64 B |     1 |
    | code      |   9.6% |  48 B |     1 |
    | synthetic |   0.0% |   0 B |     2 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    | Self % |  Self | Retained % | Retained | Instances | Constructor     | Location |
    | -----: | ----: | ---------: | -------: | --------: | --------------- | -------- |
    |  39.8% | 200 B |      39.8% |    200 B |         1 | \`MyClass\`       | [native] |
    |  15.9% |  80 B |      15.9% |     80 B |         1 | \`DetachedClass\` | [native] |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`MyClass\` ([native])

    | Self % |  Self | Retained % | Retained | Path        |
    | -----: | ----: | ---------: | -------: | ----------- |
    | 100.0% | 200 B |     100.0% |    200 B | \`(GC root)\` |

    ##### \`DetachedClass\` ([native])

    | Self % | Self | Retained % | Retained | Path        |
    | -----: | ---: | ---------: | -------: | ----------- |
    | 100.0% | 80 B |     100.0% |     80 B | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    | Retained % | Retained | Self % |  Self | Constructor     | Location |
    | ---------: | -------: | -----: | ----: | --------------- | -------- |
    |      39.8% |    200 B |  39.8% | 200 B | \`MyClass\`       | [native] |
    |      15.9% |     80 B |  15.9% |  80 B | \`DetachedClass\` | [native] |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`MyClass\` ([native])

    | Retained % | Retained | Self % |  Self | Path        |
    | ---------: | -------: | -----: | ----: | ----------- |
    |     100.0% |    200 B | 100.0% | 200 B | \`(GC root)\` |

    ##### \`DetachedClass\` ([native])

    | Retained % | Retained | Self % | Self | Path        |
    | ---------: | -------: | -----: | ---: | ----------- |
    |     100.0% |     80 B | 100.0% | 80 B | \`(GC root)\` |
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

test(`v8HeapSnapshotToMd with real fixture`, async () => {
  const text = await fs.readFile(fixturePath(`example.heapsnapshot`))
  const markdown = v8HeapSnapshotToMd(text, {
    cwd: `/Users/tomer/Documents/work/code/quetie`,
    topN: 5,
  })
  expect(markdown).toMatchInlineSnapshot(`
    "# Heap snapshot

    Allocated 11.4 MB across 60,157 objects and 233,425 references.

    | Category            | Self % |    Self |  Count |
    | ------------------- | -----: | ------: | -----: |
    | string              |  49.0% | 5.58 MB | 15,784 |
    | native              |  23.8% | 2.71 MB |    184 |
    | array               |   7.2% |  824 kB |  1,594 |
    | code                |   7.1% |  813 kB | 16,346 |
    | object shape        |   3.9% |  442 kB |  4,618 |
    | closure             |   3.0% |  345 kB |  5,836 |
    | hidden              |   2.3% |  267 kB |  5,389 |
    | object              |   1.9% |  221 kB |  3,871 |
    | concatenated string |   1.5% |  166 kB |  5,192 |
    | number              |   0.1% | 16.8 kB |  1,060 |
    | symbol              |   0.0% | 4.32 kB |    196 |
    | regexp              |   0.0% |  2.8 kB |     50 |
    | synthetic           |   0.0% | 2.59 kB |     33 |
    | sliced string       |   0.0% |    64 B |      2 |
    | bigint              |   0.0% |    48 B |      2 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    | Self % |    Self | Retained % | Retained | Instances | Constructor   | Location |
    | -----: | ------: | ---------: | -------: | --------: | ------------- | -------- |
    |   0.7% |   83 kB |      35.4% |  4.03 MB |     1,782 | \`Object\`      | [native] |
    |   0.1% | 8.99 kB |       4.1% |   469 kB |       281 | \`Array\`       | [native] |
    |   0.0% | 5.11 kB |       1.1% |   121 kB |       197 | \`Error\`       | [native] |
    |   0.0% | 3.61 kB |      23.7% |   2.7 MB |        38 | \`ArrayBuffer\` | [native] |
    |   0.0% | 2.33 kB |       0.5% |  59.8 kB |        97 | \`TypeError\`   | [native] |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`Object\` ([native])

    | Self % |  Self | Retained % | Retained | Path                                                                                                                                                   |
    | -----: | ----: | ---------: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
    |   1.1% | 872 B |       0.9% |    38 kB | \`.variables Object ← .config process\`                                                                                                                  |
    |   0.6% | 512 B |       0.3% |  12.9 kB | \`.exports BuiltinModule (node:internal/bootstrap/realm:236:14) ← .1139 array ← .table Map ← .map BuiltinModule (node:internal/bootstrap/realm:236:14)\` |

    ##### \`Array\` ([native])

    | Self % | Self | Retained % | Retained | Path        |
    | -----: | ---: | ---------: | -------: | ----------- |
    |   0.4% | 32 B |       0.0% |     32 B | \`(GC root)\` |
    |   0.4% | 32 B |       5.7% |  26.5 kB | \`(GC root)\` |

    ##### \`Error\` ([native])

    | Self % | Self | Retained % | Retained | Path        |
    | -----: | ---: | ---------: | -------: | ----------- |
    |   1.1% | 56 B |       0.3% |    304 B | \`(GC root)\` |
    |   1.1% | 56 B |       0.3% |    304 B | \`(GC root)\` |

    ##### \`ArrayBuffer\` ([native])

    | Self % | Self | Retained % | Retained | Path                   |
    | -----: | ---: | ---------: | -------: | ---------------------- |
    |   2.7% | 96 B |       0.0% |     98 B | \`(GC root)\`            |
    |   2.7% | 96 B |       0.0% |    352 B | \`.buffer Float64Array\` |

    ##### \`TypeError\` ([native])

    | Self % | Self | Retained % | Retained | Path        |
    | -----: | ---: | ---------: | -------: | ----------- |
    |   1.0% | 24 B |       1.1% |    656 B | \`(GC root)\` |
    |   1.0% | 24 B |       1.1% |    656 B | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    | Retained % | Retained | Self % |    Self | Constructor   | Location          |
    | ---------: | -------: | -----: | ------: | ------------- | ----------------- |
    |      35.4% |  4.03 MB |   0.7% |   83 kB | \`Object\`      | [native]          |
    |      23.7% |   2.7 MB |   0.0% | 3.61 kB | \`ArrayBuffer\` | [native]          |
    |       4.1% |   469 kB |   0.1% | 8.99 kB | \`Array\`       | [native]          |
    |       2.5% |   286 kB |   0.0% |   840 B | \`Map\`         | [native]          |
    |       1.7% |   194 kB |   0.0% |   648 B | \`Queue\`       | src/index.js:2:14 |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`Object\` ([native])

    | Retained % | Retained | Self % | Self | Path                                              |
    | ---------: | -------: | -----: | ---: | ------------------------------------------------- |
    |      74.9% |  3.02 MB |   0.1% | 56 B | \`.import_wasm system / Context\`                   |
    |      74.5% |     3 MB |   0.1% | 56 B | \`.default Object ← .import_wasm system / Context\` |

    ##### \`ArrayBuffer\` ([native])

    | Retained % | Retained | Self % | Self | Path                                              |
    | ---------: | -------: | -----: | ---: | ------------------------------------------------- |
    |      99.5% |  2.69 MB |   2.7% | 96 B | \`.default Object ← .import_wasm system / Context\` |
    |       0.3% |  8.46 kB |   2.7% | 96 B | \`(GC root)\`                                       |

    ##### \`Array\` ([native])

    | Retained % | Retained | Self % | Self | Path                               |
    | ---------: | -------: | -----: | ---: | ---------------------------------- |
    |      35.6% |   167 kB |   0.4% | 32 B | \`._data Queue (src/index.js:2:14)\` |
    |      18.9% |  88.4 kB |   0.4% | 32 B | \`._data Deque (src/index.js:68:8)\` |

    ##### \`Map\` ([native])

    | Retained % | Retained | Self % | Self | Path                                                        |
    | ---------: | -------: | -----: | ---: | ----------------------------------------------------------- |
    |      82.4% |   236 kB |   3.8% | 32 B | \`.map BuiltinModule (node:internal/bootstrap/realm:236:14)\` |
    |       5.0% |  14.4 kB |   3.8% | 32 B | \`.messages system / Context\`                                |

    ##### \`Queue\` (src/index.js:2:14)

    | Retained % | Retained | Self % | Self | Path        |
    | ---------: | -------: | -----: | ---: | ----------- |
    |      86.1% |   167 kB |   7.4% | 48 B | \`(GC root)\` |
    |       2.2% |  4.19 kB |   7.4% | 48 B | \`(GC root)\` |
    "
  `)
})
