# CPU profile

Took 5.58s over 4,237 samples (1.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| third-party | 92.7% |   5.17s |   3,933 |
| stdlib      |  7.3% | 406.3ms |     304 |

Hidden functions account for 100.0% of time spent, so the hottest are also shown.

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                  |
| ---: | ------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 4.0% | 222.4ms |     160 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 3.3% | 184.7ms |     142 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 2.5% | 140.0ms |     108 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
| 2.1% | 117.7ms |      92 | `concat`                        | `<unknown>`                                                                               |
| 2.1% | 115.5ms |      88 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
| 1.9% | 107.5ms |      84 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 1.6% |  86.8ms |      66 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| 1.3% |  73.9ms |      56 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 1.2% |  68.8ms |      52 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
| 1.1% |  61.7ms |      47 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
| 1.0% |  58.5ms |      44 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
| 1.0% |  58.4ms |      45 | `anonymous`                     | `<unknown>`                                                                               |
| 1.0% |  58.0ms |       8 | `NodeObject`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
| 1.0% |  55.8ms |      44 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
| 0.9% |  50.8ms |      39 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
| 0.9% |  49.8ms |      37 | `map`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
| 0.9% |  48.1ms |      36 | `couldContainTypeVariables`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`  |
| 0.8% |  44.2ms |      34 | `scanIdentifier`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`  |
| 0.8% |  43.5ms |      33 | `instantiateSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`  |
| 0.7% |  41.1ms |      31 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`  |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 85.3% | 189.6ms |     135 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63005` |
| 10.7% |  23.8ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63016` |
|  2.9% |   6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |
|  1.1% |   2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 71.6% | 132.2ms |     103 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 11.3% |  20.8ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63840` |
|  4.1% |   7.6ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63806` |
|  3.7% |   6.8ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |
|  1.6% |   2.9ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63865` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 99.2% | 138.8ms |     107 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 24.0% | 27.7ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 22.4% | 25.9ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61741` |
| 22.2% | 25.6ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
| 10.1% | 11.7ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |
|  3.5% |  4.1ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61779` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 18.5% | 19.9ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63310` |
| 15.1% | 16.2ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
| 13.8% | 14.9ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63316` |
| 12.9% | 13.8ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63360` |
|  9.4% | 10.1ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63394` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 44.8% | 38.9ms |      30 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58609` |
| 29.5% | 25.6ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58606` |
| 10.8% |  9.4ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58601` |
|  6.0% |  5.2ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58603` |
|  4.6% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58597` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 18.2% | 13.5ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64006` |
| 15.6% | 11.5ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64138` |
| 12.9% |  9.5ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63938` |
|  9.2% |  6.8ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64429` |
|  8.3% |  6.2ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63925` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 76.2% | 52.4ms |      40 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57595` |
|  4.3% |  2.9ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57605` |
|  2.2% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57600` |
|  1.7% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57602` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 57.4% | 35.4ms |      27 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
| 18.7% | 11.5ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |
| 17.6% | 10.9ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65397` |
|  6.4% |  3.9ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65396` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 40.7% | 23.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57799` |
| 18.6% | 10.9ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57803` |
|  9.0% |  5.3ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57800` |
|  6.9% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57807` |
|  2.5% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57804` |

##### `NodeObject` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28`)

|      % |   Time | Samples | Location                                                                               |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------- |
| 100.0% | 58.0ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159368` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 72.3% | 40.3ms |      32 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
| 11.4% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  4.6% |  2.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  2.6% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62986` |
|  2.2% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62979` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------- |
| 71.8% | 36.4ms |      28 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50` |
| 21.1% | 10.7ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63` |
|  2.9% |  1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:52` |
|  2.2% |  1.1ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65` |
|  2.1% |  1.1ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64` |

##### `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`)

|     % |   Time | Samples | Location                                                                            |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| 70.7% | 35.2ms |      25 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:652` |
| 26.7% | 13.3ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:649` |
|  2.6% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:651` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 24.1% | 11.6ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66386` |
| 21.9% | 10.6ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66388` |
| 19.6% |  9.4ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66383` |
| 15.7% |  7.6ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66378` |
|  2.6% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66380` |

