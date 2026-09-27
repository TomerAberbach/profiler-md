# CPU profile diff

Took 5.53s → 5.65s (+119.03ms, +2.1%) over 4,139 samples → 4,196 samples (1.3ms per sample).

| Category         |  Change |     Delta |             % |              Time |       Samples |
| ---------------- | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party      |   +3.1% | +154.94ms | 90.0% → 90.9% |     4.98s → 5.14s | 3,717 → 3,813 |
| Native           |   -1.5% |   -5.91ms |   7.3% → 7.1% | 406.9ms → 401.0ms |     311 → 308 |
| Standard library |  -18.4% |  -25.81ms |   2.5% → 2.0% | 140.6ms → 114.8ms |      108 → 75 |
| Unknown          | removed |   -4.19ms |   0.1% → 0.0% |       4.2ms → 0ms |         3 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |           % |             Time | Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | ---------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| +435.4% | +94.59ms | 0.4% → 2.1% | 21.7ms → 116.3ms | 17 → 12 | `NodeObject`                      | `node_modules/typescript/lib/typescript.js:146197:14 → 148243:14` |
|  +60.2% | +24.80ms | 0.7% → 1.2% |  41.2ms → 66.0ms | 32 → 48 | `inferFromTypes`                  | `node_modules/typescript/lib/typescript.js:69901:28 → 71184:28`   |
| +374.0% | +23.94ms | 0.1% → 0.5% |   6.4ms → 30.3ms |  5 → 10 | `set`                             | `<unknown>`                                                       |
|     new | +20.45ms | 0.0% → 0.4% |     0ms → 20.4ms |   0 → 9 | `TypeObject`                      | `node_modules/typescript/lib/typescript.js:148564:14`             |
|  +78.8% | +18.67ms | 0.4% → 0.7% |  23.7ms → 42.4ms | 19 → 33 | `getReducedType`                  | `node_modules/typescript/lib/typescript.js:60678:26 → 61933:26`   |
|  +96.4% | +16.92ms | 0.3% → 0.6% |  17.6ms → 34.5ms | 14 → 26 | `shouldNormalizeIntersection`     | `node_modules/typescript/lib/typescript.js:66169:39 → 67429:39`   |
| +378.0% | +16.23ms | 0.1% → 0.4% |   4.3ms → 20.5ms |  3 → 16 | `isTupleType`                     | `node_modules/typescript/lib/typescript.js:69093:23 → 70353:23`   |
|  +48.9% | +16.21ms | 0.6% → 0.9% |  33.1ms → 49.3ms | 25 → 34 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js:66148:29 → 67408:29`   |
|  +89.7% | +15.15ms | 0.3% → 0.6% |  16.9ms → 32.0ms | 12 → 24 | `getTypeFactsWorker`              | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`   |
| +114.1% | +14.81ms | 0.2% → 0.5% |  13.0ms → 27.8ms | 10 → 14 | `SymbolObject`                    | `node_modules/typescript/lib/typescript.js:146406:14 → 148449:14` |
|  +56.5% | +12.68ms | 0.4% → 0.6% |  22.4ms → 35.1ms | 17 → 27 | `getReducedApparentType`          | `node_modules/typescript/lib/typescript.js:60495:34 → 61750:34`   |
|  +32.1% | +11.68ms | 0.7% → 0.8% |  36.4ms → 48.1ms | 28 → 37 | `scan`                            | `node_modules/typescript/lib/typescript.js:12765:16 → 12895:16`   |
| +128.5% | +11.38ms | 0.2% → 0.4% |   8.9ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `node_modules/typescript/lib/typescript.js:13476:37 → 14434:37`   |
|  +58.7% | +10.97ms | 0.3% → 0.5% |  18.7ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `node_modules/typescript/lib/typescript.js:50252:26 → 51493:26`   |
|  +61.6% | +10.77ms | 0.3% → 0.5% |  17.5ms → 28.3ms | 14 → 22 | `declareSymbol`                   | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`   |
| +280.4% | +10.01ms | 0.1% → 0.2% |   3.6ms → 13.6ms |  3 → 10 | `createSymbolTable`               | `node_modules/typescript/lib/typescript.js:15264:27 → 16239:27`   |
| +115.6% |  +9.63ms | 0.2% → 0.3% |   8.3ms → 18.0ms |  6 → 13 | `getUnionType`                    | `node_modules/typescript/lib/typescript.js:62840:24 → 64095:24`   |
|  +37.9% |  +9.20ms | 0.4% → 0.6% |  24.3ms → 33.5ms | 19 → 24 | `findAncestor`                    | `node_modules/typescript/lib/typescript.js:13949:22 → 14924:22`   |
|  +48.3% |  +9.12ms | 0.3% → 0.5% |  18.9ms → 28.0ms | 14 → 21 | `resolveStructuredTypeMembers`    | `node_modules/typescript/lib/typescript.js:60090:40 → 61345:40`   |
| +107.9% |  +8.82ms | 0.1% → 0.3% |   8.2ms → 17.0ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js:63894:43 → 65149:43`   |

##### Third-party

