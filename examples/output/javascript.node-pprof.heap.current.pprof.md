# Heap profile

Allocated 272 MiB over 2,718,381 objects (105 B per object).

| Category         |     % |     Size |   Objects |
| ---------------- | ----: | -------: | --------: |
| Third-party      | 71.5% |  195 MiB | 2,385,221 |
| Standard library | 27.7% | 75.5 MiB |   333,159 |
| Native           |  0.7% | 1.93 MiB |         1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |     Size | Objects | Function                           | Location                                                                                 |
| ---: | -------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| 9.2% |   25 MiB |   9,311 | `set`                              | `<unknown>`                                                                              |
| 7.0% |   19 MiB |       1 | `readFileSync`                     | `node:fs`                                                                                |
| 4.6% | 12.5 MiB | 125,055 | `Map`                              | `<unknown>`                                                                              |
| 4.2% | 11.5 MiB | 125,626 | `createIdentifier`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.5% |  9.5 MiB |  53,473 | `instantiateSignature`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.3% |    9 MiB | 147,471 | `createSymbol`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.3% |    9 MiB | 166,662 | `declareSymbol`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.1% |  8.5 MiB |  61,898 | `createBaseNode`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.9% |    8 MiB | 209,726 | `resolveObjectTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.8% | 7.52 MiB |   4,969 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.8% |  7.5 MiB | 147,470 | `createNodeArray`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.0% | 5.39 MiB |     133 | `slice`                            | `node:buffer`                                                                            |
| 1.8% |    5 MiB |  36,410 | `parseTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.7% |  4.5 MiB |  42,934 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
| 1.7% |  4.5 MiB |  56,920 | `instantiateTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.7% |  4.5 MiB | 117,972 | `bindWorker`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.5% |    4 MiB |  68,416 | `getObjectTypeInstantiation`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.5% |    4 MiB |  29,128 | `createBaseBindingLikeDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.4% | 3.82 MiB |       1 | `getEffectsSignature`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.3% |  3.5 MiB |  93,749 | `concat`                           | `<unknown>`                                                                              |

#### Categories

##### Third-party

|    % |     Size | Objects | Function                           | Location                                                                                 |
| ---: | -------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.2% | 11.5 MiB | 125,626 | `createIdentifier`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.5% |  9.5 MiB |  53,473 | `instantiateSignature`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.3% |    9 MiB | 147,471 | `createSymbol`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.3% |    9 MiB | 166,662 | `declareSymbol`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 3.1% |  8.5 MiB |  61,898 | `createBaseNode`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.9% |    8 MiB | 209,726 | `resolveObjectTypeMembers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.8% | 7.52 MiB |   4,969 | `checkTypeRelatedTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 2.8% |  7.5 MiB | 147,470 | `createNodeArray`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.8% |    5 MiB |  36,410 | `parseTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.7% |  4.5 MiB |  42,934 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
| 1.7% |  4.5 MiB |  56,920 | `instantiateTypes`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.7% |  4.5 MiB | 117,972 | `bindWorker`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.5% |    4 MiB |  68,416 | `getObjectTypeInstantiation`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.5% |    4 MiB |  29,128 | `createBaseBindingLikeDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.4% | 3.82 MiB |       1 | `getEffectsSignature`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.3% |  3.5 MiB |  25,423 | `isRelatedTo`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.3% |  3.5 MiB |  35,294 | `createBaseTokenNode`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.3% |  3.5 MiB |  25,489 | `parseNonArrayType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.1% |    3 MiB |  42,453 | `instantiateAnonymousType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 1.0% | 2.75 MiB |  10,926 | `checkIdentifier`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### Standard library

