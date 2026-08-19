# Heap profile

Allocated 4.78 GiB over 9,747 samples (514 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 91.3% | 4.36 GiB |   8,915 |
| Standard library |  8.7% |  423 MiB |     829 |
| Native           | <0.1% | 1.54 MiB |       3 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 49.9% | 2.39 GiB |   4,870 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.5% |  170 MiB |     339 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  2.7% |  131 MiB |     262 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.6% |  127 MiB |     253 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.3% |  114 MiB |     213 | `set`                           | `<unknown>`                                          |
|  2.1% |  105 MiB |     210 | `next`                          | `<unknown>`                                          |
|  2.0% |   99 MiB |     198 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.5% |   73 MiB |     146 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  1.3% | 64.5 MiB |     129 | `Map`                           | `<unknown>`                                          |
|  0.9% |   46 MiB |      92 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  0.8% |   41 MiB |      82 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js:30707:36` |
|  0.8% | 39.5 MiB |      79 | `push`                          | `<unknown>`                                          |
|  0.8% | 37.5 MiB |      75 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
|  0.7% | 35.5 MiB |      71 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:66046:28` |
|  0.6% | 30.5 MiB |      61 | `getBaseConstraintOfType`       | `node_modules/typescript/lib/typescript.js:57685:37` |
|  0.6% |   30 MiB |      60 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  0.6% | 29.5 MiB |      59 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.6% | 28.5 MiB |      57 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:29248:27` |
|  0.5% | 26.5 MiB |      53 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  0.5% |   25 MiB |      50 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:61957:29` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 49.9% | 2.39 GiB |   4,870 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.5% |  170 MiB |     339 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  2.7% |  131 MiB |     262 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.6% |  127 MiB |     253 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.0% |   99 MiB |     198 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.5% |   73 MiB |     146 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  0.9% |   46 MiB |      92 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  0.8% |   41 MiB |      82 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js:30707:36` |
|  0.8% | 37.5 MiB |      75 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |
|  0.7% | 35.5 MiB |      71 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:66046:28` |
|  0.6% | 30.5 MiB |      61 | `getBaseConstraintOfType`       | `node_modules/typescript/lib/typescript.js:57685:37` |
|  0.6% |   30 MiB |      60 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  0.6% | 29.5 MiB |      59 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.6% | 28.5 MiB |      57 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:29248:27` |
|  0.5% | 26.5 MiB |      53 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  0.5% |   25 MiB |      50 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:61957:29` |
|  0.5% |   25 MiB |      50 | `hasMatchingRecursionIdentity`  | `node_modules/typescript/lib/typescript.js:66121:42` |
|  0.4% | 21.5 MiB |      43 | `map`                           | `node_modules/typescript/lib/typescript.js:254:15`   |
|  0.4% |   20 MiB |      40 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.4% | 19.5 MiB |      39 | `scan`                          | `node_modules/typescript/lib/typescript.js:10327:18` |

##### Standard library

|     % |     Size | Samples | Function                   | Location                                   |
| ----: | -------: | ------: | -------------------------- | ------------------------------------------ |
|  2.3% |  114 MiB |     213 | `set`                      | `<unknown>`                                |
|  2.1% |  105 MiB |     210 | `next`                     | `<unknown>`                                |
|  1.3% | 64.5 MiB |     129 | `Map`                      | `<unknown>`                                |
|  0.8% | 39.5 MiB |      79 | `push`                     | `<unknown>`                                |
|  0.4% |   21 MiB |      42 | `splice`                   | `<unknown>`                                |
|  0.2% |    9 MiB |      18 | `values`                   | `<unknown>`                                |
|  0.2% | 8.53 MiB |      17 | `add`                      | `<unknown>`                                |
|  0.2% |    8 MiB |      16 | `get`                      | `<unknown>`                                |
|  0.2% | 7.85 MiB |      15 | `toString`                 | `node:buffer:903:46`                       |
|  0.1% |    7 MiB |      14 | `slice`                    | `<unknown>`                                |
|  0.1% |    6 MiB |      12 | `join`                     | `<unknown>`                                |
|  0.1% |  4.5 MiB |       9 | `includes`                 | `<unknown>`                                |
|  0.1% |    4 MiB |       8 | `Set`                      | `<unknown>`                                |
|  0.1% |  3.5 MiB |       7 | `split`                    | `<unknown>`                                |
|  0.1% |  3.5 MiB |       7 | `replace`                  | `<unknown>`                                |
|  0.1% | 2.62 MiB |       5 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1824:18` |
|  0.1% |  2.5 MiB |       5 | `delete`                   | `<unknown>`                                |
| <0.1% |  1.5 MiB |       3 | `filter`                   | `<unknown>`                                |
| <0.1% |  1.5 MiB |       3 | `compileForInternalLoader` | `node:internal/bootstrap/realm:392:27`     |
| <0.1% |  1.5 MiB |       3 | `substring`                | `<unknown>`                                |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |     Size | Samples | Caller                           | Location                                             |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------- |
| 85.0% | 2.03 GiB |   4,140 | `isTypeOrBaseIdenticalTo`        | `node_modules/typescript/lib/typescript.js:67803:37` |
| 12.4% |  304 MiB |     606 | `isTypeRelatedTo`                | `node_modules/typescript/lib/typescript.js:63432:29` |
|  1.7% | 42.1 MiB |      84 | `isTypeAssignableTo`             | `node_modules/typescript/lib/typescript.js:62552:32` |
|  0.7% |   16 MiB |      32 | `checkTypeAssignableTo`          | `node_modules/typescript/lib/typescript.js:62564:35` |
|  0.1% | 2.51 MiB |       5 | `getSignatureApplicabilityError` | `node_modules/typescript/lib/typescript.js:74212:44` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:68915:36`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 59.0% |  100 MiB |     200 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:70240:29` |
| 34.5% | 58.5 MiB |     117 | `getFlowTypeOfAccessExpression` | `node_modules/typescript/lib/typescript.js:73337:43` |
|  6.5% |   11 MiB |      22 | `tryGetThisTypeAt`              | `node_modules/typescript/lib/typescript.js:70579:30` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 131 MiB |     262 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 127 MiB |     253 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                           | Location                                             |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------- |
| 26.8% | 30.6 MiB |      61 | `createInstantiatedSymbolTable`  | `node_modules/typescript/lib/typescript.js:56402:43` |
| 17.6% |   20 MiB |      40 | `addInheritedMembers`            | `node_modules/typescript/lib/typescript.js:56409:33` |
|  7.5% | 8.52 MiB |      17 | `getUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:58008:44` |
|  6.5% | 7.44 MiB |       6 | `recursiveTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:64383:38` |
|  6.3% | 7.14 MiB |      14 | `getObjectTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:62119:40` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 12.9% | 13.5 MiB |      27 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  7.1% |  7.5 MiB |      15 | `arrayFrom`                     | `node_modules/typescript/lib/typescript.js:868:21`   |
|  6.2% | 6.52 MiB |      13 | `inferFromMatchingTypes`        | `node_modules/typescript/lib/typescript.js:67429:38` |
|  5.7% |    6 MiB |      12 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  5.2% |  5.5 MiB |      11 | `Map`                           | `<unknown>`                                          |

##### `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:35053:43`)

|     % |     Size | Samples | Caller              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 63.6% |   63 MiB |     126 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:35026:69` |
| 31.8% | 31.5 MiB |      63 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:29528:77` |
|  4.5% |  4.5 MiB |       9 | `parseJSDocComment` | `node_modules/typescript/lib/typescript.js:35022:37` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:62092:31`)

