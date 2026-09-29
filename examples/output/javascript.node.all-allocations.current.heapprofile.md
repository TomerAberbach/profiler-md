# Heap profile

Allocated 4.71 GiB over 9,574 samples (516 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 91.8% | 4.32 GiB |   8,825 |
| Standard library |  8.2% |  396 MiB |     749 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                               | Location                                             |
| ----: | -------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 50.9% |  2.4 GiB |   4,890 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js:67445:30` |
|  3.3% |  161 MiB |     322 | `getFlowTypeOfReference`               | `node_modules/typescript/lib/typescript.js:72917:34` |
|  3.1% |  152 MiB |     303 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:68323:36` |
|  2.9% |  141 MiB |     281 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js:66040:38` |
|  2.6% |  125 MiB |     237 | `set`                                  | `<unknown>`                                          |
|  2.1% | 99.7 MiB |     199 | `parseJSDocCommentWorker`              | `node_modules/typescript/lib/typescript.js:38286:37` |
|  2.0% |   98 MiB |     196 | `instantiateSymbol`                    | `node_modules/typescript/lib/typescript.js:66013:29` |
|  1.8% | 86.5 MiB |     173 | `getTypeFactsWorker`                   | `node_modules/typescript/lib/typescript.js:72224:30` |
|  1.5% |   72 MiB |     144 | `Map`                                  | `<unknown>`                                          |
|  1.3% |   63 MiB |     126 | `next`                                 | `<unknown>`                                          |
|  0.9% |   41 MiB |      82 | `parseDelimitedList`                   | `node_modules/typescript/lib/typescript.js:33930:30` |
|  0.7% | 33.5 MiB |      67 | `isDeeplyNestedType`                   | `node_modules/typescript/lib/typescript.js:70031:30` |
|  0.6% | 30.5 MiB |      61 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:67416:48` |
|  0.6% |   30 MiB |      60 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js:46190:25` |
|  0.6% | 27.5 MiB |      55 | `instantiateTypes`                     | `node_modules/typescript/lib/typescript.js:65895:28` |
|  0.5% | 26.5 MiB |      53 | `push`                                 | `<unknown>`                                          |
|  0.5% | 26.5 MiB |      53 | `createBaseIdentifierNode`             | `node_modules/typescript/lib/typescript.js:32447:31` |
|  0.5% | 25.5 MiB |      51 | `setParentRecursive`                   | `node_modules/typescript/lib/typescript.js:22701:28` |
|  0.5% | 23.5 MiB |      47 | `splice`                               | `<unknown>`                                          |
|  0.5% |   22 MiB |      44 | `(anonymous)`                          | `node_modules/typescript/lib/typescript.js:53728:21` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                               | Location                                             |
| ----: | -------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 50.9% |  2.4 GiB |   4,890 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js:67445:30` |
|  3.3% |  161 MiB |     322 | `getFlowTypeOfReference`               | `node_modules/typescript/lib/typescript.js:72917:34` |
|  3.1% |  152 MiB |     303 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:68323:36` |
|  2.9% |  141 MiB |     281 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js:66040:38` |
|  2.1% | 99.7 MiB |     199 | `parseJSDocCommentWorker`              | `node_modules/typescript/lib/typescript.js:38286:37` |
|  2.0% |   98 MiB |     196 | `instantiateSymbol`                    | `node_modules/typescript/lib/typescript.js:66013:29` |
|  1.8% | 86.5 MiB |     173 | `getTypeFactsWorker`                   | `node_modules/typescript/lib/typescript.js:72224:30` |
|  0.9% |   41 MiB |      82 | `parseDelimitedList`                   | `node_modules/typescript/lib/typescript.js:33930:30` |
|  0.7% | 33.5 MiB |      67 | `isDeeplyNestedType`                   | `node_modules/typescript/lib/typescript.js:70031:30` |
|  0.6% | 30.5 MiB |      61 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:67416:48` |
|  0.6% |   30 MiB |      60 | `declareSymbol`                        | `node_modules/typescript/lib/typescript.js:46190:25` |
|  0.6% | 27.5 MiB |      55 | `instantiateTypes`                     | `node_modules/typescript/lib/typescript.js:65895:28` |
|  0.5% | 26.5 MiB |      53 | `createBaseIdentifierNode`             | `node_modules/typescript/lib/typescript.js:32447:31` |
|  0.5% | 25.5 MiB |      51 | `setParentRecursive`                   | `node_modules/typescript/lib/typescript.js:22701:28` |
|  0.5% |   22 MiB |      44 | `(anonymous)`                          | `node_modules/typescript/lib/typescript.js:53728:21` |
|  0.4% | 21.5 MiB |      43 | `getUnmatchedProperty`                 | `node_modules/typescript/lib/typescript.js:71014:32` |
|  0.4% |   21 MiB |      42 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js:67753:25` |
|  0.4% |   20 MiB |      40 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js:68537:43` |
|  0.4% |   20 MiB |      40 | `instantiateAnonymousType`             | `node_modules/typescript/lib/typescript.js:66215:36` |
|  0.4% | 19.5 MiB |      39 | `createBaseNode`                       | `node_modules/typescript/lib/typescript.js:32468:21` |

##### Standard library

|     % |     Size | Samples | Function       | Location                                   |
| ----: | -------: | ------: | -------------- | ------------------------------------------ |
|  2.6% |  125 MiB |     237 | `set`          | `<unknown>`                                |
|  1.5% |   72 MiB |     144 | `Map`          | `<unknown>`                                |
|  1.3% |   63 MiB |     126 | `next`         | `<unknown>`                                |
|  0.5% | 26.5 MiB |      53 | `push`         | `<unknown>`                                |
|  0.5% | 23.5 MiB |      47 | `splice`       | `<unknown>`                                |
|  0.3% | 15.3 MiB |      17 | `slice`        | `node:buffer:640:12`                       |
|  0.2% | 11.5 MiB |      23 | `values`       | `<unknown>`                                |
|  0.2% |   10 MiB |      20 | `join`         | `<unknown>`                                |
|  0.2% |    9 MiB |      18 | `replace`      | `<unknown>`                                |
|  0.2% | 8.37 MiB |       1 | `readFileSync` | `node:fs:433:22`                           |
|  0.1% | 7.05 MiB |      14 | `add`          | `<unknown>`                                |
|  0.1% |    7 MiB |      14 | `slice`        | `<unknown>`                                |
|  0.1% | 5.16 MiB |      10 | `wrapSafe`     | `node:internal/modules/cjs/loader:1671:18` |
|  0.1% |    3 MiB |       6 | `Set`          | `<unknown>`                                |
| <0.1% |    2 MiB |       4 | `delete`       | `<unknown>`                                |
| <0.1% |    1 MiB |       2 | `split`        | `<unknown>`                                |
| <0.1% |    1 MiB |       2 | `wrappedFn`    | `node:internal/errors:535:21`              |
| <0.1% |  516 KiB |       1 | `isArray`      | `<unknown>`                                |
| <0.1% |  512 KiB |       1 | `filter`       | `<unknown>`                                |
| <0.1% |  512 KiB |       1 | `Uint8Array`   | `<unknown>`                                |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`)

