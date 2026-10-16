# Heap profile diff

Allocated 4.75 GiB → 4.71 GiB (-44.605 MiB, -0.9%) over 9,660 samples → 9,574 samples (516 KiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Third-party      |  -0.7% | -32.626 MiB | 91.6% → 91.8% | 4.35 GiB → 4.32 GiB | 8,892 → 8,825 |
| Standard library |  -2.9% | -11.978 MiB |   8.4% → 8.2% |   408 MiB → 396 MiB |     768 → 749 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |            % |                Size |   Samples | Function                         | Location                                                            |
| ------: | ----------: | -----------: | ------------------: | --------: | -------------------------------- | ------------------------------------------------------------------- |
|   +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38`   |
|  +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`              | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29`   |
|  +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`        | `./node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`     | `./node_modules/typescript/lib/typescript.js:24191:38 → 25241:38`   |
|  +11.5% |  +6.508 MiB |  1.2% → 1.3% |   56.5 MiB → 63 MiB | 113 → 126 | `next`                           | `<unknown>`                                                         |
|  +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`             | `./node_modules/typescript/lib/typescript.js:68771:30 → 70031:30`   |
| +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`           | `./node_modules/typescript/lib/typescript.js:33096:32 → 34151:32`   |
|  +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`             | `./node_modules/typescript/lib/typescript.js:32875:30 → 33930:30`   |
| +500.0% |      +5 MiB | <0.1% → 0.1% |       1 MiB → 6 MiB |    2 → 12 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
| +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`        | `./node_modules/typescript/lib/typescript.js:59199:35 → 60454:35`   |
| +180.1% |   +4.53 MiB |         0.1% | 2.52 MiB → 7.05 MiB |    5 → 14 | `add`                            | `<unknown>`                                                         |
|  +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`               | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28`   |
| +225.0% |    +4.5 MiB | <0.1% → 0.1% |     2 MiB → 6.5 MiB |    4 → 13 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:52182:20 → 53423:20`   |
|  +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`            | `./node_modules/typescript/lib/typescript.js:31409:26 → 32461:26`   |
|  +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                    | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
| +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol`   | `./node_modules/typescript/lib/typescript.js:50502:40 → 51743:40`   |
|  +66.7% |      +4 MiB |  0.1% → 0.2% |      6 MiB → 10 MiB |   12 → 20 | `join`                           | `<unknown>`                                                         |
|  +77.8% |    +3.5 MiB |  0.1% → 0.2% |     4.5 MiB → 8 MiB |    9 → 16 | `createTypeReference`            | `./node_modules/typescript/lib/typescript.js:61539:31 → 62794:31`   |
|  +35.0% |  +3.498 MiB |  0.2% → 0.3% |   10 MiB → 13.5 MiB |   20 → 27 | `getIntersectionType`            | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31`   |
|  +66.7% |      +3 MiB |  0.1% → 0.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |

##### Third-party

|  Change |       Delta |            % |                Size |   Samples | Function                         | Location                                                            |
| ------: | ----------: | -----------: | ------------------: | --------: | -------------------------------- | ------------------------------------------------------------------- |
|   +9.3% | +12.001 MiB |  2.6% → 2.9% |   129 MiB → 141 MiB | 257 → 281 | `getObjectTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38`   |
|  +11.4% |  +9.997 MiB |  1.8% → 2.0% |     88 MiB → 98 MiB | 176 → 196 | `instantiateSymbol`              | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29`   |
|  +10.5% |  +9.501 MiB |  1.9% → 2.1% | 90.2 MiB → 99.7 MiB | 180 → 199 | `parseJSDocCommentWorker`        | `./node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +190.0% |    +9.5 MiB |  0.1% → 0.3% |    5 MiB → 14.5 MiB |   10 → 29 | `createParameterDeclaration`     | `./node_modules/typescript/lib/typescript.js:24191:38 → 25241:38`   |
|  +24.1% |    +6.5 MiB |  0.6% → 0.7% |   27 MiB → 33.5 MiB |   54 → 67 | `isDeeplyNestedType`             | `./node_modules/typescript/lib/typescript.js:68771:30 → 70031:30`   |
| +110.0% |    +5.5 MiB |  0.1% → 0.2% |    5 MiB → 10.5 MiB |   10 → 21 | `parseLiteralLikeNode`           | `./node_modules/typescript/lib/typescript.js:33096:32 → 34151:32`   |
|  +13.9% |      +5 MiB |  0.7% → 0.9% |     36 MiB → 41 MiB |   72 → 82 | `parseDelimitedList`             | `./node_modules/typescript/lib/typescript.js:32875:30 → 33930:30`   |
| +500.0% |      +5 MiB | <0.1% → 0.1% |       1 MiB → 6 MiB |    2 → 12 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
| +142.9% |      +5 MiB |  0.1% → 0.2% |   3.5 MiB → 8.5 MiB |    7 → 17 | `getTypeWithThisArgument`        | `./node_modules/typescript/lib/typescript.js:59199:35 → 60454:35`   |
|  +81.8% |    +4.5 MiB |  0.1% → 0.2% |    5.5 MiB → 10 MiB |   11 → 20 | `createIdentifier`               | `./node_modules/typescript/lib/typescript.js:23941:28 → 24991:28`   |
| +225.0% |    +4.5 MiB | <0.1% → 0.1% |     2 MiB → 6.5 MiB |    4 → 13 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:52182:20 → 53423:20`   |
|  +64.3% |    +4.5 MiB |  0.1% → 0.2% |    7 MiB → 11.5 MiB |   14 → 23 | `createBaseTokenNode`            | `./node_modules/typescript/lib/typescript.js:31409:26 → 32461:26`   |
|  +44.9% |  +4.493 MiB |  0.2% → 0.3% |   10 MiB → 14.5 MiB |   20 → 29 | `doJSDocScan`                    | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27`   |
| +100.0% |      +4 MiB |  0.1% → 0.2% |       4 MiB → 8 MiB |    8 → 16 | `onSuccessfullyResolvedSymbol`   | `./node_modules/typescript/lib/typescript.js:50502:40 → 51743:40`   |
|  +77.8% |    +3.5 MiB |  0.1% → 0.2% |     4.5 MiB → 8 MiB |    9 → 16 | `createTypeReference`            | `./node_modules/typescript/lib/typescript.js:61539:31 → 62794:31`   |
|  +35.0% |  +3.498 MiB |  0.2% → 0.3% |   10 MiB → 13.5 MiB |   20 → 27 | `getIntersectionType`            | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31`   |
|  +66.7% |      +3 MiB |  0.1% → 0.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |
|  +35.3% |      +3 MiB |         0.2% |  8.5 MiB → 11.5 MiB |   17 → 23 | `getDeclarationName`             | `./node_modules/typescript/lib/typescript.js:44929:30 → 46122:30`   |
|  +62.5% |    +2.5 MiB |         0.1% |     4 MiB → 6.5 MiB |    8 → 13 | `createInferenceContextWorker`   | `./node_modules/typescript/lib/typescript.js:69513:40 → 70773:40`   |
|  +27.8% |    +2.5 MiB |         0.2% |    9 MiB → 11.5 MiB |   18 → 23 | `getAdjustedTypeWithFacts`       | `./node_modules/typescript/lib/typescript.js:71022:36 → 72305:36`   |

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

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | ----------------------------------------------------------------- |
|  -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js:64955:36 → 66215:36` |
| -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js:31416:21 → 32468:21` |
|  -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
|  -5.0% |  -6.561 MiB |   2.7% → 2.6% |   131 MiB → 125 MiB |     248 → 237 | `set`                           | `<unknown>`                                                       |
| -34.3% |      -6 MiB |   0.4% → 0.2% | 17.5 MiB → 11.5 MiB |       35 → 23 | `values`                        | `<unknown>`                                                       |
| -28.0% |  -5.968 MiB |   0.4% → 0.3% | 21.3 MiB → 15.3 MiB |       28 → 17 | `slice`                         | `node:buffer:640:12`                                              |
| -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `./node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
| -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `./node_modules/typescript/lib/typescript.js:21708:28 → 22701:28` |
| -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `./node_modules/typescript/lib/typescript.js:23826:33 → 24876:33` |
| -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `./node_modules/typescript/lib/typescript.js:33339:32 → 34394:32` |
| -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `./node_modules/typescript/lib/typescript.js:52466:28 → 53707:28` |
| -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `./node_modules/typescript/lib/typescript.js:61498:25 → 62753:25` |
| -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `./node_modules/typescript/lib/typescript.js:60937:36 → 62192:36` |
| -39.1% |    -4.5 MiB |   0.2% → 0.1% |    11.5 MiB → 7 MiB |       23 → 14 | `slice`                         | `<unknown>`                                                       |
| -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |
| -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `./node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |
| -50.0% |      -4 MiB |   0.2% → 0.1% |       8 MiB → 4 MiB |        16 → 8 | `mapType`                       | `./node_modules/typescript/lib/typescript.js:71268:19 → 72551:19` |
|  -2.6% |  -3.998 MiB |   3.2% → 3.1% |   156 MiB → 152 MiB |     311 → 303 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |

##### Third-party

| Change |       Delta |             % |                Size |       Samples | Function                        | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | ----------------------------------------------------------------- |
|  -1.4% | -35.543 MiB | 51.2% → 50.9% |  2.43 GiB → 2.4 GiB | 4,961 → 4,890 | `checkTypeRelatedTo`            | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| -42.9% |     -15 MiB |   0.7% → 0.4% |     35 MiB → 20 MiB |       70 → 40 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js:64955:36 → 66215:36` |
| -33.9% |     -10 MiB |   0.6% → 0.4% | 29.5 MiB → 19.5 MiB |       59 → 39 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js:31416:21 → 32468:21` |
|  -7.5% |  -7.004 MiB |   1.9% → 1.8% | 93.5 MiB → 86.5 MiB |     187 → 173 | `getTypeFactsWorker`            | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
| -91.7% |    -5.5 MiB |  0.1% → <0.1% |     6 MiB → 512 KiB |        12 → 1 | `parseLiteralTypeNode`          | `./node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
| -16.4% |  -5.002 MiB |   0.6% → 0.5% | 30.5 MiB → 25.5 MiB |       61 → 51 | `setParentRecursive`            | `./node_modules/typescript/lib/typescript.js:21708:28 → 22701:28` |
| -37.0% |      -5 MiB |   0.3% → 0.2% |  13.5 MiB → 8.5 MiB |       27 → 17 | `createBaseDeclaration`         | `./node_modules/typescript/lib/typescript.js:23826:33 → 24876:33` |
| -83.3% |      -5 MiB |  0.1% → <0.1% |       6 MiB → 1 MiB |        12 → 2 | `parseParameterWorker`          | `./node_modules/typescript/lib/typescript.js:33339:32 → 34394:32` |
| -71.4% |      -5 MiB |  0.1% → <0.1% |       7 MiB → 2 MiB |        14 → 4 | `createObjectType`              | `./node_modules/typescript/lib/typescript.js:52466:28 → 53707:28` |
| -52.6% |      -5 MiB |   0.2% → 0.1% |   9.5 MiB → 4.5 MiB |        19 → 9 | `getTypeListId`                 | `./node_modules/typescript/lib/typescript.js:61498:25 → 62753:25` |
| -90.9% |  -4.999 MiB |  0.1% → <0.1% |   5.5 MiB → 513 KiB |        11 → 1 | `fillMissingTypeArguments`      | `./node_modules/typescript/lib/typescript.js:60937:36 → 62192:36` |
| -36.0% |    -4.5 MiB |   0.3% → 0.2% |    12.5 MiB → 8 MiB |       25 → 16 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |
| -11.8% |  -4.004 MiB |   0.7% → 0.6% |     34 MiB → 30 MiB |       68 → 60 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| -57.1% |      -4 MiB |          0.1% |       7 MiB → 3 MiB |        14 → 6 | `signatureRelatedTo`            | `./node_modules/typescript/lib/typescript.js:68375:32 → 69635:32` |
| -50.0% |      -4 MiB |   0.2% → 0.1% |       8 MiB → 4 MiB |        16 → 8 | `mapType`                       | `./node_modules/typescript/lib/typescript.js:71268:19 → 72551:19` |
|  -2.6% |  -3.998 MiB |   3.2% → 3.1% |   156 MiB → 152 MiB |     311 → 303 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| -54.6% |  -3.001 MiB |          0.1% |   5.5 MiB → 2.5 MiB |        11 → 5 | `toLowerCase`                   | `./node_modules/typescript/lib/typescript.js:3492:21 → 3505:21`   |
| -37.5% |      -3 MiB |   0.2% → 0.1% |       8 MiB → 5 MiB |       16 → 10 | `getPropertyTypeForIndexType`   | `./node_modules/typescript/lib/typescript.js:63548:39 → 64803:39` |
| -85.7% |      -3 MiB |  0.1% → <0.1% |   3.5 MiB → 512 KiB |         7 → 1 | `addAntecedent`                 | `./node_modules/typescript/lib/typescript.js:45479:25 → 46672:25` |
| -27.8% |    -2.5 MiB |   0.2% → 0.1% |     9 MiB → 6.5 MiB |       18 → 13 | `instantiateList`               | `./node_modules/typescript/lib/typescript.js:64623:27 → 65878:27` |

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

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js:66040:38`)

| Change |       Delta |      % |              Size |   Samples | Caller                  | Location                                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  +9.3% | +12.001 MiB | 100.0% | 129 MiB → 141 MiB | 257 → 281 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js:66013:29`)

| Change |       Delta |             % |              Size |   Samples | Caller                        | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------------------------------------------------------- |
| +19.7% | +11.997 MiB | 69.3% → 74.5% |   61 MiB → 73 MiB | 122 → 146 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
| -80.0% |      -2 MiB |   2.8% → 0.5% | 2.5 MiB → 512 KiB |     5 → 1 | `instantiateSignatures`       | `./node_modules/typescript/lib/typescript.js:64643:33 → 65898:33` |
| +18.2% |      +1 MiB |   6.2% → 6.6% | 5.5 MiB → 6.5 MiB |   11 → 13 | `instantiateSignature`        | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
| -40.0% |      -1 MiB |   2.8% → 1.5% | 2.5 MiB → 1.5 MiB |     5 → 3 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
| -50.0% |      -1 MiB |   2.3% → 1.0% |     2 MiB → 1 MiB |     4 → 2 | `createErasedSignature`       | `./node_modules/typescript/lib/typescript.js:61320:33 → 62575:33` |

