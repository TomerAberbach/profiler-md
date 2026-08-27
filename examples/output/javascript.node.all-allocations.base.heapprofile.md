# Heap profile

Allocated 4.82 GiB over 9,794 samples (516 KiB per sample).

| Category         |     % |    Size | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 91.4% | 4.4 GiB |   8,992 |
| Standard library |  8.6% | 423 MiB |     801 |
| Native           | <0.1% | 512 KiB |       1 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 51.2% | 2.47 GiB |   5,033 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.2% |  159 MiB |     318 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  3.0% |  150 MiB |     300 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.8% |  136 MiB |     259 | `set`                           | `<unknown>`                                          |
|  2.6% |  130 MiB |     260 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.0% |   99 MiB |     198 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  1.8% | 90.1 MiB |     180 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.8% |   87 MiB |     174 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  1.5% |   72 MiB |     144 | `Map`                           | `<unknown>`                                          |
|  1.4% |   69 MiB |     138 | `next`                          | `<unknown>`                                          |
|  0.8% | 37.5 MiB |      75 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  0.7% | 35.5 MiB |      71 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.7% |   33 MiB |      66 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js:30064:33` |
|  0.7% | 32.5 MiB |      65 | `push`                          | `<unknown>`                                          |
|  0.6% | 30.5 MiB |      61 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
|  0.6% | 27.5 MiB |      55 | `getUnmatchedProperty`          | `node_modules/typescript/lib/typescript.js:67049:34` |
|  0.5% | 23.5 MiB |      47 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:29227:37` |
|  0.4% |   22 MiB |      44 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
|  0.4% |   21 MiB |      42 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.4% |   21 MiB |      42 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 51.2% | 2.47 GiB |   5,033 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.2% |  159 MiB |     318 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  3.0% |  150 MiB |     300 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.6% |  130 MiB |     260 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.0% |   99 MiB |     198 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  1.8% | 90.1 MiB |     180 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.8% |   87 MiB |     174 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  0.8% | 37.5 MiB |      75 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  0.7% | 35.5 MiB |      71 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.7% |   33 MiB |      66 | `createNodeArray`               | `node_modules/typescript/lib/typescript.js:30064:33` |
|  0.6% | 30.5 MiB |      61 | `setParentRecursive`            | `node_modules/typescript/lib/typescript.js:18640:30` |
|  0.6% | 27.5 MiB |      55 | `getUnmatchedProperty`          | `node_modules/typescript/lib/typescript.js:67049:34` |
|  0.5% | 23.5 MiB |      47 | `createBaseIdentifierNode`      | `node_modules/typescript/lib/typescript.js:29227:37` |
|  0.4% |   22 MiB |      44 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
|  0.4% |   21 MiB |      42 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.4% |   21 MiB |      42 | `instantiateTypes`              | `node_modules/typescript/lib/typescript.js:61974:30` |
|  0.4% | 20.5 MiB |      41 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
|  0.4% | 20.5 MiB |      41 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
|  0.4% |   19 MiB |      38 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
|  0.4% |   19 MiB |      38 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |

##### Standard library

