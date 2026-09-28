# Heap profile diff

Allocated 957 MiB → 548 MiB (-408.783 MiB, -42.7%) over 8,453,024 objects → 4,490,738 objects (119 B → 128 B per object).

| Category         | Change |        Delta |             % |                Size |               Objects |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------------------: |
| Third-party      | -40.8% |  -305.67 MiB | 78.2% → 80.8% |   748 MiB → 443 MiB | 7,242,637 → 3,906,616 |
| Standard library | -50.0% | -103.135 MiB | 21.6% → 18.8% |   206 MiB → 103 MiB |   1,210,386 → 584,121 |
| Native           |  +1.2% |      +24 KiB |   0.2% → 0.4% | 1.98 MiB → 2.01 MiB |                     1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Third-party

|  Change |       Delta |            % |                Size |           Objects | Function                              | Location                                             |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ------------------------------------- | ---------------------------------------------------- |
| +232.6% | +50.008 MiB | 2.2% → 13.1% | 21.5 MiB → 71.5 MiB | 108,403 → 360,505 | `instantiateSymbol`                   | `node_modules/typescript/lib/typescript.js`          |
|     new | +12.677 MiB |  0.0% → 2.3% |      0 B → 12.7 MiB |           0 → 718 | `readFile`                            | `node_modules/typescript/lib/typescript.js`          |
|     new |  +8.503 MiB |  0.0% → 1.6% |       0 B → 8.5 MiB |        0 → 69,217 | `(anonymous)`                         | `node_modules/typescript/lib/typescript.js:53728:21` |
|  +69.6% |  +8.001 MiB |  1.2% → 3.6% | 11.5 MiB → 19.5 MiB | 100,506 → 170,424 | `parseIdentifierName`                 | `node_modules/typescript/lib/typescript.js`          |
|     new |    +4.5 MiB |  0.0% → 0.8% |       0 B → 4.5 MiB |        0 → 28,089 | `createPropertyAccessExpression`      | `node_modules/typescript/lib/typescript.js`          |
|  +87.2% |  +3.502 MiB |  0.4% → 1.4% | 4.01 MiB → 7.52 MiB |     2,086 → 6,231 | `checkTypeRelatedTo`                  | `node_modules/typescript/lib/typescript.js`          |
|     new |      +3 MiB |  0.0% → 0.5% |         0 B → 3 MiB |        0 → 18,727 | `createBaseCallExpression`            | `node_modules/typescript/lib/typescript.js`          |
| +125.0% |    +2.5 MiB |  0.2% → 0.8% |     2 MiB → 4.5 MiB |   45,131 → 64,393 | `getConditionalTypeInstantiation`     | `node_modules/typescript/lib/typescript.js`          |
|     new |      +2 MiB |  0.0% → 0.4% |         0 B → 2 MiB |        0 → 12,485 | `parseDeclarationWorker`              | `node_modules/typescript/lib/typescript.js`          |
| +323.6% |  +1.618 MiB |  0.1% → 0.4% |  512 KiB → 2.12 MiB |   13,108 → 16,624 | `getResolvedMembersOrExportsOfSymbol` | `node_modules/typescript/lib/typescript.js`          |
| +300.5% |  +1.502 MiB |  0.1% → 0.4% |     512 KiB → 2 MiB |    8,193 → 31,469 | `(anonymous)`                         | `node_modules/typescript/lib/typescript.js:16:15`    |
|     new |    +1.5 MiB |  0.0% → 0.3% |       0 B → 1.5 MiB |         0 → 9,363 | `createJSDocComment`                  | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.004 MiB |  0.0% → 0.2% |         0 B → 1 MiB |           0 → 395 | `bindWorker`                          | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.003 MiB |  0.0% → 0.2% |         0 B → 1 MiB |           0 → 301 | `resolveStructuredTypeMembers`        | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |        0 → 15,157 | `getTypeFactsWorker`                  | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |         0 → 6,243 | `createMethodDeclaration`             | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |         0 → 6,900 | `map`                                 | `node_modules/typescript/lib/typescript.js`          |
| +200.0% |      +1 MiB |  0.1% → 0.3% |   512 KiB → 1.5 MiB |    4,682 → 14,046 | `createIndexedAccessType`             | `node_modules/typescript/lib/typescript.js`          |
|  +66.7% |      +1 MiB |  0.2% → 0.5% |   1.5 MiB → 2.5 MiB |    9,364 → 15,606 | `createNumericLiteral`                | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB |  0.0% → 0.2% |         0 B → 1 MiB |        0 → 20,390 | `createTupleTargetType`               | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|  Change |        Delta |           % |                Size |         Objects | Function       | Location                           |
| ------: | -----------: | ----------: | ------------------: | --------------: | -------------- | ---------------------------------- |
| +110.3% |  +567.07 KiB | 0.1% → 0.2% |  514 KiB → 1.06 MiB |        102 → 27 | `add`          | `<unknown>`                        |
|   +5.2% |  +160.71 KiB | 0.3% → 0.6% |    3 MiB → 3.16 MiB | 84,655 → 58,610 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
|   +1.3% | +110.078 KiB | 0.9% → 1.5% | 8.27 MiB → 8.37 MiB |               1 | `readFileSync` | `node:fs`                          |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |           Objects | Function                        | Location                                             |
| ------: | -----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ---------------------------------------------------- |
| removed | -116.019 MiB | 12.1% → 0.0% |       116 MiB → 0 B |       584,879 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  -52.9% |  -36.005 MiB |  7.1% → 5.8% |     68 MiB → 32 MiB | 766,364 → 440,364 | `Map`                           | `<unknown>`                                          |
| removed |  -25.503 MiB |  2.7% → 0.0% |      25.5 MiB → 0 B |       159,182 → 0 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  -54.8% |  -25.503 MiB |  4.9% → 3.8% |   46.5 MiB → 21 MiB | 485,246 → 206,000 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  -31.3% |  -24.634 MiB |  8.2% → 9.8% |   78.6 MiB → 54 MiB |   45,581 → 26,191 | `set`                           | `<unknown>`                                          |
|  -45.7% |  -24.003 MiB |  5.5% → 5.2% | 52.5 MiB → 28.5 MiB | 327,722 → 177,904 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  -97.6% |  -20.507 MiB |  2.2% → 0.1% |    21 MiB → 512 KiB |   146,423 → 6,554 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:48631:44` |
|  -54.0% |  -13.502 MiB |  2.6% → 2.1% |   25 MiB → 11.5 MiB | 218,493 → 100,508 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  -96.4% |  -13.502 MiB |  1.5% → 0.1% |    14 MiB → 512 KiB |   122,355 → 4,370 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  -95.3% |  -11.892 MiB |  1.3% → 0.1% |  12.5 MiB → 601 KiB |           326 → 2 | `slice`                         | `node:buffer`                                        |
|  -60.0% |  -10.501 MiB |  1.8% → 1.3% |    17.5 MiB → 7 MiB |  109,242 → 43,697 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  -36.4% |      -10 MiB |  2.9% → 3.2% | 27.5 MiB → 17.5 MiB | 220,254 → 137,037 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  -54.0% |   -9.996 MiB |  1.9% → 1.6% | 18.5 MiB → 8.51 MiB |  163,869 → 67,532 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
| removed |    -9.91 MiB |  1.0% → 0.0% |      9.91 MiB → 0 B |           309 → 0 | `toString`                      | `node:buffer`                                        |
|  -55.9% |     -9.5 MiB |  1.8% → 1.4% |    17 MiB → 7.5 MiB |  202,577 → 89,371 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  -83.3% |   -7.501 MiB |  0.9% → 0.3% |     9 MiB → 1.5 MiB |    68,931 → 4,884 | `join`                          | `<unknown>`                                          |
|  -56.0% |       -7 MiB |  1.3% → 1.0% |  12.5 MiB → 5.5 MiB |  120,157 → 86,394 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
|  -92.9% |   -6.501 MiB |  0.7% → 0.1% |     7 MiB → 512 KiB |    45,977 → 3,450 | `push`                          | `<unknown>`                                          |
| removed |       -6 MiB |  0.6% → 0.0% |         6 MiB → 0 B |        37,454 → 0 | `createCallExpression`          | `node_modules/typescript/lib/typescript.js`          |
|  -44.4% |   -5.999 MiB |         1.4% |  13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |

##### Third-party

|  Change |        Delta |            % |                Size |           Objects | Function                        | Location                                             |
| ------: | -----------: | -----------: | ------------------: | ----------------: | ------------------------------- | ---------------------------------------------------- |
| removed | -116.019 MiB | 12.1% → 0.0% |       116 MiB → 0 B |       584,879 → 0 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
| removed |  -25.503 MiB |  2.7% → 0.0% |      25.5 MiB → 0 B |       159,182 → 0 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  -54.8% |  -25.503 MiB |  4.9% → 3.8% |   46.5 MiB → 21 MiB | 485,246 → 206,000 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  -45.7% |  -24.003 MiB |  5.5% → 5.2% | 52.5 MiB → 28.5 MiB | 327,722 → 177,904 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  -97.6% |  -20.507 MiB |  2.2% → 0.1% |    21 MiB → 512 KiB |   146,423 → 6,554 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:48631:44` |
|  -54.0% |  -13.502 MiB |  2.6% → 2.1% |   25 MiB → 11.5 MiB | 218,493 → 100,508 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  -96.4% |  -13.502 MiB |  1.5% → 0.1% |    14 MiB → 512 KiB |   122,355 → 4,370 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  -60.0% |  -10.501 MiB |  1.8% → 1.3% |    17.5 MiB → 7 MiB |  109,242 → 43,697 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  -36.4% |      -10 MiB |  2.9% → 3.2% | 27.5 MiB → 17.5 MiB | 220,254 → 137,037 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  -54.0% |   -9.996 MiB |  1.9% → 1.6% | 18.5 MiB → 8.51 MiB |  163,869 → 67,532 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
|  -55.9% |     -9.5 MiB |  1.8% → 1.4% |    17 MiB → 7.5 MiB |  202,577 → 89,371 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  -56.0% |       -7 MiB |  1.3% → 1.0% |  12.5 MiB → 5.5 MiB |  120,157 → 86,394 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
| removed |       -6 MiB |  0.6% → 0.0% |         6 MiB → 0 B |        37,454 → 0 | `createCallExpression`          | `node_modules/typescript/lib/typescript.js`          |
|  -44.4% |   -5.999 MiB |         1.4% |  13.5 MiB → 7.5 MiB | 196,801 → 118,500 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  -50.0% |     -5.5 MiB |  1.1% → 1.0% |    11 MiB → 5.5 MiB | 286,194 → 141,459 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  -68.8% |     -5.5 MiB |  0.8% → 0.5% |     8 MiB → 2.5 MiB |  100,510 → 14,683 | `resolveTypeReferenceMembers`   | `node_modules/typescript/lib/typescript.js`          |
|  -71.4% |       -5 MiB |  0.7% → 0.4% |       7 MiB → 2 MiB |  243,042 → 71,001 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js`          |
|  -90.9% |       -5 MiB |  0.6% → 0.1% |   5.5 MiB → 512 KiB |  196,618 → 16,385 | `scan`                          | `node_modules/typescript/lib/typescript.js`          |
|  -27.4% |   -4.703 MiB |  1.8% → 2.3% | 17.2 MiB → 12.5 MiB |            32,776 | `getResolvedSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  -75.0% |     -4.5 MiB |  0.6% → 0.3% |     6 MiB → 1.5 MiB |   67,269 → 10,350 | `mapDefined`                    | `node_modules/typescript/lib/typescript.js`          |

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

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

