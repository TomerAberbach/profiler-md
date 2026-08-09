# Wall time profile

Took 18.29s over 14,612 samples (1.3ms per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.6% |  16.20s |  12,941 |
| Garbage collector  |  9.6% |   1.75s |   1,403 |
| Native             |  1.0% | 174.0ms |     139 |
| Standard library   |  0.7% | 134.0ms |     107 |
| Regular expression |  0.1% |  26.3ms |      21 |
| Ours               | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                        |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 9.6% |   1.75s |   1,403 | `(garbage collector)`               | `<unknown>`                                                                     |
| 3.9% | 716.1ms |     572 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 3.7% | 672.3ms |     537 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.3% | 423.2ms |     338 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.9% | 355.6ms |     284 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.9% | 354.3ms |     283 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 197.8ms |     158 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 197.8ms |     158 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 194.1ms |     155 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.0% | 184.0ms |     147 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 170.3ms |     136 | `getNodeLinks`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 142.7ms |     114 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 135.2ms |     108 | `instantiateType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 135.2ms |     108 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 132.7ms |     106 | `getReducedApparentType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 132.7ms |     106 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 127.7ms |     102 | `getMappedType`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 127.7ms |     102 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.2ms |     100 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.2ms |     100 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                            | Location                                                                        |
| ---: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 3.9% | 716.1ms |     572 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 3.7% | 672.3ms |     537 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 2.3% | 423.2ms |     338 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.9% | 355.6ms |     284 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.9% | 354.3ms |     283 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 197.8ms |     158 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 197.8ms |     158 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.1% | 194.1ms |     155 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 1.0% | 184.0ms |     147 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.9% | 170.3ms |     136 | `getNodeLinks`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.8% | 142.7ms |     114 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 135.2ms |     108 | `instantiateType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 135.2ms |     108 | `createTypeReference`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 132.7ms |     106 | `getReducedApparentType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 132.7ms |     106 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 127.7ms |     102 | `getMappedType`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 127.7ms |     102 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.2ms |     100 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 125.2ms |     100 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 0.7% | 121.4ms |      97 | `typeRelatedToSomeType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### Garbage collector

|    % |  Time | Samples | Function              | Location    |
| ---: | ----: | ------: | --------------------- | ----------- |
| 9.6% | 1.75s |   1,403 | `(garbage collector)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 716.1ms |     572 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 672.3ms |     537 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 423.2ms |     338 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 355.6ms |     284 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 354.3ms |     283 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 197.8ms |     158 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 197.8ms |     158 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 194.1ms |     155 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 184.0ms |     147 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 170.3ms |     136 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 142.7ms |     114 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 135.2ms |     108 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 135.2ms |     108 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 132.7ms |     106 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 132.7ms |     106 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 127.7ms |     102 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 127.7ms |     102 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 125.2ms |     100 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 125.2ms |     100 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 121.4ms |      97 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 53.3% | 381.9ms |     305 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 46.3% | 331.8ms |     265 | `isIdenticalTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 39.5% | 265.4ms |     212 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 33.7% | 226.6ms |     181 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.1% |  67.6ms |      54 | `isRelatedToWorker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.0% |  40.1ms |      32 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.9% |  26.3ms |      21 | `eachTypeRelatedToType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 97.9% | 414.4ms |     331 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% |   8.8ms |       7 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 97.5% | 346.8ms |     277 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.4% |   5.0ms |       4 | `checkTypeAssignableTo`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `elaborateError`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `onExit`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `checkTypeReferenceNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                        | Location                                                                        |
| ----: | ------: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 99.3% | 351.8ms |     281 | `instantiateTypeWithAlias`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getTypePredicateOfSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |   1.3ms |       1 | `getTypeOfSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                                                        |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 98.1% | 194.1ms |     155 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% |   2.5ms |       2 | `isRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `isIdenticalTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 96.8% | 191.6ms |     153 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |   3.8ms |       3 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% |   2.5ms |       2 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 98.1% | 190.3ms |     152 | `nextTokenWithoutCheck`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `parseThisTypePredicate` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `parseOptionalToken`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% |   1.3ms |       1 | `parseEntityName`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 95.2% | 175.3ms |     140 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.8% |   8.8ms |       7 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                                     | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 22.1% | 37.6ms |      30 | `getResolvedSymbol`                                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.9% | 33.8ms |      27 | `checkPropertyAccessExpressionOrQualifiedName`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 17.6% | 30.0ms |      24 | `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.8% | 20.0ms |      16 | `getObjectTypeInstantiation`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.6% | 16.3ms |      13 | `getResolvedSignature`                                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                    | Location                                                                                 |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 58.8% | 83.9ms |      67 | `visitNode`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 31.6% | 45.1ms |      36 | `forEach`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  3.5% |  5.0ms |       4 | `(anonymous)`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38` |
|  2.6% |  3.8ms |       3 | `bindExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  1.8% |  2.5ms |       2 | `bindSourceFile`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 40.7% | 55.1ms |      44 | `instantiateList`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 24.1% | 32.6ms |      26 | `getMappedType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.9% | 18.8ms |      15 | `instantiateTypeWorker`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.5% |  8.8ms |       7 | `getConditionalType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  5.6% |  7.5ms |       6 | `getTypeOfInstantiatedSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                                                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 71.3% | 96.4ms |      77 | `createNormalizedTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.0% | 17.5ms |      14 | `getTypeWithThisArgument`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.2% | 13.8ms |      11 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.7% |  5.0ms |       4 | `createNormalizedTupleType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `createArrayType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                            | Location                                                                        |
| ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------- |
| 43.4% | 57.6ms |      46 | `getSignaturesOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.4% | 57.6ms |      46 | `getPropertyOfType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.6% |  8.8ms |       7 | `getIndexedAccessTypeOrUndefined` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.7% |  6.3ms |       5 | `getIndexInfosOfType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.9% |  1.3ms |       1 | `resolveMappedTypeMembers`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                              | Location                                                                        |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 65.1% | 86.4ms |      69 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.8% | 27.5ms |      22 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.7% |  6.3ms |       5 | `getTypeWithThisArgument`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |  2.5ms |       2 | `findMostOverlappyType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |  2.5ms |       2 | `intersectTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 69.6% | 88.9ms |      71 | `getMappedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 17.6% | 22.5ms |      18 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61768:69` |
|  6.9% |  8.8ms |       7 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  2.9% |  3.8ms |       3 | `(anonymous)`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61942:79` |
|  2.9% |  3.8ms |       3 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                           | Location                                                                        |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 98.0% | 125.2ms |     100 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `getReducedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.0% |   1.3ms |       1 | `findDiscriminantProperties`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 39.0% | 48.8ms |      39 | `createUnionOrIntersectionProperty`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 14.0% | 17.5ms |      14 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
| 13.0% | 16.3ms |      13 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |
| 10.0% | 12.5ms |      10 | `getPropertyTypeForIndexType`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |
|  7.0% |  8.8ms |       7 | `propertiesRelatedTo`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`          |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 18.0% | 22.5ms |      18 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 17.0% | 21.3ms |      17 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.0% | 16.3ms |      13 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.0% | 15.0ms |      12 | `applyToReturnTypes`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.0% | 13.8ms |      11 | `inferFromTypes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `typeRelatedToSomeType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                                                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 69.1% | 83.9ms |      67 | `eachTypeRelatedToSomeType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.9% | 36.3ms |      29 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.0% |  1.3ms |       1 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 89.4% | 16.35s |  13,063 | `typeCheckProject`                         | `tsc-workload.mjs`                                                                        |
| 89.4% | 16.35s |  13,063 | `(anonymous)`                              | `datadog-pprof.mjs`                                                                       |
| 89.3% | 16.34s |  13,054 | `run`                                      | `node:internal/modules/esm/module_job`                                                    |
| 85.5% | 15.64s |  12,499 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.7% | 14.21s |  11,353 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 77.7% | 14.21s |  11,350 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.7% | 14.20s |  11,347 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.20s |  11,344 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,337 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,336 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,336 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 77.6% | 14.19s |  11,335 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,334 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.18s |  11,333 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,621 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,620 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,620 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,619 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.9% | 13.15s |  10,504 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.9% | 13.14s |  10,502 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                   | Location                                                                                  |
| ----: | -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 85.5% | 15.64s |  12,499 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.7% | 14.21s |  11,353 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 77.7% | 14.21s |  11,350 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.7% | 14.20s |  11,347 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.20s |  11,344 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,337 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,336 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,336 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 77.6% | 14.19s |  11,335 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.19s |  11,334 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 77.6% | 14.18s |  11,333 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,621 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,620 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,620 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 72.7% | 13.29s |  10,619 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.9% | 13.15s |  10,504 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 71.9% | 13.14s |  10,502 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 54.2% |  9.91s |   7,919 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 54.2% |  9.90s |   7,914 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
| 52.6% |  9.61s |   7,683 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |

##### Garbage collector

|    % |  Time | Samples | Function              | Location    |
| ---: | ----: | ------: | --------------------- | ----------- |
| 9.6% | 1.75s |   1,403 | `(garbage collector)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |   Time | Samples | Callee                             | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| 86.7% | 14.18s |  11,328 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 12.5% |  2.04s |   1,632 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.6% | 97.7ms |      78 | `require`                          | `node:internal/modules/helpers`                                                 |
|  0.2% | 26.3ms |      21 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getSyntacticDiagnostics`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof.mjs`)

|      % |   Time | Samples | Callee             | Location           |
| -----: | -----: | ------: | ------------------ | ------------------ |
| 100.0% | 16.35s |  13,063 | `typeCheckProject` | `tsc-workload.mjs` |

##### `run` (`node:internal/modules/esm/module_job`)

|      % |   Time | Samples | Callee        | Location            |
| -----: | -----: | ------: | ------------- | ------------------- |
| 100.0% | 16.34s |  13,054 | `(anonymous)` | `datadog-pprof.mjs` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 83.8% |  13.12s |  10,480 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  8.2% |   1.27s |   1,021 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  5.4% | 840.1ms |     671 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  4.6% | 712.4ms |     569 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  2.8% | 440.7ms |     352 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                                  | Location                                                                        |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| 93.5% |  13.29s |  10,619 | `getDiagnostics`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.4% | 915.2ms |     731 | `getDiagnosticsProducingTypeChecker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `getMergedBindAndCheckDiagnostics`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                                                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 14.21s |  11,350 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                     | Location                                                                        |
| -----: | -----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.20s |  11,347 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                     | Location                                                                        |
| -----: | -----: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 14.20s |  11,344 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee        | Location                                                                                  |
| -----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 14.19s |  11,334 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  <0.1% |  1.3ms |       1 | `append`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`           |
|  <0.1% |  1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20135:43`  |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                   | Location                                                                        |
| -----: | -----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 100.0% | 14.19s |  11,336 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |   Time | Samples | Callee                          | Location                                                                        |
| -----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.19s |  11,334 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `filterSemanticDiagnostics`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `concatenate`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                              | Location                                                                        |
| -----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.19s |  11,335 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee    | Location                                                                        |
| -----: | -----: | ------: | --------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.19s |  11,334 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.18s |  11,333 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.29s |  10,619 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `getDiagnostics`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee                       | Location                                                                        |
| ----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 55.4% |  7.36s |   5,881 | `checkDeferredNodes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 44.4% |  5.90s |   4,717 | `forEach`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 15.0ms |      12 | `checkUnusedIdentifiers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  6.3ms |       5 | `checkExternalModuleExports` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |  1.3ms |       1 | `getNodeLinks`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee            | Location                                                                        |
| -----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.29s |  10,617 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                  | Location                                                                        |
| -----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.29s |  10,619 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                                  | Location                                                                        |
| -----: | -----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 13.14s |  10,501 | `checkSourceElementWorker`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkTypeAliasDeclaration`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkGrammarForAtLeastOneTypeArgument` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% |  1.3ms |       1 | `checkVariableDeclaration`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                                                        |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 73.1% | 9.61s |   7,677 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 44.0% | 5.78s |   4,617 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.9% | 5.76s |   4,608 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 23.1% | 3.03s |   2,427 | `checkExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 22.2% | 2.92s |   2,335 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                                          | Location                                                                        |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| 99.9% |   9.90s |   7,913 | `checkExpressionWorker`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.8% | 175.3ms |     140 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.4% |  36.3ms |      29 | `checkClassDeclaration`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |  25.0ms |      20 | `checkIfStatement`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.3% |  25.0ms |      20 | `checkBlock`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 92.0% |   9.11s |   7,277 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.8% |   2.95s |   2,358 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 29.2% |   2.89s |   2,309 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.7% |   1.65s |   1,324 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.0% | 991.6ms |     792 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |  Time | Samples | Callee                              | Location                                                                        |
| -----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 9.61s |   7,681 | `forEach`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% | 1.3ms |       1 | `isFunctionOrModuleBlock`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  <0.1% | 1.3ms |       1 | `registerForUnusedIdentifiersCheck` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`) ← `run` (`node:internal/modules/esm/module_job`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 71.4ms |      57 | `wrapSafe` (`node:internal/modules/cjs/loader`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.3% | 57.6ms |      46 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                    |
| 0.3% | 53.8ms |      43 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                           |
| 0.3% | 50.1ms |      40 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.3% | 46.3ms |      37 | `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% | 37.6ms |      30 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 33.8ms |      27 | `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% | 31.3ms |      25 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% | 28.8ms |      23 | `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` ← `checkFunctionExpressionOrObjectLiteralMethod` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `getSignatureApplicabilityError` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 28.8ms |      23 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% | 25.0ms |      20 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% | 25.0ms |      20 | `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getPropertyOfType` ← `createUnionOrIntersectionProperty` ← `getUnionOrIntersectionProperty` ← `getPropertyOfUnionOrIntersectionType` ← `getPropertiesOfUnionOrIntersectionType` ← `getReducedType` ← `getReducedApparentType` ← `getPropertyOfType` ← `checkPropertyAccessExpressionOrQualifiedName` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 25.0ms |      20 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                 |
| 0.1% | 21.3ms |      17 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.1% | 20.0ms |      16 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                           |
| 0.1% | 20.0ms |      16 | `scanJsDocToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `nextTokenJSDoc` ← `parseTagComments` ← `parseTrailingTagComments` ← `parseParameterOrPropertyTag` ← `parseTag` ← `(anonymous)` (36647:74) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (36600:79) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (30890:92) ← `mapDefined` ← `addJSDocComment` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (115622:62) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (115622:62) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (115622:62) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (115622:62) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (115622:62) ← `forEach` ← `processLibReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processTypeReferenceDirectiveWorker` ← `processTypeReferenceDirective` ← `processTypeReferenceDirectives` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `processImportedModules` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113905:44) ← `forEach` ← `createProgram`                                                                                                                |
| 0.1% | 18.8ms |      15 | `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics` |
| 0.1% | 18.8ms |      15 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionCached` ← `checkDeclarationInitializer` ← `getTypeForVariableLikeDeclaration` ← `getWidenedTypeForVariableLikeDeclaration` ← `getTypeOfVariableOrParameterOrPropertyWorker` ← `getTypeOfVariableOrParameterOrProperty` ← `getTypeOfSymbol` ← `checkVariableLikeDeclaration` ← `checkVariableDeclaration` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkVariableStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.1% | 18.8ms |      15 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74`) ← `scanRange` ← `parseJSDocCommentWorker` ← `(anonymous)` (36600:79) ← `doInsideOfContext` ← `parseJSDocComment` ← `(anonymous)` (30890:92) ← `mapDefined` ← `addJSDocComment` ← `withJSDoc` ← `parsePropertyOrMethodSignature` ← `parseTypeMember` ← `parseListElement` ← `parseList` ← `parseObjectTypeMembers` ← `parseInterfaceDeclaration` ← `parseDeclarationWorker` ← `parseDeclaration` ← `parseStatement` ← `parseListElement` ← `parseList` ← `parseSourceFileWorker` ← `parseSourceFile` ← `createSourceFile` ← `getSourceFile` ← `findSourceFileWorker` ← `findSourceFile` ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` ← `processSourceFile` ← `processRootFile` ← `(anonymous)` (113932:54) ← `forEach` ← `createProgram`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% | 17.5ms |      14 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isIdenticalTo` ← `isRelatedTo` ← `typeRelatedToSomeType` ← `eachTypeRelatedToSomeType` ← `isIdenticalTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `isTypeRelatedTo` ← `isTypeIdenticalTo` ← `isTypeOrBaseIdenticalTo` ← `inferFromMatchingTypes` ← `inferFromTypes` ← `inferFromContravariantTypes` ← `applyToParameterTypes` ← `inferFromSignature` ← `inferFromSignatures` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferFromProperties` ← `inferFromObjectTypes` ← `invokeOnce` ← `inferFromTypes` ← `inferTypes` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkPropertyAssignment` ← `checkObjectLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionForMutableLocation` ← `checkArrayLiteral` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionWithContextualType` ← `inferTypeArguments` ← `chooseOverload` ← `resolveCall` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkNonNullExpression` ← `checkPropertyAccessExpression` ← `checkExpressionWorker` ← `checkExpression` ← `resolveCallExpression` ← `resolveSignature` ← `getResolvedSignature` ← `checkCallExpression` ← `checkExpressionWorker` ← `checkExpression` ← `checkExpressionStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkTryStatement` ← `checkSourceElementWorker` ← `checkSourceElement` ← `forEach` ← `checkBlock` ← `checkSourceElementWorker` ← `checkSourceElement` ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` ← `checkDeferredNode` ← `checkDeferredNodes` ← `checkSourceFileWorker` ← `checkSourceFile` ← `getDiagnosticsWorker` ← `getDiagnostics` ← `(anonymous)` (114735:54) ← `runWithCancellationToken` ← `getBindAndCheckDiagnosticsForFileNoCache` ← `getAndCacheDiagnostics` ← `getBindAndCheckDiagnosticsForFile` ← `getSemanticDiagnosticsForFile` ← `(anonymous)` (114653:99) ← `flatMap` ← `getDiagnosticsHelper` ← `getSemanticDiagnostics`                                               |