|     % |     Size | Samples | Function       | Location                                   |
| ----: | -------: | ------: | -------------- | ------------------------------------------ |
|  2.8% |  136 MiB |     259 | `set`          | `<unknown>`                                |
|  1.5% |   72 MiB |     144 | `Map`          | `<unknown>`                                |
|  1.4% |   69 MiB |     138 | `next`         | `<unknown>`                                |
|  0.7% | 32.5 MiB |      65 | `push`         | `<unknown>`                                |
|  0.4% | 19.5 MiB |      39 | `splice`       | `<unknown>`                                |
|  0.3% | 16.6 MiB |      20 | `slice`        | `node:buffer:640:12`                       |
|  0.3% |   14 MiB |      28 | `values`       | `<unknown>`                                |
|  0.2% | 8.72 MiB |       1 | `readFileSync` | `node:fs:433:22`                           |
|  0.2% |  8.5 MiB |      17 | `join`         | `<unknown>`                                |
|  0.1% |    7 MiB |      14 | `replace`      | `<unknown>`                                |
|  0.1% | 5.52 MiB |      11 | `add`          | `<unknown>`                                |
|  0.1% |  5.5 MiB |      11 | `Set`          | `<unknown>`                                |
|  0.1% |  5.5 MiB |      11 | `slice`        | `<unknown>`                                |
|  0.1% |    5 MiB |      10 | `delete`       | `<unknown>`                                |
|  0.1% |    3 MiB |       6 | `split`        | `<unknown>`                                |
|  0.1% |  2.5 MiB |       5 | `wrapSafe`     | `node:internal/modules/cjs/loader:1671:18` |
| <0.1% |    2 MiB |       4 | `get`          | `<unknown>`                                |
| <0.1% |    2 MiB |       4 | `trimEnd`      | `<unknown>`                                |
| <0.1% | 1.46 MiB |       1 | `post`         | `node:inspector:118:7`                     |
| <0.1% |    1 MiB |       2 | `exec`         | `<unknown>`                                |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |     Size | Samples | Caller                    | Location                                             |
| ----: | -------: | ------: | ------------------------- | ---------------------------------------------------- |
| 90.5% | 2.23 GiB |   4,553 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js:67803:37` |
|  4.5% |  114 MiB |     227 | `isTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:63432:29` |
|  3.3% | 82.8 MiB |     165 | `isTypeAssignableTo`      | `node_modules/typescript/lib/typescript.js:62552:32` |
|  0.4% | 9.54 MiB |      19 | `checkTypeAssignableTo`   | `node_modules/typescript/lib/typescript.js:62564:35` |
|  0.3% | 8.04 MiB |      16 | `isTypeComparableTo`      | `node_modules/typescript/lib/typescript.js:62558:32` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:68915:36`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 65.1% |  104 MiB |     207 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:70240:29` |
| 27.7% | 44.1 MiB |      88 | `getFlowTypeOfAccessExpression` | `node_modules/typescript/lib/typescript.js:73337:43` |
|  4.4% | 7.01 MiB |      14 | `tryGetThisTypeAt`              | `node_modules/typescript/lib/typescript.js:70579:30` |
|  2.5% | 4.01 MiB |       8 | `checkThisExpression`           | `node_modules/typescript/lib/typescript.js:70500:33` |
|  0.3% |  512 KiB |       1 | `getPropertyTypeForIndexType`   | `node_modules/typescript/lib/typescript.js:60893:41` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 150 MiB |     300 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                                   | Location                                             |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| 22.4% | 30.6 MiB |      61 | `resolveObjectTypeMembers`               | `node_modules/typescript/lib/typescript.js:56592:38` |
| 16.2% | 22.1 MiB |      44 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js:56409:33` |
| 15.8% | 21.5 MiB |      43 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:57502:52` |
|  6.4% | 8.69 MiB |      17 | `getObjectTypeInstantiation`             | `node_modules/typescript/lib/typescript.js:62119:40` |
|  6.2% | 8.51 MiB |      17 | `createInstantiatedSymbolTable`          | `node_modules/typescript/lib/typescript.js:56402:43` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 130 MiB |     260 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js:68231:32`)

|     % |     Size | Samples | Caller                  | Location                                             |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 43.9% | 43.5 MiB |      87 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:68310:31` |
| 24.2% |   24 MiB |      48 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:68322:37` |
| 16.2% |   16 MiB |      32 | `getTypeFactsWorker`    | `node_modules/typescript/lib/typescript.js:68231:32` |
|  4.5% |  4.5 MiB |       9 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:68289:39` |
|  3.5% |  3.5 MiB |       7 | `checkExpressionWorker` | `node_modules/typescript/lib/typescript.js:78748:35` |

##### `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:35053:43`)

|     % |     Size | Samples | Caller              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 81.7% | 73.6 MiB |     147 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:29528:77` |
| 12.8% | 11.5 MiB |      23 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:35026:69` |
|  5.6% |    5 MiB |      10 | `parseJSDocComment` | `node_modules/typescript/lib/typescript.js:35022:37` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:62092:31`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 71.8% | 62.5 MiB |     125 | `resolveObjectTypeMembers`      | `node_modules/typescript/lib/typescript.js:56592:38` |
| 10.9% | 9.51 MiB |      19 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  9.2% |    8 MiB |      16 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |
|  3.4% |    3 MiB |       6 | `resolveAnonymousTypeMembers`   | `node_modules/typescript/lib/typescript.js:57105:41` |
|  2.9% |  2.5 MiB |       5 | `instantiateSignatures`         | `node_modules/typescript/lib/typescript.js:61977:35` |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 47.9% | 34.5 MiB |      69 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js:13004:29` |
| 14.6% | 10.5 MiB |      21 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js:42630:27` |
| 13.2% |  9.5 MiB |      19 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js:60458:33` |
|  6.2% |  4.5 MiB |       9 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  4.2% |    3 MiB |       6 | `addDeclarationToSymbol`        | `node_modules/typescript/lib/typescript.js:42406:36` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 22.5% | 15.5 MiB |      31 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:67027:37` |
| 13.8% |  9.5 MiB |      19 | `getIntersectionType`    | `node_modules/typescript/lib/typescript.js:60458:33` |
|  8.0% |  5.5 MiB |      11 | `Map`                    | `<unknown>`                                          |
|  6.5% |  4.5 MiB |       9 | `getUnmatchedProperty`   | `node_modules/typescript/lib/typescript.js:67049:34` |
|  2.9% |    2 MiB |       4 | `inferFromObjectTypes`   | `node_modules/typescript/lib/typescript.js:67642:36` |

