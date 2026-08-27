# CPU profile

Took 5.53s over 4,148 samples (1.3ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 91.7% |   5.07s |   3,814 |
| Standard library |  5.0% | 277.8ms |     195 |
| Native           |  3.3% | 180.5ms |     139 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                                                                 |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.4% | 241.6ms |     180 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 3.0% | 167.1ms |     128 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.8% | 156.0ms |     122 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 2.4% | 134.0ms |     100 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 2.2% | 121.1ms |      93 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.8% |  97.7ms |      74 | `concat`                        | `<unknown>`                                                                              |
| 1.4% |  77.3ms |      20 | `internIdentifier`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
| 1.4% |  76.9ms |      47 | `slice`                         | `<unknown>`                                                                              |
| 1.3% |  71.7ms |      55 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.2% |  66.0ms |      52 | `anonymous`                     | `<unknown>`                                                                              |
| 1.2% |  63.9ms |      48 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 1.2% |  63.7ms |      48 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
| 1.0% |  54.9ms |      42 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.8% |  46.4ms |      36 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% |  45.3ms |      34 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 0.8% |  44.7ms |      34 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 0.8% |  43.8ms |      34 | `signaturesRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 0.8% |  42.8ms |      32 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`    |
| 0.8% |  42.6ms |      33 | `instantiateTypeWithAlias`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 0.7% |  40.3ms |      31 | `isFreshLiteralType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                                                                 |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 4.4% | 241.6ms |     180 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 3.0% | 167.1ms |     128 | `recursiveTypeRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |
| 2.8% | 156.0ms |     122 | `getObjectFlags`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28` |
| 2.4% | 134.0ms |     100 | `getObjectTypeInstantiation`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 2.2% | 121.1ms |      93 | `isRelatedTo`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 1.4% |  77.3ms |      20 | `internIdentifier`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34` |
| 1.3% |  71.7ms |      55 | `getNormalizedType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 1.2% |  63.9ms |      48 | `getApparentType`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 1.2% |  63.7ms |      48 | `getTypeListId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31` |
| 1.0% |  54.9ms |      42 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |
| 0.8% |  46.4ms |      36 | `inferFromTypes`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 0.8% |  45.3ms |      34 | `getIdentifierToken`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36` |
| 0.8% |  44.7ms |      34 | `getReducedType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32` |
| 0.8% |  43.8ms |      34 | `signaturesRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41` |
| 0.8% |  42.8ms |      32 | `step`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`    |
| 0.8% |  42.6ms |      33 | `instantiateTypeWithAlias`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 0.7% |  40.3ms |      31 | `isFreshLiteralType`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36` |
| 0.7% |  40.0ms |      31 | `map`                           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`   |
| 0.7% |  39.9ms |      31 | `couldContainTypeVariables`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 0.7% |  38.6ms |      26 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |

##### Standard library

|     % |   Time | Samples | Function        | Location                           |
| ----: | -----: | ------: | --------------- | ---------------------------------- |
|  1.8% | 97.7ms |      74 | `concat`        | `<unknown>`                        |
|  1.4% | 76.9ms |      47 | `slice`         | `<unknown>`                        |
|  0.5% | 29.9ms |      22 | `forEach`       | `<unknown>`                        |
|  0.3% | 19.0ms |      10 | `next`          | `<unknown>`                        |
|  0.2% | 13.1ms |      10 | `get`           | `<unknown>`                        |
|  0.2% | 11.5ms |       9 | `join`          | `<unknown>`                        |
|  0.1% |  5.5ms |       4 | `set`           | `<unknown>`                        |
|  0.1% |  2.8ms |       2 | `map`           | `<unknown>`                        |
| <0.1% |  2.5ms |       2 | `unshift`       | `<unknown>`                        |
| <0.1% |  2.5ms |       2 | `lastIndexOf`   | `<unknown>`                        |
| <0.1% |  2.4ms |       2 | `Map`           | `<unknown>`                        |
| <0.1% |  2.4ms |       2 | `test`          | `<unknown>`                        |
| <0.1% |  2.2ms |       2 | `assign`        | `<unknown>`                        |
| <0.1% |  1.5ms |       1 | `trimStart`     | `<unknown>`                        |
| <0.1% |  1.5ms |       1 | `push`          | `<unknown>`                        |
| <0.1% |  1.4ms |       1 | `some`          | `<unknown>`                        |
| <0.1% |  1.3ms |       1 | `splice`        | `<unknown>`                        |
| <0.1% |  1.3ms |       1 | `pop`           | `<unknown>`                        |
| <0.1% |  1.2ms |       1 | `onConstructed` | `internal:streams/writable:166:65` |
| <0.1% |  1.1ms |       1 | `toString`      | `<unknown>`                        |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  1.2% | 66.0ms |      52 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  0.7% | 38.1ms |      28 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.5% | 28.3ms |      22 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.4% | 24.0ms |      19 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |  5.0ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.1% |  4.0ms |       3 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| <0.1% |  2.6ms |       2 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| <0.1% |  2.5ms |       2 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  1.5ms |       1 | `newRegistryEntry`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| <0.1% |  1.5ms |       1 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  1.5ms |       1 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| <0.1% |  1.4ms |       1 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| <0.1% |  1.4ms |       1 | `/^\.\.?($\|[\\/])/`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |  1.4ms |       1 | `setPrototypeDirect`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |  1.2ms |       1 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 88.3% | 213.2ms |     159 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63005` |
|  8.1% |  19.5ms |      14 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63016` |
|  2.1% |   5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63012` |
|  0.6% |   1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63014` |
|  0.5% |   1.2ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63015` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 75.5% | 126.2ms |      96 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63811` |
|  6.9% |  11.5ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63840` |
|  5.1% |   8.6ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63806` |
|  2.5% |   4.1ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63913` |
|  2.2% |   3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63904` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |    Time | Samples | Location                                                                              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------- |
| 99.1% | 154.6ms |     121 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19395` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 39.6% | 53.1ms |      40 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61776` |
| 22.3% | 29.8ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61741` |
| 15.7% | 21.0ms |      16 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61742` |
|  6.8% |  9.1ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61782` |
|  4.8% |  6.5ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61779` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 23.5% | 28.5ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63310` |
| 12.7% | 15.3ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63394` |
| 12.4% | 15.0ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63326` |
|  9.8% | 11.9ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63316` |
|  7.6% |  9.2ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63327` |

##### `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 83.6% | 64.6ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31513` |
| 16.4% | 12.7ms |      10 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31511` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 76.1% | 54.5ms |      41 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62981` |
|  8.4% |  6.1ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62975` |
|  7.0% |  5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62977` |
|  5.1% |  3.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62976` |
|  1.6% |  1.1ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62979` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 70.2% | 44.9ms |      34 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57595` |
|  8.4% |  5.3ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57605` |
|  4.2% |  2.7ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57597` |
|  2.5% |  1.6ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57596` |
|  2.1% |  1.4ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57598` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 52.4% | 33.4ms |      25 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58609` |
| 24.3% | 15.5ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58606` |
|  6.5% |  4.1ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58597` |
|  6.5% |  4.1ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58601` |
|  6.0% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58603` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 29.2% | 16.0ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64006` |
| 17.2% |  9.5ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64138` |
| 11.7% |  6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64361` |
|  7.2% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63925` |
|  7.0% |  3.8ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63926` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 45.0% | 20.9ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66704` |
| 13.8% |  6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66848` |
|  5.6% |  2.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66720` |
|  3.3% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66787` |
|  3.3% |  1.5ms |       1 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66888` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 54.8% | 24.8ms |      19 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11159` |
| 45.2% | 20.5ms |      15 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11157` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 50.7% | 22.7ms |      17 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57799` |
| 14.6% |  6.5ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57800` |
| 14.5% |  6.5ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57807` |
| 11.2% |  5.0ms |       4 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57803` |

##### `signaturesRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 37.3% | 16.3ms |      12 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64912` |
| 22.9% | 10.0ms |       8 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64942` |
| 16.3% |  7.1ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64918` |
|  9.2% |  4.0ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64946` |
|  8.3% |  3.6ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64952` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|     % |   Time | Samples | Location                                                                           |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------- |
| 68.9% | 29.5ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50` |
| 18.9% |  8.1ms |       6 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63` |
|  6.8% |  2.9ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56` |
|  5.5% |  2.3ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46` |

##### `instantiateTypeWithAlias` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 67.0% | 28.5ms |      22 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61979` |
| 33.0% | 14.1ms |      11 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61965` |

##### `isFreshLiteralType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`)

|      % |   Time | Samples | Location                                                                              |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 100.0% | 40.3ms |      31 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61378` |

##### `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`)

|     % |   Time | Samples | Location                                                                            |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------- |
| 68.4% | 27.4ms |      21 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:652` |
| 22.7% |  9.1ms |       7 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:649` |
|  8.9% |  3.6ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:651` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 30.0% | 12.0ms |       9 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66388` |
| 16.4% |  6.5ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66378` |
| 16.0% |  6.4ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66383` |
| 14.5% |  5.8ms |       5 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66386` |
|  6.5% |  2.6ms |       2 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66384` |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Location                                                                              |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------- |
| 87.7% | 33.8ms |      23 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56118` |
| 12.3% |  4.7ms |       3 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56115` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 29.9ms |      22 | 1        |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Location |
| ----: | -----: | ------: | -------- |
| 86.4% | 16.4ms |       8 | 1        |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.8ms |       2 | 1        |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.4ms |       1 | 1        |

##### `onConstructed` (`internal:streams/writable:166:65`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.2ms |       1 | `internal:streams/writable:169` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Caller                                     | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 83.6% | 202.1ms |     149 | `isTypeOrBaseIdenticalTo`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67332:41` |
| 10.1% |  24.4ms |      19 | `getConditionalType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |
|  1.6% |   3.9ms |       3 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62216:58` |
|  1.5% |   3.5ms |       3 | `isTypeAssignableToKind`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76512:40` |
|  1.0% |   2.5ms |       2 | `discriminateTypeByDiscriminableItems`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65195:54` |

##### `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`)

|     % |   Time | Samples | Caller                  | Location                                                                                 |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 53.7% | 89.7ms |      68 | `isRelatedTo`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 45.7% | 76.3ms |      59 | `typeRelatedToSomeType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
|  0.7% |  1.1ms |       1 | `propertiesIdenticalTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64886:43` |

##### `getObjectFlags` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:19394:28`)

