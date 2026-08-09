# CPU profile

Took 5.58s over 4,237 samples (1.3ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 92.7% |   5.17s |   3,933 |
| Standard library |  4.4% | 248.3ms |     182 |
| Native           |  2.8% | 158.0ms |     122 |

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

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                                                                  |
| ---: | ------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 4.0% | 222.4ms |     160 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 3.3% | 184.7ms |     142 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`  |
| 2.5% | 140.0ms |     108 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`  |
| 2.1% | 115.5ms |      88 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`  |
| 1.9% | 107.5ms |      84 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`  |
| 1.6% |  86.8ms |      66 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`  |
| 1.3% |  73.9ms |      56 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`  |
| 1.2% |  68.8ms |      52 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`  |
| 1.1% |  61.7ms |      47 | `getRelationKey`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`  |
| 1.0% |  58.5ms |      44 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`  |
| 1.0% |  58.0ms |       8 | `NodeObject`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28` |
| 1.0% |  55.8ms |      44 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`  |
| 0.9% |  50.8ms |      39 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`     |
| 0.9% |  49.8ms |      37 | `map`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`    |
| 0.9% |  48.1ms |      36 | `couldContainTypeVariables`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`  |
| 0.8% |  44.2ms |      34 | `scanIdentifier`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`  |
| 0.8% |  43.5ms |      33 | `instantiateSymbol`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`  |
| 0.7% |  41.1ms |      31 | `getMappedType`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`  |
| 0.7% |  41.0ms |      32 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`  |
| 0.7% |  38.8ms |      30 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`  |

##### Standard library

|     % |    Time | Samples | Function     | Location                    |
| ----: | ------: | ------: | ------------ | --------------------------- |
|  2.1% | 117.7ms |      92 | `concat`     | `<unknown>`                 |
|  0.6% |  32.1ms |      25 | `slice`      | `<unknown>`                 |
|  0.6% |  30.9ms |      12 | `set`        | `<unknown>`                 |
|  0.3% |  16.6ms |      13 | `forEach`    | `<unknown>`                 |
|  0.2% |  12.4ms |      10 | `join`       | `<unknown>`                 |
|  0.1% |   6.2ms |       5 | `next`       | `<unknown>`                 |
|  0.1% |   4.5ms |       4 | `get`        | `<unknown>`                 |
|  0.1% |   4.3ms |       3 | `push`       | `<unknown>`                 |
|  0.1% |   4.0ms |       3 | `Map`        | `<unknown>`                 |
| <0.1% |   2.7ms |       2 | `some`       | `<unknown>`                 |
| <0.1% |   2.2ms |       2 | `unshift`    | `<unknown>`                 |
| <0.1% |   1.6ms |       1 | `resolve`    | `<unknown>`                 |
| <0.1% |   1.5ms |       1 | `toString`   | `<unknown>`                 |
| <0.1% |   1.4ms |       1 | `assign`     | `<unknown>`                 |
| <0.1% |   1.4ms |       1 | `ReadStream` | `internal:fs/streams:52:20` |
| <0.1% |   1.4ms |       1 | `String`     | `<unknown>`                 |
| <0.1% |   1.3ms |       1 | `replace`    | `<unknown>`                 |
| <0.1% |   1.3ms |       1 | `charCodeAt` | `<unknown>`                 |
| <0.1% |   1.2ms |       1 | `map`        | `<unknown>`                 |
| <0.1% |   1.2ms |       1 | `add`        | `<unknown>`                 |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                | Location    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  1.0% | 58.4ms |      45 | `anonymous`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.5% | 30.5ms |      24 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.5% | 28.1ms |      21 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  0.5% | 26.2ms |      21 | `statSync`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
|  0.1% |  5.5ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  2.7ms |       2 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| <0.1% |  2.6ms |       2 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| <0.1% |  1.5ms |       1 | `ownKeys`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| <0.1% |  1.5ms |       1 | `@lazy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| <0.1% |  1.1ms |       1 | `require`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |

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

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 57.1% | 23.4ms |      18 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |
| 42.9% | 17.6ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11157` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 40.8% | 15.8ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 16.3% |  6.3ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
|  9.9% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66907` |
|  7.0% |  2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66728` |
|  3.9% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66723` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 16.6ms |      13 | 1        |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 6.2ms |       5 | 1        |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.7ms |       2 | 1        |

##### `ReadStream` (`internal:fs/streams:52:20`)

|      % |  Time | Samples | Location                 |
| -----: | ----: | ------: | ------------------------ |
| 100.0% | 1.4ms |       1 | `internal:fs/streams:78` |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.2ms |       1 | 1        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Caller                                     | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 74.5% | 165.6ms |     116 | `isTypeOrBaseIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
| 15.2% |  33.9ms |      26 | `getConditionalType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |
|  4.0% |   8.8ms |       7 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |
|  2.4% |   5.3ms |       4 | `isTypeAssignableToKind`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76512:40` |
|  1.2% |   2.7ms |       2 | `filter`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 51.9% | 95.8ms |      74 | `typeRelatedToSomeType`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 46.5% | 85.9ms |      66 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
|  0.8% |  1.5ms |       1 | `typeArgumentsRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63741:44` |
|  0.8% |  1.4ms |       1 | `checkTypeRelatedTo`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Caller                                 | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 18.5% | 25.9ms |      20 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |
| 14.2% | 19.9ms |      15 | `isObjectOrArrayLiteralType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67347:44` |
| 12.3% | 17.3ms |      13 | `getApparentType`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 12.3% | 17.2ms |      14 | `couldContainTypeVariables`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
|  8.5% | 11.9ms |       9 | `getNormalizedType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |

##### `concat` (`<unknown>`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 81.9% | 96.4ms |      75 | `getRelationKey`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
| 10.6% | 12.5ms |      10 | `getAliasId`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28` |
|  2.5% |  2.9ms |       2 | `getFlowCacheKey`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67513:33` |
|  1.1% |  1.3ms |       1 | `resolveTypeReferenceMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56430:45` |
|  1.0% |  1.2ms |       1 | `concatenate`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`   |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Time | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 115.5ms |      88 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 42.9% | 46.1ms |      36 | `typeRelatedToSomeType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 23.8% | 25.6ms |      20 | `checkTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 11.7% | 12.6ms |      10 | `compareSignaturesRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|  8.3% |  8.9ms |       7 | `propertyRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64644:39` |
|  7.3% |  7.8ms |       6 | `typeArgumentsRelatedTo`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63741:44` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Caller                       | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 25.0% | 21.7ms |      16 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 23.9% | 20.7ms |      16 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 14.4% | 12.5ms |       9 | `getTypeAliasInstantiation`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58731:43` |
| 12.1% | 10.5ms |       8 | `createTypeReference`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 11.6% | 10.1ms |       8 | `getUnionTypeFromSortedList` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 73.9ms |      56 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Caller                              | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 66.8% | 46.0ms |      35 | `getReducedApparentType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 12.9% |  8.9ms |       7 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  5.7% |  3.9ms |       3 | `resolveMappedTypeMembers`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57017:42` |
|  4.3% |  3.0ms |       2 | `inferFromTypes`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|  4.3% |  3.0ms |       2 | `resolveCallExpression`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |

##### `getRelationKey` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 89.0% | 54.9ms |      42 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 11.0% |  6.8ms |       5 | `isTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 48.1% | 28.2ms |      20 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 19.9% | 11.7ms |       9 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 14.3% |  8.4ms |       7 | `getPropertyOfType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
| 11.1% |  6.5ms |       5 | `getSignaturesOfType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |
|  2.5% |  1.5ms |       1 | `instantiateMappedType`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61835:39` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Caller            | Location                         |
| ----: | -----: | ------: | ----------------- | -------------------------------- |
| 91.6% | 53.5ms |      41 | `require`         | `<unknown>`                      |
|  2.6% |  1.5ms |       1 | `(anonymous)`     | `internal:stream:1:11`           |
|  2.1% |  1.2ms |       1 | `get WriteStream` | `node:fs:587:18`                 |
|  2.0% |  1.2ms |       1 | `(anonymous)`     | `node:fs:1:11`                   |
|  1.8% |  1.0ms |       1 | `(anonymous)`     | `internal:streams/pipeline:1:11` |

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

|     % |   Time | Samples | Caller                            | Location                                                                                 |
| ----: | -----: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------- |
| 83.7% | 41.7ms |      31 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  6.1% |  3.0ms |       2 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
|  5.0% |  2.5ms |       2 | `getIndexType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60263:30` |
|  2.6% |  1.3ms |       1 | `getEffectiveTypeArguments`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78529:43` |
|  2.5% |  1.3ms |       1 | `getTupleTargetType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59329:36` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 62.9% | 30.3ms |      23 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 18.6% |  8.9ms |       6 | `inferFromTypes`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 18.5% |  8.9ms |       7 | `instantiateSymbol`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |

##### `scanIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32`)

|      % |   Time | Samples | Caller | Location                                                                                 |
| -----: | -----: | ------: | ------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 44.2ms |      34 | `scan` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11226:22` |

##### `instantiateSymbol` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35`)

|     % |   Time | Samples | Caller                          | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 78.7% | 34.2ms |      26 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 21.3% |  9.2ms |       7 | `instantiateList`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61591:33` |

##### `getMappedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 41.2% | 17.0ms |      13 | `map`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 30.3% | 12.4ms |       9 | `getMappedType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61620:31` |
| 28.5% | 11.7ms |       9 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 53.6% | 22.0ms |      17 | `scanJsDocToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |
| 46.4% | 19.0ms |      15 | `scanIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 34.3% | 13.3ms |      10 | `inferFromTypeArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
| 18.7% |  7.3ms |       6 | `applyToReturnTypes`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66291:36` |
| 16.0% |  6.2ms |       5 | `inferFromProperties`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 13.6% |  5.3ms |       4 | `inferFromContravariantTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66981:49` |
|  7.0% |  2.7ms |       2 | `inferFromMatchingTypes`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66951:44` |

##### `slice` (`<unknown>`)

|     % |   Time | Samples | Caller                              | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 72.0% | 23.1ms |      18 | `captureErrorCalculationState`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
| 20.2% |  6.5ms |       5 | `filter`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  4.4% |  1.4ms |       1 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  3.4% |  1.1ms |       1 | `(anonymous)`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:17:62`    |

##### `set` (`<unknown>`)

|     % |   Time | Samples | Caller                                   | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| 66.9% | 20.7ms |       4 | `getPropertiesOfUnionOrIntersectionType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57225:56` |
|  4.6% |  1.4ms |       1 | `bindClassLikeDeclaration`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46230:42` |
|  4.6% |  1.4ms |       1 | `set`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:41988:25` |
|  4.4% |  1.4ms |       1 | `getObjectTypeInstantiation`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
|  4.3% |  1.3ms |       1 | `declareSymbol`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:43626:31` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.RhDkiq\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 62.7% | 19.1ms |      15 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82` |
| 37.3% | 11.4ms |       9 | `test`        | `<unknown>`                                                                              |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                                                                |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 73.0% | 20.5ms |      16 | `readFileSync`   | `<unknown>`                                                                             |
| 27.0% |  7.6ms |       5 | `readFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36` |

##### `statSync` (`<unknown>`)

|      % |   Time | Samples | Caller                  | Location                                                                                |
| -----: | -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 26.2ms |      21 | `fileSystemEntryExists` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller               | Location                                                                                 |
| ----: | -----: | ------: | -------------------- | ---------------------------------------------------------------------------------------- |
| 92.7% | 15.3ms |      12 | `getNamedMembers`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|  7.3% |  1.2ms |       1 | `checkDeferredNodes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |

##### `join` (`<unknown>`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 80.5% | 10.0ms |       8 | `(anonymous)`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |
| 10.1% |  1.3ms |       1 | `parseSeeTag`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:37149:37` |
|  9.4% |  1.2ms |       1 | `parseParameterOrPropertyTag` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:37098:53` |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location                                                                                |
| -----: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------- |
| 100.0% | 6.2ms |       5 | `arrayFrom` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23` |

##### `realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                                                                |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 5.5ms |       4 | `realpath` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7994:30` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 27.0% | 1.2ms |       1 | `(anonymous)`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47943:37` |
| 24.7% | 1.1ms |       1 | `getUnionTypeFromSortedList` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |
| 24.6% | 1.1ms |       1 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 23.7% | 1.1ms |       1 | `(anonymous)`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |

##### `push` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 35.2% | 1.5ms |       1 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
| 32.5% | 1.4ms |       1 | `getTypeReferenceId`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65358:40` |
| 32.2% | 1.4ms |       1 | `checkArrayLiteral`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |

##### `Map` (`<unknown>`)

|     % |  Time | Samples | Caller                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 35.9% | 1.5ms |       1 | `cloneSymbol`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47801:29` |
| 35.1% | 1.4ms |       1 | `createCommentDirectivesMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14491:40` |
| 29.0% | 1.2ms |       1 | `visit`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50158:27` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                                                                |
| -----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `normalizePath` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6379:27` |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.7ms |       2 | `resolveCallExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                                                                |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |       2 | `pathComponents` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6202:28` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.2ms |       2 | `addWorkItem` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30479:29` |

##### `resolve` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.6ms |       1 | `(anonymous)` | `<unknown>` |

##### `ownKeys` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                     |
| -----: | ----: | ------: | ---------- | ---------------------------- |
| 100.0% | 1.5ms |       1 | `makeSafe` | `internal:primordials:27:15` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                                                                |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `readFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30` |

##### `@lazy` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location       |
| -----: | ----: | ------: | ------------- | -------------- |
| 100.0% | 1.5ms |       1 | `(anonymous)` | `node:os:1:11` |

##### `assign` (`<unknown>`)

|      % |  Time | Samples | Caller                                | Location                                                                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `wrapSymbolTrackerToReportForContext` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |

##### `ReadStream` (`internal:fs/streams:52:20`)

|      % |  Time | Samples | Caller       | Location        |
| -----: | ----: | ------: | ------------ | --------------- |
| 100.0% | 1.4ms |       1 | `ReadStream` | `node:tty:7:20` |

##### `String` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location                                                                                  |
| -----: | ----: | ------: | ----------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `registerCodeFix` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:146073:33` |

##### `replace` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                                                                |
| -----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `normalizePath` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6379:27` |

##### `charCodeAt` (`<unknown>`)

|      % |  Time | Samples | Caller                 | Location                                                                                |
| -----: | ----: | ------: | ---------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `getEncodedRootLength` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6056:34` |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Caller                                 | Location                                                                                 |
| -----: | ----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65195:54` |

##### `add` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location                                                                                 |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `typeRelatedToDiscriminatedType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64516:52` |

##### `require` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.1ms |       1 | `bound require` | `<unknown>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                        | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 5.58s |   4,235 | `(anonymous)`                   | `<unknown>`                                                                               |
| 99.8% | 5.57s |   4,230 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
| 99.8% | 5.57s |   4,230 | `evaluate`                      | `<unknown>`                                                                               |
| 99.8% | 5.57s |   4,228 | `moduleEvaluation`              | `<unknown>`                                                                               |
| 99.8% | 5.57s |   4,228 | `loadAndEvaluateModule`         | `<unknown>`                                                                               |
| 99.8% | 5.57s |   4,228 | `processTicksAndRejections`     | `<unknown>`                                                                               |
| 93.6% | 5.23s |   3,963 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 84.4% | 4.71s |   3,609 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 84.4% | 4.71s |   3,609 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 84.4% | 4.71s |   3,608 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 84.4% | 4.71s |   3,608 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 84.3% | 4.70s |   3,606 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 84.3% | 4.70s |   3,605 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 79.4% | 4.43s |   3,398 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 79.4% | 4.43s |   3,398 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 79.4% | 4.43s |   3,397 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 79.4% | 4.43s |   3,397 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 78.3% | 4.37s |   3,348 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 58.9% | 3.29s |   2,520 | `checkExpression`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 58.7% | 3.27s |   2,501 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                               | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 93.6% | 5.23s |   3,963 | `forEach`                                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 84.4% | 4.71s |   3,609 | `flatMap`                                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 84.4% | 4.71s |   3,609 | `getDiagnosticsHelper`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 84.4% | 4.71s |   3,608 | `getAndCacheDiagnostics`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 84.4% | 4.71s |   3,608 | `getSemanticDiagnosticsForFile`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 84.3% | 4.70s |   3,606 | `runWithCancellationToken`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 84.3% | 4.70s |   3,605 | `(anonymous)`                                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 79.4% | 4.43s |   3,398 | `getDiagnosticsWorker`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 79.4% | 4.43s |   3,398 | `getDiagnostics`                                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 79.4% | 4.43s |   3,397 | `checkSourceFileWorker`                                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 79.4% | 4.43s |   3,397 | `checkSourceFile`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 78.3% | 4.37s |   3,348 | `checkSourceElement`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 58.9% | 3.29s |   2,520 | `checkExpression`                                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 58.7% | 3.27s |   2,501 | `checkBlock`                                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
| 54.2% | 3.02s |   2,315 | `checkCallExpression`                                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |
| 51.5% | 2.87s |   2,197 | `getResolvedSignature`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`  |
| 46.2% | 2.58s |   1,969 | `resolveCall`                                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`  |
| 45.3% | 2.52s |   1,924 | `checkDeferredNodes`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`  |
| 45.3% | 2.52s |   1,923 | `checkDeferredNode`                                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`  |
| 45.2% | 2.52s |   1,921 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70`  |

##### Standard library

|     % |    Time | Samples | Function          | Location                     |
| ----: | ------: | ------: | ----------------- | ---------------------------- |
| 46.0% |   2.57s |   1,957 | `forEach`         | `<unknown>`                  |
|  2.1% | 117.7ms |      92 | `concat`          | `<unknown>`                  |
|  0.6% |  32.1ms |      25 | `slice`           | `<unknown>`                  |
|  0.6% |  30.9ms |      12 | `set`             | `<unknown>`                  |
|  0.2% |  12.4ms |      10 | `join`            | `<unknown>`                  |
|  0.2% |  11.4ms |       9 | `test`            | `<unknown>`                  |
|  0.1% |   7.9ms |       6 | `some`            | `<unknown>`                  |
|  0.1% |   6.2ms |       5 | `next`            | `<unknown>`                  |
|  0.1% |   4.5ms |       4 | `get`             | `<unknown>`                  |
|  0.1% |   4.3ms |       3 | `push`            | `<unknown>`                  |
|  0.1% |   4.0ms |       3 | `Map`             | `<unknown>`                  |
|  0.1% |   3.7ms |       3 | `get WriteStream` | `node:fs:587:18`             |
| <0.1% |   2.5ms |       2 | `(anonymous)`     | `internal:stream:1:11`       |
| <0.1% |   2.5ms |       2 | `(anonymous)`     | `node:stream:1:11`           |
| <0.1% |   2.5ms |       2 | `(anonymous)`     | `internal:fs/streams:1:11`   |
| <0.1% |   2.5ms |       2 | `sort`            | `<unknown>`                  |
| <0.1% |   2.2ms |       2 | `unshift`         | `<unknown>`                  |
| <0.1% |   1.6ms |       1 | `resolve`         | `<unknown>`                  |
| <0.1% |   1.5ms |       1 | `makeSafe`        | `internal:primordials:27:15` |
| <0.1% |   1.5ms |       1 | `(anonymous)`     | `internal:primordials:1:11`  |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                | Location    |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.8% |  5.57s |   4,230 | `evaluate`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
| 99.8% |  5.57s |   4,228 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| 99.8% |  5.57s |   4,228 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| 99.8% |  5.57s |   4,228 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  1.5% | 81.9ms |      63 | `anonymous`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  1.4% | 76.5ms |      59 | `require`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
|  1.4% | 76.5ms |      59 | `bound require`                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
|  0.5% | 30.5ms |      24 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.5% | 28.1ms |      21 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  0.5% | 26.2ms |      21 | `statSync`                                                                                                                                                                                                                                                                                                                                                              | `<unknown>` |
|  0.1% |  7.8ms |       6 | `parseModule`                                                                                                                                                                                                                                                                                                                                                           | `<unknown>` |
|  0.1% |  5.5ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  2.7ms |       2 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
| <0.1% |  2.6ms |       2 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| <0.1% |  1.5ms |       1 | `ownKeys`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| <0.1% |  1.5ms |       1 | `@lazy`                                                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location         |
| ----: | ----: | ------: | ----------------------- | ---------------- |
| 99.8% | 5.57s |   4,228 | `loadAndEvaluateModule` | `<unknown>`      |
|  0.1% | 7.8ms |       6 | `parseModule`           | `<unknown>`      |
|  0.1% | 3.7ms |       3 | `get WriteStream`       | `node:fs:587:18` |
| <0.1% | 2.7ms |       2 | `anonymous`             | `<unknown>`      |
| <0.1% | 1.6ms |       1 | `resolve`               | `<unknown>`      |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.5% |   4.71s |   3,609 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.4% | 744.9ms |     529 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.4% |  76.5ms |      59 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  37.9ms |      30 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   2.5ms |       2 | `forEachAncestorDirectory`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6613:38`   |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.57s |   4,228 | `evaluate`         | `<unknown>` |
| 100.0% | 5.57s |   4,228 | `moduleEvaluation` | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.57s |   4,228 | `moduleEvaluation` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.57s |   4,228 | `(anonymous)` | `<unknown>` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 83.6% |   4.37s |   3,347 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  6.7% | 351.4ms |     234 | `processRootFile`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115042:33` |
|  4.6% | 239.1ms |     183 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  3.7% | 194.8ms |     112 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  2.5% | 128.9ms |      97 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113932:54` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |  Time | Samples | Callee                          | Location                                                                                  |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.71s |   3,608 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.71s |   3,609 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|     % |  Time | Samples | Callee                     | Location                                                                                  |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 4.70s |   3,606 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                   | Location                                                                                  |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.71s |   3,608 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|      % |  Time | Samples | Callee                             | Location                                                                                  |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.70s |   3,605 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|  <0.1% | 1.4ms |       1 | `getMergedBindAndCheckDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 94.3% |   4.43s |   3,398 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  5.7% | 270.0ms |     207 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                 |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.43s |   3,397 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |
|  <0.1% | 1.0ms |       1 | `getDiagnostics`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:17762:32` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.43s |   3,398 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |  Time | Samples | Callee                            | Location                                                                                 |
| ----: | ----: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------- |
| 57.0% | 2.52s |   1,924 | `checkDeferredNodes`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 42.8% | 1.89s |   1,466 | `forEach`                         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.1% | 3.5ms |       3 | `checkExternalModuleExports`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83279:44` |
|  0.1% | 2.3ms |       2 | `checkUnusedIdentifiers`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |
| <0.1% | 1.2ms |       1 | `getPotentiallyUnusedIdentifiers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83673:49` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |  Time | Samples | Callee                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.43s |   3,397 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|     % |  Time | Samples | Callee                     | Location                                                                                 |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 75.0% | 3.27s |   2,501 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 43.5% | 1.90s |   1,458 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 43.4% | 1.89s |   1,456 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 25.4% | 1.11s |     850 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |
| 22.9% |    1s |     776 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.0% |   3.02s |   2,315 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.2% | 993.5ms |     753 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 24.0% | 789.9ms |     598 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 18.0% | 593.0ms |     450 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
|  9.1% | 300.8ms |     233 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 3.27s |   2,500 | `forEach` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21` |

##### `checkCallExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 94.9% |   2.87s |   2,197 | `getResolvedSignature`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38` |
|  7.4% | 223.5ms |     168 | `getReturnTypeOfSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  1.9% |  56.2ms |      43 | `checkDeprecatedSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75174:42` |
|  0.1% |   2.7ms |       2 | `checkGrammarForOmittedArgument` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85883:48` |

##### `getResolvedSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 89.8% |   2.58s |   1,969 | `resolveCall`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29` |
| 23.8% | 685.4ms |     520 | `resolveCallExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
|  0.4% |  12.6ms |      10 | `resolveNewExpression`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74600:38` |
|  0.3% |  10.0ms |       8 | `getNodeLinks`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028:30` |
|  0.1% |   1.4ms |       1 | `resolveUntypedCall`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73319:36` |

##### `resolveCall` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.4% |   2.38s |   1,816 | `chooseOverload`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74299:36` |
|  6.2% | 161.0ms |     124 | `forEach`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.6% |  14.5ms |      12 | `reorderCandidates`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73350:35` |
|  0.5% |  12.8ms |      10 | `getSignatureApplicabilityError` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |
|  0.1% |   2.6ms |       2 | `getEffectiveCallArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73870:43` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 98.3% |  2.52s |   1,923 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  1.4% | 36.7ms |      28 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|  0.3% |  7.7ms |       6 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |
|  0.1% |  3.7ms |       3 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47943:37` |
|  0.1% |  1.5ms |       1 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:38051:42` |

##### `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)