##### `isDeeplyNestedType` (`node_modules/typescript/lib/typescript.js:66088:32`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 66.7% |   25 MiB |      50 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| 28.0% | 10.5 MiB |      21 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26` |
|  4.0% |  1.5 MiB |       3 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:66094:35` |
|  1.3% |  512 KiB |       1 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|      % |     Size | Samples | Caller                    | Location                                             |
| -----: | -------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 35.5 MiB |      71 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `createNodeArray` (`node_modules/typescript/lib/typescript.js:30064:33`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 54.5% |  18 MiB |      36 | `parseDelimitedList`     | `node_modules/typescript/lib/typescript.js:30707:36` |
| 13.6% | 4.5 MiB |       9 | `parseModifiers`         | `node_modules/typescript/lib/typescript.js:34330:32` |
| 12.1% |   4 MiB |       8 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js:31849:40` |
|  7.6% | 2.5 MiB |       5 | `parseList`              | `node_modules/typescript/lib/typescript.js:30450:27` |
|  6.1% |   2 MiB |       4 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js:35075:33` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 21.5% |   7 MiB |      14 | `parseUnionTypeOrHigher` | `node_modules/typescript/lib/typescript.js:31849:40` |
| 15.4% |   5 MiB |      10 | `getIntersectionType`    | `node_modules/typescript/lib/typescript.js:60458:33` |
| 15.4% |   5 MiB |      10 | `pushIfUnique`           | `node_modules/typescript/lib/typescript.js:697:24`   |
|  7.7% | 2.5 MiB |       5 | `arrayFrom`              | `node_modules/typescript/lib/typescript.js:868:21`   |
|  4.6% | 1.5 MiB |       3 | `pushTypeResolution`     | `node_modules/typescript/lib/typescript.js:54569:32` |

##### `setParentRecursive` (`node_modules/typescript/lib/typescript.js:18640:30`)

|     % |     Size | Samples | Caller                                 | Location                                              |
| ----: | -------: | ------: | -------------------------------------- | ----------------------------------------------------- |
| 47.5% | 14.5 MiB |      29 | `getModuleInstanceState`               | `node_modules/typescript/lib/typescript.js:42183:34`  |
| 34.4% | 10.5 MiB |      21 | `bindChildren`                         | `node_modules/typescript/lib/typescript.js:42723:26`  |
|  8.2% |  2.5 MiB |       5 | `getModuleInstanceStateForAliasTarget` | `node_modules/typescript/lib/typescript.js:42264:48`  |
|  6.6% |    2 MiB |       4 | `collectModuleReferences`              | `node_modules/typescript/lib/typescript.js:121996:39` |
|  3.3% |    1 MiB |       2 | `bindJSDoc`                            | `node_modules/typescript/lib/typescript.js:44028:23`  |

##### `getUnmatchedProperty` (`node_modules/typescript/lib/typescript.js:67049:34`)

|     % |    Size | Samples | Caller                     | Location                                             |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 65.5% |  18 MiB |      36 | `propertiesRelatedTo`      | `node_modules/typescript/lib/typescript.js:65393:35` |
| 21.8% |   6 MiB |      12 | `inferFromObjectTypes`     | `node_modules/typescript/lib/typescript.js:67642:36` |
| 12.7% | 3.5 MiB |       7 | `typesDefinitelyUnrelated` | `node_modules/typescript/lib/typescript.js:67055:38` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js:29227:37`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 66.0% | 15.5 MiB |      31 | `createIdentifier`       | `node_modules/typescript/lib/typescript.js:21195:30` |
| 29.8% |    7 MiB |      14 | `parseIdentifier`        | `node_modules/typescript/lib/typescript.js:30153:33` |
|  4.3% |    1 MiB |       2 | `parsePrimaryExpression` | `node_modules/typescript/lib/typescript.js:33114:40` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js:62289:38`)

|     % |   Size | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 72.7% | 16 MiB |      32 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40` |
| 18.2% |  4 MiB |       8 | `instantiateConstituent`     | `node_modules/typescript/lib/typescript.js:62234:38` |
|  9.1% |  2 MiB |       4 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js:62225:35` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Samples | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 21 MiB |      42 | `forEach` | `<unknown>` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js:61974:30`)

