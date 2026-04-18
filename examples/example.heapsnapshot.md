# Heap snapshot

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

|    % |    Size | Instances | Constructor             | Location                                                                                                                                                               |
| ---: | ------: | --------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% | 13.7 MB |   279,002 | `Object`                | `<native>`                                                                                                                                                             |
| 1.1% | 3.12 MB |    97,432 | `Array`                 | `<native>`                                                                                                                                                             |
| 0.2% |  665 kB |     8,311 | `CaptureRule`           | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1032:14                                                 |
| 0.2% |  494 kB |     7,725 | `_RegExpSource`         | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1429:14                                                 |
| 0.1% |  362 kB |     2,511 | `BeginEndRule`          | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14                                                 |
| 0.1% |  302 kB |     3,314 | `Generator`             | website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32        |
| 0.1% |  259 kB |     2,702 | `MatchRule`             | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1052:14                                                 |
| 0.1% |  219 kB |     6,827 | `Set`                   | `<native>`                                                                                                                                                             |
| 0.0% |  112 kB |     1,170 | `IncludeOnlyRule`       | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1088:14                                                 |
| 0.0% |  111 kB |     2,323 | `Promise`               | `<native>`                                                                                                                                                             |
| 0.0% | 75.5 kB |       393 | `EnvironmentModuleNode` | website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13 |
| 0.0% | 56.7 kB |       591 | `ArrayBuffer`           | `<native>`                                                                                                                                                             |
| 0.0% | 49.9 kB |       481 | `Uint8Array`            | `<native>`                                                                                                                                                             |
| 0.0% |   38 kB |     1,188 | `Map`                   | `<native>`                                                                                                                                                             |
| 0.0% |   35 kB |       729 | `DefinedInfo`           | website/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js:26:14                                                 |
| 0.0% | 32.4 kB |       253 | `Grammar`               | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14                                                 |
| 0.0% |   30 kB |     1,133 | `a`                     | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673                                                     |
| 0.0% | 26.4 kB |       174 | `Hook`                  | website/node_modules/.pnpm/tapable@2.3.0/node_modules/tapable/lib/Hook.js:30:13                                                                                        |
| 0.0% | 16.9 kB |       423 | `BasicScopeAttributes`  | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1696:14                                                 |
| 0.0% | 16.2 kB |       145 | `ExportedTokenType`     | website/node_modules/.pnpm/@babel+parser@7.29.0/node_modules/@babel/parser/lib/index.js:901:14                                                                         |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object` (`<native>`)

|    % |    Size | Path                                                      |
| ---: | ------: | --------------------------------------------------------- |
| 0.0% | 1.04 kB | `.$e38a1a895f6aeb54$var$UNICODE_SCRIPTS system / Context` |
| 0.0% | 1.04 kB | `.repository Object`                                      |
| 0.0% | 1.01 kB | `.repository Object`                                      |
| 0.0% | 1.01 kB | `.types Object`                                           |
| 0.0% |   992 B | `.repository Object`                                      |

##### `Array` (`<native>`)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 0.0% | 56 B | `(GC root)` |
| 0.0% | 56 B | `(GC root)` |
| 0.0% | 56 B | `(GC root)` |
| 0.0% | 56 B | `(GC root)` |
| 0.0% | 56 B | `(GC root)` |

##### `CaptureRule` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1032:14)

|    % | Size | Path                                                                                                                                                                                          |
| ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 80 B | `[3366] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 80 B | `[3367] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 80 B | `[3368] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 80 B | `[3369] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 80 B | `[3371] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `_RegExpSource` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1429:14)

|    % | Size | Path                                                                                                                                                                                                                                                                                                                                          |
| ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 64 B | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                |
| 0.0% | 64 B | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                |
| 0.0% | 64 B | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                |
| 0.0% | 64 B | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                |
| 0.0% | 64 B | `._begin BeginEndRule (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14) ← [4944] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `BeginEndRule` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14)

|    % |  Size | Path                                                                                                                                                                                          |
| ---: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 144 B | `[5107] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 144 B | `[5112] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 144 B | `[5133] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 144 B | `[5138] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 144 B | `[5141] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `Generator` (website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32)

