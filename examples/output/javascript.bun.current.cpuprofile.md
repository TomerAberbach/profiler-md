# CPU profile

Took 5.79s over 4,388 samples (1.3ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 93.4% |   5.41s |   4,092 |
| Standard library |  3.9% | 227.5ms |     177 |
| Native           |  2.7% | 154.5ms |     118 |
| Unknown          | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                 |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.6% | 268.5ms |     191 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 2.9% | 165.7ms |     128 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.5% | 146.6ms |     113 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.4% | 141.0ms |     110 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 2.2% | 125.7ms |      97 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 1.9% | 112.3ms |      88 | `concat`                        | `<unknown>`                                                                              |
| 1.8% | 105.5ms |      81 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.4% |  81.0ms |      24 | `internIdentifier`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
| 1.4% |  80.5ms |      62 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
| 1.1% |  63.7ms |      50 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.0% |  60.5ms |      46 | `anonymous`                     | `<unknown>`                                                                              |
| 1.0% |  59.5ms |      34 | `forEachChild`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26` |
| 1.0% |  56.7ms |      43 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 0.9% |  52.0ms |      40 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 0.8% |  48.7ms |      38 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`    |
| 0.8% |  45.4ms |      36 | `couldContainTypeVariables`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 0.8% |  44.9ms |      35 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 0.7% |  41.3ms |      32 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 0.7% |  38.7ms |      30 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.6% |  36.4ms |      28 | `instantiateSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                                                                 |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.6% | 268.5ms |     191 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 2.9% | 165.7ms |     128 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.5% | 146.6ms |     113 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 2.4% | 141.0ms |     110 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 2.2% | 125.7ms |      97 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 1.8% | 105.5ms |      81 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.4% |  81.0ms |      24 | `internIdentifier`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
| 1.4% |  80.5ms |      62 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
| 1.1% |  63.7ms |      50 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 1.0% |  59.5ms |      34 | `forEachChild`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26` |
| 1.0% |  56.7ms |      43 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 0.9% |  52.0ms |      40 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 0.8% |  48.7ms |      38 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`    |
| 0.8% |  45.4ms |      36 | `couldContainTypeVariables`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 0.8% |  44.9ms |      35 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 0.7% |  41.3ms |      32 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 0.7% |  38.7ms |      30 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 0.6% |  36.4ms |      28 | `instantiateSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |
| 0.6% |  35.2ms |      27 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 0.6% |  34.7ms |      27 | `instantiateTypeWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### Standard library

|     % |    Time | Samples | Function      | Location                    |
| ----: | ------: | ------: | ------------- | --------------------------- |
|  1.9% | 112.3ms |      88 | `concat`      | `<unknown>`                 |
|  0.4% |  21.9ms |      17 | `slice`       | `<unknown>`                 |
|  0.4% |  21.2ms |      16 | `forEach`     | `<unknown>`                 |
|  0.2% |  12.9ms |      10 | `get`         | `<unknown>`                 |
|  0.2% |   9.4ms |       7 | `join`        | `<unknown>`                 |
|  0.1% |   8.5ms |       7 | `set`         | `<unknown>`                 |
|  0.1% |   6.8ms |       5 | `toString`    | `<unknown>`                 |
|  0.1% |   5.4ms |       4 | `next`        | `<unknown>`                 |
|  0.1% |   4.8ms |       4 | `lastIndexOf` | `<unknown>`                 |
|  0.1% |   3.0ms |       2 | `some`        | `<unknown>`                 |
| <0.1% |   2.6ms |       2 | `map`         | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `unshift`     | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `trimStart`   | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `Map`         | `<unknown>`                 |
| <0.1% |   1.5ms |       1 | `every`       | `<unknown>`                 |
| <0.1% |   1.5ms |       1 | `(anonymous)` | `internal:primordials:1:11` |
| <0.1% |   1.2ms |       1 | `replace`     | `<unknown>`                 |
| <0.1% |   1.2ms |       1 | `trim`        | `<unknown>`                 |
| <0.1% |   1.2ms |       1 | `resolve`     | `<unknown>`                 |
| <0.1% |   1.2ms |       1 | `push`        | `<unknown>`                 |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  1.0% | 60.5ms |      46 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  0.5% | 30.2ms |      22 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.5% | 26.4ms |      21 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.3% | 18.2ms |      14 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.1% |  6.3ms |       5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |  5.3ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.1% |  3.5ms |       3 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  1.5ms |       1 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| <0.1% |  1.3ms |       1 | `hasObservableSideEffectsForRegExpSplit`                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| <0.1% |  1.3ms |       1 | `file`                                                                                                                                                                                                                                                                                                                                                                           | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 86.3% | 231.9ms |     163 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63005` |
|  8.3% |  22.3ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63016` |
|  2.8% |   7.6ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |
|  1.6% |   4.4ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |
|  0.5% |   1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 73.8% | 122.3ms |      94 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
| 10.0% |  16.5ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63840` |
|  4.8% |   8.0ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63810` |
|  3.3% |   5.5ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63904` |
|  3.1% |   5.1ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63806` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 31.3% | 45.9ms |      36 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63310` |
| 14.9% | 21.9ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63394` |
| 12.5% | 18.3ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63316` |
| 10.2% | 14.9ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |
|  6.9% | 10.1ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63360` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 36.0% | 50.7ms |      39 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 19.2% | 27.0ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61741` |
| 12.6% | 17.7ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61771` |
| 12.0% | 16.9ms |      13 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
|  8.2% | 11.6ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 98.8% | 124.2ms |      96 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 54.3% | 57.3ms |      44 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
| 21.0% | 22.1ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62975` |
| 14.8% | 15.6ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  2.4% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |

##### `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 76.0% | 61.6ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31513` |
| 24.0% | 19.4ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31511` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 65.3% | 52.6ms |      40 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58609` |
| 17.1% | 13.8ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58606` |
|  9.6% |  7.8ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58601` |
|  5.0% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58611` |
|  2.9% |  2.4ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58597` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 16.8% | 10.7ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64138` |
| 13.5% |  8.6ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63925` |
|  9.8% |  6.2ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64429` |
|  8.5% |  5.4ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64006` |
|  7.9% |  5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63938` |

##### `forEachChild` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 51.8% | 30.8ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29920` |
|  8.4% |  5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29925` |
|  5.0% |  3.0ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29945` |
|  4.1% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29928` |
|  2.6% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29962` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 43.7% | 24.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57799` |
| 19.6% | 11.1ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57803` |
|  7.1% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57800` |
|  4.8% |  2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57807` |
|  4.2% |  2.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57802` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 77.1% | 40.1ms |      31 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57595` |
|  4.8% |  2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57596` |
|  2.9% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57605` |
|  2.6% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57602` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------- |
| 72.0% | 35.1ms |      28 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50` |
| 19.3% |  9.4ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63` |
|  5.8% |  2.8ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65` |
|  2.9% |  1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 28.1% | 12.7ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66388` |
| 26.3% | 11.9ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66383` |
| 17.5% |  7.9ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66378` |
| 10.8% |  4.9ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66386` |
|  3.2% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66384` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 68.2% | 30.6ms |      24 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |
| 31.8% | 14.3ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11157` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 52.7% | 21.8ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65399` |
| 27.3% | 11.3ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65397` |
| 13.2% |  5.5ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65391` |
|  6.8% |  2.8ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65396` |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 97.0% | 37.5ms |      29 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |
|  3.0% |  1.1ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56115` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 33.0% | 12.0ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61712` |
| 31.2% | 11.4ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61727` |
| 14.2% |  5.2ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61713` |
| 10.5% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61735` |
|  3.7% |  1.3ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61733` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 55.9% | 19.7ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61637` |
| 40.4% | 14.2ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61621` |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|     % |  Time | Samples | Location                                                                              |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------- |
| 21.4% | 7.5ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61984` |
| 17.0% | 5.9ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61986` |
|  8.3% | 2.9ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62040` |
|  7.5% | 2.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62006` |
|  7.2% | 2.5ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61992` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 94.1% | 20.0ms |      15 | 1        |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 5.4ms |       4 | 1        |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.0ms |       2 | 1        |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.6ms |       2 | 1        |

##### `every` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.5ms |       1 | 1        |

##### `(anonymous)` (`internal:primordials:1:11`)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.5ms |       1 | `internal:primordials:50` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Caller                         | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------ | ---------------------------------------------------------------------------------------- |
| 75.3% | 202.2ms |     144 | `isTypeOrBaseIdenticalTo`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
| 13.7% |  36.7ms |      25 | `getConditionalType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |
|  1.9% |   5.2ms |       4 | `checkTypeArgumentConstraints` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78532:46` |
|  1.8% |   4.9ms |       4 | `filter`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  1.1% |   2.9ms |       2 | `compareTypesAssignable`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62162:40` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 50.8% | 84.1ms |      65 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 49.2% | 81.6ms |      63 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 36.0% | 52.8ms |      41 | `checkTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 30.6% | 44.9ms |      36 | `typeRelatedToSomeType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 11.6% | 17.1ms |      13 | `compareSignaturesRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
| 10.1% | 14.9ms |      11 | `propertyRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64644:39` |
|  3.6% |  5.2ms |       3 | `eachTypeRelatedToType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63713:43` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Time | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 141.0ms |     110 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Caller                                 | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 22.4% | 28.2ms |      21 | `couldContainTypeVariables`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 15.4% | 19.4ms |      15 | `isObjectOrArrayLiteralType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67347:44` |
| 14.6% | 18.4ms |      15 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
| 10.0% | 12.5ms |       9 | `isTupleType`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65818:29` |
|  7.7% |  9.7ms |       7 | `getNormalizedType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `concat` (`<unknown>`)

|     % |   Time | Samples | Caller            | Location                                                                                 |
| ----: | -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 87.0% | 97.7ms |      77 | `getRelationKey`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  6.0% |  6.7ms |       5 | `getAliasId`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28` |
|  4.6% |  5.1ms |       4 | `concatenate`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`   |
|  1.3% |  1.5ms |       1 | `getTypeListId`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
|  1.1% |  1.3ms |       1 | `getFlowCacheKey` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67513:33` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |    Time | Samples | Caller        | Location                                                                                 |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 105.5ms |      81 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`)

|     % |   Time | Samples | Caller                    | Location                                                                                 |
| ----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 98.6% | 79.9ms |      23 | `createIdentifier`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31520:34` |
|  1.4% |  1.1ms |       1 | `parsePropertyNameWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31566:41` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Caller                            | Location                                                                                 |
| ----: | -----: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------- |
| 24.2% | 19.5ms |      15 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 22.9% | 18.5ms |      14 | `createTypeReference`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 16.6% | 13.4ms |      10 | `getUnionTypeFromSortedList`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |
| 13.9% | 11.2ms |       9 | `getAliasId`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28` |
|  9.9% |  8.0ms |       6 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 63.7ms |      50 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Caller            | Location                       |
| ----: | -----: | ------: | ----------------- | ------------------------------ |
| 91.3% | 55.2ms |      42 | `require`         | `<unknown>`                    |
|  2.4% |  1.5ms |       1 | `(anonymous)`     | `internal:streams/duplex:1:11` |
|  2.2% |  1.3ms |       1 | `get WriteStream` | `node:fs:587:18`               |
|  2.1% |  1.3ms |       1 | `(anonymous)`     | `node:fs:1:11`                 |
|  1.9% |  1.2ms |       1 | `bound require`   | `<unknown>`                    |

##### `forEachChild` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 57.2% | 34.0ms |      20 | `bindEachChild`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43931:31` |
| 29.8% | 17.8ms |       8 | `gatherPossibleChildren` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30475:36` |
|  7.2% |  4.3ms |       3 | `markNodeAssignments`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69609:37` |
|  3.9% |  2.3ms |       2 | `containsReference`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61806:39` |
|  1.9% |  1.1ms |       1 | `visitNodes`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29885:24` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 31.3% | 17.7ms |      13 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 28.0% | 15.9ms |      13 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 18.9% | 10.7ms |       8 | `getPropertyOfType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
|  7.4% |  4.2ms |       3 | `sameMap`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:667:21`   |
|  4.6% |  2.6ms |       2 | `getSignaturesOfType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Caller                                         | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 79.8% | 41.5ms |      32 | `getReducedApparentType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 10.3% |  5.4ms |       4 | `createUnionOrIntersectionProperty`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  4.5% |  2.3ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |
|  2.9% |  1.5ms |       1 | `resolveCallExpression`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
|  2.5% |  1.3ms |       1 | `getApparentTypeOfContextualType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70974:49` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|      % |   Time | Samples | Caller                 | Location                                                                                 |
| -----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 48.7ms |      38 | `getUnmatchedProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66531:38` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 61.0% | 27.7ms |      22 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 22.5% | 10.2ms |       8 | `inferFromTypes`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 13.5% |  6.1ms |       5 | `instantiateSymbol`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |
|  3.1% |  1.4ms |       1 | `forEach`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 51.6% | 23.2ms |      18 | `scanJsDocToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
| 48.4% | 21.7ms |      17 | `scanIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|      % |   Time | Samples | Caller                   | Location                                                                                 |
| -----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 41.3ms |      32 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 93.1% | 36.0ms |      28 | `resolveObjectTypeMembers`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
|  6.9% |  2.7ms |       2 | `resolveAnonymousTypeMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56847:45` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 72.5% | 26.4ms |      20 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 27.5% | 10.0ms |       8 | `instantiateList`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 48.8% | 17.2ms |      13 | `getMappedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 33.8% | 11.9ms |       9 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 17.4% |  6.1ms |       5 | `map`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |

##### `instantiateTypeWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39`)

|      % |   Time | Samples | Caller                     | Location                                                                                 |
| -----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 34.7ms |      27 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `statSync` (`<unknown>`)

|     % |   Time | Samples | Caller                           | Location                                                                                |
| ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------- |
| 94.7% | 28.6ms |      21 | `fileSystemEntryExists`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |
|  5.3% |  1.6ms |       1 | `getAccessibleFileSystemEntries` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7913:52` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.TBtwcX\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 65.3% | 17.2ms |      14 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82` |
| 34.7% |  9.2ms |       7 | `test`        | `<unknown>`                                                                              |

##### `slice` (`<unknown>`)

|     % |   Time | Samples | Caller                              | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 86.9% | 19.1ms |      15 | `captureErrorCalculationState`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  6.9% |  1.5ms |       1 | `filter`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  6.2% |  1.3ms |       1 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                                                                 |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------------------------------------------- |
| 93.8% | 19.9ms |      15 | `getNamedMembers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|  6.2% |  1.3ms |       1 | `extendExportSymbols` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50125:37` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                                                                |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 87.6% | 16.0ms |      12 | `readFileSync`   | `<unknown>`                                                                             |
| 12.4% |  2.3ms |       2 | `readFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 19.3% | 2.5ms |       2 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 11.7% | 1.5ms |       1 | `getPackageJsonInfo`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:42667:32` |
| 11.3% | 1.5ms |       1 | `isArrayType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65679:29` |
| 10.5% | 1.4ms |       1 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 10.1% | 1.3ms |       1 | `recursiveTypeRelatedTo`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `join` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 73.3% | 6.9ms |       5 | `(anonymous)`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |
| 14.8% | 1.4ms |       1 | `getTupleTargetType`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59329:36` |
| 11.9% | 1.1ms |       1 | `parseParameterOrPropertyTag` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:37098:53` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                                | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| 17.2% | 1.5ms |       1 | `set`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41988:25` |
| 15.3% | 1.3ms |       1 | `checkGrammarObjectLiteralExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85992:53` |
| 14.6% | 1.2ms |       1 | `createInstantiatedSymbolTable`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 14.5% | 1.2ms |       1 | `getWidenedTypeOfObjectLiteral`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66089:47` |
| 13.6% | 1.2ms |       1 | `addTypeToIntersection`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59841:39` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                                                                |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 6.8ms |       5 | `readFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30` |

##### `stringSplitFast` (`<unknown>`)

|     % |  Time | Samples | Caller           | Location                                                                                  |
| ----: | ----: | ------: | ---------------- | ----------------------------------------------------------------------------------------- |
| 82.2% | 5.2ms |       4 | `pathComponents` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6202:28`   |
| 17.8% | 1.1ms |       1 | `pathForLibFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115603:32` |

##### `next` (`<unknown>`)

|     % |  Time | Samples | Caller      | Location                                                                                |
| ----: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------- |
| 75.1% | 4.0ms |       3 | `arrayFrom` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23` |
| 24.9% | 1.3ms |       1 | `next`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:660:28`  |

##### `realpathNativeSync` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                                                                |
| ----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------- |
| 79.2% | 4.2ms |       3 | `bound realpathNativeSync` | `<unknown>`                                                                             |
| 20.8% | 1.1ms |       1 | `realpath`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7994:30` |

##### `lastIndexOf` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 77.2% | 3.7ms |       3 | `startsWith`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:2270:24`  |
| 22.8% | 1.1ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 3.5ms |       3 | `readdirSync` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location                                                                                 |
| ----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 50.3% | 1.5ms |       1 | `resolveCallExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
| 49.7% | 1.5ms |       1 | `setExportContextFlag`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45062:38` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                                                                                 |
| ----: | ----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 55.7% | 1.4ms |       1 | `convertArrayLiteralExpressionToJson`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40132:53` |
| 44.3% | 1.1ms |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65195:54` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `addWorkItem` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30479:29` |

##### `trimStart` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                                                                 |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `appendIfCommentDirective` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11775:42` |

##### `Map` (`<unknown>`)

|      % |  Time | Samples | Caller  | Location                                                                                 |
| -----: | ----: | ------: | ------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `visit` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50158:27` |

##### `every` (`<unknown>`)

|      % |  Time | Samples | Caller                          | Location                                                                                 |
| -----: | ----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `getFlowTypeOfAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72820:47` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                                                                |
| -----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `normalizePath` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6379:27` |

##### `(anonymous)` (`internal:primordials:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.5ms |       1 | `anonymous` | `<unknown>` |

##### `hasObservableSideEffectsForRegExpSplit` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location    |
| -----: | ----: | ------: | ---------------- | ----------- |
| 100.0% | 1.3ms |       1 | `[Symbol.split]` | `<unknown>` |

##### `file` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                     |
| -----: | ----: | ------: | ------------- | ---------------------------- |
| 100.0% | 1.3ms |       1 | `WriteStream` | `internal:fs/streams:196:21` |

##### `replace` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                                                                 |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `createDetachedDiagnostic` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19620:38` |

##### `trim` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                                                                 |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `removeTrailingWhitespace` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36758:50` |

##### `resolve` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.2ms |       1 | `(anonymous)` | `<unknown>` |

##### `push` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location                                                                                 |
| -----: | ----: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `checkObjectLiteral` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |  Time | Samples | Function                        | Location                                                                                  |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 5.79s |   4,386 | `(anonymous)`                   | `<unknown>`                                                                               |
|  99.8% | 5.78s |   4,380 | `processTicksAndRejections`     | `<unknown>`                                                                               |
|  99.8% | 5.78s |   4,380 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
|  99.8% | 5.78s |   4,380 | `evaluate`                      | `<unknown>`                                                                               |
|  99.8% | 5.78s |   4,380 | `moduleEvaluation`              | `<unknown>`                                                                               |
|  99.8% | 5.78s |   4,380 | `loadAndEvaluateModule`         | `<unknown>`                                                                               |
|  93.5% | 5.41s |   4,098 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
|  84.7% | 4.91s |   3,748 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
|  84.7% | 4.90s |   3,747 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
|  84.7% | 4.90s |   3,745 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
|  84.6% | 4.90s |   3,744 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|  84.6% | 4.90s |   3,743 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|  84.6% | 4.90s |   3,743 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
|  79.1% | 4.58s |   3,518 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
|  79.1% | 4.58s |   3,518 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  79.0% | 4.58s |   3,517 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
|  79.0% | 4.57s |   3,514 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
|  78.1% | 4.52s |   3,474 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  58.9% | 3.41s |   2,630 | `checkExpression`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
|  58.3% | 3.37s |   2,583 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                        | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 93.5% | 5.41s |   4,098 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 84.7% | 4.91s |   3,748 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 84.7% | 4.90s |   3,747 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 84.7% | 4.90s |   3,745 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 84.6% | 4.90s |   3,744 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 84.6% | 4.90s |   3,743 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 84.6% | 4.90s |   3,743 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 79.1% | 4.58s |   3,518 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 79.1% | 4.58s |   3,518 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 79.0% | 4.58s |   3,517 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 79.0% | 4.57s |   3,514 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 78.1% | 4.52s |   3,474 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 58.9% | 3.41s |   2,630 | `checkExpression`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 58.3% | 3.37s |   2,583 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
| 54.4% | 3.15s |   2,427 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |
| 51.3% | 2.97s |   2,293 | `getResolvedSignature`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`  |
| 46.4% | 2.68s |   2,070 | `resolveCall`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`  |
| 45.4% | 2.63s |   2,012 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 44.7% | 2.59s |   1,975 | `checkDeferredNode`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`  |
| 44.7% | 2.59s |   1,975 | `checkDeferredNodes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`  |

##### Standard library

|     % |    Time | Samples | Function          | Location                    |
| ----: | ------: | ------: | ----------------- | --------------------------- |
| 45.4% |   2.62s |   2,005 | `forEach`         | `<unknown>`                 |
|  1.9% | 112.3ms |      88 | `concat`          | `<unknown>`                 |
|  0.4% |  21.9ms |      17 | `slice`           | `<unknown>`                 |
|  0.2% |  13.9ms |      11 | `some`            | `<unknown>`                 |
|  0.2% |  12.9ms |      10 | `get`             | `<unknown>`                 |
|  0.2% |  10.2ms |       8 | `test`            | `<unknown>`                 |
|  0.2% |   9.4ms |       7 | `join`            | `<unknown>`                 |
|  0.1% |   8.5ms |       7 | `set`             | `<unknown>`                 |
|  0.1% |   6.8ms |       5 | `toString`        | `<unknown>`                 |
|  0.1% |   5.4ms |       4 | `next`            | `<unknown>`                 |
|  0.1% |   4.8ms |       4 | `lastIndexOf`     | `<unknown>`                 |
|  0.1% |   4.0ms |       3 | `map`             | `<unknown>`                 |
| <0.1% |   2.8ms |       2 | `get WriteStream` | `node:fs:587:18`            |
| <0.1% |   2.6ms |       2 | `sort`            | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `unshift`         | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `trimStart`       | `<unknown>`                 |
| <0.1% |   2.5ms |       2 | `Map`             | `<unknown>`                 |
| <0.1% |   1.5ms |       1 | `every`           | `<unknown>`                 |
| <0.1% |   1.5ms |       1 | `(anonymous)`     | `internal:primordials:1:11` |
| <0.1% |   1.5ms |       1 | `(anonymous)`     | `internal:shared:1:11`      |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.8% |  5.78s |   4,380 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| 99.8% |  5.78s |   4,380 | `evaluate`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| 99.8% |  5.78s |   4,380 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| 99.8% |  5.78s |   4,380 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  1.5% | 85.3ms |      65 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  1.4% | 79.7ms |      61 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|  1.4% | 79.7ms |      61 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  0.5% | 30.2ms |      22 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.5% | 26.4ms |      21 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.3% | 18.2ms |      14 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.1% |  6.9ms |       5 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |  6.3ms |       5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |  5.3ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.1% |  4.2ms |       3 | `bound realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |  3.5ms |       3 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  1.5ms |       1 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| <0.1% |  1.3ms |       1 | `hasObservableSideEffectsForRegExpSplit`                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| <0.1% |  1.3ms |       1 | `[Symbol.split]`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| <0.1% |  1.3ms |       1 | `file`                                                                                                                                                                                                                                                                                                                                                                           | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location         |
| ----: | ----: | ------: | ----------------------- | ---------------- |
| 99.8% | 5.78s |   4,379 | `loadAndEvaluateModule` | `<unknown>`      |
|  0.1% | 6.9ms |       5 | `parseModule`           | `<unknown>`      |
| <0.1% | 2.8ms |       2 | `get WriteStream`       | `node:fs:587:18` |
| <0.1% | 2.8ms |       2 | `anonymous`             | `<unknown>`      |
| <0.1% | 1.3ms |       1 | `(anonymous)`           | `<unknown>`      |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.78s |   4,380 | `(anonymous)` | `<unknown>` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.8% |   4.90s |   3,747 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.0% | 754.5ms |     539 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  79.7ms |      61 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  39.5ms |      31 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   2.8ms |       2 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.78s |   4,380 | `evaluate`         | `<unknown>` |
| 100.0% | 5.78s |   4,380 | `moduleEvaluation` | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.78s |   4,380 | `moduleEvaluation` | `<unknown>` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 83.5% |   4.52s |   3,474 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  6.6% | 360.2ms |     237 | `processRootFile`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115042:33` |
|  4.9% | 267.4ms |     189 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  3.7% | 201.9ms |     117 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  2.3% | 122.8ms |      95 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113905:44` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|     % |  Time | Samples | Callee                          | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 4.90s |   3,744 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| <0.1% | 1.4ms |       1 | `getSubPatternFromSpec`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20153:35`  |
| <0.1% | 1.3ms |       1 | `addRange`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1202:22`   |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.90s |   3,747 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                   | Location                                                                                  |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.90s |   3,744 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
|  <0.1% | 1.3ms |       1 | `getProgramDiagnostics`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114675:39` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                     | Location                                                                                  |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.90s |   3,743 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 93.5% |   4.58s |   3,518 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  6.5% | 318.4ms |     223 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |  Time | Samples | Callee        | Location                                                                                  |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.90s |   3,743 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                 |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.58s |   3,517 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.58s |   3,518 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|     % |  Time | Samples | Callee                  | Location                                                                                 |
| ----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 99.9% | 4.57s |   3,514 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |
| <0.1% | 1.1ms |       1 | `measure`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:3630:25`  |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |  Time | Samples | Callee                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 56.6% | 2.59s |   1,975 | `checkDeferredNodes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 43.2% | 1.97s |   1,531 | `forEach`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.1% | 6.0ms |       5 | `checkUnusedIdentifiers`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
|  0.1% | 2.7ms |       2 | `checkExternalModuleExports` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83279:44` |
| <0.1% | 1.1ms |       1 | `getNodeLinks`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028:30` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|     % |  Time | Samples | Callee                     | Location                                                                                 |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 74.7% | 3.37s |   2,583 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 45.1% | 2.04s |   1,559 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 44.9% | 2.03s |   1,554 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 24.1% | 1.09s |     849 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |
| 22.5% | 1.02s |     789 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.3% |   3.15s |   2,427 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.1% |   1.02s |     779 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 24.2% | 824.7ms |     635 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 16.6% | 568.4ms |     431 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
|  9.6% | 326.6ms |     254 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 3.37s |   2,582 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `checkCallExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 94.4% |   2.97s |   2,293 | `getResolvedSignature`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38` |
|  7.5% | 236.1ms |     175 | `getReturnTypeOfSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  1.9% |  59.6ms |      46 | `checkDeprecatedSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75174:42` |
|  0.2% |   6.0ms |       5 | `checkGrammarForOmittedArgument` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85883:48` |
| <0.1% |   1.4ms |       1 | `isInJSFile`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:16051:24` |

##### `getResolvedSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 90.3% |   2.68s |   2,070 | `resolveCall`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29` |
| 23.8% | 709.6ms |     549 | `resolveCallExpression`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
|  0.3% |   9.8ms |       8 | `resolveNewExpression`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74600:38` |
|  0.2% |   6.4ms |       5 | `pickLongestCandidateSignature` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74435:47` |
|  0.2% |   4.7ms |       4 | `getNodeLinks`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028:30` |

##### `resolveCall` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.6% |   2.48s |   1,912 | `chooseOverload`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74299:36` |
|  6.5% | 174.6ms |     138 | `forEach`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.2% |   6.4ms |       5 | `getSignatureApplicabilityError` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |
|  0.2% |   5.1ms |       4 | `getEffectiveCallArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73870:43` |
|  0.2% |   4.9ms |       4 | `some`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:945:18`   |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Callee                                    | Location                                                                                 |
| ----: | ------: | ------: | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| 79.3% |   2.08s |   1,601 | `isRelatedTo`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 12.2% | 321.9ms |     252 | `isIdenticalTo`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
|  1.0% |  26.1ms |      21 | `recursiveTypeRelatedTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
|  0.1% |   1.3ms |       1 | `reportIncompatibleStack`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63083:45` |
| <0.1% |   1.2ms |       1 | `createDiagnosticForNodeFromMessageChain` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:15054:53` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 98.5% |  2.59s |   1,975 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  1.2% | 30.4ms |      23 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|  0.4% |  9.9ms |       8 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |
|  0.1% |  3.5ms |       3 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47943:37` |
|  0.1% |  1.5ms |       1 | `checkEnumMember`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:82698:33` |

##### `checkDeferredNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`)

|     % |  Time | Samples | Callee                                                 | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 99.9% | 2.58s |   1,974 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70` |
|  0.1% | 1.4ms |       1 | `checkAccessorDeclaration`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78472:42` |

##### `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)

|      % |  Time | Samples | Callee    | Location    |
| -----: | ----: | ------: | --------- | ----------- |
| 100.0% | 2.59s |   1,975 | `forEach` | `<unknown>` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                                                             |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------ |
| 28.7% | 24.5ms |      19 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:10` |
|  1.7% |  1.5ms |       1 | `(anonymous)` | `internal:primordials:1:11`                                                          |
|  1.7% |  1.5ms |       1 | `(anonymous)` | `internal:shared:1:11`                                                               |
|  1.7% |  1.5ms |       1 | `(anonymous)` | `internal:validators:1:11`                                                           |
|  1.7% |  1.5ms |       1 | `(anonymous)` | `internal:streams/duplex:1:11`                                                       |

##### `require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 79.7ms |      61 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 79.7ms |      61 | `require`   | `<unknown>` |
|   1.4% |  1.2ms |       1 | `anonymous` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 87.6% | 16.0ms |      12 | `readFileSync` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 43.3% | 6.0ms |       5 | `isGenericFunctionReturningFunction` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74587:52` |
| 19.3% | 2.7ms |       2 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45060:60` |
| 15.7% | 2.2ms |       2 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74581:46` |

##### `test` (`<unknown>`)

|     % |  Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 89.5% | 9.2ms |       7 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 6.9ms |       5 | `(anonymous)` | `<unknown>` |

##### `bound realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 4.2ms |       3 | `realpathNativeSync` | `<unknown>` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 35.1% | 1.4ms |       1 | `convertPropertyValueToJson` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40140:44` |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 3.5ms |       3 | `readdirSync` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.8ms |       2 | `anonymous` | `<unknown>` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                                                                |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |       2 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1245:31` |

##### `(anonymous)` (`internal:shared:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.5ms |       1 | `anonymous` | `<unknown>` |

##### `[Symbol.split]` (`<unknown>`)

|      % |  Time | Samples | Callee                                   | Location    |
| -----: | ----: | ------: | ---------------------------------------- | ----------- |
| 100.0% | 1.3ms |       1 | `hasObservableSideEffectsForRegExpSplit` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 55.2ms |      42 | `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% | 55.1ms |       4 | `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`) ← `createIdentifier` (31520:34) ← `parseImportOrExportSpecifier` (36344:46) ← `parseDelimitedList` (32208:36) ← `parseBracketedList` (32274:36) ← `parseNamedImportsOrExports` (36324:44) ← `parseImportClause` (36273:35) ← `parseImportDeclarationOrImportEqualsDeclaration` (36192:65) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseAmbientExternalModuleDeclaration` (36129:55) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% | 39.6ms |      26 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% | 30.6ms |      24 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% | 28.8ms |      23 | `createTypeChecker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46937:31`) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 21.4ms |       4 | `_loop_18` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63565:41`) ← `hasExcessProperties` (63549:41) ← `isRelatedTo` (63309:33) ← `eachTypeRelatedToType` (63713:43) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `checkTypeRelatedToAndOptionallyElaborate` (62216:58) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% | 17.2ms |      14 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82`) ← `findIndex` (538:23) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% | 13.4ms |      11 | `concat` ← `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`) ← `recursiveTypeRelatedTo` (63805:44) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                      |
| 0.2% | 12.0ms |      10 | `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.2% | 11.1ms |       3 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `getReturnTypeFromBody` (75792:39) ← `getReturnTypeOfSignature` (58288:42) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `getQuickTypeOfExpression` (77740:42) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) |
| 0.2% | 11.0ms |       5 | `getNamedMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33`) ← `setStructuredTypeMembers` (50428:42) ← `resolveMappedTypeMembers` (57017:42) ← `resolveStructuredTypeMembers` (57178:46) ← `getPropertiesOfObjectType` (57207:43) ← `getPropertiesOfType` (57249:37) ← `isStringIndexSignatureOnlyType` (62848:48) ← `getIndexedAccessTypeOrUndefined` (60793:49) ← `getIndexedAccessType` (60777:38) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateMappedType` (61835:39) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getMappedType` (61620:31) ← `map` (647:17) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `getReturnTypeOfSignature` (58288:42) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% | 10.8ms |       8 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                               |
| 0.2% |  9.7ms |       8 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |  9.5ms |       1 | `forEachChild` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26`) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bind` (45448:22) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `forEachChild` (29919:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `bindSourceFile` (43471:32) ← `bindSourceFile` (43415:28) ← `initializeTypeChecker` (85192:39) ← `createTypeChecker` (46937:31) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |  9.2ms |       7 | `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                         |
| 0.2% |  9.2ms |       1 | `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43922:38`) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `bindSourceFile` (43471:32) ← `bindSourceFile` (43415:28) ← `initializeTypeChecker` (85192:39) ← `createTypeChecker` (46937:31) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  9.2ms |       7 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `findIndex` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:538:23`) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  8.8ms |       1 | `forEachChild` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:29919:26`) ← `gatherPossibleChildren` (30475:36) ← `forEachChildRecursively` (30433:37) ← `setParentRecursive` (20804:32) ← `bindJSDoc` (45500:27) ← `bindChildren` (43934:30) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachChild` (43931:31) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `forEach` (388:21) ← `bindEach` (43924:26) ← `bindEachFunctionsFirst` (43920:40) ← `bindChildren` (43934:30) ← `bindContainer` (43814:31) ← `bind` (45448:22) ← `bindSourceFile` (43471:32) ← `bindSourceFile` (43415:28) ← `initializeTypeChecker` (85192:39) ← `createTypeChecker` (46937:31) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.1% |  8.2ms |       6 | `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`) ← `isRelatedTo` (63309:33) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.1% |  8.0ms |       6 | `getMarkerTypeReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65258:40`) ← `_loop_21` (65285:41) ← `getVariancesWorker` (65276:36) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getConditionalType` (60911:36) ← `getConditionalTypeInstantiation` (61936:49) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `fillMissingTypeArguments` (58050:42) ← `checkTypeArgumentConstraints` (78532:46) ← `checkTypeReferenceNode` (78559:40) ← `checkSourceElement` (83329:36) ← `forEachChild` (29919:26) ← `checkConditionalType` (78726:38) ← `checkSourceElement` (83329:36) ← `checkTypeAliasDeclaration` (82465:43) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkModuleDeclaration` (82730:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