|     % |   Size | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 82.2% | 60 MiB |     120 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 12.3% |  9 MiB |      18 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:61957:29` |
|  5.5% |  4 MiB |       8 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 31.8% | 20.5 MiB |      41 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js:13004:29` |
| 16.3% | 10.5 MiB |      21 | `addDeclarationToSymbol`        | `node_modules/typescript/lib/typescript.js:42406:36` |
| 15.5% |   10 MiB |      20 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 13.2% |  8.5 MiB |      17 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js:60458:33` |
|  7.0% |  4.5 MiB |       9 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js:42630:27` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js:68231:32`)

|     % |     Size | Samples | Caller                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 35.9% | 16.5 MiB |      33 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:68310:31` |
| 25.0% | 11.5 MiB |      23 | `getIntersectionTypeFacts` | `node_modules/typescript/lib/typescript.js:68296:38` |
| 23.9% |   11 MiB |      22 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:68322:37` |
|  4.3% |    2 MiB |       4 | `getTypeFactsWorker`       | `node_modules/typescript/lib/typescript.js:68231:32` |
|  3.3% |  1.5 MiB |       3 | `checkExpressionWorker`    | `node_modules/typescript/lib/typescript.js:78748:35` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js:30707:36`)

|     % |     Size | Samples | Caller                                | Location                                             |
| ----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 40.2% | 16.5 MiB |      33 | `parseParametersWorker`               | `node_modules/typescript/lib/typescript.js:31243:39` |
| 15.9% |  6.5 MiB |      13 | `parseNonArrayType`                   | `node_modules/typescript/lib/typescript.js:31613:35` |
|  9.8% |    4 MiB |       8 | `parseVariableDeclarationList`        | `node_modules/typescript/lib/typescript.js:34052:46` |
|  9.8% |    4 MiB |       8 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js:32551:53` |
|  6.1% |  2.5 MiB |       5 | `parseObjectLiteralExpression`        | `node_modules/typescript/lib/typescript.js:33254:46` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                            | Location                                             |
| ----: | ------: | ------: | --------------------------------- | ---------------------------------------------------- |
| 19.0% | 7.5 MiB |      15 | `getConditionalTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62310:45` |
| 16.5% | 6.5 MiB |      13 | `arrayFrom`                       | `node_modules/typescript/lib/typescript.js:868:21`   |
| 11.4% | 4.5 MiB |       9 | `pushIfUnique`                    | `node_modules/typescript/lib/typescript.js:697:24`   |
|  8.9% | 3.5 MiB |       7 | `doJSDocScan`                     | `node_modules/typescript/lib/typescript.js:35075:33` |
|  8.9% | 3.5 MiB |       7 | `parseType`                       | `node_modules/typescript/lib/typescript.js:31930:27` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|      % |     Size | Samples | Caller        | Location                                             |
| -----: | -------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 37.5 MiB |      75 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:66046:28`)

