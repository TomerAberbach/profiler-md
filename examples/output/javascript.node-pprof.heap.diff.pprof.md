# Heap profile diff

Allocated 927 MiB → 732 MiB (-195.207 MiB, -21.1%) over 10,093,789 objects → 7,784,774 objects (96.3 B → 98.6 B per object).

| Category         | Change |        Delta |             % |              Size |               Objects |
| ---------------- | -----: | -----------: | ------------: | ----------------: | --------------------: |
| Third-party      | -19.0% | -134.978 MiB | 76.8% → 78.8% | 712 MiB → 577 MiB | 8,842,365 → 6,943,710 |
| Standard library | -28.3% |  -60.229 MiB | 23.0% → 20.9% | 213 MiB → 153 MiB |   1,251,423 → 841,063 |
| Native           |   0.0% |          0 B |   0.2% → 0.3% |          1.98 MiB |                     1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |           % |               Size |           Objects | Function                                        | Location                                             |
| ------: | ----------: | ----------: | -----------------: | ----------------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +23.503 MiB | 0.0% → 3.2% |     0 B → 23.5 MiB |       0 → 220,047 | `parseIdentifierName`                           | `node_modules/typescript/lib/typescript.js`          |
|  +56.5% |    +6.5 MiB | 1.2% → 2.5% |  11.5 MiB → 18 MiB | 107,683 → 168,546 | `createIdentifier`                              | `node_modules/typescript/lib/typescript.js`          |
|     new |      +4 MiB | 0.0% → 0.5% |        0 B → 4 MiB |        0 → 29,130 | `createJSDocComment`                            | `node_modules/typescript/lib/typescript.js`          |
| +300.1% |      +3 MiB | 0.1% → 0.5% |      1 MiB → 4 MiB |   32,770 → 40,535 | `getUnionTypeWorker`                            | `node_modules/typescript/lib/typescript.js`          |
|  +11.5% |      +3 MiB | 2.8% → 4.0% |    26 MiB → 29 MiB | 169,039 → 187,880 | `instantiateSignature`                          | `node_modules/typescript/lib/typescript.js`          |
|     new |   +2.75 MiB | 0.0% → 0.4% |     0 B → 2.75 MiB |        0 → 43,694 | `checkCallExpression`                           | `node_modules/typescript/lib/typescript.js`          |
| +166.7% |    +2.5 MiB | 0.2% → 0.5% |    1.5 MiB → 4 MiB |   14,046 → 37,455 | `createSymbol`                                  | `node_modules/typescript/lib/typescript.js`          |
| +428.5% |  +2.142 MiB | 0.1% → 0.4% | 512 KiB → 2.64 MiB |   21,846 → 38,266 | `wrapSafe`                                      | `node:internal/modules/cjs/loader`                   |
|     new |      +2 MiB | 0.0% → 0.3% |        0 B → 2 MiB |        0 → 14,564 | `parseVariableDeclaration`                      | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |        0 → 10,350 | `getAdjustedTypeWithFacts`                      | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |        0 → 23,285 | `parseDelimitedList`                            | `node_modules/typescript/lib/typescript.js`          |
| +300.0% |    +1.5 MiB | 0.1% → 0.3% |    512 KiB → 2 MiB |    2,979 → 11,917 | `(anonymous)`                                   | `node_modules/typescript/lib/typescript.js:56587:43` |
| +300.0% |    +1.5 MiB | 0.1% → 0.3% |    512 KiB → 2 MiB |    2,979 → 11,917 | `getTypeOfFuncClassEnumModuleWorker`            | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |        0 → 10,924 | `parseInterfaceDeclaration`                     | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |        0 → 34,409 | `createUnionOrIntersectionProperty`             | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.062 MiB | 0.0% → 0.1% |     0 B → 1.06 MiB |        0 → 10,929 | `checkExpressionCached`                         | `node_modules/typescript/lib/typescript.js`          |
|     new |   +1.01 MiB | 0.0% → 0.1% |     0 B → 1.01 MiB |           0 → 579 | `getTypeAtFlowNode`                             | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.004 MiB | 0.0% → 0.1% |        0 B → 1 MiB |         0 → 1,333 | `isJSConstructor`                               | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.002 MiB | 0.0% → 0.1% |        0 B → 1 MiB |           0 → 273 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB | 0.0% → 0.1% |        0 B → 1 MiB |         0 → 7,547 | `getBaseFileName`                               | `node_modules/typescript/lib/typescript.js`          |

##### Third-party