|    % |     Size | Objects | Function         | Location                           |
| ---: | -------: | ------: | ---------------- | ---------------------------------- |
| 9.2% |   25 MiB |   9,311 | `set`            | `<unknown>`                        |
| 7.0% |   19 MiB |       1 | `readFileSync`   | `node:fs`                          |
| 4.6% | 12.5 MiB | 125,055 | `Map`            | `<unknown>`                        |
| 2.0% | 5.39 MiB |     133 | `slice`          | `node:buffer`                      |
| 1.3% |  3.5 MiB |  93,749 | `concat`         | `<unknown>`                        |
| 0.9% | 2.52 MiB |  32,807 | `wrapSafe`       | `node:internal/modules/cjs/loader` |
| 0.6% |  1.5 MiB |   8,357 | `splice`         | `<unknown>`                        |
| 0.4% |    1 MiB |   6,212 | `join`           | `<unknown>`                        |
| 0.4% |    1 MiB |   6,571 | `push`           | `<unknown>`                        |
| 0.4% |    1 MiB |  32,770 | `slice`          | `<unknown>`                        |
| 0.2% |  520 KiB |      59 | `next`           | `<unknown>`                        |
| 0.2% |  515 KiB |     172 | `replace`        | `<unknown>`                        |
| 0.2% |  513 KiB |     119 | `getEncodingOps` | `node:buffer`                      |
| 0.2% |  512 KiB |   1,457 | `add`            | `<unknown>`                        |
| 0.2% |  512 KiB |   8,193 | `(anonymous)`    | `node:internal/crypto/keys:1:1`    |
| 0.2% |  512 KiB |   8,193 | `(anonymous)`    | `node:internal/perf/observe:1:1`   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `readFileSync` (`node:fs`)

|      % |   Size | Objects | Location      |
| -----: | -----: | ------: | ------------- |
| 100.0% | 19 MiB |       1 | `node:fs:433` |

##### `createIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                                                              |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 11.5 MiB | 125,626 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31520` |

##### `instantiateSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 9.5 MiB |  53,473 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688` |

##### `createSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 9 MiB | 147,471 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47752` |

##### `declareSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 9 MiB | 166,662 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626` |

##### `createBaseNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 8.5 MiB |  61,898 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583` |

##### `resolveObjectTypeMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 8 MiB | 209,726 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                                                              |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 7.52 MiB |   4,969 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |

##### `createNodeArray` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 7.5 MiB | 147,470 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Location          |
| -----: | -------: | ------: | ----------------- |
| 100.0% | 5.39 MiB |     133 | `node:buffer:640` |

##### `parseTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 5 MiB |  36,410 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32433` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 4.5 MiB |  42,934 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413` |

##### `instantiateTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 4.5 MiB |  56,920 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 4.5 MiB | 117,972 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |  68,416 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |

##### `createBaseBindingLikeDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |  29,128 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22186` |

##### `getEffectsSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                                                              |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 3.82 MiB |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68321` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |  25,423 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |

##### `createBaseTokenNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |  35,294 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30582` |

##### `parseNonArrayType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |  25,489 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33066` |

##### `instantiateAnonymousType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Location                                                                              |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 3 MiB |  42,453 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919` |

##### `checkIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Location                                                                              |
| -----: | -------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 2.75 MiB |  10,926 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Location                                |
| -----: | -------: | ------: | --------------------------------------- |
| 100.0% | 2.52 MiB |  32,807 | `node:internal/modules/cjs/loader:1671` |

##### `getEncodingOps` (`node:buffer`)

|      % |    Size | Objects | Location          |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 513 KiB |     119 | `node:buffer:725` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |    Size | Objects | Location                      |
| -----: | ------: | ------: | ----------------------------- |
| 100.0% | 512 KiB |   8,193 | `node:internal/crypto/keys:1` |

##### `(anonymous)` (`node:internal/perf/observe:1:1`)

|      % |    Size | Objects | Location                       |
| -----: | ------: | ------: | ------------------------------ |
| 100.0% | 512 KiB |   8,193 | `node:internal/perf/observe:1` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `set` (`<unknown>`)

