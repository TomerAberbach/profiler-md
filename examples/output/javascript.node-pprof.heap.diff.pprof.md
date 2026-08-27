# Heap profile diff

Allocated 490 MiB → 272 MiB (-218.514 MiB, -44.6%) over 4,877,490 objects → 2,718,381 objects (105 B per object).

| Category         | Change |        Delta |             % |                Size |               Objects |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------------: |
| Third-party      | -49.1% | -187.559 MiB | 77.9% → 71.5% |   382 MiB → 195 MiB | 4,365,721 → 2,385,221 |
| Standard library | -29.1% |  -30.936 MiB | 21.7% → 27.7% |  106 MiB → 75.5 MiB |     511,768 → 333,159 |
| Native           |  -1.0% |   -19.45 KiB |   0.4% → 0.7% | 1.95 MiB → 1.93 MiB |                     1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |           % |                Size |     Objects | Function                           | Location                                                                                 |
| ------: | ----------: | ----------: | ------------------: | ----------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
|     new | +11.501 MiB | 0.0% → 4.2% |      0 B → 11.5 MiB | 0 → 125,626 | `createIdentifier`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| +117.9% | +10.281 MiB | 1.8% → 7.0% |   8.72 MiB → 19 MiB |           1 | `readFileSync`                     | `node:fs`                                                                                |
|     new |  +9.501 MiB | 0.0% → 3.5% |       0 B → 9.5 MiB |  0 → 53,473 | `instantiateSignature`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |      +9 MiB | 0.0% → 3.3% |         0 B → 9 MiB | 0 → 147,471 | `createSymbol`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |      +9 MiB | 0.0% → 3.3% |         0 B → 9 MiB | 0 → 166,662 | `declareSymbol`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |    +8.5 MiB | 0.0% → 3.1% |       0 B → 8.5 MiB |  0 → 61,898 | `createBaseNode`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |      +8 MiB | 0.0% → 2.9% |         0 B → 8 MiB | 0 → 209,726 | `resolveObjectTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |  +7.519 MiB | 0.0% → 2.8% |      0 B → 7.52 MiB |   0 → 4,969 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |    +7.5 MiB | 0.0% → 2.8% |       0 B → 7.5 MiB | 0 → 147,470 | `createNodeArray`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |      +5 MiB | 0.0% → 1.8% |         0 B → 5 MiB |  0 → 36,410 | `parseTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |  +4.502 MiB | 0.0% → 1.7% |       0 B → 4.5 MiB |  0 → 42,934 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|     new |    +4.5 MiB | 0.0% → 1.7% |       0 B → 4.5 MiB |  0 → 56,920 | `instantiateTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |    +4.5 MiB | 0.0% → 1.7% |       0 B → 4.5 MiB | 0 → 117,972 | `bindWorker`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| +395.7% |  +4.305 MiB | 0.2% → 2.0% | 1.09 MiB → 5.39 MiB |   302 → 133 | `slice`                            | `node:buffer`                                                                            |
|     new |      +4 MiB | 0.0% → 1.5% |         0 B → 4 MiB |  0 → 68,416 | `getObjectTypeInstantiation`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |      +4 MiB | 0.0% → 1.5% |         0 B → 4 MiB |  0 → 29,128 | `createBaseBindingLikeDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |  +3.817 MiB | 0.0% → 1.4% |      0 B → 3.82 MiB |       0 → 1 | `getEffectsSignature`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |  +3.503 MiB | 0.0% → 1.3% |       0 B → 3.5 MiB |  0 → 93,749 | `concat`                           | `<unknown>`                                                                              |
|     new |  +3.501 MiB | 0.0% → 1.3% |       0 B → 3.5 MiB |  0 → 25,423 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|     new |    +3.5 MiB | 0.0% → 1.3% |       0 B → 3.5 MiB |  0 → 35,294 | `createBaseTokenNode`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### Third-party

