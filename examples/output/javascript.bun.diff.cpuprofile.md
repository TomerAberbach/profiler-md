# CPU profile diff

Took 5.58s (-1.76ms, ~0%) over 4,237 samples → 4,226 samples (1.3ms per sample).

| Category         | Change |    Delta |             % |              Time |       Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | ------------: |
| Third-party      |  -1.2% | -60.10ms | 92.7% → 91.7% |     5.17s → 5.11s | 3,933 → 3,906 |
| Standard library | +22.7% | +56.40ms |   4.4% → 5.5% | 248.3ms → 304.7ms |     182 → 197 |
| Native           |  +0.5% |  +0.77ms |          2.8% | 158.0ms → 158.8ms |           122 |
| Unknown          |    new |  +1.16ms |  0.0% → <0.1% |       0ms → 1.2ms |         0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|   Change |    Delta |            % |              Time |   Samples | Function                               | Location                                                                                 |
| -------: | -------: | -----------: | ----------------: | --------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| +4221.9% | +62.15ms | <0.1% → 1.1% |    1.5ms → 63.6ms |    1 → 10 | `toString`                             | `<unknown>`                                                                              |
|    +8.2% | +18.22ms |  4.0% → 4.3% | 222.4ms → 240.6ms | 160 → 173 | `checkTypeRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  +479.4% | +17.93ms |  0.1% → 0.4% |    3.7ms → 21.7ms |     3 → 5 | `getNamedMembers`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|   +52.7% | +15.77ms |  0.5% → 0.8% |   29.9ms → 45.7ms |   23 → 34 | `isFreshLiteralType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |
|   +13.3% | +15.42ms |  2.1% → 2.3% | 115.5ms → 131.0ms |  88 → 104 | `getObjectTypeInstantiation`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|   +36.9% | +15.14ms |  0.7% → 1.0% |   41.0ms → 56.2ms |   32 → 43 | `getIdentifierToken`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| +1347.2% | +15.14ms | <0.1% → 0.3% |    1.1ms → 16.3ms |    1 → 12 | `getSymbolId`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46923:25` |
|   +44.8% | +13.37ms |  0.5% → 0.8% |   29.8ms → 43.2ms |   23 → 32 | `createTypeReference`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
|  +316.5% | +12.09ms |  0.1% → 0.3% |    3.8ms → 15.9ms |    3 → 11 | `forEach`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|   +39.8% | +11.18ms |  0.5% → 0.7% |   28.1ms → 39.2ms |   22 → 30 | `instantiateTypeWorker`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|   +50.9% | +11.02ms |  0.4% → 0.6% |   21.6ms → 32.7ms |   17 → 25 | `resolveStructuredTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57178:46` |
|   +61.8% | +10.94ms |  0.3% → 0.5% |   17.7ms → 28.6ms |   14 → 22 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
|   +46.9% | +10.05ms |  0.4% → 0.6% |   21.4ms → 31.5ms |   17 → 24 | `getApparentTypeOfMappedType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45` |
|  +194.4% |  +9.95ms |  0.1% → 0.3% |    5.1ms → 15.1ms |    4 → 10 | `getTypeAtFlowNode`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68534:39` |
|   +54.8% |  +9.35ms |  0.3% → 0.5% |   17.1ms → 26.4ms |   13 → 19 | `getCheckFlags`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19218:27` |
|   +61.5% |  +9.33ms |  0.3% → 0.4% |   15.2ms → 24.5ms |   12 → 18 | `checkIdentifier`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
|   +37.7% |  +8.75ms |  0.4% → 0.6% |   23.2ms → 31.9ms |   18 → 25 | `createUnionOrIntersectionProperty`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|   +44.3% |  +8.55ms |  0.3% → 0.5% |   19.3ms → 27.9ms |   15 → 22 | `setParent`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20787:23` |
|   +26.4% |  +8.47ms |  0.6% → 0.7% |   32.0ms → 40.5ms |   25 → 30 | `some`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |
|   +68.9% |  +8.19ms |  0.2% → 0.4% |   11.9ms → 20.1ms |    9 → 16 | `compareSignaturesRelated`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |

##### Third-party