##### `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`)

|  Change |      Delta |             % |                Size |   Samples | Caller              | Location                                                          |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------- | ----------------------------------------------------------------- |
|  +11.5% |  +9.01 MiB | 86.7% → 87.5% | 78.2 MiB → 87.2 MiB | 156 → 174 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:31696:71 → 32748:71` |
|  +78.6% | +5.501 MiB |  7.8% → 12.5% |    7 MiB → 12.5 MiB |   14 → 25 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:37204:63 → 38259:63` |
| removed | -5.009 MiB |   5.6% → 0.0% |      5.01 MiB → 0 B |    10 → 0 | `parseJSDocComment` | `./node_modules/typescript/lib/typescript.js:37200:31`            |

##### `createParameterDeclaration` (`./node_modules/typescript/lib/typescript.js:25241:38`)

|  Change |        Delta |              % |               Size | Samples | Caller                 | Location                                                            |
| ------: | -----------: | -------------: | -----------------: | ------: | ---------------------- | ------------------------------------------------------------------- |
| +222.2% |      +10 MiB | 90.0% → 100.0% | 4.5 MiB → 14.5 MiB |  9 → 29 | `(anonymous)`          | `./node_modules/typescript/lib/typescript.js:33416:157 → 34471:157` |
| removed | -512.039 KiB |   10.0% → 0.0% |      512 KiB → 0 B |   1 → 0 | `parseParameterWorker` | `./node_modules/typescript/lib/typescript.js:33339:32 → 34394:32`   |

##### `next` (`<unknown>`)

|  Change |    Delta |             % |               Size | Samples | Caller                              | Location                                                          |
| ------: | -------: | ------------: | -----------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  +31.6% |   +3 MiB | 16.8% → 19.8% | 9.5 MiB → 12.5 MiB | 19 → 25 | `getUnmatchedProperties`            | `./node_modules/typescript/lib/typescript.js:69709:35 → 70992:35` |
|     new | +2.5 MiB |   0.0% → 4.0% |      0 B → 2.5 MiB |   0 → 5 | `contains`                          | `./node_modules/typescript/lib/typescript.js:2513:18`             |
|  -25.0% | -1.5 MiB |  10.6% → 7.1% |    6 MiB → 4.5 MiB |  12 → 9 | `getIntersectionType`               | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
|  -60.0% | -1.5 MiB |   4.4% → 1.6% |    2.5 MiB → 1 MiB |   5 → 2 | `inferFromMatchingTypes`            | `./node_modules/typescript/lib/typescript.js:70119:36 → 71402:36` |
| +100.0% | +1.5 MiB |   2.7% → 4.8% |    1.5 MiB → 3 MiB |   3 → 6 | `createUnionOrIntersectionProperty` | `./node_modules/typescript/lib/typescript.js:60498:45 → 61753:45` |

##### `isDeeplyNestedType` (`./node_modules/typescript/lib/typescript.js:70031:30`)

| Change |        Delta |             % |            Size | Samples | Caller                   | Location                                                          |
| -----: | -----------: | ------------: | --------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +35.7% |       +5 MiB | 51.9% → 56.7% | 14 MiB → 19 MiB | 28 → 38 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| +18.2% |       +2 MiB | 40.7% → 38.8% | 11 MiB → 13 MiB | 22 → 26 | `invokeOnce`             | `./node_modules/typescript/lib/typescript.js:70091:24 → 71374:24` |
| -25.0% | -512.054 KiB |   7.4% → 4.5% | 2 MiB → 1.5 MiB |   4 → 3 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:68777:33 → 70037:33` |

##### `parseLiteralLikeNode` (`./node_modules/typescript/lib/typescript.js:34151:32`)

|  Change |        Delta |             % |              Size | Samples | Caller                 | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------- | ----------------------------------------------------------------- |
| +300.0% |       +3 MiB | 20.0% → 38.1% |     1 MiB → 4 MiB |   2 → 8 | `parseLiteralNode`     | `./node_modules/typescript/lib/typescript.js:33072:28 → 34127:28` |
| +600.0% |       +3 MiB | 10.0% → 33.3% | 512 KiB → 3.5 MiB |   1 → 7 | `parsePropertyName`    | `./node_modules/typescript/lib/typescript.js:32353:29 → 33408:29` |
|  -28.6% |       -1 MiB | 70.0% → 23.8% | 3.5 MiB → 2.5 MiB |   7 → 5 | `parseLiteralTypeNode` | `./node_modules/typescript/lib/typescript.js:33724:32 → 34779:32` |
|     new | +512.039 KiB |   0.0% → 4.8% |     0 B → 512 KiB |   0 → 1 | `parseNonArrayType`    | `./node_modules/typescript/lib/typescript.js:34836:29`            |

##### `parseDelimitedList` (`./node_modules/typescript/lib/typescript.js:33930:30`)

|  Change |    Delta |             % |              Size | Samples | Caller                              | Location                                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
| +216.7% | +6.5 MiB |  8.3% → 23.2% |   3 MiB → 9.5 MiB |  6 → 19 | `parseCallExpressionRest`           | `./node_modules/typescript/lib/typescript.js:35207:35 → 36262:35` |
|  -87.5% | -3.5 MiB |  11.1% → 1.2% |   4 MiB → 512 KiB |   8 → 1 | `parseBracketedList`                | `./node_modules/typescript/lib/typescript.js:32938:30 → 33993:30` |
| +100.0% |   +2 MiB |   5.6% → 9.8% |     2 MiB → 4 MiB |   4 → 8 | `parseObjectLiteralExpression`      | `./node_modules/typescript/lib/typescript.js:35422:40 → 36477:40` |
|  -27.3% | -1.5 MiB |  15.3% → 9.8% |   5.5 MiB → 4 MiB |  11 → 8 | `parseTypeArgumentsOfTypeReference` | `./node_modules/typescript/lib/typescript.js:33127:45 → 34182:45` |
|   -9.4% | -1.5 MiB | 44.4% → 35.4% | 16 MiB → 14.5 MiB | 32 → 29 | `parseParameters`                   | `./node_modules/typescript/lib/typescript.js:33421:27 → 34476:27` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:34471:157`)

|  Change |  Delta |      % |          Size | Samples | Caller               | Location                                                          |
| ------: | -----: | -----: | ------------: | ------: | -------------------- | ----------------------------------------------------------------- |
| +500.0% | +5 MiB | 100.0% | 1 MiB → 6 MiB |  2 → 12 | `parseDelimitedList` | `./node_modules/typescript/lib/typescript.js:32875:30 → 33930:30` |

##### `getTypeWithThisArgument` (`./node_modules/typescript/lib/typescript.js:60454:35`)

|  Change |        Delta |             % |          Size | Samples | Caller                                         | Location                                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- | ----------------------------------------------------------------- |
| +200.0% |       +2 MiB | 28.6% → 35.3% | 1 MiB → 3 MiB |   2 → 6 | `resolveObjectTypeMembers`                     | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|     new |       +2 MiB |  0.0% → 23.5% |   0 B → 2 MiB |   0 → 4 | `(anonymous)`                                  | `./node_modules/typescript/lib/typescript.js:60460:41`            |
|     new | +512.062 KiB |   0.0% → 5.9% | 0 B → 512 KiB |   0 → 1 | `inferFromTypes`                               | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|     new | +512.039 KiB |   0.0% → 5.9% | 0 B → 512 KiB |   0 → 1 | `checkPropertyAccessExpressionOrQualifiedName` | `./node_modules/typescript/lib/typescript.js:77201:56`            |
|     new | +512.015 KiB |   0.0% → 5.9% | 0 B → 512 KiB |   0 → 1 | `getInferredType`                              | `./node_modules/typescript/lib/typescript.js:70533:27 → 71816:27` |

##### `add` (`<unknown>`)

|  Change |        Delta |             % |                Size | Samples | Caller                   | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| +298.3% |   +3.014 MiB | 40.2% → 57.1% | 1.01 MiB → 4.02 MiB |   2 → 8 | `recursiveTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
| +302.3% |   +1.517 MiB | 20.0% → 28.7% |  514 KiB → 2.02 MiB |   1 → 4 | `declareSymbol`          | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| removed | -513.046 KiB |  19.9% → 0.0% |       513 KiB → 0 B |   1 → 0 | `checkNodeDeferred`      | `./node_modules/typescript/lib/typescript.js:87169:29`            |
|  +99.6% | +511.718 KiB | 20.0% → 14.2% |     514 KiB → 1 MiB |   1 → 2 | `(anonymous)`            | `./node_modules/typescript/lib/typescript.js:52218:32 → 53459:32` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js:24991:28`)

|  Change |    Delta |             % |              Size | Samples | Caller                          | Location                                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
| +300.0% | +1.5 MiB |  9.1% → 20.0% |   512 KiB → 2 MiB |   1 → 4 | `parsePropertyName`             | `./node_modules/typescript/lib/typescript.js:32353:29 → 33408:29` |
|  +33.3% |   +1 MiB | 54.5% → 40.0% |     3 MiB → 4 MiB |   6 → 8 | `parseEntityName`               | `./node_modules/typescript/lib/typescript.js:32946:27 → 34001:27` |
| +200.0% |   +1 MiB |  9.1% → 15.0% | 512 KiB → 1.5 MiB |   1 → 3 | `parseIdentifierName`           | `./node_modules/typescript/lib/typescript.js:32324:31 → 33379:31` |
|     new |   +1 MiB |  0.0% → 10.0% |       0 B → 1 MiB |   0 → 2 | `parseMemberExpressionOrHigher` | `./node_modules/typescript/lib/typescript.js:35794:41`            |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53423:20`)

|  Change |    Delta |      % |            Size | Samples | Caller    | Location    |
| ------: | -------: | -----: | --------------: | ------: | --------- | ----------- |
| +225.0% | +4.5 MiB | 100.0% | 2 MiB → 6.5 MiB |  4 → 13 | `forEach` | `<unknown>` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js:32461:26`)

| Change |    Delta |      % |             Size | Samples | Caller        | Location                                                          |
| -----: | -------: | -----: | ---------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +64.3% | +4.5 MiB | 100.0% | 7 MiB → 11.5 MiB | 14 → 23 | `createToken` | `./node_modules/typescript/lib/typescript.js:24048:23 → 25098:23` |

##### `doJSDocScan` (`./node_modules/typescript/lib/typescript.js:38308:27`)

| Change |        Delta |             % |               Size | Samples | Caller                    | Location                                                          |
| -----: | -----------: | ------------: | -----------------: | ------: | ------------------------- | ----------------------------------------------------------------- |
| +58.8% |       +5 MiB | 84.9% → 93.1% | 8.5 MiB → 13.5 MiB | 17 → 27 | `parseJSDocCommentWorker` | `./node_modules/typescript/lib/typescript.js:37231:37 → 38286:37` |
| -33.6% | -519.281 KiB |  15.1% → 6.9% |   1.51 MiB → 1 MiB |   3 → 2 | `scanRange`               | `./node_modules/typescript/lib/typescript.js:13601:21 → 14560:21` |

##### `onSuccessfullyResolvedSymbol` (`./node_modules/typescript/lib/typescript.js:51743:40`)

|  Change |  Delta |      % |          Size | Samples | Caller              | Location                                                          |
| ------: | -----: | -----: | ------------: | ------: | ------------------- | ----------------------------------------------------------------- |
| +100.0% | +4 MiB | 100.0% | 4 MiB → 8 MiB |  8 → 16 | `resolveNameHelper` | `./node_modules/typescript/lib/typescript.js:22185:29 → 23186:29` |

##### `join` (`<unknown>`)

|  Change |          Delta |             % |            Size | Samples | Caller                      | Location                                                          |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| +150.0% |       +1.5 MiB | 16.7% → 25.0% | 1 MiB → 2.5 MiB |   2 → 5 | `parseTagComments`          | `./node_modules/typescript/lib/typescript.js:37509:32 → 38564:32` |
|  +20.0% | +1,023.937 KiB | 83.3% → 60.0% |   5 MiB → 6 MiB | 10 → 12 | `doJSDocScan`               | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
|     new |   +512.125 KiB |   0.0% → 5.0% |   0 B → 512 KiB |   0 → 1 | `getPathFromPathComponents` | `./node_modules/typescript/lib/typescript.js:9108:35`             |
|     new |   +512.031 KiB |   0.0% → 5.0% |   0 B → 512 KiB |   0 → 1 | `getTemplateLiteralType`    | `./node_modules/typescript/lib/typescript.js:64644:34`            |
|     new |   +512.031 KiB |   0.0% → 5.0% |   0 B → 512 KiB |   0 → 1 | `getTupleTargetType`        | `./node_modules/typescript/lib/typescript.js:63730:30`            |

##### `createTypeReference` (`./node_modules/typescript/lib/typescript.js:62794:31`)

|  Change |        Delta |             % |              Size | Samples | Caller                          | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
|     new |     +1.5 MiB |  0.0% → 18.7% |     0 B → 1.5 MiB |   0 → 3 | `getTypeWithThisArgument`       | `./node_modules/typescript/lib/typescript.js:60454:35`            |
|  -66.7% |       -1 MiB |  33.3% → 6.3% | 1.5 MiB → 512 KiB |   3 → 1 | `getNormalizedType`             | `./node_modules/typescript/lib/typescript.js:66148:29 → 67408:29` |
| +200.0% |       +1 MiB | 11.1% → 18.7% | 512 KiB → 1.5 MiB |   1 → 3 | `createNormalizedTupleType`     | `./node_modules/typescript/lib/typescript.js:62544:37 → 63799:37` |
| +200.0% |       +1 MiB | 11.1% → 18.7% | 512 KiB → 1.5 MiB |   1 → 3 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js:62541:41 → 63796:41` |
|  +25.0% | +512.062 KiB | 44.4% → 31.3% |   2 MiB → 2.5 MiB |   4 → 5 | `isRelatedTo`                   | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |

##### `getIntersectionType` (`./node_modules/typescript/lib/typescript.js:64367:31`)

|  Change |        Delta |             % |           Size | Samples | Caller                         | Location                                                          |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------ | ----------------------------------------------------------------- |
|  +33.3% |       +3 MiB | 90.0% → 88.9% | 9 MiB → 12 MiB | 18 → 24 | `instantiateTypeWorker`        | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |
|     new |       +1 MiB |   0.0% → 7.4% |    0 B → 1 MiB |   0 → 2 | `intersectTypes`               | `./node_modules/typescript/lib/typescript.js:59637:26 → 60892:26` |
| removed | -513.398 KiB |   5.0% → 0.0% |  513 KiB → 0 B |   1 → 0 | `inferFromTypes`               | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |
|     ~0% |        -16 B |   5.0% → 3.7% |        512 KiB |       1 | `getCrossProductIntersections` | `./node_modules/typescript/lib/typescript.js:63208:40 → 64463:40` |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js:34548:42`)

