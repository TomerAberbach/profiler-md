# CPU profile diff

Took 2.51s → 2.38s (-127.42ms, -5.1%) over 2,563 samples → 2,472 samples (982.2µs → 966.8µs per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |   -4.7% | -101.01ms | 86.1% → 86.5% |     2.16s → 2.06s | 2,285 → 2,215 |
| Garbage collector  |   -3.4% |   -6.45ms |   7.5% → 7.6% | 187.7ms → 181.2ms |     153 → 148 |
| Standard library   |   -5.8% |   -7.00ms |   4.8% → 4.7% | 120.0ms → 113.0ms |       89 → 85 |
| Native             |  -31.1% |  -11.38ms |   1.5% → 1.1% |   36.6ms → 25.3ms |       32 → 21 |
| Regular expression |  -10.5% |   -0.33ms |          0.1% |     3.2ms → 2.8ms |             3 |
| Ours               | removed |   -1.25ms |  <0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Third-party

|   Change |    Delta |            % |            Time | Samples | Function                     | Location                                                        |
| -------: | -------: | -----------: | --------------: | ------: | ---------------------------- | --------------------------------------------------------------- |
|   +47.2% | +13.04ms |  1.1% → 1.7% | 27.6ms → 40.7ms | 25 → 31 | `scan`                       | `node_modules/typescript/lib/typescript.js:12765:16 → 12895:16` |
|   +32.2% | +12.55ms |  1.5% → 2.2% | 38.9ms → 51.5ms | 33 → 46 | `checkTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
|  +151.6% |  +8.59ms |  0.2% → 0.6% |  5.7ms → 14.3ms |  5 → 15 | `checkIdentifier`            | `node_modules/typescript/lib/typescript.js:72959:27 → 74242:27` |
|  +590.2% |  +7.63ms |  0.1% → 0.4% |   1.3ms → 8.9ms |   1 → 7 | `parseExpected`              | `node_modules/typescript/lib/typescript.js:32036:25 → 33091:25` |
|   +20.2% |  +6.92ms |  1.4% → 1.7% | 34.3ms → 41.2ms | 43 → 48 | `isRelatedTo`                | `node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
|      new |  +6.88ms |  0.0% → 0.3% |     0ms → 6.9ms |   0 → 6 | `nextToken`                  | `node_modules/typescript/lib/typescript.js:31960:21 → 33015:21` |
|   +30.8% |  +6.38ms |  0.8% → 1.1% | 20.7ms → 27.0ms | 29 → 33 | `bind`                       | `node_modules/typescript/lib/typescript.js:46600:16 → 47793:16` |
|  +159.2% |  +6.17ms |  0.2% → 0.4% |  3.9ms → 10.0ms |   4 → 9 | `addInheritedMembers`        | `node_modules/typescript/lib/typescript.js:59027:31 → 60282:31` |
|   +19.8% |  +5.87ms |  1.2% → 1.5% | 29.6ms → 35.5ms | 27 → 33 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
|  +116.8% |  +5.79ms |  0.2% → 0.4% |  5.0ms → 10.7ms |   4 → 9 | `getResolvedSymbol`          | `node_modules/typescript/lib/typescript.js:70627:29 → 71910:29` |
|   +34.7% |  +5.42ms |  0.6% → 0.9% | 15.6ms → 21.0ms | 13 → 18 | `createTypeReference`        | `node_modules/typescript/lib/typescript.js:61539:31 → 62794:31` |
|      new |  +5.25ms |  0.0% → 0.2% |     0ms → 5.3ms |   0 → 4 | `parseLiteralTypeNode`       | `node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
|  +206.7% |  +5.17ms |  0.1% → 0.3% |   2.5ms → 7.7ms |   3 → 7 | `iterateCommentRanges`       | `node_modules/typescript/lib/typescript.js:11916:30 → 12043:30` |
|  +187.9% |  +5.17ms |  0.1% → 0.3% |   2.8ms → 7.9ms |   3 → 7 | `createTypeMapper`           | `node_modules/typescript/lib/typescript.js:64649:28 → 65904:28` |
|  +128.0% |  +4.96ms |  0.2% → 0.4% |   3.9ms → 8.8ms |   4 → 7 | `getRelationKey`             | `node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |
| +1883.6% |  +4.71ms | <0.1% → 0.2% |   0.3ms → 5.0ms |   2 → 4 | `checkExpression`            | `node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
|  +114.7% |  +4.54ms |  0.2% → 0.4% |   4.0ms → 8.5ms |   5 → 8 | `getTypeAtFlowAssignment`    | `node_modules/typescript/lib/typescript.js:71742:37 → 73025:37` |
|   +69.6% |  +4.29ms |  0.2% → 0.4% |  6.2ms → 10.5ms | 12 → 16 | `checkExpressionWorker`      | `node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |
| +1018.9% |  +4.25ms | <0.1% → 0.2% |   0.4ms → 4.7ms |   1 → 4 | `createNodeArray`            | `node_modules/typescript/lib/typescript.js:32232:27 → 33287:27` |
|   +49.8% |  +4.08ms |  0.3% → 0.5% |  8.2ms → 12.3ms |  8 → 10 | `nextTokenWithoutCheck`      | `node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |

##### Standard library

|  Change |   Delta |            % |          Time | Samples | Function              | Location                         |
| ------: | ------: | -----------: | ------------: | ------: | --------------------- | -------------------------------- |
| +317.0% | +3.83ms | <0.1% → 0.2% | 1.2ms → 5.0ms |   1 → 4 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`  |
|     new | +2.50ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`   |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/crypto/keys:1:1`  |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `isUint8Array`        | `node:internal/util/types:13:22` |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `FastBuffer`          | `node:internal/buffer:956:1`     |
|     new | +1.25ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `toPathIfFileURL`     | `node:internal/url:1671:25`      |
|     new | +1.25ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `wrappedFn`           | `node:internal/errors:535:21`    |

##### Native

| Change |   Delta |           % |        Time | Samples | Function   | Location    |
| -----: | ------: | ----------: | ----------: | ------: | ---------- | ----------- |
|    new | +1.25ms | 0.0% → 0.1% | 0ms → 1.3ms |   0 → 1 | `realpath` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                            | Location                                                        |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------- | --------------------------------------------------------------- |
|  -75.3% | -13.12ms |  0.7% → 0.2% |    17.4ms → 4.3ms |     8 → 6 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
|  -17.9% | -12.38ms |  2.7% → 2.4% |   69.0ms → 56.7ms |   65 → 55 | `recursiveTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -33.5% |  -7.79ms |  0.9% → 0.6% |   23.2ms → 15.5ms |   21 → 16 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
|  -71.3% |  -7.75ms |  0.4% → 0.1% |    10.9ms → 3.1ms |     9 → 4 | `getTypeArguments`                  | `node_modules/typescript/lib/typescript.js:61572:28 → 62827:28` |
|  -57.5% |  -7.71ms |  0.5% → 0.2% |    13.4ms → 5.7ms |    12 → 6 | `instantiateTypeWithAlias`          | `node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |
|   -3.4% |  -6.45ms |  7.5% → 7.6% | 187.7ms → 181.2ms | 153 → 148 | `(garbage collector)`               | `<unknown>`                                                     |
| removed |  -6.25ms |  0.2% → 0.0% |       6.3ms → 0ms |     5 → 0 | `getTokenValue`                     | `node_modules/typescript/lib/typescript.js:12135:20`            |
|  -73.2% |  -6.25ms |  0.3% → 0.1% |     8.5ms → 2.3ms |     4 → 2 | `isEmptyObjectType`                 | `node_modules/typescript/lib/typescript.js:65964:29 → 67224:29` |
|  -53.3% |  -6.08ms |  0.5% → 0.2% |    11.4ms → 5.3ms |    14 → 9 | `isSimpleTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |
|  -12.3% |  -6.00ms |  1.9% → 1.8% |   48.8ms → 42.8ms |   52 → 45 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  -48.5% |  -5.92ms |  0.5% → 0.3% |    12.2ms → 6.3ms |    11 → 7 | `some`                              | `node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
|  -28.7% |  -5.67ms |  0.8% → 0.6% |   19.8ms → 14.1ms |   19 → 13 | `getPropertyOfType`                 | `node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
|  -84.1% |  -5.50ms | 0.3% → <0.1% |     6.5ms → 1.0ms |     9 → 5 | `getTypePredicateOfSignature`       | `node_modules/typescript/lib/typescript.js:61162:39 → 62417:39` |
|  -29.4% |  -5.29ms |  0.7% → 0.5% |   18.0ms → 12.7ms |   15 → 11 | `resolveStructuredTypeMembers`      | `node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  -77.0% |  -5.29ms |  0.3% → 0.1% |     6.9ms → 1.6ms |     8 → 4 | `getTypeFromTypeNode`               | `node_modules/typescript/lib/typescript.js:64524:31 → 65779:31` |
|  -33.9% |  -5.17ms |  0.6% → 0.4% |   15.3ms → 10.1ms |    12 → 8 | `stat`                              | `<unknown>`                                                     |
|   -5.9% |  -5.13ms |         3.4% |   86.5ms → 81.4ms |   69 → 65 | `wrapSafe`                          | `node:internal/modules/cjs/loader:1671:18`                      |
|  -40.2% |  -5.04ms |  0.5% → 0.3% |    12.5ms → 7.5ms |    10 → 6 | `internIdentifier`                  | `node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
|  -79.9% |  -4.96ms |  0.2% → 0.1% |     6.2ms → 1.3ms |     5 → 1 | `checkSourceElement`                | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
| removed |  -4.88ms |  0.2% → 0.0% |       4.9ms → 0ms |     4 → 0 | `getTypeOfMappedSymbol`             | `node_modules/typescript/lib/typescript.js:59989:33 → 61244:33` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                                        |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | --------------------------------------------------------------- |
|  -75.3% | -13.12ms |  0.7% → 0.2% |  17.4ms → 4.3ms |   8 → 6 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |
|  -17.9% | -12.38ms |  2.7% → 2.4% | 69.0ms → 56.7ms | 65 → 55 | `recursiveTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  -33.5% |  -7.79ms |  0.9% → 0.6% | 23.2ms → 15.5ms | 21 → 16 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
|  -71.3% |  -7.75ms |  0.4% → 0.1% |  10.9ms → 3.1ms |   9 → 4 | `getTypeArguments`                  | `node_modules/typescript/lib/typescript.js:61572:28 → 62827:28` |
|  -57.5% |  -7.71ms |  0.5% → 0.2% |  13.4ms → 5.7ms |  12 → 6 | `instantiateTypeWithAlias`          | `node_modules/typescript/lib/typescript.js:65006:36 → 66266:36` |
| removed |  -6.25ms |  0.2% → 0.0% |     6.3ms → 0ms |   5 → 0 | `getTokenValue`                     | `node_modules/typescript/lib/typescript.js:12135:20`            |
|  -73.2% |  -6.25ms |  0.3% → 0.1% |   8.5ms → 2.3ms |   4 → 2 | `isEmptyObjectType`                 | `node_modules/typescript/lib/typescript.js:65964:29 → 67224:29` |
|  -53.3% |  -6.08ms |  0.5% → 0.2% |  11.4ms → 5.3ms |  14 → 9 | `isSimpleTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:66052:33 → 67312:33` |
|  -12.3% |  -6.00ms |  1.9% → 1.8% | 48.8ms → 42.8ms | 52 → 45 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|  -48.5% |  -5.92ms |  0.5% → 0.3% |  12.2ms → 6.3ms |  11 → 7 | `some`                              | `node_modules/typescript/lib/typescript.js:2781:14 → 2794:14`   |
|  -28.7% |  -5.67ms |  0.8% → 0.6% | 19.8ms → 14.1ms | 19 → 13 | `getPropertyOfType`                 | `node_modules/typescript/lib/typescript.js:60739:29 → 61994:29` |
|  -84.1% |  -5.50ms | 0.3% → <0.1% |   6.5ms → 1.0ms |   9 → 5 | `getTypePredicateOfSignature`       | `node_modules/typescript/lib/typescript.js:61162:39 → 62417:39` |
|  -29.4% |  -5.29ms |  0.7% → 0.5% | 18.0ms → 12.7ms | 15 → 11 | `resolveStructuredTypeMembers`      | `node_modules/typescript/lib/typescript.js:60090:40 → 61345:40` |
|  -77.0% |  -5.29ms |  0.3% → 0.1% |   6.9ms → 1.6ms |   8 → 4 | `getTypeFromTypeNode`               | `node_modules/typescript/lib/typescript.js:64524:31 → 65779:31` |
|  -40.2% |  -5.04ms |  0.5% → 0.3% |  12.5ms → 7.5ms |  10 → 6 | `internIdentifier`                  | `node_modules/typescript/lib/typescript.js:32276:28 → 33331:28` |
|  -79.9% |  -4.96ms |  0.2% → 0.1% |   6.2ms → 1.3ms |   5 → 1 | `checkSourceElement`                | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |
| removed |  -4.88ms |  0.2% → 0.0% |     4.9ms → 0ms |   4 → 0 | `getTypeOfMappedSymbol`             | `node_modules/typescript/lib/typescript.js:59989:33 → 61244:33` |
| removed |  -4.83ms |  0.2% → 0.0% |     4.8ms → 0ms |   4 → 0 | `getNonNullableType`                | `node_modules/typescript/lib/typescript.js:69170:30 → 70430:30` |
|  -64.9% |  -4.71ms |  0.3% → 0.1% |   7.2ms → 2.5ms |   6 → 2 | `resolveCall`                       | `node_modules/typescript/lib/typescript.js:77299:23 → 78594:23` |
| removed |  -4.67ms |  0.2% → 0.0% |     4.7ms → 0ms |   4 → 0 | `reducePathComponents`              | `node_modules/typescript/lib/typescript.js:9088:30`             |

##### Garbage collector

| Change |   Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -3.4% | -6.45ms | 7.5% → 7.6% | 187.7ms → 181.2ms | 153 → 148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |            Time | Samples | Function                   | Location                                   |
| ------: | ------: | -----------: | --------------: | ------: | -------------------------- | ------------------------------------------ |
|   -5.9% | -5.13ms |         3.4% | 86.5ms → 81.4ms | 69 → 65 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
|  -44.5% | -4.54ms |  0.4% → 0.2% |  10.2ms → 5.7ms |   8 → 5 | `tryStatSync`              | `node:fs:389:21`                           |
| removed | -2.54ms |  0.1% → 0.0% |     2.5ms → 0ms |   2 → 0 | `statSync`                 | `node:fs:1745:18`                          |
| removed | -1.29ms |  0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `isInt32`                  | `node:internal/validators:45:17`           |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `internalBinding`          | `node:internal/bootstrap/realm:185:45`     |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `(anonymous)`              | `node:internal/streams/lazy_transform:1:1` |
|  -49.2% | -1.25ms |         0.1% |   2.5ms → 1.3ms |   2 → 1 | `readFileSync`             | `node:fs:433:22`                           |
|  -40.6% | -1.00ms |         0.1% |   2.5ms → 1.5ms |       2 | `slice`                    | `node:buffer:640:12`                       |
|   -2.2% | -0.21ms |         0.4% |   9.5ms → 9.3ms |       1 | `post`                     | `node:inspector:118:7`                     |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function  | Location    |
| ------: | ------: | -----------: | --------------: | ------: | --------- | ----------- |
|  -33.9% | -5.17ms |  0.6% → 0.4% | 15.3ms → 10.1ms |  12 → 8 | `stat`    | `<unknown>` |
|  -30.4% | -3.83ms |  0.5% → 0.4% |  12.6ms → 8.8ms |  10 → 7 | `open`    | `<unknown>` |
|  -50.8% | -1.29ms |         0.1% |   2.5ms → 1.3ms |   2 → 1 | `read`    | `<unknown>` |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `readdir` | `<unknown>` |
| removed | -1.08ms | <0.1% → 0.0% |     1.1ms → 0ms |   1 → 0 | `close`   | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `scan` (`node_modules/typescript/lib/typescript.js:12895:16`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
|     new | +9.71ms | 0.0% → 23.9% | 0ms → 9.7ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:14635` |
|     new | +5.08ms | 0.0% → 12.5% | 0ms → 5.1ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:12915` |
| removed | -3.71ms | 13.4% → 0.0% | 3.7ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:12790` |
|     new | +2.54ms |  0.0% → 6.2% | 0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:13045` |
| removed | -2.50ms |  9.0% → 0.0% | 2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:12765` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +74.3% | +14.07ms | 48.7% → 64.1% | 18.9ms → 33.0ms | 15 → 28 | `node_modules/typescript/lib/typescript.js:66185 → 67445` |
|  -22.7% |  -2.85ms | 32.2% → 18.8% |  12.5ms → 9.7ms |  10 → 8 | `node_modules/typescript/lib/typescript.js:66204 → 67464` |
|     new |  +2.55ms |   0.0% → 5.0% |     0ms → 2.6ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:67462`         |
| removed |  -1.28ms |   3.3% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66212`         |
| removed |  -1.25ms |   3.2% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66203`         |

##### `checkIdentifier` (`node_modules/typescript/lib/typescript.js:74242:27`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
|     new | +2.63ms | 0.0% → 18.4% | 0ms → 2.6ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:74342` |
|     new | +2.52ms | 0.0% → 17.7% | 0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:74344` |
|     new | +1.33ms |  0.0% → 9.4% | 0ms → 1.3ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:74353` |
| removed | -1.29ms | 22.8% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:72996` |
|     new | +1.27ms |  0.0% → 8.9% | 0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:74310` |

##### `parseExpected` (`node_modules/typescript/lib/typescript.js:33091:25`)

|  Change |   Delta |             % |        Time | Samples | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|     new | +8.92ms | 0.0% → 100.0% | 0ms → 8.9ms |   0 → 7 | `node_modules/typescript/lib/typescript.js:33091` |
| removed | -1.29ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:31961` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:67753:25`)

|  Change |   Delta |            % |          Time | Samples | Location                                                  |
| ------: | ------: | -----------: | ------------: | ------: | --------------------------------------------------------- |
|  -50.0% | -3.75ms | 21.9% → 9.1% | 7.5ms → 3.8ms |   7 → 3 | `node_modules/typescript/lib/typescript.js:66590 → 67850` |
| +168.3% | +3.61ms | 6.3% → 14.0% | 2.1ms → 5.8ms |   2 → 5 | `node_modules/typescript/lib/typescript.js:66523 → 67783` |
| +154.4% | +2.96ms | 5.6% → 11.8% | 1.9ms → 4.9ms |   2 → 4 | `node_modules/typescript/lib/typescript.js:66493 → 67753` |
| +176.7% | +2.21ms |  3.6% → 8.4% | 1.3ms → 3.5ms |   1 → 3 | `node_modules/typescript/lib/typescript.js:66548 → 67808` |
|     new | +1.29ms |  0.0% → 3.1% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:21226`         |

##### `nextToken` (`node_modules/typescript/lib/typescript.js:33015:21`)

| Change |   Delta |            % |        Time | Samples | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
|    new | +5.04ms | 0.0% → 73.3% | 0ms → 5.0ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:33015` |
|    new | +1.29ms | 0.0% → 18.8% | 0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:33009` |
|    new | +0.54ms |  0.0% → 7.9% | 0ms → 0.5ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:33016` |

##### `bind` (`node_modules/typescript/lib/typescript.js:47793:16`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +22.1% | +2.78ms | 60.9% → 56.8% | 12.6ms → 15.4ms | 13 → 15 | `node_modules/typescript/lib/typescript.js:46608 → 47801` |
|     new | +2.24ms |   0.0% → 8.3% |     0ms → 2.2ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:47802`         |
|     new | +1.29ms |   0.0% → 4.8% |     0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:47798`         |
|     new | +1.29ms |   0.0% → 4.8% |     0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:48751`         |
| removed | -1.25ms |   6.0% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:46600`         |

##### `addInheritedMembers` (`node_modules/typescript/lib/typescript.js:60282:31`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
|     new | +3.79ms |  0.0% → 37.8% |   0ms → 3.8ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:60290`         |
| +146.7% | +3.67ms | 64.5% → 61.4% | 2.5ms → 6.2ms |   2 → 5 | `node_modules/typescript/lib/typescript.js:59034 → 60289` |
| removed | -1.29ms |  33.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:59032`         |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:66040:38`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  +55.6% | +7.69ms | 46.7% → 60.6% | 13.8ms → 21.5ms | 11 → 18 | `node_modules/typescript/lib/typescript.js:64815 → 66070` |
| removed | -6.21ms |  21.0% → 0.0% |     6.2ms → 0ms |   5 → 0 | `node_modules/typescript/lib/typescript.js:64818`         |
| removed | -3.79ms |  12.8% → 0.0% |     3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:64819`         |
|     new | +3.71ms |  0.0% → 10.4% |     0ms → 3.7ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:62759`         |
|     new | +2.46ms |   0.0% → 6.9% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:66079`         |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js:71910:29`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +136.0% | +5.04ms | 74.8% → 81.4% | 3.7ms → 8.8ms |   3 → 7 | `node_modules/typescript/lib/typescript.js:70630 → 71913` |
|     new | +1.33ms |  0.0% → 12.4% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:71910`         |
| removed | -1.25ms |  25.2% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:70629`         |
|     new | +0.67ms |   0.0% → 6.2% |   0ms → 0.7ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:71917`         |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:62794:31`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +103.2% | +4.99ms | 31.0% → 46.8% | 4.8ms → 9.8ms |   4 → 8 | `node_modules/typescript/lib/typescript.js:61544 → 62799` |
|  +18.0% | +1.51ms | 54.0% → 47.3% | 8.4ms → 9.9ms |   7 → 9 | `node_modules/typescript/lib/typescript.js:61541 → 62796` |
| removed | -1.29ms |   8.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61526`         |
|     new | +1.25ms |   0.0% → 6.0% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:62800`         |
| removed | -1.04ms |   6.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61539`         |

##### `parseLiteralTypeNode` (`node_modules/typescript/lib/typescript.js:34779:32`)

| Change |   Delta |             % |        Time | Samples | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +5.25ms | 0.0% → 100.0% | 0ms → 5.3ms |   0 → 4 | `node_modules/typescript/lib/typescript.js:34779` |

##### `iterateCommentRanges` (`node_modules/typescript/lib/typescript.js:12043:30`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +106.0% | +2.60ms | 98.3% → 66.0% | 2.5ms → 5.1ms |   2 → 4 | `node_modules/typescript/lib/typescript.js:11972 → 12099` |
|     new | +1.29ms |  0.0% → 16.8% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:12189`         |
|     new | +1.27ms |  0.0% → 16.6% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:12083`         |

##### `createTypeMapper` (`node_modules/typescript/lib/typescript.js:65904:28`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +403.4% | +5.04ms | 45.5% → 79.5% | 1.3ms → 6.3ms |   1 → 5 | `node_modules/typescript/lib/typescript.js:64649 → 65904` |
|  -22.6% | -0.29ms | 47.0% → 12.6% | 1.3ms → 1.0ms |       1 | `node_modules/typescript/lib/typescript.js:64650 → 65905` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:69989:26`)

| Change |   Delta |             % |          Time | Samples | Location                                                  |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +86.2% | +2.33ms | 69.9% → 57.1% | 2.7ms → 5.0ms |   3 → 4 | `node_modules/typescript/lib/typescript.js:68736 → 69996` |
|    new | +1.29ms |  0.0% → 14.6% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:62836`         |
|    new | +1.25ms |  0.0% → 14.1% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:2797`          |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:82771:27`)

|  Change |   Delta |              % |          Time | Samples | Location                                                  |
| ------: | ------: | -------------: | ------------: | ------: | --------------------------------------------------------- |
| +900.0% | +2.25ms | 100.0% → 50.4% | 0.3ms → 2.5ms |       2 | `node_modules/typescript/lib/typescript.js:81482 → 82777` |
|     new | +1.25ms |   0.0% → 25.2% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:82771`         |
|     new | +1.21ms |   0.0% → 24.4% |   0ms → 1.2ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:21225`         |

##### `getTypeAtFlowAssignment` (`node_modules/typescript/lib/typescript.js:73025:37`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
|     new | +2.54ms | 0.0% → 29.9% | 0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:73027` |
|     new | +2.50ms | 0.0% → 29.4% | 0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:73048` |
|     new | +1.25ms | 0.0% → 14.7% | 0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:73025` |
| removed | -1.21ms | 30.5% → 0.0% | 1.2ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:71761` |
| removed | -0.29ms |  7.4% → 0.0% | 0.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:71759` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:82811:33`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +558.1% | +3.96ms | 11.5% → 44.6% | 0.7ms → 4.7ms |   1 → 4 | `node_modules/typescript/lib/typescript.js:81572 → 82867` |
| removed | -1.25ms |  20.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:48825`         |
| removed | -1.25ms |  20.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:81560`         |
|     new | +1.25ms |  0.0% → 12.0% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:82821`         |
|     new | +1.25ms |  0.0% → 12.0% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:82857`         |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js:33287:27`)

