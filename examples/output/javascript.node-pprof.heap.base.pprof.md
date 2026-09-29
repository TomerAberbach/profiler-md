# Heap profile

Allocated 957 MiB over 8,453,024 objects (119 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 78.2% |  748 MiB | 7,242,637 |
| Standard library | 21.6% |  206 MiB | 1,210,386 |
| Native           |  0.2% | 1.98 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 12.1% |  116 MiB | 584,879 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  8.2% | 78.6 MiB |  45,581 | `set`                           | `<unknown>`                                          |
|  7.1% |   68 MiB | 766,364 | `Map`                           | `<unknown>`                                          |
|  5.5% | 52.5 MiB | 327,722 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  4.9% | 46.5 MiB | 485,246 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  2.9% | 27.5 MiB | 220,254 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  2.7% | 25.5 MiB | 159,182 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  2.6% |   25 MiB | 218,493 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  2.5% | 23.5 MiB | 186,949 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 21.5 MiB | 108,403 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   21 MiB | 146,423 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:52487:21` |
|  1.9% | 18.5 MiB | 163,869 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 17.5 MiB | 109,242 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 17.2 MiB |  32,776 | `getResolvedSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   17 MiB | 202,577 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |   15 MiB | 376,313 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |   14 MiB | 122,355 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  1.4% | 13.5 MiB | 196,801 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 12.5 MiB | 120,157 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 12.5 MiB |     326 | `slice`                         | `node:buffer`                                        |

#### Categories

##### Third-party

|     % |     Size | Objects | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 12.1% |  116 MiB | 584,879 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js`          |
|  5.5% | 52.5 MiB | 327,722 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js`          |
|  4.9% | 46.5 MiB | 485,246 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js`          |
|  2.9% | 27.5 MiB | 220,254 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js`          |
|  2.7% | 25.5 MiB | 159,182 | `parseTypeReference`            | `node_modules/typescript/lib/typescript.js`          |
|  2.6% |   25 MiB | 218,493 | `createIdentifier`              | `node_modules/typescript/lib/typescript.js`          |
|  2.5% | 23.5 MiB | 186,949 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js`          |
|  2.2% | 21.5 MiB | 108,403 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  2.2% |   21 MiB | 146,423 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:52487:21` |
|  1.9% | 18.5 MiB | 163,869 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 17.5 MiB | 109,242 | `parseNonArrayType`             | `node_modules/typescript/lib/typescript.js`          |
|  1.8% | 17.2 MiB |  32,776 | `getResolvedSymbol`             | `node_modules/typescript/lib/typescript.js`          |
|  1.8% |   17 MiB | 202,577 | `createBaseTokenNode`           | `node_modules/typescript/lib/typescript.js`          |
|  1.6% |   15 MiB | 376,313 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js`          |
|  1.5% |   14 MiB | 122,355 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js`          |
|  1.4% | 13.5 MiB | 196,801 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js`          |
|  1.3% | 12.5 MiB | 120,157 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js`          |
|  1.2% | 11.5 MiB | 100,506 | `parseIdentifierName`           | `node_modules/typescript/lib/typescript.js`          |
|  1.1% |   11 MiB | 286,194 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js`          |
|  0.9% |    9 MiB | 126,775 | `instantiateList`               | `node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function       | Location                           |
| ---: | -------: | ------: | -------------- | ---------------------------------- |
| 8.2% | 78.6 MiB |  45,581 | `set`          | `<unknown>`                        |
| 7.1% |   68 MiB | 766,364 | `Map`          | `<unknown>`                        |
| 1.3% | 12.5 MiB |     326 | `slice`        | `node:buffer`                      |
| 1.0% | 9.91 MiB |     309 | `toString`     | `node:buffer`                      |
| 0.9% |    9 MiB |  68,931 | `join`         | `<unknown>`                        |
| 0.9% | 8.27 MiB |       1 | `readFileSync` | `node:fs`                          |
| 0.7% |    7 MiB |  45,977 | `push`         | `<unknown>`                        |
| 0.3% |    3 MiB |  98,310 | `trimEnd`      | `<unknown>`                        |
| 0.3% |    3 MiB |  84,655 | `wrapSafe`     | `node:internal/modules/cjs/loader` |
| 0.3% |  2.5 MiB |  17,250 | `splice`       | `<unknown>`                        |
| 0.2% | 2.01 MiB |  32,987 | `slice`        | `<unknown>`                        |
| 0.1% |    1 MiB |   5,901 | `replace`      | `<unknown>`                        |
| 0.1% |    1 MiB |  43,692 | `toString`     | `<unknown>`                        |
| 0.1% |  514 KiB |     102 | `add`          | `<unknown>`                        |

#### Lines

Lines ranked by contribution to each function's self size.

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 116 MiB | 584,879 | `node_modules/typescript/lib/typescript.js:59020` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 52.5 MiB | 327,722 | `node_modules/typescript/lib/typescript.js:31416` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 46.5 MiB | 485,246 | `node_modules/typescript/lib/typescript.js:44997` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 27.5 MiB | 220,254 | `node_modules/typescript/lib/typescript.js:64955` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 25.5 MiB | 159,182 | `node_modules/typescript/lib/typescript.js:33132` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 25 MiB | 218,493 | `node_modules/typescript/lib/typescript.js:32283` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 23.5 MiB | 186,949 | `node_modules/typescript/lib/typescript.js:64733` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 21.5 MiB | 108,403 | `node_modules/typescript/lib/typescript.js:64758` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:52487:21`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 21 MiB | 146,423 | `node_modules/typescript/lib/typescript.js:52487` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 18.5 MiB | 163,869 | `node_modules/typescript/lib/typescript.js:64640` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 17.5 MiB | 109,242 | `node_modules/typescript/lib/typescript.js:33781` |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 17.2 MiB |  32,776 | `node_modules/typescript/lib/typescript.js:70627` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 17 MiB | 202,577 | `node_modules/typescript/lib/typescript.js:31409` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 15 MiB | 376,313 | `node_modules/typescript/lib/typescript.js:32875` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 14 MiB | 122,355 | `node_modules/typescript/lib/typescript.js:31395` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 13.5 MiB | 196,801 | `node_modules/typescript/lib/typescript.js:64785` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 12.5 MiB | 120,157 | `node_modules/typescript/lib/typescript.js:62541` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 12.5 MiB |     326 | `node:buffer:640` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 11.5 MiB | 100,506 | `node_modules/typescript/lib/typescript.js:32324` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 11 MiB | 286,194 | `node_modules/typescript/lib/typescript.js:32232` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 9.91 MiB |     309 | `node:buffer:839` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                          |
| -----: | ----: | ------: | ------------------------------------------------- |
| 100.0% | 9 MiB | 126,775 | `node_modules/typescript/lib/typescript.js:64623` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Location      |
| -----: | -------: | ------: | ------------- |
| 100.0% | 8.27 MiB |       1 | `node:fs:433` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |  Size | Objects | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 3 MiB |  84,655 | `node:internal/modules/cjs/loader:1671` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 96.1% | 112 MiB | 562,190 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.9% | 4.5 MiB |  22,689 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                    |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------- |
| 31.9% | 25.1 MiB |  16,016 | `createInstantiatedSymbolTable`          | `node_modules/typescript/lib/typescript.js` |
| 18.5% | 14.5 MiB |   8,320 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js` |
| 11.8% |  9.3 MiB |      17 | `resetMaybeStack`                        | `node_modules/typescript/lib/typescript.js` |
|  7.6% | 6.01 MiB |   3,440 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  7.1% |  5.6 MiB |   9,377 | `declareSymbol`                          | `node_modules/typescript/lib/typescript.js` |

##### `Map` (`<unknown>`)

|     % |     Size | Objects | Caller                          | Location                                    |
| ----: | -------: | ------: | ------------------------------- | ------------------------------------------- |
| 43.4% | 29.5 MiB | 319,958 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js` |
| 27.9% |   19 MiB | 195,772 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 17.6% |   12 MiB | 147,474 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  2.5 MiB |  17,249 | `bindFunctionOrConstructorType` | `node_modules/typescript/lib/typescript.js` |
|  2.2% |  1.5 MiB |  36,220 | `bindAnonymousTypeWorker`       | `node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                           | Location                                    |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------- |
| 34.3% |  18 MiB | 112,362 | `createBaseDeclaration`          | `node_modules/typescript/lib/typescript.js` |
| 19.0% |  10 MiB |  62,424 | `parseNonArrayType`              | `node_modules/typescript/lib/typescript.js` |
| 14.3% | 7.5 MiB |  46,817 | `doJSDocScan`                    | `node_modules/typescript/lib/typescript.js` |
| 13.3% |   7 MiB |  43,698 | `createPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
|  6.7% | 3.5 MiB |  21,848 | `createUnionTypeNode`            | `node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                                    | Location                                    |
| ----: | -------: | ------: | ----------------------------------------- | ------------------------------------------- |
| 72.0% | 33.5 MiB | 329,923 | `declareSymbolAndAddToSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 21.5% |   10 MiB | 126,681 | `declareModuleMember`                     | `node_modules/typescript/lib/typescript.js` |
|  2.2% |    1 MiB |   7,712 | `declareClassMember`                      | `node_modules/typescript/lib/typescript.js` |
|  2.2% |    1 MiB |  13,219 | `bindVariableDeclarationOrBindingElement` | `node_modules/typescript/lib/typescript.js` |
|  2.2% |    1 MiB |   7,711 | `bindBlockScopedDeclaration`              | `node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                       | Location                                    |
| ----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 92.7% | 25.5 MiB | 205,556 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  7.3% |    2 MiB |  14,698 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js` |

##### `parseTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller              | Location                                    |
| -----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 25.5 MiB | 159,182 | `parseNonArrayType` | `node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                      | Location                                    |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------- |
| 60.0% |  15 MiB | 131,096 | `parseBindingIdentifier`    | `node_modules/typescript/lib/typescript.js` |
| 22.0% | 5.5 MiB |  48,068 | `parsePrimaryExpression`    | `node_modules/typescript/lib/typescript.js` |
|  8.0% |   2 MiB |  17,480 | `parseTypeParameter`        | `node_modules/typescript/lib/typescript.js` |
|  8.0% |   2 MiB |  17,479 | `parseInterfaceDeclaration` | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 512 KiB |   4,370 | `parseIdentifier`           | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                      | Location                                    |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------- |
| 97.9% |  23 MiB | 184,428 | `instantiateList`           | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 512 KiB |   2,521 | `getSignatureInstantiation` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                                                   | Location                                    |
| ----: | ------: | ------: | -------------------------------------------------------- | ------------------------------------------- |
| 74.4% |  16 MiB |  80,672 | `instantiateSignature`                                   | `node_modules/typescript/lib/typescript.js` |
| 23.3% |   5 MiB |  25,210 | `createErasedSignature`                                  | `node_modules/typescript/lib/typescript.js` |
|  2.3% | 512 KiB |   2,521 | `getSignatureInstantiationWithoutFillingInTypeArguments` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:52487:21`)

