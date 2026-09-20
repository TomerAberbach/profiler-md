# CPU profile

Took 2.54s over 2,749 samples (925.6µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.3% |   2.24s |   2,510 |
| Garbage collector  |  6.8% | 172.7ms |     141 |
| Standard library   |  4.1% | 105.3ms |      78 |
| Native             |  0.7% |  17.5ms |      17 |
| Regular expression |  0.1% |   2.8ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                            | Location                                                                                 |
| ---: | ------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 6.8% | 172.7ms |     141 | `(garbage collector)`               | `<unknown>`                                                                              |
| 3.4% |  85.3ms |     107 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.7% |  68.8ms |      55 | `wrapSafe`                          | `node:internal/modules/cjs/loader:1671:18`                                               |
| 2.6% |  66.9ms |      74 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 1.9% |  47.5ms |      41 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.7% |  44.2ms |      38 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.6% |  39.5ms |      44 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.2% |  30.5ms |      26 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 1.0% |  26.1ms |      27 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.0% |  26.0ms |      30 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| 0.9% |  23.4ms |      22 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.9% |  22.5ms |      21 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% |  21.4ms |      34 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% |  20.3ms |      27 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.8% |  20.2ms |      23 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.7% |  18.0ms |      15 | `getConditionalTypeInstantiation`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
| 0.7% |  16.5ms |      14 | `createInstantiatedSymbolTable`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.6% |  15.5ms |      15 | `checkIdentifier`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
| 0.6% |  15.5ms |      16 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 0.6% |  15.2ms |      15 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |

#### Categories

##### Third-party

|    % |   Time | Samples | Function                            | Location                                                                                 |
| ---: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 3.4% | 85.3ms |     107 | `isRelatedTo`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.6% | 66.9ms |      74 | `recursiveTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 1.9% | 47.5ms |      41 | `getObjectTypeInstantiation`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 1.7% | 44.2ms |      38 | `checkTypeRelatedTo`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 1.6% | 39.5ms |      44 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 1.2% | 30.5ms |      26 | `getRelationKey`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 1.0% | 26.1ms |      27 | `getNormalizedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.0% | 26.0ms |      30 | `bind`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |
| 0.9% | 23.4ms |      22 | `scan`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |
| 0.9% | 22.5ms |      21 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 0.8% | 21.4ms |      34 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% | 20.3ms |      27 | `structuredTypeRelatedToWorker`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.8% | 20.2ms |      23 | `bindWorker`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28` |
| 0.7% | 18.0ms |      15 | `getConditionalTypeInstantiation`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
| 0.7% | 16.5ms |      14 | `createInstantiatedSymbolTable`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.6% | 15.5ms |      15 | `checkIdentifier`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |
| 0.6% | 15.5ms |      16 | `getIntersectionType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 0.6% | 15.2ms |      15 | `getPropertyOfType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 0.6% | 14.5ms |      15 | `some`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |
| 0.6% | 14.0ms |      14 | `getTypeOfSymbol`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33` |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.8% | 172.7ms |     141 | `(garbage collector)` | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function                   | Location                                   |
| ----: | -----: | ------: | -------------------------- | ------------------------------------------ |
|  2.7% | 68.8ms |      55 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
|  0.3% |  8.8ms |       7 | `readFileSync`             | `node:fs:433:22`                           |
|  0.3% |  8.8ms |       1 | `post`                     | `node:inspector:118:7`                     |
|  0.2% |  6.3ms |       5 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`            |
|  0.1% |  2.5ms |       2 | `statSync`                 | `node:fs:1745:18`                          |
|  0.1% |  2.5ms |       2 | `slice`                    | `node:buffer:640:12`                       |
|  0.1% |  2.5ms |       2 | `closeSync`                | `node:fs:516:19`                           |
| <0.1% |  1.3ms |       1 | `(anonymous)`              | `node:internal/perf/usertiming:1:1`        |
| <0.1% |  1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| <0.1% |  1.3ms |       1 | `isBigInt64Array`          | `node:internal/util/types:53:25`           |
| <0.1% |  1.3ms |       1 | `tryStatSync`              | `node:fs:389:21`                           |

#### Lines

Lines ranked by contribution to each function's self time.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 26.3% | 22.5ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
| 20.2% | 17.3ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
| 12.3% | 10.5ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309` |
|  7.1% |  6.1ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63403` |
|  3.0% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63395` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Location                                |
| -----: | -----: | ------: | --------------------------------------- |
| 100.0% | 68.8ms |      55 | `node:internal/modules/cjs/loader:1713` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 54.2% | 36.3ms |      30 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 15.7% | 10.5ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805` |
|  7.6% |  5.1ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |
|  5.6% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65348` |
|  3.7% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63859` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 42.0% | 20.0ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
|  8.0% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61651` |
|  6.5% |  3.1ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |
|  5.3% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58611` |
|  5.3% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:652`   |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 56.9% | 25.1ms |      20 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999` |
| 19.8% |  8.7ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
| 13.9% |  6.1ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63058` |
|  2.9% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63016` |
|  2.8% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63061` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 41.8% | 16.5ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61999` |
| 12.6% |  5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983` |
|  9.2% |  3.6ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61993` |
|  6.3% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61994` |
|  3.7% |  1.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62014` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 96.0% | 29.3ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
|  4.0% |  1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 32.3% | 8.4ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973` |
|  9.7% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  9.6% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
|  9.6% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |
|  4.9% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62974` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 33.5% | 8.7ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45473` |
| 23.9% | 6.2ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448` |
|  9.9% | 2.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44917` |
|  9.6% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45487` |
|  9.0% | 2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45484` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 21.5% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11247` |
| 10.9% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11379` |
| 10.5% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11236` |
|  6.9% | 1.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:12116` |
|  5.7% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 17.1% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57765` |
| 11.3% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57659` |
| 11.3% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57630` |
| 10.9% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57631` |
|  5.9% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57747` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 17.7% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66728` |
| 11.9% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703` |
|  6.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66739` |
|  6.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66874` |
|  6.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66378` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 12.5% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64138` |
| 12.5% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64378` |
| 12.5% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64406` |
| 12.3% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64361` |
| 11.2% | 2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64408` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 25.8% | 5.2ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45539` |
| 14.7% | 3.0ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45718` |
|  7.4% | 1.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45558` |
|  6.4% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45646` |
|  6.4% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538` |

##### `getConditionalTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 45.3% | 8.2ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61944` |
| 27.5% | 5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61954` |
| 13.4% | 2.4ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936` |
|  6.9% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61942` |
|  6.9% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61955` |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 82.4% | 13.6ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |
|  7.8% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61729` |
|  7.6% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |

##### `checkIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33`)

|    % |  Time | Samples | Location                                                                              |
| ---: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 8.3% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69712` |
| 8.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69873` |
| 8.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69744` |
| 8.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69737` |
| 8.0% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69855` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 38.8% | 6.0ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60067` |
| 16.2% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60100` |
| 14.8% | 2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60066` |
|  8.1% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60104` |
|  8.1% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60017` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 57.3% | 8.7ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57861` |
| 24.3% | 3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857` |
|  8.2% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57601` |
|  7.1% | 1.1ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57862` |
|  1.1% | 0.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57880` |

##### `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`)

|     % |  Time | Samples | Location                                                                            |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------- |
| 61.7% | 8.9ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945` |
| 26.2% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:950` |
|  4.0% | 0.6ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:948` |

##### `getTypeOfSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 27.4% | 3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55379` |
| 19.9% | 2.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55374` |
| 18.5% | 2.6ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55391` |
| 16.4% | 2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373` |
|  8.9% | 1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55384` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 8.8ms |       7 | `node:fs:440` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|     % |  Time | Samples | Location                     |
| ----: | ----: | ------: | ---------------------------- |
| 80.1% | 5.0ms |       4 | `node:internal/fs/utils:553` |
| 19.9% | 1.3ms |       1 | `node:internal/fs/utils:565` |

##### `statSync` (`node:fs:1745:18`)

|     % |  Time | Samples | Location       |
| ----: | ----: | ------: | -------------- |
| 50.8% | 1.3ms |       1 | `node:fs:1747` |
| 49.2% | 1.3ms |       1 | `node:fs:1746` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.5ms |       2 | `node:buffer:640` |

##### `closeSync` (`node:fs:516:19`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 2.5ms |       2 | `node:fs:517` |

##### `(anonymous)` (`node:internal/perf/usertiming:1:1`)

|      % |  Time | Samples | Location                           |
| -----: | ----: | ------: | ---------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/perf/usertiming:44` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Time | Samples | Location                            |
| -----: | ----: | ------: | ----------------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/bootstrap/realm:397` |

##### `isBigInt64Array` (`node:internal/util/types:53:25`)

|      % |  Time | Samples | Location                      |
| -----: | ----: | ------: | ----------------------------- |
| 100.0% | 1.3ms |       1 | `node:internal/util/types:54` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |  Time | Samples | Location      |
| -----: | ----: | ------: | ------------- |
| 100.0% | 1.3ms |       1 | `node:fs:390` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 37.6% | 32.1ms |      36 | `checkTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 32.9% | 28.1ms |      25 | `typeRelatedToSomeType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  9.1% |  7.8ms |      14 | `isRelatedToWorker`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63300:39` |
|  5.2% |  4.4ms |      10 | `isPropertySymbolTypeRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64638:49` |
|  4.3% |  3.7ms |       3 | `typeRelatedToEachType`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63677:43` |

##### `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`)

|      % |   Time | Samples | Caller        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 68.8ms |      55 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 52.0% | 34.8ms |      36 | `isIdenticalTo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
| 40.6% | 27.2ms |      34 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  5.7% |  3.8ms |       3 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  1.7% |  1.2ms |       1 | `checkTypeRelatedTo`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |   Time | Samples | Caller                  | Location                                                                                 |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 47.5ms |      41 | `instantiateTypeWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |   Time | Samples | Caller                                     | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 95.1% | 42.0ms |      34 | `isTypeRelatedTo`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  3.8% |  1.7ms |       2 | `checkTypeAssignableTo`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62206:39` |
|  1.1% |  0.5ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 96.8% | 38.3ms |      43 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
|  3.2% |  1.3ms |       1 | `instantiateTypeWorker`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 90.4% | 27.6ms |      23 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  9.6% |  2.9ms |       3 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 95.1% | 24.8ms |      26 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  4.9% |  1.3ms |       1 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |

##### `bind` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 53.5% | 13.9ms |      14 | `visitNode`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29882:23` |
| 32.5% |  8.5ms |       9 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  7.5% |  2.0ms |       3 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38` |
|  4.5% |  1.2ms |       2 | `bindSourceFile`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43471:32` |
|  1.9% |  0.5ms |       1 | `bindConditionalExpressionFlow` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:44746:47` |

##### `scan` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22`)