|     % |     Size | Samples | Caller                    | Location                                             |
| ----: | -------: | ------: | ------------------------- | ---------------------------------------------------- |
| 90.6% | 2.17 GiB |   4,432 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js:71779:35` |
|  4.3% |  106 MiB |     212 | `isTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:67361:27` |
|  3.1% | 77.3 MiB |     154 | `isTypeAssignableTo`      | `node_modules/typescript/lib/typescript.js:66481:30` |
|  0.6% | 13.6 MiB |      27 | `isTypeIdenticalTo`       | `node_modules/typescript/lib/typescript.js:66463:29` |
|  0.4% |   11 MiB |      22 | `checkTypeAssignableTo`   | `node_modules/typescript/lib/typescript.js:66493:33` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:72917:34`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 63.0% |  102 MiB |     203 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:74242:27` |
| 28.9% | 46.6 MiB |      93 | `getFlowTypeOfAccessExpression` | `node_modules/typescript/lib/typescript.js:77335:41` |
|  5.6% | 9.02 MiB |      18 | `tryGetThisTypeAt`              | `node_modules/typescript/lib/typescript.js:74576:28` |
|  2.5% | 4.01 MiB |       8 | `checkThisExpression`           | `node_modules/typescript/lib/typescript.js:74502:31` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:68323:36`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 152 MiB |     303 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:67753:25` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:66040:38`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 141 MiB |     281 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:66283:33` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                                   | Location                                             |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------------------------- |
| 26.1% | 32.6 MiB |      65 | `resolveObjectTypeMembers`               | `node_modules/typescript/lib/typescript.js:60465:36` |
| 16.1% |   20 MiB |      40 | `addInheritedMembers`                    | `node_modules/typescript/lib/typescript.js:60282:31` |
|  8.8% |   11 MiB |      22 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:61386:50` |
|  6.7% | 8.38 MiB |       7 | `resetMaybeStack`                        | `node_modules/typescript/lib/typescript.js:68456:31` |
|  6.1% | 7.56 MiB |      15 | `declareSymbol`                          | `node_modules/typescript/lib/typescript.js:46190:25` |

##### `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:38286:37`)

