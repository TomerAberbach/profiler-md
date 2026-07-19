# Wall time profile

Took 18.29s over 14,612 samples (1.3ms per sample).

| Category    |     % |   Time | Samples |
| ----------- | ----: | -----: | ------: |
| third-party | 88.6% | 16.20s |  12,941 |
| stdlib      | 11.4% |  2.09s |   1,670 |
| ours        | <0.1% |  1.3ms |       1 |

Hidden functions account for 100.0% of wall time spent, so the hottest are also shown.

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

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                                                        |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
| 53.3% | 381.9ms |     305 | `isRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `checkTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 39.5% | 265.4ms |     212 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 33.7% | 226.6ms |     181 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.1% |   7.5ms |       6 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |   1.3ms |       1 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 97.9% | 414.4ms |     331 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller            | Location                                                                        |
| ----: | ------: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 97.5% | 346.8ms |     277 | `isTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                     | Location                                                                        |
| ----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 99.3% | 351.8ms |     281 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                    | Location                                                                        |
| ----: | ------: | ------: | ------------------------- | ------------------------------------------------------------------------------- |
| 98.1% | 194.1ms |     155 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.3% |   2.5ms |       2 | `isRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller               | Location                                                                        |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
| 96.8% | 191.6ms |     153 | `isRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.9% |   3.8ms |       3 | `checkTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 98.1% | 190.3ms |     152 | `nextTokenWithoutCheck` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                   | Location                                                                        |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 95.2% | 175.3ms |     140 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| 22.1% | 37.6ms |      30 | `getResolvedSymbol`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 19.9% | 33.8ms |      27 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.8% | 20.0ms |      16 | `getObjectTypeInstantiation`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller      | Location                                                                        |
| ----: | -----: | ------: | ----------- | ------------------------------------------------------------------------------- |
| 58.8% | 83.9ms |      67 | `visitNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                  | Location                                                                        |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 40.7% | 55.1ms |      44 | `instantiateList`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 24.1% | 32.6ms |      26 | `getMappedType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.9% | 18.8ms |      15 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                          | Location                                                                        |
| ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 71.3% | 96.4ms |      77 | `createNormalizedTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.2% | 13.8ms |      11 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                | Location                                                                        |
| ----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 43.4% | 57.6ms |      46 | `getPropertyOfType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 43.4% | 57.6ms |      46 | `getSignaturesOfType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                              | Location                                                                        |
| ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 65.1% | 86.4ms |      69 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.8% | 27.5ms |      22 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                  | Location                                                                        |
| ----: | -----: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 69.6% | 88.9ms |      71 | `getMappedType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.9% |  8.8ms |       7 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Caller                           | Location                                                                        |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------- |
| 98.0% | 125.2ms |     100 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                                         | Location                                                                        |
| ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| 39.0% | 48.8ms |      39 | `createUnionOrIntersectionProperty`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 14.0% | 17.5ms |      14 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Caller                        | Location                                                                        |
| ----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------- |
| 18.0% | 22.5ms |      18 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 17.0% | 21.3ms |      17 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 13.0% | 16.3ms |      13 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.0% | 13.8ms |      11 | `inferFromTypes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |    Time | Samples | Function                            | Location                                                                        |
| ----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------- |
| 89.4% |  16.35s |  13,063 | `typeCheckProject`                  | `tsc-workload.mjs`                                                              |
| 89.4% |  16.35s |  13,063 | `(anonymous)`                       | `datadog-pprof.mjs`                                                             |
| 77.6% |  14.18s |  11,333 | `getSemanticDiagnostics`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 40.5% |   7.41s |   5,923 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 38.9% |   7.10s |   5,678 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 32.9% |   6.02s |   4,813 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 30.6% |   5.59s |   4,470 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 22.8% |   4.16s |   3,326 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 20.2% |   3.70s |   2,956 | `instantiateType`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 16.5% |      3s |   2,404 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.2% |   2.04s |   1,632 | `createProgram`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.9% |   1.99s |   1,595 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  9.6% |   1.75s |   1,403 | `(garbage collector)`               | `<unknown>`                                                                     |
|  7.5% |   1.37s |   1,101 | `getMappedType`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.9% | 897.7ms |     717 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.3% | 790.0ms |     631 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.3% | 782.5ms |     625 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.4% | 631.0ms |     504 | `getReducedApparentType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.2% | 584.7ms |     467 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.5% | 270.4ms |     216 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

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

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|      % |   Time | Samples | Callee                 | Location                                                                        |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------------------- |
| 100.0% | 14.18s |  11,333 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                   | Location                                                                        |
| ----: | ----: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
| 95.8% | 7.10s |   5,677 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.1% | 3.8ms |       3 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 78.4% |   5.57s |   4,451 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 10.9% | 776.2ms |     620 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  0.2% |  12.5ms |      10 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                          | Location                                                                        |
| ----: | ------: | ------: | ------------------------------- | ------------------------------------------------------------------------------- |
| 92.0% |   5.54s |   4,429 | `structuredTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.1% | 246.6ms |     197 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   2.5ms |       2 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                | Location                                                                        |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 83.5% |   4.67s |   3,732 | `propertiesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 74.7% |   4.18s |   3,339 | `signaturesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 14.8% | 826.3ms |     660 | `isRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| <0.1% |   1.3ms |       1 | `instantiateType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                       | Location                                                                        |
| ----: | ------: | ------: | ---------------------------- | ------------------------------------------------------------------------------- |
| 63.1% |   2.62s |   2,100 | `instantiateTypes`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 47.8% |   1.99s |   1,591 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 11.6% | 484.5ms |     387 | `instantiateType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  3.6% | 151.5ms |     121 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.5% |  63.9ms |      51 | `getMappedType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `instantiateType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee                     | Location                                                                        |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------- |
| 99.5% | 3.68s |   2,940 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee           | Location                                                                        |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------- |
| 89.7% |   2.70s |   2,157 | `invokeOnce`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  4.7% | 142.7ms |     114 | `inferFromTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |  Time | Samples | Callee    | Location                                                                        |
| ----: | ----: | ------: | --------- | ------------------------------------------------------------------------------- |
| 78.5% | 1.60s |   1,281 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                  | Location                                                                        |
| ----: | ------: | ------: | ----------------------- | ------------------------------------------------------------------------------- |
| 58.6% |   1.16s |     934 | `map`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 48.5% | 967.8ms |     773 | `instantiateMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  1.2% |  23.8ms |      19 | `getNodeLinks`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee            | Location                                                                        |
| ----: | -----: | ------: | ----------------- | ------------------------------------------------------------------------------- |
| 94.5% |  1.30s |   1,040 | `instantiateType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  6.8% | 93.9ms |      75 | `getMappedType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee          | Location                                                                        |
| ----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------- |
| 99.0% | 888.9ms |     710 | `bindContainer` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 56.2% | 504.6ms |     403 | `bindChildren`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                         | Location                                                                        |
| ----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------- |
| 46.9% | 370.6ms |     296 | `getReducedApparentType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
| 36.0% | 284.2ms |     227 | `resolveStructuredTypeMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                | Location                                                                        |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 41.1% | 321.8ms |     257 | `getReducedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  2.1% |  16.3ms |      13 | `createTypeReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `getReducedApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee           | Location                                                                        |
| ----: | ------: | ------: | ---------------- | ------------------------------------------------------------------------------- |
| 54.4% | 343.0ms |     274 | `getReducedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |    Time | Samples | Callee                | Location                                                                        |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------- |
| 38.1% | 222.9ms |     178 | `getPropertyOfType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |
|  8.6% |  50.1ms |      40 | `getIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)

