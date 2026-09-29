# Heap profile

Allocated 548 MiB over 4,490,738 objects (128 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 80.8% |  443 MiB | 3,906,616 |
| Standard library | 18.8% |  103 MiB |   584,121 |
| Native           |  0.4% | 2.01 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                     | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 13.1% | 71.5 MiB | 360,505 | `instantiateSymbol`          | `node_modules/typescript/lib/typescript.js`          |
|  9.8% |   54 MiB |  26,191 | `set`                        | `<unknown>`                                          |
|  5.8% |   32 MiB | 440,364 | `Map`                        | `<unknown>`                                          |
|  5.2% | 28.5 MiB | 177,904 | `createBaseNode`             | `node_modules/typescript/lib/typescript.js`          |
|  3.8% |   21 MiB | 206,000 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js`          |
|  3.7% | 20.5 MiB | 127,444 | `instantiateSignature`       | `node_modules/typescript/lib/typescript.js`          |
|  3.6% | 19.5 MiB | 170,424 | `parseIdentifierName`        | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 17.5 MiB | 137,037 | `instantiateAnonymousType`   | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 12.7 MiB |     718 | `readFile`                   | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 12.5 MiB |  32,776 | `getResolvedSymbol`          | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 11.5 MiB | 100,508 | `createIdentifier`           | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 11.5 MiB | 279,267 | `parseDelimitedList`         | `node_modules/typescript/lib/typescript.js`          |
|  1.6% | 8.51 MiB |  67,532 | `instantiateTypes`           | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |  8.5 MiB |  69,217 | `(anonymous)`                | `node_modules/typescript/lib/typescript.js:53728:21` |
|  1.5% | 8.37 MiB |       1 | `readFileSync`               | `node:fs`                                            |
|  1.4% | 7.52 MiB |   6,231 | `checkTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |  7.5 MiB | 118,500 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |  7.5 MiB |  89,371 | `createBaseTokenNode`        | `node_modules/typescript/lib/typescript.js`          |
|  1.3% |    7 MiB |  43,697 | `parseNonArrayType`          | `node_modules/typescript/lib/typescript.js`          |
|  1.1% |    6 MiB |  41,400 | `instantiateList`            | `node_modules/typescript/lib/typescript.js`          |

#### Categories

##### Third-party

|     % |     Size | Objects | Function                         | Location                                             |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------- |
| 13.1% | 71.5 MiB | 360,505 | `instantiateSymbol`              | `node_modules/typescript/lib/typescript.js`          |
|  5.2% | 28.5 MiB | 177,904 | `createBaseNode`                 | `node_modules/typescript/lib/typescript.js`          |
|  3.8% |   21 MiB | 206,000 | `declareSymbol`                  | `node_modules/typescript/lib/typescript.js`          |
|  3.7% | 20.5 MiB | 127,444 | `instantiateSignature`           | `node_modules/typescript/lib/typescript.js`          |
|  3.6% | 19.5 MiB | 170,424 | `parseIdentifierName`            | `node_modules/typescript/lib/typescript.js`          |
|  3.2% | 17.5 MiB | 137,037 | `instantiateAnonymousType`       | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 12.7 MiB |     718 | `readFile`                       | `node_modules/typescript/lib/typescript.js`          |
|  2.3% | 12.5 MiB |  32,776 | `getResolvedSymbol`              | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 11.5 MiB | 100,508 | `createIdentifier`               | `node_modules/typescript/lib/typescript.js`          |
|  2.1% | 11.5 MiB | 279,267 | `parseDelimitedList`             | `node_modules/typescript/lib/typescript.js`          |
|  1.6% | 8.51 MiB |  67,532 | `instantiateTypes`               | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |  8.5 MiB |  69,217 | `(anonymous)`                    | `node_modules/typescript/lib/typescript.js:53728:21` |
|  1.4% | 7.52 MiB |   6,231 | `checkTypeRelatedTo`             | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |  7.5 MiB | 118,500 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js`          |
|  1.4% |  7.5 MiB |  89,371 | `createBaseTokenNode`            | `node_modules/typescript/lib/typescript.js`          |
|  1.3% |    7 MiB |  43,697 | `parseNonArrayType`              | `node_modules/typescript/lib/typescript.js`          |
|  1.1% |    6 MiB |  41,400 | `instantiateList`                | `node_modules/typescript/lib/typescript.js`          |
|  1.0% |  5.5 MiB |  34,333 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js`          |
|  1.0% |  5.5 MiB | 141,459 | `createNodeArray`                | `node_modules/typescript/lib/typescript.js`          |
|  1.0% |  5.5 MiB |  86,394 | `createNormalizedTypeReference`  | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function       | Location                           |
| ---: | -------: | ------: | -------------- | ---------------------------------- |
| 9.8% |   54 MiB |  26,191 | `set`          | `<unknown>`                        |
| 5.8% |   32 MiB | 440,364 | `Map`          | `<unknown>`                        |
| 1.5% | 8.37 MiB |       1 | `readFileSync` | `node:fs`                          |
| 0.6% | 3.16 MiB |  58,610 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
| 0.3% |  1.5 MiB |   4,884 | `join`         | `<unknown>`                        |
| 0.2% | 1.06 MiB |      27 | `add`          | `<unknown>`                        |
| 0.2% |    1 MiB |   6,900 | `splice`       | `<unknown>`                        |
| 0.1% |  601 KiB |       2 | `slice`        | `node:buffer`                      |
| 0.1% |  512 KiB |   3,450 | `push`         | `<unknown>`                        |
| 0.1% |  512 KiB |  21,846 | `toString`     | `<unknown>`                        |
| 0.1% |  512 KiB |  21,846 | `slice`        | `<unknown>`                        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 71.5 MiB | 360,505 | `node_modules/typescript/lib/typescript.js:66013` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 28.5 MiB | 177,904 | `node_modules/typescript/lib/typescript.js:32468` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 21 MiB | 206,000 | `node_modules/typescript/lib/typescript.js:46190` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 20.5 MiB | 127,444 | `node_modules/typescript/lib/typescript.js:65988` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 19.5 MiB | 170,424 | `node_modules/typescript/lib/typescript.js:33379` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 17.5 MiB | 137,037 | `node_modules/typescript/lib/typescript.js:66215` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 12.7 MiB |     718 | `node_modules/typescript/lib/typescript.js:123140` |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 12.5 MiB |  32,776 | `node_modules/typescript/lib/typescript.js:71910` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.5 MiB | 100,508 | `node_modules/typescript/lib/typescript.js:33338` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.5 MiB | 279,267 | `node_modules/typescript/lib/typescript.js:33930` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 8.51 MiB |  67,532 | `node_modules/typescript/lib/typescript.js:65895` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:53728:21`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 8.5 MiB |  69,217 | `node_modules/typescript/lib/typescript.js:53728` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.37 MiB |       1 | `node:fs:433` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 7.52 MiB |   6,231 | `node_modules/typescript/lib/typescript.js:67445` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 7.5 MiB | 118,500 | `node_modules/typescript/lib/typescript.js:66040` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 7.5 MiB |  89,371 | `node_modules/typescript/lib/typescript.js:32461` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 7 MiB |  43,697 | `node_modules/typescript/lib/typescript.js:34836` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 6 MiB |  41,400 | `node_modules/typescript/lib/typescript.js:65878` |

##### `parsePropertyOrMethodSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 5.5 MiB |  34,333 | `node_modules/typescript/lib/typescript.js:34548` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 5.5 MiB | 141,459 | `node_modules/typescript/lib/typescript.js:33287` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 5.5 MiB |  86,394 | `node_modules/typescript/lib/typescript.js:63796` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 3.16 MiB |  58,610 | `node:internal/modules/cjs/loader:1671` |

##### `slice` (`node:buffer`)

|      % |    Size | Objects | Location          |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 601 KiB |       2 | `node:buffer:640` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 79.7% |  57 MiB | 287,396 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
| 11.9% | 8.5 MiB |  42,857 | `instantiateSignature`        | `node_modules/typescript/lib/typescript.js` |
|  7.0% |   5 MiB |  25,210 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  1.4% |   1 MiB |   5,042 | `createErasedSignature`       | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 21.4% | 11.5 MiB |   6,598 | `resolveObjectTypeMembers`               | `node_modules/typescript/lib/typescript.js` |
| 14.9% | 8.02 MiB |   4,591 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js` |
| 11.1% | 6.01 MiB |   3,441 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 10.3% | 5.55 MiB |   2,025 | `getObjectTypeInstantiation`             | `node_modules/typescript/lib/typescript.js` |
| 10.0% |  5.4 MiB |     167 | `resetMaybeStack`                        | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |    Size | Objects | Caller                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 71.9% |  23 MiB | 326,853 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js` |
| 18.8% |   6 MiB |  67,270 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 512 KiB |   3,450 | `bindAnonymousDeclaration`      | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 512 KiB |   3,450 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js` |
|  1.6% | 512 KiB |   3,450 | `resolveMappedTypeMembers`      | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 42.1% |  12 MiB |  74,907 | `parseNonArrayType`     | `node_modules/typescript/lib/typescript.js` |
| 19.3% | 5.5 MiB |  34,333 | `createStringLiteral`   | `node_modules/typescript/lib/typescript.js` |
| 15.8% | 4.5 MiB |  28,090 | `createBaseDeclaration` | `node_modules/typescript/lib/typescript.js` |
|  5.3% | 1.5 MiB |   9,364 | `doJSDocScan`           | `node_modules/typescript/lib/typescript.js` |
|  5.3% | 1.5 MiB |   9,363 | `createUnionTypeNode`   | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                    | Location                                    |
| ----: | ------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 76.2% |  16 MiB | 156,427 | `declareSymbolAndAddToSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
|  7.1% | 1.5 MiB |  11,568 | `declareModuleMember`                     | `node_modules/typescript/lib/typescript.js` |
|  7.1% | 1.5 MiB |  11,567 | `bindVariableDeclarationOrBindingElement` | `node_modules/typescript/lib/typescript.js` |
|  4.8% |   1 MiB |  13,219 | `bindBlockScopedDeclaration`              | `node_modules/typescript/lib/typescript.js` |
|  4.8% |   1 MiB |  13,219 | `declareClassMember`                      | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                      | Location                                    |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------- |
| 90.2% | 18.5 MiB | 102,567 | `instantiateList`           | `node_modules/typescript/lib/typescript.js` |
|  4.9% |    1 MiB |  18,906 | `getBaseSignature`          | `node_modules/typescript/lib/typescript.js` |
|  2.4% |  512 KiB |   3,450 | `chooseOverload`            | `node_modules/typescript/lib/typescript.js` |
|  2.4% |  512 KiB |   2,521 | `getSignatureInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                    |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 43.6% | 8.5 MiB |  74,288 | `parsePropertyName`                 | `node_modules/typescript/lib/typescript.js` |
| 35.9% |   7 MiB |  61,177 | `parseEntityNameOfTypeReference`    | `node_modules/typescript/lib/typescript.js` |
| 10.3% |   2 MiB |  17,480 | `parsePropertyAccessExpressionRest` | `node_modules/typescript/lib/typescript.js` |
|  5.1% |   1 MiB |   8,739 | `parseExportSpecifier`              | `node_modules/typescript/lib/typescript.js` |
|  2.6% | 512 KiB |   4,370 | `parseNameWithKeywordCheck`         | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                       | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 94.3% | 16.5 MiB | 131,079 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  5.7% |    1 MiB |   5,958 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js` |

##### `readFile` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                | Location                                              |
| ----: | -------: | ------: | --------------------- | ----------------------------------------------------- |
| 92.0% | 11.7 MiB |     178 | `(anonymous)`         | `node_modules/typescript/lib/typescript.js:123127:40` |
|  8.0% | 1.01 MiB |     540 | `readJsonOrUndefined` | `node_modules/typescript/lib/typescript.js`           |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 12.5 MiB |  32,776 | `checkIdentifier` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                | Location                                    |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------- |
| 43.5% |   5 MiB |  43,698 | `parseIdentifierOrPattern`            | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  13,110 | `parseVariableDeclaration`            | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  13,110 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js` |
|  8.7% |   1 MiB |   8,740 | `parseFunctionDeclaration`            | `node_modules/typescript/lib/typescript.js` |
|  8.7% |   1 MiB |   8,740 | `parseParameterWorker`                | `node_modules/typescript/lib/typescript.js` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                         | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 26.1% |   3 MiB |  71,002 | `parseParameters`              | `node_modules/typescript/lib/typescript.js` |
| 17.4% |   2 MiB |  57,348 | `parseCallExpressionRest`      | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  32,771 | `parseBracketedList`           | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  32,771 | `parseHeritageClause`          | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  32,771 | `parseVariableDeclarationList` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 8.51 MiB |  67,532 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:53728:21`)

