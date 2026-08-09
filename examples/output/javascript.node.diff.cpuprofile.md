# CPU profile diff

Took 2.49s → 2.69s (+191.17ms, +7.6%) over 2,659 samples → 3,134 samples (939.9µs → 858.4µs per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |   +9.1% | +199.54ms | 87.4% → 88.6% |     2.18s → 2.38s | 2,410 → 2,890 |
| Garbage collector  |   -7.3% |  -13.91ms |   7.6% → 6.6% | 191.0ms → 177.0ms |     156 → 144 |
| Standard library   |  +14.7% |  +14.25ms |   3.9% → 4.1% |  96.8ms → 111.0ms |       70 → 82 |
| Native             |  -36.3% |   -8.25ms |   0.9% → 0.5% |   22.7ms → 14.5ms |       20 → 15 |
| Regular expression |  +32.2% |   +0.79ms |          0.1% |     2.5ms → 3.3ms |         2 → 3 |
| Ours               | removed |   -1.25ms |   0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

| Change |    Delta |           % |         Time | Samples | Function                            | Location                                                                                 |
| -----: | -------: | ----------: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +80.58ms | 0.0% → 3.0% | 0ms → 80.6ms | 0 → 106 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|    new | +78.71ms | 0.0% → 2.9% | 0ms → 78.7ms |  0 → 83 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|    new | +59.00ms | 0.0% → 2.2% | 0ms → 59.0ms |  0 → 51 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|    new | +44.25ms | 0.0% → 1.6% | 0ms → 44.3ms |  0 → 48 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|    new | +42.42ms | 0.0% → 1.6% | 0ms → 42.4ms |  0 → 39 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|    new | +37.12ms | 0.0% → 1.4% | 0ms → 37.1ms |  0 → 36 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|    new | +28.37ms | 0.0% → 1.1% | 0ms → 28.4ms |  0 → 27 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
|    new | +28.29ms | 0.0% → 1.1% | 0ms → 28.3ms |  0 → 23 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|    new | +26.17ms | 0.0% → 1.0% | 0ms → 26.2ms |  0 → 26 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|    new | +22.79ms | 0.0% → 0.8% | 0ms → 22.8ms |  0 → 21 | `isTypeRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|    new | +22.08ms | 0.0% → 0.8% | 0ms → 22.1ms |  0 → 22 | `compareSignaturesRelated`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|    new | +20.83ms | 0.0% → 0.8% | 0ms → 20.8ms |  0 → 20 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
|    new | +19.87ms | 0.0% → 0.7% | 0ms → 19.9ms |  0 → 26 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
|    new | +19.33ms | 0.0% → 0.7% | 0ms → 19.3ms |  0 → 23 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
|    new | +18.50ms | 0.0% → 0.7% | 0ms → 18.5ms |  0 → 17 | `scanJsDocToken`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
|    new | +18.38ms | 0.0% → 0.7% | 0ms → 18.4ms |  0 → 15 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
|    new | +17.88ms | 0.0% → 0.7% | 0ms → 17.9ms |  0 → 17 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
|    new | +17.58ms | 0.0% → 0.7% | 0ms → 17.6ms |  0 → 21 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
|    new | +16.54ms | 0.0% → 0.6% | 0ms → 16.5ms |  0 → 30 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|    new | +16.08ms | 0.0% → 0.6% | 0ms → 16.1ms |  0 → 45 | `bindChildren`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43934:30` |

##### Standard library

|  Change |   Delta |            % |          Time | Samples | Function              | Location                                  |
| ------: | ------: | -----------: | ------------: | ------: | --------------------- | ----------------------------------------- |
| +593.4% | +7.42ms |  0.1% → 0.3% | 1.3ms → 8.7ms |   1 → 7 | `readFileSync`        | `node:fs:433:22`                          |
| +185.4% | +4.79ms |  0.1% → 0.3% | 2.6ms → 7.4ms |   2 → 6 | `tryStatSync`         | `node:fs:389:21`                          |
|     new | +2.46ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `(anonymous)`         | `node:internal/fs/utils:400:38`           |
|     new | +1.33ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`           |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `stat`                | `node:internal/modules/cjs/loader:264:14` |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/crypto/util:1:1`           |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `getDirents`          | `node:internal/fs/utils:246:20`           |
|     new | +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `isUint8Array`        | `node:internal/util/types:13:22`          |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |         Time | Samples | Function                            | Location                                             |
| ------: | -------: | ----------: | -----------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| removed | -68.96ms | 2.8% → 0.0% | 69.0ms → 0ms |  66 → 0 | `recursiveTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:64383:38` |
| removed | -63.00ms | 2.5% → 0.0% | 63.0ms → 0ms |  66 → 0 | `isRelatedTo`                       | `node_modules/typescript/lib/typescript.js:63813:27` |
| removed | -51.71ms | 2.1% → 0.0% | 51.7ms → 0ms |  43 → 0 | `checkTypeRelatedTo`                | `node_modules/typescript/lib/typescript.js:63505:32` |
| removed | -42.54ms | 1.7% → 0.0% | 42.5ms → 0ms |  39 → 0 | `scan`                              | `node_modules/typescript/lib/typescript.js:10327:18` |
| removed | -35.08ms | 1.4% → 0.0% | 35.1ms → 0ms |  35 → 0 | `getObjectTypeInstantiation`        | `node_modules/typescript/lib/typescript.js:62119:40` |
| removed | -28.33ms | 1.1% → 0.0% | 28.3ms → 0ms |  32 → 0 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js:62354:35` |
| removed | -25.87ms | 1.0% → 0.0% | 25.9ms → 0ms |  30 → 0 | `bind`                              | `node_modules/typescript/lib/typescript.js:44000:18` |
| removed | -21.46ms | 0.9% → 0.0% | 21.5ms → 0ms |  23 → 0 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js:63479:31` |
| removed | -19.21ms | 0.8% → 0.0% | 19.2ms → 0ms |  17 → 0 | `createInstantiatedSymbolTable`     | `node_modules/typescript/lib/typescript.js:56402:43` |
| removed | -18.62ms | 0.7% → 0.0% | 18.6ms → 0ms |  28 → 0 | `structuredTypeRelatedToWorker`     | `node_modules/typescript/lib/typescript.js:64597:45` |
| removed | -18.00ms | 0.7% → 0.0% | 18.0ms → 0ms |  17 → 0 | `getPropertyOfType`                 | `node_modules/typescript/lib/typescript.js:58110:31` |
| removed | -17.62ms | 0.7% → 0.0% | 17.6ms → 0ms |  15 → 0 | `invokeOnce`                        | `node_modules/typescript/lib/typescript.js:67401:26` |
| removed | -17.34ms | 0.7% → 0.0% | 17.3ms → 0ms |  20 → 0 | `bindWorker`                        | `node_modules/typescript/lib/typescript.js:44063:24` |
| removed | -16.92ms | 0.7% → 0.0% | 16.9ms → 0ms |  31 → 0 | `inferFromTypes`                    | `node_modules/typescript/lib/typescript.js:67214:30` |
| removed | -16.21ms | 0.6% → 0.0% | 16.2ms → 0ms |  14 → 0 | `structuredTypeRelatedTo`           | `node_modules/typescript/lib/typescript.js:64527:39` |
| removed | -16.17ms | 0.6% → 0.0% | 16.2ms → 0ms |  13 → 0 | `__init`                            | `node_modules/typescript/lib/typescript.js:21:43`    |
| removed | -15.63ms | 0.6% → 0.0% | 15.6ms → 0ms |  13 → 0 | `instantiateSymbol`                 | `node_modules/typescript/lib/typescript.js:62092:31` |
| removed | -15.54ms | 0.6% → 0.0% | 15.5ms → 0ms |  13 → 0 | `instantiateTypes`                  | `node_modules/typescript/lib/typescript.js:61974:30` |
| removed | -14.67ms | 0.6% → 0.0% | 14.7ms → 0ms |  13 → 0 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:57869:47` |
| removed | -14.63ms | 0.6% → 0.0% | 14.6ms → 0ms |  13 → 0 | `createTypeReference`               | `node_modules/typescript/lib/typescript.js:58882:33` |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -7.3% | -13.91ms | 7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |           Time | Samples | Function                   | Location                                   |
| ------: | ------: | -----------: | -------------: | ------: | -------------------------- | ------------------------------------------ |
| removed | -1.29ms |  0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `FastBuffer`               | `node:internal/buffer:956:1`               |
| removed | -1.25ms |  0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `isInt32`                  | `node:internal/validators:45:17`           |
| removed | -1.25ms |  0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `createUnsafeBuffer`       | `node:internal/buffer:1082:28`             |
| removed | -1.25ms |  0.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `statSync`                 | `node:fs:1745:18`                          |
|  -49.1% | -1.21ms | 0.1% → <0.1% |  2.5ms → 1.3ms |   2 → 1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
|   -3.3% | -0.33ms |         0.4% | 10.1ms → 9.8ms |       1 | `post`                     | `node:inspector:118:7`                     |
|   -3.3% | -0.13ms |  0.2% → 0.1% |  3.8ms → 3.7ms |       3 | `slice`                    | `node:buffer:640:12`                       |
|   -0.1% | -0.04ms |  2.9% → 2.7% |         71.5ms |      57 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

| Change |   Delta |            % |        Time |   Samples | Function                                   | Location                                                                                  |
| -----: | ------: | -----------: | ----------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +2.253s | 0.0% → 83.8% | 0ms → 2.25s | 0 → 2,749 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,483 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,482 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,482 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,481 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,481 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|    new | +1.971s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,481 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|    new | +1.970s | 0.0% → 73.3% | 0ms → 1.97s | 0 → 2,482 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +1.969s | 0.0% → 73.2% | 0ms → 1.96s | 0 → 2,480 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|    new | +1.969s | 0.0% → 73.2% | 0ms → 1.96s | 0 → 2,480 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|    new | +1.969s | 0.0% → 73.2% | 0ms → 1.96s | 0 → 2,479 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|    new | +1.793s | 0.0% → 66.7% | 0ms → 1.79s | 0 → 2,210 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|    new | +1.793s | 0.0% → 66.7% | 0ms → 1.79s | 0 → 2,209 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|    new | +1.792s | 0.0% → 66.6% | 0ms → 1.79s | 0 → 2,209 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|    new | +1.791s | 0.0% → 66.6% | 0ms → 1.79s | 0 → 2,208 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|    new | +1.769s | 0.0% → 65.8% | 0ms → 1.76s | 0 → 2,182 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
|    new | +1.769s | 0.0% → 65.8% | 0ms → 1.76s | 0 → 2,182 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|    new | +1.309s | 0.0% → 48.7% | 0ms → 1.30s | 0 → 1,695 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
|    new | +1.299s | 0.0% → 48.3% | 0ms → 1.29s | 0 → 1,372 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
|    new | +1.298s | 0.0% → 48.3% | 0ms → 1.29s | 0 → 1,371 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function                 | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------ | ------------------------------------------ |
| +145.0% | +7.37ms |  0.2% → 0.5% |  5.1ms → 12.5ms |  4 → 10 | `defaultLoadImpl`        | `node:internal/modules/cjs/loader:1112:25` |
| +145.0% | +7.37ms |  0.2% → 0.5% |  5.1ms → 12.5ms |  4 → 10 | `loadSource`             | `node:internal/modules/cjs/loader:1797:20` |
|  +92.3% | +3.54ms |  0.2% → 0.3% |   3.8ms → 7.4ms |   3 → 6 | `tryStatSync`            | `node:fs:389:21`                           |
|  +15.7% | +3.37ms |         0.9% | 21.5ms → 24.8ms | 17 → 20 | `readFileSync`           | `node:fs:433:22`                           |
|     new | +2.46ms |  0.0% → 0.1% |     0ms → 2.5ms |   0 → 2 | `(anonymous)`            | `node:internal/fs/utils:400:38`            |
|     new | +1.33ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `getStatsFromBinding`    | `node:internal/fs/utils:552:29`            |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`            | `node:internal/modules/cjs/loader:683:28`  |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`            | `node:internal/modules/cjs/loader:1346:35` |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `stat`                   | `node:internal/modules/cjs/loader:264:14`  |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `defaultResolveImpl`     | `node:internal/modules/cjs/loader:1026:30` |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `resolveForCJSWithHooks` | `node:internal/modules/cjs/loader:1021:32` |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`            | `node:internal/crypto/util:1:1`            |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `getDirents`             | `node:internal/fs/utils:246:20`            |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `readdirSync`            | `node:fs:1579:21`                          |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `isUint8Array`           | `node:internal/util/types:13:22`           |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`            | `node:internal/fs/utils:708:38`            |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`            | `node:internal/fs/utils:730:42`            |
|     new | +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `wrappedFn`              | `node:internal/errors:535:21`              |
|  +47.5% | +1.21ms |         0.1% |   2.5ms → 3.8ms |   2 → 3 | `openSync`               | `node:fs:559:18`                           |
|   +1.6% | +0.17ms |         0.4% | 10.1ms → 10.3ms |   1 → 2 | `post`                   | `node:inspector:118:7`                     |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Third-party

|  Change |   Delta |            % |        Time |   Samples | Function                                   | Location                                              |
| ------: | ------: | -----------: | ----------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -2.042s | 81.7% → 0.0% | 2.04s → 0ms | 2,253 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -1.774s | 71.0% → 0.0% | 1.77s → 0ms | 2,005 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -1.773s | 70.9% → 0.0% | 1.77s → 0ms | 2,004 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -1.773s | 70.9% → 0.0% | 1.77s → 0ms | 2,004 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed | -1.772s | 70.9% → 0.0% | 1.77s → 0ms | 2,004 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -1.771s | 70.9% → 0.0% | 1.77s → 0ms | 2,003 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -1.771s | 70.9% → 0.0% | 1.77s → 0ms | 2,003 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -1.771s | 70.9% → 0.0% | 1.77s → 0ms | 2,003 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -1.771s | 70.9% → 0.0% | 1.77s → 0ms | 2,003 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed | -1.771s | 70.9% → 0.0% | 1.77s → 0ms | 2,003 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -1.770s | 70.9% → 0.0% | 1.77s → 0ms | 2,002 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -1.598s | 64.0% → 0.0% | 1.59s → 0ms | 1,742 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed | -1.597s | 63.9% → 0.0% | 1.59s → 0ms | 1,741 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -1.597s | 63.9% → 0.0% | 1.59s → 0ms | 1,741 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -1.597s | 63.9% → 0.0% | 1.59s → 0ms | 1,741 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -1.597s | 63.9% → 0.0% | 1.59s → 0ms | 1,741 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -1.571s | 62.9% → 0.0% | 1.57s → 0ms | 1,714 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed | -1.571s | 62.9% → 0.0% | 1.57s → 0ms | 1,714 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed | -1.167s | 46.7% → 0.0% | 1.16s → 0ms | 1,271 → 0 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:80896:24`  |
| removed | -1.148s | 45.9% → 0.0% | 1.14s → 0ms | 1,231 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -7.3% | -13.91ms | 7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |    Delta |           % |              Time | Samples | Function             | Location                                   |
| ------: | -------: | ----------: | ----------------: | ------: | -------------------- | ------------------------------------------ |
|  -11.2% | -11.13ms | 4.0% → 3.3% |   99.0ms → 87.8ms | 79 → 70 | `(anonymous)`        | `node:internal/modules/cjs/loader:1731:37` |
| removed |  -5.00ms | 0.2% → 0.0% |       5.0ms → 0ms |   4 → 0 | `readSync`           | `node:fs:695:18`                           |
| removed |  -5.00ms | 0.2% → 0.0% |       5.0ms → 0ms |   4 → 0 | `tryReadSync`        | `node:fs:412:21`                           |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `(anonymous)`        | `node:internal/modules/cjs/loader:1878:37` |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `(anonymous)`        | `node:internal/modules/cjs/loader:1490:33` |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `(anonymous)`        | `node:internal/modules/cjs/loader:1193:24` |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `(anonymous)`        | `node:internal/modules/cjs/loader:1519:36` |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `wrapModuleLoad`     | `node:internal/modules/cjs/loader:237:24`  |
|   -3.6% |  -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `require`            | `node:internal/modules/helpers:146:19`     |
| removed |  -2.54ms | 0.1% → 0.0% |       2.5ms → 0ms |   2 → 0 | `createUnsafeBuffer` | `node:internal/buffer:1082:28`             |
| removed |  -2.54ms | 0.1% → 0.0% |       2.5ms → 0ms |   2 → 0 | `allocate`           | `node:buffer:436:18`                       |
| removed |  -2.54ms | 0.1% → 0.0% |       2.5ms → 0ms |   2 → 0 | `allocUnsafe`        | `node:buffer:411:42`                       |
| removed |  -2.54ms | 0.1% → 0.0% |       2.5ms → 0ms |   2 → 0 | `tryCreateBuffer`    | `node:fs:397:25`                           |
| removed |  -2.50ms | 0.1% → 0.0% |       2.5ms → 0ms |   2 → 0 | `(anonymous)`        | `node:fs:2851:23`                          |
| removed |  -1.29ms | 0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `FastBuffer`         | `node:internal/buffer:956:1`               |
| removed |  -1.29ms | 0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `createPool`         | `node:buffer:155:20`                       |
| removed |  -1.25ms | 0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `isInt32`            | `node:internal/validators:45:17`           |
|   -3.3% |  -0.13ms | 0.2% → 0.1% |     3.8ms → 3.7ms |       3 | `slice`              | `node:buffer:640:12`                       |
|   -3.3% |  -0.13ms | 0.2% → 0.1% |     3.8ms → 3.7ms |       3 | `toString`           | `node:buffer:839:46`                       |
|   -0.1% |  -0.04ms | 2.9% → 2.7% |            71.5ms |      57 | `wrapSafe`           | `node:internal/modules/cjs/loader:1671:18` |