|     % |     Size | Objects | Caller                                   | Location                                                                        |
| ----: | -------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| 26.0% | 6.52 MiB |   4,279 | `addInheritedMembers`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.0% | 5.01 MiB |   2,870 | `resolveObjectTypeMembers`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.3% | 4.07 MiB |     332 | `getObjectTypeInstantiation`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 14.0% |  3.5 MiB |       4 | `recursiveTypeRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.0% |  1.5 MiB |     860 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `readFileSync` (`node:fs`)

|      % |   Size | Objects | Caller            | Location                           |
| -----: | -----: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `Map` (`<unknown>`)

|     % |    Size | Objects | Caller                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 52.0% | 6.5 MiB |  70,720 | `createSymbolTable`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 24.0% |   3 MiB |  33,635 | `declareSymbol`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.0% |   2 MiB |  13,800 | `bindContainer`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.0% | 512 KiB |   3,450 | `bindFunctionOrConstructorType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.0% | 512 KiB |   3,450 | `getIntersectionType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                           | Location                                                                        |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 47.8% | 5.5 MiB |  60,082 | `parseTypeReference`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 26.1% |   3 MiB |  32,772 | `parseParameterWorker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.0% | 1.5 MiB |  16,386 | `parsePropertyOrMethodSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   5,462 | `parseInterfaceDeclaration`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.3% | 512 KiB |   5,462 | `parseObjectLiteralElement`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                      | Location                                                                        |
| ----: | ------: | ------: | --------------------------- | ------------------------------------------------------------------------------- |
| 94.7% |   9 MiB |  50,952 | `instantiateList`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.3% | 512 KiB |   2,521 | `getSignatureInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                              | Location                                                                        |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 94.4% | 8.5 MiB | 139,278 | `resolveObjectTypeMembers`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.6% | 512 KiB |   8,193 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `declareSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                             | Location                                                                        |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 55.6% |   5 MiB |  95,269 | `bindParameter`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 27.8% | 2.5 MiB |  44,474 | `declareSymbolAndAddToSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.1% |   1 MiB |  17,556 | `declareSourceFileMember`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.6% | 512 KiB |   9,363 | `bindTypeParameter`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createBaseNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                           | Location                                                                        |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 29.4% | 2.5 MiB |  18,205 | `createBaseNamedDeclaration`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.5% |   2 MiB |  14,565 | `createUnionTypeNode`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.5% |   2 MiB |  14,564 | `parseMemberExpressionRest`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.8% |   1 MiB |   7,282 | `createBaseSignatureDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.9% | 512 KiB |   3,641 | `createArrayTypeNode`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `resolveObjectTypeMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                        | Location                                                                        |
| -----: | ----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 8 MiB | 209,726 | `resolveTypeReferenceMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Caller                    | Location                                                                        |
| ----: | -------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 86.7% | 6.52 MiB |   4,623 | `isTypeOrBaseIdenticalTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.7% |  514 KiB |     173 | `isTypeAssignableTo`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.7% |  514 KiB |     173 | `isTypeRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createNodeArray` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 73.3% | 5.5 MiB | 114,698 | `parseDelimitedList`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.3% |   1 MiB |  16,386 | `parseModifiers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.7% | 512 KiB |   8,193 | `parseUnionTypeOrHigher` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.7% | 512 KiB |   8,193 | `parseList`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `slice` (`node:buffer`)

|      % |     Size | Objects | Caller     | Location      |
| -----: | -------: | ------: | ---------- | ------------- |
| 100.0% | 5.39 MiB |     133 | `toString` | `node:buffer` |

##### `parseTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller              | Location                                                                        |
| -----: | ----: | ------: | ------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 5 MiB |  36,410 | `parseNonArrayType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38`)

|      % |    Size | Objects | Caller    | Location    |
| -----: | ------: | ------: | --------- | ----------- |
| 100.0% | 4.5 MiB |  42,934 | `forEach` | `<unknown>` |

