# Wall time profile diff

Took 16.89s → 18.29s (+1.398s, +8.3%) over 13,495 samples → 14,612 samples (1.3ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        | +10.6% |   +1.554s | 86.7% → 88.6% |   14.64s → 16.20s | 11,699 → 12,941 |
| Garbage collector  |  -9.0% | -174.03ms |  11.4% → 9.6% |     1.93s → 1.75s |   1,542 → 1,403 |
| Native             | +14.9% |  +22.54ms |   0.9% → 1.0% | 151.5ms → 174.0ms |       121 → 139 |
| Standard library   | -10.1% |  -15.02ms |   0.9% → 0.7% | 149.0ms → 134.0ms |       119 → 107 |
| Regular expression | +50.0% |   +8.76ms |          0.1% |   17.5ms → 26.3ms |         14 → 21 |
| Ours               |    new |   +1.25ms |  0.0% → <0.1% |       0ms → 1.3ms |           0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

##### Third-party

| Change |     Delta |           % |          Time | Samples | Function                            | Location                                                                        |
| -----: | --------: | ----------: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
|    new | +716.14ms | 0.0% → 3.9% | 0ms → 716.1ms | 0 → 572 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +672.32ms | 0.0% → 3.7% | 0ms → 672.3ms | 0 → 537 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +423.18ms | 0.0% → 2.3% | 0ms → 423.2ms | 0 → 338 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +355.57ms | 0.0% → 1.9% | 0ms → 355.6ms | 0 → 284 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +354.32ms | 0.0% → 1.9% | 0ms → 354.3ms | 0 → 283 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +197.82ms | 0.0% → 1.1% | 0ms → 197.8ms | 0 → 158 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +197.82ms | 0.0% → 1.1% | 0ms → 197.8ms | 0 → 158 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +194.06ms | 0.0% → 1.1% | 0ms → 194.1ms | 0 → 155 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +184.04ms | 0.0% → 1.0% | 0ms → 184.0ms | 0 → 147 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +170.27ms | 0.0% → 0.9% | 0ms → 170.3ms | 0 → 136 | `getNodeLinks`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +142.73ms | 0.0% → 0.8% | 0ms → 142.7ms | 0 → 114 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +135.22ms | 0.0% → 0.7% | 0ms → 135.2ms | 0 → 108 | `instantiateType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +135.22ms | 0.0% → 0.7% | 0ms → 135.2ms | 0 → 108 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +132.71ms | 0.0% → 0.7% | 0ms → 132.7ms | 0 → 106 | `getReducedApparentType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +132.71ms | 0.0% → 0.7% | 0ms → 132.7ms | 0 → 106 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +127.70ms | 0.0% → 0.7% | 0ms → 127.7ms | 0 → 102 | `getMappedType`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +127.70ms | 0.0% → 0.7% | 0ms → 127.7ms | 0 → 102 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +125.20ms | 0.0% → 0.7% | 0ms → 125.2ms | 0 → 100 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +125.20ms | 0.0% → 0.7% | 0ms → 125.2ms | 0 → 100 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +121.44ms | 0.0% → 0.7% | 0ms → 121.4ms |  0 → 97 | `typeRelatedToSomeType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |          Time |       Samples | Function                        | Location                                    |
| ------: | --------: | -----------: | ------------: | ------------: | ------------------------------- | ------------------------------------------- |
| removed | -497.04ms |  2.9% → 0.0% | 497.0ms → 0ms |       397 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| removed | -451.97ms |  2.7% → 0.0% | 452.0ms → 0ms |       361 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| removed | -359.32ms |  2.1% → 0.0% | 359.3ms → 0ms |       287 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| removed | -350.56ms |  2.1% → 0.0% | 350.6ms → 0ms |       280 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| removed | -305.49ms |  1.8% → 0.0% | 305.5ms → 0ms |       244 → 0 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| removed | -291.72ms |  1.7% → 0.0% | 291.7ms → 0ms |       233 → 0 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -226.61ms |  1.3% → 0.0% | 226.6ms → 0ms |       181 → 0 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -190.30ms |  1.1% → 0.0% | 190.3ms → 0ms |       152 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|   -9.0% | -174.03ms | 11.4% → 9.6% | 1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)`           | `<unknown>`                                 |
| removed | -155.25ms |  0.9% → 0.0% | 155.2ms → 0ms |       124 → 0 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| removed | -137.72ms |  0.8% → 0.0% | 137.7ms → 0ms |       110 → 0 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| removed | -130.21ms |  0.8% → 0.0% | 130.2ms → 0ms |       104 → 0 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| removed | -120.19ms |  0.7% → 0.0% | 120.2ms → 0ms |        96 → 0 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| removed | -118.94ms |  0.7% → 0.0% | 118.9ms → 0ms |        95 → 0 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| removed | -117.69ms |  0.7% → 0.0% | 117.7ms → 0ms |        94 → 0 | `getSymbolLinks`                | `node_modules/typescript/lib/typescript.js` |
| removed | -115.18ms |  0.7% → 0.0% | 115.2ms → 0ms |        92 → 0 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| removed | -110.18ms |  0.7% → 0.0% | 110.2ms → 0ms |        88 → 0 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| removed | -108.92ms |  0.6% → 0.0% | 108.9ms → 0ms |        87 → 0 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -103.92ms |  0.6% → 0.0% | 103.9ms → 0ms |        83 → 0 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js` |
| removed | -102.66ms |  0.6% → 0.0% | 102.7ms → 0ms |        82 → 0 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |     Delta |           % |          Time | Samples | Function                        | Location                                    |
| ------: | --------: | ----------: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
| removed | -497.04ms | 2.9% → 0.0% | 497.0ms → 0ms | 397 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| removed | -451.97ms | 2.7% → 0.0% | 452.0ms → 0ms | 361 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| removed | -359.32ms | 2.1% → 0.0% | 359.3ms → 0ms | 287 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| removed | -350.56ms | 2.1% → 0.0% | 350.6ms → 0ms | 280 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| removed | -305.49ms | 1.8% → 0.0% | 305.5ms → 0ms | 244 → 0 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| removed | -291.72ms | 1.7% → 0.0% | 291.7ms → 0ms | 233 → 0 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -226.61ms | 1.3% → 0.0% | 226.6ms → 0ms | 181 → 0 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -190.30ms | 1.1% → 0.0% | 190.3ms → 0ms | 152 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| removed | -155.25ms | 0.9% → 0.0% | 155.2ms → 0ms | 124 → 0 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| removed | -137.72ms | 0.8% → 0.0% | 137.7ms → 0ms | 110 → 0 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| removed | -130.21ms | 0.8% → 0.0% | 130.2ms → 0ms | 104 → 0 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| removed | -120.19ms | 0.7% → 0.0% | 120.2ms → 0ms |  96 → 0 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| removed | -118.94ms | 0.7% → 0.0% | 118.9ms → 0ms |  95 → 0 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| removed | -117.69ms | 0.7% → 0.0% | 117.7ms → 0ms |  94 → 0 | `getSymbolLinks`                | `node_modules/typescript/lib/typescript.js` |
| removed | -115.18ms | 0.7% → 0.0% | 115.2ms → 0ms |  92 → 0 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| removed | -110.18ms | 0.7% → 0.0% | 110.2ms → 0ms |  88 → 0 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| removed | -108.92ms | 0.6% → 0.0% | 108.9ms → 0ms |  87 → 0 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -103.92ms | 0.6% → 0.0% | 103.9ms → 0ms |  83 → 0 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js` |
| removed | -102.66ms | 0.6% → 0.0% | 102.7ms → 0ms |  82 → 0 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| removed | -101.41ms | 0.6% → 0.0% | 101.4ms → 0ms |  81 → 0 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |     Delta |            % |          Time |       Samples | Function              | Location    |
| -----: | --------: | -----------: | ------------: | ------------: | --------------------- | ----------- |
|  -9.0% | -174.03ms | 11.4% → 9.6% | 1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

##### Third-party

| Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                                                                  |
| -----: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +15.648s | 0.0% → 85.5% | 0ms → 15.64s | 0 → 12,499 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.213s | 0.0% → 77.7% | 0ms → 14.21s | 0 → 11,353 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +14.210s | 0.0% → 77.7% | 0ms → 14.21s | 0 → 11,350 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.206s | 0.0% → 77.7% | 0ms → 14.20s | 0 → 11,347 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.202s | 0.0% → 77.6% | 0ms → 14.20s | 0 → 11,344 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.193s | 0.0% → 77.6% | 0ms → 14.19s | 0 → 11,337 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.192s | 0.0% → 77.6% | 0ms → 14.19s | 0 → 11,336 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +14.192s | 0.0% → 77.6% | 0ms → 14.19s | 0 → 11,336 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.191s | 0.0% → 77.6% | 0ms → 14.19s | 0 → 11,335 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.190s | 0.0% → 77.6% | 0ms → 14.19s | 0 → 11,334 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.188s | 0.0% → 77.6% | 0ms → 14.18s | 0 → 11,333 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.297s | 0.0% → 72.7% | 0ms → 13.29s | 0 → 10,621 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.296s | 0.0% → 72.7% | 0ms → 13.29s | 0 → 10,620 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.296s | 0.0% → 72.7% | 0ms → 13.29s | 0 → 10,620 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.294s | 0.0% → 72.7% | 0ms → 13.29s | 0 → 10,619 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.151s | 0.0% → 71.9% | 0ms → 13.15s | 0 → 10,504 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.148s | 0.0% → 71.9% | 0ms → 13.14s | 0 → 10,502 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.914s | 0.0% → 54.2% |  0ms → 9.91s |  0 → 7,919 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.908s | 0.0% → 54.2% |  0ms → 9.90s |  0 → 7,914 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.619s | 0.0% → 52.6% |  0ms → 9.61s |  0 → 7,683 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                              |
| ------: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -14.098s | 83.4% → 0.0% | 14.09s → 0ms | 11,261 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.819s | 75.9% → 0.0% | 12.81s → 0ms | 10,239 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.817s | 75.9% → 0.0% | 12.81s → 0ms | 10,238 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -12.817s | 75.9% → 0.0% | 12.81s → 0ms | 10,238 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.816s | 75.9% → 0.0% | 12.81s → 0ms | 10,237 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.815s | 75.9% → 0.0% | 12.81s → 0ms | 10,236 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -12.815s | 75.9% → 0.0% | 12.81s → 0ms | 10,236 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.815s | 75.9% → 0.0% | 12.81s → 0ms | 10,236 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.814s | 75.8% → 0.0% | 12.81s → 0ms | 10,235 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.811s | 75.8% → 0.0% | 12.81s → 0ms | 10,233 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.809s | 75.8% → 0.0% | 12.80s → 0ms | 10,231 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.012s | 71.1% → 0.0% | 12.01s → 0ms |  9,595 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.009s | 71.1% → 0.0% |    12s → 0ms |  9,592 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.007s | 71.1% → 0.0% |    12s → 0ms |  9,591 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.007s | 71.1% → 0.0% |    12s → 0ms |  9,591 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.004s | 71.0% → 0.0% |    12s → 0ms |  9,588 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.862s | 70.2% → 0.0% | 11.86s → 0ms |  9,475 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.861s | 70.2% → 0.0% | 11.86s → 0ms |  9,474 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| removed |  -9.102s | 53.9% → 0.0% |  9.10s → 0ms |  7,270 → 0 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| removed |  -9.094s | 53.8% → 0.0% |  9.09s → 0ms |  7,264 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

| Change |     Delta |            % |          Time |       Samples | Function              | Location    |
| -----: | --------: | -----------: | ------------: | ------------: | --------------------- | ----------- |
|  -9.0% | -174.03ms | 11.4% → 9.6% | 1.93s → 1.75s | 1,542 → 1,403 | `(garbage collector)` | `<unknown>` |
