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

|  Change |    Delta |             % |            Time |       Samples | Function                           | Location                                                        |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------- | --------------------------------------------------------------- |
|  +51.9% | +28.71ms |   0.3% → 0.5% | 55.3ms → 84.0ms |       44 → 67 | `resolveNameHelper`                | `node_modules/typescript/lib/typescript.js`                     |
|  +36.5% | +26.16ms |   0.4% → 0.6% | 71.6ms → 97.8ms |       57 → 78 | `getTypeFactsWorker`               | `node_modules/typescript/lib/typescript.js`                     |
|   +1.2% | +23.92ms | 12.2% → 12.7% |   2.06s → 2.08s | 1,639 → 1,662 | `(garbage collector)`              | `<unknown>`                                                     |
|  +47.1% | +23.71ms |   0.3% → 0.5% | 50.3ms → 74.0ms |       40 → 59 | `open`                             | `<unknown>`                                                     |
|  +39.7% | +22.44ms |   0.3% → 0.5% | 56.6ms → 79.0ms |       45 → 63 | `getFlowTypeOfReference`           | `node_modules/typescript/lib/typescript.js`                     |
|  +46.9% | +21.21ms |   0.3% → 0.4% | 45.3ms → 66.5ms |       36 → 53 | `getReducedType`                   | `node_modules/typescript/lib/typescript.js`                     |
|  +43.2% | +21.20ms |   0.3% → 0.4% | 49.0ms → 70.2ms |       39 → 56 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +144.9% | +20.03ms |   0.1% → 0.2% | 13.8ms → 33.9ms |       11 → 27 | `forEach`                          | `node_modules/typescript/lib/typescript.js`                     |
|  +33.7% | +19.92ms |   0.4% → 0.5% | 59.1ms → 79.0ms |       47 → 63 | `getTypeOfSymbol`                  | `node_modules/typescript/lib/typescript.js`                     |
| +135.8% | +18.78ms |   0.1% → 0.2% | 13.8ms → 32.6ms |       11 → 26 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js`                     |
|  +36.3% | +18.69ms |   0.3% → 0.4% | 51.5ms → 70.2ms |       41 → 56 | `resetMaybeStack`                  | `node_modules/typescript/lib/typescript.js`                     |
|  +53.5% | +17.48ms |   0.2% → 0.3% | 32.7ms → 50.2ms |       26 → 40 | `getReturnTypeOfSignature`         | `node_modules/typescript/lib/typescript.js`                     |
|  +31.5% | +17.42ms |   0.3% → 0.4% | 55.3ms → 72.7ms |       44 → 58 | `checkExpressionWorker`            | `node_modules/typescript/lib/typescript.js`                     |
|  +86.2% | +16.26ms |   0.1% → 0.2% | 18.9ms → 35.1ms |       15 → 28 | `addWorkItem`                      | `node_modules/typescript/lib/typescript.js`                     |
|  +41.6% | +16.21ms |   0.2% → 0.3% | 39.0ms → 55.2ms |       31 → 44 | `speculationHelper`                | `node_modules/typescript/lib/typescript.js`                     |
|  +21.7% | +16.13ms |   0.4% → 0.5% | 74.2ms → 90.3ms |       59 → 72 | `getPropertyOfType`                | `node_modules/typescript/lib/typescript.js`                     |
|  +85.3% | +15.01ms |   0.1% → 0.2% | 17.6ms → 32.6ms |       14 → 26 | `checkExpression`                  | `node_modules/typescript/lib/typescript.js`                     |
|  +70.2% | +15.00ms |   0.1% → 0.2% | 21.4ms → 36.4ms |       17 → 29 | `getTypeOfInstantiatedSymbol`      | `node_modules/typescript/lib/typescript.js`                     |
|  +59.6% | +14.99ms |   0.1% → 0.2% | 25.1ms → 40.1ms |       20 → 32 | `getImmediateBaseConstraint`       | `node_modules/typescript/lib/typescript.js`                     |
|  +24.7% | +14.90ms |   0.4% → 0.5% | 60.3ms → 75.2ms |       48 → 60 | `canHaveJSDoc`                     | `node_modules/typescript/lib/typescript.js`                     |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                           | Location                                                        |
| ------: | -------: | ----------: | --------------: | ------: | ---------------------------------- | --------------------------------------------------------------- |
|  +51.9% | +28.71ms | 0.3% → 0.5% | 55.3ms → 84.0ms | 44 → 67 | `resolveNameHelper`                | `node_modules/typescript/lib/typescript.js`                     |
|  +36.5% | +26.16ms | 0.4% → 0.6% | 71.6ms → 97.8ms | 57 → 78 | `getTypeFactsWorker`               | `node_modules/typescript/lib/typescript.js`                     |
|  +39.7% | +22.44ms | 0.3% → 0.5% | 56.6ms → 79.0ms | 45 → 63 | `getFlowTypeOfReference`           | `node_modules/typescript/lib/typescript.js`                     |
|  +46.9% | +21.21ms | 0.3% → 0.4% | 45.3ms → 66.5ms | 36 → 53 | `getReducedType`                   | `node_modules/typescript/lib/typescript.js`                     |
|  +43.2% | +21.20ms | 0.3% → 0.4% | 49.0ms → 70.2ms | 39 → 56 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +144.9% | +20.03ms | 0.1% → 0.2% | 13.8ms → 33.9ms | 11 → 27 | `forEach`                          | `node_modules/typescript/lib/typescript.js`                     |
|  +33.7% | +19.92ms | 0.4% → 0.5% | 59.1ms → 79.0ms | 47 → 63 | `getTypeOfSymbol`                  | `node_modules/typescript/lib/typescript.js`                     |
| +135.8% | +18.78ms | 0.1% → 0.2% | 13.8ms → 32.6ms | 11 → 26 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js`                     |
|  +36.3% | +18.69ms | 0.3% → 0.4% | 51.5ms → 70.2ms | 41 → 56 | `resetMaybeStack`                  | `node_modules/typescript/lib/typescript.js`                     |
|  +53.5% | +17.48ms | 0.2% → 0.3% | 32.7ms → 50.2ms | 26 → 40 | `getReturnTypeOfSignature`         | `node_modules/typescript/lib/typescript.js`                     |
|  +31.5% | +17.42ms | 0.3% → 0.4% | 55.3ms → 72.7ms | 44 → 58 | `checkExpressionWorker`            | `node_modules/typescript/lib/typescript.js`                     |
|  +86.2% | +16.26ms | 0.1% → 0.2% | 18.9ms → 35.1ms | 15 → 28 | `addWorkItem`                      | `node_modules/typescript/lib/typescript.js`                     |
|  +41.6% | +16.21ms | 0.2% → 0.3% | 39.0ms → 55.2ms | 31 → 44 | `speculationHelper`                | `node_modules/typescript/lib/typescript.js`                     |
|  +21.7% | +16.13ms | 0.4% → 0.5% | 74.2ms → 90.3ms | 59 → 72 | `getPropertyOfType`                | `node_modules/typescript/lib/typescript.js`                     |
|  +85.3% | +15.01ms | 0.1% → 0.2% | 17.6ms → 32.6ms | 14 → 26 | `checkExpression`                  | `node_modules/typescript/lib/typescript.js`                     |
|  +70.2% | +15.00ms | 0.1% → 0.2% | 21.4ms → 36.4ms | 17 → 29 | `getTypeOfInstantiatedSymbol`      | `node_modules/typescript/lib/typescript.js`                     |
|  +59.6% | +14.99ms | 0.1% → 0.2% | 25.1ms → 40.1ms | 20 → 32 | `getImmediateBaseConstraint`       | `node_modules/typescript/lib/typescript.js`                     |
|  +24.7% | +14.90ms | 0.4% → 0.5% | 60.3ms → 75.2ms | 48 → 60 | `canHaveJSDoc`                     | `node_modules/typescript/lib/typescript.js`                     |
| +121.7% | +13.77ms | 0.1% → 0.2% | 11.3ms → 25.1ms |  9 → 20 | `getStringLiteralType`             | `node_modules/typescript/lib/typescript.js`                     |
|  +47.5% | +13.72ms | 0.2% → 0.3% | 28.9ms → 42.6ms | 23 → 34 | `iterateCommentRanges`             | `node_modules/typescript/lib/typescript.js`                     |

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

