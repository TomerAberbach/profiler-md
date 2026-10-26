# Wall time profile diff

Took 16.84s → 16.43s (-410.14ms, -2.4%) over 13,404 → 13,109 samples (1.3ms per sample).

| Category           |  Change |     Delta |             % |              Time |         Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | --------------: |
| Third-party        |   -3.5% | -499.76ms | 85.9% → 85.0% |   14.46s → 13.96s | 11,510 → 11,139 |
| Garbage collector  |   +1.2% |  +23.92ms | 12.2% → 12.7% |     2.06s → 2.08s |   1,639 → 1,662 |
| Native             |  +11.7% |  +18.43ms |   0.9% → 1.1% | 157.1ms → 175.6ms |       125 → 140 |
| Standard library   |  +11.7% |  +15.97ms |   0.8% → 0.9% | 137.0ms → 153.0ms |       109 → 122 |
| Regular expression | +118.5% |  +31.29ms |   0.2% → 0.4% |   26.4ms → 57.7ms |         21 → 46 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |            Time |       Samples | Function                           | Location                                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------- |
|  +51.9% | +28.71ms |   0.3% → 0.5% | 55.3ms → 84.0ms |       44 → 67 | `resolveNameHelper`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +36.5% | +26.16ms |   0.4% → 0.6% | 71.6ms → 97.8ms |       57 → 78 | `getTypeFactsWorker`               | `./node_modules/typescript/lib/typescript.js`                     |
|   +1.2% | +23.92ms | 12.2% → 12.7% |   2.06s → 2.08s | 1,639 → 1,662 | `(garbage collector)`              | `<unknown>`                                                       |
|  +47.1% | +23.71ms |   0.3% → 0.5% | 50.3ms → 74.0ms |       40 → 59 | `open`                             | `<unknown>`                                                       |
|  +39.7% | +22.44ms |   0.3% → 0.5% | 56.6ms → 79.0ms |       45 → 63 | `getFlowTypeOfReference`           | `./node_modules/typescript/lib/typescript.js`                     |
|  +46.9% | +21.21ms |   0.3% → 0.4% | 45.3ms → 66.5ms |       36 → 53 | `getReducedType`                   | `./node_modules/typescript/lib/typescript.js`                     |
|  +43.2% | +21.20ms |   0.3% → 0.4% | 49.0ms → 70.2ms |       39 → 56 | `(anonymous)`                      | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +144.9% | +20.03ms |   0.1% → 0.2% | 13.8ms → 33.9ms |       11 → 27 | `forEach`                          | `./node_modules/typescript/lib/typescript.js`                     |
|  +33.7% | +19.92ms |   0.4% → 0.5% | 59.1ms → 79.0ms |       47 → 63 | `getTypeOfSymbol`                  | `./node_modules/typescript/lib/typescript.js`                     |
| +135.8% | +18.78ms |   0.1% → 0.2% | 13.8ms → 32.6ms |       11 → 26 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js`                     |
|  +36.3% | +18.69ms |   0.3% → 0.4% | 51.5ms → 70.2ms |       41 → 56 | `resetMaybeStack`                  | `./node_modules/typescript/lib/typescript.js`                     |
|  +53.5% | +17.48ms |   0.2% → 0.3% | 32.7ms → 50.2ms |       26 → 40 | `getReturnTypeOfSignature`         | `./node_modules/typescript/lib/typescript.js`                     |
|  +31.5% | +17.42ms |   0.3% → 0.4% | 55.3ms → 72.7ms |       44 → 58 | `checkExpressionWorker`            | `./node_modules/typescript/lib/typescript.js`                     |
|  +86.2% | +16.26ms |   0.1% → 0.2% | 18.9ms → 35.1ms |       15 → 28 | `addWorkItem`                      | `./node_modules/typescript/lib/typescript.js`                     |
|  +41.6% | +16.21ms |   0.2% → 0.3% | 39.0ms → 55.2ms |       31 → 44 | `speculationHelper`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +21.7% | +16.13ms |   0.4% → 0.5% | 74.2ms → 90.3ms |       59 → 72 | `getPropertyOfType`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +85.3% | +15.01ms |   0.1% → 0.2% | 17.6ms → 32.6ms |       14 → 26 | `checkExpression`                  | `./node_modules/typescript/lib/typescript.js`                     |
|  +70.2% | +15.00ms |   0.1% → 0.2% | 21.4ms → 36.4ms |       17 → 29 | `getTypeOfInstantiatedSymbol`      | `./node_modules/typescript/lib/typescript.js`                     |
|  +59.6% | +14.99ms |   0.1% → 0.2% | 25.1ms → 40.1ms |       20 → 32 | `getImmediateBaseConstraint`       | `./node_modules/typescript/lib/typescript.js`                     |
|  +24.7% | +14.90ms |   0.4% → 0.5% | 60.3ms → 75.2ms |       48 → 60 | `canHaveJSDoc`                     | `./node_modules/typescript/lib/typescript.js`                     |

##### Third-party

|  Change |    Delta |           % |            Time | Samples | Function                           | Location                                                          |
| ------: | -------: | ----------: | --------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|  +51.9% | +28.71ms | 0.3% → 0.5% | 55.3ms → 84.0ms | 44 → 67 | `resolveNameHelper`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +36.5% | +26.16ms | 0.4% → 0.6% | 71.6ms → 97.8ms | 57 → 78 | `getTypeFactsWorker`               | `./node_modules/typescript/lib/typescript.js`                     |
|  +39.7% | +22.44ms | 0.3% → 0.5% | 56.6ms → 79.0ms | 45 → 63 | `getFlowTypeOfReference`           | `./node_modules/typescript/lib/typescript.js`                     |
|  +46.9% | +21.21ms | 0.3% → 0.4% | 45.3ms → 66.5ms | 36 → 53 | `getReducedType`                   | `./node_modules/typescript/lib/typescript.js`                     |
|  +43.2% | +21.20ms | 0.3% → 0.4% | 49.0ms → 70.2ms | 39 → 56 | `(anonymous)`                      | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
| +144.9% | +20.03ms | 0.1% → 0.2% | 13.8ms → 33.9ms | 11 → 27 | `forEach`                          | `./node_modules/typescript/lib/typescript.js`                     |
|  +33.7% | +19.92ms | 0.4% → 0.5% | 59.1ms → 79.0ms | 47 → 63 | `getTypeOfSymbol`                  | `./node_modules/typescript/lib/typescript.js`                     |
| +135.8% | +18.78ms | 0.1% → 0.2% | 13.8ms → 32.6ms | 11 → 26 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js`                     |
|  +36.3% | +18.69ms | 0.3% → 0.4% | 51.5ms → 70.2ms | 41 → 56 | `resetMaybeStack`                  | `./node_modules/typescript/lib/typescript.js`                     |
|  +53.5% | +17.48ms | 0.2% → 0.3% | 32.7ms → 50.2ms | 26 → 40 | `getReturnTypeOfSignature`         | `./node_modules/typescript/lib/typescript.js`                     |
|  +31.5% | +17.42ms | 0.3% → 0.4% | 55.3ms → 72.7ms | 44 → 58 | `checkExpressionWorker`            | `./node_modules/typescript/lib/typescript.js`                     |
|  +86.2% | +16.26ms | 0.1% → 0.2% | 18.9ms → 35.1ms | 15 → 28 | `addWorkItem`                      | `./node_modules/typescript/lib/typescript.js`                     |
|  +41.6% | +16.21ms | 0.2% → 0.3% | 39.0ms → 55.2ms | 31 → 44 | `speculationHelper`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +21.7% | +16.13ms | 0.4% → 0.5% | 74.2ms → 90.3ms | 59 → 72 | `getPropertyOfType`                | `./node_modules/typescript/lib/typescript.js`                     |
|  +85.3% | +15.01ms | 0.1% → 0.2% | 17.6ms → 32.6ms | 14 → 26 | `checkExpression`                  | `./node_modules/typescript/lib/typescript.js`                     |
|  +70.2% | +15.00ms | 0.1% → 0.2% | 21.4ms → 36.4ms | 17 → 29 | `getTypeOfInstantiatedSymbol`      | `./node_modules/typescript/lib/typescript.js`                     |
|  +59.6% | +14.99ms | 0.1% → 0.2% | 25.1ms → 40.1ms | 20 → 32 | `getImmediateBaseConstraint`       | `./node_modules/typescript/lib/typescript.js`                     |
|  +24.7% | +14.90ms | 0.4% → 0.5% | 60.3ms → 75.2ms | 48 → 60 | `canHaveJSDoc`                     | `./node_modules/typescript/lib/typescript.js`                     |
| +121.7% | +13.77ms | 0.1% → 0.2% | 11.3ms → 25.1ms |  9 → 20 | `getStringLiteralType`             | `./node_modules/typescript/lib/typescript.js`                     |
|  +47.5% | +13.72ms | 0.2% → 0.3% | 28.9ms → 42.6ms | 23 → 34 | `iterateCommentRanges`             | `./node_modules/typescript/lib/typescript.js`                     |

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

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Third-party

| Change |    Delta |           % |              Time |   Samples | Function                               | Location                                      |
| -----: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | --------------------------------------------- |
| -35.9% | -55.54ms | 0.9% → 0.6% |  154.6ms → 99.1ms |  123 → 79 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js` |
| -14.9% | -52.25ms | 2.1% → 1.8% | 350.7ms → 298.5ms | 279 → 238 | `isRelatedTo`                          | `./node_modules/typescript/lib/typescript.js` |
| -28.6% | -49.32ms | 1.0% → 0.7% | 172.2ms → 122.9ms |  137 → 98 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js` |
| -25.6% | -41.77ms | 1.0% → 0.7% | 163.4ms → 121.6ms |  130 → 97 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js` |
| -36.9% | -40.39ms | 0.6% → 0.4% |  109.4ms → 69.0ms |   87 → 55 | `getIntersectionType`                  | `./node_modules/typescript/lib/typescript.js` |
| -35.9% | -37.87ms | 0.6% → 0.4% |  105.6ms → 67.7ms |   84 → 54 | `declareSymbol`                        | `./node_modules/typescript/lib/typescript.js` |
| -48.5% | -36.55ms | 0.4% → 0.2% |   75.4ms → 38.9ms |   60 → 31 | `instantiateTypeWithAlias`             | `./node_modules/typescript/lib/typescript.js` |
| -10.1% | -32.11ms | 1.9% → 1.7% | 318.0ms → 285.9ms | 253 → 228 | `instantiateTypeWorker`                | `./node_modules/typescript/lib/typescript.js` |
| -45.0% | -27.73ms | 0.4% → 0.2% |   61.6ms → 33.9ms |   49 → 27 | `inferFromSignatures`                  | `./node_modules/typescript/lib/typescript.js` |
| -52.6% | -26.45ms | 0.3% → 0.1% |   50.3ms → 23.8ms |   40 → 19 | `getUnionType`                         | `./node_modules/typescript/lib/typescript.js` |
| -23.4% | -25.34ms | 0.6% → 0.5% |  108.1ms → 82.8ms |   86 → 66 | `compareSignaturesRelated`             | `./node_modules/typescript/lib/typescript.js` |
| -35.9% | -25.25ms | 0.4% → 0.3% |   70.4ms → 45.1ms |   56 → 36 | `getSignaturesOfType`                  | `./node_modules/typescript/lib/typescript.js` |
| -23.9% | -24.07ms | 0.6% → 0.5% |  100.6ms → 76.5ms |   80 → 61 | `getSymbolLinks`                       | `./node_modules/typescript/lib/typescript.js` |
| -26.9% | -24.04ms | 0.5% → 0.4% |   89.2ms → 65.2ms |   71 → 52 | `structuredTypeRelatedTo`              | `./node_modules/typescript/lib/typescript.js` |
| -16.7% | -22.90ms | 0.8% → 0.7% | 137.0ms → 114.1ms |  109 → 91 | `invokeOnce`                           | `./node_modules/typescript/lib/typescript.js` |
| -16.7% | -21.63ms | 0.8% → 0.7% | 129.5ms → 107.8ms |  103 → 86 | `createInstantiatedSymbolTable`        | `./node_modules/typescript/lib/typescript.js` |
| -36.3% | -21.46ms | 0.4% → 0.2% |   59.1ms → 37.6ms |   47 → 30 | `propertiesRelatedTo`                  | `./node_modules/typescript/lib/typescript.js` |
|  -6.1% | -20.89ms |        2.0% | 344.4ms → 323.5ms | 274 → 258 | `getObjectTypeInstantiation`           | `./node_modules/typescript/lib/typescript.js` |
| -16.5% | -20.36ms | 0.7% → 0.6% | 123.2ms → 102.8ms |   98 → 82 | `some`                                 | `./node_modules/typescript/lib/typescript.js` |
| -61.6% | -20.14ms | 0.2% → 0.1% |   32.7ms → 12.5ms |   26 → 10 | `inferTypes`                           | `./node_modules/typescript/lib/typescript.js` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `resolveNameHelper` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |         Time | Samples | Location                                            |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- |
|     new | +84.02ms | 0.0% → 100.0% | 0ms → 84.0ms |  0 → 67 | `./node_modules/typescript/lib/typescript.js:23186` |
| removed | -55.31ms | 100.0% → 0.0% | 55.3ms → 0ms |  44 → 0 | `./node_modules/typescript/lib/typescript.js:22185` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +36.5% | +26.16ms | 100.0% | 71.6ms → 97.8ms | 57 → 78 | `./node_modules/typescript/lib/typescript.js:70941 → 72224` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +39.7% | +22.44ms | 100.0% | 56.6ms → 79.0ms | 45 → 63 | `./node_modules/typescript/lib/typescript.js:71634 → 72917` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +46.9% | +21.21ms | 100.0% | 45.3ms → 66.5ms | 36 → 53 | `./node_modules/typescript/lib/typescript.js:60678 → 61933` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +43.2% | +21.20ms | 100.0% | 49.0ms → 70.2ms | 39 → 56 | `./node_modules/typescript/lib/typescript.js:52487 → 53728` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |      % |            Time | Samples | Location                                                  |
| ------: | -------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| +144.9% | +20.03ms | 100.0% | 13.8ms → 33.9ms | 11 → 27 | `./node_modules/typescript/lib/typescript.js:2365 → 2378` |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +33.7% | +19.92ms | 100.0% | 59.1ms → 79.0ms | 47 → 63 | `./node_modules/typescript/lib/typescript.js:58408 → 59663` |

##### `declareSymbolAndAddToSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |      % |            Time | Samples | Location                                                    |
| ------: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +135.8% | +18.78ms | 100.0% | 13.8ms → 32.6ms | 11 → 26 | `./node_modules/typescript/lib/typescript.js:46199 → 47392` |

##### `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +36.3% | +18.69ms | 100.0% | 51.5ms → 70.2ms | 41 → 56 | `./node_modules/typescript/lib/typescript.js:67196 → 68456` |

##### `getReturnTypeOfSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +53.5% | +17.48ms | 100.0% | 32.7ms → 50.2ms | 26 → 40 | `./node_modules/typescript/lib/typescript.js:61207 → 62462` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +31.5% | +17.42ms | 100.0% | 55.3ms → 72.7ms | 44 → 58 | `./node_modules/typescript/lib/typescript.js:81516 → 82811` |

##### `addWorkItem` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +86.2% | +16.26ms | 100.0% | 18.9ms → 35.1ms | 15 → 28 | `./node_modules/typescript/lib/typescript.js:31286 → 32338` |

