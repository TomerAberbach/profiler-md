# Heap profile diff

Allocated 957 MiB → 548 MiB (-408.783 MiB, -42.7%) over 8,453,024 objects → 4,490,738 objects (119 B → 128 B per object).

| Category         | Change |        Delta |             % |                Size |               Objects |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------------: |
| Third-party      | -40.8% |  -305.67 MiB | 78.2% → 80.8% |   748 MiB → 443 MiB | 7,242,637 → 3,906,616 |
| Standard library | -50.0% | -103.135 MiB | 21.6% → 18.8% |   206 MiB → 103 MiB |   1,210,386 → 584,121 |
| Native           |  +1.2% |      +24 KiB |   0.2% → 0.4% | 1.98 MiB → 2.01 MiB |                     1 |

Paths starting with `./` or `../` are relative to `/private/tmp/nix-shell.K1HXIc/profiler-md-input-generation.EdvtIc/zod/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Third-party

|  Change |       Delta |            % |                Size |           Objects | Function                              | Location                                            |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ------------------------------------- | --------------------------------------------------- |
| +232.6% | +50.008 MiB | 2.2% → 13.1% | 21.5 MiB → 71.5 MiB | 108,403 → 360,505 | `instantiateSymbol`                   | `./node_modules/typescript/lib/typescript.js`       |
|     new | +12.677 MiB |  0.0% → 2.3% |      0 B → 12.7 MiB |           0 → 718 | `readFile`                            | `./node_modules/typescript/lib/typescript.js`       |
|  +69.6% |  +8.001 MiB |  1.2% → 3.6% | 11.5 MiB → 19.5 MiB | 100,506 → 170,424 | `parseIdentifierName`                 | `./node_modules/typescript/lib/typescript.js`       |
|     new |    +4.5 MiB |  0.0% → 0.8% |       0 B → 4.5 MiB |        0 → 28,089 | `createPropertyAccessExpression`      | `./node_modules/typescript/lib/typescript.js`       |
|  +87.2% |  +3.502 MiB |  0.4% → 1.4% | 4.01 MiB → 7.52 MiB |     2,086 → 6,231 | `checkTypeRelatedTo`                  | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +3 MiB |  0.0% → 0.5% |         0 B → 3 MiB |        0 → 18,727 | `createBaseCallExpression`            | `./node_modules/typescript/lib/typescript.js`       |
| +125.0% |    +2.5 MiB |  0.2% → 0.8% |     2 MiB → 4.5 MiB |   45,131 → 64,393 | `getConditionalTypeInstantiation`     | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +2 MiB |  0.0% → 0.4% |         0 B → 2 MiB |        0 → 12,485 | `parseDeclarationWorker`              | `./node_modules/typescript/lib/typescript.js`       |
| +323.6% |  +1.618 MiB |  0.1% → 0.4% |  512 KiB → 2.12 MiB |   13,108 → 16,624 | `getResolvedMembersOrExportsOfSymbol` | `./node_modules/typescript/lib/typescript.js`       |
| +300.5% |  +1.502 MiB |  0.1% → 0.4% |     512 KiB → 2 MiB |    8,193 → 31,469 | `(anonymous)`                         | `./node_modules/typescript/lib/typescript.js:16:15` |
|     new |    +1.5 MiB |  0.0% → 0.3% |       0 B → 1.5 MiB |         0 → 9,363 | `createJSDocComment`                  | `./node_modules/typescript/lib/typescript.js`       |
|     new |  +1.004 MiB |  0.0% → 0.2% |         0 B → 1 MiB |           0 → 395 | `bindWorker`                          | `./node_modules/typescript/lib/typescript.js`       |
|     new |  +1.003 MiB |  0.0% → 0.2% |         0 B → 1 MiB |           0 → 301 | `resolveStructuredTypeMembers`        | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |        0 → 15,157 | `getTypeFactsWorker`                  | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |         0 → 6,243 | `createMethodDeclaration`             | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |         0 → 6,900 | `map`                                 | `./node_modules/typescript/lib/typescript.js`       |
| +200.0% |      +1 MiB |  0.1% → 0.3% |   512 KiB → 1.5 MiB |    4,682 → 14,046 | `createIndexedAccessType`             | `./node_modules/typescript/lib/typescript.js`       |
|  +66.7% |      +1 MiB |  0.2% → 0.5% |   1.5 MiB → 2.5 MiB |    9,364 → 15,606 | `createNumericLiteral`                | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |        0 → 20,390 | `createTupleTargetType`               | `./node_modules/typescript/lib/typescript.js`       |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |        0 → 21,846 | `multiMapAdd`                         | `./node_modules/typescript/lib/typescript.js`       |

##### Standard library

|  Change |        Delta |           % |                Size |         Objects | Function       | Location                           |
| ------: | -----------: | ----------: | ------------------: | --------------: | -------------- | ---------------------------------- |
| +110.3% |  +567.07 KiB | 0.1% → 0.2% |  514 KiB → 1.06 MiB |        102 → 27 | `add`          | `<unknown>`                        |
|   +5.2% |  +160.71 KiB | 0.3% → 0.6% |    3 MiB → 3.16 MiB | 84,655 → 58,610 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
|   +1.3% | +110.078 KiB | 0.9% → 1.5% | 8.27 MiB → 8.37 MiB |               1 | `readFileSync` | `node:fs`                          |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |           Objects | Function                        | Location                                                          |
| ------: | -----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ----------------------------------------------------------------- |
| removed | -116.019 MiB | 12.1% → 0.0% |       116 MiB → 0 B |       584,879 → 0 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js`                     |
|  -52.9% |  -36.005 MiB |  7.1% → 5.8% |     68 MiB → 32 MiB | 766,364 → 440,364 | `Map`                           | `<unknown>`                                                       |
| removed |  -25.503 MiB |  2.7% → 0.0% |      25.5 MiB → 0 B |       159,182 → 0 | `parseTypeReference`            | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.8% |  -25.503 MiB |  4.9% → 3.8% |   46.5 MiB → 21 MiB | 485,246 → 206,000 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js`                     |
|  -31.3% |  -24.634 MiB |  8.2% → 9.8% |   78.6 MiB → 54 MiB |   45,581 → 26,191 | `set`                           | `<unknown>`                                                       |
|  -45.7% |  -24.003 MiB |  5.5% → 5.2% | 52.5 MiB → 28.5 MiB | 327,722 → 177,904 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.0% |  -13.502 MiB |  2.6% → 2.1% |   25 MiB → 11.5 MiB | 218,493 → 100,508 | `createIdentifier`              | `./node_modules/typescript/lib/typescript.js`                     |
|  -96.4% |  -13.502 MiB |  1.5% → 0.1% |    14 MiB → 512 KiB |   122,355 → 4,370 | `createBaseIdentifierNode`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -59.5% |  -12.504 MiB |  2.2% → 1.6% |    21 MiB → 8.5 MiB |  146,423 → 69,217 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -95.3% |  -11.892 MiB |  1.3% → 0.1% |  12.5 MiB → 601 KiB |           326 → 2 | `slice`                         | `node:buffer`                                                     |
|  -60.0% |  -10.501 MiB |  1.8% → 1.3% |    17.5 MiB → 7 MiB |  109,242 → 43,697 | `parseNonArrayType`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -36.4% |      -10 MiB |  2.9% → 3.2% | 27.5 MiB → 17.5 MiB | 220,254 → 137,037 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.0% |   -9.996 MiB |  1.9% → 1.6% | 18.5 MiB → 8.51 MiB |  163,869 → 67,532 | `instantiateTypes`              | `./node_modules/typescript/lib/typescript.js`                     |
| removed |    -9.91 MiB |  1.0% → 0.0% |      9.91 MiB → 0 B |           309 → 0 | `toString`                      | `node:buffer`                                                     |
|  -55.9% |     -9.5 MiB |  1.8% → 1.4% |    17 MiB → 7.5 MiB |  202,577 → 89,371 | `createBaseTokenNode`           | `./node_modules/typescript/lib/typescript.js`                     |
|  -83.3% |   -7.501 MiB |  0.9% → 0.3% |     9 MiB → 1.5 MiB |    68,931 → 4,884 | `join`                          | `<unknown>`                                                       |
|  -56.0% |       -7 MiB |  1.3% → 1.0% |  12.5 MiB → 5.5 MiB |  120,157 → 86,394 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js`                     |
|  -92.9% |   -6.501 MiB |  0.7% → 0.1% |     7 MiB → 512 KiB |    45,977 → 3,450 | `push`                          | `<unknown>`                                                       |
| removed |       -6 MiB |  0.6% → 0.0% |         6 MiB → 0 B |        37,454 → 0 | `createCallExpression`          | `./node_modules/typescript/lib/typescript.js`                     |
|  -44.4% |   -5.999 MiB |         1.4% |  13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js`                     |

##### Third-party

|  Change |        Delta |            % |                Size |           Objects | Function                        | Location                                                          |
| ------: | -----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ----------------------------------------------------------------- |
| removed | -116.019 MiB | 12.1% → 0.0% |       116 MiB → 0 B |       584,879 → 0 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js`                     |
| removed |  -25.503 MiB |  2.7% → 0.0% |      25.5 MiB → 0 B |       159,182 → 0 | `parseTypeReference`            | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.8% |  -25.503 MiB |  4.9% → 3.8% |   46.5 MiB → 21 MiB | 485,246 → 206,000 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js`                     |
|  -45.7% |  -24.003 MiB |  5.5% → 5.2% | 52.5 MiB → 28.5 MiB | 327,722 → 177,904 | `createBaseNode`                | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.0% |  -13.502 MiB |  2.6% → 2.1% |   25 MiB → 11.5 MiB | 218,493 → 100,508 | `createIdentifier`              | `./node_modules/typescript/lib/typescript.js`                     |
|  -96.4% |  -13.502 MiB |  1.5% → 0.1% |    14 MiB → 512 KiB |   122,355 → 4,370 | `createBaseIdentifierNode`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -59.5% |  -12.504 MiB |  2.2% → 1.6% |    21 MiB → 8.5 MiB |  146,423 → 69,217 | `(anonymous)`                   | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -60.0% |  -10.501 MiB |  1.8% → 1.3% |    17.5 MiB → 7 MiB |  109,242 → 43,697 | `parseNonArrayType`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -36.4% |      -10 MiB |  2.9% → 3.2% | 27.5 MiB → 17.5 MiB | 220,254 → 137,037 | `instantiateAnonymousType`      | `./node_modules/typescript/lib/typescript.js`                     |
|  -54.0% |   -9.996 MiB |  1.9% → 1.6% | 18.5 MiB → 8.51 MiB |  163,869 → 67,532 | `instantiateTypes`              | `./node_modules/typescript/lib/typescript.js`                     |
|  -55.9% |     -9.5 MiB |  1.8% → 1.4% |    17 MiB → 7.5 MiB |  202,577 → 89,371 | `createBaseTokenNode`           | `./node_modules/typescript/lib/typescript.js`                     |
|  -56.0% |       -7 MiB |  1.3% → 1.0% |  12.5 MiB → 5.5 MiB |  120,157 → 86,394 | `createNormalizedTypeReference` | `./node_modules/typescript/lib/typescript.js`                     |
| removed |       -6 MiB |  0.6% → 0.0% |         6 MiB → 0 B |        37,454 → 0 | `createCallExpression`          | `./node_modules/typescript/lib/typescript.js`                     |
|  -44.4% |   -5.999 MiB |         1.4% |  13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `getObjectTypeInstantiation`    | `./node_modules/typescript/lib/typescript.js`                     |
|  -50.0% |     -5.5 MiB |  1.1% → 1.0% |    11 MiB → 5.5 MiB | 286,194 → 141,459 | `createNodeArray`               | `./node_modules/typescript/lib/typescript.js`                     |
|  -68.8% |     -5.5 MiB |  0.8% → 0.5% |     8 MiB → 2.5 MiB |  100,510 → 14,683 | `resolveTypeReferenceMembers`   | `./node_modules/typescript/lib/typescript.js`                     |
|  -71.4% |       -5 MiB |  0.7% → 0.4% |       7 MiB → 2 MiB |  243,042 → 71,001 | `recursiveTypeRelatedTo`        | `./node_modules/typescript/lib/typescript.js`                     |
|  -90.9% |       -5 MiB |  0.6% → 0.1% |   5.5 MiB → 512 KiB |  196,618 → 16,385 | `scan`                          | `./node_modules/typescript/lib/typescript.js`                     |
|  -27.4% |   -4.703 MiB |  1.8% → 2.3% | 17.2 MiB → 12.5 MiB |            32,776 | `getResolvedSymbol`             | `./node_modules/typescript/lib/typescript.js`                     |
|  -75.0% |     -4.5 MiB |  0.6% → 0.3% |     6 MiB → 1.5 MiB |   67,269 → 10,350 | `mapDefined`                    | `./node_modules/typescript/lib/typescript.js`                     |

##### Standard library

|  Change |        Delta |           % |               Size |           Objects | Function   | Location      |
| ------: | -----------: | ----------: | -----------------: | ----------------: | ---------- | ------------- |
|  -52.9% |  -36.005 MiB | 7.1% → 5.8% |    68 MiB → 32 MiB | 766,364 → 440,364 | `Map`      | `<unknown>`   |
|  -31.3% |  -24.634 MiB | 8.2% → 9.8% |  78.6 MiB → 54 MiB |   45,581 → 26,191 | `set`      | `<unknown>`   |
|  -95.3% |  -11.892 MiB | 1.3% → 0.1% | 12.5 MiB → 601 KiB |           326 → 2 | `slice`    | `node:buffer` |
| removed |    -9.91 MiB | 1.0% → 0.0% |     9.91 MiB → 0 B |           309 → 0 | `toString` | `node:buffer` |
|  -83.3% |   -7.501 MiB | 0.9% → 0.3% |    9 MiB → 1.5 MiB |    68,931 → 4,884 | `join`     | `<unknown>`   |
|  -92.9% |   -6.501 MiB | 0.7% → 0.1% |    7 MiB → 512 KiB |    45,977 → 3,450 | `push`     | `<unknown>`   |
| removed |       -3 MiB | 0.3% → 0.0% |        3 MiB → 0 B |        98,310 → 0 | `trimEnd`  | `<unknown>`   |
|  -75.1% |   -1.508 MiB | 0.2% → 0.1% | 2.01 MiB → 512 KiB |   32,987 → 21,846 | `slice`    | `<unknown>`   |
|  -60.0% |     -1.5 MiB | 0.3% → 0.2% |    2.5 MiB → 1 MiB |    17,250 → 6,900 | `splice`   | `<unknown>`   |
| removed |       -1 MiB | 0.1% → 0.0% |        1 MiB → 0 B |         5,901 → 0 | `replace`  | `<unknown>`   |
|  -50.0% | -512.015 KiB |        0.1% |    1 MiB → 512 KiB |   43,692 → 21,846 | `toString` | `<unknown>`   |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |      % |                Size |           Objects | Location                                                    |
| ------: | ----------: | -----: | ------------------: | ----------------: | ----------------------------------------------------------- |
| +232.6% | +50.008 MiB | 100.0% | 21.5 MiB → 71.5 MiB | 108,403 → 360,505 | `./node_modules/typescript/lib/typescript.js:64758 → 66013` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |           Size | Objects | Location                                             |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------- |
|    new | +12.677 MiB | 0.0% → 100.0% | 0 B → 12.7 MiB | 0 → 718 | `./node_modules/typescript/lib/typescript.js:123140` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size |           Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ----------------: | ----------------------------------------------------------- |
| +69.6% | +8.001 MiB | 100.0% | 11.5 MiB → 19.5 MiB | 100,506 → 170,424 | `./node_modules/typescript/lib/typescript.js:32324 → 33379` |

##### `createPropertyAccessExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |    Objects | Location                                            |
| -----: | -------: | ------------: | ------------: | ---------: | --------------------------------------------------- |
|    new | +4.5 MiB | 0.0% → 100.0% | 0 B → 4.5 MiB | 0 → 28,089 | `./node_modules/typescript/lib/typescript.js:25873` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size |       Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------------------------------------------- |
| +87.2% | +3.502 MiB | 100.0% | 4.01 MiB → 7.52 MiB | 2,086 → 6,231 | `./node_modules/typescript/lib/typescript.js:66185 → 67445` |