|      % |   Size | Objects | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 21 MiB | 146,423 | `forEach` | `<unknown>` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 97.3% |  18 MiB | 160,890 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |
|  2.7% | 512 KiB |   2,979 | `createMarkerType`      | `node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                          | Location                                    |
| -----: | -------: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 17.5 MiB | 109,242 | `parseIntersectionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 17.2 MiB |  32,776 | `checkIdentifier` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller        | Location                                    |
| -----: | -----: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 17 MiB | 202,577 | `createToken` | `node_modules/typescript/lib/typescript.js` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                         | Location                                    |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------- |
| 46.7% |   7 MiB | 187,883 | `parseParameters`              | `node_modules/typescript/lib/typescript.js` |
| 23.3% | 3.5 MiB |  79,196 | `parseBracketedList`           | `node_modules/typescript/lib/typescript.js` |
| 13.3% |   2 MiB |  68,270 | `parseArgumentList`            | `node_modules/typescript/lib/typescript.js` |
|  6.7% |   1 MiB |  16,385 | `parseParametersWorker`        | `node_modules/typescript/lib/typescript.js` |
|  3.3% | 512 KiB |   8,193 | `parseObjectLiteralExpression` | `node_modules/typescript/lib/typescript.js` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`)

|      % |   Size | Objects | Caller             | Location                                    |
| -----: | -----: | ------: | ------------------ | ------------------------------------------- |
| 100.0% | 14 MiB | 122,355 | `createIdentifier` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 13.5 MiB | 196,801 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `createNormalizedTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                    |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 12.5 MiB | 120,157 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 12.5 MiB |     326 | `toString` | `node:buffer` |