|   Change |    Delta |            % |              Time |   Samples | Function                               | Location                                                                                  |
| -------: | -------: | -----------: | ----------------: | --------: | -------------------------------------- | ----------------------------------------------------------------------------------------- |
|    +8.2% | +18.22ms |  4.0% → 4.3% | 222.4ms → 240.6ms | 160 → 173 | `checkTypeRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|  +479.4% | +17.93ms |  0.1% → 0.4% |    3.7ms → 21.7ms |     3 → 5 | `getNamedMembers`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33`  |
|   +52.7% | +15.77ms |  0.5% → 0.8% |   29.9ms → 45.7ms |   23 → 34 | `isFreshLiteralType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`  |
|   +13.3% | +15.42ms |  2.1% → 2.3% | 115.5ms → 131.0ms |  88 → 104 | `getObjectTypeInstantiation`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|   +36.9% | +15.14ms |  0.7% → 1.0% |   41.0ms → 56.2ms |   32 → 43 | `getIdentifierToken`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`  |
| +1347.2% | +15.14ms | <0.1% → 0.3% |    1.1ms → 16.3ms |    1 → 12 | `getSymbolId`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46923:25`  |
|   +44.8% | +13.37ms |  0.5% → 0.8% |   29.8ms → 43.2ms |   23 → 32 | `createTypeReference`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`  |
|  +316.5% | +12.09ms |  0.1% → 0.3% |    3.8ms → 15.9ms |    3 → 11 | `forEach`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|   +39.8% | +11.18ms |  0.5% → 0.7% |   28.1ms → 39.2ms |   22 → 30 | `instantiateTypeWorker`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`  |
|   +50.9% | +11.02ms |  0.4% → 0.6% |   21.6ms → 32.7ms |   17 → 25 | `resolveStructuredTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57178:46`  |
|   +61.8% | +10.94ms |  0.3% → 0.5% |   17.7ms → 28.6ms |   14 → 22 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54`  |
|   +46.9% | +10.05ms |  0.4% → 0.6% |   21.4ms → 31.5ms |   17 → 24 | `getApparentTypeOfMappedType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45`  |
|  +194.4% |  +9.95ms |  0.1% → 0.3% |    5.1ms → 15.1ms |    4 → 10 | `getTypeAtFlowNode`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68534:39`  |
|   +54.8% |  +9.35ms |  0.3% → 0.5% |   17.1ms → 26.4ms |   13 → 19 | `getCheckFlags`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19218:27`  |
|   +61.5% |  +9.33ms |  0.3% → 0.4% |   15.2ms → 24.5ms |   12 → 18 | `checkIdentifier`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33`  |
|   +37.7% |  +8.75ms |  0.4% → 0.6% |   23.2ms → 31.9ms |   18 → 25 | `createUnionOrIntersectionProperty`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`  |
|   +44.3% |  +8.55ms |  0.3% → 0.5% |   19.3ms → 27.9ms |   15 → 22 | `setParent`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20787:23`  |
|   +26.4% |  +8.47ms |  0.6% → 0.7% |   32.0ms → 40.5ms |   25 → 30 | `some`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`    |
|   +68.9% |  +8.19ms |  0.2% → 0.4% |   11.9ms → 20.1ms |    9 → 16 | `compareSignaturesRelated`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |
|  +210.1% |  +8.17ms |  0.1% → 0.2% |    3.9ms → 12.1ms |     3 → 9 | `TokenObject`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159643:29` |

##### Standard library

