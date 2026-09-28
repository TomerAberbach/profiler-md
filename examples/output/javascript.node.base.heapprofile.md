# Heap profile

Allocated 21.8 MiB over 28 samples (798 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 51.8% | 11.3 MiB |       7 |
| Third-party      | 48.2% | 10.5 MiB |      21 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                 | Location                                              |
| ----: | -------: | ------: | ---------------------------------------- | ----------------------------------------------------- |
| 37.9% | 8.27 MiB |       1 | `readFileSync`                           | `node:fs:433:22`                                      |
|  9.3% | 2.03 MiB |       4 | `wrapSafe`                               | `node:internal/modules/cjs/loader:1671:18`            |
|  4.6% |    1 MiB |       2 | `diag`                                   | `node_modules/typescript/lib/typescript.js:9336:14`   |
|  2.3% |  518 KiB |       1 | `typeToTypeNodeWorker`                   | `node_modules/typescript/lib/typescript.js:53183:34`  |
|  2.3% |  514 KiB |       1 | `exec`                                   | `<unknown>`                                           |
|  2.3% |  514 KiB |       1 | `parseSourceFile`                        | `node_modules/typescript/lib/typescript.js:31471:27`  |
|  2.3% |  513 KiB |       1 | `resolveModuleName`                      | `node_modules/typescript/lib/typescript.js:42868:27`  |
|  2.3% |  513 KiB |       1 | `parseDeclarationWorker`                 | `node_modules/typescript/lib/typescript.js:36069:34`  |
|  2.3% |  513 KiB |       1 | `getSetExternalModuleIndicator`          | `node_modules/typescript/lib/typescript.js:20661:39`  |
|  2.3% |  513 KiB |       1 | `bindParentToChildIgnoringJSDoc`         | `node_modules/typescript/lib/typescript.js:21713:42`  |
|  2.3% |  513 KiB |       1 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:60131:50`  |
|  2.3% |  513 KiB |       1 | `checkMemberForOverrideModifier`         | `node_modules/typescript/lib/typescript.js:85606:42`  |
|  2.3% |  512 KiB |       1 | `emitIntersectionType`                   | `node_modules/typescript/lib/typescript.js:117665:32` |
|  2.3% |  512 KiB |       1 | `isConstContext`                         | `node_modules/typescript/lib/typescript.js:81235:26`  |
|  2.3% |  512 KiB |       1 | `join`                                   | `<unknown>`                                           |
|  2.3% |  512 KiB |       1 | `getTypeChecker`                         | `node_modules/typescript/lib/typescript.js:123266:26` |
|  2.3% |  512 KiB |       1 | `createNodeFactory`                      | `node_modules/typescript/lib/typescript.js:23135:27`  |
|  2.3% |  512 KiB |       1 | `readPackageJsonTypesVersionPaths`       | `node_modules/typescript/lib/typescript.js:42158:42`  |
|  2.3% |  512 KiB |       1 | `(anonymous)`                            | `node_modules/typescript/lib/typescript.js:116511:63` |
|  2.3% |  512 KiB |       1 | `toPath3`                                | `node_modules/typescript/lib/typescript.js:122790:19` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function       | Location                                   |
| ----: | -------: | ------: | -------------- | ------------------------------------------ |
| 37.9% | 8.27 MiB |       1 | `readFileSync` | `node:fs:433:22`                           |
|  9.3% | 2.03 MiB |       4 | `wrapSafe`     | `node:internal/modules/cjs/loader:1671:18` |
|  2.3% |  514 KiB |       1 | `exec`         | `<unknown>`                                |
|  2.3% |  512 KiB |       1 | `join`         | `<unknown>`                                |

##### Third-party

|    % |    Size | Samples | Function                                 | Location                                              |
| ---: | ------: | ------: | ---------------------------------------- | ----------------------------------------------------- |
| 4.6% |   1 MiB |       2 | `diag`                                   | `node_modules/typescript/lib/typescript.js:9336:14`   |
| 2.3% | 518 KiB |       1 | `typeToTypeNodeWorker`                   | `node_modules/typescript/lib/typescript.js:53183:34`  |
| 2.3% | 514 KiB |       1 | `parseSourceFile`                        | `node_modules/typescript/lib/typescript.js:31471:27`  |
| 2.3% | 513 KiB |       1 | `resolveModuleName`                      | `node_modules/typescript/lib/typescript.js:42868:27`  |
| 2.3% | 513 KiB |       1 | `parseDeclarationWorker`                 | `node_modules/typescript/lib/typescript.js:36069:34`  |
| 2.3% | 513 KiB |       1 | `getSetExternalModuleIndicator`          | `node_modules/typescript/lib/typescript.js:20661:39`  |
| 2.3% | 513 KiB |       1 | `bindParentToChildIgnoringJSDoc`         | `node_modules/typescript/lib/typescript.js:21713:42`  |
| 2.3% | 513 KiB |       1 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:60131:50`  |
| 2.3% | 513 KiB |       1 | `checkMemberForOverrideModifier`         | `node_modules/typescript/lib/typescript.js:85606:42`  |
| 2.3% | 512 KiB |       1 | `emitIntersectionType`                   | `node_modules/typescript/lib/typescript.js:117665:32` |
| 2.3% | 512 KiB |       1 | `isConstContext`                         | `node_modules/typescript/lib/typescript.js:81235:26`  |
| 2.3% | 512 KiB |       1 | `getTypeChecker`                         | `node_modules/typescript/lib/typescript.js:123266:26` |
| 2.3% | 512 KiB |       1 | `createNodeFactory`                      | `node_modules/typescript/lib/typescript.js:23135:27`  |
| 2.3% | 512 KiB |       1 | `readPackageJsonTypesVersionPaths`       | `node_modules/typescript/lib/typescript.js:42158:42`  |
| 2.3% | 512 KiB |       1 | `(anonymous)`                            | `node_modules/typescript/lib/typescript.js:116511:63` |
| 2.3% | 512 KiB |       1 | `toPath3`                                | `node_modules/typescript/lib/typescript.js:122790:19` |
| 2.3% | 512 KiB |       1 | `getSubPatternFromSpec`                  | `node_modules/typescript/lib/typescript.js:21110:31`  |
| 2.3% | 512 KiB |       1 | `(anonymous)`                            | `node_modules/typescript/lib/typescript.js:1:1`       |
| 2.3% | 512 KiB |       1 | `getLeadingLineTerminatorCount`          | `node_modules/typescript/lib/typescript.js:119810:41` |
| 2.3% | 512 KiB |       1 | `getMapOfCacheRedirects`                 | `node_modules/typescript/lib/typescript.js:42558:34`  |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.03 MiB |       4 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `diag` (`node_modules/typescript/lib/typescript.js:9336:14`)

|      % |  Size | Samples | Caller        | Location                                          |
| -----: | ----: | ------: | ------------- | ------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `typeToTypeNodeWorker` (`node_modules/typescript/lib/typescript.js:53183:34`)

|      % |    Size | Samples | Caller                 | Location                                             |
| -----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 518 KiB |       1 | `typeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js:53177:34` |

##### `exec` (`<unknown>`)

|      % |    Size | Samples | Caller           | Location                                             |
| -----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 514 KiB |       1 | `extractPragmas` | `node_modules/typescript/lib/typescript.js:38669:24` |

##### `parseSourceFile` (`node_modules/typescript/lib/typescript.js:31471:27`)

|      % |    Size | Samples | Caller             | Location                                             |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% | 514 KiB |       1 | `createSourceFile` | `node_modules/typescript/lib/typescript.js:31293:26` |

##### `resolveModuleName` (`node_modules/typescript/lib/typescript.js:42868:27`)

|      % |    Size | Samples | Caller    | Location                                              |
| -----: | ------: | ------: | --------- | ----------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `resolve` | `node_modules/typescript/lib/typescript.js:121935:14` |

##### `parseDeclarationWorker` (`node_modules/typescript/lib/typescript.js:36069:34`)

|      % |    Size | Samples | Caller             | Location                                             |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `parseDeclaration` | `node_modules/typescript/lib/typescript.js:36040:28` |

##### `getSetExternalModuleIndicator` (`node_modules/typescript/lib/typescript.js:20661:39`)

|      % |    Size | Samples | Caller                       | Location                                              |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `getCreateSourceFileOptions` | `node_modules/typescript/lib/typescript.js:123978:38` |

##### `bindParentToChildIgnoringJSDoc` (`node_modules/typescript/lib/typescript.js:21713:42`)

|      % |    Size | Samples | Caller                    | Location                                             |
| -----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `forEachChildRecursively` | `node_modules/typescript/lib/typescript.js:31244:33` |

##### `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js:60131:50`)

|      % |    Size | Samples | Caller                | Location                                             |
| -----: | ------: | ------: | --------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `getPropertiesOfType` | `node_modules/typescript/lib/typescript.js:60156:31` |

##### `checkMemberForOverrideModifier` (`node_modules/typescript/lib/typescript.js:85606:42`)

|      % |    Size | Samples | Caller                                   | Location                                             |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `checkExistingMemberForOverrideModifier` | `node_modules/typescript/lib/typescript.js:85586:50` |

##### `emitIntersectionType` (`node_modules/typescript/lib/typescript.js:117665:32`)

|      % |    Size | Samples | Caller                       | Location                                              |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `pipelineEmitWithHintWorker` | `node_modules/typescript/lib/typescript.js:116837:38` |

##### `isConstContext` (`node_modules/typescript/lib/typescript.js:81235:26`)

|      % |    Size | Samples | Caller               | Location                                             |
| -----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `checkObjectLiteral` | `node_modules/typescript/lib/typescript.js:74814:30` |

##### `join` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `doJSDocScan` | `node_modules/typescript/lib/typescript.js:37253:27` |

##### `getTypeChecker` (`node_modules/typescript/lib/typescript.js:123266:26`)

|      % |    Size | Samples | Caller        | Location                                              |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37` |

##### `createNodeFactory` (`node_modules/typescript/lib/typescript.js:23135:27`)

|      % |    Size | Samples | Caller        | Location                                          |
| -----: | ------: | ------: | ------------- | ------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:16:15` |

##### `readPackageJsonTypesVersionPaths` (`node_modules/typescript/lib/typescript.js:42158:42`)

|      % |    Size | Samples | Caller                             | Location                                             |
| -----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getVersionPathsOfPackageJsonInfo` | `node_modules/typescript/lib/typescript.js:43646:42` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:116511:63`)

