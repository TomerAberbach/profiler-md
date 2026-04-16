/* eslint-disable no-irregular-whitespace */

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

    |      % |  Size | Path        |
    | -----: | ----: | ----------- |
    | 100.0% | 200 B | \`(GC root)\` |

    ##### \`DetachedClass\` (\`<native>\`)

    |      % | Size | Path        |
    | -----: | ---: | ----------- |
    | 100.0% | 80 B | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    |     % |  Size | Constructor     | Location   |
    | ----: | ----: | --------------- | ---------- |
    | 39.8% | 200 B | \`MyClass\`       | \`<native>\` |
    | 15.9% |  80 B | \`DetachedClass\` | \`<native>\` |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`MyClass\` (\`<native>\`)

    |      % |  Size | Path        |
    | -----: | ----: | ----------- |
    | 100.0% | 200 B | \`(GC root)\` |

    ##### \`DetachedClass\` (\`<native>\`)

    |      % | Size | Path        |
    | -----: | ---: | ----------- |
    | 100.0% | 80 B | \`(GC root)\` |
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

    Allocated 272 MB across 1,792,439 objects and 7,746,182 references.

    | Category            |     % |    Size | Objects |
    | ------------------- | ----: | ------: | ------: |
    | string              | 28.8% | 78.4 MB | 299,595 |
    | native              | 26.8% | 72.9 MB |   2,435 |
    | code                | 15.0% | 40.8 MB | 354,918 |
    | array               | 11.0% | 29.9 MB | 158,724 |
    | object              |  8.7% | 23.7 MB | 487,315 |
    | closure             |  3.7% | 9.94 MB | 172,859 |
    | object shape        |  2.9% |    8 MB |  86,186 |
    | hidden              |  1.6% | 4.35 MB |  92,905 |
    | concatenated string |  1.2% | 3.23 MB | 101,084 |
    | sliced string       |  0.3% |  879 kB |  27,463 |
    | regexp              |  0.1% |  137 kB |   2,447 |
    | number              |  0.0% | 89.6 kB |   5,609 |
    | symbol              |  0.0% |   20 kB |     848 |
    | synthetic           |  0.0% | 2.59 kB |      33 |
    | bigint              |  0.0% |   392 B |      18 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    |    % |    Size | Instances | Constructor     | Location                                                                                                                                                |
    | ---: | ------: | --------: | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 5.0% | 13.7 MB |   279,002 | \`Object\`        | \`<native>\`                                                                                                                                              |
    | 1.1% | 3.12 MB |    97,432 | \`Array\`         | \`<native>\`                                                                                                                                              |
    | 0.2% |  665 kB |     8,311 | \`CaptureRule\`   | /Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1032:14 |
    | 0.2% |  494 kB |     7,725 | \`_RegExpSource\` | /Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1429:14 |
    | 0.1% |  362 kB |     2,511 | \`BeginEndRule\`  | /Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14 |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`Object\` (\`<native>\`)

    |    % |    Size | Path                                                      |
    | ---: | ------: | --------------------------------------------------------- |
    | 0.0% | 1.04 kB | \`.$e38a1a895f6aeb54$var$UNICODE_SCRIPTS system / Context\` |
    | 0.0% | 1.04 kB | \`.repository Object\`                                      |

    ##### \`Array\` (\`<native>\`)

    |    % | Size | Path        |
    | ---: | ---: | ----------- |
    | 0.0% | 56 B | \`(GC root)\` |
    | 0.0% | 56 B | \`(GC root)\` |

    ##### \`CaptureRule\` (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1032:14)

    |    % | Size | Path                                                                                                                                                                                                                           |
    | ---: | ---: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 0.0% | 80 B | \`[3366] Array ← ._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |
    | 0.0% | 80 B | \`[3367] Array ← ._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |

    ##### \`_RegExpSource\` (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1429:14)

    |    % | Size | Path                                                                                                                                                                                                            |
    | ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.0% | 64 B | \`._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |
    | 0.0% | 64 B | \`._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |

    ##### \`BeginEndRule\` (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14)

    |    % |  Size | Path                                                                                                                                                                                                                           |
    | ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | 0.0% | 144 B | \`[5107] Array ← ._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |
    | 0.0% | 144 B | \`[5112] Array ← ._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    |     % |    Size | Constructor   | Location                                                                                                                                                |
    | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 54.6% |  149 MB | \`Object\`      | \`<native>\`                                                                                                                                              |
    | 26.7% | 72.6 MB | \`ArrayBuffer\` | \`<native>\`                                                                                                                                              |
    | 11.6% | 31.6 MB | \`Array\`       | \`<native>\`                                                                                                                                              |
    |  6.6% |   18 MB | \`Registry\`    | /Users/tomer/Documents/work/code/website/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/registry.js:3:16                                |
    |  6.5% | 17.7 MB | \`Grammar\`     | /Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14 |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`Object\` (\`<native>\`)

    |     % |    Size | Path        |
    | ----: | ------: | ----------- |
    | 40.7% | 60.5 MB | \`(GC root)\` |
    | 12.1% |   18 MB | \`(GC root)\` |

    ##### \`ArrayBuffer\` (\`<native>\`)

    |     % |    Size | Path                                            |
    | ----: | ------: | ----------------------------------------------- |
    | 83.2% | 60.4 MB | \`(GC root)\`                                     |
    |  8.5% | 6.16 MB | \`.buffer Uint8Array ← .stdout system / Context\` |

    ##### \`Array\` (\`<native>\`)

    |    % |    Size | Path                                                                                                                                                                                                            |
    | ---: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 4.3% | 1.38 MB | \`._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |
    | 4.2% | 1.33 MB | \`._ruleId2desc Grammar (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context\` |

    ##### \`Registry\` (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/registry.js:3:16)

    |     % |    Size | Path                                                      |
    | ----: | ------: | --------------------------------------------------------- |
    | 99.6% |   18 MB | \`._registry system / Context\`                             |
    |  0.2% | 43.3 kB | \`.registry system / Context ← .previous system / Context\` |

    ##### \`Grammar\` (/Users/tomer/Documents/work/code/website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14)

    |     % |    Size | Path                          |
    | ----: | ------: | ----------------------------- |
    | 14.0% | 2.48 MB | \`._registry system / Context\` |
    | 13.7% | 2.43 MB | \`._registry system / Context\` |
    "
  `)
})