##### `parseIdentifierName` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                    |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------- |
| 60.9% |   7 MiB |  61,177 | `parsePropertyName`                 | `node_modules/typescript/lib/typescript.js` |
| 17.4% |   2 MiB |  17,479 | `parsePropertyAccessExpressionRest` | `node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  13,110 | `parseRightSideOfDot`               | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   4,370 | `parseExportSpecifier`              | `node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   4,370 | `parseEntityName`                   | `node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 36.4% |   4 MiB |  81,928 | `parseList`              | `node_modules/typescript/lib/typescript.js` |
| 22.7% | 2.5 MiB |  73,186 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js` |
| 22.7% | 2.5 MiB |  90,116 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js` |
| 18.2% |   2 MiB |  40,964 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js` |

##### `toString` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location                                    |
| -----: | -------: | ------: | ---------- | ------------------------------------------- |
| 100.0% | 9.91 MiB |     309 | `readFile` | `node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location                                    |
| ----: | ----: | ------: | ------------------ | ------------------------------------------- |
| 77.8% | 7 MiB |  57,137 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 22.2% | 2 MiB |  11,794 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 94.4% | 8.5 MiB | 110,390 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  5.6% | 512 KiB |  16,385 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |     Size | Objects | Caller            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                  | Location                                             |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 50.0% | 3.5 MiB |  24,149 | `getSignaturesOfSymbol` | `node_modules/typescript/lib/typescript.js`          |
| 21.4% | 1.5 MiB |  10,350 | `getIntersectionType`   | `node_modules/typescript/lib/typescript.js`          |
|  7.1% | 512 KiB |   1,457 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:38597:39` |
|  7.1% | 512 KiB |   3,450 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:61411:62` |
|  7.1% | 512 KiB |   3,450 | `arrayFrom`             | `node_modules/typescript/lib/typescript.js`          |

##### `trimEnd` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                    |
| ----: | ------: | ------: | ------------------ | ------------------------------------------- |
| 83.3% | 2.5 MiB |  81,925 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js` |
| 16.7% | 512 KiB |  16,385 | `parseTagComments` | `node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |  Size | Objects | Caller        | Location                                   |
| -----: | ----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 3 MiB |  84,655 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `splice` (`<unknown>`)

|      % |    Size | Objects | Caller               | Location                                    |
| -----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 100.0% | 2.5 MiB |  17,250 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|     % |    Size | Objects | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 25.2% | 518 KiB |      71 | `getAdjustedTypeWithFacts` | `node_modules/typescript/lib/typescript.js` |
| 25.0% | 514 KiB |     146 | `fillMissingTypeArguments` | `node_modules/typescript/lib/typescript.js` |
| 24.9% | 512 KiB |  16,385 | `filter`                   | `node_modules/typescript/lib/typescript.js` |
| 24.9% | 512 KiB |  16,385 | `addRange`                 | `node_modules/typescript/lib/typescript.js` |

##### `replace` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location                                    |
| -----: | ----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 1 MiB |   5,901 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js` |