| Change |       Delta |           % |           Size |     Objects | Function                           | Location                                                                                 |
| -----: | ----------: | ----------: | -------------: | ----------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +11.501 MiB | 0.0% → 4.2% | 0 B → 11.5 MiB | 0 → 125,626 | `createIdentifier`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |  +9.501 MiB | 0.0% → 3.5% |  0 B → 9.5 MiB |  0 → 53,473 | `instantiateSignature`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +9 MiB | 0.0% → 3.3% |    0 B → 9 MiB | 0 → 147,471 | `createSymbol`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +9 MiB | 0.0% → 3.3% |    0 B → 9 MiB | 0 → 166,662 | `declareSymbol`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |    +8.5 MiB | 0.0% → 3.1% |  0 B → 8.5 MiB |  0 → 61,898 | `createBaseNode`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +8 MiB | 0.0% → 2.9% |    0 B → 8 MiB | 0 → 209,726 | `resolveObjectTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |  +7.519 MiB | 0.0% → 2.8% | 0 B → 7.52 MiB |   0 → 4,969 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |    +7.5 MiB | 0.0% → 2.8% |  0 B → 7.5 MiB | 0 → 147,470 | `createNodeArray`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +5 MiB | 0.0% → 1.8% |    0 B → 5 MiB |  0 → 36,410 | `parseTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |  +4.502 MiB | 0.0% → 1.7% |  0 B → 4.5 MiB |  0 → 42,934 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|    new |    +4.5 MiB | 0.0% → 1.7% |  0 B → 4.5 MiB |  0 → 56,920 | `instantiateTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |    +4.5 MiB | 0.0% → 1.7% |  0 B → 4.5 MiB | 0 → 117,972 | `bindWorker`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +4 MiB | 0.0% → 1.5% |    0 B → 4 MiB |  0 → 68,416 | `getObjectTypeInstantiation`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +4 MiB | 0.0% → 1.5% |    0 B → 4 MiB |  0 → 29,128 | `createBaseBindingLikeDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |  +3.817 MiB | 0.0% → 1.4% | 0 B → 3.82 MiB |       0 → 1 | `getEffectsSignature`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |  +3.501 MiB | 0.0% → 1.3% |  0 B → 3.5 MiB |  0 → 25,423 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |    +3.5 MiB | 0.0% → 1.3% |  0 B → 3.5 MiB |  0 → 35,294 | `createBaseTokenNode`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |    +3.5 MiB | 0.0% → 1.3% |  0 B → 3.5 MiB |  0 → 25,489 | `parseNonArrayType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |      +3 MiB | 0.0% → 1.1% |    0 B → 3 MiB |  0 → 42,453 | `instantiateAnonymousType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|    new |   +2.75 MiB | 0.0% → 1.0% | 0 B → 2.75 MiB |  0 → 10,926 | `checkIdentifier`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### Standard library