##### `instantiateTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 88.9% |   4 MiB |  40,535 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.1% | 512 KiB |  16,385 | `getTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller | Location                                                                        |
| -----: | ------: | ------: | ------ | ------------------------------------------------------------------------------- |
| 100.0% | 4.5 MiB | 117,972 | `bind` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                  | Location                                                                        |
| -----: | ----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |  68,416 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createBaseBindingLikeDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                       | Location                                                                        |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 4 MiB |  29,128 | `createParameterDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getEffectsSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                      | Location                                                                        |
| -----: | -------: | ------: | --------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 3.82 MiB |       1 | `isReachableFlowNodeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `concat` (`<unknown>`)

|      % |    Size | Objects | Caller                   | Location                                                                        |
| -----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |  93,749 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller               | Location                                                                        |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
| 57.2% |   2 MiB |  13,856 | `checkTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 42.8% | 1.5 MiB |  11,567 | `isIdenticalTo`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createBaseTokenNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size | Objects | Caller        | Location                                                                        |
| -----: | ------: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 100.0% | 3.5 MiB |  35,294 | `createToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `parseNonArrayType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size | Objects | Caller                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 85.7% |   3 MiB |  21,848 | `parseIntersectionTypeOrHigher` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 14.3% | 512 KiB |   3,641 | `parseUnionTypeOrHigher`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateAnonymousType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Size | Objects | Caller                       | Location                                                                        |
| -----: | ----: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 3 MiB |  42,453 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |     Size | Objects | Caller                  | Location                                                                        |
| -----: | -------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 2.75 MiB |  10,926 | `checkExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `wrapSafe` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.52 MiB |  32,807 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `splice` (`<unknown>`)

|      % |    Size | Objects | Caller         | Location                                                                        |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |   8,357 | `getUnionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `join` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                                                                 |
| ----: | ------: | ------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 50.0% | 512 KiB |   2,115 | `(anonymous)`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |
| 50.0% | 512 KiB |   4,097 | `parseTagComments` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `push` (`<unknown>`)

|     % |    Size | Objects | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 50.0% | 512 KiB |   3,450 | `getIntersectionType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 50.0% | 512 KiB |   3,121 | `parseUnionTypeOrHigher` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `slice` (`<unknown>`)

|     % |    Size | Objects | Caller             | Location                                                                        |
| ----: | ------: | ------: | ------------------ | ------------------------------------------------------------------------------- |
| 50.0% | 512 KiB |  16,385 | `instantiateTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 50.0% | 512 KiB |  16,385 | `filterType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|      % |    Size | Objects | Caller | Location    |
| -----: | ------: | ------: | ------ | ----------- |
| 100.0% | 520 KiB |      59 | `Map`  | `<unknown>` |

##### `replace` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location                                                                        |
| -----: | ------: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 515 KiB |     172 | `getCanonicalFileName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getEncodingOps` (`node:buffer`)

|      % |    Size | Objects | Caller     | Location      |
| -----: | ------: | ------: | ---------- | ------------- |
| 100.0% | 513 KiB |     119 | `toString` | `node:buffer` |

##### `add` (`<unknown>`)

|      % |    Size | Objects | Caller          | Location                                                                        |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |   1,457 | `declareSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node:internal/crypto/keys:1:1`)

|      % |    Size | Objects | Caller                     | Location                        |
| -----: | ------: | ------: | -------------------------- | ------------------------------- |
| 100.0% | 512 KiB |   8,193 | `compileForInternalLoader` | `node:internal/bootstrap/realm` |

##### `(anonymous)` (`node:internal/perf/observe:1:1`)