|      % |   Time | Samples | Caller                  | Location                                                                                 |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 23.4ms |      22 | `nextTokenWithoutCheck` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31155:39` |

##### `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`)

|      % |   Time | Samples | Caller                           | Location                                                                                 |
| -----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 22.5ms |      21 | `getUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |  Time | Samples | Caller                        | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 21.0% | 4.5ms |       5 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 17.7% | 3.8ms |       3 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |
| 13.2% | 2.8ms |       7 | `inferTypes`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28` |
| 12.3% | 2.6ms |       3 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49` |
| 11.7% | 2.5ms |       3 | `inferToConditionalType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67141:44` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 20.3ms |      27 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `bindWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45538:28`)

|      % |   Time | Samples | Caller | Location                                                                                 |
| -----: | -----: | ------: | ------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 20.2ms |      23 | `bind` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22` |

##### `getConditionalTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49`)

|     % |   Time | Samples | Caller                                       | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.8% | 16.7ms |      14 | `instantiateTypeWorker`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
|  7.2% |  1.3ms |       1 | `getConstraintOfDistributiveConditionalType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57336:60` |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|      % |   Time | Samples | Caller                     | Location                                                                                 |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 16.5ms |      14 | `resolveObjectTypeMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |

##### `checkIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33`)

|      % |   Time | Samples | Caller                  | Location                                                                                 |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 15.5ms |      15 | `checkExpressionWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |

##### `getIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37`)

|     % |  Time | Samples | Caller                              | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 42.1% | 6.5ms |       7 | `instantiateTypeWorker`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |
| 24.5% | 3.8ms |       4 | `getCrossProductIntersections`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60118:46` |
| 23.4% | 3.6ms |       3 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  8.1% | 1.3ms |       1 | `intersectTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56761:32` |
|  1.9% | 0.3ms |       1 | `getTypeFromInference`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66547:38` |

##### `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`)

|     % |   Time | Samples | Caller                                         | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 66.8% | 10.2ms |       9 | `createUnionOrIntersectionProperty`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 16.4% |  2.5ms |       2 | `propertiesRelatedTo`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64743:41` |
|  8.5% |  1.3ms |       1 | `inferFromProperties`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
|  5.8% |  0.9ms |       1 | `(anonymous)`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70828:43` |
|  2.5% |  0.4ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |

##### `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`)

|     % |  Time | Samples | Caller                      | Location                                                                                 |
| ----: | ----: | ------: | --------------------------- | ---------------------------------------------------------------------------------------- |
| 26.5% | 3.8ms |       3 | `couldContainTypeVariables` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 11.0% | 1.6ms |       2 | `instantiateContextualType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70988:43` |
|  8.9% | 1.3ms |       1 | `containsReference`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61806:39` |
|  8.9% | 1.3ms |       1 | `applyToReturnTypes`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66291:36` |
|  8.9% | 1.3ms |       1 | `getReducedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |

##### `getTypeOfSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55373:33`)

|     % |   Time | Samples | Caller                                                     | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 61.6% |  8.6ms |       7 | `getTypeOfParameter`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75450:36` |
| 17.0% |  2.4ms |       2 | `inferFromProperties`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 11.9% |  1.7ms |       2 | `getTypeOfInstantiatedSymbol`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:55325:45` |
|  9.2% |  1.3ms |       1 | `contextuallyCheckFunctionExpressionOrObjectLiteralMethod` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76147:74` |
|  0.3% | 42.0µs |       1 | `checkPropertyAccessExpressionOrQualifiedName`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |

##### `readFileSync` (`node:fs:433:22`)

|      % |  Time | Samples | Caller            | Location                                   |
| -----: | ----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 8.8ms |       7 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `post` (`node:inspector:118:7`)

|      % |  Time | Samples | Caller        | Location                   |
| -----: | ----: | ------: | ------------- | -------------------------- |
| 100.0% | 8.8ms |       1 | `(anonymous)` | `cpuprofile-run.mjs:15:15` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|      % |  Time | Samples | Caller     | Location          |
| -----: | ----: | ------: | ---------- | ----------------- |
| 100.0% | 6.3ms |       5 | `statSync` | `node:fs:1745:18` |

##### `statSync` (`node:fs:1745:18`)

|      % |  Time | Samples | Caller     | Location                                                                                |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `statSync` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7616:30` |