##### `speculationHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |            Time | Samples | Location                                                    |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| +30.5% | +9.95ms | 83.9% → 77.3% | 32.7ms → 42.6ms | 26 → 34 | `./node_modules/typescript/lib/typescript.js:31996 → 33051` |
| +99.5% | +6.25ms | 16.1% → 22.7% |  6.3ms → 12.5ms |  5 → 10 | `./node_modules/typescript/lib/typescript.js:13583 → 14542` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +21.7% | +16.13ms | 100.0% | 74.2ms → 90.3ms | 59 → 72 | `./node_modules/typescript/lib/typescript.js:60739 → 61994` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +85.3% | +15.01ms | 100.0% | 17.6ms → 32.6ms | 14 → 26 | `./node_modules/typescript/lib/typescript.js:81476 → 82771` |

##### `getTypeOfInstantiatedSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +70.2% | +15.00ms | 100.0% | 21.4ms → 36.4ms | 17 → 29 | `./node_modules/typescript/lib/typescript.js:58351 → 59606` |

##### `getImmediateBaseConstraint` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +59.6% | +14.99ms | 100.0% | 25.1ms → 40.1ms | 20 → 32 | `./node_modules/typescript/lib/typescript.js:60333 → 61588` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +24.7% | +14.90ms | 100.0% | 60.3ms → 75.2ms | 48 → 60 | `./node_modules/typescript/lib/typescript.js:17852 → 18835` |

##### `getStringLiteralType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |      % |            Time | Samples | Location                                                    |
| ------: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +121.7% | +13.77ms | 100.0% | 11.3ms → 25.1ms |  9 → 20 | `./node_modules/typescript/lib/typescript.js:64411 → 65666` |

##### `iterateCommentRanges` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| +47.5% | +13.72ms | 100.0% | 28.9ms → 42.6ms | 23 → 34 | `./node_modules/typescript/lib/typescript.js:11916 → 12043` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Time |  Samples | Location                                                    |
| -----: | -------: | -----: | ---------------: | -------: | ----------------------------------------------------------- |
| -35.9% | -55.54ms | 100.0% | 154.6ms → 99.1ms | 123 → 79 | `./node_modules/typescript/lib/typescript.js:60495 → 61750` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------------------------- |
| -14.9% | -52.25ms | 100.0% | 350.7ms → 298.5ms | 279 → 238 | `./node_modules/typescript/lib/typescript.js:66493 → 67753` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |  Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | -------: | ----------------------------------------------------------- |
| -28.6% | -49.32ms | 100.0% | 172.2ms → 122.9ms | 137 → 98 | `./node_modules/typescript/lib/typescript.js:66156 → 67416` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |  Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | -------: | ----------------------------------------------------------- |
| -25.6% | -41.77ms | 100.0% | 163.4ms → 121.6ms | 130 → 97 | `./node_modules/typescript/lib/typescript.js:69901 → 71184` |

##### `getIntersectionType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Time | Samples | Location                                                    |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------------------------------------------- |
| -36.9% | -40.39ms | 100.0% | 109.4ms → 69.0ms | 87 → 55 | `./node_modules/typescript/lib/typescript.js:63112 → 64367` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Time | Samples | Location                                                    |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------------------------------------------- |
| -35.9% | -37.87ms | 100.0% | 105.6ms → 67.7ms | 84 → 54 | `./node_modules/typescript/lib/typescript.js:44997 → 46190` |

##### `instantiateTypeWithAlias` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -48.5% | -36.55ms | 100.0% | 75.4ms → 38.9ms | 60 → 31 | `./node_modules/typescript/lib/typescript.js:65006 → 66266` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------------------------- |
| -10.1% | -32.11ms | 100.0% | 318.0ms → 285.9ms | 253 → 228 | `./node_modules/typescript/lib/typescript.js:65023 → 66283` |

##### `inferFromSignatures` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -45.0% | -27.73ms | 100.0% | 61.6ms → 33.9ms | 49 → 27 | `./node_modules/typescript/lib/typescript.js:70444 → 71727` |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -52.6% | -26.45ms | 100.0% | 50.3ms → 23.8ms | 40 → 19 | `./node_modules/typescript/lib/typescript.js:62840 → 64095` |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Time | Samples | Location                                                    |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------------------------------------------- |
| -23.4% | -25.34ms | 100.0% | 108.1ms → 82.8ms | 86 → 66 | `./node_modules/typescript/lib/typescript.js:65804 → 67064` |

##### `getSignaturesOfType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -35.9% | -25.25ms | 100.0% | 70.4ms → 45.1ms | 56 → 36 | `./node_modules/typescript/lib/typescript.js:60789 → 62044` |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Time | Samples | Location                                                    |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------------------------------------------- |
| -23.9% | -24.07ms | 100.0% | 100.6ms → 76.5ms | 80 → 61 | `./node_modules/typescript/lib/typescript.js:50252 → 51493` |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -26.9% | -24.04ms | 100.0% | 89.2ms → 65.2ms | 71 → 52 | `./node_modules/typescript/lib/typescript.js:67207 → 68467` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |  Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | -------: | ----------------------------------------------------------- |
| -16.7% | -22.90ms | 100.0% | 137.0ms → 114.1ms | 109 → 91 | `./node_modules/typescript/lib/typescript.js:70091 → 71374` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |  Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | -------: | ----------------------------------------------------------- |
| -16.7% | -21.63ms | 100.0% | 129.5ms → 107.8ms | 103 → 86 | `./node_modules/typescript/lib/typescript.js:59020 → 60275` |

##### `propertiesRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -36.3% | -21.46ms | 100.0% | 59.1ms → 37.6ms | 47 → 30 | `./node_modules/typescript/lib/typescript.js:68073 → 69333` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Location                                                    |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------------------------------------------- |
|  -6.1% | -20.89ms | 100.0% | 344.4ms → 323.5ms | 274 → 258 | `./node_modules/typescript/lib/typescript.js:64785 → 66040` |

##### `some` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time | Samples | Location                                                  |
| -----: | -------: | -----: | ----------------: | ------: | --------------------------------------------------------- |
| -16.5% | -20.36ms | 100.0% | 123.2ms → 102.8ms | 98 → 82 | `./node_modules/typescript/lib/typescript.js:2781 → 2794` |

##### `inferTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Time | Samples | Location                                                    |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------------------------- |
| -61.6% | -20.14ms | 100.0% | 32.7ms → 12.5ms | 26 → 10 | `./node_modules/typescript/lib/typescript.js:69892 → 71175` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `resolveNameHelper` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                     | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------- |
| +219.2% | +27.56ms | 22.7% → 47.8% | 12.6ms → 40.1ms | 10 → 32 | `resolveEntityName`        | `./node_modules/typescript/lib/typescript.js` |
|  +16.4% |  +6.18ms | 68.2% → 52.2% | 37.7ms → 43.9ms | 30 → 35 | `getResolvedSymbol`        | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |   4.5% → 0.0% |     2.5ms → 0ms |   2 → 0 | `checkIdentifier`          | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `resolveTypeReferenceName` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   2.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getGlobalSymbol`          | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                         | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------ | --------------------------------------------- |
|  +67.3% | +26.24ms | 54.4% → 66.7% | 39.0ms → 65.2ms | 31 → 52 | `getTypeFacts`                 | `./node_modules/typescript/lib/typescript.js` |
|   -4.8% |  -1.32ms | 38.6% → 26.9% | 27.7ms → 26.3ms | 22 → 21 | `getIntersectionTypeFacts`     | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getNonNullableType`           | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `checkNonNullTypeWithReporter` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 1.3% |     0ms → 1.3ms |   0 → 1 | `mapType`                      | `./node_modules/typescript/lib/typescript.js` |

##### `open` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | -------: | -----: | --------------: | ------: | ---------- | --------- |
| +47.1% | +23.71ms | 100.0% | 50.3ms → 74.0ms | 40 → 59 | `openSync` | `node:fs` |

##### `getFlowTypeOfReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                          | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------- | --------------------------------------------- |
|  +51.5% | +17.47ms | 60.0% → 65.1% | 33.9ms → 51.4ms | 27 → 41 | `checkIdentifier`               | `./node_modules/typescript/lib/typescript.js` |
| +199.3% |  +5.01ms |   4.4% → 9.5% |   2.5ms → 7.5ms |   2 → 6 | `tryGetThisTypeAt`              | `./node_modules/typescript/lib/typescript.js` |
|   -6.9% |  -1.30ms | 33.3% → 22.2% | 18.9ms → 17.6ms | 15 → 14 | `getFlowTypeOfAccessExpression` | `./node_modules/typescript/lib/typescript.js` |
|  +99.5% |  +1.25ms |   2.2% → 3.2% |   1.3ms → 2.5ms |   1 → 2 | `checkExpressionWorker`         | `./node_modules/typescript/lib/typescript.js` |

##### `getReducedType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Caller                                 | Location                                      |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------------- |
|  +29.7% | +7.46ms | 55.6% → 49.1% | 25.1ms → 32.6ms | 20 → 26 | `getReducedApparentType`               | `./node_modules/typescript/lib/typescript.js` |
|  +82.9% | +6.25ms | 16.7% → 20.8% |  7.5ms → 13.8ms |  6 → 11 | `getNormalizedUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js` |
|     new | +3.76ms |   0.0% → 5.7% |     0ms → 3.8ms |   0 → 3 | `sameMap`                              | `./node_modules/typescript/lib/typescript.js` |
| +299.0% | +3.76ms |   2.8% → 7.5% |   1.3ms → 5.0ms |   1 → 4 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js` |
| removed | -1.26ms |   2.8% → 0.0% |     1.3ms → 0ms |   1 → 0 | `checkTypeRelatedTo`                   | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |    Delta |      % |            Time | Samples | Caller            | Location                                      |
| -----: | -------: | -----: | --------------: | ------: | ----------------- | --------------------------------------------- |
| +43.2% | +21.20ms | 100.0% | 49.0ms → 70.2ms | 39 → 56 | `getNamedMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |           Time | Samples | Caller                            | Location                                      |
| ------: | -------: | ------------: | -------------: | ------: | --------------------------------- | --------------------------------------------- |
| +132.8% | +10.01ms | 54.5% → 51.9% | 7.5ms → 17.6ms |  6 → 14 | `bindEach`                        | `./node_modules/typescript/lib/typescript.js` |
|     new |  +3.76ms |  0.0% → 11.1% |    0ms → 3.8ms |   0 → 3 | `resolveCall`                     | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |  18.2% → 0.0% |    2.5ms → 0ms |   2 → 0 | `isFileProbablyExternalModule`    | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |   0.0% → 7.4% |    0ms → 2.5ms |   0 → 2 | `getResolvedTypeParameterDefault` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   9.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `checkBlock`                      | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeOfSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |           Time | Samples | Caller                        | Location                                      |
| ------: | ------: | ------------: | -------------: | ------: | ----------------------------- | --------------------------------------------- |
|  +99.5% | +8.76ms | 14.9% → 22.2% | 8.8ms → 17.6ms |  7 → 14 | `getTypeOfInstantiatedSymbol` | `./node_modules/typescript/lib/typescript.js` |
|  -50.1% | -3.78ms |  12.8% → 4.8% |  7.5ms → 3.8ms |   6 → 3 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js` |
| removed | -2.51ms |   4.3% → 0.0% |    2.5ms → 0ms |   2 → 0 | `inferFromObjectTypes`        | `./node_modules/typescript/lib/typescript.js` |
|     new | +2.51ms |   0.0% → 3.2% |    0ms → 2.5ms |   0 → 2 | `firstOrUndefinedIterator`    | `./node_modules/typescript/lib/typescript.js` |
|  +99.5% | +2.50ms |   4.3% → 6.3% |  2.5ms → 5.0ms |   2 → 4 | `getPropertyTypeForIndexType` | `./node_modules/typescript/lib/typescript.js` |

##### `declareSymbolAndAddToSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |           Time | Samples | Caller                           | Location                                      |
| ------: | -------: | ------------: | -------------: | ------: | -------------------------------- | --------------------------------------------- |
| +299.0% | +11.28ms | 27.3% → 46.2% | 3.8ms → 15.0ms |  3 → 12 | `bindPropertyOrMethodOrAccessor` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +5.02ms |  0.0% → 15.4% |    0ms → 5.0ms |   0 → 4 | `bindWorker`                     | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |   0.0% → 7.7% |    0ms → 2.5ms |   0 → 2 | `bindTypeParameter`              | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   9.1% → 0.0% |    1.3ms → 0ms |   1 → 0 | `bindFunctionDeclaration`        | `./node_modules/typescript/lib/typescript.js` |
|  +14.0% |  +1.23ms | 63.6% → 30.8% | 8.8ms → 10.0ms |   7 → 8 | `bindParameter`                  | `./node_modules/typescript/lib/typescript.js` |

##### `resetMaybeStack` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                   | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------ | --------------------------------------------- |
| +35.6% | +17.44ms | 95.1% → 94.6% | 49.0ms → 66.5ms | 39 → 53 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js` |
| +49.6% |  +1.25ms |   4.9% → 5.4% |   2.5ms → 3.8ms |   2 → 3 | `isRelatedTo`            | `./node_modules/typescript/lib/typescript.js` |

##### `getReturnTypeOfSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Caller                     | Location                                      |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------- |
| +174.3% | +8.77ms | 15.4% → 27.5% |  5.0ms → 13.8ms |  4 → 11 | `getReturnTypeOfSignature` | `./node_modules/typescript/lib/typescript.js` |
|  -25.2% | -5.06ms | 61.5% → 30.0% | 20.1ms → 15.0ms | 16 → 12 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js` |
| +398.8% | +5.01ms |  3.8% → 12.5% |   1.3ms → 6.3ms |   1 → 5 | `applyToReturnTypes`       | `./node_modules/typescript/lib/typescript.js` |
|     new | +2.51ms |   0.0% → 5.0% |     0ms → 2.5ms |   0 → 2 | `checkCallExpression`      | `./node_modules/typescript/lib/typescript.js` |
|     new | +2.51ms |   0.0% → 5.0% |     0ms → 2.5ms |   0 → 2 | `signatureRelatedTo`       | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                           | Location                                                          |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| +29.9% | +16.17ms | 97.7% → 96.6% | 54.1ms → 70.2ms | 43 → 56 | `checkExpression`                | `./node_modules/typescript/lib/typescript.js`                     |
|    new |  +1.25ms |   0.0% → 1.7% |     0ms → 1.3ms |   0 → 1 | `getSignatureApplicabilityError` | `./node_modules/typescript/lib/typescript.js`                     |
|  -0.2% |  -3.00µs |   2.3% → 1.7% |           1.3ms |       1 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:79605:39 → 80900:39` |

##### `addWorkItem` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller       | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ------------ | --------------------------------------------- |
| +82.9% | +12.50ms | 80.0% → 78.6% | 15.1ms → 27.6ms | 12 → 22 | `visitNode2` | `./node_modules/typescript/lib/typescript.js` |
| +99.5% |  +3.75ms | 20.0% → 21.4% |   3.8ms → 7.5ms |   3 → 6 | `visitNodes` | `./node_modules/typescript/lib/typescript.js` |

