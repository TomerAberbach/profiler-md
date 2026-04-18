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

    |     % |  Size | Instances | Constructor     | Location   |
    | ----: | ----: | --------: | --------------- | ---------- |
    | 39.8% | 200 B |         1 | \`MyClass\`       | \`<native>\` |
    | 15.9% |  80 B |         1 | \`DetachedClass\` | \`<native>\` |

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

    ## Largest closures

    Closures ranked by bytes that would be freed if the closure were garbage collected.

    |     % | Retained | Name   | Location      | Path        |
    | ----: | -------: | ------ | ------------- | ----------- |
    | 12.7% |     64 B | \`myFn\` | src/a.ts:6:11 | \`(GC root)\` |

    ## Largest strings

    Strings ranked by bytes allocated for them.

    |     % |  Size | Value                      | Location    |
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

test(`v8HeapSnapshotToMd with real fixture`, async () => {
  const data = await fs.readFile(fixturePath(`example.heapsnapshot`))

  const markdown = v8HeapSnapshotToMd(data, {
    cwd: `/Users/tomer/Documents/work/code`,
    topN: 5,
  })

  expect(markdown).toMatchInlineSnapshot(`
    "# Heap snapshot

    Allocated 117 MB across 1,038,922 objects and 4,793,095 references.

    | Category            |     % |    Size | Objects |
    | ------------------- | ----: | ------: | ------: |
    | string              | 40.0% | 46.9 MB | 179,122 |
    | code                | 19.1% | 22.4 MB | 262,568 |
    | array               | 15.1% | 17.7 MB |  64,585 |
    | closure             |  8.0% |  9.4 MB | 163,481 |
    | object              |  6.5% | 7.66 MB | 157,789 |
    | object shape        |  5.3% | 6.19 MB |  66,096 |
    | hidden              |  2.7% |  3.2 MB |  75,624 |
    | native              |  1.4% |  1.6 MB |   2,100 |
    | concatenated string |  1.0% | 1.12 MB |  34,906 |
    | sliced string       |  0.7% |  788 kB |  24,610 |
    | regexp              |  0.1% |  131 kB |   2,340 |
    | number              |  0.1% |   77 kB |   4,820 |
    | symbol              |  0.0% | 19.7 kB |     838 |
    | synthetic           |  0.0% | 2.59 kB |      33 |
    | bigint              |  0.0% |   224 B |      10 |

    ## Largest constructors

    ### Self size

    Constructors ranked by bytes allocated for their instances, excluding objects kept reachable by them.

    |    % |    Size | Instances | Constructor | Location                                                                                                                                                        |
    | ---: | ------: | --------: | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 2.0% | 2.37 MB |    49,786 | \`Object\`    | \`<native>\`                                                                                                                                                      |
    | 0.9% | 1.04 MB |    32,424 | \`Array\`     | \`<native>\`                                                                                                                                                      |
    | 0.2% |  256 kB |     2,785 | \`Generator\` | website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32 |
    | 0.1% |  158 kB |     4,925 | \`Set\`       | \`<native>\`                                                                                                                                                      |
    | 0.1% |   89 kB |     1,855 | \`Promise\`   | \`<native>\`                                                                                                                                                      |

    #### Instances

    Instances ranked by contribution to each constructor's self size.

    ##### \`Object\` (\`<native>\`)

    |    % |    Size | Path                                                      |
    | ---: | ------: | --------------------------------------------------------- |
    | 0.0% | 1.04 kB | \`.$e38a1a895f6aeb54$var$UNICODE_SCRIPTS system / Context\` |
    | 0.0% | 1.01 kB | \`.types Object\`                                           |

    ##### \`Array\` (\`<native>\`)

    |    % | Size | Path        |
    | ---: | ---: | ----------- |
    | 0.0% | 56 B | \`(GC root)\` |
    | 0.0% | 56 B | \`(GC root)\` |

    ##### \`Generator\` (website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32)

    |    % |  Size | Path        |
    | ---: | ----: | ----------- |
    | 0.1% | 160 B | \`(GC root)\` |
    | 0.1% | 160 B | \`(GC root)\` |

    ##### \`Set\` (\`<native>\`)

    |    % |  Size | Path        |
    | ---: | ----: | ----------- |
    | 0.1% | 112 B | \`(GC root)\` |
    | 0.0% |  56 B | \`(GC root)\` |

    ##### \`Promise\` (\`<native>\`)

    |    % | Size | Path        |
    | ---: | ---: | ----------- |
    | 0.1% | 56 B | \`(GC root)\` |
    | 0.1% | 48 B | \`(GC root)\` |

    ### Retained size

    Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

    |     % |    Size | Instances | Constructor | Location                                                                                                           |
    | ----: | ------: | --------: | ----------- | ------------------------------------------------------------------------------------------------------------------ |
    | 37.9% | 44.4 MB |    49,786 | \`Object\`    | \`<native>\`                                                                                                         |
    |  9.2% | 10.8 MB |     1,130 | \`a\`         | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673 |
    |  8.4% | 9.85 MB |    32,424 | \`Array\`     | \`<native>\`                                                                                                         |
    |  5.2% | 6.12 MB |       661 | \`Map\`       | \`<native>\`                                                                                                         |
    |  3.8% | 4.46 MB |     4,925 | \`Set\`       | \`<native>\`                                                                                                         |

    #### Instances

    Instances ranked by contribution to each constructor's retained size.

    ##### \`Object\` (\`<native>\`)

    |    % |    Size | Path        |
    | ---: | ------: | ----------- |
    | 4.6% | 2.03 MB | \`(GC root)\` |
    | 3.4% | 1.51 MB | \`(GC root)\` |

    ##### \`a\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673)

    |     % |    Size | Path                                                                                                                                                                                                                                                                                                                                                      |
    | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 11.8% | 1.28 MB | \`.jv system / Context\`                                                                                                                                                                                                                                                                                                                                    |
    | 11.7% | 1.26 MB | \`.params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\` |

    ##### \`Array\` (\`<native>\`)

    |    % |   Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
    | ---: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 7.2% | 706 kB | \`.performTools_default system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/performTools.js:14:35) ← .get default Object\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
    | 7.1% | 704 kB | \`.options a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\` |

    ##### \`Map\` (\`<native>\`)

    |     % |    Size | Path                                                                                                                                                                                           |
    | ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 24.9% | 1.53 MB | \`._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)\` |
    | 24.6% |  1.5 MB | \`._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)\` |

    ##### \`Set\` (\`<native>\`)

    |    % |   Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                |
    | ---: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 6.8% | 304 kB | \`.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .210 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)\` |
    | 6.8% | 304 kB | \`.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .201 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)\` |

    ## Largest closures

    Closures ranked by bytes that would be freed if the closure were garbage collected.

    |    % | Retained | Name        | Location                                                                                                           | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | ---: | -------: | ----------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 1.1% |  1.27 MB | \`get shape\` | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853 | \`.get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | 1.0% |  1.16 MB | \`get shape\` | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853 | \`.get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\`                                                                                                                                                                                                                                                                                                                                             |
    | 1.0% |  1.12 MB | \`get\`       | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438 | \`.get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\` |
    | 0.7% |   821 kB | \`get\`       | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35   | \`.get cachedActionsSchema Object\`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | 0.7% |   784 kB | \`get\`       | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438 | \`.get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\`                                                                                                                                                               |

    ### Retained

    Objects ranked by contribution to each closure's retained size.

    #### \`get shape\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853)

    |    % |    Size | Name                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ---: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.5% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .required Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\` |
    | 0.5% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .keyType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .properties Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\`                                                                                                                                                 |

    #### \`get shape\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853)

    |    % |    Size | Name                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ---: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.5% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .required Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\` |
    | 0.5% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .keyType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .properties Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\`                                                                                                                                                 |

    #### \`get\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438)

    |    % |    Size | Name                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | ---: | ------: | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.6% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .required Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\` |
    | 0.6% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .keyType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .properties Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context\`                                                                                                                                                 |

    #### \`get\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35)

    |    % |    Size | Name                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | ---: | ------: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.8% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .code Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .right Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\`                                                                                                                                                |
    | 0.8% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .value Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← [13] Array ← .options a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\` |

    #### \`get\` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438)

    |    % |    Size | Name                  | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
    | ---: | ------: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 0.8% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .code Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .right Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\`                                                                                                                                                |
    | 0.8% | 6.21 kB | \`(object properties)\` | \`.properties a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .value Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← [13] Array ← .options a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object\` |

    ## Largest strings

    Strings ranked by bytes allocated for them.

    |    % |    Size | Value                                                  | Location                                                                                                                                                                                                                                                        |
    | ---: | ------: | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 2.3% | 2.67 MB | \`import { a as __toCommonJS, i as __require, n as …\`   | \`(GC root)\`                                                                                                                                                                                                                                                     |
    | 1.7% | 2.04 MB | \`(function anonymous(domprops,exports\\n) {\\n/*******…\` | \`.source code\`                                                                                                                                                                                                                                                  |
    | 1.0% | 1.21 MB | \`/**\\n * Lexing or parsing positional information f…\`  | \`.source website/node_modules/.pnpm/katex@0.16.33/node_modules/katex/dist/katex.mjs\`                                                                                                                                                                            |
    | 1.0% | 1.13 MB | \`var $elh9A$restructure = require("restructure");\\n…\`  | \`.source website/node_modules/.pnpm/fontkit@2.0.4/node_modules/fontkit/dist/main.cjs\`                                                                                                                                                                           |
    | 0.6% |  756 kB | \`/* Copyright 2013 Google Inc. All Rights Reserved…\`   | \`.source website/node_modules/.pnpm/brotli@1.3.3/node_modules/brotli/dec/dictionary-data.js ← .script (shared function info) ← .shared (anonymous) (website/node_modules/.pnpm/brotli@1.3.3/node_modules/brotli/dec/dictionary-data.js:9467:24) ← .init Object\` |
    "
  `)
})
