# Heap profile

Allocated 4.84 GiB over 9,843 samples (516 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 90.5% | 4.38 GiB |   8,964 |
| Standard library |  9.5% |  471 MiB |     879 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                          | Location                                                                                  |
| ----: | -------: | ------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
| 45.1% | 2.18 GiB |   4,460 | `checkTypeRelatedTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|  6.5% |  325 MiB |     649 | `isRelatedTo`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|  3.9% |  195 MiB |     390 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  2.9% |  146 MiB |     292 | `getFlowTypeOfReference`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`  |
|  2.8% |  138 MiB |     260 | `set`                             | `<unknown>`                                                                               |
|  2.1% |  105 MiB |     210 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|  1.9% |   95 MiB |     190 | `concat`                          | `<unknown>`                                                                               |
|  1.8% |   88 MiB |     176 | `Map`                             | `<unknown>`                                                                               |
|  1.1% |   53 MiB |     106 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|  1.0% | 47.6 MiB |      95 | `parseJSDocCommentWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45`  |
|  0.9% | 44.1 MiB |      88 | `inferFromObjectTypes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|  0.7% |   35 MiB |      70 | `push`                            | `<unknown>`                                                                               |
|  0.7% | 33.5 MiB |      67 | `createNodeArray`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|  0.6% | 28.5 MiB |      57 | `instantiateAnonymousType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42`  |
|  0.5% |   27 MiB |      54 | `declareSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`  |
|  0.5% |   27 MiB |      54 | `createBaseNode`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
|  0.5% | 26.5 MiB |      53 | `createPrinter`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:108110:27` |
|  0.5% | 25.5 MiB |      51 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|  0.5% |   24 MiB |      48 | `__generator`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41:58`     |
|  0.5% |   23 MiB |      46 | `instantiateSignature`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38`  |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                          | Location                                                                                  |
| ----: | -------: | ------: | --------------------------------- | ----------------------------------------------------------------------------------------- |
| 45.1% | 2.18 GiB |   4,460 | `checkTypeRelatedTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
|  6.5% |  325 MiB |     649 | `isRelatedTo`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
|  3.9% |  195 MiB |     390 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  2.9% |  146 MiB |     292 | `getFlowTypeOfReference`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`  |
|  2.1% |  105 MiB |     210 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
|  1.1% |   53 MiB |     106 | `structuredTypeRelatedToWorker`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
|  1.0% | 47.6 MiB |      95 | `parseJSDocCommentWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45`  |
|  0.9% | 44.1 MiB |      88 | `inferFromObjectTypes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`  |
|  0.7% | 33.5 MiB |      67 | `createNodeArray`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`  |
|  0.6% | 28.5 MiB |      57 | `instantiateAnonymousType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42`  |
|  0.5% |   27 MiB |      54 | `declareSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`  |
|  0.5% |   27 MiB |      54 | `createBaseNode`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`  |
|  0.5% | 26.5 MiB |      53 | `createPrinter`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:108110:27` |
|  0.5% | 25.5 MiB |      51 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`  |
|  0.5% |   24 MiB |      48 | `__generator`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41:58`     |
|  0.5% |   23 MiB |      46 | `instantiateSignature`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38`  |
|  0.5% |   23 MiB |      46 | `instantiateTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34`  |
|  0.4% |   22 MiB |      44 | `signaturesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`  |
|  0.4% | 21.5 MiB |      43 | `propertiesRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41`  |
|  0.4% | 21.5 MiB |      43 | `(anonymous)`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74`  |

##### Standard library

|     % |     Size | Samples | Function              | Location                                   |
| ----: | -------: | ------: | --------------------- | ------------------------------------------ |
|  2.8% |  138 MiB |     260 | `set`                 | `<unknown>`                                |
|  1.9% |   95 MiB |     190 | `concat`              | `<unknown>`                                |
|  1.8% |   88 MiB |     176 | `Map`                 | `<unknown>`                                |
|  0.7% |   35 MiB |      70 | `push`                | `<unknown>`                                |
|  0.4% | 19.5 MiB |      39 | `splice`              | `<unknown>`                                |
|  0.4% | 19.5 MiB |       2 | `readFileSync`        | `node:fs:433:22`                           |
|  0.3% | 14.2 MiB |      21 | `slice`               | `node:buffer:640:12`                       |
|  0.2% |   12 MiB |      24 | `slice`               | `<unknown>`                                |
|  0.2% |   10 MiB |      20 | `join`                | `<unknown>`                                |
|  0.2% |    9 MiB |      18 | `next`                | `<unknown>`                                |
|  0.1% |    7 MiB |      14 | `replace`             | `<unknown>`                                |
|  0.1% |    4 MiB |       8 | `assign`              | `<unknown>`                                |
|  0.1% |    4 MiB |       8 | `getStatsFromBinding` | `node:internal/fs/utils:552:29`            |
|  0.1% | 2.52 MiB |       5 | `wrapSafe`            | `node:internal/modules/cjs/loader:1671:18` |
| <0.1% |    2 MiB |       4 | `split`               | `<unknown>`                                |
| <0.1% | 1.25 MiB |       1 | `post`                | `node:inspector:118:7`                     |
| <0.1% | 1.02 MiB |       2 | `add`                 | `<unknown>`                                |
| <0.1% |    1 MiB |       2 | `startsWith`          | `<unknown>`                                |
| <0.1% |    1 MiB |       2 | `values`              | `<unknown>`                                |
| <0.1% |    1 MiB |       2 | `map`                 | `<unknown>`                                |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |     Size | Samples | Caller                           | Location                                                                                 |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 82.5% |  1.8 GiB |   3,679 | `isTypeOrBaseIdenticalTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
| 11.0% |  246 MiB |     491 | `isTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  3.9% | 87.2 MiB |     174 | `isTypeAssignableTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62171:36` |
|  0.8% |   17 MiB |      34 | `isTypeIdenticalTo`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62156:35` |
|  0.7% |   15 MiB |      30 | `getSignatureApplicabilityError` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |     Size | Samples | Caller                  | Location                                                                                 |
| ----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 30.4% | 98.5 MiB |     197 | `isIdenticalTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
| 28.8% | 93.5 MiB |     187 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 24.3% |   79 MiB |     158 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  6.3% | 20.5 MiB |      41 | `isRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
|  2.3% |  7.5 MiB |      15 | `eachTypeRelatedToType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63713:43` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Size | Samples | Caller                  | Location                                                                                 |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 195 MiB |     390 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `getFlowTypeOfReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`)