|      % |    Size | Samples | Caller        | Location                                            |
| -----: | ------: | ------: | ------------- | --------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:3504:10` |

##### `toPath3` (`node_modules/typescript/lib/typescript.js:122790:19`)

|      % |    Size | Samples | Caller                 | Location                                              |
| -----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `findSourceFileWorker` | `node_modules/typescript/lib/typescript.js:123984:32` |

##### `getSubPatternFromSpec` (`node_modules/typescript/lib/typescript.js:21110:31`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21101:25` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:1:1`)

|      % |    Size | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `getLeadingLineTerminatorCount` (`node_modules/typescript/lib/typescript.js:119810:41`)

|      % |    Size | Samples | Caller              | Location                                              |
| -----: | ------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `emitNodeListItems` | `node_modules/typescript/lib/typescript.js:119610:29` |

##### `getMapOfCacheRedirects` (`node_modules/typescript/lib/typescript.js:42558:34`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getFromDirectoryCache` | `node_modules/typescript/lib/typescript.js:42672:33` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |     Size | Samples | Function                                   | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 21.8 MiB |      28 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 100.0% | 21.8 MiB |      28 | `(anonymous)`                              | `tsc-run.mjs:1:1`                                     |
| 100.0% | 21.8 MiB |      28 | `next`                                     | `<unknown>`                                           |
| 100.0% | 21.8 MiB |      28 | `run`                                      | `node:internal/modules/esm/module_job:332:12`         |
| 100.0% | 21.8 MiB |      28 | `(anonymous)`                              | `<unknown>`                                           |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`            |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`            |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`            |
|  56.4% | 12.3 MiB |       9 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`             |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`            |
|  56.4% | 12.3 MiB |       9 | `require`                                  | `node:internal/modules/helpers:146:19`                |
|  37.9% | 8.27 MiB |       1 | `readFileSync`                             | `node:fs:433:22`                                      |
|  37.9% | 8.27 MiB |       1 | `defaultLoadImpl`                          | `node:internal/modules/cjs/loader:1112:25`            |
|  37.9% | 8.27 MiB |       1 | `loadSource`                               | `node:internal/modules/cjs/loader:1797:20`            |
|  34.5% | 7.51 MiB |      15 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17`   |
|  23.0% | 5.01 MiB |      10 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17`   |
|  20.7% | 4.51 MiB |       9 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
|  20.7% | 4.51 MiB |       9 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36` |
|  20.7% | 4.51 MiB |       9 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |
|  20.7% | 4.51 MiB |       9 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34` |

#### Categories

##### Standard library

|      % |     Size | Samples | Function          | Location                                      |
| -----: | -------: | ------: | ----------------- | --------------------------------------------- |
| 100.0% | 21.8 MiB |      28 | `next`            | `<unknown>`                                   |
| 100.0% | 21.8 MiB |      28 | `run`             | `node:internal/modules/esm/module_job:332:12` |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37`    |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33`    |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24`    |
|  56.4% | 12.3 MiB |       9 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`     |
|  56.4% | 12.3 MiB |       9 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36`    |
|  56.4% | 12.3 MiB |       9 | `require`         | `node:internal/modules/helpers:146:19`        |
|  37.9% | 8.27 MiB |       1 | `readFileSync`    | `node:fs:433:22`                              |
|  37.9% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`    |
|  37.9% | 8.27 MiB |       1 | `loadSource`      | `node:internal/modules/cjs/loader:1797:20`    |
|  18.5% | 4.03 MiB |       8 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37`    |
|   9.3% | 2.03 MiB |       4 | `wrapSafe`        | `node:internal/modules/cjs/loader:1671:18`    |
|   4.6% |    1 MiB |       2 | `forEach`         | `<unknown>`                                   |
|   2.3% |  514 KiB |       1 | `exec`            | `<unknown>`                                   |
|   2.3% |  512 KiB |       1 | `join`            | `<unknown>`                                   |

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 34.5% | 7.51 MiB |      15 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17`   |
| 23.0% | 5.01 MiB |      10 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17`   |
| 20.7% | 4.51 MiB |       9 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 20.7% | 4.51 MiB |       9 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36` |
| 20.7% | 4.51 MiB |       9 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |
| 20.7% | 4.51 MiB |       9 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34` |
| 20.7% | 4.51 MiB |       9 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45` |
| 20.7% | 4.51 MiB |       9 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41` |
| 20.7% | 4.51 MiB |       9 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 20.7% | 4.51 MiB |       9 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32` |
| 20.7% | 4.51 MiB |       9 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34` |
| 20.7% | 4.51 MiB |       9 | `findSourceFileWorker`                     | `node_modules/typescript/lib/typescript.js:123984:32` |
| 20.7% | 4.51 MiB |       9 | `findSourceFile`                           | `node_modules/typescript/lib/typescript.js:123967:26` |
| 20.7% | 4.51 MiB |       9 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123923:7`  |
| 20.7% | 4.51 MiB |       9 | `getSourceFileFromReferenceWorker`         | `node_modules/typescript/lib/typescript.js:123879:44` |
| 20.7% | 4.51 MiB |       9 | `processSourceFile`                        | `node_modules/typescript/lib/typescript.js:123920:29` |
| 20.7% | 4.51 MiB |       9 | `processRootFile`                          | `node_modules/typescript/lib/typescript.js:123708:27` |
| 20.7% | 4.51 MiB |       9 | `createProgram`                            | `node_modules/typescript/lib/typescript.js:122262:23` |
| 18.4% | 4.01 MiB |       8 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:122449:24` |
| 16.1% | 3.51 MiB |       7 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 56.4% | 12.3 MiB |       9 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 20.7% | 4.51 MiB |       9 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:123327:34` |
| 20.7% | 4.51 MiB |       9 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:122262:23` |
|  2.3% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:40536:42`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 21.8 MiB |      28 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `next` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location          |
| -----: | -------: | ------: | ------------- | ----------------- |
| 100.0% | 21.8 MiB |      28 | `(anonymous)` | `tsc-run.mjs:1:1` |

##### `run` (`node:internal/modules/esm/module_job:332:12`)

|      % |     Size | Samples | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 21.8 MiB |      28 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Samples | Callee | Location                                      |
| -----: | -------: | ------: | ------ | --------------------------------------------- |
| 100.0% | 21.8 MiB |      28 | `run`  | `node:internal/modules/esm/module_job:332:12` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 67.2% | 8.27 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |
| 32.8% | 4.03 MiB |       8 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.3 MiB |       9 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.3 MiB |       9 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.3 MiB |       9 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 12.3 MiB |       9 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.3 MiB |       9 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.27 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |     Size | Samples | Callee            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:2365:17`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 53.3% | 4.01 MiB |       8 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:24` |
| 40.0% | 3.01 MiB |       6 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:86886:30`  |
|  6.7% |  514 KiB |       1 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124200:35` |
|  6.7% |  512 KiB |       1 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122498:30` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:2612:17`)

|     % |     Size | Samples | Callee        | Location                                              |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 90.0% | 4.51 MiB |       9 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123317:76` |
| 10.0% |  512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21101:25`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123385:37`)