| Change |  Delta |      % |              Size | Samples | Caller            | Location                                                          |
| -----: | -----: | -----: | ----------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| +66.7% | +3 MiB | 100.0% | 4.5 MiB → 7.5 MiB |  9 → 15 | `parseTypeMember` | `./node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |

##### `getDeclarationName` (`./node_modules/typescript/lib/typescript.js:46122:30`)

|  Change |        Delta |              % |             Size | Samples | Caller                          | Location                                                          |
| ------: | -----------: | -------------: | ---------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
|  +43.8% |     +3.5 MiB | 94.1% → 100.0% | 8 MiB → 11.5 MiB | 16 → 23 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js:44997:25 → 46190:25` |
| removed | -512.031 KiB |    5.9% → 0.0% |    512 KiB → 0 B |   1 → 0 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js:46308:41`            |

##### `createInferenceContextWorker` (`./node_modules/typescript/lib/typescript.js:70773:40`)

|  Change |        Delta |             % |            Size | Samples | Caller                       | Location                                                          |
| ------: | -----------: | ------------: | --------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|     new |       +5 MiB |  0.0% → 76.9% |     0 B → 5 MiB |  0 → 10 | `chooseOverload`             | `./node_modules/typescript/lib/typescript.js:78765:28`            |
|  -75.0% |     -1.5 MiB |  50.0% → 7.7% | 2 MiB → 512 KiB |   4 → 1 | `cloneInferenceContext`      | `./node_modules/typescript/lib/typescript.js:69510:33 → 70770:33` |
| removed |     -1.5 MiB |  37.5% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `createInferenceContext`     | `./node_modules/typescript/lib/typescript.js:69507:34 → 70767:34` |
| +100.0% | +512.125 KiB | 12.5% → 15.4% | 512 KiB → 1 MiB |   1 → 2 | `cloneInferredPartOfContext` | `./node_modules/typescript/lib/typescript.js:69593:38 → 70853:38` |

##### `getAdjustedTypeWithFacts` (`./node_modules/typescript/lib/typescript.js:72305:36`)

| Change |        Delta |              % |           Size | Samples | Caller                     | Location                                                          |
| -----: | -----------: | -------------: | -------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
| +22.2% |       +2 MiB | 100.0% → 95.7% | 9 MiB → 11 MiB | 18 → 22 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36 → 67064:36` |
|    new | +512.039 KiB |    0.0% → 4.3% |  0 B → 512 KiB |   0 → 1 | `narrowType`               | `./node_modules/typescript/lib/typescript.js:72632:24 → 73915:24` |

##### `splice` (`<unknown>`)

|  Change |        Delta |             % |              Size | Samples | Caller               | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------- | ----------------------------------------------------------------- |
|  +42.9% |       +3 MiB | 33.3% → 42.6% |    7 MiB → 10 MiB | 14 → 20 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js:62693:27 → 63948:27` |
|  -11.8% |       -1 MiB | 40.5% → 31.9% | 8.5 MiB → 7.5 MiB | 17 → 15 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js:62867:30 → 64122:30` |
| +100.0% | +512.109 KiB |   2.4% → 4.3% |   512 KiB → 1 MiB |   1 → 2 | `addTypeToUnion`     | `./node_modules/typescript/lib/typescript.js:62670:26 → 63925:26` |
|  +11.1% | +512.031 KiB | 21.4% → 21.3% |   4.5 MiB → 5 MiB |  9 → 10 | `reorderCandidates`  | `./node_modules/typescript/lib/typescript.js:76487:29 → 77782:29` |
| removed | -512.031 KiB |   2.4% → 0.0% |     512 KiB → 0 B |   1 → 0 | `resolveCall`        | `./node_modules/typescript/lib/typescript.js:77299:23`            |

##### `isArray` (`<unknown>`)

| Change |    Delta |             % |          Size | Samples | Caller                    | Location                                               |
| -----: | -------: | ------------: | ------------: | ------: | ------------------------- | ------------------------------------------------------ |
|    new | +516 KiB | 0.0% → 100.0% | 0 B → 516 KiB |   0 → 1 | `chainDiagnosticMessages` | `./node_modules/typescript/lib/typescript.js:21555:33` |

##### `filter` (`<unknown>`)

| Change |        Delta |             % |          Size | Samples | Caller                                 | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------------------------------------ |
|    new | +512.109 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48` |

##### `Uint8Array` (`<unknown>`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ---------------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `FastBuffer` | `node:internal/buffer:956:1` |

##### `map` (`<unknown>`)

| Change |        Delta |             % |          Size | Samples | Caller                   | Location                                                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `createInferenceContext` | `./node_modules/typescript/lib/typescript.js:69507:34 → 70767:34` |

##### `readSync` (`node:fs:695:18`)

| Change |        Delta |             % |          Size | Samples | Caller        | Location         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `tryReadSync` | `node:fs:412:21` |

##### `wrappedFn` (`node:internal/errors:535:21`)

| Change |        Delta |            % |          Size | Samples | Caller     | Location          |
| -----: | -----------: | -----------: | ------------: | ------: | ---------- | ----------------- |
|    new | +512.015 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `statSync` | `node:fs:1745:18` |

##### `fromCharCode` (`<unknown>`)

| Change |        Delta |             % |          Size | Samples | Caller          | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | --------------- | ------------------------------------------------------ |
|    new | +512.015 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `scanHexDigits` | `./node_modules/typescript/lib/typescript.js:12486:25` |

##### `msFromTimeSpec` (`node:internal/fs/utils:428:24`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------------------- |
|    new | +512.015 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ----------------- |
|    new | +512.015 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `statSync` | `node:fs:1745:18` |

##### `StatsBase` (`node:internal/fs/utils:382:19`)

| Change |        Delta |             % |          Size | Samples | Caller  | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ------------------------------- |
|    new | +512.015 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `Stats` | `node:internal/fs/utils:524:15` |

##### `Map` (`<unknown>`)

|  Change |    Delta |             % |              Size | Samples | Caller                          | Location                                                          |
| ------: | -------: | ------------: | ----------------: | ------: | ------------------------------- | ----------------------------------------------------------------- |
|  +50.0% |   +3 MiB |  8.4% → 12.5% |     6 MiB → 9 MiB | 12 → 18 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js:45136:25 → 46329:25` |
|  -44.4% |   -2 MiB |   6.3% → 3.5% | 4.5 MiB → 2.5 MiB |   9 → 5 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:59020:41 → 60275:41` |
| removed |   -2 MiB |   2.8% → 0.0% |       2 MiB → 0 B |   4 → 0 | `checkUnusedIdentifiers`        | `./node_modules/typescript/lib/typescript.js:83453:34`            |
| +150.0% | +1.5 MiB |   1.4% → 3.5% |   1 MiB → 2.5 MiB |   2 → 5 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js:46308:41 → 47501:41` |
|   -2.9% |   -1 MiB | 49.0% → 47.2% |   35 MiB → 34 MiB | 70 → 68 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js:15264:27 → 16239:27` |

##### `delete` (`<unknown>`)

| Change |        Delta |      % |            Size | Samples | Caller            | Location                                                          |
| -----: | -----------: | -----: | --------------: | ------: | ----------------- | ----------------------------------------------------------------- |
| +33.2% | +511.015 KiB | 100.0% | 1.5 MiB → 2 MiB |   3 → 4 | `resetMaybeStack` | `./node_modules/typescript/lib/typescript.js:67196:31 → 68456:31` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

| Change |       Delta |             % |                Size |       Samples | Caller                                        | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------------- | ----------------------------------------------------------------- |
| -30.3% | -33.608 MiB |   4.5% → 3.1% |  111 MiB → 77.3 MiB |     221 → 154 | `isTypeAssignableTo`                          | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30` |
|  -0.2% |  -3.453 MiB | 89.5% → 90.6% | 2.18 GiB → 2.17 GiB | 4,439 → 4,432 | `isTypeOrBaseIdenticalTo`                     | `./node_modules/typescript/lib/typescript.js:70496:35 → 71779:35` |
| +33.4% |  +2.013 MiB |   0.2% → 0.3% | 6.02 MiB → 8.04 MiB |       12 → 16 | `isTypeComparableTo`                          | `./node_modules/typescript/lib/typescript.js:65227:30 → 66487:30` |
|    new |  +2.007 MiB |   0.0% → 0.1% |      0 B → 2.01 MiB |         0 → 4 | `checkTypeAssignableToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js:65236:55 → 66496:55` |
| +15.8% |  +1.506 MiB |          0.4% |   9.54 MiB → 11 MiB |       19 → 22 | `checkTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65233:33 → 66493:33` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js:66215:36`)

| Change |    Delta |             % |              Size | Samples | Caller                       | Location                                                          |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
| -36.5% | -9.5 MiB | 74.3% → 82.5% | 26 MiB → 16.5 MiB | 52 → 33 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |
| -60.0% |   -3 MiB | 14.3% → 10.0% |     5 MiB → 2 MiB |  10 → 4 | `instantiateConstituent`     | `./node_modules/typescript/lib/typescript.js:64900:36 → 66160:36` |
| -62.5% | -2.5 MiB |  11.4% → 7.5% |   4 MiB → 1.5 MiB |   8 → 3 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js:64891:33 → 66151:33` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js:32468:21`)

| Change |        Delta |             % |             Size | Samples | Caller                   | Location                                                          |
| -----: | -----------: | ------------: | ---------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -65.6% |    -10.5 MiB | 54.2% → 28.2% | 16 MiB → 5.5 MiB | 32 → 11 | `createBaseDeclaration`  | `./node_modules/typescript/lib/typescript.js:23826:33 → 24876:33` |
| -71.4% |     -7.5 MiB | 35.6% → 15.4% | 10.5 MiB → 3 MiB |  21 → 6 | `createBaseNode`         | `./node_modules/typescript/lib/typescript.js:23823:26 → 24873:26` |
|    new |     +5.5 MiB |  0.0% → 28.2% |    0 B → 5.5 MiB |  0 → 11 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js:38308:27`            |
|    new |     +2.5 MiB |  0.0% → 12.8% |    0 B → 2.5 MiB |   0 → 5 | `parseDeclarationWorker` | `./node_modules/typescript/lib/typescript.js:37124:34`            |
| -50.0% | -512.039 KiB |   3.4% → 2.6% |  1 MiB → 512 KiB |   2 → 1 | `createTypeLiteralNode`  | `./node_modules/typescript/lib/typescript.js:24569:33 → 25619:33` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js:72224:30`)

|  Change |      Delta |             % |              Size | Samples | Caller                     | Location                                                          |
| ------: | ---------: | ------------: | ----------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|  -13.5% | -3.501 MiB | 27.8% → 26.0% | 26 MiB → 22.5 MiB | 52 → 45 | `(anonymous)`              | `./node_modules/typescript/lib/typescript.js:71032:35 → 72315:35` |
|   -7.2% | -2.501 MiB | 36.9% → 37.0% | 34.5 MiB → 32 MiB | 69 → 64 | `(anonymous)`              | `./node_modules/typescript/lib/typescript.js:71020:29 → 72303:29` |
|  +13.9% |   +2.5 MiB | 19.2% → 23.7% | 18 MiB → 20.5 MiB | 36 → 41 | `getTypeFactsWorker`       | `./node_modules/typescript/lib/typescript.js:70941:30 → 72224:30` |
| removed |     -2 MiB |   2.1% → 0.0% |       2 MiB → 0 B |   4 → 0 | `compareSignaturesRelated` | `./node_modules/typescript/lib/typescript.js:65804:36`            |
| +400.0% |     +2 MiB |   0.5% → 2.9% | 512 KiB → 2.5 MiB |   1 → 5 | `resolveCallExpression`    | `./node_modules/typescript/lib/typescript.js:77689:33 → 78984:33` |

##### `set` (`<unknown>`)

| Change |      Delta |             % |                Size | Samples | Caller                                   | Location                                                          |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------- | ----------------------------------------------------------------- |
| -29.0% | -4.508 MiB |  11.8% → 8.8% |   15.5 MiB → 11 MiB | 31 → 22 | `getPropertiesOfUnionOrIntersectionType` | `./node_modules/typescript/lib/typescript.js:60131:50 → 61386:50` |
| -61.9% |  -2.84 MiB |   3.5% → 1.4% | 4.59 MiB → 1.75 MiB |   8 → 3 | `recursiveTypeRelatedTo`                 | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|  +8.4% | +2.513 MiB | 22.9% → 26.1% | 30.1 MiB → 32.6 MiB | 60 → 65 | `resolveObjectTypeMembers`               | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36` |
|    new | +2.257 MiB |   0.0% → 1.8% |      0 B → 2.26 MiB |   0 → 4 | `getIntersectionType`                    | `./node_modules/typescript/lib/typescript.js:64367:31`            |
| -27.4% | -2.099 MiB |   5.8% → 4.4% | 7.65 MiB → 5.55 MiB | 15 → 11 | `getObjectTypeInstantiation`             | `./node_modules/typescript/lib/typescript.js:64785:38 → 66040:38` |

##### `values` (`<unknown>`)

|  Change |    Delta |            % |              Size | Samples | Caller                                 | Location                                                          |
| ------: | -------: | -----------: | ----------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
|  -66.7% |   -2 MiB | 17.1% → 8.7% |     3 MiB → 1 MiB |   6 → 2 | `inferFromIndexTypes`                  | `./node_modules/typescript/lib/typescript.js:70466:33 → 71749:33` |
|     new | +1.5 MiB | 0.0% → 13.0% |     0 B → 1.5 MiB |   0 → 3 | `discriminateTypeByDiscriminableItems` | `./node_modules/typescript/lib/typescript.js:69828:48`            |
|  -66.7% |   -1 MiB |  8.6% → 4.3% | 1.5 MiB → 512 KiB |   3 → 1 | `hasMatchingArgument`                  | `./node_modules/typescript/lib/typescript.js:70885:31 → 72168:31` |
| removed |   -1 MiB |  5.7% → 0.0% |       1 MiB → 0 B |   2 → 0 | `indexSignaturesRelatedTo`             | `./node_modules/typescript/lib/typescript.js:68475:38`            |
|  -66.7% |   -1 MiB |  8.6% → 4.3% | 1.5 MiB → 512 KiB |   3 → 1 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:69901:28 → 71184:28` |

##### `slice` (`node:buffer:640:12`)

| Change |      Delta |      % |                Size | Samples | Caller     | Location             |
| -----: | ---------: | -----: | ------------------: | ------: | ---------- | -------------------- |
| -28.0% | -5.968 MiB | 100.0% | 21.3 MiB → 15.3 MiB | 28 → 17 | `toString` | `node:buffer:839:46` |

##### `parseLiteralTypeNode` (`./node_modules/typescript/lib/typescript.js:34779:32`)

| Change |    Delta |      % |            Size | Samples | Caller              | Location                                                          |
| -----: | -------: | -----: | --------------: | ------: | ------------------- | ----------------------------------------------------------------- |
| -91.7% | -5.5 MiB | 100.0% | 6 MiB → 512 KiB |  12 → 1 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js:33781:29 → 34836:29` |

