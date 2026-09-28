# CPU profile

Took 5.53s over 4,139 samples (1.3ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 90.0% |   4.98s |   3,717 |
| Native           |  7.3% | 406.9ms |     311 |
| Standard library |  2.5% | 140.6ms |     108 |
| Unknown          |  0.1% |   4.2ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                             |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 4.9% | 272.5ms |     213 | `anonymous`                     | `<unknown>`                                          |
| 4.5% | 250.6ms |     177 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30` |
| 3.2% | 179.0ms |     133 | `getObjectFlags`                | `node_modules/typescript/lib/typescript.js:20242:24` |
| 2.2% | 123.3ms |      97 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67063:36` |
| 2.0% | 108.9ms |       6 | `withJSDoc`                     | `node_modules/typescript/lib/typescript.js:31691:21` |
| 1.9% | 106.7ms |      83 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:64785:38` |
| 1.3% |  70.9ms |      55 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25` |
| 1.2% |  64.2ms |      37 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:67277:43` |
| 1.1% |  58.8ms |      41 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:71634:34` |
| 1.0% |  58.1ms |      46 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:68729:26` |
| 1.0% |  58.0ms |      45 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:66493:25` |
| 0.9% |  49.6ms |      37 | `getApparentType`               | `node_modules/typescript/lib/typescript.js:60490:27` |
| 0.9% |  48.6ms |      37 | `couldContainTypeVariables`     | `node_modules/typescript/lib/typescript.js:69600:37` |
| 0.7% |  41.2ms |      32 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:69901:28` |
| 0.7% |  40.7ms |      32 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  38.8ms |      30 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:59020:41` |
| 0.7% |  38.0ms |      29 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  37.1ms |      25 | `getAliasId`                    | `node_modules/typescript/lib/typescript.js:61521:22` |
| 0.7% |  37.1ms |      29 | `some`                          | `node_modules/typescript/lib/typescript.js:2781:14`  |
| 0.7% |  36.4ms |      28 | `scan`                          | `node_modules/typescript/lib/typescript.js:12765:16` |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                             |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 4.5% | 250.6ms |     177 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:66185:30` |
| 3.2% | 179.0ms |     133 | `getObjectFlags`                | `node_modules/typescript/lib/typescript.js:20242:24` |
| 2.2% | 123.3ms |      97 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67063:36` |
| 2.0% | 108.9ms |       6 | `withJSDoc`                     | `node_modules/typescript/lib/typescript.js:31691:21` |
| 1.9% | 106.7ms |      83 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:64785:38` |
| 1.3% |  70.9ms |      55 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:61498:25` |
| 1.2% |  64.2ms |      37 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:67277:43` |
| 1.1% |  58.8ms |      41 | `getFlowTypeOfReference`        | `node_modules/typescript/lib/typescript.js:71634:34` |
| 1.0% |  58.1ms |      46 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:68729:26` |
| 1.0% |  58.0ms |      45 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:66493:25` |
| 0.9% |  49.6ms |      37 | `getApparentType`               | `node_modules/typescript/lib/typescript.js:60490:27` |
| 0.9% |  48.6ms |      37 | `couldContainTypeVariables`     | `node_modules/typescript/lib/typescript.js:69600:37` |
| 0.7% |  41.2ms |      32 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:69901:28` |
| 0.7% |  40.7ms |      32 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js:61539:31` |
| 0.7% |  38.8ms |      30 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:59020:41` |
| 0.7% |  38.0ms |      29 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:66101:27` |
| 0.7% |  37.1ms |      25 | `getAliasId`                    | `node_modules/typescript/lib/typescript.js:61521:22` |
| 0.7% |  37.1ms |      29 | `some`                          | `node_modules/typescript/lib/typescript.js:2781:14`  |
| 0.7% |  36.4ms |      28 | `scan`                          | `node_modules/typescript/lib/typescript.js:12765:16` |
| 0.6% |  33.1ms |      25 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:66148:29` |

##### Native

|     % |    Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  4.9% | 272.5ms |     213 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  0.6% |  32.0ms |      26 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.6% |  31.4ms |      21 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.4% |  22.9ms |      17 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.2% |   9.9ms |       7 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  0.1% |   7.9ms |       6 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |   7.6ms |       6 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |   5.0ms |       1 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  0.1% |   3.6ms |       3 | `SymbolLinks`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |   2.8ms |       2 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |   2.5ms |       2 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| <0.1% |   1.5ms |       1 | `readdirSync`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |   1.5ms |       1 | `writer`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| <0.1% |   1.4ms |       1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| <0.1% |   1.3ms |       1 | `createRequire`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
| <0.1% |   1.1ms |       1 | `max`                                                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
| <0.1% |   1.0ms |       1 | `stream`                                                                                                                                                                                                                                                                                                                                                                         | `<unknown>` |
| <0.1% |   1.0ms |       1 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function      | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
|  0.4% | 21.7ms |      17 | `forEach`     | `<unknown>` |
|  0.3% | 17.8ms |      13 | `slice`       | `<unknown>` |
|  0.3% | 14.3ms |      11 | `join`        | `<unknown>` |
|  0.2% | 11.6ms |       7 | `toString`    | `<unknown>` |
|  0.2% | 10.5ms |       8 | `get`         | `<unknown>` |
|  0.1% |  6.4ms |       5 | `set`         | `<unknown>` |
|  0.1% |  4.5ms |       4 | `lastIndexOf` | `<unknown>` |
|  0.1% |  3.8ms |       3 | `find`        | `<unknown>` |
|  0.1% |  3.6ms |       3 | `trimEnd`     | `<unknown>` |
|  0.1% |  3.4ms |       3 | `Map`         | `<unknown>` |
|  0.1% |  2.8ms |       2 | `trimStart`   | `<unknown>` |
|  0.1% |  2.8ms |       2 | `filter`      | `<unknown>` |
| <0.1% |  2.7ms |       2 | `resolve`     | `<unknown>` |
| <0.1% |  2.6ms |       2 | `replace`     | `<unknown>` |
| <0.1% |  2.5ms |       2 | `next`        | `<unknown>` |
| <0.1% |  2.5ms |       2 | `indexOf`     | `<unknown>` |
| <0.1% |  2.4ms |       2 | `unshift`     | `<unknown>` |
| <0.1% |  2.4ms |       2 | `substring`   | `<unknown>` |
| <0.1% |  2.2ms |       2 | `add`         | `<unknown>` |
| <0.1% |  1.4ms |       1 | `includes`    | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 62.5% | 156.7ms |     111 | `node_modules/typescript/lib/typescript.js:66193` |
| 32.9% |  82.3ms |      58 | `node_modules/typescript/lib/typescript.js:66204` |
|  1.7% |   4.3ms |       3 | `node_modules/typescript/lib/typescript.js:66203` |
|  1.0% |   2.5ms |       2 | `node_modules/typescript/lib/typescript.js:66242` |

##### `getObjectFlags` (`node_modules/typescript/lib/typescript.js:20242:24`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 99.1% | 177.5ms |     132 | `node_modules/typescript/lib/typescript.js:20243` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67063:36`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 55.7% | 68.7ms |      53 | `node_modules/typescript/lib/typescript.js:67076` |
| 20.3% | 25.0ms |      20 | `node_modules/typescript/lib/typescript.js:67123` |
|  6.5% |  8.0ms |       6 | `node_modules/typescript/lib/typescript.js:67129` |
|  3.7% |  4.5ms |       4 | `node_modules/typescript/lib/typescript.js:67068` |
|  2.9% |  3.6ms |       3 | `node_modules/typescript/lib/typescript.js:67188` |

##### `withJSDoc` (`node_modules/typescript/lib/typescript.js:31691:21`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 96.9% | 105.5ms |       4 | `node_modules/typescript/lib/typescript.js:31696` |
|  3.1% |   3.4ms |       2 | `node_modules/typescript/lib/typescript.js:31692` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:64785:38`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 33.6% | 35.9ms |      28 | `node_modules/typescript/lib/typescript.js:64815` |
| 32.3% | 34.5ms |      26 | `node_modules/typescript/lib/typescript.js:64787` |
|  7.4% |  7.9ms |       6 | `node_modules/typescript/lib/typescript.js:64819` |
|  7.1% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:64810` |
|  4.9% |  5.3ms |       4 | `node_modules/typescript/lib/typescript.js:64786` |

##### `getTypeListId` (`node_modules/typescript/lib/typescript.js:61498:25`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 59.8% | 42.4ms |      33 | `node_modules/typescript/lib/typescript.js:61512` |
| 20.1% | 14.2ms |      11 | `node_modules/typescript/lib/typescript.js:61509` |
| 11.1% |  7.9ms |       6 | `node_modules/typescript/lib/typescript.js:61501` |
|  5.3% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:61514` |
|  2.0% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:61504` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:67277:43`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 49.7% | 31.9ms |      13 | `node_modules/typescript/lib/typescript.js:67280` |
| 12.1% |  7.8ms |       6 | `node_modules/typescript/lib/typescript.js:67720` |
|  6.5% |  4.2ms |       3 | `node_modules/typescript/lib/typescript.js:67285` |
|  2.4% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:67685` |
|  2.3% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:67391` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:71634:34`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 91.4% | 53.8ms |      37 | `node_modules/typescript/lib/typescript.js:71634` |
|  6.6% |  3.9ms |       3 | `node_modules/typescript/lib/typescript.js:71646` |
|  2.1% |  1.2ms |       1 | `node_modules/typescript/lib/typescript.js:71649` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:68729:26`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 81.2% | 47.2ms |      37 | `node_modules/typescript/lib/typescript.js:68736` |
| 10.3% |  6.0ms |       5 | `node_modules/typescript/lib/typescript.js:68735` |
|  6.6% |  3.8ms |       3 | `node_modules/typescript/lib/typescript.js:68730` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 28.5% | 16.5ms |      13 | `node_modules/typescript/lib/typescript.js:66510` |
| 17.7% | 10.2ms |       8 | `node_modules/typescript/lib/typescript.js:66548` |
| 17.5% | 10.2ms |       8 | `node_modules/typescript/lib/typescript.js:66523` |
| 13.1% |  7.6ms |       6 | `node_modules/typescript/lib/typescript.js:66588` |
|  4.8% |  2.8ms |       2 | `node_modules/typescript/lib/typescript.js:66560` |

##### `getApparentType` (`node_modules/typescript/lib/typescript.js:60490:27`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 34.4% | 17.1ms |      13 | `node_modules/typescript/lib/typescript.js:60491` |
|  9.6% |  4.8ms |       4 | `node_modules/typescript/lib/typescript.js:60493` |

##### `couldContainTypeVariables` (`node_modules/typescript/lib/typescript.js:69600:37`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 41.0% | 19.9ms |      15 | `node_modules/typescript/lib/typescript.js:69605` |
| 30.5% | 14.8ms |      11 | `node_modules/typescript/lib/typescript.js:69607` |
|  8.8% |  4.3ms |       3 | `node_modules/typescript/lib/typescript.js:69601` |
|  5.2% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:69606` |
|  2.2% |  1.1ms |       1 | `node_modules/typescript/lib/typescript.js:69603` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:69901:28`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 28.0% | 11.5ms |       9 | `node_modules/typescript/lib/typescript.js:69902` |
| 12.5% |  5.2ms |       4 | `node_modules/typescript/lib/typescript.js:69923` |
|  9.4% |  3.9ms |       3 | `node_modules/typescript/lib/typescript.js:70032` |
|  6.7% |  2.8ms |       2 | `node_modules/typescript/lib/typescript.js:70068` |
|  6.4% |  2.7ms |       2 | `node_modules/typescript/lib/typescript.js:69922` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 67.5% | 27.5ms |      21 | `node_modules/typescript/lib/typescript.js:61541` |
| 20.6% |  8.4ms |       7 | `node_modules/typescript/lib/typescript.js:61544` |
|  6.1% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61543` |
|  5.8% |  2.4ms |       2 | `node_modules/typescript/lib/typescript.js:61540` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:59020:41`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 85.7% | 33.3ms |      26 | `node_modules/typescript/lib/typescript.js:59023` |
|  6.9% |  2.7ms |       2 | `node_modules/typescript/lib/typescript.js:59022` |
|  3.7% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:59025` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 44.2% | 16.8ms |      13 | `node_modules/typescript/lib/typescript.js:66135` |
| 27.4% | 10.4ms |       8 | `node_modules/typescript/lib/typescript.js:66122` |
| 10.6% |  4.0ms |       3 | `node_modules/typescript/lib/typescript.js:66112` |
|  4.1% |  1.6ms |       1 | `node_modules/typescript/lib/typescript.js:66115` |
|  3.6% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:66118` |

##### `getAliasId` (`node_modules/typescript/lib/typescript.js:61521:22`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 37.1ms |      25 | `node_modules/typescript/lib/typescript.js:61522` |

##### `some` (`node_modules/typescript/lib/typescript.js:2781:14`)

|     % |   Time | Samples | Location                                         |
| ----: | -----: | ------: | ------------------------------------------------ |
| 48.9% | 18.2ms |      14 | `node_modules/typescript/lib/typescript.js:2784` |
| 40.2% | 14.9ms |      12 | `node_modules/typescript/lib/typescript.js:2785` |
| 10.9% |  4.0ms |       3 | `node_modules/typescript/lib/typescript.js:2790` |

##### `scan` (`node_modules/typescript/lib/typescript.js:12765:16`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 47.3% | 17.2ms |      13 | `node_modules/typescript/lib/typescript.js:12774` |
| 27.8% | 10.1ms |       8 | `node_modules/typescript/lib/typescript.js:12959` |
|  4.0% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:13205` |
|  3.7% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:12951` |
|  3.4% |  1.2ms |       1 | `node_modules/typescript/lib/typescript.js:12776` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 33.1ms |      25 | `node_modules/typescript/lib/typescript.js:66150` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 21.7ms |      17 | 1        |

##### `find` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 1        |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.6ms |       3 | 1        |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.8ms |       2 | 1        |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.5ms |       2 | 1        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location                         |
| ----: | ------: | ------: | ------------- | -------------------------------- |
| 95.8% | 261.1ms |     204 | `require`     | `<unknown>`                      |
|  1.5% |   4.0ms |       3 | `(anonymous)` | `<unknown>`                      |
|  0.5% |   1.4ms |       1 | `(anonymous)` | `internal:stream:1:11`           |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:streams/pipeline:1:11` |
|  0.5% |   1.3ms |       1 | `(anonymous)` | `internal:promisify:1:11`        |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`)

|     % |    Time | Samples | Caller                  | Location                                             |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 97.7% | 244.8ms |     173 | `isTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js:66101:27` |
|  2.3% |   5.8ms |       4 | `checkTypeAssignableTo` | `node_modules/typescript/lib/typescript.js:65233:33` |

##### `getObjectFlags` (`node_modules/typescript/lib/typescript.js:20242:24`)

|     % |   Time | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 20.4% | 36.6ms |      27 | `getApparentType`            | `node_modules/typescript/lib/typescript.js:60490:27` |
| 18.8% | 33.7ms |      23 | `couldContainTypeVariables`  | `node_modules/typescript/lib/typescript.js:69600:37` |
| 12.2% | 21.8ms |      17 | `isTupleType`                | `node_modules/typescript/lib/typescript.js:69093:23` |
|  9.0% | 16.1ms |      12 | `isEmptyAnonymousObjectType` | `node_modules/typescript/lib/typescript.js:65967:38` |
|  5.5% |  9.9ms |       8 | `isObjectOrArrayLiteralType` | `node_modules/typescript/lib/typescript.js:70509:38` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67063:36`)