|  Change |        Delta |           % |                Size |         Objects | Function         | Location                           |
| ------: | -----------: | ----------: | ------------------: | --------------: | ---------------- | ---------------------------------- |
| +117.9% |  +10.281 MiB | 1.8% → 7.0% |   8.72 MiB → 19 MiB |               1 | `readFileSync`   | `node:fs`                          |
| +395.7% |   +4.305 MiB | 0.2% → 2.0% | 1.09 MiB → 5.39 MiB |       302 → 133 | `slice`          | `node:buffer`                      |
|     new |   +3.503 MiB | 0.0% → 1.3% |       0 B → 3.5 MiB |      0 → 93,749 | `concat`         | `<unknown>`                        |
|  +67.8% |   +1.017 MiB | 0.3% → 0.9% |  1.5 MiB → 2.52 MiB | 40,962 → 32,807 | `wrapSafe`       | `node:internal/modules/cjs/loader` |
|     new |       +1 MiB | 0.0% → 0.4% |         0 B → 1 MiB |      0 → 32,770 | `slice`          | `<unknown>`                        |
|     new | +513.187 KiB | 0.0% → 0.2% |       0 B → 513 KiB |         0 → 119 | `getEncodingOps` | `node:buffer`                      |
|     new | +512.062 KiB | 0.0% → 0.2% |       0 B → 512 KiB |       0 → 8,193 | `(anonymous)`    | `node:internal/crypto/keys:1:1`    |
|     new | +512.062 KiB | 0.0% → 0.2% |       0 B → 512 KiB |       0 → 8,193 | `(anonymous)`    | `node:internal/perf/observe:1:1`   |
|   +1.5% |   +7.906 KiB | 0.1% → 0.2% |   512 KiB → 520 KiB |     13,108 → 59 | `next`           | `<unknown>`                        |
|   +0.5% |    +2.64 KiB | 0.1% → 0.2% |   512 KiB → 515 KiB |     3,641 → 172 | `replace`        | `<unknown>`                        |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |            % |                Size |           Objects | Function                        | Location                                             |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ---------------------------------------------------- |
| removed | -58.006 MiB | 11.8% → 0.0% |        58 MiB → 0 B |       955,969 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  -45.7% | -21.031 MiB |  9.4% → 9.2% |   46.1 MiB → 25 MiB |    22,477 → 9,311 | `set`                           | `<unknown>`                                          |
|  -61.5% | -20.003 MiB |  6.6% → 4.6% | 32.5 MiB → 12.5 MiB | 301,859 → 125,055 | `Map`                           | `<unknown>`                                          |
| removed | -17.002 MiB |  3.5% → 0.0% |        17 MiB → 0 B |       110,397 → 0 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
| removed | -16.001 MiB |  3.3% → 0.0% |        16 MiB → 0 B |       360,476 → 0 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
| removed | -15.502 MiB |  3.2% → 0.0% |      15.5 MiB → 0 B |       145,138 → 0 | `parseIdentifierName`           | `node_modules/typescript/lib/typescript.js`          |
| removed |   -15.5 MiB |  3.2% → 0.0% |      15.5 MiB → 0 B |       132,470 → 0 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
| removed |     -15 MiB |  3.1% → 0.0% |        15 MiB → 0 B |       264,034 → 0 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
| removed | -13.001 MiB |  2.7% → 0.0% |        13 MiB → 0 B |        94,672 → 0 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
| removed | -11.001 MiB |  2.2% → 0.0% |        11 MiB → 0 B |       127,639 → 0 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
| removed | -10.501 MiB |  2.1% → 0.0% |      10.5 MiB → 0 B |       177,431 → 0 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
| removed | -10.003 MiB |  2.0% → 0.0% |        10 MiB → 0 B |        52,644 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
| removed |  -9.509 MiB |  1.9% → 0.0% |      9.51 MiB → 0 B |           469 → 0 | `readFile`                      | `node_modules/typescript/lib/typescript.js`          |
| removed |  -9.501 MiB |  1.9% → 0.0% |       9.5 MiB → 0 B |        88,956 → 0 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
| removed |    -9.5 MiB |  1.9% → 0.0% |       9.5 MiB → 0 B |        69,180 → 0 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
| removed |  -8.923 MiB |  1.8% → 0.0% |      8.92 MiB → 0 B |        26,218 → 0 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js`          |
| removed |  -8.501 MiB |  1.7% → 0.0% |       8.5 MiB → 0 B |       125,509 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
| removed |    -8.5 MiB |  1.7% → 0.0% |       8.5 MiB → 0 B |       111,418 → 0 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
| removed |    -7.5 MiB |  1.5% → 0.0% |       7.5 MiB → 0 B |        98,310 → 0 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
| removed |      -7 MiB |  1.4% → 0.0% |         7 MiB → 0 B |        50,977 → 0 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |

##### Third-party

|  Change |       Delta |            % |           Size |     Objects | Function                        | Location                                             |
| ------: | ----------: | -----------: | -------------: | ----------: | ------------------------------- | ---------------------------------------------------- |
| removed | -58.006 MiB | 11.8% → 0.0% |   58 MiB → 0 B | 955,969 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
| removed | -17.002 MiB |  3.5% → 0.0% |   17 MiB → 0 B | 110,397 → 0 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
| removed | -16.001 MiB |  3.3% → 0.0% |   16 MiB → 0 B | 360,476 → 0 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
| removed | -15.502 MiB |  3.2% → 0.0% | 15.5 MiB → 0 B | 145,138 → 0 | `parseIdentifierName`           | `node_modules/typescript/lib/typescript.js`          |
| removed |   -15.5 MiB |  3.2% → 0.0% | 15.5 MiB → 0 B | 132,470 → 0 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
| removed |     -15 MiB |  3.1% → 0.0% |   15 MiB → 0 B | 264,034 → 0 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
| removed | -13.001 MiB |  2.7% → 0.0% |   13 MiB → 0 B |  94,672 → 0 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
| removed | -11.001 MiB |  2.2% → 0.0% |   11 MiB → 0 B | 127,639 → 0 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
| removed | -10.501 MiB |  2.1% → 0.0% | 10.5 MiB → 0 B | 177,431 → 0 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
| removed | -10.003 MiB |  2.0% → 0.0% |   10 MiB → 0 B |  52,644 → 0 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
| removed |  -9.509 MiB |  1.9% → 0.0% | 9.51 MiB → 0 B |     469 → 0 | `readFile`                      | `node_modules/typescript/lib/typescript.js`          |
| removed |  -9.501 MiB |  1.9% → 0.0% |  9.5 MiB → 0 B |  88,956 → 0 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
| removed |    -9.5 MiB |  1.9% → 0.0% |  9.5 MiB → 0 B |  69,180 → 0 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
| removed |  -8.923 MiB |  1.8% → 0.0% | 8.92 MiB → 0 B |  26,218 → 0 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js`          |
| removed |  -8.501 MiB |  1.7% → 0.0% |  8.5 MiB → 0 B | 125,509 → 0 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
| removed |    -8.5 MiB |  1.7% → 0.0% |  8.5 MiB → 0 B | 111,418 → 0 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
| removed |    -7.5 MiB |  1.5% → 0.0% |  7.5 MiB → 0 B |  98,310 → 0 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
| removed |      -7 MiB |  1.4% → 0.0% |    7 MiB → 0 B |  50,977 → 0 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
| removed |  -6.001 MiB |  1.2% → 0.0% |    6 MiB → 0 B |  54,334 → 0 | `mapDefined`                    | `node_modules/typescript/lib/typescript.js`          |
| removed |    -5.5 MiB |  1.1% → 0.0% |  5.5 MiB → 0 B |  58,986 → 0 | `createParameterDeclaration`    | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|  Change |        Delta |           % |                Size |           Objects | Function                   | Location                        |
| ------: | -----------: | ----------: | ------------------: | ----------------: | -------------------------- | ------------------------------- |
|  -45.7% |  -21.031 MiB | 9.4% → 9.2% |   46.1 MiB → 25 MiB |    22,477 → 9,311 | `set`                      | `<unknown>`                     |
|  -61.5% |  -20.003 MiB | 6.6% → 4.6% | 32.5 MiB → 12.5 MiB | 301,859 → 125,055 | `Map`                      | `<unknown>`                     |
|  -77.8% |     -3.5 MiB | 0.9% → 0.4% |     4.5 MiB → 1 MiB |    27,650 → 6,571 | `push`                     | `<unknown>`                     |
|  -66.7% |       -2 MiB | 0.6% → 0.4% |       3 MiB → 1 MiB |    17,308 → 6,212 | `join`                     | `<unknown>`                     |
| removed |   -1.501 MiB | 0.3% → 0.0% |       1.5 MiB → 0 B |        33,080 → 0 | `trimEnd`                  | `<unknown>`                     |
|  -40.0% |       -1 MiB | 0.5% → 0.6% |   2.5 MiB → 1.5 MiB |    17,250 → 8,357 | `splice`                   | `<unknown>`                     |
| removed | -516.375 KiB | 0.1% → 0.0% |       516 KiB → 0 B |            51 → 0 | `test`                     | `<unknown>`                     |
| removed |     -516 KiB | 0.1% → 0.0% |       516 KiB → 0 B |            86 → 0 | `getStatsFromBinding`      | `node:internal/fs/utils`        |
| removed | -513.671 KiB | 0.1% → 0.0% |       514 KiB → 0 B |           263 → 0 | `hasOwnProperty`           | `<unknown>`                     |
| removed | -512.125 KiB | 0.1% → 0.0% |       512 KiB → 0 B |         4,097 → 0 | `(anonymous)`              | `node:fs:2851:23`               |
| removed | -512.078 KiB | 0.1% → 0.0% |       512 KiB → 0 B |         5,042 → 0 | `internalBinding`          | `node:internal/bootstrap/realm` |
| removed | -512.062 KiB | 0.1% → 0.0% |       512 KiB → 0 B |         8,193 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm` |
| removed | -512.031 KiB | 0.1% → 0.0% |       512 KiB → 0 B |        16,385 → 0 | `Set`                      | `<unknown>`                     |
|   -1.6% |   -8.281 KiB | 0.1% → 0.2% |   521 KiB → 512 KiB |        13 → 1,457 | `add`                      | `<unknown>`                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

| Change |        Delta |            % |           Size |       Objects | Function                                   | Location                                                                                  |
| -----: | -----------: | -----------: | -------------: | ------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
|    new |  +146.78 MiB | 0.0% → 54.0% |  0 B → 147 MiB | 0 → 1,692,076 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|    new | +145.777 MiB | 0.0% → 53.6% |  0 B → 146 MiB | 0 → 1,688,445 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +144.121 MiB | 0.0% → 53.0% |  0 B → 144 MiB | 0 → 1,671,575 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +142.62 MiB | 0.0% → 52.4% |  0 B → 143 MiB | 0 → 1,656,482 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +141.62 MiB | 0.0% → 52.1% |  0 B → 142 MiB | 0 → 1,650,511 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +138.617 MiB | 0.0% → 51.0% |  0 B → 139 MiB | 0 → 1,615,402 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +136.05 MiB | 0.0% → 50.0% |  0 B → 136 MiB | 0 → 1,593,656 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|    new |  +134.05 MiB | 0.0% → 49.3% |  0 B → 134 MiB | 0 → 1,580,785 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +134.048 MiB | 0.0% → 49.3% |  0 B → 134 MiB | 0 → 1,358,017 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +134.048 MiB | 0.0% → 49.3% |  0 B → 134 MiB | 0 → 1,358,017 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +132.548 MiB | 0.0% → 48.7% |  0 B → 133 MiB | 0 → 1,566,669 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +130.173 MiB | 0.0% → 47.9% |  0 B → 130 MiB | 0 → 1,548,470 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +127.287 MiB | 0.0% → 46.8% |  0 B → 127 MiB | 0 → 1,324,385 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +126.786 MiB | 0.0% → 46.6% |  0 B → 127 MiB | 0 → 1,324,163 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +126.786 MiB | 0.0% → 46.6% |  0 B → 127 MiB | 0 → 1,324,163 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +126.786 MiB | 0.0% → 46.6% |  0 B → 127 MiB | 0 → 1,324,163 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +123.92 MiB | 0.0% → 45.6% |  0 B → 124 MiB | 0 → 1,139,034 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new | +102.967 MiB | 0.0% → 37.9% |  0 B → 103 MiB |   0 → 988,728 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +97.675 MiB | 0.0% → 35.9% | 0 B → 97.7 MiB |   0 → 979,552 | `checkTypeRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|    new |  +96.958 MiB | 0.0% → 35.6% |   0 B → 97 MiB |   0 → 933,939 | `checkCallExpression`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Standard library

