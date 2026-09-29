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

|   Change |    Delta |            % |            Time | Samples | Function                     | Location                                             |
| -------: | -------: | -----------: | --------------: | ------: | ---------------------------- | ---------------------------------------------------- |
|   +47.2% | +13.04ms |  1.1% → 1.7% | 27.6ms → 40.7ms | 25 → 31 | `scan`                       | `node_modules/typescript/lib/typescript.js:12895:16` |
|   +32.2% | +12.55ms |  1.5% → 2.2% | 38.9ms → 51.5ms | 33 → 46 | `checkTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:67445:30` |
|  +151.6% |  +8.59ms |  0.2% → 0.6% |  5.7ms → 14.3ms |  5 → 15 | `checkIdentifier`            | `node_modules/typescript/lib/typescript.js:74242:27` |
|  +590.2% |  +7.63ms |  0.1% → 0.4% |   1.3ms → 8.9ms |   1 → 7 | `parseExpected`              | `node_modules/typescript/lib/typescript.js:33091:25` |
|   +20.2% |  +6.92ms |  1.4% → 1.7% | 34.3ms → 41.2ms | 43 → 48 | `isRelatedTo`                | `node_modules/typescript/lib/typescript.js:67753:25` |
|      new |  +6.88ms |  0.0% → 0.3% |     0ms → 6.9ms |   0 → 6 | `nextToken`                  | `node_modules/typescript/lib/typescript.js:33015:21` |
|   +30.8% |  +6.38ms |  0.8% → 1.1% | 20.7ms → 27.0ms | 29 → 33 | `bind`                       | `node_modules/typescript/lib/typescript.js:47793:16` |
|  +159.2% |  +6.17ms |  0.2% → 0.4% |  3.9ms → 10.0ms |   4 → 9 | `addInheritedMembers`        | `node_modules/typescript/lib/typescript.js:60282:31` |
|   +19.8% |  +5.87ms |  1.2% → 1.5% | 29.6ms → 35.5ms | 27 → 33 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:66040:38` |
|  +116.8% |  +5.79ms |  0.2% → 0.4% |  5.0ms → 10.7ms |   4 → 9 | `getResolvedSymbol`          | `node_modules/typescript/lib/typescript.js:71910:29` |
|   +34.7% |  +5.42ms |  0.6% → 0.9% | 15.6ms → 21.0ms | 13 → 18 | `createTypeReference`        | `node_modules/typescript/lib/typescript.js:62794:31` |
|      new |  +5.25ms |  0.0% → 0.2% |     0ms → 5.3ms |   0 → 4 | `parseLiteralTypeNode`       | `node_modules/typescript/lib/typescript.js:34779:32` |
|  +206.7% |  +5.17ms |  0.1% → 0.3% |   2.5ms → 7.7ms |   3 → 7 | `iterateCommentRanges`       | `node_modules/typescript/lib/typescript.js:12043:30` |
|  +187.9% |  +5.17ms |  0.1% → 0.3% |   2.8ms → 7.9ms |   3 → 7 | `createTypeMapper`           | `node_modules/typescript/lib/typescript.js:65904:28` |
|  +400.1% |  +5.00ms | <0.1% → 0.3% |   1.3ms → 6.3ms |   1 → 5 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:53728:21` |
|  +128.0% |  +4.96ms |  0.2% → 0.4% |   3.9ms → 8.8ms |   4 → 7 | `getRelationKey`             | `node_modules/typescript/lib/typescript.js:69989:26` |
| +1883.6% |  +4.71ms | <0.1% → 0.2% |   0.3ms → 5.0ms |   2 → 4 | `checkExpression`            | `node_modules/typescript/lib/typescript.js:82771:27` |
|  +114.7% |  +4.54ms |  0.2% → 0.4% |   4.0ms → 8.5ms |   5 → 8 | `getTypeAtFlowAssignment`    | `node_modules/typescript/lib/typescript.js:73025:37` |
|   +69.6% |  +4.29ms |  0.2% → 0.4% |  6.2ms → 10.5ms | 12 → 16 | `checkExpressionWorker`      | `node_modules/typescript/lib/typescript.js:82811:33` |
| +1018.9% |  +4.25ms | <0.1% → 0.2% |   0.4ms → 4.7ms |   1 → 4 | `createNodeArray`            | `node_modules/typescript/lib/typescript.js:33287:27` |

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