|  Change |    Delta |           % |             Time | Samples | Function                          | Location                                                          |
| ------: | -------: | ----------: | ---------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| +435.4% | +94.59ms | 0.4% → 2.1% | 21.7ms → 116.3ms | 17 → 12 | `NodeObject`                      | `node_modules/typescript/lib/typescript.js:146197:14 → 148243:14` |
|  +60.2% | +24.80ms | 0.7% → 1.2% |  41.2ms → 66.0ms | 32 → 48 | `inferFromTypes`                  | `node_modules/typescript/lib/typescript.js:69901:28 → 71184:28`   |
|     new | +20.45ms | 0.0% → 0.4% |     0ms → 20.4ms |   0 → 9 | `TypeObject`                      | `node_modules/typescript/lib/typescript.js:148564:14`             |
|  +78.8% | +18.67ms | 0.4% → 0.7% |  23.7ms → 42.4ms | 19 → 33 | `getReducedType`                  | `node_modules/typescript/lib/typescript.js:60678:26 → 61933:26`   |
|  +96.4% | +16.92ms | 0.3% → 0.6% |  17.6ms → 34.5ms | 14 → 26 | `shouldNormalizeIntersection`     | `node_modules/typescript/lib/typescript.js:66169:39 → 67429:39`   |
| +378.0% | +16.23ms | 0.1% → 0.4% |   4.3ms → 20.5ms |  3 → 16 | `isTupleType`                     | `node_modules/typescript/lib/typescript.js:69093:23 → 70353:23`   |
|  +48.9% | +16.21ms | 0.6% → 0.9% |  33.1ms → 49.3ms | 25 → 34 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js:66148:29 → 67408:29`   |
|  +89.7% | +15.15ms | 0.3% → 0.6% |  16.9ms → 32.0ms | 12 → 24 | `getTypeFactsWorker`              | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`   |
| +114.1% | +14.81ms | 0.2% → 0.5% |  13.0ms → 27.8ms | 10 → 14 | `SymbolObject`                    | `node_modules/typescript/lib/typescript.js:146406:14 → 148449:14` |
|  +56.5% | +12.68ms | 0.4% → 0.6% |  22.4ms → 35.1ms | 17 → 27 | `getReducedApparentType`          | `node_modules/typescript/lib/typescript.js:60495:34 → 61750:34`   |
|  +32.1% | +11.68ms | 0.7% → 0.8% |  36.4ms → 48.1ms | 28 → 37 | `scan`                            | `node_modules/typescript/lib/typescript.js:12765:16 → 12895:16`   |
| +128.5% | +11.38ms | 0.2% → 0.4% |   8.9ms → 20.2ms |  7 → 15 | `scanJSDocCommentTextToken`       | `node_modules/typescript/lib/typescript.js:13476:37 → 14434:37`   |
|  +58.7% | +10.97ms | 0.3% → 0.5% |  18.7ms → 29.7ms | 15 → 22 | `getSymbolLinks`                  | `node_modules/typescript/lib/typescript.js:50252:26 → 51493:26`   |
|  +61.6% | +10.77ms | 0.3% → 0.5% |  17.5ms → 28.3ms | 14 → 22 | `declareSymbol`                   | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`   |
| +280.4% | +10.01ms | 0.1% → 0.2% |   3.6ms → 13.6ms |  3 → 10 | `createSymbolTable`               | `node_modules/typescript/lib/typescript.js:15264:27 → 16239:27`   |
| +115.6% |  +9.63ms | 0.2% → 0.3% |   8.3ms → 18.0ms |  6 → 13 | `getUnionType`                    | `node_modules/typescript/lib/typescript.js:62840:24 → 64095:24`   |
|  +37.9% |  +9.20ms | 0.4% → 0.6% |  24.3ms → 33.5ms | 19 → 24 | `findAncestor`                    | `node_modules/typescript/lib/typescript.js:13949:22 → 14924:22`   |
|  +48.3% |  +9.12ms | 0.3% → 0.5% |  18.9ms → 28.0ms | 14 → 21 | `resolveStructuredTypeMembers`    | `node_modules/typescript/lib/typescript.js:60090:40 → 61345:40`   |
| +107.9% |  +8.82ms | 0.1% → 0.3% |   8.2ms → 17.0ms |  6 → 13 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js:63894:43 → 65149:43`   |
|  +55.2% |  +8.73ms | 0.3% → 0.4% |  15.8ms → 24.5ms | 12 → 19 | `createNodeArray`                 | `node_modules/typescript/lib/typescript.js:23794:27 → 24844:27`   |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                     | Location    |
| ------: | ------: | -----------: | --------------: | ------: | -------------------------------------------- | ----------- |
|  +18.0% | +5.65ms |  0.6% → 0.7% | 31.4ms → 37.1ms | 21 → 27 | `readFileSync`                               | `<unknown>` |
|  +17.9% | +4.09ms |  0.4% → 0.5% | 22.9ms → 27.0ms | 17 → 21 | `statSync`                                   | `<unknown>` |
|  +48.5% | +3.84ms |  0.1% → 0.2% |  7.9ms → 11.8ms |   6 → 9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`   | `<unknown>` |
|  +97.5% | +3.56ms |         0.1% |   3.6ms → 7.2ms |   3 → 6 | `SymbolLinks`                                | `<unknown>` |
|     new | +2.74ms | 0.0% → <0.1% |     0ms → 2.7ms |   0 → 1 | `/^\.\.?($\|[\\/])/`                         | `<unknown>` |
|  +69.3% | +1.70ms | <0.1% → 0.1% |   2.5ms → 4.1ms |   2 → 3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`        | `<unknown>` |
| +120.9% | +1.23ms |        <0.1% |   1.0ms → 2.3ms |   1 → 2 | `parseModule`                                | `<unknown>` |
|     new | +1.06ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `generatorResume`                            | `<unknown>` |
|     new | +1.06ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `/^\/\/\/?\s*@(ts-expect-error\|ts-ignore)/` | `<unknown>` |
|  +36.1% | +1.00ms |         0.1% |   2.8ms → 3.8ms |   2 → 3 | `realpathNativeSync`                         | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function      | Location           |
| ------: | -------: | -----------: | --------------: | ------: | ------------- | ------------------ |
| +374.0% | +23.94ms |  0.1% → 0.5% |  6.4ms → 30.3ms |  5 → 10 | `set`         | `<unknown>`        |
| +206.0% |  +5.18ms | <0.1% → 0.1% |   2.5ms → 7.7ms |   2 → 6 | `next`        | `<unknown>`        |
|     new |  +3.41ms |  0.0% → 0.1% |     0ms → 3.4ms |   0 → 3 | `map`         | `<unknown>`        |
| +124.0% |  +3.04ms | <0.1% → 0.1% |   2.4ms → 5.5ms |   2 → 4 | `unshift`     | `<unknown>`        |
|     new |  +2.56ms | 0.0% → <0.1% |     0ms → 2.6ms |   0 → 2 | `has`         | `<unknown>`        |
|     new |  +2.42ms | 0.0% → <0.1% |     0ms → 2.4ms |   0 → 1 | `Set`         | `<unknown>`        |
|  +16.1% |  +1.70ms |         0.2% | 10.5ms → 12.2ms |   8 → 9 | `get`         | `<unknown>`        |
|  +36.4% |  +1.02ms |         0.1% |   2.8ms → 3.8ms |   2 → 3 | `filter`      | `<unknown>`        |
|  +79.9% |  +0.99ms |        <0.1% |   1.2ms → 2.2ms |   1 → 2 | `some`        | `<unknown>`        |
|  +66.5% |  +0.93ms |        <0.1% |   1.4ms → 2.3ms |   1 → 2 | `push`        | `<unknown>`        |
|  +33.8% |  +0.36ms |        <0.1% |   1.1ms → 1.4ms |       1 | `(anonymous)` | `node:crypto:1:11` |
|  +18.4% |  +0.23ms |        <0.1% |   1.3ms → 1.5ms |       1 | `startsWith`  | `<unknown>`        |
|  +13.7% |  +0.17ms |        <0.1% |   1.3ms → 1.4ms |       1 | `values`      | `<unknown>`        |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |              Time |   Samples | Function                       | Location                                                        |
| ------: | --------: | -----------: | ----------------: | --------: | ------------------------------ | --------------------------------------------------------------- |
|  -97.9% | -106.63ms | 2.0% → <0.1% |   108.9ms → 2.3ms |     6 → 2 | `withJSDoc`                    | `node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
|  -62.1% |  -36.54ms |  1.1% → 0.4% |   58.8ms → 22.3ms |   41 → 13 | `getFlowTypeOfReference`       | `node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
|  -15.9% |  -28.46ms |  3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`               | `node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
|  -49.8% |  -24.73ms |  0.9% → 0.4% |   49.6ms → 24.9ms |   37 → 20 | `getApparentType`              | `node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
|  -75.6% |  -22.02ms |  0.5% → 0.1% |    29.1ms → 7.1ms |    22 → 5 | `signaturesRelatedTo`          | `node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
|  -57.5% |  -21.35ms |  0.7% → 0.3% |   37.1ms → 15.8ms |   25 → 12 | `getAliasId`                   | `node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|   -7.4% |  -18.56ms |  4.5% → 4.1% | 250.6ms → 232.0ms | 177 → 176 | `checkTypeRelatedTo`           | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
|  -75.2% |  -14.33ms |  0.3% → 0.1% |    19.1ms → 4.7ms |    15 → 4 | `instantiateSignature`         | `node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
|  -65.9% |  -11.70ms |  0.3% → 0.1% |    17.8ms → 6.1ms |    13 → 5 | `slice`                        | `<unknown>`                                                     |
|  -22.2% |  -10.82ms |  0.9% → 0.7% |   48.6ms → 37.8ms |   37 → 29 | `couldContainTypeVariables`    | `node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
|  -49.2% |  -10.71ms |  0.4% → 0.2% |   21.7ms → 11.0ms |    17 → 9 | `forEach`                      | `<unknown>`                                                     |
|  -41.5% |  -10.64ms |  0.5% → 0.3% |   25.7ms → 15.0ms |   20 → 12 | `getMappedType`                | `node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| removed |   -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                        | `<unknown>`                                                     |
|  -65.5% |   -9.40ms |  0.3% → 0.1% |    14.3ms → 4.9ms |    11 → 4 | `join`                         | `<unknown>`                                                     |
|  -53.6% |   -9.29ms |  0.3% → 0.1% |    17.3ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType` | `node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
|  -15.9% |   -9.23ms |  1.0% → 0.9% |   58.1ms → 48.9ms |   46 → 38 | `getRelationKey`               | `node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
|  -80.2% |   -9.17ms | 0.2% → <0.1% |    11.4ms → 2.3ms |     9 → 2 | `isBinaryExpression`           | `node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
|  -68.7% |   -7.96ms |  0.2% → 0.1% |    11.6ms → 3.6ms |     9 → 3 | `getSymbolFlags`               | `node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
|  -46.6% |   -7.74ms |  0.3% → 0.2% |    16.6ms → 8.9ms |    13 → 7 | `getTypeOfSymbol`              | `node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |
|   -2.8% |   -7.57ms |  4.9% → 4.7% | 272.5ms → 264.9ms | 213 → 205 | `anonymous`                    | `<unknown>`                                                     |