|     % |     Size | Samples | Caller        | Location                                             |
| ----: | -------: | ------: | ------------- | ---------------------------------------------------- |
| 87.5% | 87.2 MiB |     174 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:32748:71` |
| 12.5% | 12.5 MiB |      25 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:38259:63` |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:66013:29`)

|     % |    Size | Samples | Caller                          | Location                                             |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 74.5% |  73 MiB |     146 | `resolveObjectTypeMembers`      | `node_modules/typescript/lib/typescript.js:60465:36` |
| 14.3% |  14 MiB |      28 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:60275:41` |
|  6.6% | 6.5 MiB |      13 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:65988:32` |
|  1.5% | 1.5 MiB |       3 | `resolveAnonymousTypeMembers`   | `node_modules/typescript/lib/typescript.js:60978:39` |
|  1.5% | 1.5 MiB |       3 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:65878:27` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js:72224:30`)

|     % |     Size | Samples | Caller                  | Location                                             |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 37.0% |   32 MiB |      64 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:72303:29` |
| 26.0% | 22.5 MiB |      45 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:72315:35` |
| 23.7% | 20.5 MiB |      41 | `getTypeFactsWorker`    | `node_modules/typescript/lib/typescript.js:72224:30` |
|  2.9% |  2.5 MiB |       5 | `(anonymous)`           | `node_modules/typescript/lib/typescript.js:72282:37` |
|  2.9% |  2.5 MiB |       5 | `resolveCallExpression` | `node_modules/typescript/lib/typescript.js:78984:33` |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                           | Location                                             |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------- |
| 47.2% |   34 MiB |      68 | `createSymbolTable`              | `node_modules/typescript/lib/typescript.js:16239:27` |
| 17.4% | 12.5 MiB |      25 | `getIntersectionType`            | `node_modules/typescript/lib/typescript.js:64367:31` |
| 12.5% |    9 MiB |      18 | `bindContainer`                  | `node_modules/typescript/lib/typescript.js:46329:25` |
|  4.2% |    3 MiB |       6 | `checkUnusedLocalsAndParameters` | `node_modules/typescript/lib/typescript.js:84887:42` |
|  3.5% |  2.5 MiB |       5 | `bindFunctionOrConstructorType`  | `node_modules/typescript/lib/typescript.js:47501:41` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Caller                              | Location                                             |
| ----: | -------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 19.8% | 12.5 MiB |      25 | `getUnmatchedProperties`            | `node_modules/typescript/lib/typescript.js:70992:35` |
|  7.9% |    5 MiB |      10 | `Map`                               | `<unknown>`                                          |
|  7.1% |  4.5 MiB |       9 | `getIntersectionType`               | `node_modules/typescript/lib/typescript.js:64367:31` |
|  4.8% |    3 MiB |       6 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:61753:45` |
|  4.0% |  2.5 MiB |       5 | `contains`                          | `node_modules/typescript/lib/typescript.js:2513:18`  |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js:33930:30`)

|     % |     Size | Samples | Caller                              | Location                                             |
| ----: | -------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 35.4% | 14.5 MiB |      29 | `parseParameters`                   | `node_modules/typescript/lib/typescript.js:34476:27` |
| 23.2% |  9.5 MiB |      19 | `parseCallExpressionRest`           | `node_modules/typescript/lib/typescript.js:36262:35` |
|  9.8% |    4 MiB |       8 | `parseObjectLiteralExpression`      | `node_modules/typescript/lib/typescript.js:36477:40` |
|  9.8% |    4 MiB |       8 | `parseTypeArgumentsOfTypeReference` | `node_modules/typescript/lib/typescript.js:34182:45` |
|  6.1% |  2.5 MiB |       5 | `parseParametersWorker`             | `node_modules/typescript/lib/typescript.js:34466:33` |

##### `isDeeplyNestedType` (`node_modules/typescript/lib/typescript.js:70031:30`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 56.7% |  19 MiB |      38 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68323:36` |
| 38.8% |  13 MiB |      26 | `invokeOnce`             | `node_modules/typescript/lib/typescript.js:71374:24` |
|  4.5% | 1.5 MiB |       3 | `(anonymous)`            | `node_modules/typescript/lib/typescript.js:70037:33` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js:67416:48`)

|     % |     Size | Samples | Caller              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 93.4% | 28.5 MiB |      57 | `isRelatedTo`       | `node_modules/typescript/lib/typescript.js:67753:25` |
|  6.6% |    2 MiB |       4 | `getNormalizedType` | `node_modules/typescript/lib/typescript.js:67408:29` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js:46190:25`)