##### `createBaseCallExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB | 0 → 18,727 | `./node_modules/typescript/lib/typescript.js:25963` |

##### `getConditionalTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |      % |            Size |         Objects | Location                                                    |
| ------: | -------: | -----: | --------------: | --------------: | ----------------------------------------------------------- |
| +125.0% | +2.5 MiB | 100.0% | 2 MiB → 4.5 MiB | 45,131 → 64,393 | `./node_modules/typescript/lib/typescript.js:64979 → 66239` |

##### `parseDeclarationWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +2 MiB | 0.0% → 100.0% | 0 B → 2 MiB | 0 → 12,485 | `./node_modules/typescript/lib/typescript.js:37124` |

##### `getResolvedMembersOrExportsOfSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |               Size |         Objects | Location                                                    |
| ------: | ---------: | -----: | -----------------: | --------------: | ----------------------------------------------------------- |
| +323.6% | +1.618 MiB | 100.0% | 512 KiB → 2.12 MiB | 13,108 → 16,624 | `./node_modules/typescript/lib/typescript.js:59124 → 60379` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`)

|  Change |      Delta |      % |            Size |        Objects | Location                                         |
| ------: | ---------: | -----: | --------------: | -------------: | ------------------------------------------------ |
| +300.5% | +1.502 MiB | 100.0% | 512 KiB → 2 MiB | 8,193 → 31,469 | `./node_modules/typescript/lib/typescript.js:16` |

##### `createJSDocComment` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |   Objects | Location                                            |
| -----: | -------: | ------------: | ------------: | --------: | --------------------------------------------------- |
|    new | +1.5 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 9,363 | `./node_modules/typescript/lib/typescript.js:27341` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |             % |        Size | Objects | Location                                            |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- |
|    new | +1.004 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 395 | `./node_modules/typescript/lib/typescript.js:47856` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |             % |        Size | Objects | Location                                            |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------- |
|    new | +1.003 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 301 | `./node_modules/typescript/lib/typescript.js:61345` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 15,157 | `./node_modules/typescript/lib/typescript.js:72224` |

##### `createMethodDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | --------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,243 | `./node_modules/typescript/lib/typescript.js:25327` |

##### `map` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Location                                           |
| -----: | -----: | ------------: | ----------: | --------: | -------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,900 | `./node_modules/typescript/lib/typescript.js:2580` |

##### `createIndexedAccessType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |  Delta |      % |              Size |        Objects | Location                                                    |
| ------: | -----: | -----: | ----------------: | -------------: | ----------------------------------------------------------- |
| +200.0% | +1 MiB | 100.0% | 512 KiB → 1.5 MiB | 4,682 → 14,046 | `./node_modules/typescript/lib/typescript.js:63504 → 64759` |

##### `createNumericLiteral` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |              Size |        Objects | Location                                                    |
| -----: | -----: | -----: | ----------------: | -------------: | ----------------------------------------------------------- |
| +66.7% | +1 MiB | 100.0% | 1.5 MiB → 2.5 MiB | 9,364 → 15,606 | `./node_modules/typescript/lib/typescript.js:23838 → 24888` |

##### `createTupleTargetType` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                            |
| -----: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 20,390 | `./node_modules/typescript/lib/typescript.js:63741` |

##### `multiMapAdd` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Location                                           |
| -----: | -----: | ------------: | ----------: | ---------: | -------------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 21,846 | `./node_modules/typescript/lib/typescript.js:3303` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

| Change |       Delta |      % |             Size |         Objects | Location                                |
| -----: | ----------: | -----: | ---------------: | --------------: | --------------------------------------- |
|  +5.2% | +160.71 KiB | 100.0% | 3 MiB → 3.16 MiB | 84,655 → 58,610 | `node:internal/modules/cjs/loader:1671` |

##### `readFileSync` (`node:fs`)

| Change |        Delta |      % |                Size | Objects | Location      |
| -----: | -----------: | -----: | ------------------: | ------: | ------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `node:fs:433` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |          Size |     Objects | Location                                            |
| ------: | -----------: | ------------: | ------------: | ----------: | --------------------------------------------------- |
| removed | -116.019 MiB | 100.0% → 0.0% | 116 MiB → 0 B | 584,879 → 0 | `./node_modules/typescript/lib/typescript.js:59020` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |           Size |     Objects | Location                                            |
| ------: | ----------: | ------------: | -------------: | ----------: | --------------------------------------------------- |
| removed | -25.503 MiB | 100.0% → 0.0% | 25.5 MiB → 0 B | 159,182 → 0 | `./node_modules/typescript/lib/typescript.js:33132` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |              Size |           Objects | Location                                                    |
| -----: | ----------: | -----: | ----------------: | ----------------: | ----------------------------------------------------------- |
| -54.8% | -25.503 MiB | 100.0% | 46.5 MiB → 21 MiB | 485,246 → 206,000 | `./node_modules/typescript/lib/typescript.js:44997 → 46190` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |                Size |           Objects | Location                                                    |
| -----: | ----------: | -----: | ------------------: | ----------------: | ----------------------------------------------------------- |
| -45.7% | -24.003 MiB | 100.0% | 52.5 MiB → 28.5 MiB | 327,722 → 177,904 | `./node_modules/typescript/lib/typescript.js:31416 → 32468` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |              Size |           Objects | Location                                                    |
| -----: | ----------: | -----: | ----------------: | ----------------: | ----------------------------------------------------------- |
| -54.0% | -13.502 MiB | 100.0% | 25 MiB → 11.5 MiB | 218,493 → 100,508 | `./node_modules/typescript/lib/typescript.js:32283 → 33338` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |             Size |         Objects | Location                                                    |
| -----: | ----------: | -----: | ---------------: | --------------: | ----------------------------------------------------------- |
| -96.4% | -13.502 MiB | 100.0% | 14 MiB → 512 KiB | 122,355 → 4,370 | `./node_modules/typescript/lib/typescript.js:31395 → 32447` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |       Delta |      % |             Size |          Objects | Location                                                    |
| -----: | ----------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -59.5% | -12.504 MiB | 100.0% | 21 MiB → 8.5 MiB | 146,423 → 69,217 | `./node_modules/typescript/lib/typescript.js:52487 → 53728` |

##### `slice` (`node:buffer`)

| Change |       Delta |      % |               Size | Objects | Location          |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------- |
| -95.3% | -11.892 MiB | 100.0% | 12.5 MiB → 601 KiB | 326 → 2 | `node:buffer:640` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |             Size |          Objects | Location                                                    |
| -----: | ----------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -60.0% | -10.501 MiB | 100.0% | 17.5 MiB → 7 MiB | 109,242 → 43,697 | `./node_modules/typescript/lib/typescript.js:33781 → 34836` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

| Change |   Delta |      % |                Size |           Objects | Location                                                    |
| -----: | ------: | -----: | ------------------: | ----------------: | ----------------------------------------------------------- |
| -36.4% | -10 MiB | 100.0% | 27.5 MiB → 17.5 MiB | 220,254 → 137,037 | `./node_modules/typescript/lib/typescript.js:64955 → 66215` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size |          Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ---------------: | ----------------------------------------------------------- |
| -54.0% | -9.996 MiB | 100.0% | 18.5 MiB → 8.51 MiB | 163,869 → 67,532 | `./node_modules/typescript/lib/typescript.js:64640 → 65895` |

##### `toString` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Location          |
| ------: | --------: | ------------: | -------------: | ------: | ----------------- |
| removed | -9.91 MiB | 100.0% → 0.0% | 9.91 MiB → 0 B | 309 → 0 | `node:buffer:839` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Size |          Objects | Location                                                    |
| -----: | -------: | -----: | ---------------: | ---------------: | ----------------------------------------------------------- |
| -55.9% | -9.5 MiB | 100.0% | 17 MiB → 7.5 MiB | 202,577 → 89,371 | `./node_modules/typescript/lib/typescript.js:31409 → 32461` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |               Size |          Objects | Location                                                    |
| -----: | -----: | -----: | -----------------: | ---------------: | ----------------------------------------------------------- |
| -56.0% | -7 MiB | 100.0% | 12.5 MiB → 5.5 MiB | 120,157 → 86,394 | `./node_modules/typescript/lib/typescript.js:62541 → 63796` |

##### `createCallExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |  Delta |             % |        Size |    Objects | Location                                            |
| ------: | -----: | ------------: | ----------: | ---------: | --------------------------------------------------- |
| removed | -6 MiB | 100.0% → 0.0% | 6 MiB → 0 B | 37,454 → 0 | `./node_modules/typescript/lib/typescript.js:24928` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |               Size |           Objects | Location                                                    |
| -----: | ---------: | -----: | -----------------: | ----------------: | ----------------------------------------------------------- |
| -44.4% | -5.999 MiB | 100.0% | 13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `./node_modules/typescript/lib/typescript.js:64785 → 66040` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Size |           Objects | Location                                                    |
| -----: | -------: | -----: | ---------------: | ----------------: | ----------------------------------------------------------- |
| -50.0% | -5.5 MiB | 100.0% | 11 MiB → 5.5 MiB | 286,194 → 141,459 | `./node_modules/typescript/lib/typescript.js:32232 → 33287` |

##### `resolveTypeReferenceMembers` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Size |          Objects | Location                                                    |
| -----: | -------: | -----: | --------------: | ---------------: | ----------------------------------------------------------- |
| -68.8% | -5.5 MiB | 100.0% | 8 MiB → 2.5 MiB | 100,510 → 14,683 | `./node_modules/typescript/lib/typescript.js:59264 → 60519` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |          Size |          Objects | Location                                                    |
| -----: | -----: | -----: | ------------: | ---------------: | ----------------------------------------------------------- |
| -71.4% | -5 MiB | 100.0% | 7 MiB → 2 MiB | 243,042 → 71,001 | `./node_modules/typescript/lib/typescript.js:67063 → 68323` |