|     % |     Size | Samples | Caller                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 92.9% | 19.5 MiB |      39 | `instantiateTypeWorker`      | `node_modules/typescript/lib/typescript.js:62354:35` |
|  7.1% |  1.5 MiB |       3 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|      % |     Size | Samples | Caller               | Location                                             |
| -----: | -------: | ------: | -------------------- | ---------------------------------------------------- |
| 100.0% | 20.5 MiB |      41 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:63505:32` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js:42491:27`)

|     % |     Size | Samples | Caller                             | Location                                             |
| ----: | -------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 75.6% | 15.5 MiB |      31 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js:43636:46` |
| 14.6% |    3 MiB |       6 | `declareModuleMember`              | `node_modules/typescript/lib/typescript.js:42565:33` |
|  4.9% |    1 MiB |       2 | `declareClassMember`               | `node_modules/typescript/lib/typescript.js:43683:32` |
|  4.9% |    1 MiB |       2 | `bindBlockScopedDeclaration`       | `node_modules/typescript/lib/typescript.js:43770:40` |

##### `splice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                             |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 56.4% |  11 MiB |      22 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js:60213:32` |
| 25.6% |   5 MiB |      10 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js:60039:29` |
| 10.3% |   2 MiB |       4 | `reorderCandidates`  | `node_modules/typescript/lib/typescript.js:73787:31` |
|  5.1% |   1 MiB |       2 | `addTypeToUnion`     | `node_modules/typescript/lib/typescript.js:60016:28` |
|  2.6% | 512 KiB |       1 | `resolveCall`        | `node_modules/typescript/lib/typescript.js:74597:25` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|      % |   Size | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 19 MiB |      38 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `instantiateSignature` (`node_modules/typescript/lib/typescript.js:62067:34`)

|     % |     Size | Samples | Caller                         | Location                                             |
| ----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 76.3% | 14.5 MiB |      29 | `instantiateList`              | `node_modules/typescript/lib/typescript.js:61957:29` |
|  5.3% |    1 MiB |       2 | `createErasedSignature`        | `node_modules/typescript/lib/typescript.js:58679:35` |
|  5.3% |    1 MiB |       2 | `resolveAnonymousTypeMembers`  | `node_modules/typescript/lib/typescript.js:57105:41` |
|  2.6% |  512 KiB |       1 | `createSignatureInstantiation` | `node_modules/typescript/lib/typescript.js:58665:42` |
|  2.6% |  512 KiB |       1 | `compareSignaturesIdentical`   | `node_modules/typescript/lib/typescript.js:66197:40` |

##### `slice` (`node:buffer:640:12`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 16.6 MiB |      20 | `toString` | `node:buffer:839:46` |

##### `values` (`<unknown>`)