|     % |     Size | Samples | Caller                             | Location                                             |
| ----: | -------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 68.3% | 20.5 MiB |      41 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js:47392:44` |
| 25.0% |  7.5 MiB |      15 | `declareModuleMember`              | `node_modules/typescript/lib/typescript.js:46264:31` |
|  3.3% |    1 MiB |       2 | `bindBlockScopedDeclaration`       | `node_modules/typescript/lib/typescript.js:47526:38` |
|  3.3% |    1 MiB |       2 | `declareClassMember`               | `node_modules/typescript/lib/typescript.js:47439:30` |

##### `instantiateTypes` (`node_modules/typescript/lib/typescript.js:65895:28`)

|     % |    Size | Samples | Caller                       | Location                                             |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 90.9% |  25 MiB |      50 | `instantiateTypeWorker`      | `node_modules/typescript/lib/typescript.js:66283:33` |
|  5.5% | 1.5 MiB |       3 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:66040:38` |
|  1.8% | 512 KiB |       1 | `getTypeArguments`           | `node_modules/typescript/lib/typescript.js:62827:28` |
|  1.8% | 512 KiB |       1 | `instantiateAnonymousType`   | `node_modules/typescript/lib/typescript.js:66215:36` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                       | Location                                             |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 22.6% |   6 MiB |      12 | `parseUnionTypeOrHigher`     | `node_modules/typescript/lib/typescript.js:35072:34` |
| 22.6% |   6 MiB |      12 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js:64367:31` |
|  5.7% | 1.5 MiB |       3 | `arrayFrom`                  | `node_modules/typescript/lib/typescript.js:3187:19`  |
|  3.8% |   1 MiB |       2 | `getImmediateBaseConstraint` | `node_modules/typescript/lib/typescript.js:61588:40` |
|  3.8% |   1 MiB |       2 | `getSignaturesOfSymbol`      | `node_modules/typescript/lib/typescript.js:62369:33` |

##### `createBaseIdentifierNode` (`node_modules/typescript/lib/typescript.js:32447:31`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 75.5% |  20 MiB |      40 | `createIdentifier`       | `node_modules/typescript/lib/typescript.js:24991:28` |
| 13.2% | 3.5 MiB |       7 | `parseBindingIdentifier` | `node_modules/typescript/lib/typescript.js:33368:34` |
|  9.4% | 2.5 MiB |       5 | `parseIdentifier`        | `node_modules/typescript/lib/typescript.js:33376:27` |
|  1.9% | 512 KiB |       1 | `parsePrimaryExpression` | `node_modules/typescript/lib/typescript.js:36337:34` |

##### `setParentRecursive` (`node_modules/typescript/lib/typescript.js:22701:28`)

|     % |     Size | Samples | Caller                                            | Location                                              |
| ----: | -------: | ------: | ------------------------------------------------- | ----------------------------------------------------- |
| 52.9% | 13.5 MiB |      27 | `getModuleInstanceState`                          | `node_modules/typescript/lib/typescript.js:45853:32`  |
| 33.3% |  8.5 MiB |      17 | `bindChildren`                                    | `node_modules/typescript/lib/typescript.js:46428:24`  |
|  7.8% |    2 MiB |       4 | `bindJSDoc`                                       | `node_modules/typescript/lib/typescript.js:47821:21`  |
|  3.9% |    1 MiB |       2 | `getModuleInstanceStateForAliasTarget`            | `node_modules/typescript/lib/typescript.js:45934:46`  |
|  2.0% |  512 KiB |       1 | `collectDynamicImportOrRequireOrJsDocImportCalls` | `node_modules/typescript/lib/typescript.js:125394:61` |

##### `splice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                             |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 42.6% |  10 MiB |      20 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js:63948:27` |
| 31.9% | 7.5 MiB |      15 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js:64122:30` |
| 21.3% |   5 MiB |      10 | `reorderCandidates`  | `node_modules/typescript/lib/typescript.js:77782:29` |
|  4.3% |   1 MiB |       2 | `addTypeToUnion`     | `node_modules/typescript/lib/typescript.js:63925:26` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:53728:21`)

|      % |   Size | Samples | Caller    | Location    |
| -----: | -----: | ------: | --------- | ----------- |
| 100.0% | 22 MiB |      44 | `forEach` | `<unknown>` |

##### `getUnmatchedProperty` (`node_modules/typescript/lib/typescript.js:71014:32`)

|     % |     Size | Samples | Caller                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 72.1% | 15.5 MiB |      31 | `propertiesRelatedTo`      | `node_modules/typescript/lib/typescript.js:69333:33` |
| 16.3% |  3.5 MiB |       7 | `inferFromObjectTypes`     | `node_modules/typescript/lib/typescript.js:71615:34` |
| 11.6% |  2.5 MiB |       5 | `typesDefinitelyUnrelated` | `node_modules/typescript/lib/typescript.js:71020:36` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:67753:25`)

|     % |    Size | Samples | Caller                                 | Location                                             |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 95.2% |  20 MiB |      40 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js:67445:30` |
|  2.4% | 512 KiB |       1 | `relateVariances`                      | `node_modules/typescript/lib/typescript.js:69054:31` |
|  2.4% | 512 KiB |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:69828:48` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Size | Samples | Caller                    | Location                                             |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 20 MiB |      40 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68467:37` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js:66215:36`)