##### `scan` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |          Size |     Objects | Location                                            |
| ------: | -----------: | ------------: | ------------: | ----------: | --------------------------------------------------- |
| removed |     -5.5 MiB | 100.0% → 0.0% | 5.5 MiB → 0 B | 196,618 → 0 | `./node_modules/typescript/lib/typescript.js:12765` |
|     new | +512.031 KiB | 0.0% → 100.0% | 0 B → 512 KiB |  0 → 16,385 | `./node_modules/typescript/lib/typescript.js:12895` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size | Objects | Location                                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------- |
| -27.4% | -4.703 MiB | 100.0% | 17.2 MiB → 12.5 MiB |  32,776 | `./node_modules/typescript/lib/typescript.js:70627 → 71910` |

##### `mapDefined` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |            Size |         Objects | Location                                                  |
| -----: | -------: | -----: | --------------: | --------------: | --------------------------------------------------------- |
| -75.0% | -4.5 MiB | 100.0% | 6 MiB → 1.5 MiB | 67,269 → 10,350 | `./node_modules/typescript/lib/typescript.js:2683 → 2696` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |             Size |         Objects | Caller                                                   | Location                                      |
| ------: | -----------: | ------------: | ---------------: | --------------: | -------------------------------------------------------- | --------------------------------------------- |
|     new |  +57.009 MiB |  0.0% → 79.7% |     0 B → 57 MiB |     0 → 287,396 | `resolveObjectTypeMembers`                               | `./node_modules/typescript/lib/typescript.js` |
|  -46.9% |   -7.501 MiB | 74.4% → 11.9% | 16 MiB → 8.5 MiB | 80,672 → 42,857 | `instantiateSignature`                                   | `./node_modules/typescript/lib/typescript.js` |
|     new |       +5 MiB |   0.0% → 7.0% |      0 B → 5 MiB |      0 → 25,210 | `resolveAnonymousTypeMembers`                            | `./node_modules/typescript/lib/typescript.js` |
|  -80.0% |       -4 MiB |  23.3% → 1.4% |    5 MiB → 1 MiB |  25,210 → 5,042 | `createErasedSignature`                                  | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.078 KiB |   2.3% → 0.0% |    512 KiB → 0 B |       2,521 → 0 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `./node_modules/typescript/lib/typescript.js` |

##### `readFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |            % |           Size | Objects | Caller                | Location                                                            |
| -----: | ----------: | -----------: | -------------: | ------: | --------------------- | ------------------------------------------------------------------- |
|    new | +11.663 MiB | 0.0% → 92.0% | 0 B → 11.7 MiB | 0 → 178 | `(anonymous)`         | `./node_modules/typescript/lib/typescript.js:121549:40 → 123127:40` |
|    new |  +1.013 MiB |  0.0% → 8.0% | 0 B → 1.01 MiB | 0 → 540 | `readJsonOrUndefined` | `./node_modules/typescript/lib/typescript.js`                       |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |              Size |         Objects | Caller                           | Location                                      |
| ------: | -----------: | ------------: | ----------------: | --------------: | -------------------------------- | --------------------------------------------- |
|     new |   +7.001 MiB |  0.0% → 35.9% |       0 B → 7 MiB |      0 → 61,177 | `parseEntityNameOfTypeReference` | `./node_modules/typescript/lib/typescript.js` |
|  +21.4% |     +1.5 MiB | 60.9% → 43.6% |   7 MiB → 8.5 MiB | 61,177 → 74,288 | `parsePropertyName`              | `./node_modules/typescript/lib/typescript.js` |
|  -66.7% |       -1 MiB |  13.0% → 2.6% | 1.5 MiB → 512 KiB |  13,110 → 4,370 | `parseRightSideOfDot`            | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.109 KiB |   4.3% → 0.0% |     512 KiB → 0 B |       4,370 → 0 | `parseEntityName`                | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.109 KiB |   0.0% → 2.6% |     0 B → 512 KiB |       0 → 4,370 | `parseNameWithKeywordCheck`      | `./node_modules/typescript/lib/typescript.js` |

##### `createPropertyAccessExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |    Objects | Caller                              | Location                                      |
| -----: | -------: | ------------: | ------------: | ---------: | ----------------------------------- | --------------------------------------------- |
|    new | +4.5 MiB | 0.0% → 100.0% | 0 B → 4.5 MiB | 0 → 28,089 | `parsePropertyAccessExpressionRest` | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |              % |                Size |       Objects | Caller                                     | Location                                      |
| ------: | ---------: | -------------: | ------------------: | ------------: | ------------------------------------------ | --------------------------------------------- |
| +199.8% | +5.009 MiB | 62.5% → 100.0% | 2.51 MiB → 7.52 MiB | 1,582 → 6,231 | `isTypeOrBaseIdenticalTo`                  | `./node_modules/typescript/lib/typescript.js` |
| removed | -1.004 MiB |   25.0% → 0.0% |         1 MiB → 0 B |       336 → 0 | `isTypeRelatedTo`                          | `./node_modules/typescript/lib/typescript.js` |
| removed | -514.5 KiB |   12.5% → 0.0% |       515 KiB → 0 B |       168 → 0 | `checkTypeRelatedToAndOptionallyElaborate` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseCallExpression` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Caller                    | Location                                      |
| -----: | -----: | ------------: | ----------: | ---------: | ------------------------- | --------------------------------------------- |
|    new | +3 MiB | 0.0% → 100.0% | 0 B → 3 MiB | 0 → 18,727 | `parseCallExpressionRest` | `./node_modules/typescript/lib/typescript.js` |

##### `getConditionalTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |      % |            Size |         Objects | Caller                  | Location                                      |
| ------: | -------: | -----: | --------------: | --------------: | ----------------------- | --------------------------------------------- |
| +125.0% | +2.5 MiB | 100.0% | 2 MiB → 4.5 MiB | 45,131 → 64,393 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `parseDeclarationWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |            % |        Size |   Objects | Caller           | Location                                                          |
| -----: | -----: | -----------: | ----------: | --------: | ---------------- | ----------------------------------------------------------------- |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB | 0 → 6,243 | `(anonymous)`    | `./node_modules/typescript/lib/typescript.js:36056:56 → 37111:56` |
|    new | +1 MiB | 0.0% → 50.0% | 0 B → 1 MiB | 0 → 6,242 | `parseStatement` | `./node_modules/typescript/lib/typescript.js`                     |

##### `getResolvedMembersOrExportsOfSymbol` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |           Size |    Objects | Caller                                                  | Location                                      |
| ------: | -----------: | ------------: | -------------: | ---------: | ------------------------------------------------------- | --------------------------------------------- |
|     new |   +1.617 MiB |  0.0% → 76.3% | 0 B → 1.62 MiB | 0 → 16,386 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `./node_modules/typescript/lib/typescript.js` |
|     new | +513.187 KiB |  0.0% → 23.7% |  0 B → 513 KiB |    0 → 238 | `getNormalizedUnionOrIntersectionType`                  | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB | 100.0% → 0.0% |  512 KiB → 0 B | 13,108 → 0 | `getExportsOfSymbol`                                    | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`)

|  Change |      Delta |      % |            Size |        Objects | Caller        | Location                                          |
| ------: | ---------: | -----: | --------------: | -------------: | ------------- | ------------------------------------------------- |
| +300.5% | +1.502 MiB | 100.0% | 512 KiB → 2 MiB | 8,193 → 31,469 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |

##### `createJSDocComment` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |   Objects | Caller        | Location                                      |
| -----: | -------: | ------------: | ------------: | --------: | ------------- | --------------------------------------------- |
|    new | +1.5 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 9,363 | `doJSDocScan` | `./node_modules/typescript/lib/typescript.js` |

##### `bindWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |             % |        Size | Objects | Caller | Location                                      |
| -----: | ---------: | ------------: | ----------: | ------: | ------ | --------------------------------------------- |
|    new | +1.004 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 395 | `bind` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size | Objects | Caller                | Location                                      |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------- | --------------------------------------------- |
|    new | +514.335 KiB | 0.0% → 50.1% | 0 B → 514 KiB | 0 → 105 | `propertiesRelatedTo` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.968 KiB | 0.0% → 49.9% | 0 B → 513 KiB | 0 → 196 | `getSignaturesOfType` | `./node_modules/typescript/lib/typescript.js` |

##### `getTypeFactsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Caller               | Location                                                          |
| -----: | -----------: | -----------: | ------------: | ---------: | -------------------- | ----------------------------------------------------------------- |
|    new |  +512.25 KiB | 0.0% → 50.0% | 0 B → 512 KiB |  0 → 2,049 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:71020:29 → 72303:29` |
|    new | +512.031 KiB | 0.0% → 50.0% | 0 B → 512 KiB | 0 → 13,108 | `getTypeFactsWorker` | `./node_modules/typescript/lib/typescript.js`                     |

##### `createMethodDeclaration` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |   Objects | Caller              | Location                                      |
| -----: | -----: | ------------: | ----------: | --------: | ------------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 6,243 | `parseClassElement` | `./node_modules/typescript/lib/typescript.js` |

##### `map` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |   Objects | Caller                       | Location                                      |
| -----: | -----------: | -----------: | ------------: | --------: | ---------------------------- | --------------------------------------------- |
|    new | +512.109 KiB | 0.0% → 50.0% | 0 B → 512 KiB | 0 → 3,450 | `instantiateMappedTupleType` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.109 KiB | 0.0% → 50.0% | 0 B → 512 KiB | 0 → 3,450 | `instantiateSignature`       | `./node_modules/typescript/lib/typescript.js` |

##### `createIndexedAccessType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |  Delta |      % |              Size |        Objects | Caller                            | Location                                      |
| ------: | -----: | -----: | ----------------: | -------------: | --------------------------------- | --------------------------------------------- |
| +200.0% | +1 MiB | 100.0% | 512 KiB → 1.5 MiB | 4,682 → 14,046 | `getIndexedAccessTypeOrUndefined` | `./node_modules/typescript/lib/typescript.js` |

##### `createNumericLiteral` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |              % |            Size |        Objects | Caller              | Location                                      |
| -----: | -----------: | -------------: | --------------: | -------------: | ------------------- | --------------------------------------------- |
| +33.3% | +512.039 KiB | 100.0% → 80.0% | 1.5 MiB → 2 MiB | 9,364 → 12,485 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.039 KiB |   0.0% → 20.0% |   0 B → 512 KiB |      0 → 3,121 | `parsePropertyName` | `./node_modules/typescript/lib/typescript.js` |

##### `createTupleTargetType` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Caller            | Location                                      |
| -----: | -----: | ------------: | ----------: | ---------: | ----------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 20,390 | `createTupleType` | `./node_modules/typescript/lib/typescript.js` |

##### `multiMapAdd` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |        Size |    Objects | Caller            | Location                                      |
| -----: | -----: | ------------: | ----------: | ---------: | ----------------- | --------------------------------------------- |
|    new | +1 MiB | 0.0% → 100.0% | 0 B → 1 MiB | 0 → 21,846 | `registerCodeFix` | `./node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|  Change |       Delta |      % |               Size |  Objects | Caller          | Location                                      |
| ------: | ----------: | -----: | -----------------: | -------: | --------------- | --------------------------------------------- |
| +110.3% | +567.07 KiB | 100.0% | 514 KiB → 1.06 MiB | 102 → 27 | `declareSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

| Change |       Delta |      % |             Size |         Objects | Caller        | Location                                   |
| -----: | ----------: | -----: | ---------------: | --------------: | ------------- | ------------------------------------------ |
|  +5.2% | +160.71 KiB | 100.0% | 3 MiB → 3.16 MiB | 84,655 → 58,610 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `readFileSync` (`node:fs`)

