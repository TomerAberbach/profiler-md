# Heap profile

Allocated 4.74 GiB over 9,665 samples (514 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 91.2% | 4.32 GiB |   8,825 |
| Standard library |  8.8% |  427 MiB |     840 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 50.0% | 2.37 GiB |   4,838 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.7% |  180 MiB |     360 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  3.0% |  145 MiB |     290 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.5% |  121 MiB |     242 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.4% |  117 MiB |     223 | `set`                           | `<unknown>`                                          |
|  2.1% |  100 MiB |     200 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.9% | 93.5 MiB |     187 | `next`                          | `<unknown>`                                          |
|  1.5% | 71.5 MiB |     143 | `Map`                           | `<unknown>`                                          |
|  1.2% | 60.5 MiB |     121 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  0.9% |   44 MiB |      88 | `push`                          | `<unknown>`                                          |
|  0.9% | 43.5 MiB |      87 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  0.9% | 42.5 MiB |      85 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  0.8% |   37 MiB |      74 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  0.6% |   30 MiB |      60 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js:30707:36` |
|  0.6% |   29 MiB |      58 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
|  0.5% | 26.5 MiB |      53 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
|  0.5% |   26 MiB |      52 | `splice`                        | `<unknown>`                                          |
|  0.5% |   26 MiB |      52 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.5% |   24 MiB |      48 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  0.5% | 22.5 MiB |      45 | `getResolvedBaseConstraint`     | `node_modules/typescript/lib/typescript.js:57698:39` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                        | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 50.0% | 2.37 GiB |   4,838 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.7% |  180 MiB |     360 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:68915:36` |
|  3.0% |  145 MiB |     290 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
|  2.5% |  121 MiB |     242 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |
|  2.1% |  100 MiB |     200 | `parseJSDocCommentWorker`       | `node_modules/typescript/lib/typescript.js:35053:43` |
|  1.2% | 60.5 MiB |     121 | `getTypeFactsWorker`            | `node_modules/typescript/lib/typescript.js:68231:32` |
|  0.9% | 43.5 MiB |      87 | `instantiateSymbol`             | `node_modules/typescript/lib/typescript.js:62092:31` |
|  0.9% | 42.5 MiB |      85 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
|  0.8% |   37 MiB |      74 | `getUnmatchedProperties`        | `node_modules/typescript/lib/typescript.js:67027:37` |
|  0.6% |   30 MiB |      60 | `parseDelimitedList`            | `node_modules/typescript/lib/typescript.js:30707:36` |
|  0.6% |   29 MiB |      58 | `instantiateAnonymousType`      | `node_modules/typescript/lib/typescript.js:62289:38` |
|  0.5% | 26.5 MiB |      53 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
|  0.5% |   26 MiB |      52 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |
|  0.5% |   24 MiB |      48 | `isDeeplyNestedType`            | `node_modules/typescript/lib/typescript.js:66088:32` |
|  0.5% | 22.5 MiB |      45 | `getResolvedBaseConstraint`     | `node_modules/typescript/lib/typescript.js:57698:39` |
|  0.5% |   22 MiB |      44 | `inferTypes`                    | `node_modules/typescript/lib/typescript.js:67205:24` |
|  0.4% |   21 MiB |      42 | `createBaseNode`                | `node_modules/typescript/lib/typescript.js:29248:27` |
|  0.4% |   20 MiB |      40 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
|  0.4% | 19.5 MiB |      39 | `map`                           | `node_modules/typescript/lib/typescript.js:254:15`   |
|  0.4% |   19 MiB |      38 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:63479:31` |

##### Standard library

|     % |     Size | Samples | Function              | Location                                   |
| ----: | -------: | ------: | --------------------- | ------------------------------------------ |
|  2.4% |  117 MiB |     223 | `set`                 | `<unknown>`                                |
|  1.9% | 93.5 MiB |     187 | `next`                | `<unknown>`                                |
|  1.5% | 71.5 MiB |     143 | `Map`                 | `<unknown>`                                |
|  0.9% |   44 MiB |      88 | `push`                | `<unknown>`                                |
|  0.5% |   26 MiB |      52 | `splice`              | `<unknown>`                                |
|  0.2% | 10.3 MiB |      19 | `toString`            | `node:buffer:903:46`                       |
|  0.2% |   10 MiB |      20 | `join`                | `<unknown>`                                |
|  0.1% | 7.04 MiB |      14 | `add`                 | `<unknown>`                                |
|  0.1% |  6.5 MiB |      13 | `replace`             | `<unknown>`                                |
|  0.1% |  6.5 MiB |      13 | `values`              | `<unknown>`                                |
|  0.1% |  5.5 MiB |      11 | `slice`               | `<unknown>`                                |
|  0.1% |    5 MiB |      10 | `delete`              | `<unknown>`                                |
|  0.1% |  4.5 MiB |       9 | `Set`                 | `<unknown>`                                |
|  0.1% |  4.5 MiB |       9 | `get`                 | `<unknown>`                                |
|  0.1% |  3.5 MiB |       7 | `includes`            | `<unknown>`                                |
| <0.1% | 1.58 MiB |       3 | `wrapSafe`            | `node:internal/modules/cjs/loader:1824:18` |
| <0.1% |  1.5 MiB |       3 | `split`               | `<unknown>`                                |
| <0.1% |  1.5 MiB |       3 | `getStatsFromBinding` | `node:internal/fs/utils:682:29`            |
| <0.1% |  1.5 MiB |       3 | `substring`           | `<unknown>`                                |
| <0.1% | 1.46 MiB |       1 | `post`                | `node:inspector:115:7`                     |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`)