|     % |   Time | Samples | Caller                                 | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 19.2% | 29.9ms |      24 | `isObjectOrArrayLiteralType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67347:44` |
| 14.1% | 22.0ms |      17 | `getNormalizedType`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 13.1% | 20.4ms |      16 | `getApparentType`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33` |
| 12.5% | 19.5ms |      15 | `couldContainTypeVariables`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43` |
| 11.7% | 18.2ms |      14 | `getSingleBaseForNonAugmentingSubtype` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65696:54` |

##### `getObjectTypeInstantiation` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44`)

|      % |    Time | Samples | Caller                     | Location                                                                                 |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 134.0ms |     100 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |

##### `isRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 39.0% | 47.3ms |      37 | `checkTypeRelatedTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36` |
| 30.0% | 36.3ms |      28 | `typeRelatedToSomeType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63650:43` |
| 10.9% | 13.2ms |      10 | `compareSignaturesRelated` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62671:42` |
|  6.4% |  7.8ms |       6 | `propertyRelatedTo`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64644:39` |
|  5.2% |  6.3ms |       5 | `eachTypeRelatedToType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63713:43` |

##### `concat` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 85.4% | 83.4ms |      64 | `getRelationKey` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65390:32` |
|  8.1% |  7.9ms |       6 | `getAliasId`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28` |
|  5.3% |  5.2ms |       3 | `concatenate`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:980:25`   |
|  1.3% |  1.3ms |       1 | `containsPath`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6523:26`  |

##### `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`)

|      % |   Time | Samples | Caller             | Location                                                                                 |
| -----: | -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------- |
| 100.0% | 77.3ms |      20 | `createIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31520:34` |

##### `slice` (`<unknown>`)

|     % |   Time | Samples | Caller                              | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 88.7% | 68.2ms |      40 | `captureErrorCalculationState`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50` |
|  4.9% |  3.8ms |       3 | `filter`                            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:610:20`   |
|  3.4% |  2.6ms |       2 | `fillMissingTypeArguments`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58050:42` |
|  1.7% |  1.3ms |       1 | `getPathComponentsRelativeTo`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6563:41`  |
|  1.4% |  1.0ms |       1 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |

##### `getNormalizedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35`)

|      % |   Time | Samples | Caller        | Location                                                                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 71.7ms |      55 | `isRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Caller            | Location                         |
| ----: | -----: | ------: | ----------------- | -------------------------------- |
| 88.1% | 58.2ms |      46 | `require`         | `<unknown>`                      |
|  2.3% |  1.5ms |       1 | `bound require`   | `<unknown>`                      |
|  2.2% |  1.5ms |       1 | `get WriteStream` | `node:fs:587:18`                 |
|  2.2% |  1.4ms |       1 | `(anonymous)`     | `node:fs:1:11`                   |
|  1.8% |  1.2ms |       1 | `(anonymous)`     | `internal:streams/pipeline:1:11` |

