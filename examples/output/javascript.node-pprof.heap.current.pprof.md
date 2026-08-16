# Heap profile

Allocated 732 MiB over 7,784,774 objects (98.6 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 78.8% |  577 MiB | 6,943,710 |
| Standard library | 20.9% |  153 MiB |   841,063 |
| Native           |  0.3% | 1.98 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size |   Objects | Function                     | Location                                             |
| ----: | -------: | --------: | ---------------------------- | ---------------------------------------------------- |
| 13.1% |   96 MiB | 1,720,054 | `instantiateSymbol`          | `node_modules/typescript/lib/typescript.js`          |
|  9.3% | 68.1 MiB |    30,875 | `set`                        | `<unknown>`                                          |
|  5.9% | 43.5 MiB |   571,780 | `Map`                        | `<unknown>`                                          |
|  4.0% |   29 MiB |   187,880 | `instantiateSignature`       | `node_modules/typescript/lib/typescript.js`          |
|  3.9% | 28.5 MiB |   427,885 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 23.5 MiB |   220,047 | `parseIdentifierName`        | `node_modules/typescript/lib/typescript.js`          |
|  3.0% |   22 MiB |   166,631 | `instantiateAnonymousType`   | `node_modules/typescript/lib/typescript.js`          |
|  2.9% | 21.5 MiB |   515,589 | `createNodeArray`            | `node_modules/typescript/lib/typescript.js`          |
|  2.5% |   18 MiB |   168,546 | `createIdentifier`           | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 16.5 MiB |   167,497 | `createParameterDeclaration` | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   16 MiB |   116,516 | `createBaseNode`             | `node_modules/typescript/lib/typescript.js`          |
|  2.0% | 14.5 MiB |    83,250 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.9% |   14 MiB |   101,957 | `parseNonArrayType`          | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   13 MiB |   192,086 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB |   108,077 | `instantiateTypes`           | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.2 MiB |    13,713 | `hasSkipDirectInferenceFlag` | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |   12 MiB |    87,386 | `parseTypeReference`         | `node_modules/typescript/lib/typescript.js`          |
|  1.6% | 11.5 MiB |   150,742 | `createBaseTokenNode`        | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |   11 MiB |    80,108 | `parseLiteralLikeNode`       | `node_modules/typescript/lib/typescript.js`          |
|  1.4% | 9.97 MiB |       651 | `readFile`                   | `node_modules/typescript/lib/typescript.js`          |

#### Categories

##### Third-party

|     % |     Size |   Objects | Function                     | Location                                             |
| ----: | -------: | --------: | ---------------------------- | ---------------------------------------------------- |
| 13.1% |   96 MiB | 1,720,054 | `instantiateSymbol`          | `node_modules/typescript/lib/typescript.js`          |
|  4.0% |   29 MiB |   187,880 | `instantiateSignature`       | `node_modules/typescript/lib/typescript.js`          |
|  3.9% | 28.5 MiB |   427,885 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 23.5 MiB |   220,047 | `parseIdentifierName`        | `node_modules/typescript/lib/typescript.js`          |
|  3.0% |   22 MiB |   166,631 | `instantiateAnonymousType`   | `node_modules/typescript/lib/typescript.js`          |
|  2.9% | 21.5 MiB |   515,589 | `createNodeArray`            | `node_modules/typescript/lib/typescript.js`          |
|  2.5% |   18 MiB |   168,546 | `createIdentifier`           | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 16.5 MiB |   167,497 | `createParameterDeclaration` | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   16 MiB |   116,516 | `createBaseNode`             | `node_modules/typescript/lib/typescript.js`          |
|  2.0% | 14.5 MiB |    83,250 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.9% |   14 MiB |   101,957 | `parseNonArrayType`          | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   13 MiB |   192,086 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.5 MiB |   108,077 | `instantiateTypes`           | `node_modules/typescript/lib/typescript.js`          |
|  1.7% | 12.2 MiB |    13,713 | `hasSkipDirectInferenceFlag` | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |   12 MiB |    87,386 | `parseTypeReference`         | `node_modules/typescript/lib/typescript.js`          |
|  1.6% | 11.5 MiB |   150,742 | `createBaseTokenNode`        | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |   11 MiB |    80,108 | `parseLiteralLikeNode`       | `node_modules/typescript/lib/typescript.js`          |
|  1.4% | 9.97 MiB |       651 | `readFile`                   | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 9.53 MiB |     3,929 | `checkTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js`          |
|  1.3% |  9.5 MiB |    78,485 | `instantiateList`            | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function       | Location                           |
| ---: | -------: | ------: | -------------- | ---------------------------------- |
| 9.3% | 68.1 MiB |  30,875 | `set`          | `<unknown>`                        |
| 5.9% | 43.5 MiB | 571,780 | `Map`          | `<unknown>`                        |
| 1.2% | 8.97 MiB |     976 | `slice`        | `node:buffer`                      |
| 1.2% | 8.72 MiB |       1 | `readFileSync` | `node:fs`                          |
| 1.0% |  7.5 MiB |  42,278 | `join`         | `<unknown>`                        |
| 1.0% |  7.5 MiB |  50,105 | `push`         | `<unknown>`                        |
| 0.4% | 2.64 MiB |  38,266 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
| 0.3% |  2.5 MiB |  15,257 | `splice`       | `<unknown>`                        |
| 0.2% |  1.5 MiB |  49,155 | `trimEnd`      | `<unknown>`                        |
| 0.1% |  513 KiB |     283 | `exec`         | `<unknown>`                        |
| 0.1% |  512 KiB |   3,856 | `replace`      | `<unknown>`                        |
| 0.1% |  512 KiB |  16,385 | `slice`        | `<unknown>`                        |
| 0.1% |  512 KiB |  21,846 | `toString`     | `<unknown>`                        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size |   Objects | Location                                          |
| -----: | -----: | --------: | ------------------------------------------------- |
| 100.0% | 96 MiB | 1,720,054 | `node_modules/typescript/lib/typescript.js:62092` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 29 MiB | 187,880 | `node_modules/typescript/lib/typescript.js:62067` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 28.5 MiB | 427,885 | `node_modules/typescript/lib/typescript.js:42491` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 23.5 MiB | 220,047 | `node_modules/typescript/lib/typescript.js:30156` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 22 MiB | 166,631 | `node_modules/typescript/lib/typescript.js:62289` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 21.5 MiB | 515,589 | `node_modules/typescript/lib/typescript.js:30064` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 18 MiB | 168,546 | `node_modules/typescript/lib/typescript.js:30115` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 16.5 MiB | 167,497 | `node_modules/typescript/lib/typescript.js:21445` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 16 MiB | 116,516 | `node_modules/typescript/lib/typescript.js:29248` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.5 MiB |  83,250 | `node_modules/typescript/lib/typescript.js:50117` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 14 MiB | 101,957 | `node_modules/typescript/lib/typescript.js:31613` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 13 MiB | 192,086 | `node_modules/typescript/lib/typescript.js:62119` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 12.5 MiB | 108,077 | `node_modules/typescript/lib/typescript.js:61974` |

##### `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 12.2 MiB |  13,713 | `node_modules/typescript/lib/typescript.js:67075` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 12 MiB |  87,386 | `node_modules/typescript/lib/typescript.js:30964` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.5 MiB | 150,742 | `node_modules/typescript/lib/typescript.js:29241` |

##### `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 11 MiB |  80,108 | `node_modules/typescript/lib/typescript.js:30928` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 9.97 MiB |     651 | `node_modules/typescript/lib/typescript.js:119903` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 9.53 MiB |   3,929 | `node_modules/typescript/lib/typescript.js:63505` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 9.5 MiB |  78,485 | `node_modules/typescript/lib/typescript.js:61957` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 8.97 MiB |     976 | `node:buffer:640` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.72 MiB |       1 | `node:fs:433` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 2.64 MiB |  38,266 | `node:internal/modules/cjs/loader:1671` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Caller                        | Location                                    |
| ----: | -------: | --------: | ----------------------------- | ------------------------------------------- |
| 81.8% | 78.5 MiB | 1,379,244 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
| 10.4% |   10 MiB |   169,471 | `instantiateSignature`        | `node_modules/typescript/lib/typescript.js` |
|  5.2% |    5 MiB |   105,801 | `createErasedSignature`       | `node_modules/typescript/lib/typescript.js` |
|  2.6% |  2.5 MiB |    65,538 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 25.0% |   17 MiB |  10,025 | `resolveObjectTypeMembers`               | `node_modules/typescript/lib/typescript.js` |
| 18.4% | 12.5 MiB |   6,955 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js` |
|  7.7% | 5.25 MiB |       3 | `recursiveTypeRelatedTo`                 | `node_modules/typescript/lib/typescript.js` |
|  6.8% | 4.61 MiB |     657 | `getObjectTypeInstantiation`             | `node_modules/typescript/lib/typescript.js` |
|  6.6% | 4.51 MiB |   2,381 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                    |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------- |
| 70.1% | 30.5 MiB | 404,471 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js` |
| 14.9% |  6.5 MiB |  83,654 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js` |
|  6.9% |    3 MiB |  33,635 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js` |
|  3.4% |  1.5 MiB |  36,220 | `bindAnonymousTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  2.3% |    1 MiB |   6,900 | `processCommentPragmas`         | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Objects | Caller                      | Location                                    |
| ----: | -----: | ------: | --------------------------- | ------------------------------------------- |
| 93.1% | 27 MiB | 177,796 | `instantiateList`           | `node_modules/typescript/lib/typescript.js` |
|  6.9% |  2 MiB |  10,084 | `getSignatureInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 73.7% |  21 MiB | 329,575 | `declareSymbolAndAddToSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 14.0% |   4 MiB |  52,432 | `declareModuleMember`                     | `node_modules/typescript/lib/typescript.js` |
|  5.3% | 1.5 MiB |  19,662 | `bindBlockScopedDeclaration`              | `node_modules/typescript/lib/typescript.js` |
|  3.5% |   1 MiB |  13,108 | `bindVariableDeclarationOrBindingElement` | `node_modules/typescript/lib/typescript.js` |
|  3.5% |   1 MiB |  13,108 | `declareClassMember`                      | `node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                    |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 40.4% | 9.5 MiB |  88,957 | `parseTypeReference`                | `node_modules/typescript/lib/typescript.js` |
| 34.0% |   8 MiB |  74,907 | `parsePropertyOrMethodSignature`    | `node_modules/typescript/lib/typescript.js` |
| 10.6% | 2.5 MiB |  23,410 | `parsePropertyAccessExpressionRest` | `node_modules/typescript/lib/typescript.js` |
|  4.3% |   1 MiB |   9,364 | `parseRightSideOfDot`               | `node_modules/typescript/lib/typescript.js` |
|  4.3% |   1 MiB |   9,364 | `parseClassElement`                 | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                       | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 88.6% | 19.5 MiB | 148,954 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
| 11.4% |  2.5 MiB |  17,677 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 51.2% |  11 MiB | 256,158 | `parseDelimitedList`     | `node_modules/typescript/lib/typescript.js` |
| 14.0% |   3 MiB |  73,732 | `parseObjectTypeMembers` | `node_modules/typescript/lib/typescript.js` |
| 11.6% | 2.5 MiB |  57,349 | `parseType`              | `node_modules/typescript/lib/typescript.js` |
|  9.3% |   2 MiB |  40,964 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js` |
|  9.3% |   2 MiB |  62,808 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 55.6% |  10 MiB |  93,634 | `parseNameOfParameter`                | `node_modules/typescript/lib/typescript.js` |
| 19.4% | 3.5 MiB |  32,774 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 11.1% |   2 MiB |  18,728 | `parseVariableDeclaration`            | `node_modules/typescript/lib/typescript.js` |
|  8.3% | 1.5 MiB |  14,046 | `parseTypeParameter`                  | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 512 KiB |   4,682 | `parseIdentifier`                     | `node_modules/typescript/lib/typescript.js` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                 | Location                                    |
| ----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 97.0% |  16 MiB | 163,856 | `parseParameter`       | `node_modules/typescript/lib/typescript.js` |
|  3.0% | 512 KiB |   3,641 | `parseParameterWorker` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 53.1% | 8.5 MiB |  61,901 | `createBaseDeclaration`   | `node_modules/typescript/lib/typescript.js` |
| 25.0% |   4 MiB |  29,128 | `createUnionTypeNode`     | `node_modules/typescript/lib/typescript.js` |
|  9.4% | 1.5 MiB |  10,923 | `parseCallExpressionRest` | `node_modules/typescript/lib/typescript.js` |
|  6.2% |   1 MiB |   7,282 | `createBaseNode`          | `node_modules/typescript/lib/typescript.js` |
|  3.1% | 512 KiB |   3,641 | `createArrayTypeNode`     | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |     Size | Objects | Caller    | Location    |
| -----: | -------: | ------: | --------- | ----------- |
| 100.0% | 14.5 MiB |  83,250 | `forEach` | `<unknown>` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 14 MiB | 101,957 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 13 MiB | 192,086 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 96.0% |  12 MiB | 104,956 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |
|  4.0% | 512 KiB |   3,121 | `createMarkerType`      | `node_modules/typescript/lib/typescript.js` |

##### `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                         | Location                                    |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 91.8% | 11.2 MiB |       3 | `checkExpressionWorker`        | `node_modules/typescript/lib/typescript.js` |
|  4.1% |  513 KiB |     602 | `isFromInferenceBlockedSource` | `node_modules/typescript/lib/typescript.js` |
|  4.1% |  512 KiB |  13,108 | `some`                         | `node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller              | Location                                    |
| -----: | -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 12 MiB |  87,386 | `parseNonArrayType` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller            | Location                                    |
| ----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 95.7% |  11 MiB | 144,188 | `createToken`     | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   6,554 | `createBaseToken` | `node_modules/typescript/lib/typescript.js` |

##### `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 72.7% |   8 MiB |  58,261 | `parseNonArrayType`                   | `node_modules/typescript/lib/typescript.js` |
| 22.7% | 2.5 MiB |  18,206 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js` |
|  4.5% | 512 KiB |   3,641 | `parseLiteralNode`                    | `node_modules/typescript/lib/typescript.js` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 9.97 MiB |     651 | `compilerHost.getSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                    | Location                                    |
| -----: | -------: | ------: | ------------------------- | ------------------------------------------- |
| 100.0% | 9.53 MiB |   3,929 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 94.7% |   9 MiB |  75,035 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  5.3% | 512 KiB |   3,450 | `instantiateConstituent`      | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 8.97 MiB |     976 | `toString` | `node:buffer` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `join` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 80.0% |   6 MiB |  33,847 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 20.0% | 1.5 MiB |   8,431 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 46.7% | 3.5 MiB |  24,150 | `getIntersectionType`   | `node_modules/typescript/lib/typescript.js` |
| 26.7% |   2 MiB |  12,484 | `pushIfUnique`          | `node_modules/typescript/lib/typescript.js` |
| 20.0% | 1.5 MiB |  10,350 | `getSignaturesOfSymbol` | `node_modules/typescript/lib/typescript.js` |
|  6.7% | 512 KiB |   3,121 | `parseType`             | `node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.64 MiB |  38,266 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `splice` (`<unknown>`)

|      % |    Size | Objects | Caller               | Location                                    |
| -----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 100.0% | 2.5 MiB |  15,257 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 66.7% |   1 MiB |  32,770 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 33.3% | 512 KiB |  16,385 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `exec` (`<unknown>`)

|      % |    Size | Objects | Caller                    | Location                                    |
| -----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 100.0% | 513 KiB |     283 | `getDirectiveFromComment` | `node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location                                    |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |   3,856 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|      % |    Size | Objects | Caller     | Location                                    |
| -----: | ------: | ------: | ---------- | ------------------------------------------- |
| 100.0% | 512 KiB |  16,385 | `addRange` | `node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                    |
| -----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 77.5% | 567 MiB | 5,868,039 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 77.0% | 564 MiB | 5,802,917 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
| 76.5% | 560 MiB | 5,770,235 | `next`                                     | `<unknown>`                                           |
| 74.1% | 543 MiB | 5,565,012 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 71.9% | 526 MiB | 5,368,364 | `(anonymous)`                              | `<unknown>`                                           |
| 54.8% | 401 MiB | 4,338,465 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 54.4% | 398 MiB | 4,303,402 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.7% | 393 MiB | 4,224,196 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.3% | 390 MiB | 4,184,530 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 52.4% | 384 MiB | 4,148,461 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 380 MiB | 4,084,424 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.4% | 376 MiB | 4,044,255 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.8% | 372 MiB | 3,877,462 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 50.6% | 371 MiB | 3,877,779 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 49.9% | 365 MiB | 3,909,596 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 358 MiB | 3,748,726 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 48.8% | 357 MiB | 3,741,065 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 48.5% | 355 MiB | 3,719,784 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 48.1% | 352 MiB | 3,700,780 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 47.8% | 350 MiB | 3,627,751 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 54.8% | 401 MiB | 4,338,465 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 54.4% | 398 MiB | 4,303,402 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.7% | 393 MiB | 4,224,196 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.3% | 390 MiB | 4,184,530 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 52.4% | 384 MiB | 4,148,461 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 380 MiB | 4,084,424 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.4% | 376 MiB | 4,044,255 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.8% | 372 MiB | 3,877,462 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 50.6% | 371 MiB | 3,877,779 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 49.9% | 365 MiB | 3,909,596 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 358 MiB | 3,748,726 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 48.8% | 357 MiB | 3,741,065 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 48.5% | 355 MiB | 3,719,784 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 48.1% | 352 MiB | 3,700,780 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 47.8% | 350 MiB | 3,627,751 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 47.5% | 348 MiB | 3,593,223 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 47.2% | 345 MiB | 3,565,199 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 44.3% | 324 MiB | 3,317,041 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 39.4% | 288 MiB | 2,964,077 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 37.3% | 273 MiB | 2,805,969 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 76.5% |  560 MiB | 5,770,235 | `next`            | `<unknown>`                                |
| 74.1% |  543 MiB | 5,565,012 | `run`             | `node:internal/modules/esm/module_job`     |
| 31.6% |  231 MiB | 2,409,237 | `forEach`         | `<unknown>`                                |
|  9.3% | 68.1 MiB |    30,875 | `set`             | `<unknown>`                                |
|  6.0% | 44.1 MiB |   571,790 | `Map`             | `<unknown>`                                |
|  2.0% | 14.9 MiB |    88,994 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  2.0% | 14.9 MiB |    88,994 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  2.0% | 14.9 MiB |    88,994 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  2.0% | 14.9 MiB |    88,994 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  2.0% | 14.9 MiB |    88,994 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  2.0% | 14.9 MiB |    88,994 | `require`         | `node:internal/modules/helpers`            |
|  1.2% | 8.97 MiB |       976 | `slice`           | `node:buffer`                              |
|  1.2% | 8.97 MiB |       976 | `toString`        | `node:buffer`                              |
|  1.2% | 8.72 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  1.2% | 8.72 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  1.2% | 8.72 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  1.0% |  7.5 MiB |    42,278 | `join`            | `<unknown>`                                |
|  1.0% |  7.5 MiB |    50,105 | `push`            | `<unknown>`                                |
|  0.8% | 6.19 MiB |    88,993 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.4% | 2.64 MiB |    38,266 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 59.8% |  339 MiB | 3,529,104 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 37.5% |  213 MiB | 2,233,556 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  2.6% | 14.9 MiB |    88,994 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.7% |  562 MiB | 5,802,916 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.3% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `next` (`<unknown>`)

|     % |    Size |   Objects | Callee                   | Location                                    |
| ----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 98.3% | 551 MiB | 5,668,139 | `(anonymous)`            | `datadog-pprof-heap.mjs:1:1`                |
|  2.3% |  13 MiB |   122,659 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 543 MiB | 5,565,012 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 526 MiB | 5,368,364 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size |   Objects | Callee            | Location                                    |
| ----: | -------: | --------: | ----------------- | ------------------------------------------- |
| 84.6% |  339 MiB | 3,528,999 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |
| 15.4% | 61.7 MiB |   809,466 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 398 MiB | 4,303,402 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 393 MiB | 4,224,196 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                    |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 390 MiB | 4,184,530 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                    |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 100.0% | 384 MiB | 4,148,461 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                    |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 380 MiB | 4,084,424 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |    Size |   Objects | Callee                          | Location                                    |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 376 MiB | 4,044,255 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                       | Location                                    |
| ----: | -------: | --------: | ---------------------------- | ------------------------------------------- |
| 69.2% |  257 MiB | 2,700,076 | `checkBlock`                 | `node_modules/typescript/lib/typescript.js` |
| 43.6% |  162 MiB | 1,466,165 | `checkVariableDeclaration`   | `node_modules/typescript/lib/typescript.js` |
| 42.5% |  158 MiB | 1,431,993 | `checkVariableStatement`     | `node_modules/typescript/lib/typescript.js` |
| 25.4% | 94.6 MiB | 1,164,017 | `checkExpressionStatement`   | `node_modules/typescript/lib/typescript.js` |
| 22.0% | 81.7 MiB | 1,039,208 | `checkTypeReferenceOrImport` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                     | Location                                    |
| ----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 99.9% | 370 MiB | 3,877,454 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 365 MiB | 3,909,596 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee               | Location                                    |
| ----: | ------: | --------: | -------------------- | ------------------------------------------- |
| 61.4% | 220 MiB | 2,335,587 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js` |
| 38.6% | 138 MiB | 1,413,139 | `forEach`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                    |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------- |
| 100.0% | 357 MiB | 3,741,065 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                    |
| -----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 100.0% | 355 MiB | 3,719,784 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                    |
| -----: | ------: | --------: | --------- | ------------------------------------------- |
| 100.0% | 352 MiB | 3,700,780 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                    |
| -----: | ------: | --------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 350 MiB | 3,627,751 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 348 MiB | 3,593,223 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 345 MiB | 3,565,199 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                              |
| ----: | -------: | --------: | -------------------- | ----------------------------------------------------- |
| 45.3% |  147 MiB | 1,469,559 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
| 31.0% |  101 MiB | 1,119,155 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
| 19.5% | 63.3 MiB |   587,154 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
| 15.2% | 49.3 MiB |   569,989 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  5.4% | 17.7 MiB |   176,896 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                    |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------- |
| 94.6% |  273 MiB | 2,805,969 | `checkCallExpression`                          | `node_modules/typescript/lib/typescript.js` |
| 19.6% | 56.6 MiB |   435,612 | `checkObjectLiteral`                           | `node_modules/typescript/lib/typescript.js` |
| 16.5% | 47.5 MiB |   428,175 | `checkArrayLiteral`                            | `node_modules/typescript/lib/typescript.js` |
| 15.8% | 45.4 MiB |   528,676 | `checkExpressionWorker`                        | `node_modules/typescript/lib/typescript.js` |
| 15.1% | 43.6 MiB |   465,719 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                     | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 92.0% |  251 MiB | 2,557,622 | `resolveSignature`         | `node_modules/typescript/lib/typescript.js` |
|  9.5% |   26 MiB |   370,446 | `instantiateType`          | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 5.03 MiB |    15,804 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js` |
|  0.4% |    1 MiB |       111 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |    1 MiB |    19,835 | `getReturnTypeFromBody`    | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Callee              | Location                                             |
| ----: | -------: | --------: | ------------------- | ---------------------------------------------------- |
| 96.3% |  223 MiB | 2,369,788 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js`          |
|  6.3% | 14.5 MiB |    83,250 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.2% |  512 KiB |     3,121 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:47469:22` |
|  0.2% |  512 KiB |     7,282 | `checkEnumMember`   | `node_modules/typescript/lib/typescript.js`          |

##### `Map` (`<unknown>`)

|    % |    Size | Objects | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 1.2% | 560 KiB |      10 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 58.5% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 41.5% | 6.19 MiB |  88,993 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.9 MiB |  88,994 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.9 MiB |  88,994 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.9 MiB |  88,994 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 14.9 MiB |  88,994 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.9 MiB |  88,994 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Callee  | Location      |
| -----: | -------: | ------: | ------- | ------------- |
| 100.0% | 8.97 MiB |     976 | `slice` | `node:buffer` |

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
| 57.3% | 3.55 MiB |  50,727 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 42.7% | 2.64 MiB |  38,266 | `wrapSafe`    | `node:internal/modules/cjs/loader`              |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 11.2 MiB |       3 | `hasSkipDirectInferenceFlag` (`node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                            |
| 1.3% | 9.53 MiB |   3,929 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `inferFromSignature` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)` |
| 1.2% | 8.72 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |    7 MiB |  50,979 | `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.9% |  6.5 MiB | 119,844 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.8% |    6 MiB |  43,697 | `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% |  5.5 MiB | 102,054 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `relateVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `checkTypeReferenceOrImport` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkClassLikeDeclaration` ← `checkClassDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap`                                             |
| 0.8% |  5.5 MiB | 118,907 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker`                                                                                        |
| 0.7% | 5.25 MiB |       3 | `set` ← `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `getConditionalType` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateType` ← `getTypeOfParameter` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                |
| 0.7% | 5.03 MiB |       2 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `compilerHost.getSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |    5 MiB |  45,881 | `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`) ← `parseParameter` ← `(anonymous)` (31248:163) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |  4.5 MiB |  68,350 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.6% |  4.5 MiB |  70,222 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% |    4 MiB |  22,954 | `join` ← `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `parseJSDocCommentWorker` ← `(anonymous)` (29528:77) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |    4 MiB |  37,453 | `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |    3 MiB |  21,848 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `createBaseDeclaration` ← `parsePropertyOrMethodSignature` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.4% |    3 MiB |  28,090 | `createIdentifier` (`node_modules/typescript/lib/typescript.js`) ← `parseNameOfParameter` ← `parseParameter` ← `(anonymous)` (31248:163) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |    3 MiB |  46,568 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |    3 MiB |  53,368 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `getQuickTypeOfExpression` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                   |
| 0.4% |    3 MiB |       2 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getContextualType2` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                             |