##### `setParentRecursive` (`./node_modules/typescript/lib/typescript.js:22701:28`)

|  Change |        Delta |             % |               Size | Samples | Caller                                            | Location                                                            |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------- |
|  -32.0% |   -4.002 MiB | 41.0% → 33.3% | 12.5 MiB → 8.5 MiB | 25 → 17 | `bindChildren`                                    | `./node_modules/typescript/lib/typescript.js:45235:24 → 46428:24`   |
|  -10.0% |     -1.5 MiB | 49.2% → 52.9% |  15 MiB → 13.5 MiB | 30 → 27 | `getModuleInstanceState`                          | `./node_modules/typescript/lib/typescript.js:44660:32 → 45853:32`   |
| +299.9% |     +1.5 MiB |   1.6% → 7.8% |    512 KiB → 2 MiB |   1 → 4 | `bindJSDoc`                                       | `./node_modules/typescript/lib/typescript.js:46628:21 → 47821:21`   |
| removed |       -1 MiB |   3.3% → 0.0% |        1 MiB → 0 B |   2 → 0 | `collectModuleReferences`                         | `./node_modules/typescript/lib/typescript.js:123774:37 → 125356:37` |
|     new | +512.125 KiB |   0.0% → 2.0% |      0 B → 512 KiB |   0 → 1 | `collectDynamicImportOrRequireOrJsDocImportCalls` | `./node_modules/typescript/lib/typescript.js:123812:61 → 125394:61` |

##### `createBaseDeclaration` (`./node_modules/typescript/lib/typescript.js:24876:33`)

|  Change |        Delta |            % |            Size | Samples | Caller                      | Location                                                          |
| ------: | -----------: | -----------: | --------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| removed |     -1.5 MiB | 11.1% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `createPropertyAssignment`  | `./node_modules/typescript/lib/typescript.js:26479:36 → 27529:36` |
| removed |     -1.5 MiB | 11.1% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `createTypeLiteralNode`     | `./node_modules/typescript/lib/typescript.js:24569:33 → 25619:33` |
|  -75.0% |     -1.5 MiB | 14.8% → 5.9% | 2 MiB → 512 KiB |   4 → 1 | `parseTypeMember`           | `./node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |
|     new |       +1 MiB | 0.0% → 11.8% |     0 B → 1 MiB |   0 → 2 | `createFunctionDeclaration` | `./node_modules/typescript/lib/typescript.js:26701:37`            |
| removed | -512.039 KiB |  3.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `createArrowFunction`       | `./node_modules/typescript/lib/typescript.js:25050:31`            |

##### `parseParameterWorker` (`./node_modules/typescript/lib/typescript.js:34394:32`)

|  Change |  Delta |             % |        Size | Samples | Caller           | Location                                                          |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ----------------------------------------------------------------- |
| removed | -6 MiB | 100.0% → 0.0% | 6 MiB → 0 B |  12 → 0 | `(anonymous)`    | `./node_modules/typescript/lib/typescript.js:33416:157`           |
|     new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `parseParameter` | `./node_modules/typescript/lib/typescript.js:33329:26 → 34384:26` |

##### `createObjectType` (`./node_modules/typescript/lib/typescript.js:53707:28`)

|  Change |        Delta |             % |              Size | Samples | Caller                               | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------ | ----------------------------------------------------------------- |
|  -80.0% |       -2 MiB | 35.7% → 25.0% | 2.5 MiB → 512 KiB |   5 → 1 | `getTypeWithThisArgument`            | `./node_modules/typescript/lib/typescript.js:59199:35 → 60454:35` |
| removed |     -1.5 MiB |  21.4% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `getTypeOfFuncClassEnumModuleWorker` | `./node_modules/typescript/lib/typescript.js:58294:46`            |
|  -50.0% |       -1 MiB | 28.6% → 50.0% |     2 MiB → 1 MiB |   4 → 2 | `instantiateAnonymousType`           | `./node_modules/typescript/lib/typescript.js:64955:36 → 66215:36` |
| removed | -512.015 KiB |   7.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `createDeferredTypeReference`        | `./node_modules/typescript/lib/typescript.js:61558:39`            |
| removed | -512.015 KiB |   7.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `createAnonymousType`                | `./node_modules/typescript/lib/typescript.js:52513:31`            |

##### `getTypeListId` (`./node_modules/typescript/lib/typescript.js:62753:25`)

|  Change |        Delta |             % |            Size | Samples | Caller                       | Location                                                          |
| ------: | -----------: | ------------: | --------------: | ------: | ---------------------------- | ----------------------------------------------------------------- |
|  -64.3% |     -4.5 MiB | 73.7% → 55.6% | 7 MiB → 2.5 MiB |  14 → 5 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
| removed | -512.031 KiB |   5.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `chooseOverload`             | `./node_modules/typescript/lib/typescript.js:77470:28`            |
| removed | -512.031 KiB |   5.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `filterType`                 | `./node_modules/typescript/lib/typescript.js:71231:22`            |
|     new | +512.031 KiB |  0.0% → 11.1% |   0 B → 512 KiB |   0 → 1 | `getUnionTypeWorker`         | `./node_modules/typescript/lib/typescript.js:64122:30`            |
|  +50.0% | +512.015 KiB | 10.5% → 33.3% | 1 MiB → 1.5 MiB |   2 → 3 | `getUnionTypeFromSortedList` | `./node_modules/typescript/lib/typescript.js:62948:38 → 64203:38` |

##### `fillMissingTypeArguments` (`./node_modules/typescript/lib/typescript.js:62192:36`)

|  Change |        Delta |             % |          Size | Samples | Caller                                 | Location                                                          |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------------------- |
| removed |       -2 MiB |  36.4% → 0.0% |   2 MiB → 0 B |   4 → 0 | `inferFromTypes`                       | `./node_modules/typescript/lib/typescript.js:69901:28`            |
| removed |       -1 MiB |  18.2% → 0.0% |   1 MiB → 0 B |   2 → 0 | `getTypeAliasInstantiation`            | `./node_modules/typescript/lib/typescript.js:61631:37`            |
| removed |       -1 MiB |  18.2% → 0.0% |   1 MiB → 0 B |   2 → 0 | `structuredTypeRelatedToWorker`        | `./node_modules/typescript/lib/typescript.js:67277:43`            |
| removed |       -1 MiB |  18.2% → 0.0% |   1 MiB → 0 B |   2 → 0 | `getSignatureInstantiation`            | `./node_modules/typescript/lib/typescript.js:61283:37`            |
|     new | +512.929 KiB | 0.0% → 100.0% | 0 B → 513 KiB |   0 → 1 | `getTypeFromClassOrInterfaceReference` | `./node_modules/typescript/lib/typescript.js:61596:48 → 62851:48` |

##### `slice` (`<unknown>`)

|  Change |        Delta |             % |              Size | Samples | Caller                     | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|  -85.7% |       -3 MiB |  30.4% → 7.1% | 3.5 MiB → 512 KiB |   7 → 1 | `filterType`               | `./node_modules/typescript/lib/typescript.js:71231:22 → 72514:22` |
| +100.0% | +512.109 KiB |  4.3% → 14.3% |   512 KiB → 1 MiB |   1 → 2 | `getPathWithoutRoot`       | `./node_modules/typescript/lib/typescript.js:9150:28 → 9179:28`   |
|  -25.0% | -512.031 KiB | 17.4% → 21.4% |   2 MiB → 1.5 MiB |   4 → 3 | `filter`                   | `./node_modules/typescript/lib/typescript.js:2533:16 → 2546:16`   |
| removed | -512.031 KiB |   4.3% → 0.0% |     512 KiB → 0 B |   1 → 0 | `getAdjustedTypeWithFacts` | `./node_modules/typescript/lib/typescript.js:71022:36`            |
| removed | -512.031 KiB |   4.3% → 0.0% |     512 KiB → 0 B |   1 → 0 | `removeSuffix`             | `./node_modules/typescript/lib/typescript.js:3728:22`             |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js:63796:41`)

| Change |    Delta |      % |             Size | Samples | Caller                  | Location                                                          |
| -----: | -------: | -----: | ---------------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| -36.0% | -4.5 MiB | 100.0% | 12.5 MiB → 8 MiB | 25 → 16 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js:65023:33 → 66283:33` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js:46190:25`)

|  Change |          Delta |             % |               Size | Samples | Caller                             | Location                                                          |
| ------: | -------------: | ------------: | -----------------: | ------: | ---------------------------------- | ----------------------------------------------------------------- |
|  -24.1% |       -6.5 MiB | 79.4% → 68.3% |  27 MiB → 20.5 MiB | 54 → 41 | `declareSymbolAndAddToSymbolTable` | `./node_modules/typescript/lib/typescript.js:46199:44 → 47392:44` |
|     new |         +1 MiB |   0.0% → 3.3% |        0 B → 1 MiB |   0 → 2 | `bindBlockScopedDeclaration`       | `./node_modules/typescript/lib/typescript.js:46333:38 → 47526:38` |
|  +15.3% | +1,019.726 KiB | 19.1% → 25.0% | 6.51 MiB → 7.5 MiB | 13 → 15 | `declareModuleMember`              | `./node_modules/typescript/lib/typescript.js:45071:31 → 46264:31` |
| +100.0% |   +511.953 KiB |   1.5% → 3.3% |    512 KiB → 1 MiB |   1 → 2 | `declareClassMember`               | `./node_modules/typescript/lib/typescript.js:46246:30 → 47439:30` |

##### `signatureRelatedTo` (`./node_modules/typescript/lib/typescript.js:69635:32`)

| Change |  Delta |      % |          Size | Samples | Caller                | Location                                                          |
| -----: | -----: | -----: | ------------: | ------: | --------------------- | ----------------------------------------------------------------- |
| -57.1% | -4 MiB | 100.0% | 7 MiB → 3 MiB |  14 → 6 | `signaturesRelatedTo` | `./node_modules/typescript/lib/typescript.js:68245:33 → 69505:33` |

##### `mapType` (`./node_modules/typescript/lib/typescript.js:72551:19`)

|  Change |        Delta |             % |              Size | Samples | Caller                            | Location                                                          |
| ------: | -----------: | ------------: | ----------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| removed |       -1 MiB |  12.5% → 0.0% |       1 MiB → 0 B |   2 → 0 | `getApparentTypeOfContextualType` | `./node_modules/typescript/lib/typescript.js:74205:43 → 75488:43` |
|  -66.7% |       -1 MiB | 18.7% → 12.5% | 1.5 MiB → 512 KiB |   3 → 1 | `getNonNullableType`              | `./node_modules/typescript/lib/typescript.js:69170:30 → 70430:30` |
| removed |       -1 MiB |  12.5% → 0.0% |       1 MiB → 0 B |   2 → 0 | `addTypesToIntersection`          | `./node_modules/typescript/lib/typescript.js:63015:34`            |
| removed |       -1 MiB |  12.5% → 0.0% |       1 MiB → 0 B |   2 → 0 | `mapTypeWithAlias`                | `./node_modules/typescript/lib/typescript.js:71292:28 → 72575:28` |
|  +50.0% | +512.062 KiB | 12.5% → 37.5% |   1 MiB → 1.5 MiB |   2 → 3 | `getAdjustedTypeWithFacts`        | `./node_modules/typescript/lib/typescript.js:71022:36 → 72305:36` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:68323:36`)

| Change |      Delta |      % |              Size |   Samples | Caller        | Location                                                          |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | ----------------------------------------------------------------- |
|  -2.6% | -3.998 MiB | 100.0% | 156 MiB → 152 MiB | 311 → 303 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |

##### `toLowerCase` (`./node_modules/typescript/lib/typescript.js:3505:21`)

| Change |      Delta |      % |              Size | Samples | Caller    | Location    |
| -----: | ---------: | -----: | ----------------: | ------: | --------- | ----------- |
| -54.6% | -3.001 MiB | 100.0% | 5.5 MiB → 2.5 MiB |  11 → 5 | `replace` | `<unknown>` |

##### `getPropertyTypeForIndexType` (`./node_modules/typescript/lib/typescript.js:64803:39`)

| Change |  Delta |      % |          Size | Samples | Caller                            | Location                                                          |
| -----: | -----: | -----: | ------------: | ------: | --------------------------------- | ----------------------------------------------------------------- |
| -37.5% | -3 MiB | 100.0% | 8 MiB → 5 MiB | 16 → 10 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js:63894:43 → 65149:43` |

##### `addAntecedent` (`./node_modules/typescript/lib/typescript.js:46672:25`)

|  Change |        Delta |             % |          Size | Samples | Caller                          | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------ |
| removed |     -1.5 MiB |  42.9% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `bindCondition`                 | `./node_modules/typescript/lib/typescript.js:45571:25` |
| removed |       -1 MiB |  28.6% → 0.0% |   1 MiB → 0 B |   2 → 0 | `bindConditionalExpressionFlow` | `./node_modules/typescript/lib/typescript.js:46018:41` |
| removed |       -1 MiB |  28.6% → 0.0% |   1 MiB → 0 B |   2 → 0 | `bindIfStatement`               | `./node_modules/typescript/lib/typescript.js:45652:27` |
|     new | +512.109 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `bindOptionalExpression`        | `./node_modules/typescript/lib/typescript.js:47301:34` |

##### `instantiateList` (`./node_modules/typescript/lib/typescript.js:65878:27`)