| Change |        Delta |      % |                Size | Objects | Caller            | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |            % |          Size |     Objects | Caller                        | Location                                      |
| ------: | -----------: | -----------: | ------------: | ----------: | ----------------------------- | --------------------------------------------- |
| removed | -111.518 MiB | 96.1% → 0.0% | 112 MiB → 0 B | 562,190 → 0 | `resolveObjectTypeMembers`    | `./node_modules/typescript/lib/typescript.js` |
| removed |     -4.5 MiB |  3.9% → 0.0% | 4.5 MiB → 0 B |  22,689 → 0 | `resolveAnonymousTypeMembers` | `./node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|  Change |       Delta |             % |              Size |           Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ----------------: | ----------------: | ------------------------------- | --------------------------------------------- |
| removed | -19.003 MiB |  27.9% → 0.0% |      19 MiB → 0 B |       195,772 → 0 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|  -22.0% |    -6.5 MiB | 43.4% → 71.9% | 29.5 MiB → 23 MiB | 319,958 → 326,853 | `createSymbolTable`             | `./node_modules/typescript/lib/typescript.js` |
|  -50.0% |      -6 MiB | 17.6% → 18.8% |    12 MiB → 6 MiB |  147,474 → 67,270 | `bindContainer`                 | `./node_modules/typescript/lib/typescript.js` |
|  -80.0% |      -2 MiB |   3.7% → 1.6% | 2.5 MiB → 512 KiB |    17,249 → 3,450 | `bindFunctionOrConstructorType` | `./node_modules/typescript/lib/typescript.js` |
| removed |    -1.5 MiB |   2.2% → 0.0% |     1.5 MiB → 0 B |        36,220 → 0 | `bindAnonymousTypeWorker`       | `./node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |           Size |     Objects | Caller              | Location                                      |
| ------: | ----------: | ------------: | -------------: | ----------: | ------------------- | --------------------------------------------- |
| removed | -25.503 MiB | 100.0% → 0.0% | 25.5 MiB → 0 B | 159,182 → 0 | `parseNonArrayType` | `./node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |              Size |           Objects | Caller                                    | Location                                      |
| -----: | -----------: | ------------: | ----------------: | ----------------: | ----------------------------------------- | --------------------------------------------- |
| -52.2% |  -17.502 MiB | 72.0% → 76.2% | 33.5 MiB → 16 MiB | 329,923 → 156,427 | `declareSymbolAndAddToSymbolTable`        | `./node_modules/typescript/lib/typescript.js` |
| -85.0% |   -8.501 MiB |  21.5% → 7.1% |  10 MiB → 1.5 MiB |  126,681 → 11,568 | `declareModuleMember`                     | `./node_modules/typescript/lib/typescript.js` |
| +50.0% | +512.078 KiB |   2.2% → 7.1% |   1 MiB → 1.5 MiB |   13,219 → 11,567 | `bindVariableDeclarationOrBindingElement` | `./node_modules/typescript/lib/typescript.js` |
|    ~0% |        -88 B |   2.2% → 4.8% |             1 MiB |    7,712 → 13,219 | `declareClassMember`                      | `./node_modules/typescript/lib/typescript.js` |
|    ~0% |        +48 B |   2.2% → 4.8% |             1 MiB |    7,711 → 13,219 | `bindBlockScopedDeclaration`              | `./node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|  Change |       Delta |             % |                Size |       Objects | Caller                          | Location                                      |
| ------: | ----------: | ------------: | ------------------: | ------------: | ------------------------------- | --------------------------------------------- |
| removed | -25.062 MiB |  31.9% → 0.0% |      25.1 MiB → 0 B |    16,016 → 0 | `createInstantiatedSymbolTable` | `./node_modules/typescript/lib/typescript.js` |
|     new | +11.527 MiB |  0.0% → 21.4% |      0 B → 11.5 MiB |     0 → 6,598 | `resolveObjectTypeMembers`      | `./node_modules/typescript/lib/typescript.js` |
|  -44.8% |  -6.515 MiB | 18.5% → 14.9% | 14.5 MiB → 8.02 MiB | 8,320 → 4,591 | `addInheritedMembers`           | `./node_modules/typescript/lib/typescript.js` |
|  -42.0% |  -3.901 MiB | 11.8% → 10.0% |   9.3 MiB → 5.4 MiB |      17 → 167 | `resetMaybeStack`               | `./node_modules/typescript/lib/typescript.js` |
|  -46.0% |  -2.578 MiB |   7.1% → 5.6% |  5.6 MiB → 3.02 MiB | 9,377 → 6,428 | `declareSymbol`                 | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |              Size |          Objects | Caller                           | Location                                      |
| ------: | ----------: | ------------: | ----------------: | ---------------: | -------------------------------- | --------------------------------------------- |
|  -75.0% | -13.501 MiB | 34.3% → 15.8% |  18 MiB → 4.5 MiB | 112,362 → 28,090 | `createBaseDeclaration`          | `./node_modules/typescript/lib/typescript.js` |
| removed |  -7.001 MiB |  13.3% → 0.0% |       7 MiB → 0 B |       43,698 → 0 | `createPropertyAccessExpression` | `./node_modules/typescript/lib/typescript.js` |
|  -80.0% |      -6 MiB |  14.3% → 5.3% | 7.5 MiB → 1.5 MiB |   46,817 → 9,364 | `doJSDocScan`                    | `./node_modules/typescript/lib/typescript.js` |
|     new |    +5.5 MiB |  0.0% → 19.3% |     0 B → 5.5 MiB |       0 → 34,333 | `createStringLiteral`            | `./node_modules/typescript/lib/typescript.js` |
|  -57.1% |      -2 MiB |   6.7% → 5.3% | 3.5 MiB → 1.5 MiB |   21,848 → 9,363 | `createUnionTypeNode`            | `./node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |            % |          Size |     Objects | Caller                     | Location                                      |
| ------: | ----------: | -----------: | ------------: | ----------: | -------------------------- | --------------------------------------------- |
| removed | -15.002 MiB | 60.0% → 0.0% |  15 MiB → 0 B | 131,096 → 0 | `parseBindingIdentifier`   | `./node_modules/typescript/lib/typescript.js` |
| removed |    -5.5 MiB | 22.0% → 0.0% | 5.5 MiB → 0 B |  48,068 → 0 | `parsePrimaryExpression`   | `./node_modules/typescript/lib/typescript.js` |
|     new |      +5 MiB | 0.0% → 43.5% |   0 B → 5 MiB |  0 → 43,698 | `parseIdentifierOrPattern` | `./node_modules/typescript/lib/typescript.js` |
| removed |      -2 MiB |  8.0% → 0.0% |   2 MiB → 0 B |  17,480 → 0 | `parseTypeParameter`       | `./node_modules/typescript/lib/typescript.js` |
|     new |    +1.5 MiB | 0.0% → 13.0% | 0 B → 1.5 MiB |  0 → 13,110 | `parseVariableDeclaration` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |             Size |         Objects | Caller             | Location                                      |
| -----: | ----------: | -----: | ---------------: | --------------: | ------------------ | --------------------------------------------- |
| -96.4% | -13.502 MiB | 100.0% | 14 MiB → 512 KiB | 122,355 → 4,370 | `createIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:53728:21`)

| Change |       Delta |      % |             Size |          Objects | Caller    | Location    |
| -----: | ----------: | -----: | ---------------: | ---------------: | --------- | ----------- |
| -59.5% | -12.504 MiB | 100.0% | 21 MiB → 8.5 MiB | 146,423 → 69,217 | `forEach` | `<unknown>` |

##### `slice` (`node:buffer`)

| Change |       Delta |      % |               Size | Objects | Caller     | Location      |
| -----: | ----------: | -----: | -----------------: | ------: | ---------- | ------------- |
| -95.3% | -11.892 MiB | 100.0% | 12.5 MiB → 601 KiB | 326 → 2 | `toString` | `node:buffer` |

##### `parseNonArrayType` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |             Size |          Objects | Caller                          | Location                                      |
| -----: | ----------: | -----: | ---------------: | ---------------: | ------------------------------- | --------------------------------------------- |
| -60.0% | -10.501 MiB | 100.0% | 17.5 MiB → 7 MiB | 109,242 → 43,697 | `parseIntersectionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |             % |                Size |           Objects | Caller                       | Location                                      |
| -----: | -----: | ------------: | ------------------: | ----------------: | ---------------------------- | --------------------------------------------- |
| -35.3% | -9 MiB | 92.7% → 94.3% | 25.5 MiB → 16.5 MiB | 205,556 → 131,079 | `getObjectTypeInstantiation` | `./node_modules/typescript/lib/typescript.js` |
| -50.0% | -1 MiB |   7.3% → 5.7% |       2 MiB → 1 MiB |    14,698 → 5,958 | `instantiateMappedType`      | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |              Size |          Objects | Caller                  | Location                                      |
| ------: | -----------: | -------------: | ----------------: | ---------------: | ----------------------- | --------------------------------------------- |
|  -52.7% |   -9.496 MiB | 97.3% → 100.0% | 18 MiB → 8.51 MiB | 160,890 → 67,532 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.015 KiB |    2.7% → 0.0% |     512 KiB → 0 B |        2,979 → 0 | `createMarkerType`      | `./node_modules/typescript/lib/typescript.js` |

##### `toString` (`node:buffer`)

|  Change |     Delta |             % |           Size | Objects | Caller     | Location                                      |
| ------: | --------: | ------------: | -------------: | ------: | ---------- | --------------------------------------------- |
| removed | -9.91 MiB | 100.0% → 0.0% | 9.91 MiB → 0 B | 309 → 0 | `readFile` | `./node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |      % |             Size |          Objects | Caller        | Location                                      |
| -----: | -------: | -----: | ---------------: | ---------------: | ------------- | --------------------------------------------- |
| -55.9% | -9.5 MiB | 100.0% | 17 MiB → 7.5 MiB | 202,577 → 89,371 | `createToken` | `./node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|  Change |    Delta |              % |            Size |        Objects | Caller             | Location                                      |
| ------: | -------: | -------------: | --------------: | -------------: | ------------------ | --------------------------------------------- |
|  -78.6% | -5.5 MiB | 77.8% → 100.0% | 7 MiB → 1.5 MiB | 57,137 → 4,884 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| removed |   -2 MiB |   22.2% → 0.0% |     2 MiB → 0 B |     11,794 → 0 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |               Size |          Objects | Caller                  | Location                                      |
| -----: | -----: | -----: | -----------------: | ---------------: | ----------------------- | --------------------------------------------- |
| -56.0% | -7 MiB | 100.0% | 12.5 MiB → 5.5 MiB | 120,157 → 86,394 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|  Change |        Delta |              % |              Size |        Objects | Caller                  | Location                                               |
| ------: | -----------: | -------------: | ----------------: | -------------: | ----------------------- | ------------------------------------------------------ |
| removed |     -3.5 MiB |   50.0% → 0.0% |     3.5 MiB → 0 B |     24,149 → 0 | `getSignaturesOfSymbol` | `./node_modules/typescript/lib/typescript.js`          |
|  -66.7% |       -1 MiB | 21.4% → 100.0% | 1.5 MiB → 512 KiB | 10,350 → 3,450 | `getIntersectionType`   | `./node_modules/typescript/lib/typescript.js`          |
| removed | -512.226 KiB |    7.1% → 0.0% |     512 KiB → 0 B |      1,457 → 0 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:38597:39` |
| removed | -512.109 KiB |    7.1% → 0.0% |     512 KiB → 0 B |      3,450 → 0 | `(anonymous)`           | `./node_modules/typescript/lib/typescript.js:61411:62` |
| removed | -512.109 KiB |    7.1% → 0.0% |     512 KiB → 0 B |      3,450 → 0 | `arrayFrom`             | `./node_modules/typescript/lib/typescript.js`          |

##### `createCallExpression` (`./node_modules/typescript/lib/typescript.js`)

|  Change |  Delta |             % |        Size |    Objects | Caller                                | Location                                      |
| ------: | -----: | ------------: | ----------: | ---------: | ------------------------------------- | --------------------------------------------- |
| removed | -6 MiB | 100.0% → 0.0% | 6 MiB → 0 B | 37,454 → 0 | `parseLeftHandSideExpressionOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |               Size |           Objects | Caller                  | Location                                      |
| -----: | ---------: | -----: | -----------------: | ----------------: | ----------------------- | --------------------------------------------- |
| -44.4% | -5.999 MiB | 100.0% | 13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `instantiateTypeWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`./node_modules/typescript/lib/typescript.js`)

|  Change |    Delta |             % |              Size |         Objects | Caller                   | Location                                      |
| ------: | -------: | ------------: | ----------------: | --------------: | ------------------------ | --------------------------------------------- |
| removed | -2.5 MiB |  22.7% → 0.0% |     2.5 MiB → 0 B |      73,186 → 0 | `doJSDocScan`            | `./node_modules/typescript/lib/typescript.js` |
|  -50.0% |   -2 MiB |         36.4% |     4 MiB → 2 MiB | 81,928 → 59,532 | `parseList`              | `./node_modules/typescript/lib/typescript.js` |
|  -40.0% |   -1 MiB | 22.7% → 27.3% | 2.5 MiB → 1.5 MiB | 90,116 → 49,155 | `parseModifiers`         | `./node_modules/typescript/lib/typescript.js` |
|     ~0% |    +32 B | 18.2% → 36.4% |             2 MiB | 40,964 → 32,772 | `parseUnionTypeOrHigher` | `./node_modules/typescript/lib/typescript.js` |

##### `resolveTypeReferenceMembers` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |            Size |         Objects | Caller                         | Location                                      |
| ------: | -----------: | -------------: | --------------: | --------------: | ------------------------------ | --------------------------------------------- |
|  -50.0% |     -2.5 MiB | 62.5% → 100.0% | 5 MiB → 2.5 MiB | 55,256 → 14,683 | `resolveStructuredTypeMembers` | `./node_modules/typescript/lib/typescript.js` |
| removed |       -2 MiB |   25.0% → 0.0% |     2 MiB → 0 B |      25,748 → 0 | `isWeakType`                   | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.039 KiB |    6.2% → 0.0% |   512 KiB → 0 B |       3,121 → 0 | `getSingleSignature`           | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB |    6.2% → 0.0% |   512 KiB → 0 B |      16,385 → 0 | `propertiesIdenticalTo`        | `./node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |      % |          Size |          Objects | Caller        | Location                                      |
| -----: | -----: | -----: | ------------: | ---------------: | ------------- | --------------------------------------------- |
| -71.4% | -5 MiB | 100.0% | 7 MiB → 2 MiB | 243,042 → 71,001 | `isRelatedTo` | `./node_modules/typescript/lib/typescript.js` |

##### `scan` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |            % |          Size |    Objects | Caller                                      | Location                                      |
| ------: | -----------: | -----------: | ------------: | ---------: | ------------------------------------------- | --------------------------------------------- |
| removed |       -2 MiB | 36.4% → 0.0% |   2 MiB → 0 B | 71,001 → 0 | `nextToken`                                 | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB | 18.2% → 0.0% |   1 MiB → 0 B | 32,770 → 0 | `parsePropertyOrMethodSignature`            | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB | 18.2% → 0.0% |   1 MiB → 0 B | 38,231 → 0 | `parseSemicolonAfterPropertyName`           | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB |  9.1% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `nextTokenIsOnSameLineAndCanFollowModifier` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB |  9.1% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `parseTokenNode`                            | `./node_modules/typescript/lib/typescript.js` |