|   Change |    Delta |            % |              Time | Samples | Function         | Location                           |
| -------: | -------: | -----------: | ----------------: | ------: | ---------------- | ---------------------------------- |
| +4221.9% | +62.15ms | <0.1% → 1.1% |    1.5ms → 63.6ms |  1 → 10 | `toString`       | `<unknown>`                        |
|    +5.9% |  +6.89ms |  2.1% → 2.2% | 117.7ms → 124.6ms | 92 → 97 | `concat`         | `<unknown>`                        |
|  +131.9% |  +5.96ms |  0.1% → 0.2% |    4.5ms → 10.5ms |   4 → 8 | `get`            | `<unknown>`                        |
|   +28.9% |  +4.78ms |  0.3% → 0.4% |   16.6ms → 21.3ms | 13 → 17 | `forEach`        | `<unknown>`                        |
|   +94.2% |  +3.81ms |         0.1% |     4.0ms → 7.8ms |   3 → 6 | `Map`            | `<unknown>`                        |
|      new |  +2.38ms | 0.0% → <0.1% |       0ms → 2.4ms |   0 → 2 | `lastIndexOf`    | `<unknown>`                        |
|      new |  +1.44ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `removeListener` | `node:events:206:63`               |
|      new |  +1.43ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `exec`           | `<unknown>`                        |
|      new |  +1.26ms | 0.0% → <0.1% |       0ms → 1.3ms |   0 → 1 | `test`           | `<unknown>`                        |
|    +3.9% |  +1.25ms |         0.6% |   32.1ms → 33.4ms |      25 | `slice`          | `<unknown>`                        |
|      new |  +1.24ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `Writable`       | `internal:streams/writable:172:18` |
|      new |  +1.20ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `delete`         | `<unknown>`                        |
|      new |  +1.20ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `every`          | `<unknown>`                        |
|      new |  +1.09ms | 0.0% → <0.1% |       0ms → 1.1ms |   0 → 1 | `find`           | `<unknown>`                        |
|      new |  +1.07ms | 0.0% → <0.1% |       0ms → 1.1ms |   0 → 1 | `values`         | `<unknown>`                        |
|   +34.3% |  +0.38ms |        <0.1% |     1.1ms → 1.5ms |       1 | `splice`         | `<unknown>`                        |
|   +15.2% |  +0.20ms |        <0.1% |     1.3ms → 1.5ms |       1 | `charCodeAt`     | `<unknown>`                        |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                               | Location    |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------ | ----------- |
|     new | +3.72ms |  0.0% → 0.1% |     0ms → 3.7ms |   0 → 3 | `parseModule`                                          | `<unknown>` |
| +113.0% | +2.93ms | <0.1% → 0.1% |   2.6ms → 5.5ms |   2 → 4 | `stringSplitFast`                                      | `<unknown>` |
|     new | +1.49ms | 0.0% → <0.1% |     0ms → 1.5ms |   0 → 1 | `/(\stypes\s*=\s*)(?:(?:'([^']*)')\|(?:"([^"]*)"))/im` | `<unknown>` |
|     new | +1.48ms | 0.0% → <0.1% |     0ms → 1.5ms |   0 → 1 | `/^#!.*/`                                              | `<unknown>` |
|     new | +1.10ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`            | `<unknown>` |
|   +2.0% | +0.53ms |         0.5% | 26.2ms → 26.8ms |      21 | `statSync`                                             | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                          | Location                                                                                  |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
|  -83.1% | -48.24ms |  1.0% → 0.2% |    58.0ms → 9.8ms |     8 → 7 | `NodeObject`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  -74.7% | -23.09ms |  0.6% → 0.1% |    30.9ms → 7.8ms |    12 → 6 | `set`                             | `<unknown>`                                                                               |
|  -24.0% | -17.70ms |  1.3% → 1.0% |   73.9ms → 56.2ms |   56 → 45 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|  -32.5% | -16.17ms |  0.9% → 0.6% |   49.8ms → 33.6ms |   37 → 20 | `map`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
|  -93.0% | -15.68ms | 0.3% → <0.1% |    16.9ms → 1.2ms |    13 → 1 | `getConditionalFlowTypeOfType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58908:46`  |
|  -61.8% | -14.25ms |  0.4% → 0.2% |    23.0ms → 8.8ms |    17 → 7 | `getConditionalType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36`  |
|  -30.8% | -13.41ms |  0.8% → 0.5% |   43.5ms → 30.1ms |   33 → 24 | `instantiateSymbol`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`  |
|  -13.8% | -11.98ms |  1.6% → 1.3% |   86.8ms → 74.8ms |   66 → 57 | `getTypeListId`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| removed | -11.17ms |  0.2% → 0.0% |      11.2ms → 0ms |     8 → 0 | `isFromInferenceBlockedSource`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66555:46`  |
|  -28.3% | -10.92ms |  0.7% → 0.5% |   38.6ms → 27.7ms |   31 → 21 | `resolveNameHelper`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48322:35`  |
|  -43.9% | -10.64ms |  0.4% → 0.2% |   24.3ms → 13.6ms |   19 → 11 | `isTypeRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
|  -52.9% | -10.03ms |  0.3% → 0.2% |    18.9ms → 8.9ms |    14 → 6 | `addDeclarationToSymbol`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43524:40`  |
|  -47.2% |  -9.70ms |  0.4% → 0.2% |   20.6ms → 10.9ms |    15 → 8 | `getAliasId`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
|   -5.1% |  -9.39ms |  3.3% → 3.1% | 184.7ms → 175.3ms | 142 → 135 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|  -37.6% |  -9.11ms |  0.4% → 0.3% |   24.2ms → 15.1ms |   19 → 12 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|  -14.5% |  -8.96ms |  1.1% → 0.9% |   61.7ms → 52.8ms |   47 → 41 | `getRelationKey`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|  -49.4% |  -8.79ms |  0.3% → 0.2% |    17.8ms → 9.0ms |    14 → 7 | `getTypeOfSymbol`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33`  |
|  -42.4% |  -8.40ms |  0.4% → 0.2% |   19.8ms → 11.4ms |    15 → 9 | `getSignaturesOfStructuredType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57884:47`  |
|  -44.3% |  -8.38ms |  0.3% → 0.2% |   18.9ms → 10.5ms |    14 → 8 | `isSimpleTypeRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62886:39`  |
|  -87.4% |  -8.24ms | 0.2% → <0.1% |     9.4ms → 1.2ms |     7 → 1 | `parseDelimitedList`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32208:36`  |

##### Third-party

|  Change |    Delta |            % |              Time |   Samples | Function                          | Location                                                                                  |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
|  -83.1% | -48.24ms |  1.0% → 0.2% |    58.0ms → 9.8ms |     8 → 7 | `NodeObject`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
|  -24.0% | -17.70ms |  1.3% → 1.0% |   73.9ms → 56.2ms |   56 → 45 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|  -32.5% | -16.17ms |  0.9% → 0.6% |   49.8ms → 33.6ms |   37 → 20 | `map`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
|  -93.0% | -15.68ms | 0.3% → <0.1% |    16.9ms → 1.2ms |    13 → 1 | `getConditionalFlowTypeOfType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58908:46`  |
|  -61.8% | -14.25ms |  0.4% → 0.2% |    23.0ms → 8.8ms |    17 → 7 | `getConditionalType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36`  |
|  -30.8% | -13.41ms |  0.8% → 0.5% |   43.5ms → 30.1ms |   33 → 24 | `instantiateSymbol`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`  |
|  -13.8% | -11.98ms |  1.6% → 1.3% |   86.8ms → 74.8ms |   66 → 57 | `getTypeListId`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| removed | -11.17ms |  0.2% → 0.0% |      11.2ms → 0ms |     8 → 0 | `isFromInferenceBlockedSource`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66555:46`  |
|  -28.3% | -10.92ms |  0.7% → 0.5% |   38.6ms → 27.7ms |   31 → 21 | `resolveNameHelper`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48322:35`  |
|  -43.9% | -10.64ms |  0.4% → 0.2% |   24.3ms → 13.6ms |   19 → 11 | `isTypeRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33`  |
|  -52.9% | -10.03ms |  0.3% → 0.2% |    18.9ms → 8.9ms |    14 → 6 | `addDeclarationToSymbol`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43524:40`  |
|  -47.2% |  -9.70ms |  0.4% → 0.2% |   20.6ms → 10.9ms |    15 → 8 | `getAliasId`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28`  |
|   -5.1% |  -9.39ms |  3.3% → 3.1% | 184.7ms → 175.3ms | 142 → 135 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|  -37.6% |  -9.11ms |  0.4% → 0.3% |   24.2ms → 15.1ms |   19 → 12 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|  -14.5% |  -8.96ms |  1.1% → 0.9% |   61.7ms → 52.8ms |   47 → 41 | `getRelationKey`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|  -49.4% |  -8.79ms |  0.3% → 0.2% |    17.8ms → 9.0ms |    14 → 7 | `getTypeOfSymbol`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33`  |
|  -42.4% |  -8.40ms |  0.4% → 0.2% |   19.8ms → 11.4ms |    15 → 9 | `getSignaturesOfStructuredType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57884:47`  |
|  -44.3% |  -8.38ms |  0.3% → 0.2% |   18.9ms → 10.5ms |    14 → 8 | `isSimpleTypeRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62886:39`  |
|  -87.4% |  -8.24ms | 0.2% → <0.1% |     9.4ms → 1.2ms |     7 → 1 | `parseDelimitedList`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32208:36`  |
|  -76.0% |  -8.06ms | 0.2% → <0.1% |    10.6ms → 2.5ms |     8 → 2 | `speculationHelper`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31200:35`  |