| Change |    Delta |           % |              Time |   Samples | Function                               | Location                                    |
| -----: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------- |
| -35.9% | -55.54ms | 0.9% → 0.6% |  154.6ms → 99.1ms |  123 → 79 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
| -14.9% | -52.25ms | 2.1% → 1.8% | 350.7ms → 298.5ms | 279 → 238 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| -28.6% | -49.32ms | 1.0% → 0.7% | 172.2ms → 122.9ms |  137 → 98 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| -25.6% | -41.77ms | 1.0% → 0.7% | 163.4ms → 121.6ms |  130 → 97 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| -36.9% | -40.39ms | 0.6% → 0.4% |  109.4ms → 69.0ms |   87 → 55 | `getIntersectionType`                  | `node_modules/typescript/lib/typescript.js` |
| -35.9% | -37.87ms | 0.6% → 0.4% |  105.6ms → 67.7ms |   84 → 54 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js` |
| -48.5% | -36.55ms | 0.4% → 0.2% |   75.4ms → 38.9ms |   60 → 31 | `instantiateTypeWithAlias`             | `node_modules/typescript/lib/typescript.js` |
| -10.1% | -32.11ms | 1.9% → 1.7% | 318.0ms → 285.9ms | 253 → 228 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| -45.0% | -27.73ms | 0.4% → 0.2% |   61.6ms → 33.9ms |   49 → 27 | `inferFromSignatures`                  | `node_modules/typescript/lib/typescript.js` |
| -52.6% | -26.45ms | 0.3% → 0.1% |   50.3ms → 23.8ms |   40 → 19 | `getUnionType`                         | `node_modules/typescript/lib/typescript.js` |
| -23.4% | -25.34ms | 0.6% → 0.5% |  108.1ms → 82.8ms |   86 → 66 | `compareSignaturesRelated`             | `node_modules/typescript/lib/typescript.js` |
| -35.9% | -25.25ms | 0.4% → 0.3% |   70.4ms → 45.1ms |   56 → 36 | `getSignaturesOfType`                  | `node_modules/typescript/lib/typescript.js` |
| -23.9% | -24.07ms | 0.6% → 0.5% |  100.6ms → 76.5ms |   80 → 61 | `getSymbolLinks`                       | `node_modules/typescript/lib/typescript.js` |
| -26.9% | -24.04ms | 0.5% → 0.4% |   89.2ms → 65.2ms |   71 → 52 | `structuredTypeRelatedTo`              | `node_modules/typescript/lib/typescript.js` |
| -16.7% | -22.90ms | 0.8% → 0.7% | 137.0ms → 114.1ms |  109 → 91 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
| -16.7% | -21.63ms | 0.8% → 0.7% | 129.5ms → 107.8ms |  103 → 86 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| -36.3% | -21.46ms | 0.4% → 0.2% |   59.1ms → 37.6ms |   47 → 30 | `propertiesRelatedTo`                  | `node_modules/typescript/lib/typescript.js` |
|  -6.1% | -20.89ms |        2.0% | 344.4ms → 323.5ms | 274 → 258 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| -16.5% | -20.36ms | 0.7% → 0.6% | 123.2ms → 102.8ms |   98 → 82 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
| -61.6% | -20.14ms | 0.2% → 0.1% |   32.7ms → 12.5ms |   26 → 10 | `inferTypes`                           | `node_modules/typescript/lib/typescript.js` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `resolveNameHelper` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +84.02ms | 0.0% → 100.0% | 0ms → 84.0ms |  0 → 67 | `node_modules/typescript/lib/typescript.js:23186` |
| removed | -55.31ms | 100.0% → 0.0% | 55.3ms → 0ms |  44 → 0 | `node_modules/typescript/lib/typescript.js:22185` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +97.81ms | 0.0% → 100.0% | 0ms → 97.8ms |  0 → 78 | `node_modules/typescript/lib/typescript.js:72224` |
| removed | -71.65ms | 100.0% → 0.0% | 71.6ms → 0ms |  57 → 0 | `node_modules/typescript/lib/typescript.js:70941` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +79.00ms | 0.0% → 100.0% | 0ms → 79.0ms |  0 → 63 | `node_modules/typescript/lib/typescript.js:72917` |
| removed | -56.56ms | 100.0% → 0.0% | 56.6ms → 0ms |  45 → 0 | `node_modules/typescript/lib/typescript.js:71634` |

##### `getReducedType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +66.46ms | 0.0% → 100.0% | 0ms → 66.5ms |  0 → 53 | `node_modules/typescript/lib/typescript.js:61933` |
| removed | -45.25ms | 100.0% → 0.0% | 45.3ms → 0ms |  36 → 0 | `node_modules/typescript/lib/typescript.js:60678` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:53728:21`)

| Change |    Delta |      % |            Time | Samples | Location                                                  |
| -----: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| +43.2% | +21.20ms | 100.0% | 49.0ms → 70.2ms | 39 → 56 | `node_modules/typescript/lib/typescript.js:52487 → 53728` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                         |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------ |
|     new | +33.86ms | 0.0% → 100.0% | 0ms → 33.9ms |  0 → 27 | `node_modules/typescript/lib/typescript.js:2378` |
| removed | -13.83ms | 100.0% → 0.0% | 13.8ms → 0ms |  11 → 0 | `node_modules/typescript/lib/typescript.js:2365` |

##### `getTypeOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +79.00ms | 0.0% → 100.0% | 0ms → 79.0ms |  0 → 63 | `node_modules/typescript/lib/typescript.js:59663` |
| removed | -59.08ms | 100.0% → 0.0% | 59.1ms → 0ms |  47 → 0 | `node_modules/typescript/lib/typescript.js:58408` |