|      % |    Size | Objects | Caller    | Location    |
| -----: | ------: | ------: | --------- | ----------- |
| 100.0% | 8.5 MiB |  69,217 | `forEach` | `<unknown>` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                    | Location                                    |
| -----: | -------: | ------: | ------------------------- | ------------------------------------------- |
| 100.0% | 7.52 MiB |   6,231 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                    |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 7.5 MiB | 118,500 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 7.5 MiB |  89,371 | `createToken` | `node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                          | Location                                    |
| -----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 7 MiB |  43,697 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 75.0% | 4.5 MiB |  31,050 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  8.3% | 512 KiB |   3,450 | `instantiateConstituent`      | `node_modules/typescript/lib/typescript.js` |
|  8.3% | 512 KiB |   3,450 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  8.3% | 512 KiB |   3,450 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `parsePropertyOrMethodSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller            | Location                                    |
| -----: | ------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 5.5 MiB |  34,333 | `parseTypeMember` | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 36.4% |   2 MiB |  32,772 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |
| 36.4% |   2 MiB |  59,532 | `parseList`              | `node_modules/typescript/lib/typescript.js` |
| 27.3% | 1.5 MiB |  49,155 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller                  | Location                                    |
| -----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 5.5 MiB |  86,394 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3.16 MiB |  58,610 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `join` (`<unknown>`)