|  Change |       Delta |           % |              Size |           Objects | Function                                        | Location                                             |
| ------: | ----------: | ----------: | ----------------: | ----------------: | ----------------------------------------------- | ---------------------------------------------------- |
|     new | +23.503 MiB | 0.0% → 3.2% |    0 B → 23.5 MiB |       0 → 220,047 | `parseIdentifierName`                           | `node_modules/typescript/lib/typescript.js`          |
|  +56.5% |    +6.5 MiB | 1.2% → 2.5% | 11.5 MiB → 18 MiB | 107,683 → 168,546 | `createIdentifier`                              | `node_modules/typescript/lib/typescript.js`          |
|     new |      +4 MiB | 0.0% → 0.5% |       0 B → 4 MiB |        0 → 29,130 | `createJSDocComment`                            | `node_modules/typescript/lib/typescript.js`          |
| +300.1% |      +3 MiB | 0.1% → 0.5% |     1 MiB → 4 MiB |   32,770 → 40,535 | `getUnionTypeWorker`                            | `node_modules/typescript/lib/typescript.js`          |
|  +11.5% |      +3 MiB | 2.8% → 4.0% |   26 MiB → 29 MiB | 169,039 → 187,880 | `instantiateSignature`                          | `node_modules/typescript/lib/typescript.js`          |
|     new |   +2.75 MiB | 0.0% → 0.4% |    0 B → 2.75 MiB |        0 → 43,694 | `checkCallExpression`                           | `node_modules/typescript/lib/typescript.js`          |
| +166.7% |    +2.5 MiB | 0.2% → 0.5% |   1.5 MiB → 4 MiB |   14,046 → 37,455 | `createSymbol`                                  | `node_modules/typescript/lib/typescript.js`          |
|     new |      +2 MiB | 0.0% → 0.3% |       0 B → 2 MiB |        0 → 14,564 | `parseVariableDeclaration`                      | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |        0 → 10,350 | `getAdjustedTypeWithFacts`                      | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |        0 → 23,285 | `parseDelimitedList`                            | `node_modules/typescript/lib/typescript.js`          |
| +300.0% |    +1.5 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |    2,979 → 11,917 | `(anonymous)`                                   | `node_modules/typescript/lib/typescript.js:56587:43` |
| +300.0% |    +1.5 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |    2,979 → 11,917 | `getTypeOfFuncClassEnumModuleWorker`            | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |        0 → 10,924 | `parseInterfaceDeclaration`                     | `node_modules/typescript/lib/typescript.js`          |
|     new |    +1.5 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |        0 → 34,409 | `createUnionOrIntersectionProperty`             | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.062 MiB | 0.0% → 0.1% |    0 B → 1.06 MiB |        0 → 10,929 | `checkExpressionCached`                         | `node_modules/typescript/lib/typescript.js`          |
|     new |   +1.01 MiB | 0.0% → 0.1% |    0 B → 1.01 MiB |           0 → 579 | `getTypeAtFlowNode`                             | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.004 MiB | 0.0% → 0.1% |       0 B → 1 MiB |         0 → 1,333 | `isJSConstructor`                               | `node_modules/typescript/lib/typescript.js`          |
|     new |  +1.002 MiB | 0.0% → 0.1% |       0 B → 1 MiB |           0 → 273 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB | 0.0% → 0.1% |       0 B → 1 MiB |         0 → 7,547 | `getBaseFileName`                               | `node_modules/typescript/lib/typescript.js`          |
|     new |      +1 MiB | 0.0% → 0.1% |       0 B → 1 MiB |         0 → 6,900 | `parseObjectTypeMembers`                        | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|  Change |        Delta |           % |               Size |         Objects | Function   | Location                           |
| ------: | -----------: | ----------: | -----------------: | --------------: | ---------- | ---------------------------------- |
| +428.5% |   +2.142 MiB | 0.1% → 0.4% | 512 KiB → 2.64 MiB | 21,846 → 38,266 | `wrapSafe` | `node:internal/modules/cjs/loader` |
|     new | +512.937 KiB | 0.0% → 0.1% |      0 B → 513 KiB |         0 → 283 | `exec`     | `<unknown>`                        |
|     ~0% |        +64 B |        0.1% |            512 KiB |   2,731 → 3,856 | `replace`  | `<unknown>`                        |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |                Size |               Objects | Function                        | Location                                    |
| ------: | ----------: | ------------: | ------------------: | --------------------: | ------------------------------- | ------------------------------------------- |
| removed | -46.506 MiB |   5.0% → 0.0% |      46.5 MiB → 0 B |           435,406 → 0 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js` |
|  -35.6% | -24.004 MiB |   7.3% → 5.9% | 67.5 MiB → 43.5 MiB |     763,246 → 571,780 | `Map`                           | `<unknown>`                                 |
|  -20.0% | -24.001 MiB | 12.9% → 13.1% |    120 MiB → 96 MiB | 1,999,948 → 1,720,054 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js` |
|  -21.2% | -18.325 MiB |          9.3% | 86.4 MiB → 68.1 MiB |       46,472 → 30,875 | `set`                           | `<unknown>`                                 |
|  -41.5% |  -8.501 MiB |   2.2% → 1.6% |   20.5 MiB → 12 MiB |      149,291 → 87,386 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js` |
|  -39.0% |  -7.995 MiB |   2.2% → 1.7% | 20.5 MiB → 12.5 MiB |     217,085 → 108,077 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js` |
|  -44.1% |  -7.501 MiB |   1.8% → 1.3% |    17 MiB → 9.5 MiB |      178,658 → 78,485 | `instantiateList`               | `node_modules/typescript/lib/typescript.js` |
|  -31.9% |    -7.5 MiB |   2.5% → 2.2% |   23.5 MiB → 16 MiB |     171,131 → 116,516 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js` |
| removed |    -6.5 MiB |   0.7% → 0.0% |       6.5 MiB → 0 B |            47,334 → 0 | `createBaseCallExpression`      | `node_modules/typescript/lib/typescript.js` |
|  -17.4% |      -6 MiB |   3.7% → 3.9% | 34.5 MiB → 28.5 MiB |     573,008 → 427,885 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js` |
|  -21.8% |      -6 MiB |   3.0% → 2.9% | 27.5 MiB → 21.5 MiB |     660,864 → 515,589 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js` |
| removed |  -5.501 MiB |   0.6% → 0.0% |       5.5 MiB → 0 B |            26,708 → 0 | `addMemberForKeyTypeWorker`     | `node_modules/typescript/lib/typescript.js` |
|  -44.0% |    -5.5 MiB |   1.3% → 1.0% |    12.5 MiB → 7 MiB |     249,247 → 125,119 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js` |
|  -40.0% |  -5.001 MiB |   1.3% → 1.0% |  12.5 MiB → 7.5 MiB |       73,443 → 42,278 | `join`                          | `<unknown>`                                 |
|  -60.0% |    -4.5 MiB |   0.8% → 0.4% |     7.5 MiB → 3 MiB |       83,842 → 31,458 | `concatenate`                   | `node_modules/typescript/lib/typescript.js` |
|  -51.5% |   -4.25 MiB |   0.9% → 0.5% |    8.25 MiB → 4 MiB |       32,778 → 21,848 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  -34.8% |      -4 MiB |   1.2% → 1.0% |  11.5 MiB → 7.5 MiB |       74,306 → 50,105 | `push`                          | `<unknown>`                                 |
|  -24.0% |  -3.872 MiB |          1.7% | 16.1 MiB → 12.2 MiB |       43,696 → 13,713 | `hasSkipDirectInferenceFlag`    | `node_modules/typescript/lib/typescript.js` |
|  -28.3% |  -3.531 MiB |   1.3% → 1.2% | 12.5 MiB → 8.97 MiB |             187 → 976 | `slice`                         | `node:buffer`                               |
|  -54.5% |      -3 MiB |   0.6% → 0.3% |   5.5 MiB → 2.5 MiB |       51,853 → 21,564 | `instantiateConstituent`        | `node_modules/typescript/lib/typescript.js` |