##### `getResolvedSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |                Size | Objects | Caller            | Location                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | --------------------------------------------- |
| -27.4% | -4.703 MiB | 100.0% | 17.2 MiB → 12.5 MiB |  32,776 | `checkIdentifier` | `./node_modules/typescript/lib/typescript.js` |

##### `mapDefined` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |              Size |         Objects | Caller                           | Location                                      |
| ------: | -----------: | -------------: | ----------------: | --------------: | -------------------------------- | --------------------------------------------- |
|  -66.7% |       -3 MiB | 75.0% → 100.0% | 4.5 MiB → 1.5 MiB | 56,919 → 10,350 | `parsePropertyOrMethodSignature` | `./node_modules/typescript/lib/typescript.js` |
| removed |       -1 MiB |   16.7% → 0.0% |       1 MiB → 0 B |       6,900 → 0 | `parseDeclarationWorker`         | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.109 KiB |    8.3% → 0.0% |     512 KiB → 0 B |       3,450 → 0 | `withJSDoc`                      | `./node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|  Change |        Delta |            % |          Size |    Objects | Caller             | Location                                      |
| ------: | -----------: | -----------: | ------------: | ---------: | ------------------ | --------------------------------------------- |
| removed |     -2.5 MiB | 83.3% → 0.0% | 2.5 MiB → 0 B | 81,925 → 0 | `doJSDocScan`      | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB | 16.7% → 0.0% | 512 KiB → 0 B | 16,385 → 0 | `parseTagComments` | `./node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|  Change |        Delta |              % |          Size |         Objects | Caller                     | Location                                      |
| ------: | -----------: | -------------: | ------------: | --------------: | -------------------------- | --------------------------------------------- |
| removed | -518.078 KiB |   25.2% → 0.0% | 518 KiB → 0 B |          71 → 0 | `getAdjustedTypeWithFacts` | `./node_modules/typescript/lib/typescript.js` |
| removed | -514.421 KiB |   25.0% → 0.0% | 514 KiB → 0 B |         146 → 0 | `fillMissingTypeArguments` | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.031 KiB |   24.9% → 0.0% | 512 KiB → 0 B |      16,385 → 0 | `filter`                   | `./node_modules/typescript/lib/typescript.js` |
|     ~0% |        -16 B | 24.9% → 100.0% |       512 KiB | 16,385 → 21,846 | `addRange`                 | `./node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

| Change |        Delta |              % |              Size |        Objects | Caller               | Location                                      |
| -----: | -----------: | -------------: | ----------------: | -------------: | -------------------- | --------------------------------------------- |
| -80.0% |       -2 MiB | 100.0% → 50.0% | 2.5 MiB → 512 KiB | 17,250 → 3,450 | `getUnionTypeWorker` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.109 KiB |   0.0% → 50.0% |     0 B → 512 KiB |      0 → 3,450 | `addTypesToUnion`    | `./node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|  Change |  Delta |             % |        Size |   Objects | Caller                 | Location                                      |
| ------: | -----: | ------------: | ----------: | --------: | ---------------------- | --------------------------------------------- |
| removed | -1 MiB | 100.0% → 0.0% | 1 MiB → 0 B | 5,901 → 0 | `getCanonicalFileName` | `./node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

| Change |        Delta |      % |            Size |         Objects | Caller                | Location                                      |
| -----: | -----------: | -----: | --------------: | --------------: | --------------------- | --------------------------------------------- |
| -50.0% | -512.015 KiB | 100.0% | 1 MiB → 512 KiB | 43,692 → 21,846 | `getIntersectionType` | `./node_modules/typescript/lib/typescript.js` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |            % |                Size |           Objects | Function                                           | Location                                               |
| -------: | -----------: | -----------: | ------------------: | ----------------: | -------------------------------------------------- | ------------------------------------------------------ |
| +4673.4% | +187.394 MiB | 0.4% → 34.9% |  4.01 MiB → 191 MiB | 9,594 → 1,391,082 | `resolveSignature`                                 | `./node_modules/typescript/lib/typescript.js`          |
| +2666.3% |  +67.374 MiB | 0.3% → 12.8% | 2.53 MiB → 69.9 MiB |  12,820 → 557,035 | `checkTypeReferenceOrImport`                       | `./node_modules/typescript/lib/typescript.js`          |
|  +213.0% |  +49.007 MiB | 2.4% → 13.1% |     23 MiB → 72 MiB | 141,172 → 371,428 | `instantiateSymbol`                                | `./node_modules/typescript/lib/typescript.js`          |
|      new |  +28.067 MiB |  0.0% → 5.1% |      0 B → 28.1 MiB |       0 → 307,980 | `parseVariableDeclarationList`                     | `./node_modules/typescript/lib/typescript.js`          |
|      new |  +23.003 MiB |  0.0% → 4.2% |        0 B → 23 MiB |       0 → 262,677 | `parseCallExpressionRest`                          | `./node_modules/typescript/lib/typescript.js`          |
|   +68.3% |  +21.566 MiB |  3.3% → 9.7% | 31.6 MiB → 53.1 MiB | 270,691 → 406,113 | `checkTypeArgumentConstraints`                     | `./node_modules/typescript/lib/typescript.js`          |
|      new |   +9.001 MiB |  0.0% → 1.6% |         0 B → 9 MiB |        0 → 55,448 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:32748:71` |
|      new |   +7.501 MiB |  0.0% → 1.4% |       0 B → 7.5 MiB |        0 → 65,547 | `parseEntityNameOfTypeReference`                   | `./node_modules/typescript/lib/typescript.js`          |
|   +52.1% |   +7.196 MiB |  1.4% → 3.8% |   13.8 MiB → 21 MiB | 101,360 → 170,679 | `parseIdentifierName`                              | `./node_modules/typescript/lib/typescript.js`          |
|   +62.0% |   +6.514 MiB |  1.1% → 3.1% |   10.5 MiB → 17 MiB |   49,801 → 85,716 | `applyToParameterTypes`                            | `./node_modules/typescript/lib/typescript.js`          |
|      new |   +6.002 MiB |  0.0% → 1.1% |         0 B → 6 MiB |        0 → 46,184 | `parseIdentifierOrPattern`                         | `./node_modules/typescript/lib/typescript.js`          |
|   +55.0% |   +5.512 MiB |  1.0% → 2.8% |   10 MiB → 15.5 MiB |   43,843 → 56,150 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js`          |
|      new |     +5.5 MiB |  0.0% → 1.0% |       0 B → 5.5 MiB |        0 → 34,333 | `createStringLiteral`                              | `./node_modules/typescript/lib/typescript.js`          |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`                                      | `node:internal/modules/cjs/loader:1878:37`             |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`                                      | `node:internal/modules/cjs/loader:1490:33`             |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`                                      | `node:internal/modules/cjs/loader:1193:24`             |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`                                      | `node:internal/modules/cjs/loader:1519:36`             |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `wrapModuleLoad`                                   | `node:internal/modules/cjs/loader`                     |
|   +26.0% |   +3.314 MiB |  1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `require`                                          | `node:internal/modules/helpers`                        |
|   +71.3% |   +3.206 MiB |  0.5% → 1.4% |  4.5 MiB → 7.71 MiB | 125,617 → 141,063 | `(anonymous)`                                      | `node:internal/modules/cjs/loader:1731:37`             |

##### Third-party

|   Change |        Delta |            % |                Size |           Objects | Function                                           | Location                                                          |
| -------: | -----------: | -----------: | ------------------: | ----------------: | -------------------------------------------------- | ----------------------------------------------------------------- |
| +4673.4% | +187.394 MiB | 0.4% → 34.9% |  4.01 MiB → 191 MiB | 9,594 → 1,391,082 | `resolveSignature`                                 | `./node_modules/typescript/lib/typescript.js`                     |
| +2666.3% |  +67.374 MiB | 0.3% → 12.8% | 2.53 MiB → 69.9 MiB |  12,820 → 557,035 | `checkTypeReferenceOrImport`                       | `./node_modules/typescript/lib/typescript.js`                     |
|  +213.0% |  +49.007 MiB | 2.4% → 13.1% |     23 MiB → 72 MiB | 141,172 → 371,428 | `instantiateSymbol`                                | `./node_modules/typescript/lib/typescript.js`                     |
|      new |  +28.067 MiB |  0.0% → 5.1% |      0 B → 28.1 MiB |       0 → 307,980 | `parseVariableDeclarationList`                     | `./node_modules/typescript/lib/typescript.js`                     |
|      new |  +23.003 MiB |  0.0% → 4.2% |        0 B → 23 MiB |       0 → 262,677 | `parseCallExpressionRest`                          | `./node_modules/typescript/lib/typescript.js`                     |
|   +68.3% |  +21.566 MiB |  3.3% → 9.7% | 31.6 MiB → 53.1 MiB | 270,691 → 406,113 | `checkTypeArgumentConstraints`                     | `./node_modules/typescript/lib/typescript.js`                     |
|      new |   +9.001 MiB |  0.0% → 1.6% |         0 B → 9 MiB |        0 → 55,448 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:32748:71`            |
|      new |   +7.501 MiB |  0.0% → 1.4% |       0 B → 7.5 MiB |        0 → 65,547 | `parseEntityNameOfTypeReference`                   | `./node_modules/typescript/lib/typescript.js`                     |
|   +52.1% |   +7.196 MiB |  1.4% → 3.8% |   13.8 MiB → 21 MiB | 101,360 → 170,679 | `parseIdentifierName`                              | `./node_modules/typescript/lib/typescript.js`                     |
|   +62.0% |   +6.514 MiB |  1.1% → 3.1% |   10.5 MiB → 17 MiB |   49,801 → 85,716 | `applyToParameterTypes`                            | `./node_modules/typescript/lib/typescript.js`                     |
|      new |   +6.002 MiB |  0.0% → 1.1% |         0 B → 6 MiB |        0 → 46,184 | `parseIdentifierOrPattern`                         | `./node_modules/typescript/lib/typescript.js`                     |
|   +55.0% |   +5.512 MiB |  1.0% → 2.8% |   10 MiB → 15.5 MiB |   43,843 → 56,150 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js`                     |
|      new |     +5.5 MiB |  0.0% → 1.0% |       0 B → 5.5 MiB |        0 → 34,333 | `createStringLiteral`                              | `./node_modules/typescript/lib/typescript.js`                     |
|  +203.3% |   +3.049 MiB |  0.2% → 0.8% |  1.5 MiB → 4.55 MiB |   40,962 → 82,453 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:1:1`                 |
|  +305.0% |   +3.049 MiB |  0.1% → 0.7% |    1 MiB → 4.05 MiB |   19,116 → 60,607 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:16:15`               |
|  +100.5% |   +3.015 MiB |  0.3% → 1.1% |    3 MiB → 6.02 MiB |   38,562 → 53,124 | `getMinArgumentCount`                              | `./node_modules/typescript/lib/typescript.js`                     |
|      new |   +3.004 MiB |  0.0% → 0.5% |         0 B → 3 MiB |        0 → 21,631 | `parseListElement`                                 | `./node_modules/typescript/lib/typescript.js`                     |
|      new |       +3 MiB |  0.0% → 0.5% |         0 B → 3 MiB |        0 → 18,727 | `createBaseCallExpression`                         | `./node_modules/typescript/lib/typescript.js`                     |
|  +518.8% |   +2.594 MiB |  0.1% → 0.6% |  512 KiB → 3.09 MiB |    3,450 → 28,337 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:63799:42 → 65054:42` |
|  +172.9% |   +2.594 MiB |  0.2% → 0.7% |  1.5 MiB → 4.09 MiB |   23,285 → 66,568 | `distributeObjectOverIndexType`                    | `./node_modules/typescript/lib/typescript.js`                     |

##### Standard library

