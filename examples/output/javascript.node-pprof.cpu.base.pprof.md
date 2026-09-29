# Wall time profile

Took 16.84s over 13,404 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 85.9% |  14.46s |  11,510 |
| Garbage collector  | 12.2% |   2.06s |   1,639 |
| Native             |  0.9% | 157.1ms |     125 |
| Standard library   |  0.8% | 137.0ms |     109 |
| Regular expression |  0.2% |  26.4ms |      21 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                               | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 12.2% |   2.06s |   1,639 | `(garbage collector)`                  | `<unknown>`                                 |
|  3.1% | 516.6ms |     411 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 476.4ms |     379 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  2.1% | 350.7ms |     279 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 344.4ms |     274 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  1.9% | 318.0ms |     253 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 296.7ms |     236 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 172.2ms |     137 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 163.4ms |     130 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 154.6ms |     123 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 154.6ms |     123 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 152.1ms |     121 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 137.0ms |     109 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 132.0ms |     105 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 129.5ms |     103 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 125.7ms |     100 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 124.4ms |      99 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 123.2ms |      98 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 111.9ms |      89 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 109.4ms |      87 | `getIntersectionType`                  | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                               | Location                                    |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 3.1% | 516.6ms |     411 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 2.8% | 476.4ms |     379 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 2.1% | 350.7ms |     279 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 344.4ms |     274 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| 1.9% | 318.0ms |     253 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 296.7ms |     236 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 172.2ms |     137 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 163.4ms |     130 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 154.6ms |     123 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 154.6ms |     123 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 152.1ms |     121 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 137.0ms |     109 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 132.0ms |     105 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 129.5ms |     103 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.7ms |     100 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 124.4ms |      99 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 123.2ms |      98 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 111.9ms |      89 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 109.4ms |      87 | `getIntersectionType`                  | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 108.1ms |      86 | `compareSignaturesRelated`             | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.2% | 2.06s |   1,639 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 516.6ms |     411 | `node_modules/typescript/lib/typescript.js:66185` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 476.4ms |     379 | `node_modules/typescript/lib/typescript.js:67063` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 350.7ms |     279 | `node_modules/typescript/lib/typescript.js:66493` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 344.4ms |     274 | `node_modules/typescript/lib/typescript.js:64785` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 318.0ms |     253 | `node_modules/typescript/lib/typescript.js:65023` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 296.7ms |     236 | `node_modules/typescript/lib/typescript.js:12765` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 172.2ms |     137 | `node_modules/typescript/lib/typescript.js:66156` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 163.4ms |     130 | `node_modules/typescript/lib/typescript.js:69901` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 154.6ms |     123 | `node_modules/typescript/lib/typescript.js:60495` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 154.6ms |     123 | `node_modules/typescript/lib/typescript.js:50258` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 152.1ms |     121 | `node_modules/typescript/lib/typescript.js:61539` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 137.0ms |     109 | `node_modules/typescript/lib/typescript.js:70091` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 132.0ms |     105 | `node_modules/typescript/lib/typescript.js:66148` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 129.5ms |     103 | `node_modules/typescript/lib/typescript.js:59020` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 125.7ms |     100 | `node_modules/typescript/lib/typescript.js:67277` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 124.4ms |      99 | `node_modules/typescript/lib/typescript.js:46600` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------ |
| 100.0% | 123.2ms |      98 | `node_modules/typescript/lib/typescript.js:2781` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 111.9ms |      89 | `node_modules/typescript/lib/typescript.js:64996` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 109.4ms |      87 | `node_modules/typescript/lib/typescript.js:63112` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 108.1ms |      86 | `node_modules/typescript/lib/typescript.js:65804` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 97.3% | 502.8ms |     400 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.5% |   7.5ms |       6 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `checkTypeParameter`                       | `node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                    |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------- |
| 98.7% | 470.1ms |     374 | `isRelatedTo`            | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   3.8ms |       3 | `checkTypeRelatedTo`     | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `typeArgumentsRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `compareProperties2`     | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 55.6% | 194.8ms |     155 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 17.6% |  61.6ms |      49 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  7.2% |  25.1ms |      20 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  5.7% |  20.1ms |      16 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |
|  5.0% |  17.6ms |      14 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.3% | 341.9ms |     272 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 98.4% | 313.0ms |     249 | `instantiateTypeWithAlias`    | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   2.5ms |       2 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateType`             | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 98.7% | 292.9ms |     233 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `scanTokenAtPosition`   | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `parseSignatureMember`  | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `parseTypeAnnotation`   | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                    |
| ----: | ------: | ------: | -------------------- | ------------------------------------------- |
| 97.8% | 168.4ms |     134 | `getNormalizedType`  | `node_modules/typescript/lib/typescript.js` |
|  1.5% |   2.5ms |       2 | `checkTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  0.7% |   1.3ms |       1 | `isRelatedToWorker2` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 19.2% | 31.4ms |      25 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js` |
| 16.2% | 26.4ms |      21 | `inferFromProperties`         | `node_modules/typescript/lib/typescript.js` |
| 16.2% | 26.4ms |      21 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js` |
| 14.6% | 23.9ms |      19 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js` |
| 13.8% | 22.6ms |      18 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                    |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------- |
| 56.9% | 88.0ms |      70 | `getPropertyOfType`               | `node_modules/typescript/lib/typescript.js` |
| 34.1% | 52.8ms |      42 | `getSignaturesOfType`             | `node_modules/typescript/lib/typescript.js` |
|  4.9% |  7.5ms |       6 | `getIndexInfosOfType`             | `node_modules/typescript/lib/typescript.js` |
|  1.6% |  2.5ms |       2 | `getIndexedAccessTypeOrUndefined` | `node_modules/typescript/lib/typescript.js` |
|  1.6% |  2.5ms |       2 | `getIndexType`                    | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 27.6% | 42.7ms |      34 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |
| 23.6% | 36.5ms |      29 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 14.6% | 22.6ms |      18 | `getTypeFromTypeReference`                     | `node_modules/typescript/lib/typescript.js` |
| 10.6% | 16.3ms |      13 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 15.1ms |      12 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                            | Location                                    |
| ----: | ------: | ------: | --------------------------------- | ------------------------------------------- |
| 71.1% | 108.1ms |      86 | `createNormalizedTypeReference`   | `node_modules/typescript/lib/typescript.js` |
| 14.9% |  22.6ms |      18 | `getTypeWithThisArgument`         | `node_modules/typescript/lib/typescript.js` |
|  7.4% |  11.3ms |       9 | `createNormalizedTupleType`       | `node_modules/typescript/lib/typescript.js` |
|  5.0% |   7.5ms |       6 | `getNormalizedType`               | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   1.3ms |       1 | `createTypeFromGenericGlobalType` | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 98.2% | 134.5ms |     107 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |
|  1.8% |   2.5ms |       2 | `inferTypes`     | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller        | Location                                    |
| ----: | ------: | ------: | ------------- | ------------------------------------------- |
| 99.0% | 130.7ms |     104 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `sameMap`     | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 97.1% | 125.7ms |     100 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  2.9% |   3.8ms |       3 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 98.0% | 123.2ms |      98 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  2.0% |   2.5ms |       2 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 48.5% | 60.3ms |      48 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 33.3% | 41.5ms |      33 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 13.1% | 16.3ms |      13 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  1.0% |  1.3ms |       1 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:45224:21` |
|  1.0% |  1.3ms |       1 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:45223:21` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                | Location                                    |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 17.3% | 21.4ms |      17 | `isTypeReferenceWithGenericArguments` | `node_modules/typescript/lib/typescript.js` |
| 14.3% | 17.6ms |      14 | `hasMatchingRecursionIdentity`        | `node_modules/typescript/lib/typescript.js` |
| 14.3% | 17.6ms |      14 | `getObjectTypeInstantiation`          | `node_modules/typescript/lib/typescript.js` |
|  6.1% |  7.5ms |       6 | `inferFromProperties`                 | `node_modules/typescript/lib/typescript.js` |
|  4.1% |  5.0ms |       4 | `isReadonlySymbol`                    | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 37.1% | 41.5ms |      33 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 19.1% | 21.4ms |      17 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 18.0% | 20.1ms |      16 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |
|  4.5% |  5.0ms |       4 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  3.4% |  3.8ms |       3 | `getReturnTypeOfSignature`    | `node_modules/typescript/lib/typescript.js` |

##### `getIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                              | Location                                             |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------- |
| 79.3% | 86.7ms |      69 | `instantiateTypeWorker`             | `node_modules/typescript/lib/typescript.js`          |
|  5.7% |  6.3ms |       5 | `intersectTypes`                    | `node_modules/typescript/lib/typescript.js`          |
|  4.6% |  5.0ms |       4 | `createUnionOrIntersectionProperty` | `node_modules/typescript/lib/typescript.js`          |
|  3.4% |  3.8ms |       3 | `getTypeWithThisArgument`           | `node_modules/typescript/lib/typescript.js`          |
|  1.1% |  1.3ms |       1 | `(anonymous)`                       | `node_modules/typescript/lib/typescript.js:72579:75` |

##### `compareSignaturesRelated` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                     | Location                                    |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 86.0% | 93.0ms |      74 | `signatureRelatedTo`       | `node_modules/typescript/lib/typescript.js` |
| 12.8% | 13.8ms |      11 | `compareSignaturesRelated` | `node_modules/typescript/lib/typescript.js` |
|  1.2% |  1.3ms |       1 | `signaturesRelatedTo`      | `node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 86.8% | 14.62s |  11,634 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 86.8% | 14.62s |  11,633 | `(anonymous)`                              | `datadog-pprof.mjs`                                   |
| 86.8% | 14.61s |  11,628 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 82.4% | 13.89s |  11,051 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.52s |   9,961 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,960 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 74.3% | 12.51s |   9,960 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,959 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 74.3% | 12.51s |   9,958 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,957 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,956 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,326 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,325 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,325 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,324 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,324 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 68.5% | 11.54s |   9,181 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 82.4% | 13.89s |  11,051 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.52s |   9,961 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,960 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 74.3% | 12.51s |   9,960 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,959 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 74.3% | 12.51s |   9,958 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,958 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,957 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 74.3% | 12.51s |   9,956 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,326 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,325 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,325 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,324 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.6% | 11.72s |   9,324 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 68.5% | 11.54s |   9,181 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 68.5% | 11.53s |   9,180 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 53.4% |  8.99s |   7,157 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 53.4% |  8.99s |   7,154 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.2% | 2.06s |   1,639 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 85.6% |  12.51s |   9,955 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 13.5% |   1.97s |   1,575 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 100.6ms |      80 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  27.7ms |      22 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 14.62s |  11,633 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 14.61s |  11,628 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 83.0% |  11.52s |   9,167 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  8.4% |   1.16s |     929 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:24` |
|  5.2% | 721.5ms |     574 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:45224:21`  |
|  4.3% | 597.1ms |     475 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  3.1% | 429.9ms |     342 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122498:30` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.51s |   9,959 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 93.6% |  11.71s |   9,322 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js` |
|  6.4% | 799.5ms |     636 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.51s |   9,959 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123317:76` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21101:25`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123317:76`)