##### `speculationHelper` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller             | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------ | --------------------------------------------- |
| +106.6% | +18.77ms | 45.2% → 65.9% | 17.6ms → 36.4ms | 14 → 29 | `lookAhead`        | `./node_modules/typescript/lib/typescript.js` |
|  -21.6% |  -3.80ms | 45.2% → 25.0% | 17.6ms → 13.8ms | 14 → 11 | `tryParse`         | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 2.3% |     0ms → 1.3ms |   0 → 1 | `parseListElement` | `./node_modules/typescript/lib/typescript.js` |
|   -0.2% |  -0.01ms |   9.7% → 6.8% |           3.8ms |       3 | `tryScan`          | `./node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |            Time | Samples | Caller                              | Location                                                        |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------- | --------------------------------------------------------------- |
| +398.8% | +5.01ms |   1.7% → 6.9% |   1.3ms → 6.3ms |   1 → 5 | `getPropertyTypeForIndexType`       | `./node_modules/typescript/lib/typescript.js`                   |
|  -50.1% | -3.78ms |  10.2% → 4.2% |   7.5ms → 3.8ms |   6 → 3 | `getTypeOfPropertyOfType`           | `./node_modules/typescript/lib/typescript.js`                   |
|  +74.6% | +3.75ms |   6.8% → 9.7% |   5.0ms → 8.8ms |   4 → 7 | `propertiesRelatedTo`               | `./node_modules/typescript/lib/typescript.js`                   |
|  +13.4% | +3.70ms | 37.3% → 34.7% | 27.7ms → 31.3ms | 22 → 25 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js`                   |
|     new | +1.25ms |   0.0% → 1.4% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:73958:7 → 75241:7` |

##### `checkExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |   Delta |             % |          Time | Samples | Caller                              | Location                                      |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | --------------------------------------------- |
|     new | +7.52ms |  0.0% → 23.1% |   0ms → 7.5ms |   0 → 6 | `checkExpressionCached`             | `./node_modules/typescript/lib/typescript.js` |
|     new | +5.02ms |  0.0% → 15.4% |   0ms → 5.0ms |   0 → 4 | `checkNonNullExpression`            | `./node_modules/typescript/lib/typescript.js` |
| +398.8% | +5.01ms |  7.1% → 19.2% | 1.3ms → 6.3ms |   1 → 5 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js` |
|  -40.1% | -2.52ms | 35.7% → 11.5% | 6.3ms → 3.8ms |   5 → 3 | `resolveCallExpression`             | `./node_modules/typescript/lib/typescript.js` |
|     new | +2.51ms |   0.0% → 7.7% |   0ms → 2.5ms |   0 → 2 | `checkExpressionStatement`          | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeOfInstantiatedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                                | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------- | --------------------------------------------- |
|  +62.1% | +12.49ms | 94.1% → 89.7% | 20.1ms → 32.6ms | 16 → 26 | `getTypeOfSymbol`                     | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   5.9% → 0.0% |     1.3ms → 0ms |   1 → 0 | `compareSignaturesRelated`            | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 3.4% |     0ms → 1.3ms |   0 → 1 | `getContextualTypeForArgumentAtIndex` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 3.4% |     0ms → 1.3ms |   0 → 1 | `propertiesRelatedTo`                 | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 3.4% |     0ms → 1.3ms |   0 → 1 | `getSignatureApplicabilityError`      | `./node_modules/typescript/lib/typescript.js` |

##### `getImmediateBaseConstraint` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                            | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------- | --------------------------------------------- |
| +108.6% | +15.01ms | 55.0% → 71.9% | 13.8ms → 28.8ms | 11 → 23 | `getResolvedBaseConstraint`       | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   5.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `getBaseConstraintOfType`         | `./node_modules/typescript/lib/typescript.js` |
|  +14.0% |  +1.23ms | 35.0% → 25.0% |  8.8ms → 10.0ms |   7 → 8 | `getBaseConstraint`               | `./node_modules/typescript/lib/typescript.js` |
|   -0.2% |  -3.00µs |   5.0% → 3.1% |           1.3ms |       1 | `getConstraintTypeFromMappedType` | `./node_modules/typescript/lib/typescript.js` |

##### `canHaveJSDoc` (`./node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |            Time | Samples | Caller                     | Location                                      |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------- |
|    new | +3.76ms |   0.0% → 5.0% |     0ms → 3.8ms |   0 → 3 | `forEachChildRecursively`  | `./node_modules/typescript/lib/typescript.js` |
| +74.6% | +3.75ms |  8.3% → 11.7% |   5.0ms → 8.8ms |   4 → 7 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |
|    new | +2.51ms |   0.0% → 3.3% |     0ms → 2.5ms |   0 → 2 | `getJSDocTags`             | `./node_modules/typescript/lib/typescript.js` |
|  +4.4% | +2.38ms | 89.6% → 75.0% | 54.1ms → 56.4ms | 43 → 45 | `hasJSDocNodes`            | `./node_modules/typescript/lib/typescript.js` |
|    new | +1.25ms |   0.0% → 1.7% |     0ms → 1.3ms |   0 → 1 | `getJSDocTagsWorker`       | `./node_modules/typescript/lib/typescript.js` |

##### `getStringLiteralType` (`./node_modules/typescript/lib/typescript.js`)

| Change |   Delta |             % |            Time | Samples | Caller                    | Location                                               |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------- | ------------------------------------------------------ |
| +62.1% | +6.25ms | 88.9% → 65.0% | 10.1ms → 16.3ms |  8 → 13 | `checkExpressionWorker`   | `./node_modules/typescript/lib/typescript.js`          |
|    new | +2.51ms |  0.0% → 10.0% |     0ms → 2.5ms |   0 → 2 | `(anonymous)`             | `./node_modules/typescript/lib/typescript.js:75241:7`  |
|    new | +1.25ms |   0.0% → 5.0% |     0ms → 1.3ms |   0 → 1 | `checkTemplateExpression` | `./node_modules/typescript/lib/typescript.js`          |
|    new | +1.25ms |   0.0% → 5.0% |     0ms → 1.3ms |   0 → 1 | `checkExpression`         | `./node_modules/typescript/lib/typescript.js`          |
|    new | +1.25ms |   0.0% → 5.0% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`             | `./node_modules/typescript/lib/typescript.js:66186:61` |

##### `iterateCommentRanges` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |              % |            Time | Samples | Caller                          | Location                                      |
| -----: | -------: | -------------: | --------------: | ------: | ------------------------------- | --------------------------------------------- |
| +43.1% | +12.47ms | 100.0% → 97.1% | 28.9ms → 41.4ms | 23 → 33 | `reduceEachLeadingCommentRange` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +1.25ms |    0.0% → 2.9% |     0ms → 1.3ms |   0 → 1 | `withJSDoc`                     | `./node_modules/typescript/lib/typescript.js` |

##### `read` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | ------: | -----: | --------------: | ------: | ---------- | --------- |
| +33.0% | +3.73ms | 100.0% | 11.3ms → 15.0ms |  9 → 12 | `readSync` | `node:fs` |

##### `readdir` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location  |
| ------: | ------: | -----: | ------------: | ------: | ------------- | --------- |
| +199.3% | +2.50ms | 100.0% | 1.3ms → 3.8ms |   1 → 3 | `readdirSync` | `node:fs` |

##### `fstat` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location  |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------- |
| +99.5% | +2.50ms | 100.0% | 2.5ms → 5.0ms |   2 → 4 | `tryStatSync` | `node:fs` |

##### `createUnsafeArrayBuffer` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ---------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `createUnsafeBuffer` | `node:internal/buffer` |

##### `readFileUtf8` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location  |
| -----: | ------: | -----: | ------------: | ------: | -------------- | --------- |
| +33.0% | +1.24ms | 100.0% | 3.8ms → 5.0ms |   3 → 4 | `readFileSync` | `node:fs` |

##### `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                                         | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------------- | --------------------------------------------- |
|  -45.8% | -40.34ms | 56.9% → 48.1% | 88.0ms → 47.7ms | 70 → 38 | `getPropertyOfType`                            | `./node_modules/typescript/lib/typescript.js` |
|  -33.5% | -17.68ms | 34.1% → 35.4% | 52.8ms → 35.1ms | 42 → 28 | `getSignaturesOfType`                          | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |   1.6% → 0.0% |     2.5ms → 0ms |   2 → 0 | `getIndexType`                                 | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |   0.0% → 2.5% |     0ms → 2.5ms |   0 → 2 | `resolveStructuredTypeMembers`                 | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 1.3% |     0ms → 1.3ms |   0 → 1 | `checkFunctionExpressionOrObjectLiteralMethod` | `./node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Caller                   | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------ | --------------------------------------------- |
| -36.9% | -22.72ms | 17.6% → 13.0% |   61.6ms → 38.9ms |   49 → 31 | `isRelatedToWorker2`     | `./node_modules/typescript/lib/typescript.js` |
| -10.5% | -20.53ms | 55.6% → 58.4% | 194.8ms → 174.3ms | 155 → 139 | `checkTypeRelatedTo`     | `./node_modules/typescript/lib/typescript.js` |
| -37.6% |  -7.57ms |   5.7% → 4.2% |   20.1ms → 12.5ms |   16 → 10 | `typeArgumentsRelatedTo` | `./node_modules/typescript/lib/typescript.js` |
| -57.2% |  -5.04ms |   2.5% → 1.3% |     8.8ms → 3.8ms |     7 → 3 | `typeRelatedToEachType`  | `./node_modules/typescript/lib/typescript.js` |
| -37.6% |  -3.79ms |   2.9% → 2.1% |    10.1ms → 6.3ms |     8 → 5 | `typeRelatedToSomeType`  | `./node_modules/typescript/lib/typescript.js` |

##### `getNormalizedUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |              % |              Time |  Samples | Caller               | Location                                      |
| ------: | -------: | -------------: | ----------------: | -------: | -------------------- | --------------------------------------------- |
|  -27.0% | -45.55ms | 97.8% → 100.0% | 168.4ms → 122.9ms | 134 → 98 | `getNormalizedType`  | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |    1.5% → 0.0% |       2.5ms → 0ms |    2 → 0 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |    0.7% → 0.0% |       1.3ms → 0ms |    1 → 0 | `isRelatedToWorker2` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                        | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------- | --------------------------------------------- |
| -68.1% | -21.39ms |  19.2% → 8.2% | 31.4ms → 10.0ms |  25 → 8 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js` |
| -33.5% |  -8.84ms | 16.2% → 14.4% | 26.4ms → 17.6ms | 21 → 14 | `inferFromMatchingTypes`      | `./node_modules/typescript/lib/typescript.js` |
| -28.7% |  -7.59ms | 16.2% → 15.5% | 26.4ms → 18.8ms | 21 → 15 | `inferFromProperties`         | `./node_modules/typescript/lib/typescript.js` |
| -28.0% |  -6.32ms | 13.8% → 13.4% | 22.6ms → 16.3ms | 18 → 13 | `applyToReturnTypes`          | `./node_modules/typescript/lib/typescript.js` |
| -22.4% |  -2.53ms |   6.9% → 7.2% |  11.3ms → 8.8ms |   9 → 7 | `inferFromTypes`              | `./node_modules/typescript/lib/typescript.js` |

##### `getIntersectionType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                              | Location                                               |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------ |
|  -39.3% | -34.06ms | 79.3% → 76.4% | 86.7ms → 52.7ms | 69 → 42 | `instantiateTypeWorker`             | `./node_modules/typescript/lib/typescript.js`          |
|  -75.1% |  -3.77ms |   4.6% → 1.8% |   5.0ms → 1.3ms |   4 → 1 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js`          |
|  -40.1% |  -2.52ms |   5.7% → 5.5% |   6.3ms → 3.8ms |   5 → 3 | `intersectTypes`                    | `./node_modules/typescript/lib/typescript.js`          |
| removed |  -1.26ms |   1.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:72579:75` |
| removed |  -1.26ms |   1.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `instantiateTypeWithAlias`          | `./node_modules/typescript/lib/typescript.js`          |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                             | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------- | --------------------------------------------- |
|  -22.2% | -13.94ms | 59.5% → 72.2% | 62.8ms → 48.9ms | 50 → 39 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -47.5% | -11.34ms | 22.6% → 18.5% | 23.9ms → 12.5ms | 19 → 10 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js` |
| removed | -10.06ms |   9.5% → 0.0% |    10.1ms → 0ms |   8 → 0 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js` |
|  -33.5% |  -2.53ms |   7.1% → 7.4% |   7.5ms → 5.0ms |   6 → 4 | `bindBlockScopedDeclaration`       | `./node_modules/typescript/lib/typescript.js` |
|   -0.2% |  -3.00µs |   1.2% → 1.9% |           1.3ms |       1 | `declareSourceFileMember`          | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWithAlias` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                            | Location                                                |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------- | ------------------------------------------------------- |
|  -47.5% | -34.03ms | 95.0% → 96.8% | 71.6ms → 37.6ms | 57 → 30 | `instantiateType`                 | `./node_modules/typescript/lib/typescript.js`           |
| removed |  -2.51ms |   3.3% → 0.0% |     2.5ms → 0ms |   2 → 0 | `getConditionalTypeInstantiation` | `./node_modules/typescript/lib/typescript.js`           |
| removed |  -1.26ms |   1.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `chooseOverload`                  | `./node_modules/typescript/lib/typescript.js`           |
|     new |  +1.25ms |   0.0% → 3.2% |     0ms → 1.3ms |   0 → 1 | `(anonymous)`                     | `./node_modules/typescript/lib/typescript.js:66249:177` |

##### `instantiateTypeWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                        | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------- | --------------------------------------------- |
|   -9.5% | -29.59ms | 98.4% → 99.1% | 313.0ms → 283.4ms | 249 → 226 | `instantiateTypeWithAlias`    | `./node_modules/typescript/lib/typescript.js` |
|  -50.1% |  -1.26ms |   0.8% → 0.4% |     2.5ms → 1.3ms |     2 → 1 | `instantiateList`             | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateType`             | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getTypeOfInstantiatedSymbol` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 0.4% |       0ms → 1.3ms |     0 → 1 | `getMappedType`               | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromSignatures` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |              % |            Time | Samples | Caller                 | Location                                      |
| ------: | -------: | -------------: | --------------: | ------: | ---------------------- | --------------------------------------------- |
|  -42.7% | -25.22ms | 95.9% → 100.0% | 59.1ms → 33.9ms | 47 → 27 | `inferFromObjectTypes` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |    4.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `invokeOnce`           | `./node_modules/typescript/lib/typescript.js` |

##### `getUnionType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                            | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------- | --------------------------------------------- |
|  -68.1% | -21.39ms | 62.5% → 42.1% | 31.4ms → 10.0ms |  25 → 8 | `instantiateTypeWorker`           | `./node_modules/typescript/lib/typescript.js` |
| removed |  -5.03ms |  10.0% → 0.0% |     5.0ms → 0ms |   4 → 0 | `getLiteralTypeFromProperties`    | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |   5.0% → 0.0% |     2.5ms → 0ms |   2 → 0 | `instantiateTypeWithAlias`        | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |  0.0% → 10.5% |     0ms → 2.5ms |   0 → 2 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js` |
|  +66.3% |  +2.50ms |  7.5% → 26.3% |   3.8ms → 6.3ms |   3 → 5 | `getOptionalType`                 | `./node_modules/typescript/lib/typescript.js` |

##### `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                     | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------- | --------------------------------------------- |
| -23.2% | -21.54ms | 86.0% → 86.4% | 93.0ms → 71.5ms | 74 → 57 | `signatureRelatedTo`       | `./node_modules/typescript/lib/typescript.js` |
| -27.4% |  -3.79ms | 12.8% → 12.1% | 13.8ms → 10.0ms |  11 → 8 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |  -3.00µs |   1.2% → 1.5% |           1.3ms |       1 | `signaturesRelatedTo`      | `./node_modules/typescript/lib/typescript.js` |