##### `getApparentType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57594:33`)

|     % |   Time | Samples | Caller                                         | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 70.7% | 45.1ms |      34 | `getReducedApparentType`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 13.3% |  8.5ms |       6 | `createUnionOrIntersectionProperty`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |
|  5.9% |  3.8ms |       3 | `inferFromTypes`                               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|  4.3% |  2.8ms |       2 | `getApparentTypeOfContextualType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:70974:49` |
|  3.5% |  2.2ms |       2 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72679:62` |

##### `getTypeListId` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58595:31`)

|     % |   Time | Samples | Caller                       | Location                                                                                 |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 22.1% | 14.0ms |      11 | `createTypeReference`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58635:37` |
| 21.7% | 13.8ms |      10 | `getIntersectionType`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60014:37` |
| 14.9% |  9.5ms |       7 | `getObjectTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 14.3% |  9.1ms |       7 | `getUnionTypeFromSortedList` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |
| 10.2% |  6.5ms |       5 | `getAliasId`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58618:28` |

##### `structuredTypeRelatedToWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51`)

|      % |   Time | Samples | Caller                    | Location                                                                                 |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 54.9ms |      42 | `structuredTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63918:45` |

##### `inferFromTypes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 24.7% | 11.5ms |       9 | `inferFromProperties`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:67265:41` |
| 19.5% |  9.0ms |       7 | `inferTypes`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66691:28` |
| 17.4% |  8.1ms |       6 | `inferFromTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
| 17.2% |  8.0ms |       6 | `inferFromTypeArguments` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66970:44` |
|  7.9% |  3.7ms |       3 | `applyToReturnTypes`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66291:36` |

##### `getIdentifierToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11153:36`)

|     % |   Time | Samples | Caller           | Location                                                                                 |
| ----: | -----: | ------: | ---------------- | ---------------------------------------------------------------------------------------- |
| 60.1% | 27.2ms |      20 | `scanIdentifier` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11685:32` |
| 39.9% | 18.1ms |      14 | `scanJsDocToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11950:32` |

##### `getReducedType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57798:32`)

|     % |   Time | Samples | Caller                   | Location                                                                                 |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 35.1% | 15.7ms |      12 | `getNormalizedType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 34.8% | 15.6ms |      12 | `getReducedApparentType` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57608:40` |
| 11.5% |  5.1ms |       4 | `getSignaturesOfType`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57895:37` |
|  5.7% |  2.5ms |       2 | `getPropertyOfType`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35` |
|  3.4% |  1.5ms |       1 | `inferFromTypes`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |

##### `signaturesRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`)

|      % |   Time | Samples | Caller                          | Location                                                                                 |
| -----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 43.8ms |      34 | `structuredTypeRelatedToWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63924:51` |

##### `step` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45:18`)

|      % |   Time | Samples | Caller                 | Location                                                                                 |
| -----: | -----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 42.8ms |      32 | `getUnmatchedProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66531:38` |

##### `instantiateTypeWithAlias` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42`)

|     % |   Time | Samples | Caller                           | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 82.0% | 34.9ms |      27 | `instantiateType`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61961:33` |
|  5.8% |  2.5ms |       2 | `getConstraintFromTypeParameter` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58566:48` |
|  3.4% |  1.4ms |       1 | `getReturnTypeOfSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  3.1% |  1.3ms |       1 | `getConditionalType`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60911:36` |
|  3.0% |  1.3ms |       1 | `instantiateTypeWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61983:39` |

##### `isFreshLiteralType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61377:36`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 54.0% | 21.8ms |      16 | `getNormalizedType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62973:35` |
| 43.2% | 17.4ms |      14 | `isTypeRelatedTo`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62938:33` |
|  2.8% |  1.1ms |       1 | `removeRedundantLiteralTypes` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59636:45` |

##### `map` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:647:17`)

|     % |   Time | Samples | Caller                            | Location                                                                                 |
| ----: | -----: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------- |
| 41.3% | 16.6ms |      13 | `getObjectTypeInstantiation`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61740:44` |
| 13.6% |  5.4ms |       4 | `getConditionalTypeInstantiation` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61936:49` |
| 12.8% |  5.1ms |       4 | `getEffectiveTypeArguments`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78529:43` |
|  6.9% |  2.8ms |       2 | `getLiteralTypeFromProperties`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60255:46` |
|  6.2% |  2.5ms |       2 | `canTailRecurse`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61007:36` |

##### `couldContainTypeVariables` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66377:43`)

|     % |   Time | Samples | Caller                     | Location                                                                                 |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 62.4% | 24.9ms |      20 | `instantiateTypeWithAlias` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61964:42` |
| 27.4% | 10.9ms |       8 | `instantiateSymbol`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:61711:35` |
|  6.7% |  2.7ms |       2 | `inferFromTypes`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66703:36` |
|  3.5% |  1.4ms |       1 | `forEach`                  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |

##### `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`)

|     % |   Time | Samples | Caller                        | Location                                                                                 |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 86.1% | 33.2ms |      22 | `resolveObjectTypeMembers`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56389:42` |
| 13.9% |  5.3ms |       4 | `resolveAnonymousTypeMembers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56847:45` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                                                                |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 93.5% | 35.7ms |      26 | `readFileSync`   | `<unknown>`                                                                             |
|  6.5% |  2.5ms |       2 | `readFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7859:36` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                           | Location                                                                                 |
| ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 87.1% | 26.0ms |      19 | `getNamedMembers`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50411:33` |
|  9.4% |  2.8ms |       2 | `checkUnusedLocalsAndParameters` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79985:48` |
|  3.5% |  1.1ms |       1 | `visit`                          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50158:27` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.TBtwcX\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                                                                 |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 64.4% | 18.2ms |      14 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82` |
| 35.6% | 10.1ms |       8 | `test`        | `<unknown>`                                                                              |

##### `statSync` (`<unknown>`)