|    % |  Size | Path                                                    |
| ---: | ----: | ------------------------------------------------------- |
| 0.1% | 160 B | `.(Builtins) system / SourceTextModule ← .2 ModuleWrap` |
| 0.1% | 160 B | `.(Builtins) system / SourceTextModule ← .2 ModuleWrap` |
| 0.1% | 160 B | `(GC root)`                                             |
| 0.1% | 160 B | `(GC root)`                                             |
| 0.1% | 160 B | `(GC root)`                                             |

##### `MatchRule` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1052:14)

|    % | Size | Path                                                                                                                                                                                          |
| ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 96 B | `[5094] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 96 B | `[5095] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 96 B | `[5096] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 96 B | `[5097] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.0% | 96 B | `[5098] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `Set` (`<native>`)

|    % |  Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 112 B | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.0% |  56 B | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.0% |  56 B | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.0% |  32 B | `.type system / Context ← .context closure (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/generic.js:400:20) ← .next system / Context ← .context closure (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/generic.js:148:20) ← .source Object ← .match Object ← .angle Object ← .types Lexer (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/Lexer.js:102:16)`   |
| 0.0% |  32 B | `.type system / Context ← .context closure (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/generic.js:400:20) ← .next system / Context ← .context closure (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/generic.js:148:20) ← .source Object ← .match Object ← .decibel Object ← .types Lexer (website/node_modules/.pnpm/css-tree@3.1.0/node_modules/css-tree/lib/lexer/Lexer.js:102:16)` |

##### `IncludeOnlyRule` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1088:14)

|    % | Size | Path                                                                                                                                                                                          |
| ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 96 B | `[5117] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.1% | 96 B | `[2249] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.1% | 96 B | `[2257] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.1% | 96 B | `[2261] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.1% | 96 B | `[2285] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `Promise` (`<native>`)

|    % | Size | Path                                                                                                                                                                                                        |
| ---: | ---: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 56 B | `(GC root)`                                                                                                                                                                                                 |
| 0.1% | 56 B | `(GC root)`                                                                                                                                                                                                 |
| 0.0% | 48 B | `(GC root)`                                                                                                                                                                                                 |
| 0.0% | 48 B | `(GC root)`                                                                                                                                                                                                 |
| 0.0% | 48 B | `.modulePromise ModuleJob (node:internal/modules/esm/module_job:210:14) ← .table LoadCache (node:internal/modules/esm/module_map:93:1) ← .loadCache ModuleLoader (node:internal/modules/esm/loader:212:14)` |

##### `EnvironmentModuleNode` (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13)

|    % |  Size | Path        |
| ---: | ----: | ----------- |
| 0.3% | 192 B | `(GC root)` |
| 0.3% | 192 B | `(GC root)` |
| 0.3% | 192 B | `(GC root)` |
| 0.3% | 192 B | `(GC root)` |
| 0.3% | 192 B | `(GC root)` |

##### `ArrayBuffer` (`<native>`)

|    % | Size | Path                                                                                                      |
| ---: | ---: | --------------------------------------------------------------------------------------------------------- |
| 0.2% | 96 B | `(GC root)`                                                                                               |
| 0.2% | 96 B | `.buffer Uint8Array`                                                                                      |
| 0.2% | 96 B | `.buffer Uint8Array ← .reactions_or_result Promise ← .data Object ← .6 array ← .table Map`                |
| 0.2% | 96 B | `.buffer Uint8Array ← .data Object ← .reactions_or_result Promise ← .data Object ← .6 array ← .table Map` |
| 0.2% | 96 B | `.cache matter (website/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js:29:16)`    |

##### `Uint8Array` (`<native>`)

|    % |  Size | Path        |
| ---: | ----: | ----------- |
| 0.2% | 104 B | `(GC root)` |
| 0.2% | 104 B | `(GC root)` |
| 0.2% | 104 B | `(GC root)` |
| 0.2% | 104 B | `(GC root)` |
| 0.2% | 104 B | `(GC root)` |

##### `Map` (`<native>`)