|    % |  Size | Samples | Caller                              | Location                                             |
| ---: | ----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 7.1% | 1 MiB |       2 | `getIntersectionType`               | `node_modules/typescript/lib/typescript.js:60458:33` |
| 7.1% | 1 MiB |       2 | `inferFromIndexTypes`               | `node_modules/typescript/lib/typescript.js:67773:35` |
| 7.1% | 1 MiB |       2 | `addTypesToIntersection`            | `node_modules/typescript/lib/typescript.js:60361:36` |
| 7.1% | 1 MiB |       2 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:57869:47` |
| 7.1% | 1 MiB |       2 | `combinePaths`                      | `node_modules/typescript/lib/typescript.js:6818:24`  |

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `join` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 88.2% | 7.5 MiB |      15 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js:35075:33` |
|  5.9% | 512 KiB |       1 | `getTemplateLiteralType` | `node_modules/typescript/lib/typescript.js:60738:36` |
|  5.9% | 512 KiB |       1 | `parseTagComments`       | `node_modules/typescript/lib/typescript.js:35328:38` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                    | Location                                              |
| ----: | ------: | ------: | ------------------------- | ----------------------------------------------------- |
| 64.3% | 4.5 MiB |       9 | `getCanonicalFileName`    | `node_modules/typescript/lib/typescript.js:122583:34` |
| 21.4% | 1.5 MiB |       3 | `toFileNameLowerCase`     | `node_modules/typescript/lib/typescript.js:1189:31`   |
|  7.1% | 512 KiB |       1 | `normalizePath`           | `node_modules/typescript/lib/typescript.js:6842:25`   |
|  7.1% | 512 KiB |       1 | `mangleScopedPackageName` | `node_modules/typescript/lib/typescript.js:41955:35`  |

##### `add` (`<unknown>`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 63.6% | 3.51 MiB |       7 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
| 18.3% | 1.01 MiB |       2 | `declareSymbol`          | `node_modules/typescript/lib/typescript.js:42491:27` |
| 18.2% |    1 MiB |       2 | `(anonymous)`            | `node_modules/typescript/lib/typescript.js:49840:34` |

##### `Set` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 81.8% | 4.5 MiB |       9 | `recursiveTypeRelatedTo`    | `node_modules/typescript/lib/typescript.js:64383:38` |
| 18.2% |   1 MiB |       2 | `checkUnusedTypeParameters` | `node_modules/typescript/lib/typescript.js:80724:39` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 45.5% | 2.5 MiB |       5 | `filter`                    | `node_modules/typescript/lib/typescript.js:220:18`   |
| 18.2% |   1 MiB |       2 | `filterType`                | `node_modules/typescript/lib/typescript.js:68513:24` |
|  9.1% | 512 KiB |       1 | `getPathWithoutRoot`        | `node_modules/typescript/lib/typescript.js:6857:30`  |
|  9.1% | 512 KiB |       1 | `instantiateTypes`          | `node_modules/typescript/lib/typescript.js:61974:30` |
|  9.1% | 512 KiB |       1 | `getPathFromPathComponents` | `node_modules/typescript/lib/typescript.js:6786:37`  |

##### `delete` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 70.0% | 3.5 MiB |       7 | `resetMaybeStack`        | `node_modules/typescript/lib/typescript.js:64516:33` |
| 30.0% | 1.5 MiB |       3 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |

##### `split` (`<unknown>`)

|     % |  Size | Samples | Caller              | Location                                            |
| ----: | ----: | ------: | ------------------- | --------------------------------------------------- |
| 66.7% | 2 MiB |       4 | `getPathComponents` | `node_modules/typescript/lib/typescript.js:6782:29` |
| 33.3% | 1 MiB |       2 | `pathComponents`    | `node_modules/typescript/lib/typescript.js:6775:26` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |    Size | Samples | Caller        | Location                                   |
| -----: | ------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Caller                            | Location                                             |
| ----: | ------: | ------: | --------------------------------- | ---------------------------------------------------- |
| 25.2% | 517 KiB |       1 | `getExternalModuleMember`         | `node_modules/typescript/lib/typescript.js:48781:37` |
| 24.9% | 512 KiB |       1 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js:61228:45` |
| 24.9% | 512 KiB |       1 | `getObjectTypeInstantiation`      | `node_modules/typescript/lib/typescript.js:62119:40` |
| 24.9% | 512 KiB |       1 | `getIntersectionType`             | `node_modules/typescript/lib/typescript.js:60458:33` |

##### `trimEnd` (`<unknown>`)

|     % |  Size | Samples | Caller             | Location                                             |
| ----: | ----: | ------: | ------------------ | ---------------------------------------------------- |
| 50.0% | 1 MiB |       2 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js:35075:33` |
| 50.0% | 1 MiB |       2 | `parseTagComments` | `node_modules/typescript/lib/typescript.js:35328:38` |

##### `post` (`node:inspector:118:7`)

