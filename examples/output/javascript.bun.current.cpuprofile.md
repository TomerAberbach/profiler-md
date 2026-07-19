# CPU profile

Took 5.58s over 4,226 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 91.7% |   5.11s |   3,906 |
| stdlib      |  8.3% | 463.5ms |     319 |
| unknown     | <0.1% |   1.2ms |       1 |

Hidden functions account for 100.0% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                 |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.3% | 240.6ms |     173 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 3.1% | 175.3ms |     135 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.4% | 134.1ms |     104 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 2.3% | 131.0ms |     104 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 2.2% | 124.6ms |      97 | `concat`                        | `<unknown>`                                                                              |
| 1.9% | 105.1ms |      83 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.3% |  74.8ms |      57 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
| 1.2% |  66.2ms |      49 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 1.2% |  65.1ms |      51 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 1.1% |  63.6ms |      10 | `toString`                      | `<unknown>`                                                                              |
| 1.0% |  58.5ms |      46 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.0% |  56.4ms |      43 | `anonymous`                     | `<unknown>`                                                                              |
| 1.0% |  56.2ms |      43 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 1.0% |  56.2ms |      45 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.9% |  52.8ms |      41 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 0.8% |  45.9ms |      36 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`    |
| 0.8% |  45.7ms |      34 | `isFreshLiteralType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |
| 0.8% |  44.0ms |      35 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% |  43.2ms |      32 | `createTypeReference`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 0.7% |  40.5ms |      30 | `some`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 90.6% | 218.1ms |     156 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63005` |
|  6.5% |  15.7ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63016` |
|  1.1% |   2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  0.6% |   1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63061` |
|  0.6% |   1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 70.8% | 124.1ms |      95 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 12.5% |  21.9ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63840` |
|  3.3% |   5.8ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63806` |
|  3.0% |   5.3ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63904` |
|  3.0% |   5.2ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|      % |    Time | Samples | Location                                                                              |
| -----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 134.1ms |     104 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 40.8% | 53.4ms |      43 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 14.5% | 19.0ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
| 14.4% | 18.9ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61741` |
|  8.2% | 10.7ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61771` |
|  5.8% |  7.6ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 25.6% | 26.8ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63310` |
| 15.3% | 16.1ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63316` |
| 14.6% | 15.4ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63394` |
|  9.1% |  9.6ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
|  9.0% |  9.5ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 61.3% | 45.8ms |      35 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58609` |
| 22.6% | 16.9ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58606` |
|  8.9% |  6.6ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58601` |
|  3.7% |  2.8ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58603` |
|  2.1% |  1.6ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58597` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 50.1% | 33.2ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57799` |
| 16.5% | 10.9ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57807` |
| 14.3% |  9.4ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57800` |
|  9.7% |  6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57803` |
|  1.9% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57809` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 79.8% | 51.9ms |      41 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57595` |
|  6.0% |  3.9ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57598` |
|  1.7% |  1.1ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57605` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 78.8% | 46.1ms |      36 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
| 12.4% |  7.3ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  4.6% |  2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  2.0% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62975` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 59.2% | 33.3ms |      25 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |
| 40.8% | 22.9ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11157` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 17.5% | 9.8ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63925` |
| 15.5% | 8.7ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64138` |
| 15.0% | 8.4ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64006` |
|  7.6% | 4.2ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |
|  7.5% | 4.2ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64383` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 75.8% | 40.0ms |      31 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
|  9.7% |  5.1ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |
|  7.5% |  3.9ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65396` |
|  7.0% |  3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65397` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------- |
| 72.3% | 33.2ms |      26 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50` |
| 18.8% |  8.6ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63` |
|  3.0% |  1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65` |
|  2.8% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46` |

##### `isFreshLiteralType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`)