|    % | Size | Path                                                                                                                                                                                                                                                                                                |
| ---: | ---: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 56 B | `(GC root)`                                                                                                                                                                                                                                                                                         |
| 0.1% | 56 B | `(GC root)`                                                                                                                                                                                                                                                                                         |
| 0.1% | 32 B | `._langs Resolver (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:341:13) ← ._options Registry (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:239:13) ← ._registry system / Context`       |
| 0.1% | 32 B | `._scopeToLang Resolver (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:341:13) ← ._options Registry (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:239:13) ← ._registry system / Context` |
| 0.1% | 32 B | `._injections Resolver (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:341:13) ← ._options Registry (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:239:13) ← ._registry system / Context`  |

##### `DefinedInfo` (website/node_modules/.pnpm/property-information@7.1.0/node_modules/property-information/lib/util/defined-info.js:26:14)

|    % | Size | Path        |
| ---: | ---: | ----------- |
| 0.1% | 48 B | `(GC root)` |
| 0.1% | 48 B | `(GC root)` |
| 0.1% | 48 B | `(GC root)` |
| 0.1% | 48 B | `(GC root)` |
| 0.1% | 48 B | `(GC root)` |

##### `Grammar` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14)

|    % |  Size | Path                          |
| ---: | ----: | ----------------------------- |
| 0.4% | 128 B | `._registry system / Context` |
| 0.4% | 128 B | `._registry system / Context` |
| 0.4% | 128 B | `._registry system / Context` |
| 0.4% | 128 B | `._registry system / Context` |
| 0.4% | 128 B | `._registry system / Context` |

##### `a` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673)

|    % |  Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.3% | 104 B | `.innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .form Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .out a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .elicitation Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .capabilities Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .df system / Context`                                                                                                                                               |
| 0.3% | 104 B | `.right Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .form Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .out a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .elicitation Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .capabilities Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .df system / Context` |
| 0.3% | 104 B | `.innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .costPriority Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .modelPreferences Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .Ev system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.3% | 104 B | `.innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .speedPriority Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .innerType Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .modelPreferences Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .Ev system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% | 104 B | `.content Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .Gs system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

##### `Hook` (website/node_modules/.pnpm/tapable@2.3.0/node_modules/tapable/lib/Hook.js:30:13)

|    % |  Size | Path                   |
| ---: | ----: | ---------------------- |
| 0.6% | 152 B | `.Br system / Context` |
| 0.6% | 152 B | `.Br system / Context` |
| 0.6% | 152 B | `.Br system / Context` |
| 0.6% | 152 B | `.Br system / Context` |
| 0.6% | 152 B | `.Br system / Context` |

##### `BasicScopeAttributes` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1696:14)

|    % | Size | Path                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ---: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 40 B | `._defaultAttributes _BasicScopeAttributesProvider (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1704:14) ← ._basicScopeAttributesProvider Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 40 B | `._defaultAttributes _BasicScopeAttributesProvider (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1704:14) ← ._basicScopeAttributesProvider Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 40 B | `._defaultAttributes _BasicScopeAttributesProvider (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1704:14) ← ._basicScopeAttributesProvider Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 40 B | `._defaultAttributes _BasicScopeAttributesProvider (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1704:14) ← ._basicScopeAttributesProvider Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 40 B | `._defaultAttributes _BasicScopeAttributesProvider (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1704:14) ← ._basicScopeAttributesProvider Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |

##### `ExportedTokenType` (website/node_modules/.pnpm/@babel+parser@7.29.0/node_modules/@babel/parser/lib/index.js:901:14)

|    % |  Size | Path        |
| ---: | ----: | ----------- |
| 0.7% | 112 B | `(GC root)` |
| 0.7% | 112 B | `(GC root)` |
| 0.7% | 112 B | `(GC root)` |
| 0.7% | 112 B | `(GC root)` |
| 0.7% | 112 B | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all objects that would be freed if their instances were garbage collected.