##### Third-party

|  Change |       Delta |             % |                Size |               Objects | Function                                 | Location                                    |
| ------: | ----------: | ------------: | ------------------: | --------------------: | ---------------------------------------- | ------------------------------------------- |
| removed | -46.506 MiB |   5.0% → 0.0% |      46.5 MiB → 0 B |           435,406 → 0 | `createBaseIdentifierNode`               | `node_modules/typescript/lib/typescript.js` |
|  -20.0% | -24.001 MiB | 12.9% → 13.1% |    120 MiB → 96 MiB | 1,999,948 → 1,720,054 | `instantiateSymbol`                      | `node_modules/typescript/lib/typescript.js` |
|  -41.5% |  -8.501 MiB |   2.2% → 1.6% |   20.5 MiB → 12 MiB |      149,291 → 87,386 | `parseTypeReference`                     | `node_modules/typescript/lib/typescript.js` |
|  -39.0% |  -7.995 MiB |   2.2% → 1.7% | 20.5 MiB → 12.5 MiB |     217,085 → 108,077 | `instantiateTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  -44.1% |  -7.501 MiB |   1.8% → 1.3% |    17 MiB → 9.5 MiB |      178,658 → 78,485 | `instantiateList`                        | `node_modules/typescript/lib/typescript.js` |
|  -31.9% |    -7.5 MiB |   2.5% → 2.2% |   23.5 MiB → 16 MiB |     171,131 → 116,516 | `createBaseNode`                         | `node_modules/typescript/lib/typescript.js` |
| removed |    -6.5 MiB |   0.7% → 0.0% |       6.5 MiB → 0 B |            47,334 → 0 | `createBaseCallExpression`               | `node_modules/typescript/lib/typescript.js` |
|  -17.4% |      -6 MiB |   3.7% → 3.9% | 34.5 MiB → 28.5 MiB |     573,008 → 427,885 | `declareSymbol`                          | `node_modules/typescript/lib/typescript.js` |
|  -21.8% |      -6 MiB |   3.0% → 2.9% | 27.5 MiB → 21.5 MiB |     660,864 → 515,589 | `createNodeArray`                        | `node_modules/typescript/lib/typescript.js` |
| removed |  -5.501 MiB |   0.6% → 0.0% |       5.5 MiB → 0 B |            26,708 → 0 | `addMemberForKeyTypeWorker`              | `node_modules/typescript/lib/typescript.js` |
|  -44.0% |    -5.5 MiB |   1.3% → 1.0% |    12.5 MiB → 7 MiB |     249,247 → 125,119 | `createNormalizedTypeReference`          | `node_modules/typescript/lib/typescript.js` |
|  -60.0% |    -4.5 MiB |   0.8% → 0.4% |     7.5 MiB → 3 MiB |       83,842 → 31,458 | `concatenate`                            | `node_modules/typescript/lib/typescript.js` |
|  -51.5% |   -4.25 MiB |   0.9% → 0.5% |    8.25 MiB → 4 MiB |       32,778 → 21,848 | `getNodeLinks`                           | `node_modules/typescript/lib/typescript.js` |
|  -24.0% |  -3.872 MiB |          1.7% | 16.1 MiB → 12.2 MiB |       43,696 → 13,713 | `hasSkipDirectInferenceFlag`             | `node_modules/typescript/lib/typescript.js` |
|  -54.5% |      -3 MiB |   0.6% → 0.3% |   5.5 MiB → 2.5 MiB |       51,853 → 21,564 | `instantiateConstituent`                 | `node_modules/typescript/lib/typescript.js` |
|  -85.7% |      -3 MiB |   0.4% → 0.1% |   3.5 MiB → 512 KiB |        50,975 → 7,282 | `bindContainer`                          | `node_modules/typescript/lib/typescript.js` |
|  -12.0% |  -2.999 MiB |   2.7% → 3.0% |     25 MiB → 22 MiB |     203,768 → 166,631 | `instantiateAnonymousType`               | `node_modules/typescript/lib/typescript.js` |
|  -84.6% |   -2.75 MiB |   0.4% → 0.1% |  3.25 MiB → 512 KiB |       32,776 → 16,385 | `getTypeOfVariableOrParameterOrProperty` | `node_modules/typescript/lib/typescript.js` |
|  -38.5% |    -2.5 MiB |   0.7% → 0.5% |     6.5 MiB → 4 MiB |       78,191 → 53,469 | `mapDefined`                             | `node_modules/typescript/lib/typescript.js` |
|  -17.9% |    -2.5 MiB |   1.5% → 1.6% |   14 MiB → 11.5 MiB |     183,512 → 150,742 | `createBaseTokenNode`                    | `node_modules/typescript/lib/typescript.js` |

##### Standard library

|  Change |        Delta |           % |                Size |           Objects | Function                   | Location                        |
| ------: | -----------: | ----------: | ------------------: | ----------------: | -------------------------- | ------------------------------- |
|  -35.6% |  -24.004 MiB | 7.3% → 5.9% | 67.5 MiB → 43.5 MiB | 763,246 → 571,780 | `Map`                      | `<unknown>`                     |
|  -21.2% |  -18.325 MiB |        9.3% | 86.4 MiB → 68.1 MiB |   46,472 → 30,875 | `set`                      | `<unknown>`                     |
|  -40.0% |   -5.001 MiB | 1.3% → 1.0% |  12.5 MiB → 7.5 MiB |   73,443 → 42,278 | `join`                     | `<unknown>`                     |
|  -34.8% |       -4 MiB | 1.2% → 1.0% |  11.5 MiB → 7.5 MiB |   74,306 → 50,105 | `push`                     | `<unknown>`                     |
|  -28.3% |   -3.531 MiB | 1.3% → 1.2% | 12.5 MiB → 8.97 MiB |         187 → 976 | `slice`                    | `node:buffer`                   |
|  -62.5% |     -2.5 MiB | 0.4% → 0.2% |     4 MiB → 1.5 MiB |  131,079 → 49,155 | `trimEnd`                  | `<unknown>`                     |
| removed |   -1.504 MiB | 0.2% → 0.0% |       1.5 MiB → 0 B |           976 → 0 | `add`                      | `<unknown>`                     |
|  -37.5% |     -1.5 MiB | 0.4% → 0.3% |     4 MiB → 2.5 MiB |   25,607 → 15,257 | `splice`                   | `<unknown>`                     |
| removed | -515.562 KiB | 0.1% → 0.0% |       516 KiB → 0 B |           113 → 0 | `forEach`                  | `<unknown>`                     |
|  -50.0% | -512.031 KiB |        0.1% |     1 MiB → 512 KiB |   32,770 → 16,385 | `slice`                    | `<unknown>`                     |
| removed | -512.031 KiB | 0.1% → 0.0% |       512 KiB → 0 B |        13,108 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm` |
|  -50.0% | -512.015 KiB |        0.1% |     1 MiB → 512 KiB |   43,692 → 21,846 | `toString`                 | `<unknown>`                     |
| removed | -512.015 KiB | 0.1% → 0.0% |       512 KiB → 0 B |        21,846 → 0 | `String`                   | `<unknown>`                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Third-party