|     % |   Time | Samples | Caller                  | Location                                                                                |
| ----: | -----: | ------: | ----------------------- | --------------------------------------------------------------------------------------- |
| 95.6% | 22.9ms |      18 | `fileSystemEntryExists` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7962:43` |
|  4.4% |  1.1ms |       1 | `statSync`              | `<unknown>`                                                                             |

##### `next` (`<unknown>`)

|      % |   Time | Samples | Caller      | Location                                                                                |
| -----: | -----: | ------: | ----------- | --------------------------------------------------------------------------------------- |
| 100.0% | 19.0ms |      10 | `arrayFrom` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                            | Location                                                                                 |
| ----: | ----: | ------: | --------------------------------- | ---------------------------------------------------------------------------------------- |
| 19.1% | 2.5ms |       2 | `getIndexedAccessTypeOrUndefined` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:60793:49` |
| 18.8% | 2.5ms |       2 | `getTupleTargetType`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59329:36` |
| 11.6% | 1.5ms |       1 | `getUnionTypeFromSortedList`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:59805:44` |
| 11.4% | 1.5ms |       1 | `(anonymous)`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1791:25`  |
| 10.9% | 1.4ms |       1 | `recursiveTypeRelatedTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `join` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location                                                                                 |
| ----: | ----: | ------: | ----------------------------- | ---------------------------------------------------------------------------------------- |
| 79.1% | 9.1ms |       7 | `(anonymous)`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |
| 20.9% | 2.4ms |       2 | `parseParameterOrPropertyTag` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:37098:53` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 27.5% | 1.5ms |       1 | `createInstantiatedSymbolTable` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47` |
| 25.7% | 1.4ms |       1 | `bindObjectLiteralExpression`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45127:45` |
| 24.0% | 1.3ms |       1 | `transformTypeOfMembers`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66000:40` |
| 22.9% | 1.3ms |       1 | `getSubstitutionType`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58885:37` |

##### `realpathNativeSync` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                                                                |
| ----: | ----: | ------: | -------------------------- | --------------------------------------------------------------------------------------- |
| 75.6% | 3.7ms |       3 | `realpath`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7994:30` |
| 24.4% | 1.2ms |       1 | `bound realpathNativeSync` | `<unknown>`                                                                             |

##### `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location                                                                                |
| -----: | ----: | ------: | --------------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `toFileNameLowerCase` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1766:33` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                                                                                 |
| ----: | ----: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| 53.2% | 1.5ms |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:65195:54` |
| 46.8% | 1.3ms |       1 | `createInferenceContext`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:66301:40` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                                                                |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 2.6ms |       2 | `pathComponents` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6202:28` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                 |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `addWorkItem` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30479:29` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.5ms |       2 | `(anonymous)` | `<unknown>` |

##### `lastIndexOf` (`<unknown>`)

|     % |  Time | Samples | Caller            | Location                                                                                 |
| ----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 54.8% | 1.4ms |       1 | `getBaseFileName` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6152:29`  |
| 45.2% | 1.1ms |       1 | `(anonymous)`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:36647:74` |

##### `Map` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                                 |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------- |
| 57.1% | 1.4ms |       1 | `visit`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50158:27` |
| 42.9% | 1.0ms |       1 | `cloneSymbol` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47801:29` |

##### `test` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location                                                                               |
| -----: | ----: | ------: | ----------- | -------------------------------------------------------------------------------------- |
| 100.0% | 2.4ms |       2 | `findIndex` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:538:23` |

##### `assign` (`<unknown>`)

|      % |  Time | Samples | Caller                                | Location                                                                                 |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 2.2ms |       2 | `wrapSymbolTrackerToReportForContext` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:51005:57` |

##### `newRegistryEntry` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.5ms |       1 | `ensureRegistered` | `<unknown>` |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.5ms |       1 | `readdirSync` | `<unknown>` |

##### `trimStart` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                                                                 |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `appendIfCommentDirective` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:11775:42` |

##### `push` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location                                                                                 |
| -----: | ----: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `createUnionOrIntersectionProperty` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57615:51` |

##### `fetch` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 1.5ms |       1 | `requestFetch` | `<unknown>` |

##### `stream` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.4ms |       1 | `(anonymous)` | `<unknown>` |

##### `/^\.\.?($|[\\/])/` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                                                                |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `pathIsRelative` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:5999:28` |

##### `setPrototypeDirect` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location               |
| -----: | ----: | ------: | ------------- | ---------------------- |
| 100.0% | 1.4ms |       1 | `(anonymous)` | `internal:stream:1:11` |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `resolveCallExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |

##### `splice` (`<unknown>`)

|      % |  Time | Samples | Caller              | Location                                                                                 |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `reorderCandidates` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73350:35` |

##### `pop` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                                                                 |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `forEachChildRecursively` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:30433:37` |

##### `onConstructed` (`internal:streams/writable:166:65`)