|     % |    Size | Constructor             | Location                                                                                                                                                                                       |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.6% |  149 MB | `Object`                | `<native>`                                                                                                                                                                                     |
| 26.7% | 72.6 MB | `ArrayBuffer`           | `<native>`                                                                                                                                                                                     |
| 11.6% | 31.6 MB | `Array`                 | `<native>`                                                                                                                                                                                     |
|  6.6% |   18 MB | `Registry`              | website/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/registry.js:3:16                                                                                                        |
|  6.5% | 17.7 MB | `Grammar`               | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14                                                                         |
|  4.9% | 13.4 MB | `Generator`             | website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32                                |
|  4.0% | 10.8 MB | `a`                     | website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673                                                                             |
|  3.7% | 10.2 MB | `Map`                   | `<native>`                                                                                                                                                                                     |
|  2.6% | 6.96 MB | `Uint8Array`            | `<native>`                                                                                                                                                                                     |
|  1.8% | 5.03 MB | `Set`                   | `<native>`                                                                                                                                                                                     |
|  1.6% | 4.39 MB | `Memory`                | `<native>`                                                                                                                                                                                     |
|  1.6% | 4.34 MB | `EnvironmentModuleNode` | website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13                         |
|  1.2% | 3.18 MB | `Promise`               | `<native>`                                                                                                                                                                                     |
|  1.1% |    3 MB | `DirEntry`              | website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14                         |
|  1.0% | 2.78 MB | `Lexer`                 | website/node_modules/.pnpm/css-tree@2.2.1/node_modules/css-tree/lib/lexer/Lexer.js:92:16                                                                                                       |
|  0.7% | 1.91 MB | `BeginEndRule`          | website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14                                                                         |
|  0.6% | 1.71 MB | `zt`                    | website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:10:10854                                                                                         |
|  0.5% |  1.5 MB | `K`                     | website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:1:8476                                                                                           |
|  0.5% | 1.41 MB | `Resolver`              | website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:341:13                                                                                      |
|  0.4% |  1.2 MB | `B`                     | website/node_modules/.pnpm/@tailwindcss+vite@4.2.1_vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3_/node_modules/@tailwindcss/vite/dist/index.mjs:1:4483 |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object` (`<native>`)

|     % |    Size | Path                    |
| ----: | ------: | ----------------------- |
| 40.7% | 60.5 MB | `(GC root)`             |
| 12.1% |   18 MB | `(GC root)`             |
|  2.7% | 4.08 MB | `.C system / Context`   |
|  1.8% | 2.75 MB | `.6 array ← .table Map` |
|  1.5% | 2.21 MB | `(GC root)`             |

##### `ArrayBuffer` (`<native>`)

|     % |    Size | Path                                                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------- |
| 83.2% | 60.4 MB | `(GC root)`                                                                                                             |
|  8.5% | 6.16 MB | `.buffer Uint8Array ← .stdout system / Context`                                                                         |
|  5.6% | 4.06 MB | `.(GC roots) Memory ← .memory Object ← .C system / Context`                                                             |
|  0.6% |  467 kB | `.buffer Uint8Array`                                                                                                    |
|  0.2% |  131 kB | `.(GC roots) Memory ← .llhttpInstance system / Context ← .context connectH1 (node:internal/deps/undici/undici:7541:23)` |

##### `Array` (`<native>`)

|    % |    Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.3% | 1.38 MB | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.2% | 1.33 MB | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.7% |  846 kB | `._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.2% |  706 kB | `.performTools_default system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/performTools.js:14:35) ← .get default Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.2% |  704 kB | `.options a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .left Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .element a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .actions Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .cachedActionsSchema system / Context ← .previous system / Context ← .previous system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/server/agent/actions.js:14:35) ← .get cachedActionsSchema Object` |

##### `Registry` (website/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/registry.js:3:16)

|     % |    Size | Path                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------- |
| 99.6% |   18 MB | `._registry system / Context`                                                                                       |
|  0.2% | 43.3 kB | `.registry system / Context ← .previous system / Context`                                                           |
|  0.1% | 19.4 kB | `(GC root)`                                                                                                         |
|  0.0% |   952 B | `.symbolRegistry SuperJSON (website/node_modules/.pnpm/superjson@2.2.6/node_modules/superjson/dist/index.js:10:16)` |
|  0.0% |   480 B | `(GC root)`                                                                                                         |

##### `Grammar` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14)

|     % |    Size | Path                          |
| ----: | ------: | ----------------------------- |
| 14.0% | 2.48 MB | `._registry system / Context` |
| 13.7% | 2.43 MB | `._registry system / Context` |
|  8.4% | 1.49 MB | `._registry system / Context` |
|  3.3% |  578 kB | `._registry system / Context` |
|  1.9% |  337 kB | `._registry system / Context` |

##### `Generator` (website/node_modules/.pnpm/react-router@7.13.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/react-router/dist/development/chunk-JPUPSTYD.mjs:508:32)

|    % |   Size | Path                                                    |
| ---: | -----: | ------------------------------------------------------- |
| 5.8% | 784 kB | `.(Builtins) system / SourceTextModule ← .2 ModuleWrap` |
| 3.2% | 431 kB | `(GC root)`                                             |
| 2.6% | 351 kB | `(GC root)`                                             |
| 2.3% | 312 kB | `(GC root)`                                             |
| 2.2% | 294 kB | `.(Builtins) system / SourceTextModule ← .2 ModuleWrap` |

##### `a` (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673)

|     % |    Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.8% | 1.28 MB | `.jv system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 11.7% | 1.26 MB | `.params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 10.4% | 1.13 MB | `.requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10.0% | 1.08 MB | `.properties Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context`                                                                                                                                     |
|  9.8% | 1.06 MB | `.valueType a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .properties Object ← .<dummy> system / Context ← .context get (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:67:10438) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .requestedSchema Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .params Object ← .e system / Context ← .context get shape (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:71853) ← .get shape Object ← .def a (website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js:64:63673) ← .jv system / Context` |