##### `slice` (`node:buffer:640:12`)

|      % |  Time | Samples | Caller     | Location             |
| -----: | ----: | ------: | ---------- | -------------------- |
| 100.0% | 2.5ms |       2 | `toString` | `node:buffer:839:46` |

##### `closeSync` (`node:fs:516:19`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 2.5ms |       2 | `readFileSync` | `node:fs:433:22` |

##### `(anonymous)` (`node:internal/perf/usertiming:1:1`)

|      % |  Time | Samples | Caller                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|      % |  Time | Samples | Caller           | Location                               |
| -----: | ----: | ------: | ---------------- | -------------------------------------- |
| 100.0% | 1.3ms |       1 | `requireBuiltin` | `node:internal/bootstrap/realm:422:24` |

##### `isBigInt64Array` (`node:internal/util/types:53:25`)

|      % |  Time | Samples | Caller                | Location                        |
| -----: | ----: | ------: | --------------------- | ------------------------------- |
| 100.0% | 1.3ms |       1 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |

##### `tryStatSync` (`node:fs:389:21`)

|      % |  Time | Samples | Caller         | Location         |
| -----: | ----: | ------: | -------------- | ---------------- |
| 100.0% | 1.3ms |       1 | `readFileSync` | `node:fs:433:22` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 91.5% | 2.32s |   2,556 | `(anonymous)`                              | `cpuprofile-run.mjs`                                                                      |
| 91.2% | 2.32s |   2,555 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                                                                   |
| 83.5% | 2.12s |   2,380 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 72.8% | 1.85s |   2,119 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 72.7% | 1.85s |   2,118 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 72.7% | 1.85s |   2,118 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 72.7% | 1.85s |   2,118 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 72.7% | 1.85s |   2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 72.7% | 1.84s |   2,119 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 72.7% | 1.84s |   2,117 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 72.6% | 1.84s |   2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 72.6% | 1.84s |   2,116 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 72.6% | 1.84s |   2,116 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 65.4% | 1.66s |   1,833 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 65.4% | 1.66s |   1,833 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 65.4% | 1.66s |   1,833 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 65.4% | 1.66s |   1,833 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 64.8% | 1.64s |   1,814 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 64.8% | 1.64s |   1,814 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 48.1% | 1.22s |   1,311 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 83.5% | 2.12s |   2,380 | `forEach`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 72.8% | 1.85s |   2,119 | `runWithCancellationToken`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 72.7% | 1.85s |   2,118 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |
| 72.7% | 1.85s |   2,118 | `getAndCacheDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 72.7% | 1.85s |   2,118 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
| 72.7% | 1.85s |   2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 72.7% | 1.84s |   2,119 | `getSemanticDiagnosticsForFile`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 72.7% | 1.84s |   2,117 | `flatMap`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 72.6% | 1.84s |   2,118 | `(anonymous)`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
| 72.6% | 1.84s |   2,116 | `getDiagnosticsHelper`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 72.6% | 1.84s |   2,116 | `getSemanticDiagnostics`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 65.4% | 1.66s |   1,833 | `getDiagnosticsWorker`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 65.4% | 1.66s |   1,833 | `getDiagnostics`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 65.4% | 1.66s |   1,833 | `checkSourceFileWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 65.4% | 1.66s |   1,833 | `checkSourceFile`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 64.8% | 1.64s |   1,814 | `checkSourceElementWorker`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`  |
| 64.8% | 1.64s |   1,814 | `checkSourceElement`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 48.1% | 1.22s |   1,311 | `checkExpression`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 48.1% | 1.22s |   1,310 | `checkExpressionWorker`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`  |
| 47.6% | 1.21s |   1,348 | `checkBlock`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