|      % |     Size | Samples | Caller                   | Location                                             |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% | 35.5 MiB |      71 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |

##### `getBaseConstraintOfType` (`node_modules/typescript/lib/typescript.js:57685:37`)

|     % |     Size | Samples | Caller                | Location                                             |
| ----: | -------: | ------: | --------------------- | ---------------------------------------------------- |
| 86.9% | 26.5 MiB |      53 | `getTypeFactsWorker`  | `node_modules/typescript/lib/typescript.js:68231:32` |
|  6.6% |    2 MiB |       4 | `getApparentType`     | `node_modules/typescript/lib/typescript.js:57861:29` |
|  4.9% |  1.5 MiB |       3 | `getIntersectionType` | `node_modules/typescript/lib/typescript.js:60458:33` |
|  1.6% |  512 KiB |       1 | `getPropertiesOfType` | `node_modules/typescript/lib/typescript.js:57527:33` |

##### `getUnmatchedProperties` (`node_modules/typescript/lib/typescript.js:67027:37`)

|     % |     Size | Samples | Caller                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 38.3% | 11.5 MiB |      23 | `getUnmatchedProperty`     | `node_modules/typescript/lib/typescript.js:67049:34` |
| 23.3% |    7 MiB |      14 | `typesDefinitelyUnrelated` | `node_modules/typescript/lib/typescript.js:67055:38` |
| 21.7% |  6.5 MiB |      13 | `next`                     | `<unknown>`                                          |
| 16.7% |    5 MiB |      10 | `inferFromObjectTypes`     | `node_modules/typescript/lib/typescript.js:67642:36` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|      % |     Size | Samples | Caller                    | Location                                             |
| -----: | -------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 29.5 MiB |      59 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js:29248:27`)

|     % |    Size | Samples | Caller                               | Location                                             |
| ----: | ------: | ------: | ------------------------------------ | ---------------------------------------------------- |
| 12.3% | 3.5 MiB |       7 | `createBaseDeclaration`              | `node_modules/typescript/lib/typescript.js:21080:35` |
| 10.5% |   3 MiB |       6 | `createParameterDeclaration`         | `node_modules/typescript/lib/typescript.js:21445:40` |
| 10.5% |   3 MiB |       6 | `createStringLiteral`                | `node_modules/typescript/lib/typescript.js:21114:33` |
|  8.8% | 2.5 MiB |       5 | `createBasePropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:22067:48` |
|  5.3% | 1.5 MiB |       3 | `createUnionTypeNode`                | `node_modules/typescript/lib/typescript.js:21890:33` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |     Size | Samples | Caller                        | Location                                             |
| ----: | -------: | ------: | ----------------------------- | ---------------------------------------------------- |
| 92.5% | 24.5 MiB |      49 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js:56592:38` |
|  7.5% |    2 MiB |       4 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js:57105:41` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js:61957:29`)