|  Change |        Delta |           % |                Size |          Objects | Function          | Location                                   |
| ------: | -----------: | ----------: | ------------------: | ---------------: | ----------------- | ------------------------------------------ |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  +80.0% |  +11.378 MiB | 2.9% → 9.4% | 14.2 MiB → 25.6 MiB | 129,069 → 81,083 | `require`         | `node:internal/modules/helpers`            |
| +117.9% |  +10.281 MiB | 1.8% → 7.0% |   8.72 MiB → 19 MiB |                1 | `readFileSync`    | `node:fs`                                  |
| +117.9% |  +10.281 MiB | 1.8% → 7.0% |   8.72 MiB → 19 MiB |                1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
| +117.9% |  +10.281 MiB | 1.8% → 7.0% |   8.72 MiB → 19 MiB |                1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
| +441.7% |   +4.806 MiB | 0.2% → 2.2% |  1.09 MiB → 5.9 MiB |        302 → 252 | `toString`        | `node:buffer`                              |
| +395.7% |   +4.305 MiB | 0.2% → 2.0% | 1.09 MiB → 5.39 MiB |        302 → 133 | `slice`           | `node:buffer`                              |
|     new |   +3.503 MiB | 0.0% → 1.3% |       0 B → 3.5 MiB |       0 → 93,749 | `concat`          | `<unknown>`                                |
|  +19.9% |   +1.096 MiB | 1.1% → 2.4% |   5.5 MiB → 6.6 MiB | 129,068 → 81,082 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  +67.8% |   +1.017 MiB | 0.3% → 0.9% |  1.5 MiB → 2.52 MiB |  40,962 → 32,807 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|     new |       +1 MiB | 0.0% → 0.4% |         0 B → 1 MiB |       0 → 32,770 | `slice`           | `<unknown>`                                |
|     new | +513.187 KiB | 0.0% → 0.2% |       0 B → 513 KiB |          0 → 119 | `getEncodingOps`  | `node:buffer`                              |
| +100.0% | +512.062 KiB | 0.1% → 0.4% |     512 KiB → 1 MiB |   8,193 → 16,386 | `requireBuiltin`  | `node:internal/bootstrap/realm`            |
|     new | +512.062 KiB | 0.0% → 0.2% |       0 B → 512 KiB |        0 → 8,193 | `(anonymous)`     | `node:internal/crypto/keys:1:1`            |
|     new | +512.062 KiB | 0.0% → 0.2% |       0 B → 512 KiB |        0 → 8,193 | `(anonymous)`     | `node:internal/crypto/hkdf:1:1`            |
|     new | +512.062 KiB | 0.0% → 0.2% |       0 B → 512 KiB |        0 → 8,193 | `(anonymous)`     | `node:internal/perf/observe:1:1`           |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Third-party