##### `getSignaturesOfType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                        | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------- | --------------------------------------------- |
| -75.1% | -15.10ms | 28.6% → 11.1% |  20.1ms → 5.0ms |  16 → 4 | `inferFromSignatures`         | `./node_modules/typescript/lib/typescript.js` |
| -17.6% |  -5.08ms | 41.1% → 52.8% | 28.9ms → 23.8ms | 23 → 19 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
| -50.1% |  -3.78ms |  10.7% → 8.3% |   7.5ms → 3.8ms |   6 → 3 | `resolveCallExpression`       | `./node_modules/typescript/lib/typescript.js` |
| -66.7% |  -2.52ms |   5.4% → 2.8% |   3.8ms → 1.3ms |   3 → 1 | `resolveTypeReferenceMembers` | `./node_modules/typescript/lib/typescript.js` |
| -50.1% |  -1.26ms |   3.6% → 2.8% |   2.5ms → 1.3ms |   2 → 1 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |

##### `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                                   | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------------------------- | --------------------------------------------- |
|  -34.9% | -10.10ms | 28.7% → 24.6% | 28.9ms → 18.8ms | 23 → 15 | `getTypeOfVariableOrParameterOrProperty` | `./node_modules/typescript/lib/typescript.js` |
|  -25.2% |  -7.60ms | 30.0% → 29.5% | 30.2ms → 22.6ms | 24 → 18 | `getResolvedMembersOrExportsOfSymbol`    | `./node_modules/typescript/lib/typescript.js` |
|  -35.9% |  -6.31ms | 17.5% → 14.8% | 17.6ms → 11.3ms |  14 → 9 | `instantiateSymbol`                      | `./node_modules/typescript/lib/typescript.js` |
|     new |  +6.27ms |   0.0% → 8.2% |     0ms → 6.3ms |   0 → 5 | `getTypeOfFuncClassEnumModule`           | `./node_modules/typescript/lib/typescript.js` |
| removed |  -3.77ms |   3.8% → 0.0% |     3.8ms → 0ms |   3 → 0 | `getTypeOnlyAliasDeclaration`            | `./node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |              % |            Time | Samples | Caller                   | Location                                      |
| -----: | -------: | -------------: | --------------: | ------: | ------------------------ | --------------------------------------------- |
| -31.2% | -27.80ms | 100.0% → 94.2% | 89.2ms → 61.4ms | 71 → 49 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +3.76ms |    0.0% → 5.8% |     0ms → 3.8ms |   0 → 3 | `isRelatedTo`            | `./node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |  Samples | Caller           | Location                                      |
| -----: | -------: | ------------: | ----------------: | -------: | ---------------- | --------------------------------------------- |
| -16.1% | -21.64ms | 98.2% → 98.9% | 134.5ms → 112.9ms | 107 → 90 | `inferFromTypes` | `./node_modules/typescript/lib/typescript.js` |
| -50.1% |  -1.26ms |   1.8% → 1.1% |     2.5ms → 1.3ms |    2 → 1 | `inferTypes`     | `./node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |  Samples | Caller                        | Location                                      |
| -----: | -------: | ------------: | ----------------: | -------: | ----------------------------- | --------------------------------------------- |
| -17.2% | -21.62ms | 97.1% → 96.5% | 125.7ms → 104.1ms | 100 → 83 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |  -0.01ms |   2.9% → 3.5% |             3.8ms |        3 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `propertiesRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |            Time | Samples | Caller                          | Location                                      |
| -----: | -------: | ------------: | --------------: | ------: | ------------------------------- | --------------------------------------------- |
| -34.2% | -18.94ms | 93.6% → 96.7% | 55.3ms → 36.4ms | 44 → 29 | `structuredTypeRelatedToWorker` | `./node_modules/typescript/lib/typescript.js` |
| -66.7% |  -2.52ms |   6.4% → 3.3% |   3.8ms → 1.3ms |   3 → 1 | `structuredTypeRelatedTo`       | `./node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Caller                     | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------- | --------------------------------------------- |
|  -5.7% | -19.63ms | 99.3% → 99.6% | 341.9ms → 322.3ms | 272 → 257 | `instantiateTypeWorker`    | `./node_modules/typescript/lib/typescript.js` |
| -50.1% |  -1.26ms |   0.7% → 0.4% |     2.5ms → 1.3ms |     2 → 1 | `instantiateTypeWithAlias` | `./node_modules/typescript/lib/typescript.js` |

##### `some` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                                | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------- | --------------------------------------------- |
|  -71.5% | -12.58ms |  14.3% → 4.9% |  17.6ms → 5.0ms |  14 → 4 | `hasMatchingRecursionIdentity`        | `./node_modules/typescript/lib/typescript.js` |
|  -35.4% |  -7.57ms | 17.3% → 13.4% | 21.4ms → 13.8ms | 17 → 11 | `isTypeReferenceWithGenericArguments` | `./node_modules/typescript/lib/typescript.js` |
|  +82.9% |  +6.25ms |  6.1% → 13.4% |  7.5ms → 13.8ms |  6 → 11 | `inferFromProperties`                 | `./node_modules/typescript/lib/typescript.js` |
|  +99.5% |  +5.00ms |   4.1% → 9.8% |  5.0ms → 10.0ms |   4 → 8 | `couldContainTypeVariables`           | `./node_modules/typescript/lib/typescript.js` |
| removed |  -3.77ms |   3.1% → 0.0% |     3.8ms → 0ms |   3 → 0 | `isDeeplyNestedType`                  | `./node_modules/typescript/lib/typescript.js` |

##### `inferTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |           Time | Samples | Caller               | Location                                                          |
| -----: | -------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| -70.1% | -17.62ms | 76.9% → 60.0% | 25.1ms → 7.5ms |  20 → 6 | `inferTypeArguments` | `./node_modules/typescript/lib/typescript.js`                     |
| -60.1% |  -3.78ms | 19.2% → 20.0% |  6.3ms → 2.5ms |   5 → 2 | `getConditionalType` | `./node_modules/typescript/lib/typescript.js`                     |
|    new |  +1.25ms |  0.0% → 10.0% |    0ms → 1.3ms |   0 → 1 | `chooseOverload`     | `./node_modules/typescript/lib/typescript.js`                     |
|  -0.2% |  -3.00µs |  3.8% → 10.0% |          1.3ms |       1 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:76637:58 → 77932:58` |

##### `realpath` (`<unknown>`)

| Change |    Delta |      % |           Time | Samples | Caller        | Location          |
| -----: | -------: | -----: | -------------: | ------: | ------------- | ----------------- |
| -56.4% | -11.33ms | 100.0% | 20.1ms → 8.8ms |  16 → 7 | `(anonymous)` | `node:fs:2851:23` |

##### `stat` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | ------: | -----: | --------------: | ------: | ---------- | --------- |
|  -4.3% | -2.66ms | 100.0% | 61.6ms → 58.9ms | 49 → 47 | `statSync` | `node:fs` |

##### `close` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location  |
| -----: | ------: | -----: | ------------: | ------: | ----------- | --------- |
| -25.2% | -1.27ms | 100.0% | 5.0ms → 3.8ms |   4 → 3 | `closeSync` | `node:fs` |

##### `internalModuleStat` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `findParentPackageJSON` | `node:internal/modules/package_json_reader` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Third-party

| Change |     Delta |             % |              Time |       Samples | Function                                 | Location                                               |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ------------------------------------------------------ |
|    new | +199.39ms |   0.0% → 1.2% |     0ms → 199.4ms |       0 → 159 | `(anonymous)`                            | `./node_modules/typescript/lib/typescript.js:32748:71` |
|    new |  +99.07ms |   0.0% → 0.6% |      0ms → 99.1ms |        0 → 79 | `expressionOrTypeToTypeNodeHelper`       | `./node_modules/typescript/lib/typescript.js`          |
|  +4.1% |  +72.27ms | 10.5% → 11.2% |     1.76s → 1.84s | 1,407 → 1,468 | `forEachChild`                           | `./node_modules/typescript/lib/typescript.js`          |
| +13.4% |  +70.23ms |   3.1% → 3.6% | 522.9ms → 593.1ms |     416 → 473 | `getTypeFromTypeNodeWorker`              | `./node_modules/typescript/lib/typescript.js`          |
|  +4.7% |  +63.26ms |   8.0% → 8.6% |     1.34s → 1.40s | 1,068 → 1,121 | `visitNode2`                             | `./node_modules/typescript/lib/typescript.js`          |
| +75.9% |  +56.25ms |   0.4% → 0.8% |  74.2ms → 130.4ms |      59 → 104 | `forEachChildInTypeReference`            | `./node_modules/typescript/lib/typescript.js`          |
|  +9.5% |  +52.60ms |   3.3% → 3.7% | 554.3ms → 606.9ms |     441 → 484 | `getTypeFromTypeNode`                    | `./node_modules/typescript/lib/typescript.js`          |
| +15.9% |  +46.95ms |   1.8% → 2.1% | 295.4ms → 342.3ms |     235 → 273 | `checkSignatureDeclaration`              | `./node_modules/typescript/lib/typescript.js`          |
|  +6.0% |  +45.82ms |   4.6% → 5.0% | 768.0ms → 813.8ms |     611 → 649 | `checkModuleDeclaration`                 | `./node_modules/typescript/lib/typescript.js`          |
| +61.7% |  +44.97ms |   0.4% → 0.7% |  72.9ms → 117.9ms |       58 → 94 | `toPath3`                                | `./node_modules/typescript/lib/typescript.js`          |
|  +1.8% |  +43.30ms | 14.0% → 14.6% |     2.35s → 2.39s | 1,870 → 1,909 | `addLazyDiagnostic`                      | `./node_modules/typescript/lib/typescript.js`          |
| +14.8% |  +41.96ms |   1.7% → 2.0% | 282.8ms → 324.8ms |     225 → 259 | `checkAndAggregateReturnExpressionTypes` | `./node_modules/typescript/lib/typescript.js`          |
|  +2.1% |  +40.62ms | 11.3% → 11.8% |     1.89s → 1.93s | 1,508 → 1,544 | `checkClassDeclaration`                  | `./node_modules/typescript/lib/typescript.js`          |
| +26.6% |  +39.77ms |   0.9% → 1.2% | 149.6ms → 189.4ms |     119 → 151 | `resolveEntityName`                      | `./node_modules/typescript/lib/typescript.js`          |
| +42.1% |  +38.66ms |   0.5% → 0.8% |  91.8ms → 130.4ms |      73 → 104 | `toPath`                                 | `./node_modules/typescript/lib/typescript.js`          |
|  +4.9% |  +38.26ms |   4.7% → 5.0% | 784.4ms → 822.6ms |     624 → 656 | `getTypeOfInstantiatedSymbol`            | `./node_modules/typescript/lib/typescript.js`          |
| +14.1% |  +38.23ms |   1.6% → 1.9% | 271.5ms → 309.7ms |     216 → 247 | `forEachReturnStatement`                 | `./node_modules/typescript/lib/typescript.js`          |
|  +8.8% |  +37.84ms |   2.6% → 2.9% | 432.4ms → 470.3ms |     344 → 375 | `fillMissingTypeArguments`               | `./node_modules/typescript/lib/typescript.js`          |
|  +4.8% |  +37.02ms |   4.6% → 5.0% | 778.1ms → 815.1ms |     619 → 650 | `forEachChildInConditionalType`          | `./node_modules/typescript/lib/typescript.js`          |
|  +4.7% |  +35.80ms |   4.5% → 4.9% | 763.0ms → 798.8ms |     607 → 637 | `checkConditionalType`                   | `./node_modules/typescript/lib/typescript.js`          |

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

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |            Time |         Samples | Function                                               | Location                                                            |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------------------ | ------------------------------------------------------------------- |
|  -3.0% | -442.45ms | 86.8% → 86.3% | 14.62s → 14.18s | 11,634 → 11,309 | `typeCheckProject`                                     | `./tsc-workload.mjs`                                                |
|  -3.0% | -442.45ms | 86.8% → 86.3% | 14.62s → 14.18s | 11,633 → 11,308 | `(anonymous)`                                          | `./datadog-pprof.mjs`                                               |
|  -3.0% | -441.18ms | 86.8% → 86.2% | 14.61s → 14.17s | 11,628 → 11,304 | `run`                                                  | `node:internal/modules/esm/module_job`                              |
|  -5.9% | -402.51ms | 40.5% → 39.0% |   6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.9% | -398.07ms | 82.4% → 82.1% | 13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -388.75ms | 40.6% → 39.2% |   6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `./node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -387.51ms | 40.6% → 39.3% |   6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.4% | -360.76ms | 48.9% → 47.9% |   8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -358.49ms | 46.4% → 45.4% |   7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -355.97ms | 46.4% → 45.4% |   7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.8% | -344.64ms | 74.3% → 74.1% | 12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `./node_modules/typescript/lib/typescript.js`                       |
|  -3.8% | -343.74ms | 53.4% → 52.6% |   8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.38ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,710 | `(anonymous)`                                          | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.9% | -342.63ms | 41.3% → 40.2% |   6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,959 → 9,710 | `(anonymous)`                                          | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,709 | `getSemanticDiagnosticsForFile`                        | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.11ms | 74.3% → 74.0% | 12.51s → 12.17s |   9,956 → 9,707 | `getSemanticDiagnostics`                               | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,712 | `flatMap`                                              | `./node_modules/typescript/lib/typescript.js`                       |

##### Third-party

| Change |     Delta |             % |            Time |         Samples | Function                                               | Location                                                            |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------------------ | ------------------------------------------------------------------- |
|  -5.9% | -402.51ms | 40.5% → 39.0% |   6.82s → 6.41s |   5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.9% | -398.07ms | 82.4% → 82.1% | 13.89s → 13.49s | 11,051 → 10,760 | `forEach`                                              | `./node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -388.75ms | 40.6% → 39.2% |   6.83s → 6.44s |   5,439 → 5,142 | `checkDeferredNode`                                    | `./node_modules/typescript/lib/typescript.js`                       |
|  -5.7% | -387.51ms | 40.6% → 39.3% |   6.84s → 6.45s |   5,442 → 5,146 | `checkDeferredNodes`                                   | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.4% | -360.76ms | 48.9% → 47.9% |   8.24s → 7.88s |   6,556 → 6,284 | `checkCallExpression`                                  | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -358.49ms | 46.4% → 45.4% |   7.81s → 7.46s |   6,220 → 5,949 | `getResolvedSignature`                                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.6% | -355.97ms | 46.4% → 45.4% |   7.81s → 7.45s |   6,216 → 5,947 | `resolveSignature`                                     | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.8% | -344.64ms | 74.3% → 74.1% | 12.52s → 12.17s |   9,961 → 9,710 | `runWithCancellationToken`                             | `./node_modules/typescript/lib/typescript.js`                       |
|  -3.8% | -343.74ms | 53.4% → 52.6% |   8.99s → 8.64s |   7,154 → 6,897 | `checkExpressionWorker`                                | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.38ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,710 | `(anonymous)`                                          | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getBindAndCheckDiagnosticsForFile`                    | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -343.37ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,708 | `getDiagnosticsHelper`                                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.9% | -342.63ms | 41.3% → 40.2% |   6.95s → 6.60s |   5,531 → 5,271 | `resolveCall`                                          | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,959 → 9,710 | `(anonymous)`                                          | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -2.7% | -342.12ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,709 | `getSemanticDiagnosticsForFile`                        | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -342.11ms | 74.3% → 74.0% | 12.51s → 12.17s |   9,956 → 9,707 | `getSemanticDiagnostics`                               | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,960 → 9,712 | `flatMap`                                              | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -340.87ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,958 → 9,710 | `getBindAndCheckDiagnosticsForFileNoCache`             | `./node_modules/typescript/lib/typescript.js`                       |
|  -2.7% | -339.61ms | 74.3% → 74.1% | 12.51s → 12.17s |   9,957 → 9,710 | `getAndCacheDiagnostics`                               | `./node_modules/typescript/lib/typescript.js`                       |
|  -4.5% | -337.49ms | 44.1% → 43.1% |   7.42s → 7.08s |   5,908 → 5,653 | `resolveCallExpression`                                | `./node_modules/typescript/lib/typescript.js`                       |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function             | Location    |
| ------: | -------: | -----------: | --------------: | ------: | -------------------- | ----------- |
|  -56.4% | -11.33ms |         0.1% |  20.1ms → 8.8ms |  16 → 7 | `realpath`           | `<unknown>` |
|   -4.3% |  -2.66ms |         0.4% | 61.6ms → 58.9ms | 49 → 47 | `stat`               | `<unknown>` |
|  -25.2% |  -1.27ms |        <0.1% |   5.0ms → 3.8ms |   4 → 3 | `close`              | `<unknown>` |
| removed |  -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalModuleStat` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:32748:71`)