|  Change |   Delta |             % |        Time | Samples | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|     new | +3.42ms |  0.0% → 73.2% | 0ms → 3.4ms |   0 → 3 | `node_modules/typescript/lib/typescript.js:33287` |
|     new | +1.25ms |  0.0% → 26.8% | 0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:28506` |
| removed | -0.42ms | 100.0% → 0.0% | 0.4ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:32233` |

##### `nextTokenWithoutCheck` (`node_modules/typescript/lib/typescript.js:33008:33`)

| Change |   Delta |      % |           Time | Samples | Location                                                  |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------------------------------- |
| +49.8% | +4.08ms | 100.0% | 8.2ms → 12.3ms |  8 → 10 | `node_modules/typescript/lib/typescript.js:31954 → 33009` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|  Change |   Delta |      % |          Time | Samples | Location                     |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------- |
| +317.0% | +3.83ms | 100.0% | 1.2ms → 5.0ms |   1 → 4 | `node:internal/fs/utils:553` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

| Change |   Delta |             % |        Time | Samples | Location                    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------- |
|    new | +2.50ms | 0.0% → 100.0% | 0ms → 2.5ms |   0 → 2 | `node:internal/buffer:1089` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

| Change |   Delta |             % |        Time | Samples | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `node:internal/crypto/keys:103` |