|     % |     Size | Samples | Caller                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 82.5% | 16.5 MiB |      33 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:66040:38` |
| 10.0% |    2 MiB |       4 | `instantiateConstituent`     | `node_modules/typescript/lib/typescript.js:66160:36` |
|  7.5% |  1.5 MiB |       3 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js:66151:33` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js:32468:21`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 28.2% | 5.5 MiB |      11 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js:38308:27` |
| 28.2% | 5.5 MiB |      11 | `createBaseDeclaration`  | `node_modules/typescript/lib/typescript.js:24876:33` |
| 15.4% |   3 MiB |       6 | `createBaseNode`         | `node_modules/typescript/lib/typescript.js:24873:26` |
| 12.8% | 2.5 MiB |       5 | `parseDeclarationWorker` | `node_modules/typescript/lib/typescript.js:37124:34` |
| 10.3% |   2 MiB |       4 | `createUnionTypeNode`    | `node_modules/typescript/lib/typescript.js:25686:31` |

##### `slice` (`node:buffer:640:12`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 15.3 MiB |      17 | `toString` | `node:buffer:839:46` |

##### `values` (`<unknown>`)

|     % |    Size | Samples | Caller                                 | Location                                             |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 13.0% | 1.5 MiB |       3 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:69828:48` |
|  8.7% |   1 MiB |       2 | `inferFromIndexTypes`                  | `node_modules/typescript/lib/typescript.js:71749:33` |
|  4.3% | 512 KiB |       1 | `createUnionOrIntersectionProperty`    | `node_modules/typescript/lib/typescript.js:61753:45` |
|  4.3% | 512 KiB |       1 | `getIntersectionType`                  | `node_modules/typescript/lib/typescript.js:64367:31` |
|  4.3% | 512 KiB |       1 | `checkUnusedTypeParameters`            | `node_modules/typescript/lib/typescript.js:84839:37` |

##### `join` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 60.0% |   6 MiB |      12 | `doJSDocScan`               | `node_modules/typescript/lib/typescript.js:38308:27` |
| 25.0% | 2.5 MiB |       5 | `parseTagComments`          | `node_modules/typescript/lib/typescript.js:38564:32` |
|  5.0% | 512 KiB |       1 | `getPathFromPathComponents` | `node_modules/typescript/lib/typescript.js:9108:35`  |
|  5.0% | 512 KiB |       1 | `getTemplateLiteralType`    | `node_modules/typescript/lib/typescript.js:64644:34` |
|  5.0% | 512 KiB |       1 | `getTupleTargetType`        | `node_modules/typescript/lib/typescript.js:63730:30` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                                  | Location                                              |
| ----: | ------: | ------: | --------------------------------------- | ----------------------------------------------------- |
| 55.6% |   5 MiB |      10 | `getCanonicalFileName`                  | `node_modules/typescript/lib/typescript.js:125957:32` |
| 22.2% |   2 MiB |       4 | `toFileNameLowerCase`                   | `node_modules/typescript/lib/typescript.js:3509:29`   |
| 11.1% |   1 MiB |       2 | `getResolvedProjectReferenceToRedirect` | `node_modules/typescript/lib/typescript.js:125734:49` |
|  5.6% | 512 KiB |       1 | `toPath3`                               | `node_modules/typescript/lib/typescript.js:124369:19` |
|  5.6% | 512 KiB |       1 | `formatStringFromArgs`                  | `node_modules/typescript/lib/typescript.js:21430:30`  |

##### `readFileSync` (`node:fs:433:22`)

|      % |     Size | Samples | Caller            | Location                                   |
| -----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `add` (`<unknown>`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 57.1% | 4.02 MiB |       8 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68323:36` |
| 28.7% | 2.02 MiB |       4 | `declareSymbol`          | `node_modules/typescript/lib/typescript.js:46190:25` |
| 14.2% |    1 MiB |       2 | `(anonymous)`            | `node_modules/typescript/lib/typescript.js:53459:32` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                             |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------- |
| 28.6% |   2 MiB |       4 | `instantiateTypes`   | `node_modules/typescript/lib/typescript.js:65895:28` |
| 21.4% | 1.5 MiB |       3 | `filter`             | `node_modules/typescript/lib/typescript.js:2546:16`  |
| 14.3% |   1 MiB |       2 | `getPathWithoutRoot` | `node_modules/typescript/lib/typescript.js:9179:28`  |
| 14.3% |   1 MiB |       2 | `addRange`           | `node_modules/typescript/lib/typescript.js:2992:18`  |
|  7.1% | 512 KiB |       1 | `sliceTupleType`     | `node_modules/typescript/lib/typescript.js:63875:26` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 5.16 MiB |      10 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `Set` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 50.0% | 1.5 MiB |       3 | `recursiveTypeRelatedTo`    | `node_modules/typescript/lib/typescript.js:68323:36` |
| 16.7% | 512 KiB |       1 | `bindSourceFile2`           | `node_modules/typescript/lib/typescript.js:46044:27` |
| 16.7% | 512 KiB |       1 | `checkUnusedTypeParameters` | `node_modules/typescript/lib/typescript.js:84839:37` |
| 16.7% | 512 KiB |       1 | `getSpreadType`             | `node_modules/typescript/lib/typescript.js:65547:25` |

