# Heap profile diff

Allocated 4.82 GiB → 4.84 GiB (+27.796 MiB, +0.6%) over 9,794 samples → 9,843 samples (516 KiB per sample).

| Category         |  Change |        Delta |             % |               Size |       Samples |
| ---------------- | ------: | -----------: | ------------: | -----------------: | ------------: |
| Third-party      |   -0.4% |  -19.153 MiB | 91.4% → 90.5% | 4.4 GiB → 4.38 GiB | 8,992 → 8,964 |
| Standard library |  +11.2% |   +47.45 MiB |   8.6% → 9.5% |  423 MiB → 471 MiB |     801 → 879 |
| Native           | removed | -512.031 KiB |  <0.1% → 0.0% |      512 KiB → 0 B |         1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |        Delta |            % |           Size |   Samples | Function                          | Location                                                                                  |
| -----: | -----------: | -----------: | -------------: | --------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |   +2.183 GiB | 0.0% → 45.1% | 0 B → 2.18 GiB | 0 → 4,460 | `checkTypeRelatedTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|    new | +324.589 MiB |  0.0% → 6.5% |  0 B → 325 MiB |   0 → 649 | `isRelatedTo`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|    new | +195.025 MiB |  0.0% → 3.9% |  0 B → 195 MiB |   0 → 390 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|    new | +146.269 MiB |  0.0% → 2.9% |  0 B → 146 MiB |   0 → 292 | `getFlowTypeOfReference`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`  |
|    new | +105.007 MiB |  0.0% → 2.1% |  0 B → 105 MiB |   0 → 210 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|    new |   +95.01 MiB |  0.0% → 1.9% |   0 B → 95 MiB |   0 → 190 | `concat`                          | `<unknown>`                                                                               |
|    new |  +53.004 MiB |  0.0% → 1.1% |   0 B → 53 MiB |   0 → 106 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|    new |  +47.644 MiB |  0.0% → 1.0% | 0 B → 47.6 MiB |    0 → 95 | `parseJSDocCommentWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45`  |
|    new |  +44.063 MiB |  0.0% → 0.9% | 0 B → 44.1 MiB |    0 → 88 | `inferFromObjectTypes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|    new |  +33.502 MiB |  0.0% → 0.7% | 0 B → 33.5 MiB |    0 → 67 | `createNodeArray`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|    new |  +28.503 MiB |  0.0% → 0.6% | 0 B → 28.5 MiB |    0 → 57 | `instantiateAnonymousType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42`  |
|    new |  +27.001 MiB |  0.0% → 0.5% |   0 B → 27 MiB |    0 → 54 | `declareSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`  |
|    new |      +27 MiB |  0.0% → 0.5% |   0 B → 27 MiB |    0 → 54 | `createBaseNode`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
|    new |  +26.504 MiB |  0.0% → 0.5% | 0 B → 26.5 MiB |    0 → 53 | `createPrinter`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:108110:27` |
|    new |  +25.503 MiB |  0.0% → 0.5% | 0 B → 25.5 MiB |    0 → 51 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|    new |  +24.021 MiB |  0.0% → 0.5% |   0 B → 24 MiB |    0 → 48 | `__generator`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41:58`     |
|    new |  +23.003 MiB |  0.0% → 0.5% |   0 B → 23 MiB |    0 → 46 | `instantiateSignature`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38`  |
|    new |  +23.003 MiB |  0.0% → 0.5% |   0 B → 23 MiB |    0 → 46 | `instantiateTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34`  |
|    new |  +22.004 MiB |  0.0% → 0.4% |   0 B → 22 MiB |    0 → 44 | `signaturesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
|    new |  +21.522 MiB |  0.0% → 0.4% | 0 B → 21.5 MiB |    0 → 43 | `propertiesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41`  |

##### Third-party

| Change |        Delta |            % |           Size |   Samples | Function                          | Location                                                                                  |
| -----: | -----------: | -----------: | -------------: | --------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |   +2.183 GiB | 0.0% → 45.1% | 0 B → 2.18 GiB | 0 → 4,460 | `checkTypeRelatedTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|    new | +324.589 MiB |  0.0% → 6.5% |  0 B → 325 MiB |   0 → 649 | `isRelatedTo`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|    new | +195.025 MiB |  0.0% → 3.9% |  0 B → 195 MiB |   0 → 390 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|    new | +146.269 MiB |  0.0% → 2.9% |  0 B → 146 MiB |   0 → 292 | `getFlowTypeOfReference`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`  |
|    new | +105.007 MiB |  0.0% → 2.1% |  0 B → 105 MiB |   0 → 210 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|    new |  +53.004 MiB |  0.0% → 1.1% |   0 B → 53 MiB |   0 → 106 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|    new |  +47.644 MiB |  0.0% → 1.0% | 0 B → 47.6 MiB |    0 → 95 | `parseJSDocCommentWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45`  |
|    new |  +44.063 MiB |  0.0% → 0.9% | 0 B → 44.1 MiB |    0 → 88 | `inferFromObjectTypes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|    new |  +33.502 MiB |  0.0% → 0.7% | 0 B → 33.5 MiB |    0 → 67 | `createNodeArray`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|    new |  +28.503 MiB |  0.0% → 0.6% | 0 B → 28.5 MiB |    0 → 57 | `instantiateAnonymousType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42`  |
|    new |  +27.001 MiB |  0.0% → 0.5% |   0 B → 27 MiB |    0 → 54 | `declareSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`  |
|    new |      +27 MiB |  0.0% → 0.5% |   0 B → 27 MiB |    0 → 54 | `createBaseNode`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
|    new |  +26.504 MiB |  0.0% → 0.5% | 0 B → 26.5 MiB |    0 → 53 | `createPrinter`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:108110:27` |
|    new |  +25.503 MiB |  0.0% → 0.5% | 0 B → 25.5 MiB |    0 → 51 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|    new |  +24.021 MiB |  0.0% → 0.5% |   0 B → 24 MiB |    0 → 48 | `__generator`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41:58`     |
|    new |  +23.003 MiB |  0.0% → 0.5% |   0 B → 23 MiB |    0 → 46 | `instantiateSignature`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38`  |
|    new |  +23.003 MiB |  0.0% → 0.5% |   0 B → 23 MiB |    0 → 46 | `instantiateTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34`  |
|    new |  +22.004 MiB |  0.0% → 0.4% |   0 B → 22 MiB |    0 → 44 | `signaturesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
|    new |  +21.522 MiB |  0.0% → 0.4% | 0 B → 21.5 MiB |    0 → 43 | `propertiesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41`  |
|    new |  +21.509 MiB |  0.0% → 0.4% | 0 B → 21.5 MiB |    0 → 43 | `(anonymous)`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74`  |

##### Standard library

|  Change |        Delta |            % |                Size |   Samples | Function                   | Location                                   |
| ------: | -----------: | -----------: | ------------------: | --------: | -------------------------- | ------------------------------------------ |
|     new |   +95.01 MiB |  0.0% → 1.9% |        0 B → 95 MiB |   0 → 190 | `concat`                   | `<unknown>`                                |
|  +22.2% |  +16.008 MiB |  1.5% → 1.8% |     72 MiB → 88 MiB | 144 → 176 | `Map`                      | `<unknown>`                                |
| +123.7% |  +10.781 MiB |  0.2% → 0.4% | 8.72 MiB → 19.5 MiB |     1 → 2 | `readFileSync`             | `node:fs:433:22`                           |
| +118.2% |     +6.5 MiB |  0.1% → 0.2% |    5.5 MiB → 12 MiB |   11 → 24 | `slice`                    | `<unknown>`                                |
|     new |   +4.004 MiB |  0.0% → 0.1% |         0 B → 4 MiB |     0 → 8 | `assign`                   | `<unknown>`                                |
| +700.1% |     +3.5 MiB | <0.1% → 0.1% |     512 KiB → 4 MiB |     1 → 8 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`            |
|   +7.7% |    +2.49 MiB |         0.7% |   32.5 MiB → 35 MiB |   65 → 70 | `push`                     | `<unknown>`                                |
|   +1.3% |   +1.794 MiB |         2.8% |   136 MiB → 138 MiB | 259 → 260 | `set`                      | `<unknown>`                                |
|  +17.7% |   +1.502 MiB |         0.2% |    8.5 MiB → 10 MiB |   17 → 20 | `join`                     | `<unknown>`                                |
|     new |       +1 MiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `startsWith`               | `<unknown>`                                |
|     new |       +1 MiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `substring`                | `<unknown>`                                |
|     new | +512.109 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `indexOf`                  | `<unknown>`                                |
|     new | +512.062 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `Uint8Array`               | `<unknown>`                                |
|     new | +512.031 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `toString`                 | `node:buffer:839:46`                       |
| +100.0% | +512.031 KiB |        <0.1% |     512 KiB → 1 MiB |     1 → 2 | `map`                      | `<unknown>`                                |
|     new | +512.031 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
|     new | +512.015 KiB | 0.0% → <0.1% |       0 B → 512 KiB |     0 → 1 | `getDirent`                | `node:internal/fs/utils:291:19`            |
|   +0.8% |  +19.523 KiB |         0.1% |  2.5 MiB → 2.52 MiB |         5 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
|     ~0% |       +112 B |         0.4% |            19.5 MiB |        39 | `splice`                   | `<unknown>`                                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |           Size |   Samples | Function                        | Location                                             |
| ------: | -----------: | -----------: | -------------: | --------: | ------------------------------- | ---------------------------------------------------- |
| removed |   -2.467 GiB | 51.2% → 0.0% | 2.47 GiB → 0 B | 5,033 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
| removed | -159.288 MiB |  3.2% → 0.0% |  159 MiB → 0 B |   318 → 0 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
| removed | -150.023 MiB |  3.0% → 0.0% |  150 MiB → 0 B |   300 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| removed | -130.015 MiB |  2.6% → 0.0% |  130 MiB → 0 B |   260 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
| removed |  -99.028 MiB |  2.0% → 0.0% |   99 MiB → 0 B |   198 → 0 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
| removed |  -90.078 MiB |  1.8% → 0.0% | 90.1 MiB → 0 B |   180 → 0 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
| removed |  -87.017 MiB |  1.8% → 0.0% |   87 MiB → 0 B |   174 → 0 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  -87.0% |  -60.003 MiB |  1.4% → 0.2% | 69 MiB → 9 MiB |  138 → 18 | `next`                          | `<unknown>`                                          |
| removed |  -37.502 MiB |  0.8% → 0.0% | 37.5 MiB → 0 B |    75 → 0 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
| removed |  -35.504 MiB |  0.7% → 0.0% | 35.5 MiB → 0 B |    71 → 0 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
| removed |  -33.002 MiB |  0.7% → 0.0% |   33 MiB → 0 B |    66 → 0 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js:30064:33` |
| removed |  -30.506 MiB |  0.6% → 0.0% | 30.5 MiB → 0 B |    61 → 0 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
| removed |  -27.502 MiB |  0.6% → 0.0% | 27.5 MiB → 0 B |    55 → 0 | `getUnmatchedProperty`          | `node_modules/typescript/lib/typescript.js:67049:34` |
| removed |  -23.504 MiB |  0.5% → 0.0% | 23.5 MiB → 0 B |    47 → 0 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:29227:37` |
| removed |      -22 MiB |  0.4% → 0.0% |   22 MiB → 0 B |    44 → 0 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
| removed |   -21.01 MiB |  0.4% → 0.0% |   21 MiB → 0 B |    42 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
| removed |  -21.004 MiB |  0.4% → 0.0% |   21 MiB → 0 B |    42 → 0 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30` |
| removed |   -20.52 MiB |  0.4% → 0.0% | 20.5 MiB → 0 B |    41 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
| removed |  -20.501 MiB |  0.4% → 0.0% | 20.5 MiB → 0 B |    41 → 0 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
| removed |  -19.012 MiB |  0.4% → 0.0% |   19 MiB → 0 B |    38 → 0 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |

##### Third-party

|  Change |        Delta |            % |           Size |   Samples | Function                        | Location                                             |
| ------: | -----------: | -----------: | -------------: | --------: | ------------------------------- | ---------------------------------------------------- |
| removed |   -2.467 GiB | 51.2% → 0.0% | 2.47 GiB → 0 B | 5,033 → 0 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
| removed | -159.288 MiB |  3.2% → 0.0% |  159 MiB → 0 B |   318 → 0 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
| removed | -150.023 MiB |  3.0% → 0.0% |  150 MiB → 0 B |   300 → 0 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| removed | -130.015 MiB |  2.6% → 0.0% |  130 MiB → 0 B |   260 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
| removed |  -99.028 MiB |  2.0% → 0.0% |   99 MiB → 0 B |   198 → 0 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
| removed |  -90.078 MiB |  1.8% → 0.0% | 90.1 MiB → 0 B |   180 → 0 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
| removed |  -87.017 MiB |  1.8% → 0.0% |   87 MiB → 0 B |   174 → 0 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
| removed |  -37.502 MiB |  0.8% → 0.0% | 37.5 MiB → 0 B |    75 → 0 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
| removed |  -35.504 MiB |  0.7% → 0.0% | 35.5 MiB → 0 B |    71 → 0 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
| removed |  -33.002 MiB |  0.7% → 0.0% |   33 MiB → 0 B |    66 → 0 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js:30064:33` |
| removed |  -30.506 MiB |  0.6% → 0.0% | 30.5 MiB → 0 B |    61 → 0 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
| removed |  -27.502 MiB |  0.6% → 0.0% | 27.5 MiB → 0 B |    55 → 0 | `getUnmatchedProperty`          | `node_modules/typescript/lib/typescript.js:67049:34` |
| removed |  -23.504 MiB |  0.5% → 0.0% | 23.5 MiB → 0 B |    47 → 0 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:29227:37` |
| removed |      -22 MiB |  0.4% → 0.0% |   22 MiB → 0 B |    44 → 0 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
| removed |   -21.01 MiB |  0.4% → 0.0% |   21 MiB → 0 B |    42 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
| removed |  -21.004 MiB |  0.4% → 0.0% |   21 MiB → 0 B |    42 → 0 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30` |
| removed |   -20.52 MiB |  0.4% → 0.0% | 20.5 MiB → 0 B |    41 → 0 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
| removed |  -20.501 MiB |  0.4% → 0.0% | 20.5 MiB → 0 B |    41 → 0 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
| removed |  -19.012 MiB |  0.4% → 0.0% |   19 MiB → 0 B |    38 → 0 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
| removed |  -19.003 MiB |  0.4% → 0.0% |   19 MiB → 0 B |    38 → 0 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |

##### Standard library

|  Change |        Delta |            % |                Size |  Samples | Function         | Location                                  |
| ------: | -----------: | -----------: | ------------------: | -------: | ---------------- | ----------------------------------------- |
|  -87.0% |  -60.003 MiB |  1.4% → 0.2% |      69 MiB → 9 MiB | 138 → 18 | `next`           | `<unknown>`                               |
|  -92.9% |      -13 MiB | 0.3% → <0.1% |      14 MiB → 1 MiB |   28 → 2 | `values`         | `<unknown>`                               |
| removed |   -5.001 MiB |  0.1% → 0.0% |         5 MiB → 0 B |   10 → 0 | `delete`         | `<unknown>`                               |
|  -90.9% |       -5 MiB | 0.1% → <0.1% |   5.5 MiB → 512 KiB |   11 → 1 | `Set`            | `<unknown>`                               |
|  -81.6% |   -4.506 MiB | 0.1% → <0.1% | 5.52 MiB → 1.02 MiB |   11 → 2 | `add`            | `<unknown>`                               |
|  -14.6% |   -2.431 MiB |         0.3% | 16.6 MiB → 14.2 MiB |  20 → 21 | `slice`          | `node:buffer:640:12`                      |
| removed |   -2.004 MiB | <0.1% → 0.0% |         2 MiB → 0 B |    4 → 0 | `get`            | `<unknown>`                               |
| removed |       -2 MiB | <0.1% → 0.0% |         2 MiB → 0 B |    4 → 0 | `trimEnd`        | `<unknown>`                               |
| removed |       -1 MiB | <0.1% → 0.0% |         1 MiB → 0 B |    2 → 0 | `exec`           | `<unknown>`                               |
|  -33.3% |       -1 MiB | 0.1% → <0.1% |       3 MiB → 2 MiB |    6 → 4 | `split`          | `<unknown>`                               |
| removed | -516.375 KiB | <0.1% → 0.0% |       516 KiB → 0 B |    1 → 0 | `test`           | `<unknown>`                               |
| removed | -512.187 KiB | <0.1% → 0.0% |       512 KiB → 0 B |    1 → 0 | `tryExtensions`  | `node:internal/modules/cjs/loader:558:23` |
| removed | -512.031 KiB | <0.1% → 0.0% |       512 KiB → 0 B |    1 → 0 | `wrappedFn`      | `node:internal/errors:535:21`             |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |    1 → 0 | `Stats`          | `node:internal/fs/utils:524:15`           |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |    1 → 0 | `msFromTimeSpec` | `node:internal/fs/utils:428:24`           |
| removed | -512.015 KiB | <0.1% → 0.0% |       512 KiB → 0 B |    1 → 0 | `toLowerCase`    | `<unknown>`                               |
|  -14.0% | -208.968 KiB |        <0.1% | 1.46 MiB → 1.25 MiB |        1 | `post`           | `node:inspector:118:7`                    |
|   -0.5% |   -2.703 KiB |        <0.1% |   515 KiB → 512 KiB |        1 | `toString`       | `<unknown>`                               |
|     ~0% |       -360 B |         0.1% |               7 MiB |       14 | `replace`        | `<unknown>`                               |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