##### `isUint8Array` (`node:internal/util/types:13:22`)

| Change |   Delta |             % |        Time | Samples | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `node:internal/util/types:14` |

##### `FastBuffer` (`node:internal/buffer:956:1`)

| Change |   Delta |             % |        Time | Samples | Location                   |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `node:internal/buffer:956` |

##### `toPathIfFileURL` (`node:internal/url:1671:25`)

| Change |   Delta |             % |        Time | Samples | Location                 |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `node:internal/url:1672` |

##### `wrappedFn` (`node:internal/errors:535:21`)

| Change |   Delta |             % |        Time | Samples | Location                   |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | `node:internal/errors:535` |

##### `realpath` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Location |
| -----: | ------: | ------------: | ----------: | ------: | -------- |
|    new | +1.25ms | 0.0% → 100.0% | 0ms → 1.3ms |   0 → 1 | 2853     |

##### `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:61753:45`)

|  Change |    Delta |            % |         Time | Samples | Location                                          |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------- |
| removed | -10.96ms | 62.9% → 0.0% | 11.0ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60568` |
| removed |  -1.25ms |  7.2% → 0.0% |  1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60500` |
| removed |  -1.25ms |  7.2% → 0.0% |  1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60592` |
|     new |  +1.25ms | 0.0% → 29.1% |  0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:61812` |
|     new |  +1.25ms | 0.0% → 29.1% |  0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:61870` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:68323:36`)

