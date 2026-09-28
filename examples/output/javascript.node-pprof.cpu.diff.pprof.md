# Wall time profile diff

Took 16.84s → 16.43s (-410.14ms, -2.4%) over 13,404 samples → 13,109 samples (1.3ms per sample).

| Category           |  Change |     Delta |             % |              Time |         Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | --------------: |
| Third-party        |   -3.5% | -499.76ms | 85.9% → 85.0% |   14.46s → 13.96s | 11,510 → 11,139 |
| Garbage collector  |   +1.2% |  +23.92ms | 12.2% → 12.7% |     2.06s → 2.08s |   1,639 → 1,662 |
| Native             |  +11.7% |  +18.43ms |   0.9% → 1.1% | 157.1ms → 175.6ms |       125 → 140 |
| Standard library   |  +11.7% |  +15.97ms |   0.8% → 0.9% | 137.0ms → 153.0ms |       109 → 122 |
| Regular expression | +118.5% |  +31.29ms |   0.2% → 0.4% |   26.4ms → 57.7ms |         21 → 46 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |            Time |       Samples | Function                           | Location                                             |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------- | ---------------------------------------------------- |
| +132.8% | +40.06ms |   0.2% → 0.4% | 30.2ms → 70.2ms |       24 → 56 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:53728:21` |
|  +51.9% | +28.71ms |   0.3% → 0.5% | 55.3ms → 84.0ms |       44 → 67 | `resolveNameHelper`                | `node_modules/typescript/lib/typescript.js`          |
|  +36.5% | +26.16ms |   0.4% → 0.6% | 71.6ms → 97.8ms |       57 → 78 | `getTypeFactsWorker`               | `node_modules/typescript/lib/typescript.js`          |
|   +1.2% | +23.92ms | 12.2% → 12.7% |   2.06s → 2.08s | 1,639 → 1,662 | `(garbage collector)`              | `<unknown>`                                          |
|  +47.1% | +23.71ms |   0.3% → 0.5% | 50.3ms → 74.0ms |       40 → 59 | `open`                             | `<unknown>`                                          |
| +897.6% | +22.57ms |  <0.1% → 0.2% |  2.5ms → 25.1ms |        2 → 20 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:53423:20` |
|  +39.7% | +22.44ms |   0.3% → 0.5% | 56.6ms → 79.0ms |       45 → 63 | `getFlowTypeOfReference`           | `node_modules/typescript/lib/typescript.js`          |
|  +46.9% | +21.21ms |   0.3% → 0.4% | 45.3ms → 66.5ms |       36 → 53 | `getReducedType`                   | `node_modules/typescript/lib/typescript.js`          |
| +144.9% | +20.03ms |   0.1% → 0.2% | 13.8ms → 33.9ms |       11 → 27 | `forEach`                          | `node_modules/typescript/lib/typescript.js`          |
|  +33.7% | +19.92ms |   0.4% → 0.5% | 59.1ms → 79.0ms |       47 → 63 | `getTypeOfSymbol`                  | `node_modules/typescript/lib/typescript.js`          |
| +135.8% | +18.78ms |   0.1% → 0.2% | 13.8ms → 32.6ms |       11 → 26 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  +36.3% | +18.69ms |   0.3% → 0.4% | 51.5ms → 70.2ms |       41 → 56 | `resetMaybeStack`                  | `node_modules/typescript/lib/typescript.js`          |
|  +53.5% | +17.48ms |   0.2% → 0.3% | 32.7ms → 50.2ms |       26 → 40 | `getReturnTypeOfSignature`         | `node_modules/typescript/lib/typescript.js`          |
|  +31.5% | +17.42ms |   0.3% → 0.4% | 55.3ms → 72.7ms |       44 → 58 | `checkExpressionWorker`            | `node_modules/typescript/lib/typescript.js`          |
|  +86.2% | +16.26ms |   0.1% → 0.2% | 18.9ms → 35.1ms |       15 → 28 | `addWorkItem`                      | `node_modules/typescript/lib/typescript.js`          |
|  +41.6% | +16.21ms |   0.2% → 0.3% | 39.0ms → 55.2ms |       31 → 44 | `speculationHelper`                | `node_modules/typescript/lib/typescript.js`          |
|  +21.7% | +16.13ms |   0.4% → 0.5% | 74.2ms → 90.3ms |       59 → 72 | `getPropertyOfType`                | `node_modules/typescript/lib/typescript.js`          |
|  +85.3% | +15.01ms |   0.1% → 0.2% | 17.6ms → 32.6ms |       14 → 26 | `checkExpression`                  | `node_modules/typescript/lib/typescript.js`          |
|  +70.2% | +15.00ms |   0.1% → 0.2% | 21.4ms → 36.4ms |       17 → 29 | `getTypeOfInstantiatedSymbol`      | `node_modules/typescript/lib/typescript.js`          |
|  +59.6% | +14.99ms |   0.1% → 0.2% | 25.1ms → 40.1ms |       20 → 32 | `getImmediateBaseConstraint`       | `node_modules/typescript/lib/typescript.js`          |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                           | Location                                             |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| +132.8% | +40.06ms |  0.2% → 0.4% | 30.2ms → 70.2ms | 24 → 56 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:53728:21` |
|  +51.9% | +28.71ms |  0.3% → 0.5% | 55.3ms → 84.0ms | 44 → 67 | `resolveNameHelper`                | `node_modules/typescript/lib/typescript.js`          |
|  +36.5% | +26.16ms |  0.4% → 0.6% | 71.6ms → 97.8ms | 57 → 78 | `getTypeFactsWorker`               | `node_modules/typescript/lib/typescript.js`          |
| +897.6% | +22.57ms | <0.1% → 0.2% |  2.5ms → 25.1ms |  2 → 20 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:53423:20` |
|  +39.7% | +22.44ms |  0.3% → 0.5% | 56.6ms → 79.0ms | 45 → 63 | `getFlowTypeOfReference`           | `node_modules/typescript/lib/typescript.js`          |
|  +46.9% | +21.21ms |  0.3% → 0.4% | 45.3ms → 66.5ms | 36 → 53 | `getReducedType`                   | `node_modules/typescript/lib/typescript.js`          |
| +144.9% | +20.03ms |  0.1% → 0.2% | 13.8ms → 33.9ms | 11 → 27 | `forEach`                          | `node_modules/typescript/lib/typescript.js`          |
|  +33.7% | +19.92ms |  0.4% → 0.5% | 59.1ms → 79.0ms | 47 → 63 | `getTypeOfSymbol`                  | `node_modules/typescript/lib/typescript.js`          |
| +135.8% | +18.78ms |  0.1% → 0.2% | 13.8ms → 32.6ms | 11 → 26 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  +36.3% | +18.69ms |  0.3% → 0.4% | 51.5ms → 70.2ms | 41 → 56 | `resetMaybeStack`                  | `node_modules/typescript/lib/typescript.js`          |
|  +53.5% | +17.48ms |  0.2% → 0.3% | 32.7ms → 50.2ms | 26 → 40 | `getReturnTypeOfSignature`         | `node_modules/typescript/lib/typescript.js`          |
|  +31.5% | +17.42ms |  0.3% → 0.4% | 55.3ms → 72.7ms | 44 → 58 | `checkExpressionWorker`            | `node_modules/typescript/lib/typescript.js`          |
|  +86.2% | +16.26ms |  0.1% → 0.2% | 18.9ms → 35.1ms | 15 → 28 | `addWorkItem`                      | `node_modules/typescript/lib/typescript.js`          |
|  +41.6% | +16.21ms |  0.2% → 0.3% | 39.0ms → 55.2ms | 31 → 44 | `speculationHelper`                | `node_modules/typescript/lib/typescript.js`          |
|  +21.7% | +16.13ms |  0.4% → 0.5% | 74.2ms → 90.3ms | 59 → 72 | `getPropertyOfType`                | `node_modules/typescript/lib/typescript.js`          |
|  +85.3% | +15.01ms |  0.1% → 0.2% | 17.6ms → 32.6ms | 14 → 26 | `checkExpression`                  | `node_modules/typescript/lib/typescript.js`          |
|  +70.2% | +15.00ms |  0.1% → 0.2% | 21.4ms → 36.4ms | 17 → 29 | `getTypeOfInstantiatedSymbol`      | `node_modules/typescript/lib/typescript.js`          |
|  +59.6% | +14.99ms |  0.1% → 0.2% | 25.1ms → 40.1ms | 20 → 32 | `getImmediateBaseConstraint`       | `node_modules/typescript/lib/typescript.js`          |
|  +24.7% | +14.90ms |  0.4% → 0.5% | 60.3ms → 75.2ms | 48 → 60 | `canHaveJSDoc`                     | `node_modules/typescript/lib/typescript.js`          |
| +121.7% | +13.77ms |  0.1% → 0.2% | 11.3ms → 25.1ms |  9 → 20 | `getStringLiteralType`             | `node_modules/typescript/lib/typescript.js`          |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +1.2% | +23.92ms | 12.2% → 12.7% | 2.06s → 2.08s | 1,639 → 1,662 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                  | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------- | ----------- |
|  +47.1% | +23.71ms |  0.3% → 0.5% | 50.3ms → 74.0ms | 40 → 59 | `open`                    | `<unknown>` |
|  +33.0% |  +3.73ms |         0.1% | 11.3ms → 15.0ms |  9 → 12 | `read`                    | `<unknown>` |
| +199.3% |  +2.50ms |        <0.1% |   1.3ms → 3.8ms |   1 → 3 | `readdir`                 | `<unknown>` |
|  +99.5% |  +2.50ms |        <0.1% |   2.5ms → 5.0ms |   2 → 4 | `fstat`                   | `<unknown>` |
|     new |  +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `createUnsafeArrayBuffer` | `<unknown>` |
|  +33.0% |  +1.24ms |        <0.1% |   3.8ms → 5.0ms |   3 → 4 | `readFileUtf8`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                               | Location                                              |
| ------: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ----------------------------------------------------- |
|  -35.9% | -55.54ms | 0.9% → 0.6% |  154.6ms → 99.1ms |  123 → 79 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js`           |
|  -14.9% | -52.25ms | 2.1% → 1.8% | 350.7ms → 298.5ms | 279 → 238 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js`           |
|  -28.6% | -49.32ms | 1.0% → 0.7% | 172.2ms → 122.9ms |  137 → 98 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js`           |
| removed | -49.02ms | 0.3% → 0.0% |      49.0ms → 0ms |    39 → 0 | `(anonymous)`                          | `node_modules/typescript/lib/typescript.js:54312:130` |
|  -25.6% | -41.77ms | 1.0% → 0.7% | 163.4ms → 121.6ms |  130 → 97 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js`           |
|  -36.9% | -40.39ms | 0.6% → 0.4% |  109.4ms → 69.0ms |   87 → 55 | `getIntersectionType`                  | `node_modules/typescript/lib/typescript.js`           |
|  -35.9% | -37.87ms | 0.6% → 0.4% |  105.6ms → 67.7ms |   84 → 54 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js`           |
|  -48.5% | -36.55ms | 0.4% → 0.2% |   75.4ms → 38.9ms |   60 → 31 | `instantiateTypeWithAlias`             | `node_modules/typescript/lib/typescript.js`           |
|  -10.1% | -32.11ms | 1.9% → 1.7% | 318.0ms → 285.9ms | 253 → 228 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js`           |
|  -45.0% | -27.73ms | 0.4% → 0.2% |   61.6ms → 33.9ms |   49 → 27 | `inferFromSignatures`                  | `node_modules/typescript/lib/typescript.js`           |
|  -52.6% | -26.45ms | 0.3% → 0.1% |   50.3ms → 23.8ms |   40 → 19 | `getUnionType`                         | `node_modules/typescript/lib/typescript.js`           |
|  -23.4% | -25.34ms | 0.6% → 0.5% |  108.1ms → 82.8ms |   86 → 66 | `compareSignaturesRelated`             | `node_modules/typescript/lib/typescript.js`           |
|  -35.9% | -25.25ms | 0.4% → 0.3% |   70.4ms → 45.1ms |   56 → 36 | `getSignaturesOfType`                  | `node_modules/typescript/lib/typescript.js`           |
|  -23.9% | -24.07ms | 0.6% → 0.5% |  100.6ms → 76.5ms |   80 → 61 | `getSymbolLinks`                       | `node_modules/typescript/lib/typescript.js`           |
|  -26.9% | -24.04ms | 0.5% → 0.4% |   89.2ms → 65.2ms |   71 → 52 | `structuredTypeRelatedTo`              | `node_modules/typescript/lib/typescript.js`           |
|  -16.7% | -22.90ms | 0.8% → 0.7% | 137.0ms → 114.1ms |  109 → 91 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js`           |
|  -16.7% | -21.63ms | 0.8% → 0.7% | 129.5ms → 107.8ms |  103 → 86 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js`           |
|  -36.3% | -21.46ms | 0.4% → 0.2% |   59.1ms → 37.6ms |   47 → 30 | `propertiesRelatedTo`                  | `node_modules/typescript/lib/typescript.js`           |
|   -6.1% | -20.89ms |        2.0% | 344.4ms → 323.5ms | 274 → 258 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js`           |
|  -16.5% | -20.36ms | 0.7% → 0.6% | 123.2ms → 102.8ms |   98 → 82 | `some`                                 | `node_modules/typescript/lib/typescript.js`           |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

##### Third-party

|     Change |     Delta |             % |              Time |       Samples | Function                           | Location                                              |
| ---------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------- |
| +484241.3% |  +12.173s | <0.1% → 74.1% |    2.5ms → 12.17s |     2 → 9,710 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:124899:76` |
| +141760.6% |   +1.781s | <0.1% → 10.8% |     1.3ms → 1.78s |     1 → 1,422 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:83533:27`  |
|   +2375.6% | +806.24ms |   0.2% → 5.1% |  33.9ms → 840.2ms |      27 → 670 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:66062:49`  |
|    +711.1% | +616.76ms |   0.5% → 4.3% |  86.7ms → 703.5ms |      69 → 561 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:46417:21`  |
|   +6584.0% | +496.57ms |  <0.1% → 3.1% |   7.5ms → 504.1ms |       6 → 402 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:37111:56`  |
|  +11040.0% | +416.32ms |  <0.1% → 2.6% |   3.8ms → 420.1ms |       3 → 335 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:81757:12`  |
|   +3765.8% | +189.34ms |  <0.1% → 1.2% |   5.0ms → 194.4ms |       4 → 155 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:38259:63`  |
|   +1306.6% | +164.24ms |   0.1% → 1.1% |  12.6ms → 176.8ms |      10 → 141 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:34471:157` |
|  +12170.6% | +152.98ms |  <0.1% → 0.9% |   1.3ms → 154.2ms |       1 → 123 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:72303:29`  |
|    +744.1% | +121.60ms |   0.1% → 0.8% |  16.3ms → 137.9ms |      13 → 110 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:45501:66`  |
|   +1995.0% | +100.31ms |  <0.1% → 0.6% |   5.0ms → 105.3ms |        4 → 84 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:77932:58`  |
|        new |  +99.07ms |   0.0% → 0.6% |      0ms → 99.1ms |        0 → 79 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`           |
|   +3840.6% |  +96.55ms |  <0.1% → 0.6% |    2.5ms → 99.1ms |        2 → 79 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:54299:149` |
|   +7282.3% |  +91.54ms |  <0.1% → 0.6% |    1.3ms → 92.8ms |        1 → 74 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:86753:27`  |
|    +764.6% |  +86.50ms |   0.1% → 0.6% |   11.3ms → 97.8ms |        9 → 78 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:46416:21`  |
|   +3192.1% |  +80.25ms |  <0.1% → 0.5% |    2.5ms → 82.8ms |        2 → 66 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:51744:23`  |
|      +4.1% |  +72.27ms | 10.5% → 11.2% |     1.76s → 1.84s | 1,407 → 1,468 | `forEachChild`                     | `node_modules/typescript/lib/typescript.js`           |
|     +13.4% |  +70.23ms |   3.1% → 3.6% | 522.9ms → 593.1ms |     416 → 473 | `getTypeFromTypeNodeWorker`        | `node_modules/typescript/lib/typescript.js`           |
|      +4.7% |  +63.26ms |   8.0% → 8.6% |     1.34s → 1.40s | 1,068 → 1,121 | `visitNode2`                       | `node_modules/typescript/lib/typescript.js`           |
|    +191.3% |  +60.12ms |   0.2% → 0.6% |   31.4ms → 91.5ms |       25 → 73 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:53728:21`  |