##### Garbage collector

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 6.8% | 172.7ms |     141 | `(garbage collector)` | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function                   | Location                                   |
| ---: | -----: | ------: | -------------------------- | ------------------------------------------ |
| 3.7% | 94.0ms |      75 | `(anonymous)`              | `node:internal/modules/cjs/loader:1878:37` |
| 3.7% | 94.0ms |      75 | `(anonymous)`              | `node:internal/modules/cjs/loader:1490:33` |
| 3.7% | 94.0ms |      75 | `(anonymous)`              | `node:internal/modules/cjs/loader:1193:24` |
| 3.7% | 94.0ms |      75 | `wrapModuleLoad`           | `node:internal/modules/cjs/loader:237:24`  |
| 3.7% | 94.0ms |      75 | `(anonymous)`              | `node:internal/modules/cjs/loader:1519:36` |
| 3.7% | 94.0ms |      75 | `require`                  | `node:internal/modules/helpers:146:19`     |
| 3.2% | 81.4ms |      65 | `(anonymous)`              | `node:internal/modules/cjs/loader:1731:37` |
| 2.7% | 68.8ms |      55 | `wrapSafe`                 | `node:internal/modules/cjs/loader:1671:18` |
| 0.8% | 21.5ms |      17 | `readFileSync`             | `node:fs:433:22`                           |
| 0.6% | 16.2ms |      13 | `statSync`                 | `node:fs:1745:18`                          |
| 0.5% | 12.7ms |      10 | `defaultLoadImpl`          | `node:internal/modules/cjs/loader:1112:25` |
| 0.5% | 12.7ms |      10 | `loadSource`               | `node:internal/modules/cjs/loader:1797:20` |
| 0.3% |  8.8ms |       1 | `post`                     | `node:inspector:118:7`                     |
| 0.3% |  7.5ms |       6 | `getStatsFromBinding`      | `node:internal/fs/utils:552:29`            |
| 0.2% |  5.1ms |       4 | `openSync`                 | `node:fs:559:18`                           |
| 0.1% |  2.5ms |       2 | `(anonymous)`              | `node:fs:2851:23`                          |
| 0.1% |  2.5ms |       2 | `slice`                    | `node:buffer:640:12`                       |
| 0.1% |  2.5ms |       2 | `toString`                 | `node:buffer:839:46`                       |
| 0.1% |  2.5ms |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27`     |
| 0.1% |  2.5ms |       2 | `requireBuiltin`           | `node:internal/bootstrap/realm:422:24`     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`cpuprofile-run.mjs`)

|     % |  Time | Samples | Callee             | Location                   |
| ----: | ----: | ------: | ------------------ | -------------------------- |
| 99.6% | 2.32s |   2,555 | `typeCheckProject` | `tsc-workload.mjs:3:33`    |
|  0.4% | 8.8ms |       1 | `post`             | `cpuprofile-run.mjs:14:14` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 79.7% |   1.84s |   2,116 | `getSemanticDiagnostics`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
| 15.7% | 365.2ms |     354 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  4.1% |  94.0ms |      75 | `require`                          | `node:internal/modules/helpers:146:19`                                                    |
|  0.5% |  12.5ms |      10 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 77.4% |   1.64s |   1,810 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 12.5% | 265.0ms |     267 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |
|  7.8% | 165.2ms |     259 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`  |
|  5.9% | 126.3ms |     191 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  3.9% |  81.9ms |      76 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|     % |  Time | Samples | Callee        | Location                                                                                  |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 1.85s |   2,118 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58`)

|      % |  Time | Samples | Callee                     | Location                                                                                  |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.85s |   2,118 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                                     | Location                                                                                  |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.85s |   2,118 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114734:58` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51`)

|      % |  Time | Samples | Callee                   | Location                                                                                  |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.85s |   2,118 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 89.9% |   1.66s |   1,833 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 10.0% | 185.5ms |     283 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |
|  0.1% |   1.3ms |       2 | `getMergedBindAndCheckDiagnostics`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                              | Location                                                                                  |
| -----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.84s |   2,117 | `getBindAndCheckDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114731:51` |
|  <0.1% | 0.6ms |       2 | `concatenate`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`    |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|     % |  Time | Samples | Callee        | Location                                                                                  |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 1.84s |   2,116 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99` |
|  0.1% | 1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20135:43`  |
| <0.1% | 0.1ms |       1 | `addRange`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`   |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114653:99`)