| Change |     Delta |             % |          Time | Samples | Caller       | Location                                      |
| -----: | --------: | ------------: | ------------: | ------: | ------------ | --------------------------------------------- |
|    new | +199.39ms | 0.0% → 100.0% | 0ms → 199.4ms | 0 → 159 | `mapDefined` | `./node_modules/typescript/lib/typescript.js` |

##### `expressionOrTypeToTypeNodeHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |         Time | Samples | Caller                       | Location                                      |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------------- | --------------------------------------------- |
|    new | +99.07ms | 0.0% → 100.0% | 0ms → 99.1ms |  0 → 79 | `expressionOrTypeToTypeNode` | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChild` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                              | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------- | --------------------------------------------- |
|   +4.7% | +35.80ms | 43.1% → 43.4% | 763.0ms → 798.8ms | 607 → 637 | `checkConditionalType`              | `./node_modules/typescript/lib/typescript.js` |
|  +12.6% | +34.46ms | 15.4% → 16.7% | 272.8ms → 307.2ms | 217 → 245 | `traverse`                          | `./node_modules/typescript/lib/typescript.js` |
|   -4.4% | -30.48ms | 38.9% → 35.7% | 687.6ms → 657.1ms | 547 → 524 | `bindEachChild`                     | `./node_modules/typescript/lib/typescript.js` |
|  +56.1% | +16.23ms |   1.6% → 2.5% |   28.9ms → 45.1ms |   23 → 36 | `gatherPossibleChildren`            | `./node_modules/typescript/lib/typescript.js` |
| +149.4% | +15.02ms |   0.6% → 1.4% |   10.1ms → 25.1ms |    8 → 20 | `isTypeParameterPossiblyReferenced` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFromTypeNodeWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                     | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------ | --------------------------------------------- |
|  +10.5% | +51.49ms | 94.2% → 91.8% | 492.7ms → 544.2ms | 392 → 434 | `getTypeFromTypeNode`                      | `./node_modules/typescript/lib/typescript.js` |
|  +60.3% | +21.23ms |   6.7% → 9.5% |   35.2ms → 56.4ms |   28 → 45 | `containsReference`                        | `./node_modules/typescript/lib/typescript.js` |
| removed |  -3.77ms |   0.7% → 0.0% |       3.8ms → 0ms |     3 → 0 | `getConditionalFlowTypeOfType`             | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `checkTypeReferenceNode`                   | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getWidenedTypeForVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `visitNode2` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Caller                              | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------------- | --------------------------------------------- |
| +66.9% | +41.23ms |   4.6% → 7.3% |  61.6ms → 102.8ms |   49 → 82 | `forEachChildInTypeReference`       | `./node_modules/typescript/lib/typescript.js` |
|  +4.6% | +35.76ms | 58.0% → 57.9% | 778.1ms → 813.8ms | 619 → 649 | `forEachChildInConditionalType`     | `./node_modules/typescript/lib/typescript.js` |
| -25.9% | -35.44ms |  10.2% → 7.2% | 137.0ms → 101.6ms |  109 → 81 | `forEachChildInVariableStatement`   | `./node_modules/typescript/lib/typescript.js` |
| -23.4% | -24.07ms |   7.7% → 5.6% |  103.1ms → 79.0ms |   82 → 63 | `forEachChildInVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |
| -29.0% | -18.97ms |   4.9% → 3.3% |   65.4ms → 46.4ms |   52 → 37 | `forEachChildInPropertySignature`   | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChildInTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |             Time |  Samples | Caller                    | Location                                      |
| ------: | -------: | ------------: | ---------------: | -------: | ------------------------- | --------------------------------------------- |
|  +73.7% | +53.75ms | 98.3% → 97.1% | 72.9ms → 126.7ms | 58 → 101 | `forEachChild`            | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |   0.0% → 1.9% |      0ms → 2.5ms |    0 → 2 | `bind`                    | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.7% → 0.0% |      1.3ms → 0ms |    1 → 0 | `isDistributionDependent` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 1.0% |      0ms → 1.3ms |    0 → 1 | `getModuleInstanceState`  | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFromTypeNode` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                             | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------- | --------------------------------------------- |
|  +35.2% | +19.93ms | 10.2% → 12.6% |   56.6ms → 76.5ms |   45 → 61 | `map`                              | `./node_modules/typescript/lib/typescript.js` |
|   +3.8% | +12.98ms | 61.5% → 58.3% | 340.6ms → 353.6ms | 271 → 282 | `checkTypeReferenceOrImport`       | `./node_modules/typescript/lib/typescript.js` |
| removed |  -8.80ms |   1.6% → 0.0% |       8.8ms → 0ms |     7 → 0 | `getTypeFromArrayOrTupleTypeNode`  | `./node_modules/typescript/lib/typescript.js` |
|  +15.1% |  +7.41ms |   8.8% → 9.3% |   49.0ms → 56.4ms |   39 → 45 | `tryGetTypeFromEffectiveTypeNode`  | `./node_modules/typescript/lib/typescript.js` |
|  -62.6% |  -6.29ms |   1.8% → 0.6% |    10.1ms → 3.8ms |     8 → 3 | `getTypeFromIndexedAccessTypeNode` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSignatureDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Caller                                                     | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------------- | --------------------------------------------- |
| +43.1% | +37.41ms | 29.4% → 36.3% |  86.7ms → 124.1ms |   69 → 99 | `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` | `./node_modules/typescript/lib/typescript.js` |
|  +3.9% |  +7.09ms | 60.9% → 54.6% | 179.8ms → 186.8ms | 143 → 149 | `checkFunctionOrMethodDeclaration`                         | `./node_modules/typescript/lib/typescript.js` |
| +99.5% |  +1.25ms |   0.4% → 0.7% |     1.3ms → 2.5ms |     1 → 2 | `checkConstructorDeclaration`                              | `./node_modules/typescript/lib/typescript.js` |
| +49.6% |  +1.25ms |   0.9% → 1.1% |     2.5ms → 3.8ms |     2 → 3 | `checkAccessorDeclarationDiagnostics`                      | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |  -0.06ms |   8.9% → 7.7% |   26.4ms → 26.3ms |        21 | `checkSourceElementWorker`                                 | `./node_modules/typescript/lib/typescript.js` |

##### `checkModuleDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |     % |              Time |   Samples | Caller                     | Location                                      |
| -----: | -------: | ----: | ----------------: | --------: | -------------------------- | --------------------------------------------- |
|  +6.0% | +45.82ms | 99.8% | 766.8ms → 812.6ms | 610 → 648 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `toPath3` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Caller                                  | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------- | --------------------------------------------- |
|  +55.4% | +29.97ms | 74.1% → 71.3% | 54.1ms → 84.0ms | 43 → 67 | `getResolvedProjectReferenceToRedirect` | `./node_modules/typescript/lib/typescript.js` |
|  +63.2% |  +8.74ms | 19.0% → 19.1% | 13.8ms → 22.6ms | 11 → 18 | `findSourceFileWorker`                  | `./node_modules/typescript/lib/typescript.js` |
| +124.5% |  +6.26ms |   6.9% → 9.6% |  5.0ms → 11.3ms |   4 → 9 | `getSourceFile`                         | `./node_modules/typescript/lib/typescript.js` |

##### `addLazyDiagnostic` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |       Samples | Caller                         | Location                                      |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | --------------------------------------------- |
|  -2.2% | -39.46ms | 77.4% → 74.4% |     1.82s → 1.78s | 1,448 → 1,420 | `checkTypeReferenceOrImport`   | `./node_modules/typescript/lib/typescript.js` |
| +63.2% | +26.23ms |   1.8% → 2.8% |   41.5ms → 67.7ms |       33 → 54 | `checkAccessorDeclaration`     | `./node_modules/typescript/lib/typescript.js` |
| +19.4% | +16.10ms |   3.5% → 4.1% |   83.0ms → 99.1ms |       66 → 79 | `checkClassLikeDeclaration`    | `./node_modules/typescript/lib/typescript.js` |
|  +7.2% | +13.35ms |   7.9% → 8.3% | 186.0ms → 199.4ms |     148 → 159 | `checkFunctionDeclaration`     | `./node_modules/typescript/lib/typescript.js` |
| -12.9% | -12.78ms |   4.2% → 3.6% |   99.3ms → 86.5ms |       79 → 69 | `onSuccessfullyResolvedSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `checkAndAggregateReturnExpressionTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location                                      |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | --------------------------------------------- |
| +14.8% | +41.96ms | 100.0% | 282.8ms → 324.8ms | 225 → 259 | `getReturnTypeFromBody` | `./node_modules/typescript/lib/typescript.js` |

##### `checkClassDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |     % |            Time |       Samples | Caller                     | Location                                      |
| -----: | -------: | ----: | --------------: | ------------: | -------------------------- | --------------------------------------------- |
|  +2.2% | +40.64ms | 99.5% |   1.88s → 1.92s | 1,500 → 1,536 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |  -0.02ms |  0.5% | 10.1ms → 10.0ms |             8 | `forEach`                  | `./node_modules/typescript/lib/typescript.js` |

##### `resolveEntityName` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |  Samples | Caller                                      | Location                                      |
| -----: | -------: | ------------: | ----------------: | -------: | ------------------------------------------- | --------------------------------------------- |
| +16.9% | +21.02ms | 83.2% → 76.8% | 124.4ms → 145.5ms | 99 → 116 | `resolveTypeReferenceName`                  | `./node_modules/typescript/lib/typescript.js` |
| +82.9% | +12.50ms | 10.1% → 14.6% |   15.1ms → 27.6ms |  12 → 22 | `getSymbolOfNameOrPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +6.27ms |   0.0% → 3.3% |       0ms → 6.3ms |    0 → 5 | `getTargetOfExportSpecifier`                | `./node_modules/typescript/lib/typescript.js` |
| -15.6% |  -2.55ms |  10.9% → 7.3% |   16.3ms → 13.8ms |  13 → 11 | `resolveEntityName`                         | `./node_modules/typescript/lib/typescript.js` |
| -33.5% |  -2.53ms |   5.0% → 2.6% |     7.5ms → 5.0ms |    6 → 4 | `isValidConstAssertionArgument`             | `./node_modules/typescript/lib/typescript.js` |

##### `toPath` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |             Time | Samples | Caller                          | Location                                      |
| ------: | -------: | ------------: | ---------------: | ------: | ------------------------------- | --------------------------------------------- |
|  +67.5% | +44.98ms | 72.6% → 85.6% | 66.6ms → 111.6ms | 53 → 89 | `toPath3`                       | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |   2.7% → 0.0% |      2.5ms → 0ms |   2 → 0 | `set`                           | `./node_modules/typescript/lib/typescript.js` |
|  -33.5% |  -1.26ms |   4.1% → 1.9% |    3.8ms → 2.5ms |   3 → 2 | `getFromDirectoryCache`         | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.4% → 0.0% |      1.3ms → 0ms |   1 → 0 | `checkVariableLikeDeclaration`  | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.4% → 0.0% |      1.3ms → 0ms |   1 → 0 | `getEmitSyntaxForUsageLocation` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeOfInstantiatedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------- | --------------------------------------------- |
|   +4.6% | +35.75ms | 99.8% → 99.5% | 783.1ms → 818.9ms | 623 → 653 | `getTypeOfSymbol`                     | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `compareSignaturesRelated`            | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `getContextualTypeForArgumentAtIndex` | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `propertiesRelatedTo`                 | `./node_modules/typescript/lib/typescript.js` |
|     new |  +1.25ms |   0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `getSignatureApplicabilityError`      | `./node_modules/typescript/lib/typescript.js` |

##### `forEachReturnStatement` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Caller                                   | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | ---------------------------------------- | --------------------------------------------- |
| +14.8% | +39.49ms | 98.1% → 98.8% | 266.5ms → 306.0ms | 212 → 244 | `checkAndAggregateReturnExpressionTypes` | `./node_modules/typescript/lib/typescript.js` |
| -25.2% |  -1.27ms |   1.9% → 1.2% |     5.0ms → 3.8ms |     4 → 3 | `hasContextSensitiveReturnExpression`    | `./node_modules/typescript/lib/typescript.js` |

##### `fillMissingTypeArguments` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | --------------------------------------------- |
|   +6.4% | +25.38ms | 92.2% → 90.1% | 398.5ms → 423.9ms | 317 → 338 | `getEffectiveTypeArguments2`           | `./node_modules/typescript/lib/typescript.js` |
|  +35.4% |  +6.23ms |   4.1% → 5.1% |   17.6ms → 23.8ms |   14 → 19 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js` |
| +398.8% |  +5.01ms |   0.3% → 1.3% |     1.3ms → 6.3ms |     1 → 5 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js` |
|  -50.1% |  -1.26ms |   0.6% → 0.3% |     2.5ms → 1.3ms |     2 → 1 | `getTypeAliasInstantiation`            | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.3% → 0.0% |       1.3ms → 0ms |     1 → 0 | `chooseOverload`                       | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChildInConditionalType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |              % |              Time |   Samples | Caller         | Location                                      |
| -----: | -------: | -------------: | ----------------: | --------: | -------------- | --------------------------------------------- |
|  +4.4% | +34.51ms | 100.0% → 99.7% | 778.1ms → 812.6ms | 619 → 648 | `forEachChild` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +1.25ms |    0.0% → 0.2% |       0ms → 1.3ms |     0 → 1 | `bind`         | `./node_modules/typescript/lib/typescript.js` |

##### `checkConditionalType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Caller                     | Location                                      |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | --------------------------------------------- |
|  +4.7% | +35.80ms | 100.0% | 763.0ms → 798.8ms | 607 → 637 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `open` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | -------: | -----: | --------------: | ------: | ---------- | --------- |
| +47.1% | +23.71ms | 100.0% | 50.3ms → 74.0ms | 40 → 59 | `openSync` | `node:fs` |

##### `read` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | ------: | -----: | --------------: | ------: | ---------- | --------- |
| +33.0% | +3.73ms | 100.0% | 11.3ms → 15.0ms |  9 → 12 | `readSync` | `node:fs` |

##### `readdir` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller        | Location  |
| ------: | ------: | -----: | ------------: | ------: | ------------- | --------- |
| +199.3% | +2.50ms | 100.0% | 1.3ms → 3.8ms |   1 → 3 | `readdirSync` | `node:fs` |

##### `fstat` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location  |
| -----: | ------: | -----: | ------------: | ------: | ------------- | --------- |
| +99.5% | +2.50ms | 100.0% | 2.5ms → 5.0ms |   2 → 4 | `tryStatSync` | `node:fs` |

