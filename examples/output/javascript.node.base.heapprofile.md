# Heap profile

Allocated 34.4 MiB over 52 samples (677 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 58.3% |   20 MiB |      40 |
| Standard library | 41.7% | 14.3 MiB |      12 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                          | Location                                             |
| ----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 25.4% | 8.72 MiB |       1 | `readFileSync`                                    | `node:fs:433:22`                                     |
|  9.1% | 3.12 MiB |       6 | `wrapSafe`                                        | `node:internal/modules/cjs/loader:1671:18`           |
|  4.4% |  1.5 MiB |       3 | `__init`                                          | `node_modules/typescript/lib/typescript.js:21:43`    |
|  2.9% |    1 MiB |       2 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:18:11`    |
|  1.5% |  516 KiB |       1 | `test`                                            | `<unknown>`                                          |
|  1.5% |  516 KiB |       1 | `scan`                                            | `node_modules/typescript/lib/typescript.js:10327:18` |
|  1.5% |  516 KiB |       1 | `checkGrammarForInOrForOfStatement`               | `node_modules/typescript/lib/typescript.js:87116:47` |
|  1.5% |  515 KiB |       1 | `discriminateTypeByDiscriminableItems`            | `node_modules/typescript/lib/typescript.js:65888:50` |
|  1.5% |  515 KiB |       1 | `checkUnusedTypeParameters`                       | `node_modules/typescript/lib/typescript.js:80724:39` |
|  1.5% |  515 KiB |       1 | `isPrivateIdentifier`                             | `node_modules/typescript/lib/typescript.js:26566:31` |
|  1.5% |  514 KiB |       1 | `bind`                                            | `node_modules/typescript/lib/typescript.js:44000:18` |
|  1.5% |  513 KiB |       1 | `getSignatureApplicabilityError`                  | `node_modules/typescript/lib/typescript.js:74212:44` |
|  1.5% |  513 KiB |       1 | `parseUpdateExpression`                           | `node_modules/typescript/lib/typescript.js:32532:39` |
|  1.5% |  513 KiB |       1 | `loadModuleFromNearestNodeModulesDirectoryWorker` | `node_modules/typescript/lib/typescript.js:41800:59` |
|  1.5% |  513 KiB |       1 | `onEnter`                                         | `node_modules/typescript/lib/typescript.js:43376:23` |
|  1.5% |  513 KiB |       1 | `reportErrorResults`                              | `node_modules/typescript/lib/typescript.js:63920:34` |
|  1.5% |  513 KiB |       1 | `declareSymbol`                                   | `node_modules/typescript/lib/typescript.js:42491:27` |
|  1.5% |  513 KiB |       1 | `isDeclarationFileName`                           | `node_modules/typescript/lib/typescript.js:28534:33` |
|  1.5% |  513 KiB |       1 | `parseModifiers`                                  | `node_modules/typescript/lib/typescript.js:34330:32` |
|  1.5% |  513 KiB |       1 | `canFollowTypeArgumentsInExpression`              | `node_modules/typescript/lib/typescript.js:33100:52` |

#### Categories

##### Third-party

|    % |    Size | Samples | Function                                          | Location                                             |
| ---: | ------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 4.4% | 1.5 MiB |       3 | `__init`                                          | `node_modules/typescript/lib/typescript.js:21:43`    |
| 2.9% |   1 MiB |       2 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:18:11`    |
| 1.5% | 516 KiB |       1 | `scan`                                            | `node_modules/typescript/lib/typescript.js:10327:18` |
| 1.5% | 516 KiB |       1 | `checkGrammarForInOrForOfStatement`               | `node_modules/typescript/lib/typescript.js:87116:47` |
| 1.5% | 515 KiB |       1 | `discriminateTypeByDiscriminableItems`            | `node_modules/typescript/lib/typescript.js:65888:50` |
| 1.5% | 515 KiB |       1 | `checkUnusedTypeParameters`                       | `node_modules/typescript/lib/typescript.js:80724:39` |
| 1.5% | 515 KiB |       1 | `isPrivateIdentifier`                             | `node_modules/typescript/lib/typescript.js:26566:31` |
| 1.5% | 514 KiB |       1 | `bind`                                            | `node_modules/typescript/lib/typescript.js:44000:18` |
| 1.5% | 513 KiB |       1 | `getSignatureApplicabilityError`                  | `node_modules/typescript/lib/typescript.js:74212:44` |
| 1.5% | 513 KiB |       1 | `parseUpdateExpression`                           | `node_modules/typescript/lib/typescript.js:32532:39` |
| 1.5% | 513 KiB |       1 | `loadModuleFromNearestNodeModulesDirectoryWorker` | `node_modules/typescript/lib/typescript.js:41800:59` |
| 1.5% | 513 KiB |       1 | `onEnter`                                         | `node_modules/typescript/lib/typescript.js:43376:23` |
| 1.5% | 513 KiB |       1 | `reportErrorResults`                              | `node_modules/typescript/lib/typescript.js:63920:34` |
| 1.5% | 513 KiB |       1 | `declareSymbol`                                   | `node_modules/typescript/lib/typescript.js:42491:27` |
| 1.5% | 513 KiB |       1 | `isDeclarationFileName`                           | `node_modules/typescript/lib/typescript.js:28534:33` |
| 1.5% | 513 KiB |       1 | `parseModifiers`                                  | `node_modules/typescript/lib/typescript.js:34330:32` |
| 1.5% | 513 KiB |       1 | `canFollowTypeArgumentsInExpression`              | `node_modules/typescript/lib/typescript.js:33100:52` |
| 1.5% | 513 KiB |       1 | `checkForOfStatement`                             | `node_modules/typescript/lib/typescript.js:81461:33` |
| 1.5% | 513 KiB |       1 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:39924:40` |
| 1.5% | 513 KiB |       1 | `assert`                                          | `node_modules/typescript/lib/typescript.js:1757:24`  |

##### Standard library

|     % |     Size | Samples | Function                       | Location                                   |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------ |
| 25.4% | 8.72 MiB |       1 | `readFileSync`                 | `node:fs:433:22`                           |
|  9.1% | 3.12 MiB |       6 | `wrapSafe`                     | `node:internal/modules/cjs/loader:1671:18` |
|  1.5% |  516 KiB |       1 | `test`                         | `<unknown>`                                |
|  1.5% |  512 KiB |       1 | `get`                          | `<unknown>`                                |
|  1.5% |  512 KiB |       1 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38`              |
|  1.5% |  512 KiB |       1 | `compileForInternalLoader`     | `node:internal/bootstrap/realm:385:27`     |
|  1.5% |  512 KiB |       1 | `push`                         | `<unknown>`                                |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3.12 MiB |       6 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|      % |    Size | Samples | Caller                           | Location                                              |
| -----: | ------: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `src/compiler/_namespaces/ts.ts` | `node_modules/typescript/lib/typescript.js:130200:37` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:18:11`)

|      % |  Size | Samples | Caller        | Location                                        |
| -----: | ----: | ------: | ------------- | ----------------------------------------------- |
| 100.0% | 1 MiB |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

##### `test` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 516 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18163:62` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|      % |    Size | Samples | Caller             | Location                                             |
| -----: | ------: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% | 516 KiB |       1 | `createIdentifier` | `node_modules/typescript/lib/typescript.js:30115:34` |

##### `checkGrammarForInOrForOfStatement` (`node_modules/typescript/lib/typescript.js:87116:47`)

|      % |    Size | Samples | Caller                | Location                                             |
| -----: | ------: | ------: | --------------------- | ---------------------------------------------------- |
| 100.0% | 516 KiB |       1 | `checkForOfStatement` | `node_modules/typescript/lib/typescript.js:81461:33` |

##### `discriminateTypeByDiscriminableItems` (`node_modules/typescript/lib/typescript.js:65888:50`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 515 KiB |       1 | `findMatchingDiscriminantType` | `node_modules/typescript/lib/typescript.js:87833:42` |

##### `checkUnusedTypeParameters` (`node_modules/typescript/lib/typescript.js:80724:39`)

|      % |    Size | Samples | Caller                   | Location                                             |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% | 515 KiB |       1 | `checkUnusedIdentifiers` | `node_modules/typescript/lib/typescript.js:80633:36` |

##### `isPrivateIdentifier` (`node_modules/typescript/lib/typescript.js:26566:31`)

|      % |    Size | Samples | Caller               | Location                                             |
| -----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 100.0% | 515 KiB |       1 | `getDeclarationName` | `node_modules/typescript/lib/typescript.js:42423:32` |

##### `bind` (`node_modules/typescript/lib/typescript.js:44000:18`)

|      % |    Size | Samples | Caller            | Location                                             |
| -----: | ------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 514 KiB |       1 | `bindSourceFile2` | `node_modules/typescript/lib/typescript.js:42348:29` |

##### `getSignatureApplicabilityError` (`node_modules/typescript/lib/typescript.js:74212:44`)

|      % |    Size | Samples | Caller           | Location                                             |
| -----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `chooseOverload` | `node_modules/typescript/lib/typescript.js:74764:30` |

##### `parseUpdateExpression` (`node_modules/typescript/lib/typescript.js:32532:39`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `parseUnaryExpressionOrHigher` | `node_modules/typescript/lib/typescript.js:32458:46` |

##### `loadModuleFromNearestNodeModulesDirectoryWorker` (`node_modules/typescript/lib/typescript.js:41800:59`)

|      % |    Size | Samples | Caller                                      | Location                                             |
| -----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `loadModuleFromNearestNodeModulesDirectory` | `node_modules/typescript/lib/typescript.js:41774:53` |

##### `onEnter` (`node_modules/typescript/lib/typescript.js:43376:23`)

|      % |    Size | Samples | Caller  | Location                                             |
| -----: | ------: | ------: | ------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `enter` | `node_modules/typescript/lib/typescript.js:28180:23` |

##### `reportErrorResults` (`node_modules/typescript/lib/typescript.js:63920:34`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js:42491:27`)

|      % |    Size | Samples | Caller                             | Location                                             |
| -----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js:43636:46` |

##### `isDeclarationFileName` (`node_modules/typescript/lib/typescript.js:28534:33`)

|      % |    Size | Samples | Caller                              | Location                                              |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `getRedirectReferenceForResolution` | `node_modules/typescript/lib/typescript.js:120954:47` |

##### `parseModifiers` (`node_modules/typescript/lib/typescript.js:34330:32`)

|      % |    Size | Samples | Caller                      | Location                                             |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `parseObjectLiteralElement` | `node_modules/typescript/lib/typescript.js:33203:43` |

##### `canFollowTypeArgumentsInExpression` (`node_modules/typescript/lib/typescript.js:33100:52`)

|      % |    Size | Samples | Caller                      | Location                                             |
| -----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `parseMemberExpressionRest` | `node_modules/typescript/lib/typescript.js:32975:43` |

##### `checkForOfStatement` (`node_modules/typescript/lib/typescript.js:81461:33`)

|      % |    Size | Samples | Caller                     | Location                                             |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:39924:40`)