##### `toString` (`<unknown>`)

|      % |  Size | Objects | Caller                | Location                                    |
| -----: | ----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% | 1 MiB |  43,692 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js` |

##### `add` (`<unknown>`)

|      % |    Size | Objects | Caller          | Location                                    |
| -----: | ------: | ------: | --------------- | ------------------------------------------- |
| 100.0% | 514 KiB |     102 | `declareSymbol` | `node_modules/typescript/lib/typescript.js` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 78.2% | 748 MiB | 6,806,339 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 77.7% | 743 MiB | 6,780,010 | `next`                                     | `<unknown>`                                           |
| 77.2% | 739 MiB | 6,750,414 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                          |
| 75.0% | 717 MiB | 6,577,351 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 73.9% | 707 MiB | 6,516,443 | `(anonymous)`                              | `<unknown>`                                           |
| 54.9% | 525 MiB | 4,534,130 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 54.6% | 522 MiB | 4,510,993 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.0% | 517 MiB | 4,458,246 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.5% | 512 MiB | 4,428,120 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.1% | 508 MiB | 4,407,390 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 497 MiB | 4,341,884 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.3% | 491 MiB | 4,308,536 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 50.1% | 479 MiB | 4,222,403 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 468 MiB | 4,101,194 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.0% | 459 MiB | 4,033,135 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 46.2% | 442 MiB | 3,661,880 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 45.9% | 439 MiB | 3,658,140 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 45.7% | 437 MiB | 3,499,983 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 45.0% | 430 MiB | 3,460,664 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 44.6% | 427 MiB | 3,437,691 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |    Size |   Objects | Function                                   | Location                                              |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------- |
| 54.9% | 525 MiB | 4,534,130 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 54.6% | 522 MiB | 4,510,993 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 54.0% | 517 MiB | 4,458,246 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 53.5% | 512 MiB | 4,428,120 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 53.1% | 508 MiB | 4,407,390 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 52.0% | 497 MiB | 4,341,884 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 51.3% | 491 MiB | 4,308,536 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 50.1% | 479 MiB | 4,222,403 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 48.9% | 468 MiB | 4,101,194 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 48.0% | 459 MiB | 4,033,135 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 46.2% | 442 MiB | 3,661,880 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 45.9% | 439 MiB | 3,658,140 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 45.7% | 437 MiB | 3,499,983 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 45.0% | 430 MiB | 3,460,664 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 44.6% | 427 MiB | 3,437,691 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 43.9% | 420 MiB | 3,376,676 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 43.6% | 417 MiB | 3,351,125 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 43.2% | 413 MiB | 3,795,099 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 36.0% | 344 MiB | 2,623,695 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 33.2% | 318 MiB | 2,621,080 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 77.7% |  743 MiB | 6,780,010 | `next`            | `<unknown>`                                |
| 75.0% |  717 MiB | 6,577,351 | `run`             | `node:internal/modules/esm/module_job`     |
| 29.8% |  286 MiB | 2,289,619 | `forEach`         | `<unknown>`                                |
|  8.2% | 78.6 MiB |    45,581 | `set`             | `<unknown>`                                |
|  7.1% |   68 MiB |   766,364 | `Map`             | `<unknown>`                                |
|  2.3% | 22.4 MiB |       635 | `toString`        | `node:buffer`                              |
|  1.3% | 12.8 MiB |   125,618 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  1.3% | 12.8 MiB |   125,618 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  1.3% | 12.8 MiB |   125,618 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  1.3% | 12.8 MiB |   125,618 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  1.3% | 12.8 MiB |   125,618 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  1.3% | 12.8 MiB |   125,618 | `require`         | `node:internal/modules/helpers`            |
|  1.3% | 12.5 MiB |       326 | `slice`           | `node:buffer`                              |
|  0.9% |    9 MiB |    68,931 | `join`            | `<unknown>`                                |
|  0.9% | 8.27 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  0.9% | 8.27 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  0.9% | 8.27 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  0.7% |    7 MiB |    45,977 | `push`            | `<unknown>`                                |
|  0.5% |  4.5 MiB |   125,617 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.3% |    3 MiB |    98,310 | `trimEnd`         | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 60.1% |  450 MiB | 3,943,770 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 38.1% |  285 MiB | 2,730,397 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 12.8 MiB |   125,618 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  512 KiB |     6,554 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|     % |     Size |   Objects | Callee                   | Location                                    |
| ----: | -------: | --------: | ------------------------ | ------------------------------------------- |
| 98.2% |  730 MiB | 6,692,752 | `(anonymous)`            | `datadog-pprof-heap.mjs:1:1`                |
|  3.0% | 22.6 MiB |   153,496 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.8% |  737 MiB | 6,750,413 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.2% | 1.47 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 717 MiB | 6,577,351 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 707 MiB | 6,516,443 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Size |   Objects | Callee            | Location                                    |
| ----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 78.0% | 409 MiB | 3,299,753 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js` |
| 22.0% | 116 MiB | 1,234,377 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 522 MiB | 4,510,993 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 517 MiB | 4,458,246 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                    |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 512 MiB | 4,428,120 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                    |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------- |
| 100.0% | 508 MiB | 4,407,390 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                    |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 497 MiB | 4,341,884 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123317:76`)

|      % |    Size |   Objects | Callee                          | Location                                    |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 491 MiB | 4,308,536 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                              |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------- |
| 100.0% | 479 MiB | 4,222,403 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                    |
| -----: | ------: | --------: | --------- | ------------------------------------------- |
| 100.0% | 468 MiB | 4,101,194 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 459 MiB | 4,033,135 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                     | Location                                    |
| ----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 71.8% | 317 MiB | 2,615,438 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 40.0% | 177 MiB | 1,477,793 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 39.6% | 175 MiB | 1,466,383 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 27.0% | 119 MiB | 1,022,259 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 26.1% | 115 MiB | 1,004,036 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                    |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------- |
| 100.0% | 439 MiB | 3,658,140 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee               | Location                                    |
| ----: | ------: | --------: | -------------------- | ------------------------------------------- |
| 63.0% | 275 MiB | 2,199,171 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js` |
| 37.0% | 162 MiB | 1,300,812 | `forEach`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                    |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------- |
| 100.0% | 430 MiB | 3,460,664 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                    |
| -----: | ------: | --------: | ----------------- | ------------------------------------------- |
| 100.0% | 427 MiB | 3,437,691 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                | Location                                    |
| -----: | ------: | --------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 420 MiB | 3,376,676 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                    |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------- |
| 100.0% | 417 MiB | 3,351,125 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                              |
| ----: | -------: | --------: | -------------------- | ----------------------------------------------------- |
| 40.8% |  169 MiB | 1,336,496 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
| 32.6% |  135 MiB | 1,441,645 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:24` |
| 20.4% | 84.4 MiB |   734,535 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122498:30` |
| 13.3% | 55.1 MiB |   611,036 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124200:35` |
|  7.4% | 30.5 MiB |   345,195 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124350:42` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee                                         | Location                                    |
| ----: | -------: | --------: | ---------------------------------------------- | ------------------------------------------- |
| 92.3% |  318 MiB | 2,410,268 | `checkCallExpression`                          | `node_modules/typescript/lib/typescript.js` |
| 21.7% | 74.7 MiB |   443,926 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 15.9% | 54.7 MiB |   352,785 | `checkObjectLiteral`                           | `node_modules/typescript/lib/typescript.js` |
| 15.4% | 53.1 MiB |   473,284 | `checkExpressionWorker`                        | `node_modules/typescript/lib/typescript.js` |
| 11.5% | 39.5 MiB |   313,607 | `checkArrayLiteral`                            | `node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`node_modules/typescript/lib/typescript.js`)

|     % |     Size |   Objects | Callee               | Location                                    |
| ----: | -------: | --------: | -------------------- | ------------------------------------------- |
| 97.3% |  310 MiB | 2,586,724 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js` |
|  2.7% | 8.52 MiB |    34,356 | `forEach`            | `node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size |   Objects | Callee              | Location                                             |
| ----: | -------: | --------: | ------------------- | ---------------------------------------------------- |
| 97.5% |  278 MiB | 2,239,791 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js`          |
|  7.4% |   21 MiB |   146,423 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:52487:21` |
|  0.7% | 2.05 MiB |     6,397 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50184:20` |
|  0.2% |  514 KiB |        73 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:52182:20` |
|  0.2% |  512 KiB |     1,457 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:38591:27` |