|     % |     Size | Samples | Caller                    | Location                                             |
| ----: | -------: | ------: | ------------------------- | ---------------------------------------------------- |
| 87.3% | 2.07 GiB |   4,224 | `isTypeOrBaseIdenticalTo` | `node_modules/typescript/lib/typescript.js:67803:37` |
|  9.1% |  222 MiB |     443 | `isTypeRelatedTo`         | `node_modules/typescript/lib/typescript.js:63432:29` |
|  3.0% | 73.8 MiB |     147 | `isTypeAssignableTo`      | `node_modules/typescript/lib/typescript.js:62552:32` |
|  0.4% |   10 MiB |      20 | `checkTypeAssignableTo`   | `node_modules/typescript/lib/typescript.js:62564:35` |
| <0.1% |    1 MiB |       2 | `elaborateElementwise`    | `node_modules/typescript/lib/typescript.js:62760:34` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:68915:36`)

|     % |    Size | Samples | Caller                          | Location                                             |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 60.0% | 108 MiB |     216 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:70240:29` |
| 31.7% |  57 MiB |     114 | `getFlowTypeOfAccessExpression` | `node_modules/typescript/lib/typescript.js:73337:43` |
|  8.3% |  15 MiB |      30 | `tryGetThisTypeAt`              | `node_modules/typescript/lib/typescript.js:70579:30` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:64383:38`)

|      % |    Size | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 145 MiB |     290 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:62119:40`)

|      % |    Size | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 121 MiB |     242 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:62354:35` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 29.1% | 34.1 MiB |      68 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 16.7% | 19.5 MiB |      39 | `addInheritedMembers`           | `node_modules/typescript/lib/typescript.js:56409:33` |
|  6.5% | 7.56 MiB |      15 | `declareSymbol`                 | `node_modules/typescript/lib/typescript.js:42491:27` |
|  6.0% | 7.02 MiB |      14 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:49804:22` |
|  5.7% | 6.65 MiB |      13 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:62119:40` |

##### `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:35053:43`)

|     % |   Size | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 63.0% | 63 MiB |     126 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:35026:69` |
| 37.0% | 37 MiB |      74 | `parseJSDocComment` | `node_modules/typescript/lib/typescript.js:35022:37` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Caller                              | Location                                             |
| ----: | -------: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 16.6% | 15.5 MiB |      31 | `getUnmatchedProperties`            | `node_modules/typescript/lib/typescript.js:67027:37` |
|  7.5% |    7 MiB |      14 | `Map`                               | `<unknown>`                                          |
|  4.3% |    4 MiB |       8 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js:57869:47` |
|  3.7% |  3.5 MiB |       7 | `propertiesRelatedTo`               | `node_modules/typescript/lib/typescript.js:65393:35` |
|  3.7% |  3.5 MiB |       7 | `inferFromMatchingTypes`            | `node_modules/typescript/lib/typescript.js:67429:38` |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 31.5% | 22.5 MiB |      45 | `createSymbolTable`             | `node_modules/typescript/lib/typescript.js:13004:29` |
| 14.7% | 10.5 MiB |      21 | `addDeclarationToSymbol`        | `node_modules/typescript/lib/typescript.js:42406:36` |
| 14.7% | 10.5 MiB |      21 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 14.7% | 10.5 MiB |      21 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js:60458:33` |
|  6.3% |  4.5 MiB |       9 | `bindContainer`                 | `node_modules/typescript/lib/typescript.js:42630:27` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js:68231:32`)

|     % |     Size | Samples | Caller                         | Location                                             |
| ----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 32.2% | 19.5 MiB |      39 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:68310:31` |
| 23.1% |   14 MiB |      28 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:68322:37` |
| 23.1% |   14 MiB |      28 | `getIntersectionTypeFacts`     | `node_modules/typescript/lib/typescript.js:68296:38` |
|  6.6% |    4 MiB |       8 | `checkNonNullTypeWithReporter` | `node_modules/typescript/lib/typescript.js:73033:42` |
|  4.1% |  2.5 MiB |       5 | `(anonymous)`                  | `node_modules/typescript/lib/typescript.js:68289:39` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller                            | Location                                             |
| ----: | ------: | ------: | --------------------------------- | ---------------------------------------------------- |
| 21.6% | 9.5 MiB |      19 | `arrayFrom`                       | `node_modules/typescript/lib/typescript.js:868:21`   |
| 12.5% | 5.5 MiB |      11 | `parseType`                       | `node_modules/typescript/lib/typescript.js:31930:27` |
| 12.5% | 5.5 MiB |      11 | `getConditionalTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62310:45` |
|  8.0% | 3.5 MiB |       7 | `getIntersectionType`             | `node_modules/typescript/lib/typescript.js:60458:33` |
|  6.8% |   3 MiB |       6 | `pushIfUnique`                    | `node_modules/typescript/lib/typescript.js:697:24`   |

##### `instantiateSymbol` (`node_modules/typescript/lib/typescript.js:62092:31`)

|     % |     Size | Samples | Caller                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 58.6% | 25.5 MiB |      51 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:56402:43` |
| 19.5% |  8.5 MiB |      17 | `instantiateList`               | `node_modules/typescript/lib/typescript.js:61957:29` |
| 17.2% |  7.5 MiB |      15 | `instantiateSignature`          | `node_modules/typescript/lib/typescript.js:62067:34` |
|  4.6% |    2 MiB |       4 | `instantiateSignatures`         | `node_modules/typescript/lib/typescript.js:61977:35` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:56402:43`)

|     % |    Size | Samples | Caller                        | Location                                             |
| ----: | ------: | ------: | ----------------------------- | ---------------------------------------------------- |
| 98.8% |  42 MiB |      84 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js:56592:38` |
|  1.2% | 512 KiB |       1 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js:57105:41` |

##### `getUnmatchedProperties` (`node_modules/typescript/lib/typescript.js:67027:37`)

|     % |     Size | Samples | Caller                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 31.1% | 11.5 MiB |      23 | `inferFromObjectTypes`     | `node_modules/typescript/lib/typescript.js:67642:36` |
| 25.7% |  9.5 MiB |      19 | `getUnmatchedProperty`     | `node_modules/typescript/lib/typescript.js:67049:34` |
| 18.9% |    7 MiB |      14 | `next`                     | `<unknown>`                                          |
| 14.9% |  5.5 MiB |      11 | `typesDefinitelyUnrelated` | `node_modules/typescript/lib/typescript.js:67055:38` |
|  9.5% |  3.5 MiB |       7 | `propertiesRelatedTo`      | `node_modules/typescript/lib/typescript.js:65393:35` |

##### `parseDelimitedList` (`node_modules/typescript/lib/typescript.js:30707:36`)

|     % |    Size | Samples | Caller                                | Location                                             |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 26.7% |   8 MiB |      16 | `parseParametersWorker`               | `node_modules/typescript/lib/typescript.js:31243:39` |
| 16.7% |   5 MiB |      10 | `parseBracketedList`                  | `node_modules/typescript/lib/typescript.js:30770:36` |
| 15.0% | 4.5 MiB |       9 | `parseNonArrayType`                   | `node_modules/typescript/lib/typescript.js:31613:35` |
| 15.0% | 4.5 MiB |       9 | `parseLeftHandSideExpressionOrHigher` | `node_modules/typescript/lib/typescript.js:32551:53` |
| 11.7% | 3.5 MiB |       7 | `parseVariableDeclarationList`        | `node_modules/typescript/lib/typescript.js:34052:46` |

##### `instantiateAnonymousType` (`node_modules/typescript/lib/typescript.js:62289:38`)

|     % |   Size | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 51.7% | 15 MiB |      30 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:62119:40` |
| 31.0% |  9 MiB |      18 | `instantiateConstituent`     | `node_modules/typescript/lib/typescript.js:62234:38` |
| 17.2% |  5 MiB |      10 | `instantiateMappedType`      | `node_modules/typescript/lib/typescript.js:62225:35` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:63813:27`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 96.2% | 25.5 MiB |      51 | `checkTypeRelatedTo`     | `node_modules/typescript/lib/typescript.js:63505:32` |
|  3.8% |    1 MiB |       2 | `typeArgumentsRelatedTo` | `node_modules/typescript/lib/typescript.js:64293:38` |

##### `splice` (`<unknown>`)

|     % |     Size | Samples | Caller               | Location                                             |
| ----: | -------: | ------: | -------------------- | ---------------------------------------------------- |
| 40.4% | 10.5 MiB |      21 | `addTypesToUnion`    | `node_modules/typescript/lib/typescript.js:60039:29` |
| 25.0% |  6.5 MiB |      13 | `reorderCandidates`  | `node_modules/typescript/lib/typescript.js:73787:31` |
| 21.2% |  5.5 MiB |      11 | `getUnionTypeWorker` | `node_modules/typescript/lib/typescript.js:60213:32` |
| 13.5% |  3.5 MiB |       7 | `addTypeToUnion`     | `node_modules/typescript/lib/typescript.js:60016:28` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:64597:45`)