|      % |     Size | Samples | Caller        | Location                    |
| -----: | -------: | ------: | ------------- | --------------------------- |
| 100.0% | 1.46 MiB |       1 | `(anonymous)` | `node:internal/util:477:24` |

##### `exec` (`<unknown>`)

|     % |    Size | Samples | Caller           | Location                                             |
| ----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 50.0% | 512 KiB |       1 | `extractPragmas` | `node_modules/typescript/lib/typescript.js:28669:26` |
| 50.0% | 512 KiB |       1 | `parseRange`     | `node_modules/typescript/lib/typescript.js:2752:22`  |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 97.7% | 4.71 GiB |   9,572 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 97.7% | 4.71 GiB |   9,566 | `(anonymous)`                              | `heapprofile-run.mjs:1:1`                             |
| 97.6% |  4.7 GiB |   9,554 | `(anonymous)`                              | `<unknown>`                                           |
| 87.4% | 4.21 GiB |   8,588 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 87.4% | 4.21 GiB |   8,586 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 87.4% | 4.21 GiB |   8,584 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 87.4% | 4.21 GiB |   8,580 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.3% | 4.21 GiB |   8,578 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.3% | 4.21 GiB |   8,575 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.3% |  4.2 GiB |   8,572 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 87.3% |  4.2 GiB |   8,570 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 87.3% |  4.2 GiB |   8,570 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 87.2% |  4.2 GiB |   8,564 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 84.9% | 4.09 GiB |   8,337 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 84.9% | 4.09 GiB |   8,334 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 84.9% | 4.09 GiB |   8,334 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 84.8% | 4.09 GiB |   8,332 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 84.8% | 4.09 GiB |   8,331 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 84.7% | 4.08 GiB |   8,322 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 84.7% | 4.08 GiB |   8,320 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.4% | 4.21 GiB |   8,588 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 87.4% | 4.21 GiB |   8,586 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:121587:38` |
| 87.4% | 4.21 GiB |   8,584 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 87.4% | 4.21 GiB |   8,580 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.3% | 4.21 GiB |   8,578 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.3% | 4.21 GiB |   8,575 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.3% |  4.2 GiB |   8,572 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 87.3% |  4.2 GiB |   8,570 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 87.3% |  4.2 GiB |   8,570 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 87.2% |  4.2 GiB |   8,564 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 84.9% | 4.09 GiB |   8,337 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 84.9% | 4.09 GiB |   8,334 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 84.9% | 4.09 GiB |   8,334 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 84.8% | 4.09 GiB |   8,332 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 84.8% | 4.09 GiB |   8,331 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 84.7% | 4.08 GiB |   8,322 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 84.7% | 4.08 GiB |   8,320 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 75.1% | 3.62 GiB |   7,370 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 74.3% | 3.58 GiB |   7,294 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |
| 71.7% | 3.46 GiB |   7,043 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:75579:33`  |

##### Standard library