|      % |    Time | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 123.3ms |      97 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:66493:25` |

##### `withJSDoc` (`node_modules/typescript/lib/typescript.js:31691:21`)

|     % |    Time | Samples | Caller                           | Location                                             |
| ----: | ------: | ------: | -------------------------------- | ---------------------------------------------------- |
| 96.9% | 105.5ms |       4 | `parsePropertyOrMethodSignature` | `node_modules/typescript/lib/typescript.js:33493:42` |
|  3.1% |   3.4ms |       2 | `parseSourceFileWorker`          | `node_modules/typescript/lib/typescript.js:31659:33` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:64785:38`)

|      % |    Time | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 106.7ms |      83 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:65023:33` |

##### `getTypeListId` (`node_modules/typescript/lib/typescript.js:61498:25`)

|     % |   Time | Samples | Caller                            | Location                                             |
| ----: | -----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 26.0% | 18.5ms |      14 | `getObjectTypeInstantiation`      | `node_modules/typescript/lib/typescript.js:64785:38` |
| 22.6% | 16.0ms |      13 | `createTypeReference`             | `node_modules/typescript/lib/typescript.js:61539:31` |
| 14.5% | 10.3ms |       8 | `getIntersectionType`             | `node_modules/typescript/lib/typescript.js:63112:31` |
| 13.8% |  9.8ms |       7 | `getConditionalTypeInstantiation` | `node_modules/typescript/lib/typescript.js:64979:43` |
| 10.8% |  7.7ms |       6 | `getUnionTypeFromSortedList`      | `node_modules/typescript/lib/typescript.js:62948:38` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:67277:43`)