|      % |   Size | Samples | Caller                    | Location                                             |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 26 MiB |      52 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64527:39` |

##### `isDeeplyNestedType` (`node_modules/typescript/lib/typescript.js:66088:32`)

|     % |    Size | Samples | Caller                          | Location                                             |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 66.7% |  16 MiB |      32 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| 25.0% |   6 MiB |      12 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js:67401:26` |
|  6.2% | 1.5 MiB |       3 | `(anonymous)`                   | `node_modules/typescript/lib/typescript.js:66094:35` |
|  2.1% | 512 KiB |       1 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:64597:45` |

##### `getResolvedBaseConstraint` (`node_modules/typescript/lib/typescript.js:57698:39`)

|     % |    Size | Samples | Caller                         | Location                                             |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 42.2% | 9.5 MiB |      19 | `getBaseConstraintOfType`      | `node_modules/typescript/lib/typescript.js:57685:37` |
| 13.3% |   3 MiB |       6 | `isUnconstrainedTypeParameter` | `node_modules/typescript/lib/typescript.js:66008:42` |
| 11.1% | 2.5 MiB |       5 | `getConstraintOfTypeParameter` | `node_modules/typescript/lib/typescript.js:57570:42` |
|  8.9% |   2 MiB |       4 | `getCovariantInference`        | `node_modules/typescript/lib/typescript.js:67832:35` |
|  6.7% | 1.5 MiB |       3 | `getBaseConstraintOrType`      | `node_modules/typescript/lib/typescript.js:57692:37` |

##### `inferTypes` (`node_modules/typescript/lib/typescript.js:67205:24`)

|     % |   Size | Samples | Caller               | Location                                             |
| ----: | -----: | ------: | -------------------- | ---------------------------------------------------- |
| 86.4% | 19 MiB |      38 | `inferTypeArguments` | `node_modules/typescript/lib/typescript.js:73956:32` |
| 13.6% |  3 MiB |       6 | `getConditionalType` | `node_modules/typescript/lib/typescript.js:61308:32` |

##### `createBaseNode` (`node_modules/typescript/lib/typescript.js:29248:27`)

|     % |    Size | Samples | Caller                         | Location                                             |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 26.2% | 5.5 MiB |      11 | `createStringLiteral`          | `node_modules/typescript/lib/typescript.js:21114:33` |
|  7.1% | 1.5 MiB |       3 | `createArrayLiteralExpression` | `node_modules/typescript/lib/typescript.js:22044:42` |
|  7.1% | 1.5 MiB |       3 | `createNumericLiteral`         | `node_modules/typescript/lib/typescript.js:21092:34` |
|  7.1% | 1.5 MiB |       3 | `createJSDocParameterTag`      | `node_modules/typescript/lib/typescript.js:23383:37` |
|  7.1% | 1.5 MiB |       3 | `createBaseDeclaration`        | `node_modules/typescript/lib/typescript.js:21080:35` |

##### `declareSymbol` (`node_modules/typescript/lib/typescript.js:42491:27`)

|     % |    Size | Samples | Caller                             | Location                                             |
| ----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 80.0% |  16 MiB |      32 | `declareSymbolAndAddToSymbolTable` | `node_modules/typescript/lib/typescript.js:43636:46` |
| 12.5% | 2.5 MiB |       5 | `declareModuleMember`              | `node_modules/typescript/lib/typescript.js:42565:33` |
|  2.5% | 512 KiB |       1 | `declareSourceFileMember`          | `node_modules/typescript/lib/typescript.js:43686:37` |
|  2.5% | 512 KiB |       1 | `declareClassMember`               | `node_modules/typescript/lib/typescript.js:43683:32` |
|  2.5% | 512 KiB |       1 | `bindExportDeclaration`            | `node_modules/typescript/lib/typescript.js:44336:35` |

##### `map` (`node_modules/typescript/lib/typescript.js:254:15`)

|     % |    Size | Samples | Caller                                      | Location                                             |
| ----: | ------: | ------: | ------------------------------------------- | ---------------------------------------------------- |
| 48.7% | 9.5 MiB |      19 | `getObjectTypeInstantiation`                | `node_modules/typescript/lib/typescript.js:62119:40` |
| 25.6% |   5 MiB |      10 | `createInferenceContext`                    | `node_modules/typescript/lib/typescript.js:66825:36` |
|  5.1% |   1 MiB |       2 | `discriminateContextualTypeByObjectMembers` | `node_modules/typescript/lib/typescript.js:71437:55` |
|  5.1% |   1 MiB |       2 | `instantiateSignature`                      | `node_modules/typescript/lib/typescript.js:62067:34` |
|  2.6% | 512 KiB |       1 | `getBaseSignature`                          | `node_modules/typescript/lib/typescript.js:58697:30` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:63479:31`)