##### Garbage collector

| Change |    Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | -------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +1.2% | +23.92ms | 12.2% → 12.7% | 2.06s → 2.08s | 1,639 → 1,662 | `(garbage collector)` | `<unknown>` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function                  | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------- | ----------- |
|  +47.1% | +23.71ms |  0.3% → 0.5% | 50.3ms → 74.0ms | 40 → 59 | `open`                    | `<unknown>` |
|  +33.0% |  +3.73ms |         0.1% | 11.3ms → 15.0ms |  9 → 12 | `read`                    | `<unknown>` |
| +199.3% |  +2.50ms |        <0.1% |   1.3ms → 3.8ms |   1 → 3 | `readdir`                 | `<unknown>` |
|  +99.5% |  +2.50ms |        <0.1% |   2.5ms → 5.0ms |   2 → 4 | `fstat`                   | `<unknown>` |
|     new |  +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `createUnsafeArrayBuffer` | `<unknown>` |
|  +33.0% |  +1.24ms |        <0.1% |   3.8ms → 5.0ms |   3 → 4 | `readFileUtf8`            | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |         Samples | Function                                               | Location                                              |
| ------: | --------: | ------------: | ----------------: | --------------: | ------------------------------------------------------ | ----------------------------------------------------- |
| -100.0% |  -12.518s | 74.3% → <0.1% |    12.51s → 1.3ms |       9,960 → 1 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:125001:48` |
|  -99.7% |   -1.816s | 10.8% → <0.1% |     1.82s → 5.0ms |       1,449 → 4 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:81487:69`  |
|  -87.5% | -814.81ms |   5.5% → 0.7% | 931.4ms → 116.6ms |        741 → 93 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:66186:61`  |
|  -98.8% | -712.74ms |   4.3% → 0.1% |   721.5ms → 8.8ms |         574 → 7 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:51425:20`  |
|  -99.8% | -550.57ms |  3.3% → <0.1% |   551.8ms → 1.3ms |         439 → 1 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:35574:45`  |
|   -3.0% | -442.45ms | 86.8% → 86.3% |   14.62s → 14.18s | 11,634 → 11,309 | `typeCheckProject`                                     | `tsc-workload.mjs`                                    |
|   -3.0% | -442.45ms | 86.8% → 86.3% |   14.62s → 14.18s | 11,633 → 11,308 | `(anonymous)`                                          | `datadog-pprof.mjs`                                   |
|   -3.0% | -441.18ms | 86.8% → 86.2% |   14.61s → 14.17s | 11,628 → 11,304 | `run`                                                  | `node:internal/modules/esm/module_job`                |
|   -5.9% | -402.51ms | 40.5% → 39.0% |     6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js`           |
|   -2.9% | -398.07ms | 82.4% → 82.1% |   13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `node_modules/typescript/lib/typescript.js`           |
|   -5.7% | -388.75ms | 40.6% → 39.2% |     6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js`           |
|   -5.7% | -387.51ms | 40.6% → 39.3% |     6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js`           |
|   -4.4% | -360.76ms | 48.9% → 47.9% |     8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `node_modules/typescript/lib/typescript.js`           |
|   -4.6% | -358.49ms | 46.4% → 45.4% |     7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `node_modules/typescript/lib/typescript.js`           |
|   -4.6% | -355.97ms | 46.4% → 45.4% |     7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `node_modules/typescript/lib/typescript.js`           |
|   -2.8% | -344.64ms | 74.3% → 74.1% |   12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `node_modules/typescript/lib/typescript.js`           |
|   -3.8% | -343.74ms | 53.4% → 52.6% |     8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -343.37ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -343.37ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `node_modules/typescript/lib/typescript.js`           |
|   -4.9% | -342.63ms | 41.3% → 40.2% |     6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `node_modules/typescript/lib/typescript.js`           |

