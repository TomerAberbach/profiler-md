# Heap profile

Allocated 42.2 MiB over 47 samples (919 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 61.8% | 26.1 MiB |      15 |
| Third-party      | 38.2% | 16.1 MiB |      32 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                       | Location                                                                                  |
| ----: | -------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 45.0% |   19 MiB |       1 | `readFileSync`                                 | `node:fs:433:22`                                                                          |
|  9.6% | 4.06 MiB |       8 | `wrapSafe`                                     | `node:internal/modules/cjs/loader:1671:18`                                                |
|  2.4% |    1 MiB |       2 | `getDiagnosticsProducingTypeChecker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|  1.3% |  576 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
|  1.2% |  531 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`   |
|  1.2% |  531 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`   |
|  1.2% |  529 KiB |       1 | `createNodeFactory`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
|  1.2% |  523 KiB |       1 | `checkGrammarModifiers`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`  |
|  1.2% |  513 KiB |       1 | `getTypeWithSyntheticDefaultOnly`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`  |
|  1.2% |  513 KiB |       1 | `getEnclosingBlockScopeContainer`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`  |
|  1.2% |  513 KiB |       1 | `checkAwaitExpression`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`  |
|  1.2% |  513 KiB |       1 | `membersRelatedToIndexInfo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`  |
|  1.2% |  513 KiB |       1 | `toString`                                     | `node:buffer:839:46`                                                                      |
|  1.2% |  512 KiB |       1 | `getDirectoryPath`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`   |
|  1.2% |  512 KiB |       1 | `getTypeForVariableLikeDeclaration`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`  |
|  1.2% |  512 KiB |       1 | `propagateIdentifierNameFlags`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`  |
|  1.2% |  512 KiB |       1 | `getStatsFromBinding`                          | `node:internal/fs/utils:552:29`                                                           |
|  1.2% |  512 KiB |       1 | `parseOptionalToken`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`  |
|  1.2% |  512 KiB |       1 | `isParenthesizedArrowFunctionExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`  |
|  1.2% |  512 KiB |       1 | `getContextualTypeForReturnExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`  |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                          | Location                                   |
| ----: | -------: | ------: | --------------------------------- | ------------------------------------------ |
| 45.0% |   19 MiB |       1 | `readFileSync`                    | `node:fs:433:22`                           |
|  9.6% | 4.06 MiB |       8 | `wrapSafe`                        | `node:internal/modules/cjs/loader:1671:18` |
|  1.2% |  513 KiB |       1 | `toString`                        | `node:buffer:839:46`                       |
|  1.2% |  512 KiB |       1 | `getStatsFromBinding`             | `node:internal/fs/utils:552:29`            |
|  1.2% |  512 KiB |       1 | `concat`                          | `<unknown>`                                |
|  1.2% |  512 KiB |       1 | `(anonymous)`                     | `node:internal/streams/operators:1:1`      |
|  1.2% |  512 KiB |       1 | `onImport.tracePromise.__proto__` | `node:internal/modules/esm/loader:679:34`  |
|  1.2% |  512 KiB |       1 | `Writable`                        | `node:internal/streams/writable:392:18`    |

##### Third-party

|    % |    Size | Samples | Function                                       | Location                                                                                  |
| ---: | ------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 2.4% |   1 MiB |       2 | `getDiagnosticsProducingTypeChecker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
| 1.3% | 576 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
| 1.2% | 531 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`   |
| 1.2% | 531 KiB |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`   |
| 1.2% | 529 KiB |       1 | `createNodeFactory`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
| 1.2% | 523 KiB |       1 | `checkGrammarModifiers`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`  |
| 1.2% | 513 KiB |       1 | `getTypeWithSyntheticDefaultOnly`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`  |
| 1.2% | 513 KiB |       1 | `getEnclosingBlockScopeContainer`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`  |
| 1.2% | 513 KiB |       1 | `checkAwaitExpression`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`  |
| 1.2% | 513 KiB |       1 | `membersRelatedToIndexInfo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`  |
| 1.2% | 512 KiB |       1 | `getDirectoryPath`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`   |
| 1.2% | 512 KiB |       1 | `getTypeForVariableLikeDeclaration`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`  |
| 1.2% | 512 KiB |       1 | `propagateIdentifierNameFlags`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`  |
| 1.2% | 512 KiB |       1 | `parseOptionalToken`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`  |
| 1.2% | 512 KiB |       1 | `isParenthesizedArrowFunctionExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`  |
| 1.2% | 512 KiB |       1 | `getContextualTypeForReturnExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`  |
| 1.2% | 512 KiB |       1 | `getWildcardDirectoryFromSpec`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41285:42`  |
| 1.2% | 512 KiB |       1 | `codePointAt`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116:63`  |
| 1.2% | 512 KiB |       1 | `createProgram`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 1.2% | 512 KiB |       1 | `checkGrammarFunctionLikeDeclaration`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85794:53`  |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `readFileSync` (`node:fs:433:22`)

|      % |   Size | Samples | Caller            | Location                                   |
| -----: | -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 4.06 MiB |       8 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `getDiagnosticsProducingTypeChecker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52`)

|      % |  Size | Samples | Caller        | Location                                                                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`)