##### Standard library

|  Change |    Delta |            % |            Time | Samples | Function     | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | ------------ | --------------------------- |
|  -74.7% | -23.09ms |  0.6% → 0.1% |  30.9ms → 7.8ms |  12 → 6 | `set`        | `<unknown>`                 |
|  -66.2% |  -2.82ms | 0.1% → <0.1% |   4.3ms → 1.4ms |   3 → 1 | `push`       | `<unknown>`                 |
|  -18.0% |  -2.24ms |         0.2% | 12.4ms → 10.2ms |  10 → 8 | `join`       | `<unknown>`                 |
|  -32.0% |  -1.99ms |         0.1% |   6.2ms → 4.2ms |   5 → 3 | `next`       | `<unknown>`                 |
|  -60.0% |  -1.62ms |        <0.1% |   2.7ms → 1.1ms |   2 → 1 | `some`       | `<unknown>`                 |
| removed |  -1.58ms | <0.1% → 0.0% |     1.6ms → 0ms |   1 → 0 | `resolve`    | `<unknown>`                 |
| removed |  -1.41ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `ReadStream` | `internal:fs/streams:52:20` |
| removed |  -1.38ms | <0.1% → 0.0% |     1.4ms → 0ms |   1 → 0 | `String`     | `<unknown>`                 |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `replace`    | `<unknown>`                 |
| removed |  -1.23ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `add`        | `<unknown>`                 |
| removed |  -1.17ms | <0.1% → 0.0% |     1.2ms → 0ms |   1 → 0 | `trimStart`  | `<unknown>`                 |
|  -47.5% |  -1.06ms |        <0.1% |   2.2ms → 1.2ms |   2 → 1 | `unshift`    | `<unknown>`                 |
|  -19.0% |  -0.27ms |        <0.1% |   1.4ms → 1.2ms |       1 | `assign`     | `<unknown>`                 |
|  -13.4% |  -0.17ms |        <0.1% |   1.2ms → 1.1ms |       1 | `map`        | `<unknown>`                 |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                | Location    |
| ------: | ------: | -----------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -13.3% | -3.75ms |  0.5% → 0.4% | 28.1ms → 24.4ms | 21 → 18 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|   -3.4% | -1.96ms |         1.0% | 58.4ms → 56.4ms | 45 → 43 | `anonymous`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|   -5.9% | -1.81ms |         0.5% | 30.5ms → 28.6ms | 24 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed | -1.52ms | <0.1% → 0.0% |     1.5ms → 0ms |   1 → 0 | `ownKeys`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| removed | -1.08ms | <0.1% → 0.0% |     1.1ms → 0ms |   1 → 0 | `require`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
|   -6.3% | -0.17ms |        <0.1% |   2.7ms → 2.5ms |       2 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|   -2.0% | -0.11ms |         0.1% |   5.5ms → 5.4ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|   -5.5% | -0.08ms |        <0.1% |   1.5ms → 1.4ms |       1 | `@lazy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |    Delta |             % |              Time |       Samples | Function                        | Location                                                                                  |
| -------: | -------: | ------------: | ----------------: | ------------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
|    +3.3% | +82.63ms | 44.9% → 46.4% |     2.50s → 2.59s | 1,916 → 1,965 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|    +3.5% | +67.17ms | 34.8% → 36.0% |     1.94s → 2.01s | 1,485 → 1,529 | `checkExpressionCached`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77450:39`  |
|    +3.3% | +66.11ms | 36.2% → 37.4% |     2.02s → 2.08s | 1,561 → 1,583 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|    +9.3% | +62.55ms | 12.0% → 13.1% | 670.5ms → 733.1ms |     505 → 558 | `applyToParameterTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66270:39`  |
|    +3.0% | +62.44ms | 37.7% → 38.8% |     2.10s → 2.16s | 1,614 → 1,645 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|    +6.2% | +62.40ms | 17.9% → 19.0% |   999.9ms → 1.06s |     757 → 813 | `inferTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28`  |
| +4221.9% | +62.15ms |  <0.1% → 1.1% |    1.5ms → 63.6ms |        1 → 10 | `toString`                      | `<unknown>`                                                                               |
|  +197.4% | +58.40ms |   0.5% → 1.6% |   29.6ms → 88.0ms |       22 → 28 | `readFile`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30`   |
|    +5.8% | +58.01ms | 17.8% → 18.9% |   996.3ms → 1.05s |     754 → 807 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
|    +3.2% | +57.83ms | 32.3% → 33.3% |     1.80s → 1.86s | 1,392 → 1,411 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|    +3.1% | +57.74ms | 33.1% → 34.2% |     1.84s → 1.90s | 1,428 → 1,446 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`  |
|    +7.6% | +57.56ms | 13.6% → 14.6% | 757.0ms → 814.6ms |     573 → 620 | `inferFromSignatures`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67275:41`  |
|  +230.5% | +55.07ms |   0.4% → 1.4% |   23.9ms → 79.0ms |       19 → 21 | `getSourceFile`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113089:31` |
|    +6.1% | +54.70ms | 16.1% → 17.1% | 898.5ms → 953.2ms |     682 → 727 | `inferFromObjectTypes`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|    +8.4% | +54.23ms | 11.6% → 12.5% | 645.5ms → 699.7ms |     485 → 534 | `inferFromContravariantTypes`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49`  |
|    +5.9% | +53.82ms | 16.3% → 17.2% | 907.8ms → 961.6ms |     689 → 733 | `invokeOnce`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`  |
|   +18.1% | +53.81ms |   5.3% → 6.3% | 297.0ms → 350.8ms |     218 → 257 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|    +3.8% | +50.68ms | 24.0% → 24.9% |     1.34s → 1.39s | 1,036 → 1,060 | `signaturesRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
|    +7.8% | +49.15ms | 11.3% → 12.2% | 631.5ms → 680.6ms |     476 → 518 | `inferFromMatchingTypes`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44`  |
|    +3.4% | +43.15ms | 22.7% → 23.5% |     1.26s → 1.30s |     977 → 995 | `compareSignaturesRelated`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                        | Location                                                                                  |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
|   +3.3% | +82.63ms | 44.9% → 46.4% |     2.50s → 2.59s | 1,916 → 1,965 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|   +3.5% | +67.17ms | 34.8% → 36.0% |     1.94s → 2.01s | 1,485 → 1,529 | `checkExpressionCached`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77450:39`  |
|   +3.3% | +66.11ms | 36.2% → 37.4% |     2.02s → 2.08s | 1,561 → 1,583 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|   +9.3% | +62.55ms | 12.0% → 13.1% | 670.5ms → 733.1ms |     505 → 558 | `applyToParameterTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66270:39`  |
|   +3.0% | +62.44ms | 37.7% → 38.8% |     2.10s → 2.16s | 1,614 → 1,645 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|   +6.2% | +62.40ms | 17.9% → 19.0% |   999.9ms → 1.06s |     757 → 813 | `inferTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28`  |
| +197.4% | +58.40ms |   0.5% → 1.6% |   29.6ms → 88.0ms |       22 → 28 | `readFile`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30`   |
|   +5.8% | +58.01ms | 17.8% → 18.9% |   996.3ms → 1.05s |     754 → 807 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
|   +3.2% | +57.83ms | 32.3% → 33.3% |     1.80s → 1.86s | 1,392 → 1,411 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|   +3.1% | +57.74ms | 33.1% → 34.2% |     1.84s → 1.90s | 1,428 → 1,446 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45`  |
|   +7.6% | +57.56ms | 13.6% → 14.6% | 757.0ms → 814.6ms |     573 → 620 | `inferFromSignatures`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67275:41`  |
| +230.5% | +55.07ms |   0.4% → 1.4% |   23.9ms → 79.0ms |       19 → 21 | `getSourceFile`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113089:31` |
|   +6.1% | +54.70ms | 16.1% → 17.1% | 898.5ms → 953.2ms |     682 → 727 | `inferFromObjectTypes`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|   +8.4% | +54.23ms | 11.6% → 12.5% | 645.5ms → 699.7ms |     485 → 534 | `inferFromContravariantTypes`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49`  |
|   +5.9% | +53.82ms | 16.3% → 17.2% | 907.8ms → 961.6ms |     689 → 733 | `invokeOnce`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32`  |
|  +18.1% | +53.81ms |   5.3% → 6.3% | 297.0ms → 350.8ms |     218 → 257 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|   +3.8% | +50.68ms | 24.0% → 24.9% |     1.34s → 1.39s | 1,036 → 1,060 | `signaturesRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
|   +7.8% | +49.15ms | 11.3% → 12.2% | 631.5ms → 680.6ms |     476 → 518 | `inferFromMatchingTypes`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44`  |
|   +3.4% | +43.15ms | 22.7% → 23.5% |     1.26s → 1.30s |     977 → 995 | `compareSignaturesRelated`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42`  |
|   +8.8% | +40.26ms |   8.1% → 8.9% | 455.2ms → 495.5ms |     352 → 379 | `forEachChild`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26`  |

##### Standard library

|   Change |    Delta |            % |              Time | Samples | Function         | Location                           |
| -------: | -------: | -----------: | ----------------: | ------: | ---------------- | ---------------------------------- |
| +4221.9% | +62.15ms | <0.1% → 1.1% |    1.5ms → 63.6ms |  1 → 10 | `toString`       | `<unknown>`                        |
|    +5.9% |  +6.89ms |  2.1% → 2.2% | 117.7ms → 124.6ms | 92 → 97 | `concat`         | `<unknown>`                        |
|  +131.9% |  +5.96ms |  0.1% → 0.2% |    4.5ms → 10.5ms |   4 → 8 | `get`            | `<unknown>`                        |
|   +94.2% |  +3.81ms |         0.1% |     4.0ms → 7.8ms |   3 → 6 | `Map`            | `<unknown>`                        |
|  +283.4% |  +3.75ms | <0.1% → 0.1% |     1.3ms → 5.1ms |   1 → 4 | `find`           | `<unknown>`                        |
|      new |  +2.92ms |  0.0% → 0.1% |       0ms → 2.9ms |   0 → 2 | `exec`           | `<unknown>`                        |
|      new |  +2.38ms | 0.0% → <0.1% |       0ms → 2.4ms |   0 → 2 | `lastIndexOf`    | `<unknown>`                        |
|  +177.3% |  +2.19ms | <0.1% → 0.1% |     1.2ms → 3.4ms |   1 → 3 | `map`            | `<unknown>`                        |
|  +154.4% |  +1.61ms |        <0.1% |     1.0ms → 2.7ms |   1 → 2 | `(anonymous)`    | `internal:streams/operators:1:11`  |
|   +63.2% |  +1.60ms | <0.1% → 0.1% |     2.5ms → 4.1ms |   2 → 3 | `sort`           | `<unknown>`                        |
|      new |  +1.44ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `removeListener` | `node:events:206:63`               |
|      new |  +1.44ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `onceWrapper`    | `node:events:192:21`               |
|      new |  +1.44ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `emit`           | `node:events:78:48`                |
|      new |  +1.44ms | 0.0% → <0.1% |       0ms → 1.4ms |   0 → 1 | `onConstruct`    | `internal:streams/destroy:128:23`  |
|    +3.9% |  +1.25ms |         0.6% |   32.1ms → 33.4ms |      25 | `slice`          | `<unknown>`                        |
|      new |  +1.24ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `Writable`       | `internal:streams/writable:172:18` |
|      new |  +1.24ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `WriteStream`    | `internal:fs/streams:196:21`       |
|      new |  +1.20ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `delete`         | `<unknown>`                        |
|      new |  +1.20ms | 0.0% → <0.1% |       0ms → 1.2ms |   0 → 1 | `every`          | `<unknown>`                        |
|      new |  +1.15ms | 0.0% → <0.1% |       0ms → 1.1ms |   0 → 1 | `(anonymous)`    | `internal:streams/duplex:1:11`     |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function                                               | Location    |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------ | ----------- |
| +113.0% | +2.93ms | <0.1% → 0.1% |   2.6ms → 5.5ms |   2 → 4 | `stringSplitFast`                                      | `<unknown>` |
|     new | +1.49ms | 0.0% → <0.1% |     0ms → 1.5ms |   0 → 1 | `/(\stypes\s*=\s*)(?:(?:'([^']*)')\|(?:"([^"]*)"))/im` | `<unknown>` |
|     new | +1.48ms | 0.0% → <0.1% |     0ms → 1.5ms |   0 → 1 | `/^#!.*/`                                              | `<unknown>` |
|     new | +1.44ms | 0.0% → <0.1% |     0ms → 1.4ms |   0 → 1 | `bound onceWrapper`                                    | `<unknown>` |
|     new | +1.27ms | 0.0% → <0.1% |     0ms → 1.3ms |   0 → 1 | `bound realpathNativeSync`                             | `<unknown>` |
|     new | +1.10ms | 0.0% → <0.1% |     0ms → 1.1ms |   0 → 1 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`            | `<unknown>` |
|  +13.5% | +1.06ms |  0.1% → 0.2% |   7.8ms → 8.9ms |   6 → 7 | `parseModule`                                          | `<unknown>` |
|   +1.0% | +0.74ms |         1.4% | 76.5ms → 77.3ms |      59 | `require`                                              | `<unknown>` |
|   +1.0% | +0.74ms |         1.4% | 76.5ms → 77.3ms |      59 | `bound require`                                        | `<unknown>` |
|   +2.0% | +0.53ms |         0.5% | 26.2ms → 26.8ms |      21 | `statSync`                                             | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |       Samples | Function                                               | Location                                                                                 |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|   -8.9% | -70.19ms | 14.2% → 12.9% | 791.0ms → 720.8ms |     599 → 557 | `checkPropertyAccessExpression`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
|   -2.6% | -67.87ms | 46.0% → 44.8% |     2.57s → 2.50s | 1,957 → 1,918 | `forEach`                                              | `<unknown>`                                                                              |
|  -63.6% | -67.34ms |   1.9% → 0.7% |  105.8ms → 38.5ms |       82 → 30 | `tryGetTypeAtPosition`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75528:38` |
|  -11.0% | -67.14ms |  10.9% → 9.7% | 610.7ms → 543.5ms |     427 → 415 | `parseSourceFile`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30679:33` |
|  -10.8% | -65.73ms |  10.9% → 9.8% | 610.7ms → 545.0ms |     427 → 416 | `createSourceFile`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30483:30` |
|  -10.6% | -64.34ms |  10.9% → 9.7% | 607.9ms → 543.5ms |     425 → 415 | `parseSourceFileWorker`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30853:39` |
|  -66.0% | -63.10ms |   1.7% → 0.6% |   95.6ms → 32.5ms |       36 → 25 | `parseBracketedList`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32274:36` |
|   -2.4% | -61.47ms | 45.2% → 44.1% |     2.52s → 2.46s | 1,921 → 1,886 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70` |
|  -10.1% | -60.00ms |  10.6% → 9.5% | 592.7ms → 532.7ms |     415 → 407 | `parseList`                                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31892:27` |
|  -98.1% | -59.40ms |  1.1% → <0.1% |    60.6ms → 1.2ms |         9 → 1 | `parseImportClause`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36273:35` |
|   -2.3% | -59.13ms | 45.3% → 44.2% |     2.52s → 2.47s | 1,924 → 1,891 | `checkDeferredNodes`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
|   -2.3% | -59.09ms | 45.3% → 44.2% |     2.52s → 2.46s | 1,923 → 1,890 | `checkDeferredNode`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  -91.4% | -58.69ms |   1.1% → 0.1% |    64.2ms → 5.5ms |        12 → 4 | `parseNamedImportsOrExports`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36324:44` |
|   -7.1% | -58.00ms | 14.7% → 13.7% | 822.4ms → 764.4ms |     622 → 589 | `checkNonNullExpression`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72531:40` |
| removed | -57.98ms |   1.0% → 0.0% |      58.0ms → 0ms |         7 → 0 | `createImportSpecifier`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:24726:39` |
|  -92.9% | -57.26ms |   1.1% → 0.1% |    61.6ms → 4.4ms |        10 → 3 | `parseImportOrExportSpecifier`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36344:46` |
|  -20.0% | -56.13ms |   5.0% → 4.0% | 281.3ms → 225.2ms |     176 → 172 | `parseDelimitedList`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32208:36` |
|  -89.4% | -55.57ms |   1.1% → 0.1% |    62.1ms → 6.6ms |        10 → 4 | `parseImportDeclarationOrImportEqualsDeclaration`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36192:65` |
|  -25.4% | -54.18ms |   3.8% → 2.8% | 213.3ms → 159.2ms |     129 → 122 | `parseModuleBlock`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36106:34` |
|  -92.7% | -53.70ms |   1.0% → 0.1% |    57.9ms → 4.2ms |         8 → 3 | `createBaseNode`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22089:32` |

##### Third-party

|  Change |    Delta |             % |              Time |       Samples | Function                                               | Location                                                                                 |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|   -8.9% | -70.19ms | 14.2% → 12.9% | 791.0ms → 720.8ms |     599 → 557 | `checkPropertyAccessExpression`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
|  -63.6% | -67.34ms |   1.9% → 0.7% |  105.8ms → 38.5ms |       82 → 30 | `tryGetTypeAtPosition`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75528:38` |
|  -11.0% | -67.14ms |  10.9% → 9.7% | 610.7ms → 543.5ms |     427 → 415 | `parseSourceFile`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30679:33` |
|  -10.8% | -65.73ms |  10.9% → 9.8% | 610.7ms → 545.0ms |     427 → 416 | `createSourceFile`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30483:30` |
|  -10.6% | -64.34ms |  10.9% → 9.7% | 607.9ms → 543.5ms |     425 → 415 | `parseSourceFileWorker`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30853:39` |
|  -66.0% | -63.10ms |   1.7% → 0.6% |   95.6ms → 32.5ms |       36 → 25 | `parseBracketedList`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32274:36` |
|   -2.4% | -61.47ms | 45.2% → 44.1% |     2.52s → 2.46s | 1,921 → 1,886 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70` |
|  -10.1% | -60.00ms |  10.6% → 9.5% | 592.7ms → 532.7ms |     415 → 407 | `parseList`                                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31892:27` |
|  -98.1% | -59.40ms |  1.1% → <0.1% |    60.6ms → 1.2ms |         9 → 1 | `parseImportClause`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36273:35` |
|   -2.3% | -59.13ms | 45.3% → 44.2% |     2.52s → 2.47s | 1,924 → 1,891 | `checkDeferredNodes`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
|   -2.3% | -59.09ms | 45.3% → 44.2% |     2.52s → 2.46s | 1,923 → 1,890 | `checkDeferredNode`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  -91.4% | -58.69ms |   1.1% → 0.1% |    64.2ms → 5.5ms |        12 → 4 | `parseNamedImportsOrExports`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36324:44` |
|   -7.1% | -58.00ms | 14.7% → 13.7% | 822.4ms → 764.4ms |     622 → 589 | `checkNonNullExpression`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72531:40` |
| removed | -57.98ms |   1.0% → 0.0% |      58.0ms → 0ms |         7 → 0 | `createImportSpecifier`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:24726:39` |
|  -92.9% | -57.26ms |   1.1% → 0.1% |    61.6ms → 4.4ms |        10 → 3 | `parseImportOrExportSpecifier`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36344:46` |
|  -20.0% | -56.13ms |   5.0% → 4.0% | 281.3ms → 225.2ms |     176 → 172 | `parseDelimitedList`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32208:36` |
|  -89.4% | -55.57ms |   1.1% → 0.1% |    62.1ms → 6.6ms |        10 → 4 | `parseImportDeclarationOrImportEqualsDeclaration`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36192:65` |
|  -25.4% | -54.18ms |   3.8% → 2.8% | 213.3ms → 159.2ms |     129 → 122 | `parseModuleBlock`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36106:34` |
|  -92.7% | -53.70ms |   1.0% → 0.1% |    57.9ms → 4.2ms |         8 → 3 | `createBaseNode`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22089:32` |
|  -18.9% | -50.28ms |   4.8% → 3.9% | 265.9ms → 215.6ms |     200 → 168 | `getQuickTypeOfExpression`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77740:42` |