|     % |    Size | Samples | Caller                  | Location                                             |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 32.0% |   8 MiB |      16 | `instantiateSignature`  | `node_modules/typescript/lib/typescript.js:62067:34` |
| 24.0% |   6 MiB |      12 | `instantiateTypes`      | `node_modules/typescript/lib/typescript.js:61974:30` |
| 22.0% | 5.5 MiB |      11 | `instantiateSignatures` | `node_modules/typescript/lib/typescript.js:61977:35` |
| 18.0% | 4.5 MiB |       9 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |
|  4.0% |   1 MiB |       2 | `instantiateIndexInfos` | `node_modules/typescript/lib/typescript.js:61980:35` |

##### `hasMatchingRecursionIdentity` (`node_modules/typescript/lib/typescript.js:66121:42`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 78.0% | 19.5 MiB |      39 | `isDeeplyNestedType`     | `node_modules/typescript/lib/typescript.js:66088:32` |
|  8.0% |    2 MiB |       4 | `(anonymous)`            | `node_modules/typescript/lib/typescript.js:66126:33` |
|  8.0% |    2 MiB |       4 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
|  6.0% |  1.5 MiB |       3 | `invokeOnce`             | `node_modules/typescript/lib/typescript.js:67401:26` |

##### `map` (`node_modules/typescript/lib/typescript.js:254:15`)

|     % |    Size | Samples | Caller                                      | Location                                             |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------------- |
| 55.8% |  12 MiB |      24 | `getObjectTypeInstantiation`                | `node_modules/typescript/lib/typescript.js:62119:40` |
| 20.9% | 4.5 MiB |       9 | `createInferenceContext`                    | `node_modules/typescript/lib/typescript.js:66825:36` |
|  4.7% |   1 MiB |       2 | `typeArgumentsFromTypeReferenceNode`        | `node_modules/typescript/lib/typescript.js:59303:48` |
|  4.7% |   1 MiB |       2 | `getLiteralTypeFromProperties`              | `node_modules/typescript/lib/typescript.js:60677:42` |
|  2.3% | 512 KiB |       1 | `discriminateContextualTypeByObjectMembers` | `node_modules/typescript/lib/typescript.js:71437:55` |

##### `splice` (`<unknown>`)

|     % |   Size | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 76.2% | 16 MiB |      32 | `addTypesToUnion`   | `node_modules/typescript/lib/typescript.js:60039:29` |
| 19.0% |  4 MiB |       8 | `reorderCandidates` | `node_modules/typescript/lib/typescript.js:73787:31` |
|  4.8% |  1 MiB |       2 | `addTypeToUnion`    | `node_modules/typescript/lib/typescript.js:60016:28` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:50117:23`)

|      % |   Size | Samples | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 20 MiB |      40 | `forEach` | `<unknown>` |

##### `scan` (`node_modules/typescript/lib/typescript.js:10327:18`)

|     % |    Size | Samples | Caller                | Location                                             |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------- |
| 25.6% |   5 MiB |      10 | `nextToken`           | `node_modules/typescript/lib/typescript.js:29792:27` |
| 23.1% | 4.5 MiB |       9 | `tryParseSemicolon`   | `node_modules/typescript/lib/typescript.js:30052:35` |
| 23.1% | 4.5 MiB |       9 | `parseExpected`       | `node_modules/typescript/lib/typescript.js:29868:31` |
| 10.3% |   2 MiB |       4 | `parseTypeAnnotation` | `node_modules/typescript/lib/typescript.js:31949:37` |
|  7.7% | 1.5 MiB |       3 | `parseOptional`       | `node_modules/typescript/lib/typescript.js:29993:31` |

##### `values` (`<unknown>`)

|     % |    Size | Samples | Caller                              | Location                                             |
| ----: | ------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 16.7% | 1.5 MiB |       3 | `getTypeAtFlowBranchLabel`          | `node_modules/typescript/lib/typescript.js:69174:40` |
| 11.1% |   1 MiB |       2 | `getIntersectionType`               | `node_modules/typescript/lib/typescript.js:60458:33` |
| 11.1% |   1 MiB |       2 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:57869:47` |
| 11.1% |   1 MiB |       2 | `inferFromProperties`               | `node_modules/typescript/lib/typescript.js:67742:35` |
|  5.6% | 512 KiB |       1 | `inferToMultipleTypes`              | `node_modules/typescript/lib/typescript.js:67489:36` |