##### `declareSymbolAndAddToSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +32.60ms | 0.0% → 100.0% | 0ms → 32.6ms |  0 → 26 | `node_modules/typescript/lib/typescript.js:47392` |
| removed | -13.83ms | 100.0% → 0.0% | 13.8ms → 0ms |  11 → 0 | `node_modules/typescript/lib/typescript.js:46199` |

##### `resetMaybeStack` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +70.22ms | 0.0% → 100.0% | 0ms → 70.2ms |  0 → 56 | `node_modules/typescript/lib/typescript.js:68456` |
| removed | -51.54ms | 100.0% → 0.0% | 51.5ms → 0ms |  41 → 0 | `node_modules/typescript/lib/typescript.js:67196` |

##### `getReturnTypeOfSignature` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +50.16ms | 0.0% → 100.0% | 0ms → 50.2ms |  0 → 40 | `node_modules/typescript/lib/typescript.js:62462` |
| removed | -32.68ms | 100.0% → 0.0% | 32.7ms → 0ms |  26 → 0 | `node_modules/typescript/lib/typescript.js:61207` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +72.73ms | 0.0% → 100.0% | 0ms → 72.7ms |  0 → 58 | `node_modules/typescript/lib/typescript.js:82811` |
| removed | -55.31ms | 100.0% → 0.0% | 55.3ms → 0ms |  44 → 0 | `node_modules/typescript/lib/typescript.js:81516` |