|  Change |        Delta |           % |                Size |           Objects | Function          | Location                                   |
| ------: | -----------: | ----------: | ------------------: | ----------------: | ----------------- | ------------------------------------------ |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  +26.0% |   +3.314 MiB | 1.3% → 2.9% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `require`         | `node:internal/modules/helpers`            |
|  +71.3% |   +3.206 MiB | 0.5% → 1.4% |  4.5 MiB → 7.71 MiB | 125,617 → 141,063 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
| +110.3% |  +567.07 KiB | 0.1% → 0.2% |  514 KiB → 1.06 MiB |          102 → 27 | `add`             | `<unknown>`                                |
|   +5.2% |  +160.71 KiB | 0.3% → 0.6% |    3 MiB → 3.16 MiB |   84,655 → 58,610 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|   +1.3% | +110.078 KiB | 0.9% → 1.5% | 8.27 MiB → 8.37 MiB |                 1 | `readFileSync`    | `node:fs`                                  |
|   +1.3% | +110.078 KiB | 0.9% → 1.5% | 8.27 MiB → 8.37 MiB |                 1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|   +1.3% | +110.078 KiB | 0.9% → 1.5% | 8.27 MiB → 8.37 MiB |                 1 | `loadSource`      | `node:internal/modules/cjs/loader`         |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                                            |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ------------------------------------------------------------------- |
| -44.2% | -328.269 MiB | 77.7% → 75.8% | 743 MiB → 415 MiB | 6,780,010 → 3,427,910 | `next`                                     | `<unknown>`                                                         |
| -43.8% | -327.269 MiB | 78.2% → 76.8% | 748 MiB → 421 MiB | 6,806,339 → 3,523,104 | `typeCheckProject`                         | `./tsc-workload.mjs`                                                |
| -45.9% |  -324.65 MiB | 73.9% → 69.7% | 707 MiB → 382 MiB | 6,516,443 → 3,162,546 | `(anonymous)`                              | `<unknown>`                                                         |
| -43.8% | -323.708 MiB | 77.2% → 75.8% | 739 MiB → 415 MiB | 6,750,414 → 3,491,463 | `(anonymous)`                              | `./datadog-pprof-heap.mjs:1:1`                                      |
| -44.4% | -318.202 MiB | 75.0% → 72.9% | 717 MiB → 399 MiB | 6,577,351 → 3,257,942 | `run`                                      | `node:internal/modules/esm/module_job`                              |
| -42.5% | -223.053 MiB | 54.9% → 55.1% | 525 MiB → 302 MiB | 4,534,130 → 2,327,177 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
| -42.4% | -221.551 MiB | 54.6% → 54.8% | 522 MiB → 301 MiB | 4,510,993 → 2,317,156 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`                       |
| -42.4% | -219.047 MiB | 54.0% → 54.3% | 517 MiB → 298 MiB | 4,458,246 → 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`                       |
| -42.4% | -217.095 MiB | 53.5% → 53.8% | 512 MiB → 295 MiB | 4,428,120 → 2,284,781 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -42.5% |   -215.6 MiB | 53.1% → 53.3% | 508 MiB → 292 MiB | 4,407,390 → 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`                       |
| -42.6% | -211.543 MiB | 52.0% → 52.1% | 497 MiB → 285 MiB | 4,341,884 → 2,211,927 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`                       |
| -42.2% | -207.087 MiB | 51.3% → 51.7% | 491 MiB → 283 MiB | 4,308,536 → 2,202,967 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
| -42.3% | -202.638 MiB | 50.1% → 50.4% | 479 MiB → 276 MiB | 4,222,403 → 2,164,121 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`                       |
| -43.0% |  -201.14 MiB | 48.9% → 48.7% | 468 MiB → 267 MiB | 4,101,194 → 2,059,453 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`                       |
| -42.8% | -196.499 MiB |         48.0% | 459 MiB → 263 MiB | 4,033,135 → 2,038,264 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
| -45.5% | -187.973 MiB | 43.2% → 41.1% | 413 MiB → 225 MiB | 3,795,099 → 2,028,375 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`                       |
| -41.0% | -179.061 MiB | 45.7% → 47.1% | 437 MiB → 258 MiB | 3,499,983 → 1,873,577 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`                       |
| -40.3% | -177.888 MiB | 46.2% → 48.2% | 442 MiB → 264 MiB | 3,661,880 → 1,978,036 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js`                       |
| -40.2% | -176.382 MiB | 45.9% → 47.9% | 439 MiB → 262 MiB | 3,658,140 → 1,968,615 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js`                       |
| -40.6% | -174.557 MiB | 45.0% → 46.7% | 430 MiB → 256 MiB | 3,460,664 → 1,862,321 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`                       |

##### Third-party

|  Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                                            |
| ------: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|  -42.5% | -223.053 MiB | 54.9% → 55.1% | 525 MiB → 302 MiB | 4,534,130 → 2,327,177 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |
|  -42.4% | -221.551 MiB | 54.6% → 54.8% | 522 MiB → 301 MiB | 4,510,993 → 2,317,156 | `runWithCancellationToken`                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.4% | -219.047 MiB | 54.0% → 54.3% | 517 MiB → 298 MiB | 4,458,246 → 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.4% | -217.095 MiB | 53.5% → 53.8% | 512 MiB → 295 MiB | 4,428,120 → 2,284,781 | `getAndCacheDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.5% |   -215.6 MiB | 53.1% → 53.3% | 508 MiB → 292 MiB | 4,407,390 → 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.6% | -211.543 MiB | 52.0% → 52.1% | 497 MiB → 285 MiB | 4,341,884 → 2,211,927 | `getSemanticDiagnosticsForFile`            | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.2% | -207.087 MiB | 51.3% → 51.7% | 491 MiB → 283 MiB | 4,308,536 → 2,202,967 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |
|  -42.3% | -202.638 MiB | 50.1% → 50.4% | 479 MiB → 276 MiB | 4,222,403 → 2,164,121 | `flatMap`                                  | `./node_modules/typescript/lib/typescript.js`                       |
|  -43.0% |  -201.14 MiB | 48.9% → 48.7% | 468 MiB → 267 MiB | 4,101,194 → 2,059,453 | `getDiagnosticsHelper`                     | `./node_modules/typescript/lib/typescript.js`                       |
|  -42.8% | -196.499 MiB |         48.0% | 459 MiB → 263 MiB | 4,033,135 → 2,038,264 | `getSemanticDiagnostics`                   | `./node_modules/typescript/lib/typescript.js`                       |
|  -45.5% | -187.973 MiB | 43.2% → 41.1% | 413 MiB → 225 MiB | 3,795,099 → 2,028,375 | `forEach`                                  | `./node_modules/typescript/lib/typescript.js`                       |
|  -41.0% | -179.061 MiB | 45.7% → 47.1% | 437 MiB → 258 MiB | 3,499,983 → 1,873,577 | `checkSourceFileWorker`                    | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.3% | -177.888 MiB | 46.2% → 48.2% | 442 MiB → 264 MiB | 3,661,880 → 1,978,036 | `checkSourceElementWorker`                 | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.2% | -176.382 MiB | 45.9% → 47.9% | 439 MiB → 262 MiB | 3,658,140 → 1,968,615 | `checkSourceElement`                       | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.6% | -174.557 MiB | 45.0% → 46.7% | 430 MiB → 256 MiB | 3,460,664 → 1,862,321 | `checkSourceFile`                          | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.8% | -174.056 MiB | 44.6% → 46.2% | 427 MiB → 253 MiB | 3,437,691 → 1,808,711 | `checkSourceFileWithEagerDiagnostics`      | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.5% | -169.011 MiB | 43.6% → 45.2% | 417 MiB → 248 MiB | 3,351,125 → 1,767,319 | `getDiagnostics2`                          | `./node_modules/typescript/lib/typescript.js`                       |
|  -40.1% |  -168.56 MiB | 43.9% → 46.0% | 420 MiB → 252 MiB | 3,376,676 → 1,792,008 | `getDiagnosticsWorker`                     | `./node_modules/typescript/lib/typescript.js`                       |
| removed | -160.585 MiB |  16.8% → 0.0% |     161 MiB → 0 B |           796,765 → 0 | `createInstantiatedSymbolTable`            | `./node_modules/typescript/lib/typescript.js`                       |
|  -46.9% | -145.949 MiB | 32.5% → 30.2% | 311 MiB → 165 MiB | 3,035,196 → 1,553,622 | `findSourceFileWorker`                     | `./node_modules/typescript/lib/typescript.js`                       |

##### Standard library

|  Change |          Delta |             % |               Size |               Objects | Function   | Location                               |
| ------: | -------------: | ------------: | -----------------: | --------------------: | ---------- | -------------------------------------- |
|  -44.2% |   -328.269 MiB | 77.7% → 75.8% |  743 MiB → 415 MiB | 6,780,010 → 3,427,910 | `next`     | `<unknown>`                            |
|  -44.4% |   -318.202 MiB | 75.0% → 72.9% |  717 MiB → 399 MiB | 6,577,351 → 3,257,942 | `run`      | `node:internal/modules/esm/module_job` |
|  -39.9% |   -113.891 MiB | 29.8% → 31.3% |  286 MiB → 172 MiB | 2,289,619 → 1,128,619 | `forEach`  | `<unknown>`                            |
|  -52.9% |    -36.005 MiB |   7.1% → 5.8% |    68 MiB → 32 MiB |     766,364 → 440,364 | `Map`      | `<unknown>`                            |
|  -31.3% |    -24.634 MiB |   8.2% → 9.8% |  78.6 MiB → 54 MiB |       45,581 → 26,191 | `set`      | `<unknown>`                            |
|  -97.4% |    -21.802 MiB |   2.3% → 0.1% | 22.4 MiB → 601 KiB |               635 → 2 | `toString` | `node:buffer`                          |
|  -95.3% |    -11.892 MiB |   1.3% → 0.1% | 12.5 MiB → 601 KiB |               326 → 2 | `slice`    | `node:buffer`                          |
|  -83.3% |     -7.501 MiB |   0.9% → 0.3% |    9 MiB → 1.5 MiB |        68,931 → 4,884 | `join`     | `<unknown>`                            |
|  -92.9% |     -6.501 MiB |   0.7% → 0.1% |    7 MiB → 512 KiB |        45,977 → 3,450 | `push`     | `<unknown>`                            |
| removed |         -3 MiB |   0.3% → 0.0% |        3 MiB → 0 B |            98,310 → 0 | `trimEnd`  | `<unknown>`                            |
|  -75.1% |     -1.508 MiB |   0.2% → 0.1% | 2.01 MiB → 512 KiB |       32,987 → 21,846 | `slice`    | `<unknown>`                            |
|  -60.0% |       -1.5 MiB |   0.3% → 0.2% |    2.5 MiB → 1 MiB |        17,250 → 6,900 | `splice`   | `<unknown>`                            |
|  -66.6% | -1,023.796 KiB |   0.2% → 0.1% |  1.5 MiB → 514 KiB |            5,996 → 63 | `replace`  | `<unknown>`                            |
|  -50.0% |   -512.015 KiB |          0.1% |    1 MiB → 512 KiB |       43,692 → 21,846 | `toString` | `<unknown>`                            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `resolveSignature` (`./node_modules/typescript/lib/typescript.js`)

|   Change |        Delta |             % |               Size |           Objects | Callee                  | Location                                      |
| -------: | -----------: | ------------: | -----------------: | ----------------: | ----------------------- | --------------------------------------------- |
| +5805.8% | +174.633 MiB | 75.0% → 92.8% | 3.01 MiB → 178 MiB | 9,244 → 1,284,789 | `resolveCallExpression` | `./node_modules/typescript/lib/typescript.js` |
| +1373.0% |  +13.756 MiB |  25.0% → 7.7% |   1 MiB → 14.8 MiB |     350 → 115,196 | `resolveNewExpression`  | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeReferenceOrImport` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |            % |             Size |     Objects | Callee                         | Location                                      |
| ------: | ----------: | -----------: | ---------------: | ----------: | ------------------------------ | --------------------------------------------- |
|     new | +51.643 MiB | 0.0% → 73.9% |   0 B → 51.6 MiB | 0 → 401,936 | `checkTypeArgumentConstraints` | `./node_modules/typescript/lib/typescript.js` |
|     new | +17.256 MiB | 0.0% → 24.7% |   0 B → 17.3 MiB | 0 → 151,209 | `getTypeFromTypeNodeWorker`    | `./node_modules/typescript/lib/typescript.js` |
| removed |  -1.515 MiB | 60.0% → 0.0% |   1.52 MiB → 0 B |  12,760 → 0 | `getTypeFromTypeNode`          | `./node_modules/typescript/lib/typescript.js` |
|   -1.1% | -10.984 KiB | 40.0% → 1.4% | 1.01 MiB → 1 MiB |  60 → 3,890 | `addLazyDiagnostic`            | `./node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`./node_modules/typescript/lib/typescript.js`)

| Change |  Delta |           % |              Size |         Objects | Callee               | Location                                      |
| -----: | -----: | ----------: | ----------------: | --------------: | -------------------- | --------------------------------------------- |
| -66.7% | -1 MiB | 6.5% → 0.7% | 1.5 MiB → 512 KiB | 32,769 → 10,923 | `combineTypeMappers` | `./node_modules/typescript/lib/typescript.js` |

##### `parseVariableDeclarationList` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |           Size |     Objects | Callee               | Location                                      |
| -----: | -----------: | -----------: | -------------: | ----------: | -------------------- | --------------------------------------------- |
|    new |  +27.067 MiB | 0.0% → 96.4% | 0 B → 27.1 MiB | 0 → 288,474 | `parseDelimitedList` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.031 KiB |  0.0% → 1.8% |  0 B → 512 KiB |  0 → 16,385 | `scan`               | `./node_modules/typescript/lib/typescript.js` |

##### `parseCallExpressionRest` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |           Size |     Objects | Callee                      | Location                                      |
| -----: | -----------: | -----------: | -------------: | ----------: | --------------------------- | --------------------------------------------- |
|    new |  +21.503 MiB | 0.0% → 93.5% | 0 B → 21.5 MiB | 0 → 240,050 | `parseDelimitedList`        | `./node_modules/typescript/lib/typescript.js` |
|    new |       +3 MiB | 0.0% → 13.0% |    0 B → 3 MiB |  0 → 18,727 | `createBaseCallExpression`  | `./node_modules/typescript/lib/typescript.js` |
|    new |     +1.5 MiB |  0.0% → 6.5% |  0 B → 1.5 MiB |  0 → 10,612 | `parseMemberExpressionRest` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.031 KiB |  0.0% → 2.2% |  0 B → 512 KiB |  0 → 16,385 | `nextToken`                 | `./node_modules/typescript/lib/typescript.js` |

