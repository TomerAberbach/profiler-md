# Wall time profile

Took 16.89s over 13,495 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.7% |  14.64s |  11,699 |
| Garbage collector  | 11.4% |   1.93s |   1,542 |
| Native             |  0.9% | 151.5ms |     121 |
| Standard library   |  0.9% | 149.0ms |     119 |
| Regular expression |  0.1% |  17.5ms |      14 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 11.4% |   1.93s |   1,542 | `(garbage collector)`           | `<unknown>`                                 |
|  2.9% | 497.0ms |     397 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  2.7% | 452.0ms |     361 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 359.3ms |     287 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 350.6ms |     280 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 305.5ms |     244 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 291.7ms |     233 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 226.6ms |     181 | `some`                          | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 190.3ms |     152 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 155.2ms |     124 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 137.7ms |     110 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 130.2ms |     104 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 120.2ms |      96 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 118.9ms |      95 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 117.7ms |      94 | `getSymbolLinks`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 115.2ms |      92 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 110.2ms |      88 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 108.9ms |      87 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 103.9ms |      83 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.7ms |      82 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                    |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 2.9% | 497.0ms |     397 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
| 2.7% | 452.0ms |     361 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 359.3ms |     287 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 350.6ms |     280 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 305.5ms |     244 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |
| 1.7% | 291.7ms |     233 | `scan`                          | `node_modules/typescript/lib/typescript.js` |
| 1.3% | 226.6ms |     181 | `some`                          | `node_modules/typescript/lib/typescript.js` |
| 1.1% | 190.3ms |     152 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 155.2ms |     124 | `getNodeLinks`                  | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 137.7ms |     110 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 130.2ms |     104 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 120.2ms |      96 | `invokeOnce`                    | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 118.9ms |      95 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 117.7ms |      94 | `getSymbolLinks`                | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 115.2ms |      92 | `getPropertyOfType`             | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 110.2ms |      88 | `instantiateType`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 108.9ms |      87 | `bind`                          | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 103.9ms |      83 | `getIntersectionType`           | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 102.7ms |      82 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 101.4ms |      81 | `getMembersOfSymbol`            | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.4% | 1.93s |   1,542 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 497.0ms |     397 | `node_modules/typescript/lib/typescript.js:64383` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 452.0ms |     361 | `node_modules/typescript/lib/typescript.js:63505` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 359.3ms |     287 | `node_modules/typescript/lib/typescript.js:62119` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 350.6ms |     280 | `node_modules/typescript/lib/typescript.js:63813` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 305.5ms |     244 | `node_modules/typescript/lib/typescript.js:62354` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 291.7ms |     233 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 226.6ms |     181 | `node_modules/typescript/lib/typescript.js:468` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 190.3ms |     152 | `node_modules/typescript/lib/typescript.js:56402` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 155.2ms |     124 | `node_modules/typescript/lib/typescript.js:47543` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 137.7ms |     110 | `node_modules/typescript/lib/typescript.js:58882` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 130.2ms |     104 | `node_modules/typescript/lib/typescript.js:64597` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 120.2ms |      96 | `node_modules/typescript/lib/typescript.js:67401` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 118.9ms |      95 | `node_modules/typescript/lib/typescript.js:67214` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 117.7ms |      94 | `node_modules/typescript/lib/typescript.js:47537` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 115.2ms |      92 | `node_modules/typescript/lib/typescript.js:58110` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 110.2ms |      88 | `node_modules/typescript/lib/typescript.js:62327` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 108.9ms |      87 | `node_modules/typescript/lib/typescript.js:44000` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 103.9ms |      83 | `node_modules/typescript/lib/typescript.js:60458` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 102.7ms |      82 | `node_modules/typescript/lib/typescript.js:57866` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 101.4ms |      81 | `node_modules/typescript/lib/typescript.js:56563` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 99.0% | 492.0ms |     393 | `isRelatedTo`           | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `checkTypeRelatedTo`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `typeRelatedToSomeType` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `typeRelatedToEachType` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 97.5% | 440.7ms |     352 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.4% |   6.3ms |       5 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.6% |   2.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `inferFromMatchingTypes`                   | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.7% | 358.1ms |     286 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 55.0% | 192.8ms |     154 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 15.7% |  55.1ms |      44 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  8.2% |  28.8ms |      23 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  5.0% |  17.5ms |      14 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |
|  4.6% |  16.3ms |      13 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                       | Location                                    |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------- |
| 99.2% | 303.0ms |     242 | `instantiateTypeWithAlias`   | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getTypeOfSymbol`            | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 99.1% | 289.2ms |     231 | `nextTokenWithoutCheck`  | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `checkTypeReferenceNode` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `scanTokenAtPosition`    | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 47.0% | 106.4ms |      85 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  9.4% |  21.3ms |      17 | `isTypeReferenceWithGenericArguments`  | `node_modules/typescript/lib/typescript.js` |
|  7.7% |  17.5ms |      14 | `hasMatchingRecursionIdentity`         | `node_modules/typescript/lib/typescript.js` |
|  7.2% |  16.3ms |      13 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  5.5% |  12.5ms |      10 | `inferFromProperties`                  | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 98.7% | 187.8ms |     150 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `resolveTypeReferenceMembers` | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 29.8% | 46.3ms |      37 | `hasSkipDirectInferenceFlag`                   | `node_modules/typescript/lib/typescript.js` |
| 21.8% | 33.8ms |      27 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 15.3% | 23.8ms |      19 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
|  8.9% | 13.8ms |      11 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  6.5% | 10.0ms |       8 | `getTypeFromTypeReference`                     | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                 | Location                                    |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 61.8% | 85.1ms |      68 | `createNormalizedTypeReference`        | `node_modules/typescript/lib/typescript.js` |
| 16.4% | 22.5ms |      18 | `getTypeWithThisArgument`              | `node_modules/typescript/lib/typescript.js` |
| 10.0% | 13.8ms |      11 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  9.1% | 12.5ms |      10 | `createNormalizedTupleType`            | `node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `getTypeFromClassOrInterfaceReference` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 99.0% | 129.0ms |     103 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 120.2ms |      96 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 22.1% | 26.3ms |      21 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 16.8% | 20.0ms |      16 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 12.6% | 15.0ms |      12 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |
| 11.6% | 13.8ms |      11 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 12.5ms |      10 | `inferFromProperties`         | `node_modules/typescript/lib/typescript.js` |