|      % |    Size | Objects | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 1.5 MiB |   4,884 | `doJSDocScan` | `node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|      % |     Size | Objects | Caller          | Location                                    |
| -----: | -------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 1.06 MiB |      27 | `declareSymbol` | `node_modules/typescript/lib/typescript.js` |

##### `splice` (`<unknown>`)

|     % |    Size | Objects | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 50.0% | 512 KiB |   3,450 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |
| 50.0% | 512 KiB |   3,450 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|      % |    Size | Objects | Caller     | Location      |
| -----: | ------: | ------: | ---------- | ------------- |
| 100.0% | 601 KiB |       2 | `toString` | `node:buffer` |

##### `push` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                    |
| -----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |   3,450 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

|      % |    Size | Objects | Caller                | Location                                    |
| -----: | ------: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|      % |    Size | Objects | Caller     | Location                                    |
| -----: | ------: | ------: | ---------- | ------------------------------------------- |
| 100.0% | 512 KiB |  21,846 | `addRange` | `node_modules/typescript/lib/typescript.js` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 76.8% | 421 MiB | 3,523,104 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 75.8% | 415 MiB | 3,427,910 | `next`                                     | `<unknown>`                                           |
| 75.8% | 415 MiB | 3,491,463 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
| 72.9% | 399 MiB | 3,257,942 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 69.7% | 382 MiB | 3,162,546 | `(anonymous)`                              | `<unknown>`                                           |
| 55.1% | 302 MiB | 2,327,177 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 54.8% | 301 MiB | 2,317,156 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.3% | 298 MiB | 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.8% | 295 MiB | 2,284,781 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.3% | 292 MiB | 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.1% | 285 MiB | 2,211,927 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.7% | 283 MiB | 2,202,967 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 50.4% | 276 MiB | 2,164,121 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.7% | 267 MiB | 2,059,453 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.2% | 264 MiB | 1,978,036 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 48.0% | 263 MiB | 2,038,264 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 47.9% | 262 MiB | 1,968,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 47.1% | 258 MiB | 1,873,577 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 46.7% | 256 MiB | 1,862,321 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.2% | 253 MiB | 1,808,711 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 55.1% | 302 MiB | 2,327,177 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 54.8% | 301 MiB | 2,317,156 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.3% | 298 MiB | 2,294,049 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.8% | 295 MiB | 2,284,781 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.3% | 292 MiB | 2,257,346 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.1% | 285 MiB | 2,211,927 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.7% | 283 MiB | 2,202,967 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 50.4% | 276 MiB | 2,164,121 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.7% | 267 MiB | 2,059,453 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.2% | 264 MiB | 1,978,036 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 48.0% | 263 MiB | 2,038,264 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 47.9% | 262 MiB | 1,968,615 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 47.1% | 258 MiB | 1,873,577 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 46.7% | 256 MiB | 1,862,321 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 46.2% | 253 MiB | 1,808,711 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 46.0% | 252 MiB | 1,792,008 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 45.2% | 248 MiB | 1,767,319 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 41.1% | 225 MiB | 2,028,375 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 39.6% | 217 MiB | 1,571,550 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 37.3% | 205 MiB | 1,512,241 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 75.8% |  415 MiB | 3,427,910 | `next`            | `<unknown>`                                |
| 72.9% |  399 MiB | 3,257,942 | `run`             | `node:internal/modules/esm/module_job`     |
| 31.3% |  172 MiB | 1,128,619 | `forEach`         | `<unknown>`                                |
|  9.8% |   54 MiB |    26,191 | `set`             | `<unknown>`                                |
|  5.8% |   32 MiB |   440,364 | `Map`             | `<unknown>`                                |
|  2.9% | 16.1 MiB |   141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  2.9% | 16.1 MiB |   141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  2.9% | 16.1 MiB |   141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  2.9% | 16.1 MiB |   141,064 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  2.9% | 16.1 MiB |   141,064 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  2.9% | 16.1 MiB |   141,064 | `require`         | `node:internal/modules/helpers`            |
|  1.5% | 8.37 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  1.5% | 8.37 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  1.5% | 8.37 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  1.4% | 7.71 MiB |   141,063 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.6% | 3.16 MiB |    58,610 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|  0.3% |  1.5 MiB |     4,884 | `join`            | `<unknown>`                                |
|  0.2% | 1.06 MiB |        27 | `add`             | `<unknown>`                                |
|  0.2% |    1 MiB |     6,900 | `splice`          | `<unknown>`                                |
|  0.1% |  601 KiB |         2 | `slice`           | `node:buffer`                              |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 60.0% |  252 MiB | 1,951,309 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 36.1% |  152 MiB | 1,430,470 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  3.8% | 16.1 MiB |   141,064 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  514 KiB |       261 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|     % |    Size |   Objects | Callee                   | Location                                    |
| ----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 98.3% | 408 MiB | 3,388,137 | `(anonymous)`            | `datadog-pprof-heap.mjs:1:1`                |
|  2.2% |   9 MiB |    61,945 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.6% |  414 MiB | 3,491,462 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.4% | 1.48 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 399 MiB | 3,257,942 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 382 MiB | 3,162,546 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124967:37`)