|      % |  Time | Samples | Callee    | Location    |
| -----: | ----: | ------: | --------- | ----------- |
| 100.0% | 2.52s |   1,924 | `forEach` | `<unknown>` |

##### `checkDeferredNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`)

|     % |  Time | Samples | Callee                                                 | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 99.9% | 2.52s |   1,921 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70` |
| <0.1% | 1.2ms |       1 | `resolveUntypedCall`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73319:36` |

##### `checkFunctionExpressionOrObjectLiteralMethodDeferred` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70`)

|     % |   Time | Samples | Callee                                            | Location                                                                                 |
| ----: | -----: | ------: | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 98.0% |  2.47s |   1,882 | `checkSourceElement`                              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36` |
|  1.2% | 30.6ms |      24 | `getReturnTypeOfSignature`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  0.5% | 12.8ms |      10 | `checkExpression`                                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33` |
|  0.3% |  6.5ms |       5 | `checkAllCodePathsInNonVoidFunctionReturnOrThrow` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76069:65` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                                                             |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------ |
| 28.5% | 23.3ms |      18 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:10` |
|  3.1% |  2.5ms |       2 | `(anonymous)` | `internal:stream:1:11`                                                               |
|  3.1% |  2.5ms |       2 | `(anonymous)` | `node:stream:1:11`                                                                   |
|  3.1% |  2.5ms |       2 | `(anonymous)` | `internal:fs/streams:1:11`                                                           |
|  1.9% |  1.5ms |       1 | `(anonymous)` | `internal:primordials:1:11`                                                          |