|      % |    Size | Samples | Caller         | Location                                          |
| -----: | ------: | ------: | -------------- | ------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `firstDefined` | `node_modules/typescript/lib/typescript.js:74:24` |

##### `assert` (`node_modules/typescript/lib/typescript.js:1757:24`)

|      % |    Size | Samples | Caller                    | Location                                             |
| -----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `parseJSDocCommentWorker` | `node_modules/typescript/lib/typescript.js:35053:43` |

##### `get` (`<unknown>`)

|      % |    Size | Samples | Caller                            | Location                                              |
| -----: | ------: | ------: | --------------------------------- | ----------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `isSourceFileFromExternalLibrary` | `node_modules/typescript/lib/typescript.js:121468:45` |

##### `getCLIOptionsInfoFromBinding` (`node:internal/options:32:38`)

|      % |    Size | Samples | Caller              | Location                                  |
| -----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 512 KiB |       1 | `buildAllowedFlags` | `node:internal/process/per_thread:389:27` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |    Size | Samples | Caller           | Location                               |
| -----: | ------: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 512 KiB |       1 | `requireBuiltin` | `node:internal/bootstrap/realm:422:24` |

##### `push` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                           |
| -----: | ------: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `multiMapAdd` | `node_modules/typescript/lib/typescript.js:984:23` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |     Size | Samples | Function                                   | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 34.4 MiB |      52 | `(anonymous)`                              | `<unknown>`                                           |
|  98.5% | 33.9 MiB |      51 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
|  98.5% | 33.9 MiB |      51 | `(anonymous)`                              | `tsc-run.mjs:1:1`                                     |
|  98.5% | 33.9 MiB |      51 | `next`                                     | `<unknown>`                                           |
|  98.5% | 33.9 MiB |      51 | `run`                                      | `node:internal/modules/esm/module_job:332:12`         |
|  49.0% | 16.8 MiB |      17 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`            |
|  49.0% | 16.8 MiB |      17 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`            |
|  49.0% | 16.8 MiB |      17 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`            |
|  49.0% | 16.8 MiB |      17 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`             |
|  49.0% | 16.8 MiB |      17 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`            |
|  49.0% | 16.8 MiB |      17 | `require`                                  | `node:internal/modules/helpers:146:19`                |
|  32.1% |   11 MiB |      22 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
|  29.1% |   10 MiB |      20 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
|  29.1% |   10 MiB |      20 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
|  29.1% |   10 MiB |      20 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
|  29.1% |   10 MiB |      20 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
|  29.1% |   10 MiB |      20 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
|  29.1% |   10 MiB |      20 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
|  29.1% |   10 MiB |      20 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
|  29.1% |   10 MiB |      20 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 32.1% |   11 MiB |      22 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 29.1% |   10 MiB |      20 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 29.1% |   10 MiB |      20 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 29.1% |   10 MiB |      20 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 29.1% |   10 MiB |      20 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 29.1% |   10 MiB |      20 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 29.1% |   10 MiB |      20 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 29.1% |   10 MiB |      20 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 29.1% |   10 MiB |      20 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 29.1% |   10 MiB |      20 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 29.1% |   10 MiB |      20 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 18.9% | 6.51 MiB |      13 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 18.9% | 6.51 MiB |      13 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 18.9% | 6.51 MiB |      13 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 18.9% | 6.51 MiB |      13 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 18.9% | 6.51 MiB |      13 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 17.5% | 6.01 MiB |      12 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 17.5% | 6.01 MiB |      12 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 17.5% | 6.01 MiB |      12 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:80896:24`  |
| 16.0% | 5.51 MiB |      11 | `createProgram`                            | `node_modules/typescript/lib/typescript.js:120478:25` |