|      % |   Size | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 19 MiB |      38 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:63813:27` |

##### `toString` (`node:buffer:903:46`)

|      % |     Size | Samples | Caller           | Location                                            |
| -----: | -------: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 10.3 MiB |      19 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:6434:34` |

##### `join` (`<unknown>`)

|     % |    Size | Samples | Caller                                 | Location                                             |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 60.0% |   6 MiB |      12 | `doJSDocScan`                          | `node_modules/typescript/lib/typescript.js:35075:33` |
| 30.0% |   3 MiB |       6 | `parseTagComments`                     | `node_modules/typescript/lib/typescript.js:35328:38` |
|  5.0% | 512 KiB |       1 | `getNormalizedAbsolutePathWithoutRoot` | `node_modules/typescript/lib/typescript.js:6862:48`  |
|  5.0% | 512 KiB |       1 | `getNormalizedAbsolutePath`            | `node_modules/typescript/lib/typescript.js:6839:37`  |

##### `add` (`<unknown>`)

|     % |     Size | Samples | Caller                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 57.0% | 4.01 MiB |       8 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
| 21.4% |  1.5 MiB |       3 | `(anonymous)`            | `node_modules/typescript/lib/typescript.js:49840:34` |
| 14.3% | 1.01 MiB |       2 | `declareSymbol`          | `node_modules/typescript/lib/typescript.js:42491:27` |
|  7.2% |  522 KiB |       1 | `checkNodeDeferred`      | `node_modules/typescript/lib/typescript.js:84419:31` |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                 | Location                                              |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------- |
| 53.8% | 3.5 MiB |       7 | `getCanonicalFileName` | `node_modules/typescript/lib/typescript.js:122583:34` |
| 38.5% | 2.5 MiB |       5 | `toPath`               | `node_modules/typescript/lib/typescript.js:6865:18`   |
|  7.7% | 512 KiB |       1 | `formatStringFromArgs` | `node_modules/typescript/lib/typescript.js:17666:32`  |

##### `values` (`<unknown>`)