##### Standard library

|  Change |    Delta |             % |            Time |       Samples | Function          | Location                     |
| ------: | -------: | ------------: | --------------: | ------------: | ----------------- | ---------------------------- |
|   -2.6% | -67.87ms | 46.0% → 44.8% |   2.57s → 2.50s | 1,957 → 1,918 | `forEach`         | `<unknown>`                  |
|  -74.7% | -23.09ms |   0.6% → 0.1% |  30.9ms → 7.8ms |        12 → 6 | `set`             | `<unknown>`                  |
|  -66.2% |  -2.82ms |  0.1% → <0.1% |   4.3ms → 1.4ms |         3 → 1 | `push`            | `<unknown>`                  |
|  -18.0% |  -2.24ms |          0.2% | 12.4ms → 10.2ms |        10 → 8 | `join`            | `<unknown>`                  |
|  -32.0% |  -1.99ms |          0.1% |   6.2ms → 4.2ms |         5 → 3 | `next`            | `<unknown>`                  |
| removed |  -1.58ms |  <0.1% → 0.0% |     1.6ms → 0ms |         1 → 0 | `resolve`         | `<unknown>`                  |
| removed |  -1.52ms |  <0.1% → 0.0% |     1.5ms → 0ms |         1 → 0 | `makeSafe`        | `internal:primordials:27:15` |
| removed |  -1.52ms |  <0.1% → 0.0% |     1.5ms → 0ms |         1 → 0 | `(anonymous)`     | `internal:primordials:1:11`  |
| removed |  -1.52ms |  <0.1% → 0.0% |     1.5ms → 0ms |         1 → 0 | `(anonymous)`     | `internal:shared:1:11`       |
| removed |  -1.52ms |  <0.1% → 0.0% |     1.5ms → 0ms |         1 → 0 | `(anonymous)`     | `internal:validators:1:11`   |
|  -13.1% |  -1.49ms |          0.2% |  11.4ms → 9.9ms |         9 → 8 | `test`            | `<unknown>`                  |
| removed |  -1.41ms |  <0.1% → 0.0% |     1.4ms → 0ms |         1 → 0 | `ReadStream`      | `internal:fs/streams:52:20`  |
| removed |  -1.41ms |  <0.1% → 0.0% |     1.4ms → 0ms |         1 → 0 | `ReadStream`      | `node:tty:7:20`              |
| removed |  -1.38ms |  <0.1% → 0.0% |     1.4ms → 0ms |         1 → 0 | `String`          | `<unknown>`                  |
| removed |  -1.34ms |  <0.1% → 0.0% |     1.3ms → 0ms |         1 → 0 | `replace`         | `<unknown>`                  |
| removed |  -1.23ms |  <0.1% → 0.0% |     1.2ms → 0ms |         1 → 0 | `add`             | `<unknown>`                  |
| removed |  -1.17ms |  <0.1% → 0.0% |     1.2ms → 0ms |         1 → 0 | `trimStart`       | `<unknown>`                  |
|  -29.1% |  -1.09ms |  0.1% → <0.1% |   3.7ms → 2.7ms |         3 → 2 | `get WriteStream` | `node:fs:587:18`             |
|  -47.5% |  -1.06ms |         <0.1% |   2.2ms → 1.2ms |         2 → 1 | `unshift`         | `<unknown>`                  |
|   -5.6% |  -0.44ms |          0.1% |   7.9ms → 7.4ms |             6 | `some`            | `<unknown>`                  |