|      % |  Time | Samples | Caller        | Location                           |
| -----: | ----: | ------: | ------------- | ---------------------------------- |
| 100.0% | 1.2ms |       1 | `(anonymous)` | `internal:streams/writable:196:33` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                                                                |
| -----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `normalizePath` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:6379:27` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                                                                |
| -----: | ----: | ------: | ---------- | --------------------------------------------------------------------------------------- |
| 100.0% | 1.1ms |       1 | `readFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:7890:30` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                        | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 5.52s |   4,144 | `(anonymous)`                   | `<unknown>`                                                                               |
| 99.7% | 5.51s |   4,135 | `loadAndEvaluateModule`         | `<unknown>`                                                                               |
| 99.7% | 5.51s |   4,135 | `processTicksAndRejections`     | `<unknown>`                                                                               |
| 99.7% | 5.51s |   4,134 | `typeCheckProject`              | `tsc-workload.mjs:3:33`                                                                   |
| 99.7% | 5.51s |   4,134 | `evaluate`                      | `<unknown>`                                                                               |
| 99.7% | 5.51s |   4,134 | `moduleEvaluation`              | `<unknown>`                                                                               |
| 93.5% | 5.17s |   3,874 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 83.8% | 4.63s |   3,504 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 83.8% | 4.63s |   3,504 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 83.8% | 4.63s |   3,503 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 83.8% | 4.63s |   3,502 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 83.8% | 4.63s |   3,502 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 83.7% | 4.62s |   3,499 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 78.5% | 4.33s |   3,278 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 78.5% | 4.33s |   3,278 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 78.5% | 4.33s |   3,278 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 78.5% | 4.33s |   3,278 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 77.6% | 4.29s |   3,246 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 58.6% | 3.24s |   2,455 | `checkExpression`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 57.3% | 3.16s |   2,400 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                        | Location                                                                                  |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 93.5% | 5.17s |   3,874 | `forEach`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`    |
| 83.8% | 4.63s |   3,504 | `flatMap`                       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`    |
| 83.8% | 4.63s |   3,504 | `getDiagnosticsHelper`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 83.8% | 4.63s |   3,503 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |
| 83.8% | 4.63s |   3,502 | `runWithCancellationToken`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |
| 83.8% | 4.63s |   3,502 | `getAndCacheDiagnostics`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |
| 83.7% | 4.62s |   3,499 | `(anonymous)`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
| 78.5% | 4.33s |   3,278 | `checkSourceFileWorker`         | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`  |
| 78.5% | 4.33s |   3,278 | `checkSourceFile`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`  |
| 78.5% | 4.33s |   3,278 | `getDiagnosticsWorker`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`  |
| 78.5% | 4.33s |   3,278 | `getDiagnostics`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
| 77.6% | 4.29s |   3,246 | `checkSourceElement`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
| 58.6% | 3.24s |   2,455 | `checkExpression`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`  |
| 57.3% | 3.16s |   2,400 | `checkBlock`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`  |
| 53.2% | 2.94s |   2,230 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`  |
| 50.4% | 2.78s |   2,110 | `getResolvedSignature`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`  |
| 46.2% | 2.55s |   1,932 | `checkTypeRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`  |
| 45.9% | 2.53s |   1,926 | `resolveCall`                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`  |
| 43.7% | 2.41s |   1,835 | `checkDeferredNodes`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`  |
| 43.7% | 2.41s |   1,834 | `checkDeferredNode`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`  |

##### Standard library

|     % |   Time | Samples | Function          | Location                         |
| ----: | -----: | ------: | ----------------- | -------------------------------- |
| 44.3% |  2.44s |   1,858 | `forEach`         | `<unknown>`                      |
|  1.8% | 97.7ms |      74 | `concat`          | `<unknown>`                      |
|  1.4% | 76.9ms |      47 | `slice`           | `<unknown>`                      |
|  0.3% | 19.0ms |      10 | `next`            | `<unknown>`                      |
|  0.2% | 13.1ms |      10 | `get`             | `<unknown>`                      |
|  0.2% | 12.5ms |      10 | `test`            | `<unknown>`                      |
|  0.2% | 11.5ms |       9 | `join`            | `<unknown>`                      |
|  0.2% |  9.7ms |       7 | `some`            | `<unknown>`                      |
|  0.1% |  6.7ms |       5 | `map`             | `<unknown>`                      |
|  0.1% |  5.5ms |       4 | `set`             | `<unknown>`                      |
|  0.1% |  5.1ms |       4 | `get WriteStream` | `node:fs:587:18`                 |
|  0.1% |  5.0ms |       4 | `find`            | `<unknown>`                      |
|  0.1% |  4.0ms |       3 | `sort`            | `<unknown>`                      |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `internal:stream:1:11`           |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `node:stream:1:11`               |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `internal:fs/streams:1:11`       |
| <0.1% |  2.5ms |       2 | `unshift`         | `<unknown>`                      |
| <0.1% |  2.5ms |       2 | `lastIndexOf`     | `<unknown>`                      |
| <0.1% |  2.4ms |       2 | `Map`             | `<unknown>`                      |
| <0.1% |  2.3ms |       2 | `(anonymous)`     | `internal:streams/pipeline:1:11` |

##### Native

|     % |   Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.7% |  5.51s |   4,135 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| 99.7% |  5.51s |   4,135 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| 99.7% |  5.51s |   4,134 | `evaluate`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| 99.7% |  5.51s |   4,134 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
|  1.6% | 88.8ms |      69 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  1.5% | 81.2ms |      63 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|  1.5% | 81.2ms |      63 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  0.7% | 38.1ms |      28 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.5% | 28.3ms |      22 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.4% | 24.0ms |      19 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.2% | 11.6ms |       9 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |  5.0ms |       4 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.1% |  4.0ms |       3 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g`                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
| <0.1% |  2.6ms |       2 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| <0.1% |  1.5ms |       1 | `newRegistryEntry`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| <0.1% |  1.5ms |       1 | `ensureRegistered`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| <0.1% |  1.5ms |       1 | `loadModule`                                                                                                                                                                                                                                                                                                                                                                     | `<unknown>` |
| <0.1% |  1.5ms |       1 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |  1.5ms |       1 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| <0.1% |  1.5ms |       1 | `requestFetch`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location         |
| ----: | -----: | ------: | ----------------------- | ---------------- |
| 99.8% |  5.51s |   4,134 | `loadAndEvaluateModule` | `<unknown>`      |
|  0.2% | 11.6ms |       9 | `parseModule`           | `<unknown>`      |
|  0.1% |  5.1ms |       4 | `get WriteStream`       | `node:fs:587:18` |
| <0.1% |  2.5ms |       2 | `anonymous`             | `<unknown>`      |
| <0.1% |  1.5ms |       1 | `requestFetch`          | `<unknown>`      |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Callee                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 5.51s |   4,134 | `moduleEvaluation`      | `<unknown>` |
|  <0.1% | 1.5ms |       1 | `loadModule`            | `<unknown>` |
|  <0.1% | 1.5ms |       1 | `loadAndEvaluateModule` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                          |
| -----: | ----: | ------: | ------------- | --------------------------------- |
| 100.0% | 5.51s |   4,134 | `(anonymous)` | `<unknown>`                       |
|  <0.1% | 1.2ms |       1 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                                                                  |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 84.1% |   4.63s |   3,503 | `getDiagnosticsHelper`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38` |
| 13.7% | 754.6ms |     536 | `createProgram`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|  1.5% |  81.2ms |      63 | `bound require`                    | `<unknown>`                                                                               |
|  0.7% |  38.7ms |      30 | `parseJsonConfigFileContentWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40560:46`  |
| <0.1% |   2.5ms |       2 | `getParsedCommandLineOfConfigFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.51s |   4,134 | `evaluate`         | `<unknown>` |
| 100.0% | 5.51s |   4,134 | `moduleEvaluation` | `<unknown>` |

##### `forEach` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`)

|     % |    Time | Samples | Callee               | Location                                                                                  |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------------------------------------------- |
| 83.0% |   4.29s |   3,245 | `checkSourceElement` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`  |
|  6.9% | 355.2ms |     231 | `processRootFile`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115042:33` |
|  5.1% | 262.1ms |     198 | `bind`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:45448:22`  |
|  3.9% | 203.6ms |     113 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115532:55` |
|  2.5% | 129.0ms |      99 | `(anonymous)`        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113932:54` |

##### `flatMap` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21`)

|      % |  Time | Samples | Callee                          | Location                                                                                  |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.63s |   3,503 | `getSemanticDiagnosticsForFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47` |