|      % |   Time | Samples | Caller                    | Location                                             |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 64.2ms |      37 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:67207:37` |

##### `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:71634:34`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 91.4% | 53.8ms |      37 | `checkIdentifier`               | `node_modules/typescript/lib/typescript.js:72959:27` |
|  8.6% |  5.1ms |       4 | `getFlowTypeOfAccessExpression` | `node_modules/typescript/lib/typescript.js:76049:41` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:68729:26`)

|     % |   Time | Samples | Caller                   | Location                                             |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------- |
| 89.4% | 52.0ms |      41 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:67063:36` |
| 10.6% |  6.2ms |       5 | `isTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:66101:27` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:66493:25`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 54.9% | 31.8ms |      25 | `checkTypeRelatedTo`          | `node_modules/typescript/lib/typescript.js:66185:30` |
| 20.4% | 11.9ms |       9 | `isRelatedToWorker2`          | `node_modules/typescript/lib/typescript.js:68378:34` |
|  8.5% |  5.0ms |       4 | `typeArgumentsRelatedTo`      | `node_modules/typescript/lib/typescript.js:66973:36` |
|  4.7% |  2.7ms |       2 | `isPropertySymbolTypeRelated` | `node_modules/typescript/lib/typescript.js:67951:41` |
|  4.5% |  2.6ms |       2 | `eachTypeRelatedToType`       | `node_modules/typescript/lib/typescript.js:66935:35` |

##### `getApparentType` (`node_modules/typescript/lib/typescript.js:60490:27`)

|     % |   Time | Samples | Caller                                         | Location                                             |
| ----: | -----: | ------: | ---------------------------------------------- | ---------------------------------------------------- |
| 86.9% | 43.1ms |      32 | `getReducedApparentType`                       | `node_modules/typescript/lib/typescript.js:60495:34` |
|  5.2% |  2.6ms |       2 | `(anonymous)`                                  | `node_modules/typescript/lib/typescript.js:74215:9`  |
|  2.9% |  1.4ms |       1 | `checkPropertyAccessExpressionOrQualifiedName` | `node_modules/typescript/lib/typescript.js:75918:56` |
|  2.7% |  1.3ms |       1 | `inferFromTypes`                               | `node_modules/typescript/lib/typescript.js:69901:28` |
|  2.3% |  1.1ms |       1 | `structuredTypeRelatedToWorker`                | `node_modules/typescript/lib/typescript.js:67277:43` |

##### `couldContainTypeVariables` (`node_modules/typescript/lib/typescript.js:69600:37`)

|     % |   Time | Samples | Caller                     | Location                                             |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 65.5% | 31.9ms |      24 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js:65006:36` |
| 16.5% |  8.0ms |       6 | `instantiateSymbol`        | `node_modules/typescript/lib/typescript.js:64758:29` |
| 11.0% |  5.3ms |       4 | `some`                     | `node_modules/typescript/lib/typescript.js:2781:14`  |
|  7.0% |  3.4ms |       3 | `inferFromTypes`           | `node_modules/typescript/lib/typescript.js:69901:28` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:69901:28`)

|     % |  Time | Samples | Caller                   | Location                                             |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 18.9% | 7.8ms |       6 | `applyToReturnTypes`     | `node_modules/typescript/lib/typescript.js:69498:30` |
| 18.0% | 7.4ms |       6 | `inferFromMatchingTypes` | `node_modules/typescript/lib/typescript.js:70119:36` |
| 14.5% | 6.0ms |       5 | `inferFromTypeArguments` | `node_modules/typescript/lib/typescript.js:70136:36` |
| 13.0% | 5.4ms |       4 | `inferTypes`             | `node_modules/typescript/lib/typescript.js:69892:22` |
| 12.3% | 5.1ms |       4 | `inferFromTypes`         | `node_modules/typescript/lib/typescript.js:69901:28` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:61539:31`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 60.2% | 24.5ms |      19 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:62541:41` |
| 19.8% |  8.1ms |       7 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:66148:29` |
| 14.0% |  5.7ms |       4 | `getTypeWithThisArgument`       | `node_modules/typescript/lib/typescript.js:59199:35` |
|  6.0% |  2.5ms |       2 | `createNormalizedTupleType`     | `node_modules/typescript/lib/typescript.js:62544:37` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:59020:41`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 89.9% | 34.9ms |      27 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js:59210:36` |
| 10.1% |  3.9ms |       3 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js:59723:39` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66101:27`)

|     % |   Time | Samples | Caller                                     | Location                                             |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 58.5% | 22.3ms |      17 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js:65203:29` |
| 16.8% |  6.4ms |       5 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js:65221:30` |
| 10.5% |  4.0ms |       3 | `isTypeComparableTo`                       | `node_modules/typescript/lib/typescript.js:65227:30` |
|  7.7% |  2.9ms |       2 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js:65249:52` |
|  6.5% |  2.5ms |       2 | `compareTypesAssignable`                   | `node_modules/typescript/lib/typescript.js:65209:34` |