##### `addWorkItem` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +35.11ms | 0.0% → 100.0% | 0ms → 35.1ms |  0 → 28 | `node_modules/typescript/lib/typescript.js:32338` |
| removed | -18.86ms | 100.0% → 0.0% | 18.9ms → 0ms |  15 → 0 | `node_modules/typescript/lib/typescript.js:31286` |

##### `speculationHelper` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
|     new | +42.64ms | 0.0% → 77.3% | 0ms → 42.6ms |  0 → 34 | `node_modules/typescript/lib/typescript.js:33051` |
| removed | -32.68ms | 83.9% → 0.0% | 32.7ms → 0ms |  26 → 0 | `node_modules/typescript/lib/typescript.js:31996` |
|     new | +12.54ms | 0.0% → 22.7% | 0ms → 12.5ms |  0 → 10 | `node_modules/typescript/lib/typescript.js:14542` |
| removed |  -6.29ms | 16.1% → 0.0% |  6.3ms → 0ms |   5 → 0 | `node_modules/typescript/lib/typescript.js:13583` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +90.29ms | 0.0% → 100.0% | 0ms → 90.3ms |  0 → 72 | `node_modules/typescript/lib/typescript.js:61994` |
| removed | -74.16ms | 100.0% → 0.0% | 74.2ms → 0ms |  59 → 0 | `node_modules/typescript/lib/typescript.js:60739` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +32.60ms | 0.0% → 100.0% | 0ms → 32.6ms |  0 → 26 | `node_modules/typescript/lib/typescript.js:82771` |
| removed | -17.60ms | 100.0% → 0.0% | 17.6ms → 0ms |  14 → 0 | `node_modules/typescript/lib/typescript.js:81476` |

##### `getTypeOfInstantiatedSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +36.37ms | 0.0% → 100.0% | 0ms → 36.4ms |  0 → 29 | `node_modules/typescript/lib/typescript.js:59606` |
| removed | -21.37ms | 100.0% → 0.0% | 21.4ms → 0ms |  17 → 0 | `node_modules/typescript/lib/typescript.js:58351` |

##### `getImmediateBaseConstraint` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +40.13ms | 0.0% → 100.0% | 0ms → 40.1ms |  0 → 32 | `node_modules/typescript/lib/typescript.js:61588` |
| removed | -25.14ms | 100.0% → 0.0% | 25.1ms → 0ms |  20 → 0 | `node_modules/typescript/lib/typescript.js:60333` |

##### `canHaveJSDoc` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +75.24ms | 0.0% → 100.0% | 0ms → 75.2ms |  0 → 60 | `node_modules/typescript/lib/typescript.js:18835` |
| removed | -60.34ms | 100.0% → 0.0% | 60.3ms → 0ms |  48 → 0 | `node_modules/typescript/lib/typescript.js:17852` |

##### `getStringLiteralType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +25.08ms | 0.0% → 100.0% | 0ms → 25.1ms |  0 → 20 | `node_modules/typescript/lib/typescript.js:65666` |
| removed | -11.31ms | 100.0% → 0.0% | 11.3ms → 0ms |   9 → 0 | `node_modules/typescript/lib/typescript.js:64411` |

##### `iterateCommentRanges` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
|     new | +42.64ms | 0.0% → 100.0% | 0ms → 42.6ms |  0 → 34 | `node_modules/typescript/lib/typescript.js:12043` |
| removed | -28.91ms | 100.0% → 0.0% | 28.9ms → 0ms |  23 → 0 | `node_modules/typescript/lib/typescript.js:11916` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -154.61ms | 100.0% → 0.0% | 154.6ms → 0ms | 123 → 0 | `node_modules/typescript/lib/typescript.js:60495` |
|     new |  +99.07ms | 0.0% → 100.0% |  0ms → 99.1ms |  0 → 79 | `node_modules/typescript/lib/typescript.js:61750` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -350.70ms | 100.0% → 0.0% | 350.7ms → 0ms | 279 → 0 | `node_modules/typescript/lib/typescript.js:66493` |
|     new | +298.45ms | 0.0% → 100.0% | 0ms → 298.5ms | 0 → 238 | `node_modules/typescript/lib/typescript.js:67753` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -172.21ms | 100.0% → 0.0% | 172.2ms → 0ms | 137 → 0 | `node_modules/typescript/lib/typescript.js:66156` |
|     new | +122.89ms | 0.0% → 100.0% | 0ms → 122.9ms |  0 → 98 | `node_modules/typescript/lib/typescript.js:67416` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -163.41ms | 100.0% → 0.0% | 163.4ms → 0ms | 130 → 0 | `node_modules/typescript/lib/typescript.js:69901` |
|     new | +121.64ms | 0.0% → 100.0% | 0ms → 121.6ms |  0 → 97 | `node_modules/typescript/lib/typescript.js:71184` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -109.36ms | 100.0% → 0.0% | 109.4ms → 0ms |  87 → 0 | `node_modules/typescript/lib/typescript.js:63112` |
|     new |  +68.97ms | 0.0% → 100.0% |  0ms → 69.0ms |  0 → 55 | `node_modules/typescript/lib/typescript.js:64367` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -105.59ms | 100.0% → 0.0% | 105.6ms → 0ms |  84 → 0 | `node_modules/typescript/lib/typescript.js:44997` |
|     new |  +67.72ms | 0.0% → 100.0% |  0ms → 67.7ms |  0 → 54 | `node_modules/typescript/lib/typescript.js:46190` |

