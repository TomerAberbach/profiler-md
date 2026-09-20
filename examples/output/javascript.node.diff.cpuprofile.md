# CPU profile diff

Took 2.52s → 2.54s (+14.88ms, +0.6%) over 2,680 samples → 2,749 samples (943.9µs → 925.6µs per sample).

| Category           |  Change |    Delta |            % |              Time |       Samples |
| ------------------ | ------: | -------: | -----------: | ----------------: | ------------: |
| Third-party        |   +0.6% | +12.38ms |        88.3% |     2.23s → 2.24s | 2,443 → 2,510 |
| Garbage collector  |   -3.8% |  -6.83ms |  7.1% → 6.8% | 179.5ms → 172.7ms |     148 → 141 |
| Standard library   |   +6.6% |  +6.50ms |  3.9% → 4.1% |  98.8ms → 105.3ms |       72 → 78 |
| Native             |  +16.6% |  +2.50ms |  0.6% → 0.7% |   15.0ms → 17.5ms |       15 → 17 |
| Regular expression | +126.6% |  +1.58ms | <0.1% → 0.1% |     1.3ms → 2.8ms |         1 → 3 |
| Ours               | removed |  -1.25ms | <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

| Change |    Delta |           % |         Time | Samples | Function                            | Location                                                                                 |
| -----: | -------: | ----------: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +85.33ms | 0.0% → 3.4% | 0ms → 85.3ms | 0 → 107 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|    new | +66.88ms | 0.0% → 2.6% | 0ms → 66.9ms |  0 → 74 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|    new | +47.54ms | 0.0% → 1.9% | 0ms → 47.5ms |  0 → 41 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|    new | +44.17ms | 0.0% → 1.7% | 0ms → 44.2ms |  0 → 38 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|    new | +39.54ms | 0.0% → 1.6% | 0ms → 39.5ms |  0 → 44 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|    new | +30.54ms | 0.0% → 1.2% | 0ms → 30.5ms |  0 → 26 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|    new | +26.08ms | 0.0% → 1.0% | 0ms → 26.1ms |  0 → 27 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|    new | +26.00ms | 0.0% → 1.0% | 0ms → 26.0ms |  0 → 30 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
|    new | +23.42ms | 0.0% → 0.9% | 0ms → 23.4ms |  0 → 22 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
|    new | +22.46ms | 0.0% → 0.9% | 0ms → 22.5ms |  0 → 21 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|    new | +21.37ms | 0.0% → 0.8% | 0ms → 21.4ms |  0 → 34 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|    new | +20.33ms | 0.0% → 0.8% | 0ms → 20.3ms |  0 → 27 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
|    new | +20.17ms | 0.0% → 0.8% | 0ms → 20.2ms |  0 → 23 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
|    new | +18.04ms | 0.0% → 0.7% | 0ms → 18.0ms |  0 → 15 | `getConditionalTypeInstantiation`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
|    new | +16.54ms | 0.0% → 0.7% | 0ms → 16.5ms |  0 → 14 | `createInstantiatedSymbolTable`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
|    new | +15.54ms | 0.0% → 0.6% | 0ms → 15.5ms |  0 → 15 | `checkIdentifier`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
|    new | +15.46ms | 0.0% → 0.6% | 0ms → 15.5ms |  0 → 16 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
|    new | +15.21ms | 0.0% → 0.6% | 0ms → 15.2ms |  0 → 15 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
|    new | +14.46ms | 0.0% → 0.6% | 0ms → 14.5ms |  0 → 15 | `some`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |
|    new | +14.00ms | 0.0% → 0.6% | 0ms → 14.0ms |  0 → 14 | `getTypeOfSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33` |

##### Standard library