|     % |     Size | Samples | Callee            | Location                                              |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 77.8% | 3.51 MiB |       7 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js:87322:27`  |
| 22.2% |    1 MiB |       2 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js:123266:26` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:123365:36`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:123384:52`)

|      % |     Size | Samples | Callee                     | Location                                              |
| -----: | -------: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:123670:34`)

|      % |     Size | Samples | Callee                                     | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:123381:45`)

|      % |     Size | Samples | Callee                   | Location                                              |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:123670:34` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:123375:41`)

|      % |     Size | Samples | Callee                              | Location                                              |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123381:45` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123317:76`)

|      % |     Size | Samples | Callee                          | Location                                              |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123375:41` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:123313:32`)

|      % |     Size | Samples | Callee    | Location                                            |
| -----: | -------: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `flatMap` | `node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:123327:34`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:123313:32` |

##### `findSourceFileWorker` (`node_modules/typescript/lib/typescript.js:123984:32`)

|     % |     Size | Samples | Callee                           | Location                                              |
| ----: | -------: | ------: | -------------------------------- | ----------------------------------------------------- |
| 77.8% | 3.51 MiB |       7 | `processImportedModules`         | `node_modules/typescript/lib/typescript.js:124378:34` |
| 44.5% |    2 MiB |       4 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:121493:10` |
| 33.4% |  1.5 MiB |       3 | `processTypeReferenceDirectives` | `node_modules/typescript/lib/typescript.js:124212:42` |
| 11.1% |  514 KiB |       1 | `processReferencedFiles`         | `node_modules/typescript/lib/typescript.js:124199:34` |
| 11.1% |  513 KiB |       1 | `getCreateSourceFileOptions`     | `node_modules/typescript/lib/typescript.js:123978:38` |