|  Change |    Delta |             % |            Time | Samples | Location                                                  |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -37.6% | -13.52ms | 52.0% → 39.5% | 35.9ms → 22.4ms | 31 → 19 | `node_modules/typescript/lib/typescript.js:67076 → 68336` |
|  -63.6% |  -4.45ms |  10.1% → 4.5% |   7.0ms → 2.5ms |   6 → 2 | `node_modules/typescript/lib/typescript.js:67123 → 68383` |
| +172.4% |  +4.17ms |  3.5% → 11.6% |   2.4ms → 6.6ms |   2 → 6 | `node_modules/typescript/lib/typescript.js:67063 → 68323` |
|  -73.6% |  -3.49ms |   6.9% → 2.2% |   4.7ms → 1.3ms |   4 → 1 | `node_modules/typescript/lib/typescript.js:67129 → 68389` |
|     new |  +2.54ms |   0.0% → 4.5% |     0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:68358`         |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:67408:29`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -26.2% | -5.29ms | 86.9% → 96.5% | 20.2ms → 14.9ms | 16 → 12 | `node_modules/typescript/lib/typescript.js:66150 → 67410` |
| removed | -1.21ms |   5.2% → 0.0% |     1.2ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:64409`         |

##### `getTypeArguments` (`node_modules/typescript/lib/typescript.js:62827:28`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -6.58ms | 60.5% → 0.0% | 6.6ms → 0ms |   5 → 0 | `node_modules/typescript/lib/typescript.js:61572` |
| removed | -1.25ms | 11.5% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61578` |
|     new | +0.50ms | 0.0% → 16.0% | 0ms → 0.5ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:62829` |

##### `instantiateTypeWithAlias` (`node_modules/typescript/lib/typescript.js:66266:36`)

|  Change |   Delta |              % |           Time | Samples | Location                                                  |
| ------: | ------: | -------------: | -------------: | ------: | --------------------------------------------------------- |
|  -53.1% | -6.46ms | 90.7% → 100.0% | 12.2ms → 5.7ms |  11 → 6 | `node_modules/typescript/lib/typescript.js:65019 → 66279` |
| removed | -1.25ms |    9.3% → 0.0% |    1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:65006`         |

