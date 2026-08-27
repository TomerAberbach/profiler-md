# Wall time profile

Took 16.15s over 12,875 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 86.1% |  13.91s |  11,089 |
| Garbage collector  | 12.0% |   1.93s |   1,539 |
| Native             |  0.9% | 140.6ms |     112 |
| Standard library   |  0.8% | 133.0ms |     106 |
| Regular expression |  0.2% |  35.1ms |      28 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                       | Location                                    |
| ----: | ------: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 12.0% |   1.93s |   1,539 | `(garbage collector)`                          | `<unknown>`                                 |
|  3.0% | 492.0ms |     392 | `recursiveTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js` |
|  2.9% | 471.9ms |     376 | `checkTypeRelatedTo`                           | `node_modules/typescript/lib/typescript.js` |
|  2.3% | 376.5ms |     300 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 317.5ms |     253 | `isRelatedTo`                                  | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 292.4ms |     233 | `instantiateTypeWorker`                        | `node_modules/typescript/lib/typescript.js` |
|  1.4% | 230.9ms |     184 | `scan`                                         | `node_modules/typescript/lib/typescript.js` |
|  1.2% | 189.5ms |     151 | `some`                                         | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 173.2ms |     138 | `createInstantiatedSymbolTable`                | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 148.1ms |     118 | `inferFromTypes`                               | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 143.1ms |     114 | `getNodeLinks`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 136.8ms |     109 | `bind`                                         | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 135.5ms |     108 | `createTypeReference`                          | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 125.5ms |     100 | `structuredTypeRelatedToWorker`                | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 119.2ms |      95 | `invokeOnce`                                   | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 109.2ms |      87 | `getMembersOfSymbol`                           | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 101.7ms |      81 | `getReducedApparentType`                       | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 101.7ms |      81 | `bindWorker`                                   | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 100.4ms |      80 | `getPropertyOfType`                            | `node_modules/typescript/lib/typescript.js` |
|  0.6% |  94.1ms |      75 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                                       | Location                                    |
| ---: | ------: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 3.0% | 492.0ms |     392 | `recursiveTypeRelatedTo`                       | `node_modules/typescript/lib/typescript.js` |
| 2.9% | 471.9ms |     376 | `checkTypeRelatedTo`                           | `node_modules/typescript/lib/typescript.js` |
| 2.3% | 376.5ms |     300 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 317.5ms |     253 | `isRelatedTo`                                  | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 292.4ms |     233 | `instantiateTypeWorker`                        | `node_modules/typescript/lib/typescript.js` |
| 1.4% | 230.9ms |     184 | `scan`                                         | `node_modules/typescript/lib/typescript.js` |
| 1.2% | 189.5ms |     151 | `some`                                         | `node_modules/typescript/lib/typescript.js` |
| 1.1% | 173.2ms |     138 | `createInstantiatedSymbolTable`                | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 148.1ms |     118 | `inferFromTypes`                               | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 143.1ms |     114 | `getNodeLinks`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 136.8ms |     109 | `bind`                                         | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 135.5ms |     108 | `createTypeReference`                          | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 125.5ms |     100 | `structuredTypeRelatedToWorker`                | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 119.2ms |      95 | `invokeOnce`                                   | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 109.2ms |      87 | `getMembersOfSymbol`                           | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 101.7ms |      81 | `getReducedApparentType`                       | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 101.7ms |      81 | `bindWorker`                                   | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 100.4ms |      80 | `getPropertyOfType`                            | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  94.1ms |      75 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  92.9ms |      74 | `instantiateList`                              | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.0% | 1.93s |   1,539 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 492.0ms |     392 | `node_modules/typescript/lib/typescript.js:64383` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 471.9ms |     376 | `node_modules/typescript/lib/typescript.js:63505` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 376.5ms |     300 | `node_modules/typescript/lib/typescript.js:62119` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 317.5ms |     253 | `node_modules/typescript/lib/typescript.js:63813` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 292.4ms |     233 | `node_modules/typescript/lib/typescript.js:62354` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 230.9ms |     184 | `node_modules/typescript/lib/typescript.js:10327` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 189.5ms |     151 | `node_modules/typescript/lib/typescript.js:468` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 173.2ms |     138 | `node_modules/typescript/lib/typescript.js:56402` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 148.1ms |     118 | `node_modules/typescript/lib/typescript.js:67214` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 143.1ms |     114 | `node_modules/typescript/lib/typescript.js:47543` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 136.8ms |     109 | `node_modules/typescript/lib/typescript.js:44000` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 135.5ms |     108 | `node_modules/typescript/lib/typescript.js:58882` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 125.5ms |     100 | `node_modules/typescript/lib/typescript.js:64597` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 119.2ms |      95 | `node_modules/typescript/lib/typescript.js:67401` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 109.2ms |      87 | `node_modules/typescript/lib/typescript.js:56563` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 101.7ms |      81 | `node_modules/typescript/lib/typescript.js:57866` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 101.7ms |      81 | `node_modules/typescript/lib/typescript.js:44063` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 100.4ms |      80 | `node_modules/typescript/lib/typescript.js:58110` |

##### `checkPropertyAccessExpressionOrQualifiedName` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 94.1ms |      75 | `node_modules/typescript/lib/typescript.js:73206` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 92.9ms |      74 | `node_modules/typescript/lib/typescript.js:61957` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 99.2% | 488.2ms |     389 | `isRelatedTo`        | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `isRelatedToWorker2` | `node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 97.3% | 459.3ms |     366 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.3% |   6.3ms |       5 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `inferFromMatchingTypes`                   | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `chooseOverload`                           | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 98.7% | 371.5ms |     296 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  1.3% |   5.0ms |       4 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 55.7% | 177.0ms |     141 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 15.0% |  47.7ms |      38 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  9.9% |  31.4ms |      25 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  6.3% |  20.1ms |      16 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |
|  4.7% |  15.1ms |      12 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 98.3% | 287.4ms |     229 | `instantiateTypeWithAlias`    | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                           | Location                                    |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------- |
| 98.4% | 227.2ms |     181 | `nextTokenWithoutCheck`          | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   2.5ms |       2 | `speculationHelper`              | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                 | Location                                    |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 44.4% | 84.1ms |      67 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 12.6% | 23.8ms |      19 | `isTypeReferenceWithGenericArguments`  | `node_modules/typescript/lib/typescript.js` |
|  7.9% | 15.1ms |      12 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  4.6% |  8.8ms |       7 | `inferFromProperties`                  | `node_modules/typescript/lib/typescript.js` |
|  4.0% |  7.5ms |       6 | `hasMatchingRecursionIdentity`         | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 97.1% | 168.2ms |     134 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  2.9% |   5.0ms |       4 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 18.6% | 27.6ms |      22 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
| 15.3% | 22.6ms |      18 | `inferFromProperties`         | `node_modules/typescript/lib/typescript.js` |
| 15.3% | 22.6ms |      18 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 21.3ms |      17 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 11.0% | 16.3ms |      13 | `inferTypes`                  | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 31.6% | 45.2ms |      36 | `hasSkipDirectInferenceFlag`                   | `node_modules/typescript/lib/typescript.js` |
| 18.4% | 26.4ms |      21 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 14.0% | 20.1ms |      16 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 15.1ms |      12 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  6.1% |  8.8ms |       7 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 39.4% | 54.0ms |      43 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 32.1% | 43.9ms |      35 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 13.8% | 18.8ms |      15 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  8.3% | 11.3ms |       9 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:42712:23` |
|  1.8% |  2.5ms |       2 | `visitNodes`        | `node_modules/typescript/lib/typescript.js`          |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 64.8% | 87.8ms |      70 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js` |
| 15.7% | 21.3ms |      17 | `getTypeWithThisArgument`       | `node_modules/typescript/lib/typescript.js` |
| 12.0% | 16.3ms |      13 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  5.0ms |       4 | `createNormalizedTupleType`     | `node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller                    | Location                                    |
| -----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 100.0% | 125.5ms |     100 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller           | Location                                    |
| -----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 119.2ms |      95 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |

##### `getMembersOfSymbol` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                 | Location                                    |
| ----: | -----: | ------: | -------------------------------------- | ------------------------------------------- |
| 88.5% | 96.6ms |      77 | `isEmptyAnonymousObjectType`           | `node_modules/typescript/lib/typescript.js` |
|  8.0% |  8.8ms |       7 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/typescript/lib/typescript.js` |
|  3.4% |  3.8ms |       3 | `some`                                 | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 46.9% | 47.7ms |      38 | `getPropertyOfType`            | `node_modules/typescript/lib/typescript.js` |
| 29.6% | 30.1ms |      24 | `getSignaturesOfType`          | `node_modules/typescript/lib/typescript.js` |
| 12.3% | 12.5ms |      10 | `getIndexInfosOfType`          | `node_modules/typescript/lib/typescript.js` |
|  4.9% |  5.0ms |       4 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |
|  3.7% |  3.8ms |       3 | `getPropertiesOfType`          | `node_modules/typescript/lib/typescript.js` |

##### `bindWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller | Location                                    |
| -----: | ------: | ------: | ------ | ------------------------------------------- |
| 100.0% | 101.7ms |      81 | `bind` | `node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 27.5% | 27.6ms |      22 | `createUnionOrIntersectionProperty`            | `node_modules/typescript/lib/typescript.js` |
| 25.0% | 25.1ms |      20 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 17.5% | 17.6ms |      14 | `getUnmatchedProperties`                       | `node_modules/typescript/lib/typescript.js` |
| 12.5% | 12.5ms |      10 | `inferFromProperties`                          | `node_modules/typescript/lib/typescript.js` |
|  6.3% |  6.3ms |       5 | `propertiesRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |

##### `checkPropertyAccessExpressionOrQualifiedName` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                    |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 96.0% | 90.4ms |      72 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
|  2.7% |  2.5ms |       2 | `checkExpression`               | `node_modules/typescript/lib/typescript.js` |
|  1.3% |  1.3ms |       1 | `checkExpressionWorker`         | `node_modules/typescript/lib/typescript.js` |