|      % |    Size | Objects | Caller                     | Location                        |
| -----: | ------: | ------: | -------------------------- | ------------------------------- |
| 100.0% | 512 KiB |   8,193 | `compileForInternalLoader` | `node:internal/bootstrap/realm` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size |   Objects | Function                                   | Location                                                                                  |
| ----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 80.3% | 219 MiB | 2,256,327 | `(anonymous)`                              | `datadog-pprof-heap.mjs:1:1`                                                              |
| 80.1% | 218 MiB | 2,261,368 | `typeCheckProject`                         | `tsc-workload.mjs`                                                                        |
| 78.7% | 214 MiB | 2,191,159 | `next`                                     | `<unknown>`                                                                               |
| 76.5% | 208 MiB | 2,103,292 | `run`                                      | `node:internal/modules/esm/module_job`                                                    |
| 75.4% | 205 MiB | 2,080,630 | `(anonymous)`                              | `<unknown>`                                                                               |
| 54.0% | 147 MiB | 1,692,076 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 53.6% | 146 MiB | 1,688,445 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 53.0% | 144 MiB | 1,671,575 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.4% | 143 MiB | 1,656,482 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.1% | 142 MiB | 1,650,511 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 51.0% | 139 MiB | 1,615,402 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 50.0% | 136 MiB | 1,593,656 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 49.3% | 134 MiB | 1,580,785 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 49.3% | 134 MiB | 1,358,017 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 49.3% | 134 MiB | 1,358,017 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 48.7% | 133 MiB | 1,566,669 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 47.9% | 130 MiB | 1,548,470 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.8% | 127 MiB | 1,324,385 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.6% | 127 MiB | 1,324,163 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.6% | 127 MiB | 1,324,163 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |     Size |   Objects | Function                                   | Location                                                                                  |
| ----: | -------: | --------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 54.0% |  147 MiB | 1,692,076 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 53.6% |  146 MiB | 1,688,445 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 53.0% |  144 MiB | 1,671,575 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.4% |  143 MiB | 1,656,482 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.1% |  142 MiB | 1,650,511 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 51.0% |  139 MiB | 1,615,402 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 50.0% |  136 MiB | 1,593,656 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 49.3% |  134 MiB | 1,580,785 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 49.3% |  134 MiB | 1,358,017 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 49.3% |  134 MiB | 1,358,017 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 48.7% |  133 MiB | 1,566,669 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 47.9% |  130 MiB | 1,548,470 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.8% |  127 MiB | 1,324,385 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.6% |  127 MiB | 1,324,163 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.6% |  127 MiB | 1,324,163 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 46.6% |  127 MiB | 1,324,163 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 45.6% |  124 MiB | 1,139,034 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 37.9% |  103 MiB |   988,728 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 35.9% | 97.7 MiB |   979,552 | `checkTypeRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 35.6% |   97 MiB |   933,939 | `checkCallExpression`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Standard library

|     % |     Size |   Objects | Function          | Location                                   |
| ----: | -------: | --------: | ----------------- | ------------------------------------------ |
| 78.7% |  214 MiB | 2,191,159 | `next`            | `<unknown>`                                |
| 76.5% |  208 MiB | 2,103,292 | `run`             | `node:internal/modules/esm/module_job`     |
| 23.3% | 63.3 MiB |   819,507 | `forEach`         | `<unknown>`                                |
|  9.4% | 25.6 MiB |    81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  9.4% | 25.6 MiB |    81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  9.4% | 25.6 MiB |    81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  9.4% | 25.6 MiB |    81,083 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader`         |
|  9.4% | 25.6 MiB |    81,083 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  9.4% | 25.6 MiB |    81,083 | `require`         | `node:internal/modules/helpers`            |
|  9.2% |   25 MiB |     9,311 | `set`             | `<unknown>`                                |
|  7.0% |   19 MiB |         1 | `readFileSync`    | `node:fs`                                  |
|  7.0% |   19 MiB |         1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader`         |
|  7.0% |   19 MiB |         1 | `loadSource`      | `node:internal/modules/cjs/loader`         |
|  4.8% |   13 MiB |   125,114 | `Map`             | `<unknown>`                                |
|  2.4% |  6.6 MiB |    81,082 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  2.2% |  5.9 MiB |       252 | `toString`        | `node:buffer`                              |
|  2.0% | 5.39 MiB |       133 | `slice`           | `node:buffer`                              |
|  1.3% |  3.5 MiB |    93,749 | `concat`          | `<unknown>`                                |
|  0.9% | 2.52 MiB |    32,807 | `wrapSafe`        | `node:internal/modules/cjs/loader`         |
|  0.6% |  1.5 MiB |     8,357 | `splice`          | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Objects | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.4% |  217 MiB | 2,256,326 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.6% | 1.25 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Objects | Callee                             | Location                                                                        |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 58.4% |  127 MiB | 1,501,900 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.6% | 64.5 MiB |   656,539 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.8% | 25.6 MiB |    81,083 | `require`                          | `node:internal/modules/helpers`                                                 |
|  0.2% |  512 KiB |    21,846 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `next` (`<unknown>`)

|      % |    Size |   Objects | Callee        | Location                     |
| -----: | ------: | --------: | ------------- | ---------------------------- |
| 100.0% | 214 MiB | 2,191,159 | `(anonymous)` | `datadog-pprof-heap.mjs:1:1` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |    Size |   Objects | Callee | Location    |
| -----: | ------: | --------: | ------ | ----------- |
| 100.0% | 208 MiB | 2,103,292 | `next` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location                               |
| -----: | ------: | --------: | ------ | -------------------------------------- |
| 100.0% | 205 MiB | 2,080,630 | `run`  | `node:internal/modules/esm/module_job` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Size |   Objects | Callee                               | Location                                                                        |
| ----: | ------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------- |
| 85.0% | 125 MiB | 1,304,773 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 15.0% |  22 MiB |   387,303 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                                                  |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 146 MiB | 1,688,445 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Size |   Objects | Callee                     | Location                                                                        |
| ----: | ------: | --------: | -------------------------- | ------------------------------------------------------------------------------- |
| 99.7% | 144 MiB | 1,663,382 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                                     | Location                                                                        |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 143 MiB | 1,656,482 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                   | Location                                                                        |
| -----: | ------: | --------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 142 MiB | 1,650,511 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                              | Location                                                                        |
| -----: | ------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 139 MiB | 1,615,402 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |    Size |   Objects | Callee                          | Location                                                                        |
| -----: | ------: | --------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 136 MiB | 1,593,656 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee        | Location                                                                                  |
| -----: | ------: | --------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 134 MiB | 1,580,785 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                     | Location                                                                        |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 60.2% | 80.7 MiB | 928,770 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.8% | 58.7 MiB | 498,882 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.8% | 58.7 MiB | 498,882 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.6% | 31.6 MiB | 381,220 | `checkExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 18.4% | 24.7 MiB | 218,481 | `checkClassDeclaration`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                     | Location                                                                        |
| -----: | ------: | --------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 134 MiB | 1,358,017 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee    | Location                                                                        |
| -----: | ------: | --------: | --------- | ------------------------------------------------------------------------------- |
| 100.0% | 133 MiB | 1,566,669 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                                                        |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 130 MiB | 1,548,470 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                                                        |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
| 52.6% |   67 MiB | 541,630 | `forEach`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 47.4% | 60.3 MiB | 782,755 | `checkDeferredNodes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                  | Location                                                                        |
| -----: | ------: | --------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 127 MiB | 1,324,163 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee            | Location                                                                        |
| -----: | ------: | --------: | ----------------- | ------------------------------------------------------------------------------- |
| 100.0% | 127 MiB | 1,324,163 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Size |   Objects | Callee                 | Location                                                                        |
| -----: | ------: | --------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 127 MiB | 1,324,163 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee               | Location                                                                                  |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 57.7% | 71.5 MiB | 568,950 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 25.5% | 31.6 MiB | 350,030 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
| 12.2% | 15.2 MiB | 156,295 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113932:54` |
| 11.8% | 14.6 MiB | 139,699 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  4.5% | 5.62 MiB |  55,957 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115622:62` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                                         | Location                                                                        |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| 94.2% |   97 MiB | 933,939 | `checkCallExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 30.4% | 31.3 MiB | 155,082 | `checkObjectLiteral`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.8% | 20.4 MiB | 200,895 | `checkExpressionWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.0% | 10.3 MiB | 117,334 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  8.3% | 8.52 MiB |  54,741 | `checkArrayLiteral`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee        | Location                                                                        |
| ----: | -------: | ------: | ------------- | ------------------------------------------------------------------------------- |
| 92.8% | 90.7 MiB | 974,756 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkCallExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |     Size | Objects | Callee                 | Location                                                                        |
| ----: | -------: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 93.8% | 90.9 MiB | 894,439 | `resolveSignature`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.2% | 6.01 MiB |  74,136 | `instantiateType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.1% |    3 MiB |  11,147 | `getResolvedSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `forEach` (`<unknown>`)

|     % |     Size | Objects | Callee              | Location                                                                                 |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 96.0% | 60.8 MiB | 783,042 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  7.1% |  4.5 MiB |  42,934 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|  0.8% |  514 KiB |      73 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |    Size | Objects | Callee        | Location                                   |
| ----: | ------: | ------: | ------------- | ------------------------------------------ |
| 74.2% |  19 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader`         |
| 25.8% | 6.6 MiB |  81,082 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 25.6 MiB |  81,083 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Objects | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 25.6 MiB |  81,083 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   2.0% |  512 KiB |   8,193 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader`         |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 25.6 MiB |  81,083 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Objects | Callee           | Location                           |
| -----: | -------: | ------: | ---------------- | ---------------------------------- |
| 100.0% | 25.6 MiB |  81,083 | `wrapModuleLoad` | `node:internal/modules/cjs/loader` |

##### `require` (`node:internal/modules/helpers`)

|      % |     Size | Objects | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 25.6 MiB |  81,083 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader`)