##### `createUnsafeArrayBuffer` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location               |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ---------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `createUnsafeBuffer` | `node:internal/buffer` |

##### `readFileUtf8` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller         | Location  |
| -----: | ------: | -----: | ------------: | ------: | -------------- | --------- |
| +33.0% | +1.24ms | 100.0% | 3.8ms → 5.0ms |   3 → 4 | `readFileSync` | `node:fs` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

| Change |     Delta |      % |            Time |         Samples | Caller        | Location              |
| -----: | --------: | -----: | --------------: | --------------: | ------------- | --------------------- |
|  -3.0% | -442.45ms | 100.0% | 14.62s → 14.18s | 11,633 → 11,308 | `(anonymous)` | `./datadog-pprof.mjs` |

##### `(anonymous)` (`./datadog-pprof.mjs`)

| Change |     Delta |      % |            Time |         Samples | Caller | Location                               |
| -----: | --------: | -----: | --------------: | --------------: | ------ | -------------------------------------- |
|  -3.0% | -441.18ms | 100.0% | 14.61s → 14.17s | 11,628 → 11,304 | `run`  | `node:internal/modules/esm/module_job` |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |          Time |       Samples | Caller              | Location                                      |
| -----: | --------: | -----: | ------------: | ------------: | ------------------- | --------------------------------------------- |
|  -5.9% | -402.51ms | 100.0% | 6.82s → 6.41s | 5,427 → 5,119 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |          Time |       Samples | Caller                         | Location                                      |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------ | --------------------------------------------- |
|  -3.7% | -320.53ms | 62.8% → 62.3% | 8.72s → 8.40s | 6,942 → 6,703 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js` |
|  -5.6% | -284.34ms | 36.9% → 35.8% | 5.11s → 4.83s | 4,073 → 3,856 | `checkVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js` |
|  -4.8% |  -76.55ms | 11.5% → 11.3% | 1.59s → 1.52s | 1,271 → 1,213 | `createProgram`                | `./node_modules/typescript/lib/typescript.js` |
|  +1.3% |  +62.38ms | 35.0% → 36.5% | 4.86s → 4.92s | 3,870 → 3,929 | `checkSourceFileWorker`        | `./node_modules/typescript/lib/typescript.js` |
|  +2.3% |  +35.27ms | 10.9% → 11.4% | 1.50s → 1.54s | 1,201 → 1,232 | `checkClassDeclaration`        | `./node_modules/typescript/lib/typescript.js` |

##### `checkDeferredNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |          Time |       Samples | Caller               | Location                                      |
| -----: | --------: | -----: | ------------: | ------------: | -------------------- | --------------------------------------------- |
|  -5.7% | -388.75ms | 100.0% | 6.83s → 6.44s | 5,439 → 5,142 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js` |

##### `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location                                      |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | --------------------------------------------- |
|  -5.7% | -387.51ms | 100.0% | 6.84s → 6.45s | 5,442 → 5,146 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |          Time |       Samples | Caller                  | Location                                      |
| ------: | --------: | -----------: | ------------: | ------------: | ----------------------- | --------------------------------------------- |
|   -4.4% | -359.50ms |       100.0% | 8.23s → 7.88s | 6,555 → 6,284 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkExpression`       | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |     % |           Time |       Samples | Caller                      | Location                                      |
| -----: | --------: | ----: | -------------: | ------------: | --------------------------- | --------------------------------------------- |
|  -4.5% | -354.71ms | 99.9% |  7.80s → 7.45s | 6,213 → 5,945 | `checkCallExpression`       | `./node_modules/typescript/lib/typescript.js` |
| -44.6% |   -5.04ms |  0.1% | 11.3ms → 6.3ms |         9 → 5 | `checkInstanceOfExpression` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |          Time |       Samples | Caller                  | Location                                      |
| ------: | --------: | -----------: | ------------: | ------------: | ----------------------- | --------------------------------------------- |
|   -4.6% | -355.97ms |       100.0% | 7.81s → 7.45s | 6,216 → 5,947 | `getResolvedSignature`  | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |            Time |       Samples | Caller                                     | Location                                      |
| ------: | --------: | -----------: | --------------: | ------------: | ------------------------------------------ | --------------------------------------------- |
|   -2.7% | -342.12ms |       100.0% | 12.51s → 12.17s | 9,958 → 9,709 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |          Time |       Samples | Caller                           | Location                                                          |
| ------: | --------: | -----------: | ------------: | ------------: | -------------------------------- | ----------------------------------------------------------------- |
|   -3.8% | -342.48ms |       100.0% | 8.99s → 8.64s | 7,153 → 6,897 | `checkExpression`                | `./node_modules/typescript/lib/typescript.js`                     |
| removed |   -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkExpressionWorker`          | `./node_modules/typescript/lib/typescript.js`                     |
|     new |   +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `getSignatureApplicabilityError` | `./node_modules/typescript/lib/typescript.js`                     |
|   -0.2% |   -3.00µs |        <0.1% |         1.3ms |             1 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:79605:39 → 80900:39` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |     Delta |      % |            Time |       Samples | Caller                     | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | -------------------------- | --------------------------------------------- |
|  -2.7% | -343.38ms | 100.0% | 12.51s → 12.17s | 9,959 → 9,709 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller                          | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ------------------------------- | --------------------------------------------- |
|  -2.8% | -344.62ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,705 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller                    | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ------------------------- | --------------------------------------------- |
|  -2.7% | -342.11ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,707 | `getSemanticDiagnostics`  | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |   -3.00µs |  <0.1% |           1.3ms |             1 | `getSyntacticDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveCall` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |              Time |       Samples | Caller                        | Location                                      |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------------------- | --------------------------------------------- |
|  -4.8% | -312.91ms | 94.7% → 94.9% |     6.58s → 6.27s | 5,239 → 5,002 | `resolveCallExpression`       | `./node_modules/typescript/lib/typescript.js` |
|  -5.8% |  -24.85ms |          6.1% | 427.4ms → 402.5ms |     340 → 321 | `resolveNewExpression`        | `./node_modules/typescript/lib/typescript.js` |
| -25.2% |   -1.27ms |          0.1% |     5.0ms → 3.8ms |         4 → 3 | `resolveInstanceofExpression` | `./node_modules/typescript/lib/typescript.js` |
|    new |   +1.25ms |  0.0% → <0.1% |       0ms → 1.3ms |         0 → 1 | `resolveSignature`            | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |            Time |       Samples | Caller    | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | --------- | --------------------------------------------- |
|  -2.7% | -342.12ms | 100.0% | 12.51s → 12.17s | 9,959 → 9,710 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller        | Location                                                            |
| -----: | --------: | -----: | --------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  -2.7% | -343.37ms | 100.0% | 12.51s → 12.17s | 9,958 → 9,708 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller             | Location             |
| -----: | --------: | -----: | --------------: | ------------: | ------------------ | -------------------- |
|  -2.7% | -342.11ms | 100.0% | 12.51s → 12.17s | 9,955 → 9,706 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |              % |            Time |       Samples | Caller                              | Location                                      |
| -----: | --------: | -------------: | --------------: | ------------: | ----------------------------------- | --------------------------------------------- |
|  -2.8% | -344.63ms | 100.0% → 99.9% | 12.51s → 12.17s | 9,958 → 9,707 | `getDiagnosticsHelper`              | `./node_modules/typescript/lib/typescript.js` |
| +99.5% |   +1.25ms |          <0.1% |   1.3ms → 2.5ms |         1 → 2 | `getRegularExpressionsForWildcards` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller                   | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ------------------------ | --------------------------------------------- |
|  -2.7% | -340.86ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,708 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Caller                              | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ----------------------------------- | --------------------------------------------- |
|  -2.7% | -340.86ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,708 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveCallExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |          Time |       Samples | Caller             | Location                                      |
| -----: | --------: | -----: | ------------: | ------------: | ------------------ | --------------------------------------------- |
|  -4.5% | -337.49ms | 100.0% | 7.42s → 7.08s | 5,908 → 5,653 | `resolveSignature` | `./node_modules/typescript/lib/typescript.js` |

##### `realpath` (`<unknown>`)

| Change |    Delta |      % |           Time | Samples | Caller        | Location          |
| -----: | -------: | -----: | -------------: | ------: | ------------- | ----------------- |
| -56.4% | -11.33ms | 100.0% | 20.1ms → 8.8ms |  16 → 7 | `(anonymous)` | `node:fs:2851:23` |

##### `stat` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location  |
| -----: | ------: | -----: | --------------: | ------: | ---------- | --------- |
|  -4.3% | -2.66ms | 100.0% | 61.6ms → 58.9ms | 49 → 47 | `statSync` | `node:fs` |

##### `close` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller      | Location  |
| -----: | ------: | -----: | ------------: | ------: | ----------- | --------- |
| -25.2% | -1.27ms | 100.0% | 5.0ms → 3.8ms |   4 → 3 | `closeSync` | `node:fs` |

##### `internalModuleStat` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------------------------------- |
| removed | -1.26ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `findParentPackageJSON` | `node:internal/modules/package_json_reader` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:32748:71`)

| Change |     Delta |            % |          Time | Samples | Callee              | Location                                      |
| -----: | --------: | -----------: | ------------: | ------: | ------------------- | --------------------------------------------- |
|    new | +195.62ms | 0.0% → 98.1% | 0ms → 195.6ms | 0 → 156 | `parseJSDocComment` | `./node_modules/typescript/lib/typescript.js` |

##### `expressionOrTypeToTypeNodeHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |         Time | Samples | Callee                 | Location                                      |
| -----: | -------: | ------------: | -----------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +99.07ms | 0.0% → 100.0% | 0ms → 99.1ms |  0 → 79 | `typeToTypeNodeHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChild` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Callee                                  | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | --------------------------------------- | --------------------------------------------- |
| +73.7% | +53.75ms |   4.1% → 6.9% |  72.9ms → 126.7ms |  58 → 101 | `forEachChildInTypeReference`           | `./node_modules/typescript/lib/typescript.js` |
| -28.2% | -37.94ms |   7.6% → 5.2% |  134.5ms → 96.6ms |  107 → 77 | `forEachChildInVariableDeclarationList` | `./node_modules/typescript/lib/typescript.js` |
|  +4.4% | +34.51ms | 44.0% → 44.1% | 778.1ms → 812.6ms | 619 → 648 | `forEachChildInConditionalType`         | `./node_modules/typescript/lib/typescript.js` |
| +11.9% | +34.42ms | 16.3% → 17.6% | 289.1ms → 323.5ms | 230 → 258 | `forEachChildInBlock`                   | `./node_modules/typescript/lib/typescript.js` |
| -24.7% | -34.19ms |   7.8% → 5.7% | 138.3ms → 104.1ms |  110 → 83 | `forEachChildInVariableStatement`       | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFromTypeNodeWorker` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                                  | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | --------------------------------------------- |
|   +5.2% | +22.79ms | 83.2% → 77.2% | 434.9ms → 457.7ms | 346 → 365 | `getTypeFromTypeReference`                              | `./node_modules/typescript/lib/typescript.js` |
|  +55.6% | +17.48ms |   6.0% → 8.2% |   31.4ms → 48.9ms |   25 → 39 | `getSymbolAtLocation`                                   | `./node_modules/typescript/lib/typescript.js` |
| +107.8% | +16.27ms |   2.9% → 5.3% |   15.1ms → 31.3ms |   12 → 25 | `getTypeFromIntersectionTypeNode`                       | `./node_modules/typescript/lib/typescript.js` |
|   -7.8% |  -9.05ms | 22.1% → 18.0% | 115.6ms → 106.6ms |   92 → 85 | `getTypeFromTypeOperatorNode`                           | `./node_modules/typescript/lib/typescript.js` |
| +124.5% |  +6.26ms |   1.0% → 1.9% |    5.0ms → 11.3ms |     4 → 9 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `./node_modules/typescript/lib/typescript.js` |

##### `visitNode2` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Callee               | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------- | --------------------------------------------- |
|  +4.7% | +35.80ms |         56.8% | 763.0ms → 798.8ms | 607 → 637 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |
| +44.1% | +19.96ms |   3.4% → 4.6% |   45.3ms → 65.2ms |   36 → 52 | `containsReference`  | `./node_modules/typescript/lib/typescript.js` |
| +82.9% | +12.50ms |   1.1% → 2.0% |   15.1ms → 27.6ms |   12 → 22 | `addWorkItem`        | `./node_modules/typescript/lib/typescript.js` |
| +23.0% |  +8.69ms |   2.8% → 3.3% |   37.7ms → 46.4ms |   30 → 37 | `traverse`           | `./node_modules/typescript/lib/typescript.js` |
|  -1.5% |  -7.42ms | 36.0% → 33.8% | 482.7ms → 475.3ms | 384 → 379 | `bind`               | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChildInTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |             Time | Samples | Callee       | Location                                      |
| ------: | -------: | ------------: | ---------------: | ------: | ------------ | --------------------------------------------- |
|  +66.9% | +41.23ms | 83.1% → 78.8% | 61.6ms → 102.8ms | 49 → 82 | `visitNode2` | `./node_modules/typescript/lib/typescript.js` |
| +111.3% | +23.77ms | 28.8% → 34.6% |  21.4ms → 45.1ms | 17 → 36 | `visitNodes` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFromTypeNode` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                                  | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | --------------------------------------------- |
|  +10.5% | +51.49ms | 88.9% → 89.7% | 492.7ms → 544.2ms | 392 → 434 | `getTypeFromTypeNodeWorker`                             | `./node_modules/typescript/lib/typescript.js` |
|  -19.7% | -10.15ms |   9.3% → 6.8% |   51.5ms → 41.4ms |   41 → 33 | `getConditionalFlowTypeOfType`                          | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getTypeFromArrayOrTupleTypeNode`                       | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `getTypeFromMappedTypeNode`                             | `./node_modules/typescript/lib/typescript.js` |

##### `checkSignatureDeclaration` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Callee                          | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------- | --------------------------------------------- |
|  +22.6% | +23.58ms | 35.3% → 37.4% | 104.3ms → 127.9ms |  83 → 102 | `forEach`                       | `./node_modules/typescript/lib/typescript.js` |
|   +9.2% | +13.45ms | 49.4% → 46.5% | 145.8ms → 159.3ms | 116 → 127 | `checkSourceElement`            | `./node_modules/typescript/lib/typescript.js` |
| +199.3% | +12.52ms |   2.1% → 5.5% |    6.3ms → 18.8ms |    5 → 15 | `checkUnmatchedJSDocParameters` | `./node_modules/typescript/lib/typescript.js` |
|  -28.7% |  -7.59ms |   8.9% → 5.5% |   26.4ms → 18.8ms |   21 → 15 | `checkTypeParameters`           | `./node_modules/typescript/lib/typescript.js` |
| +149.4% |  +7.51ms |   1.7% → 3.7% |    5.0ms → 12.5ms |    4 → 10 | `addLazyDiagnostic`             | `./node_modules/typescript/lib/typescript.js` |

##### `checkModuleDeclaration` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |              % |              Time |   Samples | Callee               | Location                                      |
| ------: | -------: | -------------: | ----------------: | --------: | -------------------- | --------------------------------------------- |
|   +6.3% | +48.33ms | 99.7% → 100.0% | 765.5ms → 813.8ms | 609 → 649 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |    0.3% → 0.0% |       2.5ms → 0ms |     2 → 0 | `addLazyDiagnostic`  | `./node_modules/typescript/lib/typescript.js` |

##### `toPath3` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |             Time | Samples | Callee                 | Location                                      |
| ------: | -------: | ------------: | ---------------: | ------: | ---------------------- | --------------------------------------------- |
|  +67.5% | +44.98ms | 91.4% → 94.7% | 66.6ms → 111.6ms | 53 → 89 | `toPath`               | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   1.7% → 0.0% |      1.3ms → 0ms |   1 → 0 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `addLazyDiagnostic` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |       Samples | Callee                                | Location                                                          |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|   -2.0% | -36.95ms | 77.4% → 74.5% |     1.82s → 1.78s | 1,448 → 1,422 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
|  +68.3% | +27.49ms |   1.7% → 2.8% |   40.2ms → 67.7ms |       32 → 54 | `checkAccessorDeclarationDiagnostics` | `./node_modules/typescript/lib/typescript.js`                     |
|  +19.1% | +14.86ms |   3.3% → 3.9% |   77.9ms → 92.8ms |       62 → 74 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:85458:27 → 86753:27` |
|   +7.2% | +13.35ms |   7.9% → 8.3% | 186.0ms → 199.4ms |     148 → 159 | `checkFunctionDeclarationDiagnostics` | `./node_modules/typescript/lib/typescript.js`                     |
| +498.6% | +12.53ms |   0.1% → 0.6% |    2.5ms → 15.0ms |        2 → 12 | `checkTypeLiteralDiagnostics`         | `./node_modules/typescript/lib/typescript.js`                     |