|     % |     Size | Samples | Caller                          | Location                                                                                 |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 55.8% | 81.7 MiB |     163 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
| 37.7% | 55.1 MiB |     110 | `getFlowTypeOfAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72820:47` |
|  6.5% | 9.51 MiB |      19 | `tryGetThisTypeAt`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70063:34` |

##### `set` (`<unknown>`)

|     % |     Size | Samples | Caller                                   | Location                                                                                 |
| ----: | -------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 17.0% | 23.5 MiB |      47 | `addInheritedMembers`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56122:37` |
| 16.3% | 22.5 MiB |      45 | `resolveObjectTypeMembers`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
| 11.2% | 15.5 MiB |      31 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57225:56` |
| 10.9% | 15.1 MiB |      17 | `recursiveTypeRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 10.5% | 14.5 MiB |      29 | `createInstantiatedSymbolTable`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Size | Samples | Caller          | Location                                                                                 |
| ----: | -----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 65.7% | 69 MiB |     138 | `isRelatedTo`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 34.3% | 36 MiB |      72 | `isIdenticalTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |

##### `concat` (`<unknown>`)

|     % |    Size | Samples | Caller                       | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 84.2% |  80 MiB |     160 | `recursiveTypeRelatedTo`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  6.8% | 6.5 MiB |      13 | `getRelationKey`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  3.2% |   3 MiB |       6 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  1.6% | 1.5 MiB |       3 | `concatenate`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`   |
|  1.6% | 1.5 MiB |       3 | `__spreadArray`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:17:62`    |

##### `Map` (`<unknown>`)

|     % |     Size | Samples | Caller                          | Location                                                                                 |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 43.7% | 38.5 MiB |      77 | `createSymbolTable`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14101:31` |
| 15.9% |   14 MiB |      28 | `getIntersectionType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
|  8.0% |    7 MiB |      14 | `bindContainer`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43814:31` |
|  8.0% |    7 MiB |      14 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
|  6.2% |  5.5 MiB |      11 | `declareSymbol`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |   Size | Samples | Caller                    | Location                                                                                 |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 66.0% | 35 MiB |      70 | `recursiveTypeRelatedTo`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 34.0% | 18 MiB |      36 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `parseJSDocCommentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45`)

