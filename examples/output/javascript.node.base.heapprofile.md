# Heap profile

Allocated 33 MiB over 49 samples (689 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 51.8% | 17.1 MiB |      34 |
| Standard library | 48.2% | 15.9 MiB |      15 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                       | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 26.4% | 8.72 MiB |       1 | `readFileSync`                                 | `node:fs:433:22`                                     |
|  9.5% | 3.13 MiB |       6 | `wrapSafe`                                     | `node:internal/modules/cjs/loader:1671:18`           |
|  4.5% |  1.5 MiB |       3 | `__init`                                       | `node_modules/typescript/lib/typescript.js:21:43`    |
|  3.1% | 1.01 MiB |       2 | `charCodeAt`                                   | `<unknown>`                                          |
|  3.0% |    1 MiB |       2 | `compileForInternalLoader`                     | `node:internal/bootstrap/realm:385:27`               |
|  1.7% |  576 KiB |       1 | `__export`                                     | `node_modules/typescript/lib/typescript.js:27:18`    |
|  1.7% |  560 KiB |       1 | `set`                                          | `<unknown>`                                          |
|  1.5% |  517 KiB |       1 | `nextToken`                                    | `node_modules/typescript/lib/typescript.js:29792:27` |
|  1.5% |  516 KiB |       1 | `parseFunctionOrConstructorTypeToError`        | `node_modules/typescript/lib/typescript.js:31818:55` |
|  1.5% |  515 KiB |       1 | `bindChildren`                                 | `node_modules/typescript/lib/typescript.js:42723:26` |
|  1.5% |  515 KiB |       1 | `src/compiler/binder.ts`                       | `node_modules/typescript/lib/typescript.js:45024:29` |
|  1.5% |  513 KiB |       1 | `getTypeOfVariableOrParameterOrPropertyWorker` | `node_modules/typescript/lib/typescript.js:55481:58` |
|  1.5% |  513 KiB |       1 | `src/compiler/visitorPublic.ts`                | `node_modules/typescript/lib/typescript.js:88437:36` |
|  1.5% |  513 KiB |       1 | `checkObjectTypeForDuplicateDeclarations`      | `node_modules/typescript/lib/typescript.js:79183:53` |
|  1.5% |  513 KiB |       1 | `getTargetOfImportClause`                      | `node_modules/typescript/lib/typescript.js:48594:37` |
|  1.5% |  512 KiB |       1 | `checkPropertyInitialization`                  | `node_modules/typescript/lib/typescript.js:83095:41` |
|  1.5% |  512 KiB |       1 | `resolveESModuleSymbol`                        | `node_modules/typescript/lib/typescript.js:49677:35` |
|  1.5% |  512 KiB |       1 | `getCLIOptionsInfoFromBinding`                 | `node:internal/options:32:38`                        |
|  1.5% |  512 KiB |       1 | `forEachChildInTypeReference`                  | `node_modules/typescript/lib/typescript.js:28848:72` |
|  1.5% |  512 KiB |       1 | `getInstanceType`                              | `node_modules/typescript/lib/typescript.js:69812:31` |

#### Categories

##### Third-party

|    % |    Size | Samples | Function                                       | Location                                             |
| ---: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 4.5% | 1.5 MiB |       3 | `__init`                                       | `node_modules/typescript/lib/typescript.js:21:43`    |
| 1.7% | 576 KiB |       1 | `__export`                                     | `node_modules/typescript/lib/typescript.js:27:18`    |
| 1.5% | 517 KiB |       1 | `nextToken`                                    | `node_modules/typescript/lib/typescript.js:29792:27` |
| 1.5% | 516 KiB |       1 | `parseFunctionOrConstructorTypeToError`        | `node_modules/typescript/lib/typescript.js:31818:55` |
| 1.5% | 515 KiB |       1 | `bindChildren`                                 | `node_modules/typescript/lib/typescript.js:42723:26` |
| 1.5% | 515 KiB |       1 | `src/compiler/binder.ts`                       | `node_modules/typescript/lib/typescript.js:45024:29` |
| 1.5% | 513 KiB |       1 | `getTypeOfVariableOrParameterOrPropertyWorker` | `node_modules/typescript/lib/typescript.js:55481:58` |
| 1.5% | 513 KiB |       1 | `src/compiler/visitorPublic.ts`                | `node_modules/typescript/lib/typescript.js:88437:36` |
| 1.5% | 513 KiB |       1 | `checkObjectTypeForDuplicateDeclarations`      | `node_modules/typescript/lib/typescript.js:79183:53` |
| 1.5% | 513 KiB |       1 | `getTargetOfImportClause`                      | `node_modules/typescript/lib/typescript.js:48594:37` |
| 1.5% | 512 KiB |       1 | `checkPropertyInitialization`                  | `node_modules/typescript/lib/typescript.js:83095:41` |
| 1.5% | 512 KiB |       1 | `resolveESModuleSymbol`                        | `node_modules/typescript/lib/typescript.js:49677:35` |
| 1.5% | 512 KiB |       1 | `forEachChildInTypeReference`                  | `node_modules/typescript/lib/typescript.js:28848:72` |
| 1.5% | 512 KiB |       1 | `getInstanceType`                              | `node_modules/typescript/lib/typescript.js:69812:31` |
| 1.5% | 512 KiB |       1 | `forEachChildInImportType`                     | `node_modules/typescript/lib/typescript.js:28874:66` |
| 1.5% | 512 KiB |       1 | `parseType`                                    | `node_modules/typescript/lib/typescript.js:31930:27` |
| 1.5% | 512 KiB |       1 | `isYieldExpression2`                           | `node_modules/typescript/lib/typescript.js:32070:36` |
| 1.5% | 512 KiB |       1 | `extractPragmas`                               | `node_modules/typescript/lib/typescript.js:28669:26` |
| 1.5% | 512 KiB |       1 | `diag`                                         | `node_modules/typescript/lib/typescript.js:7054:16`  |
| 1.5% | 512 KiB |       1 | `getTypeAtFlowLoopLabel`                       | `node_modules/typescript/lib/typescript.js:69215:38` |

##### Standard library

|     % |     Size | Samples | Function                       | Location                                   |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------ |
| 26.4% | 8.72 MiB |       1 | `readFileSync`                 | `node:fs:433:22`                           |
|  9.5% | 3.13 MiB |       6 | `wrapSafe`                     | `node:internal/modules/cjs/loader:1671:18` |
|  3.1% | 1.01 MiB |       2 | `charCodeAt`                   | `<unknown>`                                |
|  3.0% |    1 MiB |       2 | `compileForInternalLoader`     | `node:internal/bootstrap/realm:385:27`     |
|  1.7% |  560 KiB |       1 | `set`                          | `<unknown>`                                |
|  1.5% |  512 KiB |       1 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38`              |
|  1.5% |  512 KiB |       1 | `push`                         | `<unknown>`                                |
|  1.5% |  512 KiB |       1 | `internalBinding`              | `node:internal/bootstrap/realm:185:45`     |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3.13 MiB |       6 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `__init` (`node_modules/typescript/lib/typescript.js:21:43`)

|      % |    Size | Samples | Caller                           | Location                                              |
| -----: | ------: | ------: | -------------------------------- | ----------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `src/compiler/_namespaces/ts.ts` | `node_modules/typescript/lib/typescript.js:130200:37` |

##### `charCodeAt` (`<unknown>`)

|      % |     Size | Samples | Caller                 | Location                                            |
| -----: | -------: | ------: | ---------------------- | --------------------------------------------------- |
| 100.0% | 1.01 MiB |       2 | `iterateCommentRanges` | `node_modules/typescript/lib/typescript.js:9478:32` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Size | Samples | Caller           | Location                               |
| -----: | ----: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 1 MiB |       2 | `requireBuiltin` | `node:internal/bootstrap/realm:422:24` |

##### `__export` (`node_modules/typescript/lib/typescript.js:27:18`)

|      % |    Size | Samples | Caller        | Location                                          |
| -----: | ------: | ------: | ------------- | ------------------------------------------------- |
| 100.0% | 576 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18:11` |

##### `set` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                           |
| -----: | ------: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 560 KiB |       1 | `multiMapAdd` | `node_modules/typescript/lib/typescript.js:984:23` |

##### `nextToken` (`node_modules/typescript/lib/typescript.js:29792:27`)

|      % |    Size | Samples | Caller           | Location                                             |
| -----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 517 KiB |       1 | `parseModifiers` | `node_modules/typescript/lib/typescript.js:34330:32` |

##### `parseFunctionOrConstructorTypeToError` (`node_modules/typescript/lib/typescript.js:31818:55`)

|      % |    Size | Samples | Caller                   | Location                                             |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% | 516 KiB |       1 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js:31849:40` |

##### `bindChildren` (`node_modules/typescript/lib/typescript.js:42723:26`)

|      % |    Size | Samples | Caller | Location                                             |
| -----: | ------: | ------: | ------ | ---------------------------------------------------- |
| 100.0% | 515 KiB |       1 | `bind` | `node_modules/typescript/lib/typescript.js:44000:18` |

##### `src/compiler/binder.ts` (`node_modules/typescript/lib/typescript.js:45024:29`)

|      % |    Size | Samples | Caller   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 515 KiB |       1 | `__init` | `node_modules/typescript/lib/typescript.js:21:43` |

##### `getTypeOfVariableOrParameterOrPropertyWorker` (`node_modules/typescript/lib/typescript.js:55481:58`)

|      % |    Size | Samples | Caller                                   | Location                                             |
| -----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `getTypeOfVariableOrParameterOrProperty` | `node_modules/typescript/lib/typescript.js:55470:52` |

##### `src/compiler/visitorPublic.ts` (`node_modules/typescript/lib/typescript.js:88437:36`)

|      % |    Size | Samples | Caller   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `__init` | `node_modules/typescript/lib/typescript.js:21:43` |

##### `checkObjectTypeForDuplicateDeclarations` (`node_modules/typescript/lib/typescript.js:79183:53`)

|      % |    Size | Samples | Caller                        | Location                                             |
| -----: | ------: | ------: | ----------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `checkTypeLiteralDiagnostics` | `node_modules/typescript/lib/typescript.js:79503:43` |

##### `getTargetOfImportClause` (`node_modules/typescript/lib/typescript.js:48594:37`)

|      % |    Size | Samples | Caller                        | Location                                             |
| -----: | ------: | ------: | ----------------------------- | ---------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `getTargetOfAliasDeclaration` | `node_modules/typescript/lib/typescript.js:48994:41` |

##### `checkPropertyInitialization` (`node_modules/typescript/lib/typescript.js:83095:41`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:82700:25` |

##### `resolveESModuleSymbol` (`node_modules/typescript/lib/typescript.js:49677:35`)

|      % |    Size | Samples | Caller                    | Location                                             |
| -----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getExternalModuleMember` | `node_modules/typescript/lib/typescript.js:48781:37` |

##### `getCLIOptionsInfoFromBinding` (`node:internal/options:32:38`)

|      % |    Size | Samples | Caller              | Location                                  |
| -----: | ------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 512 KiB |       1 | `buildAllowedFlags` | `node:internal/process/per_thread:389:27` |

##### `forEachChildInTypeReference` (`node_modules/typescript/lib/typescript.js:28848:72`)

|      % |    Size | Samples | Caller         | Location                                             |
| -----: | ------: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `bindChildren` | `node_modules/typescript/lib/typescript.js:42723:26` |

##### `getInstanceType` (`node_modules/typescript/lib/typescript.js:69812:31`)

|      % |    Size | Samples | Caller    | Location                                             |
| -----: | ------: | ------: | --------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `mapType` | `node_modules/typescript/lib/typescript.js:68550:21` |

##### `forEachChildInImportType` (`node_modules/typescript/lib/typescript.js:28874:66`)

|      % |    Size | Samples | Caller         | Location                                             |
| -----: | ------: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `bindChildren` | `node_modules/typescript/lib/typescript.js:42723:26` |

##### `parseType` (`node_modules/typescript/lib/typescript.js:31930:27`)

|      % |    Size | Samples | Caller                | Location                                             |
| -----: | ------: | ------: | --------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `parseTypeAnnotation` | `node_modules/typescript/lib/typescript.js:31949:37` |

##### `isYieldExpression2` (`node_modules/typescript/lib/typescript.js:32070:36`)

|      % |    Size | Samples | Caller                              | Location                                             |
| -----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `parseAssignmentExpressionOrHigher` | `node_modules/typescript/lib/typescript.js:32044:51` |

##### `extractPragmas` (`node_modules/typescript/lib/typescript.js:28669:26`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `processCommentPragmas` | `node_modules/typescript/lib/typescript.js:28568:33` |

##### `diag` (`node_modules/typescript/lib/typescript.js:7054:16`)

|      % |    Size | Samples | Caller                                               | Location                                            |
| -----: | ------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `src/compiler/diagnosticInformationMap.generated.ts` | `node_modules/typescript/lib/typescript.js:7059:57` |

##### `getTypeAtFlowLoopLabel` (`node_modules/typescript/lib/typescript.js:69215:38`)

|      % |    Size | Samples | Caller              | Location                                             |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getTypeAtFlowNode` | `node_modules/typescript/lib/typescript.js:68941:33` |

##### `push` (`<unknown>`)

|      % |    Size | Samples | Caller        | Location                                           |
| -----: | ------: | ------: | ------------- | -------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `multiMapAdd` | `node_modules/typescript/lib/typescript.js:984:23` |

##### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|      % |    Size | Samples | Caller        | Location          |
| -----: | ------: | ------: | ------------- | ----------------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `node:crypto:1:1` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 98.5% | 32.5 MiB |      48 | `(anonymous)`                              | `<unknown>`                                           |
| 95.5% | 31.5 MiB |      46 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 95.5% | 31.5 MiB |      46 | `(anonymous)`                              | `tsc-run.mjs:1:1`                                     |
| 95.5% | 31.5 MiB |      46 | `next`                                     | `<unknown>`                                           |
| 95.5% | 31.5 MiB |      46 | `run`                                      | `node:internal/modules/esm/module_job:332:12`         |
| 54.4% |   18 MiB |      19 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`            |
| 54.4% |   18 MiB |      19 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`            |
| 54.4% |   18 MiB |      19 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`            |
| 54.4% |   18 MiB |      19 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`             |
| 54.4% |   18 MiB |      19 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`            |
| 54.4% |   18 MiB |      19 | `require`                                  | `node:internal/modules/helpers:146:19`                |
| 28.8% | 9.51 MiB |      19 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 28.8% | 9.51 MiB |      19 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 28.8% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 28.8% | 9.51 MiB |      19 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 28.8% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 28.8% | 9.51 MiB |      19 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 28.8% | 9.51 MiB |      19 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 28.8% | 9.51 MiB |      19 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 28.8% | 9.51 MiB |      19 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 28.8% | 9.51 MiB |      19 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 28.8% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 28.8% | 9.51 MiB |      19 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 28.8% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 28.8% | 9.51 MiB |      19 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 28.8% | 9.51 MiB |      19 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 28.8% | 9.51 MiB |      19 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 28.8% | 9.51 MiB |      19 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 27.3% | 9.01 MiB |      18 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 21.2% |    7 MiB |      14 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 21.2% |    7 MiB |      14 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 21.2% |    7 MiB |      14 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 21.2% |    7 MiB |      14 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 21.2% |    7 MiB |      14 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 21.2% |    7 MiB |      14 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 21.2% |    7 MiB |      14 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 18.5% | 6.11 MiB |      12 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:1:1`       |
| 17.0% | 5.61 MiB |      11 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:18:11`     |

##### Standard library

|     % |     Size | Samples | Function                   | Location                                      |
| ----: | -------: | ------: | -------------------------- | --------------------------------------------- |
| 95.5% | 31.5 MiB |      46 | `next`                     | `<unknown>`                                   |
| 95.5% | 31.5 MiB |      46 | `run`                      | `node:internal/modules/esm/module_job:332:12` |
| 54.4% |   18 MiB |      19 | `(anonymous)`              | `node:internal/modules/cjs/loader:1878:37`    |
| 54.4% |   18 MiB |      19 | `(anonymous)`              | `node:internal/modules/cjs/loader:1490:33`    |
| 54.4% |   18 MiB |      19 | `(anonymous)`              | `node:internal/modules/cjs/loader:1193:24`    |
| 54.4% |   18 MiB |      19 | `wrapModuleLoad`           | `node:internal/modules/cjs/loader:237:24`     |
| 54.4% |   18 MiB |      19 | `(anonymous)`              | `node:internal/modules/cjs/loader:1519:36`    |
| 54.4% |   18 MiB |      19 | `require`                  | `node:internal/modules/helpers:146:19`        |
| 28.0% | 9.24 MiB |      18 | `(anonymous)`              | `node:internal/modules/cjs/loader:1731:37`    |
| 26.4% | 8.72 MiB |       1 | `readFileSync`             | `node:fs:433:22`                              |
| 26.4% | 8.72 MiB |       1 | `defaultLoadImpl`          | `node:internal/modules/cjs/loader:1112:25`    |
| 26.4% | 8.72 MiB |       1 | `loadSource`               | `node:internal/modules/cjs/loader:1797:20`    |
|  9.5% | 3.13 MiB |       6 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18`    |
|  4.5% |  1.5 MiB |       3 | `forEach`                  | `<unknown>`                                   |
|  4.5% |  1.5 MiB |       3 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`        |
|  3.1% | 1.01 MiB |       2 | `charCodeAt`               | `<unknown>`                                   |
|  3.0% |    1 MiB |       2 | `get`                      | `<unknown>`                                   |
|  3.0% |    1 MiB |       2 | `getOwn`                   | `node:internal/bootstrap/realm:205:16`        |
|  3.0% |    1 MiB |       2 | `syncExports`              | `node:internal/bootstrap/realm:373:14`        |
|  3.0% |    1 MiB |       2 | `(anonymous)`              | `node:internal/bootstrap/realm:358:15`        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                  | Location                                      |
| ----: | -------: | ------: | ----------------------- | --------------------------------------------- |
| 96.9% | 31.5 MiB |      46 | `run`                   | `node:internal/modules/esm/module_job:332:12` |
|  3.1% |    1 MiB |       2 | `getModuleJobForImport` | `node:internal/modules/esm/loader:319:30`     |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 57.0% |   18 MiB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                |
| 30.2% | 9.51 MiB |      19 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 11.2% | 3.52 MiB |       7 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  1.6% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 31.5 MiB |      46 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `next` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location          |
| -----: | -------: | ------: | ------------- | ----------------- |
| 100.0% | 31.5 MiB |      46 | `(anonymous)` | `tsc-run.mjs:1:1` |

##### `run` (`node:internal/modules/esm/module_job:332:12`)

|      % |     Size | Samples | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 31.5 MiB |      46 | `next` | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 51.5% | 9.24 MiB |      18 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
| 48.5% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |   Size | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |    Size | Samples | Callee                 | Location                                   |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% |  18 MiB |      19 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   2.8% | 512 KiB |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |   Size | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |   Size | Samples | Callee           | Location                                  |
| -----: | -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 18 MiB |      19 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |   Size | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |    Size | Samples | Callee            | Location                                              |
| ----: | ------: | ------: | ----------------- | ----------------------------------------------------- |
| 73.7% |   7 MiB |      14 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 26.3% | 2.5 MiB |       5 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js:121488:28` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:121587:38`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|      % |     Size | Samples | Callee                     | Location                                              |
| -----: | -------: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |     Size | Samples | Callee                                     | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |     Size | Samples | Callee                   | Location                                              |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |     Size | Samples | Callee                              | Location                                              |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |     Size | Samples | Callee                          | Location                                              |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |     Size | Samples | Callee    | Location                                           |
| -----: | -------: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 9.51 MiB |      19 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 66.2% | 6.11 MiB |      12 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 33.8% | 3.13 MiB |       6 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |    Size | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 77.7% |   7 MiB |      14 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 16.7% | 1.5 MiB |       3 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
| 11.1% |   1 MiB |       2 | `checkParameter`     | `node_modules/typescript/lib/typescript.js:78906:28`  |
|  5.6% | 512 KiB |       1 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
|  5.6% | 512 KiB |       1 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:82229:39`  |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.72 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |     Size | Samples | Callee            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|     % |    Size | Samples | Callee                     | Location                                             |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 71.4% |   5 MiB |      10 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:80896:24` |
| 28.6% |   2 MiB |       4 | `checkClassDeclaration`    | `node_modules/typescript/lib/typescript.js:82603:35` |
| 21.4% | 1.5 MiB |       3 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:79453:36` |
| 21.4% | 1.5 MiB |       3 | `checkModuleDeclaration`   | `node_modules/typescript/lib/typescript.js:83455:36` |
| 21.4% | 1.5 MiB |       3 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:81283:38` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|      % |  Size | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |    Size | Samples | Callee               | Location                                             |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 78.6% | 5.5 MiB |      11 | `forEach`            | `node_modules/typescript/lib/typescript.js:52:19`    |
| 21.4% | 1.5 MiB |       3 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js:84429:32` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |  Size | Samples | Callee                  | Location                                             |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |  Size | Samples | Callee            | Location                                             |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |  Size | Samples | Callee                                | Location                                             |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |  Size | Samples | Callee                 | Location                                             |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 7 MiB |      14 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:1:1`)

|     % |     Size | Samples | Callee        | Location                                          |
| ----: | -------: | ------: | ------------- | ------------------------------------------------- |
| 91.8% | 5.61 MiB |      11 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18:11` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:18:11`)

|     % |     Size | Samples | Callee      | Location                                          |
| ----: | -------: | ------: | ----------- | ------------------------------------------------- |
| 90.0% | 5.05 MiB |      10 | `__require` | `node_modules/typescript/lib/typescript.js:24:51` |
| 10.0% |  576 KiB |       1 | `__export`  | `node_modules/typescript/lib/typescript.js:27:18` |

##### `forEach` (`<unknown>`)

|      % |    Size | Samples | Callee              | Location                                             |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:84436:31` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|     % |    Size | Samples | Callee        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 33.3% | 512 KiB |       1 | `(anonymous)` | `node:stream:1:1`                        |
| 33.3% | 512 KiB |       1 | `(anonymous)` | `node:internal/fs/sync_write_stream:1:1` |
| 33.3% | 512 KiB |       1 | `(anonymous)` | `node:crypto:1:1`                        |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Callee      | Location                                                 |
| ----: | ------: | ------: | ----------- | -------------------------------------------------------- |
| 50.0% | 512 KiB |       1 | `get`       | `node:internal/bootstrap/node:250:6`                     |
| 50.0% | 512 KiB |       1 | `getStdout` | `node:internal/bootstrap/switches/is_main_thread:151:19` |

##### `getOwn` (`node:internal/bootstrap/realm:205:16`)

|      % |  Size | Samples | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 1 MiB |       2 | `get`  | `<unknown>` |

##### `syncExports` (`node:internal/bootstrap/realm:373:14`)

|      % |  Size | Samples | Callee   | Location                               |
| -----: | ----: | ------: | -------- | -------------------------------------- |
| 100.0% | 1 MiB |       2 | `getOwn` | `node:internal/bootstrap/realm:205:16` |

##### `(anonymous)` (`node:internal/bootstrap/realm:358:15`)

|      % |  Size | Samples | Callee        | Location                               |
| -----: | ----: | ------: | ------------- | -------------------------------------- |
| 100.0% | 1 MiB |       2 | `syncExports` | `node:internal/bootstrap/realm:373:14` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.4% | 8.72 MiB |       1 | `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  9.5% | 3.13 MiB |       6 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  4.5% |  1.5 MiB |       3 | `__init` (`node_modules/typescript/lib/typescript.js:21:43`) ← `src/compiler/_namespaces/ts.ts` (130200:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.1% | 1.01 MiB |       2 | `charCodeAt` ← `iterateCommentRanges` (`node_modules/typescript/lib/typescript.js:9478:32`) ← `getJSDocCommentRanges` (13966:33) ← `parseTypeMember` (31368:33) ← `parseList` (30450:27) ← `parseObjectTypeMembers` (31412:40) ← `parseInterfaceDeclaration` (34524:43) ← `parseDeclarationWorker` (33901:40) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseModuleBlock` (34566:34) ← `parseModuleOrNamespaceDeclaration` (34577:51) ← `parseModuleDeclaration` (34610:40) ← `parseDeclarationWorker` (33901:40) ← `(anonymous)` (33888:62) ← `doInsideOfContext` (29688:35) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.7% |  576 KiB |       1 | `__export` (`node_modules/typescript/lib/typescript.js:27:18`) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |  560 KiB |       1 | `set` ← `multiMapAdd` (`node_modules/typescript/lib/typescript.js:984:23`) ← `registerCodeFix` (147162:27) ← `src/services/codefixes/disableJsDiagnostics.ts` (156076:53) ← `__init` (21:43) ← `src/services/_namespaces/ts.codefix.ts` (158013:45) ← `__init` (21:43) ← `src/services/_namespaces/ts.ts` (174022:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |  517 KiB |       1 | `nextToken` (`node_modules/typescript/lib/typescript.js:29792:27`) ← `parseModifiers` (34330:32) ← `parseClassElement` (34370:35) ← `parseList` (30450:27) ← `parseClassMembers` (34521:35) ← `parseClassDeclarationOrExpression` (34464:51) ← `parseClassDeclaration` (34461:39) ← `parseDeclarationWorker` (33901:40) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120665:26) ← `forEach` (52:19) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  516 KiB |       1 | `parseFunctionOrConstructorTypeToError` (`node_modules/typescript/lib/typescript.js:31818:55`) ← `parseUnionTypeOrHigher` (31849:40) ← `parseType` (31930:27) ← `(anonymous)` (31248:163) ← `parseDelimitedList` (30707:36) ← `parseParameters` (31253:33) ← `parseClassElement` (34370:35) ← `parseList` (30450:27) ← `parseClassMembers` (34521:35) ← `parseClassDeclarationOrExpression` (34464:51) ← `parseClassDeclaration` (34461:39) ← `parseDeclarationWorker` (33901:40) ← `(anonymous)` (33888:62) ← `doInsideOfContext` (29688:35) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `processImportedModules` (122586:36) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processTypeReferenceDirectiveWorker` (122446:49) ← `processTypeReferenceDirective` (122440:43) ← `createProgram` (120478:25) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.5% |  515 KiB |       1 | `bindChildren` (`node_modules/typescript/lib/typescript.js:42723:26`) ← `bind` (44000:18) ← `forEachChildInCallOrNewExpression` (28361:45) ← `bindCallExpressionFlow` (43607:36) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `forEachChildInVariableDeclaration` (28804:84) ← `bindVariableDeclarationFlow` (43493:41) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindEach` (42714:22) ← `forEachChildInVariableDeclarationList` (28969:92) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `forEachChildInVariableStatement` (28966:80) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `visitNode2` (28312:22) ← `forEachChildInArrowFunction` (28842:72) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindEach` (42714:22) ← `forEachChildInCallOrNewExpression` (28361:45) ← `bindCallExpressionFlow` (43607:36) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindExpressionStatement` (43251:37) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |  515 KiB |       1 | `src/compiler/binder.ts` (`node_modules/typescript/lib/typescript.js:45024:29`) ← `__init` (21:43) ← `src/compiler/_namespaces/ts.ts` (130200:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  513 KiB |       1 | `getTypeOfVariableOrParameterOrPropertyWorker` (`node_modules/typescript/lib/typescript.js:55481:58`) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkPropertyAccessExpressionOrQualifiedName` (73206:58) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkComputedPropertyName` (72045:39) ← `isLateBindableName` (56438:32) ← `hasLateBindableName` (56448:33) ← `getResolvedMembersOrExportsOfSymbol` (56506:49) ← `getMembersOfSymbol` (56563:32) ← `resolveDeclaredMembers` (56424:36) ← `resolveClassOrInterfaceMembers` (56643:44) ← `resolveStructuredTypeMembers` (57461:42) ← `getSignaturesOfStructuredType` (58153:43) ← `getSignaturesOfType` (58160:33) ← `(anonymous)` (57014:65) ← `map` (254:15) ← `resolveUnionTypeMembers` (57013:37) ← `resolveStructuredTypeMembers` (57461:42) ← `getSignaturesOfStructuredType` (58153:43) ← `getSignaturesOfType` (58160:33) ← `findBestTypeForInvokable` (87796:38) ← `getBestMatchingType` (65885:33) ← `typeRelatedToSomeType` (64147:37) ← `unionOrIntersectionRelatedTo` (64077:44) ← `structuredTypeRelatedToWorker` (64597:45) ← `structuredTypeRelatedTo` (64527:39) ← `recursiveTypeRelatedTo` (64383:38) ← `isRelatedTo` (63813:27) ← `checkTypeRelatedTo` (63505:32) ← `checkTypeAssignableTo` (62564:35) ← `checkTypeArgumentConstraints` (79416:42) ← `(anonymous)` (79468:29) ← `addLazyDiagnostic` (84592:27) ← `checkTypeReferenceOrImport` (79464:40) ← `checkTypeReferenceNode` (79453:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkUnionOrIntersectionType` (79548:42) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkTypeAliasDeclaration` (83177:39) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkModuleDeclaration` (83455:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |  513 KiB |       1 | `src/compiler/visitorPublic.ts` (`node_modules/typescript/lib/typescript.js:88437:36`) ← `__init` (21:43) ← `src/compiler/_namespaces/ts.ts` (130200:37) ← `__init` (21:43) ← `src/typescript/_namespaces/ts.ts` (190817:39) ← `__init` (21:43) ← `src/typescript/typescript.ts` (190829:35) ← `__require` (24:51) ← `(anonymous)` (18:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.5% |  513 KiB |       1 | `checkObjectTypeForDuplicateDeclarations` (`node_modules/typescript/lib/typescript.js:79183:53`) ← `checkTypeLiteralDiagnostics` (79503:43) ← `addLazyDiagnostic` (84592:27) ← `checkTypeLiteral` (79500:30) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableLikeDeclaration` (81089:42) ← `checkParameter` (78906:28) ← `forEach` (52:19) ← `checkSignatureDeclaration` (79024:39) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` (77032:70) ← `checkFunctionExpressionOrObjectLiteralMethod` (76989:58) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.5% |  513 KiB |       1 | `getTargetOfImportClause` (`node_modules/typescript/lib/typescript.js:48594:37`) ← `getTargetOfAliasDeclaration` (48994:41) ← `resolveAlias` (49040:26) ← `checkAliasSymbol` (83625:30) ← `checkImportBinding` (83753:32) ← `checkImportDeclaration` (83793:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.5% |  512 KiB |       1 | `checkPropertyInitialization` (`node_modules/typescript/lib/typescript.js:83095:41`) ← `(anonymous)` (82700:25) ← `addLazyDiagnostic` (84592:27) ← `checkClassLikeDeclaration` (82615:39) ← `checkClassDeclaration` (82603:35) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |  512 KiB |       1 | `resolveESModuleSymbol` (`node_modules/typescript/lib/typescript.js:49677:35`) ← `getExternalModuleMember` (48781:37) ← `getTargetOfImportSpecifier` (48886:40) ← `getTargetOfAliasDeclaration` (48994:41) ← `resolveAlias` (49040:26) ← `getSymbolFlags` (49066:28) ← `getSymbol2` (47550:24) ← `resolveNameHelper` (47770:31) ← `resolveName` (47767:25) ← `getResolvedSymbol` (67934:31) ← `checkIdentifier` (70240:29) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkNonNullExpression` (72995:36) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkNonNullExpression` (72995:36) ← `getQuickTypeOfExpression` (78664:38) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `getNarrowedTypeOfSymbol` (70178:37) ← `checkIdentifier` (70240:29) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkNonNullExpression` (72995:36) ← `checkQualifiedName` (73082:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithTypeArguments` (75930:46) ← `getTypeFromTypeQueryNode` (59306:38) ← `getTypeFromTypeNodeWorker` (61861:39) ← `getTypeFromTypeNode` (61858:33) ← `tryGetTypeFromEffectiveTypeNode` (55451:45) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `getTypeOfSymbol` (55790:29) ← `getTypeOfInstantiatedSymbol` (55733:41) ← `getTypeOfSymbol` (55790:29) ← `createUnionOrIntersectionProperty` (57869:47) ← `getUnionOrIntersectionProperty` (58008:44) ← `getPropertyOfUnionOrIntersectionType` (58045:50) ← `getPropertyOfType` (58110:31) ← `checkPropertyAccessExpressionOrQualifiedName` (73206:58) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkSwitchStatement` (82224:34) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)` |
|  1.5% |  512 KiB |       1 | `getCLIOptionsInfoFromBinding` (`node:internal/options:32:38`) ← `buildAllowedFlags` (`node:internal/process/per_thread:389:27`) ← `get` (`node:internal/bootstrap/node:250:6`) ← `get` ← `getOwn` (`node:internal/bootstrap/realm:205:16`) ← `syncExports` (373:14) ← `(anonymous)` (358:15) ← `getESMFacade` (348:15) ← `builtinStrategy` (`node:internal/modules/esm/translators:451:52`) ← `#translate` (`node:internal/modules/esm/loader:550:13`) ← `afterLoad` (610:23) ← `loadAndTranslate` (608:19) ← `#createModuleJob` (632:19) ← `#getJobFromResolveResult` (347:27) ← `getModuleJobForImport` (319:30) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  512 KiB |       1 | `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`) ← `requireBuiltin` (422:24) ← `asyncRunEntryPointWithESMLoader` (`node:internal/modules/run_main:105:47`) ← `runEntryPointWithESMLoader` (138:36) ← `executeUserEntryPoint` (157:31) ← `(anonymous)` (`node:internal/main/run_main_module:1:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% |  512 KiB |       1 | `forEachChildInTypeReference` (`node_modules/typescript/lib/typescript.js:28848:72`) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindEach` (42714:22) ← `forEachChildInUnionOrIntersectionType` (28352:49) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindChildren` (42723:26) ← `bind` (44000:18) ← `bindEach` (42714:22) ← `visitNodes` (28315:22) ← `forEachChildInFunctionDeclaration` (28836:84) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `(anonymous)` (42711:23) ← `bindEach` (42714:22) ← `bindEachFunctionsFirst` (42710:36) ← `bindChildren` (42723:26) ← `bindContainer` (42630:27) ← `bind` (44000:18) ← `bindSourceFile2` (42348:29) ← `bindSourceFile` (42305:26) ← `initializeTypeChecker` (86093:35) ← `createTypeChecker` (46139:29) ← `getTypeChecker` (121488:28) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  512 KiB |       1 | `getInstanceType` (`node_modules/typescript/lib/typescript.js:69812:31`) ← `mapType` (68550:21) ← `narrowTypeByInstanceof` (69773:38) ← `narrowTypeByBinaryExpression` (69412:44) ← `narrowType` (69913:26) ← `getTypeAtFlowNode` (68941:33) ← `getFlowTypeOfReference` (68915:36) ← `checkIdentifier` (70240:29) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `getSignatureApplicabilityError` (74212:44) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkReturnStatement` (82167:34) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkIfStatement` (81310:30) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkIfStatement` (81310:30) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkIfStatement` (81310:30) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionOrMethodDeclaration` (80578:46) ← `checkFunctionDeclarationDiagnostics` (80468:51) ← `addLazyDiagnostic` (84592:27) ← `checkFunctionDeclaration` (80466:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                   |