|  Change |   Delta |            % |          Time | Samples | Function                   | Location                               |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------- | -------------------------------------- |
| +606.6% | +7.58ms | <0.1% → 0.3% | 1.3ms → 8.8ms |   1 → 7 | `readFileSync`             | `node:fs:433:22`                       |
|     new | +2.54ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `statSync`                 | `node:fs:1745:18`                      |
|  +62.3% | +2.42ms |         0.2% | 3.9ms → 6.3ms |   3 → 5 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`        |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`              | `node:internal/perf/usertiming:1:1`    |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `isBigInt64Array`          | `node:internal/util/types:53:25`       |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `tryStatSync`              | `node:fs:389:21`                       |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |         Time | Samples | Function                         | Location                                             |
| ------: | -------: | ----------: | -----------: | ------: | -------------------------------- | ---------------------------------------------------- |
| removed | -71.50ms | 2.8% → 0.0% | 71.5ms → 0ms |  72 → 0 | `isRelatedTo`                    | `node_modules/typescript/lib/typescript.js:63813:27` |
| removed | -68.79ms | 2.7% → 0.0% | 68.8ms → 0ms |  64 → 0 | `recursiveTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:64383:38` |
| removed | -43.54ms | 1.7% → 0.0% | 43.5ms → 0ms |  45 → 0 | `instantiateTypeWorker`          | `node_modules/typescript/lib/typescript.js:62354:35` |
| removed | -37.25ms | 1.5% → 0.0% | 37.2ms → 0ms |  34 → 0 | `checkTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:63505:32` |
| removed | -34.00ms | 1.3% → 0.0% | 34.0ms → 0ms |  38 → 0 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:62119:40` |
| removed | -33.92ms | 1.3% → 0.0% | 33.9ms → 0ms |  32 → 0 | `scan`                           | `node_modules/typescript/lib/typescript.js:10327:18` |
| removed | -28.21ms | 1.1% → 0.0% | 28.2ms → 0ms |  26 → 0 | `createInstantiatedSymbolTable`  | `node_modules/typescript/lib/typescript.js:56402:43` |
| removed | -24.71ms | 1.0% → 0.0% | 24.7ms → 0ms |  33 → 0 | `structuredTypeRelatedToWorker`  | `node_modules/typescript/lib/typescript.js:64597:45` |
| removed | -24.63ms | 1.0% → 0.0% | 24.6ms → 0ms |  39 → 0 | `inferFromTypes`                 | `node_modules/typescript/lib/typescript.js:67214:30` |
| removed | -23.00ms | 0.9% → 0.0% | 23.0ms → 0ms |  25 → 0 | `bindWorker`                     | `node_modules/typescript/lib/typescript.js:44063:24` |
| removed | -20.17ms | 0.8% → 0.0% | 20.2ms → 0ms |  21 → 0 | `getNormalizedType`              | `node_modules/typescript/lib/typescript.js:63479:31` |
| removed | -19.21ms | 0.8% → 0.0% | 19.2ms → 0ms |  24 → 0 | `bind`                           | `node_modules/typescript/lib/typescript.js:44000:18` |
| removed | -18.58ms | 0.7% → 0.0% | 18.6ms → 0ms |  20 → 0 | `getPropertyOfType`              | `node_modules/typescript/lib/typescript.js:58110:31` |
| removed | -18.38ms | 0.7% → 0.0% | 18.4ms → 0ms |  18 → 0 | `nextTokenWithoutCheck`          | `node_modules/typescript/lib/typescript.js:29785:39` |
| removed | -16.75ms | 0.7% → 0.0% | 16.8ms → 0ms |  14 → 0 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:58882:33` |
| removed | -15.54ms | 0.6% → 0.0% | 15.5ms → 0ms |  13 → 0 | `invokeOnce`                     | `node_modules/typescript/lib/typescript.js:67401:26` |
| removed | -15.38ms | 0.6% → 0.0% | 15.4ms → 0ms |  15 → 0 | `compareSignaturesRelated`       | `node_modules/typescript/lib/typescript.js:63135:38` |
| removed | -15.38ms | 0.6% → 0.0% | 15.4ms → 0ms |  12 → 0 | `inferFromMatchingTypes`         | `node_modules/typescript/lib/typescript.js:67429:38` |
| removed | -15.13ms | 0.6% → 0.0% | 15.1ms → 0ms |  12 → 0 | `getUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:58008:44` |
| removed | -15.08ms | 0.6% → 0.0% | 15.1ms → 0ms |  14 → 0 | `resolveStructuredTypeMembers`   | `node_modules/typescript/lib/typescript.js:57461:42` |

##### Garbage collector