##### `getDiagnosticsHelper` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114649:38`)

|      % |  Time | Samples | Callee    | Location                                                                               |
| -----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------- |
| 100.0% | 4.63s |   3,504 | `flatMap` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:712:21` |

##### `getSemanticDiagnosticsForFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114728:47`)

|      % |  Time | Samples | Callee                   | Location                                                                                  |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.63s |   3,502 | `getAndCacheDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40` |

##### `runWithCancellationToken` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42`)

|     % |  Time | Samples | Callee                             | Location                                                                                  |
| ----: | ----: | ------: | ---------------------------------- | ----------------------------------------------------------------------------------------- |
| 99.9% | 4.62s |   3,499 | `(anonymous)`                      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54` |
|  0.1% | 2.4ms |       2 | `getMergedBindAndCheckDiagnostics` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114751:50` |

##### `getAndCacheDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:115004:40`)

|      % |  Time | Samples | Callee                     | Location                                                                                  |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------------------------------------------- |
| 100.0% | 4.63s |   3,502 | `runWithCancellationToken` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114707:42` |

##### `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114735:54`)

|     % |    Time | Samples | Callee                               | Location                                                                                  |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| 93.7% |   4.33s |   3,278 | `getDiagnostics`                     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`  |
|  6.3% | 290.3ms |     221 | `getDiagnosticsProducingTypeChecker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114603:52` |

##### `checkSourceFileWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39`)

|     % |  Time | Samples | Callee                   | Location                                                                                 |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 55.7% | 2.41s |   1,835 | `checkDeferredNodes`     | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36` |
| 44.1% | 1.91s |   1,439 | `forEach`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.1% | 5.1ms |       4 | `checkUnusedIdentifiers` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79822:40` |

##### `checkSourceFile` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33`)

|      % |  Time | Samples | Callee                  | Location                                                                                 |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.33s |   3,278 | `checkSourceFileWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83677:39` |

##### `getDiagnosticsWorker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38`)

|      % |  Time | Samples | Callee            | Location                                                                                 |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.33s |   3,278 | `checkSourceFile` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83652:33` |

##### `getDiagnostics` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83729:32`)

|      % |  Time | Samples | Callee                 | Location                                                                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 4.33s |   3,278 | `getDiagnosticsWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83741:38` |

##### `checkSourceElement` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83329:36`)

|     % |    Time | Samples | Callee                     | Location                                                                                 |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------------------------------------------- |
| 73.8% |   3.16s |   2,400 | `checkBlock`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28` |
| 44.8% |   1.92s |   1,457 | `checkVariableStatement`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80542:40` |
| 44.7% |   1.92s |   1,455 | `checkVariableDeclaration` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80532:42` |
| 24.5% |   1.05s |     797 | `checkSourceElementWorker` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83338:42` |
| 22.1% | 949.1ms |     724 | `checkTypeReferenceNode`   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78559:40` |

##### `checkExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:77792:33`)

|     % |    Time | Samples | Callee                          | Location                                                                                 |
| ----: | ------: | ------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
| 90.8% |   2.94s |   2,230 | `checkCallExpression`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37` |
| 30.6% | 992.8ms |     753 | `checkObjectLiteral`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71589:36` |
| 22.7% | 737.0ms |     564 | `checkPropertyAccessExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:72575:47` |
| 17.4% | 565.1ms |     424 | `checkArrayLiteral`             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:71403:35` |
|  8.4% | 273.1ms |     205 | `checkIdentifier`               | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:69711:33` |

##### `checkBlock` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:80106:28`)

|      % |  Time | Samples | Callee                    | Location                                                                                 |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------- |
| 100.0% | 3.16s |   2,399 | `forEach`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  <0.1% | 1.1ms |       1 | `isFunctionOrModuleBlock` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:13368:37` |

##### `checkCallExpression` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75115:37`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 94.6% |   2.78s |   2,110 | `getResolvedSignature`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38` |
|  6.7% | 197.7ms |     150 | `getReturnTypeOfSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:58288:42` |
|  1.9% |  56.8ms |      43 | `checkDeprecatedSignature`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:75174:42` |
|  0.1% |   4.0ms |       3 | `checkGrammarForOmittedArgument` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:85883:48` |

##### `getResolvedSignature` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74982:38`)

|     % |    Time | Samples | Callee                  | Location                                                                                 |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| 91.1% |   2.53s |   1,926 | `resolveCall`           | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29` |
| 22.5% | 627.7ms |     477 | `resolveCallExpression` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74486:39` |
|  0.2% |   6.3ms |       5 | `resolveNewExpression`  | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74600:38` |
|  0.2% |   5.4ms |       4 | `getNodeLinks`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48028:30` |
|  0.1% |   2.9ms |       2 | `resolveUntypedCall`    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73319:36` |

##### `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`)

|     % |    Time | Samples | Callee                   | Location                                                                                 |
| ----: | ------: | ------: | ------------------------ | ---------------------------------------------------------------------------------------- |
| 80.1% |   2.04s |   1,548 | `isRelatedTo`            | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63309:33` |
| 11.7% | 298.6ms |     229 | `isIdenticalTo`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63524:35` |
|  1.3% |  33.6ms |      25 | `recursiveTypeRelatedTo` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44` |

##### `resolveCall` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74104:29`)

|     % |    Time | Samples | Callee                           | Location                                                                                 |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------------- |
| 92.2% |   2.33s |   1,776 | `chooseOverload`                 | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74299:36` |
|  6.2% | 157.5ms |     121 | `forEach`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:388:21`   |
|  0.6% |  14.8ms |      11 | `reorderCandidates`              | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73350:35` |
|  0.4% |  10.7ms |       7 | `getSignatureApplicabilityError` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73779:48` |
|  0.2% |   4.3ms |       3 | `getEffectiveCallArguments`      | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73870:43` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                                                                 |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------------------------- |
| 98.7% |  2.41s |   1,834 | `checkDeferredNode` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35` |
|  1.2% | 28.5ms |      22 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50413:38` |
|  0.2% |  5.8ms |       4 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50128:37` |
|  0.1% |  3.5ms |       3 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56873:50` |
|  0.1% |  2.3ms |       2 | `(anonymous)`       | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:47943:37` |

##### `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`)

|     % |  Time | Samples | Callee    | Location    |
| ----: | ----: | ------: | --------- | ----------- |
| 99.9% | 2.41s |   1,834 | `forEach` | `<unknown>` |

##### `checkDeferredNode` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83613:35`)