|  Change |    Delta |            % |              Time |   Samples | Function                            | Location                                             |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------- | ---------------------------------------------------- |
|  -75.3% | -13.12ms |  0.7% → 0.2% |    17.4ms → 4.3ms |     8 → 6 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:61753:45` |
|  -17.9% | -12.38ms |  2.7% → 2.4% |   69.0ms → 56.7ms |   65 → 55 | `recursiveTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:68323:36` |
|  -33.5% |  -7.79ms |  0.9% → 0.6% |   23.2ms → 15.5ms |   21 → 16 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js:67408:29` |
|  -71.3% |  -7.75ms |  0.4% → 0.1% |    10.9ms → 3.1ms |     9 → 4 | `getTypeArguments`                  | `node_modules/typescript/lib/typescript.js:62827:28` |
|  -57.5% |  -7.71ms |  0.5% → 0.2% |    13.4ms → 5.7ms |    12 → 6 | `instantiateTypeWithAlias`          | `node_modules/typescript/lib/typescript.js:66266:36` |
|   -3.4% |  -6.45ms |  7.5% → 7.6% | 187.7ms → 181.2ms | 153 → 148 | `(garbage collector)`               | `<unknown>`                                          |
| removed |  -6.25ms |  0.2% → 0.0% |       6.3ms → 0ms |     5 → 0 | `getTokenValue`                     | `node_modules/typescript/lib/typescript.js:12135:20` |
|  -73.2% |  -6.25ms |  0.3% → 0.1% |     8.5ms → 2.3ms |     4 → 2 | `isEmptyObjectType`                 | `node_modules/typescript/lib/typescript.js:67224:29` |
|  -53.3% |  -6.08ms |  0.5% → 0.2% |    11.4ms → 5.3ms |    14 → 9 | `isSimpleTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:67312:33` |
|  -12.3% |  -6.00ms |  1.9% → 1.8% |   48.8ms → 42.8ms |   52 → 45 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js:66283:33` |
|  -48.5% |  -5.92ms |  0.5% → 0.3% |    12.2ms → 6.3ms |    11 → 7 | `some`                              | `node_modules/typescript/lib/typescript.js:2794:14`  |
|  -28.7% |  -5.67ms |  0.8% → 0.6% |   19.8ms → 14.1ms |   19 → 13 | `getPropertyOfType`                 | `node_modules/typescript/lib/typescript.js:61994:29` |
|  -84.1% |  -5.50ms | 0.3% → <0.1% |     6.5ms → 1.0ms |     9 → 5 | `getTypePredicateOfSignature`       | `node_modules/typescript/lib/typescript.js:62417:39` |
|  -29.4% |  -5.29ms |  0.7% → 0.5% |   18.0ms → 12.7ms |   15 → 11 | `resolveStructuredTypeMembers`      | `node_modules/typescript/lib/typescript.js:61345:40` |
|  -77.0% |  -5.29ms |  0.3% → 0.1% |     6.9ms → 1.6ms |     8 → 4 | `getTypeFromTypeNode`               | `node_modules/typescript/lib/typescript.js:65779:31` |
|  -33.9% |  -5.17ms |  0.6% → 0.4% |   15.3ms → 10.1ms |    12 → 8 | `stat`                              | `<unknown>`                                          |
|   -5.9% |  -5.13ms |         3.4% |   86.5ms → 81.4ms |   69 → 65 | `wrapSafe`                          | `node:internal/modules/cjs/loader:1671:18`           |
|  -40.2% |  -5.04ms |  0.5% → 0.3% |    12.5ms → 7.5ms |    10 → 6 | `internIdentifier`                  | `node_modules/typescript/lib/typescript.js:33331:28` |
|  -79.9% |  -4.96ms |  0.2% → 0.1% |     6.2ms → 1.3ms |     5 → 1 | `checkSourceElement`                | `node_modules/typescript/lib/typescript.js:88199:30` |
| removed |  -4.88ms |  0.2% → 0.0% |       4.9ms → 0ms |     4 → 0 | `getTypeOfMappedSymbol`             | `node_modules/typescript/lib/typescript.js:61244:33` |

##### Third-party

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                                             |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | ---------------------------------------------------- |
|  -75.3% | -13.12ms |  0.7% → 0.2% |  17.4ms → 4.3ms |   8 → 6 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:61753:45` |
|  -17.9% | -12.38ms |  2.7% → 2.4% | 69.0ms → 56.7ms | 65 → 55 | `recursiveTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:68323:36` |
|  -33.5% |  -7.79ms |  0.9% → 0.6% | 23.2ms → 15.5ms | 21 → 16 | `getNormalizedType`                 | `node_modules/typescript/lib/typescript.js:67408:29` |
|  -71.3% |  -7.75ms |  0.4% → 0.1% |  10.9ms → 3.1ms |   9 → 4 | `getTypeArguments`                  | `node_modules/typescript/lib/typescript.js:62827:28` |
|  -57.5% |  -7.71ms |  0.5% → 0.2% |  13.4ms → 5.7ms |  12 → 6 | `instantiateTypeWithAlias`          | `node_modules/typescript/lib/typescript.js:66266:36` |
| removed |  -6.25ms |  0.2% → 0.0% |     6.3ms → 0ms |   5 → 0 | `getTokenValue`                     | `node_modules/typescript/lib/typescript.js:12135:20` |
|  -73.2% |  -6.25ms |  0.3% → 0.1% |   8.5ms → 2.3ms |   4 → 2 | `isEmptyObjectType`                 | `node_modules/typescript/lib/typescript.js:67224:29` |
|  -53.3% |  -6.08ms |  0.5% → 0.2% |  11.4ms → 5.3ms |  14 → 9 | `isSimpleTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js:67312:33` |
|  -12.3% |  -6.00ms |  1.9% → 1.8% | 48.8ms → 42.8ms | 52 → 45 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js:66283:33` |
|  -48.5% |  -5.92ms |  0.5% → 0.3% |  12.2ms → 6.3ms |  11 → 7 | `some`                              | `node_modules/typescript/lib/typescript.js:2794:14`  |
|  -28.7% |  -5.67ms |  0.8% → 0.6% | 19.8ms → 14.1ms | 19 → 13 | `getPropertyOfType`                 | `node_modules/typescript/lib/typescript.js:61994:29` |
|  -84.1% |  -5.50ms | 0.3% → <0.1% |   6.5ms → 1.0ms |   9 → 5 | `getTypePredicateOfSignature`       | `node_modules/typescript/lib/typescript.js:62417:39` |
|  -29.4% |  -5.29ms |  0.7% → 0.5% | 18.0ms → 12.7ms | 15 → 11 | `resolveStructuredTypeMembers`      | `node_modules/typescript/lib/typescript.js:61345:40` |
|  -77.0% |  -5.29ms |  0.3% → 0.1% |   6.9ms → 1.6ms |   8 → 4 | `getTypeFromTypeNode`               | `node_modules/typescript/lib/typescript.js:65779:31` |
|  -40.2% |  -5.04ms |  0.5% → 0.3% |  12.5ms → 7.5ms |  10 → 6 | `internIdentifier`                  | `node_modules/typescript/lib/typescript.js:33331:28` |
|  -79.9% |  -4.96ms |  0.2% → 0.1% |   6.2ms → 1.3ms |   5 → 1 | `checkSourceElement`                | `node_modules/typescript/lib/typescript.js:88199:30` |
| removed |  -4.88ms |  0.2% → 0.0% |     4.9ms → 0ms |   4 → 0 | `getTypeOfMappedSymbol`             | `node_modules/typescript/lib/typescript.js:61244:33` |
| removed |  -4.83ms |  0.2% → 0.0% |     4.8ms → 0ms |   4 → 0 | `getNonNullableType`                | `node_modules/typescript/lib/typescript.js:70430:30` |
|  -64.9% |  -4.71ms |  0.3% → 0.1% |   7.2ms → 2.5ms |   6 → 2 | `resolveCall`                       | `node_modules/typescript/lib/typescript.js:78594:23` |
|  -78.9% |  -4.67ms |  0.2% → 0.1% |   5.9ms → 1.3ms |   5 → 1 | `(anonymous)`                       | `node_modules/typescript/lib/typescript.js:50736:50` |

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

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Third-party

|    Change |     Delta |             % |              Time |     Samples | Function                   | Location                                              |
| --------: | --------: | ------------: | ----------------: | ----------: | -------------------------- | ----------------------------------------------------- |
|  +2150.1% |   +1.589s |  2.9% → 69.6% |    73.9ms → 1.66s |  66 → 1,821 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:124967:37` |
|   +346.4% |   +1.291s | 14.8% → 69.6% |   372.8ms → 1.66s | 365 → 1,822 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:124899:76` |
|   +750.7% | +331.25ms |  1.8% → 15.7% |  44.1ms → 375.4ms |    41 → 359 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:125505:7`  |
|  +1774.5% | +246.92ms |  0.6% → 10.9% |  13.9ms → 260.8ms |    11 → 296 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:83533:27`  |
|  +5829.4% | +123.88ms |   0.1% → 5.3% |   2.1ms → 126.0ms |     2 → 197 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:46417:21`  |
| +32907.8% | +109.58ms |  <0.1% → 4.6% |   0.3ms → 109.9ms |      1 → 98 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:37111:56`  |
|  +8156.5% | +101.96ms |  <0.1% → 4.3% |   1.3ms → 103.2ms |      1 → 99 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:66062:49`  |
|  +5356.7% |  +69.21ms |   0.1% → 2.9% |    1.3ms → 70.5ms |      1 → 64 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:125782:35` |
|  +2254.3% |  +58.25ms |   0.1% → 2.5% |    2.6ms → 60.8ms |      2 → 78 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:81757:12`  |
|       new |  +45.04ms |   0.0% → 1.9% |      0ms → 45.0ms |      0 → 42 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:125932:42` |
|    +15.0% |  +39.71ms | 10.5% → 12.7% | 264.9ms → 304.6ms |   262 → 300 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:123071:10` |
|  +1240.5% |  +35.66ms |   0.1% → 1.6% |    2.9ms → 38.5ms |      4 → 44 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:32748:71`  |
|    +35.1% |  +33.84ms |   3.8% → 5.4% |  96.3ms → 130.2ms |   110 → 130 | `doOutsideOfContext`       | `node_modules/typescript/lib/typescript.js:32890:30`  |
|   +617.6% |  +32.42ms |   0.2% → 1.6% |    5.2ms → 37.7ms |     12 → 62 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:80900:39`  |
|  +2421.9% |  +31.29ms |   0.1% → 1.4% |    1.3ms → 32.6ms |      1 → 28 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:45501:66`  |
|  +1966.1% |  +28.67ms |   0.1% → 1.3% |    1.5ms → 30.1ms |      2 → 57 | `bindJSDoc`                | `node_modules/typescript/lib/typescript.js:47821:21`  |
|  +1642.3% |  +27.38ms |   0.1% → 1.2% |    1.7ms → 29.0ms |      2 → 34 | `onRight`                  | `node_modules/typescript/lib/typescript.js:81826:21`  |
|    +79.6% |  +26.71ms |   1.3% → 2.5% |   33.5ms → 60.2ms |     37 → 48 | `parseNonArrayType`        | `node_modules/typescript/lib/typescript.js:34836:29`  |
|    +65.2% |  +26.67ms |   1.6% → 2.8% |   40.9ms → 67.6ms |     41 → 53 | `allowConditionalTypesAnd` | `node_modules/typescript/lib/typescript.js:32932:36`  |
|    +68.8% |  +25.50ms |   1.5% → 2.6% |   37.1ms → 62.6ms |     38 → 49 | `parsePostfixTypeOrHigher` | `node_modules/typescript/lib/typescript.js:34958:36`  |

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

| Change |     Delta |             % |            Time |       Samples | Function                                   | Location                                              |
| -----: | --------: | ------------: | --------------: | ------------: | ------------------------------------------ | ----------------------------------------------------- |
| -96.8% |   -1.718s |  70.5% → 2.4% |  1.77s → 57.5ms |    1,891 → 50 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124077:30` |
| -85.5% |   -1.520s | 70.6% → 10.8% | 1.77s → 256.9ms |   1,893 → 257 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124028:24` |
| -99.5% | -297.08ms |  11.9% → 0.1% | 298.7ms → 1.6ms |       303 → 2 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:88601:25`  |
| -99.8% | -290.04ms | 11.5% → <0.1% | 290.5ms → 0.5ms |       309 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:79915:25`  |
| -96.2% | -128.96ms |   5.3% → 0.2% | 134.0ms → 5.1ms |       204 → 4 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:43556:38`  |
|  -6.2% | -128.43ms | 82.0% → 81.0% |   2.06s → 1.93s | 2,159 → 2,079 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2378:17`   |
| -99.0% | -123.21ms |   4.9% → 0.1% | 124.5ms → 1.3ms |       118 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:65090:95`  |
|  -5.3% | -121.22ms | 91.2% → 90.9% |   2.29s → 2.17s | 2,367 → 2,283 | `(anonymous)`                              | `cpuprofile-run.mjs`                                  |
|  -5.2% | -118.76ms | 90.8% → 90.6% |   2.28s → 2.16s | 2,366 → 2,284 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
|  -6.4% | -113.96ms | 70.6% → 69.6% |   1.77s → 1.66s | 1,893 → 1,822 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
|  -6.3% | -112.67ms | 70.6% → 69.7% |   1.77s → 1.66s | 1,893 → 1,823 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
|  -7.0% | -112.25ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,641 → 1,572 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:88199:30`  |
|  -6.9% | -111.00ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,640 → 1,572 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:88208:36`  |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |

##### Third-party

| Change |     Delta |             % |            Time |       Samples | Function                                   | Location                                              |
| -----: | --------: | ------------: | --------------: | ------------: | ------------------------------------------ | ----------------------------------------------------- |
| -96.8% |   -1.718s |  70.5% → 2.4% |  1.77s → 57.5ms |    1,891 → 50 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124077:30` |
| -85.5% |   -1.520s | 70.6% → 10.8% | 1.77s → 256.9ms |   1,893 → 257 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124028:24` |
| -99.5% | -297.08ms |  11.9% → 0.1% | 298.7ms → 1.6ms |       303 → 2 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:88601:25`  |
| -99.8% | -290.04ms | 11.5% → <0.1% | 290.5ms → 0.5ms |       309 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:79915:25`  |
| -96.2% | -128.96ms |   5.3% → 0.2% | 134.0ms → 5.1ms |       204 → 4 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:43556:38`  |
|  -6.2% | -128.43ms | 82.0% → 81.0% |   2.06s → 1.93s | 2,159 → 2,079 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2378:17`   |
| -99.0% | -123.21ms |   4.9% → 0.1% | 124.5ms → 1.3ms |       118 → 1 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:65090:95`  |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
|  -6.5% | -114.84ms | 70.6% → 69.5% |   1.77s → 1.66s | 1,892 → 1,821 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
|  -6.4% | -113.96ms | 70.6% → 69.6% |   1.77s → 1.66s | 1,893 → 1,822 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
|  -6.3% | -112.76ms | 70.5% → 69.6% |   1.77s → 1.66s | 1,891 → 1,821 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
|  -6.3% | -112.67ms | 70.6% → 69.7% |   1.77s → 1.66s | 1,893 → 1,823 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
|  -7.0% | -112.25ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,641 → 1,572 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:88199:30`  |
|  -6.9% | -111.00ms | 63.6% → 62.3% |   1.60s → 1.48s | 1,640 → 1,572 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:88208:36`  |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:88649:47`  |
|  -6.3% | -102.21ms | 64.3% → 63.4% |   1.61s → 1.51s | 1,657 → 1,596 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:88656:32`  |

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
