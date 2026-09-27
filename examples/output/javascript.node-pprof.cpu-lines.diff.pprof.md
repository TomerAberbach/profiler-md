# Wall time profile diff

Took 16.28s → 16.05s (-237.86ms, -1.5%) over 12,969 samples → 12,800 samples (1.3ms per sample).

| Category           | Change |     Delta |             % |              Time |         Samples |
| ------------------ | -----: | --------: | ------------: | ----------------: | --------------: |
| Third-party        |  -2.6% | -364.74ms | 86.3% → 85.3% |   14.06s → 13.69s | 11,197 → 10,924 |
| Garbage collector  |  +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s |   1,513 → 1,614 |
| Native             |  +0.7% |   +1.01ms |          0.9% | 150.7ms → 151.7ms |       120 → 121 |
| Standard library   |  +0.7% |   +1.03ms |   0.8% → 0.9% | 138.2ms → 139.2ms |       110 → 111 |
| Regular expression |  +3.4% |   +1.20ms |          0.2% |   35.2ms → 36.4ms |         28 → 29 |
| Ours               |  -0.2% |   -2.00µs |         <0.1% |             1.3ms |               1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                            | Location                                    |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|   +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)`               | `<unknown>`                                 |
| +130.1% |  +37.57ms |   0.2% → 0.4% |   28.9ms → 66.5ms |       23 → 53 | `getApparentType`                   | `node_modules/typescript/lib/typescript.js` |
|  +46.4% |  +26.24ms |   0.3% → 0.5% |   56.5ms → 82.8ms |       45 → 66 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js` |
|  +32.1% |  +26.20ms |   0.5% → 0.7% |  81.6ms → 107.8ms |       65 → 86 | `getReducedApparentType`            | `node_modules/typescript/lib/typescript.js` |
|   +9.0% |  +25.87ms |   1.8% → 2.0% | 288.9ms → 314.8ms |     230 → 251 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js` |
|   +7.0% |  +23.30ms |   2.0% → 2.2% | 331.6ms → 354.9ms |     264 → 283 | `getObjectTypeInstantiation`        | `node_modules/typescript/lib/typescript.js` |
|  +40.8% |  +19.99ms |   0.3% → 0.4% |   49.0ms → 69.0ms |       39 → 55 | `getTypeListId`                     | `node_modules/typescript/lib/typescript.js` |
|  +55.3% |  +18.76ms |   0.2% → 0.3% |   33.9ms → 52.7ms |       27 → 42 | `getResolvedSymbol`                 | `node_modules/typescript/lib/typescript.js` |
|  +58.1% |  +17.51ms |   0.2% → 0.3% |   30.1ms → 47.7ms |       24 → 38 | `inferFromSignatures`               | `node_modules/typescript/lib/typescript.js` |
|  +46.4% |  +17.50ms |   0.2% → 0.3% |   37.7ms → 55.2ms |       30 → 44 | `getUnionTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  +35.7% |  +17.48ms |   0.3% → 0.4% |   49.0ms → 66.5ms |       39 → 53 | `getMembersOfSymbol`                | `node_modules/typescript/lib/typescript.js` |
|  +33.9% |  +17.47ms |   0.3% → 0.4% |   51.5ms → 69.0ms |       41 → 55 | `checkIdentifier`                   | `node_modules/typescript/lib/typescript.js` |
|  +33.1% |  +17.47ms |   0.3% → 0.4% |   52.8ms → 70.2ms |       42 → 56 | `getIndexedAccessTypeOrUndefined`   | `node_modules/typescript/lib/typescript.js` |
|     new |  +16.30ms |   0.0% → 0.1% |      0ms → 16.3ms |        0 → 13 | `(anonymous:L#53728)`               | `node_modules/typescript/lib/typescript.js` |
|  +64.7% |  +16.26ms |   0.2% → 0.3% |   25.1ms → 41.4ms |       20 → 33 | `scanJsDocToken`                    | `node_modules/typescript/lib/typescript.js` |
|  +53.9% |  +16.25ms |   0.2% → 0.3% |   30.1ms → 46.4ms |       24 → 37 | `resolveObjectTypeMembers`          | `node_modules/typescript/lib/typescript.js` |
|  +29.3% |  +16.21ms |   0.3% → 0.4% |   55.3ms → 71.5ms |       44 → 57 | `inferFromMatchingTypes`            | `node_modules/typescript/lib/typescript.js` |
|  +22.6% |  +16.19ms |   0.4% → 0.5% |   71.6ms → 87.8ms |       57 → 70 | `isTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  +16.7% |  +16.15ms |   0.6% → 0.7% |  96.7ms → 112.9ms |       77 → 90 | `invokeOnce`                        | `node_modules/typescript/lib/typescript.js` |
|  +13.5% |  +16.11ms |   0.7% → 0.8% | 119.3ms → 135.4ms |      95 → 108 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                            | Location                                    |
| ------: | -------: | ----------: | ----------------: | --------: | ----------------------------------- | ------------------------------------------- |
| +130.1% | +37.57ms | 0.2% → 0.4% |   28.9ms → 66.5ms |   23 → 53 | `getApparentType`                   | `node_modules/typescript/lib/typescript.js` |
|  +46.4% | +26.24ms | 0.3% → 0.5% |   56.5ms → 82.8ms |   45 → 66 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js` |
|  +32.1% | +26.20ms | 0.5% → 0.7% |  81.6ms → 107.8ms |   65 → 86 | `getReducedApparentType`            | `node_modules/typescript/lib/typescript.js` |
|   +9.0% | +25.87ms | 1.8% → 2.0% | 288.9ms → 314.8ms | 230 → 251 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js` |
|   +7.0% | +23.30ms | 2.0% → 2.2% | 331.6ms → 354.9ms | 264 → 283 | `getObjectTypeInstantiation`        | `node_modules/typescript/lib/typescript.js` |
|  +40.8% | +19.99ms | 0.3% → 0.4% |   49.0ms → 69.0ms |   39 → 55 | `getTypeListId`                     | `node_modules/typescript/lib/typescript.js` |
|  +55.3% | +18.76ms | 0.2% → 0.3% |   33.9ms → 52.7ms |   27 → 42 | `getResolvedSymbol`                 | `node_modules/typescript/lib/typescript.js` |
|  +58.1% | +17.51ms | 0.2% → 0.3% |   30.1ms → 47.7ms |   24 → 38 | `inferFromSignatures`               | `node_modules/typescript/lib/typescript.js` |
|  +46.4% | +17.50ms | 0.2% → 0.3% |   37.7ms → 55.2ms |   30 → 44 | `getUnionTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  +35.7% | +17.48ms | 0.3% → 0.4% |   49.0ms → 66.5ms |   39 → 53 | `getMembersOfSymbol`                | `node_modules/typescript/lib/typescript.js` |
|  +33.9% | +17.47ms | 0.3% → 0.4% |   51.5ms → 69.0ms |   41 → 55 | `checkIdentifier`                   | `node_modules/typescript/lib/typescript.js` |
|  +33.1% | +17.47ms | 0.3% → 0.4% |   52.8ms → 70.2ms |   42 → 56 | `getIndexedAccessTypeOrUndefined`   | `node_modules/typescript/lib/typescript.js` |
|     new | +16.30ms | 0.0% → 0.1% |      0ms → 16.3ms |    0 → 13 | `(anonymous:L#53728)`               | `node_modules/typescript/lib/typescript.js` |
|  +64.7% | +16.26ms | 0.2% → 0.3% |   25.1ms → 41.4ms |   20 → 33 | `scanJsDocToken`                    | `node_modules/typescript/lib/typescript.js` |
|  +53.9% | +16.25ms | 0.2% → 0.3% |   30.1ms → 46.4ms |   24 → 37 | `resolveObjectTypeMembers`          | `node_modules/typescript/lib/typescript.js` |
|  +29.3% | +16.21ms | 0.3% → 0.4% |   55.3ms → 71.5ms |   44 → 57 | `inferFromMatchingTypes`            | `node_modules/typescript/lib/typescript.js` |
|  +22.6% | +16.19ms | 0.4% → 0.5% |   71.6ms → 87.8ms |   57 → 70 | `isTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  +16.7% | +16.15ms | 0.6% → 0.7% |  96.7ms → 112.9ms |   77 → 90 | `invokeOnce`                        | `node_modules/typescript/lib/typescript.js` |
|  +13.5% | +16.11ms | 0.7% → 0.8% | 119.3ms → 135.4ms |  95 → 108 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js` |
| +133.0% | +15.03ms | 0.1% → 0.2% |   11.3ms → 26.3ms |    9 → 21 | `parseTagComments`                  | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% | 1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

##### Third-party

|  Change |    Delta |           % |              Time |   Samples | Function                               | Location                                    |
| ------: | -------: | ----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------- |
|  -16.1% | -55.73ms | 2.1% → 1.8% | 346.7ms → 290.9ms | 276 → 232 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|   -8.5% | -39.61ms | 2.8% → 2.6% | 463.5ms → 423.9ms | 369 → 338 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  -23.5% | -36.61ms | 1.0% → 0.7% | 155.7ms → 119.1ms |  124 → 95 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  -30.0% | -36.56ms | 0.7% → 0.5% |  121.8ms → 85.3ms |   97 → 68 | `resolveStructuredTypeMembers`         | `node_modules/typescript/lib/typescript.js` |
|  -37.3% | -36.52ms | 0.6% → 0.4% |   98.0ms → 61.4ms |   78 → 49 | `getUnionTypeFromSortedList`           | `node_modules/typescript/lib/typescript.js` |
|  -18.3% | -30.36ms | 1.0% → 0.8% | 165.8ms → 135.4ms | 132 → 108 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  -31.7% | -30.25ms | 0.6% → 0.4% |   95.5ms → 65.2ms |   76 → 52 | `getMappedType`                        | `node_modules/typescript/lib/typescript.js` |
|  -36.9% | -26.45ms | 0.4% → 0.3% |   71.6ms → 45.1ms |   57 → 36 | `getTypeOfSymbol`                      | `node_modules/typescript/lib/typescript.js` |
|  -42.9% | -26.43ms | 0.4% → 0.2% |   61.5ms → 35.1ms |   49 → 28 | `getReducedType`                       | `node_modules/typescript/lib/typescript.js` |
|  -31.8% | -23.95ms | 0.5% → 0.3% |   75.4ms → 51.4ms |   60 → 41 | `getTypeFactsWorker`                   | `node_modules/typescript/lib/typescript.js` |
|  -36.6% | -23.93ms | 0.4% → 0.3% |   65.3ms → 41.4ms |   52 → 33 | `getUnionOrIntersectionProperty`       | `node_modules/typescript/lib/typescript.js` |
|  -56.0% | -23.89ms | 0.3% → 0.1% |   42.7ms → 18.8ms |   34 → 15 | `addTypeToUnion`                       | `node_modules/typescript/lib/typescript.js` |
|  -18.4% | -18.97ms | 0.6% → 0.5% |  103.0ms → 84.0ms |   82 → 67 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  -24.7% | -17.67ms | 0.4% → 0.3% |   71.6ms → 53.9ms |   57 → 43 | `getSignaturesOfType`                  | `node_modules/typescript/lib/typescript.js` |
|  -53.9% | -17.61ms | 0.2% → 0.1% |   32.7ms → 15.0ms |   26 → 12 | `nextTokenWithoutCheck`                | `node_modules/typescript/lib/typescript.js` |
|  -23.3% | -16.41ms | 0.4% → 0.3% |   70.3ms → 53.9ms |   56 → 43 | `resetMaybeStack`                      | `node_modules/typescript/lib/typescript.js` |
|  -23.8% | -16.41ms | 0.4% → 0.3% |   69.1ms → 52.7ms |   55 → 42 | `isDeeplyNestedType`                   | `node_modules/typescript/lib/typescript.js` |
|  -39.5% | -16.37ms | 0.3% → 0.2% |   41.4ms → 25.1ms |   33 → 20 | `isSimpleTypeRelatedTo`                | `node_modules/typescript/lib/typescript.js` |
| removed | -16.33ms | 0.1% → 0.0% |      16.3ms → 0ms |    13 → 0 | `(anonymous:L#52483)`                  | `node_modules/typescript/lib/typescript.js` |
|  -14.4% | -15.22ms |        0.6% |  105.5ms → 90.3ms |   84 → 72 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |     Delta |             % |              Time |       Samples | Function                           | Location                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% |     1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)`              | `<unknown>`                                                       |
|    new |  +97.81ms |   0.0% → 0.6% |      0ms → 97.8ms |        0 → 78 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`                       |
| +15.2% |  +89.35ms |   3.6% → 4.2% | 587.8ms → 677.2ms |     468 → 540 | `doInsideOfContext`                | `node_modules/typescript/lib/typescript.js`                       |
|  +1.2% |  +85.53ms | 42.5% → 43.7% |     6.92s → 7.01s | 5,516 → 5,593 | `resolveCallExpression`            | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% |  +83.71ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,478 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% |  +82.45ms | 10.9% → 11.5% |     1.77s → 1.85s | 1,410 → 1,478 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js`                       |
|  +4.6% |  +81.20ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,476 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +6.0% |  +80.62ms |   8.3% → 8.9% |     1.34s → 1.42s | 1,071 → 1,137 | `parseListElement`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.9% |  +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121506:26 → 123084:26` |
|  +5.9% |  +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `createSourceFile`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +4.5% |  +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:26 → 125505:26` |
|  +4.5% |  +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js`                       |
|  +4.3% |  +78.58ms | 11.3% → 11.9% |     1.83s → 1.91s | 1,463 → 1,528 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`                       |
|  +6.6% |  +78.37ms |   7.3% → 7.9% |     1.18s → 1.26s |   941 → 1,005 | `parseDeclarationWorker`           | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% |  +78.07ms |   8.4% → 9.0% |     1.37s → 1.44s | 1,091 → 1,155 | `parseSourceFile`                  | `node_modules/typescript/lib/typescript.js`                       |
|  +5.8% |  +76.89ms |   8.1% → 8.7% |     1.32s → 1.40s | 1,055 → 1,118 | `parseList`                        | `node_modules/typescript/lib/typescript.js`                       |
|  +5.5% |  +75.57ms |   8.4% → 9.0% |     1.36s → 1.44s | 1,088 → 1,150 | `parseSourceFileWorker`            | `node_modules/typescript/lib/typescript.js`                       |
|  +1.6% |  +75.33ms | 28.7% → 29.6% |     4.67s → 4.74s | 3,719 → 3,785 | `inferTypeArguments`               | `node_modules/typescript/lib/typescript.js`                       |
|  +6.2% |  +74.58ms |   7.4% → 7.9% |     1.19s → 1.27s |   955 → 1,016 | `parseDeclaration`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% |  +74.41ms |   8.0% → 8.6% |     1.31s → 1.38s | 1,044 → 1,105 | `parseStatement`                   | `node_modules/typescript/lib/typescript.js`                       |

##### Third-party

| Change |    Delta |             % |              Time |       Samples | Function                           | Location                                                          |
| -----: | -------: | ------------: | ----------------: | ------------: | ---------------------------------- | ----------------------------------------------------------------- |
|    new | +97.81ms |   0.0% → 0.6% |      0ms → 97.8ms |        0 → 78 | `expressionOrTypeToTypeNodeHelper` | `node_modules/typescript/lib/typescript.js`                       |
| +15.2% | +89.35ms |   3.6% → 4.2% | 587.8ms → 677.2ms |     468 → 540 | `doInsideOfContext`                | `node_modules/typescript/lib/typescript.js`                       |
|  +1.2% | +85.53ms | 42.5% → 43.7% |     6.92s → 7.01s | 5,516 → 5,593 | `resolveCallExpression`            | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% | +83.71ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,478 | `processSourceFile`                | `node_modules/typescript/lib/typescript.js`                       |
|  +4.7% | +82.45ms | 10.9% → 11.5% |     1.77s → 1.85s | 1,410 → 1,478 | `getSourceFileFromReferenceWorker` | `node_modules/typescript/lib/typescript.js`                       |
|  +4.6% | +81.20ms | 10.9% → 11.5% |     1.76s → 1.85s | 1,409 → 1,476 | `findSourceFile`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +6.0% | +80.62ms |   8.3% → 8.9% |     1.34s → 1.42s | 1,071 → 1,137 | `parseListElement`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.9% | +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:121506:26 → 123084:26` |
|  +5.9% | +80.58ms |   8.4% → 9.0% |     1.37s → 1.45s | 1,091 → 1,157 | `createSourceFile`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +4.5% | +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `(anonymous)`                      | `node_modules/typescript/lib/typescript.js:123923:26 → 125505:26` |
|  +4.5% | +79.95ms | 10.9% → 11.5% |     1.76s → 1.84s | 1,409 → 1,475 | `findSourceFileWorker`             | `node_modules/typescript/lib/typescript.js`                       |
|  +4.3% | +78.58ms | 11.3% → 11.9% |     1.83s → 1.91s | 1,463 → 1,528 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`                       |
|  +6.6% | +78.37ms |   7.3% → 7.9% |     1.18s → 1.26s |   941 → 1,005 | `parseDeclarationWorker`           | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% | +78.07ms |   8.4% → 9.0% |     1.37s → 1.44s | 1,091 → 1,155 | `parseSourceFile`                  | `node_modules/typescript/lib/typescript.js`                       |
|  +5.8% | +76.89ms |   8.1% → 8.7% |     1.32s → 1.40s | 1,055 → 1,118 | `parseList`                        | `node_modules/typescript/lib/typescript.js`                       |
|  +5.5% | +75.57ms |   8.4% → 9.0% |     1.36s → 1.44s | 1,088 → 1,150 | `parseSourceFileWorker`            | `node_modules/typescript/lib/typescript.js`                       |
|  +1.6% | +75.33ms | 28.7% → 29.6% |     4.67s → 4.74s | 3,719 → 3,785 | `inferTypeArguments`               | `node_modules/typescript/lib/typescript.js`                       |
|  +6.2% | +74.58ms |   7.4% → 7.9% |     1.19s → 1.27s |   955 → 1,016 | `parseDeclaration`                 | `node_modules/typescript/lib/typescript.js`                       |
|  +5.7% | +74.41ms |   8.0% → 8.6% |     1.31s → 1.38s | 1,044 → 1,105 | `parseStatement`                   | `node_modules/typescript/lib/typescript.js`                       |
|  +5.0% | +74.14ms |   9.1% → 9.7% |     1.47s → 1.55s | 1,176 → 1,237 | `processRootFile`                  | `node_modules/typescript/lib/typescript.js`                       |

##### Garbage collector

| Change |     Delta |             % |          Time |       Samples | Function              | Location    |
| -----: | --------: | ------------: | ------------: | ------------: | --------------------- | ----------- |
|  +6.5% | +123.63ms | 11.7% → 12.6% | 1.90s → 2.02s | 1,513 → 1,614 | `(garbage collector)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

| Change |     Delta |             % |            Time |         Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -3.6% | -401.72ms | 69.4% → 67.9% | 11.30s → 10.89s |   8,997 → 8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -399.44ms | 75.1% → 73.7% | 12.23s → 11.83s |   9,738 → 9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -396.93ms | 75.1% → 73.7% | 12.23s → 11.83s |   9,738 → 9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,736 → 9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,735 → 9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -393.16ms | 75.0% → 73.7% | 12.22s → 11.83s |   9,733 → 9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41 → 124903:41` |
|  -3.4% | -391.94ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,126 → 8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.91ms | 75.1% → 73.7% | 12.22s → 11.83s |   9,736 → 9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.90ms | 75.0% → 73.7% | 12.22s → 11.82s |   9,730 → 9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.89ms | 75.0% → 73.7% | 12.21s → 11.82s |   9,727 → 9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,127 → 8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.45s → 11.06s |   9,124 → 8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27 → 124979:27` |
|  -3.2% | -390.64ms | 75.0% → 73.7% | 12.21s → 11.82s |   9,728 → 9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.5% | -390.43ms | 69.4% → 68.0% | 11.29s → 10.90s |   8,995 → 8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -386.93ms | 70.4% → 69.0% | 11.46s → 11.07s |   9,128 → 8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.18ms | 70.4% → 69.1% | 11.46s → 11.08s |   9,131 → 8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.17ms | 70.4% → 69.0% | 11.46s → 11.08s |   9,128 → 8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -320.03ms | 15.5% → 13.8% |   2.52s → 2.20s |   2,012 → 1,760 | `addLazyDiagnostic`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -2.2% | -318.53ms | 87.1% → 86.4% | 14.18s → 13.86s | 11,293 → 11,057 | `typeCheckProject`                         | `tsc-workload.mjs`                                                |
|  -2.2% | -316.02ms | 87.1% → 86.4% | 14.18s → 13.86s | 11,291 → 11,057 | `(anonymous)`                              | `datadog-pprof.mjs:3:33`                                          |