##### `require` (`<unknown>`)

|     % |   Time | Samples | Callee      | Location    |
| ----: | -----: | ------: | ----------- | ----------- |
| 98.6% | 75.4ms |      58 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 76.5ms |      59 | `require`   | `<unknown>` |
|   1.9% |  1.5ms |       1 | `anonymous` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 73.0% | 20.5ms |      16 | `readFileSync` | `<unknown>` |

##### `test` (`<unknown>`)

|      % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                  | Location    |
| -----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 100.0% | 11.4ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 35.7% | 2.8ms |       2 | `isGenericFunctionReturningFunction` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74587:52` |
| 16.1% | 1.3ms |       1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45060:60` |
| 14.0% | 1.1ms |       1 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74581:46` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 7.8ms |       6 | `(anonymous)` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.5ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.5ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.5ms |       2 | `anonymous` | `<unknown>` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                                                                |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1245:31` |

##### `makeSafe` (`internal:primordials:27:15`)

|      % |  Time | Samples | Callee    | Location    |
| -----: | ----: | ------: | --------- | ----------- |
| 100.0% | 1.5ms |       1 | `ownKeys` | `<unknown>` |

##### `(anonymous)` (`internal:primordials:1:11`)

|      % |  Time | Samples | Callee     | Location                     |
| -----: | ----: | ------: | ---------- | ---------------------------- |
| 100.0% | 1.5ms |       1 | `makeSafe` | `internal:primordials:27:15` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 53.6ms |       5 | `NodeObject` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:159367:28`) ← `createBaseNode` (30583:38) ← `createBaseNode` (22089:32) ← `createImportSpecifier` (24726:39) ← `parseImportOrExportSpecifier` (36344:46) ← `parseDelimitedList` (32208:36) ← `parseBracketedList` (32274:36) ← `parseNamedImportsOrExports` (36324:44) ← `parseImportClause` (36273:35) ← `parseImportDeclarationOrImportEqualsDeclaration` (36192:65) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseAmbientExternalModuleDeclaration` (36129:55) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% | 52.1ms |      40 | `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.6% | 34.9ms |      22 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                |
| 0.4% | 20.7ms |       4 | `set` ← `getPropertiesOfUnionOrIntersectionType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57225:56`) ← `getReducedType` (57798:32) ← `sameMap` (667:21) ← `getReducedUnionType` (57811:37) ← `getReducedType` (57798:32) ← `getNormalizedType` (62973:35) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `checkTypeRelatedToAndOptionallyElaborate` (62216:58) ← `checkReturnStatement` (81493:38) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% | 20.7ms |      16 | `createTypeChecker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46937:31`) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.4% | 19.7ms |       9 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `getReturnTypeFromBody` (75792:39) ← `getReturnTypeOfSignature` (58288:42) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `getQuickTypeOfExpression` (77740:42) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) |
| 0.3% | 19.1ms |      15 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82`) ← `findIndex` (538:23) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.3% | 15.8ms |      12 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                               |
| 0.2% | 11.4ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.RhDkiq\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-fixtures\.0q5jPY\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `findIndex` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:538:23`) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% | 10.0ms |       7 | `isFromInferenceBlockedSource` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66555:46`) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `checkIfStatement` (80553:34) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  9.7ms |       8 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  8.7ms |       7 | `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getMappedType` (61620:31) ← `map` (647:17) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `getReturnTypeOfSignature` (58288:42) ← `compareSignaturesRelated` (62671:42) ← `signaturesRelatedTo` (64910:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `propertyRelatedTo` (64644:39) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `checkTypeArgumentConstraints` (78532:46) ← `checkTypeReferenceNode` (78559:40) ← `checkSourceElement` (83329:36) ← `checkTypeAliasDeclaration` (82465:43) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |  8.7ms |       7 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.1% |  8.2ms |       7 | `getTokenText` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:10632:36`) ← `(anonymous)` (36647:74) ← `scanRange` (12054:27) ← `doInsideOfContext` (31060:35) ← `parseJSDocComment` (36596:39) ← `mapDefined` (809:24) ← `addJSDocComment` (30888:33) ← `parseList` (31892:27) ← `parseObjectTypeMembers` (32901:40) ← `parseInterfaceDeclaration` (36062:43) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseModuleOrNamespaceDeclaration` (36118:51) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% |  7.7ms |       6 | `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% |  7.7ms |       6 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `checkTypeRelatedToAndOptionallyElaborate` (62216:58) ← `getSignatureApplicabilityError` (73779:48) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.1% |  7.6ms |       2 | `getFlowTypeOfReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`) ← `getFlowTypeOfAccessExpression` (72820:47) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.1% |  7.3ms |       5 | `isInJSFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:16051:24`) ← `isJSConstructor` (75008:33) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `getTypeOfInstantiatedSymbol` (55325:45) ← `getNonMissingTypeOfSymbol` (55404:43) ← `isPropertySymbolTypeRelated` (64638:49) ← `propertyRelatedTo` (64644:39) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `_loop_21` (65285:41) ← `getVariancesWorker` (65276:36) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `getConditionalType` (60911:36) ← `getConditionalTypeInstantiation` (61936:49) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `fillMissingTypeArguments` (58050:42) ← `checkTypeArgumentConstraints` (78532:46) ← `checkTypeReferenceNode` (78559:40) ← `checkSourceElement` (83329:36) ← `forEachChild` (29919:26) ← `checkConditionalType` (78726:38) ← `checkSourceElement` (83329:36) ← `checkTypeAliasDeclaration` (82465:43) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkModuleDeclaration` (82730:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% |  6.9ms |       5 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.1% |  6.7ms |       5 | `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getTypeOfInstantiatedSymbol` (55325:45) ← `getNonMissingTypeOfSymbol` (55404:43) ← `isPropertySymbolTypeRelated` (64638:49) ← `propertyRelatedTo` (64644:39) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `checkTypeArgumentConstraints` (78532:46) ← `checkTypeReferenceNode` (78559:40) ← `checkSourceElement` (83329:36) ← `checkTypeAliasDeclaration` (82465:43) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