##### Third-party

| Change |     Delta |            % |              Time |   Samples | Function                                       | Location                                                        |
| -----: | --------: | -----------: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------------------------- |
| -97.9% | -106.63ms | 2.0% → <0.1% |   108.9ms → 2.3ms |     6 → 2 | `withJSDoc`                                    | `node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
| -62.1% |  -36.54ms |  1.1% → 0.4% |   58.8ms → 22.3ms |   41 → 13 | `getFlowTypeOfReference`                       | `node_modules/typescript/lib/typescript.js:71634:34 → 72917:34` |
| -15.9% |  -28.46ms |  3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`                               | `node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
| -49.8% |  -24.73ms |  0.9% → 0.4% |   49.6ms → 24.9ms |   37 → 20 | `getApparentType`                              | `node_modules/typescript/lib/typescript.js:60490:27 → 61745:27` |
| -75.6% |  -22.02ms |  0.5% → 0.1% |    29.1ms → 7.1ms |    22 → 5 | `signaturesRelatedTo`                          | `node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |
| -57.5% |  -21.35ms |  0.7% → 0.3% |   37.1ms → 15.8ms |   25 → 12 | `getAliasId`                                   | `node_modules/typescript/lib/typescript.js:61521:22 → 62776:22` |
|  -7.4% |  -18.56ms |  4.5% → 4.1% | 250.6ms → 232.0ms | 177 → 176 | `checkTypeRelatedTo`                           | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -75.2% |  -14.33ms |  0.3% → 0.1% |    19.1ms → 4.7ms |    15 → 4 | `instantiateSignature`                         | `node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
| -22.2% |  -10.82ms |  0.9% → 0.7% |   48.6ms → 37.8ms |   37 → 29 | `couldContainTypeVariables`                    | `node_modules/typescript/lib/typescript.js:69600:37 → 70860:37` |
| -41.5% |  -10.64ms |  0.5% → 0.3% |   25.7ms → 15.0ms |   20 → 12 | `getMappedType`                                | `node_modules/typescript/lib/typescript.js:64652:25 → 65907:25` |
| -53.6% |   -9.29ms |  0.3% → 0.1% |    17.3ms → 8.1ms |    13 → 6 | `getConditionalFlowTypeOfType`                 | `node_modules/typescript/lib/typescript.js:61824:40 → 63079:40` |
| -15.9% |   -9.23ms |  1.0% → 0.9% |   58.1ms → 48.9ms |   46 → 38 | `getRelationKey`                               | `node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| -80.2% |   -9.17ms | 0.2% → <0.1% |    11.4ms → 2.3ms |     9 → 2 | `isBinaryExpression`                           | `node_modules/typescript/lib/typescript.js:29192:28 → 30242:28` |
| -68.7% |   -7.96ms |  0.2% → 0.1% |    11.6ms → 3.6ms |     9 → 3 | `getSymbolFlags`                               | `node_modules/typescript/lib/typescript.js:51447:26 → 52688:26` |
| -46.6% |   -7.74ms |  0.3% → 0.2% |    16.6ms → 8.9ms |    13 → 7 | `getTypeOfSymbol`                              | `node_modules/typescript/lib/typescript.js:58408:27 → 59663:27` |
| -87.7% |   -7.49ms | 0.2% → <0.1% |     8.5ms → 1.1ms |     7 → 1 | `length`                                       | `node_modules/typescript/lib/typescript.js:2362:16 → 2375:16`   |
| -44.9% |   -7.25ms |  0.3% → 0.2% |    16.2ms → 8.9ms |    12 → 7 | `isNamedDeclaration`                           | `node_modules/typescript/lib/typescript.js:14052:28 → 15027:28` |
| -22.0% |   -7.12ms |  0.6% → 0.4% |   32.3ms → 25.2ms |   25 → 14 | `setStructuredTypeMembers`                     | `node_modules/typescript/lib/typescript.js:52502:36 → 53743:36` |
| -57.0% |   -7.03ms |  0.2% → 0.1% |    12.3ms → 5.3ms |    10 → 4 | `getSignaturesOfStructuredType`                | `node_modules/typescript/lib/typescript.js:60782:41 → 62037:41` |
| -84.8% |   -6.90ms | 0.1% → <0.1% |     8.1ms → 1.2ms |     6 → 1 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js:75918:56 → 77201:56` |

##### Native

|  Change |   Delta |            % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | ------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|   -2.8% | -7.57ms |  4.9% → 4.7% | 272.5ms → 264.9ms | 213 → 205 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| removed | -4.96ms |  0.1% → 0.0% |       5.0ms → 0ms |     1 → 0 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|   -5.0% | -1.61ms |  0.6% → 0.5% |   32.0ms → 30.4ms |   26 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed | -1.47ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed | -1.46ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `writer`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| removed | -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  -17.4% | -1.33ms |         0.1% |     7.6ms → 6.3ms |     6 → 5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| removed | -1.09ms | <0.1% → 0.0% |       1.1ms → 0ms |     1 → 0 | `max`                                                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| removed | -1.04ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|   -9.2% | -0.12ms |        <0.1% |     1.4ms → 1.2ms |         1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function      | Location    |
| ------: | -------: | -----------: | --------------: | ------: | ------------- | ----------- |
|  -65.9% | -11.70ms |  0.3% → 0.1% |  17.8ms → 6.1ms |  13 → 5 | `slice`       | `<unknown>` |
|  -49.2% | -10.71ms |  0.4% → 0.2% | 21.7ms → 11.0ms |  17 → 9 | `forEach`     | `<unknown>` |
|  -65.5% |  -9.40ms |  0.3% → 0.1% |  14.3ms → 4.9ms |  11 → 4 | `join`        | `<unknown>` |
| removed |  -3.65ms |  0.1% → 0.0% |     3.6ms → 0ms |   3 → 0 | `trimEnd`     | `<unknown>` |
|  -72.0% |  -3.27ms | 0.1% → <0.1% |   4.5ms → 1.3ms |   4 → 1 | `lastIndexOf` | `<unknown>` |
|  -26.0% |  -3.02ms |         0.2% |  11.6ms → 8.6ms |   7 → 6 | `toString`    | `<unknown>` |
| removed |  -2.81ms |  0.1% → 0.0% |     2.8ms → 0ms |   2 → 0 | `trimStart`   | `<unknown>` |
|  -71.6% |  -2.73ms | 0.1% → <0.1% |   3.8ms → 1.1ms |   3 → 1 | `find`        | `<unknown>` |
| removed |  -2.70ms | <0.1% → 0.0% |     2.7ms → 0ms |   2 → 0 | `resolve`     | `<unknown>` |
| removed |  -2.61ms | <0.1% → 0.0% |     2.6ms → 0ms |   2 → 0 | `replace`     | `<unknown>` |
| removed |  -2.46ms | <0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `indexOf`     | `<unknown>` |
| removed |  -2.35ms | <0.1% → 0.0% |     2.4ms → 0ms |   2 → 0 | `substring`   | `<unknown>` |
|  -62.4% |  -2.13ms | 0.1% → <0.1% |   3.4ms → 1.3ms |   3 → 1 | `Map`         | `<unknown>` |
| removed |  -1.41ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `includes`    | `<unknown>` |
| removed |  -1.30ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `charCodeAt`  | `<unknown>` |
| removed |  -1.29ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `splice`      | `<unknown>` |
| removed |  -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `RegExp`      | `<unknown>` |
| removed |  -1.22ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `exec`        | `<unknown>` |
|  -52.1% |  -1.17ms |        <0.1% |   2.2ms → 1.1ms |   2 → 1 | `add`         | `<unknown>` |
| removed |  -1.12ms | <0.1% → 0.0% |     1.1ms → 0ms |   1 → 0 | `delete`      | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  +3.6% | +174.86ms | 88.7% → 89.9% | 4.91s → 5.08s | 3,657 → 3,757 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +2.7% | +149.43ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,187 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                           |
|  +2.7% | +149.27ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,109 → 4,186 | `processTicksAndRejections`                | `<unknown>`                                                       |
|  +2.7% | +148.18ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,186 | `evaluate`                                 | `<unknown>`                                                       |
|  +2.7% | +148.18ms | 99.2% → 99.8% | 5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation`                         | `<unknown>`                                                       |
|  +3.4% | +145.57ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.6% | +144.63ms | 72.0% → 73.1% | 3.98s → 4.13s | 3,031 → 3,110 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.3% | +144.02ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.3% | +143.78ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,286 → 3,363 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.6% | +143.52ms | 72.0% → 73.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +2.6% | +141.87ms | 99.4% → 99.8% | 5.50s → 5.64s | 4,112 → 4,186 | `loadAndEvaluateModule`                    | `<unknown>`                                                       |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |

##### Third-party

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  +3.6% | +174.86ms | 88.7% → 89.9% | 4.91s → 5.08s | 3,657 → 3,757 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  +3.4% | +145.57ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,285 → 3,363 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  +3.4% | +145.40ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,284 → 3,362 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  +3.6% | +144.63ms | 72.0% → 73.1% | 3.98s → 4.13s | 3,031 → 3,110 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  +3.3% | +144.02ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,285 → 3,362 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  +3.3% | +143.78ms | 77.9% → 78.8% | 4.31s → 4.46s | 3,286 → 3,363 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  +3.6% | +143.52ms | 72.0% → 73.0% | 3.98s → 4.13s | 3,031 → 3,109 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  +3.3% | +142.58ms | 77.9% → 78.8% | 4.31s → 4.45s | 3,286 → 3,362 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |
|  +3.4% | +138.40ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,072 → 3,145 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:87336:47 → 88649:47`   |
|  +3.4% | +135.82ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:87343:32 → 88656:32`   |
|  +3.4% | +135.82ms | 73.0% → 73.9% | 4.04s → 4.17s | 3,074 → 3,145 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  +8.3% | +134.74ms | 29.3% → 31.0% | 1.62s → 1.75s | 1,230 → 1,327 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js:66101:27 → 67361:27`   |
|  +4.8% | +128.11ms | 48.2% → 49.5% | 2.67s → 2.80s | 2,038 → 2,118 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:78289:31 → 79584:31`   |