##### Third-party

|  Change |     Delta |             % |              Time |         Samples | Function                                               | Location                                              |
| ------: | --------: | ------------: | ----------------: | --------------: | ------------------------------------------------------ | ----------------------------------------------------- |
| -100.0% |  -12.518s | 74.3% → <0.1% |    12.51s → 1.3ms |       9,960 → 1 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:125001:48` |
|  -99.7% |   -1.816s | 10.8% → <0.1% |     1.82s → 5.0ms |       1,449 → 4 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:81487:69`  |
|  -87.5% | -814.81ms |   5.5% → 0.7% | 931.4ms → 116.6ms |        741 → 93 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:66186:61`  |
|  -98.8% | -712.74ms |   4.3% → 0.1% |   721.5ms → 8.8ms |         574 → 7 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:51425:20`  |
|  -99.8% | -550.57ms |  3.3% → <0.1% |   551.8ms → 1.3ms |         439 → 1 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:35574:45`  |
|   -5.9% | -402.51ms | 40.5% → 39.0% |     6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js`           |
|   -2.9% | -398.07ms | 82.4% → 82.1% |   13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `node_modules/typescript/lib/typescript.js`           |
|   -5.7% | -388.75ms | 40.6% → 39.2% |     6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js`           |
|   -5.7% | -387.51ms | 40.6% → 39.3% |     6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js`           |
|   -4.4% | -360.76ms | 48.9% → 47.9% |     8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `node_modules/typescript/lib/typescript.js`           |
|   -4.6% | -358.49ms | 46.4% → 45.4% |     7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `node_modules/typescript/lib/typescript.js`           |
|   -4.6% | -355.97ms | 46.4% → 45.4% |     7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `node_modules/typescript/lib/typescript.js`           |
|   -2.8% | -344.64ms | 74.3% → 74.1% |   12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `node_modules/typescript/lib/typescript.js`           |
|   -3.8% | -343.74ms | 53.4% → 52.6% |     8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -343.37ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -343.37ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `node_modules/typescript/lib/typescript.js`           |
|   -4.9% | -342.63ms | 41.3% → 40.2% |     6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -342.12ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,959 → 9,710 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:124967:37` |
|   -2.7% | -342.12ms | 74.3% → 74.1% |   12.51s → 12.17s |   9,958 → 9,709 | `getSemanticDiagnosticsForFile`                        | `node_modules/typescript/lib/typescript.js`           |
|   -2.7% | -342.11ms | 74.3% → 74.0% |   12.51s → 12.17s |   9,956 → 9,707 | `getSemanticDiagnostics`                               | `node_modules/typescript/lib/typescript.js`           |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |
