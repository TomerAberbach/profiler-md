# Wall time profile diff

Took 19.08s → 22.13s (+3.057s, +16.0%) over 15,012 samples → 16,030 samples (1.3ms → 1.4ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        | +15.6% |   +2.581s | 86.9% → 86.5% |   16.57s → 19.15s | 13,038 → 13,869 |
| Garbage collector  | +22.2% | +475.91ms | 11.3% → 11.9% |     2.14s → 2.62s |   1,690 → 1,900 |
| Native             |  -8.9% |  -17.47ms |   1.0% → 0.8% | 197.0ms → 179.5ms |       155 → 130 |
| Standard library   |  +9.7% |  +13.15ms |          0.7% | 136.0ms → 149.1ms |       107 → 108 |
| Regular expression |  +3.7% |   +1.04ms |          0.1% |   28.0ms → 29.0ms |         22 → 21 |
| Ours               |    new |   +2.76ms |  0.0% → <0.1% |       0ms → 2.8ms |           0 → 2 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

| Change |     Delta |             % |              Time |       Samples | Function                               | Location                                    |
| -----: | --------: | ------------: | ----------------: | ------------: | -------------------------------------- | ------------------------------------------- |
| +22.2% | +475.91ms | 11.3% → 11.9% |     2.14s → 2.62s | 1,690 → 1,900 | `(garbage collector)`                  | `<unknown>`                                 |
| +30.0% |  +95.06ms |   1.7% → 1.9% | 316.5ms → 411.5ms |     249 → 298 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| +22.6% |  +85.15ms |   2.0% → 2.1% | 377.5ms → 462.6ms |     297 → 335 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| +12.0% |  +69.82ms |   3.1% → 3.0% | 583.4ms → 653.2ms |     459 → 473 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| +40.0% |  +68.71ms |   0.9% → 1.1% | 171.6ms → 240.3ms |     135 → 174 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
| +51.5% |  +68.06ms |   0.7% → 0.9% | 132.2ms → 200.2ms |     104 → 145 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| +51.3% |  +54.81ms |   0.6% → 0.7% | 106.8ms → 161.6ms |      84 → 117 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
| +57.2% |  +40.68ms |   0.4% → 0.5% |  71.2ms → 111.9ms |       56 → 81 | `inferFromMatchingTypes`               | `node_modules/typescript/lib/typescript.js` |
| +12.2% |  +38.11ms |          1.6% | 312.7ms → 350.8ms |     246 → 254 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
| +49.4% |  +35.16ms |   0.4% → 0.5% |  71.2ms → 106.3ms |       56 → 77 | `resolveNameHelper`                    | `node_modules/typescript/lib/typescript.js` |
| +44.9% |  +34.22ms |   0.4% → 0.5% |  76.3ms → 110.5ms |       60 → 80 | `instantiateSymbol`                    | `node_modules/typescript/lib/typescript.js` |
| +28.5% |  +33.71ms |   0.6% → 0.7% | 118.2ms → 151.9ms |      93 → 110 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
| +33.4% |  +33.55ms |   0.5% → 0.6% | 100.4ms → 134.0ms |       79 → 97 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |
| +87.3% |  +32.19ms |   0.2% → 0.3% |   36.9ms → 69.0ms |       29 → 50 | `getObjectFlags`                       | `node_modules/typescript/lib/typescript.js` |
| +42.4% |  +31.24ms |   0.4% → 0.5% |  73.7ms → 105.0ms |       58 → 76 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js` |
| +43.6% |  +31.02ms |   0.4% → 0.5% |  71.2ms → 102.2ms |       56 → 74 | `getUnmatchedProperties`               | `node_modules/typescript/lib/typescript.js` |
|  +7.6% |  +30.40ms |   2.1% → 1.9% | 399.1ms → 429.5ms |     314 → 311 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| +60.1% |  +29.04ms |          0.3% |   48.3ms → 77.3ms |       38 → 56 | `getNamedMembers`                      | `node_modules/typescript/lib/typescript.js` |
| +52.1% |  +26.50ms |          0.3% |   50.8ms → 77.3ms |       40 → 56 | `inferFromObjectTypes`                 | `node_modules/typescript/lib/typescript.js` |
| +44.1% |  +25.77ms |   0.3% → 0.4% |   58.5ms → 84.2ms |       46 → 61 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                               | Location                                    |
| ------: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------- |
|  +30.0% | +95.06ms | 1.7% → 1.9% | 316.5ms → 411.5ms | 249 → 298 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  +22.6% | +85.15ms | 2.0% → 2.1% | 377.5ms → 462.6ms | 297 → 335 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  +12.0% | +69.82ms | 3.1% → 3.0% | 583.4ms → 653.2ms | 459 → 473 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  +40.0% | +68.71ms | 0.9% → 1.1% | 171.6ms → 240.3ms | 135 → 174 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
|  +51.5% | +68.06ms | 0.7% → 0.9% | 132.2ms → 200.2ms | 104 → 145 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  +51.3% | +54.81ms | 0.6% → 0.7% | 106.8ms → 161.6ms |  84 → 117 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
|  +57.2% | +40.68ms | 0.4% → 0.5% |  71.2ms → 111.9ms |   56 → 81 | `inferFromMatchingTypes`               | `node_modules/typescript/lib/typescript.js` |
|  +12.2% | +38.11ms |        1.6% | 312.7ms → 350.8ms | 246 → 254 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
|  +49.4% | +35.16ms | 0.4% → 0.5% |  71.2ms → 106.3ms |   56 → 77 | `resolveNameHelper`                    | `node_modules/typescript/lib/typescript.js` |
|  +44.9% | +34.22ms | 0.4% → 0.5% |  76.3ms → 110.5ms |   60 → 80 | `instantiateSymbol`                    | `node_modules/typescript/lib/typescript.js` |
|  +28.5% | +33.71ms | 0.6% → 0.7% | 118.2ms → 151.9ms |  93 → 110 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
|  +33.4% | +33.55ms | 0.5% → 0.6% | 100.4ms → 134.0ms |   79 → 97 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |
|  +87.3% | +32.19ms | 0.2% → 0.3% |   36.9ms → 69.0ms |   29 → 50 | `getObjectFlags`                       | `node_modules/typescript/lib/typescript.js` |
|  +42.4% | +31.24ms | 0.4% → 0.5% |  73.7ms → 105.0ms |   58 → 76 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js` |
|  +43.6% | +31.02ms | 0.4% → 0.5% |  71.2ms → 102.2ms |   56 → 74 | `getUnmatchedProperties`               | `node_modules/typescript/lib/typescript.js` |
|   +7.6% | +30.40ms | 2.1% → 1.9% | 399.1ms → 429.5ms | 314 → 311 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  +60.1% | +29.04ms |        0.3% |   48.3ms → 77.3ms |   38 → 56 | `getNamedMembers`                      | `node_modules/typescript/lib/typescript.js` |
|  +52.1% | +26.50ms |        0.3% |   50.8ms → 77.3ms |   40 → 56 | `inferFromObjectTypes`                 | `node_modules/typescript/lib/typescript.js` |
|  +44.1% | +25.77ms | 0.3% → 0.4% |   58.5ms → 84.2ms |   46 → 61 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| +253.1% | +25.74ms | 0.1% → 0.2% |   10.2ms → 35.9ms |    8 → 26 | `getRecursionIdentity`                 | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
| +22.2% | +475.91ms | 11.3% → 11.9% | 2.14s → 2.62s | 1,690 → 1,900 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function    | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ----------- | ----------- |
|  +26.8% | +14.29ms |         0.3% | 53.4ms → 67.7ms | 42 → 49 | `open`      | `<unknown>` |
|  +24.2% | +12.91ms |         0.3% | 53.4ms → 66.3ms | 42 → 48 | `stat`      | `<unknown>` |
| +171.6% |  +4.36ms |        <0.1% |   2.5ms → 6.9ms |   2 → 5 | `close`     | `<unknown>` |
|     new |  +1.38ms | 0.0% → <0.1% |     0ms → 1.4ms |   0 → 1 | `utf8Slice` | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |            Time | Samples | Function                                 | Location                                    |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------- | ------------------------------------------- |
|  -71.5% | -38.19ms |  0.3% → 0.1% | 53.4ms → 15.2ms | 42 → 11 | `read`                                   | `<unknown>`                                 |
|  -44.0% | -18.47ms |  0.2% → 0.1% | 41.9ms → 23.5ms | 33 → 17 | `isInJSFile`                             | `node_modules/typescript/lib/typescript.js` |
|  -37.4% | -15.70ms |  0.2% → 0.1% | 41.9ms → 26.2ms | 33 → 19 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  -43.7% | -14.98ms |  0.2% → 0.1% | 34.3ms → 19.3ms | 27 → 14 | `traceUnionsOrIntersectionsTooLarge`     | `node_modules/typescript/lib/typescript.js` |
|  -50.6% | -14.15ms |         0.1% | 28.0ms → 13.8ms | 22 → 10 | `arrayFrom`                              | `node_modules/typescript/lib/typescript.js` |
|  -90.9% | -13.87ms | 0.1% → <0.1% |  15.3ms → 1.4ms |  12 → 1 | `getSimplifiedIndexedAccessType`         | `node_modules/typescript/lib/typescript.js` |
|  -21.2% | -13.72ms |  0.3% → 0.2% | 64.8ms → 51.1ms | 51 → 37 | `getUnionTypeWorker`                     | `node_modules/typescript/lib/typescript.js` |
|  -54.3% | -13.10ms | 0.1% → <0.1% | 24.1ms → 11.0ms |  19 → 8 | `resolveEntityName`                      | `node_modules/typescript/lib/typescript.js` |
|  -55.3% | -11.94ms | 0.1% → <0.1% |  21.6ms → 9.7ms |  17 → 7 | `checkPropertyNotUsedBeforeDeclaration`  | `node_modules/typescript/lib/typescript.js` |
|  -51.7% | -11.83ms | 0.1% → <0.1% | 22.9ms → 11.0ms |  18 → 8 | `getFlowTypeOfAccessExpression`          | `node_modules/typescript/lib/typescript.js` |
|  -12.8% | -11.52ms |  0.5% → 0.4% | 90.2ms → 78.7ms | 71 → 57 | `createUnionOrIntersectionProperty`      | `node_modules/typescript/lib/typescript.js` |
| removed | -11.44ms |  0.1% → 0.0% |    11.4ms → 0ms |   9 → 0 | `checkGrammarModifiers`                  | `node_modules/typescript/lib/typescript.js` |
|  -38.6% | -11.28ms |  0.2% → 0.1% | 29.2ms → 18.0ms | 23 → 13 | `getTypeWithThisArgument`                | `node_modules/typescript/lib/typescript.js` |
|  -80.2% | -11.22ms | 0.1% → <0.1% |  14.0ms → 2.8ms |  11 → 2 | `getSimplifiedType`                      | `node_modules/typescript/lib/typescript.js` |
|  -66.6% | -11.00ms | 0.1% → <0.1% |  16.5ms → 5.5ms |  13 → 4 | `length`                                 | `node_modules/typescript/lib/typescript.js` |
|  -31.6% | -10.84ms |  0.2% → 0.1% | 34.3ms → 23.5ms | 27 → 17 | `chooseOverload`                         | `node_modules/typescript/lib/typescript.js` |
|  -56.5% | -10.78ms | 0.1% → <0.1% |  19.1ms → 8.3ms |  15 → 6 | `isResolvingReturnTypeOfSignature`       | `node_modules/typescript/lib/typescript.js` |
|  -48.9% | -10.56ms | 0.1% → <0.1% | 21.6ms → 11.0ms |  17 → 8 | `getCheckFlags`                          | `node_modules/typescript/lib/typescript.js` |
|  -27.6% | -10.51ms |  0.2% → 0.1% | 38.1ms → 27.6ms | 30 → 20 | `getImmediateBaseConstraint`             | `node_modules/typescript/lib/typescript.js` |
|  -40.2% | -10.23ms |         0.1% | 25.4ms → 15.2ms | 20 → 11 | `getTypePredicateOfSignature`            | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                                 | Location                                    |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------- | ------------------------------------------- |
|  -44.0% | -18.47ms |  0.2% → 0.1% | 41.9ms → 23.5ms | 33 → 17 | `isInJSFile`                             | `node_modules/typescript/lib/typescript.js` |
|  -37.4% | -15.70ms |  0.2% → 0.1% | 41.9ms → 26.2ms | 33 → 19 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  -43.7% | -14.98ms |  0.2% → 0.1% | 34.3ms → 19.3ms | 27 → 14 | `traceUnionsOrIntersectionsTooLarge`     | `node_modules/typescript/lib/typescript.js` |
|  -50.6% | -14.15ms |         0.1% | 28.0ms → 13.8ms | 22 → 10 | `arrayFrom`                              | `node_modules/typescript/lib/typescript.js` |
|  -90.9% | -13.87ms | 0.1% → <0.1% |  15.3ms → 1.4ms |  12 → 1 | `getSimplifiedIndexedAccessType`         | `node_modules/typescript/lib/typescript.js` |
|  -21.2% | -13.72ms |  0.3% → 0.2% | 64.8ms → 51.1ms | 51 → 37 | `getUnionTypeWorker`                     | `node_modules/typescript/lib/typescript.js` |
|  -54.3% | -13.10ms | 0.1% → <0.1% | 24.1ms → 11.0ms |  19 → 8 | `resolveEntityName`                      | `node_modules/typescript/lib/typescript.js` |
|  -55.3% | -11.94ms | 0.1% → <0.1% |  21.6ms → 9.7ms |  17 → 7 | `checkPropertyNotUsedBeforeDeclaration`  | `node_modules/typescript/lib/typescript.js` |
|  -51.7% | -11.83ms | 0.1% → <0.1% | 22.9ms → 11.0ms |  18 → 8 | `getFlowTypeOfAccessExpression`          | `node_modules/typescript/lib/typescript.js` |
|  -12.8% | -11.52ms |  0.5% → 0.4% | 90.2ms → 78.7ms | 71 → 57 | `createUnionOrIntersectionProperty`      | `node_modules/typescript/lib/typescript.js` |
| removed | -11.44ms |  0.1% → 0.0% |    11.4ms → 0ms |   9 → 0 | `checkGrammarModifiers`                  | `node_modules/typescript/lib/typescript.js` |
|  -38.6% | -11.28ms |  0.2% → 0.1% | 29.2ms → 18.0ms | 23 → 13 | `getTypeWithThisArgument`                | `node_modules/typescript/lib/typescript.js` |
|  -80.2% | -11.22ms | 0.1% → <0.1% |  14.0ms → 2.8ms |  11 → 2 | `getSimplifiedType`                      | `node_modules/typescript/lib/typescript.js` |
|  -66.6% | -11.00ms | 0.1% → <0.1% |  16.5ms → 5.5ms |  13 → 4 | `length`                                 | `node_modules/typescript/lib/typescript.js` |
|  -31.6% | -10.84ms |  0.2% → 0.1% | 34.3ms → 23.5ms | 27 → 17 | `chooseOverload`                         | `node_modules/typescript/lib/typescript.js` |
|  -56.5% | -10.78ms | 0.1% → <0.1% |  19.1ms → 8.3ms |  15 → 6 | `isResolvingReturnTypeOfSignature`       | `node_modules/typescript/lib/typescript.js` |
|  -48.9% | -10.56ms | 0.1% → <0.1% | 21.6ms → 11.0ms |  17 → 8 | `getCheckFlags`                          | `node_modules/typescript/lib/typescript.js` |
|  -27.6% | -10.51ms |  0.2% → 0.1% | 38.1ms → 27.6ms | 30 → 20 | `getImmediateBaseConstraint`             | `node_modules/typescript/lib/typescript.js` |
|  -40.2% | -10.23ms |         0.1% | 25.4ms → 15.2ms | 20 → 11 | `getTypePredicateOfSignature`            | `node_modules/typescript/lib/typescript.js` |
|  -17.3% | -10.13ms |  0.3% → 0.2% | 58.5ms → 48.3ms | 46 → 35 | `isSimpleTypeRelatedTo`                  | `node_modules/typescript/lib/typescript.js` |

##### Native

| Change |    Delta |            % |            Time | Samples | Function       | Location    |
| -----: | -------: | -----------: | --------------: | ------: | -------------- | ----------- |
| -71.5% | -38.19ms |  0.3% → 0.1% | 53.4ms → 15.2ms | 42 → 11 | `read`         | `<unknown>` |
| -45.7% |  -9.29ms | 0.1% → <0.1% | 20.3ms → 11.0ms |  16 → 8 | `realpath`     | `<unknown>` |
| -45.7% |  -1.16ms |        <0.1% |   2.5ms → 1.4ms |   2 → 1 | `readdir`      | `<unknown>` |
| -18.5% |  -0.94ms |        <0.1% |   5.1ms → 4.1ms |   4 → 3 | `readFileUtf8` | `<unknown>` |
| -13.1% |  -0.83ms |        <0.1% |   6.4ms → 5.5ms |   5 → 4 | `fstat`        | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |   Delta |             % |            Time |         Samples | Function                                   | Location                                              |
| -----: | ------: | ------------: | --------------: | --------------: | ------------------------------------------ | ----------------------------------------------------- |
| +15.7% | +2.605s | 87.2% → 86.9% | 16.63s → 19.24s | 13,092 → 13,936 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| +15.7% | +2.605s | 87.2% → 86.9% | 16.63s → 19.23s | 13,086 → 13,930 | `run`                                      | `node:internal/modules/esm/module_job`                |
| +15.7% | +2.604s | 87.2% → 86.9% | 16.63s → 19.24s | 13,091 → 13,934 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                              |
| +15.9% | +2.521s | 83.3% → 83.2% | 15.88s → 18.40s | 12,499 → 13,329 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.303s | 76.2% → 76.1% | 14.54s → 16.85s | 11,446 → 12,202 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.302s | 76.2% → 76.1% | 14.54s → 16.84s | 11,440 → 12,196 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.300s | 76.2% → 76.1% | 14.53s → 16.83s | 11,437 → 12,192 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.299s | 76.3% → 76.1% | 14.55s → 16.85s | 11,450 → 12,203 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.299s | 76.3% → 76.1% | 14.55s → 16.84s | 11,448 → 12,201 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.296s | 76.2% → 76.1% | 14.54s → 16.84s | 11,446 → 12,197 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.295s | 76.3% → 76.1% | 14.55s → 16.85s | 11,453 → 12,203 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.294s | 76.3% → 76.1% | 14.55s → 16.85s | 11,454 → 12,203 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.293s | 76.2% → 76.1% | 14.54s → 16.84s | 11,446 → 12,195 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| +15.7% | +2.145s | 71.7% → 71.5% | 13.67s → 15.81s | 10,758 → 11,455 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| +15.7% | +2.144s | 71.7% → 71.5% | 13.67s → 15.82s | 10,760 → 11,456 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| +15.7% | +2.142s | 71.7% → 71.5% | 13.67s → 15.82s | 10,762 → 11,456 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| +15.9% | +2.141s | 70.7% → 70.6% | 13.49s → 15.63s | 10,614 → 11,319 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| +15.6% | +2.139s | 71.7% → 71.4% | 13.67s → 15.81s | 10,759 → 11,451 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.137s | 70.7% → 70.6% | 13.49s → 15.62s | 10,615 → 11,317 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| +15.6% | +2.134s | 71.7% → 71.4% | 13.67s → 15.80s | 10,759 → 11,448 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |

##### Third-party

| Change |   Delta |             % |            Time |         Samples | Function                                   | Location                                              |
| -----: | ------: | ------------: | --------------: | --------------: | ------------------------------------------ | ----------------------------------------------------- |
| +15.9% | +2.521s | 83.3% → 83.2% | 15.88s → 18.40s | 12,499 → 13,329 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.303s | 76.2% → 76.1% | 14.54s → 16.85s | 11,446 → 12,202 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.302s | 76.2% → 76.1% | 14.54s → 16.84s | 11,440 → 12,196 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.300s | 76.2% → 76.1% | 14.53s → 16.83s | 11,437 → 12,192 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.299s | 76.3% → 76.1% | 14.55s → 16.85s | 11,450 → 12,203 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.299s | 76.3% → 76.1% | 14.55s → 16.84s | 11,448 → 12,201 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.296s | 76.2% → 76.1% | 14.54s → 16.84s | 11,446 → 12,197 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.295s | 76.3% → 76.1% | 14.55s → 16.85s | 11,453 → 12,203 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.294s | 76.3% → 76.1% | 14.55s → 16.85s | 11,454 → 12,203 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.293s | 76.2% → 76.1% | 14.54s → 16.84s | 11,446 → 12,195 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121543:43` |
| +15.7% | +2.145s | 71.7% → 71.5% | 13.67s → 15.81s | 10,758 → 11,455 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| +15.7% | +2.144s | 71.7% → 71.5% | 13.67s → 15.82s | 10,760 → 11,456 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| +15.7% | +2.142s | 71.7% → 71.5% | 13.67s → 15.82s | 10,762 → 11,456 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| +15.9% | +2.141s | 70.7% → 70.6% | 13.49s → 15.63s | 10,614 → 11,319 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| +15.6% | +2.139s | 71.7% → 71.4% | 13.67s → 15.81s | 10,759 → 11,451 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| +15.8% | +2.137s | 70.7% → 70.6% | 13.49s → 15.62s | 10,615 → 11,317 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| +15.6% | +2.134s | 71.7% → 71.4% | 13.67s → 15.80s | 10,759 → 11,448 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| +15.6% | +2.129s | 71.7% → 71.4% | 13.67s → 15.80s | 10,759 → 11,444 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121619:29` |
| +16.7% | +1.709s | 53.7% → 54.0% | 10.23s → 11.94s |   8,056 → 8,652 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| +16.6% | +1.696s | 53.6% → 53.9% | 10.23s → 11.93s |   8,052 → 8,639 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
| +22.2% | +475.91ms | 11.3% → 11.9% | 2.14s → 2.62s | 1,690 → 1,900 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function    | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ----------- | ----------- |
|  +26.8% | +14.29ms |         0.3% | 53.4ms → 67.7ms | 42 → 49 | `open`      | `<unknown>` |
|  +24.2% | +12.91ms |         0.3% | 53.4ms → 66.3ms | 42 → 48 | `stat`      | `<unknown>` |
| +171.6% |  +4.36ms |        <0.1% |   2.5ms → 6.9ms |   2 → 5 | `close`     | `<unknown>` |
|     new |  +1.38ms | 0.0% → <0.1% |     0ms → 1.4ms |   0 → 1 | `utf8Slice` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

| Change |    Delta |            % |              Time |   Samples | Function                                | Location                                    |
| -----: | -------: | -----------: | ----------------: | --------: | --------------------------------------- | ------------------------------------------- |
| -70.4% | -39.35ms |  0.3% → 0.1% |   55.9ms → 16.6ms |   44 → 12 | `readSync`                              | `node:fs`                                   |
| -70.4% | -39.35ms |  0.3% → 0.1% |   55.9ms → 16.6ms |   44 → 12 | `tryReadSync`                           | `node:fs`                                   |
| -71.5% | -38.19ms |  0.3% → 0.1% |   53.4ms → 15.2ms |   42 → 11 | `read`                                  | `<unknown>`                                 |
| -45.7% | -30.19ms |  0.3% → 0.2% |   66.1ms → 35.9ms |   52 → 26 | `isDiscriminantProperty`                | `node_modules/typescript/lib/typescript.js` |
| -11.6% | -30.04ms |  1.4% → 1.0% | 259.3ms → 229.2ms | 204 → 166 | `getBaseConstraint`                     | `node_modules/typescript/lib/typescript.js` |
| -36.9% | -29.09ms |  0.4% → 0.2% |   78.8ms → 49.7ms |   62 → 36 | `parseTypeAliasDeclaration`             | `node_modules/typescript/lib/typescript.js` |
| -10.9% | -24.61ms |  1.2% → 0.9% | 226.2ms → 201.6ms | 178 → 146 | `getMembersOfSymbol`                    | `node_modules/typescript/lib/typescript.js` |
| -26.1% | -23.84ms |  0.5% → 0.3% |   91.5ms → 67.7ms |   72 → 49 | `checkPropertyDeclaration`              | `node_modules/typescript/lib/typescript.js` |
| -50.1% | -23.55ms |  0.2% → 0.1% |   47.0ms → 23.5ms |   37 → 17 | `checkPropertyNotUsedBeforeDeclaration` | `node_modules/typescript/lib/typescript.js` |
| -15.5% | -23.04ms |  0.8% → 0.6% | 148.7ms → 125.7ms |  117 → 91 | `readFileSync`                          | `node:fs`                                   |
| -43.1% | -23.00ms |  0.3% → 0.1% |   53.4ms → 30.4ms |   42 → 22 | `isConstTypeVariable`                   | `node_modules/typescript/lib/typescript.js` |
| -20.4% | -22.30ms |  0.6% → 0.4% |  109.3ms → 87.0ms |   86 → 63 | `getResolvedMembersOrExportsOfSymbol`   | `node_modules/typescript/lib/typescript.js` |
| -20.4% | -22.30ms |  0.6% → 0.4% |  109.3ms → 87.0ms |   86 → 63 | `getSimplifiedIndexedAccessType`        | `node_modules/typescript/lib/typescript.js` |
| -17.6% | -20.37ms |  0.6% → 0.4% |  115.7ms → 95.3ms |   91 → 69 | `checkAccessorDeclaration`              | `node_modules/typescript/lib/typescript.js` |
| -74.1% | -19.79ms | 0.1% → <0.1% |    26.7ms → 6.9ms |    21 → 5 | `getEffectiveModifierFlags`             | `node_modules/typescript/lib/typescript.js` |
| -66.9% | -19.57ms | 0.2% → <0.1% |    29.2ms → 9.7ms |    23 → 7 | `checkGrammarModifiers`                 | `node_modules/typescript/lib/typescript.js` |
| -10.9% | -19.23ms |  0.9% → 0.7% | 176.7ms → 157.4ms | 139 → 114 | `readFile`                              | `node_modules/typescript/lib/typescript.js` |
| -72.8% | -18.52ms | 0.1% → <0.1% |    25.4ms → 6.9ms |    20 → 5 | `findDiscriminantProperties`            | `node_modules/typescript/lib/typescript.js` |
| -72.8% | -18.52ms | 0.1% → <0.1% |    25.4ms → 6.9ms |    20 → 5 | `getModifierFlagsWorker`                | `node_modules/typescript/lib/typescript.js` |
| -44.0% | -18.47ms |  0.2% → 0.1% |   41.9ms → 23.5ms |   33 → 17 | `isInJSFile`                            | `node_modules/typescript/lib/typescript.js` |

##### Third-party

| Change |    Delta |            % |              Time |   Samples | Function                                | Location                                    |
| -----: | -------: | -----------: | ----------------: | --------: | --------------------------------------- | ------------------------------------------- |
| -45.7% | -30.19ms |  0.3% → 0.2% |   66.1ms → 35.9ms |   52 → 26 | `isDiscriminantProperty`                | `node_modules/typescript/lib/typescript.js` |
| -11.6% | -30.04ms |  1.4% → 1.0% | 259.3ms → 229.2ms | 204 → 166 | `getBaseConstraint`                     | `node_modules/typescript/lib/typescript.js` |
| -36.9% | -29.09ms |  0.4% → 0.2% |   78.8ms → 49.7ms |   62 → 36 | `parseTypeAliasDeclaration`             | `node_modules/typescript/lib/typescript.js` |
| -10.9% | -24.61ms |  1.2% → 0.9% | 226.2ms → 201.6ms | 178 → 146 | `getMembersOfSymbol`                    | `node_modules/typescript/lib/typescript.js` |
| -26.1% | -23.84ms |  0.5% → 0.3% |   91.5ms → 67.7ms |   72 → 49 | `checkPropertyDeclaration`              | `node_modules/typescript/lib/typescript.js` |
| -50.1% | -23.55ms |  0.2% → 0.1% |   47.0ms → 23.5ms |   37 → 17 | `checkPropertyNotUsedBeforeDeclaration` | `node_modules/typescript/lib/typescript.js` |
| -43.1% | -23.00ms |  0.3% → 0.1% |   53.4ms → 30.4ms |   42 → 22 | `isConstTypeVariable`                   | `node_modules/typescript/lib/typescript.js` |
| -20.4% | -22.30ms |  0.6% → 0.4% |  109.3ms → 87.0ms |   86 → 63 | `getResolvedMembersOrExportsOfSymbol`   | `node_modules/typescript/lib/typescript.js` |
| -20.4% | -22.30ms |  0.6% → 0.4% |  109.3ms → 87.0ms |   86 → 63 | `getSimplifiedIndexedAccessType`        | `node_modules/typescript/lib/typescript.js` |
| -17.6% | -20.37ms |  0.6% → 0.4% |  115.7ms → 95.3ms |   91 → 69 | `checkAccessorDeclaration`              | `node_modules/typescript/lib/typescript.js` |
| -74.1% | -19.79ms | 0.1% → <0.1% |    26.7ms → 6.9ms |    21 → 5 | `getEffectiveModifierFlags`             | `node_modules/typescript/lib/typescript.js` |
| -66.9% | -19.57ms | 0.2% → <0.1% |    29.2ms → 9.7ms |    23 → 7 | `checkGrammarModifiers`                 | `node_modules/typescript/lib/typescript.js` |
| -10.9% | -19.23ms |  0.9% → 0.7% | 176.7ms → 157.4ms | 139 → 114 | `readFile`                              | `node_modules/typescript/lib/typescript.js` |
| -72.8% | -18.52ms | 0.1% → <0.1% |    25.4ms → 6.9ms |    20 → 5 | `findDiscriminantProperties`            | `node_modules/typescript/lib/typescript.js` |
| -72.8% | -18.52ms | 0.1% → <0.1% |    25.4ms → 6.9ms |    20 → 5 | `getModifierFlagsWorker`                | `node_modules/typescript/lib/typescript.js` |
| -44.0% | -18.47ms |  0.2% → 0.1% |   41.9ms → 23.5ms |   33 → 17 | `isInJSFile`                            | `node_modules/typescript/lib/typescript.js` |
| -10.4% | -18.07ms |  0.9% → 0.7% | 174.1ms → 156.1ms | 137 → 113 | `readFileWorker`                        | `node_modules/typescript/lib/typescript.js` |
| -47.5% | -17.52ms |  0.2% → 0.1% |   36.9ms → 19.3ms |   29 → 14 | `getLineAndCharacterOfPosition`         | `node_modules/typescript/lib/typescript.js` |
| -22.1% | -16.88ms |  0.4% → 0.3% |   76.3ms → 59.4ms |   60 → 43 | `parseEntityName`                       | `node_modules/typescript/lib/typescript.js` |
| -22.1% | -16.88ms |  0.4% → 0.3% |   76.3ms → 59.4ms |   60 → 43 | `parseEntityNameOfTypeReference`        | `node_modules/typescript/lib/typescript.js` |

##### Native

| Change |    Delta |            % |            Time | Samples | Function       | Location    |
| -----: | -------: | -----------: | --------------: | ------: | -------------- | ----------- |
| -71.5% | -38.19ms |  0.3% → 0.1% | 53.4ms → 15.2ms | 42 → 11 | `read`         | `<unknown>` |
| -45.7% |  -9.29ms | 0.1% → <0.1% | 20.3ms → 11.0ms |  16 → 8 | `realpath`     | `<unknown>` |
| -45.7% |  -1.16ms |        <0.1% |   2.5ms → 1.4ms |   2 → 1 | `readdir`      | `<unknown>` |
| -18.5% |  -0.94ms |        <0.1% |   5.1ms → 4.1ms |   4 → 3 | `readFileUtf8` | `<unknown>` |
| -13.1% |  -0.83ms |        <0.1% |   6.4ms → 5.5ms |   5 → 4 | `fstat`        | `<unknown>` |