##### `scanIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 52.4% | 23.2ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11691` |
| 20.8% |  9.2ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11686` |
|  3.6% |  1.6ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11687` |
|  2.9% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11689` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 42.7% | 18.6ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61713` |
| 35.8% | 15.6ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61727` |
| 14.7% |  6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61712` |
|  3.5% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61733` |
|  3.3% |  1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61735` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 63.5% | 26.1ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61621` |
| 19.5% |  8.0ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61637` |
|  7.0% |  2.9ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61634` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Caller                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 74.5% | 165.6ms |     116 | `isTypeOrBaseIdenticalTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
|  0.6% |   1.4ms |       1 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 51.9% | 95.8ms |      74 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 46.5% | 85.9ms |      66 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  0.8% |  1.4ms |       1 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Caller                                 | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 18.5% | 25.9ms |      20 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
| 12.3% | 17.3ms |      13 | `getApparentType`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 12.3% | 17.2ms |      14 | `couldContainTypeVariables`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
|  8.5% | 11.9ms |       9 | `getNormalizedType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  0.8% |  1.2ms |       1 | `isRelatedTo`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `concat` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 81.9% | 96.4ms |      75 | `getRelationKey` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Time | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 115.5ms |      88 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 42.9% | 46.1ms |      36 | `typeRelatedToSomeType`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 23.8% | 25.6ms |      20 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
|  3.4% |  3.7ms |       3 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Caller                       | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 25.0% | 21.7ms |      16 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 23.9% | 20.7ms |      16 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 14.4% | 12.5ms |       9 | `getTypeAliasInstantiation`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58731:43` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 73.9ms |      56 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 66.8% | 46.0ms |      35 | `getReducedApparentType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
|  2.1% |  1.5ms |       1 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 89.0% | 54.9ms |      42 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 48.1% | 28.2ms |      20 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 19.9% | 11.7ms |       9 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Caller    | Location    |
| ----: | -----: | ------: | --------- | ----------- |
| 91.6% | 53.5ms |      41 | `require` | `<unknown>` |

##### `NodeObject` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28`)

|      % |   Time | Samples | Caller           | Location                                                                                 |
| -----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 58.0ms |       8 | `createBaseNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30583:38` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 55.8ms |      44 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|      % |   Time | Samples | Caller                 | Location                                                                                 |
| -----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 50.8ms |      39 | `getUnmatchedProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66531:38` |

##### `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`)

|     % |   Time | Samples | Caller                       | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 83.7% | 41.7ms |      31 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 62.9% | 30.3ms |      23 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 18.5% |  8.9ms |       7 | `instantiateSymbol`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |

##### `scanIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`)

|      % |   Time | Samples | Caller | Location                                                                                 |
| -----: | -----: | ------: | ------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 44.2ms |      34 | `scan` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 78.7% | 34.2ms |      26 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Caller          | Location                                                                                 |
| ----: | -----: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 41.2% | 17.0ms |      13 | `map`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 30.3% | 12.4ms |       9 | `getMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                        | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.8% |   5.57s |   4,230 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
| 84.4% |   4.71s |   3,609 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 44.9% |   2.50s |   1,916 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 37.7% |   2.10s |   1,614 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 36.2% |   2.02s |   1,561 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 32.3% |   1.80s |   1,392 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 13.3% | 744.9ms |     529 | `createProgram`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
| 12.0% | 670.0ms |     516 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
|  8.8% | 490.4ms |     376 | `map`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
|  5.9% | 329.1ms |     240 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
|  5.3% | 297.0ms |     218 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
|  4.9% | 275.1ms |     212 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`  |
|  3.6% | 201.2ms |     156 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
|  3.3% | 184.9ms |     143 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
|  2.5% | 140.0ms |     108 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
|  2.2% | 123.3ms |      95 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
|  2.1% | 117.7ms |      92 | `concat`                        | `<unknown>`                                                                               |
|  1.6% |  86.8ms |      66 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
|  1.5% |  81.9ms |      63 | `anonymous`                     | `<unknown>`                                                                               |
|  1.4% |  79.8ms |      62 | `instantiateSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`  |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.5% |   4.71s |   3,609 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.4% | 744.9ms |     529 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  76.5ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   2.5ms |       2 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.71s |   3,609 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Callee                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 81.2% |  2.03s |   1,561 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  1.3% | 33.2ms |      26 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |    Time | Samples | Callee                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 87.0% |   1.83s |   1,413 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 14.1% | 297.0ms |     218 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
|  0.2% |   3.8ms |       3 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  0.1% |   1.2ms |       1 | `getObjectFlags`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Callee                    | Location                                                                                 |
| ----: | ------: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 90.0% |   1.81s |   1,404 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |
|  8.6% | 173.3ms |     134 | `getRelationKey`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |    Time | Samples | Callee                | Location                                                                                 |
| ----: | ------: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 85.2% |   1.53s |   1,185 | `propertiesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
| 74.4% |   1.34s |   1,036 | `signaturesRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 13.4% | 241.3ms |     188 | `isRelatedTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  0.8% |  13.9ms |      11 | `getApparentType`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
|  0.5% |   9.7ms |       7 | `checkTypeRelatedTo`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)

|     % |    Time | Samples | Callee    | Location                                                                               |
| ----: | ------: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 80.6% | 600.6ms |     421 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 55.6% | 372.2ms |     285 | `map`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 36.8% | 246.6ms |     191 | `instantiateMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |
|  3.2% |  21.7ms |      16 | `getTypeListId`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |

##### `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`)

|     % |    Time | Samples | Callee          | Location                                                                                 |
| ----: | ------: | ------: | --------------- | ---------------------------------------------------------------------------------------- |
| 53.0% | 260.0ms |     200 | `getMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |    Time | Samples | Callee                                   | Location                                                                                 |
| ----: | ------: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 83.2% | 273.7ms |     198 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57225:56` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |    Time | Samples | Callee                                 | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 38.7% | 114.9ms |      76 | `getReducedType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 23.0% |  68.4ms |      53 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
|  4.0% |  11.9ms |       9 | `getObjectFlags`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |    Time | Samples | Callee            | Location                                                                                 |
| ----: | ------: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 86.2% | 237.1ms |     183 | `instantiateType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961:33` |
|  4.5% |  12.4ms |       9 | `getMappedType`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Callee                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 38.0% | 76.4ms |      60 | `getApparentTypeOfMappedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57576:45` |
|  8.6% | 17.3ms |      13 | `getObjectFlags`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Callee   | Location    |
| ----: | -----: | ------: | -------- | ----------- |
| 52.2% | 96.4ms |      75 | `concat` | `<unknown>` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Callee        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 58.8% | 72.5ms |      56 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66494:47` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                                                             |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------ |
| 28.5% | 23.3ms |      18 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:10` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Callee                      | Location                                                                                 |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 18.8% | 15.0ms |      12 | `couldContainTypeVariables` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 13.5% | 10.8ms |       8 | `getSymbolLinks`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48022:32` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.9% |   1.61s |   1,239 | `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)                                                                                                                                                                                                                                                                                                                                                                             |
| 10.2% | 569.6ms |     430 | `createProgram` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27`)                                                                                                                                                                                                                                                                                                                                                                                    |
|  3.8% | 213.3ms |     154 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                           |
|  2.9% | 164.1ms |     126 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                               |
|  2.4% | 132.0ms |     103 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38) |
|  1.7% |  93.3ms |      71 | `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                             |
|  1.7% |  93.1ms |      72 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                     |
|  1.4% |  81.0ms |      63 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                |
|  1.3% |  72.6ms |      56 | `anonymous` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |  71.1ms |      55 | `scanIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |  65.7ms |      49 | `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |  58.5ms |      46 | `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                               |
|  1.0% |  58.0ms |       8 | `NodeObject` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                         |
|  0.9% |  49.1ms |      38 | `concat` ← `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                            |
|  0.8% |  46.5ms |      36 | `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                            |
|  0.8% |  45.3ms |      36 | `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`) ← `getMappedType` (61620:31) ← `map` (647:17) ← `getObjectTypeInstantiation` (61740:44) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                           |
|  0.8% |  45.1ms |      35 | `forEachAncestorDirectory` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                             |
|  0.7% |  39.1ms |      30 | `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                       |
|  0.7% |  38.2ms |      29 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `structuredTypeRelatedToWorker` (63924:51) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getDiagnosticsHelper` (114649:38)                                                                                    |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`)                                                                                                                                                                                                                                                                                                                                                                  |