##### `Map` (`<native>`)

|     % |    Size | Path                                                                                                                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.9% | 2.75 MB | `(GC root)`                                                                                                                                                                                    |
| 26.9% | 2.75 MB | `.reactions_or_result Promise ← .data Object ← .6 array ← .table Map`                                                                                                                          |
| 14.7% |  1.5 MB | `._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 14.5% | 1.48 MB | `._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
|  5.5% |  565 kB | `.realpathCache system / Context`                                                                                                                                                              |

##### `Uint8Array` (`<native>`)

|     % |    Size | Path                                                                  |
| ----: | ------: | --------------------------------------------------------------------- |
| 88.6% | 6.16 MB | `.stdout system / Context`                                            |
|  6.7% |  467 kB | `(GC root)`                                                           |
|  1.8% |  123 kB | `(GC root)`                                                           |
|  0.7% |   46 kB | `.reactions_or_result Promise ← .data Object ← .6 array ← .table Map` |
|  0.3% | 20.4 kB | `(GC root)`                                                           |

##### `Set` (`<native>`)

|    % |   Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.0% | 302 kB | `.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .207 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 6.0% | 302 kB | `.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .198 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 6.0% | 302 kB | `.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .183 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 6.0% | 302 kB | `.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .192 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 6.0% | 300 kB | `.items DirEntry (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14) ← .186 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |

##### `Memory` (`<native>`)

|     % |    Size | Path                                                                                               |
| ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 92.5% | 4.06 MB | `.memory Object ← .C system / Context`                                                             |
|  3.0% |  131 kB | `.llhttpInstance system / Context ← .context connectH1 (node:internal/deps/undici/undici:7541:23)` |
|  3.0% |  131 kB | `.memory Object ← .C system / Context`                                                             |
|  1.5% | 65.8 kB | `.memory Object ← .C system / Context`                                                             |
|  0.0% |   104 B | `.memory Object`                                                                                   |

##### `EnvironmentModuleNode` (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13)

|     % |    Size | Path        |
| ----: | ------: | ----------- |
| 46.3% | 2.01 MB | `(GC root)` |
| 20.6% |  894 kB | `(GC root)` |
|  2.2% | 94.7 kB | `(GC root)` |
|  1.7% | 75.2 kB | `(GC root)` |
|  1.4% | 59.2 kB | `(GC root)` |

##### `Promise` (`<native>`)

|     % |    Size | Path                                   |
| ----: | ------: | -------------------------------------- |
| 86.3% | 2.75 MB | `.data Object ← .6 array ← .table Map` |
|  7.7% |  244 kB | `.data Object ← .6 array ← .table Map` |
|  1.4% |   46 kB | `.data Object ← .6 array ← .table Map` |
|  0.5% | 15.5 kB | `.data Object ← .6 array ← .table Map` |
|  0.1% | 3.64 kB | `.data Object ← .6 array ← .table Map` |

##### `DirEntry` (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13748:14)

|     % |   Size | Path                                                                                                                                                                                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 10.1% | 302 kB | `.207 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 10.1% | 302 kB | `.198 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 10.1% | 302 kB | `.183 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 10.1% | 302 kB | `.192 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |
| 10.0% | 300 kB | `.186 array ← .table Map ← ._watched FSWatcher (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:13860:14)` |

##### `Lexer` (website/node_modules/.pnpm/css-tree@2.2.1/node_modules/css-tree/lib/lexer/Lexer.js:92:16)

|     % |    Size | Path        |
| ----: | ------: | ----------- |
| 36.8% | 1.03 MB | `(GC root)` |
| 33.8% |  940 kB | `(GC root)` |
| 29.4% |  817 kB | `(GC root)` |

##### `BeginEndRule` (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:1130:14)

|    % |    Size | Path                                                                                                                                                                                         |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 4.27 kB | `[396] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 4.05 kB | `[777] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% |  3.9 kB | `[933] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 3.66 kB | `[765] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context` |
| 0.2% | 3.62 kB | `[57] Array ← ._ruleId2desc Grammar (website/node_modules/.pnpm/@shikijs+vscode-textmate@10.0.2/node_modules/@shikijs/vscode-textmate/dist/index.js:2294:14) ← ._registry system / Context`  |