|     % |   Time | Samples | Callee           | Location                                                                        |
| ----: | -----: | ------: | ---------------- | ------------------------------------------------------------------------------- |
| 15.7% | 42.6ms |      34 | `scanIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof.mjs`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.6% |   3.22s |   2,577 | `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)                                                                                                                                                                                                                                                               |
|  9.7% |   1.77s |   1,414 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`)                                                                                                                                                                                                                                                                        |
|  2.3% | 416.9ms |     333 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                              |
|  2.0% | 360.6ms |     288 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                                                      |
|  1.8% | 321.8ms |     257 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `structuredTypeRelatedToWorker` ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics` |
|  1.7% | 314.3ms |     251 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                    |
|  1.5% | 269.2ms |     215 | `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `createProgram`                                                                                                                                                                                                                                                               |
|  1.4% | 254.2ms |     203 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `isRelatedTo` ← `checkTypeRelatedTo` ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                               |
|  1.3% | 235.4ms |     188 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                               |
|  1.3% | 229.1ms |     183 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                                                                         |
|  1.3% | 229.1ms |     183 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                               |
|  1.2% | 221.6ms |     177 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `recursiveTypeRelatedTo` ← `isRelatedTo` ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                                                                                                           |
|  0.9% | 166.5ms |     133 | `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `bind` ← `bind` ← `bind` ← `getSemanticDiagnostics`                                                                                                                                                                                                                           |
|  0.8% | 152.7ms |     122 | `getNodeLinks` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                                                                                                                                              |
|  0.8% | 140.2ms |     112 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `checkTypeRelatedTo` ← `getSemanticDiagnostics`                                                                                                                                                                                                                        |
|  0.8% | 137.7ms |     110 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                                                                                                                                         |
|  0.7% | 132.7ms |     106 | `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `bind` ← `bind` ← `getSemanticDiagnostics`                                                                                                                                                                                                                                    |
|  0.7% | 121.4ms |      97 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `getSemanticDiagnostics`                                                                                                                                                                                                                                            |
|  0.7% | 121.4ms |      97 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `inferFromTypes` ← `inferFromTypes` ← `inferFromTypes` ← `getSemanticDiagnostics`                                                                                                                                                                                   |
|  0.6% | 117.7ms |      94 | `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js`) ← `bind` ← `bind` ← `bind` ← `bind` ← `bind` ← `getSemanticDiagnostics`                                                                                                                                                                                                         |