|     % |     Size | Samples | Function          | Location                                   |
| ----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 55.6% | 2.68 GiB |   5,460 | `forEach`         | `<unknown>`                                |
|  2.8% |  136 MiB |     259 | `set`             | `<unknown>`                                |
|  1.8% | 90.1 MiB |     180 | `next`            | `<unknown>`                                |
|  1.6% | 78.5 MiB |     157 | `Map`             | `<unknown>`                                |
|  0.7% | 32.5 MiB |      65 | `push`            | `<unknown>`                                |
|  0.4% | 19.5 MiB |      39 | `splice`          | `<unknown>`                                |
|  0.4% | 18.8 MiB |      21 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  0.4% | 18.8 MiB |      21 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  0.4% | 18.8 MiB |      21 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  0.4% | 18.8 MiB |      21 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`  |
|  0.4% | 18.8 MiB |      21 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  0.4% | 18.8 MiB |      21 | `require`         | `node:internal/modules/helpers:146:19`     |
|  0.3% | 16.6 MiB |      20 | `slice`           | `node:buffer:640:12`                       |
|  0.3% | 16.6 MiB |      20 | `toString`        | `node:buffer:839:46`                       |
|  0.3% |   14 MiB |      28 | `values`          | `<unknown>`                                |
|  0.2% | 10.1 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.2% | 9.22 MiB |       2 | `readFileSync`    | `node:fs:433:22`                           |
|  0.2% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |
|  0.2% | 8.72 MiB |       1 | `loadSource`      | `node:internal/modules/cjs/loader:1797:20` |
|  0.2% |  8.5 MiB |      17 | `join`            | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 89.1% |  4.2 GiB |   8,553 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 10.4% |  503 MiB |     991 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  0.4% | 18.8 MiB |      21 | `require`                          | `node:internal/modules/helpers:146:19`                |
|  0.1% | 3.51 MiB |       7 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                    |
| -----: | -------: | ------: | ------------------ | --------------------------- |
| 100.0% |  4.7 GiB |   9,565 | `typeCheckProject` | `tsc-workload.mjs:3:33`     |
|  <0.1% | 1.46 MiB |       1 | `fn`               | `node:internal/util:476:14` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Samples | Callee        | Location                  |
| -----: | ------: | ------: | ------------- | ------------------------- |
| 100.0% | 4.7 GiB |   9,554 | `(anonymous)` | `heapprofile-run.mjs:1:1` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size | Samples | Callee            | Location                                              |
| ----: | -------: | ------: | ----------------- | ----------------------------------------------------- |
| 97.0% | 4.09 GiB |   8,330 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js:84575:29`  |
|  3.0% |  129 MiB |     258 | `getTypeChecker`  | `node_modules/typescript/lib/typescript.js:121488:28` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:121587:38`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.21 GiB |   8,586 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|      % |     Size | Samples | Callee                     | Location                                              |
| -----: | -------: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 4.21 GiB |   8,584 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |     Size | Samples | Callee                                     | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.21 GiB |   8,580 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |     Size | Samples | Callee                   | Location                                              |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.21 GiB |   8,578 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |     Size | Samples | Callee                              | Location                                              |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.21 GiB |   8,574 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |
|  <0.1% |  512 KiB |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js:121559:35` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |    Size | Samples | Callee                          | Location                                              |
| -----: | ------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.2 GiB |   8,572 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |    Size | Samples | Callee        | Location                                              |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.2 GiB |   8,570 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |    Size | Samples | Callee    | Location                                           |
| -----: | ------: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 4.2 GiB |   8,570 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |    Size | Samples | Callee                 | Location                                              |
| -----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.2 GiB |   8,564 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |     Size | Samples | Callee                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 65.1% | 2.66 GiB |   5,429 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js:84429:32` |
| 34.7% | 1.42 GiB |   2,895 | `forEach`                    | `node_modules/typescript/lib/typescript.js:52:19`    |
|  0.1% |  5.5 MiB |      11 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js:84592:27` |
| <0.1% |    1 MiB |       2 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js:84097:40` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |     Size | Samples | Callee                  | Location                                             |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,334 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |     Size | Samples | Callee            | Location                                             |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,334 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |     Size | Samples | Callee                                | Location                                             |
| -----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,332 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |     Size | Samples | Callee                 | Location                                             |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,331 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|     % |     Size | Samples | Callee                      | Location                                             |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------------- |
| 75.3% | 3.07 GiB |   6,266 | `checkBlock`                | `node_modules/typescript/lib/typescript.js:80896:24` |
| 61.9% | 2.53 GiB |   5,156 | `checkVariableDeclaration`  | `node_modules/typescript/lib/typescript.js:81283:38` |
| 61.9% | 2.53 GiB |   5,152 | `checkVariableStatement`    | `node_modules/typescript/lib/typescript.js:81301:36` |
| 20.9% |  876 MiB |   1,738 | `checkExpressionStatement`  | `node_modules/typescript/lib/typescript.js:81306:38` |
|  8.2% |  343 MiB |     684 | `checkTypeAliasDeclaration` | `node_modules/typescript/lib/typescript.js:83177:39` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 4.08 GiB |   8,320 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 88.7% | 3.21 GiB |   6,544 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
|  6.2% |  230 MiB |     459 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  4.6% |  170 MiB |     328 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
|  2.5% | 94.2 MiB |     188 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  1.3% | 49.7 MiB |      99 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:78748:35`)