|   Change |       Delta |            % |                Size |           Objects | Function                                      | Location                                    |
| -------: | ----------: | -----------: | ------------------: | ----------------: | --------------------------------------------- | ------------------------------------------- |
|      new | +83.263 MiB | 0.0% → 11.4% |      0 B → 83.3 MiB |       0 → 907,425 | `parseObjectTypeMembers`                      | `node_modules/typescript/lib/typescript.js` |
|      new | +51.505 MiB |  0.0% → 7.0% |      0 B → 51.5 MiB |       0 → 586,523 | `parseParameter`                              | `node_modules/typescript/lib/typescript.js` |
| +7308.4% | +36.551 MiB |  0.1% → 5.1% |  512 KiB → 37.1 MiB |   4,097 → 357,841 | `parseVariableDeclaration`                    | `node_modules/typescript/lib/typescript.js` |
|  +155.6% | +18.679 MiB |  1.3% → 4.2% |   12 MiB → 30.7 MiB | 161,210 → 180,504 | `inferFromProperties`                         | `node_modules/typescript/lib/typescript.js` |
|      new | +16.596 MiB |  0.0% → 2.3% |      0 B → 16.6 MiB |       0 → 242,460 | `getTypeOfMappedSymbol`                       | `node_modules/typescript/lib/typescript.js` |
|  +908.7% | +13.631 MiB |  0.2% → 2.1% |  1.5 MiB → 15.1 MiB |   18,750 → 23,391 | `inferFromSignature`                          | `node_modules/typescript/lib/typescript.js` |
|      new | +10.001 MiB |  0.0% → 1.4% |        0 B → 10 MiB |        0 → 93,634 | `parseNameOfParameter`                        | `node_modules/typescript/lib/typescript.js` |
|   +59.4% |  +9.596 MiB |  1.7% → 3.5% | 16.2 MiB → 25.8 MiB | 145,137 → 220,616 | `parseIdentifierName`                         | `node_modules/typescript/lib/typescript.js` |
|   +27.2% |  +6.379 MiB |  2.5% → 4.1% | 23.4 MiB → 29.8 MiB | 258,653 → 413,660 | `checkClassLikeDeclaration`                   | `node_modules/typescript/lib/typescript.js` |
|      new |  +4.001 MiB |  0.0% → 0.5% |         0 B → 4 MiB |        0 → 47,660 | `parseJSDocComment`                           | `node_modules/typescript/lib/typescript.js` |
|      new |      +4 MiB |  0.0% → 0.5% |         0 B → 4 MiB |        0 → 29,130 | `createJSDocComment`                          | `node_modules/typescript/lib/typescript.js` |
|  +399.9% |      +4 MiB |  0.1% → 0.7% |       1 MiB → 5 MiB |    9,832 → 73,085 | `parseHeritageClauses`                        | `node_modules/typescript/lib/typescript.js` |
|  +699.3% |    +3.5 MiB |  0.1% → 0.5% |     513 KiB → 4 MiB |      462 → 59,742 | `loadModuleFromImmediateNodeModulesDirectory` | `node_modules/typescript/lib/typescript.js` |
|   +22.3% |  +3.012 MiB |  1.5% → 2.3% | 13.5 MiB → 16.5 MiB |   54,909 → 57,812 | `isTypeOrBaseIdenticalTo`                     | `node_modules/typescript/lib/typescript.js` |
|   +85.7% |  +3.002 MiB |  0.4% → 0.9% |  3.5 MiB → 6.51 MiB |   22,325 → 37,243 | `getNormalizedUnionOrIntersectionType`        | `node_modules/typescript/lib/typescript.js` |
|  +150.0% |      +3 MiB |  0.2% → 0.7% |       2 MiB → 5 MiB |   16,904 → 68,278 | `bindFunctionOrConstructorType`               | `node_modules/typescript/lib/typescript.js` |
|   +30.8% |  +2.999 MiB |  1.1% → 1.7% | 9.75 MiB → 12.8 MiB |   44,695 → 77,243 | `getTypeOfParameter`                          | `node_modules/typescript/lib/typescript.js` |
|   +27.1% |  +2.511 MiB |  1.0% → 1.6% | 9.25 MiB → 11.8 MiB | 126,571 → 156,443 | `checkIdentifier`                             | `node_modules/typescript/lib/typescript.js` |
|  +166.7% |    +2.5 MiB |  0.2% → 0.5% |     1.5 MiB → 4 MiB |   14,046 → 37,455 | `createSymbol`                                | `node_modules/typescript/lib/typescript.js` |
|   +25.0% |  +2.499 MiB |  1.1% → 1.7% |   10 MiB → 12.5 MiB | 116,771 → 185,083 | `bindParameterFlow`                           | `node_modules/typescript/lib/typescript.js` |

