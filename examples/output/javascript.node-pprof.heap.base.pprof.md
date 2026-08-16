# Heap profile

Allocated 927 MiB over 10,093,789 objects (96.3 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 76.8% |  712 MiB | 8,842,365 |
| Standard library | 23.0% |  213 MiB | 1,251,423 |
| Native           |  0.2% | 1.98 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Objects | Function                        | Location                                             |
| ----: | -------: | --------: | ------------------------------- | ---------------------------------------------------- |
| 12.9% |  120 MiB | 1,999,948 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  9.3% | 86.4 MiB |    46,472 | `set`                           | `<unknown>`                                          |
|  7.3% | 67.5 MiB |   763,246 | `Map`                           | `<unknown>`                                          |
|  5.0% | 46.5 MiB |   435,406 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  3.7% | 34.5 MiB |   573,008 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  3.0% | 27.5 MiB |   660,864 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  2.8% |   26 MiB |   169,039 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  2.7% |   25 MiB |   203,768 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  2.5% | 23.5 MiB |   171,131 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 20.5 MiB |   217,085 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 20.5 MiB |   149,291 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  2.0% |   19 MiB |   270,901 | `createParameterDeclaration`    | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   17 MiB |   178,658 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 16.1 MiB |    43,696 | `hasSkipDirectInferenceFlag`    | `node_modules/typescript/lib/typescript.js`          |
|  1.7% |   16 MiB |    86,817 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.5% |   14 MiB |   183,512 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.5% | 13.5 MiB |   185,513 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |   13 MiB |    94,675 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 12.5 MiB |    73,443 | `join`                          | `<unknown>`                                          |
|  1.3% | 12.5 MiB |   249,247 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |

#### Categories

##### Third-party

|     % |     Size |   Objects | Function                        | Location                                             |
| ----: | -------: | --------: | ------------------------------- | ---------------------------------------------------- |
| 12.9% |  120 MiB | 1,999,948 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  5.0% | 46.5 MiB |   435,406 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  3.7% | 34.5 MiB |   573,008 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  3.0% | 27.5 MiB |   660,864 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  2.8% |   26 MiB |   169,039 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  2.7% |   25 MiB |   203,768 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  2.5% | 23.5 MiB |   171,131 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 20.5 MiB |   217,085 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 20.5 MiB |   149,291 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  2.0% |   19 MiB |   270,901 | `createParameterDeclaration`    | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   17 MiB |   178,658 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 16.1 MiB |    43,696 | `hasSkipDirectInferenceFlag`    | `node_modules/typescript/lib/typescript.js`          |
|  1.7% |   16 MiB |    86,817 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.5% |   14 MiB |   183,512 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.5% | 13.5 MiB |   185,513 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |   13 MiB |    94,675 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 12.5 MiB |   249,247 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
|  1.2% | 11.5 MiB |   107,683 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  1.2% |   11 MiB |    80,108 | `parseLiteralLikeNode`          | `node_modules/typescript/lib/typescript.js`          |
|  1.0% | 9.52 MiB |     6,902 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function                   | Location                           |
| ---: | -------: | ------: | -------------------------- | ---------------------------------- |
| 9.3% | 86.4 MiB |  46,472 | `set`                      | `<unknown>`                        |
| 7.3% | 67.5 MiB | 763,246 | `Map`                      | `<unknown>`                        |
| 1.3% | 12.5 MiB |  73,443 | `join`                     | `<unknown>`                        |
| 1.3% | 12.5 MiB |     187 | `slice`                    | `node:buffer`                      |
| 1.2% | 11.5 MiB |  74,306 | `push`                     | `<unknown>`                        |
| 0.9% | 8.72 MiB |       1 | `readFileSync`             | `node:fs`                          |
| 0.4% |    4 MiB |  25,607 | `splice`                   | `<unknown>`                        |
| 0.4% |    4 MiB | 131,079 | `trimEnd`                  | `<unknown>`                        |
| 0.2% |  1.5 MiB |     976 | `add`                      | `<unknown>`                        |
| 0.1% |    1 MiB |  32,770 | `slice`                    | `<unknown>`                        |
| 0.1% |    1 MiB |  43,692 | `toString`                 | `<unknown>`                        |
| 0.1% |  516 KiB |     113 | `forEach`                  | `<unknown>`                        |
| 0.1% |  512 KiB |   2,731 | `replace`                  | `<unknown>`                        |
| 0.1% |  512 KiB |  13,108 | `compileForInternalLoader` | `node:internal/bootstrap/realm`    |
| 0.1% |  512 KiB |  21,846 | `String`                   | `<unknown>`                        |
| 0.1% |  512 KiB |  21,846 | `wrapSafe`                 | `node:internal/modules/cjs/loader` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Location                                          |
| -----: | ------: | --------: | ------------------------------------------------- |
| 100.0% | 120 MiB | 1,999,948 | `node_modules/typescript/lib/typescript.js:62092` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 46.5 MiB | 435,406 | `node_modules/typescript/lib/typescript.js:29227` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 34.5 MiB | 573,008 | `node_modules/typescript/lib/typescript.js:42491` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 27.5 MiB | 660,864 | `node_modules/typescript/lib/typescript.js:30064` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 26 MiB | 169,039 | `node_modules/typescript/lib/typescript.js:62067` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 25 MiB | 203,768 | `node_modules/typescript/lib/typescript.js:62289` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 23.5 MiB | 171,131 | `node_modules/typescript/lib/typescript.js:29248` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 20.5 MiB | 217,085 | `node_modules/typescript/lib/typescript.js:61974` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 20.5 MiB | 149,291 | `node_modules/typescript/lib/typescript.js:30964` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 19 MiB | 270,901 | `node_modules/typescript/lib/typescript.js:21445` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 17 MiB | 178,658 | `node_modules/typescript/lib/typescript.js:61957` |

##### `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 16.1 MiB |  43,696 | `node_modules/typescript/lib/typescript.js:67075` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 16 MiB |  86,817 | `node_modules/typescript/lib/typescript.js:50117` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 14 MiB | 183,512 | `node_modules/typescript/lib/typescript.js:29241` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 13.5 MiB | 185,513 | `node_modules/typescript/lib/typescript.js:62119` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 13 MiB |  94,675 | `node_modules/typescript/lib/typescript.js:31613` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 12.5 MiB | 249,247 | `node_modules/typescript/lib/typescript.js:59887` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 12.5 MiB |     187 | `node:buffer:640` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.5 MiB | 107,683 | `node_modules/typescript/lib/typescript.js:30115` |

##### `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 11 MiB |  80,108 | `node_modules/typescript/lib/typescript.js:30928` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 9.52 MiB |   6,902 | `node_modules/typescript/lib/typescript.js:63505` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.72 MiB |       1 | `node:fs:433` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 512 KiB |  13,108 | `node:internal/bootstrap/realm:385` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |    Size | Objects | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `node:internal/modules/cjs/loader:1671` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Caller                        | Location                                    |
| ----: | ------: | --------: | ----------------------------- | ------------------------------------------- |
| 84.6% | 102 MiB | 1,717,179 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  7.9% | 9.5 MiB |   131,087 | `instantiateSignature`        | `node_modules/typescript/lib/typescript.js` |
|  3.3% |   4 MiB |    54,307 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  3.3% |   4 MiB |    79,585 | `createErasedSignature`       | `node_modules/typescript/lib/typescript.js` |
|  0.4% | 512 KiB |     4,682 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                       | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 25.5% | 22.1 MiB |  13,413 | `resolveObjectTypeMembers`   | `node_modules/typescript/lib/typescript.js` |
| 21.5% | 18.6 MiB |  10,373 | `addInheritedMembers`        | `node_modules/typescript/lib/typescript.js` |
|  8.3% | 7.13 MiB |   2,298 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  7.4% | 6.41 MiB |      71 | `recursiveTypeRelatedTo`     | `node_modules/typescript/lib/typescript.js` |
|  6.9% | 5.92 MiB |     189 | `resetMaybeStack`            | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                    |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------- |
| 80.7% | 54.5 MiB | 608,871 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js` |
| 14.1% |  9.5 MiB | 104,355 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js` |
|  1.5% |    1 MiB |   6,900 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js` |
|  0.7% |  512 KiB |   3,450 | `getTypeAtFlowLoopLabel`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% |  512 KiB |   3,450 | `createModeAwareCache`          | `node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                   | Location                                    |
| ----: | -------: | ------: | ------------------------ | ------------------------------------------- |
| 74.2% | 34.5 MiB | 323,043 | `createIdentifier`       | `node_modules/typescript/lib/typescript.js` |
| 19.4% |    9 MiB |  84,272 | `parsePrimaryExpression` | `node_modules/typescript/lib/typescript.js` |
|  6.5% |    3 MiB |  28,091 | `parseIdentifier`        | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 72.5% |  25 MiB | 422,265 | `declareSymbolAndAddToSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 17.4% |   6 MiB | 102,056 | `declareModuleMember`                     | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 1.5 MiB |  22,471 | `bindVariableDeclarationOrBindingElement` | `node_modules/typescript/lib/typescript.js` |
|  2.9% |   1 MiB |  13,108 | `bindBlockScopedDeclaration`              | `node_modules/typescript/lib/typescript.js` |
|  2.9% |   1 MiB |  13,108 | `declareClassMember`                      | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 50.9% |  14 MiB | 365,930 | `parseDelimitedList`     | `node_modules/typescript/lib/typescript.js` |
| 20.0% | 5.5 MiB | 131,080 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 16.4% | 4.5 MiB |  84,658 | `parseList`              | `node_modules/typescript/lib/typescript.js` |
|  7.3% |   2 MiB |  54,617 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js` |
|  5.5% | 1.5 MiB |  24,579 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                      | Location                                    |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------- |
| 90.4% | 23.5 MiB | 155,505 | `instantiateList`           | `node_modules/typescript/lib/typescript.js` |
|  5.8% |  1.5 MiB |   8,492 | `getSignatureInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  3.8% |    1 MiB |   5,042 | `instantiateSignatures`     | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Objects | Caller                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 92.0% | 23 MiB | 187,679 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  4.0% |  1 MiB |   8,740 | `instantiateConstituent`     | `node_modules/typescript/lib/typescript.js` |
|  4.0% |  1 MiB |   7,349 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                      | Location                                    |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------- |
| 40.4% | 9.5 MiB |  69,181 | `createBaseDeclaration`     | `node_modules/typescript/lib/typescript.js` |
| 19.1% | 4.5 MiB |  32,770 | `createUnionTypeNode`       | `node_modules/typescript/lib/typescript.js` |
|  8.5% |   2 MiB |  14,565 | `parseInterfaceDeclaration` | `node_modules/typescript/lib/typescript.js` |
|  8.5% |   2 MiB |  14,564 | `doJSDocScan`               | `node_modules/typescript/lib/typescript.js` |
|  8.5% |   2 MiB |  14,564 | `createTypeLiteralNode`     | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 20.5 MiB | 217,085 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller              | Location                                    |
| -----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 20.5 MiB | 149,291 | `parseNonArrayType` | `node_modules/typescript/lib/typescript.js` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 19 MiB | 270,901 | `parseParameterWorker` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 76.5% |  13 MiB | 141,440 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  8.8% | 1.5 MiB |  10,350 | `instantiateConstituent`      | `node_modules/typescript/lib/typescript.js` |
|  5.9% |   1 MiB |  16,518 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  5.9% |   1 MiB |   6,900 | `instantiateSignature`        | `node_modules/typescript/lib/typescript.js` |
|  2.9% | 512 KiB |   3,450 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                         | Location                                    |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 96.9% | 15.6 MiB |  32,773 | `checkExpressionWorker`        | `node_modules/typescript/lib/typescript.js` |
|  3.1% |  512 KiB |  10,923 | `isFromInferenceBlockedSource` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Objects | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 16 MiB |  86,817 | `forEach` | `<unknown>` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller        | Location                                    |
| -----: | -----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 14 MiB | 183,512 | `createToken` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 13.5 MiB | 185,513 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 13 MiB |  94,675 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 72.0% |   9 MiB |  44,985 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 28.0% | 3.5 MiB |  28,458 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 12.5 MiB | 249,247 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 12.5 MiB |     187 | `toString` | `node:buffer` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 39.1% | 4.5 MiB |  28,090 | `pushIfUnique`           | `node_modules/typescript/lib/typescript.js` |
| 21.7% | 2.5 MiB |  17,250 | `getIntersectionType`    | `node_modules/typescript/lib/typescript.js` |
| 17.4% |   2 MiB |  13,800 | `getSignaturesOfSymbol`  | `node_modules/typescript/lib/typescript.js` |
|  8.7% |   1 MiB |   6,900 | `mapDefined`             | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   1,366 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 87.0% |  10 MiB |  93,637 | `parseBindingIdentifier` | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   4,682 | `parseRightSideOfDot`    | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   4,682 | `parseParameterWorker`   | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   4,682 | `parsePropertyName`      | `node_modules/typescript/lib/typescript.js` |

##### `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                 | Location                                    |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 86.4% | 9.5 MiB |  69,185 | `parseNonArrayType`    | `node_modules/typescript/lib/typescript.js` |
|  9.1% |   1 MiB |   7,282 | `parseLiteralNode`     | `node_modules/typescript/lib/typescript.js` |
|  4.5% | 512 KiB |   3,641 | `parseModuleSpecifier` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                    | Location                                    |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------- |
| 94.7% | 9.02 MiB |   6,734 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js` |
|  5.3% |  515 KiB |     168 | `isTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `splice` (`<unknown>`)

|     % |    Size | Objects | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 62.5% | 2.5 MiB |  15,257 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js` |
| 37.5% | 1.5 MiB |  10,350 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location                                    |
| ----: | ----: | ------: | ------------------ | ------------------------------------------- |
| 75.0% | 3 MiB |  98,309 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 25.0% | 1 MiB |  32,770 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|     % |    Size | Objects | Caller          | Location                                    |
| ----: | ------: | ------: | --------------- | ------------------------------------------- |
| 66.7% |   1 MiB |     204 | `declareSymbol` | `node_modules/typescript/lib/typescript.js` |
| 33.3% | 513 KiB |     772 | `Set`           | `<unknown>`                                 |

##### `slice` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                             |
| ----: | ------: | ------: | ------------------ | ---------------------------------------------------- |
| 50.0% | 512 KiB |  16,385 | `(anonymous)`      | `node_modules/typescript/lib/typescript.js:69360:55` |
| 50.0% | 512 KiB |  16,385 | `instantiateTypes` | `node_modules/typescript/lib/typescript.js`          |

##### `toString` (`<unknown>`)

|      % |  Size | Objects | Caller                | Location                                    |
| -----: | ----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 1 MiB |  43,692 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 516 KiB |     113 | `getNamedMembers` | `node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location                                    |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |   2,731 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 512 KiB |  13,108 | `requireBuiltin` | `node:internal/bootstrap/realm` |

##### `String` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `registerCodeFix` | `node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |    Size | Objects | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 512 KiB |  21,846 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 77.9% | 723 MiB | 7,813,936 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 77.5% | 718 MiB | 7,728,122 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
| 77.4% | 718 MiB | 7,706,855 | `next`                                     | `<unknown>`                                           |
| 74.6% | 692 MiB | 7,427,542 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 72.3% | 670 MiB | 7,198,747 | `(anonymous)`                              | `<unknown>`                                           |
| 54.9% | 509 MiB | 5,701,898 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 54.4% | 504 MiB | 5,647,529 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.9% | 500 MiB | 5,590,212 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.2% | 493 MiB | 5,513,490 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 52.7% | 488 MiB | 5,455,006 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 482 MiB | 5,378,038 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.1% | 474 MiB | 5,096,537 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 51.0% | 473 MiB | 5,281,589 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.9% | 472 MiB | 5,072,609 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 50.3% | 466 MiB | 5,195,280 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 49.1% | 456 MiB | 5,047,117 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.4% | 449 MiB | 4,946,952 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 47.6% | 441 MiB | 4,754,628 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 47.3% | 439 MiB | 4,740,347 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.8% | 434 MiB | 4,697,172 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 54.9% | 509 MiB | 5,701,898 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 54.4% | 504 MiB | 5,647,529 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.9% | 500 MiB | 5,590,212 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.2% | 493 MiB | 5,513,490 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 52.7% | 488 MiB | 5,455,006 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 482 MiB | 5,378,038 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.1% | 474 MiB | 5,096,537 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 51.0% | 473 MiB | 5,281,589 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.9% | 472 MiB | 5,072,609 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 50.3% | 466 MiB | 5,195,280 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 49.1% | 456 MiB | 5,047,117 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.4% | 449 MiB | 4,946,952 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 47.6% | 441 MiB | 4,754,628 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 47.3% | 439 MiB | 4,740,347 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.8% | 434 MiB | 4,697,172 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 46.2% | 428 MiB | 4,657,192 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 45.4% | 421 MiB | 4,580,708 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 44.9% | 417 MiB | 4,540,388 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 39.8% | 369 MiB | 3,913,621 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 37.0% | 343 MiB | 3,604,091 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 77.4% |  718 MiB | 7,706,855 | `next`            | `<unknown>`                                |
| 74.6% |  692 MiB | 7,427,542 | `run`             | `node:internal/modules/esm/module_job`     |
| 31.1% |  289 MiB | 2,985,936 | `forEach`         | `<unknown>`                                |
|  9.3% | 86.4 MiB |    46,472 | `set`             | `<unknown>`                                |
|  7.3% | 67.5 MiB |   763,246 | `Map`             | `<unknown>`                                |
|  1.4% | 13.2 MiB |    92,999 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  1.4% | 13.2 MiB |    92,999 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  1.4% | 13.2 MiB |    92,999 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  1.4% | 13.2 MiB |    92,999 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  1.4% | 13.2 MiB |    92,999 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  1.4% | 13.2 MiB |    92,999 | `require`         | `node:internal/modules/helpers`            |
|  1.3% | 12.5 MiB |    73,443 | `join`            | `<unknown>`                                |
|  1.3% | 12.5 MiB |       187 | `slice`           | `node:buffer`                              |
|  1.3% | 12.5 MiB |       187 | `toString`        | `node:buffer`                              |
|  1.2% | 11.5 MiB |    74,306 | `push`            | `<unknown>`                                |
|  0.9% | 8.72 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  0.9% | 8.72 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  0.9% | 8.72 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  0.5% | 4.52 MiB |    92,998 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.4% |    4 MiB |    25,607 | `splice`          | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 61.2% |  442 MiB | 4,830,657 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 36.9% |  267 MiB | 2,890,117 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 13.2 MiB |    92,999 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.8% |  717 MiB | 7,728,121 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.2% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `next` (`<unknown>`)

|     % |     Size |   Objects | Callee                   | Location                                    |
| ----: | -------: | --------: | ------------------------ | ------------------------------------------- |
| 98.2% |  705 MiB | 7,591,316 | `(anonymous)`            | `datadog-pprof-heap.mjs:1:1`                |
|  2.6% | 18.6 MiB |   152,977 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 692 MiB | 7,427,542 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 670 MiB | 7,198,747 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size |   Objects | Callee            | Location                                    |
| ----: | -------: | --------: | ----------------- | ------------------------------------------- |
| 82.1% |  418 MiB | 4,548,339 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |
| 17.9% | 91.2 MiB | 1,153,559 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 504 MiB | 5,647,529 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 500 MiB | 5,590,212 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                    |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 493 MiB | 5,513,490 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                    |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 100.0% | 488 MiB | 5,455,006 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                    |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 482 MiB | 5,378,038 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                       | Location                                    |
| ----: | -------: | --------: | ---------------------------- | ------------------------------------------- |
| 71.7% |  339 MiB | 3,599,931 | `checkBlock`                 | `node_modules/typescript/lib/typescript.js` |
| 45.1% |  214 MiB | 2,139,443 | `checkVariableDeclaration`   | `node_modules/typescript/lib/typescript.js` |
| 44.7% |  212 MiB | 2,112,065 | `checkVariableStatement`     | `node_modules/typescript/lib/typescript.js` |
| 23.9% |  113 MiB | 1,309,852 | `checkExpressionStatement`   | `node_modules/typescript/lib/typescript.js` |
| 20.5% | 97.3 MiB | 1,122,027 | `checkTypeReferenceOrImport` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |    Size |   Objects | Callee                          | Location                                    |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 473 MiB | 5,281,589 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 472 MiB | 5,072,609 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee        | Location                                              |
| ----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 99.9% | 466 MiB | 5,195,117 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |
|  0.1% | 514 KiB |       163 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:27`  |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                    |
| -----: | ------: | --------: | --------- | ------------------------------------------- |
| 100.0% | 456 MiB | 5,047,117 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 449 MiB | 4,946,952 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee               | Location                                    |
| ----: | ------: | --------: | -------------------- | ------------------------------------------- |
| 62.6% | 276 MiB | 2,934,608 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js` |
| 37.4% | 165 MiB | 1,820,020 | `forEach`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                    |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------- |
| 100.0% | 439 MiB | 4,740,347 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                    |
| -----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 100.0% | 434 MiB | 4,697,172 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                    |
| -----: | ------: | --------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 428 MiB | 4,657,192 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 421 MiB | 4,580,708 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                              |
| ----: | -------: | --------: | -------------------- | ----------------------------------------------------- |
| 48.1% |  200 MiB | 2,186,815 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
| 27.5% |  115 MiB | 1,389,854 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
| 19.8% | 82.7 MiB |   776,562 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
| 12.7% |   53 MiB |   610,341 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  5.2% | 21.5 MiB |   243,719 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                    |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------- |
| 92.8% |  343 MiB | 3,604,091 | `checkCallExpression`                          | `node_modules/typescript/lib/typescript.js` |
| 19.3% | 71.4 MiB |   591,090 | `checkObjectLiteral`                           | `node_modules/typescript/lib/typescript.js` |
| 17.6% |   65 MiB |   730,409 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 15.0% | 55.3 MiB |   445,072 | `checkArrayLiteral`                            | `node_modules/typescript/lib/typescript.js` |
| 14.3% | 52.8 MiB |   634,215 | `checkExpressionWorker`                        | `node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                     | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 92.7% |  318 MiB | 3,333,274 | `resolveSignature`         | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 33.7 MiB |   383,309 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |
|  2.3% |    8 MiB |    78,297 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 2.75 MiB |    10,929 | `getNodeLinks`             | `node_modules/typescript/lib/typescript.js` |
|  0.4% |  1.5 MiB |     6,245 | `getReturnTypeFromBody`    | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Callee              | Location                                             |
| ----: | -------: | --------: | ------------------- | ---------------------------------------------------- |
| 97.0% |  280 MiB | 2,962,114 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js`          |
|  5.5% |   16 MiB |    86,817 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.7% | 2.01 MiB |       292 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49804:22` |
|  0.4% | 1.04 MiB |        41 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:47469:22` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 65.9% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 34.1% | 4.52 MiB |  92,998 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |  92,999 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |  92,999 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |  92,999 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 13.2 MiB |  92,999 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |  92,999 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Callee  | Location      |
| -----: | -------: | ------: | ------- | ------------- |
| 100.0% | 12.5 MiB |     187 | `slice` | `node:buffer` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.72 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Objects | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 88.9% | 4.02 MiB |  71,152 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 11.1% |  512 KiB |  21,846 | `wrapSafe`    | `node:internal/modules/cjs/loader`              |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.3% | 12.5 MiB | 218,153 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% | 11.2 MiB |       3 | `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                   |
| 1.0% | 9.02 MiB |   6,734 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                     |
| 0.9% | 8.72 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.7% |  6.5 MiB |  47,338 | `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |  6.5 MiB |  47,338 | `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.7% |  6.5 MiB |  60,861 | `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`) ← `createIdentifier` ← `parseIdentifierName` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 5.25 MiB |       3 | `set` ← `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `getConditionalType` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateType` ← `getTypeOfParameter` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                       |
| 0.5% | 5.03 MiB |       2 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `compilerHost.getSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% | 5.03 MiB |       2 | `slice` (`node:buffer`) ← `toString` ← `readFileWorker` (`node_modules/typescript/lib/typescript.js`) ← `readFile` ← `readFile` ← `compilerHost.getSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% |    5 MiB |  23,731 | `join` ← `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `parseJSDocCommentWorker` ← `(anonymous)` (29528:77) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% | 4.51 MiB |   2,580 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.5% |  4.5 MiB |  69,853 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |  4.5 MiB |  75,839 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% |  4.5 MiB |  84,265 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  4.5 MiB |       3 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getContextualType2` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                    |
| 0.4% |    4 MiB |  60,941 | `mapDefined` (`node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |    4 MiB |  88,009 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker`                                                                                                                                                                               |
| 0.4% |  3.5 MiB |  62,953 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode2` ← `forEachChildInModuleDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |  3.5 MiB |  58,050 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `relateVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `checkTypeReferenceOrImport` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) |