|      % |   Time | Samples | Location                                                                              |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 45.7ms |      34 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61378` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 41.6% | 18.3ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 16.8% |  7.4ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
|  9.2% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66907` |
|  8.7% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66894` |
|  6.1% |  2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66888` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 58.6% | 25.3ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58637` |
| 32.7% | 14.1ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58640` |
|  8.7% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58636` |

##### `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`)

|     % |   Time | Samples | Location                                                                            |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| 59.5% | 24.1ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:948` |
| 29.8% | 12.1ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:950` |
| 10.7% |  4.3ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:956` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Caller                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 71.8% | 172.8ms |     130 | `isTypeOrBaseIdenticalTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
|  1.1% |   2.6ms |       2 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 50.9% | 89.2ms |      70 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Caller                                 | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 16.0% | 21.4ms |      16 | `getApparentType`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 11.6% | 15.5ms |      12 | `couldContainTypeVariables`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 10.7% | 14.3ms |      11 | `getNormalizedType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  7.6% | 10.2ms |       8 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
|  7.5% | 10.1ms |       8 | `isObjectOrArrayLiteralType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67347:44` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Time | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 131.0ms |     104 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `concat` (`<unknown>`)

|     % |    Time | Samples | Caller                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 86.1% | 107.3ms |      84 | `getRelationKey`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  2.2% |   2.7ms |       2 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 36.0% | 37.9ms |      30 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 30.7% | 32.3ms |      25 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  1.1% |  1.2ms |       1 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Caller                       | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 27.7% | 20.7ms |      15 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 16.9% | 12.7ms |      10 | `getUnionTypeFromSortedList` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |
| 16.1% | 12.1ms |       9 | `createTypeReference`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 40.8% | 27.0ms |      20 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 28.9% | 19.2ms |      15 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
|  1.9% |  1.2ms |       1 | `inferFromTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 70.2% | 45.6ms |      36 | `getReducedApparentType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
|  5.7% |  3.7ms |       3 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
|  2.2% |  1.4ms |       1 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `toString` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                                                                |
| -----: | -----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 63.6ms |      10 | `readFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 58.5ms |      46 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Caller    | Location    |
| ----: | -----: | ------: | --------- | ----------- |
| 93.0% | 52.5ms |      40 | `require` | `<unknown>` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 51.0% | 28.7ms |      22 | `scanIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 56.2ms |      45 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 97.3% | 51.3ms |      40 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Caller                 | Location                                                                                 |
| ----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 97.0% | 44.5ms |      35 | `getUnmatchedProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66531:38` |

##### `isFreshLiteralType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`)