##### `zt` (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:10:10854)

|     % |   Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.9% | 938 kB | `.utilities Object`                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 45.1% | 771 kB | `.utilities Object ← .i system / Context ← .context build (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:38:894) ← .build Object ← .e system / Context ← .compiler B (website/node_modules/.pnpm/@tailwindcss+vite@4.2.1_vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3_/node_modules/@tailwindcss/vite/dist/index.mjs:1:4483) ← .jr system / Context` |

##### `K` (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:1:8476)

|     % |   Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.5% | 696 kB | `.utilities zt (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:10:10854) ← .utilities Object`                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 35.3% | 528 kB | `.utilities zt (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:10:10854) ← .utilities Object ← .i system / Context ← .context build (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:38:894) ← .build Object ← .e system / Context ← .compiler B (website/node_modules/.pnpm/@tailwindcss+vite@4.2.1_vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3_/node_modules/@tailwindcss/vite/dist/index.mjs:1:4483) ← .jr system / Context` |
|  9.5% | 143 kB | `.l system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  8.0% | 119 kB | `.s system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  7.7% | 115 kB | `.9 array ← .table K (website/node_modules/.pnpm/tailwindcss@4.2.1/node_modules/tailwindcss/dist/chunk-L5IEUH3R.mjs:1:8476) ← .l system / Context`                                                                                                                                                                                                                                                                                                                                                                                                                     |

##### `Resolver` (website/node_modules/.pnpm/@shikijs+primitive@4.0.0/node_modules/@shikijs/primitive/dist/index.mjs:341:13)

|     % |    Size | Path                                                |
| ----: | ------: | --------------------------------------------------- |
| 69.6% |  981 kB | `.jr system / Context`                              |
| 16.3% |  230 kB | `.Br system / Context`                              |
|  3.1% | 43.8 kB | `.ni system / Context ← .previous system / Context` |
|  3.1% | 43.8 kB | `.oi system / Context ← .previous system / Context` |
|  3.1% | 43.7 kB | `.Yr system / Context`                              |

##### `B` (website/node_modules/.pnpm/@tailwindcss+vite@4.2.1_vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3_/node_modules/@tailwindcss/vite/dist/index.mjs:1:4483)

|     % |   Size | Path                   |
| ----: | -----: | ---------------------- |
| 66.7% | 802 kB | `.jr system / Context` |
| 33.3% | 400 kB | `(GC root)`            |

## Largest strings

