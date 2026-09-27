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

|  Change |       Delta |            % |                Size |   Samples | Function                         | Location                                                          |
| ------: | ----------: | -----------: | ------------------: | --------: | -------------------------------- | ----------------------------------------------------------------- |
|   +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:64785:38 → 66040:38`   |
|  +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js:64758:29 → 66013:29`   |
|  +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`        | `node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`     | `node_modules/typescript/lib/typescript.js:24191:38 → 25241:38`   |
|  +11.5% |  +6.508 MiB |  1.2% → 1.3% |   56.5 MiB → 63 MiB | 113 → 126 | `next`                           | `<unknown>`                                                       |
|  +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`             | `node_modules/typescript/lib/typescript.js:68771:30 → 70031:30`   |
| +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`           | `node_modules/typescript/lib/typescript.js:33096:32 → 34151:32`   |
|  +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`             | `node_modules/typescript/lib/typescript.js:32875:30 → 33930:30`   |
| +500.0% |      +5 MiB | <0.1% → 0.1% |       1 MiB → 6 MiB |    2 → 12 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
| +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`        | `node_modules/typescript/lib/typescript.js:59199:35 → 60454:35`   |
| +180.1% |   +4.53 MiB |         0.1% | 2.52 MiB → 7.05 MiB |    5 → 14 | `add`                            | `<unknown>`                                                       |
|  +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`               | `node_modules/typescript/lib/typescript.js:23941:28 → 24991:28`   |
| +225.0% |    +4.5 MiB | <0.1% → 0.1% |     2 MiB → 6.5 MiB |    4 → 13 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:52182:20 → 53423:20`   |
|  +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`            | `node_modules/typescript/lib/typescript.js:31409:26 → 32461:26`   |
|  +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                    | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
| +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol`   | `node_modules/typescript/lib/typescript.js:50502:40 → 51743:40`   |
|  +66.7% |      +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`                           | `<unknown>`                                                       |
|  +77.8% |    +3.5 MiB |  0.1% → 0.2% |     4.5 MiB → 8 MiB |    9 → 16 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:61539:31 → 62794:31`   |
|  +35.0% |  +3.498 MiB |  0.2% → 0.3% |   10 MiB → 13.5 MiB |   20 → 27 | `getIntersectionType`            | `node_modules/typescript/lib/typescript.js:63112:31 → 64367:31`   |
|  +66.7% |      +3 MiB |  0.1% → 0.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |

##### Third-party

|  Change |       Delta |            % |                Size |   Samples | Function                         | Location                                                          |
| ------: | ----------: | -----------: | ------------------: | --------: | -------------------------------- | ----------------------------------------------------------------- |
|   +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:64785:38 → 66040:38`   |
|  +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js:64758:29 → 66013:29`   |
|  +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`        | `node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`     | `node_modules/typescript/lib/typescript.js:24191:38 → 25241:38`   |
|  +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`             | `node_modules/typescript/lib/typescript.js:68771:30 → 70031:30`   |
| +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`           | `node_modules/typescript/lib/typescript.js:33096:32 → 34151:32`   |
|  +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`             | `node_modules/typescript/lib/typescript.js:32875:30 → 33930:30`   |
| +500.0% |      +5 MiB | <0.1% → 0.1% |       1 MiB → 6 MiB |    2 → 12 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
| +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`        | `node_modules/typescript/lib/typescript.js:59199:35 → 60454:35`   |
|  +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`               | `node_modules/typescript/lib/typescript.js:23941:28 → 24991:28`   |
| +225.0% |    +4.5 MiB | <0.1% → 0.1% |     2 MiB → 6.5 MiB |    4 → 13 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:52182:20 → 53423:20`   |
|  +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`            | `node_modules/typescript/lib/typescript.js:31409:26 → 32461:26`   |
|  +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                    | `node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
| +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol`   | `node_modules/typescript/lib/typescript.js:50502:40 → 51743:40`   |
|  +77.8% |    +3.5 MiB |  0.1% → 0.2% |     4.5 MiB → 8 MiB |    9 → 16 | `createTypeReference`            | `node_modules/typescript/lib/typescript.js:61539:31 → 62794:31`   |
|  +35.0% |  +3.498 MiB |  0.2% → 0.3% |   10 MiB → 13.5 MiB |   20 → 27 | `getIntersectionType`            | `node_modules/typescript/lib/typescript.js:63112:31 → 64367:31`   |
|  +66.7% |      +3 MiB |  0.1% → 0.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |
|  +35.3% |      +3 MiB |         0.2% |  8.5 MiB → 11.5 MiB |   17 → 23 | `getDeclarationName`             | `node_modules/typescript/lib/typescript.js:44929:30 → 46122:30`   |
|  +62.5% |    +2.5 MiB |         0.1% |     4 MiB → 6.5 MiB |    8 → 13 | `createInferenceContextWorker`   | `node_modules/typescript/lib/typescript.js:69513:40 → 70773:40`   |
|  +27.8% |    +2.5 MiB |         0.2% |    9 MiB → 11.5 MiB |   18 → 23 | `getAdjustedTypeWithFacts`       | `node_modules/typescript/lib/typescript.js:71022:36 → 72305:36`   |

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

| Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                        |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | --------------------------------------------------------------- |
|  -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:64955:36 → 66215:36` |
| -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:31416:21 → 32468:21` |
|  -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
|  -5.0% |  -6.561 MiB |   2.7% → 2.6% |   131 MiB → 125 MiB |     248 → 237 | `set`                           | `<unknown>`                                                     |
| -34.3% |      -6 MiB |   0.4% → 0.2% | 17.5 MiB → 11.5 MiB |       35 → 23 | `values`                        | `<unknown>`                                                     |
| -28.0% |  -5.968 MiB |   0.4% → 0.3% | 21.3 MiB → 15.3 MiB |       28 → 17 | `slice`                         | `node:buffer:640:12`                                            |
| -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
| -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:21708:28 → 22701:28` |
| -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `node_modules/typescript/lib/typescript.js:23826:33 → 24876:33` |
| -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `node_modules/typescript/lib/typescript.js:33339:32 → 34394:32` |
| -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `node_modules/typescript/lib/typescript.js:52466:28 → 53707:28` |
| -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25 → 62753:25` |
| -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `node_modules/typescript/lib/typescript.js:60937:36 → 62192:36` |
| -39.1% |    -4.5 MiB |   0.2% → 0.1% |    11.5 MiB → 7 MiB |       23 → 14 | `slice`                         | `<unknown>`                                                     |
| -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |
| -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |
| -50.0% |      -4 MiB |   0.2% → 0.1% |       8 MiB → 4 MiB |        16 → 8 | `mapType`                       | `node_modules/typescript/lib/typescript.js:71268:19 → 72551:19` |
|  -2.6% |  -3.998 MiB |   3.2% → 3.1% |   156 MiB → 152 MiB |     311 → 303 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### Third-party

| Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                        |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | --------------------------------------------------------------- |
|  -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:64955:36 → 66215:36` |
| -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:31416:21 → 32468:21` |
|  -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
| -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
| -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:21708:28 → 22701:28` |
| -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `node_modules/typescript/lib/typescript.js:23826:33 → 24876:33` |
| -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `node_modules/typescript/lib/typescript.js:33339:32 → 34394:32` |
| -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `node_modules/typescript/lib/typescript.js:52466:28 → 53707:28` |
| -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25 → 62753:25` |
| -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `node_modules/typescript/lib/typescript.js:60937:36 → 62192:36` |
| -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |
| -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |
| -50.0% |      -4 MiB |   0.2% → 0.1% |       8 MiB → 4 MiB |        16 → 8 | `mapType`                       | `node_modules/typescript/lib/typescript.js:71268:19 → 72551:19` |
|  -2.6% |  -3.998 MiB |   3.2% → 3.1% |   156 MiB → 152 MiB |     311 → 303 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| -54.6% |  -3.001 MiB |          0.1% |   5.5 MiB → 2.5 MiB |        11 → 5 | `toLowerCase`                   | `node_modules/typescript/lib/typescript.js:3492:21 → 3505:21`   |
| -37.5% |      -3 MiB |   0.2% → 0.1% |       8 MiB → 5 MiB |       16 → 10 | `getPropertyTypeForIndexType`   | `node_modules/typescript/lib/typescript.js:63548:39 → 64803:39` |
| -85.7% |      -3 MiB |  0.1% → <0.1% |   3.5 MiB → 512 KiB |         7 → 1 | `addAntecedent`                 | `node_modules/typescript/lib/typescript.js:45479:25 → 46672:25` |
| -27.8% |    -2.5 MiB |   0.2% → 0.1% |     9 MiB → 6.5 MiB |       18 → 13 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |

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

| Change |       Delta |             % |                Size |       Samples | Function                            | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ----------------------------------------------------------------- |
|  +4.0% | +44.164 MiB | 23.0% → 24.1% | 1.09 GiB → 1.13 GiB | 2,227 → 2,315 | `checkArrayLiteral`                 | `node_modules/typescript/lib/typescript.js:74651:29 → 75934:29`   |
|  +8.4% | +34.939 MiB |   8.6% → 9.4% |   417 MiB → 452 MiB |     833 → 903 | `parseStatement`                    | `node_modules/typescript/lib/typescript.js:35924:26 → 36979:26`   |
|    new | +34.546 MiB |   0.0% → 0.7% |      0 B → 34.5 MiB |        0 → 69 | `expressionOrTypeToTypeNodeHelper`  | `node_modules/typescript/lib/typescript.js:54336:46`              |
|  +8.2% | +34.439 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 910 | `parseSourceFile`                   | `node_modules/typescript/lib/typescript.js:31471:27 → 32523:27`   |
|  +8.2% | +34.439 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 910 | `createSourceFile`                  | `node_modules/typescript/lib/typescript.js:31293:26 → 32345:26`   |
|  +8.1% | +33.939 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 909 | `parseSourceFileWorker`             | `node_modules/typescript/lib/typescript.js:31659:33 → 32711:33`   |
|  +8.1% | +33.939 MiB |   8.6% → 9.4% |   418 MiB → 452 MiB |     835 → 903 | `parseList`                         | `node_modules/typescript/lib/typescript.js:32618:21 → 33673:21`   |
| +18.7% | +33.922 MiB |   3.7% → 4.5% |   181 MiB → 215 MiB |     360 → 428 | `checkTryStatement`                 | `node_modules/typescript/lib/typescript.js:85102:29 → 86397:29`   |
|  +6.2% | +27.469 MiB |   9.1% → 9.8% |   443 MiB → 471 MiB |     871 → 927 | `(anonymous)`                       | `node_modules/typescript/lib/typescript.js:121493:10 → 123071:10` |
|  +1.0% | +26.809 MiB | 52.6% → 53.7% |  2.5 GiB → 2.53 GiB | 5,104 → 5,158 | `checkExpressionWithContextualType` | `node_modules/typescript/lib/typescript.js:81122:45 → 82417:45`   |
| +17.4% | +25.957 MiB |   3.1% → 3.6% |   149 MiB → 175 MiB |     298 → 350 | `parsePropertyOrMethodSignature`    | `node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |
|  +6.0% | +23.938 MiB |   8.2% → 8.7% |   397 MiB → 421 MiB |     793 → 841 | `parseDeclarationWorker`            | `node_modules/typescript/lib/typescript.js:36069:34 → 37124:34`   |
| +10.7% | +22.448 MiB |   4.3% → 4.8% |   209 MiB → 232 MiB |     418 → 463 | `parseInterfaceDeclaration`         | `node_modules/typescript/lib/typescript.js:36692:37 → 37747:37`   |
| +17.4% | +22.008 MiB |   2.6% → 3.1% |   127 MiB → 149 MiB |     253 → 297 | `(anonymous)`                       | `node_modules/typescript/lib/typescript.js:31696:71 → 32748:71`   |
| +16.3% | +21.508 MiB |   2.7% → 3.2% |   132 MiB → 154 MiB |     264 → 307 | `mapDefined`                        | `node_modules/typescript/lib/typescript.js:2683:20 → 2696:20`     |
| +13.2% | +20.955 MiB |   3.3% → 3.7% |   159 MiB → 180 MiB |     306 → 348 | `(anonymous)`                       | `node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |
| +11.0% | +20.819 MiB |   3.9% → 4.3% |   189 MiB → 209 MiB |     376 → 418 | `resolveObjectTypeMembers`          | `node_modules/typescript/lib/typescript.js:59210:36 → 60465:36`   |
|  +5.1% | +20.526 MiB |   8.2% → 8.7% |   400 MiB → 421 MiB |     786 → 828 | `processRootFile`                   | `node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
| +16.6% | +20.508 MiB |   2.5% → 3.0% |   124 MiB → 144 MiB |     247 → 288 | `parseJSDocCommentWorker`           | `node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +15.1% |  +20.03 MiB |   2.7% → 3.2% |   133 MiB → 153 MiB |     265 → 305 | `checkAwaitExpression`              | `node_modules/typescript/lib/typescript.js:80062:32 → 81357:32`   |

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

| Change |       Delta |             % |                Size |       Samples | Function                                   | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------- |
|  -5.3% | -122.41 MiB | 47.3% → 45.2% | 2.25 GiB → 2.13 GiB | 4,584 → 4,340 | `applyToParameterTypes`                    | `node_modules/typescript/lib/typescript.js:69472:33 → 70732:33`   |
|  -2.3% | -79.892 MiB | 70.4% → 69.4% | 3.35 GiB → 3.27 GiB | 6,820 → 6,662 | `checkTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js:66185:30 → 67445:30`   |
|  -1.8% | -67.355 MiB | 75.9% → 75.2% | 3.61 GiB → 3.54 GiB | 7,344 → 7,210 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -3.7% | -66.772 MiB | 37.3% → 36.2% | 1.77 GiB → 1.71 GiB | 3,614 → 3,481 | `checkVariableDeclarationList`             | `node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`   |
|  -3.7% | -65.008 MiB | 36.4% → 35.4% | 1.73 GiB → 1.66 GiB | 3,526 → 3,396 | `checkExpressionCached`                    | `node_modules/typescript/lib/typescript.js:81145:33 → 82440:33`   |
|  -1.4% | -61.741 MiB | 87.5% → 87.1% |  4.16 GiB → 4.1 GiB | 8,480 → 8,357 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  -1.4% | -61.736 MiB | 87.5% → 87.1% |  4.16 GiB → 4.1 GiB | 8,482 → 8,359 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  -1.4% | -61.241 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,478 → 8,356 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  -1.4% | -61.236 MiB | 87.6% → 87.1% |  4.16 GiB → 4.1 GiB | 8,484 → 8,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -1.4% | -61.218 MiB | 87.4% → 86.9% | 4.15 GiB → 4.09 GiB | 8,464 → 8,342 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  -1.4% | -60.723 MiB | 87.4% → 87.0% | 4.15 GiB → 4.09 GiB | 8,470 → 8,349 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -1.4% | -60.723 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,474 → 8,353 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  -1.4% |  -60.72 MiB | 87.4% → 86.9% | 4.15 GiB → 4.09 GiB | 8,465 → 8,344 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  -1.4% | -60.713 MiB | 87.3% → 86.9% | 4.15 GiB → 4.09 GiB | 8,461 → 8,340 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  -1.4% | -60.222 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,473 → 8,353 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  -3.8% | -60.119 MiB | 32.7% → 31.7% | 1.55 GiB → 1.49 GiB | 3,168 → 3,048 | `getWidenedTypeForVariableLikeDeclaration` | `node_modules/typescript/lib/typescript.js:58009:52 → 59264:52`   |
| -15.9% | -58.621 MiB |   7.6% → 6.5% |   370 MiB → 311 MiB |     738 → 621 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js:65221:30 → 66481:30`   |
|  -1.4% | -57.185 MiB | 84.6% → 84.2% | 4.02 GiB → 3.97 GiB | 8,198 → 8,084 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  -1.4% | -56.183 MiB | 84.5% → 84.1% | 4.02 GiB → 3.96 GiB | 8,186 → 8,074 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  -1.4% | -55.683 MiB | 84.6% → 84.2% | 4.02 GiB → 3.96 GiB | 8,193 → 8,082 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |

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