##### `checkAndAggregateReturnExpressionTypes` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |           % |              Time |   Samples | Callee                      | Location                                      |
| ------: | -------: | ----------: | ----------------: | --------: | --------------------------- | --------------------------------------------- |
|  +14.8% | +39.49ms |       94.2% | 266.5ms → 306.0ms | 212 → 244 | `forEachReturnStatement`    | `./node_modules/typescript/lib/typescript.js` |
|  +36.0% |  +4.98ms | 4.9% → 5.8% |   13.8ms → 18.8ms |   11 → 15 | `functionHasImplicitReturn` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms | 0.4% → 0.0% |       1.3ms → 0ms |     1 → 0 | `forEachChildInBlock`       | `./node_modules/typescript/lib/typescript.js` |

##### `checkClassDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |       Samples | Callee                      | Location                                      |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------------------- | --------------------------------------------- |
|  +2.3% | +35.27ms | 79.6% → 79.8% |     1.50s → 1.54s | 1,201 → 1,232 | `forEach`                   | `./node_modules/typescript/lib/typescript.js` |
|  +0.7% |  +2.84ms | 20.4% → 20.1% | 385.9ms → 388.7ms |     307 → 310 | `checkClassLikeDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|    new |  +1.25ms |   0.0% → 0.1% |       0ms → 1.3ms |         0 → 1 | `addLazyDiagnostic`         | `./node_modules/typescript/lib/typescript.js` |

##### `resolveEntityName` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Callee                               | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------ | --------------------------------------------- |
|  +72.8% | +37.50ms | 34.5% → 47.0% | 51.5ms → 89.0ms | 41 → 71 | `resolveNameHelper`                  | `./node_modules/typescript/lib/typescript.js` |
|     new |  +3.76ms |   0.0% → 2.0% |     0ms → 3.8ms |   0 → 3 | `nodeIsSynthesized`                  | `./node_modules/typescript/lib/typescript.js` |
|  -15.6% |  -2.55ms |  10.9% → 7.3% | 16.3ms → 13.8ms | 13 → 11 | `resolveEntityName`                  | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.51ms |   1.7% → 0.0% |     2.5ms → 0ms |   2 → 0 | `onSuccessfullyResolvedSymbol`       | `./node_modules/typescript/lib/typescript.js` |
|     new |  +2.51ms |   0.0% → 1.3% |     0ms → 2.5ms |   0 → 2 | `getCannotFindNameDiagnosticForName` | `./node_modules/typescript/lib/typescript.js` |

##### `toPath` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |            Time | Samples | Callee                 | Location                                      |
| ------: | -------: | ------------: | --------------: | ------: | ---------------------- | --------------------------------------------- |
| +154.9% | +17.53ms | 12.3% → 22.1% | 11.3ms → 28.8ms |  9 → 23 | `normalizePath`        | `./node_modules/typescript/lib/typescript.js` |
|  +24.7% | +17.39ms | 76.7% → 67.3% | 70.4ms → 87.8ms | 56 → 70 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |
|  +66.3% |  +2.50ms |   4.1% → 4.8% |   3.8ms → 6.3ms |   3 → 5 | `isRootedDiskPath`     | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeOfInstantiatedSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Time |   Samples | Callee                  | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------- | --------------------------------------------- |
|  +74.6% | +37.50ms |  6.4% → 10.7% |   50.3ms → 87.8ms |   40 → 70 | `getTypeOfSymbol`       | `./node_modules/typescript/lib/typescript.js` |
|   -1.5% | -10.48ms | 90.9% → 85.4% | 712.7ms → 702.2ms | 567 → 560 | `instantiateType`       | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.26ms |   0.2% → 0.0% |       1.3ms → 0ms |     1 → 0 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `forEachReturnStatement` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |              % |              Time |   Samples | Callee     | Location                                      |
| -----: | -------: | -------------: | ----------------: | --------: | ---------- | --------------------------------------------- |
| +13.2% | +35.72ms | 100.0% → 99.2% | 271.5ms → 307.2ms | 216 → 245 | `traverse` | `./node_modules/typescript/lib/typescript.js` |

##### `fillMissingTypeArguments` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |              Time |   Samples | Callee                        | Location                                      |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------- | --------------------------------------------- |
|  +8.1% | +32.89ms | 94.2% → 93.6% | 407.3ms → 440.2ms | 324 → 351 | `instantiateType`             | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |  -0.02ms |   1.7% → 1.6% |             7.5ms |         6 | `getDefaultFromTypeParameter` | `./node_modules/typescript/lib/typescript.js` |

##### `forEachChildInConditionalType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |              % |              Time |   Samples | Callee       | Location                                      |
| -----: | -------: | -------------: | ----------------: | --------: | ------------ | --------------------------------------------- |
|  +4.6% | +35.76ms | 100.0% → 99.8% | 778.1ms → 813.8ms | 619 → 649 | `visitNode2` | `./node_modules/typescript/lib/typescript.js` |

##### `checkConditionalType` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |              Time |   Samples | Callee         | Location                                      |
| -----: | -------: | -----: | ----------------: | --------: | -------------- | --------------------------------------------- |
|  +4.7% | +35.80ms | 100.0% | 763.0ms → 798.8ms | 607 → 637 | `forEachChild` | `./node_modules/typescript/lib/typescript.js` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

|  Change |     Delta |             % |              Time |       Samples | Callee                             | Location                                      |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | --------------------------------------------- |
|   -2.7% | -342.11ms | 85.6% → 85.8% |   12.51s → 12.17s | 9,955 → 9,706 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js` |
|   -5.4% | -106.30ms | 13.5% → 13.2% |     1.97s → 1.87s | 1,575 → 1,494 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js` |
|   +9.7% |   +9.79ms |   0.7% → 0.8% | 100.6ms → 110.4ms |       80 → 88 | `require`                          | `node:internal/modules/helpers`               |
|   -9.3% |   -2.57ms |          0.2% |   27.7ms → 25.1ms |       22 → 20 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 | `findConfigFile`                   | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./datadog-pprof.mjs`)

| Change |     Delta |      % |            Time |         Samples | Callee             | Location             |
| -----: | --------: | -----: | --------------: | --------------: | ------------------ | -------------------- |
|  -3.0% | -442.45ms | 100.0% | 14.62s → 14.18s | 11,633 → 11,308 | `typeCheckProject` | `./tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

| Change |     Delta |      % |            Time |         Samples | Callee        | Location              |
| -----: | --------: | -----: | --------------: | --------------: | ------------- | --------------------- |
|  -3.0% | -441.18ms | 100.0% | 14.61s → 14.17s | 11,628 → 11,304 | `(anonymous)` | `./datadog-pprof.mjs` |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |              Time |       Samples | Callee                        | Location                                      |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------- | --------------------------------------------- |
|   -5.6% | -373.26ms | 97.5% → 97.8% |     6.64s → 6.27s | 5,289 → 5,004 | `checkSourceElement`          | `./node_modules/typescript/lib/typescript.js` |
|  -45.1% |  -11.35ms |   0.4% → 0.2% |   25.1ms → 13.8ms |       20 → 11 | `checkExpression`             | `./node_modules/typescript/lib/typescript.js` |
|   -7.8% |  -10.35ms |          1.9% | 132.0ms → 121.6ms |      105 → 97 | `getReturnTypeOfSignature`    | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 | `getSignatureFromDeclaration` | `./node_modules/typescript/lib/typescript.js` |
|  +99.5% |   +1.25ms |         <0.1% |     1.3ms → 2.5ms |         1 → 2 | `getReturnTypeFromAnnotation` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |              Time |       Samples | Callee               | Location                                                            |
| -----: | --------: | ------------: | ----------------: | ------------: | -------------------- | ------------------------------------------------------------------- |
|  -2.6% | -300.87ms | 83.0% → 83.2% |   11.52s → 11.22s | 9,167 → 8,949 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js`                       |
|  -5.7% |  -66.74ms |   8.4% → 8.2% |     1.16s → 1.10s |     929 → 878 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
|  -6.5% |  -39.05ms |   4.3% → 4.1% | 597.1ms → 558.0ms |     475 → 445 | `bind`               | `./node_modules/typescript/lib/typescript.js`                       |
|  -9.0% |  -33.49ms |   2.7% → 2.5% | 372.1ms → 338.6ms |     296 → 270 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
| +22.6% |  +23.58ms |   0.8% → 0.9% | 104.3ms → 127.9ms |      83 → 102 | `checkParameter`     | `./node_modules/typescript/lib/typescript.js`                       |

##### `checkDeferredNode` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |           Time |       Samples | Callee                                                 | Location                                      |
| ------: | --------: | ------------: | -------------: | ------------: | ------------------------------------------------------ | --------------------------------------------- |
|   -5.9% | -402.51ms | 99.8% → 99.6% |  6.82s → 6.41s | 5,427 → 5,119 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `./node_modules/typescript/lib/typescript.js` |
| +398.8% |   +5.01ms |  <0.1% → 0.1% |  1.3ms → 6.3ms |         1 → 5 | `resolveUntypedCall`                                   | `./node_modules/typescript/lib/typescript.js` |
| removed |   -3.77ms |   0.1% → 0.0% |    3.8ms → 0ms |         3 → 0 | `checkTypeParameterDeferred`                           | `./node_modules/typescript/lib/typescript.js` |
|  +49.6% |   +3.74ms |   0.1% → 0.2% | 7.5ms → 11.3ms |         6 → 9 | `checkAssertionDeferred`                               | `./node_modules/typescript/lib/typescript.js` |
|     new |   +2.51ms |  0.0% → <0.1% |    0ms → 2.5ms |         0 → 2 | `checkAccessorDeclaration`                             | `./node_modules/typescript/lib/typescript.js` |

##### `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |          Time |       Samples | Callee                       | Location                                      |
| ------: | --------: | -----------: | ------------: | ------------: | ---------------------------- | --------------------------------------------- |
|   -5.7% | -388.75ms |        99.9% | 6.83s → 6.44s | 5,439 → 5,142 | `checkDeferredNode`          | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkAssertionDeferred`     | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |   1.3ms → 0ms |         1 → 0 | `checkSourceElementWorker`   | `./node_modules/typescript/lib/typescript.js` |
|     new |   +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `getEffectiveReturnTypeNode` | `./node_modules/typescript/lib/typescript.js` |
|     new |   +1.25ms | 0.0% → <0.1% |   0ms → 1.3ms |         0 → 1 | `getReturnTypeOfSignature`   | `./node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |              Time |       Samples | Callee                      | Location                                      |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------- | --------------------------------------------- |
|   -4.5% | -354.71ms | 94.8% → 94.6% |     7.80s → 7.45s | 6,213 → 5,945 | `getResolvedSignature`      | `./node_modules/typescript/lib/typescript.js` |
|   +6.9% |  +40.01ms |   7.0% → 7.8% | 575.7ms → 615.7ms |     458 → 491 | `getReturnTypeOfSignature`  | `./node_modules/typescript/lib/typescript.js` |
|  -13.7% |  -16.59ms |   1.5% → 1.3% | 120.7ms → 104.1ms |       96 → 83 | `checkDeprecatedSignature`  | `./node_modules/typescript/lib/typescript.js` |
| removed |   -2.51ms |  <0.1% → 0.0% |       2.5ms → 0ms |         2 → 0 | `isInJSFile`                | `./node_modules/typescript/lib/typescript.js` |
|  +66.3% |   +2.50ms |  <0.1% → 0.1% |     3.8ms → 6.3ms |         3 → 5 | `checkGrammarTypeArguments` | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSignature` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |              % |            Time |       Samples | Callee             | Location                                      |
| -----: | --------: | -------------: | --------------: | ------------: | ------------------ | --------------------------------------------- |
|  -4.6% | -355.97ms | 99.9% → 100.0% |   7.81s → 7.45s | 6,216 → 5,947 | `resolveSignature` | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |   -0.10ms |    0.5% → 0.6% | 42.7ms → 42.6ms |            34 | `getNodeLinks`     | `./node_modules/typescript/lib/typescript.js` |

##### `resolveSignature` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |              Time |       Samples | Callee                          | Location                                      |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------- | --------------------------------------------- |
|   -4.5% | -337.49ms | 95.0% → 95.1% |     7.42s → 7.08s | 5,908 → 5,653 | `resolveCallExpression`         | `./node_modules/typescript/lib/typescript.js` |
|   -3.3% |  -14.87ms |   5.8% → 5.9% | 452.5ms → 437.6ms |     360 → 349 | `resolveNewExpression`          | `./node_modules/typescript/lib/typescript.js` |
|  -50.1% |   -5.04ms |          0.1% |    10.1ms → 5.0ms |         8 → 4 | `resolveInstanceofExpression`   | `./node_modules/typescript/lib/typescript.js` |
|     new |   +3.76ms |   0.0% → 0.1% |       0ms → 3.8ms |         0 → 3 | `isCallChain`                   | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 | `getSignaturesOfStructuredType` | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |            % |            Time |       Samples | Callee            | Location                                                            |
| -----: | --------: | -----------: | --------------: | ------------: | ----------------- | ------------------------------------------------------------------- |
|  -2.7% | -343.38ms |       100.0% | 12.51s → 12.17s | 9,959 → 9,709 | `(anonymous)`     | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|    new |   +1.25ms | 0.0% → <0.1% |     0ms → 1.3ms |         0 → 1 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js`                       |

##### `checkExpressionWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |             % |              Time |       Samples | Callee                                         | Location                                      |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | --------------------------------------------- |
|  -4.4% | -359.50ms | 91.6% → 91.1% |     8.23s → 7.88s | 6,555 → 6,284 | `checkCallExpression`                          | `./node_modules/typescript/lib/typescript.js` |
|  -6.5% | -169.28ms | 29.1% → 28.3% |     2.62s → 2.45s | 2,085 → 1,955 | `checkObjectLiteral`                           | `./node_modules/typescript/lib/typescript.js` |
|  -3.3% |  -95.87ms | 31.8% → 32.0% |     2.86s → 2.76s | 2,278 → 2,207 | `checkPropertyAccessExpression`                | `./node_modules/typescript/lib/typescript.js` |
|  -4.5% |  -66.23ms | 16.5% → 16.3% |     1.47s → 1.41s | 1,177 → 1,127 | `checkArrayLiteral`                            | `./node_modules/typescript/lib/typescript.js` |
|  +5.9% |  +25.30ms |   4.8% → 5.3% | 432.4ms → 457.7ms |     344 → 365 | `checkFunctionExpressionOrObjectLiteralMethod` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