##### `checkTypeArgumentConstraints` (`./node_modules/typescript/lib/typescript.js`)

|  Change |       Delta |             % |                Size |           Objects | Callee                       | Location                                      |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ---------------------------- | --------------------------------------------- |
| +178.2% | +29.874 MiB | 53.1% → 87.8% | 16.8 MiB → 46.6 MiB | 107,916 → 373,729 | `checkTypeRelatedTo`         | `./node_modules/typescript/lib/typescript.js` |
|  -92.2% | -11.809 MiB |  40.6% → 1.9% |    12.8 MiB → 1 MiB |   153,996 → 3,890 | `checkTypeAssignableTo`      | `./node_modules/typescript/lib/typescript.js` |
|     new |  +5.502 MiB |  0.0% → 10.4% |       0 B → 5.5 MiB |        0 → 28,494 | `getEffectiveTypeArguments2` | `./node_modules/typescript/lib/typescript.js` |
| removed |  -2.001 MiB |   6.3% → 0.0% |         2 MiB → 0 B |         8,779 → 0 | `fillMissingTypeArguments`   | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:32748:71`)

| Change |        Delta |            % |          Size |    Objects | Callee                    | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | ------------------------- | --------------------------------------------- |
|    new |   +8.501 MiB | 0.0% → 94.4% | 0 B → 8.5 MiB | 0 → 52,327 | `parseJSDocCommentWorker` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.039 KiB |  0.0% → 5.6% | 0 B → 512 KiB |  0 → 3,121 | `parseJSDocComment`       | `./node_modules/typescript/lib/typescript.js` |

##### `parseEntityNameOfTypeReference` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Callee                | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | --------------------- | --------------------------------------------- |
|    new |   +7.001 MiB | 0.0% → 93.3% |   0 B → 7 MiB | 0 → 61,177 | `parseIdentifierName` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.109 KiB |  0.0% → 6.7% | 0 B → 512 KiB |  0 → 4,370 | `parseRightSideOfDot` | `./node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |                Size |   Objects | Callee | Location    |
| -----: | -----------: | -----------: | ------------------: | --------: | ------ | ----------- |
| -34.8% | -824.023 KiB | 16.8% → 7.2% | 2.31 MiB → 1.51 MiB | 854 → 255 | `set`  | `<unknown>` |

##### `applyToParameterTypes` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |             % |              Size |         Objects | Callee                                             | Location                                               |
| ------: | -----------: | ------------: | ----------------: | --------------: | -------------------------------------------------- | ------------------------------------------------------ |
|  +55.0% |   +5.512 MiB | 95.2% → 91.2% | 10 MiB → 15.5 MiB | 43,843 → 56,150 | `inferFromContravariantTypesIfStrictFunctionTypes` | `./node_modules/typescript/lib/typescript.js`          |
|     new |   +1.001 MiB |   0.0% → 5.9% |       0 B → 1 MiB |      0 → 16,458 | `getTypeOfInstantiatedSymbol`                      | `./node_modules/typescript/lib/typescript.js`          |
|     new | +512.031 KiB |   0.0% → 2.9% |     0 B → 512 KiB |      0 → 13,108 | `getRestTypeAtPosition`                            | `./node_modules/typescript/lib/typescript.js`          |
| removed | -512.015 KiB |   4.8% → 0.0% |     512 KiB → 0 B |       5,958 → 0 | `getTypeOfSymbol`                                  | `./node_modules/typescript/lib/typescript.js`          |
| removed | -512.015 KiB |   4.8% → 0.0% |     512 KiB → 0 B |       5,958 → 0 | `(anonymous)`                                      | `./node_modules/typescript/lib/typescript.js:76633:55` |

##### `parseIdentifierOrPattern` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |            % |          Size |    Objects | Callee                      | Location                                      |
| -----: | -----------: | -----------: | ------------: | ---------: | --------------------------- | --------------------------------------------- |
|    new |   +5.501 MiB | 0.0% → 91.7% | 0 B → 5.5 MiB | 0 → 43,843 | `createIdentifier`          | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.093 KiB |  0.0% → 8.3% | 0 B → 512 KiB |  0 → 2,341 | `parseBindingIdentifier`    | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.093 KiB |  0.0% → 8.3% | 0 B → 512 KiB |  0 → 2,341 | `parseObjectBindingPattern` | `./node_modules/typescript/lib/typescript.js` |

##### `inferFromContravariantTypesIfStrictFunctionTypes` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |              % |                Size |         Objects | Callee                        | Location                                      |
| ------: | -----------: | -------------: | ------------------: | --------------: | ----------------------------- | --------------------------------------------- |
|  +63.2% |   +6.013 MiB | 95.0% → 100.0% | 9.51 MiB → 15.5 MiB | 43,452 → 56,150 | `inferFromTypes`              | `./node_modules/typescript/lib/typescript.js` |
| removed | -513.187 KiB |    5.0% → 0.0% |       513 KiB → 0 B |         391 → 0 | `inferFromContravariantTypes` | `./node_modules/typescript/lib/typescript.js` |

##### `createStringLiteral` (`./node_modules/typescript/lib/typescript.js`)

| Change |    Delta |             % |          Size |    Objects | Callee           | Location                                      |
| -----: | -------: | ------------: | ------------: | ---------: | ---------------- | --------------------------------------------- |
|    new | +5.5 MiB | 0.0% → 100.0% | 0 B → 5.5 MiB | 0 → 34,333 | `createBaseNode` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

| Change |        Delta |             % |                Size |           Objects | Callee        | Location                                   |
| -----: | -----------: | ------------: | ------------------: | ----------------: | ------------- | ------------------------------------------ |
| +71.3% |   +3.206 MiB | 35.3% → 47.9% |  4.5 MiB → 7.71 MiB | 125,617 → 141,063 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
|  +1.3% | +110.078 KiB | 64.7% → 52.1% | 8.27 MiB → 8.37 MiB |                 1 | `loadSource`  | `node:internal/modules/cjs/loader`         |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

| Change |      Delta |      % |                Size |           Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ----------------: | ------------- | ------------------------------------------ |
| +26.0% | +3.314 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

| Change |      Delta |      % |                Size |           Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ----------------: | ------------- | ------------------------------------------ |
| +26.0% | +3.314 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

| Change |      Delta |      % |                Size |           Objects | Callee           | Location                           |
| -----: | ---------: | -----: | ------------------: | ----------------: | ---------------- | ---------------------------------- |
| +26.0% | +3.314 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

| Change |      Delta |      % |                Size |           Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ----------------: | ------------- | ------------------------------------------ |
| +26.0% | +3.314 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `require` (`node:internal/modules/helpers`)

| Change |      Delta |      % |                Size |           Objects | Callee        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ----------------: | ------------- | ------------------------------------------ |
| +26.0% | +3.314 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 125,618 → 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|  Change |       Delta |             % |               Size |         Objects | Callee        | Location                                          |
| ------: | ----------: | ------------: | -----------------: | --------------: | ------------- | ------------------------------------------------- |
| +203.3% |  +3.049 MiB | 33.3% → 59.0% | 1.5 MiB → 4.55 MiB | 40,962 → 82,453 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:1:1` |
|   +5.2% | +160.71 KiB | 66.7% → 41.0% |   3 MiB → 3.16 MiB | 84,655 → 58,610 | `wrapSafe`    | `node:internal/modules/cjs/loader`                |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:1:1`)

|  Change |      Delta |             % |             Size |         Objects | Callee        | Location                                            |
| ------: | ---------: | ------------: | ---------------: | --------------: | ------------- | --------------------------------------------------- |
| +305.0% | +3.049 MiB | 66.7% → 89.0% | 1 MiB → 4.05 MiB | 19,116 → 60,607 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:16:15` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:16:15`)

|  Change |        Delta |            % |           Size |    Objects | Callee              | Location                                      |
| ------: | -----------: | -----------: | -------------: | ---------: | ------------------- | --------------------------------------------- |
|     new |   +1.547 MiB | 0.0% → 38.2% | 0 B → 1.55 MiB | 0 → 21,856 | `registerCodeFix`   | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.015 KiB | 50.0% → 0.0% |  512 KiB → 0 B | 10,923 → 0 | `createNodeFactory` | `./node_modules/typescript/lib/typescript.js` |
|     new | +512.015 KiB | 0.0% → 12.3% |  0 B → 512 KiB |  0 → 7,282 | `__export`          | `./node_modules/typescript/lib/typescript.js` |

##### `getMinArgumentCount` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |      % |             Size |         Objects | Callee                        | Location                                      |
| ------: | ---------: | -----: | ---------------: | --------------: | ----------------------------- | --------------------------------------------- |
| +100.5% | +3.015 MiB | 100.0% | 3 MiB → 6.02 MiB | 38,562 → 53,124 | `getTypeOfInstantiatedSymbol` | `./node_modules/typescript/lib/typescript.js` |

##### `parseListElement` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |          Size |    Objects | Callee                                     | Location                                                |
| -----: | -----------: | ------------: | ------------: | ---------: | ------------------------------------------ | ------------------------------------------------------- |
|    new |   +3.004 MiB | 0.0% → 100.0% |   0 B → 3 MiB | 0 → 21,631 | `parseStatement`                           | `./node_modules/typescript/lib/typescript.js`           |
|    new |   +1.504 MiB |  0.0% → 50.1% | 0 B → 1.5 MiB |  0 → 2,124 | `parseClassElement`                        | `./node_modules/typescript/lib/typescript.js`           |
|    new |   +1.501 MiB |  0.0% → 50.0% | 0 B → 1.5 MiB |  0 → 3,504 | `parseVariableDeclarationAllowExclamation` | `./node_modules/typescript/lib/typescript.js`           |
|    new | +512.093 KiB |  0.0% → 16.6% | 0 B → 512 KiB |  0 → 2,341 | `parseObjectBindingElement`                | `./node_modules/typescript/lib/typescript.js`           |
|    new | +512.093 KiB |  0.0% → 16.6% | 0 B → 512 KiB |  0 → 2,341 | `(anonymous)`                              | `./node_modules/typescript/lib/typescript.js:34471:157` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:65054:42`)

|  Change |        Delta |             % |           Size |    Objects | Callee                        | Location                                      |
| ------: | -----------: | ------------: | -------------: | ---------: | ----------------------------- | --------------------------------------------- |
|     new |   +1.594 MiB |  0.0% → 51.5% | 0 B → 1.59 MiB | 0 → 16,395 | `getIndexedAccessType`        | `./node_modules/typescript/lib/typescript.js` |
|     new |     +1.5 MiB |  0.0% → 48.5% |  0 B → 1.5 MiB | 0 → 11,942 | `getSimplifiedType`           | `./node_modules/typescript/lib/typescript.js` |
| removed | -512.109 KiB | 100.0% → 0.0% |  512 KiB → 0 B |  3,450 → 0 | `substituteIndexedMappedType` | `./node_modules/typescript/lib/typescript.js` |

##### `distributeObjectOverIndexType` (`./node_modules/typescript/lib/typescript.js`)

|  Change |      Delta |             % |               Size |         Objects | Callee         | Location                                      |
| ------: | ---------: | ------------: | -----------------: | --------------: | -------------- | --------------------------------------------- |
| +518.8% | +2.594 MiB | 33.3% → 75.6% | 512 KiB → 3.09 MiB |  3,450 → 28,337 | `map`          | `./node_modules/typescript/lib/typescript.js` |
|     ~0% |      -96 B | 66.7% → 24.4% |              1 MiB | 19,835 → 38,231 | `getUnionType` | `./node_modules/typescript/lib/typescript.js` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Callee         | Location  |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | --------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

| Change |        Delta |      % |                Size | Objects | Callee            | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------- |
|  +1.3% | +110.078 KiB | 100.0% | 8.27 MiB → 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `next` (`<unknown>`)

| Change |        Delta |             % |              Size |               Objects | Callee                   | Location                                      |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -44.1% | -322.204 MiB | 98.2% → 98.3% | 730 MiB → 408 MiB | 6,692,752 → 3,388,137 | `(anonymous)`            | `./datadog-pprof-heap.mjs:1:1`                |
| -60.1% |  -13.566 MiB |   3.0% → 2.2% |  22.6 MiB → 9 MiB |      153,496 → 61,945 | `getUnmatchedProperties` | `./node_modules/typescript/lib/typescript.js` |

##### `typeCheckProject` (`./tsc-workload.mjs`)

| Change |        Delta |             % |                Size |               Objects | Callee                             | Location                                      |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ---------------------------------- | --------------------------------------------- |
| -43.9% | -197.598 MiB | 60.1% → 60.0% |   450 MiB → 252 MiB | 3,943,770 → 1,951,309 | `getSemanticDiagnostics`           | `./node_modules/typescript/lib/typescript.js` |
| -46.7% | -132.986 MiB | 38.1% → 36.1% |   285 MiB → 152 MiB | 2,730,397 → 1,430,470 | `createProgram`                    | `./node_modules/typescript/lib/typescript.js` |
| +26.0% |   +3.314 MiB |   1.7% → 3.8% | 12.8 MiB → 16.1 MiB |     125,618 → 141,064 | `require`                          | `node:internal/modules/helpers`               |
|  +0.4% |   +1.812 KiB |          0.1% |   512 KiB → 514 KiB |           6,554 → 261 | `getParsedCommandLineOfConfigFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`<unknown>`)