|     % |    Size | Samples | Caller                                                     | Location                                             |
| ----: | ------: | ------: | ---------------------------------------------------------- | ---------------------------------------------------- |
| 15.4% |   1 MiB |       2 | `getIntersectionType`                                      | `node_modules/typescript/lib/typescript.js:60458:33` |
| 15.4% |   1 MiB |       2 | `inferFromIndexTypes`                                      | `node_modules/typescript/lib/typescript.js:67773:35` |
| 15.4% |   1 MiB |       2 | `getUnmatchedProperties`                                   | `node_modules/typescript/lib/typescript.js:67027:37` |
|  7.7% | 512 KiB |       1 | `getTypeAtFlowBranchLabel`                                 | `node_modules/typescript/lib/typescript.js:69174:40` |
|  7.7% | 512 KiB |       1 | `forEachMappedTypePropertyKeyTypeAndIndexSignatureKeyType` | `node_modules/typescript/lib/typescript.js:57290:70` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                             |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------- |
| 18.2% |   1 MiB |       2 | `filter`                    | `node_modules/typescript/lib/typescript.js:220:18`   |
| 18.2% |   1 MiB |       2 | `instantiateTypes`          | `node_modules/typescript/lib/typescript.js:61974:30` |
|  9.1% | 512 KiB |       1 | `instantiateTypeWorker`     | `node_modules/typescript/lib/typescript.js:62354:35` |
|  9.1% | 512 KiB |       1 | `getAdjustedTypeWithFacts`  | `node_modules/typescript/lib/typescript.js:68312:38` |
|  9.1% | 512 KiB |       1 | `getNormalizedAbsolutePath` | `node_modules/typescript/lib/typescript.js:6839:37`  |

##### `delete` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 70.0% | 3.5 MiB |       7 | `resetMaybeStack`        | `node_modules/typescript/lib/typescript.js:64516:33` |
| 30.0% | 1.5 MiB |       3 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |

##### `Set` (`<unknown>`)

|     % |    Size | Samples | Caller                   | Location                                             |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------- |
| 88.9% |   4 MiB |       8 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:64383:38` |
| 11.1% | 512 KiB |       1 | `bindSourceFile2`        | `node_modules/typescript/lib/typescript.js:42348:29` |

##### `get` (`<unknown>`)

|     % |    Size | Samples | Caller                       | Location                                             |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 33.3% | 1.5 MiB |       3 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js:60458:33` |
| 33.3% | 1.5 MiB |       3 | `recursiveTypeRelatedTo`     | `node_modules/typescript/lib/typescript.js:64383:38` |
| 11.1% | 512 KiB |       1 | `getTypeAtFlowLoopLabel`     | `node_modules/typescript/lib/typescript.js:69215:38` |
| 11.1% | 512 KiB |       1 | `getUnionTypeFromSortedList` | `node_modules/typescript/lib/typescript.js:60294:40` |
| 11.1% | 512 KiB |       1 | `createTypeReference`        | `node_modules/typescript/lib/typescript.js:58882:33` |

##### `includes` (`<unknown>`)

|     % |    Size | Samples | Caller            | Location                                            |
| ----: | ------: | ------: | ----------------- | --------------------------------------------------- |
| 42.9% | 1.5 MiB |       3 | `getBaseFileName` | `node_modules/typescript/lib/typescript.js:6733:27` |
| 28.6% |   1 MiB |       2 | `(anonymous)`     | `node:internal/fs/utils:834:38`                     |
| 28.6% |   1 MiB |       2 | `normalizePath`   | `node_modules/typescript/lib/typescript.js:6842:25` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1824:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 1.58 MiB |       3 | `(anonymous)` | `node:internal/modules/cjs/loader:1885:37` |

##### `split` (`<unknown>`)

|      % |    Size | Samples | Caller           | Location                                            |
| -----: | ------: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `pathComponents` | `node_modules/typescript/lib/typescript.js:6775:26` |

##### `getStatsFromBinding` (`node:internal/fs/utils:682:29`)

|      % |    Size | Samples | Caller                  | Location                                            |
| -----: | ------: | ------: | ----------------------- | --------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `fileSystemEntryExists` | `node_modules/typescript/lib/typescript.js:6530:41` |

##### `substring` (`<unknown>`)

|     % |    Size | Samples | Caller                        | Location                                             |
| ----: | ------: | ------: | ----------------------------- | ---------------------------------------------------- |
| 33.3% | 512 KiB |       1 | `getTextOfNodeFromSourceText` | `node_modules/typescript/lib/typescript.js:13396:39` |
| 33.3% | 512 KiB |       1 | `removeExtension`             | `node_modules/typescript/lib/typescript.js:18361:27` |
| 33.3% | 512 KiB |       1 | `processCommentPragmas`       | `node_modules/typescript/lib/typescript.js:28568:33` |

##### `post` (`node:inspector:115:7`)