|  Change |        Delta |            % |          Size |       Objects | Function                                   | Location                                              |
| ------: | -----------: | -----------: | ------------: | ------------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -271.086 MiB | 55.3% → 0.0% | 271 MiB → 0 B | 2,716,272 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -269.585 MiB | 55.0% → 0.0% | 270 MiB → 0 B | 2,709,085 → 0 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -267.084 MiB | 54.5% → 0.0% | 267 MiB → 0 B | 2,691,532 → 0 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| removed | -266.077 MiB | 54.2% → 0.0% | 266 MiB → 0 B | 2,686,816 → 0 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -262.526 MiB | 53.5% → 0.0% | 263 MiB → 0 B | 2,656,053 → 0 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| removed | -258.979 MiB | 52.8% → 0.0% | 259 MiB → 0 B | 2,628,346 → 0 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| removed | -254.477 MiB | 51.9% → 0.0% | 254 MiB → 0 B | 2,576,955 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| removed | -249.474 MiB | 50.9% → 0.0% | 249 MiB → 0 B | 2,533,390 → 0 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -244.473 MiB | 49.8% → 0.0% | 244 MiB → 0 B | 2,454,518 → 0 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -241.074 MiB | 49.2% → 0.0% | 241 MiB → 0 B | 2,301,862 → 0 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| removed | -241.074 MiB | 49.2% → 0.0% | 241 MiB → 0 B | 2,301,862 → 0 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| removed | -239.968 MiB | 48.9% → 0.0% | 240 MiB → 0 B | 2,415,777 → 0 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed | -229.526 MiB | 46.8% → 0.0% | 230 MiB → 0 B | 2,206,927 → 0 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| removed | -228.024 MiB | 46.5% → 0.0% | 228 MiB → 0 B | 2,203,135 → 0 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| removed | -226.021 MiB | 46.1% → 0.0% | 226 MiB → 0 B | 2,192,705 → 0 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| removed | -225.021 MiB | 45.9% → 0.0% | 225 MiB → 0 B | 2,174,915 → 0 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -223.021 MiB | 45.5% → 0.0% | 223 MiB → 0 B | 2,137,761 → 0 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| removed |  -202.46 MiB | 41.3% → 0.0% | 202 MiB → 0 B | 1,973,947 → 0 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| removed | -190.888 MiB | 38.9% → 0.0% | 191 MiB → 0 B | 1,767,709 → 0 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| removed | -183.303 MiB | 37.4% → 0.0% | 183 MiB → 0 B | 1,690,923 → 0 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|  Change |        Delta |             % |               Size |               Objects | Function                 | Location                               |
| ------: | -----------: | ------------: | -----------------: | --------------------: | ------------------------ | -------------------------------------- |
|  -43.7% | -166.129 MiB | 77.5% → 78.7% |  380 MiB → 214 MiB | 3,733,902 → 2,191,159 | `next`                   | `<unknown>`                            |
|  -42.7% | -155.127 MiB | 74.1% → 76.5% |  363 MiB → 208 MiB | 3,604,688 → 2,103,292 | `run`                    | `node:internal/modules/esm/module_job` |
|  -60.0% |   -94.96 MiB | 32.3% → 23.3% | 158 MiB → 63.3 MiB |   1,504,678 → 819,507 | `forEach`                | `<unknown>`                            |
|  -45.7% |  -21.031 MiB |   9.4% → 9.2% |  46.1 MiB → 25 MiB |        22,477 → 9,311 | `set`                    | `<unknown>`                            |
|  -60.6% |  -20.043 MiB |   6.7% → 4.8% |  33.1 MiB → 13 MiB |     301,869 → 125,114 | `Map`                    | `<unknown>`                            |
|  -77.8% |     -3.5 MiB |   0.9% → 0.4% |    4.5 MiB → 1 MiB |        27,650 → 6,571 | `push`                   | `<unknown>`                            |
|  -66.7% |       -2 MiB |   0.6% → 0.4% |      3 MiB → 1 MiB |        17,308 → 6,212 | `join`                   | `<unknown>`                            |
| removed |   -1.501 MiB |   0.3% → 0.0% |      1.5 MiB → 0 B |            33,080 → 0 | `trimEnd`                | `<unknown>`                            |
|  -40.0% |       -1 MiB |   0.5% → 0.6% |  2.5 MiB → 1.5 MiB |        17,250 → 8,357 | `splice`                 | `<unknown>`                            |
| removed | -516.375 KiB |   0.1% → 0.0% |      516 KiB → 0 B |                51 → 0 | `test`                   | `<unknown>`                            |
| removed |     -516 KiB |   0.1% → 0.0% |      516 KiB → 0 B |                86 → 0 | `getStatsFromBinding`    | `node:internal/fs/utils`               |
| removed |     -516 KiB |   0.1% → 0.0% |      516 KiB → 0 B |                86 → 0 | `statSync`               | `node:fs`                              |
| removed | -513.671 KiB |   0.1% → 0.0% |      514 KiB → 0 B |               263 → 0 | `hasOwnProperty`         | `<unknown>`                            |
| removed | -512.125 KiB |   0.1% → 0.0% |      512 KiB → 0 B |             4,097 → 0 | `(anonymous)`            | `node:fs:2851:23`                      |
|  -50.0% | -512.078 KiB |          0.2% |    1 MiB → 512 KiB |        13,235 → 8,193 | `(anonymous)`            | `node:crypto:1:1`                      |
|  -50.0% | -512.078 KiB |          0.2% |    1 MiB → 512 KiB |        13,235 → 8,193 | `compileForPublicLoader` | `node:internal/bootstrap/realm`        |
|  -50.0% | -512.078 KiB |          0.2% |    1 MiB → 512 KiB |        13,235 → 8,193 | `loadBuiltinModule`      | `node:internal/modules/helpers`        |
|  -50.0% | -512.078 KiB |          0.2% |    1 MiB → 512 KiB |        13,235 → 8,193 | `loadBuiltinWithHooks`   | `node:internal/modules/cjs/loader`     |
| removed | -512.078 KiB |   0.1% → 0.0% |      512 KiB → 0 B |             5,042 → 0 | `internalBinding`        | `node:internal/bootstrap/realm`        |
| removed | -512.031 KiB |   0.1% → 0.0% |      512 KiB → 0 B |            16,385 → 0 | `Set`                    | `<unknown>`                            |