##### Standard library

|     % |     Size | Samples | Function                       | Location                                      |
| ----: | -------: | ------: | ------------------------------ | --------------------------------------------- |
| 98.5% | 33.9 MiB |      51 | `next`                         | `<unknown>`                                   |
| 98.5% | 33.9 MiB |      51 | `run`                          | `node:internal/modules/esm/module_job:332:12` |
| 49.0% | 16.8 MiB |      17 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1878:37`    |
| 49.0% | 16.8 MiB |      17 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1490:33`    |
| 49.0% | 16.8 MiB |      17 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1193:24`    |
| 49.0% | 16.8 MiB |      17 | `wrapModuleLoad`               | `node:internal/modules/cjs/loader:237:24`     |
| 49.0% | 16.8 MiB |      17 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1519:36`    |
| 49.0% | 16.8 MiB |      17 | `require`                      | `node:internal/modules/helpers:146:19`        |
| 25.4% | 8.72 MiB |       1 | `readFileSync`                 | `node:fs:433:22`                              |
| 25.4% | 8.72 MiB |       1 | `defaultLoadImpl`              | `node:internal/modules/cjs/loader:1112:25`    |
| 25.4% | 8.72 MiB |       1 | `loadSource`                   | `node:internal/modules/cjs/loader:1797:20`    |
| 23.6% | 8.12 MiB |      16 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1731:37`    |
|  9.1% | 3.12 MiB |       6 | `wrapSafe`                     | `node:internal/modules/cjs/loader:1671:18`    |
|  8.7% |    3 MiB |       6 | `forEach`                      | `<unknown>`                                   |
|  2.9% |    1 MiB |       2 | `get`                          | `<unknown>`                                   |
|  1.5% |  516 KiB |       1 | `test`                         | `<unknown>`                                   |
|  1.5% |  512 KiB |       1 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38`                 |
|  1.5% |  512 KiB |       1 | `buildAllowedFlags`            | `node:internal/process/per_thread:389:27`     |
|  1.5% |  512 KiB |       1 | `get`                          | `node:internal/bootstrap/node:250:6`          |
|  1.5% |  512 KiB |       1 | `getOwn`                       | `node:internal/bootstrap/realm:205:16`        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                  | Location                                      |
| ----: | -------: | ------: | ----------------------- | --------------------------------------------- |
| 98.5% | 33.9 MiB |      51 | `run`                   | `node:internal/modules/esm/module_job:332:12` |
|  1.5% |  512 KiB |       1 | `getModuleJobForImport` | `node:internal/modules/esm/loader:319:30`     |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 49.7% | 16.8 MiB |      17 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 29.6% |   10 MiB |      20 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 16.3% | 5.51 MiB |      11 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  4.4% | 1.51 MiB |       3 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 33.9 MiB |      51 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `next` (`<unknown>`)