##### `getTokenValue` (`node_modules/typescript/lib/typescript.js:12135:20`)

|  Change |   Delta |             % |        Time | Samples | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
| removed | -6.25ms | 100.0% → 0.0% | 6.3ms → 0ms |   5 → 0 | `node_modules/typescript/lib/typescript.js:12135` |

##### `isEmptyObjectType` (`node_modules/typescript/lib/typescript.js:67224:29`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
|  -77.7% | -4.50ms | 67.8% → 56.4% | 5.8ms → 1.3ms |       1 | `node_modules/typescript/lib/typescript.js:65965 → 67225` |
| removed | -1.29ms |  15.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60093`         |
| removed | -1.29ms |  15.1% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:65964`         |

##### `isSimpleTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67312:33`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
|  -78.9% | -4.83ms | 53.6% → 24.2% | 6.1ms → 1.3ms |   5 → 1 | `node_modules/typescript/lib/typescript.js:66052 → 67312` |
| removed | -1.25ms |  10.9% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66054`         |
|     new | +1.25ms |  0.0% → 23.4% |   0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:67313`         |
| removed | -1.21ms |  10.6% → 0.0% |   1.2ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:66096`         |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js:66283:33`)

|  Change |   Delta |             % |            Time | Samples | Location                                                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------------------------- |
|  -18.3% | -4.54ms | 50.9% → 47.4% | 24.8ms → 20.3ms | 22 → 17 | `node_modules/typescript/lib/typescript.js:65039 → 66299` |
| removed | -1.54ms |   3.2% → 0.0% |     1.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:65068`         |
|  -59.0% | -1.50ms |   5.2% → 2.4% |   2.5ms → 1.0ms |   2 → 1 | `node_modules/typescript/lib/typescript.js:65077 → 66337` |
| removed | -1.33ms |   2.7% → 0.0% |     1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:65031`         |
|  -25.4% | -1.29ms |  10.4% → 8.9% |   5.1ms → 3.8ms |   4 → 3 | `node_modules/typescript/lib/typescript.js:65052 → 66312` |

##### `some` (`node_modules/typescript/lib/typescript.js:2794:14`)

|  Change |   Delta |             % |          Time | Samples | Location                                                |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------- |
| removed | -5.04ms |  41.3% → 0.0% |   5.0ms → 0ms |   4 → 0 | `node_modules/typescript/lib/typescript.js:2784`        |
|  -73.0% | -3.38ms | 37.9% → 19.9% | 4.6ms → 1.3ms |   4 → 1 | `node_modules/typescript/lib/typescript.js:2785 → 2798` |
| +113.7% | +1.38ms |  9.9% → 41.1% | 1.2ms → 2.6ms |   1 → 2 | `node_modules/typescript/lib/typescript.js:2781 → 2794` |
|     new | +1.13ms |  0.0% → 17.9% |   0ms → 1.1ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:2795`        |
|     new | +0.04ms |   0.0% → 0.7% |  0ms → 42.0µs |   0 → 1 | `node_modules/typescript/lib/typescript.js:2796`        |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js:61994:29`)

|  Change |   Delta |             % |          Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| +240.9% | +4.42ms |  9.3% → 44.4% | 1.8ms → 6.2ms |   2 → 5 | `node_modules/typescript/lib/typescript.js:60744 → 61999` |
|  -51.9% | -4.04ms | 39.4% → 26.6% | 7.8ms → 3.8ms |   7 → 3 | `node_modules/typescript/lib/typescript.js:60741 → 61996` |
| removed | -1.29ms |   6.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60493`         |
| removed | -1.29ms |   6.5% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60739`         |
| removed | -1.25ms |   6.3% → 0.0% |   1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:60679`         |

##### `getTypePredicateOfSignature` (`node_modules/typescript/lib/typescript.js:62417:39`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -1.25ms | 19.1% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61162` |
| removed | -1.25ms | 19.1% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61163` |
| removed | -1.25ms | 19.1% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61166` |
| removed | -1.13ms | 17.2% → 0.0% | 1.1ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:61165` |

##### `resolveStructuredTypeMembers` (`node_modules/typescript/lib/typescript.js:61345:40`)

|  Change |   Delta |             % |           Time | Samples | Location                                                  |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------------------------------- |
|  -41.7% | -5.38ms | 71.5% → 59.0% | 12.9ms → 7.5ms |  10 → 6 | `node_modules/typescript/lib/typescript.js:60090 → 61345` |
| removed | -2.50ms |  13.9% → 0.0% |    2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:60099`         |
|     new | +2.50ms |  0.0% → 19.7% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:61349`         |
|     new | +2.50ms |  0.0% → 19.7% |    0ms → 2.5ms |   0 → 2 | `node_modules/typescript/lib/typescript.js:61355`         |
| removed | -1.75ms |   9.7% → 0.0% |    1.8ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:60091`         |