##### `delete` (`<unknown>`)

|      % |  Size | Samples | Caller            | Location                                             |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 2 MiB |       4 | `resetMaybeStack` | `node_modules/typescript/lib/typescript.js:68456:31` |

##### `split` (`<unknown>`)

|      % |  Size | Samples | Caller              | Location                                            |
| -----: | ----: | ------: | ------------------- | --------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `getPathComponents` | `node_modules/typescript/lib/typescript.js:9104:27` |

##### `wrappedFn` (`node:internal/errors:535:21`)

|     % |    Size | Samples | Caller        | Location                        |
| ----: | ------: | ------: | ------------- | ------------------------------- |
| 50.0% | 512 KiB |       1 | `(anonymous)` | `node:internal/fs/utils:730:42` |
| 50.0% | 512 KiB |       1 | `statSync`    | `node:fs:1745:18`               |

##### `isArray` (`<unknown>`)

|      % |    Size | Samples | Caller                    | Location                                             |
| -----: | ------: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 516 KiB |       1 | `chainDiagnosticMessages` | `node_modules/typescript/lib/typescript.js:21555:33` |

##### `filter` (`<unknown>`)

|      % |    Size | Samples | Caller                                 | Location                                             |
| -----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:69828:48` |

##### `Uint8Array` (`<unknown>`)

|      % |    Size | Samples | Caller       | Location                     |
| -----: | ------: | ------: | ------------ | ---------------------------- |
| 100.0% | 512 KiB |       1 | `FastBuffer` | `node:internal/buffer:956:1` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 97.9% | 4.61 GiB |   9,374 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 97.9% | 4.61 GiB |   9,369 | `(anonymous)`                              | `heapprofile-run.mjs:1:1`                             |
| 97.8% |  4.6 GiB |   9,359 | `(anonymous)`                              | `<unknown>`                                           |
| 87.1% |  4.1 GiB |   8,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 87.1% |  4.1 GiB |   8,359 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
| 87.1% |  4.1 GiB |   8,357 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
| 87.0% |  4.1 GiB |   8,356 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
| 87.0% |  4.1 GiB |   8,353 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
| 87.0% |  4.1 GiB |   8,353 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
| 87.0% | 4.09 GiB |   8,349 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 86.9% | 4.09 GiB |   8,344 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
| 86.9% | 4.09 GiB |   8,342 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
| 86.9% | 4.09 GiB |   8,340 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
| 84.2% | 3.97 GiB |   8,084 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:88583:33`  |
| 84.2% | 3.96 GiB |   8,082 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |
| 84.2% | 3.96 GiB |   8,079 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:88649:47`  |
| 84.2% | 3.96 GiB |   8,078 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:88656:32`  |
| 84.1% | 3.96 GiB |   8,074 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:88635:27`  |
| 84.0% | 3.95 GiB |   8,058 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:88208:36`  |
| 83.9% | 3.95 GiB |   8,056 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:88199:30`  |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.1% |  4.1 GiB |   8,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 87.1% |  4.1 GiB |   8,359 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
| 87.1% |  4.1 GiB |   8,357 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
| 87.0% |  4.1 GiB |   8,356 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
| 87.0% |  4.1 GiB |   8,353 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
| 87.0% |  4.1 GiB |   8,353 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
| 87.0% | 4.09 GiB |   8,349 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 86.9% | 4.09 GiB |   8,344 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
| 86.9% | 4.09 GiB |   8,342 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
| 86.9% | 4.09 GiB |   8,340 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
| 84.2% | 3.97 GiB |   8,084 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:88583:33`  |
| 84.2% | 3.96 GiB |   8,082 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |
| 84.2% | 3.96 GiB |   8,079 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:88649:47`  |
| 84.2% | 3.96 GiB |   8,078 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:88656:32`  |
| 84.1% | 3.96 GiB |   8,074 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:88635:27`  |
| 84.0% | 3.95 GiB |   8,058 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:88208:36`  |
| 83.9% | 3.95 GiB |   8,056 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:88199:30`  |
| 75.2% | 3.54 GiB |   7,210 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2378:17`   |
| 73.8% | 3.47 GiB |   7,083 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:82811:33`  |
| 71.1% | 3.35 GiB |   6,824 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:79584:31`  |

##### Standard library