##### `getAliasId` (`node_modules/typescript/lib/typescript.js:61521:22`)

|     % |   Time | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 54.8% | 20.4ms |      13 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:64785:38` |
| 45.2% | 16.8ms |      12 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js:63112:31` |

##### `some` (`node_modules/typescript/lib/typescript.js:2781:14`)

|     % |   Time | Samples | Caller                      | Location                                             |
| ----: | -----: | ------: | --------------------------- | ---------------------------------------------------- |
| 30.4% | 11.3ms |       9 | `getReducedType`            | `node_modules/typescript/lib/typescript.js:60678:26` |
| 19.5% |  7.2ms |       6 | `isReadonlySymbol`          | `node_modules/typescript/lib/typescript.js:79911:28` |
| 11.3% |  4.2ms |       3 | `indexSignaturesRelatedTo`  | `node_modules/typescript/lib/typescript.js:68475:38` |
|  7.7% |  2.9ms |       2 | `couldContainTypeVariables` | `node_modules/typescript/lib/typescript.js:69600:37` |
|  6.7% |  2.5ms |       2 | `isConstTypeVariable`       | `node_modules/typescript/lib/typescript.js:60206:31` |

##### `scan` (`node_modules/typescript/lib/typescript.js:12765:16`)

|      % |   Time | Samples | Caller                  | Location                                             |
| -----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 36.4ms |      28 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js:31953:33` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:66148:29`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 33.1ms |      25 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:66493:25` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.K1HXIc\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                             |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 66.2% | 21.2ms |      17 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21208:60` |
| 33.8% | 10.8ms |       9 | `test`        | `<unknown>`                                          |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                            |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| 68.6% | 21.6ms |      14 | `readFileSync`   | `<unknown>`                                         |
| 31.4% |  9.9ms |       7 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:8722:28` |

##### `statSync` (`<unknown>`)

|     % |   Time | Samples | Caller     | Location                                            |
| ----: | -----: | ------: | ---------- | --------------------------------------------------- |
| 88.9% | 20.3ms |      15 | `statSync` | `node_modules/typescript/lib/typescript.js:8602:22` |
| 11.1% |  2.5ms |       2 | `statSync` | `<unknown>`                                         |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                             |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------- |
| 75.0% | 16.3ms |      13 | `getNamedMembers`     | `node_modules/typescript/lib/typescript.js:52485:27` |
| 12.7% |  2.8ms |       2 | `checkDeferredNodes`  | `node_modules/typescript/lib/typescript.js:87179:30` |
|  6.4% |  1.4ms |       1 | `extendExportSymbols` | `node_modules/typescript/lib/typescript.js:52179:31` |
|  5.8% |  1.3ms |       1 | `visit`               | `node_modules/typescript/lib/typescript.js:52216:19` |

##### `slice` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                             |
| ----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 52.1% | 9.3ms |       7 | `addRange`                 | `node_modules/typescript/lib/typescript.js:2979:18`  |
| 39.4% | 7.0ms |       5 | `filter`                   | `node_modules/typescript/lib/typescript.js:2533:16`  |
|  8.5% | 1.5ms |       1 | `fillMissingTypeArguments` | `node_modules/typescript/lib/typescript.js:60937:36` |

##### `join` (`<unknown>`)

|     % |   Time | Samples | Caller             | Location                                             |
| ----: | -----: | ------: | ------------------ | ---------------------------------------------------- |
| 92.5% | 13.3ms |      10 | `doJSDocScan`      | `node_modules/typescript/lib/typescript.js:37253:27` |
|  7.5% |  1.1ms |       1 | `parseTagComments` | `node_modules/typescript/lib/typescript.js:37509:32` |

##### `toString` (`<unknown>`)

|      % |   Time | Samples | Caller           | Location                                            |
| -----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 11.6ms |       7 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:8722:28` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                            | Location                                             |
| ----: | ----: | ------: | --------------------------------- | ---------------------------------------------------- |
| 38.4% | 4.0ms |       3 | `getConditionalTypeInstantiation` | `node_modules/typescript/lib/typescript.js:64979:43` |
| 23.4% | 2.5ms |       2 | `(anonymous)`                     | `node_modules/typescript/lib/typescript.js:50184:20` |
| 14.3% | 1.5ms |       1 | `getPropertyOfType`               | `node_modules/typescript/lib/typescript.js:60739:29` |
| 12.5% | 1.3ms |       1 | `getDiagnostics2`                 | `node_modules/typescript/lib/typescript.js:18843:27` |
| 11.4% | 1.2ms |       1 | `(anonymous)`                     | `node_modules/typescript/lib/typescript.js:52182:20` |

##### `fetch` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 9.9ms |       7 | `requestFetch` | `<unknown>` |

##### `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location                                            |
| -----: | ----: | ------: | --------------------- | --------------------------------------------------- |
| 100.0% | 7.9ms |       6 | `toFileNameLowerCase` | `node_modules/typescript/lib/typescript.js:3496:29` |

##### `stringSplitFast` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                            |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 7.6ms |       6 | `pathComponents` | `node_modules/typescript/lib/typescript.js:9068:24` |

##### `set` (`<unknown>`)

|     % |  Time | Samples | Caller                 | Location                                              |
| ----: | ----: | ------: | ---------------------- | ----------------------------------------------------- |
| 41.9% | 2.7ms |       2 | `declareSymbol`        | `node_modules/typescript/lib/typescript.js:44997:25`  |
| 38.4% | 2.5ms |       2 | `updateFilesByNameMap` | `node_modules/typescript/lib/typescript.js:124131:32` |
| 19.7% | 1.3ms |       1 | `(anonymous)`          | `node_modules/typescript/lib/typescript.js:59752:23`  |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location    |
| -----: | ----: | ------: | ----------------------- | ----------- |
| 100.0% | 5.0ms |       1 | `loadAndEvaluateModule` | `<unknown>` |

##### `lastIndexOf` (`<unknown>`)

|     % |  Time | Samples | Caller            | Location                                             |
| ----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 47.7% | 2.2ms |       2 | `startsWith`      | `node_modules/typescript/lib/typescript.js:3819:20`  |
| 26.4% | 1.2ms |       1 | `getBaseFileName` | `node_modules/typescript/lib/typescript.js:9026:25`  |
| 25.8% | 1.2ms |       1 | `doJSDocScan`     | `node_modules/typescript/lib/typescript.js:37253:27` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Caller                             | Location                                             |
| ----: | ----: | ------: | ---------------------------------- | ---------------------------------------------------- |
| 69.6% | 2.7ms |       2 | `getClassLikeDeclarationOfSymbol`  | `node_modules/typescript/lib/typescript.js:20238:41` |
| 30.4% | 1.2ms |       1 | `checkResolvedBlockScopedVariable` | `node_modules/typescript/lib/typescript.js:50794:44` |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                             |
| -----: | ----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% | 3.6ms |       3 | `createSymbol` | `node_modules/typescript/lib/typescript.js:49995:24` |

##### `trimEnd` (`<unknown>`)

|     % |  Time | Samples | Caller                   | Location                                             |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 70.0% | 2.6ms |       2 | `doJSDocScan`            | `node_modules/typescript/lib/typescript.js:37253:27` |
| 30.0% | 1.1ms |       1 | `parseNestedTypeLiteral` | `node_modules/typescript/lib/typescript.js:37723:38` |

##### `Map` (`<unknown>`)