##### `findSourceFile` (`node_modules/typescript/lib/typescript.js:123967:26`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `findSourceFileWorker` | `node_modules/typescript/lib/typescript.js:123984:32` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123923:7`)

|      % |     Size | Samples | Callee           | Location                                              |
| -----: | -------: | ------: | ---------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `findSourceFile` | `node_modules/typescript/lib/typescript.js:123967:26` |

##### `getSourceFileFromReferenceWorker` (`node_modules/typescript/lib/typescript.js:123879:44`)

|      % |     Size | Samples | Callee        | Location                                             |
| -----: | -------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123923:7` |

##### `processSourceFile` (`node_modules/typescript/lib/typescript.js:123920:29`)

|      % |     Size | Samples | Callee                             | Location                                              |
| -----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js:123879:44` |

##### `processRootFile` (`node_modules/typescript/lib/typescript.js:123708:27`)

|      % |     Size | Samples | Callee              | Location                                              |
| -----: | -------: | ------: | ------------------- | ----------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `processSourceFile` | `node_modules/typescript/lib/typescript.js:123920:29` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js:122262:23`)

|      % |     Size | Samples | Callee    | Location                                            |
| -----: | -------: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 4.51 MiB |       9 | `forEach` | `node_modules/typescript/lib/typescript.js:2365:17` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 50.3% | 2.03 MiB |       4 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |
| 49.7% |    2 MiB |       4 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:122449:24`)

