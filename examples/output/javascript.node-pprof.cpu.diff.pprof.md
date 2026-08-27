# Wall time profile diff

Took 16.15s → 18.77s (+2.618s, +16.2%) over 12,875 samples → 14,985 samples (1.3ms per sample).

| Category           | Change |    Delta |             % |              Time |         Samples |
| ------------------ | -----: | -------: | ------------: | ----------------: | --------------: |
| Third-party        | +18.8% |  +2.610s | 86.1% → 88.0% |   13.91s → 16.52s | 11,089 → 13,190 |
| Garbage collector  |  -1.7% | -33.15ms | 12.0% → 10.1% |     1.93s → 1.89s |   1,539 → 1,515 |
| Native             | +26.6% | +37.37ms |          0.9% | 140.6ms → 177.9ms |       112 → 142 |
| Standard library   | +13.0% | +17.33ms |          0.8% | 133.0ms → 150.4ms |       106 → 120 |
| Regular expression | -42.9% | -15.09ms |   0.2% → 0.1% |   35.1ms → 20.0ms |         28 → 16 |
| Ours               | +99.7% |  +1.25ms |         <0.1% |     1.3ms → 2.5ms |           1 → 2 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

##### Third-party

| Change |     Delta |           % |          Time | Samples | Function                        | Location                                                                        |
| -----: | --------: | ----------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
|    new | +724.23ms | 0.0% → 3.9% | 0ms → 724.2ms | 0 → 578 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +684.14ms | 0.0% → 3.6% | 0ms → 684.1ms | 0 → 546 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +409.73ms | 0.0% → 2.2% | 0ms → 409.7ms | 0 → 327 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +400.96ms | 0.0% → 2.1% | 0ms → 401.0ms | 0 → 320 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +364.62ms | 0.0% → 1.9% | 0ms → 364.6ms | 0 → 291 | `instantiateTypeWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +239.32ms | 0.0% → 1.3% | 0ms → 239.3ms | 0 → 191 | `scan`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +209.25ms | 0.0% → 1.1% | 0ms → 209.3ms | 0 → 167 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +177.93ms | 0.0% → 0.9% | 0ms → 177.9ms | 0 → 142 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +165.40ms | 0.0% → 0.9% | 0ms → 165.4ms | 0 → 132 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +154.12ms | 0.0% → 0.8% | 0ms → 154.1ms | 0 → 123 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +154.12ms | 0.0% → 0.8% | 0ms → 154.1ms | 0 → 123 | `getNodeLinks`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +154.12ms | 0.0% → 0.8% | 0ms → 154.1ms | 0 → 123 | `bind`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +151.61ms | 0.0% → 0.8% | 0ms → 151.6ms | 0 → 121 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +140.34ms | 0.0% → 0.7% | 0ms → 140.3ms | 0 → 112 | `createTypeReference`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +139.08ms | 0.0% → 0.7% | 0ms → 139.1ms | 0 → 111 | `getReducedApparentType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +135.32ms | 0.0% → 0.7% | 0ms → 135.3ms | 0 → 108 | `instantiateType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +129.06ms | 0.0% → 0.7% | 0ms → 129.1ms | 0 → 103 | `resolveStructuredTypeMembers`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +121.54ms | 0.0% → 0.6% | 0ms → 121.5ms |  0 → 97 | `scanJsDocToken`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +119.03ms | 0.0% → 0.6% | 0ms → 119.0ms |  0 → 95 | `getTypeOfSymbol`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|    new | +115.28ms | 0.0% → 0.6% | 0ms → 115.3ms |  0 → 92 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

##### Third-party

|  Change |     Delta |           % |          Time | Samples | Function                                       | Location                                    |
| ------: | --------: | ----------: | ------------: | ------: | ---------------------------------------------- | ------------------------------------------- |
| removed | -491.96ms | 3.0% → 0.0% | 492.0ms → 0ms | 392 → 0 | `recursiveTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js` |
| removed | -471.88ms | 2.9% → 0.0% | 471.9ms → 0ms | 376 → 0 | `checkTypeRelatedTo`                           | `node_modules/typescript/lib/typescript.js` |
| removed | -376.50ms | 2.3% → 0.0% | 376.5ms → 0ms | 300 → 0 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
| removed | -317.51ms | 2.0% → 0.0% | 317.5ms → 0ms | 253 → 0 | `isRelatedTo`                                  | `node_modules/typescript/lib/typescript.js` |
| removed | -292.41ms | 1.8% → 0.0% | 292.4ms → 0ms | 233 → 0 | `instantiateTypeWorker`                        | `node_modules/typescript/lib/typescript.js` |
| removed | -230.92ms | 1.4% → 0.0% | 230.9ms → 0ms | 184 → 0 | `scan`                                         | `node_modules/typescript/lib/typescript.js` |
| removed | -189.50ms | 1.2% → 0.0% | 189.5ms → 0ms | 151 → 0 | `some`                                         | `node_modules/typescript/lib/typescript.js` |
| removed | -173.19ms | 1.1% → 0.0% | 173.2ms → 0ms | 138 → 0 | `createInstantiatedSymbolTable`                | `node_modules/typescript/lib/typescript.js` |
| removed | -148.09ms | 0.9% → 0.0% | 148.1ms → 0ms | 118 → 0 | `inferFromTypes`                               | `node_modules/typescript/lib/typescript.js` |
| removed | -143.07ms | 0.9% → 0.0% | 143.1ms → 0ms | 114 → 0 | `getNodeLinks`                                 | `node_modules/typescript/lib/typescript.js` |
| removed | -136.79ms | 0.8% → 0.0% | 136.8ms → 0ms | 109 → 0 | `bind`                                         | `node_modules/typescript/lib/typescript.js` |
| removed | -135.54ms | 0.8% → 0.0% | 135.5ms → 0ms | 108 → 0 | `createTypeReference`                          | `node_modules/typescript/lib/typescript.js` |
| removed | -125.50ms | 0.8% → 0.0% | 125.5ms → 0ms | 100 → 0 | `structuredTypeRelatedToWorker`                | `node_modules/typescript/lib/typescript.js` |
| removed | -119.22ms | 0.7% → 0.0% | 119.2ms → 0ms |  95 → 0 | `invokeOnce`                                   | `node_modules/typescript/lib/typescript.js` |
| removed | -109.18ms | 0.7% → 0.0% | 109.2ms → 0ms |  87 → 0 | `getMembersOfSymbol`                           | `node_modules/typescript/lib/typescript.js` |
| removed | -101.66ms | 0.6% → 0.0% | 101.7ms → 0ms |  81 → 0 | `getReducedApparentType`                       | `node_modules/typescript/lib/typescript.js` |
| removed | -101.66ms | 0.6% → 0.0% | 101.7ms → 0ms |  81 → 0 | `bindWorker`                                   | `node_modules/typescript/lib/typescript.js` |
| removed | -100.40ms | 0.6% → 0.0% | 100.4ms → 0ms |  80 → 0 | `getPropertyOfType`                            | `node_modules/typescript/lib/typescript.js` |
| removed |  -94.13ms | 0.6% → 0.0% |  94.1ms → 0ms |  75 → 0 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| removed |  -92.87ms | 0.6% → 0.0% |  92.9ms → 0ms |  74 → 0 | `instantiateList`                              | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  -1.7% | -33.15ms | 12.0% → 10.1% | 1.93s → 1.89s | 1,539 → 1,515 | `(garbage collector)` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

##### Third-party

| Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                                                                  |
| -----: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +15.964s | 0.0% → 85.0% | 0ms → 15.96s | 0 → 12,741 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.473s | 0.0% → 77.1% | 0ms → 14.47s | 0 → 11,551 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +14.472s | 0.0% → 77.1% | 0ms → 14.47s | 0 → 11,550 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.472s | 0.0% → 77.1% | 0ms → 14.47s | 0 → 11,550 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.470s | 0.0% → 77.1% | 0ms → 14.47s | 0 → 11,549 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.469s | 0.0% → 77.1% | 0ms → 14.46s | 0 → 11,548 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.468s | 0.0% → 77.1% | 0ms → 14.46s | 0 → 11,547 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +14.468s | 0.0% → 77.1% | 0ms → 14.46s | 0 → 11,547 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.468s | 0.0% → 77.1% | 0ms → 14.46s | 0 → 11,547 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.464s | 0.0% → 77.0% | 0ms → 14.46s | 0 → 11,544 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +14.460s | 0.0% → 77.0% | 0ms → 14.46s | 0 → 11,541 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.539s | 0.0% → 72.1% | 0ms → 13.53s | 0 → 10,806 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.538s | 0.0% → 72.1% | 0ms → 13.53s | 0 → 10,805 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.536s | 0.0% → 72.1% | 0ms → 13.53s | 0 → 10,803 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.527s | 0.0% → 72.0% | 0ms → 13.52s | 0 → 10,796 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.437s | 0.0% → 71.6% | 0ms → 13.43s | 0 → 10,724 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +13.430s | 0.0% → 71.5% | 0ms → 13.43s | 0 → 10,719 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +10.070s | 0.0% → 53.6% | 0ms → 10.07s |  0 → 8,037 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +10.051s | 0.0% → 53.5% | 0ms → 10.05s |  0 → 8,022 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +9.851s | 0.0% → 52.5% |  0ms → 9.85s |  0 → 7,862 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

##### Third-party

|  Change |    Delta |            % |         Time |    Samples | Function                                   | Location                                              |
| ------: | -------: | -----------: | -----------: | ---------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -13.409s | 83.0% → 0.0% | 13.40s → 0ms | 10,685 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.148s | 75.2% → 0.0% | 12.14s → 0ms |  9,680 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.145s | 75.2% → 0.0% | 12.14s → 0ms |  9,678 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.144s | 75.2% → 0.0% | 12.14s → 0ms |  9,677 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -12.144s | 75.2% → 0.0% | 12.14s → 0ms |  9,677 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -12.143s | 75.2% → 0.0% | 12.14s → 0ms |  9,676 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.338s | 70.2% → 0.0% | 11.33s → 0ms |  9,035 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.337s | 70.2% → 0.0% | 11.33s → 0ms |  9,034 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.336s | 70.2% → 0.0% | 11.33s → 0ms |  9,033 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.335s | 70.2% → 0.0% | 11.33s → 0ms |  9,032 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.333s | 70.1% → 0.0% | 11.33s → 0ms |  9,031 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.208s | 69.4% → 0.0% | 11.20s → 0ms |  8,931 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -11.207s | 69.4% → 0.0% | 11.20s → 0ms |  8,930 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| removed |  -8.625s | 53.4% → 0.0% |  8.62s → 0ms |  6,873 → 0 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| removed |  -8.616s | 53.3% → 0.0% |  8.61s → 0ms |  6,866 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  -1.7% | -33.15ms | 12.0% → 10.1% | 1.93s → 1.89s | 1,539 → 1,515 | `(garbage collector)` | `<unknown>` |