|     % |  Time | Samples | Caller                                    | Location                                             |
| ----: | ----: | ------: | ----------------------------------------- | ---------------------------------------------------- |
| 36.6% | 1.3ms |       1 | `checkObjectTypeForDuplicateDeclarations` | `node_modules/typescript/lib/typescript.js:81951:51` |
| 32.8% | 1.1ms |       1 | `checkUnusedLocalsAndParameters`          | `node_modules/typescript/lib/typescript.js:83592:42` |
| 30.6% | 1.0ms |       1 | `visit`                                   | `node_modules/typescript/lib/typescript.js:52216:19` |

##### `trimStart` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 2.8ms |       2 | `appendIfCommentDirective` | `node_modules/typescript/lib/typescript.js:13330:36` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location                                              |
| ----: | ----: | ------: | --------------------------------------- | ----------------------------------------------------- |
| 50.8% | 1.4ms |       1 | `getDiagnosticsWithPrecedingDirectives` | `node_modules/typescript/lib/typescript.js:123417:49` |
| 49.2% | 1.4ms |       1 | `discriminateTypeByDiscriminableItems`  | `node_modules/typescript/lib/typescript.js:68568:48`  |

##### `realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Caller     | Location                                            |
| -----: | ----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% | 2.8ms |       2 | `realpath` | `node_modules/typescript/lib/typescript.js:8852:22` |

##### `resolve` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 53.9% | 1.5ms |       1 | `(anonymous)`           | `<unknown>` |
| 46.1% | 1.2ms |       1 | `loadAndEvaluateModule` | `<unknown>` |

##### `replace` (`<unknown>`)

|     % |  Time | Samples | Caller                 | Location                                             |
| ----: | ----: | ------: | ---------------------- | ---------------------------------------------------- |
| 56.6% | 1.5ms |       1 | `formatStringFromArgs` | `node_modules/typescript/lib/typescript.js:20447:30` |
| 43.4% | 1.1ms |       1 | `escapeString`         | `node_modules/typescript/lib/typescript.js:18903:22` |

##### `next` (`<unknown>`)

|      % |  Time | Samples | Caller      | Location                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `arrayFrom` | `node_modules/typescript/lib/typescript.js:3174:19` |

##### `indexOf` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location                                             |
| -----: | ----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `getContextualTypeForArgument` | `node_modules/typescript/lib/typescript.js:73758:40` |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                            |
| -----: | ----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 2.5ms |       2 | `normalizePath` | `node_modules/typescript/lib/typescript.js:9135:23` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                             |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 2.4ms |       2 | `addWorkItem` | `node_modules/typescript/lib/typescript.js:31286:23` |

##### `substring` (`<unknown>`)

|     % |  Time | Samples | Caller       | Location                                             |
| ----: | ----: | ------: | ------------ | ---------------------------------------------------- |
| 54.7% | 1.3ms |       1 | `scanString` | `node_modules/typescript/lib/typescript.js:12396:22` |
| 45.3% | 1.1ms |       1 | `scanNumber` | `node_modules/typescript/lib/typescript.js:12234:22` |

##### `add` (`<unknown>`)

|     % |  Time | Samples | Caller               | Location                                             |
| ----: | ----: | ------: | -------------------- | ---------------------------------------------------- |
| 50.1% | 1.1ms |       1 | `createMarkerType`   | `node_modules/typescript/lib/typescript.js:68666:28` |
| 49.9% | 1.1ms |       1 | `requestSatisfyUtil` | `<unknown>`                                          |

##### `readdirSync` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.5ms |       1 | `readdirSync` | `<unknown>` |

##### `writer` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                     |
| -----: | ----: | ------: | ------------- | ---------------------------- |
| 100.0% | 1.5ms |       1 | `WriteStream` | `internal:fs/streams:196:21` |

##### `includes` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                            |
| -----: | ----: | ------: | -------------- | --------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `hasExtension` | `node_modules/typescript/lib/typescript.js:8940:22` |

##### `/^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                             |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `getDirectiveFromComment` | `node_modules/typescript/lib/typescript.js:13343:35` |

##### `createRequire` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 1.3ms |       1 | `typeCheckProject` | `tsc-workload.mjs:3:33` |

##### `max` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 1.1ms |       1 | `compareSignaturesRelated` | `node_modules/typescript/lib/typescript.js:65804:36` |