|      % |     Size | Samples | Caller        | Location                    |
| -----: | -------: | ------: | ------------- | --------------------------- |
| 100.0% | 1.46 MiB |       1 | `(anonymous)` | `node:internal/util:478:24` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 97.7% | 4.63 GiB |   9,447 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 97.6% | 4.62 GiB |   9,431 | `(anonymous)`                              | `heapprofile-run.mjs:1:1`                             |
| 97.6% | 4.62 GiB |   9,430 | `(anonymous)`                              | `<unknown>`                                           |
| 97.6% | 4.62 GiB |   9,428 | `processTicksAndRejections`                | `node:internal/process/task_queues:72:35`             |
| 93.6% | 4.43 GiB |   9,044 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 88.0% | 4.17 GiB |   8,510 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 88.0% | 4.17 GiB |   8,509 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 88.0% | 4.17 GiB |   8,507 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.9% | 4.17 GiB |   8,500 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.9% | 4.16 GiB |   8,497 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.9% | 4.16 GiB |   8,495 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 87.8% | 4.16 GiB |   8,488 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 87.8% | 4.16 GiB |   8,482 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 87.7% | 4.16 GiB |   8,480 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 85.3% | 4.04 GiB |   8,240 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 85.3% | 4.04 GiB |   8,239 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 85.2% | 4.04 GiB |   8,235 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 85.2% | 4.03 GiB |   8,230 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 85.1% | 4.03 GiB |   8,227 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 85.0% | 4.03 GiB |   8,213 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                              |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 93.6% | 4.43 GiB |   9,044 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:52:19`     |
| 88.0% | 4.17 GiB |   8,510 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 88.0% | 4.17 GiB |   8,509 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |
| 88.0% | 4.17 GiB |   8,507 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121892:36` |
| 87.9% | 4.17 GiB |   8,500 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:121603:47` |
| 87.9% | 4.16 GiB |   8,497 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:121597:43` |
| 87.9% | 4.16 GiB |   8,495 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 87.8% | 4.16 GiB |   8,488 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:299:19`    |
| 87.8% | 4.16 GiB |   8,482 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:121535:34` |
| 87.7% | 4.16 GiB |   8,480 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:121549:36` |
| 85.3% | 4.04 GiB |   8,240 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:84520:35`  |
| 85.3% | 4.04 GiB |   8,239 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:84489:29`  |
| 85.2% | 4.04 GiB |   8,235 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:84589:49`  |
| 85.2% | 4.03 GiB |   8,230 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:84596:34`  |
| 85.1% | 4.03 GiB |   8,227 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:84575:29`  |
| 85.0% | 4.03 GiB |   8,213 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:84147:38`  |
| 85.0% | 4.03 GiB |   8,212 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:84138:32`  |
| 74.2% | 3.51 GiB |   7,170 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js:78748:35`  |
| 74.2% | 3.51 GiB |   7,169 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:78709:29`  |
| 71.5% | 3.39 GiB |   6,908 | `checkCallExpression`                      | `node_modules/typescript/lib/typescript.js:75579:33`  |

##### Standard library

|     % |     Size | Samples | Function                    | Location                                   |
| ----: | -------: | ------: | --------------------------- | ------------------------------------------ |
| 97.6% | 4.62 GiB |   9,428 | `processTicksAndRejections` | `node:internal/process/task_queues:72:35`  |
| 54.5% | 2.58 GiB |   5,267 | `forEach`                   | `<unknown>`                                |
|  2.4% |  118 MiB |     236 | `next`                      | `<unknown>`                                |
|  2.4% |  117 MiB |     223 | `set`                       | `<unknown>`                                |
|  1.7% | 81.1 MiB |     162 | `Map`                       | `<unknown>`                                |
|  0.9% |   44 MiB |      88 | `push`                      | `<unknown>`                                |
|  0.5% |   26 MiB |      52 | `splice`                    | `<unknown>`                                |
|  0.2% | 10.3 MiB |      19 | `toString`                  | `node:buffer:903:46`                       |
|  0.2% |   10 MiB |      20 | `join`                      | `<unknown>`                                |
|  0.2% |  8.5 MiB |      17 | `replace`                   | `<unknown>`                                |
|  0.2% | 8.17 MiB |      16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1885:37` |
|  0.2% | 8.17 MiB |      16 | `(anonymous)`               | `node:internal/modules/cjs/loader:2030:37` |
|  0.2% | 8.17 MiB |      16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1641:33` |
|  0.2% | 8.17 MiB |      16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1319:24` |
|  0.2% | 8.17 MiB |      16 | `wrapModuleLoad`            | `node:internal/modules/cjs/loader:244:24`  |
|  0.2% | 8.17 MiB |      16 | `(anonymous)`               | `node:internal/modules/cjs/loader:1671:36` |
|  0.2% | 8.17 MiB |      16 | `require`                   | `node:internal/modules/helpers:195:19`     |
|  0.1% | 7.04 MiB |      14 | `add`                       | `<unknown>`                                |
|  0.1% |  6.5 MiB |      13 | `values`                    | `<unknown>`                                |
|  0.1% |  5.5 MiB |      11 | `slice`                     | `<unknown>`                                |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 89.7% | 4.16 GiB |   8,477 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:121549:36` |
| 10.1% |  477 MiB |     952 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:120478:25` |
|  0.2% | 8.17 MiB |      16 | `require`                          | `node:internal/modules/helpers:195:19`                |
| <0.1% |    1 MiB |       2 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:36594:44`  |

##### `(anonymous)` (`heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                    |
| -----: | -------: | ------: | ------------------ | --------------------------- |
| 100.0% | 4.62 GiB |   9,430 | `typeCheckProject` | `tsc-workload.mjs:3:33`     |
|  <0.1% | 1.46 MiB |       1 | `fn`               | `node:internal/util:477:14` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location                  |
| -----: | -------: | ------: | ------------- | ------------------------- |
| 100.0% | 4.62 GiB |   9,430 | `(anonymous)` | `heapprofile-run.mjs:1:1` |

##### `processTicksAndRejections` (`node:internal/process/task_queues:72:35`)