|      % |  Time | Samples | Callee                          | Location                                                                                  |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.84s |   2,118 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 1.84s |   2,116 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40`)

|      % |  Time | Samples | Callee                 | Location                                                                                  |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.84s |   2,116 | `getDiagnosticsHelper` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|     % |  Time | Samples | Callee            | Location                                                                                 |
| ----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 99.9% | 1.66s |   1,832 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |
|  0.1% | 1.2ms |       1 | `mark`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:3611:22`  |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.66s |   1,833 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |    Time | Samples | Callee                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 52.1% | 866.7ms |     886 | `checkDeferredNodes`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 47.6% | 791.3ms |     942 | `forEach`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.2% |   3.8ms |       4 | `checkUnusedIdentifiers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |  Time | Samples | Callee                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.66s |   1,833 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `checkSourceElementWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42`)

|     % |    Time | Samples | Callee                     | Location                                                                                 |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 73.5% |   1.21s |   1,346 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 40.2% | 662.7ms |     619 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 40.2% | 662.7ms |     619 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 24.3% | 399.8ms |     455 | `checkExpressionStatement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80548:42` |
| 21.8% | 360.0ms |     402 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|     % |  Time | Samples | Callee                     | Location                                                                                 |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 99.9% | 1.64s |   1,813 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |
|  0.1% | 1.3ms |       1 | `checkFunctionDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79643:42` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|     % |   Time | Samples | Callee                                          | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 99.9% |  1.22s |   1,310 | `checkExpressionWorker`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39` |
|  1.4% | 17.5ms |      19 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77574:63` |
| <0.1% |  0.3ms |       6 | `checkCallExpression`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |

##### `checkExpressionWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77834:39`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 89.3% |   1.09s |   1,133 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 32.3% | 395.8ms |     457 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 30.0% | 367.0ms |     358 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 13.9% | 170.5ms |     159 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
| 11.5% | 140.6ms |     178 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 1.21s |   1,347 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1878:37`)

|     % |   Time | Samples | Callee        | Location                                   |
| ----: | -----: | ------: | ------------- | ------------------------------------------ |
| 86.5% | 81.4ms |      65 | `(anonymous)` | `node:internal/modules/cjs/loader:1731:37` |
| 13.5% | 12.7ms |      10 | `loadSource`  | `node:internal/modules/cjs/loader:1797:20` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1490:33`)

|      % |   Time | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 94.0ms |      75 | `(anonymous)` | `node:internal/modules/cjs/loader:1878:37` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1193:24`)

|      % |   Time | Samples | Callee                 | Location                                   |
| -----: | -----: | ------: | ---------------------- | ------------------------------------------ |
| 100.0% | 94.0ms |      75 | `(anonymous)`          | `node:internal/modules/cjs/loader:1490:33` |
|   1.3% |  1.3ms |       1 | `loadBuiltinWithHooks` | `node:internal/modules/cjs/loader:1159:30` |

##### `wrapModuleLoad` (`node:internal/modules/cjs/loader:237:24`)

|      % |   Time | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 94.0ms |      75 | `(anonymous)` | `node:internal/modules/cjs/loader:1193:24` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1519:36`)

|      % |   Time | Samples | Callee           | Location                                  |
| -----: | -----: | ------: | ---------------- | ----------------------------------------- |
| 100.0% | 94.0ms |      75 | `wrapModuleLoad` | `node:internal/modules/cjs/loader:237:24` |

##### `require` (`node:internal/modules/helpers:146:19`)

|      % |   Time | Samples | Callee        | Location                                   |
| -----: | -----: | ------: | ------------- | ------------------------------------------ |
| 100.0% | 94.0ms |      75 | `(anonymous)` | `node:internal/modules/cjs/loader:1519:36` |

##### `(anonymous)` (`node:internal/modules/cjs/loader:1731:37`)

|     % |   Time | Samples | Callee        | Location                                                                            |
| ----: | -----: | ------: | ------------- | ----------------------------------------------------------------------------------- |
| 84.6% | 68.8ms |      55 | `wrapSafe`    | `node:internal/modules/cjs/loader:1671:18`                                          |
| 15.4% | 12.5ms |      10 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:1` |

