# Heap profile diff

Allocated 34.4 MiB → 42.2 MiB (+7.813 MiB, +22.7%) over 52 samples → 47 samples (677 KiB → 919 KiB per sample).

| Category         | Change |      Delta |             % |                Size | Samples |
| ---------------- | -----: | ---------: | ------------: | ------------------: | ------: |
| Standard library | +81.6% | +11.71 MiB | 41.7% → 61.8% | 14.3 MiB → 26.1 MiB | 12 → 15 |
| Third-party      | -19.5% | -3.897 MiB | 58.3% → 38.2% |   20 MiB → 16.1 MiB | 40 → 32 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size | Samples | Function                                       | Location                                                                                  |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +117.9% |  +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `readFileSync`                                 | `node:fs:433:22`                                                                          |
|     new |       +1 MiB |   0.0% → 2.4% |         0 B → 1 MiB |   0 → 2 | `getDiagnosticsProducingTypeChecker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|  +29.9% |  +955.32 KiB |   9.1% → 9.6% | 3.12 MiB → 4.06 MiB |   6 → 8 | `wrapSafe`                                     | `node:internal/modules/cjs/loader:1671:18`                                                |
|     new | +576.375 KiB |   0.0% → 1.3% |       0 B → 576 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
|     new | +531.265 KiB |   0.0% → 1.2% |       0 B → 531 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`   |
|     new | +531.265 KiB |   0.0% → 1.2% |       0 B → 531 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`   |
|     new | +529.375 KiB |   0.0% → 1.2% |       0 B → 529 KiB |   0 → 1 | `createNodeFactory`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
|     new | +522.906 KiB |   0.0% → 1.2% |       0 B → 523 KiB |   0 → 1 | `checkGrammarModifiers`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`  |
|     new | +512.968 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `getTypeWithSyntheticDefaultOnly`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`  |
|     new | +512.578 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `getEnclosingBlockScopeContainer`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`  |
|     new | +512.562 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `checkAwaitExpression`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`  |
|     new | +512.531 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `membersRelatedToIndexInfo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`  |
|     new |   +512.5 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `toString`                                     | `node:buffer:839:46`                                                                      |
|     new | +512.406 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getDirectoryPath`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`   |
|     new | +512.382 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getTypeForVariableLikeDeclaration`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`  |
|     new | +512.367 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `propagateIdentifierNameFlags`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`  |
|     new | +512.257 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getStatsFromBinding`                          | `node:internal/fs/utils:552:29`                                                           |
|     new |  +512.25 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `parseOptionalToken`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`  |
|     new |  +512.25 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `isParenthesizedArrowFunctionExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`  |
|     new | +512.218 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getContextualTypeForReturnExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`  |

##### Standard library

|  Change |        Delta |             % |                Size | Samples | Function                          | Location                                   |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------- | ------------------------------------------ |
| +117.9% |  +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `readFileSync`                    | `node:fs:433:22`                           |
|  +29.9% |  +955.32 KiB |   9.1% → 9.6% | 3.12 MiB → 4.06 MiB |   6 → 8 | `wrapSafe`                        | `node:internal/modules/cjs/loader:1671:18` |
|     new |   +512.5 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `toString`                        | `node:buffer:839:46`                       |
|     new | +512.257 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getStatsFromBinding`             | `node:internal/fs/utils:552:29`            |
|     new | +512.187 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `concat`                          | `<unknown>`                                |
|     new | +512.062 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`                     | `node:internal/streams/operators:1:1`      |
|     new | +512.031 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `onImport.tracePromise.__proto__` | `node:internal/modules/esm/loader:679:34`  |
|     new | +512.015 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `Writable`                        | `node:internal/streams/writable:392:18`    |

##### Third-party

| Change |        Delta |           % |          Size | Samples | Function                                       | Location                                                                                  |
| -----: | -----------: | ----------: | ------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |       +1 MiB | 0.0% → 2.4% |   0 B → 1 MiB |   0 → 2 | `getDiagnosticsProducingTypeChecker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|    new | +576.375 KiB | 0.0% → 1.3% | 0 B → 576 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:8064:11`   |
|    new | +531.265 KiB | 0.0% → 1.2% | 0 B → 531 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:4564:15`   |
|    new | +531.265 KiB | 0.0% → 1.2% | 0 B → 531 KiB |   0 → 1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5240:15`   |
|    new | +529.375 KiB | 0.0% → 1.2% | 0 B → 529 KiB |   0 → 1 | `createNodeFactory`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:21553:31`  |
|    new | +522.906 KiB | 0.0% → 1.2% | 0 B → 523 KiB |   0 → 1 | `checkGrammarModifiers`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85414:39`  |
|    new | +512.968 KiB | 0.0% → 1.2% | 0 B → 513 KiB |   0 → 1 | `getTypeWithSyntheticDefaultOnly`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75264:49`  |
|    new | +512.578 KiB | 0.0% → 1.2% | 0 B → 513 KiB |   0 → 1 | `getEnclosingBlockScopeContainer`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14971:45`  |
|    new | +512.562 KiB | 0.0% → 1.2% | 0 B → 513 KiB |   0 → 1 | `checkAwaitExpression`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76370:38`  |
|    new | +512.531 KiB | 0.0% → 1.2% | 0 B → 513 KiB |   0 → 1 | `membersRelatedToIndexInfo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65036:47`  |
|    new | +512.406 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `getDirectoryPath`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6140:30`   |
|    new | +512.382 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `getTypeForVariableLikeDeclaration`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54427:51`  |
|    new | +512.367 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `propagateIdentifierNameFlags`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:26547:42`  |
|    new |  +512.25 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `parseOptionalToken`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31422:36`  |
|    new |  +512.25 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `isParenthesizedArrowFunctionExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33650:62`  |
|    new | +512.218 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `getContextualTypeForReturnExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70556:54`  |
|    new | +512.203 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `getWildcardDirectoryFromSpec`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41285:42`  |
|    new | +512.187 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `codePointAt`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116:63`  |
|    new | +512.179 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `createProgram`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|    new | +512.156 KiB | 0.0% → 1.2% | 0 B → 512 KiB |   0 → 1 | `checkGrammarFunctionLikeDeclaration`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85794:53`  |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |           % |          Size | Samples | Function                                          | Location                                             |
| ------: | -----------: | ----------: | ------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed |     -1.5 MiB | 4.4% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `__init`                                          | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed |       -1 MiB | 2.9% → 0.0% |   1 MiB → 0 B |   2 → 0 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:18:11`    |
| removed | -516.375 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `test`                                            | `<unknown>`                                          |
| removed | -516.375 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `scan`                                            | `node_modules/typescript/lib/typescript.js:10327:18` |
| removed | -515.625 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `checkGrammarForInOrForOfStatement`               | `node_modules/typescript/lib/typescript.js:87116:47` |
| removed |  -514.75 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `discriminateTypeByDiscriminableItems`            | `node_modules/typescript/lib/typescript.js:65888:50` |
| removed | -514.625 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `checkUnusedTypeParameters`                       | `node_modules/typescript/lib/typescript.js:80724:39` |
| removed |   -514.5 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `isPrivateIdentifier`                             | `node_modules/typescript/lib/typescript.js:26566:31` |
| removed | -513.562 KiB | 1.5% → 0.0% | 514 KiB → 0 B |   1 → 0 | `bind`                                            | `node_modules/typescript/lib/typescript.js:44000:18` |
| removed | -513.437 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getSignatureApplicabilityError`                  | `node_modules/typescript/lib/typescript.js:74212:44` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseUpdateExpression`                           | `node_modules/typescript/lib/typescript.js:32532:39` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `loadModuleFromNearestNodeModulesDirectoryWorker` | `node_modules/typescript/lib/typescript.js:41800:59` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `onEnter`                                         | `node_modules/typescript/lib/typescript.js:43376:23` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `reportErrorResults`                              | `node_modules/typescript/lib/typescript.js:63920:34` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `declareSymbol`                                   | `node_modules/typescript/lib/typescript.js:42491:27` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `isDeclarationFileName`                           | `node_modules/typescript/lib/typescript.js:28534:33` |
| removed | -512.968 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseModifiers`                                  | `node_modules/typescript/lib/typescript.js:34330:32` |
| removed | -512.875 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `canFollowTypeArgumentsInExpression`              | `node_modules/typescript/lib/typescript.js:33100:52` |
| removed | -512.562 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkForOfStatement`                             | `node_modules/typescript/lib/typescript.js:81461:33` |
| removed | -512.531 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:39924:40` |

##### Standard library

|  Change |        Delta |           % |          Size | Samples | Function                       | Location                               |
| ------: | -----------: | ----------: | ------------: | ------: | ------------------------------ | -------------------------------------- |
| removed | -516.375 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `test`                         | `<unknown>`                            |
| removed | -512.468 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `get`                          | `<unknown>`                            |
| removed |  -512.25 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38`          |
| removed | -512.062 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `compileForInternalLoader`     | `node:internal/bootstrap/realm:385:27` |
| removed | -512.039 KiB | 1.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `push`                         | `<unknown>`                            |