##### Standard library

|  Change |        Delta |           % |                Size |         Objects | Function         | Location                                   |
| ------: | -----------: | ----------: | ------------------: | --------------: | ---------------- | ------------------------------------------ |
| +428.5% |   +2.142 MiB | 0.1% → 0.4% |  512 KiB → 2.64 MiB | 21,846 → 38,266 | `wrapSafe`       | `node:internal/modules/cjs/loader`         |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `(anonymous)`    | `node:internal/modules/cjs/loader:1878:37` |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `(anonymous)`    | `node:internal/modules/cjs/loader:1490:33` |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `(anonymous)`    | `node:internal/modules/cjs/loader:1193:24` |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `(anonymous)`    | `node:internal/modules/cjs/loader:1519:36` |
|  +37.0% |   +1.672 MiB | 0.5% → 0.8% | 4.52 MiB → 6.19 MiB | 92,998 → 88,993 | `(anonymous)`    | `node:internal/modules/cjs/loader:1731:37` |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `wrapModuleLoad` | `node:internal/modules/cjs/loader`         |
|  +12.6% |   +1.672 MiB | 1.4% → 2.0% | 13.2 MiB → 14.9 MiB | 92,999 → 88,994 | `require`        | `node:internal/modules/helpers`            |
|     new | +512.937 KiB | 0.0% → 0.1% |       0 B → 513 KiB |         0 → 283 | `exec`           | `<unknown>`                                |
|     new | +512.062 KiB | 0.0% → 0.1% |       0 B → 512 KiB |       0 → 5,462 | `sort`           | `<unknown>`                                |
|     ~0% |        +64 B |        0.1% |             512 KiB |   2,731 → 3,856 | `replace`        | `<unknown>`                                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                              |
| ------: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ----------------------------------------------------- |
|  -22.0% | -157.726 MiB | 77.4% → 76.5% | 718 MiB → 560 MiB | 7,706,855 → 5,770,235 | `next`                                     | `<unknown>`                                           |
|  -21.5% | -155.179 MiB | 77.9% → 77.5% | 723 MiB → 567 MiB | 7,813,936 → 5,868,039 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
|  -21.5% |  -154.68 MiB | 77.5% → 77.0% | 718 MiB → 564 MiB | 7,728,122 → 5,802,917 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
|  -21.6% | -149.142 MiB | 74.6% → 74.1% | 692 MiB → 543 MiB | 7,427,542 → 5,565,012 | `run`                                      | `node:internal/modules/esm/module_job`                |
|  -21.5% | -144.186 MiB | 72.3% → 71.9% | 670 MiB → 526 MiB | 7,198,747 → 5,368,364 | `(anonymous)`                              | `<unknown>`                                           |
|  -21.2% | -108.006 MiB | 54.9% → 54.8% | 509 MiB → 401 MiB | 5,701,898 → 4,338,465 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -106.668 MiB |  11.5% → 0.0% |     107 MiB → 0 B |         1,150,648 → 0 | `parseTypeMember`                          | `node_modules/typescript/lib/typescript.js`           |
|  -21.1% | -106.507 MiB |         54.4% | 504 MiB → 398 MiB | 5,647,529 → 4,303,402 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
|  -21.3% | -106.506 MiB | 53.9% → 53.7% | 500 MiB → 393 MiB | 5,590,212 → 4,224,196 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
|  -21.4% |  -104.38 MiB | 52.7% → 52.4% | 488 MiB → 384 MiB | 5,455,006 → 4,148,461 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
|  -22.7% | -103.382 MiB | 49.1% → 48.1% | 456 MiB → 352 MiB | 5,047,117 → 3,700,780 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
|  -21.0% | -103.366 MiB | 53.2% → 53.3% | 493 MiB → 390 MiB | 5,513,490 → 4,184,530 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed |  -102.01 MiB |  11.0% → 0.0% |     102 MiB → 0 B |         1,078,932 → 0 | `parseUnionTypeOrHigher`                   | `node_modules/typescript/lib/typescript.js`           |
|  -21.5% | -101.751 MiB | 51.1% → 50.8% | 474 MiB → 372 MiB | 5,096,537 → 3,877,462 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
|  -21.5% |   -101.5 MiB | 50.9% → 50.6% | 472 MiB → 371 MiB | 5,072,609 → 3,877,779 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
|  -21.0% | -101.374 MiB |         52.0% | 482 MiB → 380 MiB | 5,378,038 → 4,084,424 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
|  -21.6% | -100.884 MiB | 50.3% → 49.9% | 466 MiB → 365 MiB | 5,195,280 → 3,909,596 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -22.5% | -100.872 MiB | 48.4% → 47.5% | 449 MiB → 348 MiB | 4,946,952 → 3,593,223 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -20.5% |  -96.826 MiB | 51.0% → 51.4% | 473 MiB → 376 MiB | 5,281,589 → 4,044,255 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
|  -22.2% |  -92.661 MiB | 44.9% → 44.3% | 417 MiB → 324 MiB | 4,540,388 → 3,317,041 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |

##### Third-party

|  Change |        Delta |             % |              Size |               Objects | Function                                   | Location                                              |
| ------: | -----------: | ------------: | ----------------: | --------------------: | ------------------------------------------ | ----------------------------------------------------- |
|  -21.2% | -108.006 MiB | 54.9% → 54.8% | 509 MiB → 401 MiB | 5,701,898 → 4,338,465 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| removed | -106.668 MiB |  11.5% → 0.0% |     107 MiB → 0 B |         1,150,648 → 0 | `parseTypeMember`                          | `node_modules/typescript/lib/typescript.js`           |
|  -21.1% | -106.507 MiB |         54.4% | 504 MiB → 398 MiB | 5,647,529 → 4,303,402 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
|  -21.3% | -106.506 MiB | 53.9% → 53.7% | 500 MiB → 393 MiB | 5,590,212 → 4,224,196 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
|  -21.4% |  -104.38 MiB | 52.7% → 52.4% | 488 MiB → 384 MiB | 5,455,006 → 4,148,461 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
|  -22.7% | -103.382 MiB | 49.1% → 48.1% | 456 MiB → 352 MiB | 5,047,117 → 3,700,780 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
|  -21.0% | -103.366 MiB | 53.2% → 53.3% | 493 MiB → 390 MiB | 5,513,490 → 4,184,530 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| removed |  -102.01 MiB |  11.0% → 0.0% |     102 MiB → 0 B |         1,078,932 → 0 | `parseUnionTypeOrHigher`                   | `node_modules/typescript/lib/typescript.js`           |
|  -21.5% | -101.751 MiB | 51.1% → 50.8% | 474 MiB → 372 MiB | 5,096,537 → 3,877,462 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
|  -21.5% |   -101.5 MiB | 50.9% → 50.6% | 472 MiB → 371 MiB | 5,072,609 → 3,877,779 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
|  -21.0% | -101.374 MiB |         52.0% | 482 MiB → 380 MiB | 5,378,038 → 4,084,424 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
|  -21.6% | -100.884 MiB | 50.3% → 49.9% | 466 MiB → 365 MiB | 5,195,280 → 3,909,596 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -22.5% | -100.872 MiB | 48.4% → 47.5% | 449 MiB → 348 MiB | 4,946,952 → 3,593,223 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
|  -20.5% |  -96.826 MiB | 51.0% → 51.4% | 473 MiB → 376 MiB | 5,281,589 → 4,044,255 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
|  -22.2% |  -92.661 MiB | 44.9% → 44.3% | 417 MiB → 324 MiB | 4,540,388 → 3,317,041 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
|  -24.5% |  -83.647 MiB | 36.9% → 35.3% | 342 MiB → 258 MiB | 3,619,424 → 2,708,208 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js`           |
|  -18.9% |  -83.231 MiB | 47.6% → 48.9% | 441 MiB → 358 MiB | 4,754,628 → 3,748,726 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
|  -18.6% |  -81.683 MiB | 47.3% → 48.8% | 439 MiB → 357 MiB | 4,740,347 → 3,741,065 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
|  -21.9% |  -81.069 MiB | 39.8% → 39.4% | 369 MiB → 288 MiB | 3,913,621 → 2,964,077 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
|  -18.1% |  -78.664 MiB | 46.8% → 48.5% | 434 MiB → 355 MiB | 4,697,172 → 3,719,784 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|  Change |        Delta |             % |                Size |               Objects | Function                   | Location                               |
| ------: | -----------: | ------------: | ------------------: | --------------------: | -------------------------- | -------------------------------------- |
|  -22.0% | -157.726 MiB | 77.4% → 76.5% |   718 MiB → 560 MiB | 7,706,855 → 5,770,235 | `next`                     | `<unknown>`                            |
|  -21.6% | -149.142 MiB | 74.6% → 74.1% |   692 MiB → 543 MiB | 7,427,542 → 5,565,012 | `run`                      | `node:internal/modules/esm/module_job` |
|  -20.0% |  -57.729 MiB | 31.1% → 31.6% |   289 MiB → 231 MiB | 2,985,936 → 2,409,237 | `forEach`                  | `<unknown>`                            |
|  -34.7% |  -23.457 MiB |   7.3% → 6.0% | 67.5 MiB → 44.1 MiB |     763,246 → 571,790 | `Map`                      | `<unknown>`                            |
|  -21.2% |  -18.325 MiB |          9.3% | 86.4 MiB → 68.1 MiB |       46,472 → 30,875 | `set`                      | `<unknown>`                            |
|  -40.0% |   -5.001 MiB |   1.3% → 1.0% |  12.5 MiB → 7.5 MiB |       73,443 → 42,278 | `join`                     | `<unknown>`                            |
|  -34.8% |       -4 MiB |   1.2% → 1.0% |  11.5 MiB → 7.5 MiB |       74,306 → 50,105 | `push`                     | `<unknown>`                            |
|  -28.3% |   -3.531 MiB |   1.3% → 1.2% | 12.5 MiB → 8.97 MiB |             187 → 976 | `slice`                    | `node:buffer`                          |
|  -28.3% |   -3.531 MiB |   1.3% → 1.2% | 12.5 MiB → 8.97 MiB |             187 → 976 | `toString`                 | `node:buffer`                          |
|  -62.5% |     -2.5 MiB |   0.4% → 0.2% |     4 MiB → 1.5 MiB |      131,079 → 49,155 | `trimEnd`                  | `<unknown>`                            |
| removed |   -1.504 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |               976 → 0 | `add`                      | `<unknown>`                            |
|  -37.5% |     -1.5 MiB |   0.4% → 0.3% |     4 MiB → 2.5 MiB |       25,607 → 15,257 | `splice`                   | `<unknown>`                            |
| removed | -512.656 KiB |   0.1% → 0.0% |       513 KiB → 0 B |               772 → 0 | `Set`                      | `<unknown>`                            |
|  -50.0% | -512.031 KiB |          0.1% |     1 MiB → 512 KiB |       32,770 → 16,385 | `slice`                    | `<unknown>`                            |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `compileForInternalLoader` | `node:internal/bootstrap/realm`        |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `requireBuiltin`           | `node:internal/bootstrap/realm`        |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `(anonymous)`              | `node:internal/perf/timerify:1:1`      |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `(anonymous)`              | `node:internal/perf/performance:1:1`   |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `(anonymous)`              | `node:perf_hooks:1:1`                  |
| removed | -512.031 KiB |   0.1% → 0.0% |       512 KiB → 0 B |            13,108 → 0 | `get`                      | `node:internal/util`                   |