|  Change |        Delta |             % |            Size | Samples | Caller                        | Location                                                          |
| ------: | -----------: | ------------: | --------------: | ------: | ----------------------------- | ----------------------------------------------------------------- |
|  -23.1% |     -1.5 MiB | 72.2% → 76.9% | 6.5 MiB → 5 MiB | 13 → 10 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js:59723:39 → 60978:39` |
| removed |     -1.5 MiB |  16.7% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `instantiateSignature`        | `./node_modules/typescript/lib/typescript.js:64733:32 → 65988:32` |
|     new | +512.109 KiB |   0.0% → 7.7% |   0 B → 512 KiB |   0 → 1 | `instantiateTypes`            | `./node_modules/typescript/lib/typescript.js:64640:28 → 65895:28` |
| removed | -512.109 KiB |   5.6% → 0.0% |   512 KiB → 0 B |   1 → 0 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js:59210:36`            |
| +100.0% | +512.109 KiB |  5.6% → 15.4% | 512 KiB → 1 MiB |   1 → 2 | `instantiateSignatures`       | `./node_modules/typescript/lib/typescript.js:64643:33 → 65898:33` |

##### `trimEnd` (`<unknown>`)

|  Change |  Delta |              % |              Size | Samples | Caller             | Location                                                          |
| ------: | -----: | -------------: | ----------------: | ------: | ------------------ | ----------------------------------------------------------------- |
|  -66.7% | -1 MiB | 60.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
| removed | -1 MiB |   40.0% → 0.0% |       1 MiB → 0 B |   2 → 0 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js:37509:32`            |

##### `split` (`<unknown>`)

|  Change |        Delta |              % |          Size | Samples | Caller              | Location                                                        |
| ------: | -----------: | -------------: | ------------: | ------: | ------------------- | --------------------------------------------------------------- |
|  -50.0% |       -1 MiB | 80.0% → 100.0% | 2 MiB → 1 MiB |   4 → 2 | `getPathComponents` | `./node_modules/typescript/lib/typescript.js:9075:27 → 9104:27` |
| removed | -512.015 KiB |   20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `pathComponents`    | `./node_modules/typescript/lib/typescript.js:9068:24`           |

##### `get` (`<unknown>`)

|  Change |        Delta |            % |          Size | Samples | Caller                       | Location                                               |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------ |
| removed | -512.031 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getTypeAtFlowLoopLabel`     | `./node_modules/typescript/lib/typescript.js:71934:36` |
| removed | -512.031 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js:64785:38` |
| removed | -512.015 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getIntersectionType`        | `./node_modules/typescript/lib/typescript.js:63112:31` |

##### `post` (`node:inspector:118:7`)

|  Change |      Delta |             % |           Size | Samples | Caller        | Location                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | --------------------------- |
| removed | -1.468 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   1 → 0 | `(anonymous)` | `node:internal/util:477:24` |

##### `Set` (`<unknown>`)

| Change |        Delta |             % |              Size | Samples | Caller                      | Location                                                          |
| -----: | -----------: | ------------: | ----------------: | ------: | --------------------------- | ----------------------------------------------------------------- |
| -57.1% |       -2 MiB | 87.5% → 50.0% | 3.5 MiB → 1.5 MiB |   7 → 3 | `recursiveTypeRelatedTo`    | `./node_modules/typescript/lib/typescript.js:67063:36 → 68323:36` |
|    new | +512.109 KiB |  0.0% → 16.7% |     0 B → 512 KiB |   0 → 1 | `checkUnusedTypeParameters` | `./node_modules/typescript/lib/typescript.js:84839:37`            |
|    new | +512.031 KiB |  0.0% → 16.7% |     0 B → 512 KiB |   0 → 1 | `getSpreadType`             | `./node_modules/typescript/lib/typescript.js:65547:25`            |

##### `charCodeAt` (`<unknown>`)

|  Change |        Delta |             % |          Size | Samples | Caller | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------ | ------------------------------------------------------ |
| removed | -522.375 KiB | 100.0% → 0.0% | 522 KiB → 0 B |   1 → 0 | `scan` | `./node_modules/typescript/lib/typescript.js:12765:16` |

##### `tryStatSync` (`node:fs:389:21`)

|  Change |       Delta |             % |          Size | Samples | Caller         | Location         |
| ------: | ----------: | ------------: | ------------: | ------: | -------------- | ---------------- |
| removed | -513.75 KiB | 100.0% → 0.0% | 514 KiB → 0 B |   1 → 0 | `readFileSync` | `node:fs:433:22` |

##### `internalBinding` (`node:internal/bootstrap/realm:185:45`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ----------------- |
| removed | -512.078 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `(anonymous)` | `node:crypto:1:1` |