##### `readFileSync` (`node:fs:433:22`)

|     % |  Time | Samples | Callee         | Location         |
| ----: | ----: | ------: | -------------- | ---------------- |
| 23.6% | 5.1ms |       4 | `openSync`     | `node:fs:559:18` |
| 17.8% | 3.8ms |       3 | `readFileUtf8` | `<unknown>`      |
| 11.6% | 2.5ms |       2 | `closeSync`    | `node:fs:516:19` |
|  5.8% | 1.3ms |       1 | `tryStatSync`  | `node:fs:389:21` |

##### `statSync` (`node:fs:1745:18`)

|     % |  Time | Samples | Callee                | Location                        |
| ----: | ----: | ------: | --------------------- | ------------------------------- |
| 46.7% | 7.5ms |       6 | `getStatsFromBinding` | `node:internal/fs/utils:552:29` |
| 37.6% | 6.1ms |       5 | `stat`                | `<unknown>`                     |

##### `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`)

|      % |   Time | Samples | Callee         | Location         |
| -----: | -----: | ------: | -------------- | ---------------- |
| 100.0% | 12.7ms |      10 | `readFileSync` | `node:fs:433:22` |

##### `loadSource` (`node:internal/modules/cjs/loader:1797:20`)

|      % |   Time | Samples | Callee            | Location                                   |
| -----: | -----: | ------: | ----------------- | ------------------------------------------ |
| 100.0% | 12.7ms |      10 | `defaultLoadImpl` | `node:internal/modules/cjs/loader:1112:25` |

##### `getStatsFromBinding` (`node:internal/fs/utils:552:29`)

|     % |  Time | Samples | Callee            | Location                         |
| ----: | ----: | ------: | ----------------- | -------------------------------- |
| 16.6% | 1.3ms |       1 | `isBigInt64Array` | `node:internal/util/types:53:25` |

##### `openSync` (`node:fs:559:18`)

|      % |  Time | Samples | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 5.1ms |       4 | `open` | `<unknown>` |

##### `(anonymous)` (`node:fs:2851:23`)

|      % |  Time | Samples | Callee     | Location    |
| -----: | ----: | ------: | ---------- | ----------- |
| 100.0% | 2.5ms |       2 | `realpath` | `<unknown>` |

##### `toString` (`node:buffer:839:46`)

|      % |  Time | Samples | Callee  | Location             |
| -----: | ----: | ------: | ------- | -------------------- |
| 100.0% | 2.5ms |       2 | `slice` | `node:buffer:640:12` |

##### `compileForInternalLoader` (`node:internal/bootstrap/realm:385:27`)

|     % |  Time | Samples | Callee        | Location                            |
| ----: | ----: | ------: | ------------- | ----------------------------------- |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:internal/perf/usertiming:1:1` |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:perf_hooks:1:1`               |
| 50.0% | 1.3ms |       1 | `(anonymous)` | `node:crypto:1:1`                   |

##### `requireBuiltin` (`node:internal/bootstrap/realm:422:24`)