|    Change |        Delta |             % |                Size |               Objects | Function                         | Location                                              |
| --------: | -----------: | ------------: | ------------------: | --------------------: | -------------------------------- | ----------------------------------------------------- |
|  +1280.6% | +280.151 MiB |  2.3% → 55.1% |  21.9 MiB → 302 MiB |       596 → 2,327,177 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:124967:37` |
|  +4673.4% | +187.394 MiB |  0.4% → 34.9% |  4.01 MiB → 191 MiB |     9,594 → 1,391,082 | `resolveSignature`               | `node_modules/typescript/lib/typescript.js`           |
|  +3509.0% |  +70.237 MiB |  0.2% → 13.2% |    2 MiB → 72.2 MiB |      17,181 → 800,535 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:124028:24` |
|  +2666.3% |  +67.374 MiB |  0.3% → 12.8% | 2.53 MiB → 69.9 MiB |      12,820 → 557,035 | `checkTypeReferenceOrImport`     | `node_modules/typescript/lib/typescript.js`           |
|    +73.1% |  +67.093 MiB |  9.6% → 29.0% |  91.8 MiB → 159 MiB |   796,634 → 1,487,283 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:123071:10` |
|  +5807.0% |  +58.078 MiB |  0.1% → 10.8% |    1 MiB → 59.1 MiB |       7,491 → 633,431 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:37111:56`  |
| +10380.2% |  +52.088 MiB |   0.1% → 9.6% |  514 KiB → 52.6 MiB |          73 → 537,983 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:46417:21`  |
|   +213.0% |  +49.007 MiB |  2.4% → 13.1% |     23 MiB → 72 MiB |     141,172 → 371,428 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js`           |
|   +734.4% |  +33.061 MiB |   0.5% → 6.9% |  4.5 MiB → 37.6 MiB |      35,129 → 286,705 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:124077:30` |
|   +725.0% |  +29.004 MiB |   0.4% → 6.0% |      4 MiB → 33 MiB |      39,482 → 352,948 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:34471:157` |
|    +21.1% |  +28.638 MiB | 14.2% → 30.0% |   136 MiB → 164 MiB | 1,447,887 → 1,548,160 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:125505:7`  |
|       new |  +28.067 MiB |   0.0% → 5.1% |      0 B → 28.1 MiB |           0 → 307,980 | `parseVariableDeclarationList`   | `node_modules/typescript/lib/typescript.js`           |
|       new |  +23.003 MiB |   0.0% → 4.2% |        0 B → 23 MiB |           0 → 262,677 | `parseCallExpressionRest`        | `node_modules/typescript/lib/typescript.js`           |
|    +68.3% |  +21.566 MiB |   3.3% → 9.7% | 31.6 MiB → 53.1 MiB |     270,691 → 406,113 | `checkTypeArgumentConstraints`   | `node_modules/typescript/lib/typescript.js`           |
|  +1100.4% |  +11.004 MiB |   0.1% → 2.2% |      1 MiB → 12 MiB |       10,261 → 82,691 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:72303:29`  |
|   +389.9% |   +9.749 MiB |   0.3% → 2.2% |  2.5 MiB → 12.3 MiB |          28,507 → 180 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:123127:40` |
|  +1600.2% |   +8.002 MiB |   0.1% → 1.6% |   512 KiB → 8.5 MiB |        3,450 → 69,217 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:53728:21`  |
|       new |   +7.501 MiB |   0.0% → 1.4% |       0 B → 7.5 MiB |            0 → 65,547 | `parseEntityNameOfTypeReference` | `node_modules/typescript/lib/typescript.js`           |
|    +52.1% |   +7.196 MiB |   1.4% → 3.8% |   13.8 MiB → 21 MiB |     101,360 → 170,679 | `parseIdentifierName`            | `node_modules/typescript/lib/typescript.js`           |
|    +62.0% |   +6.514 MiB |   1.1% → 3.1% |   10.5 MiB → 17 MiB |       49,801 → 85,716 | `applyToParameterTypes`          | `node_modules/typescript/lib/typescript.js`           |

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