|     % |     Size | Samples | Function          | Location                                   |
| ----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 55.5% | 2.61 GiB |   5,326 | `forEach`         | `<unknown>`                                |
|  2.6% |  125 MiB |     237 | `set`             | `<unknown>`                                |
|  1.7% | 79.6 MiB |     159 | `Map`             | `<unknown>`                                |
|  1.6% |   78 MiB |     156 | `next`            | `<unknown>`                                |
|  0.5% | 26.5 MiB |      53 | `push`            | `<unknown>`                                |
|  0.5% | 23.5 MiB |      47 | `splice`          | `<unknown>`                                |
|  0.4% | 18.3 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  0.4% | 18.3 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  0.4% | 18.3 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  0.4% | 18.3 MiB |      20 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`  |
|  0.4% | 18.3 MiB |      20 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  0.4% | 18.3 MiB |      20 | `require`         | `node:internal/modules/helpers:146:19`     |
|  0.3% | 15.3 MiB |      17 | `slice`           | `node:buffer:640:12`                       |
|  0.3% | 15.3 MiB |      17 | `toString`        | `node:buffer:839:46`                       |
|  0.2% | 11.5 MiB |      23 | `replace`         | `<unknown>`                                |
|  0.2% | 11.5 MiB |      23 | `values`          | `<unknown>`                                |
|  0.2% |   10 MiB |      20 | `join`            | `<unknown>`                                |
|  0.2% | 9.88 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |
|  0.2% | 9.37 MiB |       3 | `readFileSync`    | `node:fs:433:22`                           |
|  0.2% | 8.37 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 88.6% | 4.08 GiB |   8,329 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:124909:34` |
| 11.0% |  519 MiB |   1,023 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:123840:23` |
|  0.4% | 18.3 MiB |      20 | `require`                          | `node:internal/modules/helpers:146:19`                |
| <0.1% |    1 MiB |       2 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:41625:42`  |

##### `(anonymous)` (`heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                |
| -----: | -------: | ------: | ------------------ | ----------------------- |
| 100.0% | 4.61 GiB |   9,369 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size | Samples | Callee        | Location                  |
| -----: | ------: | ------: | ------------- | ------------------------- |
| 100.0% | 4.6 GiB |   9,359 | `(anonymous)` | `heapprofile-run.mjs:1:1` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124967:37`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 96.5% | 3.96 GiB |   8,070 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:88635:27`  |
|  3.5% |  145 MiB |     290 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:124848:26` |
| <0.1% |    1 MiB |       2 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:124987:44` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:124947:36`)

|      % |    Size | Samples | Callee        | Location                                              |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,359 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:124966:52`)

|      % |    Size | Samples | Callee                     | Location                                              |
| -----: | ------: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,357 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:125252:34`)

|      % |    Size | Samples | Callee                                     | Location                                              |
| -----: | ------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,356 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124963:45`)

|      % |    Size | Samples | Callee                   | Location                                              |
| -----: | ------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,353 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:125252:34` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124957:41`)

|      % |    Size | Samples | Callee                              | Location                                              |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,353 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:124963:45` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124899:76`)

|      % |     Size | Samples | Callee                          | Location                                              |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,349 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:124957:41` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:2625:17`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,344 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124899:76` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:124895:32`)

|      % |     Size | Samples | Callee    | Location                                            |
| -----: | -------: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,342 | `flatMap` | `node_modules/typescript/lib/typescript.js:2625:17` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:124909:34`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,340 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:124895:32` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:88583:33`)

|     % |     Size | Samples | Callee                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 65.5% |  2.6 GiB |   5,291 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js:88492:30` |
| 34.4% | 1.36 GiB |   2,780 | `forEach`                    | `node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.1% |  5.5 MiB |      11 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js:88652:25` |
| <0.1% | 1.05 MiB |       2 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js:88158:38` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:88552:27`)

|      % |     Size | Samples | Callee                  | Location                                             |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 3.96 GiB |   8,082 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:88649:47`)

|      % |     Size | Samples | Callee            | Location                                             |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 3.96 GiB |   8,079 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:88552:27` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:88656:32`)

|      % |     Size | Samples | Callee                                | Location                                             |
| -----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 3.96 GiB |   8,078 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:88649:47` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:88635:27`)

|      % |     Size | Samples | Callee                 | Location                                             |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 3.96 GiB |   8,074 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:88208:36`)

