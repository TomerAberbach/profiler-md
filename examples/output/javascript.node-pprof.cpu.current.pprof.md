# Wall time profile

Took 16.43s over 13,109 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 85.0% |  13.96s |  11,139 |
| Garbage collector  | 12.7% |   2.08s |   1,662 |
| Native             |  1.1% | 175.6ms |     140 |
| Standard library   |  0.9% | 153.0ms |     122 |
| Regular expression |  0.4% |  57.7ms |      46 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                               | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 12.7% |   2.08s |   1,662 | `(garbage collector)`                  | `<unknown>`                                 |
|  3.0% | 497.8ms |     397 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
|  2.8% | 467.7ms |     373 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
|  2.0% | 323.5ms |     258 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 298.5ms |     238 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 285.9ms |     228 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
|  1.7% | 278.4ms |     222 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 165.5ms |     132 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
|  1.0% | 158.0ms |     126 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
|  0.9% | 140.4ms |     112 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 124.1ms |      99 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 122.9ms |      98 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 121.6ms |      97 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 120.4ms |      96 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 114.1ms |      91 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 111.6ms |      89 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
|  0.7% | 107.8ms |      86 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.8ms |      82 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
|  0.6% | 100.3ms |      80 | `isTypeRelatedTo`                      | `node_modules/typescript/lib/typescript.js` |
|  0.6% |  99.1ms |      79 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                               | Location                                    |
| ---: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 3.0% | 497.8ms |     397 | `checkTypeRelatedTo`                   | `node_modules/typescript/lib/typescript.js` |
| 2.8% | 467.7ms |     373 | `recursiveTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js` |
| 2.0% | 323.5ms |     258 | `getObjectTypeInstantiation`           | `node_modules/typescript/lib/typescript.js` |
| 1.8% | 298.5ms |     238 | `isRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
| 1.7% | 285.9ms |     228 | `instantiateTypeWorker`                | `node_modules/typescript/lib/typescript.js` |
| 1.7% | 278.4ms |     222 | `scan`                                 | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 165.5ms |     132 | `getNodeLinks`                         | `node_modules/typescript/lib/typescript.js` |
| 1.0% | 158.0ms |     126 | `createTypeReference`                  | `node_modules/typescript/lib/typescript.js` |
| 0.9% | 140.4ms |     112 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
| 0.8% | 124.1ms |      99 | `bind`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 122.9ms |      98 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 121.6ms |      97 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 120.4ms |      96 | `structuredTypeRelatedToWorker`        | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 114.1ms |      91 | `invokeOnce`                           | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 111.6ms |      89 | `instantiateType`                      | `node_modules/typescript/lib/typescript.js` |
| 0.7% | 107.8ms |      86 | `createInstantiatedSymbolTable`        | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 102.8ms |      82 | `some`                                 | `node_modules/typescript/lib/typescript.js` |
| 0.6% | 100.3ms |      80 | `isTypeRelatedTo`                      | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  99.1ms |      79 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js` |
| 0.6% |  97.8ms |      78 | `getTypeFactsWorker`                   | `node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.7% | 2.08s |   1,662 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
|  0.5% | 74.0ms |      59 | `open`                    | `<unknown>` |
|  0.4% | 58.9ms |      47 | `stat`                    | `<unknown>` |
|  0.1% | 15.0ms |      12 | `read`                    | `<unknown>` |
|  0.1% |  8.8ms |       7 | `realpath`                | `<unknown>` |
| <0.1% |  5.0ms |       4 | `fstat`                   | `<unknown>` |
| <0.1% |  5.0ms |       4 | `readFileUtf8`            | `<unknown>` |
| <0.1% |  3.8ms |       3 | `close`                   | `<unknown>` |
| <0.1% |  3.8ms |       3 | `readdir`                 | `<unknown>` |
| <0.1% |  1.3ms |       1 | `createUnsafeArrayBuffer` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 497.8ms |     397 | `node_modules/typescript/lib/typescript.js:67445` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 467.7ms |     373 | `node_modules/typescript/lib/typescript.js:68323` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 323.5ms |     258 | `node_modules/typescript/lib/typescript.js:66040` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 298.5ms |     238 | `node_modules/typescript/lib/typescript.js:67753` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 285.9ms |     228 | `node_modules/typescript/lib/typescript.js:66283` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 278.4ms |     222 | `node_modules/typescript/lib/typescript.js:12895` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 165.5ms |     132 | `node_modules/typescript/lib/typescript.js:51499` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 158.0ms |     126 | `node_modules/typescript/lib/typescript.js:62794` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 140.4ms |     112 | `node_modules/typescript/lib/typescript.js:67408` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 124.1ms |      99 | `node_modules/typescript/lib/typescript.js:47793` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 122.9ms |      98 | `node_modules/typescript/lib/typescript.js:67416` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 121.6ms |      97 | `node_modules/typescript/lib/typescript.js:71184` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 120.4ms |      96 | `node_modules/typescript/lib/typescript.js:68537` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 114.1ms |      91 | `node_modules/typescript/lib/typescript.js:71374` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 111.6ms |      89 | `node_modules/typescript/lib/typescript.js:66256` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 107.8ms |      86 | `node_modules/typescript/lib/typescript.js:60275` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------ |
| 100.0% | 102.8ms |      82 | `node_modules/typescript/lib/typescript.js:2794` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 100.3ms |      80 | `node_modules/typescript/lib/typescript.js:67361` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 99.1ms |      79 | `node_modules/typescript/lib/typescript.js:61750` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 97.8ms |      78 | `node_modules/typescript/lib/typescript.js:72224` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                     | Location                                    |
| ----: | ------: | ------: | ------------------------------------------ | ------------------------------------------- |
| 99.0% | 492.8ms |     393 | `isTypeRelatedTo`                          | `node_modules/typescript/lib/typescript.js` |
|  0.8% |   3.8ms |       3 | `checkTypeAssignableTo`                    | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 99.2% | 464.0ms |     370 | `isRelatedTo`                 | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   2.5ms |       2 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.6% | 322.3ms |     257 | `instantiateTypeWorker`    | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 58.4% | 174.3ms |     139 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js` |
| 13.0% |  38.9ms |      31 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js` |
|  8.8% |  26.3ms |      21 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js` |
|  6.3% |  18.8ms |      15 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js` |
|  4.2% |  12.5ms |      10 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                    |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------- |
| 99.1% | 283.4ms |     226 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getMappedType`            | `node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `instantiateList`          | `node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                    |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------- |
| 97.3% | 270.9ms |     216 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js` |
|  1.8% |   5.0ms |       4 | `scanTokenAtPosition`   | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseTypeQuery`        | `node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `parseExpected`         | `node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                    |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 25.8% | 42.6ms |      34 | `getResolvedSignature`                         | `node_modules/typescript/lib/typescript.js` |
| 18.2% | 30.1ms |      24 | `getResolvedSymbol`                            | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 23.8ms |      19 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js` |
| 11.4% | 18.8ms |      15 | `getTypeFromTypeReference`                     | `node_modules/typescript/lib/typescript.js` |
|  9.1% | 15.0ms |      12 | `getObjectTypeInstantiation`                   | `node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                                 | Location                                    |
| ----: | ------: | ------: | -------------------------------------- | ------------------------------------------- |
| 68.3% | 107.8ms |      86 | `createNormalizedTypeReference`        | `node_modules/typescript/lib/typescript.js` |
| 11.1% |  17.6ms |      14 | `getTypeWithThisArgument`              | `node_modules/typescript/lib/typescript.js` |
|  7.9% |  12.5ms |      10 | `getNormalizedType`                    | `node_modules/typescript/lib/typescript.js` |
|  6.3% |  10.0ms |       8 | `createNormalizedTupleType`            | `node_modules/typescript/lib/typescript.js` |
|  3.2% |   5.0ms |       4 | `getTypeFromClassOrInterfaceReference` | `node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller        | Location                                    |
| -----: | ------: | ------: | ------------- | ------------------------------------------- |
| 100.0% | 140.4ms |     112 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 45.5% | 56.4ms |      45 | `visitNode2`        | `node_modules/typescript/lib/typescript.js`          |
| 33.3% | 41.4ms |      33 | `forEach`           | `node_modules/typescript/lib/typescript.js`          |
| 11.1% | 13.8ms |      11 | `bindParameterFlow` | `node_modules/typescript/lib/typescript.js`          |
|  7.1% |  8.8ms |       7 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:46417:21` |
|  1.0% |  1.3ms |       1 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:46416:21` |

##### `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller              | Location                                    |
| -----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 122.9ms |      98 | `getNormalizedType` | `node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                   | Location                                    |
| ----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 18.6% | 22.6ms |      18 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js` |
| 15.5% | 18.8ms |      15 | `inferFromProperties`    | `node_modules/typescript/lib/typescript.js` |
| 14.4% | 17.6ms |      14 | `inferFromMatchingTypes` | `node_modules/typescript/lib/typescript.js` |
| 13.4% | 16.3ms |      13 | `inferTypes`             | `node_modules/typescript/lib/typescript.js` |
| 13.4% | 16.3ms |      13 | `applyToReturnTypes`     | `node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                    |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------- |
| 94.8% | 114.1ms |      91 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js` |
|  5.2% |   6.3ms |       5 | `recursiveTypeRelatedTo`  | `node_modules/typescript/lib/typescript.js` |

##### `invokeOnce` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller           | Location                                    |
| ----: | ------: | ------: | ---------------- | ------------------------------------------- |
| 98.9% | 112.9ms |      90 | `inferFromTypes` | `node_modules/typescript/lib/typescript.js` |
|  1.1% |   1.3ms |       1 | `inferTypes`     | `node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                    |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| 41.6% | 46.4ms |      37 | `instantiateList`             | `node_modules/typescript/lib/typescript.js` |
| 15.7% | 17.6ms |      14 | `getMappedType`               | `node_modules/typescript/lib/typescript.js` |
| 12.4% | 13.8ms |      11 | `getConditionalType`          | `node_modules/typescript/lib/typescript.js` |
|  5.6% |  6.3ms |       5 | `getTypeOfInstantiatedSymbol` | `node_modules/typescript/lib/typescript.js` |
|  5.6% |  6.3ms |       5 | `instantiateTypeWorker`       | `node_modules/typescript/lib/typescript.js` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                    |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------- |
| 96.5% | 104.1ms |      83 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js` |
|  3.5% |   3.8ms |       3 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `some` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                | Location                                    |
| ----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 15.9% | 16.3ms |      13 | `getObjectTypeInstantiation`          | `node_modules/typescript/lib/typescript.js` |
| 13.4% | 13.8ms |      11 | `isTypeReferenceWithGenericArguments` | `node_modules/typescript/lib/typescript.js` |
| 13.4% | 13.8ms |      11 | `inferFromProperties`                 | `node_modules/typescript/lib/typescript.js` |
|  9.8% | 10.0ms |       8 | `couldContainTypeVariables`           | `node_modules/typescript/lib/typescript.js` |
|  4.9% |  5.0ms |       4 | `isConstTypeVariable`                 | `node_modules/typescript/lib/typescript.js` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                     | Location                                    |
| ----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 48.8% | 48.9ms |      39 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js` |
| 27.5% | 27.6ms |      22 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js` |
| 11.3% | 11.3ms |       9 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js` |
|  8.8% |  8.8ms |       7 | `compareTypesAssignable`                   | `node_modules/typescript/lib/typescript.js` |
|  3.8% |  3.8ms |       3 | `isTypeComparableTo`                       | `node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                         | Location                                    |
| ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 48.1% | 47.7ms |      38 | `getPropertyOfType`            | `node_modules/typescript/lib/typescript.js` |
| 35.4% | 35.1ms |      28 | `getSignaturesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  7.6% |  7.5ms |       6 | `getIndexInfosOfType`          | `node_modules/typescript/lib/typescript.js` |
|  2.5% |  2.5ms |       2 | `getPropertiesOfType`          | `node_modules/typescript/lib/typescript.js` |
|  2.5% |  2.5ms |       2 | `resolveStructuredTypeMembers` | `node_modules/typescript/lib/typescript.js` |

##### `getTypeFactsWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                     | Location                                             |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 66.7% | 65.2ms |      52 | `getTypeFacts`             | `node_modules/typescript/lib/typescript.js`          |
| 26.9% | 26.3ms |      21 | `getIntersectionTypeFacts` | `node_modules/typescript/lib/typescript.js`          |
|  2.6% |  2.5ms |       2 | `(anonymous)`              | `node_modules/typescript/lib/typescript.js:72282:37` |
|  1.3% |  1.3ms |       1 | `mapType`                  | `node_modules/typescript/lib/typescript.js`          |
|  1.3% |  1.3ms |       1 | `resolveNewExpression`     | `node_modules/typescript/lib/typescript.js`          |

##### `open` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 74.0ms |      59 | `openSync` | `node:fs` |

##### `stat` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 58.9ms |      47 | `statSync` | `node:fs` |

##### `read` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location  |
| -----: | -----: | ------: | ---------- | --------- |
| 100.0% | 15.0ms |      12 | `readSync` | `node:fs` |

##### `realpath` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location          |
| -----: | ----: | ------: | ------------- | ----------------- |
| 100.0% | 8.8ms |       7 | `(anonymous)` | `node:fs:2851:23` |

##### `fstat` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 5.0ms |       4 | `tryStatSync` | `node:fs` |

##### `readFileUtf8` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location  |
| -----: | ----: | ------: | -------------- | --------- |
| 100.0% | 5.0ms |       4 | `readFileSync` | `node:fs` |

##### `close` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location  |
| -----: | ----: | ------: | ----------- | --------- |
| 100.0% | 3.8ms |       3 | `closeSync` | `node:fs` |

##### `readdir` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location  |
| -----: | ----: | ------: | ------------- | --------- |
| 100.0% | 3.8ms |       3 | `readdirSync` | `node:fs` |

##### `createUnsafeArrayBuffer` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location               |
| -----: | ----: | ------: | -------------------- | ---------------------- |
| 100.0% | 1.3ms |       1 | `createUnsafeBuffer` | `node:internal/buffer` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 86.3% | 14.18s |  11,309 | `typeCheckProject`                         | `tsc-workload.mjs`                                    |
| 86.3% | 14.18s |  11,308 | `(anonymous)`                              | `datadog-pprof.mjs`                                   |
| 86.2% | 14.17s |  11,304 | `run`                                      | `node:internal/modules/esm/module_job`                |
| 82.1% | 13.49s |  10,760 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,712 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 74.1% | 12.17s |   9,710 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 74.1% | 12.17s |   9,709 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,708 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,708 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 74.0% | 12.17s |   9,707 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,095 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,094 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,094 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,093 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,092 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 68.3% | 11.22s |   8,955 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                              |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 82.1% | 13.49s |  10,760 | `forEach`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,712 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 74.1% | 12.17s |   9,710 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,710 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 74.1% | 12.17s |   9,709 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,708 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js`           |
| 74.1% | 12.17s |   9,708 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js`           |
| 74.0% | 12.17s |   9,707 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,095 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,094 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,094 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,093 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js`           |
| 69.4% | 11.40s |   9,092 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js`           |
| 68.3% | 11.22s |   8,955 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js`           |
| 68.3% | 11.22s |   8,953 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js`           |
| 52.7% |  8.66s |   6,909 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js`           |
| 52.6% |  8.64s |   6,897 | `checkExpressionWorker`                    | `node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 12.7% | 2.08s |   1,662 | `(garbage collector)` | `<unknown>` |

##### Native

|     % |   Time | Samples | Function                  | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
|  0.5% | 74.0ms |      59 | `open`                    | `<unknown>` |
|  0.4% | 58.9ms |      47 | `stat`                    | `<unknown>` |
|  0.1% | 15.0ms |      12 | `read`                    | `<unknown>` |
|  0.1% |  8.8ms |       7 | `realpath`                | `<unknown>` |
| <0.1% |  5.0ms |       4 | `fstat`                   | `<unknown>` |
| <0.1% |  5.0ms |       4 | `readFileUtf8`            | `<unknown>` |
| <0.1% |  3.8ms |       3 | `close`                   | `<unknown>` |
| <0.1% |  3.8ms |       3 | `readdir`                 | `<unknown>` |
| <0.1% |  1.3ms |       1 | `createUnsafeArrayBuffer` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 85.8% |  12.17s |   9,706 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 13.2% |   1.87s |   1,494 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  0.8% | 110.4ms |      88 | `require`                          | `node:internal/modules/helpers`             |
|  0.2% |  25.1ms |      20 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 14.18s |  11,308 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 14.17s |  11,304 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 83.2% |  11.22s |   8,949 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js`           |
|  8.2% |   1.10s |     878 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124028:24` |
|  5.2% | 703.5ms |     561 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:46417:21`  |
|  4.1% | 558.0ms |     445 | `bind`               | `node_modules/typescript/lib/typescript.js`           |
|  3.1% | 420.1ms |     335 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124077:30` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                              |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 12.17s |   9,710 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124899:76` |
|  <0.1% |  2.5ms |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:22094:25`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee                             | Location                                    |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------- |
| 93.6% |  11.39s |   9,090 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js` |
|  6.3% | 772.5ms |     616 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   3.8ms |       3 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                              |
| -----: | -----: | ------: | ----------------- | ----------------------------------------------------- |
| 100.0% | 12.17s |   9,709 | `(anonymous)`     | `node_modules/typescript/lib/typescript.js:124967:37` |
|  <0.1% |  1.3ms |       1 | `getDiagnostics2` | `node_modules/typescript/lib/typescript.js`           |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                    |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------- |
| 100.0% | 12.17s |   9,709 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                    |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------- |
| 100.0% | 12.17s |   9,708 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124899:76`)