|      % |     Size | Samples | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 4.62 GiB |   9,428 | `(anonymous)` | `<unknown>` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:52:19`)

|     % |     Size | Samples | Callee               | Location                                              |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------- |
| 90.7% | 4.02 GiB |   8,203 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:84138:32`  |
|  5.0% |  228 MiB |     456 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  3.4% |  156 MiB |     312 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |
|  1.3% |   57 MiB |     114 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122412:37` |
|  0.9% | 42.7 MiB |      85 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122558:44` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |     Size | Samples | Callee                             | Location                                              |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 96.6% | 4.03 GiB |   8,220 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:84575:29`  |
|  3.4% |  144 MiB |     287 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:121488:28` |
| <0.1% |  1.5 MiB |       3 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:121627:46` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`)

|     % |     Size | Samples | Callee                     | Location                                              |
| ----: | -------: | ------: | -------------------------- | ----------------------------------------------------- |
| 59.2% | 2.47 GiB |   5,033 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 40.8% |  1.7 GiB |   3,476 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:121587:38` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:121892:36`)

|      % |     Size | Samples | Callee                                     | Location                                              |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.17 GiB |   8,507 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:121606:54` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121603:47`)

|      % |     Size | Samples | Callee                   | Location                                              |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.17 GiB |   8,500 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:121597:43`)

|      % |     Size | Samples | Callee                              | Location                                              |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,496 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121603:47` |
|  <0.1% |  512 KiB |       1 | `getAndCacheDiagnostics`            | `node_modules/typescript/lib/typescript.js:121892:36` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |     Size | Samples | Callee                          | Location                                              |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,495 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:121597:43` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:299:19`)

|      % |     Size | Samples | Callee        | Location                                              |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,487 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |
|  <0.1% |  512 KiB |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:27`  |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:121535:34`)

|      % |     Size | Samples | Callee    | Location                                           |
| -----: | -------: | ------: | --------- | -------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,482 | `flatMap` | `node_modules/typescript/lib/typescript.js:299:19` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:121549:36`)

|      % |     Size | Samples | Callee                 | Location                                              |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.16 GiB |   8,480 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:121535:34` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:84520:35`)

|     % |     Size | Samples | Callee                       | Location                                             |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------- |
| 63.6% | 2.57 GiB |   5,243 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js:84429:32` |
| 36.2% | 1.46 GiB |   2,980 | `forEach`                    | `node_modules/typescript/lib/typescript.js:52:19`    |
|  0.2% |    7 MiB |      14 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js:84592:27` |
| <0.1% |  1.5 MiB |       3 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js:84097:40` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:84489:29`)

|      % |     Size | Samples | Callee                  | Location                                             |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 4.04 GiB |   8,239 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:84520:35` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:84589:49`)

|      % |     Size | Samples | Callee            | Location                                             |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 4.04 GiB |   8,235 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:84489:29` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:84596:34`)

|      % |     Size | Samples | Callee                                | Location                                             |
| -----: | -------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 4.03 GiB |   8,230 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:84589:49` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:84575:29`)

|      % |     Size | Samples | Callee                 | Location                                             |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 4.03 GiB |   8,227 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:84596:34` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:84147:38`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 74.0% | 2.98 GiB |   6,075 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:80896:24` |
| 62.2% | 2.51 GiB |   5,116 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:81283:38` |
| 62.2% | 2.51 GiB |   5,116 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:81301:36` |
| 20.0% |  826 MiB |   1,643 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js:81306:38` |
| 12.9% |  530 MiB |   1,057 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:79453:36` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:84138:32`)

|      % |     Size | Samples | Callee                     | Location                                             |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 4.03 GiB |   8,212 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:84147:38` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js:78748:35`)

|     % |     Size | Samples | Callee                          | Location                                             |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 96.4% | 3.39 GiB |   6,908 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js:75579:33` |
| 53.2% | 1.87 GiB |   3,816 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js:72103:32` |
| 30.9% | 1.09 GiB |   2,217 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js:71940:31` |
| 18.4% |  663 MiB |   1,322 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js:73074:43` |
|  6.9% |  247 MiB |     493 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js:78748:35` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:78709:29`)

|      % |     Size | Samples | Callee                                          | Location                                             |
| -----: | -------: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 3.51 GiB |   7,169 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js:78748:35` |
|   0.6% | 20.5 MiB |      41 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js:78499:59` |

##### `checkCallExpression` (`node_modules/typescript/lib/typescript.js:75579:33`)

|     % |     Size | Samples | Callee                     | Location                                             |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------- |
| 96.9% | 3.28 GiB |   6,697 | `getResolvedSignature`     | `node_modules/typescript/lib/typescript.js:75463:34` |
|  4.0% |  140 MiB |     279 | `getReturnTypeOfSignature` | `node_modules/typescript/lib/typescript.js:58566:38` |
|  1.1% | 39.1 MiB |      78 | `checkDeprecatedSignature` | `node_modules/typescript/lib/typescript.js:75633:38` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Callee              | Location                                             |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------- |
| 99.6% | 2.57 GiB |   5,244 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:84436:31` |
|  0.7% | 17.5 MiB |      35 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50117:23` |
|  0.4% | 10.5 MiB |      21 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49804:22` |
|  0.1% | 2.01 MiB |       4 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:47469:22` |
|  0.1% |  1.5 MiB |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:49840:34` |

##### `next` (`<unknown>`)