|     % |     Size |   Objects | Callee            | Location                                    |
| ----: | -------: | --------: | ----------------- | ------------------------------------------- |
| 80.8% |  244 MiB | 1,743,385 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |
| 19.2% | 58.1 MiB |   583,792 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 301 MiB | 2,317,156 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 298 MiB | 2,294,049 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                    |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 295 MiB | 2,284,781 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                    |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 100.0% | 292 MiB | 2,257,346 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                    |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 285 MiB | 2,211,927 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124899:76`)

|      % |    Size |   Objects | Callee                          | Location                                    |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 283 MiB | 2,202,967 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 276 MiB | 2,164,121 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124899:76` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                    |
| -----: | ------: | --------: | --------- | ------------------------------------------- |
| 100.0% | 267 MiB | 2,059,453 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                       | Location                                    |
| ----: | -------: | --------: | ---------------------------- | ------------------------------------------- |
| 69.9% |  185 MiB | 1,291,263 | `checkBlock`                 | `node_modules/typescript/lib/typescript.js` |
| 43.2% |  114 MiB |   920,082 | `checkVariableDeclaration`   | `node_modules/typescript/lib/typescript.js` |
| 41.9% |  111 MiB |   890,825 | `checkVariableStatement`     | `node_modules/typescript/lib/typescript.js` |
| 26.1% | 68.9 MiB |   553,145 | `checkTypeReferenceOrImport` | `node_modules/typescript/lib/typescript.js` |
| 24.7% | 65.1 MiB |   437,207 | `checkExpressionStatement`   | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 263 MiB | 2,038,264 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 262 MiB | 1,968,615 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                    |
| ----: | -------: | --------: | -------------------- | ------------------------------------------- |
| 62.6% |  162 MiB | 1,066,745 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js` |
| 37.4% | 96.3 MiB |   806,832 | `forEach`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                    |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------- |
| 100.0% | 256 MiB | 1,862,321 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                    |
| -----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 100.0% | 253 MiB | 1,808,711 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                                | Location                                    |
| ----: | ------: | --------: | ------------------------------------- | ------------------------------------------- |
| 99.8% | 251 MiB | 1,789,277 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |
|  0.2% | 512 KiB |     2,731 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 248 MiB | 1,767,319 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 46.1% |  104 MiB | 845,463 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
| 31.9% | 71.7 MiB | 797,414 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124028:24` |
| 16.7% | 37.6 MiB | 286,705 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124077:30` |
| 10.9% | 24.6 MiB | 277,525 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:125782:35` |
|  5.8% |   13 MiB | 132,567 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:125932:42` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                    |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------- |
| 94.2% |  205 MiB | 1,512,241 | `checkCallExpression`                          | `node_modules/typescript/lib/typescript.js` |
| 21.5% | 46.8 MiB |   273,102 | `checkObjectLiteral`                           | `node_modules/typescript/lib/typescript.js` |
| 16.4% | 35.7 MiB |   108,096 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 13.6% | 29.5 MiB |   273,030 | `checkExpressionWorker`                        | `node_modules/typescript/lib/typescript.js` |
| 12.7% | 27.5 MiB |   203,730 | `checkArrayLiteral`                            | `node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                  | Location                                    |
| ----: | -------: | --------: | ----------------------- | ------------------------------------------- |
| 92.6% |  189 MiB | 1,386,358 | `resolveSignature`      | `node_modules/typescript/lib/typescript.js` |
|  8.9% | 18.2 MiB |   213,261 | `instantiateType`       | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 4.01 MiB |     5,819 | `getResolvedSignature`  | `node_modules/typescript/lib/typescript.js` |
|  0.5% | 1.01 MiB |     2,594 | `getReturnTypeFromBody` | `node_modules/typescript/lib/typescript.js` |
|  0.5% |    1 MiB |     2,215 | `signatureToString`     | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Callee              | Location                                             |
| ----: | -------: | --------: | ------------------- | ---------------------------------------------------- |
| 97.3% |  167 MiB | 1,094,382 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js`          |
|  5.0% |  8.5 MiB |    69,217 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53728:21` |
|  0.6% | 1.05 MiB |     3,131 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:51425:20` |
|  0.6% |    1 MiB |       146 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53423:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 52.1% | 8.37 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 47.9% | 7.71 MiB | 141,063 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.1 MiB | 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.1 MiB | 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.1 MiB | 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 16.1 MiB | 141,064 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 16.1 MiB | 141,064 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.37 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Objects | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 59.0% | 4.55 MiB |  82,453 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 41.0% | 3.16 MiB |  58,610 | `wrapSafe`    | `node:internal/modules/cjs/loader`              |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 8.37 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% | 7.95 MiB |       2 | `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.9% | 5.06 MiB |       2 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% | 5.01 MiB |   4,649 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) |
| 0.9% | 5.01 MiB |   2,867 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.8% |  4.5 MiB |  22,690 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |    4 MiB |  24,970 | `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableDeclarationList` ← `parseDeclarationWorker` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% |  3.5 MiB |  21,849 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `createStringLiteral` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseVariableDeclarationList` ← `parseDeclarationWorker` ← `(anonymous)` (37111:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |  3.5 MiB |       2 | `set` ← `resetMaybeStack` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `checkTypeReferenceOrImport` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% | 3.16 MiB |  58,610 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |    3 MiB |  15,127 | `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker`                                                                                                     |
| 0.5% |    3 MiB |       2 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.5% | 2.51 MiB |   1,582 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`             |
| 0.5% |  2.5 MiB |   1,433 | `set` ← `resolveObjectTypeMembers` (`node_modules/typescript/lib/typescript.js`) ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.5% |  2.5 MiB |  15,606 | `parsePropertyOrMethodSignature` (`node_modules/typescript/lib/typescript.js`) ← `parseTypeMember` ← `parseList` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |  2.5 MiB |  43,118 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (46417:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.4% | 2.25 MiB |       3 | `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkReturnStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% | 2.24 MiB |      31 | `readFile` (`node_modules/typescript/lib/typescript.js`) ← `(anonymous)` (123127:40) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |    2 MiB |  31,469 | `(anonymous)` (`node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |    2 MiB |  10,084 | `instantiateSignature` (`node_modules/typescript/lib/typescript.js`) ← `instantiateList` ← `resolveAnonymousTypeMembers` ← `resolveStructuredTypeMembers` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeArgumentConstraints` ← `checkTypeReferenceOrImport` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                            |