|  Change |     Delta |           % |              Time |       Samples | Callee                             | Location                                      |
| ------: | --------: | ----------: | ----------------: | ------------: | ---------------------------------- | --------------------------------------------- |
|   -2.7% | -318.89ms |       93.6% |   11.71s → 11.39s | 9,322 → 9,090 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js` |
|   -3.4% |  -26.99ms | 6.4% → 6.3% | 799.5ms → 772.5ms |     636 → 616 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js` |
| +199.3% |   +2.50ms |       <0.1% |     1.3ms → 3.8ms |         1 → 3 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Callee                   | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ------------------------ | --------------------------------------------- |
|  -2.7% | -340.86ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,708 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Callee    | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | --------- | --------------------------------------------- |
|  -2.8% | -344.63ms | 100.0% | 12.51s → 12.17s | 9,958 → 9,707 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveCall` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |              Time |       Samples | Callee                                | Location                                      |
| ------: | --------: | -----------: | ----------------: | ------------: | ------------------------------------- | --------------------------------------------- |
|   -4.9% | -317.72ms |        93.5% |     6.49s → 6.18s | 5,170 → 4,929 | `chooseOverload`                      | `./node_modules/typescript/lib/typescript.js` |
|   -4.6% |  -17.19ms |  5.3% → 5.4% | 370.8ms → 353.6ms |     295 → 282 | `forEach`                             | `./node_modules/typescript/lib/typescript.js` |
|  +15.5% |   +3.70ms |  0.3% → 0.4% |   23.9ms → 27.6ms |       19 → 22 | `getSignatureApplicabilityError`      | `./node_modules/typescript/lib/typescript.js` |
| removed |   -2.51ms | <0.1% → 0.0% |       2.5ms → 0ms |         2 → 0 | `addImplementationSuccessElaboration` | `./node_modules/typescript/lib/typescript.js` |
|     new |   +2.51ms | 0.0% → <0.1% |       0ms → 2.5ms |         0 → 2 | `inferTypeArguments`                  | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |     Delta |      % |            Time |       Samples | Callee                           | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | -------------------------------- | --------------------------------------------- |
|  -2.7% | -343.37ms | 100.0% | 12.51s → 12.17s | 9,958 → 9,708 | `getSemanticDiagnosticsForFile`  | `./node_modules/typescript/lib/typescript.js` |
|  -0.2% |   -3.00µs |  <0.1% |           1.3ms |             1 | `getSyntacticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |            Time |       Samples | Callee                              | Location                                      |
| ------: | --------: | -----------: | --------------: | ------------: | ----------------------------------- | --------------------------------------------- |
|   -2.8% | -344.62ms |       100.0% | 12.51s → 12.17s | 9,956 → 9,705 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |
|     new |   +2.51ms | 0.0% → <0.1% |     0ms → 2.5ms |         0 → 2 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `filter`                            | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Callee                 | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | ---------------------- | --------------------------------------------- |
|  -2.7% | -342.11ms | 100.0% | 12.51s → 12.17s | 9,956 → 9,707 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Callee        | Location                                                            |
| -----: | --------: | -----: | --------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  -2.7% | -342.12ms | 100.0% | 12.51s → 12.17s | 9,959 → 9,710 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
| +99.5% |   +1.25ms |  <0.1% |   1.3ms → 2.5ms |         1 → 2 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:21101:25 → 22094:25`   |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

| Change |     Delta |      % |            Time |       Samples | Callee                     | Location                                      |
| -----: | --------: | -----: | --------------: | ------------: | -------------------------- | --------------------------------------------- |
|  -2.7% | -342.12ms | 100.0% | 12.51s → 12.17s | 9,958 → 9,709 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |            % |            Time |       Samples | Callee                                     | Location                                      |
| ------: | --------: | -----------: | --------------: | ------------: | ------------------------------------------ | --------------------------------------------- |
|   -2.7% | -340.86ms |       100.0% | 12.51s → 12.17s | 9,956 → 9,708 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |
| removed |   -1.26ms | <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js` |

##### `resolveCallExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |     Delta |             % |            Time |       Samples | Callee                | Location                                      |
| ------: | --------: | ------------: | --------------: | ------------: | --------------------- | --------------------------------------------- |
|   -4.8% | -312.91ms | 88.7% → 88.5% |   6.58s → 6.27s | 5,239 → 5,002 | `resolveCall`         | `./node_modules/typescript/lib/typescript.js` |
|   -1.4% |  -25.87ms | 25.7% → 26.6% |   1.90s → 1.88s | 1,518 → 1,501 | `checkExpression`     | `./node_modules/typescript/lib/typescript.js` |
|  -32.0% |   -8.84ms |   0.4% → 0.3% | 27.7ms → 18.8ms |       22 → 15 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js` |
| +498.6% |   +6.27ms |  <0.1% → 0.1% |   1.3ms → 7.5ms |         1 → 6 | `resolveUntypedCall`  | `./node_modules/typescript/lib/typescript.js` |
|  -40.1% |   -2.52ms |          0.1% |   6.3ms → 3.8ms |         5 → 3 | `getApparentType`     | `./node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs`) ← `(anonymous)` (`./datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +20.06ms |  0.0% → 0.1% |    0ms → 20.1ms |  0 → 16 | `doJSDocScan` (`./node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (38259:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (32748:71) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +36.0% | +19.93ms |  0.3% → 0.5% | 55.3ms → 75.2ms | 44 → 60 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| +332.3% | +12.53ms | <0.1% → 0.1% |  3.8ms → 16.3ms |  3 → 13 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `getQuickTypeOfExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                |
|     new | +10.03ms |  0.0% → 0.1% |    0ms → 10.0ms |   0 → 8 | `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (32748:71) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +698.1% |  +8.78ms | <0.1% → 0.1% |  1.3ms → 10.0ms |   1 → 8 | `isTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeAssignableTo` ← `getConditionalType` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `instantiateList` ← `instantiateTypes` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `getTypeOfMappedSymbol` ← `getTypeOfSymbol` ← `getPropertyTypeForIndexType` ← `getIndexedAccessTypeOrUndefined` ← `getIndexedAccessType` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `getConditionalType` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `isGenericMappedType` ← `shouldDeferIndexType` ← `getIndexType` ← `getTypeFromTypeOperatorNode` ← `getTypeFromTypeNodeWorker` ← `getTypeFromTypeNode` ← `getDeclaredTypeOfTypeAlias` ← `tryGetDeclaredTypeOfSymbol` ← `getDeclaredTypeOfSymbol` ← `getTypeFromTypeAliasReference` ← `getTypeReferenceType` ← `getTypeFromTypeReference` ← `getTypeFromTypeNodeWorker` ← `getTypeFromTypeNode` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +17.7% |  +8.66ms |  0.3% → 0.4% | 49.0ms → 57.7ms | 39 → 46 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                         |
|     new |  +7.52ms | 0.0% → <0.1% |     0ms → 7.5ms |   0 → 6 | `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js`) ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkParameter` ← `forEach` ← `checkSignatureDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |  +7.52ms | 0.0% → <0.1% |     0ms → 7.5ms |   0 → 6 | `doJSDocScan` (`./node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (38259:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (32748:71) ← `mapDefined` ← `withJSDoc` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |  +7.52ms | 0.0% → <0.1% |     0ms → 7.5ms |   0 → 6 | `open` ← `openSync` (`node:fs`) ← `readFileSync` ← `readFileWorker` (`./node_modules/typescript/lib/typescript.js`) ← `readFile` ← `readFile` ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124028:24) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +299.0% |  +7.52ms | <0.1% → 0.1% |  2.5ms → 10.0ms |   2 → 8 | `chooseOverload` (`./node_modules/typescript/lib/typescript.js`) ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +199.3% |  +7.51ms | <0.1% → 0.1% |  3.8ms → 11.3ms |   3 → 9 | `getMembersOfSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `isEmptyAnonymousObjectType` ← `shouldNormalizeIntersection` ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                             |
| +119.5% |  +7.51ms | <0.1% → 0.1% |  6.3ms → 13.8ms |  5 → 11 | `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`) ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `getTypeOfInstantiatedSymbol` ← `getTypeOfSymbol` ← `getNonMissingTypeOfSymbol` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +99.5% |  +7.51ms | <0.1% → 0.1% |  7.5ms → 15.0ms |  6 → 12 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +45.8% |  +7.48ms |         0.1% | 16.3ms → 23.8ms | 13 → 19 | `scan` (`./node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   +9.1% |  +7.33ms |         0.5% | 80.4ms → 87.8ms | 64 → 70 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +6.27ms | 0.0% → <0.1% |     0ms → 6.3ms |   0 → 5 | `structuredTypeRelatedToWorker` (`./node_modules/typescript/lib/typescript.js`) ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |  +6.27ms | 0.0% → <0.1% |     0ms → 6.3ms |   0 → 5 | `checkIdentifier` (`./node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +6.27ms | 0.0% → <0.1% |     0ms → 6.3ms |   0 → 5 | `checkGrammarParameterList` (`./node_modules/typescript/lib/typescript.js`) ← `checkGrammarFunctionLikeDeclaration` ← `checkAccessorDeclarationDiagnostics` ← `addLazyDiagnostic` ← `checkAccessorDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkClassDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |  +6.27ms | 0.0% → <0.1% |     0ms → 6.3ms |   0 → 5 | `isSimpleTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeAssignableTo` ← `discriminateTypeByDiscriminableItems` ← `discriminateContextualTypeByObjectMembers` ← `getApparentTypeOfContextualType` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkForOfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionOrMethodDeclaration` ← `checkMethodDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkClassDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                  |
|     new |  +6.27ms | 0.0% → <0.1% |     0ms → 6.3ms |   0 → 5 | `createTypeReference` (`./node_modules/typescript/lib/typescript.js`) ← `createNormalizedTypeReference` ← `getTypeFromArrayOrTupleTypeNode` ← `getTypeFromTypeNodeWorker` ← `getTypeFromTypeNode` ← `checkAssertionWorker` ← `checkAssertion` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkReturnStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkIfStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionOrMethodDeclaration` ← `checkMethodDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkClassDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`./tsc-workload.mjs`) ← `(anonymous)` (`./datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -42.6% | -17.65ms |  0.2% → 0.1% | 41.5ms → 23.8ms | 33 → 19 | `getReducedApparentType` (`./node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed | -17.60ms |  0.1% → 0.0% |    17.6ms → 0ms |  14 → 0 | `doJSDocScan` (`./node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (37204:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (31696:71) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -53.1% | -11.34ms |         0.1% | 21.4ms → 10.0ms |  17 → 8 | `getPropertiesOfUnionOrIntersectionType` (`./node_modules/typescript/lib/typescript.js`) ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -90.0% | -11.32ms | 0.1% → <0.1% |  12.6ms → 1.3ms |  10 → 1 | `getSymbolLinks` (`./node_modules/typescript/lib/typescript.js`) ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed | -11.31ms |  0.1% → 0.0% |    11.3ms → 0ms |   9 → 0 | `doJSDocScan` (`./node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (37204:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (31696:71) ← `mapDefined` ← `withJSDoc` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -72.8% | -10.06ms | 0.1% → <0.1% |  13.8ms → 3.8ms |  11 → 3 | `invokeOnce` (`./node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -88.9% | -10.06ms | 0.1% → <0.1% |  11.3ms → 1.3ms |   9 → 1 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSpreadArgumentType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `getQuickTypeOfExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                   |
|  -88.9% | -10.06ms | 0.1% → <0.1% |  11.3ms → 1.3ms |   9 → 1 | `invokeOnce` (`./node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -63.7% |  -8.81ms | 0.1% → <0.1% |  13.8ms → 5.0ms |  11 → 4 | `createTypeReference` (`./node_modules/typescript/lib/typescript.js`) ← `createNormalizedTypeReference` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `instantiateType` ← `getReturnTypeOfSignature` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -77.8% |  -8.80ms | 0.1% → <0.1% |  11.3ms → 2.5ms |   9 → 2 | `getMembersOfSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `isEmptyAnonymousObjectType` ← `shouldNormalizeIntersection` ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
|  -77.8% |  -8.80ms | 0.1% → <0.1% |  11.3ms → 2.5ms |   9 → 2 | `computeLineStarts` (`./node_modules/typescript/lib/typescript.js`) ← `getLineStarts` ← `getLineAndCharacterOfPosition` ← `checkGrammarArrowFunction` ← `checkGrammarFunctionLikeDeclaration` ← `checkFunctionExpressionOrObjectLiteralMethod` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -87.5% |  -8.80ms | 0.1% → <0.1% |  10.1ms → 1.3ms |   8 → 1 | `compareSignaturesRelated` (`./node_modules/typescript/lib/typescript.js`) ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `membersRelatedToIndexInfo` ← `typeRelatedToIndexInfo` ← `indexSignaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `compareTypesAssignable` ← `getInferredType` ← `getInferredTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                       |
|  -87.5% |  -8.80ms | 0.1% → <0.1% |  10.1ms → 1.3ms |   8 → 1 | `scan` (`./node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (125932:42) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (125932:42) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (125932:42) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (125932:42) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (125932:42) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `processTypeReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124028:24) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -66.7% |  -7.55ms | 0.1% → <0.1% |  11.3ms → 3.8ms |   9 → 3 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyOrMethodOrAccessor` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `forEach` ← `bindEach` ← `visitNodes` ← `forEachChildInInterfaceDeclaration` ← `forEachChild` ← `bindEachChild` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `forEach` ← `bindEach` ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |  -7.54ms | <0.1% → 0.0% |     7.5ms → 0ms |   6 → 0 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`./node_modules/typescript/lib/typescript.js`) ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -7.54ms | <0.1% → 0.0% |     7.5ms → 0ms |   6 → 0 | `declareSymbol` (`./node_modules/typescript/lib/typescript.js`) ← `declareModuleMember` ← `bindBlockScopedDeclaration` ← `bindWorker` ← `bind` ← `(anonymous)` (45224:21) ← `forEach` ← `bindEach` ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode2` ← `forEachChildInModuleDeclaration` ← `forEachChild` ← `bindEachChild` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `forEach` ← `bindEach` ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -7.54ms | <0.1% → 0.0% |     7.5ms → 0ms |   6 → 0 | `scan` (`./node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseFunctionBlockOrSemicolon` ← `parseMethodDeclaration` ← `parsePropertyOrMethodDeclaration` ← `parseClassElement` ← `parseListElement` ← `parseList` ← `parseClassMembers` ← `parseClassDeclarationOrExpression` ← `parseClassDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseModuleBlock` ← `parseAmbientExternalModuleDeclaration` ← `parseModuleDeclaration` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `(anonymous)` (124200:35) ← `forEach` ← `processReferencedFiles` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `processTypeReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122449:24) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -22.9% |  -6.34ms |  0.2% → 0.1% | 27.7ms → 21.3ms | 22 → 17 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -24.0% |  -6.33ms |  0.2% → 0.1% | 26.4ms → 20.1ms | 21 → 16 | `isRelatedTo` (`./node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                      |
|  -28.0% |  -6.32ms |         0.1% | 22.6ms → 16.3ms | 18 → 13 | `createUnionOrIntersectionProperty` (`./node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