##### Native

|  Change |   Delta |             % |            Time |       Samples | Function                                                                                                                                                                                                                                                                                                                                                                | Location    |
| ------: | ------: | ------------: | --------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|   -0.1% | -8.11ms | 99.8% → 99.7% |   5.57s → 5.56s | 4,230 → 4,214 | `evaluate`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
|   -0.1% | -4.17ms | 99.8% → 99.7% |   5.57s → 5.56s | 4,228 → 4,214 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|   -0.1% | -4.17ms | 99.8% → 99.7% |   5.57s → 5.56s | 4,228 → 4,214 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
|  -13.3% | -3.75ms |   0.5% → 0.4% | 28.1ms → 24.4ms |       21 → 18 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|     ~0% | -2.73ms | 99.8% → 99.7% |           5.57s | 4,228 → 4,215 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|   -5.9% | -1.81ms |          0.5% | 30.5ms → 28.6ms |       24 → 23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
| removed | -1.52ms |  <0.1% → 0.0% |     1.5ms → 0ms |         1 → 0 | `ownKeys`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
|   -0.8% | -0.67ms |          1.5% | 81.9ms → 81.2ms |       63 → 62 | `anonymous`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|   -6.3% | -0.17ms |         <0.1% |   2.7ms → 2.5ms |             2 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|   -2.0% | -0.11ms |          0.1% |   5.5ms → 5.4ms |             4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|   -5.5% | -0.08ms |         <0.1% |   1.5ms → 1.4ms |             1 | `@lazy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