|      % |    Size | Samples | Caller        | Location                                                                            |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 576 KiB |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`)

|      % |    Size | Samples | Caller        | Location                                                                                |
| -----: | ------: | ------: | ------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 531 KiB |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4024:11` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`)

|      % |    Size | Samples | Caller        | Location                                                                                |
| -----: | ------: | ------: | ------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 531 KiB |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4024:11` |

##### `createNodeFactory` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`)

|      % |    Size | Samples | Caller        | Location                                                                                 |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 529 KiB |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29848:11` |

##### `checkGrammarModifiers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`)

|      % |    Size | Samples | Caller                               | Location                                                                                 |
| -----: | ------: | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 523 KiB |       1 | `checkGrammarDecoratorsAndModifiers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85391:52` |

##### `getTypeWithSyntheticDefaultOnly` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`)

|      % |    Size | Samples | Caller                  | Location                                                                                 |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `resolveESModuleSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:49999:39` |

##### `getEnclosingBlockScopeContainer` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`)

|      % |    Size | Samples | Caller                               | Location                                                                                 |
| -----: | ------: | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `isBlockScopedNameDeclaredBeforeUse` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48070:52` |

##### `checkAwaitExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`)

|      % |    Size | Samples | Caller                  | Location                                                                                 |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `checkExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |

##### `membersRelatedToIndexInfo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`)

|      % |    Size | Samples | Caller                   | Location                                                                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `typeRelatedToIndexInfo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65104:44` |

##### `toString` (`node:buffer:839:46`)

|      % |    Size | Samples | Caller           | Location                                                                                |
| -----: | ------: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 513 KiB |       1 | `readFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36` |

##### `getDirectoryPath` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`)

|      % |    Size | Samples | Caller              | Location                                                                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `resolveModuleName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:42056:31` |

##### `getTypeForVariableLikeDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`)

|      % |    Size | Samples | Caller                                     | Location                                                                                 |
| -----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getWidenedTypeForVariableLikeDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54968:58` |

##### `propagateIdentifierNameFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`)

|      % |    Size | Samples | Caller                           | Location                                                                                 |
| -----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `createBaseSignatureDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22141:48` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |    Size | Samples | Caller                  | Location                                                                                |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `fileSystemEntryExists` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |

##### `parseOptionalToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`)

|      % |    Size | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `parseFunctionDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:35689:42` |

##### `isParenthesizedArrowFunctionExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`)

|      % |    Size | Samples | Caller              | Location                                                                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `speculationHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12034:35` |

##### `getContextualTypeForReturnExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`)

|      % |    Size | Samples | Caller              | Location                                                                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getContextualType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71040:35` |

##### `getWildcardDirectoryFromSpec` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41285:42`)

|      % |    Size | Samples | Caller                   | Location                                                                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `getWildcardDirectories` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41234:36` |

##### `concat` (`<unknown>`)

|      % |    Size | Samples | Caller                   | Location                                                                                 |
| -----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `codePointAt` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116:63`)

|      % |    Size | Samples | Caller | Location                                                                                 |
| -----: | ------: | ------: | ------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `scan` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|      % |    Size | Samples | Caller             | Location                |
| -----: | ------: | ------: | ------------------ | ----------------------- |
| 100.0% | 512 KiB |       1 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `checkGrammarFunctionLikeDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85794:53`)

|      % |    Size | Samples | Caller                                         | Location                                                                                 |
| -----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `checkFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76113:62` |

##### `(anonymous)` (`node:internal/streams/operators:1:1`)

|      % |    Size | Samples | Caller                     | Location                               |
| -----: | ------: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 512 KiB |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `onImport.tracePromise.__proto__` (`node:internal/modules/esm/loader:679:34`)

|      % |    Size | Samples | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 512 KiB |       1 | `(anonymous)` | `<unknown>` |

##### `Writable` (`node:internal/streams/writable:392:18`)

|      % |    Size | Samples | Caller            | Location                                   |
| -----: | ------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 512 KiB |       1 | `SyncWriteStream` | `node:internal/fs/sync_write_stream:12:25` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 98.8% | 41.7 MiB |      46 | `(anonymous)`                              | `<unknown>`                                                                               |
| 95.3% | 40.2 MiB |      43 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                   |
| 95.3% | 40.2 MiB |      43 | `(anonymous)`                              | `tsc-run.mjs:1:1`                                                                         |
| 95.3% | 40.2 MiB |      43 | `next`                                     | `<unknown>`                                                                               |
| 95.3% | 40.2 MiB |      43 | `run`                                      | `node:internal/modules/esm/module_job:332:12`                                             |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`                                                |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`                                                |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`                                                |
| 62.0% | 26.2 MiB |      15 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`                                                 |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`                                                |
| 62.0% | 26.2 MiB |      15 | `require`                                  | `node:internal/modules/helpers:146:19`                                                    |
| 45.0% |   19 MiB |       1 | `readFileSync`                             | `node:fs:433:22`                                                                          |
| 45.0% |   19 MiB |       1 | `defaultLoadImpl`                          | `node:internal/modules/cjs/loader:1112:25`                                                |
| 45.0% |   19 MiB |       1 | `loadSource`                               | `node:internal/modules/cjs/loader:1797:20`                                                |
| 24.9% | 10.5 MiB |      21 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 19.0% | 8.01 MiB |      16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 19.0% | 8.01 MiB |      16 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 19.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 19.0% | 8.01 MiB |      16 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 19.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                    | Location                                                 |
| ----: | -------: | ------: | --------------------------- | -------------------------------------------------------- |
| 95.3% | 40.2 MiB |      43 | `next`                      | `<unknown>`                                              |
| 95.3% | 40.2 MiB |      43 | `run`                       | `node:internal/modules/esm/module_job:332:12`            |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1878:37`               |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1490:33`               |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1193:24`               |
| 62.0% | 26.2 MiB |      15 | `wrapModuleLoad`            | `node:internal/modules/cjs/loader:237:24`                |
| 62.0% | 26.2 MiB |      15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1519:36`               |
| 62.0% | 26.2 MiB |      15 | `require`                   | `node:internal/modules/helpers:146:19`                   |
| 45.0% |   19 MiB |       1 | `readFileSync`              | `node:fs:433:22`                                         |
| 45.0% |   19 MiB |       1 | `defaultLoadImpl`           | `node:internal/modules/cjs/loader:1112:25`               |
| 45.0% |   19 MiB |       1 | `loadSource`                | `node:internal/modules/cjs/loader:1797:20`               |
| 17.0% | 7.17 MiB |      14 | `(anonymous)`               | `node:internal/modules/cjs/loader:1731:37`               |
|  9.6% | 4.06 MiB |       8 | `wrapSafe`                  | `node:internal/modules/cjs/loader:1671:18`               |
|  5.9% |  2.5 MiB |       5 | `forEach`                   | `<unknown>`                                              |
|  2.4% |    1 MiB |       2 | `createWritableStdioStream` | `node:internal/bootstrap/switches/is_main_thread:50:35`  |
|  2.4% |    1 MiB |       2 | `getStdout`                 | `node:internal/bootstrap/switches/is_main_thread:151:19` |
|  2.4% |    1 MiB |       2 | `get`                       | `<unknown>`                                              |
|  2.4% |    1 MiB |       2 | `getOwn`                    | `node:internal/bootstrap/realm:205:16`                   |
|  2.4% |    1 MiB |       2 | `syncExports`               | `node:internal/bootstrap/realm:373:14`                   |
|  2.4% |    1 MiB |       2 | `(anonymous)`               | `node:internal/bootstrap/realm:358:15`                   |

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 24.9% | 10.5 MiB |      21 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 19.0% | 8.01 MiB |      16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 19.0% | 8.01 MiB |      16 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 19.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 19.0% | 8.01 MiB |      16 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 19.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 19.0% | 8.01 MiB |      16 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 19.0% | 8.01 MiB |      16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 19.0% | 8.01 MiB |      16 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 19.0% | 8.01 MiB |      16 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 19.0% | 8.01 MiB |      16 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 16.6% | 7.01 MiB |      14 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 16.6% | 7.01 MiB |      14 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 16.6% | 7.01 MiB |      14 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 16.6% | 7.01 MiB |      14 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 13.1% | 5.51 MiB |      11 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 13.1% | 5.51 MiB |      11 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 13.0% |  5.5 MiB |      11 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 13.0% |  5.5 MiB |      11 | `createProgram`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 11.9% |    5 MiB |      10 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                            | Location                                      |
| ----: | -------: | ------: | --------------------------------- | --------------------------------------------- |
| 96.4% | 40.2 MiB |      43 | `run`                             | `node:internal/modules/esm/module_job:332:12` |
|  2.4% |    1 MiB |       2 | `getModuleJobForImport`           | `node:internal/modules/esm/loader:319:30`     |
|  1.2% |  512 KiB |       1 | `onImport.tracePromise.__proto__` | `node:internal/modules/esm/loader:679:34`     |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                                                                  |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 65.1% | 26.2 MiB |      15 | `require`                          | `node:internal/modules/helpers:146:19`                                                    |
| 19.9% | 8.01 MiB |      16 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 13.7% |  5.5 MiB |      11 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.2% |  512 KiB |       1 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `(anonymous)` (`tsc-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 40.2 MiB |      43 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `next` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location          |
| -----: | -------: | ------: | ------------- | ----------------- |
| 100.0% | 40.2 MiB |      43 | `(anonymous)` | `tsc-run.mjs:1:1` |