##### `stream` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 99.7% | 5.52s |   4,129 | `(anonymous)`                              | `<unknown>`                                           |
| 99.4% | 5.50s |   4,112 | `loadAndEvaluateModule`                    | `<unknown>`                                           |
| 99.2% | 5.49s |   4,110 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 99.2% | 5.49s |   4,110 | `evaluate`                                 | `<unknown>`                                           |
| 99.2% | 5.49s |   4,110 | `moduleEvaluation`                         | `<unknown>`                                           |
| 99.2% | 5.49s |   4,109 | `processTicksAndRejections`                | `<unknown>`                                           |
| 88.7% | 4.91s |   3,657 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17`   |
| 77.9% | 4.31s |   3,286 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 77.9% | 4.31s |   3,286 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17`   |
| 77.9% | 4.31s |   3,286 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32` |
| 77.9% | 4.31s |   3,285 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41` |
| 77.9% | 4.31s |   3,285 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34` |
| 77.9% | 4.31s |   3,284 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 77.9% | 4.31s |   3,284 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36` |
| 77.9% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |
| 77.9% | 4.31s |   3,284 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34` |
| 77.9% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45` |
| 73.0% | 4.04s |   3,074 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:87343:32`  |
| 73.0% | 4.04s |   3,074 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27`  |
| 73.0% | 4.04s |   3,072 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 88.7% | 4.91s |   3,657 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2365:17`   |
| 77.9% | 4.31s |   3,286 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123317:76` |
| 77.9% | 4.31s |   3,286 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2612:17`   |
| 77.9% | 4.31s |   3,286 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:123313:32` |
| 77.9% | 4.31s |   3,285 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:123375:41` |
| 77.9% | 4.31s |   3,285 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123327:34` |
| 77.9% | 4.31s |   3,284 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:123385:37` |
| 77.9% | 4.31s |   3,284 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:123365:36` |
| 77.9% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |
| 77.9% | 4.31s |   3,284 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:123670:34` |
| 77.9% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:123381:45` |
| 73.0% | 4.04s |   3,074 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:87343:32`  |
| 73.0% | 4.04s |   3,074 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:87322:27`  |
| 73.0% | 4.04s |   3,072 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:87270:33`  |
| 73.0% | 4.04s |   3,072 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:87239:27`  |
| 73.0% | 4.04s |   3,072 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:87336:47`  |
| 72.0% | 3.98s |   3,031 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:86895:36`  |
| 72.0% | 3.98s |   3,031 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:86886:30`  |
| 54.8% | 3.03s |   2,301 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:83716:22`  |
| 54.0% | 2.99s |   2,279 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:81476:27`  |

##### Native

|     % |    Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.4% |   5.50s |   4,112 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| 99.2% |   5.49s |   4,110 | `evaluate`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| 99.2% |   5.49s |   4,110 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| 99.2% |   5.49s |   4,109 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  5.6% | 308.2ms |     241 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  5.3% | 295.8ms |     231 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|  5.3% | 295.8ms |     231 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  1.2% |  67.6ms |      51 | `generatorResume`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.6% |  32.0ms |      26 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.6% |  31.4ms |      21 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.4% |  22.9ms |      17 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.3% |  15.8ms |      13 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.2% |  11.0ms |       8 | `requestSatisfyUtil`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.2% |   9.9ms |       7 | `fetch`                                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
|  0.2% |   9.9ms |       7 | `requestFetch`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.2% |   9.9ms |       7 | `requestInstantiate`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
|  0.1% |   7.9ms |       6 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |   7.6ms |       6 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |   3.6ms |       3 | `SymbolLinks`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |   2.8ms |       2 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function          | Location                   |
| ----: | -----: | ------: | ----------------- | -------------------------- |
| 41.1% |  2.27s |   1,734 | `forEach`         | `<unknown>`                |
|  0.6% | 32.8ms |      25 | `next`            | `<unknown>`                |
|  0.3% | 17.8ms |      13 | `slice`           | `<unknown>`                |
|  0.3% | 14.3ms |      11 | `join`            | `<unknown>`                |
|  0.2% | 12.2ms |      10 | `test`            | `<unknown>`                |
|  0.2% | 11.6ms |       7 | `toString`        | `<unknown>`                |
|  0.2% | 10.5ms |       8 | `get`             | `<unknown>`                |
|  0.2% |  9.5ms |       7 | `some`            | `<unknown>`                |
|  0.1% |  6.4ms |       5 | `set`             | `<unknown>`                |
|  0.1% |  6.4ms |       5 | `find`            | `<unknown>`                |
|  0.1% |  5.2ms |       4 | `map`             | `<unknown>`                |
|  0.1% |  4.5ms |       4 | `lastIndexOf`     | `<unknown>`                |
|  0.1% |  3.9ms |       3 | `filter`          | `<unknown>`                |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `internal:stream:1:11`     |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `node:stream:1:11`         |
|  0.1% |  3.7ms |       3 | `(anonymous)`     | `internal:fs/streams:1:11` |
|  0.1% |  3.7ms |       3 | `get WriteStream` | `node:fs:587:18`           |
|  0.1% |  3.7ms |       3 | `sort`            | `<unknown>`                |
|  0.1% |  3.6ms |       3 | `trimEnd`         | `<unknown>`                |
|  0.1% |  3.5ms |       3 | `(anonymous)`     | `node:fs:1:11`             |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location    |
| ----: | -----: | ------: | ----------------------- | ----------- |
| 99.5% |  5.49s |   4,108 | `loadAndEvaluateModule` | `<unknown>` |
|  0.3% | 15.8ms |      13 | `parseModule`           | `<unknown>` |
|  0.2% |  9.9ms |       7 | `requestFetch`          | `<unknown>` |
|  0.2% |  9.9ms |       7 | `(anonymous)`           | `<unknown>` |
|  0.2% |  8.6ms |       7 | `anonymous`             | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 99.8% | 5.49s |   4,108 | `moduleEvaluation`      | `<unknown>` |
|  0.2% | 8.8ms |       4 | `loadAndEvaluateModule` | `<unknown>` |
| <0.1% | 2.6ms |       2 | `loadModule`            | `<unknown>` |
| <0.1% | 1.2ms |       1 | `resolve`               | `<unknown>` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 78.5% |   4.31s |   3,285 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:123327:34` |
| 15.3% | 841.3ms |     558 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:122262:23` |
|  5.4% | 295.8ms |     231 | `bound require`                    | `<unknown>`                                           |
|  0.8% |  43.4ms |      35 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:40536:42`  |
| <0.1% |   1.3ms |       1 | `createRequire`                    | `<unknown>`                                           |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.49s |   4,110 | `evaluate`         | `<unknown>` |
| 100.0% | 5.49s |   4,110 | `moduleEvaluation` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                          |
| -----: | ----: | ------: | ------------- | --------------------------------- |
| 100.0% | 5.49s |   4,108 | `(anonymous)` | `<unknown>`                       |
|  <0.1% | 1.4ms |       1 | `onConstruct` | `internal:streams/destroy:128:23` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:2365:17`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 81.2% |   3.98s |   3,031 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:86886:30`  |
| 10.6% | 522.2ms |     318 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:122449:24` |
|  4.6% | 228.0ms |      95 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124200:35` |
|  4.5% | 218.9ms |     171 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:45224:21`  |
|  3.5% | 172.6ms |     136 | `bind`               | `node_modules/typescript/lib/typescript.js:46600:16`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123317:76`)

|      % |  Time | Samples | Callee                          | Location                                              |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,285 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123375:41` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:2612:17`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,286 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123317:76` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:123313:32`)

|      % |  Time | Samples | Callee    | Location                                            |
| -----: | ----: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 4.31s |   3,286 | `flatMap` | `node_modules/typescript/lib/typescript.js:2612:17` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:123375:41`)

|      % |  Time | Samples | Callee                              | Location                                              |
| -----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:123381:45` |
|  <0.1% | 1.4ms |       1 | `getProgramDiagnostics`             | `node_modules/typescript/lib/typescript.js:123337:33` |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:123327:34`)

|      % |  Time | Samples | Callee                 | Location                                              |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,285 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:123313:32` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:123385:37`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 93.7% |   4.04s |   3,074 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:87322:27`  |
|  6.2% | 267.7ms |     208 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:123266:26` |
|  0.1% |   2.8ms |       2 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:123405:44` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:123365:36`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,284 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:123385:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:123384:52`)

|      % |  Time | Samples | Callee                     | Location                                              |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,284 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:123365:36` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:123670:34`)

|      % |  Time | Samples | Callee                                     | Location                                              |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,284 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:123384:52` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:123381:45`)

|      % |  Time | Samples | Callee                   | Location                                              |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.31s |   3,284 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:123670:34` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:87343:32`)

|     % |  Time | Samples | Callee                                | Location                                             |
| ----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 99.9% | 4.04s |   3,072 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:87336:47` |
|  0.1% | 2.6ms |       2 | `getDiagnostics2`                     | `node_modules/typescript/lib/typescript.js:18843:27` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:87322:27`)

|      % |  Time | Samples | Callee                 | Location                                             |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 4.04s |   3,074 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:87343:32` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:87270:33`)

|     % |  Time | Samples | Callee                       | Location                                             |
| ----: | ----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 55.6% | 2.24s |   1,711 | `checkDeferredNodes`         | `node_modules/typescript/lib/typescript.js:87179:30` |
| 44.1% | 1.78s |   1,353 | `forEach`                    | `node_modules/typescript/lib/typescript.js:2365:17`  |
|  0.2% | 7.0ms |       6 | `addLazyDiagnostic`          | `node_modules/typescript/lib/typescript.js:87339:25` |
| <0.1% | 1.2ms |       1 | `clear`                      | `node_modules/typescript/lib/typescript.js:2564:15`  |
| <0.1% | 1.1ms |       1 | `checkExternalModuleExports` | `node_modules/typescript/lib/typescript.js:86845:38` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:87239:27`)

|      % |  Time | Samples | Callee                  | Location                                             |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 4.04s |   3,072 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:87270:33` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:87336:47`)

|      % |  Time | Samples | Callee            | Location                                             |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 4.04s |   3,072 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:87239:27` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:86895:36`)

|     % |    Time | Samples | Callee                     | Location                                             |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 76.1% |   3.03s |   2,301 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:83716:22` |
| 41.6% |   1.65s |   1,264 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:84101:36` |
| 41.4% |   1.65s |   1,260 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:84119:34` |
| 25.0% | 999.0ms |     763 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js:84124:36` |
| 21.1% | 842.7ms |     646 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:82223:34` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:86886:30`)

|      % |  Time | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 3.98s |   3,031 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:86895:36` |