##### `(anonymous)` (`node:crypto:1:1`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                               |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------- |
| removed | -512.062 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `substring` (`<unknown>`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ------------------------------------------------------ |
| removed | -512.031 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getTextOfNodeFromSourceText` | `./node_modules/typescript/lib/typescript.js:15660:37` |

##### `trimStart` (`<unknown>`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `appendIfCommentDirective` | `./node_modules/typescript/lib/typescript.js:13330:36` |

##### `getDirent` (`node:internal/fs/utils:291:19`)

|  Change |        Delta |             % |          Size | Samples | Caller       | Location                        |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------------- |
| removed | -512.015 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getDirents` | `node:internal/fs/utils:246:20` |

##### `replace` (`<unknown>`)

|  Change |        Delta |             % |            Size | Samples | Caller                                  | Location                                                            |
| ------: | -----------: | ------------: | --------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
|  -50.0% |  -512.14 KiB |  10.5% → 5.6% | 1 MiB → 512 KiB |   2 → 1 | `toPath3`                               | `./node_modules/typescript/lib/typescript.js:122790:19 → 124369:19` |
|     new | +512.015 KiB |   0.0% → 5.6% |   0 B → 512 KiB |   0 → 1 | `formatStringFromArgs`                  | `./node_modules/typescript/lib/typescript.js:21430:30`              |
| +100.0% |     +512 KiB |  5.3% → 11.1% | 512 KiB → 1 MiB |   1 → 2 | `getResolvedProjectReferenceToRedirect` | `./node_modules/typescript/lib/typescript.js:124152:49 → 125734:49` |
|   -9.1% | -511.984 KiB | 57.9% → 55.6% | 5.5 MiB → 5 MiB | 11 → 10 | `getCanonicalFileName`                  | `./node_modules/typescript/lib/typescript.js:124375:32 → 125957:32` |
|  -20.0% | -511.875 KiB | 26.3% → 22.2% | 2.5 MiB → 2 MiB |   5 → 4 | `toFileNameLowerCase`                   | `./node_modules/typescript/lib/typescript.js:3496:29 → 3509:29`     |

##### `push` (`<unknown>`)

|  Change |      Delta |             % |            Size | Samples | Caller                    | Location                                                          |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------- | ----------------------------------------------------------------- |
|  +71.5% | +2.501 MiB | 13.0% → 22.6% | 3.5 MiB → 6 MiB |  7 → 12 | `parseUnionTypeOrHigher`  | `./node_modules/typescript/lib/typescript.js:34017:34 → 35072:34` |
|  -29.4% |   -2.5 MiB | 31.5% → 22.6% | 8.5 MiB → 6 MiB | 17 → 12 | `getIntersectionType`     | `./node_modules/typescript/lib/typescript.js:63112:31 → 64367:31` |
|  -62.5% |   -2.5 MiB |  14.8% → 5.7% | 4 MiB → 1.5 MiB |   8 → 3 | `arrayFrom`               | `./node_modules/typescript/lib/typescript.js:3174:19 → 3187:19`   |
| removed |     -1 MiB |   3.7% → 0.0% |     1 MiB → 0 B |   2 → 0 | `pushTypeResolution`      | `./node_modules/typescript/lib/typescript.js:57184:30`            |
|     new |     +1 MiB |   0.0% → 3.8% |     0 B → 1 MiB |   0 → 2 | `forEachChildRecursively` | `./node_modules/typescript/lib/typescript.js:32296:33`            |

##### `readFileSync` (`node:fs:433:22`)

|  Change |        Delta |              % |                Size | Samples | Caller            | Location                                                        |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------- | --------------------------------------------------------------- |
| removed | -512.015 KiB |    5.7% → 0.0% |       512 KiB → 0 B |   1 → 0 | `readFileWorker`  | `./node_modules/typescript/lib/typescript.js:8722:28 → 8751:28` |
|   +1.3% | +110.078 KiB | 94.3% → 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`                      |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

| Change |        Delta |      % |                Size | Samples | Caller        | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
|  -2.2% | -120.312 KiB | 100.0% | 5.27 MiB → 5.16 MiB |      10 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Third-party

| Change |       Delta |             % |                Size |       Samples | Function                            | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|  +4.0% | +44.164 MiB | 23.0% → 24.1% | 1.09 GiB → 1.13 GiB | 2,227 → 2,315 | `checkArrayLiteral`                 | `./node_modules/typescript/lib/typescript.js:74651:29 → 75934:29`   |
|  +8.4% | +34.939 MiB |   8.6% → 9.4% |   417 MiB → 452 MiB |     833 → 903 | `parseStatement`                    | `./node_modules/typescript/lib/typescript.js:35924:26 → 36979:26`   |
|    new | +34.546 MiB |   0.0% → 0.7% |      0 B → 34.5 MiB |        0 → 69 | `expressionOrTypeToTypeNodeHelper`  | `./node_modules/typescript/lib/typescript.js:54336:46`              |
|  +8.2% | +34.439 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 910 | `parseSourceFile`                   | `./node_modules/typescript/lib/typescript.js:31471:27 → 32523:27`   |
|  +8.2% | +34.439 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 910 | `createSourceFile`                  | `./node_modules/typescript/lib/typescript.js:31293:26 → 32345:26`   |
|  +8.1% | +33.939 MiB |   8.6% → 9.4% |   421 MiB → 455 MiB |     841 → 909 | `parseSourceFileWorker`             | `./node_modules/typescript/lib/typescript.js:31659:33 → 32711:33`   |
|  +8.1% | +33.939 MiB |   8.6% → 9.4% |   418 MiB → 452 MiB |     835 → 903 | `parseList`                         | `./node_modules/typescript/lib/typescript.js:32618:21 → 33673:21`   |
| +18.7% | +33.922 MiB |   3.7% → 4.5% |   181 MiB → 215 MiB |     360 → 428 | `checkTryStatement`                 | `./node_modules/typescript/lib/typescript.js:85102:29 → 86397:29`   |
|  +6.2% | +27.469 MiB |   9.1% → 9.8% |   443 MiB → 471 MiB |     871 → 927 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:121493:10 → 123071:10` |
|  +1.0% | +26.809 MiB | 52.6% → 53.7% |  2.5 GiB → 2.53 GiB | 5,104 → 5,158 | `checkExpressionWithContextualType` | `./node_modules/typescript/lib/typescript.js:81122:45 → 82417:45`   |
| +17.4% | +25.957 MiB |   3.1% → 3.6% |   149 MiB → 175 MiB |     298 → 350 | `parsePropertyOrMethodSignature`    | `./node_modules/typescript/lib/typescript.js:33493:42 → 34548:42`   |
|  +6.0% | +23.938 MiB |   8.2% → 8.7% |   397 MiB → 421 MiB |     793 → 841 | `parseDeclarationWorker`            | `./node_modules/typescript/lib/typescript.js:36069:34 → 37124:34`   |
| +10.7% | +22.448 MiB |   4.3% → 4.8% |   209 MiB → 232 MiB |     418 → 463 | `parseInterfaceDeclaration`         | `./node_modules/typescript/lib/typescript.js:36692:37 → 37747:37`   |
| +17.4% | +22.008 MiB |   2.6% → 3.1% |   127 MiB → 149 MiB |     253 → 297 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:31696:71 → 32748:71`   |
| +16.3% | +21.508 MiB |   2.7% → 3.2% |   132 MiB → 154 MiB |     264 → 307 | `mapDefined`                        | `./node_modules/typescript/lib/typescript.js:2683:20 → 2696:20`     |
| +13.2% | +20.955 MiB |   3.3% → 3.7% |   159 MiB → 180 MiB |     306 → 348 | `(anonymous)`                       | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |
| +11.0% | +20.819 MiB |   3.9% → 4.3% |   189 MiB → 209 MiB |     376 → 418 | `resolveObjectTypeMembers`          | `./node_modules/typescript/lib/typescript.js:59210:36 → 60465:36`   |
|  +5.1% | +20.526 MiB |   8.2% → 8.7% |   400 MiB → 421 MiB |     786 → 828 | `processRootFile`                   | `./node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |
| +16.6% | +20.508 MiB |   2.5% → 3.0% |   124 MiB → 144 MiB |     247 → 288 | `parseJSDocCommentWorker`           | `./node_modules/typescript/lib/typescript.js:37231:37 → 38286:37`   |
| +15.1% |  +20.03 MiB |   2.7% → 3.2% |   133 MiB → 153 MiB |     265 → 305 | `checkAwaitExpression`              | `./node_modules/typescript/lib/typescript.js:80062:32 → 81357:32`   |

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

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Third-party

| Change |       Delta |             % |                Size |       Samples | Function                                   | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  -5.3% | -122.41 MiB | 47.3% → 45.2% | 2.25 GiB → 2.13 GiB | 4,584 → 4,340 | `applyToParameterTypes`                    | `./node_modules/typescript/lib/typescript.js:69472:33 → 70732:33`   |
|  -2.3% | -79.892 MiB | 70.4% → 69.4% | 3.35 GiB → 3.27 GiB | 6,820 → 6,662 | `checkTypeRelatedTo`                       | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30`   |
|  -1.8% | -67.355 MiB | 75.9% → 75.2% | 3.61 GiB → 3.54 GiB | 7,344 → 7,210 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`     |
|  -3.7% | -66.772 MiB | 37.3% → 36.2% | 1.77 GiB → 1.71 GiB | 3,614 → 3,481 | `checkVariableDeclarationList`             | `./node_modules/typescript/lib/typescript.js:84112:40 → 85407:40`   |
|  -3.7% | -65.008 MiB | 36.4% → 35.4% | 1.73 GiB → 1.66 GiB | 3,526 → 3,396 | `checkExpressionCached`                    | `./node_modules/typescript/lib/typescript.js:81145:33 → 82440:33`   |
|  -1.4% | -61.741 MiB | 87.5% → 87.1% |  4.16 GiB → 4.1 GiB | 8,480 → 8,357 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |
|  -1.4% | -61.736 MiB | 87.5% → 87.1% |  4.16 GiB → 4.1 GiB | 8,482 → 8,359 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |
|  -1.4% | -61.241 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,478 → 8,356 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |
|  -1.4% | -61.236 MiB | 87.6% → 87.1% |  4.16 GiB → 4.1 GiB | 8,484 → 8,362 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -1.4% | -61.218 MiB | 87.4% → 86.9% | 4.15 GiB → 4.09 GiB | 8,464 → 8,342 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |
|  -1.4% | -60.723 MiB | 87.4% → 87.0% | 4.15 GiB → 4.09 GiB | 8,470 → 8,349 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -1.4% | -60.723 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,474 → 8,353 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
|  -1.4% |  -60.72 MiB | 87.4% → 86.9% | 4.15 GiB → 4.09 GiB | 8,465 → 8,344 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17`     |
|  -1.4% | -60.713 MiB | 87.3% → 86.9% | 4.15 GiB → 4.09 GiB | 8,461 → 8,340 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js:123327:34 → 124909:34` |
|  -1.4% | -60.222 MiB | 87.5% → 87.0% |  4.16 GiB → 4.1 GiB | 8,473 → 8,353 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |
|  -3.8% | -60.119 MiB | 32.7% → 31.7% | 1.55 GiB → 1.49 GiB | 3,168 → 3,048 | `getWidenedTypeForVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:58009:52 → 59264:52`   |
| -15.9% | -58.621 MiB |   7.6% → 6.5% |   370 MiB → 311 MiB |     738 → 621 | `isTypeAssignableTo`                       | `./node_modules/typescript/lib/typescript.js:65221:30 → 66481:30`   |
|  -1.4% | -57.185 MiB | 84.6% → 84.2% | 4.02 GiB → 3.97 GiB | 8,198 → 8,084 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33`   |
|  -1.4% | -56.183 MiB | 84.5% → 84.1% | 4.02 GiB → 3.96 GiB | 8,186 → 8,074 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  -1.4% | -55.683 MiB | 84.6% → 84.2% | 4.02 GiB → 3.96 GiB | 8,193 → 8,082 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js:87239:27 → 88552:27`   |

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

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `checkArrayLiteral` (`./node_modules/typescript/lib/typescript.js:75934:29`)

| Change |       Delta |             % |                 Size |       Samples | Callee                              | Location                                                          |
| -----: | ----------: | ------------: | -------------------: | ------------: | ----------------------------------- | ----------------------------------------------------------------- |
|  +3.9% | +38.661 MiB | 89.8% → 89.7% | 1,004 MiB → 1.02 GiB | 2,000 → 2,077 | `checkExpressionForMutableLocation` | `./node_modules/typescript/lib/typescript.js:81239:45 → 82534:45` |
|  +4.8% |  +5.006 MiB |   9.4% → 9.5% |    105 MiB → 110 MiB |     209 → 219 | `checkExpressionWorker`             | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |
| -66.6% |  -2.003 MiB |   0.3% → 0.1% |     3.01 MiB → 1 MiB |         6 → 2 | `someType`                          | `./node_modules/typescript/lib/typescript.js:71222:20 → 72505:20` |
|    new |  +1.001 MiB |   0.0% → 0.1% |          0 B → 1 MiB |         0 → 2 | `getApparentTypeOfContextualType`   | `./node_modules/typescript/lib/typescript.js:75488:43`            |
| -50.0% |      -1 MiB |   0.2% → 0.1% |        2 MiB → 1 MiB |         4 → 2 | `checkExpression`                   | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |

##### `parseStatement` (`./node_modules/typescript/lib/typescript.js:36979:26`)

| Change |       Delta |             % |              Size |   Samples | Callee                              | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------------- | ----------------------------------------------------------------- |
|  +6.2% | +16.451 MiB | 64.0% → 62.7% | 267 MiB → 283 MiB | 533 → 566 | `parseDeclarationWorker`            | `./node_modules/typescript/lib/typescript.js:36069:34 → 37124:34` |
|  +7.7% | +11.996 MiB | 37.6% → 37.3% | 157 MiB → 169 MiB | 313 → 337 | `doInsideOfContext`                 | `./node_modules/typescript/lib/typescript.js:31856:29 → 32908:29` |
| -18.9% |   -6.51 MiB |   8.3% → 6.2% | 34.5 MiB → 28 MiB |   69 → 56 | `parseDeclaration`                  | `./node_modules/typescript/lib/typescript.js:36040:28 → 37095:28` |
| +57.9% |  +5.499 MiB |   2.3% → 3.3% |  9.5 MiB → 15 MiB |   19 → 30 | `parseExpressionOrLabeledStatement` | `./node_modules/typescript/lib/typescript.js:35745:45 → 36800:45` |
| -40.0% |      -4 MiB |   2.4% → 1.3% |    10 MiB → 6 MiB |   20 → 12 | `parseIfStatement`                  | `./node_modules/typescript/lib/typescript.js:35549:28 → 36604:28` |

##### `expressionOrTypeToTypeNodeHelper` (`./node_modules/typescript/lib/typescript.js:54336:46`)

| Change |       Delta |             % |           Size | Samples | Callee                 | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------- | ------------------------------------------------------ |
|    new | +34.546 MiB | 0.0% → 100.0% | 0 B → 34.5 MiB |  0 → 69 | `typeToTypeNodeHelper` | `./node_modules/typescript/lib/typescript.js:54424:34` |

##### `parseSourceFile` (`./node_modules/typescript/lib/typescript.js:32523:27`)

| Change |        Delta |              % |              Size |   Samples | Callee                  | Location                                                          |
| -----: | -----------: | -------------: | ----------------: | --------: | ----------------------- | ----------------------------------------------------------------- |
|  +8.1% |  +33.939 MiB | 100.0% → 99.9% | 421 MiB → 455 MiB | 841 → 909 | `parseSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:31659:33 → 32711:33` |
|    new | +512.015 KiB |    0.0% → 0.1% |     0 B → 512 KiB |     0 → 1 | `initializeState`       | `./node_modules/typescript/lib/typescript.js:32653:27`            |

##### `createSourceFile` (`./node_modules/typescript/lib/typescript.js:32345:26`)

| Change |       Delta |      % |              Size |   Samples | Callee            | Location                                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------- | ----------------------------------------------------------------- |
|  +8.2% | +34.439 MiB | 100.0% | 421 MiB → 455 MiB | 841 → 910 | `parseSourceFile` | `./node_modules/typescript/lib/typescript.js:31471:27 → 32523:27` |

##### `parseSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:32711:33`)

|  Change |        Delta |           % |              Size |   Samples | Callee                     | Location                                                          |
| ------: | -----------: | ----------: | ----------------: | --------: | -------------------------- | ----------------------------------------------------------------- |
|   +8.1% |  +33.939 MiB |       99.3% | 418 MiB → 452 MiB | 835 → 903 | `parseList`                | `./node_modules/typescript/lib/typescript.js:32618:21 → 33673:21` |
| removed | -512.039 KiB | 0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `processPragmasIntoFields` | `./node_modules/typescript/lib/typescript.js:38584:34`            |
|  +50.0% | +511.992 KiB | 0.2% → 0.3% |   1 MiB → 1.5 MiB |     2 → 3 | `processCommentPragmas`    | `./node_modules/typescript/lib/typescript.js:38564:31 → 39632:31` |
|     ~0% |       +240 B | 0.4% → 0.3% |           1.5 MiB |         3 | `createSourceFile2`        | `./node_modules/typescript/lib/typescript.js:31795:29 → 32847:29` |

##### `parseList` (`./node_modules/typescript/lib/typescript.js:33673:21`)

| Change |       Delta |             % |              Size |   Samples | Callee                | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------- | ----------------------------------------------------------------- |
|  +8.9% | +35.943 MiB | 96.6% → 97.3% | 404 MiB → 440 MiB | 807 → 879 | `parseStatement`      | `./node_modules/typescript/lib/typescript.js:35924:26 → 36979:26` |
|  +9.3% | +18.461 MiB | 47.7% → 48.2% | 199 MiB → 218 MiB | 398 → 435 | `parseTypeMember`     | `./node_modules/typescript/lib/typescript.js:33536:27 → 34591:27` |
| -14.5% |  -8.005 MiB | 13.2% → 10.4% |   55 MiB → 47 MiB |  110 → 94 | `parseClassElement`   | `./node_modules/typescript/lib/typescript.js:36538:29 → 37593:29` |
|  -7.7% |  -1.003 MiB |   3.1% → 2.7% |   13 MiB → 12 MiB |   26 → 24 | `parseListElement`    | `./node_modules/typescript/lib/typescript.js:32639:28 → 33694:28` |
| +28.6% |      +1 MiB |   0.8% → 1.0% | 3.5 MiB → 4.5 MiB |     7 → 9 | `parseHeritageClause` | `./node_modules/typescript/lib/typescript.js:36666:31 → 37721:31` |

##### `checkTryStatement` (`./node_modules/typescript/lib/typescript.js:86397:29`)

| Change |       Delta |             % |              Size |   Samples | Callee                         | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------------------ | ----------------------------------------------------------------- |
| +18.8% | +33.922 MiB | 99.4% → 99.5% | 180 MiB → 214 MiB | 358 → 426 | `checkBlock`                   | `./node_modules/typescript/lib/typescript.js:83716:22 → 85011:22` |
|    ~0% |       -32 B |   0.6% → 0.5% |             1 MiB |         2 | `checkVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:83907:40 → 85202:40` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:123071:10`)

| Change |       Delta |             % |                Size |   Samples | Callee             | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------ | ------------------------------------------------------------------- |
|  +8.2% | +34.439 MiB | 95.0% → 96.7% |   421 MiB → 455 MiB | 841 → 910 | `createSourceFile` | `./node_modules/typescript/lib/typescript.js:31293:26 → 32345:26`   |
| -31.3% |   -6.97 MiB |   5.0% → 3.3% | 22.3 MiB → 15.3 MiB |   30 → 17 | `(anonymous)`      | `./node_modules/typescript/lib/typescript.js:121549:40 → 123127:40` |

##### `checkExpressionWithContextualType` (`./node_modules/typescript/lib/typescript.js:82417:45`)

| Change |       Delta |             % |                Size |       Samples | Callee                                          | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ----------------------------------------------- | ----------------------------------------------------------------- |
|  +0.9% | +21.927 MiB | 90.8% → 90.7% | 2.27 GiB → 2.29 GiB | 4,636 → 4,680 | `checkExpressionWorker`                         | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |
|  +1.6% |  +3.891 MiB |          9.3% |   238 MiB → 242 MiB |     474 → 482 | `checkExpression`                               | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| +19.2% |  +1.448 MiB |          0.3% | 7.56 MiB → 9.01 MiB |       15 → 18 | `instantiateTypeWithSingleGenericCallSignature` | `./node_modules/typescript/lib/typescript.js:81266:57 → 82561:57` |
|    new | +512.25 KiB |  0.0% → <0.1% |       0 B → 512 KiB |         0 → 1 | `isLiteralOfContextualType`                     | `./node_modules/typescript/lib/typescript.js:82516:37`            |

##### `parsePropertyOrMethodSignature` (`./node_modules/typescript/lib/typescript.js:34548:42`)

|  Change |       Delta |             % |                Size |   Samples | Callee                | Location                                                          |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------- | ----------------------------------------------------------------- |
|     new | +16.501 MiB |   0.0% → 9.4% |      0 B → 16.5 MiB |    0 → 33 | `parseType`           | `./node_modules/typescript/lib/typescript.js:35153:21`            |
|  +15.2% | +11.011 MiB | 48.7% → 47.7% | 72.6 MiB → 83.6 MiB | 145 → 167 | `mapDefined`          | `./node_modules/typescript/lib/typescript.js:2683:20 → 2696:20`   |
|  -54.2% |    -6.5 MiB |   8.0% → 3.1% |    12 MiB → 5.5 MiB |   24 → 11 | `parseTypeAnnotation` | `./node_modules/typescript/lib/typescript.js:34117:31 → 35172:31` |
|  -60.0% |    -4.5 MiB |   5.0% → 1.7% |     7.5 MiB → 3 MiB |    15 → 6 | `parseReturnType`     | `./node_modules/typescript/lib/typescript.js:33393:27 → 34448:27` |
| +116.7% |  +3.502 MiB |   2.0% → 3.7% |     3 MiB → 6.5 MiB |    6 → 13 | `withJSDoc`           | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |

##### `parseDeclarationWorker` (`./node_modules/typescript/lib/typescript.js:37124:34`)

| Change |       Delta |             % |              Size |   Samples | Callee                      | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------------- | ----------------------------------------------------------------- |
| +10.7% | +22.448 MiB | 52.7% → 55.1% | 209 MiB → 232 MiB | 418 → 463 | `parseInterfaceDeclaration` | `./node_modules/typescript/lib/typescript.js:36692:37 → 37747:37` |
| +40.0% | +12.001 MiB |  7.6% → 10.0% |   30 MiB → 42 MiB |   60 → 84 | `parseDelimitedList`        | `./node_modules/typescript/lib/typescript.js:32875:30 → 33930:30` |
| -16.2% |  -6.006 MiB |   9.3% → 7.4% |   37 MiB → 31 MiB |   74 → 62 | `parseClassDeclaration`     | `./node_modules/typescript/lib/typescript.js:36629:33 → 37684:33` |
| -31.6% |      -6 MiB |   4.8% → 3.1% |   19 MiB → 13 MiB |   38 → 26 | `parseVariableStatement`    | `./node_modules/typescript/lib/typescript.js:36261:34 → 37316:34` |
|  -3.1% |   -3.51 MiB | 28.2% → 25.8% | 112 MiB → 109 MiB | 224 → 217 | `parseModuleDeclaration`    | `./node_modules/typescript/lib/typescript.js:36778:34 → 37833:34` |

##### `parseInterfaceDeclaration` (`./node_modules/typescript/lib/typescript.js:37747:37`)

|  Change |          Delta |             % |                Size |   Samples | Callee                   | Location                                                          |
| ------: | -------------: | ------------: | ------------------: | --------: | ------------------------ | ----------------------------------------------------------------- |
|  +13.3% |    +24.463 MiB | 87.8% → 89.8% |   184 MiB → 208 MiB | 367 → 416 | `parseObjectTypeMembers` | `./node_modules/typescript/lib/typescript.js:33580:34 → 34635:34` |
|  -66.7% |     -2.005 MiB |   1.4% → 0.4% |    3.01 MiB → 1 MiB |     6 → 2 | `parseIdentifier`        | `./node_modules/typescript/lib/typescript.js:32321:27 → 33376:27` |
| removed |         -1 MiB |   0.5% → 0.0% |         1 MiB → 0 B |     2 → 0 | `getJSDocCommentRanges`  | `./node_modules/typescript/lib/typescript.js:16640:31`            |
|  +15.3% | +1,020.445 KiB |   3.1% → 3.2% | 6.51 MiB → 7.51 MiB |   13 → 15 | `withJSDoc`              | `./node_modules/typescript/lib/typescript.js:31691:21 → 32743:21` |
|  -20.0% |   -512.054 KiB |   1.2% → 0.9% |     2.5 MiB → 2 MiB |     5 → 4 | `parseHeritageClauses`   | `./node_modules/typescript/lib/typescript.js:36660:32 → 37715:32` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:32748:71`)