##### Third-party

| Change |     Delta |             % |            Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -3.6% | -401.72ms | 69.4% → 67.9% | 11.30s → 10.89s | 8,997 → 8,691 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -399.44ms | 75.1% → 73.7% | 12.23s → 11.83s | 9,738 → 9,435 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -396.93ms | 75.1% → 73.7% | 12.23s → 11.83s | 9,738 → 9,437 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,736 → 9,437 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -394.42ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,735 → 9,436 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -393.16ms | 75.0% → 73.7% | 12.22s → 11.83s | 9,733 → 9,435 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123321:41 → 124903:41` |
|  -3.4% | -391.94ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,126 → 8,828 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.91ms | 75.1% → 73.7% | 12.22s → 11.83s | 9,736 → 9,439 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.90ms | 75.0% → 73.7% | 12.22s → 11.82s | 9,730 → 9,433 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`                       |
|  -3.2% | -391.89ms | 75.0% → 73.7% | 12.21s → 11.82s | 9,727 → 9,430 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,127 → 8,830 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -390.69ms | 70.4% → 69.0% | 11.45s → 11.06s | 9,124 → 8,827 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123397:27 → 124979:27` |
|  -3.2% | -390.64ms | 75.0% → 73.7% | 12.21s → 11.82s | 9,728 → 9,432 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`                       |
|  -3.5% | -390.43ms | 69.4% → 68.0% | 11.29s → 10.90s | 8,995 → 8,698 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`                       |
|  -3.4% | -386.93ms | 70.4% → 69.0% | 11.46s → 11.07s | 9,128 → 8,834 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.18ms | 70.4% → 69.1% | 11.46s → 11.08s | 9,131 → 8,840 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`                       |
|  -3.3% | -383.17ms | 70.4% → 69.0% | 11.46s → 11.08s | 9,128 → 8,837 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -320.03ms | 15.5% → 13.8% |   2.52s → 2.20s | 2,012 → 1,760 | `addLazyDiagnostic`                        | `node_modules/typescript/lib/typescript.js`                       |
|  -5.5% | -306.09ms | 34.3% → 32.9% |   5.58s → 5.27s | 4,447 → 4,210 | `checkTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js`                       |
| -12.7% | -298.42ms | 14.4% → 12.7% |   2.34s → 2.04s | 1,866 → 1,631 | `checkTypeReferenceNode`                   | `node_modules/typescript/lib/typescript.js`                       |