|      % |  Time | Samples | Callee                     | Location                               |
| -----: | ----: | ------: | -------------------------- | -------------------------------------- |
| 100.0% | 2.5ms |       2 | `compileForInternalLoader` | `node:internal/bootstrap/realm:385:27` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `(anonymous)` (`cpuprofile-run.mjs`)

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.7% | 68.8ms |      55 | `wrapSafe` (`node:internal/modules/cjs/loader:1671:18`) ← `(anonymous)` (1731:37) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  8.8ms |       7 | `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.3% |  8.8ms |       1 | `post` (`node:inspector:118:7`) ← `(anonymous)` (`cpuprofile-run.mjs:15:15`) ← `post` (14:14)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  6.3ms |       5 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  6.3ms |       5 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  6.1ms |       5 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |  5.1ms |       5 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  5.0ms |       4 | `scanIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`) ← `scan` (11226:22) ← `nextTokenWithoutCheck` (31155:39) ← `nextToken` (31162:27) ← `parseExpected` (31268:31) ← `parseReturnStatement` (35105:38) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseBlock` (34964:28) ← `parseStatement` (35399:32) ← `parseIfStatement` (35017:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseBlock` (34964:28) ← `parseFunctionBlock` (34989:36) ← `parseFunctionBlockOrSemicolon` (35560:47) ← `parseMethodDeclaration` (35734:40) ← `parsePropertyOrMethodDeclaration` (35754:50) ← `parseClassElement` (35932:35) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseClassMembers` (36059:35) ← `parseClassDeclarationOrExpression` (35992:51) ← `parseClassDeclaration` (35989:39) ← `parseDeclarationWorker` (35510:40) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  5.0ms |       4 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  5.0ms |       4 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  5.0ms |       4 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  5.0ms |       4 | `createUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51`) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% |  4.9ms |       4 | `getUnionOrIntersectionProperty` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57774:48`) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.2% |  4.9ms |       4 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  3.8ms |       3 | `readFileUtf8` ← `readFileSync` (`node:fs:433:22`) ← `defaultLoadImpl` (`node:internal/modules/cjs/loader:1112:25`) ← `loadSource` (1797:20) ← `(anonymous)` (1878:37) ← `(anonymous)` (1490:33) ← `(anonymous)` (1193:24) ← `wrapModuleLoad` (237:24) ← `(anonymous)` (1519:36) ← `require` (`node:internal/modules/helpers:146:19`) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  3.8ms |       3 | `some` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`) ← `couldContainTypeVariables` (66377:43) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `checkDeferredNodes` (83607:36) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                |
| 0.1% |  3.8ms |       3 | `pushComment` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36899:41`) ← `parseTagComments` (36891:42) ← `parseTrailingTagComments` (36884:50) ← `parseParameterOrPropertyTag` (37098:53) ← `parseTag` (36808:34) ← `(anonymous)` (36647:74) ← `scanRange` (12054:27) ← `parseJSDocCommentWorker` (36627:45) ← `(anonymous)` (36600:79) ← `doInsideOfContext` (31060:35) ← `parseJSDocComment` (36596:39) ← `(anonymous)` (30890:92) ← `mapDefined` (809:24) ← `addJSDocComment` (30888:33) ← `withJSDoc` (30884:27) ← `parsePropertyOrMethodSignature` (32801:48) ← `parseTypeMember` (32860:33) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseObjectTypeMembers` (32901:40) ← `parseInterfaceDeclaration` (36062:43) ← `parseDeclarationWorker` (35510:40) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseModuleOrNamespaceDeclaration` (36118:51) ← `parseModuleDeclaration` (36151:40) ← `parseDeclarationWorker` (35510:40) ← `(anonymous)` (35496:74) ← `doInsideOfContext` (31060:35) ← `parseDeclaration` (35473:34) ← `parseStatement` (35399:32) ← `parseListElement` (31909:34) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `getSourceFile` (113089:31) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% |  3.8ms |       3 | `getNarrowableTypeForReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69665:47`) ← `getInitialOrAssignedType` (68631:46) ← `getTypeAtFlowAssignment` (68637:45) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getTypeAtFlowCondition` (68750:44) ← `getTypeAtFlowNode` (68534:39) ← `getFlowTypeOfReference` (68502:40) ← `checkIdentifier` (69711:33) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `getSignatureApplicabilityError` (73779:48) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkForOfStatement` (80703:37) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkFunctionOrMethodDeclaration` (79750:50) ← `checkMethodDeclaration` (78362:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkClassDeclaration` (81884:39) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) |
| 0.1% |  3.8ms |       3 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeRelatedTo` (62938:33) ← `isTypeIdenticalTo` (62156:35) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkPropertyAssignment` (77553:41) ← `checkObjectLiteral` (71589:36) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `resolveCallExpression` (74486:39) ← `resolveSignature` (74959:34) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpressionWorker` (77834:39) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getBindAndCheckDiagnosticsForFileNoCache` (114734:58) ← `getAndCacheDiagnostics` (115004:40) ← `getBindAndCheckDiagnosticsForFile` (114731:51) ← `getSemanticDiagnosticsForFile` (114728:47) ← `(anonymous)` (114653:99) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) ← `getSemanticDiagnostics` (114663:40) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.1% |  3.8ms |       3 | `findSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115294:38`) ← `findSourceFile` (115284:32) ← `(anonymous)` (115242:65) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `(anonymous)` (113905:44) ← `forEach` (388:21) ← `createProgram` (113744:27) ← `typeCheckProject` (`tsc-workload.mjs:3:33`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