##### `instantiateTypeWithAlias` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -75.42ms | 100.0% → 0.0% | 75.4ms → 0ms |  60 → 0 | `node_modules/typescript/lib/typescript.js:65006` |
|     new | +38.87ms | 0.0% → 100.0% | 0ms → 38.9ms |  0 → 31 | `node_modules/typescript/lib/typescript.js:66266` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -318.02ms | 100.0% → 0.0% | 318.0ms → 0ms | 253 → 0 | `node_modules/typescript/lib/typescript.js:65023` |
|     new | +285.91ms | 0.0% → 100.0% | 0ms → 285.9ms | 0 → 228 | `node_modules/typescript/lib/typescript.js:66283` |

##### `inferFromSignatures` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -61.59ms | 100.0% → 0.0% | 61.6ms → 0ms |  49 → 0 | `node_modules/typescript/lib/typescript.js:70444` |
|     new | +33.86ms | 0.0% → 100.0% | 0ms → 33.9ms |  0 → 27 | `node_modules/typescript/lib/typescript.js:71727` |

##### `getUnionType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -50.28ms | 100.0% → 0.0% | 50.3ms → 0ms |  40 → 0 | `node_modules/typescript/lib/typescript.js:62840` |
|     new | +23.83ms | 0.0% → 100.0% | 0ms → 23.8ms |  0 → 19 | `node_modules/typescript/lib/typescript.js:64095` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -108.10ms | 100.0% → 0.0% | 108.1ms → 0ms |  86 → 0 | `node_modules/typescript/lib/typescript.js:65804` |
|     new |  +82.76ms | 0.0% → 100.0% |  0ms → 82.8ms |  0 → 66 | `node_modules/typescript/lib/typescript.js:67064` |

##### `getSignaturesOfType` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -70.39ms | 100.0% → 0.0% | 70.4ms → 0ms |  56 → 0 | `node_modules/typescript/lib/typescript.js:60789` |
|     new | +45.14ms | 0.0% → 100.0% | 0ms → 45.1ms |  0 → 36 | `node_modules/typescript/lib/typescript.js:62044` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -100.56ms | 100.0% → 0.0% | 100.6ms → 0ms |  80 → 0 | `node_modules/typescript/lib/typescript.js:50252` |
|     new |  +76.49ms | 0.0% → 100.0% |  0ms → 76.5ms |  0 → 61 | `node_modules/typescript/lib/typescript.js:51493` |

##### `structuredTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -89.25ms | 100.0% → 0.0% | 89.2ms → 0ms |  71 → 0 | `node_modules/typescript/lib/typescript.js:67207` |
|     new | +65.21ms | 0.0% → 100.0% | 0ms → 65.2ms |  0 → 52 | `node_modules/typescript/lib/typescript.js:68467` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -137.01ms | 100.0% → 0.0% | 137.0ms → 0ms | 109 → 0 | `node_modules/typescript/lib/typescript.js:70091` |
|     new | +114.11ms | 0.0% → 100.0% | 0ms → 114.1ms |  0 → 91 | `node_modules/typescript/lib/typescript.js:71374` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -129.47ms | 100.0% → 0.0% | 129.5ms → 0ms | 103 → 0 | `node_modules/typescript/lib/typescript.js:59020` |
|     new | +107.84ms | 0.0% → 100.0% | 0ms → 107.8ms |  0 → 86 | `node_modules/typescript/lib/typescript.js:60275` |

##### `propertiesRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -59.08ms | 100.0% → 0.0% | 59.1ms → 0ms |  47 → 0 | `node_modules/typescript/lib/typescript.js:68073` |
|     new | +37.62ms | 0.0% → 100.0% | 0ms → 37.6ms |  0 → 30 | `node_modules/typescript/lib/typescript.js:69333` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                          |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -344.42ms | 100.0% → 0.0% | 344.4ms → 0ms | 274 → 0 | `node_modules/typescript/lib/typescript.js:64785` |
|     new | +323.53ms | 0.0% → 100.0% | 0ms → 323.5ms | 0 → 258 | `node_modules/typescript/lib/typescript.js:66040` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |          Time | Samples | Location                                         |
| ------: | --------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -123.19ms | 100.0% → 0.0% | 123.2ms → 0ms |  98 → 0 | `node_modules/typescript/lib/typescript.js:2781` |
|     new | +102.83ms | 0.0% → 100.0% | 0ms → 102.8ms |  0 → 82 | `node_modules/typescript/lib/typescript.js:2794` |