##### `run` (`node:internal/modules/esm/module_job:332:12`)

|      % |     Size | Samples | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 40.2 MiB |      43 | `next` | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 72.6% |   19 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |
| 27.4% | 7.17 MiB |      14 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 26.2 MiB |      15 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 26.2 MiB |      15 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 26.2 MiB |      15 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 26.2 MiB |      15 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 26.2 MiB |      15 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |   Size | Samples | Callee         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 19 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |   Size | Samples | Callee            | Location                                   |
| -----: | -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |     Size | Samples | Callee               | Location                                                                                  |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 52.4% | 5.51 MiB |      11 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 47.6% |    5 MiB |      10 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  9.5% |    1 MiB |       2 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  4.8% |  512 KiB |       1 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:42388:54`  |
|  4.8% |  512 KiB |       1 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115622:62` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |     Size | Samples | Callee                               | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 87.5% | 7.01 MiB |      14 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 12.5% |    1 MiB |       2 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |     Size | Samples | Callee        | Location                                                                                  |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |     Size | Samples | Callee                     | Location                                                                                  |
| -----: | -------: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |     Size | Samples | Callee                                     | Location                                                                                  |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |     Size | Samples | Callee                   | Location                                                                                  |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |     Size | Samples | Callee                              | Location                                                                                  |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |     Size | Samples | Callee                          | Location                                                                                  |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |     Size | Samples | Callee        | Location                                                                                  |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |     Size | Samples | Callee    | Location                                                                               |
| -----: | -------: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |     Size | Samples | Callee                 | Location                                                                                  |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 8.01 MiB |      16 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                                                            |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 56.5% | 4.06 MiB |       8 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`                                          |
| 43.5% | 3.12 MiB |       6 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |     Size | Samples | Callee                   | Location                                                                                 |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 57.2% | 4.01 MiB |       8 | `forEach`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
| 35.7% |  2.5 MiB |       5 | `checkDeferredNodes`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
|  7.1% |  512 KiB |       1 | `checkUnusedIdentifiers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |     Size | Samples | Callee                  | Location                                                                                 |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 7.01 MiB |      14 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |     Size | Samples | Callee            | Location                                                                                 |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 7.01 MiB |      14 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |     Size | Samples | Callee                 | Location                                                                                 |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 7.01 MiB |      14 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |     Size | Samples | Callee                     | Location                                                                                 |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 72.8% | 4.01 MiB |       8 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 72.6% |    4 MiB |       8 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 72.6% |    4 MiB |       8 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 36.5% | 2.01 MiB |       4 | `checkModuleDeclaration`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:82730:40` |
| 18.1% |    1 MiB |       2 | `checkForOfStatement`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80703:37` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|      % |     Size | Samples | Callee                     | Location                                                                                 |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 5.51 MiB |      11 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |    Size | Samples | Callee                                         | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 45.5% | 2.5 MiB |       5 | `checkFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76113:62` |
| 36.4% |   2 MiB |       4 | `checkIdentifier`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
| 27.3% | 1.5 MiB |       3 | `checkObjectLiteral`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 27.3% | 1.5 MiB |       3 | `checkConditionalExpression`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77391:44` |
| 18.2% |   1 MiB |       2 | `checkCallExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |  Size | Samples | Callee    | Location                                                                               |
| ----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 90.9% | 5 MiB |      10 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|      % |  Size | Samples | Callee                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 5 MiB |      10 | `checkExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |

##### `forEach` (`<unknown>`)

|      % |    Size | Samples | Callee              | Location                                                                                 |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |

##### `createWritableStdioStream` (`node:internal/bootstrap/switches/is_main_thread:50:35`)

|     % |    Size | Samples | Callee            | Location                                   |
| ----: | ------: | ------: | ----------------- | ------------------------------------------ |
| 50.0% | 512 KiB |       1 | `requireBuiltin`  | `node:internal/bootstrap/realm:422:24`     |
| 50.0% | 512 KiB |       1 | `SyncWriteStream` | `node:internal/fs/sync_write_stream:12:25` |

##### `getStdout` (`node:internal/bootstrap/switches/is_main_thread:151:19`)

|      % |  Size | Samples | Callee                      | Location                                                |
| -----: | ----: | ------: | --------------------------- | ------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `createWritableStdioStream` | `node:internal/bootstrap/switches/is_main_thread:50:35` |

##### `get` (`<unknown>`)

|      % |  Size | Samples | Callee      | Location                                                 |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `getStdout` | `node:internal/bootstrap/switches/is_main_thread:151:19` |

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

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`tsc-run.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job:332:12`) ← `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.0% |   19 MiB |       1 | `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  9.6% | 4.06 MiB |       8 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.4% |    1 MiB |       2 | `getDiagnosticsProducingTypeChecker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52`) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |  576 KiB |       1 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |  531 KiB |       1 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`) ← `(anonymous)` (4024:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |  531 KiB |       1 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`) ← `(anonymous)` (4024:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |  529 KiB |       1 | `createNodeFactory` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`) ← `(anonymous)` (29848:11) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.2% |  523 KiB |       1 | `checkGrammarModifiers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`) ← `checkGrammarDecoratorsAndModifiers` (85391:52) ← `checkGrammarFunctionLikeDeclaration` (85794:53) ← `checkSignatureDeclaration` (78090:43) ← `checkFunctionOrMethodDeclaration` (79750:50) ← `checkFunctionDeclaration` (79643:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkModuleDeclaration` (82730:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |  513 KiB |       1 | `getTypeWithSyntheticDefaultOnly` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`) ← `resolveESModuleSymbol` (49999:39) ← `getTargetOfNamespaceImport` (49205:44) ← `getTargetOfAliasDeclaration` (49433:45) ← `resolveAlias` (49479:30) ← `checkAliasSymbol` (82925:34) ← `checkImportBinding` (82987:36) ← `checkImportDeclaration` (83008:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |  513 KiB |       1 | `getEnclosingBlockScopeContainer` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`) ← `isBlockScopedNameDeclaredBeforeUse` (48070:52) ← `checkResolvedBlockScopedVariable` (48962:50) ← `resolveNameHelper` (48322:35) ← `resolveName` (48317:29) ← `getResolvedSymbol` (67494:35) ← `isMatchingReference` (67539:37) ← `getTypeAtFlowAssignment` (68637:45) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowBranchLabel` (68797:46) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowBranchLabel` (68797:46) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowBranchLabel` (68797:46) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowBranchLabel` (68797:46) ← `getTypeAtFlowNode` (68534:39) ← `getFlowTypeOfReference` (68502:40) ← `checkIdentifier` (69711:33) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `(anonymous)` (76019:59) ← `traverse` (15383:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `traverse` (15383:26) ← `forEachReturnStatement` (15381:36) ← `checkAndAggregateReturnExpressionTypes` (76014:56) ← `getReturnTypeFromBody` (75792:39) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` (76147:74) ← `checkFunctionExpressionOrObjectLiteralMethod` (76113:62) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.2% |  513 KiB |       1 | `checkAwaitExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkForOfStatement` (80703:37) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.2% |  513 KiB |       1 | `membersRelatedToIndexInfo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`) ← `typeRelatedToIndexInfo` (65104:44) ← `indexSignaturesRelatedTo` (65085:46) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `compareTypesAssignable` (62162:40) ← `getInferredType` (67383:33) ← `getInferredTypes` (67435:34) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.2% |  513 KiB |       1 | `toString` (`node:buffer:839:46`) ← `readFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36`) ← `readFile` (7890:30) ← `readFile` (113175:32) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  512 KiB |       1 | `getDirectoryPath` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.2% |  512 KiB |       1 | `getTypeForVariableLikeDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkIdentifier` (69711:33) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `getContextFreeTypeOfExpression` (77774:48) ← `addEvolvingArrayElementType` (68197:45) ← `getTypeAtFlowArrayMutation` (68719:48) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowBranchLabel` (68797:46) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowLoopLabel` (68850:44) ← `getTypeAtFlowNode` (68534:39) ← `getFlowTypeOfReference` (68502:40) ← `checkIdentifier` (69711:33) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `(anonymous)` (76019:59) ← `traverse` (15383:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `traverse` (15383:26) ← `forEachReturnStatement` (15381:36) ← `checkAndAggregateReturnExpressionTypes` (76014:56) ← `getReturnTypeFromBody` (75792:39) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` (76147:74) ← `checkFunctionExpressionOrObjectLiteralMethod` (76113:62) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkConditionalExpression` (77391:44) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkModuleDeclaration` (82730:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                       |
|  1.2% |  512 KiB |       1 | `propagateIdentifierNameFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`) ← `createBaseSignatureDeclaration` (22141:48) ← `createMethodDeclaration` (22636:41) ← `parseClassElement` (35932:35) ← `parseList` (31892:27) ← `parseClassMembers` (36059:35) ← `parseClassDeclarationOrExpression` (35992:51) ← `parseClassDeclaration` (35989:39) ← `parseDeclarationWorker` (35510:40) ← `parseStatement` (35399:32) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.2% |  512 KiB |       1 | `getStatsFromBinding` (`node:internal/fs/utils:552:29`) ← `fileSystemEntryExists` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43`) ← `fileExists` (7985:32) ← `fileExists` (113174:34) ← `tryFile` (42616:21) ← `loader` (42732:31) ← `loadNodeModuleFromDirectoryWorker` (42710:47) ← `loadModuleFromSpecificNodeModulesDirectory` (43067:56) ← `loadModuleFromImmediateNodeModulesDirectory` (43045:57) ← `(anonymous)` (43035:85) ← `forEachAncestorDirectory` (6613:38) ← `loadModuleFromNearestNodeModulesDirectoryWorker` (43033:61) ← `loadModuleFromNearestNodeModulesDirectory` (43026:55) ← `tryResolve` (42390:28) ← `(anonymous)` (42388:54) ← `forEach` (388:21) ← `nodeModuleNameResolverWorker` (42373:42) ← `nodeModuleNameResolver` (42369:36) ← `resolveModuleName` (42056:31) ← `loader_1` (113809:37) ← `loadWithModeAwareCache` (113518:36) ← `actualResolveModuleNamesWorker` (113810:55) ← `resolveModuleNamesWorker` (114058:42) ← `resolveModuleNamesReusingOldState` (114157:51) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.2% |  512 KiB |       1 | `parseOptionalToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`) ← `parseFunctionDeclaration` (35689:42) ← `parseDeclarationWorker` (35510:40) ← `(anonymous)` (35496:74) ← `doInsideOfContext` (31060:35) ← `parseStatement` (35399:32) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (115622:62) ← `forEach` (388:21) ← `processLibReferenceDirectives` (115621:47) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (115622:62) ← `forEach` (388:21) ← `processLibReferenceDirectives` (115621:47) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (115622:62) ← `forEach` (388:21) ← `processLibReferenceDirectives` (115621:47) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (115622:62) ← `forEach` (388:21) ← `processLibReferenceDirectives` (115621:47) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (115622:62) ← `forEach` (388:21) ← `processLibReferenceDirectives` (115621:47) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) |
|  1.2% |  512 KiB |       1 | `isParenthesizedArrowFunctionExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`) ← `speculationHelper` (12034:35) ← `lookAhead` (12075:27) ← `speculationHelper` (31200:35) ← `lookAhead` (31233:27) ← `isParenthesizedArrowFunctionExpression` (33637:56) ← `tryParseParenthesizedArrowFunctionExpression` (33619:62) ← `parseAssignmentExpressionOrHigher` (33498:51) ← `parseInitializer` (33495:34) ← `parseVariableDeclaration` (35627:42) ← `parseVariableDeclarationAllowExclamation` (35624:58) ← `parseListElement` (31909:34) ← `parseDelimitedList` (32208:36) ← `parseVariableDeclarationList` (35641:46) ← `parseVariableStatement` (35681:40) ← `parseDeclarationWorker` (35510:40) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseModuleOrNamespaceDeclaration` (36118:51) ← `parseModuleDeclaration` (36151:40) ← `parseDeclarationWorker` (35510:40) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.2% |  512 KiB |       1 | `getContextualTypeForReturnExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`) ← `getContextualType` (71040:35) ← `getApparentTypeOfContextualType` (70974:49) ← `getContextualTypeForObjectLiteralElement` (70865:58) ← `getContextualType` (71040:35) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `(anonymous)` (76019:59) ← `traverse` (15383:26) ← `visitNodes` (29885:24) ← `forEachChild` (29919:26) ← `traverse` (15383:26) ← `forEachReturnStatement` (15381:36) ← `checkAndAggregateReturnExpressionTypes` (76014:56) ← `getReturnTypeFromBody` (75792:39) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` (76147:74) ← `checkFunctionExpressionOrObjectLiteralMethod` (76113:62) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