|     % |  Time | Samples | Callee                                                 | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| 99.8% | 2.41s |   1,830 | `checkFunctionExpressionOrObjectLiteralMethodDeferred` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:76186:70` |
|  0.1% | 2.4ms |       2 | `resolveUntypedCall`                                   | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:73319:36` |
|  0.1% | 1.5ms |       1 | `checkAccessorDeclaration`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:78472:42` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                                                             |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------ |
| 25.9% | 23.0ms |      17 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1:10` |
|  4.1% |  3.7ms |       3 | `(anonymous)` | `internal:stream:1:11`                                                               |
|  4.1% |  3.7ms |       3 | `(anonymous)` | `node:stream:1:11`                                                                   |
|  4.1% |  3.7ms |       3 | `(anonymous)` | `internal:fs/streams:1:11`                                                           |
|  2.6% |  2.3ms |       2 | `(anonymous)` | `internal:streams/pipeline:1:11`                                                     |

##### `require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 81.2ms |      63 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |   Time | Samples | Callee      | Location    |
| -----: | -----: | ------: | ----------- | ----------- |
| 100.0% | 81.2ms |      63 | `require`   | `<unknown>` |
|   1.9% |  1.5ms |       1 | `anonymous` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 93.5% | 35.7ms |      26 | `readFileSync` | `<unknown>` |

##### `statSync` (`<unknown>`)

|    % |  Time | Samples | Callee     | Location    |
| ---: | ----: | ------: | ---------- | ----------- |
| 4.4% | 1.1ms |       1 | `statSync` | `<unknown>` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 80.8% | 10.1ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 78.5% | 9.1ms |       7 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                                                                 |
| ----: | ----: | ------: | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| 45.3% | 4.4ms |       3 | `(anonymous)`                        | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74581:46` |
| 40.7% | 3.9ms |       3 | `isGenericFunctionReturningFunction` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:74587:52` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee                       | Location                                                                                 |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------------------------------------------- |
| 21.9% | 1.5ms |       1 | `(anonymous)`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:38328:39` |
| 19.1% | 1.3ms |       1 | `convertPropertyValueToJson` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:40140:44` |
| 17.7% | 1.2ms |       1 | `(anonymous)`                | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:14492:74` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 5.1ms |       4 | `anonymous` | `<unknown>` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                                                                  |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------- |
| 74.0% | 3.7ms |       3 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:48970:112` |
| 26.0% | 1.3ms |       1 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:79774:26`  |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                                                                |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       3 | `(anonymous)` | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1245:31` |

##### `(anonymous)` (`internal:stream:1:11`)

|     % |  Time | Samples | Callee               | Location    |
| ----: | ----: | ------: | -------------------- | ----------- |
| 62.6% | 2.3ms |       2 | `anonymous`          | `<unknown>` |
| 37.4% | 1.4ms |       1 | `setPrototypeDirect` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/pipeline:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.3ms |       2 | `anonymous` | `<unknown>` |

##### `ensureRegistered` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.5ms |       1 | `newRegistryEntry` | `<unknown>` |