##### Third-party

|  Change |        Delta |           % |          Size | Samples | Function                                          | Location                                             |
| ------: | -----------: | ----------: | ------------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| removed |     -1.5 MiB | 4.4% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `__init`                                          | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed |       -1 MiB | 2.9% → 0.0% |   1 MiB → 0 B |   2 → 0 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:18:11`    |
| removed | -516.375 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `scan`                                            | `node_modules/typescript/lib/typescript.js:10327:18` |
| removed | -515.625 KiB | 1.5% → 0.0% | 516 KiB → 0 B |   1 → 0 | `checkGrammarForInOrForOfStatement`               | `node_modules/typescript/lib/typescript.js:87116:47` |
| removed |  -514.75 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `discriminateTypeByDiscriminableItems`            | `node_modules/typescript/lib/typescript.js:65888:50` |
| removed | -514.625 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `checkUnusedTypeParameters`                       | `node_modules/typescript/lib/typescript.js:80724:39` |
| removed |   -514.5 KiB | 1.5% → 0.0% | 515 KiB → 0 B |   1 → 0 | `isPrivateIdentifier`                             | `node_modules/typescript/lib/typescript.js:26566:31` |
| removed | -513.562 KiB | 1.5% → 0.0% | 514 KiB → 0 B |   1 → 0 | `bind`                                            | `node_modules/typescript/lib/typescript.js:44000:18` |
| removed | -513.437 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `getSignatureApplicabilityError`                  | `node_modules/typescript/lib/typescript.js:74212:44` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseUpdateExpression`                           | `node_modules/typescript/lib/typescript.js:32532:39` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `loadModuleFromNearestNodeModulesDirectoryWorker` | `node_modules/typescript/lib/typescript.js:41800:59` |
| removed | -513.281 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `onEnter`                                         | `node_modules/typescript/lib/typescript.js:43376:23` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `reportErrorResults`                              | `node_modules/typescript/lib/typescript.js:63920:34` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `declareSymbol`                                   | `node_modules/typescript/lib/typescript.js:42491:27` |
| removed |     -513 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `isDeclarationFileName`                           | `node_modules/typescript/lib/typescript.js:28534:33` |
| removed | -512.968 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `parseModifiers`                                  | `node_modules/typescript/lib/typescript.js:34330:32` |
| removed | -512.875 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `canFollowTypeArgumentsInExpression`              | `node_modules/typescript/lib/typescript.js:33100:52` |
| removed | -512.562 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `checkForOfStatement`                             | `node_modules/typescript/lib/typescript.js:81461:33` |
| removed | -512.531 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `(anonymous)`                                     | `node_modules/typescript/lib/typescript.js:39924:40` |
| removed | -512.531 KiB | 1.5% → 0.0% | 513 KiB → 0 B |   1 → 0 | `assert`                                          | `node_modules/typescript/lib/typescript.js:1757:24`  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |       Delta |             % |                Size | Samples | Function                                   | Location                                                                                  |
| ------: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|     new | +10.516 MiB |  0.0% → 24.9% |      0 B → 10.5 MiB |  0 → 21 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| +117.9% | +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `readFileSync`                             | `node:fs:433:22`                                                                          |
| +117.9% | +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `defaultLoadImpl`                          | `node:internal/modules/cjs/loader:1112:25`                                                |
| +117.9% | +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `loadSource`                               | `node:internal/modules/cjs/loader:1797:20`                                                |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1878:37`                                                |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1490:33`                                                |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1193:24`                                                |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`                              | `node:internal/modules/cjs/loader:1519:36`                                                |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `wrapModuleLoad`                           | `node:internal/modules/cjs/loader:237:24`                                                 |
|  +55.4% |  +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `require`                                  | `node:internal/modules/helpers:146:19`                                                    |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|     new |  +8.014 MiB |  0.0% → 19.0% |      0 B → 8.01 MiB |  0 → 16 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |

##### Standard library

|  Change |        Delta |             % |                Size | Samples | Function                    | Location                                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------- | -------------------------------------------------------- |
| +117.9% |  +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `readFileSync`              | `node:fs:433:22`                                         |
| +117.9% |  +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `defaultLoadImpl`           | `node:internal/modules/cjs/loader:1112:25`               |
| +117.9% |  +10.281 MiB | 25.4% → 45.0% |   8.72 MiB → 19 MiB |       1 | `loadSource`                | `node:internal/modules/cjs/loader:1797:20`               |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1878:37`               |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1490:33`               |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1193:24`               |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `(anonymous)`               | `node:internal/modules/cjs/loader:1519:36`               |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `wrapModuleLoad`            | `node:internal/modules/cjs/loader:237:24`                |
|  +55.4% |   +9.331 MiB | 49.0% → 62.0% | 16.8 MiB → 26.2 MiB | 17 → 15 | `require`                   | `node:internal/modules/helpers:146:19`                   |
|  +18.6% |   +6.313 MiB | 98.5% → 95.3% | 33.9 MiB → 40.2 MiB | 51 → 43 | `next`                      | `<unknown>`                                              |
|  +18.6% |   +6.313 MiB | 98.5% → 95.3% | 33.9 MiB → 40.2 MiB | 51 → 43 | `run`                       | `node:internal/modules/esm/module_job:332:12`            |
|     new |       +1 MiB |   0.0% → 2.4% |         0 B → 1 MiB |   0 → 2 | `createWritableStdioStream` | `node:internal/bootstrap/switches/is_main_thread:50:35`  |
|     new |       +1 MiB |   0.0% → 2.4% |         0 B → 1 MiB |   0 → 2 | `getStdout`                 | `node:internal/bootstrap/switches/is_main_thread:151:19` |
|  +29.9% |  +955.32 KiB |   9.1% → 9.6% | 3.12 MiB → 4.06 MiB |   6 → 8 | `wrapSafe`                  | `node:internal/modules/cjs/loader:1671:18`               |
|     new |   +512.5 KiB |   0.0% → 1.2% |       0 B → 513 KiB |   0 → 1 | `toString`                  | `node:buffer:839:46`                                     |
|     new | +512.257 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `getStatsFromBinding`       | `node:internal/fs/utils:552:29`                          |
|     new | +512.187 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `concat`                    | `<unknown>`                                              |
|     new | +512.062 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`               | `node:internal/streams/operators:1:1`                    |
|     new | +512.062 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`               | `node:stream:1:1`                                        |
|     new | +512.062 KiB |   0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `(anonymous)`               | `node:internal/fs/sync_write_stream:1:1`                 |

##### Third-party

| Change |       Delta |            % |           Size | Samples | Function                                   | Location                                                                                  |
| -----: | ----------: | -----------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +10.516 MiB | 0.0% → 24.9% | 0 B → 10.5 MiB |  0 → 21 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|    new |  +8.014 MiB | 0.0% → 19.0% | 0 B → 8.01 MiB |  0 → 16 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|    new |  +7.014 MiB | 0.0% → 16.6% | 0 B → 7.01 MiB |  0 → 14 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|    new |  +7.014 MiB | 0.0% → 16.6% | 0 B → 7.01 MiB |  0 → 14 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|    new |  +7.014 MiB | 0.0% → 16.6% | 0 B → 7.01 MiB |  0 → 14 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|    new |  +7.014 MiB | 0.0% → 16.6% | 0 B → 7.01 MiB |  0 → 14 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|    new |  +5.514 MiB | 0.0% → 13.1% | 0 B → 5.51 MiB |  0 → 11 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
|    new |  +5.514 MiB | 0.0% → 13.1% | 0 B → 5.51 MiB |  0 → 11 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|    new |  +5.502 MiB | 0.0% → 13.0% |  0 B → 5.5 MiB |  0 → 11 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
|    new |  +5.502 MiB | 0.0% → 13.0% |  0 B → 5.5 MiB |  0 → 11 | `createProgram`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|    new |  +5.002 MiB | 0.0% → 11.9% |    0 B → 5 MiB |  0 → 10 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |        Delta |             % |                Size | Samples | Function                       | Location                                   |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------ | ------------------------------------------ |
|  -11.7% | -973.062 KiB | 23.6% → 17.0% | 8.12 MiB → 7.17 MiB | 16 → 14 | `(anonymous)`                  | `node:internal/modules/cjs/loader:1731:37` |
| removed | -516.375 KiB |   1.5% → 0.0% |       516 KiB → 0 B |   1 → 0 | `test`                         | `<unknown>`                                |
|  -16.7% | -513.242 KiB |   8.7% → 5.9% |     3 MiB → 2.5 MiB |   6 → 5 | `forEach`                      | `<unknown>`                                |
| removed |  -512.25 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `getCLIOptionsInfoFromBinding` | `node:internal/options:32:38`              |
| removed |  -512.25 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `buildAllowedFlags`            | `node:internal/process/per_thread:389:27`  |
| removed |  -512.25 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `get`                          | `node:internal/bootstrap/node:250:6`       |
| removed | -512.062 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `(anonymous)`                  | `node:crypto:1:1`                          |
| removed | -512.062 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `compileForPublicLoader`       | `node:internal/bootstrap/realm:332:25`     |
| removed | -512.062 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `loadBuiltinModule`            | `node:internal/modules/helpers:113:27`     |
| removed | -512.062 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `loadBuiltinWithHooks`         | `node:internal/modules/cjs/loader:1159:30` |
| removed | -512.039 KiB |   1.5% → 0.0% |       512 KiB → 0 B |   1 → 0 | `push`                         | `<unknown>`                                |
|   -0.1% |       -656 B |   2.9% → 2.4% |               1 MiB |       2 | `get`                          | `<unknown>`                                |

##### Third-party

|  Change |      Delta |            % |           Size | Samples | Function                                   | Location                                              |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -11.02 MiB | 32.1% → 0.0% |   11 MiB → 0 B |  22 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed | -10.02 MiB | 29.1% → 0.0% |   10 MiB → 0 B |  20 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -6.513 MiB | 18.9% → 0.0% | 6.51 MiB → 0 B |  13 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -6.513 MiB | 18.9% → 0.0% | 6.51 MiB → 0 B |  13 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -6.513 MiB | 18.9% → 0.0% | 6.51 MiB → 0 B |  13 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -6.513 MiB | 18.9% → 0.0% | 6.51 MiB → 0 B |  13 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -6.513 MiB | 18.9% → 0.0% | 6.51 MiB → 0 B |  13 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed |  -6.01 MiB | 17.5% → 0.0% | 6.01 MiB → 0 B |  12 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed |  -6.01 MiB | 17.5% → 0.0% | 6.01 MiB → 0 B |  12 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed |  -6.01 MiB | 17.5% → 0.0% | 6.01 MiB → 0 B |  12 → 0 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:80896:24`  |
| removed | -5.509 MiB | 16.0% → 0.0% | 5.51 MiB → 0 B |  11 → 0 | `createProgram`                            | `node_modules/typescript/lib/typescript.js:120478:25` |