|      % |     Size | Samples | Callee                          | Location                                             |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 100.0% | 33.9 MiB |      51 | `(anonymous)`                   | `tsc-run.mjs:1:1`                                    |
|   1.5% |  512 KiB |       1 | `generateObjectLiteralElements` | `node_modules/typescript/lib/typescript.js:63078:44` |

##### `run` (`node:internal/modules/esm/module_job:332:12`)

|      % |     Size | Samples | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 33.9 MiB |      51 | `next` | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 51.8% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |
| 48.2% | 8.12 MiB |      16 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.8 MiB |      17 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 16.8 MiB |      17 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   3.0% |  512 KiB |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.8 MiB |      17 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 16.8 MiB |      17 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.8 MiB |      17 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 54.5% | 6.01 MiB |      12 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 40.9% | 4.51 MiB |       9 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
| 13.7% | 1.51 MiB |       3 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  4.5% |  513 KiB |       1 | `bind`               | `node_modules/typescript/lib/typescript.js:44000:18`  |
|  4.5% |  513 KiB |       1 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42711:23`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size | Samples | Callee            | Location                                              |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 65.0% | 6.51 MiB |      13 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 35.0% | 3.51 MiB |       7 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js:121488:28` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:121587:38`)

|      % |   Size | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|      % |   Size | Samples | Callee                     | Location                                              |
| -----: | -----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |   Size | Samples | Callee                                     | Location                                              |
| -----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |   Size | Samples | Callee                   | Location                                              |
| -----: | -----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |   Size | Samples | Callee                              | Location                                              |
| -----: | -----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |   Size | Samples | Callee                          | Location                                              |
| -----: | -----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |   Size | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |   Size | Samples | Callee    | Location                                           |
| -----: | -----: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |   Size | Samples | Callee                 | Location                                              |
| -----: | -----: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 10 MiB |      20 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.72 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |     Size | Samples | Callee            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 61.6% |    5 MiB |      10 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 38.4% | 3.12 MiB |       6 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |     Size | Samples | Callee               | Location                                             |
| ----: | -------: | ------: | -------------------- | ---------------------------------------------------- |
| 46.2% | 3.01 MiB |       6 | `forEach`            | `node_modules/typescript/lib/typescript.js:52:19`    |
| 46.1% |    3 MiB |       6 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js:84429:32` |
|  7.7% |  515 KiB |       1 | `addLazyDiagnostic`  | `node_modules/typescript/lib/typescript.js:84592:27` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |     Size | Samples | Callee                  | Location                                             |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 6.51 MiB |      13 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |     Size | Samples | Callee            | Location                                             |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 6.51 MiB |      13 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |     Size | Samples | Callee                                | Location                                             |
| -----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 6.51 MiB |      13 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |     Size | Samples | Callee                 | Location                                             |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 6.51 MiB |      13 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 6.01 MiB |      12 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:80896:24` |
|  41.6% |  2.5 MiB |       5 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:81283:38` |
|  41.6% |  2.5 MiB |       5 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:81301:36` |
|  33.4% | 2.01 MiB |       4 | `checkClassDeclaration`    | `node_modules/typescript/lib/typescript.js:82603:35` |
|  25.0% |  1.5 MiB |       3 | `checkFunctionDeclaration` | `node_modules/typescript/lib/typescript.js:80466:38` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 6.01 MiB |      12 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `checkBlock` (`node_modules/typescript/lib/typescript.js:80896:24`)

|      % |     Size | Samples | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 6.01 MiB |      12 | `forEach` | `node_modules/typescript/lib/typescript.js:52:19` |

##### `createProgram` (`node_modules/typescript/lib/typescript.js:120478:25`)

|     % |     Size | Samples | Callee                                              | Location                                              |
| ----: | -------: | ------: | --------------------------------------------------- | ----------------------------------------------------- |
| 81.8% | 4.51 MiB |       9 | `forEach`                                           | `node_modules/typescript/lib/typescript.js:52:19`     |
|  9.1% |  513 KiB |       1 | `resolveTypeReferenceDirectiveNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:121106:63` |
|  9.1% |  512 KiB |       1 | `verifyCompilerOptions`                             | `node_modules/typescript/lib/typescript.js:122720:35` |

##### `forEach` (`<unknown>`)

|      % |  Size | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 3 MiB |       6 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:84436:31` |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Callee | Location                             |
| ----: | ------: | ------: | ------ | ------------------------------------ |
| 50.0% | 512 KiB |       1 | `get`  | `node:internal/bootstrap/node:250:6` |