| Change |       Delta |      % |              Size |               Objects | Callee | Location                               |
| -----: | ----------: | -----: | ----------------: | --------------------: | ------ | -------------------------------------- |
| -45.9% | -324.65 MiB | 100.0% | 707 MiB → 382 MiB | 6,516,443 → 3,162,546 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`./datadog-pprof-heap.mjs:1:1`)

| Change |        Delta |             % |                Size |               Objects | Callee             | Location                                                 |
| -----: | -----------: | ------------: | ------------------: | --------------------: | ------------------ | -------------------------------------------------------- |
| -43.9% | -323.724 MiB | 99.8% → 99.6% |   737 MiB → 414 MiB | 6,750,413 → 3,491,462 | `typeCheckProject` | `./tsc-workload.mjs`                                     |
|  +1.1% |  +16.539 KiB |   0.2% → 0.4% | 1.47 MiB → 1.48 MiB |                     1 | `profile`          | `./node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

| Change |        Delta |      % |              Size |               Objects | Callee | Location    |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------ | ----------- |
| -44.4% | -318.202 MiB | 100.0% | 717 MiB → 399 MiB | 6,577,351 → 3,257,942 | `next` | `<unknown>` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124967:37`)

| Change |        Delta |             % |               Size |               Objects | Callee            | Location                                      |
| -----: | -----------: | ------------: | -----------------: | --------------------: | ----------------- | --------------------------------------------- |
| -40.4% | -165.518 MiB | 78.0% → 80.8% |  409 MiB → 244 MiB | 3,299,753 → 1,743,385 | `getDiagnostics2` | `./node_modules/typescript/lib/typescript.js` |
| -49.7% |  -57.535 MiB | 22.0% → 19.2% | 116 MiB → 58.1 MiB |   1,234,377 → 583,792 | `getTypeChecker`  | `./node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -42.4% | -221.551 MiB | 100.0% | 522 MiB → 301 MiB | 4,510,993 → 2,317,156 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123385:37 → 124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | -------------------------- | --------------------------------------------- |
| -42.4% | -219.047 MiB | 100.0% | 517 MiB → 298 MiB | 4,458,246 → 2,294,049 | `runWithCancellationToken` | `./node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------------------ | --------------------------------------------- |
| -42.4% | -217.095 MiB | 100.0% | 512 MiB → 295 MiB | 4,428,120 → 2,284,781 | `getBindAndCheckDiagnosticsForFileNoCache` | `./node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |      Delta |      % |              Size |               Objects | Callee                   | Location                                      |
| -----: | ---------: | -----: | ----------------: | --------------------: | ------------------------ | --------------------------------------------- |
| -42.5% | -215.6 MiB | 100.0% | 508 MiB → 292 MiB | 4,407,390 → 2,257,346 | `getAndCacheDiagnostics` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                              | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------------------------- | --------------------------------------------- |
| -42.6% | -211.543 MiB | 100.0% | 497 MiB → 285 MiB | 4,341,884 → 2,211,927 | `getBindAndCheckDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`./node_modules/typescript/lib/typescript.js:124899:76`)

| Change |        Delta |      % |              Size |               Objects | Callee                          | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------------------------- | --------------------------------------------- |
| -42.2% | -207.087 MiB | 100.0% | 491 MiB → 283 MiB | 4,308,536 → 2,202,967 | `getSemanticDiagnosticsForFile` | `./node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee        | Location                                                            |
| -----: | -----------: | -----: | ----------------: | --------------------: | ------------- | ------------------------------------------------------------------- |
| -42.3% | -202.638 MiB | 100.0% | 479 MiB → 276 MiB | 4,222,403 → 2,164,121 | `(anonymous)` | `./node_modules/typescript/lib/typescript.js:123317:76 → 124899:76` |

##### `getDiagnosticsHelper` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |      % |              Size |               Objects | Callee    | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------------------: | --------- | --------------------------------------------- |
| -43.0% | -201.14 MiB | 100.0% | 468 MiB → 267 MiB | 4,101,194 → 2,059,453 | `flatMap` | `./node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -42.8% | -196.499 MiB | 100.0% | 459 MiB → 263 MiB | 4,033,135 → 2,038,264 | `getDiagnosticsHelper` | `./node_modules/typescript/lib/typescript.js` |

##### `forEach` (`./node_modules/typescript/lib/typescript.js`)

| Change |       Delta |             % |                Size |             Objects | Callee               | Location                                                            |
| -----: | ----------: | ------------: | ------------------: | ------------------: | -------------------- | ------------------------------------------------------------------- |
| -38.4% | -64.686 MiB | 40.8% → 46.1% |   169 MiB → 104 MiB | 1,336,496 → 845,463 | `checkSourceElement` | `./node_modules/typescript/lib/typescript.js`                       |
| -46.8% | -62.992 MiB | 32.6% → 31.9% |  135 MiB → 71.7 MiB | 1,441,645 → 797,414 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122449:24 → 124028:24` |
| -55.5% | -46.829 MiB | 20.4% → 16.7% | 84.4 MiB → 37.6 MiB |   734,535 → 286,705 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:122498:30 → 124077:30` |
| -55.4% | -30.558 MiB | 13.3% → 10.9% | 55.1 MiB → 24.6 MiB |   611,036 → 277,525 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124200:35 → 125782:35` |
| -57.4% | -17.512 MiB |   7.4% → 5.8% |   30.5 MiB → 13 MiB |   345,195 → 132,567 | `(anonymous)`        | `./node_modules/typescript/lib/typescript.js:124350:42 → 125932:42` |

##### `checkSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |               Size |               Objects | Callee               | Location                                      |
| -----: | -----------: | ------------: | -----------------: | --------------------: | -------------------- | --------------------------------------------- |
| -41.3% | -113.891 MiB | 63.0% → 62.6% |  275 MiB → 162 MiB | 2,199,171 → 1,066,745 | `checkDeferredNodes` | `./node_modules/typescript/lib/typescript.js` |
| -40.3% |  -65.169 MiB | 37.0% → 37.4% | 162 MiB → 96.3 MiB |   1,300,812 → 806,832 | `forEach`            | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |              Size |               Objects | Callee                       | Location                                      |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ---------------------------- | --------------------------------------------- |
| -41.8% | -132.502 MiB | 71.8% → 69.9% | 317 MiB → 185 MiB | 2,615,438 → 1,291,263 | `checkBlock`                 | `./node_modules/typescript/lib/typescript.js` |
| -99.1% | -114.281 MiB |  26.1% → 0.4% |   115 MiB → 1 MiB |     1,004,036 → 3,890 | `checkTypeReferenceNode`     | `./node_modules/typescript/lib/typescript.js` |
|    new |    +68.9 MiB |  0.0% → 26.1% |    0 B → 68.9 MiB |           0 → 553,145 | `checkTypeReferenceOrImport` | `./node_modules/typescript/lib/typescript.js` |
| -36.7% |  -64.158 MiB | 39.6% → 41.9% | 175 MiB → 111 MiB |   1,466,383 → 890,825 | `checkVariableStatement`     | `./node_modules/typescript/lib/typescript.js` |
| -35.5% |  -62.782 MiB | 40.0% → 43.2% | 177 MiB → 114 MiB |   1,477,793 → 920,082 | `checkVariableDeclaration`   | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                     | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | -------------------------- | --------------------------------------------- |
| -40.2% | -176.382 MiB | 100.0% | 439 MiB → 262 MiB | 3,658,140 → 1,968,615 | `checkSourceElementWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                  | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------------- | --------------------------------------------- |
| -40.6% | -174.557 MiB | 100.0% | 430 MiB → 256 MiB | 3,460,664 → 1,862,321 | `checkSourceFileWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee            | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ----------------- | --------------------------------------------- |
| -40.8% | -174.056 MiB | 100.0% | 427 MiB → 253 MiB | 3,437,691 → 1,808,711 | `checkSourceFile` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |      % |              Size |               Objects | Callee                 | Location                                      |
| -----: | -----------: | -----: | ----------------: | --------------------: | ---------------------- | --------------------------------------------- |
| -40.5% | -169.011 MiB | 100.0% | 417 MiB → 248 MiB | 3,351,125 → 1,767,319 | `getDiagnosticsWorker` | `./node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |              % |              Size |               Objects | Callee                                | Location                                      |
| -----: | -----------: | -------------: | ----------------: | --------------------: | ------------------------------------- | --------------------------------------------- |
| -40.2% |  -169.06 MiB | 100.0% → 99.8% | 420 MiB → 251 MiB | 3,376,676 → 1,789,277 | `checkSourceFileWithEagerDiagnostics` | `./node_modules/typescript/lib/typescript.js` |
|    new | +512.062 KiB |    0.0% → 0.2% |     0 B → 512 KiB |             0 → 2,731 | `ensurePendingDiagnosticWorkComplete` | `./node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`./node_modules/typescript/lib/typescript.js`)

|  Change |        Delta |            % |           Size |     Objects | Callee                      | Location                                      |
| ------: | -----------: | -----------: | -------------: | ----------: | --------------------------- | --------------------------------------------- |
| removed |  -25.062 MiB | 15.6% → 0.0% | 25.1 MiB → 0 B |  16,016 → 0 | `set`                       | `<unknown>`                                   |
| removed |  -19.003 MiB | 11.8% → 0.0% |   19 MiB → 0 B | 195,772 → 0 | `Map`                       | `<unknown>`                                   |
| removed | -512.968 KiB |  0.3% → 0.0% |  513 KiB → 0 B |      98 → 0 | `couldContainTypeVariables` | `./node_modules/typescript/lib/typescript.js` |

##### `findSourceFileWorker` (`./node_modules/typescript/lib/typescript.js`)

| Change |        Delta |             % |                Size |               Objects | Callee                           | Location                                                            |
| -----: | -----------: | ------------: | ------------------: | --------------------: | -------------------------------- | ------------------------------------------------------------------- |
| -47.3% | -142.446 MiB | 96.8% → 96.1% |   301 MiB → 159 MiB | 2,870,729 → 1,487,283 | `(anonymous)`                    | `./node_modules/typescript/lib/typescript.js:121493:10 → 123071:10` |
| -44.9% |  -70.824 MiB | 50.7% → 52.6% |    158 MiB → 87 MiB |   1,613,521 → 893,018 | `processImportedModules`         | `./node_modules/typescript/lib/typescript.js`                       |
| -55.8% |   -36.06 MiB | 20.8% → 17.3% | 64.6 MiB → 28.6 MiB |     687,188 → 337,645 | `processTypeReferenceDirectives` | `./node_modules/typescript/lib/typescript.js`                       |
| -55.4% |  -30.558 MiB | 17.7% → 14.9% | 55.1 MiB → 24.6 MiB |     611,036 → 277,525 | `processReferencedFiles`         | `./node_modules/typescript/lib/typescript.js`                       |
| -57.4% |  -17.512 MiB |   9.8% → 7.9% |   30.5 MiB → 13 MiB |     345,195 → 132,567 | `processLibReferenceDirectives`  | `./node_modules/typescript/lib/typescript.js`                       |

##### `forEach` (`<unknown>`)

|  Change |        Delta |             % |                Size |               Objects | Callee              | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ------------------- | ----------------------------------------------------------------- |
|  -40.0% | -111.388 MiB | 97.5% → 97.3% |   278 MiB → 167 MiB | 2,239,791 → 1,094,382 | `checkDeferredNode` | `./node_modules/typescript/lib/typescript.js`                     |
|  -59.5% |  -12.504 MiB |   7.4% → 5.0% |    21 MiB → 8.5 MiB |      146,423 → 69,217 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52487:21 → 53728:21` |
|  -48.9% |   -1.001 MiB |   0.7% → 0.6% | 2.05 MiB → 1.05 MiB |         6,397 → 3,131 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:50184:20 → 51425:20` |
| +100.0% | +513.851 KiB |   0.2% → 0.6% |     514 KiB → 1 MiB |              73 → 146 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:52182:20 → 53423:20` |
| removed | -512.226 KiB |   0.2% → 0.0% |       512 KiB → 0 B |             1,457 → 0 | `(anonymous)`       | `./node_modules/typescript/lib/typescript.js:38591:27`            |

##### `toString` (`node:buffer`)

| Change |       Delta |              % |               Size | Objects | Callee  | Location      |
| -----: | ----------: | -------------: | -----------------: | ------: | ------- | ------------- |
| -95.3% | -11.892 MiB | 55.7% → 100.0% | 12.5 MiB → 601 KiB | 326 → 2 | `slice` | `node:buffer` |

##### `replace` (`<unknown>`)

| Change |  Delta |              % |    Size | Objects | Callee        | Location                                      |
| -----: | -----: | -------------: | ------: | ------: | ------------- | --------------------------------------------- |
|    ~0% | +256 B | 33.4% → 100.0% | 514 KiB | 95 → 63 | `toLowerCase` | `./node_modules/typescript/lib/typescript.js` |