|     % |     Size | Samples | Caller            | Location                                                                                 |
| ----: | -------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 81.1% | 38.6 MiB |      77 | `addJSDocComment` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30888:33` |
| 18.9% |    9 MiB |      18 | `(anonymous)`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36600:79` |

##### `inferFromObjectTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67171:42`)

|      % |     Size | Samples | Caller       | Location                                                                                 |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 44.1 MiB |      88 | `invokeOnce` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |

##### `push` (`<unknown>`)

|     % |     Size | Samples | Caller                       | Location                                                                                 |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 41.4% | 14.5 MiB |      29 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 14.3% |    5 MiB |      10 | `parseUnionTypeOrHigher`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33293:40` |
| 11.4% |    4 MiB |       8 | `arrayFrom`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23`  |
|  4.3% |  1.5 MiB |       3 | `getImmediateBaseConstraint` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57434:48` |
|  4.3% |  1.5 MiB |       3 | `pushTypeResolution`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:54131:36` |

##### `createNodeArray` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31475:33`)

|     % |    Size | Samples | Caller                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 53.7% |  18 MiB |      36 | `parseDelimitedList`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:32208:36` |
| 16.4% | 5.5 MiB |      11 | `parseList`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31892:27` |
| 14.9% |   5 MiB |      10 | `parseModifiers`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:35912:32` |
| 11.9% |   4 MiB |       8 | `parseUnionTypeOrHigher` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:33293:40` |
|  1.5% | 512 KiB |       1 | `(anonymous)`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |

##### `instantiateAnonymousType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42`)

|     % |     Size | Samples | Caller                       | Location                                                                                 |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 82.5% | 23.5 MiB |      47 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 12.3% |  3.5 MiB |       7 | `instantiateMappedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |
|  5.3% |  1.5 MiB |       3 | `(anonymous)`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61850:90` |

##### `declareSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31`)

|     % |    Size | Samples | Caller                             | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| 35.2% | 9.5 MiB |      19 | `bindParameter`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46296:31` |
| 33.3% |   9 MiB |      18 | `declareSymbolAndAddToSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44993:50` |
| 14.8% |   4 MiB |       8 | `declareModuleMember`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43747:37` |
|  9.3% | 2.5 MiB |       5 | `bindBlockScopedDeclaration`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45179:44` |
|  3.7% |   1 MiB |       2 | `declareSourceFileMember`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45053:41` |

##### `createBaseNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38`)

|     % |    Size | Samples | Caller                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 29.6% |   8 MiB |      16 | `createBaseNode`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22089:32` |
| 20.4% | 5.5 MiB |      11 | `createBaseSignatureDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22141:48` |
| 16.7% | 4.5 MiB |       9 | `createBaseNamedDeclaration`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:22107:44` |
| 13.0% | 3.5 MiB |       7 | `createUnionTypeNode`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:23015:37` |
|  7.4% |   2 MiB |       4 | `createBaseExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:23253:38` |

##### `createPrinter` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:108110:27`)