##### `getTypeFromTypeNode` (`node_modules/typescript/lib/typescript.js:65779:31`)

| Change |   Delta |             % |          Time | Samples | Location                                                  |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------------------------- |
| -79.6% | -5.04ms | 92.1% → 81.6% | 6.3ms → 1.3ms |   5 → 1 | `node_modules/typescript/lib/typescript.js:64525 → 65780` |

##### `stat` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Location |
| -----: | ------: | -----: | --------------: | ------: | -------- |
| -33.9% | -5.17ms | 100.0% | 15.3ms → 10.1ms |  12 → 8 | 1746     |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

| Change |   Delta |      % |            Time | Samples | Location                                |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------------- |
|  -5.9% | -5.13ms | 100.0% | 86.5ms → 81.4ms | 69 → 65 | `node:internal/modules/cjs/loader:1713` |

##### `internIdentifier` (`node_modules/typescript/lib/typescript.js:33331:28`)

|  Change |   Delta |              % |          Time | Samples | Location                                                  |
| ------: | ------: | -------------: | ------------: | ------: | --------------------------------------------------------- |
| removed | -3.79ms |   30.2% → 0.0% |   3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:32279`         |
|  -14.3% | -1.25ms | 69.8% → 100.0% | 8.8ms → 7.5ms |   7 → 6 | `node_modules/typescript/lib/typescript.js:32277 → 33332` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:88199:30`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -2.54ms | 40.9% → 0.0% | 2.5ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:86887` |
| removed | -2.42ms | 38.9% → 0.0% | 2.4ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:86891` |

##### `getTypeOfMappedSymbol` (`node_modules/typescript/lib/typescript.js:61244:33`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -2.42ms | 49.6% → 0.0% | 2.4ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:59989` |
| removed | -1.29ms | 26.5% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:59999` |
| removed | -1.17ms | 23.9% → 0.0% | 1.2ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:59997` |

##### `getNonNullableType` (`node_modules/typescript/lib/typescript.js:70430:30`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -2.29ms | 47.4% → 0.0% | 2.3ms → 0ms |   2 → 0 | `node_modules/typescript/lib/typescript.js:69171` |
| removed | -1.29ms | 26.7% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:71023` |
| removed | -1.25ms | 25.9% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:69170` |

##### `resolveCall` (`node_modules/typescript/lib/typescript.js:78594:23`)

|  Change |   Delta |             % |        Time | Samples | Location                                                  |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------------- |
| removed | -3.54ms |  48.8% → 0.0% | 3.5ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:77327`         |
| removed | -1.25ms |  17.2% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:77313`         |
|     new | +1.25ms |  0.0% → 49.2% | 0ms → 1.3ms |   0 → 1 | `node_modules/typescript/lib/typescript.js:78594`         |
| removed | -1.21ms |  16.7% → 0.0% | 1.2ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:77300`         |
|   +3.4% | +0.04ms | 17.2% → 50.8% |       1.3ms |       1 | `node_modules/typescript/lib/typescript.js:77324 → 78619` |

##### `reducePathComponents` (`node_modules/typescript/lib/typescript.js:9088:30`)

|  Change |   Delta |            % |        Time | Samples | Location                                         |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------ |
| removed | -3.79ms | 81.3% → 0.0% | 3.8ms → 0ms |   3 → 0 | `node_modules/typescript/lib/typescript.js:9088` |
| removed | -0.88ms | 18.7% → 0.0% | 0.9ms → 0ms |   1 → 0 | `node_modules/typescript/lib/typescript.js:2784` |

##### `tryStatSync` (`node:fs:389:21`)

| Change |   Delta |      % |           Time | Samples | Location      |
| -----: | ------: | -----: | -------------: | ------: | ------------- |
| -44.5% | -4.54ms | 100.0% | 10.2ms → 5.7ms |   8 → 5 | `node:fs:390` |

##### `statSync` (`node:fs:1745:18`)

|  Change |   Delta |            % |        Time | Samples | Location       |
| ------: | ------: | -----------: | ----------: | ------: | -------------- |
| removed | -1.29ms | 50.8% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:fs:1745` |
| removed | -1.25ms | 49.2% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:fs:1755` |

##### `isInt32` (`node:internal/validators:45:17`)

|  Change |   Delta |             % |        Time | Samples | Location                      |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------- |
| removed | -1.29ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:internal/validators:46` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|  Change |   Delta |             % |        Time | Samples | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:internal/bootstrap/realm:397` |

##### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|  Change |   Delta |             % |        Time | Samples | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:internal/bootstrap/realm:188` |

##### `(anonymous)` (`node:internal/streams/lazy_transform:1:1`)

