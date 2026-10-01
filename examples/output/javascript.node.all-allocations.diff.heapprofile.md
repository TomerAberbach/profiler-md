# Heap profile diff

Allocated 4.75 GiB → 4.71 GiB (-44.605 MiB, -0.9%) over 9,660 samples → 9,574 samples (516 KiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Third-party      |  -0.7% | -32.626 MiB | 91.6% → 91.8% | 4.35 GiB → 4.32 GiB | 8,892 → 8,825 |
| Standard library |  -2.9% | -11.978 MiB |   8.4% → 8.2% |   408 MiB → 396 MiB |     768 → 749 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |       Delta |            % |                Size |   Samples | Function                       | Location                                                        |
| -------: | ----------: | -----------: | ------------------: | --------: | ------------------------------ | --------------------------------------------------------------- |
|      new | +26.505 MiB |  0.0% → 0.5% |      0 B → 26.5 MiB |    0 → 53 | `createBaseIdentifierNode`     | `node_modules/typescript/lib/typescript.js:22554:36 → 32447:31` |
|      new | +22.007 MiB |  0.0% → 0.5% |        0 B → 22 MiB |    0 → 44 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:44715:26 → 53728:21` |
|    +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`   | `node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
|   +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`            | `node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
|   +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`      | `node_modules/typescript/lib/typescript.js:37231:37 → 38286:37` |
|  +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`   | `node_modules/typescript/lib/typescript.js:24191:38 → 25241:38` |
|   +11.5% |  +6.508 MiB |  1.2% → 1.3% |   56.5 MiB → 63 MiB | 113 → 126 | `next`                         | `<unknown>`                                                     |
|      new |    +6.5 MiB |  0.0% → 0.1% |       0 B → 6.5 MiB |    0 → 13 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:42363:38 → 53423:20` |
|   +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`           | `node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
|  +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`         | `node_modules/typescript/lib/typescript.js:33096:32 → 34151:32` |
| +1094.3% |  +5.498 MiB | <0.1% → 0.1% |     514 KiB → 6 MiB |    1 → 12 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:5742:35 → 34471:157` |
|   +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`           | `node_modules/typescript/lib/typescript.js:32875:30 → 33930:30` |
|  +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`      | `node_modules/typescript/lib/typescript.js:59199:35 → 60454:35` |
|  +180.1% |   +4.53 MiB |         0.1% | 2.52 MiB → 7.05 MiB |    5 → 14 | `add`                          | `<unknown>`                                                     |
|   +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`             | `node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
|   +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`          | `node_modules/typescript/lib/typescript.js:31409:26 → 32461:26` |
|   +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                  | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|  +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol` | `node_modules/typescript/lib/typescript.js:50502:40 → 51743:40` |
|   +66.7% |      +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`                         | `<unknown>`                                                     |
|  +700.1% |    +3.5 MiB | <0.1% → 0.1% |     512 KiB → 4 MiB |     1 → 8 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:3847:10 → 32748:71`  |

##### Third-party

|   Change |       Delta |            % |                Size |   Samples | Function                         | Location                                                        |
| -------: | ----------: | -----------: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------------- |
|      new | +26.505 MiB |  0.0% → 0.5% |      0 B → 26.5 MiB |    0 → 53 | `createBaseIdentifierNode`       | `node_modules/typescript/lib/typescript.js:22554:36 → 32447:31` |
|      new | +22.007 MiB |  0.0% → 0.5% |        0 B → 22 MiB |    0 → 44 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:44715:26 → 53728:21` |
|    +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
|   +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
|   +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`        | `node_modules/typescript/lib/typescript.js:37231:37 → 38286:37` |
|  +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`     | `node_modules/typescript/lib/typescript.js:24191:38 → 25241:38` |
|      new |    +6.5 MiB |  0.0% → 0.1% |       0 B → 6.5 MiB |    0 → 13 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:42363:38 → 53423:20` |
|   +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`             | `node_modules/typescript/lib/typescript.js:68771:30 → 70031:30` |
|  +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`           | `node_modules/typescript/lib/typescript.js:33096:32 → 34151:32` |
| +1094.3% |  +5.498 MiB | <0.1% → 0.1% |     514 KiB → 6 MiB |    1 → 12 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:5742:35 → 34471:157` |
|   +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`             | `node_modules/typescript/lib/typescript.js:32875:30 → 33930:30` |
|  +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`        | `node_modules/typescript/lib/typescript.js:59199:35 → 60454:35` |
|   +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`               | `node_modules/typescript/lib/typescript.js:23941:28 → 24991:28` |
|   +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`            | `node_modules/typescript/lib/typescript.js:31409:26 → 32461:26` |
|   +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                    | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|  +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol`   | `node_modules/typescript/lib/typescript.js:50502:40 → 51743:40` |
|  +700.1% |    +3.5 MiB | <0.1% → 0.1% |     512 KiB → 4 MiB |     1 → 8 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:3847:10 → 32748:71`  |
|   +77.8% |    +3.5 MiB |  0.1% → 0.2% |     4.5 MiB → 8 MiB |    9 → 16 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:61539:31 → 62794:31` |
|   +35.0% |  +3.498 MiB |  0.2% → 0.3% |   10 MiB → 13.5 MiB |   20 → 27 | `getIntersectionType`            | `node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
|   +66.7% |      +3 MiB |  0.1% → 0.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js:33493:42 → 34548:42` |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function              | Location                        |
| ------: | -----------: | -----------: | ------------------: | --------: | --------------------- | ------------------------------- |
|  +11.5% |   +6.508 MiB |  1.2% → 1.3% |   56.5 MiB → 63 MiB | 113 → 126 | `next`                | `<unknown>`                     |
| +180.1% |    +4.53 MiB |         0.1% | 2.52 MiB → 7.05 MiB |    5 → 14 | `add`                 | `<unknown>`                     |
|  +66.7% |       +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`                | `<unknown>`                     |
|  +11.9% |     +2.5 MiB |  0.4% → 0.5% |   21 MiB → 23.5 MiB |   42 → 47 | `splice`              | `<unknown>`                     |
|     new |     +516 KiB | 0.0% → <0.1% |       0 B → 516 KiB |     0 → 1 | `isArray`             | `<unknown>`                     |
|     new | +512.109 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `filter`              | `<unknown>`                     |
|     new | +512.062 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `Uint8Array`          | `<unknown>`                     |
|     new | +512.031 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `map`                 | `<unknown>`                     |
|     new | +512.031 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `readSync`            | `node:fs:695:18`                |
| +100.0% | +512.015 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `wrappedFn`           | `node:internal/errors:535:21`   |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `fromCharCode`        | `<unknown>`                     |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `msFromTimeSpec`      | `node:internal/fs/utils:428:24` |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `StatsBase`           | `node:internal/fs/utils:382:19` |
|   +0.7% | +511.257 KiB |         1.5% |   71.5 MiB → 72 MiB | 143 → 144 | `Map`                 | `<unknown>`                     |
|  +33.2% | +511.015 KiB |        <0.1% |     1.5 MiB → 2 MiB |     3 → 4 | `delete`              | `<unknown>`                     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                         |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | ---------------------------------------------------------------- |
|   -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30`  |
| removed | -26.005 MiB |   0.5% → 0.0% |        26 MiB → 0 B |        52 → 0 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:31395:31`             |
| removed |  -24.01 MiB |   0.5% → 0.0% |        24 MiB → 0 B |        48 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:52487:21 → 64605:361` |
|  -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:64955:36 → 66215:36`  |
|  -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:31416:21 → 32468:21`  |
|   -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`  |
|   -5.0% |  -6.561 MiB |   2.7% → 2.6% |   131 MiB → 125 MiB |     248 → 237 | `set`                           | `<unknown>`                                                      |
|  -34.3% |      -6 MiB |   0.4% → 0.2% | 17.5 MiB → 11.5 MiB |       35 → 23 | `values`                        | `<unknown>`                                                      |
|  -28.0% |  -5.968 MiB |   0.4% → 0.3% | 21.3 MiB → 15.3 MiB |       28 → 17 | `slice`                         | `node:buffer:640:12`                                             |
|  -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `node_modules/typescript/lib/typescript.js:33724:32 → 34779:32`  |
|  -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:21708:28 → 22701:28`  |
|  -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `node_modules/typescript/lib/typescript.js:23826:33 → 24876:33`  |
|  -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `node_modules/typescript/lib/typescript.js:33339:32 → 34394:32`  |
|  -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `node_modules/typescript/lib/typescript.js:52466:28 → 53707:28`  |
|  -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25 → 62753:25`  |
|  -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `node_modules/typescript/lib/typescript.js:60937:36 → 62192:36`  |
|  -39.1% |    -4.5 MiB |   0.2% → 0.1% |    11.5 MiB → 7 MiB |       23 → 14 | `slice`                         | `<unknown>`                                                      |
|  -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:62541:41 → 63796:41`  |
|  -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`  |
|  -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `node_modules/typescript/lib/typescript.js:68375:32 → 69635:32`  |

##### Third-party

|  Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                         |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | ---------------------------------------------------------------- |
|   -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30`  |
| removed | -26.005 MiB |   0.5% → 0.0% |        26 MiB → 0 B |        52 → 0 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:31395:31`             |
| removed |  -24.01 MiB |   0.5% → 0.0% |        24 MiB → 0 B |        48 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:52487:21 → 64605:361` |
|  -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:64955:36 → 66215:36`  |
|  -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:31416:21 → 32468:21`  |
|   -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30`  |
|  -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `node_modules/typescript/lib/typescript.js:33724:32 → 34779:32`  |
|  -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:21708:28 → 22701:28`  |
|  -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `node_modules/typescript/lib/typescript.js:23826:33 → 24876:33`  |
|  -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `node_modules/typescript/lib/typescript.js:33339:32 → 34394:32`  |
|  -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `node_modules/typescript/lib/typescript.js:52466:28 → 53707:28`  |
|  -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25 → 62753:25`  |
|  -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `node_modules/typescript/lib/typescript.js:60937:36 → 62192:36`  |
|  -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:62541:41 → 63796:41`  |
|  -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25`  |
|  -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `node_modules/typescript/lib/typescript.js:68375:32 → 69635:32`  |
|  -50.0% |      -4 MiB |   0.2% → 0.1% |       8 MiB → 4 MiB |        16 → 8 | `mapType`                       | `node_modules/typescript/lib/typescript.js:71268:19 → 72551:19`  |
|   -2.6% |  -3.998 MiB |   3.2% → 3.1% |   156 MiB → 152 MiB |     311 → 303 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67063:36 → 68323:36`  |
|  -54.6% |  -3.001 MiB |          0.1% |   5.5 MiB → 2.5 MiB |        11 → 5 | `toLowerCase`                   | `node_modules/typescript/lib/typescript.js:3492:21 → 3505:21`    |
|  -37.5% |      -3 MiB |   0.2% → 0.1% |       8 MiB → 5 MiB |       16 → 10 | `getPropertyTypeForIndexType`   | `node_modules/typescript/lib/typescript.js:63548:39 → 64803:39`  |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function          | Location                                   |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | ------------------------------------------ |
|   -5.0% |   -6.561 MiB |  2.7% → 2.6% |   131 MiB → 125 MiB | 248 → 237 | `set`             | `<unknown>`                                |
|  -34.3% |       -6 MiB |  0.4% → 0.2% | 17.5 MiB → 11.5 MiB |   35 → 23 | `values`          | `<unknown>`                                |
|  -28.0% |   -5.968 MiB |  0.4% → 0.3% | 21.3 MiB → 15.3 MiB |   28 → 17 | `slice`           | `node:buffer:640:12`                       |
|  -39.1% |     -4.5 MiB |  0.2% → 0.1% |    11.5 MiB → 7 MiB |   23 → 14 | `slice`           | `<unknown>`                                |
|  -80.0% |       -2 MiB | 0.1% → <0.1% |   2.5 MiB → 512 KiB |     5 → 1 | `trimEnd`         | `<unknown>`                                |
|  -60.0% |     -1.5 MiB | 0.1% → <0.1% |     2.5 MiB → 1 MiB |     5 → 2 | `split`           | `<unknown>`                                |
| removed |     -1.5 MiB | <0.1% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `get`             | `<unknown>`                                |
| removed |   -1.468 MiB | <0.1% → 0.0% |      1.47 MiB → 0 B |     1 → 0 | `post`            | `node:inspector:118:7`                     |
|  -25.0% |       -1 MiB |         0.1% |       4 MiB → 3 MiB |     8 → 6 | `Set`             | `<unknown>`                                |
| removed | -522.375 KiB | <0.1% → 0.0% |       522 KiB → 0 B |     1 → 0 | `charCodeAt`      | `<unknown>`                                |
| removed |  -513.75 KiB | <0.1% → 0.0% |       514 KiB → 0 B |     1 → 0 | `tryStatSync`     | `node:fs:389:21`                           |
| removed | -512.078 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `internalBinding` | `node:internal/bootstrap/realm:185:45`     |
| removed | -512.062 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `(anonymous)`     | `node:crypto:1:1`                          |
| removed | -512.031 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `substring`       | `<unknown>`                                |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `trimStart`       | `<unknown>`                                |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |     1 → 0 | `getDirent`       | `node:internal/fs/utils:291:19`            |
|   -5.3% | -511.984 KiB |         0.2% |     9.5 MiB → 9 MiB |   19 → 18 | `replace`         | `<unknown>`                                |
|   -1.8% | -510.234 KiB |  0.6% → 0.5% |   27 MiB → 26.5 MiB |   54 → 53 | `push`            | `<unknown>`                                |
|   -4.5% | -401.937 KiB |         0.2% | 8.77 MiB → 8.37 MiB |     2 → 1 | `readFileSync`    | `node:fs:433:22`                           |
|   -2.2% | -120.312 KiB |         0.1% | 5.27 MiB → 5.16 MiB |        10 | `wrapSafe`        | `node:internal/modules/cjs/loader:1671:18` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

|     Change |        Delta |             % |                Size |       Samples | Function            | Location                                                         |
| ---------: | -----------: | ------------: | ------------------: | ------------: | ------------------- | ---------------------------------------------------------------- |
| +838473.6% |   +4.094 GiB | <0.1% → 87.0% |  512 KiB → 4.09 GiB |     1 → 8,349 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:82639:23 → 124899:76` |
|  +46528.7% |   +4.092 GiB |  0.2% → 87.1% |  9.01 MiB → 4.1 GiB |    18 → 8,362 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:85042:37 → 124967:37` |
|  +20222.4% | +506.102 MiB |  0.1% → 10.5% |   2.5 MiB → 509 MiB |     5 → 1,003 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:85059:16 → 125505:7`  |
|  +13304.7% | +467.084 MiB |   0.1% → 9.8% |  3.51 MiB → 471 MiB |       7 → 927 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:80775:37 → 123071:10` |
|  +67289.1% | +336.455 MiB |  <0.1% → 7.0% |   512 KiB → 337 MiB |       1 → 670 | `addLazyDiagnostic` | `node_modules/typescript/lib/typescript.js:48844:27 → 88652:25`  |
|   +2902.7% | +232.465 MiB |   0.2% → 5.0% |  8.01 MiB → 240 MiB |      16 → 480 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:82330:30 → 124028:24` |
|   +3702.9% | +229.035 MiB |   0.1% → 4.9% |  6.19 MiB → 235 MiB |      12 → 467 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:74165:22 → 83533:27`  |
|   +4526.3% | +181.069 MiB |   0.1% → 3.8% |     4 MiB → 185 MiB |       8 → 370 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:34319:18 → 37111:56`  |
|    +991.7% |  +163.72 MiB |   0.3% → 3.7% |  16.5 MiB → 180 MiB |      33 → 348 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:82452:23 → 124077:30` |
|  +29639.5% | +148.201 MiB |  <0.1% → 3.1% |   512 KiB → 149 MiB |       1 → 297 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:3847:10 → 32748:71`   |
|  +27119.1% | +135.605 MiB |  <0.1% → 2.8% |   512 KiB → 136 MiB |       1 → 272 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:38591:27 → 46417:21`  |
|  +18053.8% |   +91.26 MiB |  <0.1% → 1.9% |  518 KiB → 91.8 MiB |       1 → 183 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:85273:14 → 125782:35` |
|   +5498.6% |  +82.753 MiB |  <0.1% → 1.7% |  1.5 MiB → 84.3 MiB |       3 → 168 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:72577:105 → 81757:12` |
|  +15129.2% |   +76.01 MiB |  <0.1% → 1.6% |  514 KiB → 76.5 MiB |       1 → 153 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:5742:35 → 34471:157`  |
|  +12234.6% |  +61.176 MiB |  <0.1% → 1.3% |  512 KiB → 61.7 MiB |       1 → 123 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:63232:30 → 66186:61`  |
|   +1933.7% |  +58.014 MiB |   0.1% → 1.3% |      3 MiB → 61 MiB |       6 → 122 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:68698:77 → 72303:29`  |
|      +4.0% |  +44.164 MiB | 23.0% → 24.1% | 1.09 GiB → 1.13 GiB | 2,227 → 2,315 | `checkArrayLiteral` | `node_modules/typescript/lib/typescript.js:74651:29 → 75934:29`  |
|    +263.8% |  +43.567 MiB |   0.3% → 1.2% | 16.5 MiB → 60.1 MiB |      33 → 120 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:85458:27 → 125932:42` |
|   +1960.7% |  +39.311 MiB |  <0.1% → 0.9% | 2.01 MiB → 41.3 MiB |        4 → 82 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:72572:47 → 80900:39`  |
|      +8.4% |  +34.939 MiB |   8.6% → 9.4% |   417 MiB → 452 MiB |     833 → 903 | `parseStatement`    | `node_modules/typescript/lib/typescript.js:35924:26 → 36979:26`  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function              | Location                        |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------- | ------------------------------- |
|   +0.3% |   +7.855 MiB | 54.8% → 55.5% |            2.61 GiB | 5,309 → 5,326 | `forEach`             | `<unknown>`                     |
| +180.1% |    +4.53 MiB |          0.1% | 2.52 MiB → 7.05 MiB |        5 → 14 | `add`                 | `<unknown>`                     |
|  +66.7% |       +4 MiB |   0.1% → 0.2% |      6 MiB → 10 MiB |       12 → 20 | `join`                | `<unknown>`                     |
|  +11.9% |     +2.5 MiB |   0.4% → 0.5% |   21 MiB → 23.5 MiB |       42 → 47 | `splice`              | `<unknown>`                     |
| +400.0% |       +2 MiB |  <0.1% → 0.1% |   512 KiB → 2.5 MiB |         1 → 5 | `statSync`            | `node:fs:1745:18`               |
|   +2.0% |   +1.546 MiB |   1.6% → 1.7% | 78.1 MiB → 79.6 MiB |     156 → 159 | `Map`                 | `<unknown>`                     |
|     new |     +1.5 MiB |  0.0% → <0.1% |       0 B → 1.5 MiB |         0 → 3 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
|     new |       +1 MiB |  0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `filter`              | `<unknown>`                     |
|     new |     +516 KiB |  0.0% → <0.1% |       0 B → 516 KiB |         0 → 1 | `isArray`             | `<unknown>`                     |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `Uint8Array`          | `<unknown>`                     |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `FastBuffer`          | `node:internal/buffer:956:1`    |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `createUnsafeBuffer`  | `node:internal/buffer:1082:28`  |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `allocate`            | `node:buffer:436:18`            |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `allocUnsafe`         | `node:buffer:411:42`            |
|     new | +512.062 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `tryCreateBuffer`     | `node:fs:397:25`                |
|     new | +512.031 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `readSync`            | `node:fs:695:18`                |
|     new | +512.031 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `tryReadSync`         | `node:fs:412:21`                |
| +100.0% | +512.015 KiB |         <0.1% |     512 KiB → 1 MiB |         1 → 2 | `wrappedFn`           | `node:internal/errors:535:21`   |
|     new | +512.015 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `fromCharCode`        | `<unknown>`                     |
|     new | +512.015 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `msFromTimeSpec`      | `node:internal/fs/utils:428:24` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Third-party

|  Change |        Delta |             % |                Size |       Samples | Function                       | Location                                                         |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------------------- |
| removed |    -4.16 GiB |  87.6% → 0.0% |      4.16 GiB → 0 B |     8,484 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:123385:37`            |
| removed |   -4.154 GiB |  87.4% → 0.0% |      4.15 GiB → 0 B |     8,470 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:123317:76`            |
| removed | -492.132 MiB |  10.1% → 0.0% |       492 MiB → 0 B |       969 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:123923:7`             |
| removed | -443.125 MiB |   9.1% → 0.0% |       443 MiB → 0 B |       871 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:121493:10`            |
| removed | -334.871 MiB |   6.9% → 0.0% |       335 MiB → 0 B |       666 → 0 | `addLazyDiagnostic`            | `node_modules/typescript/lib/typescript.js:87339:25`             |
| removed | -240.903 MiB |   5.0% → 0.0% |       241 MiB → 0 B |       480 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:122449:24`            |
|  -93.2% | -210.852 MiB |   4.6% → 0.3% |  226 MiB → 15.3 MiB |      449 → 17 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:82238:27 → 123127:40` |
| removed | -159.273 MiB |   3.3% → 0.0% |       159 MiB → 0 B |       306 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:122498:30`            |
|  -89.2% | -156.576 MiB |   3.6% → 0.4% |    176 MiB → 19 MiB |      351 → 38 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:36056:56 → 38259:63`  |
|  -98.0% | -124.193 MiB |   2.6% → 0.1% |   127 MiB → 2.5 MiB |       253 → 5 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:31696:71 → 35574:144` |
|   -5.3% |  -122.41 MiB | 47.3% → 45.2% | 2.25 GiB → 2.13 GiB | 4,584 → 4,340 | `applyToParameterTypes`        | `node_modules/typescript/lib/typescript.js:69472:33 → 70732:33`  |
|  -75.2% | -105.053 MiB |   2.9% → 0.7% |  140 MiB → 34.6 MiB |      279 → 69 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:45224:21 → 54299:149` |
| removed |  -97.386 MiB |   2.0% → 0.0% |      97.4 MiB → 0 B |       194 → 0 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:124200:35`            |
|  -99.4% |  -81.766 MiB |  1.7% → <0.1% |  82.3 MiB → 512 KiB |       164 → 1 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:80462:12 → 88171:26`  |
|   -2.3% |  -79.892 MiB | 70.4% → 69.4% | 3.35 GiB → 3.27 GiB | 6,820 → 6,662 | `checkTypeRelatedTo`           | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30`  |
|  -94.9% |  -75.013 MiB |   1.6% → 0.1% |      79 MiB → 4 MiB |       158 → 8 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:33416:157 → 36466:38` |
|   -1.8% |  -67.355 MiB | 75.9% → 75.2% | 3.61 GiB → 3.54 GiB | 7,344 → 7,210 | `forEach`                      | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`    |
|   -3.7% |  -66.772 MiB | 37.3% → 36.2% | 1.77 GiB → 1.71 GiB | 3,614 → 3,481 | `checkVariableDeclarationList` | `node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`  |
|   -3.7% |  -65.008 MiB | 36.4% → 35.4% | 1.73 GiB → 1.66 GiB | 3,526 → 3,396 | `checkExpressionCached`        | `node_modules/typescript/lib/typescript.js:81145:33 → 82440:33`  |
|  -97.0% |  -64.174 MiB |  1.4% → <0.1% |    66.2 MiB → 2 MiB |       132 → 4 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:64926:61 → 71416:42`  |

##### Standard library

|  Change |      Delta |            % |                Size |   Samples | Function                   | Location                                   |
| ------: | ---------: | -----------: | ------------------: | --------: | -------------------------- | ------------------------------------------ |
|   -5.0% | -6.561 MiB |  2.7% → 2.6% |   131 MiB → 125 MiB | 248 → 237 | `set`                      | `<unknown>`                                |
|  -34.3% |     -6 MiB |  0.4% → 0.2% | 17.5 MiB → 11.5 MiB |   35 → 23 | `values`                   | `<unknown>`                                |
|  -28.0% | -5.968 MiB |  0.4% → 0.3% | 21.3 MiB → 15.3 MiB |   28 → 17 | `slice`                    | `node:buffer:640:12`                       |
|  -28.0% | -5.968 MiB |  0.4% → 0.3% | 21.3 MiB → 15.3 MiB |   28 → 17 | `toString`                 | `node:buffer:839:46`                       |
|   -6.6% | -5.508 MiB |  1.7% → 1.6% |   83.5 MiB → 78 MiB | 167 → 156 | `next`                     | `<unknown>`                                |
|  -39.1% |   -4.5 MiB |  0.2% → 0.1% |    11.5 MiB → 7 MiB |   23 → 14 | `slice`                    | `<unknown>`                                |
|  -23.3% | -3.501 MiB |  0.3% → 0.2% |   15 MiB → 11.5 MiB |   30 → 23 | `replace`                  | `<unknown>`                                |
|  -80.0% |     -2 MiB | 0.1% → <0.1% |   2.5 MiB → 512 KiB |     5 → 1 | `trimEnd`                  | `<unknown>`                                |
|  -60.0% |   -1.5 MiB | 0.1% → <0.1% |     2.5 MiB → 1 MiB |     5 → 2 | `split`                    | `<unknown>`                                |
| removed |   -1.5 MiB | <0.1% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `get`                      | `<unknown>`                                |
| removed | -1.468 MiB | <0.1% → 0.0% |      1.47 MiB → 0 B |     1 → 0 | `post`                     | `node:inspector:118:7`                     |
| removed | -1.468 MiB | <0.1% → 0.0% |      1.47 MiB → 0 B |     1 → 0 | `(anonymous)`              | `node:internal/util:477:24`                |
| removed | -1.468 MiB | <0.1% → 0.0% |      1.47 MiB → 0 B |     1 → 0 | `Promise`                  | `<unknown>`                                |
| removed | -1.468 MiB | <0.1% → 0.0% |      1.47 MiB → 0 B |     1 → 0 | `fn`                       | `node:internal/util:476:14`                |
|  -25.0% |     -1 MiB |         0.1% |       4 MiB → 3 MiB |     8 → 6 | `Set`                      | `<unknown>`                                |
| removed |     -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `(anonymous)`              | `node:crypto:1:1`                          |
| removed |     -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| removed |     -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `compileForPublicLoader`   | `node:internal/bootstrap/realm:332:25`     |
| removed |     -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `loadBuiltinModule`        | `node:internal/modules/helpers:113:27`     |
| removed |     -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `loadBuiltinWithHooks`     | `node:internal/modules/cjs/loader:1159:30` |