| Change |   Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -3.8% | -6.83ms | 7.1% → 6.8% | 179.5ms → 172.7ms | 148 → 141 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function              | Location                                           |
| ------: | ------: | -----------: | --------------: | ------: | --------------------- | -------------------------------------------------- |
| removed | -1.33ms |  0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`         | `node:internal/fs/utils:708:38`                    |
| removed | -1.29ms |  0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`         | `node:internal/perf/performance:1:1`               |
| removed | -1.29ms |  0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`                     |
|  -33.0% | -1.25ms |         0.1% |   3.8ms → 2.5ms |   3 → 2 | `slice`               | `node:buffer:640:12`                               |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `maybeCacheSourceMap` | `node:internal/source_map/source_map_cache:157:29` |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`         | `node:internal/crypto/keys:1:1`                    |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `wrappedFn`           | `node:internal/errors:535:21`                      |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `allocate`            | `node:buffer:436:18`                               |
|   -5.4% | -0.50ms |  0.4% → 0.3% |   9.3ms → 8.8ms |       1 | `post`                | `node:inspector:118:7`                             |
|   -0.5% | -0.38ms |         2.7% | 69.2ms → 68.8ms |      55 | `wrapSafe`            | `node:internal/modules/cjs/loader:1671:18`         |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

| Change |   Delta |            % |        Time |   Samples | Function                                   | Location                                                                                  |
| -----: | ------: | -----------: | ----------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +2.125s | 0.0% → 83.5% | 0ms → 2.12s | 0 → 2,380 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|    new | +1.851s | 0.0% → 72.8% | 0ms → 1.85s | 0 → 2,119 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|    new | +1.850s | 0.0% → 72.7% | 0ms → 1.85s | 0 → 2,118 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|    new | +1.850s | 0.0% → 72.7% | 0ms → 1.85s | 0 → 2,118 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|    new | +1.850s | 0.0% → 72.7% | 0ms → 1.85s | 0 → 2,118 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|    new | +1.850s | 0.0% → 72.7% | 0ms → 1.85s | 0 → 2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +1.849s | 0.0% → 72.7% | 0ms → 1.84s | 0 → 2,119 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|    new | +1.849s | 0.0% → 72.7% | 0ms → 1.84s | 0 → 2,117 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|    new | +1.848s | 0.0% → 72.6% | 0ms → 1.84s | 0 → 2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +1.848s | 0.0% → 72.6% | 0ms → 1.84s | 0 → 2,116 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|    new | +1.848s | 0.0% → 72.6% | 0ms → 1.84s | 0 → 2,116 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|    new | +1.663s | 0.0% → 65.4% | 0ms → 1.66s | 0 → 1,833 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|    new | +1.663s | 0.0% → 65.4% | 0ms → 1.66s | 0 → 1,833 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|    new | +1.663s | 0.0% → 65.4% | 0ms → 1.66s | 0 → 1,833 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|    new | +1.663s | 0.0% → 65.4% | 0ms → 1.66s | 0 → 1,833 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|    new | +1.648s | 0.0% → 64.8% | 0ms → 1.64s | 0 → 1,814 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
|    new | +1.648s | 0.0% → 64.8% | 0ms → 1.64s | 0 → 1,814 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|    new | +1.224s | 0.0% → 48.1% | 0ms → 1.22s | 0 → 1,311 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
|    new | +1.223s | 0.0% → 48.1% | 0ms → 1.22s | 0 → 1,310 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
|    new | +1.211s | 0.0% → 47.6% | 0ms → 1.21s | 0 → 1,348 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function              | Location                                   |
| ------: | -------: | -----------: | -------------: | ------: | --------------------- | ------------------------------------------ |
| +215.4% | +11.04ms |  0.2% → 0.6% | 5.1ms → 16.2ms |  4 → 13 | `statSync`            | `node:fs:1745:18`                          |
| +145.2% |  +7.50ms |  0.2% → 0.5% | 5.2ms → 12.7ms |  4 → 10 | `defaultLoadImpl`     | `node:internal/modules/cjs/loader:1112:25` |
| +145.2% |  +7.50ms |  0.2% → 0.5% | 5.2ms → 12.7ms |  4 → 10 | `loadSource`          | `node:internal/modules/cjs/loader:1797:20` |
|  +94.6% |  +3.67ms |  0.2% → 0.3% |  3.9ms → 7.5ms |   3 → 6 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
|     new |  +2.54ms |  0.0% → 0.1% |    0ms → 2.5ms |   0 → 2 | `(anonymous)`         | `node:fs:2851:23`                          |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/perf/usertiming:1:1`        |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `isBigInt64Array`     | `node:internal/util/types:53:25`           |
|     new |  +1.25ms | 0.0% → <0.1% |    0ms → 1.3ms |   0 → 1 | `tryStatSync`         | `node:fs:389:21`                           |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Third-party

|  Change |   Delta |            % |        Time |   Samples | Function                                   | Location                                              |
| ------: | ------: | -----------: | ----------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -2.094s | 82.8% → 0.0% | 2.09s → 0ms | 2,283 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -1.816s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -1.816s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed | -1.816s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,031 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,030 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -1.815s | 71.8% → 0.0% | 1.81s → 0ms | 2,030 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -1.632s | 64.5% → 0.0% | 1.63s → 0ms | 1,760 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -1.632s | 64.5% → 0.0% | 1.63s → 0ms | 1,760 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -1.632s | 64.5% → 0.0% | 1.63s → 0ms | 1,760 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -1.632s | 64.5% → 0.0% | 1.63s → 0ms | 1,760 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -1.632s | 64.5% → 0.0% | 1.63s → 0ms | 1,760 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed | -1.614s | 63.8% → 0.0% | 1.61s → 0ms | 1,740 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed | -1.614s | 63.8% → 0.0% | 1.61s → 0ms | 1,739 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed | -1.205s | 47.6% → 0.0% | 1.20s → 0ms | 1,293 → 0 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:80896:24`  |
| removed | -1.194s | 47.2% → 0.0% | 1.19s → 0ms | 1,261 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |

##### Garbage collector

| Change |   Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -3.8% | -6.83ms | 7.1% → 6.8% | 179.5ms → 172.7ms | 148 → 141 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |    Delta |           % |             Time | Samples | Function             | Location                                   |
| ------: | -------: | ----------: | ---------------: | ------: | -------------------- | ------------------------------------------ |
|  -17.1% | -16.79ms | 3.9% → 3.2% |  98.2ms → 81.4ms | 78 → 65 | `(anonymous)`        | `node:internal/modules/cjs/loader:1731:37` |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `(anonymous)`        | `node:internal/modules/cjs/loader:1878:37` |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `(anonymous)`        | `node:internal/modules/cjs/loader:1490:33` |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `(anonymous)`        | `node:internal/modules/cjs/loader:1193:24` |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `(anonymous)`        | `node:internal/modules/cjs/loader:1519:36` |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `wrapModuleLoad`     | `node:internal/modules/cjs/loader:237:24`  |
|   -9.0% |  -9.29ms | 4.1% → 3.7% | 103.3ms → 94.0ms | 82 → 75 | `require`            | `node:internal/modules/helpers:146:19`     |
|  -44.5% |  -4.08ms | 0.4% → 0.2% |    9.2ms → 5.1ms |   8 → 4 | `openSync`           | `node:fs:559:18`                           |
| removed |  -2.58ms | 0.1% → 0.0% |      2.6ms → 0ms |   2 → 0 | `wrappedFn`          | `node:internal/errors:535:21`              |
| removed |  -2.54ms | 0.1% → 0.0% |      2.5ms → 0ms |   2 → 0 | `allocate`           | `node:buffer:436:18`                       |
| removed |  -2.54ms | 0.1% → 0.0% |      2.5ms → 0ms |   2 → 0 | `allocUnsafe`        | `node:buffer:411:42`                       |
| removed |  -2.54ms | 0.1% → 0.0% |      2.5ms → 0ms |   2 → 0 | `tryCreateBuffer`    | `node:fs:397:25`                           |
| removed |  -2.00ms | 0.1% → 0.0% |      2.0ms → 0ms |   2 → 0 | `readSync`           | `node:fs:695:18`                           |
| removed |  -2.00ms | 0.1% → 0.0% |      2.0ms → 0ms |   2 → 0 | `tryReadSync`        | `node:fs:412:21`                           |
|   -2.3% |  -1.63ms | 2.8% → 2.7% |  70.5ms → 68.8ms | 56 → 55 | `wrapSafe`           | `node:internal/modules/cjs/loader:1671:18` |
| removed |  -1.33ms | 0.1% → 0.0% |      1.3ms → 0ms |   1 → 0 | `(anonymous)`        | `node:internal/fs/utils:708:38`            |
| removed |  -1.33ms | 0.1% → 0.0% |      1.3ms → 0ms |   1 → 0 | `(anonymous)`        | `node:internal/fs/utils:730:42`            |
| removed |  -1.29ms | 0.1% → 0.0% |      1.3ms → 0ms |   1 → 0 | `(anonymous)`        | `node:internal/perf/performance:1:1`       |
| removed |  -1.29ms | 0.1% → 0.0% |      1.3ms → 0ms |   1 → 0 | `createUnsafeBuffer` | `node:internal/buffer:1082:28`             |
| removed |  -1.29ms | 0.1% → 0.0% |      1.3ms → 0ms |   1 → 0 | `createPool`         | `node:buffer:155:20`                       |