##### `checkBlock` (`node_modules/typescript/lib/typescript.js:83716:22`)

|      % |  Time | Samples | Callee    | Location                                            |
| -----: | ----: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 3.03s |   2,301 | `forEach` | `node_modules/typescript/lib/typescript.js:2365:17` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:81476:27`)

|     % |   Time | Samples | Callee                                          | Location                                             |
| ----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 99.9% |  2.98s |   2,276 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js:81516:33` |
|  1.2% | 35.6ms |      28 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js:81266:57` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 98.6% |  2.24s |   1,709 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:87186:29` |
|  1.3% | 30.1ms |      23 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:52487:21` |
|  0.4% |  9.0ms |       7 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:52182:20` |
|  0.2% |  3.6ms |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:50184:20` |
|  0.1% |  2.8ms |       2 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:52218:32` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                         |
| ----: | -----: | ------: | ------------- | ------------------------------------------------ |
| 11.7% | 35.9ms |      28 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:10` |
|  1.2% |  3.7ms |       3 | `(anonymous)` | `internal:stream:1:11`                           |
|  1.2% |  3.7ms |       3 | `(anonymous)` | `node:stream:1:11`                               |
|  1.2% |  3.7ms |       3 | `(anonymous)` | `internal:fs/streams:1:11`                       |
|  1.1% |  3.5ms |       3 | `(anonymous)` | `node:fs:1:11`                                   |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 295.8ms |     231 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 295.8ms |     231 | `require`   | `<unknown>` |
|   0.8% |   2.3ms |       2 | `anonymous` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

|      % |   Time | Samples | Callee                   | Location                                              |
| -----: | -----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 67.6ms |      51 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:69709:108` |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 92.3% | 30.3ms |      23 | `generatorResume` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 68.6% | 21.6ms |      14 | `readFileSync` | `<unknown>` |

##### `statSync` (`<unknown>`)

|     % |  Time | Samples | Callee     | Location    |
| ----: | ----: | ------: | ---------- | ----------- |
| 11.1% | 2.5ms |       2 | `statSync` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 93.6% | 14.8ms |      12 | `(anonymous)` | `<unknown>` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.6% | 10.8ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `requestSatisfyUtil` (`<unknown>`)

|     % |  Time | Samples | Callee               | Location    |
| ----: | ----: | ------: | -------------------- | ----------- |
| 89.8% | 9.9ms |       7 | `requestInstantiate` | `<unknown>` |
| 10.2% | 1.1ms |       1 | `add`                | `<unknown>` |

##### `requestFetch` (`<unknown>`)

|      % |  Time | Samples | Callee  | Location    |
| -----: | ----: | ------: | ------- | ----------- |
| 100.0% | 9.9ms |       7 | `fetch` | `<unknown>` |

##### `requestInstantiate` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 9.9ms |       7 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                             |
| ----: | ----: | ------: | ------------------------------------ | ---------------------------------------------------- |
| 71.3% | 6.8ms |       5 | `isGenericFunctionReturningFunction` | `node_modules/typescript/lib/typescript.js:77766:46` |
| 15.7% | 1.5ms |       1 | `(anonymous)`                        | `node_modules/typescript/lib/typescript.js:46261:43` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                            |
| ----: | ----: | ------: | ------------- | --------------------------------------------------- |
| 40.0% | 2.5ms |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:50801:7` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                             |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 52.3% | 2.7ms |       2 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:40787:32` |
| 24.1% | 1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21182:95` |
| 23.6% | 1.2ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:21093:32` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                             |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 27.2% | 1.1ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:40182:69` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:fs/streams:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `get WriteStream` (`node:fs:587:18`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.7ms |       3 | `anonymous` | `<unknown>` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                            |
| -----: | ----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% | 3.7ms |       3 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:3010:16` |