##### `inferTypes` (`node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                          |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------- |
| removed | -32.68ms | 100.0% → 0.0% | 32.7ms → 0ms |  26 → 0 | `node_modules/typescript/lib/typescript.js:69892` |
|     new | +12.54ms | 0.0% → 100.0% | 0ms → 12.5ms |  0 → 10 | `node_modules/typescript/lib/typescript.js:71175` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

##### Third-party

| Change |     Delta |             % |              Time |       Samples | Function                                 | Location                                             |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ---------------------------------------------------- |
|    new | +199.39ms |   0.0% → 1.2% |     0ms → 199.4ms |       0 → 159 | `(anonymous)`                            | `node_modules/typescript/lib/typescript.js:32748:71` |
|    new |  +99.07ms |   0.0% → 0.6% |      0ms → 99.1ms |        0 → 79 | `expressionOrTypeToTypeNodeHelper`       | `node_modules/typescript/lib/typescript.js`          |
|  +4.1% |  +72.27ms | 10.5% → 11.2% |     1.76s → 1.84s | 1,407 → 1,468 | `forEachChild`                           | `node_modules/typescript/lib/typescript.js`          |
| +13.4% |  +70.23ms |   3.1% → 3.6% | 522.9ms → 593.1ms |     416 → 473 | `getTypeFromTypeNodeWorker`              | `node_modules/typescript/lib/typescript.js`          |
|  +4.7% |  +63.26ms |   8.0% → 8.6% |     1.34s → 1.40s | 1,068 → 1,121 | `visitNode2`                             | `node_modules/typescript/lib/typescript.js`          |
| +75.9% |  +56.25ms |   0.4% → 0.8% |  74.2ms → 130.4ms |      59 → 104 | `forEachChildInTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  +9.5% |  +52.60ms |   3.3% → 3.7% | 554.3ms → 606.9ms |     441 → 484 | `getTypeFromTypeNode`                    | `node_modules/typescript/lib/typescript.js`          |
| +15.9% |  +46.95ms |   1.8% → 2.1% | 295.4ms → 342.3ms |     235 → 273 | `checkSignatureDeclaration`              | `node_modules/typescript/lib/typescript.js`          |
|  +6.0% |  +45.82ms |   4.6% → 5.0% | 768.0ms → 813.8ms |     611 → 649 | `checkModuleDeclaration`                 | `node_modules/typescript/lib/typescript.js`          |
| +61.7% |  +44.97ms |   0.4% → 0.7% |  72.9ms → 117.9ms |       58 → 94 | `toPath3`                                | `node_modules/typescript/lib/typescript.js`          |
|  +1.8% |  +43.30ms | 14.0% → 14.6% |     2.35s → 2.39s | 1,870 → 1,909 | `addLazyDiagnostic`                      | `node_modules/typescript/lib/typescript.js`          |
| +14.8% |  +41.96ms |   1.7% → 2.0% | 282.8ms → 324.8ms |     225 → 259 | `checkAndAggregateReturnExpressionTypes` | `node_modules/typescript/lib/typescript.js`          |
|  +2.1% |  +40.62ms | 11.3% → 11.8% |     1.89s → 1.93s | 1,508 → 1,544 | `checkClassDeclaration`                  | `node_modules/typescript/lib/typescript.js`          |
| +26.6% |  +39.77ms |   0.9% → 1.2% | 149.6ms → 189.4ms |     119 → 151 | `resolveEntityName`                      | `node_modules/typescript/lib/typescript.js`          |
| +42.1% |  +38.66ms |   0.5% → 0.8% |  91.8ms → 130.4ms |      73 → 104 | `toPath`                                 | `node_modules/typescript/lib/typescript.js`          |
|  +4.9% |  +38.26ms |   4.7% → 5.0% | 784.4ms → 822.6ms |     624 → 656 | `getTypeOfInstantiatedSymbol`            | `node_modules/typescript/lib/typescript.js`          |
| +14.1% |  +38.23ms |   1.6% → 1.9% | 271.5ms → 309.7ms |     216 → 247 | `forEachReturnStatement`                 | `node_modules/typescript/lib/typescript.js`          |
|  +8.8% |  +37.84ms |   2.6% → 2.9% | 432.4ms → 470.3ms |     344 → 375 | `fillMissingTypeArguments`               | `node_modules/typescript/lib/typescript.js`          |
|  +4.8% |  +37.02ms |   4.6% → 5.0% | 778.1ms → 815.1ms |     619 → 650 | `forEachChildInConditionalType`          | `node_modules/typescript/lib/typescript.js`          |
|  +4.7% |  +35.80ms |   4.5% → 4.9% | 763.0ms → 798.8ms |     607 → 637 | `checkConditionalType`                   | `node_modules/typescript/lib/typescript.js`          |

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

| Change |     Delta |             % |            Time |         Samples | Function                                               | Location                                                          |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
|  -3.0% | -442.45ms | 86.8% → 86.3% | 14.62s → 14.18s | 11,634 → 11,309 | `typeCheckProject`                                     | `tsc-workload.mjs`                                                |
|  -3.0% | -442.45ms | 86.8% → 86.3% | 14.62s → 14.18s | 11,633 → 11,308 | `(anonymous)`                                          | `datadog-pprof.mjs`                                               |
|  -3.0% | -441.18ms | 86.8% → 86.2% | 14.61s → 14.17s | 11,628 → 11,304 | `run`                                                  | `node:internal/modules/esm/module_job`                            |
|  -5.9% | -402.51ms | 40.5% → 39.0% |   6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js`                       |
|  -2.9% | -398.07ms | 82.4% → 82.1% | 13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -388.75ms | 40.6% → 39.2% |   6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -387.51ms | 40.6% → 39.3% |   6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js`                       |
|  -4.4% | -360.76ms | 48.9% → 47.9% |   8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -358.49ms | 46.4% → 45.4% |   7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -355.97ms | 46.4% → 45.4% |   7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `node_modules/typescript/lib/typescript.js`                       |
|  -2.8% | -344.64ms | 74.3% → 74.1% | 12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `node_modules/typescript/lib/typescript.js`                       |
|  -3.8% | -343.74ms | 53.4% → 52.6% |   8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.38ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,710 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `node_modules/typescript/lib/typescript.js`                       |
|  -4.9% | -342.63ms | 41.3% → 40.2% |   6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,959 → 9,710 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,709 | `getSemanticDiagnosticsForFile`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.11ms | 74.3% → 74.0% | 12.51s → 12.17s |   9,956 → 9,707 | `getSemanticDiagnostics`                               | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,712 | `flatMap`                                              | `node_modules/typescript/lib/typescript.js`                       |

##### Third-party

| Change |     Delta |             % |            Time |         Samples | Function                                               | Location                                                          |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------------------ | ----------------------------------------------------------------- |
|  -5.9% | -402.51ms | 40.5% → 39.0% |   6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/typescript/lib/typescript.js`                       |
|  -2.9% | -398.07ms | 82.4% → 82.1% | 13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -388.75ms | 40.6% → 39.2% |   6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -387.51ms | 40.6% → 39.3% |   6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `node_modules/typescript/lib/typescript.js`                       |
|  -4.4% | -360.76ms | 48.9% → 47.9% |   8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -358.49ms | 46.4% → 45.4% |   7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -355.97ms | 46.4% → 45.4% |   7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `node_modules/typescript/lib/typescript.js`                       |
|  -2.8% | -344.64ms | 74.3% → 74.1% | 12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `node_modules/typescript/lib/typescript.js`                       |
|  -3.8% | -343.74ms | 53.4% → 52.6% |   8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.38ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,710 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `node_modules/typescript/lib/typescript.js`                       |
|  -4.9% | -342.63ms | 41.3% → 40.2% |   6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,959 → 9,710 | `(anonymous)`                                          | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,709 | `getSemanticDiagnosticsForFile`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.11ms | 74.3% → 74.0% | 12.51s → 12.17s |   9,956 → 9,707 | `getSemanticDiagnostics`                               | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,712 | `flatMap`                                              | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,710 | `getBindAndCheckDiagnosticsForFileNoCache`             | `node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -339.61ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,957 → 9,710 | `getAndCacheDiagnostics`                               | `node_modules/typescript/lib/typescript.js`                       |
|  -4.5% | -337.49ms | 44.1% → 43.1% |   7.42s → 7.08s |   5,908 → 5,653 | `resolveCallExpression`                                | `node_modules/typescript/lib/typescript.js`                       |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |
