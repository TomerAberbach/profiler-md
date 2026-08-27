# Wall time profile

Took 18.77s over 14,985 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.0% |  16.52s |  13,190 |
| Garbage collector  | 10.1% |   1.89s |   1,515 |
| Native             |  0.9% | 177.9ms |     142 |
| Standard library   |  0.8% | 150.4ms |     120 |
| Regular expression |  0.1% |  20.0ms |      16 |
| Ours               | <0.1% |   2.5ms |       2 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                        | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 10.1% |   1.89s |   1,515 | `(garbage collector)`           | `<unknown>`                                                                     |
|  3.9% | 724.2ms |     578 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.6% | 684.1ms |     546 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.2% | 409.7ms |     327 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% | 401.0ms |     320 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% | 364.6ms |     291 | `instantiateTypeWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% | 239.3ms |     191 | `scan`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.1% | 209.3ms |     167 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% | 177.9ms |     142 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% | 165.4ms |     132 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 154.1ms |     123 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 154.1ms |     123 | `getNodeLinks`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 154.1ms |     123 | `bind`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% | 151.6ms |     121 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 140.3ms |     112 | `createTypeReference`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 139.1ms |     111 | `getReducedApparentType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 135.3ms |     108 | `instantiateType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.7% | 129.1ms |     103 | `resolveStructuredTypeMembers`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 121.5ms |      97 | `scanJsDocToken`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 119.0ms |      95 | `getTypeOfSymbol`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                                                        |
| ---: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 3.9% | 724.2ms |     578 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 3.6% | 684.1ms |     546 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.2% | 409.7ms |     327 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.1% | 401.0ms |     320 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.9% | 364.6ms |     291 | `instantiateTypeWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.3% | 239.3ms |     191 | `scan`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 209.3ms |     167 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 177.9ms |     142 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 165.4ms |     132 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 154.1ms |     123 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 154.1ms |     123 | `getNodeLinks`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 154.1ms |     123 | `bind`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 151.6ms |     121 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 140.3ms |     112 | `createTypeReference`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 139.1ms |     111 | `getReducedApparentType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 135.3ms |     108 | `instantiateType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 129.1ms |     103 | `resolveStructuredTypeMembers`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 121.5ms |      97 | `scanJsDocToken`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 119.0ms |      95 | `getTypeOfSymbol`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.6% | 115.3ms |      92 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 10.1% | 1.89s |   1,515 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 724.2ms |     578 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 684.1ms |     546 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 409.7ms |     327 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 401.0ms |     320 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 364.6ms |     291 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 239.3ms |     191 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 209.3ms |     167 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 177.9ms |     142 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 165.4ms |     132 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 154.1ms |     123 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 154.1ms |     123 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 154.1ms |     123 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 151.6ms |     121 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 140.3ms |     112 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 139.1ms |     111 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 135.3ms |     108 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961` |

##### `resolveStructuredTypeMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 129.1ms |     103 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57178` |

##### `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 121.5ms |      97 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950` |

##### `getTypeOfSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 119.0ms |      95 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 115.3ms |      92 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 38.2% | 276.9ms |     221 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 30.6% | 221.8ms |     177 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.9% |  86.5ms |      69 | `isRelatedToWorker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.7% |  41.3ms |      33 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.6% |  26.3ms |      21 | `eachTypeRelatedToType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 51.1% | 349.6ms |     279 | `isRelatedTo`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 48.4% | 330.8ms |     264 | `isIdenticalTo`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 99.4% | 407.2ms |     325 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 97.8% | 392.2ms |     313 | `isTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |   7.5ms |       6 | `checkTypeAssignableTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getConditionalType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 98.6% | 359.6ms |     287 | `instantiateTypeWithAlias`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `instantiateList`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getMappedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |   1.3ms |       1 | `getPermissiveInstantiation`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 99.5% | 238.1ms |     190 | `nextTokenWithoutCheck` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.5% |   1.3ms |       1 | `speculationHelper`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 94.0% | 196.7ms |     157 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.4% |  11.3ms |       9 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `getInferredType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                                                        |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 97.2% | 172.9ms |     138 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.8% |   5.0ms |       4 | `isRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 22.7% | 37.6ms |      30 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 18.2% | 30.1ms |      24 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 15.2% | 25.1ms |      20 | `inferFromTypes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.1% | 20.0ms |      16 | `inferFromProperties`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.6% | 17.5ms |      14 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 72.4% | 111.5ms |      89 | `eachTypeRelatedToSomeType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 27.6% |  42.6ms |      34 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                                     | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 22.0% | 33.8ms |      27 | `getObjectTypeInstantiation`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 21.1% | 32.6ms |      26 | `checkPropertyAccessExpressionOrQualifiedName`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.3% | 31.3ms |      25 | `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.0% | 20.0ms |      16 | `getResolvedSymbol`                                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.9% |  7.5ms |       6 | `getTypeFromTypeReference`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                    | Location                                                                                 |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 59.3% | 91.5ms |      73 | `visitNode`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 31.7% | 48.9ms |      39 | `forEach`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  2.4% |  3.8ms |       3 | `(anonymous)`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43921:38` |
|  1.6% |  2.5ms |       2 | `visitNodes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  0.8% |  1.3ms |       1 | `bindExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 95.9% | 145.3ms |     116 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.3% |   5.0ms |       4 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.8% |   1.3ms |       1 | `isRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                                                        |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 69.6% | 97.7ms |      78 | `createNormalizedTypeReference`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.4% | 18.8ms |      15 | `getTypeWithThisArgument`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  8.0% | 11.3ms |       9 | `createNormalizedTupleType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.7% |  3.8ms |       3 | `getNormalizedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.8% |  2.5ms |       2 | `createTypeFromGenericGlobalType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                                                        |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 49.5% | 68.9ms |      55 | `getPropertyOfType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 36.0% | 50.1ms |      40 | `getSignaturesOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.4% |  7.5ms |       6 | `getIndexInfosOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.5% |  6.3ms |       5 | `getIndexedAccessTypeOrUndefined` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.8% |  2.5ms |       2 | `getPropertiesOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 40.7% | 55.1ms |      44 | `instantiateList`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 24.1% | 32.6ms |      26 | `getMappedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.0% | 16.3ms |      13 | `instantiateTypeWorker`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.6% |  7.5ms |       6 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.6% |  7.5ms |       6 | `getConditionalType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `resolveStructuredTypeMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                                                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 25.2% | 32.6ms |      26 | `getPropertiesOfObjectType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.4% | 26.3ms |      21 | `getPropertyOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.4% | 25.1ms |      20 | `getSignaturesOfStructuredType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.6% | 16.3ms |      13 | `isWeakType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.9% |  6.3ms |       5 | `isEmptyObjectType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Caller           | Location                                                                        |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------- |
| 100.0% | 121.5ms |      97 | `nextTokenJSDoc` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getTypeOfSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 36.8% | 43.9ms |      35 | `getTypeOfParameter`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.5% | 11.3ms |       9 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  7.4% |  8.8ms |       7 | `getNonMissingTypeOfSymbol`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  7.4% |  8.8ms |       7 | `checkIdentifier`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.3% |  7.5ms |       6 | `inferFromProperties`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 79.3% | 91.5ms |      73 | `getMappedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  9.8% | 11.3ms |       9 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768:69` |
|  4.3% |  5.0ms |       4 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61942:79` |
|  3.3% |  3.8ms |       3 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  2.2% |  2.5ms |       2 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 88.7% | 16.64s |  13,286 | `typeCheckProject`                         | `tsc-workload.mjs`                                                                        |
| 88.7% | 16.64s |  13,285 | `(anonymous)`                              | `datadog-pprof.mjs`                                                                       |
| 88.6% | 16.64s |  13,281 | `run`                                      | `node:internal/modules/esm/module_job`                                                    |
| 85.0% | 15.96s |  12,741 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,551 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 77.1% | 14.47s |  11,550 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,550 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,549 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,548 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 77.0% | 14.46s |  11,544 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.0% | 14.46s |  11,541 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,806 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,805 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,803 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.0% | 13.52s |  10,796 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.6% | 13.43s |  10,724 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.5% | 13.43s |  10,719 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 85.0% | 15.96s |  12,741 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,551 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 77.1% | 14.47s |  11,550 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,550 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.47s |  11,549 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,548 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.1% | 14.46s |  11,547 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 77.0% | 14.46s |  11,544 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.0% | 14.46s |  11,541 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,806 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,805 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.1% | 13.53s |  10,803 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.0% | 13.52s |  10,796 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.6% | 13.43s |  10,724 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.5% | 13.43s |  10,719 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 53.6% | 10.07s |   8,037 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 53.5% | 10.05s |   8,022 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.5% |  9.85s |   7,862 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|     % |  Time | Samples | Function              | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 10.1% | 1.89s |   1,515 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |    Time | Samples | Callee                             | Location                                                                        |
| ----: | ------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 86.8% |  14.45s |  11,536 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.3% |   2.05s |   1,638 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 102.7ms |      82 | `require`                          | `node:internal/modules/helpers`                                                 |
|  0.2% |  35.1ms |      28 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location                                               |
| -----: | -----: | ------: | ------------------ | ------------------------------------------------------ |
| 100.0% | 16.64s |  13,284 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  <0.1% |  1.3ms |       1 | `stop`             | `node_modules/@datadog/pprof/out/src/time-profiler.js` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 16.64s |  13,281 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 84.0% |  13.40s |  10,702 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  8.0% |   1.27s |   1,020 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  5.4% | 864.6ms |     690 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  4.5% | 716.7ms |     572 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  2.8% | 441.1ms |     352 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                        |
| ----: | ------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------- |
| 93.4% |  13.52s |  10,793 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.5% | 947.3ms |     756 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `getMergedBindAndCheckDiagnostics`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                                                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 14.47s |  11,550 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                                                        |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.47s |  11,550 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                                                        |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,548 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                                                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,546 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20135:43`  |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                                                        |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,547 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                                                        |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,546 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filterSemanticDiagnostics`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |   Time | Samples | Callee                          | Location                                                                        |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,546 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filterSemanticDiagnostics`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                                                        |
| -----: | -----: | ------: | --------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,544 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.46s |  11,541 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                                                        |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 55.0% |  7.44s |   5,938 | `checkDeferredNodes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 44.8% |  6.06s |   4,843 | `forEach`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 16.3ms |      13 | `checkUnusedIdentifiers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% |  7.5ms |       6 | `checkExternalModuleExports` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  2.5ms |       2 | `checkSourceElement`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                                                        |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.53s |  10,803 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                                                        |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.53s |  10,802 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.52s |  10,796 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                                                        |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.43s |  10,719 | `checkSourceElementWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  2.5ms |       2 | `getTypeFromTypeReference`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkBlock`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getTypeParametersForTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getEffectsSignature`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                                                        |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 73.2% | 9.83s |   7,850 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.1% | 5.79s |   4,624 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.0% | 5.78s |   4,614 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.3% | 3.13s |   2,501 | `checkExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 22.5% | 3.02s |   2,411 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                                                        |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| 99.8% |  10.05s |   8,022 | `checkExpressionWorker`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.6% | 161.6ms |     129 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |  35.1ms |      28 | `checkClassDeclaration`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |  23.8ms |      19 | `checkIfStatement`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |  23.8ms |      19 | `checkBlock`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 91.9% |   9.24s |   7,375 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 30.0% |   3.01s |   2,409 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.6% |   2.97s |   2,375 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.7% |   1.68s |   1,342 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.4% | 947.3ms |     756 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                                  | Location                                                                        |
| ----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| 99.9% | 9.84s |   7,857 | `forEach`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `checkGrammarStatementInAmbientContext` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 73.9ms |      59 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% | 56.4ms |      45 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                    |
| 0.3% | 53.9ms |      43 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 43.9ms |      35 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                           |
| 0.2% | 42.6ms |      34 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 37.6ms |      30 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                 |
| 0.2% | 37.6ms |      30 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% | 36.3ms |      29 | `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% | 33.8ms |      27 | `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% | 32.6ms |      26 | `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 28.8ms |      23 | `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.2% | 28.8ms |      23 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% | 28.8ms |      23 | `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` ← `checkFunctionExpressionOrObjectLiteralMethod` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 28.8ms |      23 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 22.6ms |      18 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 21.3ms |      17 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% | 20.0ms |      16 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                           |
| 0.1% | 18.8ms |      15 | `getPropertyOfObjectType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% | 18.8ms |      15 | `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                 |
| 0.1% | 18.8ms |      15 | `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