|     % |     Size | Samples | Callee                      | Location                                             |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------------- |
| 75.4% | 2.98 GiB |   6,074 | `checkBlock`                | `node_modules/typescript/lib/typescript.js:85011:22` |
| 63.0% | 2.49 GiB |   5,084 | `checkVariableDeclaration`  | `node_modules/typescript/lib/typescript.js:85396:36` |
| 63.0% | 2.49 GiB |   5,079 | `checkVariableStatement`    | `node_modules/typescript/lib/typescript.js:85414:34` |
| 20.4% |  827 MiB |   1,642 | `checkExpressionStatement`  | `node_modules/typescript/lib/typescript.js:85419:36` |
|  7.9% |  321 MiB |     640 | `checkTypeAliasDeclaration` | `node_modules/typescript/lib/typescript.js:87285:37` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:88199:30`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 3.95 GiB |   8,056 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:88208:36` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:2378:17`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 87.9% | 3.11 GiB |   6,344 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:88199:30`  |
|  6.6% |  240 MiB |     480 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124028:24` |
|  5.0% |  180 MiB |     348 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124077:30` |
|  2.5% | 91.8 MiB |     183 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:125782:35` |
|  1.7% | 60.1 MiB |     120 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:125932:42` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:82811:33`)

|     % |     Size | Samples | Callee                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 96.3% | 3.35 GiB |   6,824 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js:79584:31` |
| 53.4% | 1.86 GiB |   3,788 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:76097:30` |
| 32.6% | 1.13 GiB |   2,315 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js:75934:29` |
| 16.9% |  602 MiB |   1,199 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js:82811:33` |
|  7.3% |  258 MiB |     515 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:77069:41` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js:79584:31`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 39.4% | 1.32 GiB |   2,684 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js:79468:32` |
| 35.7% |  1.2 GiB |   2,439 | `resolveSignature`         | `node_modules/typescript/lib/typescript.js:79450:28` |
| 23.0% |  788 MiB |   1,571 | `resolveCallExpression`    | `node_modules/typescript/lib/typescript.js:78984:33` |
|  2.7% | 91.7 MiB |     183 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js:62462:36` |
|  1.3% | 44.3 MiB |      88 | `instantiateType`          | `node_modules/typescript/lib/typescript.js:66256:27` |

##### `forEach` (`<unknown>`)

|     % |    Size | Samples | Callee              | Location                                             |
| ----: | ------: | ------: | ------------------- | ---------------------------------------------------- |
| 99.4% | 2.6 GiB |   5,295 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:88499:29` |
|  0.8% |  22 MiB |      44 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53728:21` |
|  0.5% |  14 MiB |      28 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53423:20` |
|  0.1% | 1.5 MiB |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:51425:20` |
| <0.1% |   1 MiB |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53459:32` |

##### `Map` (`<unknown>`)

|    % |    Size | Samples | Callee | Location    |
| ---: | ------: | ------: | ------ | ----------- |
| 6.3% |   5 MiB |      10 | `next` | `<unknown>` |
| 3.3% | 2.6 MiB |       5 | `set`  | `<unknown>` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Callee                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 35.3% | 27.5 MiB |      55 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:70992:35` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 54.1% | 9.88 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
| 45.9% | 8.37 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.3 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.3 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1490:33` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.3 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 18.3 MiB |      20 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 18.3 MiB |      20 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `toString` (`node:buffer:839:46`)

|      % |     Size | Samples | Callee  | Location             |
| -----: | -------: | ------: | ------- | -------------------- |
| 100.0% | 15.3 MiB |      17 | `slice` | `node:buffer:640:12` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Callee        | Location                                            |
| ----: | ------: | ------: | ------------- | --------------------------------------------------- |
| 21.7% | 2.5 MiB |       5 | `toLowerCase` | `node_modules/typescript/lib/typescript.js:3505:21` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 52.2% | 5.16 MiB |      10 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`      |
| 47.8% | 4.73 MiB |       9 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |

##### `readFileSync` (`node:fs:433:22`)

|    % |    Size | Samples | Callee            | Location         |
| ---: | ------: | ------: | ----------------- | ---------------- |
| 5.3% | 512 KiB |       1 | `tryCreateBuffer` | `node:fs:397:25` |
| 5.3% | 512 KiB |       1 | `tryReadSync`     | `node:fs:412:21` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |     Size | Samples | Callee         | Location         |
| -----: | -------: | ------: | -------------- | ---------------- |
| 100.0% | 8.37 MiB |       1 | `readFileSync` | `node:fs:433:22` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`heapprofile-run.mjs:1:1`) ← `(anonymous)`

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% |  139 MiB |     277 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.6% | 77.8 MiB |     155 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                          |
| 1.4% | 67.3 MiB |     134 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                             |
| 1.1% | 54.2 MiB |     108 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
| 1.0% | 48.2 MiB |      96 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% | 46.7 MiB |      93 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.8% | 40.6 MiB |      81 | `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseStatement` (36979:26) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124077:30) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.8% | 36.7 MiB |      73 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% | 36.2 MiB |      72 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                            |
| 0.7% | 36.1 MiB |      72 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% | 33.1 MiB |      66 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.6% | 30.6 MiB |      61 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.6% | 29.1 MiB |      58 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.6% | 28.6 MiB |      57 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.5% | 26.1 MiB |      52 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 24.6 MiB |      49 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 24.6 MiB |      49 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.5% | 23.6 MiB |      47 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.5% | 22.6 MiB |      45 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% | 22.1 MiB |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