##### `add` (`<unknown>`)

|     % |     Size | Samples | Caller                                         | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 58.7% |    5 MiB |      10 | `recursiveTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js:64383:38` |
| 11.9% | 1.01 MiB |       2 | `(anonymous)`                                  | `node_modules/typescript/lib/typescript.js:49840:34` |
| 11.8% | 1.01 MiB |       2 | `declareSymbol`                                | `node_modules/typescript/lib/typescript.js:42491:27` |
| 11.7% |    1 MiB |       2 | `checkNodeDeferred`                            | `node_modules/typescript/lib/typescript.js:84419:31` |
|  5.9% |  513 KiB |       1 | `checkFunctionExpressionOrObjectLiteralMethod` | `node_modules/typescript/lib/typescript.js:76989:58` |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Caller                       | Location                                             |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 37.5% |   3 MiB |       6 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js:60458:33` |
| 12.5% |   1 MiB |       2 | `createTypeReference`        | `node_modules/typescript/lib/typescript.js:58882:33` |
| 12.5% |   1 MiB |       2 | `getUnionTypeFromSortedList` | `node_modules/typescript/lib/typescript.js:60294:40` |
| 12.5% |   1 MiB |       2 | `getSignatureInstantiation`  | `node_modules/typescript/lib/typescript.js:58642:39` |
|  6.3% | 513 KiB |       1 | `declareSymbol`              | `node_modules/typescript/lib/typescript.js:42491:27` |

##### `toString` (`node:buffer:903:46`)

|      % |     Size | Samples | Caller           | Location                                            |
| -----: | -------: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 7.85 MiB |      15 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:6434:34` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller                                 | Location                                             |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 21.4% | 1.5 MiB |       3 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js:62354:35` |
| 14.3% |   1 MiB |       2 | `getNormalizedAbsolutePathWithoutRoot` | `node_modules/typescript/lib/typescript.js:6862:48`  |
| 14.3% |   1 MiB |       2 | `filter`                               | `node_modules/typescript/lib/typescript.js:220:18`   |
| 14.3% |   1 MiB |       2 | `getAdjustedTypeWithFacts`             | `node_modules/typescript/lib/typescript.js:68312:38` |
|  7.1% | 512 KiB |       1 | `instantiateList`                      | `node_modules/typescript/lib/typescript.js:61957:29` |

##### `join` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 66.7% |   4 MiB |       8 | `doJSDocScan`               | `node_modules/typescript/lib/typescript.js:35075:33` |
| 25.0% | 1.5 MiB |       3 | `parseTagComments`          | `node_modules/typescript/lib/typescript.js:35328:38` |
|  8.3% | 512 KiB |       1 | `getNormalizedAbsolutePath` | `node_modules/typescript/lib/typescript.js:6839:37`  |

##### `includes` (`<unknown>`)

|     % |    Size | Samples | Caller             | Location                                            |
| ----: | ------: | ------: | ------------------ | --------------------------------------------------- |
| 33.3% | 1.5 MiB |       3 | `normalizeSlashes` | `node_modules/typescript/lib/typescript.js:6792:28` |
| 22.2% |   1 MiB |       2 | `(anonymous)`      | `node:internal/fs/utils:834:38`                     |
| 22.2% |   1 MiB |       2 | `getBaseFileName`  | `node_modules/typescript/lib/typescript.js:6733:27` |
| 22.2% |   1 MiB |       2 | `normalizePath`    | `node_modules/typescript/lib/typescript.js:6842:25` |

##### `Set` (`<unknown>`)

|      % |  Size | Samples | Caller                   | Location                                             |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |

##### `split` (`<unknown>`)

|      % |    Size | Samples | Caller           | Location                                            |
| -----: | ------: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 3.5 MiB |       7 | `pathComponents` | `node_modules/typescript/lib/typescript.js:6775:26` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                 | Location                                              |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 42.9% | 1.5 MiB |       3 | `toPath`               | `node_modules/typescript/lib/typescript.js:6865:18`   |
| 42.9% | 1.5 MiB |       3 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js:122583:34` |
| 14.3% | 512 KiB |       1 | `normalizePath`        | `node_modules/typescript/lib/typescript.js:6842:25`   |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1824:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.62 MiB |       5 | `(anonymous)` | `node:internal/modules/cjs/loader:1885:37` |

