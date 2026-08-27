# Wall time profile diff

Took 16.90s → 18.51s (+1.611s, +9.5%) over 13,480 samples → 14,812 samples (1.3ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        |  +7.1% |   +1.052s | 87.7% → 85.8% |   14.82s → 15.87s | 11,823 → 12,703 |
| Garbage collector  | +27.2% | +486.80ms | 10.6% → 12.3% |     1.78s → 2.27s |   1,425 → 1,819 |
| Native             | +40.8% |  +58.29ms |   0.8% → 1.1% | 143.0ms → 201.3ms |       114 → 161 |
| Standard library   |  +4.4% |   +5.83ms |   0.8% → 0.7% | 131.7ms → 137.5ms |       105 → 110 |
| Regular expression | +30.4% |   +4.95ms |          0.1% |   16.3ms → 21.3ms |         13 → 17 |
| Ours               |    new |   +2.50ms |  0.0% → <0.1% |       0ms → 2.5ms |           0 → 2 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

| Change |     Delta |             % |          Time |       Samples | Function                         | Location                                                                        |
| -----: | --------: | ------------: | ------------: | ------------: | -------------------------------- | ------------------------------------------------------------------------------- |
|    new | +691.25ms |   0.0% → 3.7% | 0ms → 691.3ms |       0 → 553 | `isRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +670.00ms |   0.0% → 3.6% | 0ms → 670.0ms |       0 → 536 | `recursiveTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| +27.2% | +486.80ms | 10.6% → 12.3% | 1.78s → 2.27s | 1,425 → 1,819 | `(garbage collector)`            | `<unknown>`                                                                     |
|    new | +398.75ms |   0.0% → 2.2% | 0ms → 398.8ms |       0 → 319 | `checkTypeRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +373.75ms |   0.0% → 2.0% | 0ms → 373.8ms |       0 → 299 | `getObjectTypeInstantiation`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +361.25ms |   0.0% → 2.0% | 0ms → 361.3ms |       0 → 289 | `instantiateTypeWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +232.50ms |   0.0% → 1.3% | 0ms → 232.5ms |       0 → 186 | `scan`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +185.00ms |   0.0% → 1.0% | 0ms → 185.0ms |       0 → 148 | `getRelationKey`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +181.25ms |   0.0% → 1.0% | 0ms → 181.3ms |       0 → 145 | `getNormalizedType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +162.50ms |   0.0% → 0.9% | 0ms → 162.5ms |       0 → 130 | `getNodeLinks`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +161.25ms |   0.0% → 0.9% | 0ms → 161.3ms |       0 → 129 | `structuredTypeRelatedToWorker`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +157.50ms |   0.0% → 0.9% | 0ms → 157.5ms |       0 → 126 | `inferFromTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +145.00ms |   0.0% → 0.8% | 0ms → 145.0ms |       0 → 116 | `bind`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +140.00ms |   0.0% → 0.8% | 0ms → 140.0ms |       0 → 112 | `createTypeReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +131.25ms |   0.0% → 0.7% | 0ms → 131.3ms |       0 → 105 | `instantiateType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +131.25ms |   0.0% → 0.7% | 0ms → 131.3ms |       0 → 105 | `getReducedApparentType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +130.00ms |   0.0% → 0.7% | 0ms → 130.0ms |       0 → 104 | `instantiateList`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +128.75ms |   0.0% → 0.7% | 0ms → 128.8ms |       0 → 103 | `typeRelatedToSomeType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +120.00ms |   0.0% → 0.6% | 0ms → 120.0ms |        0 → 96 | `isIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +116.25ms |   0.0% → 0.6% | 0ms → 116.3ms |        0 → 93 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### Third-party

| Change |     Delta |           % |          Time | Samples | Function                         | Location                                                                        |
| -----: | --------: | ----------: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
|    new | +691.25ms | 0.0% → 3.7% | 0ms → 691.3ms | 0 → 553 | `isRelatedTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +670.00ms | 0.0% → 3.6% | 0ms → 670.0ms | 0 → 536 | `recursiveTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +398.75ms | 0.0% → 2.2% | 0ms → 398.8ms | 0 → 319 | `checkTypeRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +373.75ms | 0.0% → 2.0% | 0ms → 373.8ms | 0 → 299 | `getObjectTypeInstantiation`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +361.25ms | 0.0% → 2.0% | 0ms → 361.3ms | 0 → 289 | `instantiateTypeWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +232.50ms | 0.0% → 1.3% | 0ms → 232.5ms | 0 → 186 | `scan`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +185.00ms | 0.0% → 1.0% | 0ms → 185.0ms | 0 → 148 | `getRelationKey`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +181.25ms | 0.0% → 1.0% | 0ms → 181.3ms | 0 → 145 | `getNormalizedType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +162.50ms | 0.0% → 0.9% | 0ms → 162.5ms | 0 → 130 | `getNodeLinks`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +161.25ms | 0.0% → 0.9% | 0ms → 161.3ms | 0 → 129 | `structuredTypeRelatedToWorker`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +157.50ms | 0.0% → 0.9% | 0ms → 157.5ms | 0 → 126 | `inferFromTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +145.00ms | 0.0% → 0.8% | 0ms → 145.0ms | 0 → 116 | `bind`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +140.00ms | 0.0% → 0.8% | 0ms → 140.0ms | 0 → 112 | `createTypeReference`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +131.25ms | 0.0% → 0.7% | 0ms → 131.3ms | 0 → 105 | `instantiateType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +131.25ms | 0.0% → 0.7% | 0ms → 131.3ms | 0 → 105 | `getReducedApparentType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +130.00ms | 0.0% → 0.7% | 0ms → 130.0ms | 0 → 104 | `instantiateList`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +128.75ms | 0.0% → 0.7% | 0ms → 128.8ms | 0 → 103 | `typeRelatedToSomeType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +120.00ms | 0.0% → 0.6% | 0ms → 120.0ms |  0 → 96 | `isIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +116.25ms | 0.0% → 0.6% | 0ms → 116.3ms |  0 → 93 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +115.00ms | 0.0% → 0.6% | 0ms → 115.0ms |  0 → 92 | `getMappedType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
| +27.2% | +486.80ms | 10.6% → 12.3% | 1.78s → 2.27s | 1,425 → 1,819 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ----------- |
|  +57.4% | +27.35ms |  0.3% → 0.4% | 47.7ms → 75.0ms | 38 → 60 | `open`     | `<unknown>` |
| +282.1% | +21.23ms | <0.1% → 0.2% |  7.5ms → 28.8ms |  6 → 23 | `realpath` | `<unknown>` |
|  +12.4% |  +7.31ms |  0.3% → 0.4% | 58.9ms → 66.3ms | 47 → 53 | `stat`     | `<unknown>` |
|  +66.1% |  +2.49ms |        <0.1% |   3.8ms → 6.3ms |   3 → 5 | `readdir`  | `<unknown>` |
|  +99.4% |  +1.25ms |        <0.1% |   1.3ms → 2.5ms |   1 → 2 | `fstat`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

##### Third-party

|  Change |     Delta |           % |          Time | Samples | Function                        | Location                                    |
| ------: | --------: | ----------: | ------------: | ------: | ------------------------------- | ------------------------------------------- |
| removed | -476.52ms | 2.8% → 0.0% | 476.5ms → 0ms | 380 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| removed | -469.00ms | 2.8% → 0.0% | 469.0ms → 0ms | 374 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| removed | -344.85ms | 2.0% → 0.0% | 344.8ms → 0ms | 275 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| removed | -333.56ms | 2.0% → 0.0% | 333.6ms → 0ms | 266 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| removed | -278.39ms | 1.6% → 0.0% | 278.4ms → 0ms | 222 → 0 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| removed | -274.63ms | 1.6% → 0.0% | 274.6ms → 0ms | 219 → 0 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -215.69ms | 1.3% → 0.0% | 215.7ms → 0ms | 172 → 0 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -166.78ms | 1.0% → 0.0% | 166.8ms → 0ms | 133 → 0 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| removed | -156.75ms | 0.9% → 0.0% | 156.8ms → 0ms | 125 → 0 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| removed | -154.24ms | 0.9% → 0.0% | 154.2ms → 0ms | 123 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| removed | -140.45ms | 0.8% → 0.0% | 140.4ms → 0ms | 112 → 0 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| removed | -130.42ms | 0.8% → 0.0% | 130.4ms → 0ms | 104 → 0 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| removed | -125.40ms | 0.7% → 0.0% | 125.4ms → 0ms | 100 → 0 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| removed | -122.89ms | 0.7% → 0.0% | 122.9ms → 0ms |  98 → 0 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| removed | -120.38ms | 0.7% → 0.0% | 120.4ms → 0ms |  96 → 0 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |
| removed | -119.13ms | 0.7% → 0.0% | 119.1ms → 0ms |  95 → 0 | `resolveStructuredTypeMembers`  | `node_modules/typescript/lib/typescript.js` |
| removed | -119.13ms | 0.7% → 0.0% | 119.1ms → 0ms |  95 → 0 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| removed | -111.61ms | 0.7% → 0.0% | 111.6ms → 0ms |  89 → 0 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| removed | -106.59ms | 0.6% → 0.0% | 106.6ms → 0ms |  85 → 0 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js` |
| removed | -100.32ms | 0.6% → 0.0% | 100.3ms → 0ms |  80 → 0 | `bind`                          | `node_modules/typescript/lib/typescript.js` |

##### Native

| Change |   Delta |     % |          Time | Samples | Function            | Location    |
| -----: | ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| -25.2% | -1.27ms | <0.1% | 5.0ms → 3.8ms |   4 → 3 | `close`             | `<unknown>` |
|  -0.3% | -0.04ms |  0.1% |        13.8ms |      11 | `read`              | `<unknown>` |
|  -0.3% | -0.01ms | <0.1% |         3.8ms |       3 | `readFileUtf8`      | `<unknown>` |
|  -0.3% | -4.00µs | <0.1% |         1.3ms |       1 | `getNativeThreadId` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

##### Third-party

| Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                                                                  |
| -----: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +15.375s | 0.0% → 83.0% | 0ms → 15.37s | 0 → 12,300 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.925s | 0.0% → 75.2% | 0ms → 13.92s | 0 → 11,140 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.922s | 0.0% → 75.2% | 0ms → 13.92s | 0 → 11,138 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.918s | 0.0% → 75.2% | 0ms → 13.91s | 0 → 11,135 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.917s | 0.0% → 75.2% | 0ms → 13.91s | 0 → 11,134 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.916s | 0.0% → 75.2% | 0ms → 13.91s | 0 → 11,133 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.916s | 0.0% → 75.2% | 0ms → 13.91s | 0 → 11,133 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.915s | 0.0% → 75.2% | 0ms → 13.91s | 0 → 11,132 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114657:47` |
|    new | +13.907s | 0.0% → 75.1% | 0ms → 13.90s | 0 → 11,126 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.906s | 0.0% → 75.1% | 0ms → 13.90s | 0 → 11,125 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.998s | 0.0% → 70.2% | 0ms → 12.99s | 0 → 10,399 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.997s | 0.0% → 70.2% | 0ms → 12.99s | 0 → 10,398 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.997s | 0.0% → 70.2% | 0ms → 12.99s | 0 → 10,398 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.995s | 0.0% → 70.2% | 0ms → 12.99s | 0 → 10,396 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.993s | 0.0% → 70.2% | 0ms → 12.99s | 0 → 10,395 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114747:32` |
|    new | +12.871s | 0.0% → 69.5% | 0ms → 12.87s | 0 → 10,297 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +12.867s | 0.0% → 69.5% | 0ms → 12.86s | 0 → 10,294 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.732s | 0.0% → 52.6% |  0ms → 9.73s |  0 → 7,786 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.712s | 0.0% → 52.5% |  0ms → 9.71s |  0 → 7,770 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.420s | 0.0% → 50.9% |  0ms → 9.42s |  0 → 7,536 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
| +27.2% | +486.80ms | 10.6% → 12.3% | 1.78s → 2.27s | 1,425 → 1,819 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ----------- |
|  +57.4% | +27.35ms |  0.3% → 0.4% | 47.7ms → 75.0ms | 38 → 60 | `open`     | `<unknown>` |
| +282.1% | +21.23ms | <0.1% → 0.2% |  7.5ms → 28.8ms |  6 → 23 | `realpath` | `<unknown>` |
|  +12.4% |  +7.31ms |  0.3% → 0.4% | 58.9ms → 66.3ms | 47 → 53 | `stat`     | `<unknown>` |
|  +66.1% |  +2.49ms |        <0.1% |   3.8ms → 6.3ms |   3 → 5 | `readdir`  | `<unknown>` |
|  +99.4% |  +1.25ms |        <0.1% |   1.3ms → 2.5ms |   1 → 2 | `fstat`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                              |
| ------: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -14.242s | 84.3% → 0.0% | 14.24s → 0ms | 11,358 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.962s | 76.7% → 0.0% | 12.96s → 0ms | 10,337 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.958s | 76.7% → 0.0% | 12.95s → 0ms | 10,334 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.956s | 76.6% → 0.0% | 12.95s → 0ms | 10,332 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.951s | 76.6% → 0.0% | 12.95s → 0ms | 10,328 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.950s | 76.6% → 0.0% | 12.95s → 0ms | 10,327 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.947s | 76.6% → 0.0% | 12.94s → 0ms | 10,325 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| removed | -12.947s | 76.6% → 0.0% | 12.94s → 0ms | 10,325 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.946s | 76.6% → 0.0% | 12.94s → 0ms | 10,324 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.941s | 76.6% → 0.0% | 12.94s → 0ms | 10,320 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.166s | 72.0% → 0.0% | 12.16s → 0ms |  9,702 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.165s | 72.0% → 0.0% | 12.16s → 0ms |  9,701 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.162s | 72.0% → 0.0% | 12.16s → 0ms |  9,699 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.162s | 72.0% → 0.0% | 12.16s → 0ms |  9,699 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.161s | 71.9% → 0.0% | 12.16s → 0ms |  9,698 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.157s | 71.9% → 0.0% | 12.15s → 0ms |  9,695 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| removed | -12.053s | 71.3% → 0.0% | 12.05s → 0ms |  9,612 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.052s | 71.3% → 0.0% | 12.05s → 0ms |  9,611 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| removed |  -9.193s | 54.4% → 0.0% |  9.19s → 0ms |  7,331 → 0 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| removed |  -9.185s | 54.3% → 0.0% |  9.18s → 0ms |  7,325 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Native

| Change |   Delta |     % |          Time | Samples | Function            | Location    |
| -----: | ------: | ----: | ------------: | ------: | ------------------- | ----------- |
| -25.2% | -1.27ms | <0.1% | 5.0ms → 3.8ms |   4 → 3 | `close`             | `<unknown>` |
|  -0.3% | -0.04ms |  0.1% |        13.8ms |      11 | `read`              | `<unknown>` |
|  -0.3% | -0.01ms | <0.1% |         3.8ms |       3 | `readFileUtf8`      | `<unknown>` |
|  -0.3% | -4.00µs | <0.1% |         1.3ms |       1 | `getNativeThreadId` | `<unknown>` |