##### `(anonymous)` (`node:fs:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 3.5ms |       3 | `anonymous` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.7% | 259.9ms |     203 | `anonymous` ← `require` ← `bound require` ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.9% | 105.5ms |       4 | `withJSDoc` (`node_modules/typescript/lib/typescript.js:31691:21`) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseModuleBlock` (36734:28) ← `parseAmbientExternalModuleDeclaration` (36759:49) ← `parseModuleDeclaration` (36778:34) ← `parseDeclarationWorker` (36069:34) ← `(anonymous)` (36056:56) ← `doInsideOfContext` (31856:29) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.7% |  39.5ms |      24 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |  39.0ms |      23 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections` |
| 0.5% |  28.8ms |      23 | `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `getTypeOfExpression` (81411:31) ← `isEvolvingArrayOperationTarget` (71351:42) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkIndexedAccess` (76439:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.5% |  26.6ms |      17 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkNonNullExpression` (75707:34) ← `checkPropertyAccessExpression` (75786:41) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                       |
| 0.5% |  26.0ms |      19 | `createTypeChecker` (`node_modules/typescript/lib/typescript.js:48842:27`) ← `getTypeChecker` (123266:26) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.4% |  22.9ms |      18 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `isTypeIdenticalTo` (65203:29) ← `isTypeOrBaseIdenticalTo` (70496:35) ← `inferFromMatchingTypes` (70119:36) ← `inferFromTypes` (69901:28) ← `inferFromContravariantTypes` (70146:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (70151:62) ← `applyToParameterTypes` (69472:33) ← `inferFromSignature` (70456:32) ← `inferFromSignatures` (70444:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferFromProperties` (70432:33) ← `inferFromObjectTypes` (70332:34) ← `invokeOnce` (70091:24) ← `inferFromTypes` (69901:28) ← `inferTypes` (69892:22) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkPropertyAssignment` (81252:35) ← `checkObjectLiteral` (74814:30) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionCached` (81145:33) ← `checkDeclarationInitializer` (81169:39) ← `getTypeForVariableLikeDeclaration` (57490:45) ← `getWidenedTypeForVariableLikeDeclaration` (58009:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (58099:56) ← `getTypeOfVariableOrParameterOrProperty` (58088:50) ← `getTypeOfSymbol` (58408:27) ← `checkVariableLikeDeclaration` (83907:40) ← `checkVariableDeclaration` (84101:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkVariableDeclarationList` (84112:40) ← `checkVariableStatement` (84119:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.4% |  22.2ms |       6 | `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:67277:43`) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkMappedType` (82354:27) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkUnionOrIntersectionType` (82318:40) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkModuleDeclaration` (86242:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.4% |  21.2ms |      17 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`node_modules/typescript/lib/typescript.js:21208:60`) ← `findIndex` (2471:19) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `matchFiles` (21178:20) ← `readDirectory` (8815:27) ← `getFileNamesFromConfigSpecs` (41698:37) ← `getFileNames` (41264:24) ← `parseJsonConfigFileContentWorker` (41170:42) ← `parseJsonSourceFileConfigFileContent` (41139:46) ← `getParsedCommandLineOfConfigFile` (40536:42) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.3% |  18.8ms |      14 | `(anonymous)` (`node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require` ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  13.8ms |      10 | `getAliasId` (`node_modules/typescript/lib/typescript.js:61521:22`) ← `getIntersectionType` (63112:31) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getMappedType` (64652:25) ← `(anonymous)` (64807:49) ← `map` (2567:13) ← `getObjectTypeInstantiation` (64785:38) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `instantiateList` (64623:27) ← `instantiateTypes` (64640:28) ← `instantiateTypeWorker` (65023:33) ← `instantiateTypeWithAlias` (65006:36) ← `instantiateType` (64996:27) ← `getReturnTypeOfSignature` (61207:36) ← `compareSignaturesRelated` (65804:36) ← `signatureRelatedTo` (68375:32) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  10.8ms |       9 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `(anonymous)` (`node_modules/typescript/lib/typescript.js:21208:60`) ← `findIndex` (2471:19) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `visitDirectory` (21192:26) ← `matchFiles` (21178:20) ← `readDirectory` (8815:27) ← `getFileNamesFromConfigSpecs` (41698:37) ← `getFileNames` (41264:24) ← `parseJsonConfigFileContentWorker` (41170:42) ← `parseJsonSourceFileConfigFileContent` (41139:46) ← `getParsedCommandLineOfConfigFile` (40536:42) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.2% |  10.8ms |       3 | `getFlowTypeOfReference` (`node_modules/typescript/lib/typescript.js:71634:34`) ← `checkIdentifier` (72959:27) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `maybeCheckExpression` (80565:34) ← `onLeft` (80503:20) ← `left` (30385:16) ← `trampoline` (30489:22) ← `(anonymous)` (80462:12) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkTruthinessExpression` (84254:37) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkIfStatement` (84128:28) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkFunctionDeclarationDiagnostics` (83285:49) ← `addLazyDiagnostic` (87339:25) ← `checkFunctionDeclaration` (83283:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  10.7ms |       8 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:66185:30`) ← `isTypeRelatedTo` (66101:27) ← `checkTypeRelatedToAndOptionallyElaborate` (65249:52) ← `getSignatureApplicabilityError` (76912:42) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkAssertionWorker` (78581:32) ← `checkAssertion` (78541:26) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionForMutableLocation` (81239:45) ← `checkArrayLiteral` (74651:29) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionWithContextualType` (81122:45) ← `inferTypeArguments` (76656:30) ← `chooseOverload` (77470:28) ← `resolveCall` (77299:23) ← `resolveCallExpression` (77689:33) ← `resolveSignature` (78155:28) ← `getResolvedSignature` (78173:32) ← `checkCallExpression` (78289:31) ← `checkExpressionWorker` (81516:33) ← `checkExpression` (81476:27) ← `checkExpressionStatement` (84124:36) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkTryStatement` (85102:29) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |   9.3ms |       7 | `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:37231:37`) ← `(anonymous)` (37204:63) ← `doInsideOfContext` (31856:29) ← `parseJSDocComment` (37200:31) ← `(anonymous)` (31696:71) ← `mapDefined` (2683:20) ← `withJSDoc` (31691:21) ← `parsePropertyOrMethodSignature` (33493:42) ← `parseTypeMember` (33536:27) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseObjectTypeMembers` (33580:34) ← `parseInterfaceDeclaration` (36692:37) ← `parseDeclarationWorker` (36069:34) ← `parseDeclaration` (36040:28) ← `parseStatement` (35924:26) ← `parseListElement` (32639:28) ← `parseList` (32618:21) ← `parseSourceFileWorker` (31659:33) ← `parseSourceFile` (31471:27) ← `createSourceFile` (31293:26) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122498:30) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.2% |   9.3ms |       7 | `slice` ← `addRange` (`node_modules/typescript/lib/typescript.js:2979:18`) ← `createUnionOrIntersectionProperty` (60498:45) ← `getUnionOrIntersectionProperty` (60637:42) ← `isDiscriminantProperty` (70800:34) ← `findDiscriminantProperties` (70812:38) ← `findMatchingDiscriminantType` (90511:40) ← `getBestMatchingType` (68565:31) ← `typeRelatedToSomeType` (66827:35) ← `unionOrIntersectionRelatedTo` (66757:42) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkSignatureDeclaration` (81792:37) ← `checkFunctionOrMethodDeclaration` (83398:44) ← `checkMethodDeclaration` (82023:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkClassDeclaration` (85417:33) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |   8.8ms |       7 | `instantiateSignature` (`node_modules/typescript/lib/typescript.js:64733:32`) ← `instantiateList` (64623:27) ← `instantiateSignatures` (64643:33) ← `resolveAnonymousTypeMembers` (59723:39) ← `resolveStructuredTypeMembers` (60090:40) ← `getSignaturesOfStructuredType` (60782:41) ← `getSignaturesOfType` (60789:31) ← `signaturesRelatedTo` (68245:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `isPropertySymbolTypeRelated` (67951:41) ← `propertyRelatedTo` (67970:31) ← `propertiesRelatedTo` (68073:33) ← `structuredTypeRelatedToWorker` (67277:43) ← `structuredTypeRelatedTo` (67207:37) ← `recursiveTypeRelatedTo` (67063:36) ← `isRelatedTo` (66493:25) ← `checkTypeRelatedTo` (66185:30) ← `checkTypeAssignableTo` (65233:33) ← `checkTypeArgumentConstraints` (82186:40) ← `(anonymous)` (82238:27) ← `addLazyDiagnostic` (87339:25) ← `checkTypeReferenceOrImport` (82234:38) ← `checkTypeReferenceNode` (82223:34) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkTypeAliasDeclaration` (85990:37) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `forEach` (2365:17) ← `checkBlock` (83716:22) ← `checkSourceElementWorker` (86895:36) ← `checkSourceElement` (86886:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (79840:64) ← `checkDeferredNode` (87186:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:87179:30`) ← `checkSourceFileWorker` (87270:33) ← `checkSourceFile` (87239:27) ← `checkSourceFileWithEagerDiagnostics` (87336:47) ← `getDiagnosticsWorker` (87343:32) ← `getDiagnostics2` (87322:27) ← `(anonymous)` (123385:37) ← `runWithCancellationToken` (123365:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (123384:52) ← `getAndCacheDiagnostics` (123670:34) ← `getBindAndCheckDiagnosticsForFile` (123381:45) ← `getSemanticDiagnosticsForFile` (123375:41) ← `(anonymous)` (123317:76) ← `flatMap` (2612:17) ← `getDiagnosticsHelper` (123313:32) ← `getSemanticDiagnostics` (123327:34) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2% |   8.4ms |       6 | `fetch` ← `requestFetch` ← `(anonymous)` ← `(anonymous)` ← `requestInstantiate` ← `requestSatisfyUtil` ← `(anonymous)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.1% |   7.9ms |       4 | `readFileSync` ← `readFileSync` ← `readFileWorker` (`node_modules/typescript/lib/typescript.js:8722:28`) ← `readFile` (8747:22) ← `readFile` (121562:15) ← `(anonymous)` (121549:40) ← `(anonymous)` (121493:10) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `(anonymous)` (124200:35) ← `forEach` (2365:17) ← `processReferencedFiles` (124199:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processTypeReferenceDirectiveWorker` (124238:47) ← `processTypeReferenceDirective` (124232:41) ← `processTypeReferenceDirectives` (124212:42) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `processImportedModules` (124378:34) ← `findSourceFileWorker` (123984:32) ← `findSourceFile` (123967:26) ← `(anonymous)` (123923:7) ← `getSourceFileFromReferenceWorker` (123879:44) ← `processSourceFile` (123920:29) ← `processRootFile` (123708:27) ← `(anonymous)` (122449:24) ← `forEach` (2365:17) ← `createProgram` (122262:23) ← `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