##### `delete` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 80.0% |   2 MiB |       4 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
| 20.0% | 512 KiB |       1 | `resetMaybeStack`        | `node_modules/typescript/lib/typescript.js:64516:33` |

##### `filter` (`<unknown>`)

|      % |    Size | Samples | Caller                                 | Location                                             |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:65888:50` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:392:27`)

|      % |    Size | Samples | Caller           | Location                               |
| -----: | ------: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `requireBuiltin` | `node:internal/bootstrap/realm:429:24` |

##### `substring` (`<unknown>`)

|     % |    Size | Samples | Caller             | Location                                             |
| ----: | ------: | ------: | ------------------ | ---------------------------------------------------- |
| 66.7% |   1 MiB |       2 | `parseTagComments` | `node_modules/typescript/lib/typescript.js:35328:38` |
| 33.3% | 512 KiB |       1 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js:35075:33` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 97.4% | 4.65 GiB |   9,494 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 97.2% | 4.65 GiB |   9,478 | `(anonymous)`                              | `heapprofile-run.mjs:1:1`                             |
| 97.1% | 4.64 GiB |   9,468 | `(anonymous)`                              | `<unknown>`                                           |
| 97.1% | 4.64 GiB |   9,464 | `processTicksAndRejections`                | `node:internal/process/task_queues:72:35`             |
| 93.5% | 4.47 GiB |   9,111 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 87.2% | 4.17 GiB |   8,494 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 87.2% | 4.17 GiB |   8,494 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 87.1% | 4.16 GiB |   8,488 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.0% | 4.16 GiB |   8,481 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.0% | 4.16 GiB |   8,480 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.0% | 4.16 GiB |   8,474 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 86.9% | 4.16 GiB |   8,473 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 86.9% | 4.15 GiB |   8,468 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 86.8% | 4.15 GiB |   8,464 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 84.8% | 4.05 GiB |   8,262 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 84.8% | 4.05 GiB |   8,260 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 84.7% | 4.05 GiB |   8,257 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 84.7% | 4.05 GiB |   8,255 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 84.7% | 4.05 GiB |   8,251 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 84.7% | 4.05 GiB |   8,250 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 93.5% | 4.47 GiB |   9,111 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 87.2% | 4.17 GiB |   8,494 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 87.2% | 4.17 GiB |   8,494 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 87.1% | 4.16 GiB |   8,488 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.0% | 4.16 GiB |   8,481 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.0% | 4.16 GiB |   8,480 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.0% | 4.16 GiB |   8,474 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 86.9% | 4.16 GiB |   8,473 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 86.9% | 4.15 GiB |   8,468 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 86.8% | 4.15 GiB |   8,464 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 84.8% | 4.05 GiB |   8,262 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 84.8% | 4.05 GiB |   8,260 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 84.7% | 4.05 GiB |   8,257 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 84.7% | 4.05 GiB |   8,255 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 84.7% | 4.05 GiB |   8,251 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 84.7% | 4.05 GiB |   8,250 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 84.7% | 4.05 GiB |   8,249 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 73.8% | 3.53 GiB |   7,189 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |
| 73.7% | 3.52 GiB |   7,186 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:78709:29`  |
| 70.9% | 3.39 GiB |   6,909 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:75579:33`  |

##### Standard library

|     % |     Size | Samples | Function                    | Location                                   |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------ |
| 97.1% | 4.64 GiB |   9,464 | `processTicksAndRejections` | `node:internal/process/task_queues:72:35`  |
| 54.9% | 2.62 GiB |   5,351 | `forEach`                   | `<unknown>`                                |
|  2.7% |  132 MiB |     264 | `next`                      | `<unknown>`                                |
|  2.3% |  114 MiB |     213 | `set`                       | `<unknown>`                                |
|  1.5% | 71.5 MiB |     143 | `Map`                       | `<unknown>`                                |
|  0.8% | 39.5 MiB |      79 | `push`                      | `<unknown>`                                |
|  0.4% |   21 MiB |      42 | `splice`                    | `<unknown>`                                |
|  0.3% | 13.2 MiB |      26 | `(anonymous)`               | `node:internal/modules/cjs/loader:1885:37` |
|  0.3% | 13.2 MiB |      26 | `(anonymous)`               | `node:internal/modules/cjs/loader:2030:37` |
|  0.3% | 13.2 MiB |      26 | `(anonymous)`               | `node:internal/modules/cjs/loader:1641:33` |
|  0.3% | 13.2 MiB |      26 | `(anonymous)`               | `node:internal/modules/cjs/loader:1319:24` |
|  0.3% | 13.2 MiB |      26 | `wrapModuleLoad`            | `node:internal/modules/cjs/loader:244:24`  |
|  0.3% | 13.2 MiB |      26 | `(anonymous)`               | `node:internal/modules/cjs/loader:1671:36` |
|  0.3% | 13.2 MiB |      26 | `require`                   | `node:internal/modules/helpers:195:19`     |
|  0.2% |    9 MiB |      18 | `values`                    | `<unknown>`                                |
|  0.2% | 8.53 MiB |      17 | `add`                       | `<unknown>`                                |
|  0.2% |    8 MiB |      16 | `get`                       | `<unknown>`                                |
|  0.2% | 7.85 MiB |      15 | `toString`                  | `node:buffer:903:46`                       |
|  0.1% |    7 MiB |      14 | `slice`                     | `<unknown>`                                |
|  0.1% |  6.5 MiB |      13 | `replace`                   | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 89.1% | 4.15 GiB |   8,461 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 10.6% |  503 MiB |   1,005 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  0.3% | 13.2 MiB |      26 | `require`                          | `node:internal/modules/helpers:195:19`                |
| <0.1% |    1 MiB |       2 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                    |
| -----: | -------: | ------: | ------------------ | --------------------------- |
| 100.0% | 4.65 GiB |   9,477 | `typeCheckProject` | `tsc-workload.mjs:3:33`     |
|  <0.1% | 1.46 MiB |       1 | `fn`               | `node:internal/util:477:14` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location                  |
| -----: | -------: | ------: | ------------- | ------------------------- |
| 100.0% | 4.64 GiB |   9,468 | `(anonymous)` | `heapprofile-run.mjs:1:1` |

##### `processTicksAndRejections` (`node:internal/process/task_queues:72:35`)

|      % |     Size | Samples | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 4.64 GiB |   9,464 | `(anonymous)` | `<unknown>` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 90.5% | 4.04 GiB |   8,243 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
|  5.2% |  239 MiB |     478 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  3.7% |  169 MiB |     338 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
|  1.4% | 66.2 MiB |     132 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  0.7% | 33.5 MiB |      67 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 97.1% | 4.04 GiB |   8,245 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:84575:29`  |
|  2.9% |  124 MiB |     248 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:121488:28` |
| <0.1% |  512 KiB |       1 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:121627:46` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|     % |     Size | Samples | Callee                     | Location                                              |
| ----: | -------: | ------: | -------------------------- | ----------------------------------------------------- |
| 59.6% | 2.48 GiB |   5,061 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 40.4% | 1.68 GiB |   3,433 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |     Size | Samples | Callee                                     | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,488 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |     Size | Samples | Callee                   | Location                                              |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,481 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |     Size | Samples | Callee                              | Location                                              |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,479 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |
|  <0.1% |  512 KiB |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js:121559:35` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |     Size | Samples | Callee                          | Location                                              |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,474 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,472 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |
|  <0.1% |  512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:27`  |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |     Size | Samples | Callee    | Location                                           |
| -----: | -------: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,468 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.15 GiB |   8,464 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |     Size | Samples | Callee                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 64.4% | 2.61 GiB |   5,317 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js:84429:32` |
| 35.5% | 1.44 GiB |   2,938 | `forEach`                    | `node_modules/typescript/lib/typescript.js:52:19`    |
|  0.1% |    3 MiB |       6 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js:84592:27` |
| <0.1% |  512 KiB |       1 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js:84097:40` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |     Size | Samples | Callee                  | Location                                             |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 4.05 GiB |   8,260 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |     Size | Samples | Callee            | Location                                             |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 4.05 GiB |   8,257 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |     Size | Samples | Callee                                | Location                                             |
| -----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 4.05 GiB |   8,255 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |     Size | Samples | Callee                 | Location                                             |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 4.05 GiB |   8,251 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 74.4% | 3.01 GiB |   6,135 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:80896:24` |
| 62.0% | 2.51 GiB |   5,116 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:81283:38` |
| 61.9% | 2.51 GiB |   5,114 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:81301:36` |
| 20.9% |  865 MiB |   1,718 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js:81306:38` |
| 12.6% |  524 MiB |   1,045 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:79453:36` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 4.05 GiB |   8,249 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:78748:35`)

|     % |     Size | Samples | Callee                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 96.1% | 3.39 GiB |   6,909 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js:75579:33` |
| 52.4% | 1.85 GiB |   3,771 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:72103:32` |
| 31.4% | 1.11 GiB |   2,256 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js:71940:31` |
| 19.4% |  699 MiB |   1,394 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:73074:43` |
|  6.2% |  223 MiB |     444 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js:78748:35` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:78709:29`)

|      % |     Size | Samples | Callee                                          | Location                                             |
| -----: | -------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 3.52 GiB |   7,186 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js:78748:35` |
|   0.7% | 23.5 MiB |      47 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js:78499:59` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js:75579:33`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 97.2% | 3.29 GiB |   6,715 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js:75463:34` |
|  4.4% |  153 MiB |     305 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js:58566:38` |
|  0.8% |   28 MiB |      56 | `checkDeprecatedSignature` | `node_modules/typescript/lib/typescript.js:75633:38` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Callee              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 99.4% | 2.61 GiB |   5,318 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:84436:31` |
|  0.7% |   20 MiB |      40 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.3% | 8.02 MiB |      16 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49804:22` |
|  0.1% | 2.55 MiB |       5 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:47469:22` |
| <0.1% | 1.01 MiB |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49840:34` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Callee                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 31.9% | 42.1 MiB |      84 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:67027:37` |

##### `Map` (`<unknown>`)

|    % |     Size | Samples | Callee | Location    |
| ---: | -------: | ------: | ------ | ----------- |
| 7.7% |  5.5 MiB |      11 | `next` | `<unknown>` |
| 2.1% | 1.51 MiB |       3 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1885:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 80.2% | 10.6 MiB |      21 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 19.8% | 2.62 MiB |       5 | `wrapSafe`    | `node:internal/modules/cjs/loader:1824:18`      |

##### `(anonymous)` (`node:internal/modules/cjs/loader:2030:37`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |      26 | `(anonymous)` | `node:internal/modules/cjs/loader:1885:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1641:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |      26 | `(anonymous)` | `node:internal/modules/cjs/loader:2030:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1319:24`)