##### Native

| Change |     Delta |             % |            Time |       Samples | Function                                     | Location    |
| -----: | --------: | ------------: | --------------: | ------------: | -------------------------------------------- | ----------- |
|  +2.7% | +149.27ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,109 → 4,186 | `processTicksAndRejections`                  | `<unknown>` |
|  +2.7% | +148.18ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,110 → 4,186 | `evaluate`                                   | `<unknown>` |
|  +2.7% | +148.18ms | 99.2% → 99.8% |   5.49s → 5.64s | 4,110 → 4,186 | `moduleEvaluation`                           | `<unknown>` |
|  +2.6% | +141.87ms | 99.4% → 99.8% |   5.50s → 5.64s | 4,112 → 4,186 | `loadAndEvaluateModule`                      | `<unknown>` |
| +18.0% |   +5.65ms |   0.6% → 0.7% | 31.4ms → 37.1ms |       21 → 27 | `readFileSync`                               | `<unknown>` |
| +17.9% |   +4.09ms |   0.4% → 0.5% | 22.9ms → 27.0ms |       17 → 21 | `statSync`                                   | `<unknown>` |
|  +5.8% |   +3.93ms |   1.2% → 1.3% | 67.6ms → 71.5ms |       51 → 56 | `generatorResume`                            | `<unknown>` |
| +48.5% |   +3.84ms |   0.1% → 0.2% |  7.9ms → 11.8ms |         6 → 9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`   | `<unknown>` |
| +97.5% |   +3.56ms |          0.1% |   3.6ms → 7.2ms |         3 → 6 | `SymbolLinks`                                | `<unknown>` |
|    new |   +2.74ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 1 | `/^\.\.?($\|[\\/])/`                         | `<unknown>` |
|    new |   +2.65ms |  0.0% → <0.1% |     0ms → 2.7ms |         0 → 2 | `bound realpathNativeSync`                   | `<unknown>` |
| +69.3% |   +1.70ms |  <0.1% → 0.1% |   2.5ms → 4.1ms |         2 → 3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`        | `<unknown>` |
|    new |   +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `return`                                     | `<unknown>` |
|    new |   +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `/^\/\/\/?\s*@(ts-expect-error\|ts-ignore)/` | `<unknown>` |
| +36.1% |   +1.00ms |          0.1% |   2.8ms → 3.8ms |         2 → 3 | `realpathNativeSync`                         | `<unknown>` |