| Change |       Delta |             % |                Size |   Samples | Callee                    | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------- | ----------------------------------------------------------------- |
| +15.7% | +17.023 MiB | 85.4% → 84.2% |   108 MiB → 125 MiB | 216 → 250 | `parseJSDocCommentWorker` | `./node_modules/typescript/lib/typescript.js:37231:37 → 38286:37` |
| +25.7% |  +3.984 MiB | 12.2% → 13.1% | 15.5 MiB → 19.5 MiB |   31 → 39 | `parseJSDocComment`       | `./node_modules/typescript/lib/typescript.js:37200:31 → 38255:31` |

##### `mapDefined` (`./node_modules/typescript/lib/typescript.js:2696:20`)

| Change |       Delta |             % |              Size |   Samples | Callee        | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------- | ----------------------------------------------------------------- |
| +17.4% | +22.008 MiB | 95.8% → 96.7% | 127 MiB → 149 MiB | 253 → 297 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:31696:71 → 32748:71` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124077:30`)

| Change |       Delta |      % |              Size |   Samples | Callee            | Location                                                            |
| -----: | ----------: | -----: | ----------------: | --------: | ----------------- | ------------------------------------------------------------------- |
| +13.2% | +20.955 MiB | 100.0% | 159 MiB → 180 MiB | 306 → 348 | `processRootFile` | `./node_modules/typescript/lib/typescript.js:123708:27 → 125290:27` |

##### `resolveObjectTypeMembers` (`./node_modules/typescript/lib/typescript.js:60465:36`)

| Change |       Delta |             % |                Size |   Samples | Callee                          | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------- | ----------------------------------------------------------------- |
| +25.2% | +20.513 MiB | 43.3% → 48.8% |  81.6 MiB → 102 MiB | 163 → 204 | `getPropertiesOfType`           | `./node_modules/typescript/lib/typescript.js:60156:31 → 61411:31` |
| +19.7% | +11.997 MiB | 32.4% → 34.9% |     61 MiB → 73 MiB | 122 → 146 | `instantiateSymbol`             | `./node_modules/typescript/lib/typescript.js:64758:29 → 66013:29` |
| +14.0% |  +3.499 MiB | 13.3% → 13.6% |   25 MiB → 28.5 MiB |   50 → 57 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js:59020:41 → 60275:41` |
|  +8.4% |  +2.513 MiB | 15.9% → 15.6% | 30.1 MiB → 32.6 MiB |   60 → 65 | `set`                           | `<unknown>`                                                       |
| -21.7% |    -2.5 MiB |   6.1% → 4.3% |    11.5 MiB → 9 MiB |   23 → 18 | `forEach`                       | `<unknown>`                                                       |

##### `processRootFile` (`./node_modules/typescript/lib/typescript.js:125290:27`)

| Change |       Delta |      % |              Size |   Samples | Callee              | Location                                                            |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------- | ------------------------------------------------------------------- |
|  +5.1% | +20.526 MiB | 100.0% | 400 MiB → 421 MiB | 786 → 828 | `processSourceFile` | `./node_modules/typescript/lib/typescript.js:123920:29 → 125502:29` |

##### `parseJSDocCommentWorker` (`./node_modules/typescript/lib/typescript.js:38286:37`)

| Change |      Delta |             % |               Size | Samples | Callee        | Location                                                          |
| -----: | ---------: | ------------: | -----------------: | ------: | ------------- | ----------------------------------------------------------------- |
| +28.9% | +8.513 MiB | 23.9% → 26.4% |  29.5 MiB → 38 MiB | 59 → 76 | `doJSDocScan` | `./node_modules/typescript/lib/typescript.js:37253:27 → 38308:27` |
| +62.2% | +2.493 MiB |   3.2% → 4.5% | 4.01 MiB → 6.5 MiB |  8 → 13 | `scanRange`   | `./node_modules/typescript/lib/typescript.js:13601:21 → 14560:21` |

##### `checkAwaitExpression` (`./node_modules/typescript/lib/typescript.js:81357:32`)

| Change |       Delta |             % |              Size |   Samples | Callee             | Location                                                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ------------------ | ----------------------------------------------------------------- |
| +20.7% | +24.054 MiB | 87.2% → 91.5% | 116 MiB → 140 MiB | 231 → 279 | `checkExpression`  | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
| -23.6% |  -4.023 MiB |  12.8% → 8.5% | 17.1 MiB → 13 MiB |   34 → 26 | `checkAwaitedType` | `./node_modules/typescript/lib/typescript.js:82795:28 → 84090:28` |

##### `forEach` (`<unknown>`)

|  Change |        Delta |            % |               Size |       Samples | Callee              | Location                                                          |
| ------: | -----------: | -----------: | -----------------: | ------------: | ------------------- | ----------------------------------------------------------------- |
|   +0.3% |   +8.407 MiB |        99.4% | 2.59 GiB → 2.6 GiB | 5,277 → 5,295 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js:87186:29 → 88499:29` |
|  +39.9% |   +4.002 MiB |  0.4% → 0.5% |    10 MiB → 14 MiB |       20 → 28 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20 → 53423:20` |
|  -10.2% |   -2.503 MiB |  0.9% → 0.8% |  24.5 MiB → 22 MiB |       49 → 44 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -26.8% | -561.554 KiB |         0.1% | 2.05 MiB → 1.5 MiB |         4 → 3 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20 → 51425:20` |
| removed |  -560.39 KiB | <0.1% → 0.0% |      560 KiB → 0 B |         1 → 0 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:59752:23`            |

##### `statSync` (`node:fs:1745:18`)

|  Change |        Delta |              % |            Size | Samples | Callee                | Location                        |
| ------: | -----------: | -------------: | --------------: | ------: | --------------------- | ------------------------------- |
|     new |     +1.5 MiB |   0.0% → 60.0% |   0 B → 1.5 MiB |   0 → 3 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
| +100.0% | +512.015 KiB | 100.0% → 40.0% | 512 KiB → 1 MiB |   1 → 2 | `wrappedFn`           | `node:internal/errors:535:21`   |

##### `Map` (`<unknown>`)

| Change |        Delta |           % |               Size | Samples | Callee | Location    |
| -----: | -----------: | ----------: | -----------------: | ------: | ------ | ----------- |
| +26.7% | +559.929 KiB | 2.6% → 3.3% | 2.05 MiB → 2.6 MiB |   4 → 5 | `set`  | `<unknown>` |
| +11.1% | +512.078 KiB | 5.8% → 6.3% |    4.5 MiB → 5 MiB |  9 → 10 | `next` | `<unknown>` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

| Change |        Delta |            % |          Size | Samples | Callee           | Location                        |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------- | ------------------------------- |
|    new | +512.015 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `msFromTimeSpec` | `node:internal/fs/utils:428:24` |
|    new | +512.015 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `Stats`          | `node:internal/fs/utils:524:15` |

##### `filter` (`<unknown>`)

| Change |        Delta |            % |          Size | Samples | Callee        | Location                                               |
| -----: | -----------: | -----------: | ------------: | ------: | ------------- | ------------------------------------------------------ |
|    new | +512.015 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:16576:57` |

##### `FastBuffer` (`node:internal/buffer:956:1`)

| Change |        Delta |             % |          Size | Samples | Callee       | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ----------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `Uint8Array` | `<unknown>` |

##### `createUnsafeBuffer` (`node:internal/buffer:1082:28`)

| Change |        Delta |             % |          Size | Samples | Callee       | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ---------------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `FastBuffer` | `node:internal/buffer:956:1` |

##### `allocate` (`node:buffer:436:18`)

| Change |        Delta |             % |          Size | Samples | Callee               | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------- | ------------------------------ |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `createUnsafeBuffer` | `node:internal/buffer:1082:28` |

##### `allocUnsafe` (`node:buffer:411:42`)

| Change |        Delta |             % |          Size | Samples | Callee     | Location             |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | -------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `allocate` | `node:buffer:436:18` |

##### `tryCreateBuffer` (`node:fs:397:25`)

| Change |        Delta |             % |          Size | Samples | Callee        | Location             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | -------------------- |
|    new | +512.062 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `allocUnsafe` | `node:buffer:411:42` |

##### `tryReadSync` (`node:fs:412:21`)

| Change |        Delta |             % |          Size | Samples | Callee     | Location         |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ---------------- |
|    new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `readSync` | `node:fs:695:18` |

##### `applyToParameterTypes` (`./node_modules/typescript/lib/typescript.js:70732:33`)

|  Change |        Delta |             % |                Size |       Samples | Callee                                             | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------- | ----------------------------------------------------------------- |
|   -5.5% | -125.411 MiB | 99.7% → 99.6% | 2.24 GiB → 2.12 GiB | 4,572 → 4,322 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js:70151:62 → 71434:62` |
| +249.6% |     +2.5 MiB |  <0.1% → 0.2% |     1 MiB → 3.5 MiB |         2 → 7 | `getTypeOfInstantiatedSymbol`                      | `./node_modules/typescript/lib/typescript.js:58351:39 → 59606:39` |
|     new |       +1 MiB |  0.0% → <0.1% |         0 B → 1 MiB |         0 → 2 | `getOptionalType`                                  | `./node_modules/typescript/lib/typescript.js:70414:27`            |
| +200.0% |       +1 MiB |  <0.1% → 0.1% |   512 KiB → 1.5 MiB |         1 → 3 | `getRestTypeAtPosition`                            | `./node_modules/typescript/lib/typescript.js:78878:33 → 80173:33` |
| removed |       -1 MiB |  <0.1% → 0.0% |         1 MiB → 0 B |         2 → 0 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:76633:55`            |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`)

|  Change |        Delta |             % |             Size |       Samples | Callee                    | Location                                                          |
| ------: | -----------: | ------------: | ---------------: | ------------: | ------------------------- | ----------------------------------------------------------------- |
|   -4.1% |   -43.83 MiB | 31.3% → 30.7% | 1.05 GiB → 1 GiB | 2,130 → 2,044 | `isRelatedTo`             | `./node_modules/typescript/lib/typescript.js:66493:25 → 67753:25` |
| removed | -512.109 KiB |  <0.1% → 0.0% |    512 KiB → 0 B |         1 → 0 | `reportIncompatibleStack` | `./node_modules/typescript/lib/typescript.js:66295:37`            |

##### `forEach` (`./node_modules/typescript/lib/typescript.js:2378:17`)

| Change |       Delta |             % |                Size |       Samples | Callee               | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ------------: | -------------------- | ------------------------------------------------------------------- |
|  -2.8% | -91.861 MiB | 88.8% → 87.9% |  3.2 GiB → 3.11 GiB | 6,528 → 6,344 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30`   |
| +13.2% | +20.955 MiB |   4.3% → 5.0% |   159 MiB → 180 MiB |     306 → 348 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |
| +45.9% |  +5.984 MiB |   0.4% → 0.5% |     13 MiB → 19 MiB |       26 → 38 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:45224:21 → 46417:21`   |
| +10.8% |   +5.86 MiB |   1.5% → 1.7% | 54.2 MiB → 60.1 MiB |     108 → 120 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124350:42 → 125932:42` |
|  -5.8% |   -5.62 MiB |   2.6% → 2.5% | 97.4 MiB → 91.8 MiB |     194 → 183 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |

##### `checkVariableDeclarationList` (`./node_modules/typescript/lib/typescript.js:85407:40`)

| Change |       Delta |             % |                Size |       Samples | Callee               | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  -3.2% |  -56.75 MiB | 97.2% → 97.6% | 1.72 GiB → 1.67 GiB | 3,512 → 3,399 | `forEach`            | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
| -19.6% | -10.021 MiB |   2.8% → 2.4% | 51.2 MiB → 41.1 MiB |      102 → 82 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js:86886:30 → 88199:30` |

##### `checkExpressionCached` (`./node_modules/typescript/lib/typescript.js:82440:33`)

| Change |       Delta |             % |                Size |       Samples | Callee                  | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  -4.5% | -35.705 MiB | 44.7% → 44.3% |   790 MiB → 755 MiB | 1,576 → 1,504 | `checkExpression`       | `./node_modules/typescript/lib/typescript.js:81476:27 → 82771:27` |
|  -2.7% | -27.295 MiB | 57.4% → 58.0% | 1,016 MiB → 989 MiB | 2,024 → 1,970 | `checkExpressionWorker` | `./node_modules/typescript/lib/typescript.js:81516:33 → 82811:33` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js:124966:52`)

| Change |       Delta |      % |               Size |       Samples | Callee                     | Location                                                            |
| -----: | ----------: | -----: | -----------------: | ------------: | -------------------------- | ------------------------------------------------------------------- |
|  -1.4% | -61.741 MiB | 100.0% | 4.16 GiB → 4.1 GiB | 8,480 → 8,357 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js:123365:36 → 124947:36` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js:124947:36`)