|    % |    Size | Length                                                   | Location                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.0% | 2.67 MB | `"import { a as __toCommonJS, i as __require, n as …"`   | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.7% | 2.04 MB | `"(function anonymous(domprops,exports\n) {\n/*******…"` | `.first (concatenated string) ← .source code`                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% | 2.01 MB | `"import {\n  require_react_dom\n} from "/node_module…"` | `.code Object ← .transformResult EnvironmentModuleNode (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13)`                                                                                                                                                                                                                       |
| 0.4% | 1.21 MB | `"/**\n * Lexing or parsing positional information f…"`  | `.source website/node_modules/.pnpm/katex@0.16.33/node_modules/katex/dist/katex.mjs`                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 1.13 MB | `"var $elh9A$restructure = require("restructure");\n…"`  | `.source website/node_modules/.pnpm/fontkit@2.0.4/node_modules/fontkit/dist/main.cjs`                                                                                                                                                                                                                                                                                                                                                                  |
| 0.3% |  893 kB | `"import { injectQuery as __vite__injectQuery } fro…"`   | `.code Object ← .transformResult EnvironmentModuleNode (website/node_modules/.pnpm/vite@7.3.1_@types+node@25.3.2_jiti@2.6.1_lightningcss@1.31.1_terser@5.46.0_tsx@4.20.3/node_modules/vite/dist/node/chunks/config.js:34441:13)`                                                                                                                                                                                                                       |
| 0.3% |  782 kB | `"const lang = Object.freeze(JSON.parse("{\"display…"`   | `.source website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/emacs-lisp.mjs ← .script (shared function info) ← .shared closure (website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/emacs-lisp.mjs:1:1) ← .function Generator (website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/emacs-lisp.mjs:1:1) ← .(Builtins) system / SourceTextModule ← .2 ModuleWrap` |
| 0.3% |  779 kB | `"{"displayName":"Emacs Lisp","fileTypes":["el","el…"`   | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  756 kB | `"/* Copyright 2013 Google Inc. All Rights Reserved…"`   | `.source website/node_modules/.pnpm/brotli@1.3.3/node_modules/brotli/dec/dictionary-data.js ← .script (shared function info) ← .shared closure (website/node_modules/.pnpm/brotli@1.3.3/node_modules/brotli/dec/dictionary-data.js:9467:24) ← .init Object`                                                                                                                                                                                            |
| 0.3% |  712 kB | `""use strict";\nvar __defProp = Object.defineProper…"`  | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% |  682 kB | `""use strict";var oI=Object.create;var Ji=Object.d…"`   | `.source website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/mcpBundleImpl/index.js`                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  632 kB | `"import { createRequire as __prettierCreateRequire…"`   | `.source website/node_modules/.pnpm/prettier@3.8.1/node_modules/prettier/index.mjs`                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  622 kB | `"var binary = Uint8Array.from(atob("AGFzbQEAAAABoQ…"`   | `.source website/node_modules/.pnpm/@shikijs+engine-oniguruma@4.0.0/node_modules/@shikijs/engine-oniguruma/dist/wasm-inlined.mjs`                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  622 kB | `"AGFzbQEAAAABoQEWYAJ/fwF/YAF/AX9gA39/fwF/YAR/f39/A…"`   | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  567 kB | `"(function webpackUniversalModuleDefinition(root, …"`   | `.source website/node_modules/.pnpm/esprima@4.0.1/node_modules/esprima/dist/esprima.js`                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  512 kB | `"'use strict';\n\nObject.defineProperty(exports, '__…"` | `.source website/node_modules/.pnpm/@babel+parser@7.29.0/node_modules/@babel/parser/lib/index.js`                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  470 kB | `""use strict";var Fb=Object.create;var ms=Object.d…"`   | `.source website/node_modules/.pnpm/playwright-core@1.58.2/node_modules/playwright-core/lib/utilsBundleImpl/index.js`                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  429 kB | `"/**\n * @license React\n * react-dom-server.node.de…"` | `.source website/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-server.node.development.js`                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  429 kB | `"import cpp_macro from './cpp-macro.mjs'\nimport re…"`  | `.source website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/cpp.mjs ← .script (shared function info) ← .shared closure (website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/cpp.mjs:1:1) ← .function Generator (website/node_modules/.pnpm/@shikijs+langs@4.0.0/node_modules/@shikijs/langs/dist/cpp.mjs:1:1)`                                                                              |
| 0.1% |  395 kB | `"/**\n * @license React\n * react-dom-server-legacy.…"` | `.source website/node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js`                                                                                                                                                                                                                                                                                                              |