##### `buildAllowedFlags` (`node:internal/process/per_thread:389:27`)

|      % |    Size | Samples | Callee                         | Location                      |
| -----: | ------: | ------: | ------------------------------ | ----------------------------- |
| 100.0% | 512 KiB |       1 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38` |

##### `get` (`node:internal/bootstrap/node:250:6`)

|      % |    Size | Samples | Callee              | Location                                  |
| -----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 512 KiB |       1 | `buildAllowedFlags` | `node:internal/process/per_thread:389:27` |

##### `getOwn` (`node:internal/bootstrap/realm:205:16`)

|      % |    Size | Samples | Callee | Location    |
| -----: | ------: | ------: | ------ | ----------- |
| 100.0% | 512 KiB |       1 | `get`  | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.4% | 8.72 MiB |       1 | `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  9.1% | 3.12 MiB |       6 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.4% |  1.5 MiB |       3 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `src/compiler/_namespaces/ts.ts` (130200:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.9% |    1 MiB |       2 | `(anonymous)` (`node_modules/typescript/lib/typescript.js:18:11`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |  516 KiB |       1 | `test` ← `(anonymous)` (`node_modules/typescript/lib/typescript.js:18163:62`) ← `findIndex` (158:21) ← `visitDirectory` (18147:28) ← `matchFiles` (18133:22) ← `readDirectory` (6527:33) ← `getFileNamesFromConfigSpecs` (37708:39) ← `getFileNames` (37276:26) ← `parseJsonConfigFileContentWorker` (37182:44) ← `parseJsonSourceFileConfigFileContent` (37152:48) ← `getParsedCommandLineOfConfigFile` (36594:44)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |  516 KiB |       1 | `scan` (`node_modules/typescript/lib/typescript.js:10327:18`) ← `createIdentifier` (30115:34) ← `parseRightSideOfDot` (30804:37) ← `parseEntityName` (30778:33) ← `parseTypeQuery` (31107:32) ← `parseNonArrayType` (31613:35) ← `parseIntersectionTypeOrHigher` (31846:47) ← `parseUnionTypeOrHigher` (31849:40) ← `parseType` (31930:27) ← `parseTypeParameter` (31117:36) ← `parseDelimitedList` (30707:36) ← `parseBracketedList` (30770:36) ← `parseTypeParameters` (31140:37) ← `parseClassDeclarationOrExpression` (34464:51) ← `parseClassDeclaration` (34461:39) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseModuleBlock` (34566:34) ← `parseAmbientExternalModuleDeclaration` (34591:55) ← `parseModuleDeclaration` (34610:40) ← `parseDeclarationWorker` (33901:40) ← `(anonymous)` (33888:62) ← `doInsideOfContext` (29688:35) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `(anonymous)` (122412:37) ← `forEach` (52:19) ← `processReferencedFiles` (122411:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `processTypeReferenceDirectives` (122424:44) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.5% |  516 KiB |       1 | `checkGrammarForInOrForOfStatement` (`node_modules/typescript/lib/typescript.js:87116:47`) ← `checkForOfStatement` (81461:33) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionOrMethodDeclaration` (80578:46) ← `checkMethodDeclaration` (79255:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkClassDeclaration` (82603:35) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.5% |  515 KiB |       1 | `discriminateTypeByDiscriminableItems` (`node_modules/typescript/lib/typescript.js:65888:50`) ← `findMatchingDiscriminantType` (87833:42) ← `hasExcessProperties` (64009:35) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `isTypeRelatedTo` (63432:29) ← `checkTypeRelatedToAndOptionallyElaborate` (62580:54) ← `checkTypeAssignableToAndOptionallyElaborate` (62567:57) ← `checkReturnStatement` (82167:34) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionOrMethodDeclaration` (80578:46) ← `checkMethodDeclaration` (79255:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkClassDeclaration` (82603:35) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.5% |  515 KiB |       1 | `checkUnusedTypeParameters` (`node_modules/typescript/lib/typescript.js:80724:39`) ← `checkUnusedIdentifiers` (80633:36) ← `(anonymous)` (84538:27) ← `addLazyDiagnostic` (84592:27) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.5% |  515 KiB |       1 | `isPrivateIdentifier` (`node_modules/typescript/lib/typescript.js:26566:31`) ← `getDeclarationName` (42423:32) ← `declareSymbol` (42491:27) ← `declareSymbolAndAddToSymbolTable` (43636:46) ← `bindTypeParameter` (44839:31) ← `bindWorker` (44063:24) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInMappedType` (28885:66) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInConditionalType` (28868:76) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInTypeAliasDeclaration` (29033:86) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInModuleDeclaration` (29042:80) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) |
|  1.5% |  514 KiB |       1 | `bind` (`node_modules/typescript/lib/typescript.js:44000:18`) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |  513 KiB |       1 | `getSignatureApplicabilityError` (`node_modules/typescript/lib/typescript.js:74212:44`) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkNonNullExpression` (72995:36) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkReturnStatement` (82167:34) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionOrMethodDeclaration` (80578:46) ← `checkFunctionDeclarationDiagnostics` (80468:51) ← `addLazyDiagnostic` (84592:27) ← `checkFunctionDeclaration` (80466:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkModuleDeclaration` (83455:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.5% |  513 KiB |       1 | `loadModuleFromNearestNodeModulesDirectoryWorker` (`node_modules/typescript/lib/typescript.js:41800:59`) ← `loadModuleFromNearestNodeModulesDirectory` (41774:53) ← `tryResolve` (40809:24) ← `nodeModuleNameResolverWorker` (40731:40) ← `nodeModuleNameResolver` (40700:34) ← `resolveModuleName` (40429:29) ← `resolve` (120247:16) ← `loadWithModeAwareCache` (120275:34) ← `actualResolveModuleNamesWorker` (120552:40) ← `resolveModuleNamesWorker` (120925:38) ← `resolveModuleNamesReusingOldState` (121026:47) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `(anonymous)` (122412:37) ← `forEach` (52:19) ← `processReferencedFiles` (122411:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `processTypeReferenceDirectives` (122424:44) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.5% |  513 KiB |       1 | `onEnter` (`node_modules/typescript/lib/typescript.js:43376:23`) ← `enter` (28180:23) ← `trampoline` (27971:24) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `doWithConditionalBranches` (43018:39) ← `bindCondition` (43027:27) ← `bindLogicalLikeExpression` (43311:39) ← `onEnter` (43376:23) ← `enter` (28180:23) ← `trampoline` (27971:24) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInArrowFunction` (28842:72) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindConditionalExpressionFlow` (43468:43) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInVariableDeclaration` (28804:84) ← `bindEachChild` (42720:27) ← `bindVariableDeclarationFlow` (43493:41) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindEach` (42714:22) ← `visitNodes` (28315:22) ← `forEachChildInVariableDeclarationList` (28969:92) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInVariableStatement` (28966:80) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInModuleDeclaration` (29042:80) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                        |
|  1.5% |  513 KiB |       1 | `parseUpdateExpression` (`node_modules/typescript/lib/typescript.js:32532:39`) ← `parseUnaryExpressionOrHigher` (32458:46) ← `parseBinaryExpressionOrHigher` (32381:47) ← `parseAssignmentExpressionOrHigher` (32044:51) ← `parseArgumentExpression` (33191:41) ← `parseDelimitedList` (30707:36) ← `parseCallExpressionRest` (33039:41) ← `parseLeftHandSideExpressionOrHigher` (32551:53) ← `parseUpdateExpression` (32532:39) ← `parseUnaryExpressionOrHigher` (32458:46) ← `parseBinaryExpressionOrHigher` (32381:47) ← `parseExpression` (32010:33) ← `allowInAnd` (29706:28) ← `parseIfStatement` (33381:34) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseBlock` (33325:28) ← `parseStatement` (33756:32) ← `parseIfStatement` (33381:34) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |  513 KiB |       1 | `reportErrorResults` (`node_modules/typescript/lib/typescript.js:63920:34`) ← `isRelatedTo` (63813:27) ← `typeArgumentsRelatedTo` (64293:38) ← `relateVariances` (65114:33) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `isPropertySymbolTypeRelated` (65271:43) ← `propertyRelatedTo` (65290:33) ← `propertiesRelatedTo` (65393:35) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `checkTypeRelatedToAndOptionallyElaborate` (62580:54) ← `checkTypeAssignableToAndOptionallyElaborate` (62567:57) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% |  513 KiB |       1 | `declareSymbol` (`node_modules/typescript/lib/typescript.js:42491:27`) ← `declareSymbolAndAddToSymbolTable` (43636:46) ← `bindParameter` (44782:27) ← `bindWorker` (44063:24) ← `bind` (44000:18) ← `forEach` (52:19) ← `bindEach` (42714:22) ← `visitNodes` (28315:22) ← `forEachChildInFunctionDeclaration` (28836:84) ← `forEachChild` (28401:24) ← `bindEachChild` (42720:27) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `(anonymous)` (42711:23) ← `forEach` (52:19) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% |  513 KiB |       1 | `isDeclarationFileName` (`node_modules/typescript/lib/typescript.js:28534:33`) ← `getRedirectReferenceForResolution` (120954:47) ← `getModeForUsageLocation2` (123478:38) ← `resolveExternalModule` (49429:35) ← `resolveExternalModuleNameWorker` (49426:45) ← `resolveExternalModuleName` (49421:39) ← `getExternalModuleMember` (48781:37) ← `getTargetOfImportSpecifier` (48886:40) ← `getTargetOfAliasDeclaration` (48994:41) ← `getTypeOfAlias` (55712:28) ← `getNarrowedTypeOfSymbol` (70178:37) ← `checkIdentifier` (70240:29) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.5% |  513 KiB |       1 | `parseModifiers` (`node_modules/typescript/lib/typescript.js:34330:32`) ← `parseObjectLiteralElement` (33203:43) ← `parseListElement` (30471:34) ← `parseDelimitedList` (30707:36) ← `parseObjectLiteralExpression` (33254:46) ← `parsePrimaryExpression` (33114:40) ← `parseMemberExpressionOrHigher` (32571:47) ← `parseLeftHandSideExpressionOrHigher` (32551:53) ← `parseUpdateExpression` (32532:39) ← `parseUnaryExpressionOrHigher` (32458:46) ← `parseBinaryExpressionOrHigher` (32381:47) ← `parseAssignmentExpressionOrHigher` (32044:51) ← `(anonymous)` (33243:44) ← `doOutsideOfContext` (29670:36) ← `allowInAnd` (29706:28) ← `parseObjectLiteralElement` (33203:43) ← `parseListElement` (30471:34) ← `parseDelimitedList` (30707:36) ← `parseObjectLiteralExpression` (33254:46) ← `parseJsonText2` (29351:32) ← `parseJsonText` (28513:25) ← `readJsonConfigFile` (36634:30) ← `getExtendedConfig` (37550:29) ← `applyExtendedConfig` (37392:33) ← `parseConfig` (37358:23) ← `parseJsonConfigFileContentWorker` (37182:44) ← `parseJsonSourceFileConfigFileContent` (37152:48) ← `getParsedCommandLineOfConfigFile` (36594:44)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |  513 KiB |       1 | `canFollowTypeArgumentsInExpression` (`node_modules/typescript/lib/typescript.js:33100:52`) ← `parseMemberExpressionRest` (32975:43) ← `parseMemberExpressionOrHigher` (32571:47) ← `parseLeftHandSideExpressionOrHigher` (32551:53) ← `parseExpressionWithTypeArguments` (34506:50) ← `parseListElement` (30471:34) ← `parseDelimitedList` (30707:36) ← `parseHeritageClause` (34498:37) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseHeritageClauses` (34492:38) ← `parseClassDeclarationOrExpression` (34464:51) ← `parseClassDeclaration` (34461:39) ← `parseDeclarationWorker` (33901:40) ← `parseDeclaration` (33872:34) ← `parseStatement` (33756:32) ← `parseListElement` (30471:34) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