| Change |       Delta |      % |               Size |       Samples | Callee        | Location                                                            |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  -1.4% | -61.736 MiB | 100.0% | 4.16 GiB → 4.1 GiB | 8,482 → 8,359 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js:125252:34`)

| Change |       Delta |      % |               Size |       Samples | Callee                                     | Location                                                            |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  -1.4% | -61.241 MiB | 100.0% | 4.16 GiB → 4.1 GiB | 8,478 → 8,356 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js:123384:52 → 124966:52` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |       Delta |     % |                Size |       Samples | Callee                             | Location                                                            |
| -----: | ----------: | ----: | ------------------: | ------------: | ---------------------------------- | ------------------------------------------------------------------- |
|  -1.4% | -56.181 MiB | 96.5% | 4.01 GiB → 3.96 GiB | 8,182 → 8,070 | `getDiagnostics2`                  | `./node_modules/typescript/lib/typescript.js:87322:27 → 88635:27`   |
|  -3.4% |  -5.055 MiB |  3.5% |   150 MiB → 145 MiB |     300 → 290 | `getTypeChecker`                   | `./node_modules/typescript/lib/typescript.js:123266:26 → 124848:26` |
|    ~0% |       -64 B | <0.1% |               1 MiB |             2 | `getMergedBindAndCheckDiagnostics` | `./node_modules/typescript/lib/typescript.js:123405:44 → 124987:44` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js:124895:32`)

| Change |       Delta |      % |                Size |       Samples | Callee    | Location                                                        |
| -----: | ----------: | -----: | ------------------: | ------------: | --------- | --------------------------------------------------------------- |
|  -1.4% | -61.218 MiB | 100.0% | 4.15 GiB → 4.09 GiB | 8,464 → 8,342 | `flatMap` | `./node_modules/typescript/lib/typescript.js:2612:17 → 2625:17` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |       Delta |      % |                Size |       Samples | Callee                          | Location                                                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------------------- | ------------------------------------------------------------------- |
|  -1.4% | -60.723 MiB | 100.0% | 4.15 GiB → 4.09 GiB | 8,470 → 8,349 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123375:41 → 124957:41` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124963:45`)

| Change |       Delta |      % |               Size |       Samples | Callee                   | Location                                                            |
| -----: | ----------: | -----: | -----------------: | ------------: | ------------------------ | ------------------------------------------------------------------- |
|  -1.4% | -60.723 MiB | 100.0% | 4.16 GiB → 4.1 GiB | 8,474 → 8,353 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js:123670:34 → 125252:34` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js:2625:17`)

| Change |      Delta |      % |                Size |       Samples | Callee        | Location                                                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------- | ------------------------------------------------------------------- |
|  -1.4% | -60.72 MiB | 100.0% | 4.15 GiB → 4.09 GiB | 8,465 → 8,344 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js:124909:34`)

| Change |       Delta |      % |                Size |       Samples | Callee                 | Location                                                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------- | ------------------------------------------------------------------- |
|  -1.4% | -60.713 MiB | 100.0% | 4.15 GiB → 4.09 GiB | 8,461 → 8,340 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js:123313:32 → 124895:32` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js:124957:41`)

|  Change |        Delta |            % |               Size |       Samples | Callee                              | Location                                                            |
| ------: | -----------: | -----------: | -----------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------- |
|   -1.4% |  -59.722 MiB |       100.0% | 4.16 GiB → 4.1 GiB | 8,472 → 8,353 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js:123381:45 → 124963:45` |
| removed | -512.062 KiB | <0.1% → 0.0% |      512 KiB → 0 B |         1 → 0 | `getProgramDiagnostics`             | `./node_modules/typescript/lib/typescript.js:123337:33`             |

##### `getWidenedTypeForVariableLikeDeclaration` (`./node_modules/typescript/lib/typescript.js:59264:52`)

|  Change |       Delta |             % |                Size |       Samples | Callee                                | Location                                                          |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------------- | ----------------------------------------------------------------- |
|   -3.9% | -61.623 MiB | 99.9% → 99.8% | 1.55 GiB → 1.49 GiB | 3,165 → 3,042 | `getTypeForVariableLikeDeclaration`   | `./node_modules/typescript/lib/typescript.js:57490:45 → 58745:45` |
| +100.3% |  +1.504 MiB |   0.1% → 0.2% |     1.5 MiB → 3 MiB |         3 → 6 | `widenTypeForVariableLikeDeclaration` | `./node_modules/typescript/lib/typescript.js:58043:47 → 59298:47` |

##### `isTypeAssignableTo` (`./node_modules/typescript/lib/typescript.js:66481:30`)

| Change |       Delta |             % |                Size |   Samples | Callee               | Location                                                          |
| -----: | ----------: | ------------: | ------------------: | --------: | -------------------- | ----------------------------------------------------------------- |
| -23.3% | -67.592 MiB | 78.3% → 71.4% |   290 MiB → 222 MiB | 578 → 443 | `checkTypeRelatedTo` | `./node_modules/typescript/lib/typescript.js:66185:30 → 67445:30` |
| +12.0% |  +9.471 MiB | 21.4% → 28.5% | 79.2 MiB → 88.6 MiB | 158 → 177 | `isTypeRelatedTo`    | `./node_modules/typescript/lib/typescript.js:66101:27 → 67361:27` |
| -80.0% |      -2 MiB |   0.7% → 0.2% |   2.5 MiB → 512 KiB |     5 → 1 | `getRelationKey`     | `./node_modules/typescript/lib/typescript.js:68729:26 → 69989:26` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`)

|  Change |        Delta |             % |                Size |       Samples | Callee                       | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------- | ----------------------------------------------------------------- |
|   -4.6% |  -67.147 MiB | 35.5% → 34.4% | 1.43 GiB → 1.36 GiB | 2,915 → 2,780 | `forEach`                    | `./node_modules/typescript/lib/typescript.js:2365:17 → 2378:17`   |
|   +0.3% |   +8.407 MiB | 64.3% → 65.5% |  2.59 GiB → 2.6 GiB | 5,273 → 5,291 | `checkDeferredNodes`         | `./node_modules/typescript/lib/typescript.js:87179:30 → 88492:30` |
|  +22.2% |       +1 MiB |          0.1% |   4.5 MiB → 5.5 MiB |        9 → 11 | `addLazyDiagnostic`          | `./node_modules/typescript/lib/typescript.js:87339:25 → 88652:25` |
| +110.8% | +567.437 KiB |         <0.1% |  512 KiB → 1.05 MiB |         1 → 2 | `checkExternalModuleExports` | `./node_modules/typescript/lib/typescript.js:86845:38 → 88158:38` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js:88635:27`)

| Change |       Delta |      % |                Size |       Samples | Callee                 | Location                                                          |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------------------------------------- |
|  -1.4% | -56.183 MiB | 100.0% | 4.02 GiB → 3.96 GiB | 8,186 → 8,074 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js:87343:32 → 88656:32` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js:88552:27`)

| Change |       Delta |      % |                Size |       Samples | Callee                  | Location                                                          |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------- | ----------------------------------------------------------------- |
|  -1.3% | -55.182 MiB | 100.0% | 4.02 GiB → 3.96 GiB | 8,192 → 8,082 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js:87270:33 → 88583:33` |

##### `toString` (`node:buffer:839:46`)

| Change |      Delta |      % |                Size | Samples | Callee  | Location             |
| -----: | ---------: | -----: | ------------------: | ------: | ------- | -------------------- |
| -28.0% | -5.968 MiB | 100.0% | 21.3 MiB → 15.3 MiB | 28 → 17 | `slice` | `node:buffer:640:12` |

##### `next` (`<unknown>`)

| Change |      Delta |             % |                Size | Samples | Callee                   | Location                                                          |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------ | ----------------------------------------------------------------- |
| -24.7% | -9.016 MiB | 43.7% → 35.3% | 36.5 MiB → 27.5 MiB | 73 → 55 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js:69709:35 → 70992:35` |

##### `replace` (`<unknown>`)

| Change |      Delta |             % |              Size | Samples | Callee        | Location                                                        |
| -----: | ---------: | ------------: | ----------------: | ------: | ------------- | --------------------------------------------------------------- |
| -54.6% | -3.001 MiB | 36.7% → 21.7% | 5.5 MiB → 2.5 MiB |  11 → 5 | `toLowerCase` | `./node_modules/typescript/lib/typescript.js:3492:21 → 3505:21` |

##### `(anonymous)` (`node:internal/util:477:24`)

|  Change |      Delta |             % |           Size | Samples | Callee | Location               |
| ------: | ---------: | ------------: | -------------: | ------: | ------ | ---------------------- |
| removed | -1.468 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   1 → 0 | `post` | `node:inspector:118:7` |

##### `Promise` (`<unknown>`)

|  Change |      Delta |             % |           Size | Samples | Callee        | Location                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | --------------------------- |
| removed | -1.468 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   1 → 0 | `(anonymous)` | `node:internal/util:477:24` |

##### `fn` (`node:internal/util:476:14`)

|  Change |      Delta |             % |           Size | Samples | Callee    | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | --------- | ----------- |
| removed | -1.468 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   1 → 0 | `Promise` | `<unknown>` |

##### `(anonymous)` (`node:crypto:1:1`)

|  Change |        Delta |            % |          Size | Samples | Callee            | Location                               |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------- | -------------------------------------- |
| removed | -512.078 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `internalBinding` | `node:internal/bootstrap/realm:185:45` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|  Change |  Delta |             % |        Size | Samples | Callee        | Location          |
| ------: | -----: | ------------: | ----------: | ------: | ------------- | ----------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `(anonymous)` | `node:crypto:1:1` |

##### `compileForPublicLoader` (`node:internal/bootstrap/realm:332:25`)

|  Change |  Delta |             % |        Size | Samples | Callee                     | Location                               |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------- | -------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `loadBuiltinModule` (`node:internal/modules/helpers:113:27`)

|  Change |  Delta |             % |        Size | Samples | Callee                   | Location                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------ | -------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `compileForPublicLoader` | `node:internal/bootstrap/realm:332:25` |

##### `loadBuiltinWithHooks` (`node:internal/modules/cjs/loader:1159:30`)

|  Change |  Delta |             % |        Size | Samples | Callee              | Location                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------------- | -------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `loadBuiltinModule` | `node:internal/modules/helpers:113:27` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:88583:33`) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./heapprofile-run.mjs:1:1`) ← `(anonymous)`

| Change |        Delta |           % |           Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | -----------: | ----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +139.095 MiB | 0.0% → 2.9% |  0 B → 139 MiB | 0 → 277 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |  +54.235 MiB | 0.0% → 1.1% | 0 B → 54.2 MiB | 0 → 108 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)       |
|    new |   +48.21 MiB | 0.0% → 1.0% | 0 B → 48.2 MiB |  0 → 96 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    new |  +46.706 MiB | 0.0% → 1.0% | 0 B → 46.7 MiB |  0 → 93 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    new |  +36.159 MiB | 0.0% → 0.8% | 0 B → 36.2 MiB |  0 → 72 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                  |
|    new |  +36.137 MiB | 0.0% → 0.7% | 0 B → 36.1 MiB |  0 → 72 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    new |  +29.119 MiB | 0.0% → 0.6% | 0 B → 29.1 MiB |  0 → 58 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    new |  +28.629 MiB | 0.0% → 0.6% | 0 B → 28.6 MiB |  0 → 57 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|    new |  +24.609 MiB | 0.0% → 0.5% | 0 B → 24.6 MiB |  0 → 49 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|    new |  +23.604 MiB | 0.0% → 0.5% | 0 B → 23.6 MiB |  0 → 47 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                        |
|    new |  +22.595 MiB | 0.0% → 0.5% | 0 B → 22.6 MiB |  0 → 45 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |  +22.097 MiB | 0.0% → 0.5% | 0 B → 22.1 MiB |  0 → 44 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    new |   +21.59 MiB | 0.0% → 0.4% | 0 B → 21.6 MiB |  0 → 43 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                               |
|    new |   +18.58 MiB | 0.0% → 0.4% | 0 B → 18.6 MiB |  0 → 37 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    new |  +17.068 MiB | 0.0% → 0.4% | 0 B → 17.1 MiB |  0 → 34 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkAwaitExpression` (81357:32) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                |
|    new |  +16.074 MiB | 0.0% → 0.3% | 0 B → 16.1 MiB |  0 → 32 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkAwaitExpression` (81357:32) ← `checkExpressionWorker` (82811:33) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    new |  +15.065 MiB | 0.0% → 0.3% | 0 B → 15.1 MiB |  0 → 30 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkAwaitExpression` (81357:32) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                   |
|    new |  +14.568 MiB | 0.0% → 0.3% | 0 B → 14.6 MiB |  0 → 29 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkAwaitExpression` (81357:32) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`) |
|    new |  +13.547 MiB | 0.0% → 0.3% | 0 B → 13.5 MiB |  0 → 27 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |  +13.061 MiB | 0.0% → 0.3% | 0 B → 13.1 MiB |  0 → 26 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:88492:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

Common call stack: `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js:87270:33`) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`./tsc-workload.mjs:3:33`) ← `(anonymous)` (`./heapprofile-run.mjs:1:1`) ← `(anonymous)`

|  Change |        Delta |           % |           Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | -----------: | ----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -126.034 MiB | 2.6% → 0.0% |  126 MiB → 0 B | 251 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -65.781 MiB | 1.4% → 0.0% | 65.8 MiB → 0 B | 131 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`) |
| removed |  -49.707 MiB | 1.0% → 0.0% | 49.7 MiB → 0 B |  99 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -45.179 MiB | 0.9% → 0.0% | 45.2 MiB → 0 B |  90 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -43.183 MiB | 0.9% → 0.0% | 43.2 MiB → 0 B |  86 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                      |
| removed |  -33.647 MiB | 0.7% → 0.0% | 33.6 MiB → 0 B |  67 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -25.103 MiB | 0.5% → 0.0% | 25.1 MiB → 0 B |  50 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -24.105 MiB | 0.5% → 0.0% | 24.1 MiB → 0 B |  48 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -22.595 MiB | 0.5% → 0.0% | 22.6 MiB → 0 B |  45 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |  -20.583 MiB | 0.4% → 0.0% | 20.6 MiB → 0 B |  41 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -19.076 MiB | 0.4% → 0.0% | 19.1 MiB → 0 B |  38 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                         |
| removed |  -18.077 MiB | 0.4% → 0.0% | 18.1 MiB → 0 B |  36 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAwaitExpression` (80062:32) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                    |
| removed |   -17.07 MiB | 0.4% → 0.0% | 17.1 MiB → 0 B |  34 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -16.572 MiB | 0.3% → 0.0% | 16.6 MiB → 0 B |  33 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -13.559 MiB | 0.3% → 0.0% | 13.6 MiB → 0 B |  27 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAwaitExpression` (80062:32) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                 |
| removed |  -12.052 MiB | 0.2% → 0.0% | 12.1 MiB → 0 B |  24 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -11.552 MiB | 0.2% → 0.0% | 11.6 MiB → 0 B |  23 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `inferFromSignature` (70456:32) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |   -11.55 MiB | 0.2% → 0.0% | 11.6 MiB → 0 B |  23 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |   -11.55 MiB | 0.2% → 0.0% | 11.6 MiB → 0 B |  23 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`./node_modules/typescript/lib/typescript.js:87179:30`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |  -11.548 MiB | 0.2% → 0.0% | 11.5 MiB → 0 B |  23 → 0 | `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