|  Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                              |
| ------: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -525.081 MiB |  54.9% → 0.0% |     525 MiB → 0 B |         4,534,130 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
|  -97.3% | -477.506 MiB |  51.3% → 2.4% |  491 MiB → 13 MiB |   4,308,536 → 132,567 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:125932:42` |
|  -44.2% | -328.269 MiB | 77.7% → 75.8% | 743 MiB → 415 MiB | 6,780,010 → 3,427,910 | `next`                                     | `<unknown>`                                           |
|  -43.8% | -327.269 MiB | 78.2% → 76.8% | 748 MiB → 421 MiB | 6,806,339 → 3,523,104 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
|  -45.9% |  -324.65 MiB | 73.9% → 69.7% | 707 MiB → 382 MiB | 6,516,443 → 3,162,546 | `(anonymous)`                              | `<unknown>`                                           |
|  -43.8% | -323.708 MiB | 77.2% → 75.8% | 739 MiB → 415 MiB | 6,750,414 → 3,491,463 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
|  -44.4% | -318.202 MiB | 75.0% → 72.9% | 717 MiB → 399 MiB | 6,577,351 → 3,257,942 | `run`                                      | `node:internal/modules/esm/module_job`                |
| removed |  -310.32 MiB |  32.4% → 0.0% |     310 MiB → 0 B |         3,014,441 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123923:7`  |
|  -42.4% | -221.551 MiB | 54.6% → 54.8% | 522 MiB → 301 MiB | 4,510,993 → 2,317,156 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
|  -42.4% | -219.047 MiB | 54.0% → 54.3% | 517 MiB → 298 MiB | 4,458,246 → 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
|  -42.4% | -217.095 MiB | 53.5% → 53.8% | 512 MiB → 295 MiB | 4,428,120 → 2,284,781 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -42.5% |   -215.6 MiB | 53.1% → 53.3% | 508 MiB → 292 MiB | 4,407,390 → 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
|  -42.6% | -211.543 MiB | 52.0% → 52.1% | 497 MiB → 285 MiB | 4,341,884 → 2,211,927 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
|  -42.3% | -202.638 MiB | 50.1% → 50.4% | 479 MiB → 276 MiB | 4,222,403 → 2,164,121 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -43.0% |  -201.14 MiB | 48.9% → 48.7% | 468 MiB → 267 MiB | 4,101,194 → 2,059,453 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
|  -42.8% | -196.499 MiB |         48.0% | 459 MiB → 263 MiB | 4,033,135 → 2,038,264 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -45.5% | -187.973 MiB | 43.2% → 41.1% | 413 MiB → 225 MiB | 3,795,099 → 2,028,375 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -41.0% | -179.061 MiB | 45.7% → 47.1% | 437 MiB → 258 MiB | 3,499,983 → 1,873,577 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
|  -40.3% | -177.888 MiB | 46.2% → 48.2% | 442 MiB → 264 MiB | 3,661,880 → 1,978,036 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
|  -40.2% | -176.382 MiB | 45.9% → 47.9% | 439 MiB → 262 MiB | 3,658,140 → 1,968,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