|      % |   Time | Samples | Callee                           | Location                                    |
| -----: | -----: | ------: | -------------------------------- | ------------------------------------------- |
| 100.0% | 12.17s |   9,708 | `getSemanticDiagnosticsForFile`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getSyntacticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                    |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 12.17s |   9,705 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                    |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------- |
| 100.0% | 12.17s |   9,708 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                    |
| -----: | -----: | ------: | --------- | ------------------------------------------- |
| 100.0% | 12.17s |   9,707 | `flatMap` | `node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 12.17s |   9,707 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                    |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 56.6% |  6.45s |   5,146 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js` |
| 43.2% |  4.92s |   3,929 | `forEach`                    | `node_modules/typescript/lib/typescript.js` |
|  0.1% | 13.8ms |      11 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js` |
|  0.1% |  8.8ms |       7 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 11.40s |   9,093 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                    |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------- |
| 100.0% | 11.40s |   9,092 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                | Location                                    |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------- |
| 100.0% | 11.40s |   9,092 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `ensurePendingDiagnosticWorkComplete` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                    |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% | 11.40s |   9,091 | `checkSourceFile`       | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                       | Location                                    |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 11.22s |   8,953 | `checkSourceElementWorker`   | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `canHaveJSDoc`               | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkTypeAliasDeclaration`  | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkTypeReferenceOrImport` | `node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkBlock`                 | `node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                    |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------- |
| 74.9% | 8.40s |   6,705 | `checkBlock`               | `node_modules/typescript/lib/typescript.js` |
| 43.0% | 4.83s |   3,853 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js` |
| 43.0% | 4.82s |   3,848 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js` |
| 25.5% | 2.86s |   2,285 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js` |
| 19.7% | 2.21s |   1,767 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                    |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------- |
| 99.8% |   8.64s |   6,897 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js` |
|  1.2% | 105.3ms |      84 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js` |
|  0.3% |  23.8ms |      19 | `checkIfStatement`                              | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `checkPropertyAccessChain`                      | `node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getFreshTypeOfLiteralType`                     | `node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                    |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------- |
| 91.1% |   7.88s |   6,284 | `checkCallExpression`           | `node_modules/typescript/lib/typescript.js` |
| 32.0% |   2.76s |   2,207 | `checkPropertyAccessExpression` | `node_modules/typescript/lib/typescript.js` |
| 28.3% |   2.45s |   1,955 | `checkObjectLiteral`            | `node_modules/typescript/lib/typescript.js` |
| 16.3% |   1.41s |   1,127 | `checkArrayLiteral`             | `node_modules/typescript/lib/typescript.js` |
| 10.5% | 904.1ms |     721 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 87.8ms |      70 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% | 75.2ms |      60 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                |
| 0.4% | 57.7ms |      46 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.3% | 55.2ms |      44 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.3% | 43.9ms |      35 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% | 36.4ms |      29 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                     |
| 0.2% | 35.1ms |      28 | `getNodeLinks` (`node_modules/typescript/lib/typescript.js`) ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `getReturnTypeFromBody` ← `getReturnTypeOfSignature` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 25.1ms |      20 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 23.8ms |      19 | `getReducedApparentType` (`node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% | 23.8ms |      19 | `scan` (`node_modules/typescript/lib/typescript.js`) ← `nextTokenWithoutCheck` ← `nextToken` ← `tryParseSemicolon` ← `parseSemicolon` ← `parseTypeMemberSemicolon` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% | 22.6ms |      18 | `getPropertyOfType` (`node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% | 22.6ms |      18 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% | 21.3ms |      17 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 21.3ms |      17 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.1% | 20.1ms |      16 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedToWorker2` ← `compareSignaturesRelated` ← `signatureRelatedTo` ← `signaturesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `isPropertySymbolTypeRelated` ← `propertyRelatedTo` ← `propertiesRelatedTo` ← `structuredTypeRelatedToWorker` ← `structuredTypeRelatedTo` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `checkTypeAssignableTo` ← `checkTypeArgumentConstraints` ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` ← `checkTypeReferenceOrImport` ← `checkTypeReferenceNode` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkTypeAliasDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% | 20.1ms |      16 | `isRelatedTo` (`node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                |
| 0.1% | 20.1ms |      16 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 20.1ms |      16 | `doJSDocScan` (`node_modules/typescript/lib/typescript.js`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (38259:63) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (32748:71) ← `mapDefined` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `(anonymous)` (123071:10) ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (124077:30) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 18.8ms |      15 | `getNormalizedUnionOrIntersectionType` (`node_modules/typescript/lib/typescript.js`) ← `getNormalizedType` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `inferFromContravariantTypesIfStrictFunctionTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableDeclarationList` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 16.3ms |      13 | `createUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `checkSourceFileWithEagerDiagnostics` ← `getDiagnosticsWorker` ← `getDiagnostics2` ← `(anonymous)` (124967:37) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (124899:76) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