|  Change |   Delta |             % |        Time | Samples | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:internal/streams/lazy_transform:43` |

##### `readFileSync` (`node:fs:433:22`)

|  Change |   Delta |              % |        Time | Samples | Location      |
| ------: | ------: | -------------: | ----------: | ------: | ------------- |
| removed | -1.25ms |   49.2% → 0.0% | 1.3ms → 0ms |   1 → 0 | `node:fs:462` |
|   +0.1% | +1.00µs | 50.8% → 100.0% |       1.3ms |       1 | `node:fs:440` |

##### `slice` (`node:buffer:640:12`)

| Change |   Delta |      % |          Time | Samples | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------- |
| -40.6% | -1.00ms | 100.0% | 2.5ms → 1.5ms |       2 | `node:buffer:640` |

##### `open` (`<unknown>`)

|  Change |   Delta |              % |           Time | Samples | Location |
| ------: | ------: | -------------: | -------------: | ------: | -------- |
|  -22.7% | -2.58ms | 90.1% → 100.0% | 11.4ms → 8.8ms |   9 → 7 | 560      |
| removed | -1.25ms |    9.9% → 0.0% |    1.3ms → 0ms |   1 → 0 | 563      |

##### `read` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Location |
| -----: | ------: | -----: | ------------: | ------: | -------- |
| -50.8% | -1.29ms | 100.0% | 2.5ms → 1.3ms |   2 → 1 | 736      |

##### `readdir` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.25ms | 100.0% → 0.0% | 1.3ms → 0ms |   1 → 0 | 1593     |

##### `close` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------- |
| removed | -1.08ms | 100.0% → 0.0% | 1.1ms → 0ms |   1 → 0 | 517      |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

| Change |    Delta |             % |              Time |   Samples | Function                        | Location                                                        |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------------------- | --------------------------------------------------------------- |
| +35.1% | +33.84ms |   3.8% → 5.4% |  96.3ms → 130.2ms | 110 → 130 | `doOutsideOfContext`            | `node_modules/typescript/lib/typescript.js:31838:30 → 32890:30` |
| +79.6% | +26.71ms |   1.3% → 2.5% |   33.5ms → 60.2ms |   37 → 48 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js:33781:29 → 34836:29` |
| +65.2% | +26.67ms |   1.6% → 2.8% |   40.9ms → 67.6ms |   41 → 53 | `allowConditionalTypesAnd`      | `node_modules/typescript/lib/typescript.js:31880:36 → 32932:36` |
| +68.8% | +25.50ms |   1.5% → 2.6% |   37.1ms → 62.6ms |   38 → 49 | `parsePostfixTypeOrHigher`      | `node_modules/typescript/lib/typescript.js:33903:36 → 34958:36` |
| +49.1% | +24.04ms |   1.9% → 3.1% |   48.9ms → 73.0ms |   44 → 60 | `nextToken`                     | `node_modules/typescript/lib/typescript.js:31960:21 → 33015:21` |
| +57.8% | +22.92ms |   1.6% → 2.6% |   39.7ms → 62.6ms |   41 → 49 | `parseTypeOperatorOrHigher`     | `node_modules/typescript/lib/typescript.js:33974:37 → 35029:37` |
| +20.4% | +22.88ms |   4.5% → 5.7% | 112.3ms → 135.2ms | 115 → 124 | `doInsideOfContext`             | `node_modules/typescript/lib/typescript.js:31856:29 → 32908:29` |
| +51.6% | +21.79ms |   1.7% → 2.7% |   42.2ms → 64.0ms |   44 → 52 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js:34014:41 → 35069:41` |
| +36.1% | +20.16ms |   2.2% → 3.2% |   55.8ms → 76.0ms |   51 → 67 | `getTypeOfParameter`            | `node_modules/typescript/lib/typescript.js:78772:30 → 80067:30` |
|  +7.2% | +19.58ms | 10.8% → 12.2% | 272.3ms → 291.9ms | 282 → 289 | `parseSourceFileWorker`         | `node_modules/typescript/lib/typescript.js:31659:33 → 32711:33` |
|  +7.2% | +19.58ms | 10.8% → 12.2% | 272.3ms → 291.9ms | 282 → 289 | `parseSourceFile`               | `node_modules/typescript/lib/typescript.js:31471:27 → 32523:27` |
|  +7.2% | +19.58ms | 10.8% → 12.2% | 272.3ms → 291.9ms | 282 → 289 | `createSourceFile`              | `node_modules/typescript/lib/typescript.js:31293:26 → 32345:26` |
|  +7.3% | +19.42ms | 10.5% → 11.9% | 265.3ms → 284.7ms | 276 → 283 | `parseList`                     | `node_modules/typescript/lib/typescript.js:32618:21 → 33673:21` |
| +37.0% | +19.16ms |   2.1% → 3.0% |   51.8ms → 71.0ms |   48 → 59 | `nextTokenWithoutCheck`         | `node_modules/typescript/lib/typescript.js:31953:33 → 33008:33` |
| +36.0% | +17.63ms |   1.9% → 2.8% |   48.9ms → 66.5ms |   52 → 54 | `parseUnionOrIntersectionType`  | `node_modules/typescript/lib/typescript.js:34000:40 → 35055:40` |
| +29.0% | +17.33ms |   2.4% → 3.2% |   59.8ms → 77.2ms |   56 → 69 | `tryGetTypeAtPosition`          | `node_modules/typescript/lib/typescript.js:78864:32 → 80159:32` |
|  +6.4% | +16.92ms | 10.5% → 11.8% | 265.3ms → 282.2ms | 276 → 281 | `parseStatement`                | `node_modules/typescript/lib/typescript.js:35924:26 → 36979:26` |
| +17.7% | +16.54ms |   3.7% → 4.6% |  93.4ms → 109.9ms |   94 → 98 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:36056:56 → 37111:56` |
|  +6.0% | +16.42ms | 10.8% → 12.0% | 271.5ms → 287.9ms | 281 → 285 | `parseListElement`              | `node_modules/typescript/lib/typescript.js:32639:28 → 33694:28` |
| +32.6% | +16.38ms |   2.0% → 2.8% |   50.2ms → 66.5ms |        54 | `parseUnionTypeOrHigher`        | `node_modules/typescript/lib/typescript.js:34017:34 → 35072:34` |

##### Standard library

|  Change |   Delta |            % |          Time | Samples | Function              | Location                                   |
| ------: | ------: | -----------: | ------------: | ------: | --------------------- | ------------------------------------------ |
| +317.0% | +3.83ms | <0.1% → 0.2% | 1.2ms → 5.0ms |   1 → 4 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
|     new | +3.79ms |  0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `wrappedFn`           | `node:internal/errors:535:21`              |
|     new | +3.79ms |  0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `allocate`            | `node:buffer:436:18`                       |
|     new | +3.79ms |  0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `allocUnsafe`         | `node:buffer:411:42`                       |
|     new | +3.79ms |  0.0% → 0.2% |   0ms → 3.8ms |   0 → 3 | `tryCreateBuffer`     | `node:fs:397:25`                           |
|     new | +2.54ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `(anonymous)`         | `node:internal/fs/utils:730:42`            |
|     new | +2.50ms |  0.0% → 0.1% |   0ms → 2.5ms |   0 → 2 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`             |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/crypto/keys:1:1`            |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/crypto/hkdf:1:1`            |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:internal/fs/utils:708:38`            |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `isUint8Array`        | `node:internal/util/types:13:22`           |
|     new | +1.29ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `FastBuffer`          | `node:internal/buffer:956:1`               |
|     new | +1.25ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `toPathIfFileURL`     | `node:internal/url:1671:25`                |
|     new | +1.25ms |  0.0% → 0.1% |   0ms → 1.3ms |   0 → 1 | `(anonymous)`         | `node:fs:2851:23`                          |
|   +3.4% | +0.04ms | <0.1% → 0.1% |         1.3ms |       1 | `(anonymous)`         | `node:crypto:1:1`                          |
|     ~0% | +1.00µs |         0.2% |         5.2ms |       4 | `defaultLoadImpl`     | `node:internal/modules/cjs/loader:1112:25` |
|     ~0% | +1.00µs |         0.2% |         5.2ms |       4 | `loadSource`          | `node:internal/modules/cjs/loader:1797:20` |

##### Native