|     % |     Size | Samples | Caller                    | Location                                                                                 |
| ----: | -------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 96.2% | 25.5 MiB |      51 | `typeToString`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50900:30` |
|  3.8% |    1 MiB |       2 | `signatureToStringWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50885:45` |

##### `getConditionalTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`)

|      % |     Size | Samples | Caller                  | Location                                                                                 |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 25.5 MiB |      51 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `__generator` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41:58`)

|     % |     Size | Samples | Caller                   | Location                                                                                 |
| ----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 89.6% | 21.5 MiB |      43 | `propertiesRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 10.4% |  2.5 MiB |       5 | `getUnmatchedProperties` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66492:40` |

##### `instantiateSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61688:38`)

|     % |    Size | Samples | Caller                         | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 56.5% |  13 MiB |      26 | `instantiateList`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |
| 30.4% |   7 MiB |      14 | `resolveAnonymousTypeMembers`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56847:45` |
|  6.5% | 1.5 MiB |       3 | `createErasedSignature`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58398:39` |
|  2.2% | 512 KiB |       1 | `createSignatureInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58387:46` |
|  2.2% | 512 KiB |       1 | `chooseOverload`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74299:36` |

##### `instantiateTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34`)

|     % |    Size | Samples | Caller                       | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 91.3% |  21 MiB |      42 | `instantiateTypeWorker`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|  4.3% |   1 MiB |       2 | `getConditionalType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |
|  2.2% | 512 KiB |       1 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  2.2% | 512 KiB |       1 | `instantiateAnonymousType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61919:42` |

##### `signaturesRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`)

|      % |   Size | Samples | Caller                          | Location                                                                                 |
| -----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 22 MiB |      44 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `propertiesRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41`)

|      % |     Size | Samples | Caller                          | Location                                                                                 |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 21.5 MiB |      43 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74`)

|     % |    Size | Samples | Caller                    | Location                                                                                 |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 83.7% |  18 MiB |      36 | `parseJSDocCommentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36627:45` |
| 16.3% | 3.5 MiB |       7 | `scanRange`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12054:27` |

##### `splice` (`<unknown>`)

|     % |    Size | Samples | Caller              | Location                                                                                 |
| ----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 35.9% |   7 MiB |      14 | `getUnionType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59698:30` |
| 20.5% |   4 MiB |       8 | `reorderCandidates` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73350:35` |
| 20.5% |   4 MiB |       8 | `addTypesToUnion`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59570:33` |
| 12.8% | 2.5 MiB |       5 | `addTypeToUnion`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59542:32` |
|  5.1% |   1 MiB |       2 | `resolveCall`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29` |

##### `readFileSync` (`node:fs:433:22`)

|     % |    Size | Samples | Caller            | Location                                                                                |
| ----: | ------: | ------: | ----------------- | --------------------------------------------------------------------------------------- |
| 97.4% |  19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25`                                              |
|  2.6% | 512 KiB |       1 | `readFileWorker`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36` |

##### `slice` (`node:buffer:640:12`)

|      % |     Size | Samples | Caller     | Location             |
| -----: | -------: | ------: | ---------- | -------------------- |
| 100.0% | 14.2 MiB |      21 | `toString` | `node:buffer:839:46` |

##### `slice` (`<unknown>`)

|     % |    Size | Samples | Caller               | Location                                                                                 |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 41.7% |   5 MiB |      10 | `concatenate`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`   |
| 16.7% |   2 MiB |       4 | `filter`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
| 12.5% | 1.5 MiB |       3 | `instantiateTypes`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61608:34` |
|  8.3% |   1 MiB |       2 | `extractTypesOfKind` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68153:36` |
|  8.3% |   1 MiB |       2 | `addRange`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`  |

##### `join` (`<unknown>`)

|     % |    Size | Samples | Caller                      | Location                                                                                 |
| ----: | ------: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 70.0% |   7 MiB |      14 | `(anonymous)`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |
| 25.0% | 2.5 MiB |       5 | `parseTagComments`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36891:42` |
|  5.0% | 512 KiB |       1 | `getPathFromPathComponents` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6254:39`  |

##### `next` (`<unknown>`)

|     % |    Size | Samples | Caller                | Location                                                                                 |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 38.9% | 3.5 MiB |       7 | `Map`                 | `<unknown>`                                                                              |
| 33.3% |   3 MiB |       6 | `getIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 27.8% | 2.5 MiB |       5 | `arrayFrom`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23`  |

##### `replace` (`<unknown>`)

|     % |    Size | Samples | Caller                 | Location                                                                                  |
| ----: | ------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 50.0% | 3.5 MiB |       7 | `toFileNameLowerCase`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1766:33`   |
| 42.9% |   3 MiB |       6 | `getCanonicalFileName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115642:38` |
|  7.1% | 512 KiB |       1 | `formatStringFromArgs` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19606:34`  |

##### `assign` (`<unknown>`)

|     % |    Size | Samples | Caller                                | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| 87.5% | 3.5 MiB |       7 | `wrapSymbolTrackerToReportForContext` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |
| 12.5% | 512 KiB |       1 | `getTrailingSemicolonDeferringWriter` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:18018:49` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|     % |  Size | Samples | Caller                  | Location                                                                                |
| ----: | ----: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| 50.0% | 2 MiB |       4 | `statSync`              | `node:fs:1745:18`                                                                       |
| 25.0% | 1 MiB |       2 | `fileSystemEntryExists` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |
| 25.0% | 1 MiB |       2 | `directoryExists`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7988:37` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |     Size | Samples | Caller        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 2.52 MiB |       5 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `split` (`<unknown>`)

|     % |    Size | Samples | Caller           | Location                                                                                |
| ----: | ------: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 75.0% | 1.5 MiB |       3 | `pathComponents` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6202:28` |
| 25.0% | 512 KiB |       1 | `containsPath`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6523:26` |

##### `post` (`node:inspector:118:7`)

|      % |     Size | Samples | Caller        | Location                    |
| -----: | -------: | ------: | ------------- | --------------------------- |
| 100.0% | 1.25 MiB |       1 | `(anonymous)` | `node:internal/util:477:24` |

##### `add` (`<unknown>`)

|      % |     Size | Samples | Caller          | Location                                                                                 |
| -----: | -------: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.02 MiB |       2 | `declareSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31` |

##### `startsWith` (`<unknown>`)

|      % |  Size | Samples | Caller                   | Location                                                                                 |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `values` (`<unknown>`)

|      % |  Size | Samples | Caller                | Location                                                                                 |
| -----: | ----: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `getIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |

##### `map` (`<unknown>`)

|      % |  Size | Samples | Caller           | Location                                                                                  |
| -----: | ----: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1 MiB |       2 | `getModuleNames` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:116613:28` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 96.6% | 4.68 GiB |   9,506 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                   |
| 96.6% | 4.68 GiB |   9,503 | `(anonymous)`                              | `heapprofile-run.mjs:1:1`                                                                 |
| 96.5% | 4.68 GiB |   9,500 | `(anonymous)`                              | `<unknown>`                                                                               |
| 87.5% | 4.24 GiB |   8,655 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 87.5% | 4.24 GiB |   8,652 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 87.4% | 4.24 GiB |   8,643 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 87.4% | 4.23 GiB |   8,639 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 87.3% | 4.23 GiB |   8,634 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 87.3% | 4.23 GiB |   8,631 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 87.3% | 4.23 GiB |   8,628 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 87.3% | 4.23 GiB |   8,626 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 87.2% | 4.22 GiB |   8,621 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 87.2% | 4.22 GiB |   8,618 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 84.9% | 4.11 GiB |   8,391 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 84.9% | 4.11 GiB |   8,389 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 84.7% |  4.1 GiB |   8,375 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 84.5% |  4.1 GiB |   8,356 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 84.5% | 4.09 GiB |   8,353 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 84.4% | 4.09 GiB |   8,346 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 75.2% | 3.65 GiB |   7,433 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |

#### Categories

##### Third-party

|     % |     Size | Samples | Function                                   | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 87.5% | 4.24 GiB |   8,655 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 87.5% | 4.24 GiB |   8,652 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 87.4% | 4.24 GiB |   8,643 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 87.4% | 4.23 GiB |   8,639 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 87.3% | 4.23 GiB |   8,634 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 87.3% | 4.23 GiB |   8,631 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 87.3% | 4.23 GiB |   8,628 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 87.3% | 4.23 GiB |   8,626 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 87.2% | 4.22 GiB |   8,621 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 87.2% | 4.22 GiB |   8,618 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 84.9% | 4.11 GiB |   8,391 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 84.9% | 4.11 GiB |   8,389 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 84.7% |  4.1 GiB |   8,375 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 84.5% |  4.1 GiB |   8,356 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 84.5% | 4.09 GiB |   8,353 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 84.4% | 4.09 GiB |   8,346 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 75.2% | 3.65 GiB |   7,433 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 72.8% | 3.53 GiB |   7,200 | `checkTypeRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 72.6% | 3.52 GiB |   7,175 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 70.2% |  3.4 GiB |   6,942 | `checkCallExpression`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |

##### Standard library

|     % |     Size | Samples | Function          | Location                                   |
| ----: | -------: | ------: | ----------------- | ------------------------------------------ |
| 55.3% | 2.68 GiB |   5,464 | `forEach`         | `<unknown>`                                |
|  2.8% |  138 MiB |     260 | `set`             | `<unknown>`                                |
|  1.9% |   95 MiB |     190 | `concat`          | `<unknown>`                                |
|  1.9% |   94 MiB |     188 | `Map`             | `<unknown>`                                |
|  0.7% |   35 MiB |      70 | `push`            | `<unknown>`                                |
|  0.6% | 28.1 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1878:37` |
|  0.6% | 28.1 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1490:33` |
|  0.6% | 28.1 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1193:24` |
|  0.6% | 28.1 MiB |      19 | `wrapModuleLoad`  | `node:internal/modules/cjs/loader:237:24`  |
|  0.6% | 28.1 MiB |      19 | `(anonymous)`     | `node:internal/modules/cjs/loader:1519:36` |
|  0.6% | 28.1 MiB |      19 | `require`         | `node:internal/modules/helpers:146:19`     |
|  0.4% |   20 MiB |       3 | `readFileSync`    | `node:fs:433:22`                           |
|  0.4% | 19.5 MiB |      39 | `splice`          | `<unknown>`                                |
|  0.4% |   19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |
|  0.4% |   19 MiB |       1 | `loadSource`      | `node:internal/modules/cjs/loader:1797:20` |
|  0.3% | 14.7 MiB |      22 | `toString`        | `node:buffer:839:46`                       |
|  0.3% | 14.2 MiB |      21 | `slice`           | `node:buffer:640:12`                       |
|  0.2% |   12 MiB |      24 | `slice`           | `<unknown>`                                |
|  0.2% |   10 MiB |      20 | `join`            | `<unknown>`                                |
|  0.2% | 9.09 MiB |      18 | `(anonymous)`     | `node:internal/modules/cjs/loader:1731:37` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |     Size | Samples | Callee                             | Location                                                                                  |
| ----: | -------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 90.2% | 4.22 GiB |   8,616 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|  9.1% |  437 MiB |     866 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  0.6% | 28.1 MiB |      19 | `require`                          | `node:internal/modules/helpers:146:19`                                                    |
|  0.1% |  2.5 MiB |       5 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `(anonymous)` (`heapprofile-run.mjs:1:1`)