|     % |     Size | Samples | Callee                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 96.6% | 3.46 GiB |   7,043 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js:75579:33` |
| 53.5% | 1.92 GiB |   3,909 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:72103:32` |
| 31.4% | 1.12 GiB |   2,290 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js:71940:31` |
| 17.0% |  624 MiB |   1,243 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js:78748:35` |
|  6.5% |  238 MiB |     474 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:73074:43` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js:75579:33`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 44.8% | 1.55 GiB |   3,156 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js:75463:34` |
| 36.9% | 1.28 GiB |   2,599 | `resolveSignature`         | `node_modules/typescript/lib/typescript.js:75445:30` |
| 16.3% |  578 MiB |   1,153 | `resolveCallExpression`    | `node_modules/typescript/lib/typescript.js:74973:35` |
|  2.4% | 83.4 MiB |     166 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js:58566:38` |
|  1.3% | 46.1 MiB |      92 | `instantiateType`          | `node_modules/typescript/lib/typescript.js:62327:29` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Callee              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 99.5% | 2.67 GiB |   5,432 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:84436:31` |
|  0.8% | 21.5 MiB |      43 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.4% |   12 MiB |      24 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49804:22` |
| <0.1% |    1 MiB |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49840:34` |
| <0.1% |    1 MiB |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:47469:22` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Callee                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 41.7% | 37.6 MiB |      75 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:67027:37` |

##### `Map` (`<unknown>`)

|    % |    Size | Samples | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 7.0% | 5.5 MiB |      11 | `next` | `<unknown>` |
| 1.3% |   1 MiB |       2 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 53.7% | 10.1 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
| 46.3% | 8.72 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.8 MiB |      21 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee                   | Location                                   |
| -----: | -------: | ------: | ------------------------ | ------------------------------------------ |
| 100.0% | 18.8 MiB |      21 | `(anonymous)`            | `node:internal/modules/cjs/loader:1490:33` |
|   2.7% |  512 KiB |       1 | `resolveForCJSWithHooks` | `node:internal/modules/cjs/loader:1021:32` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.8 MiB |      21 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 18.8 MiB |      21 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.8 MiB |      21 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `toString` (`node:buffer:839:46`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 16.6 MiB |      20 | `slice` | `node:buffer:640:12` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 75.3% | 7.61 MiB |      15 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 24.7% |  2.5 MiB |       5 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |

##### `readFileSync` (`node:fs:433:22`)

|    % |    Size | Samples | Callee     | Location         |
| ---: | ------: | ------: | ---------- | ---------------- |
| 5.4% | 512 KiB |       1 | `openSync` | `node:fs:559:18` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.72 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |     Size | Samples | Callee            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.72 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`heapprofile-run.mjs:1:1`) ← `(anonymous)`

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.8% |  137 MiB |     272 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.6% | 79.3 MiB |     158 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                          |
| 1.4% | 67.8 MiB |     135 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                             |
| 1.3% | 61.8 MiB |     123 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) |
| 1.1% | 52.2 MiB |     104 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.9% | 46.2 MiB |      92 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% | 41.2 MiB |      82 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% | 40.2 MiB |      80 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                            |
| 0.8% |   39 MiB |      78 | `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:35053:43`) ← `(anonymous)` (29528:77) ← `mapDefined` (370:22) ← `parsePropertyOrMethodSignature` (31325:48) ← `parseTypeMember` (31368:33) ← `parseList` (30450:27) ← `parseObjectTypeMembers` (31412:40) ← `parseInterfaceDeclaration` (34524:43) ← `parseDeclarationWorker` (33901:40) ← `parseStatement` (33756:32) ← `parseList` (30450:27) ← `parseSourceFileWorker` (29491:39) ← `parseSourceFile` (29303:33) ← `createSourceFile` (28457:28) ← `(anonymous)` (119834:12) ← `findSourceFileWorker` (122196:34) ← `findSourceFile` (122179:28) ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` (122091:46) ← `processSourceFile` (122132:31) ← `processRootFile` (121930:29) ← `(anonymous)` (120714:32) ← `forEach` (52:19) ← `createProgram` (120478:25)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% | 38.2 MiB |      76 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% | 38.1 MiB |      76 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.7% | 34.6 MiB |      69 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.6% | 30.6 MiB |      61 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.6% | 29.6 MiB |      59 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.6% | 28.6 MiB |      57 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 28.6 MiB |      57 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% | 25.6 MiB |      51 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 25.1 MiB |      50 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.5% | 22.6 MiB |      45 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% | 21.6 MiB |      43 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfVariableOrParameterOrProperty` (55470:52) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) ← `getBindAndCheckDiagnosticsForFileNoCache` (121606:54) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