##### `loadModule` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.5ms |       1 | `ensureRegistered` | `<unknown>` |
| 100.0% | 1.5ms |       1 | `loadModule`       | `<unknown>` |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.5ms |       1 | `readdirSync` | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|      % |  Time | Samples | Callee  | Location    |
| -----: | ----: | ------: | ------- | ----------- |
| 100.0% | 1.5ms |       1 | `fetch` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1% | 58.2ms |      46 | `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% | 56.9ms |       4 | `internIdentifier` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:31510:34`) ← `createIdentifier` (31520:34) ← `parseImportOrExportSpecifier` (36344:46) ← `parseDelimitedList` (32208:36) ← `parseBracketedList` (32274:36) ← `parseNamedImportsOrExports` (36324:44) ← `parseImportClause` (36273:35) ← `parseImportDeclarationOrImportEqualsDeclaration` (36192:65) ← `parseList` (31892:27) ← `parseModuleBlock` (36106:34) ← `parseAmbientExternalModuleDeclaration` (36129:55) ← `parseList` (31892:27) ← `parseSourceFileWorker` (30853:39) ← `parseSourceFile` (30679:33) ← `createSourceFile` (30483:30) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `(anonymous)` (115532:55) ← `forEach` (388:21) ← `processReferencedFiles` (115531:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processTypeReferenceDirectiveWorker` (115559:53) ← `processTypeReferenceDirective` (115554:47) ← `processTypeReferenceDirectives` (115538:48) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `processImportedModules` (115645:40) ← `findSourceFileWorker` (115294:38) ← `findSourceFile` (115284:32) ← `getSourceFileFromReferenceWorker` (115194:50) ← `processSourceFile` (115241:35) ← `processRootFile` (115042:33) ← `forEach` (388:21) ← `createProgram` (113744:27)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% | 38.0ms |      24 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                |
| 0.5% | 27.0ms |       9 | `slice` ← `captureErrorCalculationState` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63069:50`) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `isTypeAssignableToKind` (76512:40) ← `isThenableType` (79193:32) ← `getAwaitedTypeNoAlias` (79269:39) ← `mapType` (68119:25) ← `getAwaitedTypeNoAlias` (79269:39) ← `getAwaitedTypeNoAlias` (79269:39) ← `checkAwaitedType` (79184:34) ← `checkAsyncFunctionReturnType` (79374:46) ← `checkSignatureDeclaration` (78090:43) ← `checkFunctionOrMethodDeclaration` (79750:50) ← `checkMethodDeclaration` (78362:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkClassDeclaration` (81884:39) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% | 23.5ms |      19 | `createTypeChecker` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:46937:31`) ← `getDiagnosticsProducingTypeChecker` (114603:52) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 18.2ms |      14 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:20275:82`) ← `findIndex` (538:23) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% | 15.5ms |      12 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.3% | 14.9ms |      10 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkAwaitExpression` (76370:38) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkTryStatement` (81627:35) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                          |
| 0.3% | 13.8ms |      10 | `signaturesRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:64910:41`) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `propertyRelatedTo` (64644:39) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `propertiesRelatedTo` (64743:41) ← `structuredTypeRelatedToWorker` (63924:51) ← `structuredTypeRelatedTo` (63918:45) ← `recursiveTypeRelatedTo` (63805:44) ← `isRelatedTo` (63309:33) ← `checkTypeRelatedTo` (62999:36) ← `compareTypesAssignable` (62162:40) ← `getInferredType` (67383:33) ← `getInferredTypes` (67435:34) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                     |
| 0.2% | 11.7ms |       4 | `next` ← `arrayFrom` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:1508:23`) ← `getIntersectionType` (60014:37) ← `instantiateTypeWithAlias` (61964:42) ← `map` (647:17) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `map` (647:17) ← `getObjectTypeInstantiation` (61740:44) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `instantiateList` (61591:33) ← `instantiateTypeWorker` (61983:39) ← `instantiateTypeWithAlias` (61964:42) ← `instantiateType` (61961:33) ← `getTypeOfInstantiatedSymbol` (55325:45) ← `getTypeOfParameter` (75450:36) ← `tryGetTypeAtPosition` (75528:38) ← `getTypeAtPosition` (75525:35) ← `getSignatureApplicabilityError` (73779:48) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkAwaitExpression` (76370:38) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% | 11.4ms |       9 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% | 10.7ms |       8 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% | 10.5ms |       8 | `checkTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:62999:36`) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `getReturnTypeFromBody` (75792:39) ← `getReturnTypeOfSignature` (58288:42) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `getQuickTypeOfExpression` (77740:42) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `getTypeOfSymbol` (55373:33) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38) |
| 0.2% | 10.3ms |       8 | `recursiveTypeRelatedTo` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:63805:44`) ← `typeRelatedToSomeType` (63650:43) ← `eachTypeRelatedToSomeType` (63637:47) ← `isIdenticalTo` (63524:35) ← `checkTypeRelatedTo` (62999:36) ← `isTypeOrBaseIdenticalTo` (67332:41) ← `inferFromMatchingTypes` (66951:44) ← `inferFromTypes` (66703:36) ← `inferFromContravariantTypes` (66981:49) ← `applyToParameterTypes` (66270:39) ← `inferFromSignature` (67286:40) ← `inferFromSignatures` (67275:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferFromProperties` (67265:41) ← `inferFromObjectTypes` (67171:42) ← `invokeOnce` (66918:32) ← `inferFromTypes` (66703:36) ← `inferTypes` (66691:28) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionForMutableLocation` (77547:51) ← `checkArrayLiteral` (71403:35) ← `checkExpression` (77792:33) ← `checkExpressionWithContextualType` (77427:51) ← `inferTypeArguments` (73538:36) ← `chooseOverload` (74299:36) ← `resolveCall` (74104:29) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                               |
| 0.2% | 10.1ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.TBtwcX\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.DBmawf\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `findIndex` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:538:23`) ← `_loop_1` (20264:36) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `visitDirectory` (20258:32) ← `matchFiles` (20241:24) ← `getFileNamesFromConfigSpecs` (41084:41) ← `getFileNames` (40647:30) ← `parseJsonConfigFileContentWorker` (40560:46)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  9.5ms |       4 | `createInstantiatedSymbolTable` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:56114:47`) ← `resolveObjectTypeMembers` (56389:42) ← `resolveTypeReferenceMembers` (56430:45) ← `resolveStructuredTypeMembers` (57178:46) ← `isFunctionObjectType` (67797:38) ← `getTypeFacts` (67804:30) ← `(anonymous)` (67869:59) ← `reduceLeft` (1408:24) ← `checkPrefixUnaryExpression` (76420:44) ← `checkExpression` (77792:33) ← `checkTruthinessExpression` (80676:43) ← `checkIfStatement` (80553:34) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionOrMethodDeclaration` (79750:50) ← `checkMethodDeclaration` (78362:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkClassDeclaration` (81884:39) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  9.4ms |       7 | `getPropertyOfType` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:57857:35`) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `getReducedType` (57798:32) ← `getReducedApparentType` (57608:40) ← `getPropertyOfType` (57857:35) ← `checkPropertyAccessExpressionOrQualifiedName` (72679:62) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionStatement` (80548:42) ← `checkSourceElementWorker` (83338:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  9.2ms |       7 | `getFlowTypeOfReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`) ← `checkIdentifier` (69711:33) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `getQuickTypeOfExpression` (77740:42) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.1% |  8.1ms |       7 | `setStructuredTypeMembers` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:50428:42`) ← `resolveIntersectionTypeMembers` (56785:48) ← `resolveStructuredTypeMembers` (57178:46) ← `getIndexInfosOfStructuredType` (57935:47) ← `getApplicableIndexInfo` (57959:40) ← `createUnionOrIntersectionProperty` (57615:51) ← `getUnionOrIntersectionProperty` (57774:48) ← `getPropertyOfUnionOrIntersectionType` (57787:54) ← `getPropertiesOfUnionOrIntersectionType` (57225:56) ← `checkSpreadPropOverrides` (71989:42) ← `checkObjectLiteral` (71589:36) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `checkDeclarationInitializer` (77475:45) ← `getTypeForVariableLikeDeclaration` (54427:51) ← `getWidenedTypeForVariableLikeDeclaration` (54968:58) ← `getTypeOfVariableOrParameterOrPropertyWorker` (55025:62) ← `getTypeOfVariableOrParameterOrProperty` (55012:56) ← `checkVariableLikeDeclaration` (80369:46) ← `checkVariableDeclaration` (80532:42) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkVariableStatement` (80542:40) ← `checkSourceElement` (83329:36) ← `forEach` (388:21) ← `checkBlock` (80106:28) ← `checkSourceElement` (83329:36) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.1% |  7.6ms |       2 | `getFlowTypeOfReference` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:68502:40`) ← `checkIdentifier` (69711:33) ← `checkExpression` (77792:33) ← `checkNonNullExpression` (72531:40) ← `checkPropertyAccessExpression` (72575:47) ← `checkExpression` (77792:33) ← `resolveCallExpression` (74486:39) ← `getResolvedSignature` (74982:38) ← `checkCallExpression` (75115:37) ← `checkExpression` (77792:33) ← `checkExpressionCached` (77450:39) ← `getReturnTypeFromBody` (75792:39) ← `getReturnTypeOfSignature` (58288:42) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (76186:70) ← `checkDeferredNode` (83613:35) ← `forEach` ← `checkDeferredNodes` (`node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:83607:36`) ← `checkSourceFileWorker` (83677:39) ← `checkSourceFile` (83652:33) ← `getDiagnosticsWorker` (83741:38) ← `getDiagnostics` (83729:32) ← `(anonymous)` (114735:54) ← `runWithCancellationToken` (114707:42) ← `getAndCacheDiagnostics` (115004:40) ← `getSemanticDiagnosticsForFile` (114728:47) ← `flatMap` (712:21) ← `getDiagnosticsHelper` (114649:38)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