|      % |     Size | Samples | Callee             | Location                    |
| -----: | -------: | ------: | ------------------ | --------------------------- |
| 100.0% | 4.68 GiB |   9,502 | `typeCheckProject` | `tsc-workload.mjs:3:33`     |
|  <0.1% | 1.25 MiB |       1 | `fn`               | `node:internal/util:476:14` |

##### `(anonymous)` (`<unknown>`)

|      % |     Size | Samples | Callee        | Location                  |
| -----: | -------: | ------: | ------------- | ------------------------- |
| 100.0% | 4.68 GiB |   9,500 | `(anonymous)` | `heapprofile-run.mjs:1:1` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |     Size | Samples | Callee                               | Location                                                                                  |
| ----: | -------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 96.0% | 4.07 GiB |   8,307 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  4.0% |  174 MiB |     347 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
| <0.1% |  512 KiB |       1 | `getMergedBindAndCheckDiagnostics`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |     Size | Samples | Callee        | Location                                                                                  |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.24 GiB |   8,652 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |     Size | Samples | Callee                     | Location                                                                                  |
| -----: | -------: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,642 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |     Size | Samples | Callee                                     | Location                                                                                  |
| -----: | -------: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,639 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |     Size | Samples | Callee                   | Location                                                                                  |
| -----: | -------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,634 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |     Size | Samples | Callee                              | Location                                                                                  |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,630 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|  <0.1% |  512 KiB |       1 | `getProgramDiagnostics`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114675:39` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |     Size | Samples | Callee                          | Location                                                                                  |
| -----: | -------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,628 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |     Size | Samples | Callee        | Location                                                                                  |
| -----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.23 GiB |   8,626 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |     Size | Samples | Callee    | Location                                                                               |
| -----: | -------: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.22 GiB |   8,621 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |     Size | Samples | Callee                 | Location                                                                                  |
| -----: | -------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.22 GiB |   8,618 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |     Size | Samples | Callee                      | Location                                                                                 |
| ----: | -------: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 73.9% | 3.04 GiB |   6,199 | `checkBlock`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 62.1% | 2.56 GiB |   5,213 | `checkVariableDeclaration`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 62.1% | 2.56 GiB |   5,213 | `checkVariableStatement`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 18.2% |  765 MiB |   1,528 | `checkExpressionStatement`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80548:42` |
|  9.8% |  413 MiB |     824 | `checkTypeAliasDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:82465:43` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|      % |     Size | Samples | Callee                     | Location                                                                                 |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.11 GiB |   8,389 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |     Size | Samples | Callee                       | Location                                                                                 |
| ----: | -------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 64.9% | 2.66 GiB |   5,438 | `checkDeferredNodes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 35.0% | 1.43 GiB |   2,925 | `forEach`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.1% |    5 MiB |      10 | `checkUnusedIdentifiers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
| <0.1% |  514 KiB |       1 | `checkExternalModuleExports` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83279:44` |
| <0.1% |  512 KiB |       1 | `getNodeLinks`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028:30` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |    Size | Samples | Callee                  | Location                                                                                 |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.1 GiB |   8,356 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |     Size | Samples | Callee            | Location                                                                                 |
| -----: | -------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,353 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |     Size | Samples | Callee                 | Location                                                                                 |
| -----: | -------: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.09 GiB |   8,346 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |     Size | Samples | Callee               | Location                                                                                  |
| ----: | -------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 90.3% | 3.29 GiB |   6,719 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  6.3% |  235 MiB |     468 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  2.7% |  101 MiB |     195 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113932:54` |
|  2.6% | 98.7 MiB |     197 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  1.3% | 49.6 MiB |      99 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115622:62` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |     Size | Samples | Callee        | Location                                                                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 45.6% | 1.61 GiB |   3,281 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |     Size | Samples | Callee                          | Location                                                                                 |
| ----: | -------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 96.7% |  3.4 GiB |   6,942 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 51.8% | 1.82 GiB |   3,717 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 31.1% | 1.09 GiB |   2,235 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
| 15.2% |  548 MiB |   1,090 | `checkExpressionWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |
|  7.2% |  258 MiB |     510 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |

##### `checkCallExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`)

|     % |     Size | Samples | Callee                     | Location                                                                                 |
| ----: | -------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 47.6% | 1.62 GiB |   3,305 | `resolveSignature`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74959:34` |
| 33.0% | 1.12 GiB |   2,289 | `getResolvedSignature`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38` |
| 17.6% |  615 MiB |   1,227 | `resolveCallExpression`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
|  2.5% | 88.6 MiB |     177 | `getReturnTypeOfSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  1.1% | 38.5 MiB |      77 | `checkDeprecatedSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75174:42` |