##### `instantiateList` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 39.2% | 36.4ms |      29 | `instantiateTypes`             | `node_modules/typescript/lib/typescript.js` |
| 33.8% | 31.4ms |      25 | `instantiateSignatures`        | `node_modules/typescript/lib/typescript.js` |
| 24.3% | 22.6ms |      18 | `instantiateSignature`         | `node_modules/typescript/lib/typescript.js` |
|  1.4% |  1.3ms |       1 | `instantiateIndexInfos`        | `node_modules/typescript/lib/typescript.js` |
|  1.4% |  1.3ms |       1 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 87.0% | 14.05s |  11,201 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 87.0% | 14.05s |  11,196 | `(anonymous)`                              | `datadog-pprof.mjs`                                   |
| 86.9% | 14.04s |  11,193 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 83.0% | 13.40s |  10,685 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,680 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 75.2% | 12.14s |   9,678 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,677 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,677 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 75.2% | 12.14s |   9,676 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,035 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,034 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,033 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,032 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.1% | 11.33s |   9,031 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.20s |   8,931 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 83.0% | 13.40s |  10,685 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,680 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121607:39` |
| 75.2% | 12.14s |   9,678 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,678 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,677 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 75.2% | 12.14s |   9,677 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:121539:78` |
| 75.2% | 12.14s |   9,676 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,035 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,034 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,033 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 70.2% | 11.33s |   9,032 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 70.1% | 11.33s |   9,031 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.20s |   8,931 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.20s |   8,930 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 53.4% |  8.62s |   6,873 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 53.3% |  8.61s |   6,866 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.0% | 1.93s |   1,539 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 86.4% |  12.14s |   9,675 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 12.6% |   1.77s |   1,415 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 111.7ms |      89 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  25.1ms |      20 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 14.05s |  11,196 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 14.04s |  11,193 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 83.5% |  11.19s |   8,919 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  7.7% |   1.03s |     826 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120665:26` |
|  5.5% | 734.2ms |     585 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:42712:23`  |
|  4.5% | 601.1ms |     479 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  2.9% | 395.3ms |     315 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:120714:32` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121607:39`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 93.3% |  11.33s |   9,032 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js` |
|  6.7% | 808.2ms |     644 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   5.0ms |       4 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.14s |   9,678 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121607:39` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.14s |   9,678 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.14s |   9,677 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.14s |   9,676 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filterSemanticDiagnostics`         | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.14s |   9,677 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:121539:78` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.14s |   9,678 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.14s |   9,677 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:121539:78`)

|      % |   Time | Samples | Callee                          | Location                                    |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------- |
| 100.0% | 12.14s |   9,677 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.14s |   9,675 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 56.7% |  6.43s |   5,126 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 43.1% |  4.88s |   3,892 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 12.5ms |      10 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  3.8ms |       3 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSymbolOfDeclaration`     | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 11.33s |   9,032 | `checkSourceFileWorker`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `registerForUnusedIdentifiersCheck` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `isExternalOrCommonJsModule`        | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 11.33s |   9,030 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getDiagnostics2`      | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.33s |   9,032 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.33s |   9,031 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.6% | 8.47s |   6,750 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 42.9% | 4.80s |   3,828 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 42.8% | 4.79s |   3,823 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.6% | 2.86s |   2,283 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 20.1% | 2.25s |   1,793 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 11.20s |   8,929 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `canHaveJSDoc`             | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkIfStatement`         | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                                          | Location                                    |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |  8.61s |   6,865 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.1% | 96.6ms |      77 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% | 25.1ms |      20 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  3.8ms |       3 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkPropertyAccessExpressionOrQualifiedName`  | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 90.8% |   7.82s |   6,236 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.1% |   2.76s |   2,207 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 29.0% |   2.50s |   1,993 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 17.0% |   1.46s |   1,170 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 908.6ms |     724 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.5% | 77.8ms |      62 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% | 66.5ms |      53 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                         |
| 0.3% | 55.2ms |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% | 47.7ms |      38 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 36.4ms |      29 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 36.4ms |      29 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `hasSkipDirectInferenceFlag` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveNewExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkAwaitExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 31.4ms |      25 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% | 27.6ms |      22 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% | 26.4ms |      21 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% | 26.4ms |      21 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                              |
| 0.2% | 26.4ms |      21 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% | 26.4ms |      21 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 22.6ms |      18 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (35026:69) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (29528:77) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (119834:12) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (122135:9) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (120714:32) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% | 20.1ms |      16 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 17.6ms |      14 | `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% | 17.6ms |      14 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 16.3ms |      13 | `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`) ← `resolveObjectTypeMembers` ← `resolveTypeReferenceMembers` ← `resolveStructuredTypeMembers` ← `getPropertiesOfObjectType` ← `getPropertiesOfType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 16.3ms |      13 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                         |
| 0.1% | 16.3ms |      13 | `some` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedUnionOrIntersectionType` ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 15.1ms |      12 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (121607:39) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (121539:78) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