|     % |     Size | Samples | Callee                   | Location                                             |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------- |
| 34.4% | 40.6 MiB |      81 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:67027:37` |

##### `Map` (`<unknown>`)

|    % |     Size | Samples | Callee | Location    |
| ---: | -------: | ------: | ------ | ----------- |
| 8.6% |    7 MiB |      14 | `next` | `<unknown>` |
| 3.2% | 2.57 MiB |       5 | `set`  | `<unknown>` |

##### `replace` (`<unknown>`)

|     % |  Size | Samples | Callee        | Location                                            |
| ----: | ----: | ------: | ------------- | --------------------------------------------------- |
| 23.5% | 2 MiB |       4 | `toLowerCase` | `node_modules/typescript/lib/typescript.js:1186:23` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1885:37`)

|     % |     Size | Samples | Callee        | Location                                        |
| ----: | -------: | ------: | ------------- | ----------------------------------------------- |
| 80.7% | 6.59 MiB |      13 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:1` |
| 19.3% | 1.58 MiB |       3 | `wrapSafe`    | `node:internal/modules/cjs/loader:1824:18`      |

##### `(anonymous)` (`node:internal/modules/cjs/loader:2030:37`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.17 MiB |      16 | `(anonymous)` | `node:internal/modules/cjs/loader:1885:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1641:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.17 MiB |      16 | `(anonymous)` | `node:internal/modules/cjs/loader:2030:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1319:24`)

|      % |     Size | Samples | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 8.17 MiB |      16 | `(anonymous)`          | `node:internal/modules/cjs/loader:1641:33` |
|   6.1% |  512 KiB |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1285:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:244:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.17 MiB |      16 | `(anonymous)` | `node:internal/modules/cjs/loader:1319:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1671:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 8.17 MiB |      16 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:244:24` |

##### `require` (`node:internal/modules/helpers:195:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 8.17 MiB |      16 | `(anonymous)` | `node:internal/modules/cjs/loader:1671:36` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:121606:54`) ← `getAndCacheDiagnostics` (121892:36) ← `getBindAndCheckDiagnosticsForFile` (121603:47) ← `getSemanticDiagnosticsForFile` (121597:43) ← `(anonymous)` (121539:78) ← `flatMap` (299:19) ← `getDiagnosticsHelper` (121535:34) ← `getSemanticDiagnostics` (121549:36) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`heapprofile-run.mjs:1:1`) ← `(anonymous)` ← `processTicksAndRejections` (`node:internal/process/task_queues:72:35`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% |  145 MiB |     289 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                     |
| 1.9% | 94.4 MiB |     188 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                 |
| 1.9% | 92.9 MiB |     185 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                   |
| 1.5% | 74.8 MiB |     149 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% | 62.8 MiB |     125 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.1% | 54.2 MiB |     108 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% |   43 MiB |      86 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.8% |   38 MiB |      76 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.8% | 37.2 MiB |      74 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% | 35.1 MiB |      70 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.6% | 30.6 MiB |      61 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.6% | 29.1 MiB |      58 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.6% | 29.1 MiB |      58 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkPropertyAssignment` (78485:37) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38) |
| 0.6% | 27.1 MiB |      54 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% | 27.1 MiB |      54 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% | 26.6 MiB |      53 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 25.6 MiB |      51 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkPropertyAccessExpression` (73074:43) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionStatement` (81306:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkTryStatement` (82289:31) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                   |
| 0.5% | 23.6 MiB |      47 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromSignatures` (67751:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkObjectLiteral` (72103:32) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getWidenedTypeForVariableLikeDeclaration` (55391:54) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkVariableDeclarationList` (81294:42) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39) ← `runWithCancellationToken` (121587:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% | 21.6 MiB |      43 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:63505:32`) ← `isTypeOrBaseIdenticalTo` (67803:37) ← `inferFromMatchingTypes` (67429:38) ← `inferFromTypes` (67214:30) ← `inferFromContravariantTypesIfStrictFunctionTypes` (67461:64) ← `applyToParameterTypes` (66790:35) ← `inferFromSignature` (67763:34) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferFromProperties` (67742:35) ← `inferFromObjectTypes` (67642:36) ← `invokeOnce` (67401:26) ← `inferFromTypes` (67214:30) ← `inferTypes` (67205:24) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionForMutableLocation` (78472:47) ← `checkArrayLiteral` (71940:31) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionWithContextualType` (78355:47) ← `inferTypeArguments` (73956:32) ← `chooseOverload` (74764:30) ← `resolveCall` (74597:25) ← `resolveCallExpression` (74973:35) ← `resolveSignature` (75445:30) ← `getResolvedSignature` (75463:34) ← `checkCallExpression` (75579:33) ← `checkExpressionWorker` (78748:35) ← `checkExpression` (78709:29) ← `checkExpressionCached` (78378:35) ← `checkDeclarationInitializer` (78402:41) ← `getTypeForVariableLikeDeclaration` (54875:47) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55481:58) ← `getTypeOfSymbol` (55790:29) ← `checkVariableLikeDeclaration` (81089:42) ← `checkVariableDeclaration` (81283:38) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkVariableStatement` (81301:36) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `forEach` (52:19) ← `checkBlock` (80896:24) ← `checkSourceElementWorker` (84147:38) ← `checkSourceElement` (84138:32) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (77074:66) ← `checkDeferredNode` (84436:31) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:84429:32`) ← `checkSourceFileWorker` (84520:35) ← `checkSourceFile` (84489:29) ← `checkSourceFileWithEagerDiagnostics` (84589:49) ← `getDiagnosticsWorker` (84596:34) ← `getDiagnostics2` (84575:29) ← `(anonymous)` (121607:39)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