##### Third-party

|  Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                              |
| ------: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ----------------------------------------------------- |
| removed | -525.081 MiB |  54.9% → 0.0% |     525 MiB → 0 B |         4,534,130 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
|  -97.3% | -477.506 MiB |  51.3% → 2.4% |  491 MiB → 13 MiB |   4,308,536 → 132,567 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:125932:42` |
| removed |  -310.32 MiB |  32.4% → 0.0% |     310 MiB → 0 B |         3,014,441 → 0 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123923:7`  |
|  -42.4% | -221.551 MiB | 54.6% → 54.8% | 522 MiB → 301 MiB | 4,510,993 → 2,317,156 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
|  -42.4% | -219.047 MiB | 54.0% → 54.3% | 517 MiB → 298 MiB | 4,458,246 → 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
|  -42.4% | -217.095 MiB | 53.5% → 53.8% | 512 MiB → 295 MiB | 4,428,120 → 2,284,781 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -42.5% |   -215.6 MiB | 53.1% → 53.3% | 508 MiB → 292 MiB | 4,407,390 → 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
|  -42.6% | -211.543 MiB | 52.0% → 52.1% | 497 MiB → 285 MiB | 4,341,884 → 2,211,927 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
|  -42.3% | -202.638 MiB | 50.1% → 50.4% | 479 MiB → 276 MiB | 4,222,403 → 2,164,121 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -43.0% |  -201.14 MiB | 48.9% → 48.7% | 468 MiB → 267 MiB | 4,101,194 → 2,059,453 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
|  -42.8% | -196.499 MiB |         48.0% | 459 MiB → 263 MiB | 4,033,135 → 2,038,264 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -45.5% | -187.973 MiB | 43.2% → 41.1% | 413 MiB → 225 MiB | 3,795,099 → 2,028,375 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -41.0% | -179.061 MiB | 45.7% → 47.1% | 437 MiB → 258 MiB | 3,499,983 → 1,873,577 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
|  -40.3% | -177.888 MiB | 46.2% → 48.2% | 442 MiB → 264 MiB | 3,661,880 → 1,978,036 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
|  -40.2% | -176.382 MiB | 45.9% → 47.9% | 439 MiB → 262 MiB | 3,658,140 → 1,968,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
|  -40.6% | -174.557 MiB | 45.0% → 46.7% | 430 MiB → 256 MiB | 3,460,664 → 1,862,321 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
|  -40.8% | -174.056 MiB | 44.6% → 46.2% | 427 MiB → 253 MiB | 3,437,691 → 1,808,711 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
|  -40.5% | -169.011 MiB | 43.6% → 45.2% | 417 MiB → 248 MiB | 3,351,125 → 1,767,319 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
|  -40.1% |  -168.56 MiB | 43.9% → 46.0% | 420 MiB → 252 MiB | 3,376,676 → 1,792,008 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| removed | -160.585 MiB |  16.8% → 0.0% |     161 MiB → 0 B |           796,765 → 0 | `createInstantiatedSymbolTable`            | `node_modules/typescript/lib/typescript.js`           |

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