|      % |   Time | Samples | Callee                           | Location                                    |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------- |
| 100.0% | 12.51s |   9,958 | `getSemanticDiagnosticsForFile`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getSyntacticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.51s |   9,958 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.51s |   9,956 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.51s |   9,956 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filter`                            | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.51s |   9,958 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.51s |   9,956 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.51s |   9,956 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 11.72s |   9,325 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                       | Location                                    |
| ----: | ----: | ------: | ---------------------------- | ------------------------------------------- |
| 58.4% | 6.84s |   5,442 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 41.5% | 4.86s |   3,870 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 8.8ms |       7 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 3.8ms |       3 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |
| <0.1% | 2.5ms |       2 | `checkSourceElement`         | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                    |
| -----: | -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 11.71s |   9,323 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `measure`         | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.71s |   9,323 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.71s |   9,323 | `getDiagnosticsWorker`                | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 11.53s |   9,177 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `scanTokenAtPosition`      | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkIfStatement`         | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkImportDeclaration`   | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 75.6% | 8.72s |   6,940 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 44.4% | 5.11s |   4,072 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 44.3% | 5.11s |   4,069 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.5% | 2.94s |   2,345 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 19.6% | 2.25s |   1,797 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                                          | Location                                    |
| ----: | -----: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.9% |  8.99s |   7,153 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 85.5ms |      68 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% | 27.7ms |      22 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkBlock`                                    | `node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `checkAwaitExpression`                          | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 91.6% |   8.23s |   6,555 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 31.8% |   2.86s |   2,278 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 29.1% |   2.62s |   2,085 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.5% |   1.47s |   1,177 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 882.4ms |     702 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 80.4ms |      64 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% | 55.3ms |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                |
| 0.3% | 49.0ms |      39 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% | 49.0ms |      39 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% | 41.5ms |      33 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 37.7ms |      30 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% | 36.5ms |      29 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 32.7ms |      26 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                     |
| 0.2% | 27.7ms |      22 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% | 26.4ms |      21 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                |
| 0.1% | 23.9ms |      19 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1% | 23.9ms |      19 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 22.6ms |      18 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 21.4ms |      17 | `getPropertiesOfUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.1% | 20.1ms |      16 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 18.9ms |      15 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 18.9ms |      15 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 17.6ms |      14 | `getNormalizedType` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                          |
| 0.1% | 17.6ms |      14 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (123385:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (123317:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 17.6ms |      14 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (37204:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (31696:71) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (121493:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (122498:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