| Change |      Delta |            % |           Size |   Samples | Function                                   | Location                                                                                  |
| -----: | ---------: | -----------: | -------------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new | +4.241 GiB | 0.0% → 87.5% | 0 B → 4.24 GiB | 0 → 8,655 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +4.239 GiB | 0.0% → 87.5% | 0 B → 4.24 GiB | 0 → 8,652 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|    new | +4.235 GiB | 0.0% → 87.4% | 0 B → 4.24 GiB | 0 → 8,643 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
|    new | +4.233 GiB | 0.0% → 87.4% | 0 B → 4.23 GiB | 0 → 8,639 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|    new |  +4.23 GiB | 0.0% → 87.3% | 0 B → 4.23 GiB | 0 → 8,634 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|    new | +4.229 GiB | 0.0% → 87.3% | 0 B → 4.23 GiB | 0 → 8,631 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|    new | +4.228 GiB | 0.0% → 87.3% | 0 B → 4.23 GiB | 0 → 8,628 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new | +4.227 GiB | 0.0% → 87.3% | 0 B → 4.23 GiB | 0 → 8,626 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|    new | +4.224 GiB | 0.0% → 87.2% | 0 B → 4.22 GiB | 0 → 8,621 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|    new | +4.223 GiB | 0.0% → 87.2% | 0 B → 4.22 GiB | 0 → 8,618 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|    new | +4.112 GiB | 0.0% → 84.9% | 0 B → 4.11 GiB | 0 → 8,391 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
|    new | +4.111 GiB | 0.0% → 84.9% | 0 B → 4.11 GiB | 0 → 8,389 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|    new | +4.104 GiB | 0.0% → 84.7% |  0 B → 4.1 GiB | 0 → 8,375 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|    new | +4.095 GiB | 0.0% → 84.5% |  0 B → 4.1 GiB | 0 → 8,356 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|    new | +4.093 GiB | 0.0% → 84.5% | 0 B → 4.09 GiB | 0 → 8,353 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|    new |  +4.09 GiB | 0.0% → 84.4% | 0 B → 4.09 GiB | 0 → 8,346 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|    new | +3.645 GiB | 0.0% → 75.2% | 0 B → 3.65 GiB | 0 → 7,433 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|    new | +3.528 GiB | 0.0% → 72.8% | 0 B → 3.53 GiB | 0 → 7,200 | `checkTypeRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|    new | +3.516 GiB | 0.0% → 72.6% | 0 B → 3.52 GiB | 0 → 7,175 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
|    new | +3.402 GiB | 0.0% → 70.2% |  0 B → 3.4 GiB | 0 → 6,942 | `checkCallExpression`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |

##### Standard library

|  Change |       Delta |            % |                Size |   Samples | Function              | Location                                   |
| ------: | ----------: | -----------: | ------------------: | --------: | --------------------- | ------------------------------------------ |
|     new |  +95.01 MiB |  0.0% → 1.9% |        0 B → 95 MiB |   0 → 190 | `concat`              | `<unknown>`                                |
|  +19.8% | +15.511 MiB |  1.6% → 1.9% |   78.5 MiB → 94 MiB | 157 → 188 | `Map`                 | `<unknown>`                                |
| +117.0% | +10.781 MiB |  0.2% → 0.4% |   9.22 MiB → 20 MiB |     2 → 3 | `readFileSync`        | `node:fs:433:22`                           |
| +117.9% | +10.281 MiB |  0.2% → 0.4% |   8.72 MiB → 19 MiB |         1 | `defaultLoadImpl`     | `node:internal/modules/cjs/loader:1112:25` |
| +117.9% | +10.281 MiB |  0.2% → 0.4% |   8.72 MiB → 19 MiB |         1 | `loadSource`          | `node:internal/modules/cjs/loader:1797:20` |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `(anonymous)`         | `node:internal/modules/cjs/loader:1878:37` |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `(anonymous)`         | `node:internal/modules/cjs/loader:1490:33` |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `(anonymous)`         | `node:internal/modules/cjs/loader:1193:24` |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `(anonymous)`         | `node:internal/modules/cjs/loader:1519:36` |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `wrapModuleLoad`      | `node:internal/modules/cjs/loader:237:24`  |
|  +49.2% |  +9.256 MiB |  0.4% → 0.6% | 18.8 MiB → 28.1 MiB |   21 → 19 | `require`             | `node:internal/modules/helpers:146:19`     |
| +118.2% |    +6.5 MiB |  0.1% → 0.2% |    5.5 MiB → 12 MiB |   11 → 24 | `slice`               | `<unknown>`                                |
|     new |  +4.004 MiB |  0.0% → 0.1% |         0 B → 4 MiB |     0 → 8 | `assign`              | `<unknown>`                                |
| +125.0% |    +2.5 MiB | <0.1% → 0.1% |     2 MiB → 4.5 MiB |     4 → 9 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
|   +7.7% |   +2.49 MiB |         0.7% |   32.5 MiB → 35 MiB |   65 → 70 | `push`                | `<unknown>`                                |
|   +1.3% |  +1.794 MiB |         2.8% |   136 MiB → 138 MiB | 259 → 260 | `set`                 | `<unknown>`                                |
|  +17.7% |  +1.502 MiB |         0.2% |    8.5 MiB → 10 MiB |   17 → 20 | `join`                | `<unknown>`                                |
|  +60.0% |    +1.5 MiB |         0.1% |     2.5 MiB → 4 MiB |     5 → 8 | `sort`                | `<unknown>`                                |
|  +20.0% |  +1.499 MiB |         0.2% |     7.5 MiB → 9 MiB |   15 → 18 | `replace`             | `<unknown>`                                |
|     new |      +1 MiB | 0.0% → <0.1% |         0 B → 1 MiB |     0 → 2 | `startsWith`          | `<unknown>`                                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Third-party

|  Change |      Delta |            % |           Size |   Samples | Function                                   | Location                                              |
| ------: | ---------: | -----------: | -------------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -4.212 GiB | 87.4% → 0.0% | 4.21 GiB → 0 B | 8,588 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -4.211 GiB | 87.4% → 0.0% | 4.21 GiB → 0 B | 8,586 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| removed |  -4.21 GiB | 87.4% → 0.0% | 4.21 GiB → 0 B | 8,584 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| removed | -4.208 GiB | 87.4% → 0.0% | 4.21 GiB → 0 B | 8,580 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| removed | -4.207 GiB | 87.3% → 0.0% | 4.21 GiB → 0 B | 8,578 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| removed | -4.205 GiB | 87.3% → 0.0% | 4.21 GiB → 0 B | 8,575 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| removed | -4.204 GiB | 87.3% → 0.0% |  4.2 GiB → 0 B | 8,572 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -4.203 GiB | 87.3% → 0.0% |  4.2 GiB → 0 B | 8,570 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| removed | -4.203 GiB | 87.3% → 0.0% |  4.2 GiB → 0 B | 8,570 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| removed |   -4.2 GiB | 87.2% → 0.0% |  4.2 GiB → 0 B | 8,564 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -4.089 GiB | 84.9% → 0.0% | 4.09 GiB → 0 B | 8,337 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| removed | -4.088 GiB | 84.9% → 0.0% | 4.09 GiB → 0 B | 8,334 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| removed | -4.088 GiB | 84.9% → 0.0% | 4.09 GiB → 0 B | 8,334 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| removed | -4.087 GiB | 84.8% → 0.0% | 4.09 GiB → 0 B | 8,332 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| removed | -4.086 GiB | 84.8% → 0.0% | 4.09 GiB → 0 B | 8,331 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| removed | -4.082 GiB | 84.7% → 0.0% | 4.08 GiB → 0 B | 8,322 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| removed | -4.081 GiB | 84.7% → 0.0% | 4.08 GiB → 0 B | 8,320 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| removed | -3.619 GiB | 75.1% → 0.0% | 3.62 GiB → 0 B | 7,370 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| removed | -3.578 GiB | 74.3% → 0.0% | 3.58 GiB → 0 B | 7,294 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |
| removed | -3.455 GiB | 71.7% → 0.0% | 3.46 GiB → 0 B | 7,043 → 0 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:75579:33`  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                 | Location                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------ | ------------------------------------------ |
|  -90.0% |  -81.063 MiB |   1.8% → 0.2% |    90.1 MiB → 9 MiB |      180 → 18 | `next`                   | `<unknown>`                                |
|  -92.9% |      -13 MiB |  0.3% → <0.1% |      14 MiB → 1 MiB |        28 → 2 | `values`                 | `<unknown>`                                |
| removed |   -5.001 MiB |   0.1% → 0.0% |         5 MiB → 0 B |        10 → 0 | `delete`                 | `<unknown>`                                |
|  -90.9% |       -5 MiB |  0.1% → <0.1% |   5.5 MiB → 512 KiB |        11 → 1 | `Set`                    | `<unknown>`                                |
|  -81.6% |   -4.506 MiB |  0.1% → <0.1% | 5.52 MiB → 1.02 MiB |        11 → 2 | `add`                    | `<unknown>`                                |
|   -0.1% |   -2.618 MiB | 55.6% → 55.3% |            2.68 GiB | 5,460 → 5,464 | `forEach`                | `<unknown>`                                |
|  -14.6% |   -2.431 MiB |          0.3% | 16.6 MiB → 14.2 MiB |       20 → 21 | `slice`                  | `node:buffer:640:12`                       |
| removed |   -2.004 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |         4 → 0 | `get`                    | `<unknown>`                                |
| removed |       -2 MiB |  <0.1% → 0.0% |         2 MiB → 0 B |         4 → 0 | `trimEnd`                | `<unknown>`                                |
|  -11.6% |   -1.931 MiB |          0.3% | 16.6 MiB → 14.7 MiB |       20 → 22 | `toString`               | `node:buffer:839:46`                       |
|  -10.1% |   -1.024 MiB |          0.2% | 10.1 MiB → 9.09 MiB |       20 → 18 | `(anonymous)`            | `node:internal/modules/cjs/loader:1731:37` |
| removed |       -1 MiB |  <0.1% → 0.0% |         1 MiB → 0 B |         2 → 0 | `exec`                   | `<unknown>`                                |
|  -33.3% |       -1 MiB |  0.1% → <0.1% |       3 MiB → 2 MiB |         6 → 4 | `split`                  | `<unknown>`                                |
| removed | -516.375 KiB |  <0.1% → 0.0% |       516 KiB → 0 B |         1 → 0 | `test`                   | `<unknown>`                                |
|  -33.4% | -513.593 KiB |         <0.1% |     1.5 MiB → 1 MiB |         3 → 2 | `some`                   | `<unknown>`                                |
| removed | -512.187 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `(anonymous)`            | `node:internal/modules/cjs/loader:683:28`  |
| removed | -512.187 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `(anonymous)`            | `node:internal/modules/cjs/loader:1346:35` |
| removed | -512.187 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `tryExtensions`          | `node:internal/modules/cjs/loader:558:23`  |
| removed | -512.187 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `defaultResolveImpl`     | `node:internal/modules/cjs/loader:1026:30` |
| removed | -512.187 KiB |  <0.1% → 0.0% |       512 KiB → 0 B |         1 → 0 | `resolveForCJSWithHooks` | `node:internal/modules/cjs/loader:1021:32` |