|      % |   Size | Objects | Callee         | Location  |
| -----: | -----: | ------: | -------------- | --------- |
| 100.0% | 19 MiB |       1 | `readFileSync` | `node:fs` |

##### `loadSource` (`node:internal/modules/cjs/loader`)

|      % |   Size | Objects | Callee            | Location                           |
| -----: | -----: | ------: | ----------------- | ---------------------------------- |
| 100.0% | 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader` |

##### `Map` (`<unknown>`)

|    % |    Size | Objects | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 3.9% | 520 KiB |      59 | `next` | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Objects | Callee        | Location                                                                            |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 61.8% | 4.08 MiB |  48,275 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |
| 38.2% | 2.52 MiB |  32,807 | `wrapSafe`    | `node:internal/modules/cjs/loader`                                                  |

##### `toString` (`node:buffer`)

|     % |     Size | Objects | Callee           | Location      |
| ----: | -------: | ------: | ---------------- | ------------- |
| 91.5% | 5.39 MiB |     133 | `slice`          | `node:buffer` |
|  8.5% |  513 KiB |     119 | `getEncodingOps` | `node:buffer` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|    % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.0% |   19 MiB |       1 | `readFileSync` (`node:fs`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader`) ← `loadSource` ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.4% | 6.52 MiB |   4,623 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`              |
| 1.4% | 3.82 MiB |       1 | `getEffectsSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isReachableFlowNodeWorker` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |    3 MiB |  21,848 | `parseNonArrayType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `parseIntersectionTypeOrHigher` ← `parseUnionTypeOrHigher` ← `parseTypeWorker` ← `parseParenthesizedType` ← `parseNonArrayType` ← `parseUnionTypeOrHigher` ← `parseType` ← `parseVariableDeclaration` ← `parseVariableDeclarationAllowExclamation` ← `parseDelimitedList` ← `parseDeclarationWorker` ← `(anonymous)` (35496:74) ← `doInsideOfContext` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `getSourceFile` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.9% | 2.52 MiB |  32,807 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |    2 MiB |  43,771 | `declareSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `bindParameter` ← `bindWorker` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChild` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChild` ← `bindChildren` ← `bindContainer` ← `(anonymous)` (43922:38) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `visitNode` ← `forEachChild` ← `bindChildren` ← `bindContainer` ← `(anonymous)` (43922:38) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getDiagnosticsProducingTypeChecker` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.6% | 1.75 MiB |       1 | `set` ← `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `getConditionalType` ← `(anonymous)` (61953:69) ← `mapTypeWithAlias` ← `getConditionalTypeInstantiation` ← `instantiateTypeWorker` ← `instantiateTypeWithAlias` ← `getGlobalNonNullableTypeInstantiation` ← `compareSignaturesRelated` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `compareTypesAssignable` ← `getInferredTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionWorker` ← `checkNonNullExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` |
| 0.6% |  1.5 MiB |       1 | `slice` (`node:buffer`) ← `toString` ← `readFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113932:54) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% |  1.5 MiB |  11,567 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next`                             |
| 0.6% |  1.5 MiB |  21,427 | `getSignatureFromDeclaration` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSignaturesOfSymbol` ← `resolveAnonymousTypeMembers` ← `getSignaturesOfStructuredType` ← `checkFunctionExpressionOrObjectLiteralMethod` ← `checkExpressionWorker` ← `checkExpression` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% |  1.5 MiB |  24,578 | `createSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfUnionOrIntersectionType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |  1.5 MiB |  25,748 | `declareSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `declareSymbolAndAddToSymbolTable` ← `bindPropertyWorker` ← `bindWorker` ← `bind` ← `bindEach` ← `visitNodes` ← `forEachChild` ← `bindChildren` ← `bindContainer` ← `(anonymous)` (43922:38) ← `bindEachFunctionsFirst` ← `bindChildren` ← `bindContainer` ← `bind` ← `bindSourceFile` ← `bindSourceFile` ← `initializeTypeChecker` ← `createTypeChecker` ← `getDiagnosticsProducingTypeChecker` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% |  1.5 MiB |  40,962 | `createNodeArray` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `parseDelimitedList` ← `parseCallExpressionRest` ← `parseUpdateExpression` ← `parseUnaryExpressionOrHigher` ← `parseBinaryExpressionOrHigher` ← `parseExpression` ← `parseExpressionOrLabeledStatement` ← `parseStatement` ← `parseList` ← `parseBlock` ← `parseArrowFunctionExpressionBody` ← `parseParenthesizedArrowFunctionExpression` ← `parseAssignmentExpressionOrHigher` ← `parseArgumentExpression` ← `parseDelimitedList` ← `parseCallExpressionRest` ← `parseUpdateExpression` ← `parseUnaryExpressionOrHigher` ← `parseBinaryExpressionOrHigher` ← `parseExpression` ← `parseExpressionOrLabeledStatement` ← `parseStatement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113905:44) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% |  1.5 MiB |       1 | `checkIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkExpressionWorker` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 1.25 MiB |       1 | `getAllocationProfile` (`node_modules/@datadog/pprof/out/src/heap-profiler-bindings.js`) ← `v8Profile` (`node_modules/@datadog/pprof/out/src/heap-profiler.js`) ← `profile` ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% | 1.13 MiB |       8 | `slice` (`node:buffer`) ← `toString` ← `readFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 1.11 MiB |      14 | `slice` (`node:buffer`) ← `toString` ← `readFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `(anonymous)` (115532:55) ← `forEach` ← `processReferencedFiles` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `processTypeReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113905:44) ← `forEach` ← `createProgram` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% | 1.06 MiB |   8,199 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:27899:11`) ← `(anonymous)` (1:1) ← `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% |    1 MiB |     573 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkExpressionWorker` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) ← `next` ← `run` (`node:internal/modules/esm/module_job`) ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |    1 MiB |   6,900 | `Map` ← `createSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `resolveAnonymousTypeMembers` ← `getPropertiesOfObjectType` ← `(anonymous)` (66494:47) ← `step` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkDeferredNode` ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache`                   |