##### `toString` (`node:buffer`)

|     % |     Size | Objects | Callee  | Location      |
| ----: | -------: | ------: | ------- | ------------- |
| 55.7% | 12.5 MiB |     326 | `slice` | `node:buffer` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Objects | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 64.7% | 8.27 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 35.3% |  4.5 MiB | 125,617 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.8 MiB | 125,618 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.8 MiB | 125,618 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.8 MiB | 125,618 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 12.8 MiB | 125,618 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 12.8 MiB | 125,618 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee         | Location  |
| -----: | -------: | ------: | -------------- | --------- |
| 100.0% | 8.27 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee            | Location                           |
| -----: | -------: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 8.27 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |    Size | Objects | Callee        | Location                                        |
| ----: | ------: | ------: | ------------- | ----------------------------------------------- |
| 66.7% |   3 MiB |  84,655 | `wrapSafe`    | `node:internal/modules/cjs/loader`              |
| 33.3% | 1.5 MiB |  40,962 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |   15 MiB |  75,633 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.5% | 14.2 MiB |       4 | `getResolvedSymbol` (`node_modules/typescript/lib/typescript.js`) ← `checkIdentifier` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.3% | 12.5 MiB |  78,032 | `parseNonArrayType` (`node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.9% | 8.27 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% |  7.5 MiB |  37,817 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `isWeakType` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeAssignableTo` ← `getVariancesWorker` ← `getVariances` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` |
| 0.8% |  7.5 MiB |  46,819 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (36056:56) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.6% |    6 MiB |  37,455 | `createBaseNode` (`node_modules/typescript/lib/typescript.js`) ← `createBaseDeclaration` ← `parseParameterWorker` ← `(anonymous)` (33416:157) ← `parseDelimitedList` ← `parseParameters` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% |    6 MiB |  62,788 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% |  5.5 MiB |  34,334 | `parseTypeReference` (`node_modules/typescript/lib/typescript.js`) ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseTypeAnnotation` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |  5.5 MiB |  53,426 | `declareSymbol` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.5% | 5.03 MiB |       2 | `slice` (`node:buffer`) ← `toString` ← `readFileWorker` (`node_modules/typescript/lib/typescript.js`) ← `readFile` ← `readFile` ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 5.03 MiB |       2 | `toString` (`node:buffer`) ← `readFile` (`node_modules/typescript/lib/typescript.js`) ← `readFile` ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 5.01 MiB |   2,867 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |    4 MiB |  20,169 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfType` ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                         |
| 0.4% |    4 MiB |  24,970 | `createCallExpression` (`node_modules/typescript/lib/typescript.js`) ← `parseLeftHandSideExpressionOrHigher` ← `parseUpdateExpression` ← `parseUnaryExpressionOrHigher` ← `parseBinaryExpressionOrHigher` ← `parseAssignmentExpressionOrHigher` ← `parseExpression` ← `allowInAnd` ← `parseStatement` ← `parseList` ← `parseBlock` ← `parseArrowFunctionExpressionBody` ← `parseParenthesizedArrowFunctionExpression` ← `parseAssignmentExpressionOrHigher` ← `parseArgumentExpression` ← `parseDelimitedList` ← `parseArgumentList` ← `parseLeftHandSideExpressionOrHigher` ← `parseUpdateExpression` ← `parseUnaryExpressionOrHigher` ← `parseBinaryExpressionOrHigher` ← `parseAssignmentExpressionOrHigher` ← `parseExpression` ← `allowInAnd` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122449:24) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% |  3.5 MiB |  37,084 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |  3.5 MiB |  50,018 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInMethodDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChildInClassDeclarationOrExpression` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode2` ← `forEachChildInModuleDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.4% |  3.5 MiB |  30,587 | `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js`) ← `createIdentifier` ← `parseTypeReference` ← `parseNonArrayType` ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseTypeAnnotation` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.4% |  3.5 MiB |       2 | `set` ← `resetMaybeStack` (`node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `(anonymous)` (82238:27) ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `resolveCall` ← `resolveCallExpression` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.3% |    3 MiB |  20,699 | `Map` ← `createSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `declareSymbol` ← `declareSymbolAndAddToSymbolTable` ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `forEachChildInFunctionType` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindParameterFlow` ← `bindChildren` ← `bind` ← `bindEach` ← `forEachChildInMethodSignature` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `forEachChildInInterfaceDeclaration` ← `bindChildren` ← `bindContainer` ← `bind` ← `(anonymous)` (45224:21) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile2` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getTypeChecker` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