|      % |     Size | Samples | Callee            | Location                                              |
| -----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 100.0% | 4.01 MiB |       8 | `processRootFile` | `node_modules/typescript/lib/typescript.js:123708:27` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:86895:36`)

|     % |     Size | Samples | Callee                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 57.2% | 2.01 MiB |       4 | `checkTypeReferenceNode` | `node_modules/typescript/lib/typescript.js:82223:34` |
| 57.2% | 2.01 MiB |       4 | `checkClassDeclaration`  | `node_modules/typescript/lib/typescript.js:85417:33` |
| 42.9% | 1.51 MiB |       3 | `checkMethodDeclaration` | `node_modules/typescript/lib/typescript.js:82023:34` |
| 42.8% |  1.5 MiB |       3 | `checkBlock`             | `node_modules/typescript/lib/typescript.js:83716:22` |
| 14.3% |  513 KiB |       1 | `checkIndexedAccessType` | `node_modules/typescript/lib/typescript.js:82349:34` |

##### `forEach` (`<unknown>`)

|      % |  Size | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:87186:29` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37.9% | 8.27 MiB |       1 | `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  9.3% | 2.03 MiB |       4 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.6% |    1 MiB |       2 | `diag` (`node_modules/typescript/lib/typescript.js:9336:14`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |  518 KiB |       1 | `typeToTypeNodeWorker` (`node_modules/typescript/lib/typescript.js:53183:34`) ← `typeToTypeNodeHelper` (53177:34) ← `mapToTypeNodes` (54064:28) ← `typeToTypeNodeWorker` (53183:34) ← `typeToTypeNodeHelper` (53177:34) ← `(anonymous)` (53051:121) ← `withContext` (53148:25) ← `typeToTypeNode` (53051:23) ← `typeToString` (53002:24) ← `getTypeNamesForErrorDisplay` (53023:39) ← `reportRelationError` (66409:33) ← `reportErrorResults` (66600:32) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `eachTypeRelatedToType` (66935:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) |
|  2.3% |  514 KiB |       1 | `exec` ← `extractPragmas` (`node_modules/typescript/lib/typescript.js:38669:24`) ← `processCommentPragmas` (38564:31) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |  514 KiB |       1 | `parseSourceFile` (`node_modules/typescript/lib/typescript.js:31471:27`) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.3% |  513 KiB |       1 | `resolveModuleName` (`node_modules/typescript/lib/typescript.js:42868:27`) ← `resolve` (121935:14) ← `loadWithModeAwareCache` (121967:32) ← `actualResolveModuleNamesWorker` (122336:38) ← `resolveModuleNamesWorker` (122716:36) ← `resolveModuleNamesReusingOldState` (122817:45) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% |  513 KiB |       1 | `parseDeclarationWorker` (`node_modules/typescript/lib/typescript.js:36069:34`) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |  513 KiB |       1 | `getSetExternalModuleIndicator` (`node_modules/typescript/lib/typescript.js:20661:39`) ← `getCreateSourceFileOptions` (123978:38) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.3% |  513 KiB |       1 | `bindParentToChildIgnoringJSDoc` (`node_modules/typescript/lib/typescript.js:21713:42`) ← `forEachChildRecursively` (31244:33) ← `bindParentToChild` (21727:29) ← `setParentRecursive` (21708:28) ← `getModuleInstanceState` (44660:32) ← `declareModuleSymbol` (46298:31) ← `bindModuleDeclaration` (46270:33) ← `bindWorker` (46663:22) ← `(anonymous)` (45224:21) ← `bindEach` (45226:20) ← `bindEachFunctionsFirst` (45222:34) ← `bindChildren` (45235:24) ← `bindContainer` (45136:25) ← `bind` (46600:16) ← `bindSourceFile2` (44851:27) ← `bindSourceFile` (44794:24) ← `initializeTypeChecker` (88776:33) ← `createTypeChecker` (48842:27) ← `getTypeChecker` (123266:26) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.3% |  513 KiB |       1 | `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js:60131:50`) ← `getPropertiesOfType` (60156:31) ← `getPropertiesOfUnionOrIntersectionType` (60131:50) ← `getReducedType` (60678:26) ← `getNormalizedUnionOrIntersectionType` (66156:48) ← `getNormalizedType` (66148:29) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `isTypeRelatedTo` (66101:27) ← `isTypeAssignableTo` (65221:30) ← `(anonymous)` (82330:30) ← `everyType` (71225:21) ← `checkIndexedAccessIndexType` (82322:39) ← `checkIndexedAccessType` (82349:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `visitNode2` (30720:20) ← `forEachChildInConditionalType` (30846:70) ← `forEachChild` (31237:22) ← `checkConditionalType` (82384:32) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkMappedType` (82354:27) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.3% |  513 KiB |       1 | `checkMemberForOverrideModifier` (`node_modules/typescript/lib/typescript.js:85606:42`) ← `checkExistingMemberForOverrideModifier` (85586:50) ← `checkMembersForOverrideModifier` (85547:43) ← `checkClassLikeDeclaration` (85429:37) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.3% |  512 KiB |       1 | `emitIntersectionType` (`node_modules/typescript/lib/typescript.js:117665:32`) ← `pipelineEmitWithHintWorker` (116837:38) ← `pipelineEmitWithHint` (116824:32) ← `pipelineEmit` (116778:24) ← `print` (116692:17) ← `writeNode` (116630:21) ← `typeToString` (53002:24) ← `getTypeNamesForErrorDisplay` (53023:39) ← `reportRelationError` (66409:33) ← `reportErrorResults` (66600:32) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `getSignatureApplicabilityError` (76912:42) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.3% |  512 KiB |       1 | `isConstContext` (`node_modules/typescript/lib/typescript.js:81235:26`) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.3% |  512 KiB |       1 | `join` ← `doJSDocScan` (`node_modules/typescript/lib/typescript.js:37253:27`) ← `parseJSDocCommentWorker` (37231:37) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |  512 KiB |       1 | `getTypeChecker` (`node_modules/typescript/lib/typescript.js:123266:26`) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.3% |  512 KiB |       1 | `createNodeFactory` (`node_modules/typescript/lib/typescript.js:23135:27`) ← `(anonymous)` (16:15) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.3% |  512 KiB |       1 | `readPackageJsonTypesVersionPaths` (`node_modules/typescript/lib/typescript.js:42158:42`) ← `getVersionPathsOfPackageJsonInfo` (43646:42) ← `loadNodeModuleFromDirectory` (43492:37) ← `(anonymous)` (42363:38) ← `firstDefined` (2387:22) ← `primaryLookup` (42358:25) ← `resolveTypeReferenceDirective` (42241:39) ← `resolve` (121956:14) ← `loadWithModeAwareCache` (121967:32) ← `actualResolveTypeReferenceDirectiveNamesWorker` (122367:54) ← `resolveTypeReferenceDirectiveNamesWorker` (122730:52) ← `resolveTypeReferenceDirectiveNamesReusingOldState` (122897:61) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.3% |  512 KiB |       1 | `(anonymous)` (`node_modules/typescript/lib/typescript.js:116511:63`) ← `(anonymous)` (3504:10) ← `typeToString` (53002:24) ← `getTypeNamesForErrorDisplay` (53023:39) ← `reportRelationError` (66409:33) ← `reportErrorResults` (66600:32) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |  512 KiB |       1 | `toPath3` (`node_modules/typescript/lib/typescript.js:122790:19`) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