##### `forEach` (`<unknown>`)

|     % |     Size | Samples | Callee              | Location                                                                                 |
| ----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 99.6% | 2.67 GiB |   5,442 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  0.7% |   19 MiB |      38 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|  0.4% |   10 MiB |      20 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |
|  0.1% |  2.5 MiB |       5 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47943:37` |

##### `Map` (`<unknown>`)

|    % |     Size | Samples | Callee | Location    |
| ---: | -------: | ------: | ------ | ----------- |
| 3.7% |  3.5 MiB |       7 | `next` | `<unknown>` |
| 2.7% | 2.51 MiB |       5 | `set`  | `<unknown>` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |     Size | Samples | Callee        | Location                                   |
| ----: | -------: | ------: | ------------- | ------------------------------------------ |
| 67.6% |   19 MiB |       1 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |
| 32.4% | 9.09 MiB |      18 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 28.1 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |     Size | Samples | Callee                 | Location                                   |
| -----: | -------: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 28.1 MiB |      19 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   1.8% |  512 KiB |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 28.1 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |     Size | Samples | Callee           | Location                                  |
| -----: | -------: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 28.1 MiB |      19 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |     Size | Samples | Callee        | Location                                   |
| -----: | -------: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 28.1 MiB |      19 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `readFileSync` (`node:fs:433:22`)

|    % |    Size | Samples | Callee            | Location         |
| ---: | ------: | ------: | ----------------- | ---------------- |
| 2.5% | 512 KiB |       1 | `tryCreateBuffer` | `node:fs:397:25` |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |   Size | Samples | Callee         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 19 MiB |       1 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |   Size | Samples | Callee            | Location                                   |
| -----: | -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 19 MiB |       1 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `toString` (`node:buffer:839:46`)

|     % |     Size | Samples | Callee  | Location             |
| ----: | -------: | ------: | ------- | -------------------- |
| 96.6% | 14.2 MiB |      21 | `slice` | `node:buffer:640:12` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |     Size | Samples | Callee        | Location                                                                            |
| ----: | -------: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 72.3% | 6.57 MiB |      13 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |
| 27.7% | 2.52 MiB |       5 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`                                          |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← `(anonymous)` (`heapprofile-run.mjs:1:1`) ← `(anonymous)`

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% |  102 MiB |     203 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                            |
| 1.5% | 73.2 MiB |     146 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.3% | 63.7 MiB |     127 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                               |
| 1.3% | 62.2 MiB |     124 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) |
| 1.1% | 54.1 MiB |     108 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                  |
| 1.0% | 50.1 MiB |     100 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                    |
| 0.7% | 33.1 MiB |      66 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.6% | 31.6 MiB |      63 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.6% | 30.6 MiB |      61 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% | 27.1 MiB |      54 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.5% | 23.1 MiB |      46 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkTryStatement` (81627:35) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                               |
| 0.5% | 22.6 MiB |      45 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.4% | 22.1 MiB |      44 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkTryStatement` (81627:35) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                              |
| 0.4% |   22 MiB |      44 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 20.6 MiB |      41 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 20.6 MiB |      41 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% | 20.5 MiB |      41 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                            |
| 0.4% | 20.1 MiB |      40 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.4% | 20.1 MiB |      40 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