| Change |   Delta |           % |        Time | Samples | Function   | Location    |
| -----: | ------: | ----------: | ----------: | ------: | ---------- | ----------- |
|    new | +1.25ms | 0.0% → 0.1% | 0ms → 1.3ms |   0 → 1 | `realpath` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |          Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -6.2% | -128.43ms | 82.0% → 81.0% | 2.06s → 1.93s | 2,159 → 2,079 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -5.3% | -121.22ms | 91.2% → 90.9% | 2.29s → 2.17s | 2,367 → 2,283 | `(anonymous)`                              | `cpuprofile-run.mjs`                                              |
|  -5.2% | -118.76ms | 90.8% → 90.6% | 2.28s → 2.16s | 2,366 → 2,284 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                           |
|  -6.5% | -114.84ms | 70.6% → 69.5% | 1.77s → 1.66s | 1,892 → 1,821 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  -6.5% | -114.84ms | 70.6% → 69.5% | 1.77s → 1.66s | 1,892 → 1,821 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  -6.4% | -113.96ms | 70.6% → 69.6% | 1.77s → 1.66s | 1,893 → 1,822 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -6.4% | -113.96ms | 70.6% → 69.6% | 1.77s → 1.66s | 1,893 → 1,822 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  -6.3% | -112.76ms | 70.5% → 69.6% | 1.77s → 1.66s | 1,891 → 1,821 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -6.3% | -112.76ms | 70.5% → 69.6% | 1.77s → 1.66s | 1,891 → 1,821 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  -6.3% | -112.76ms | 70.5% → 69.6% | 1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  -6.3% | -112.76ms | 70.5% → 69.6% | 1.77s → 1.66s | 1,891 → 1,821 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  -6.3% | -112.76ms | 70.5% → 69.6% | 1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  -6.3% | -112.67ms | 70.6% → 69.7% | 1.77s → 1.66s | 1,893 → 1,823 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  -7.0% | -112.25ms | 63.6% → 62.3% | 1.60s → 1.48s | 1,641 → 1,572 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  -6.9% | -111.00ms | 63.6% → 62.3% | 1.60s → 1.48s | 1,640 → 1,572 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% | 1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% | 1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:87336:47 → 88649:47`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% | 1.61s → 1.51s | 1,657 → 1,596 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:87343:32 → 88656:32`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% | 1.61s → 1.51s | 1,657 → 1,596 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  -6.2% | -100.96ms | 64.2% → 63.4% | 1.61s → 1.51s | 1,656 → 1,596 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |

##### Third-party

| Change |     Delta |             % |            Time |       Samples | Function                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -6.2% | -128.43ms | 82.0% → 81.0% |   2.06s → 1.93s | 2,159 → 2,079 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  -6.4% | -113.96ms | 70.6% → 69.6% |   1.77s → 1.66s | 1,893 → 1,822 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -6.4% | -113.96ms | 70.6% → 69.6% |   1.77s → 1.66s | 1,893 → 1,822 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  -6.3% | -112.67ms | 70.6% → 69.7% |   1.77s → 1.66s | 1,893 → 1,823 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  -7.0% | -112.25ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,641 → 1,572 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
|  -6.9% | -111.00ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,640 → 1,572 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36 → 88208:36`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:87336:47 → 88649:47`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:87343:32 → 88656:32`   |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  -6.2% | -100.96ms | 64.2% → 63.4% |   1.61s → 1.51s | 1,656 → 1,596 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  -6.3% |  -76.43ms | 48.3% → 47.7% |   1.21s → 1.13s | 1,227 → 1,188 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:83716:22 → 85011:22`   |
|  -6.6% |  -67.21ms | 40.2% → 39.5% | 1.01s → 943.9ms |     996 → 943 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:78289:31 → 79584:31`   |

##### Garbage collector

| Change |   Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | ------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -3.4% | -6.45ms | 7.5% → 7.6% | 187.7ms → 181.2ms | 153 → 148 | `(garbage collector)` | `<unknown>` |

##### Standard library

|  Change |   Delta |            % |              Time | Samples | Function                   | Location                                   |
| ------: | ------: | -----------: | ----------------: | ------: | -------------------------- | ------------------------------------------ |
|  -27.8% | -9.50ms |  1.4% → 1.0% |   34.2ms → 24.7ms | 27 → 20 | `readFileSync`             | `node:fs:433:22`                           |
|   -7.5% | -7.67ms |  4.1% → 4.0% |  102.9ms → 95.2ms | 82 → 76 | `(anonymous)`              | `node:internal/modules/cjs/loader:1731:37` |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `(anonymous)`              | `node:internal/modules/cjs/loader:1878:37` |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `(anonymous)`              | `node:internal/modules/cjs/loader:1490:33` |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `(anonymous)`              | `node:internal/modules/cjs/loader:1193:24` |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `(anonymous)`              | `node:internal/modules/cjs/loader:1519:36` |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `wrapModuleLoad`           | `node:internal/modules/cjs/loader:237:24`  |
|   -7.1% | -7.67ms |  4.3% → 4.2% | 108.1ms → 100.4ms | 86 → 80 | `require`                  | `node:internal/modules/helpers:146:19`     |
|   -5.9% | -5.13ms |         3.4% |   86.5ms → 81.4ms | 69 → 65 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
|  -44.5% | -4.54ms |  0.4% → 0.2% |    10.2ms → 5.7ms |   8 → 5 | `tryStatSync`              | `node:fs:389:21`                           |
|  -30.4% | -3.83ms |  0.5% → 0.4% |    12.6ms → 8.8ms |  10 → 7 | `openSync`                 | `node:fs:559:18`                           |
|  -65.5% | -2.46ms |         0.1% |     3.8ms → 1.3ms |   3 → 1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
|  -65.5% | -2.46ms |         0.1% |     3.8ms → 1.3ms |   3 → 1 | `compileForPublicLoader`   | `node:internal/bootstrap/realm:332:25`     |
|  -65.5% | -2.46ms |         0.1% |     3.8ms → 1.3ms |   3 → 1 | `loadBuiltinModule`        | `node:internal/modules/helpers:113:27`     |
|  -65.5% | -2.46ms |         0.1% |     3.8ms → 1.3ms |   3 → 1 | `loadBuiltinWithHooks`     | `node:internal/modules/cjs/loader:1159:30` |
| removed | -1.29ms |  0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `isInt32`                  | `node:internal/validators:45:17`           |
|  -50.8% | -1.29ms |         0.1% |     2.5ms → 1.3ms |   2 → 1 | `readSync`                 | `node:fs:695:18`                           |
|  -50.8% | -1.29ms |         0.1% |     2.5ms → 1.3ms |   2 → 1 | `tryReadSync`              | `node:fs:412:21`                           |
| removed | -1.25ms | <0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `(anonymous)`              | `node:perf_hooks:1:1`                      |
| removed | -1.25ms | <0.1% → 0.0% |       1.3ms → 0ms |   1 → 0 | `internalBinding`          | `node:internal/bootstrap/realm:185:45`     |

##### Native

|  Change |   Delta |            % |            Time | Samples | Function  | Location    |
| ------: | ------: | -----------: | --------------: | ------: | --------- | ----------- |
|  -33.9% | -5.17ms |  0.6% → 0.4% | 15.3ms → 10.1ms |  12 → 8 | `stat`    | `<unknown>` |
|  -30.4% | -3.83ms |  0.5% → 0.4% |  12.6ms → 8.8ms |  10 → 7 | `open`    | `<unknown>` |
|  -50.8% | -1.29ms |         0.1% |   2.5ms → 1.3ms |   2 → 1 | `read`    | `<unknown>` |
| removed | -1.25ms | <0.1% → 0.0% |     1.3ms → 0ms |   1 → 0 | `readdir` | `<unknown>` |
| removed | -1.08ms | <0.1% → 0.0% |     1.1ms → 0ms |   1 → 0 | `close`   | `<unknown>` |