|      % |     Size | Samples | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |      26 | `(anonymous)`          | `node:internal/modules/cjs/loader:1641:33` |
|   7.6% |    1 MiB |       2 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1285:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:244:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |      26 | `(anonymous)` | `node:internal/modules/cjs/loader:1319:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1671:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 13.2 MiB |      26 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:244:24` |

##### `require` (`node:internal/modules/helpers:195:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 13.2 MiB |      26 | `(anonymous)` | `node:internal/modules/cjs/loader:1671:36` |

##### `replace` (`<unknown>`)

|     % |  Size | Samples | Callee        | Location                                            |
| ----: | ----: | ------: | ------------- | --------------------------------------------------- |
| 46.2% | 3 MiB |       6 | `toLowerCase` | `node_modules/typescript/lib/typescript.js:1186:23` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`heapprofile-run.mjs:1:1`) ← `(anonymous)` ← `processTicksAndRejections` (`node:internal/process/task_queues:72:35`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.2% |  156 MiB |     311 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                   |
| 1.9% | 94.9 MiB |     189 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                 |
| 1.6% | 77.8 MiB |     155 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.2% | 59.7 MiB |     119 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.2% | 56.7 MiB |     113 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.0% | 47.7 MiB |      95 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% | 47.2 MiB |      94 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% | 44.7 MiB |      89 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                     |
| 0.9% | 42.6 MiB |      85 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% | 41.7 MiB |      83 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% | 40.7 MiB |      81 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                          |
| 0.8% |   40 MiB |      80 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% | 32.6 MiB |      65 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.7% | 32.1 MiB |      64 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.6% | 31.6 MiB |      63 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.5% | 26.1 MiB |      52 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 23.6 MiB |      47 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                        |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% | 22.1 MiB |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                        |