|     % |   Time | Samples | Caller              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 54.8% | 25.1ms |      18 | `getNormalizedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 23.0% | 10.1ms |       8 | `inferFromTypeArguments` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 21.9% |  9.6ms |       8 | `inferTypes`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28` |
| 19.8% |  8.7ms |       7 | `inferFromTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `createTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 75.5% | 32.6ms |      25 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`)

|     % |   Time | Samples | Caller                                | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| 55.9% | 22.6ms |      16 | `isTypeReferenceWithGenericArguments` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65347:53` |
|  3.1% |  1.2ms |       1 | `getReducedType`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                        | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.7% |   5.57s |   4,215 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
| 84.1% |   4.69s |   3,587 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 46.4% |   2.59s |   1,965 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 38.8% |   2.16s |   1,645 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 37.4% |   2.08s |   1,583 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 33.3% |   1.86s |   1,411 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 18.9% |   1.05s |     807 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |
| 13.5% | 753.2ms |     535 | `createProgram`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 11.7% | 655.9ms |     496 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  6.5% | 362.6ms |     263 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|  6.3% | 350.8ms |     257 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|  3.8% | 210.0ms |     162 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
|  3.7% | 206.5ms |     159 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|  2.4% | 134.1ms |     104 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
|  2.4% | 133.8ms |     104 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
|  2.2% | 124.6ms |      97 | `concat`                        | `<unknown>`                                                                               |
|  1.9% | 107.5ms |      81 | `some`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`    |
|  1.5% |  81.2ms |      62 | `anonymous`                     | `<unknown>`                                                                               |
|  1.4% |  77.3ms |      59 | `bound require`                 | `<unknown>`                                                                               |
|  1.3% |  74.8ms |      57 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.3% |   4.69s |   3,587 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.5% | 753.2ms |     535 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  77.3ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  38.6ms |      31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
|  0.1% |   3.6ms |       3 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.69s |   3,587 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Callee                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 80.2% |  2.07s |   1,578 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  1.2% | 31.9ms |      23 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |    Time | Samples | Callee                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 87.2% |   1.89s |   1,433 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 16.2% | 350.8ms |     257 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  0.1% |   1.4ms |       1 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Callee                    | Location                                                                                 |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 89.8% |   1.87s |   1,422 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
|  9.4% | 196.3ms |     151 | `getRelationKey`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  0.1% |   2.7ms |       2 | `concat`                  | `<unknown>`                                                                              |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |    Time | Samples | Callee                | Location                                                                                 |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 83.7% |   1.55s |   1,181 | `propertiesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 74.9% |   1.39s |   1,060 | `signaturesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 14.4% | 267.3ms |     206 | `isRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  0.6% |  11.5ms |       9 | `getApparentType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|  0.6% |  10.4ms |       8 | `checkTypeRelatedTo`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |    Time | Samples | Callee            | Location                                                                                 |
| ----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 91.2% | 961.6ms |     733 | `invokeOnce`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66918:32` |
|  5.5% |  58.3ms |      45 | `inferFromTypes`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|  0.5% |   5.5ms |       4 | `getApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|  0.2% |   2.6ms |       2 | `getReducedType`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  0.1% |   1.0ms |       1 | `getObjectFlags`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |    Time | Samples | Callee    | Location                                                                               |
| ----: | ------: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 80.8% | 608.3ms |     424 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 56.7% | 372.0ms |     278 | `map`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 36.2% | 237.3ms |     180 | `instantiateMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |
|  3.2% |  20.7ms |      15 | `getTypeListId`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |    Time | Samples | Callee                                   | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 80.2% | 290.8ms |     210 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57225:56` |
|  1.5% |   5.5ms |       4 | `some`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |    Time | Samples | Callee               | Location                                                                                 |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 43.6% | 153.0ms |     106 | `getReducedType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
|  7.1% |  25.1ms |      18 | `isFreshLiteralType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |
|  4.1% |  14.3ms |      11 | `getObjectFlags`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Callee                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 35.3% | 74.2ms |      56 | `getApparentTypeOfMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45` |
| 10.2% | 21.4ms |      16 | `getObjectFlags`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |    Time | Samples | Callee   | Location    |
| ----: | ------: | ------: | -------- | ----------- |
| 52.0% | 107.3ms |      84 | `concat` | `<unknown>` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Callee        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 65.7% | 87.9ms |      68 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |

##### `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`)

|     % |   Time | Samples | Callee              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 21.2% | 22.8ms |      17 | `containsReference` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61806:39` |
| 19.9% | 21.4ms |      16 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65348:97` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                                                             |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------ |
| 30.5% | 24.8ms |      19 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:10` |

##### `bound require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 77.3ms |      59 | `require`   | `<unknown>` |
|   1.8% |  1.4ms |       1 | `anonymous` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.6% |   1.31s |   1,017 | `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)                                                                                                                                                                                                                                                                                                                                                                             |
| 11.3% | 632.3ms |     481 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.4% | 192.4ms |     145 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                 |
|  3.1% | 173.3ms |     133 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                               |
|  2.3% | 131.2ms |     102 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38) |
|  1.6% |  90.1ms |      70 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                             |
|  1.4% |  77.6ms |      58 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `checkTypeRelatedTo` (62999:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                           |
|  1.4% |  75.9ms |      58 | `anonymous` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |  73.9ms |      55 | `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |  70.2ms |      54 | `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`) ← `getObjectTypeInstantiation` (61740:44) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                         |
|  1.1% |  63.6ms |      10 | `toString` ← `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                                                                                                                                                                                                                                                                                                                                                                       |
|  1.1% |  60.6ms |      47 | `concat` ← `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `checkTypeRelatedTo` (62999:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                  |
|  1.0% |  58.6ms |      44 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                 |
|  1.0% |  57.9ms |      45 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                |
|  1.0% |  56.2ms |      43 | `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% |  55.8ms |      45 | `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                   |
|  1.0% |  55.4ms |      43 | `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `inferFromTypes` (66703:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                     |
|  0.9% |  51.7ms |      40 | `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                   |
|  0.8% |  44.7ms |      33 | `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                     |
|  0.7% |  38.6ms |      31 | `parseJsonConfigFileContentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`)                                                                                                                                                                                                                                                                                                                                                                  |