##### Standard library

|  Change |    Delta |             % |            Time |       Samples | Function      | Location                          |
| ------: | -------: | ------------: | --------------: | ------------: | ------------- | --------------------------------- |
|   +4.0% | +90.83ms | 41.1% → 41.8% |   2.27s → 2.36s | 1,734 → 1,777 | `forEach`     | `<unknown>`                       |
| +374.0% | +23.94ms |   0.1% → 0.5% |  6.4ms → 30.3ms |        5 → 10 | `set`         | `<unknown>`                       |
|  +33.1% | +10.84ms |   0.6% → 0.8% | 32.8ms → 43.6ms |       25 → 34 | `next`        | `<unknown>`                       |
| +124.0% |  +3.04ms |  <0.1% → 0.1% |   2.4ms → 5.5ms |         2 → 4 | `unshift`     | `<unknown>`                       |
|     new |  +2.56ms |  0.0% → <0.1% |     0ms → 2.6ms |         0 → 2 | `has`         | `<unknown>`                       |
|     new |  +2.42ms |  0.0% → <0.1% |     0ms → 2.4ms |         0 → 1 | `Set`         | `<unknown>`                       |
|  +58.0% |  +2.24ms |          0.1% |   3.9ms → 6.1ms |         3 → 5 | `filter`      | `<unknown>`                       |
|  +16.1% |  +1.70ms |          0.2% | 10.5ms → 12.2ms |         8 → 9 | `get`         | `<unknown>`                       |
|     new |  +1.06ms |  0.0% → <0.1% |     0ms → 1.1ms |         0 → 1 | `every`       | `<unknown>`                       |
|  +66.5% |  +0.93ms |         <0.1% |   1.4ms → 2.3ms |         1 → 2 | `push`        | `<unknown>`                       |
|   +9.6% |  +0.50ms |          0.1% |   5.2ms → 5.7ms |         4 → 5 | `map`         | `<unknown>`                       |
|  +33.8% |  +0.36ms |         <0.1% |   1.1ms → 1.4ms |             1 | `(anonymous)` | `node:crypto:1:11`                |
|  +18.4% |  +0.23ms |         <0.1% |   1.3ms → 1.5ms |             1 | `startsWith`  | `<unknown>`                       |
|  +13.7% |  +0.17ms |         <0.1% |   1.3ms → 1.4ms |             1 | `values`      | `<unknown>`                       |
|  +15.9% |  +0.17ms |         <0.1% |   1.1ms → 1.2ms |             1 | `(anonymous)` | `internal:streams/duplex:1:11`    |
|   +4.0% |  +0.15ms |          0.1% |   3.7ms → 3.8ms |             3 | `sort`        | `<unknown>`                       |
|   +0.5% |  +0.01ms |         <0.1% |           2.4ms |             2 | `(anonymous)` | `internal:streams/compose:1:11`   |
|   +0.5% |  +0.01ms |         <0.1% |           2.4ms |             2 | `(anonymous)` | `internal:streams/operators:1:11` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                         | Location                                                        |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------- | --------------------------------------------------------------- |
| -28.9% | -97.99ms |   6.1% → 4.3% | 338.9ms → 240.9ms | 183 → 180 | `parseObjectTypeMembers`         | `node_modules/typescript/lib/typescript.js:33580:34 → 34635:34` |
| -29.5% | -94.96ms |   5.8% → 4.0% | 321.8ms → 226.8ms | 171 → 169 | `parseTypeMember`                | `node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |
| -30.8% | -94.70ms |   5.6% → 3.8% | 307.9ms → 213.2ms | 160 → 158 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |
| -44.0% | -92.19ms |   3.8% → 2.1% | 209.7ms → 117.5ms |   84 → 89 | `withJSDoc`                      | `node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
|  -9.2% | -52.65ms |  10.3% → 9.2% | 572.9ms → 520.3ms | 427 → 389 | `checkTypeAssignableTo`          | `node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |
|  -8.3% | -51.12ms |  11.1% → 9.9% | 612.3ms → 561.2ms | 459 → 423 | `checkTypeAliasDeclaration`      | `node_modules/typescript/lib/typescript.js:85990:37 → 87285:37` |
| -40.4% | -39.43ms |   1.8% → 1.0% |   97.6ms → 58.2ms |   70 → 44 | `onLeft`                         | `node_modules/typescript/lib/typescript.js:80503:20 → 81798:20` |
| -40.4% | -39.43ms |   1.8% → 1.0% |   97.6ms → 58.2ms |   70 → 44 | `left`                           | `node_modules/typescript/lib/typescript.js:30385:16 → 31437:16` |
| -24.2% | -38.90ms |   2.9% → 2.2% | 160.7ms → 121.8ms |  112 → 93 | `typeRelatedToSomeType`          | `node_modules/typescript/lib/typescript.js:66827:35 → 68087:35` |
| -22.5% | -37.74ms |   3.0% → 2.3% | 167.9ms → 130.1ms | 124 → 100 | `maybeCheckExpression`           | `node_modules/typescript/lib/typescript.js:80565:34 → 81860:34` |
|  -9.0% | -37.36ms |   7.5% → 6.7% | 415.3ms → 377.9ms | 309 → 289 | `unionOrIntersectionRelatedTo`   | `node_modules/typescript/lib/typescript.js:66757:42 → 68017:42` |
|  -5.1% | -35.76ms | 12.7% → 11.8% | 705.3ms → 669.6ms | 538 → 505 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:82238:27 → 83533:27` |
| -16.7% | -34.24ms |   3.7% → 3.0% | 204.8ms → 170.5ms | 151 → 131 | `trampoline`                     | `node_modules/typescript/lib/typescript.js:30489:22 → 31541:22` |
| -16.7% | -33.37ms |   3.6% → 2.9% | 199.6ms → 166.2ms | 147 → 128 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:80462:12 → 81757:12` |
|  -4.7% | -33.11ms | 12.7% → 11.9% | 705.5ms → 672.3ms | 538 → 507 | `checkTypeArgumentConstraints`   | `node_modules/typescript/lib/typescript.js:82186:40 → 83481:40` |
| -95.1% | -30.48ms |  0.6% → <0.1% |    32.0ms → 1.6ms |    26 → 1 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:21208:60 → 24187:38` |
| -15.9% | -28.46ms |   3.2% → 2.7% | 179.0ms → 150.6ms | 133 → 114 | `getObjectFlags`                 | `node_modules/typescript/lib/typescript.js:20242:24 → 21225:24` |
| -22.1% | -27.07ms |   2.2% → 1.7% |  122.6ms → 95.5ms |   84 → 74 | `checkMappedType`                | `node_modules/typescript/lib/typescript.js:82354:27 → 83649:27` |
| -84.3% | -26.64ms |   0.6% → 0.1% |    31.6ms → 5.0ms |    25 → 4 | `isEvolvingArrayOperationTarget` | `node_modules/typescript/lib/typescript.js:71351:42 → 72634:42` |
|  -7.0% | -26.62ms |   6.9% → 6.3% | 380.9ms → 354.3ms | 282 → 272 | `checkModuleDeclaration`         | `node_modules/typescript/lib/typescript.js:86242:34 → 87555:34` |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| removed | -10.97ms |  0.2% → 0.0% |      11.0ms → 0ms |     8 → 0 | `requestSatisfyUtil`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `requestFetch`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| removed |  -9.85ms |  0.2% → 0.0% |       9.9ms → 0ms |     7 → 0 | `requestInstantiate`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|   -2.6% |  -8.09ms |  5.6% → 5.3% | 308.2ms → 300.1ms | 241 → 231 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  -47.4% |  -7.50ms |  0.3% → 0.1% |    15.8ms → 8.3ms |    13 → 7 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed |  -2.60ms | <0.1% → 0.0% |       2.6ms → 0ms |     2 → 0 | `requestSatisfy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| removed |  -2.60ms | <0.1% → 0.0% |       2.6ms → 0ms |     2 → 0 | `loadModule`                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>` |
|   -0.6% |  -1.85ms |  5.3% → 5.2% | 295.8ms → 294.0ms | 231 → 226 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|   -0.6% |  -1.85ms |  5.3% → 5.2% | 295.8ms → 294.0ms | 231 → 226 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|   -5.0% |  -1.61ms |  0.6% → 0.5% |   32.0ms → 30.4ms |   26 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed |  -1.47ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| removed |  -1.46ms | <0.1% → 0.0% |       1.5ms → 0ms |     1 → 0 | `writer`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| removed |  -1.40ms | <0.1% → 0.0% |       1.4ms → 0ms |     1 → 0 | `bound onceWrapper`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
| removed |  -1.34ms | <0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createRequire`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  -17.4% |  -1.33ms |         0.1% |     7.6ms → 6.3ms |     6 → 5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| removed |  -1.09ms | <0.1% → 0.0% |       1.1ms → 0ms |     1 → 0 | `max`                                                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| removed |  -1.04ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|   -9.2% |  -0.12ms |        <0.1% |     1.4ms → 1.2ms |         1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

|  Change |    Delta |            % |           Time | Samples | Function         | Location                          |
| ------: | -------: | -----------: | -------------: | ------: | ---------------- | --------------------------------- |
|  -65.9% | -11.70ms |  0.3% → 0.1% | 17.8ms → 6.1ms |  13 → 5 | `slice`          | `<unknown>`                       |
|  -65.5% |  -9.40ms |  0.3% → 0.1% | 14.3ms → 4.9ms |  11 → 4 | `join`           | `<unknown>`                       |
| removed |  -3.65ms |  0.1% → 0.0% |    3.6ms → 0ms |   3 → 0 | `trimEnd`        | `<unknown>`                       |
|  -72.0% |  -3.27ms | 0.1% → <0.1% |  4.5ms → 1.3ms |   4 → 1 | `lastIndexOf`    | `<unknown>`                       |
|  -26.0% |  -3.02ms |         0.2% | 11.6ms → 8.6ms |   7 → 6 | `toString`       | `<unknown>`                       |
| removed |  -2.81ms |  0.1% → 0.0% |    2.8ms → 0ms |   2 → 0 | `trimStart`      | `<unknown>`                       |
| removed |  -2.70ms | <0.1% → 0.0% |    2.7ms → 0ms |   2 → 0 | `resolve`        | `<unknown>`                       |
|  -26.2% |  -2.50ms |  0.2% → 0.1% |  9.5ms → 7.0ms |   7 → 6 | `some`           | `<unknown>`                       |
| removed |  -2.46ms | <0.1% → 0.0% |    2.5ms → 0ms |   2 → 0 | `indexOf`        | `<unknown>`                       |
| removed |  -2.35ms | <0.1% → 0.0% |    2.4ms → 0ms |   2 → 0 | `substring`      | `<unknown>`                       |
|  -65.3% |  -2.30ms | 0.1% → <0.1% |  3.5ms → 1.2ms |   3 → 1 | `(anonymous)`    | `node:fs:1:11`                    |
|  -62.4% |  -2.13ms | 0.1% → <0.1% |  3.4ms → 1.3ms |   3 → 1 | `Map`            | `<unknown>`                       |
|  -25.3% |  -1.60ms |         0.1% |  6.4ms → 4.7ms |   5 → 4 | `find`           | `<unknown>`                       |
| removed |  -1.46ms | <0.1% → 0.0% |    1.5ms → 0ms |   1 → 0 | `WriteStream`    | `internal:fs/streams:196:21`      |
| removed |  -1.41ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `includes`       | `<unknown>`                       |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `removeListener` | `node:events:206:63`              |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `onceWrapper`    | `node:events:192:21`              |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `emit`           | `node:events:78:48`               |
| removed |  -1.40ms | <0.1% → 0.0% |    1.4ms → 0ms |   1 → 0 | `onConstruct`    | `internal:streams/destroy:128:23` |
|  -36.0% |  -1.34ms | 0.1% → <0.1% |  3.7ms → 2.4ms |   3 → 2 | `(anonymous)`    | `internal:stream:1:11`            |