##### `getSymbolLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 23.4% | 27.5ms |      22 | `getTypeOfVariableOrParameterOrProperty`   | `node_modules/typescript/lib/typescript.js` |
| 19.1% | 22.5ms |      18 | `getResolvedMembersOrExportsOfSymbol`      | `node_modules/typescript/lib/typescript.js` |
| 16.0% | 18.8ms |      15 | `instantiateSymbol`                        | `node_modules/typescript/lib/typescript.js` |
|  9.6% | 11.3ms |       9 | `getContextualTypeForObjectLiteralElement` | `node_modules/typescript/lib/typescript.js` |
|  5.3% |  6.3ms |       5 | `getVariancesWorker`                       | `node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 25.0% | 28.8ms |      23 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 22.8% | 26.3ms |      21 | `getUnmatchedProperties`                       | `node_modules/typescript/lib/typescript.js` |
| 18.5% | 21.3ms |      17 | `createUnionOrIntersectionProperty`            | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 11.3ms |       9 | `propertiesRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  8.7% | 10.0ms |       8 | `getPropertyTypeForIndexType`                  | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 48.9% | 53.8ms |      43 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 20.5% | 22.5ms |      18 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 11.4% | 12.5ms |      10 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  8.0% |  8.8ms |       7 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  5.7% |  6.3ms |       5 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 36.8% | 40.1ms |      32 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 35.6% | 38.8ms |      31 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 17.2% | 18.8ms |      15 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  4.6% |  5.0ms |       4 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:23` |
|  3.4% |  3.8ms |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42711:23` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                    |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------- |
| 75.9% | 78.9ms |      63 | `instantiateTypeWorker`           | `node_modules/typescript/lib/typescript.js` |
|  6.0% |  6.3ms |       5 | `intersectTypes`                  | `node_modules/typescript/lib/typescript.js` |
|  4.8% |  5.0ms |       4 | `getTypeWithThisArgument`         | `node_modules/typescript/lib/typescript.js` |
|  3.6% |  3.8ms |       3 | `getTypeFromIntersectionTypeNode` | `node_modules/typescript/lib/typescript.js` |
|  2.4% |  2.5ms |       2 | `instantiateTypeWithAlias`        | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                    |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------- |
| 50.0% | 51.3ms |      41 | `getSignaturesOfType`             | `node_modules/typescript/lib/typescript.js` |
| 43.9% | 45.1ms |      36 | `getPropertyOfType`               | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `getIndexInfosOfType`             | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `resolveSignature`                | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                                  | Location                                    |
| ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------- |
| 84.0% | 85.1ms |      68 | `isEmptyAnonymousObjectType`                            | `node_modules/typescript/lib/typescript.js` |
|  7.4% |  7.5ms |       6 | `getSingleBaseForNonAugmentingSubtype`                  | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `resolveObjectTypeMembers`                              | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode` | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `some`                                                  | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.4% | 14.76s |  11,797 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 87.4% | 14.76s |  11,797 | `(anonymous)`                              | `datadog-pprof.mjs`                                   |
| 87.4% | 14.76s |  11,794 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 83.4% | 14.09s |  11,261 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,239 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,238 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 75.9% | 12.81s |  10,238 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,237 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 75.8% | 12.81s |  10,235 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.8% | 12.81s |  10,233 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.8% | 12.80s |  10,231 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.1% | 12.01s |   9,595 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,592 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,591 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,591 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.0% |    12s |   9,588 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.86s |   9,475 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 83.4% | 14.09s |  11,261 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,239 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,238 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 75.9% | 12.81s |  10,238 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,237 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.9% | 12.81s |  10,236 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 75.8% | 12.81s |  10,235 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.8% | 12.81s |  10,233 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.8% | 12.80s |  10,231 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 71.1% | 12.01s |   9,595 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,592 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,591 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 71.1% |    12s |   9,591 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 71.0% |    12s |   9,588 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.86s |   9,475 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.86s |   9,474 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.9% |  9.10s |   7,270 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 53.8% |  9.09s |   7,264 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 11.4% | 1.93s |   1,542 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 86.7% |  12.80s |  10,230 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 12.3% |   1.81s |   1,453 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 112.7ms |      90 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  27.5ms |      22 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `node:internal/modules/cjs/loader`          |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 14.76s |  11,796 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  <0.1% |  1.3ms |       1 | `stop`             | `node_modules/@datadog/pprof/out/src/time-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 14.76s |  11,794 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 84.0% |  11.83s |   9,455 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  7.6% |   1.07s |     856 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  5.2% | 738.7ms |     590 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:23`  |
|  4.3% | 608.5ms |     486 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.9% | 404.4ms |     323 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.81s |  10,238 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 93.6% |     12s |   9,586 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js` |
|  6.3% | 810.0ms |     647 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   3.8ms |       3 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `assert`                           | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `skipTypeChecking`                 | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.81s |  10,237 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.81s |  10,235 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:15246:30`  |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18056:27`  |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.81s |  10,235 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.81s |  10,234 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |   Time | Samples | Callee                           | Location                                    |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------- |
| 100.0% | 12.81s |  10,235 | `getSemanticDiagnosticsForFile`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getSyntacticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.81s |  10,234 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.81s |  10,233 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.80s |  10,231 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 56.8% |  6.82s |   5,451 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 43.0% |  5.16s |   4,127 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 13.8ms |      11 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  5.0ms |       4 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getNodeLinks`               | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % | Time | Samples | Callee                  | Location                                    |
| -----: | ---: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |  12s |   9,592 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % | Time | Samples | Callee            | Location                                    |
| -----: | ---: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |  12s |   9,591 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Callee                                | Location                                    |
| -----: | ----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% |   12s |   9,589 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% | 1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % | Time | Samples | Callee                 | Location                                    |
| -----: | ---: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% |  12s |   9,587 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                      | Location                                    |
| -----: | -----: | ------: | --------------------------- | ------------------------------------------- |
| 100.0% | 11.85s |   9,472 | `checkSourceElementWorker`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `isReachableFlowNodeWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkBlock`                | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getSourceFileOfNode`       | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkTypeQuery`            | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.6% | 8.97s |   7,165 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 42.8% | 5.08s |   4,058 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 42.8% | 5.07s |   4,052 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.3% |    3s |   2,401 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 19.9% | 2.36s |   1,885 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |   9.09s |   7,263 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.3% | 120.2ms |      96 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |  26.3ms |      21 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getFreshTypeOfLiteralType`                     | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                          | Location                                    |
| ----: | ----: | ------: | ------------------------------- | ------------------------------------------- |
| 91.2% | 8.29s |   6,624 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 33.0% |    3s |   2,397 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 29.1% | 2.64s |   2,115 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 17.0% | 1.54s |   1,236 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 11.0% |    1s |     799 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.5% | 76.4ms |      61 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% | 61.3ms |      49 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                         |
| 0.3% | 51.3ms |      41 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.3% | 47.6ms |      38 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% | 45.1ms |      36 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% | 38.8ms |      31 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `hasSkipDirectInferenceFlag` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 35.1ms |      28 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% | 28.8ms |      23 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                              |
| 0.2% | 26.3ms |      21 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% | 26.3ms |      21 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                         |
| 0.2% | 26.3ms |      21 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 25.0ms |      20 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 22.5ms |      18 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 21.3ms |      17 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfObjectType` ← `getPropertiesOfType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 21.3ms |      17 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (35026:69) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (29528:77) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 18.8ms |      15 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (79468:29) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 18.8ms |      15 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1% | 17.5ms |      14 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.1% | 17.5ms |      14 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 15.0ms |      12 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`          |
