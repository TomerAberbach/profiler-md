# Heap profile

Allocated 490 MiB over 4,877,490 objects (105 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 77.9% |  382 MiB | 4,365,721 |
| Standard library | 21.7% |  106 MiB |   511,768 |
| Native           |  0.4% | 1.95 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 11.8% |   58 MiB | 955,969 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  9.4% | 46.1 MiB |  22,477 | `set`                           | `<unknown>`                                          |
|  6.6% | 32.5 MiB | 301,859 | `Map`                           | `<unknown>`                                          |
|  3.5% |   17 MiB | 110,397 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  3.3% |   16 MiB | 360,476 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 15.5 MiB | 145,138 | `parseIdentifierName`           | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 15.5 MiB | 132,470 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  3.1% |   15 MiB | 264,034 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  2.7% |   13 MiB |  94,672 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   11 MiB | 127,639 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 10.5 MiB | 177,431 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  2.0% |   10 MiB |  52,644 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.9% | 9.51 MiB |     469 | `readFile`                      | `node_modules/typescript/lib/typescript.js`          |
|  1.9% |  9.5 MiB |  88,956 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  1.9% |  9.5 MiB |  69,180 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 8.92 MiB |  26,218 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 8.72 MiB |       1 | `readFileSync`                  | `node:fs`                                            |
|  1.7% |  8.5 MiB | 125,509 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.7% |  8.5 MiB | 111,418 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |  7.5 MiB |  98,310 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |

#### Categories

##### Third-party

|     % |     Size | Objects | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 11.8% |   58 MiB | 955,969 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  3.5% |   17 MiB | 110,397 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  3.3% |   16 MiB | 360,476 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 15.5 MiB | 145,138 | `parseIdentifierName`           | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 15.5 MiB | 132,470 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  3.1% |   15 MiB | 264,034 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  2.7% |   13 MiB |  94,672 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   11 MiB | 127,639 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 10.5 MiB | 177,431 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  2.0% |   10 MiB |  52,644 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  1.9% | 9.51 MiB |     469 | `readFile`                      | `node_modules/typescript/lib/typescript.js`          |
|  1.9% |  9.5 MiB |  88,956 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  1.9% |  9.5 MiB |  69,180 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 8.92 MiB |  26,218 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js`          |
|  1.7% |  8.5 MiB | 125,509 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.7% |  8.5 MiB | 111,418 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |  7.5 MiB |  98,310 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |    7 MiB |  50,977 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  1.2% |    6 MiB |  54,334 | `mapDefined`                    | `node_modules/typescript/lib/typescript.js`          |
|  1.1% |  5.5 MiB |  58,986 | `createParameterDeclaration`    | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function                   | Location                           |
| ---: | -------: | ------: | -------------------------- | ---------------------------------- |
| 9.4% | 46.1 MiB |  22,477 | `set`                      | `<unknown>`                        |
| 6.6% | 32.5 MiB | 301,859 | `Map`                      | `<unknown>`                        |
| 1.8% | 8.72 MiB |       1 | `readFileSync`             | `node:fs`                          |
| 0.9% |  4.5 MiB |  27,650 | `push`                     | `<unknown>`                        |
| 0.6% |    3 MiB |  17,308 | `join`                     | `<unknown>`                        |
| 0.5% |  2.5 MiB |  17,250 | `splice`                   | `<unknown>`                        |
| 0.3% |  1.5 MiB |  33,080 | `trimEnd`                  | `<unknown>`                        |
| 0.3% |  1.5 MiB |  40,962 | `wrapSafe`                 | `node:internal/modules/cjs/loader` |
| 0.2% | 1.09 MiB |     302 | `slice`                    | `node:buffer`                      |
| 0.1% |  521 KiB |      13 | `add`                      | `<unknown>`                        |
| 0.1% |  516 KiB |      51 | `test`                     | `<unknown>`                        |
| 0.1% |  516 KiB |      86 | `getStatsFromBinding`      | `node:internal/fs/utils`           |
| 0.1% |  514 KiB |     263 | `hasOwnProperty`           | `<unknown>`                        |
| 0.1% |  512 KiB |   4,097 | `(anonymous)`              | `node:fs:2851:23`                  |
| 0.1% |  512 KiB |   5,042 | `internalBinding`          | `node:internal/bootstrap/realm`    |
| 0.1% |  512 KiB |   8,193 | `compileForInternalLoader` | `node:internal/bootstrap/realm`    |
| 0.1% |  512 KiB |  13,108 | `next`                     | `<unknown>`                        |
| 0.1% |  512 KiB |  16,385 | `Set`                      | `<unknown>`                        |
| 0.1% |  512 KiB |   3,641 | `replace`                  | `<unknown>`                        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 58 MiB | 955,969 | `node_modules/typescript/lib/typescript.js:56402` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 17 MiB | 110,397 | `node_modules/typescript/lib/typescript.js:62067` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 16 MiB | 360,476 | `node_modules/typescript/lib/typescript.js:30064` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 15.5 MiB | 145,138 | `node_modules/typescript/lib/typescript.js:30156` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 15.5 MiB | 132,470 | `node_modules/typescript/lib/typescript.js:62289` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 15 MiB | 264,034 | `node_modules/typescript/lib/typescript.js:42491` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 13 MiB |  94,672 | `node_modules/typescript/lib/typescript.js:29248` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 11 MiB | 127,639 | `node_modules/typescript/lib/typescript.js:61957` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 10.5 MiB | 177,431 | `node_modules/typescript/lib/typescript.js:62092` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 10 MiB |  52,644 | `node_modules/typescript/lib/typescript.js:50117` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 9.51 MiB |     469 | `node_modules/typescript/lib/typescript.js:119903` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 9.5 MiB |  88,956 | `node_modules/typescript/lib/typescript.js:30115` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 9.5 MiB |  69,180 | `node_modules/typescript/lib/typescript.js:30964` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 8.92 MiB |  26,218 | `node_modules/typescript/lib/typescript.js:78748` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.72 MiB |       1 | `node:fs:433` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 8.5 MiB | 125,509 | `node_modules/typescript/lib/typescript.js:62119` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 8.5 MiB | 111,418 | `node_modules/typescript/lib/typescript.js:29241` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 7.5 MiB |  98,310 | `node_modules/typescript/lib/typescript.js:59887` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 7 MiB |  50,977 | `node_modules/typescript/lib/typescript.js:31613` |

##### `mapDefined` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                        |
| -----: | ----: | ------: | ----------------------------------------------- |
| 100.0% | 6 MiB |  54,334 | `node_modules/typescript/lib/typescript.js:370` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 5.5 MiB |  58,986 | `node_modules/typescript/lib/typescript.js:21445` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |    Size | Objects | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 1.5 MiB |  40,962 | `node:internal/modules/cjs/loader:1671` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 1.09 MiB |     302 | `node:buffer:640` |

##### `getStatsFromBinding` (`node:internal/fs/utils`)

|      % |    Size | Objects | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 516 KiB |      86 | `node:internal/fs/utils:552` |

##### `(anonymous)` (`node:fs:2851:23`)

|      % |    Size | Objects | Location       |
| -----: | ------: | ------: | -------------- |
| 100.0% | 512 KiB |   4,097 | `node:fs:2851` |

##### `internalBinding` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 512 KiB |   5,042 | `node:internal/bootstrap/realm:185` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 512 KiB |   8,193 | `node:internal/bootstrap/realm:385` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |   Size | Objects | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 98.3% | 57 MiB | 938,179 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  1.7% |  1 MiB |  17,790 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 23.9% |   11 MiB |   6,312 | `createInstantiatedSymbolTable`          | `node_modules/typescript/lib/typescript.js` |
| 21.7% |   10 MiB |   5,735 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js` |
| 11.0% | 5.07 MiB |      99 | `recursiveTypeRelatedTo`                 | `node_modules/typescript/lib/typescript.js` |
|  7.6% | 3.51 MiB |   2,007 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  5.5% | 2.55 MiB |   3,008 | `declareSymbol`                          | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                    |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------- |
| 66.2% | 21.5 MiB | 200,089 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js` |
| 18.5% |    6 MiB |  41,400 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js` |
|  9.2% |    3 MiB |  33,635 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js` |
|  1.5% |  512 KiB |   3,450 | `bindAnonymousDeclaration`      | `node_modules/typescript/lib/typescript.js` |
|  1.5% |  512 KiB |   3,450 | `createModeAwareCache`          | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                      | Location                                    |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------- |
| 97.1% | 16.5 MiB | 107,876 | `instantiateList`           | `node_modules/typescript/lib/typescript.js` |
|  2.9% |  512 KiB |   2,521 | `getSignatureInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 46.9% | 7.5 MiB | 182,969 | `parseDelimitedList`     | `node_modules/typescript/lib/typescript.js` |
| 18.8% |   3 MiB |  49,157 | `parseList`              | `node_modules/typescript/lib/typescript.js` |
| 12.5% |   2 MiB |  49,156 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 12.5% |   2 MiB |  40,963 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js` |
|  9.4% | 1.5 MiB |  38,231 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                    |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 41.9% | 6.5 MiB |  60,864 | `parseTypeReference`                | `node_modules/typescript/lib/typescript.js` |
| 32.3% |   5 MiB |  46,819 | `parsePropertyOrMethodSignature`    | `node_modules/typescript/lib/typescript.js` |
| 19.4% |   3 MiB |  28,091 | `parsePropertyAccessExpressionRest` | `node_modules/typescript/lib/typescript.js` |
|  3.2% | 512 KiB |   4,682 | `parseClassElement`                 | `node_modules/typescript/lib/typescript.js` |
|  3.2% | 512 KiB |   4,682 | `parseTypeQuery`                    | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                       | Location                                    |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------- |
| 96.8% |  15 MiB | 128,100 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  3.2% | 512 KiB |   4,370 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 66.7% |  10 MiB | 190,067 | `declareSymbolAndAddToSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 23.3% | 3.5 MiB |  48,687 | `declareModuleMember`                     | `node_modules/typescript/lib/typescript.js` |
|  6.7% |   1 MiB |  15,917 | `bindVariableDeclarationOrBindingElement` | `node_modules/typescript/lib/typescript.js` |
|  3.3% | 512 KiB |   9,363 | `declareClassMember`                      | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                           | Location                                    |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------- |
| 34.6% | 4.5 MiB |  32,772 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js` |
| 34.6% | 4.5 MiB |  32,771 | `createUnionTypeNode`            | `node_modules/typescript/lib/typescript.js` |
| 11.5% | 1.5 MiB |  10,924 | `parseDeclarationWorker`         | `node_modules/typescript/lib/typescript.js` |
|  7.7% |   1 MiB |   7,282 | `createBaseNode`                 | `node_modules/typescript/lib/typescript.js` |
|  3.8% | 512 KiB |   3,641 | `doJSDocScan`                    | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller                        | Location                                    |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 11 MiB | 127,639 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                                   | Location                                    |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------- |
| 66.7% |   7 MiB | 119,379 | `instantiateSignature`                                   | `node_modules/typescript/lib/typescript.js` |
| 23.8% | 2.5 MiB |  40,262 | `createErasedSignature`                                  | `node_modules/typescript/lib/typescript.js` |
|  9.5% |   1 MiB |  17,790 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Objects | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 10 MiB |  52,644 | `forEach` | `<unknown>` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 9.51 MiB |     469 | `compilerHost.getSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 42.1% |   4 MiB |  37,455 | `parseNameOfParameter`                | `node_modules/typescript/lib/typescript.js` |
| 15.8% | 1.5 MiB |  14,046 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 10.5% |   1 MiB |   9,364 | `parseParameter`                      | `node_modules/typescript/lib/typescript.js` |
| 10.5% |   1 MiB |   9,363 | `parseVariableDeclaration`            | `node_modules/typescript/lib/typescript.js` |
|  5.3% | 512 KiB |   4,682 | `parseAssertsTypePredicate`           | `node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller              | Location                                    |
| -----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 9.5 MiB |  69,180 | `parseNonArrayType` | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 8.92 MiB |  26,218 | `checkExpression` | `node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                    |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 8.5 MiB | 125,509 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 8.5 MiB | 111,418 | `createToken` | `node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                    |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 7.5 MiB |  98,310 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|     % |  Size | Objects | Caller                          | Location                                    |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 57.1% | 4 MiB |  29,130 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 42.9% | 3 MiB |  21,847 | `parseUnionTypeOrHigher`        | `node_modules/typescript/lib/typescript.js` |

##### `mapDefined` (`node_modules/typescript/lib/typescript.js`)

|     % |  Size | Objects | Caller                           | Location                                    |
| ----: | ----: | ------: | -------------------------------- | ------------------------------------------- |
| 66.7% | 4 MiB |  27,599 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 1 MiB |   6,900 | `parseFunctionDeclaration`       | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 1 MiB |  19,835 | `withJSDoc`                      | `node_modules/typescript/lib/typescript.js` |

##### `createParameterDeclaration` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 5.5 MiB |  58,986 | `parseParameter` | `node_modules/typescript/lib/typescript.js` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 44.4% |   2 MiB |  12,484 | `pushIfUnique`           | `node_modules/typescript/lib/typescript.js` |
| 33.3% | 1.5 MiB |  10,350 | `getIntersectionType`    | `node_modules/typescript/lib/typescript.js` |
| 11.1% | 512 KiB |   1,366 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 11.1% | 512 KiB |   3,450 | `getSignaturesOfSymbol`  | `node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 83.3% | 2.5 MiB |  11,846 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 512 KiB |   5,462 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|     % |    Size | Objects | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 80.0% |   2 MiB |  13,800 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |
| 20.0% | 512 KiB |   3,450 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js` |

##### `trimEnd` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 66.6% |   1 MiB |  32,770 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 33.4% | 513 KiB |     310 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |    Size | Objects | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.5 MiB |  40,962 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 1.09 MiB |     302 | `toString` | `node:buffer` |

##### `add` (`<unknown>`)

|      % |    Size | Objects | Caller          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 521 KiB |      13 | `declareSymbol` | `node_modules/typescript/lib/typescript.js` |

##### `test` (`<unknown>`)

|      % |    Size | Objects | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 516 KiB |      51 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18163:62` |

##### `getStatsFromBinding` (`node:internal/fs/utils`)

|      % |    Size | Objects | Caller     | Location  |
| -----: | ------: | ------: | ---------- | --------- |
| 100.0% | 516 KiB |      86 | `statSync` | `node:fs` |

##### `hasOwnProperty` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 514 KiB |     263 | `createNodeArray` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:fs:2851:23`)

|      % |    Size | Objects | Caller     | Location                                    |
| -----: | ------: | ------: | ---------- | ------------------------------------------- |
| 100.0% | 512 KiB |   4,097 | `realpath` | `node_modules/typescript/lib/typescript.js` |

##### `internalBinding` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Caller        | Location          |
| -----: | ------: | ------: | ------------- | ----------------- |
| 100.0% | 512 KiB |   5,042 | `(anonymous)` | `node:crypto:1:1` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm`)

|      % |    Size | Objects | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 512 KiB |   8,193 | `requireBuiltin` | `node:internal/bootstrap/realm` |

##### `next` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                    |
| -----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  13,108 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `Set` (`<unknown>`)

|      % |    Size | Objects | Caller            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  16,385 | `bindSourceFile2` | `node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location                                    |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |   3,641 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 78.5% | 385 MiB | 3,846,576 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 77.5% | 380 MiB | 3,733,902 | `next`                                     | `<unknown>`                                           |
| 77.0% | 378 MiB | 3,748,518 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
| 74.1% | 363 MiB | 3,604,688 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 72.9% | 358 MiB | 3,557,738 | `(anonymous)`                              | `<unknown>`                                           |
| 55.3% | 271 MiB | 2,716,272 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 55.0% | 270 MiB | 2,709,085 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.5% | 267 MiB | 2,691,532 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 54.2% | 266 MiB | 2,686,816 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.5% | 263 MiB | 2,656,053 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.8% | 259 MiB | 2,628,346 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.9% | 254 MiB | 2,576,955 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.9% | 249 MiB | 2,533,390 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 49.8% | 244 MiB | 2,454,518 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 49.2% | 241 MiB | 2,301,862 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 49.2% | 241 MiB | 2,301,862 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 240 MiB | 2,415,777 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 46.8% | 230 MiB | 2,206,927 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 46.5% | 228 MiB | 2,203,135 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.1% | 226 MiB | 2,192,705 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 55.3% | 271 MiB | 2,716,272 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 55.0% | 270 MiB | 2,709,085 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.5% | 267 MiB | 2,691,532 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 54.2% | 266 MiB | 2,686,816 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.5% | 263 MiB | 2,656,053 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.8% | 259 MiB | 2,628,346 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.9% | 254 MiB | 2,576,955 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 50.9% | 249 MiB | 2,533,390 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 49.8% | 244 MiB | 2,454,518 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 49.2% | 241 MiB | 2,301,862 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 49.2% | 241 MiB | 2,301,862 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 240 MiB | 2,415,777 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 46.8% | 230 MiB | 2,206,927 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 46.5% | 228 MiB | 2,203,135 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.1% | 226 MiB | 2,192,705 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 45.9% | 225 MiB | 2,174,915 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 45.5% | 223 MiB | 2,137,761 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 41.3% | 202 MiB | 1,973,947 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 38.9% | 191 MiB | 1,767,709 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 37.4% | 183 MiB | 1,690,923 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 77.5% |  380 MiB | 3,733,902 | `next`            | `<unknown>`                                |
| 74.1% |  363 MiB | 3,604,688 | `run`             | `node:internal/modules/esm/module_job`     |
| 32.3% |  158 MiB | 1,504,678 | `forEach`         | `<unknown>`                                |
|  9.4% | 46.1 MiB |    22,477 | `set`             | `<unknown>`                                |
|  6.7% | 33.1 MiB |   301,869 | `Map`             | `<unknown>`                                |
|  2.9% | 14.2 MiB |   129,069 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  2.9% | 14.2 MiB |   129,069 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  2.9% | 14.2 MiB |   129,069 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  2.9% | 14.2 MiB |   129,069 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  2.9% | 14.2 MiB |   129,069 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  2.9% | 14.2 MiB |   129,069 | `require`         | `node:internal/modules/helpers`            |
|  1.8% | 8.72 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  1.8% | 8.72 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  1.8% | 8.72 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  1.1% |  5.5 MiB |   129,068 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.9% |  4.5 MiB |    27,650 | `push`            | `<unknown>`                                |
|  0.6% |    3 MiB |    17,308 | `join`            | `<unknown>`                                |
|  0.5% |  2.5 MiB |    17,250 | `splice`          | `<unknown>`                                |
|  0.3% |  1.5 MiB |    33,080 | `trimEnd`         | `<unknown>`                                |
|  0.3% |  1.5 MiB |    40,962 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 60.9% |  234 MiB | 2,378,188 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 35.1% |  135 MiB | 1,338,997 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  3.7% | 14.2 MiB |   129,069 | `require`                          | `node:internal/modules/helpers`             |
|  0.3% |    1 MiB |       322 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|     % |     Size |   Objects | Callee                   | Location                                    |
| ----: | -------: | --------: | ------------------------ | ------------------------------------------- |
| 97.4% |  370 MiB | 3,658,452 | `(anonymous)`            | `datadog-pprof-heap.mjs:1:1`                |
|  3.0% | 11.5 MiB |    71,579 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.6% |  376 MiB | 3,748,517 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.4% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 363 MiB | 3,604,688 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 358 MiB | 3,557,738 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size |   Objects | Callee            | Location                                    |
| ----: | -------: | --------: | ----------------- | ------------------------------------------- |
| 81.5% |  221 MiB | 2,123,349 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |
| 18.5% | 50.1 MiB |   592,923 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 270 MiB | 2,709,085 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 267 MiB | 2,691,532 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                                     | Location                                    |
| ----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
| 99.8% | 266 MiB | 2,686,743 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |
|  0.2% | 514 KiB |        73 | `set`                                      | `<unknown>`                                 |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                    |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 100.0% | 263 MiB | 2,656,053 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                    |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 259 MiB | 2,628,346 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |    Size |   Objects | Callee                          | Location                                    |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 254 MiB | 2,576,955 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 249 MiB | 2,533,390 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                    |
| -----: | ------: | --------: | --------- | ------------------------------------------- |
| 100.0% | 244 MiB | 2,454,518 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                     | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 72.9% |  176 MiB | 1,676,419 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 43.0% |  104 MiB |   871,342 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 43.0% |  104 MiB |   871,342 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 28.7% | 69.1 MiB |   716,575 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.8% |   50 MiB |   582,751 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 241 MiB | 2,301,862 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 240 MiB | 2,415,777 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                       | Location                                    |
| ----: | -------: | --------: | ---------------------------- | ------------------------------------------- |
| 66.6% |  153 MiB | 1,439,327 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 33.2% | 76.2 MiB |   754,492 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.2% |  512 KiB |    13,108 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                    |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------- |
| 100.0% | 228 MiB | 2,203,135 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                    |
| -----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 100.0% | 226 MiB | 2,192,705 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                    |
| -----: | ------: | --------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 225 MiB | 2,174,915 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 223 MiB | 2,137,761 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 41.6% | 84.2 MiB | 773,619 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
| 29.5% | 59.7 MiB | 597,469 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
| 24.2% |   49 MiB | 500,001 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
| 12.1% | 24.5 MiB | 259,529 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  6.4% |   13 MiB | 135,394 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                    |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------- |
| 96.0% |  183 MiB | 1,690,923 | `checkCallExpression`                          | `node_modules/typescript/lib/typescript.js` |
| 17.6% | 33.6 MiB |   421,472 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 17.3% | 33.1 MiB |   209,665 | `checkObjectLiteral`                           | `node_modules/typescript/lib/typescript.js` |
| 14.2% | 27.1 MiB |   190,675 | `checkArrayLiteral`                            | `node_modules/typescript/lib/typescript.js` |
| 13.2% | 25.2 MiB |   248,220 | `checkExpressionWorker`                        | `node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                     | Location                                    |
| ----: | -------: | --------: | -------------------------- | ------------------------------------------- |
| 87.3% |  160 MiB | 1,486,294 | `resolveCallExpression`    | `node_modules/typescript/lib/typescript.js` |
| 12.4% | 22.7 MiB |   146,173 | `resolveNewExpression`     | `node_modules/typescript/lib/typescript.js` |
|  8.0% | 14.7 MiB |   132,308 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js` |
|  2.7% | 5.02 MiB |     9,310 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js` |
|  0.5% |    1 MiB |     6,429 | `signatureToString`        | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |    Size |   Objects | Callee              | Location                                             |
| ----: | ------: | --------: | ------------------- | ---------------------------------------------------- |
| 98.4% | 156 MiB | 1,481,148 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js`          |
|  6.3% |  10 MiB |    52,644 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.3% | 514 KiB |        73 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49804:22` |

##### `Map` (`<unknown>`)

|    % |    Size | Objects | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 1.7% | 560 KiB |      10 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 61.3% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 38.7% |  5.5 MiB | 129,068 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.2 MiB | 129,069 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 14.2 MiB | 129,069 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   7.0% |    1 MiB |  13,235 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader`         |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.2 MiB | 129,069 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 14.2 MiB | 129,069 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 14.2 MiB | 129,069 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.72 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |    Size | Objects | Callee        | Location                                        |
| ----: | ------: | ------: | ------------- | ----------------------------------------------- |
| 72.7% |   4 MiB |  88,106 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 27.3% | 1.5 MiB |  40,962 | `wrapSafe`    | `node:internal/modules/cjs/loader`              |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.8% | 8.72 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |    8 MiB | 133,889 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% | 7.92 MiB |       2 | `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`) ← `checkExpression` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                               |
| 1.0% | 5.03 MiB |       2 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `compilerHost.getSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |  3.5 MiB |  58,050 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker`                                                                                                                              |
| 0.7% |  3.5 MiB |       2 | `set` ← `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `getConditionalType` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateType` ← `getTypeOfParameter` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                       |
| 0.6% |    3 MiB |  20,699 | `mapDefined` (`node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% |  2.5 MiB |  18,207 | `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% |  2.5 MiB |  18,207 | `parseLiteralLikeNode` (`node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (33888:62) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% |  2.5 MiB |  44,942 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |    2 MiB |   1,414 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `inferFromSignature` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)` |
| 0.4% |    2 MiB |   1,414 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `inferFromSignature` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper`                                                                                      |
| 0.4% |    2 MiB |  14,566 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |    2 MiB |  13,799 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (42712:23) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.4% | 1.76 MiB |       3 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `compilerHost.getSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  1.5 MiB |     860 | `set` ← `addInheritedMembers` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkReturnStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                       |
| 0.3% |  1.5 MiB |     860 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.3% |  1.5 MiB |     860 | `set` ← `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `relateVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (79468:29) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkClassLikeDeclaration` ← `checkClassDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78)                                                                                                 |
| 0.3% |  1.5 MiB |     860 | `set` ← `addInheritedMembers` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo`                                                                                                                                                                               |
| 0.3% |  1.5 MiB |   8,809 | `join` ← `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `parseJSDocCommentWorker` ← `(anonymous)` (29528:77) ← `mapDefined` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
