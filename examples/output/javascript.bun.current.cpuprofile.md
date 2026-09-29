# CPU profile

Took 5.65s over 4,196 samples (1.3ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 90.9% |   5.14s |   3,813 |
| Native           |  7.1% | 401.0ms |     308 |
| Standard library |  2.0% | 114.8ms |      75 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                              |
| ---: | ------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 4.7% | 264.9ms |     205 | `anonymous`                     | `<unknown>`                                           |
| 4.1% | 232.0ms |     176 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:67445:30`  |
| 2.7% | 150.6ms |     114 | `getObjectFlags`                | `node_modules/typescript/lib/typescript.js:21225:24`  |
| 2.2% | 125.1ms |      96 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:68323:36`  |
| 2.1% | 116.3ms |      12 | `NodeObject`                    | `node_modules/typescript/lib/typescript.js:148243:14` |
| 1.8% | 100.5ms |      78 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:66040:38`  |
| 1.2% |  68.5ms |      52 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:62753:25`  |
| 1.2% |  66.0ms |      48 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:71184:28`  |
| 1.1% |  64.7ms |      49 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:67753:25`  |
| 1.0% |  59.4ms |      45 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:68537:43`  |
| 0.9% |  49.3ms |      34 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:67408:29`  |
| 0.9% |  48.9ms |      38 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:69989:26`  |
| 0.8% |  48.1ms |      37 | `scan`                          | `node_modules/typescript/lib/typescript.js:12895:16`  |
| 0.8% |  43.0ms |      33 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js:62794:31`  |
| 0.7% |  42.4ms |      33 | `getReducedType`                | `node_modules/typescript/lib/typescript.js:61933:26`  |
| 0.7% |  41.2ms |      31 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:67361:27`  |
| 0.7% |  39.4ms |      31 | `some`                          | `node_modules/typescript/lib/typescript.js:2794:14`   |
| 0.7% |  39.3ms |      31 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:60275:41`  |
| 0.7% |  37.8ms |      29 | `couldContainTypeVariables`     | `node_modules/typescript/lib/typescript.js:70860:37`  |
| 0.7% |  37.1ms |      27 | `readFileSync`                  | `<unknown>`                                           |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                        | Location                                              |
| ---: | ------: | ------: | ------------------------------- | ----------------------------------------------------- |
| 4.1% | 232.0ms |     176 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:67445:30`  |
| 2.7% | 150.6ms |     114 | `getObjectFlags`                | `node_modules/typescript/lib/typescript.js:21225:24`  |
| 2.2% | 125.1ms |      96 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:68323:36`  |
| 2.1% | 116.3ms |      12 | `NodeObject`                    | `node_modules/typescript/lib/typescript.js:148243:14` |
| 1.8% | 100.5ms |      78 | `getObjectTypeInstantiation`    | `node_modules/typescript/lib/typescript.js:66040:38`  |
| 1.2% |  68.5ms |      52 | `getTypeListId`                 | `node_modules/typescript/lib/typescript.js:62753:25`  |
| 1.2% |  66.0ms |      48 | `inferFromTypes`                | `node_modules/typescript/lib/typescript.js:71184:28`  |
| 1.1% |  64.7ms |      49 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:67753:25`  |
| 1.0% |  59.4ms |      45 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:68537:43`  |
| 0.9% |  49.3ms |      34 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:67408:29`  |
| 0.9% |  48.9ms |      38 | `getRelationKey`                | `node_modules/typescript/lib/typescript.js:69989:26`  |
| 0.8% |  48.1ms |      37 | `scan`                          | `node_modules/typescript/lib/typescript.js:12895:16`  |
| 0.8% |  43.0ms |      33 | `createTypeReference`           | `node_modules/typescript/lib/typescript.js:62794:31`  |
| 0.7% |  42.4ms |      33 | `getReducedType`                | `node_modules/typescript/lib/typescript.js:61933:26`  |
| 0.7% |  41.2ms |      31 | `isTypeRelatedTo`               | `node_modules/typescript/lib/typescript.js:67361:27`  |
| 0.7% |  39.4ms |      31 | `some`                          | `node_modules/typescript/lib/typescript.js:2794:14`   |
| 0.7% |  39.3ms |      31 | `createInstantiatedSymbolTable` | `node_modules/typescript/lib/typescript.js:60275:41`  |
| 0.7% |  37.8ms |      29 | `couldContainTypeVariables`     | `node_modules/typescript/lib/typescript.js:70860:37`  |
| 0.6% |  35.1ms |      26 | `resolveNameHelper`             | `node_modules/typescript/lib/typescript.js:23186:29`  |
| 0.6% |  35.1ms |      27 | `getReducedApparentType`        | `node_modules/typescript/lib/typescript.js:61750:34`  |

##### Native

|     % |    Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  4.7% | 264.9ms |     205 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  0.7% |  37.1ms |      27 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.5% |  30.4ms |      23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.5% |  27.0ms |      21 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.2% |  11.8ms |       9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |   7.2ms |       6 | `SymbolLinks`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |   6.3ms |       5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |   4.1ms |       3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
|  0.1% |   3.8ms |       3 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |   2.7ms |       1 | `/^\.\.?($\|[\\/])/`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |   2.3ms |       2 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
| <0.1% |   1.2ms |       1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |
| <0.1% |   1.1ms |       1 | `generatorResume`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
| <0.1% |   1.1ms |       1 | `/^\/\/\/?\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                     | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function      | Location           |
| ----: | -----: | ------: | ------------- | ------------------ |
|  0.5% | 30.3ms |      10 | `set`         | `<unknown>`        |
|  0.2% | 12.2ms |       9 | `get`         | `<unknown>`        |
|  0.2% | 11.0ms |       9 | `forEach`     | `<unknown>`        |
|  0.2% |  8.6ms |       6 | `toString`    | `<unknown>`        |
|  0.1% |  7.7ms |       6 | `next`        | `<unknown>`        |
|  0.1% |  6.1ms |       5 | `slice`       | `<unknown>`        |
|  0.1% |  5.5ms |       4 | `unshift`     | `<unknown>`        |
|  0.1% |  4.9ms |       4 | `join`        | `<unknown>`        |
|  0.1% |  3.8ms |       3 | `filter`      | `<unknown>`        |
|  0.1% |  3.4ms |       3 | `map`         | `<unknown>`        |
| <0.1% |  2.6ms |       2 | `has`         | `<unknown>`        |
| <0.1% |  2.4ms |       1 | `Set`         | `<unknown>`        |
| <0.1% |  2.3ms |       2 | `push`        | `<unknown>`        |
| <0.1% |  2.2ms |       2 | `some`        | `<unknown>`        |
| <0.1% |  1.5ms |       1 | `startsWith`  | `<unknown>`        |
| <0.1% |  1.4ms |       1 | `(anonymous)` | `node:crypto:1:11` |
| <0.1% |  1.4ms |       1 | `values`      | `<unknown>`        |
| <0.1% |  1.4ms |       1 | `test`        | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `Map`         | `<unknown>`        |
| <0.1% |  1.3ms |       1 | `lastIndexOf` | `<unknown>`        |

#### Lines

Lines ranked by contribution to each function's self time.

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`)

|     % |    Time | Samples | Location                                          |
| ----: | ------: | ------: | ------------------------------------------------- |
| 61.1% | 141.8ms |     107 | `node_modules/typescript/lib/typescript.js:67453` |
| 36.6% |  85.0ms |      65 | `node_modules/typescript/lib/typescript.js:67464` |
|  1.7% |   3.9ms |       3 | `node_modules/typescript/lib/typescript.js:67494` |

##### `getObjectFlags` (`node_modules/typescript/lib/typescript.js:21225:24`)

|      % |    Time | Samples | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 150.6ms |     114 | `node_modules/typescript/lib/typescript.js:21226` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:68323:36`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 67.8% | 84.9ms |      66 | `node_modules/typescript/lib/typescript.js:68336` |
| 10.0% | 12.5ms |       9 | `node_modules/typescript/lib/typescript.js:68383` |
|  4.0% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:68448` |
|  2.9% |  3.6ms |       3 | `node_modules/typescript/lib/typescript.js:68395` |
|  2.5% |  3.2ms |       2 | `node_modules/typescript/lib/typescript.js:68357` |

##### `NodeObject` (`node_modules/typescript/lib/typescript.js:148243:14`)

|      % |    Time | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 116.3ms |      12 | `node_modules/typescript/lib/typescript.js:148244` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:66040:38`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 36.2% | 36.4ms |      28 | `node_modules/typescript/lib/typescript.js:66070` |
| 18.6% | 18.7ms |      15 | `node_modules/typescript/lib/typescript.js:66042` |
| 16.7% | 16.8ms |      13 | `node_modules/typescript/lib/typescript.js:66079` |
| 10.1% | 10.1ms |       8 | `node_modules/typescript/lib/typescript.js:66065` |
|  5.5% |  5.5ms |       4 | `node_modules/typescript/lib/typescript.js:66081` |

##### `getTypeListId` (`node_modules/typescript/lib/typescript.js:62753:25`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 38.5% | 26.4ms |      20 | `node_modules/typescript/lib/typescript.js:62767` |
| 30.5% | 20.9ms |      16 | `node_modules/typescript/lib/typescript.js:62764` |
| 13.3% |  9.1ms |       7 | `node_modules/typescript/lib/typescript.js:62756` |
| 11.5% |  7.9ms |       6 | `node_modules/typescript/lib/typescript.js:62769` |
|  2.1% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:62755` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:71184:28`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 25.8% | 17.0ms |      13 | `node_modules/typescript/lib/typescript.js:71185` |
| 15.4% | 10.2ms |       8 | `node_modules/typescript/lib/typescript.js:71351` |
| 14.6% |  9.6ms |       6 | `node_modules/typescript/lib/typescript.js:71315` |
|  8.6% |  5.7ms |       3 | `node_modules/typescript/lib/typescript.js:71206` |
|  7.6% |  5.0ms |       4 | `node_modules/typescript/lib/typescript.js:71205` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 20.4% | 13.2ms |      10 | `node_modules/typescript/lib/typescript.js:67783` |
| 15.8% | 10.3ms |       8 | `node_modules/typescript/lib/typescript.js:67770` |
| 13.0% |  8.4ms |       6 | `node_modules/typescript/lib/typescript.js:67808` |
| 12.3% |  8.0ms |       6 | `node_modules/typescript/lib/typescript.js:67848` |
|  8.2% |  5.3ms |       4 | `node_modules/typescript/lib/typescript.js:67765` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:68537:43`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 22.9% | 13.6ms |      10 | `node_modules/typescript/lib/typescript.js:68540` |
| 11.0% |  6.6ms |       5 | `node_modules/typescript/lib/typescript.js:69028` |
| 10.7% |  6.4ms |       5 | `node_modules/typescript/lib/typescript.js:68773` |
|  9.5% |  5.6ms |       4 | `node_modules/typescript/lib/typescript.js:68545` |
|  7.0% |  4.2ms |       3 | `node_modules/typescript/lib/typescript.js:68980` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:67408:29`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 94.8% | 46.8ms |      32 | `node_modules/typescript/lib/typescript.js:67410` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:69989:26`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 77.1% | 37.7ms |      29 | `node_modules/typescript/lib/typescript.js:69996` |
|  9.6% |  4.7ms |       4 | `node_modules/typescript/lib/typescript.js:69990` |
|  8.3% |  4.1ms |       3 | `node_modules/typescript/lib/typescript.js:69995` |

##### `scan` (`node_modules/typescript/lib/typescript.js:12895:16`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 62.0% | 29.8ms |      23 | `node_modules/typescript/lib/typescript.js:12904` |
| 22.3% | 10.7ms |       8 | `node_modules/typescript/lib/typescript.js:13084` |
|  7.3% |  3.5ms |       3 | `node_modules/typescript/lib/typescript.js:13336` |
|  3.1% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:13054` |
|  2.9% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:13077` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 67.1% | 28.8ms |      22 | `node_modules/typescript/lib/typescript.js:62796` |
| 32.9% | 14.2ms |      11 | `node_modules/typescript/lib/typescript.js:62799` |

##### `getReducedType` (`node_modules/typescript/lib/typescript.js:61933:26`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 51.0% | 21.6ms |      17 | `node_modules/typescript/lib/typescript.js:61935` |
| 24.3% | 10.3ms |       8 | `node_modules/typescript/lib/typescript.js:61934` |
|  9.4% |  4.0ms |       3 | `node_modules/typescript/lib/typescript.js:61937` |
|  5.8% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:61940` |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 60.3% | 24.8ms |      19 | `node_modules/typescript/lib/typescript.js:67395` |
| 16.3% |  6.7ms |       5 | `node_modules/typescript/lib/typescript.js:67382` |
| 13.8% |  5.7ms |       4 | `node_modules/typescript/lib/typescript.js:67375` |
|  9.7% |  4.0ms |       3 | `node_modules/typescript/lib/typescript.js:67372` |

##### `some` (`node_modules/typescript/lib/typescript.js:2794:14`)

|     % |   Time | Samples | Location                                         |
| ----: | -----: | ------: | ------------------------------------------------ |
| 50.1% | 19.7ms |      15 | `node_modules/typescript/lib/typescript.js:2798` |
| 36.2% | 14.3ms |      12 | `node_modules/typescript/lib/typescript.js:2797` |
|  6.6% |  2.6ms |       2 | `node_modules/typescript/lib/typescript.js:2803` |
|  3.4% |  1.3ms |       1 | `node_modules/typescript/lib/typescript.js:2795` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:60275:41`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 92.5% | 36.4ms |      29 | `node_modules/typescript/lib/typescript.js:60278` |
|  3.9% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:60276` |
|  3.6% |  1.4ms |       1 | `node_modules/typescript/lib/typescript.js:60277` |

##### `couldContainTypeVariables` (`node_modules/typescript/lib/typescript.js:70860:37`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 48.5% | 18.3ms |      14 | `node_modules/typescript/lib/typescript.js:70867` |
| 17.3% |  6.5ms |       5 | `node_modules/typescript/lib/typescript.js:70861` |
| 15.6% |  5.9ms |       5 | `node_modules/typescript/lib/typescript.js:70865` |

##### `resolveNameHelper` (`node_modules/typescript/lib/typescript.js:23186:29`)

|     % |   Time | Samples | Location                                          |
| ----: | -----: | ------: | ------------------------------------------------- |
| 46.3% | 16.3ms |      13 | `node_modules/typescript/lib/typescript.js:23230` |
|  7.2% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:23406` |
|  7.2% |  2.5ms |       1 | `node_modules/typescript/lib/typescript.js:23188` |
|  7.0% |  2.5ms |       2 | `node_modules/typescript/lib/typescript.js:23196` |
|  4.3% |  1.5ms |       1 | `node_modules/typescript/lib/typescript.js:23209` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js:61750:34`)

|      % |   Time | Samples | Location                                          |
| -----: | -----: | ------: | ------------------------------------------------- |
| 100.0% | 35.1ms |      27 | `node_modules/typescript/lib/typescript.js:61751` |

##### `forEach` (`<unknown>`)

|      % |   Time | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 11.0ms |       9 | 1        |

##### `next` (`<unknown>`)

|     % |  Time | Samples | Location |
| ----: | ----: | ------: | -------- |
| 83.9% | 6.5ms |       5 | 1        |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 7.2ms |       6 | 1        |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.8ms |       3 | 1        |

##### `map` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 3.4ms |       3 | 1        |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 2.2ms |       2 | 1        |

##### `(anonymous)` (`node:crypto:1:11`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 1.4ms |       1 | `node:crypto:74` |

##### `generatorResume` (`<unknown>`)

|      % |  Time | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 1.1ms |       1 | 1        |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `anonymous` (`<unknown>`)

|     % |    Time | Samples | Caller        | Location                        |
| ----: | ------: | ------: | ------------- | ------------------------------- |
| 97.7% | 258.9ms |     200 | `require`     | `<unknown>`                     |
|  0.9% |   2.5ms |       2 | `(anonymous)` | `<unknown>`                     |
|  0.5% |   1.2ms |       1 | `(anonymous)` | `internal:streams/duplex:1:11`  |
|  0.5% |   1.2ms |       1 | `(anonymous)` | `node:fs:1:11`                  |
|  0.4% |   1.1ms |       1 | `(anonymous)` | `internal:streams/compose:1:11` |

##### `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`)

|     % |    Time | Samples | Caller                  | Location                                             |
| ----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 98.9% | 229.5ms |     174 | `isTypeRelatedTo`       | `node_modules/typescript/lib/typescript.js:67361:27` |
|  1.1% |   2.5ms |       2 | `checkTypeAssignableTo` | `node_modules/typescript/lib/typescript.js:66493:33` |

##### `getObjectFlags` (`node_modules/typescript/lib/typescript.js:21225:24`)

|     % |   Time | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 23.1% | 34.8ms |      25 | `getApparentType`            | `node_modules/typescript/lib/typescript.js:61745:27` |
| 18.5% | 27.8ms |      21 | `couldContainTypeVariables`  | `node_modules/typescript/lib/typescript.js:70860:37` |
| 13.5% | 20.4ms |      16 | `isTupleType`                | `node_modules/typescript/lib/typescript.js:70353:23` |
|  5.7% |  8.6ms |       7 | `getPropagatingFlagsOfTypes` | `node_modules/typescript/lib/typescript.js:62779:38` |
|  5.2% |  7.9ms |       6 | `isGenericMappedType`        | `node_modules/typescript/lib/typescript.js:61325:31` |

##### `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:68323:36`)

|      % |    Time | Samples | Caller        | Location                                             |
| -----: | ------: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 125.1ms |      96 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:67753:25` |

##### `NodeObject` (`node_modules/typescript/lib/typescript.js:148243:14`)

|      % |    Time | Samples | Caller           | Location                                             |
| -----: | ------: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 116.3ms |      12 | `createBaseNode` | `node_modules/typescript/lib/typescript.js:32468:21` |

##### `getObjectTypeInstantiation` (`node_modules/typescript/lib/typescript.js:66040:38`)

|      % |    Time | Samples | Caller                  | Location                                             |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 100.5ms |      78 | `instantiateTypeWorker` | `node_modules/typescript/lib/typescript.js:66283:33` |

##### `getTypeListId` (`node_modules/typescript/lib/typescript.js:62753:25`)

|     % |   Time | Samples | Caller                       | Location                                             |
| ----: | -----: | ------: | ---------------------------- | ---------------------------------------------------- |
| 29.3% | 20.1ms |      15 | `createTypeReference`        | `node_modules/typescript/lib/typescript.js:62794:31` |
| 28.1% | 19.2ms |      15 | `getObjectTypeInstantiation` | `node_modules/typescript/lib/typescript.js:66040:38` |
| 16.6% | 11.4ms |       9 | `getIntersectionType`        | `node_modules/typescript/lib/typescript.js:64367:31` |
| 14.8% | 10.2ms |       7 | `getUnionTypeFromSortedList` | `node_modules/typescript/lib/typescript.js:64203:38` |
|  7.4% |  5.1ms |       4 | `getAliasId`                 | `node_modules/typescript/lib/typescript.js:62776:22` |

##### `inferFromTypes` (`node_modules/typescript/lib/typescript.js:71184:28`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 17.0% | 11.3ms |       9 | `applyToReturnTypes`          | `node_modules/typescript/lib/typescript.js:70758:30` |
| 16.7% | 11.0ms |       8 | `inferFromTypeArguments`      | `node_modules/typescript/lib/typescript.js:71419:36` |
| 16.3% | 10.8ms |       7 | `inferFromProperties`         | `node_modules/typescript/lib/typescript.js:71715:33` |
| 15.8% | 10.4ms |       7 | `inferFromMatchingTypes`      | `node_modules/typescript/lib/typescript.js:71402:36` |
| 12.4% |  8.2ms |       6 | `inferFromContravariantTypes` | `node_modules/typescript/lib/typescript.js:71429:41` |

##### `isRelatedTo` (`node_modules/typescript/lib/typescript.js:67753:25`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 62.3% | 40.3ms |      31 | `checkTypeRelatedTo`            | `node_modules/typescript/lib/typescript.js:67445:30` |
| 15.1% |  9.8ms |       7 | `isRelatedToWorker2`            | `node_modules/typescript/lib/typescript.js:69638:34` |
|  6.5% |  4.2ms |       3 | `isPropertySymbolTypeRelated`   | `node_modules/typescript/lib/typescript.js:69211:41` |
|  4.1% |  2.7ms |       2 | `typeArgumentsRelatedTo`        | `node_modules/typescript/lib/typescript.js:68233:36` |
|  3.9% |  2.5ms |       2 | `structuredTypeRelatedToWorker` | `node_modules/typescript/lib/typescript.js:68537:43` |

##### `structuredTypeRelatedToWorker` (`node_modules/typescript/lib/typescript.js:68537:43`)

|      % |   Time | Samples | Caller                    | Location                                             |
| -----: | -----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 59.4ms |      45 | `structuredTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68467:37` |

##### `getNormalizedType` (`node_modules/typescript/lib/typescript.js:67408:29`)

|      % |   Time | Samples | Caller        | Location                                             |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 49.3ms |      34 | `isRelatedTo` | `node_modules/typescript/lib/typescript.js:67753:25` |

##### `getRelationKey` (`node_modules/typescript/lib/typescript.js:69989:26`)

|     % |   Time | Samples | Caller                   | Location                                             |
| ----: | -----: | ------: | ------------------------ | ---------------------------------------------------- |
| 84.1% | 41.1ms |      32 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68323:36` |
| 15.9% |  7.8ms |       6 | `isTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:67361:27` |

##### `scan` (`node_modules/typescript/lib/typescript.js:12895:16`)

|     % |   Time | Samples | Caller                  | Location                                             |
| ----: | -----: | ------: | ----------------------- | ---------------------------------------------------- |
| 97.5% | 46.9ms |      36 | `nextTokenWithoutCheck` | `node_modules/typescript/lib/typescript.js:33008:33` |
|  2.5% |  1.2ms |       1 | `scanTokenAtPosition`   | `node_modules/typescript/lib/typescript.js:17466:29` |

##### `createTypeReference` (`node_modules/typescript/lib/typescript.js:62794:31`)

|     % |   Time | Samples | Caller                          | Location                                             |
| ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------- |
| 64.1% | 27.6ms |      22 | `createNormalizedTypeReference` | `node_modules/typescript/lib/typescript.js:63796:41` |
| 20.2% |  8.7ms |       6 | `getTypeWithThisArgument`       | `node_modules/typescript/lib/typescript.js:60454:35` |
|  8.7% |  3.7ms |       3 | `getNormalizedType`             | `node_modules/typescript/lib/typescript.js:67408:29` |
|  3.6% |  1.5ms |       1 | `getWidenedTypeWithContext`     | `node_modules/typescript/lib/typescript.js:70582:37` |
|  3.4% |  1.5ms |       1 | `createNormalizedTupleType`     | `node_modules/typescript/lib/typescript.js:63799:37` |

##### `getReducedType` (`node_modules/typescript/lib/typescript.js:61933:26`)

|     % |   Time | Samples | Caller                                 | Location                                             |
| ----: | -----: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 63.7% | 27.0ms |      21 | `getReducedApparentType`               | `node_modules/typescript/lib/typescript.js:61750:34` |
| 21.3% |  9.0ms |       7 | `getNormalizedUnionOrIntersectionType` | `node_modules/typescript/lib/typescript.js:67416:48` |
|  6.1% |  2.6ms |       2 | `getIndexType`                         | `node_modules/typescript/lib/typescript.js:64603:24` |
|  3.5% |  1.5ms |       1 | `inferFromTypes`                       | `node_modules/typescript/lib/typescript.js:71184:28` |
|  2.8% |  1.2ms |       1 | `sameMap`                              | `node_modules/typescript/lib/typescript.js:2595:17`  |

##### `isTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67361:27`)

|     % |   Time | Samples | Caller                                     | Location                                             |
| ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------- |
| 80.8% | 33.3ms |      25 | `isTypeIdenticalTo`                        | `node_modules/typescript/lib/typescript.js:66463:29` |
|  9.5% |  3.9ms |       3 | `isTypeAssignableTo`                       | `node_modules/typescript/lib/typescript.js:66481:30` |
|  6.4% |  2.6ms |       2 | `isTypeComparableTo`                       | `node_modules/typescript/lib/typescript.js:66487:30` |
|  3.3% |  1.4ms |       1 | `checkTypeRelatedToAndOptionallyElaborate` | `node_modules/typescript/lib/typescript.js:66509:52` |

##### `some` (`node_modules/typescript/lib/typescript.js:2794:14`)

|     % |  Time | Samples | Caller                      | Location                                             |
| ----: | ----: | ------: | --------------------------- | ---------------------------------------------------- |
| 22.3% | 8.8ms |       7 | `getReducedType`            | `node_modules/typescript/lib/typescript.js:61933:26` |
| 15.7% | 6.2ms |       5 | `isReadonlySymbol`          | `node_modules/typescript/lib/typescript.js:81206:28` |
| 12.0% | 4.7ms |       4 | `couldContainTypeVariables` | `node_modules/typescript/lib/typescript.js:70860:37` |
|  9.6% | 3.8ms |       3 | `indexSignaturesRelatedTo`  | `node_modules/typescript/lib/typescript.js:69735:38` |
|  7.4% | 2.9ms |       2 | `isConstTypeVariable`       | `node_modules/typescript/lib/typescript.js:61461:31` |

##### `createInstantiatedSymbolTable` (`node_modules/typescript/lib/typescript.js:60275:41`)

|     % |   Time | Samples | Caller                        | Location                                             |
| ----: | -----: | ------: | ----------------------------- | ---------------------------------------------------- |
| 96.1% | 37.8ms |      30 | `resolveObjectTypeMembers`    | `node_modules/typescript/lib/typescript.js:60465:36` |
|  3.9% |  1.5ms |       1 | `resolveAnonymousTypeMembers` | `node_modules/typescript/lib/typescript.js:60978:39` |

##### `couldContainTypeVariables` (`node_modules/typescript/lib/typescript.js:70860:37`)

|     % |   Time | Samples | Caller                     | Location                                             |
| ----: | -----: | ------: | -------------------------- | ---------------------------------------------------- |
| 66.1% | 25.0ms |      19 | `instantiateTypeWithAlias` | `node_modules/typescript/lib/typescript.js:66266:36` |
| 16.3% |  6.2ms |       5 | `instantiateSymbol`        | `node_modules/typescript/lib/typescript.js:66013:29` |
| 10.4% |  3.9ms |       3 | `some`                     | `node_modules/typescript/lib/typescript.js:2794:14`  |
|  7.2% |  2.7ms |       2 | `inferFromTypes`           | `node_modules/typescript/lib/typescript.js:71184:28` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Caller           | Location                                            |
| ----: | -----: | ------: | ---------------- | --------------------------------------------------- |
| 81.6% | 30.2ms |      23 | `readFileSync`   | `<unknown>`                                         |
| 18.4% |  6.8ms |       4 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:8751:28` |

##### `resolveNameHelper` (`node_modules/typescript/lib/typescript.js:23186:29`)

|     % |   Time | Samples | Caller              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 51.7% | 18.2ms |      14 | `resolveEntityName` | `node_modules/typescript/lib/typescript.js:52866:29` |
| 48.3% | 16.9ms |      12 | `getResolvedSymbol` | `node_modules/typescript/lib/typescript.js:71910:29` |

##### `getReducedApparentType` (`node_modules/typescript/lib/typescript.js:61750:34`)

|     % |   Time | Samples | Caller                | Location                                             |
| ----: | -----: | ------: | --------------------- | ---------------------------------------------------- |
| 48.5% | 17.0ms |      13 | `getSignaturesOfType` | `node_modules/typescript/lib/typescript.js:62044:31` |
| 29.5% | 10.4ms |       8 | `getPropertyOfType`   | `node_modules/typescript/lib/typescript.js:61994:29` |
| 18.4% |  6.5ms |       5 | `getIndexInfosOfType` | `node_modules/typescript/lib/typescript.js:62110:31` |
|  3.5% |  1.2ms |       1 | `getPropertiesOfType` | `node_modules/typescript/lib/typescript.js:61411:31` |

##### `/^\/tmp\/(?!(node_modules|bower_components|jspm_packages)(\/|$))nix\-shell\.K1HXIc\/(?!(node_modules|bower_components|jspm_packages)(\/|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules|bower_components|jspm_packages)(\/|$))[^/.][^/]*)*?\/(?!(node_modules|bower_components|jspm_packages)(\/|$))([^./]([^./]|(\.(?!min\.js$))?)*)?$/i` (`<unknown>`)

|     % |   Time | Samples | Caller        | Location                                             |
| ----: | -----: | ------: | ------------- | ---------------------------------------------------- |
| 65.4% | 19.9ms |      15 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:22201:60` |
| 34.6% | 10.5ms |       8 | `test`        | `<unknown>`                                          |

##### `set` (`<unknown>`)

|     % |   Time | Samples | Caller                                | Location                                             |
| ----: | -----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 73.0% | 22.2ms |       5 | `getDeclaredTypeOfClassOrInterface`   | `node_modules/typescript/lib/typescript.js:60073:45` |
|  8.8% |  2.7ms |       1 | `getSpreadType`                       | `node_modules/typescript/lib/typescript.js:65547:25` |
|  5.1% |  1.6ms |       1 | `getConditionalTypeInstantiation`     | `node_modules/typescript/lib/typescript.js:66239:43` |
|  4.8% |  1.5ms |       1 | `checkGrammarObjectLiteralExpression` | `node_modules/typescript/lib/typescript.js:91022:47` |
|  4.6% |  1.4ms |       1 | `getUnionTypeFromSortedList`          | `node_modules/typescript/lib/typescript.js:64203:38` |

##### `statSync` (`<unknown>`)

|      % |   Time | Samples | Caller     | Location                                            |
| -----: | -----: | ------: | ---------- | --------------------------------------------------- |
| 100.0% | 27.0ms |      21 | `statSync` | `node_modules/typescript/lib/typescript.js:8631:22` |

##### `get` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                              |
| ----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 25.1% | 3.1ms |       2 | `findSourceFileWorker`     | `node_modules/typescript/lib/typescript.js:125566:32` |
| 22.7% | 2.8ms |       2 | `recursiveTypeRelatedTo`   | `node_modules/typescript/lib/typescript.js:68323:36`  |
| 12.1% | 1.5ms |       1 | `addInheritedMembers`      | `node_modules/typescript/lib/typescript.js:60282:31`  |
| 10.8% | 1.3ms |       1 | `isFunctionObjectType`     | `node_modules/typescript/lib/typescript.js:72214:32`  |
| 10.0% | 1.2ms |       1 | `bindClassLikeDeclaration` | `node_modules/typescript/lib/typescript.js:48535:36`  |

##### `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g` (`<unknown>`)

|     % |   Time | Samples | Caller                | Location                                            |
| ----: | -----: | ------: | --------------------- | --------------------------------------------------- |
| 90.3% | 10.6ms |       8 | `toFileNameLowerCase` | `node_modules/typescript/lib/typescript.js:3509:29` |
|  9.7% |  1.1ms |       1 | `replace`             | `<unknown>`                                         |

##### `forEach` (`<unknown>`)

|     % |  Time | Samples | Caller                | Location                                             |
| ----: | ----: | ------: | --------------------- | ---------------------------------------------------- |
| 79.8% | 8.8ms |       7 | `getNamedMembers`     | `node_modules/typescript/lib/typescript.js:53726:27` |
| 10.7% | 1.2ms |       1 | `checkDeferredNodes`  | `node_modules/typescript/lib/typescript.js:88492:30` |
|  9.5% | 1.0ms |       1 | `extendExportSymbols` | `node_modules/typescript/lib/typescript.js:53420:31` |

##### `toString` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                            |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 8.6ms |       6 | `readFileWorker` | `node_modules/typescript/lib/typescript.js:8751:28` |

##### `next` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                            |
| ----: | ----: | ------: | -------------------------- | --------------------------------------------------- |
| 81.1% | 6.2ms |       5 | `arrayFrom`                | `node_modules/typescript/lib/typescript.js:3187:19` |
| 18.9% | 1.5ms |       1 | `firstOrUndefinedIterator` | `node_modules/typescript/lib/typescript.js:3059:34` |

##### `SymbolLinks` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location                                             |
| -----: | ----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% | 7.2ms |       6 | `createSymbol` | `node_modules/typescript/lib/typescript.js:51236:24` |

##### `stringSplitFast` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location                                              |
| ----: | ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 81.0% | 5.1ms |       4 | `pathComponents`                | `node_modules/typescript/lib/typescript.js:9097:24`   |
| 19.0% | 1.2ms |       1 | `getLibraryNameFromLibFileName` | `node_modules/typescript/lib/typescript.js:123602:39` |

##### `slice` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location                                            |
| -----: | ----: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 6.1ms |       5 | `filter` | `node_modules/typescript/lib/typescript.js:2546:16` |

##### `unshift` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                             |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 5.5ms |       4 | `addWorkItem` | `node_modules/typescript/lib/typescript.js:32338:23` |

##### `join` (`<unknown>`)

|     % |  Time | Samples | Caller               | Location                                             |
| ----: | ----: | ------: | -------------------- | ---------------------------------------------------- |
| 45.8% | 2.3ms |       2 | `doJSDocScan`        | `node_modules/typescript/lib/typescript.js:38308:27` |
| 29.4% | 1.5ms |       1 | `parseTagComments`   | `node_modules/typescript/lib/typescript.js:38564:32` |
| 24.8% | 1.2ms |       1 | `getPathWithoutRoot` | `node_modules/typescript/lib/typescript.js:9179:28`  |

##### `/(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location                                            |
| -----: | ----: | ------: | --------------- | --------------------------------------------------- |
| 100.0% | 4.1ms |       3 | `normalizePath` | `node_modules/typescript/lib/typescript.js:9164:23` |

##### `filter` (`<unknown>`)

|      % |  Time | Samples | Caller                                 | Location                                             |
| -----: | ----: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 100.0% | 3.8ms |       3 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:69828:48` |

##### `realpathNativeSync` (`<unknown>`)

|     % |  Time | Samples | Caller                     | Location                                            |
| ----: | ----: | ------: | -------------------------- | --------------------------------------------------- |
| 70.1% | 2.7ms |       2 | `bound realpathNativeSync` | `<unknown>`                                         |
| 29.9% | 1.1ms |       1 | `realpath`                 | `node_modules/typescript/lib/typescript.js:8881:22` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Caller                                 | Location                                             |
| ----: | ----: | ------: | -------------------------------------- | ---------------------------------------------------- |
| 67.2% | 2.3ms |       2 | `createInferenceContext`               | `node_modules/typescript/lib/typescript.js:70767:34` |
| 32.8% | 1.1ms |       1 | `discriminateTypeByDiscriminableItems` | `node_modules/typescript/lib/typescript.js:69828:48` |

##### `/^\.\.?($|[\\/])/` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                            |
| -----: | ----: | ------: | ---------------- | --------------------------------------------------- |
| 100.0% | 2.7ms |       1 | `pathIsRelative` | `node_modules/typescript/lib/typescript.js:8963:24` |

##### `has` (`<unknown>`)

|     % |  Time | Samples | Caller                   | Location                                             |
| ----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 50.1% | 1.3ms |       1 | `addTypeToIntersection`  | `node_modules/typescript/lib/typescript.js:64240:33` |
| 49.9% | 1.3ms |       1 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68323:36` |

##### `Set` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 2.4ms |       1 | `getExportsOfModuleWorker` | `node_modules/typescript/lib/typescript.js:53444:36` |

##### `push` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location                                              |
| ----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 51.2% | 1.2ms |       1 | `resolveModuleNamesReusingOldState` | `node_modules/typescript/lib/typescript.js:124396:45` |
| 48.8% | 1.1ms |       1 | `getTemplateLiteralType`            | `node_modules/typescript/lib/typescript.js:64644:34`  |

##### `parseModule` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.3ms |       2 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location                                             |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 2.2ms |       2 | `resolveCallExpression` | `node_modules/typescript/lib/typescript.js:78984:33` |

##### `startsWith` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                             |
| -----: | ----: | ------: | ------------------------ | ---------------------------------------------------- |
| 100.0% | 1.5ms |       1 | `recursiveTypeRelatedTo` | `node_modules/typescript/lib/typescript.js:68323:36` |

##### `(anonymous)` (`node:crypto:1:11`)

|      % |  Time | Samples | Caller      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.4ms |       1 | `anonymous` | `<unknown>` |

##### `values` (`<unknown>`)

|      % |  Time | Samples | Caller                      | Location                                             |
| -----: | ----: | ------: | --------------------------- | ---------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `checkUnusedTypeParameters` | `node_modules/typescript/lib/typescript.js:84839:37` |

##### `test` (`<unknown>`)

|      % |  Time | Samples | Caller           | Location                                             |
| -----: | ----: | ------: | ---------------- | ---------------------------------------------------- |
| 100.0% | 1.4ms |       1 | `visitDirectory` | `node_modules/typescript/lib/typescript.js:22185:26` |

##### `Map` (`<unknown>`)

|      % |  Time | Samples | Caller                                | Location                                             |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `checkGrammarObjectLiteralExpression` | `node_modules/typescript/lib/typescript.js:91022:47` |

##### `lastIndexOf` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                             |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 100.0% | 1.3ms |       1 | `doJSDocScan` | `node_modules/typescript/lib/typescript.js:38308:27` |

##### `/^(?:\/|\*)*\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                             |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       1 | `getDirectiveFromComment` | `node_modules/typescript/lib/typescript.js:14301:35` |

##### `generatorResume` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 1.1ms |       1 | `return` | `<unknown>` |

##### `/^\/\/\/?\s*@(ts-expect-error|ts-ignore)/` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location                                             |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 1.1ms |       1 | `getDirectiveFromComment` | `node_modules/typescript/lib/typescript.js:14301:35` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 99.9% | 5.65s |   4,193 | `(anonymous)`                              | `<unknown>`                                           |
| 99.8% | 5.64s |   4,187 | `typeCheckProject`                         | `tsc-workload.mjs:3:33`                               |
| 99.8% | 5.64s |   4,186 | `evaluate`                                 | `<unknown>`                                           |
| 99.8% | 5.64s |   4,186 | `moduleEvaluation`                         | `<unknown>`                                           |
| 99.8% | 5.64s |   4,186 | `loadAndEvaluateModule`                    | `<unknown>`                                           |
| 99.8% | 5.64s |   4,186 | `processTicksAndRejections`                | `<unknown>`                                           |
| 89.9% | 5.08s |   3,757 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2378:17`   |
| 78.8% | 4.46s |   3,363 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
| 78.8% | 4.46s |   3,363 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
| 78.8% | 4.45s |   3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 78.8% | 4.45s |   3,362 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
| 78.8% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
| 78.8% | 4.45s |   3,362 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
| 78.8% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
| 78.8% | 4.45s |   3,362 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
| 78.8% | 4.45s |   3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 78.8% | 4.45s |   3,362 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
| 73.9% | 4.17s |   3,145 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:88583:33`  |
| 73.9% | 4.17s |   3,145 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |
| 73.9% | 4.17s |   3,145 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:88649:47`  |

#### Categories

##### Third-party

|     % |  Time | Samples | Function                                   | Location                                              |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 89.9% | 5.08s |   3,757 | `forEach`                                  | `node_modules/typescript/lib/typescript.js:2378:17`   |
| 78.8% | 4.46s |   3,363 | `getSemanticDiagnostics`                   | `node_modules/typescript/lib/typescript.js:124909:34` |
| 78.8% | 4.46s |   3,363 | `flatMap`                                  | `node_modules/typescript/lib/typescript.js:2625:17`   |
| 78.8% | 4.45s |   3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124967:37` |
| 78.8% | 4.45s |   3,362 | `runWithCancellationToken`                 | `node_modules/typescript/lib/typescript.js:124947:36` |
| 78.8% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |
| 78.8% | 4.45s |   3,362 | `getAndCacheDiagnostics`                   | `node_modules/typescript/lib/typescript.js:125252:34` |
| 78.8% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFile`        | `node_modules/typescript/lib/typescript.js:124963:45` |
| 78.8% | 4.45s |   3,362 | `getSemanticDiagnosticsForFile`            | `node_modules/typescript/lib/typescript.js:124957:41` |
| 78.8% | 4.45s |   3,362 | `(anonymous)`                              | `node_modules/typescript/lib/typescript.js:124899:76` |
| 78.8% | 4.45s |   3,362 | `getDiagnosticsHelper`                     | `node_modules/typescript/lib/typescript.js:124895:32` |
| 73.9% | 4.17s |   3,145 | `checkSourceFileWorker`                    | `node_modules/typescript/lib/typescript.js:88583:33`  |
| 73.9% | 4.17s |   3,145 | `checkSourceFile`                          | `node_modules/typescript/lib/typescript.js:88552:27`  |
| 73.9% | 4.17s |   3,145 | `checkSourceFileWithEagerDiagnostics`      | `node_modules/typescript/lib/typescript.js:88649:47`  |
| 73.9% | 4.17s |   3,145 | `getDiagnosticsWorker`                     | `node_modules/typescript/lib/typescript.js:88656:32`  |
| 73.9% | 4.17s |   3,145 | `getDiagnostics2`                          | `node_modules/typescript/lib/typescript.js:88635:27`  |
| 73.1% | 4.13s |   3,110 | `checkSourceElement`                       | `node_modules/typescript/lib/typescript.js:88199:30`  |
| 73.0% | 4.13s |   3,109 | `checkSourceElementWorker`                 | `node_modules/typescript/lib/typescript.js:88208:36`  |
| 55.6% | 3.14s |   2,364 | `checkBlock`                               | `node_modules/typescript/lib/typescript.js:85011:22`  |
| 54.4% | 3.07s |   2,328 | `checkExpression`                          | `node_modules/typescript/lib/typescript.js:82771:27`  |

##### Native

|     % |    Time | Samples | Function                                                                                                                                                                                                                                                                                                                                                                         | Location    |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 99.8% |   5.64s |   4,186 | `evaluate`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| 99.8% |   5.64s |   4,186 | `moduleEvaluation`                                                                                                                                                                                                                                                                                                                                                               | `<unknown>` |
| 99.8% |   5.64s |   4,186 | `loadAndEvaluateModule`                                                                                                                                                                                                                                                                                                                                                          | `<unknown>` |
| 99.8% |   5.64s |   4,186 | `processTicksAndRejections`                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  5.3% | 300.1ms |     231 | `anonymous`                                                                                                                                                                                                                                                                                                                                                                      | `<unknown>` |
|  5.2% | 294.0ms |     226 | `require`                                                                                                                                                                                                                                                                                                                                                                        | `<unknown>` |
|  5.2% | 294.0ms |     226 | `bound require`                                                                                                                                                                                                                                                                                                                                                                  | `<unknown>` |
|  1.3% |  71.5ms |      56 | `generatorResume`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.7% |  37.1ms |      27 | `readFileSync`                                                                                                                                                                                                                                                                                                                                                                   | `<unknown>` |
|  0.5% |  30.4ms |      23 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |
|  0.5% |  27.0ms |      21 | `statSync`                                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.2% |  11.8ms |       9 | `/[^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+/g`                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
|  0.1% |   8.3ms |       7 | `parseModule`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |   7.2ms |       6 | `SymbolLinks`                                                                                                                                                                                                                                                                                                                                                                    | `<unknown>` |
|  0.1% |   6.3ms |       5 | `stringSplitFast`                                                                                                                                                                                                                                                                                                                                                                | `<unknown>` |
|  0.1% |   4.1ms |       3 | `/(?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)/`                                                                                                                                                                                                                                                                                                                                            | `<unknown>` |
|  0.1% |   3.8ms |       3 | `realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |   2.7ms |       1 | `/^\.\.?($\|[\\/])/`                                                                                                                                                                                                                                                                                                                                                             | `<unknown>` |
| <0.1% |   2.7ms |       2 | `bound realpathNativeSync`                                                                                                                                                                                                                                                                                                                                                       | `<unknown>` |
| <0.1% |   1.2ms |       1 | `/^(?:\/\|\*)*\s*@(ts-expect-error\|ts-ignore)/`                                                                                                                                                                                                                                                                                                                                 | `<unknown>` |

##### Standard library

|     % |   Time | Samples | Function      | Location                          |
| ----: | -----: | ------: | ------------- | --------------------------------- |
| 41.8% |  2.36s |   1,777 | `forEach`     | `<unknown>`                       |
|  0.8% | 43.6ms |      34 | `next`        | `<unknown>`                       |
|  0.5% | 30.3ms |      10 | `set`         | `<unknown>`                       |
|  0.2% | 12.2ms |       9 | `get`         | `<unknown>`                       |
|  0.2% | 11.9ms |       9 | `test`        | `<unknown>`                       |
|  0.2% |  8.6ms |       6 | `toString`    | `<unknown>`                       |
|  0.1% |  7.0ms |       6 | `some`        | `<unknown>`                       |
|  0.1% |  6.1ms |       5 | `filter`      | `<unknown>`                       |
|  0.1% |  6.1ms |       5 | `slice`       | `<unknown>`                       |
|  0.1% |  5.7ms |       5 | `map`         | `<unknown>`                       |
|  0.1% |  5.5ms |       4 | `unshift`     | `<unknown>`                       |
|  0.1% |  4.9ms |       4 | `join`        | `<unknown>`                       |
|  0.1% |  4.7ms |       4 | `find`        | `<unknown>`                       |
|  0.1% |  3.8ms |       3 | `sort`        | `<unknown>`                       |
| <0.1% |  2.6ms |       2 | `has`         | `<unknown>`                       |
| <0.1% |  2.4ms |       1 | `Set`         | `<unknown>`                       |
| <0.1% |  2.4ms |       2 | `(anonymous)` | `internal:streams/compose:1:11`   |
| <0.1% |  2.4ms |       2 | `(anonymous)` | `internal:streams/operators:1:11` |
| <0.1% |  2.4ms |       2 | `(anonymous)` | `internal:stream:1:11`            |
| <0.1% |  2.4ms |       2 | `(anonymous)` | `node:stream:1:11`                |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee                  | Location         |
| ----: | ----: | ------: | ----------------------- | ---------------- |
| 99.9% | 5.64s |   4,186 | `loadAndEvaluateModule` | `<unknown>`      |
|  0.1% | 8.3ms |       7 | `parseModule`           | `<unknown>`      |
|  0.1% | 3.7ms |       3 | `anonymous`             | `<unknown>`      |
| <0.1% | 2.4ms |       2 | `get WriteStream`       | `node:fs:587:18` |

##### `typeCheckProject` (`tsc-workload.mjs:3:33`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 79.0% |   4.46s |   3,363 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js:124909:34` |
| 15.0% | 847.8ms |     565 | `createProgram`                    | `node_modules/typescript/lib/typescript.js:123840:23` |
|  5.2% | 294.0ms |     226 | `bound require`                    | `<unknown>`                                           |
|  0.8% |  42.5ms |      32 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js:41625:42`  |
| <0.1% |   1.4ms |       1 | `findConfigFile`                   | `node_modules/typescript/lib/typescript.js:123025:24` |

##### `moduleEvaluation` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.64s |   4,186 | `evaluate`         | `<unknown>` |
| 100.0% | 5.64s |   4,186 | `moduleEvaluation` | `<unknown>` |

##### `loadAndEvaluateModule` (`<unknown>`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.64s |   4,186 | `moduleEvaluation` | `<unknown>` |

##### `processTicksAndRejections` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 5.64s |   4,186 | `(anonymous)` | `<unknown>` |

##### `forEach` (`node_modules/typescript/lib/typescript.js:2378:17`)

|     % |    Time | Samples | Callee               | Location                                              |
| ----: | ------: | ------: | -------------------- | ----------------------------------------------------- |
| 81.2% |   4.12s |   3,107 | `checkSourceElement` | `node_modules/typescript/lib/typescript.js:88199:30`  |
| 11.0% | 557.1ms |     343 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:124028:24` |
|  5.0% | 255.1ms |     116 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:125782:35` |
|  4.4% | 225.2ms |     174 | `(anonymous)`        | `node_modules/typescript/lib/typescript.js:46417:21`  |
|  3.6% | 185.4ms |     142 | `bind`               | `node_modules/typescript/lib/typescript.js:47793:16`  |

##### `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js:124909:34`)

|      % |  Time | Samples | Callee                 | Location                                              |
| -----: | ----: | ------: | ---------------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `getDiagnosticsHelper` | `node_modules/typescript/lib/typescript.js:124895:32` |

##### `flatMap` (`node_modules/typescript/lib/typescript.js:2625:17`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124899:76` |
|  <0.1% | 1.5ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:18932:28`  |
|  <0.1% | 1.2ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:22094:25`  |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124967:37`)

|     % |    Time | Samples | Callee                             | Location                                              |
| ----: | ------: | ------: | ---------------------------------- | ----------------------------------------------------- |
| 93.7% |   4.17s |   3,145 | `getDiagnostics2`                  | `node_modules/typescript/lib/typescript.js:88635:27`  |
|  6.2% | 276.8ms |     214 | `getTypeChecker`                   | `node_modules/typescript/lib/typescript.js:124848:26` |
| <0.1% |   2.1ms |       2 | `getMergedBindAndCheckDiagnostics` | `node_modules/typescript/lib/typescript.js:124987:44` |

##### `runWithCancellationToken` (`node_modules/typescript/lib/typescript.js:124947:36`)

|      % |  Time | Samples | Callee        | Location                                              |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:124967:37` |

##### `getBindAndCheckDiagnosticsForFileNoCache` (`node_modules/typescript/lib/typescript.js:124966:52`)

|      % |  Time | Samples | Callee                     | Location                                              |
| -----: | ----: | ------: | -------------------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `runWithCancellationToken` | `node_modules/typescript/lib/typescript.js:124947:36` |

##### `getAndCacheDiagnostics` (`node_modules/typescript/lib/typescript.js:125252:34`)

|      % |  Time | Samples | Callee                                     | Location                                              |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFileNoCache` | `node_modules/typescript/lib/typescript.js:124966:52` |

##### `getBindAndCheckDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124963:45`)

|      % |  Time | Samples | Callee                   | Location                                              |
| -----: | ----: | ------: | ------------------------ | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `getAndCacheDiagnostics` | `node_modules/typescript/lib/typescript.js:125252:34` |

##### `getSemanticDiagnosticsForFile` (`node_modules/typescript/lib/typescript.js:124957:41`)

|      % |  Time | Samples | Callee                              | Location                                              |
| -----: | ----: | ------: | ----------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `getBindAndCheckDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:124963:45` |

##### `(anonymous)` (`node_modules/typescript/lib/typescript.js:124899:76`)

|      % |  Time | Samples | Callee                          | Location                                              |
| -----: | ----: | ------: | ------------------------------- | ----------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `getSemanticDiagnosticsForFile` | `node_modules/typescript/lib/typescript.js:124957:41` |

##### `getDiagnosticsHelper` (`node_modules/typescript/lib/typescript.js:124895:32`)

|      % |  Time | Samples | Callee    | Location                                            |
| -----: | ----: | ------: | --------- | --------------------------------------------------- |
| 100.0% | 4.45s |   3,362 | `flatMap` | `node_modules/typescript/lib/typescript.js:2625:17` |

##### `checkSourceFileWorker` (`node_modules/typescript/lib/typescript.js:88583:33`)

|     % |  Time | Samples | Callee               | Location                                             |
| ----: | ----: | ------: | -------------------- | ---------------------------------------------------- |
| 56.1% | 2.34s |   1,760 | `checkDeferredNodes` | `node_modules/typescript/lib/typescript.js:88492:30` |
| 43.7% | 1.82s |   1,380 | `forEach`            | `node_modules/typescript/lib/typescript.js:2378:17`  |
|  0.2% | 6.7ms |       5 | `addLazyDiagnostic`  | `node_modules/typescript/lib/typescript.js:88652:25` |

##### `checkSourceFile` (`node_modules/typescript/lib/typescript.js:88552:27`)

|      % |  Time | Samples | Callee                  | Location                                             |
| -----: | ----: | ------: | ----------------------- | ---------------------------------------------------- |
| 100.0% | 4.17s |   3,145 | `checkSourceFileWorker` | `node_modules/typescript/lib/typescript.js:88583:33` |

##### `checkSourceFileWithEagerDiagnostics` (`node_modules/typescript/lib/typescript.js:88649:47`)

|      % |  Time | Samples | Callee            | Location                                             |
| -----: | ----: | ------: | ----------------- | ---------------------------------------------------- |
| 100.0% | 4.17s |   3,145 | `checkSourceFile` | `node_modules/typescript/lib/typescript.js:88552:27` |

##### `getDiagnosticsWorker` (`node_modules/typescript/lib/typescript.js:88656:32`)

|      % |  Time | Samples | Callee                                | Location                                             |
| -----: | ----: | ------: | ------------------------------------- | ---------------------------------------------------- |
| 100.0% | 4.17s |   3,145 | `checkSourceFileWithEagerDiagnostics` | `node_modules/typescript/lib/typescript.js:88649:47` |

##### `getDiagnostics2` (`node_modules/typescript/lib/typescript.js:88635:27`)

|      % |  Time | Samples | Callee                 | Location                                             |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------------------- |
| 100.0% | 4.17s |   3,145 | `getDiagnosticsWorker` | `node_modules/typescript/lib/typescript.js:88656:32` |

##### `checkSourceElement` (`node_modules/typescript/lib/typescript.js:88199:30`)

|      % |  Time | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 4.13s |   3,109 | `checkSourceElementWorker` | `node_modules/typescript/lib/typescript.js:88208:36` |

##### `checkSourceElementWorker` (`node_modules/typescript/lib/typescript.js:88208:36`)

|     % |    Time | Samples | Callee                     | Location                                             |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------- |
| 76.1% |   3.14s |   2,363 | `checkBlock`               | `node_modules/typescript/lib/typescript.js:85011:22` |
| 43.1% |   1.78s |   1,332 | `checkVariableDeclaration` | `node_modules/typescript/lib/typescript.js:85396:36` |
| 42.4% |   1.75s |   1,322 | `checkVariableStatement`   | `node_modules/typescript/lib/typescript.js:85414:34` |
| 24.5% |   1.01s |     768 | `checkExpressionStatement` | `node_modules/typescript/lib/typescript.js:85419:36` |
| 20.4% | 844.8ms |     632 | `checkTypeReferenceNode`   | `node_modules/typescript/lib/typescript.js:83518:34` |

##### `checkBlock` (`node_modules/typescript/lib/typescript.js:85011:22`)

|      % |  Time | Samples | Callee                    | Location                                             |
| -----: | ----: | ------: | ------------------------- | ---------------------------------------------------- |
| 100.0% | 3.14s |   2,363 | `forEach`                 | `node_modules/typescript/lib/typescript.js:2378:17`  |
|  <0.1% | 1.1ms |       1 | `isFunctionOrModuleBlock` | `node_modules/typescript/lib/typescript.js:15584:33` |

##### `checkExpression` (`node_modules/typescript/lib/typescript.js:82771:27`)

|      % |   Time | Samples | Callee                                          | Location                                             |
| -----: | -----: | ------: | ----------------------------------------------- | ---------------------------------------------------- |
| 100.0% |  3.07s |   2,327 | `checkExpressionWorker`                         | `node_modules/typescript/lib/typescript.js:82811:33` |
|   1.0% | 29.3ms |      23 | `instantiateTypeWithSingleGenericCallSignature` | `node_modules/typescript/lib/typescript.js:82561:57` |
|   0.1% |  2.5ms |       2 | `isConstEnumObjectType`                         | `node_modules/typescript/lib/typescript.js:81489:33` |

##### `forEach` (`<unknown>`)

|     % |   Time | Samples | Callee              | Location                                             |
| ----: | -----: | ------: | ------------------- | ---------------------------------------------------- |
| 99.0% |  2.34s |   1,758 | `checkDeferredNode` | `node_modules/typescript/lib/typescript.js:88499:29` |
|  1.0% | 23.4ms |      18 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53728:21` |
|  0.4% |  8.8ms |       7 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53423:20` |
|  0.2% |  5.6ms |       4 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:53459:32` |
|  0.1% |  3.2ms |       3 | `(anonymous)`       | `node_modules/typescript/lib/typescript.js:51425:20` |

##### `anonymous` (`<unknown>`)

|     % |   Time | Samples | Callee        | Location                                         |
| ----: | -----: | ------: | ------------- | ------------------------------------------------ |
| 11.7% | 35.1ms |      26 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:1:10` |
|  0.8% |  2.4ms |       2 | `(anonymous)` | `internal:streams/compose:1:11`                  |
|  0.8% |  2.4ms |       2 | `(anonymous)` | `internal:streams/operators:1:11`                |
|  0.8% |  2.4ms |       2 | `(anonymous)` | `internal:stream:1:11`                           |
|  0.8% |  2.4ms |       2 | `(anonymous)` | `node:stream:1:11`                               |

##### `require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 294.0ms |     226 | `anonymous` | `<unknown>` |

##### `bound require` (`<unknown>`)

|      % |    Time | Samples | Callee      | Location    |
| -----: | ------: | ------: | ----------- | ----------- |
| 100.0% | 294.0ms |     226 | `require`   | `<unknown>` |
|   0.5% |   1.4ms |       1 | `anonymous` | `<unknown>` |

##### `generatorResume` (`<unknown>`)

|     % |   Time | Samples | Callee                   | Location                                              |
| ----: | -----: | ------: | ------------------------ | ----------------------------------------------------- |
| 98.5% | 70.5ms |      55 | `getUnmatchedProperties` | `node_modules/typescript/lib/typescript.js:70992:108` |

##### `next` (`<unknown>`)

|     % |   Time | Samples | Callee            | Location    |
| ----: | -----: | ------: | ----------------- | ----------- |
| 82.4% | 35.9ms |      28 | `generatorResume` | `<unknown>` |

##### `readFileSync` (`<unknown>`)

|     % |   Time | Samples | Callee         | Location    |
| ----: | -----: | ------: | -------------- | ----------- |
| 81.6% | 30.2ms |      23 | `readFileSync` | `<unknown>` |

##### `test` (`<unknown>`)

|     % |   Time | Samples | Callee                                                                                                                                                                                                                                                                                                                                                                           | Location    |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 88.4% | 10.5ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` | `<unknown>` |

##### `parseModule` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 73.0% | 6.1ms |       5 | `(anonymous)` | `<unknown>` |

##### `some` (`<unknown>`)

|     % |  Time | Samples | Callee                               | Location                                             |
| ----: | ----: | ------: | ------------------------------------ | ---------------------------------------------------- |
| 53.4% | 3.8ms |       3 | `isGenericFunctionReturningFunction` | `node_modules/typescript/lib/typescript.js:79061:46` |
| 14.9% | 1.1ms |       1 | `(anonymous)`                        | `node_modules/typescript/lib/typescript.js:47454:43` |

##### `filter` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                              |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------- |
| 19.6% | 1.2ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:41264:66`  |
| 17.6% | 1.1ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:125001:48` |

##### `map` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                             |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 21.9% | 1.3ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:69830:31` |
| 18.3% | 1.0ms |       1 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:41876:32` |

##### `find` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                             |
| ----: | ----: | ------: | ------------- | ---------------------------------------------------- |
| 77.2% | 3.7ms |       3 | `isTypeAlias` | `node_modules/typescript/lib/typescript.js:18786:21` |

##### `sort` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location                                            |
| -----: | ----: | ------: | ------------- | --------------------------------------------------- |
| 100.0% | 3.8ms |       3 | `(anonymous)` | `node_modules/typescript/lib/typescript.js:3023:16` |

##### `bound realpathNativeSync` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 2.7ms |       2 | `realpathNativeSync` | `<unknown>` |

##### `(anonymous)` (`internal:streams/compose:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:streams/operators:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`internal:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

##### `(anonymous)` (`node:stream:1:11`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 2.4ms |       2 | `anonymous` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `typeCheckProject` (`tsc-workload.mjs:3:33`) ← … ← `evaluate` ← `moduleEvaluation` ← `moduleEvaluation` ← `loadAndEvaluateModule` ← `(anonymous)` ← `processTicksAndRejections`

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.6% | 258.9ms |     200 | `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.9% | 106.7ms |       5 | `NodeObject` (`node_modules/typescript/lib/typescript.js:148243:14`) ← `createBaseNode` (32468:21) ← `createBaseNode` (24873:26) ← `createHeritageClause` (27497:32) ← `parseHeritageClause` (37721:31) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseHeritageClauses` (37715:32) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.5% |  29.5ms |      22 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.5% |  26.0ms |      19 | `(anonymous)` (`node_modules/typescript/lib/typescript.js:16:15`) ← `(anonymous)` (1:10) ← `anonymous` ← `require` ← `bound require`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.4% |  24.7ms |      18 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4% |  22.2ms |       5 | `set` ← `getDeclaredTypeOfClassOrInterface` (`node_modules/typescript/lib/typescript.js:60073:45`) ← `tryGetDeclaredTypeOfSymbol` (60200:38) ← `getDeclaredTypeOfSymbol` (60197:35) ← `getTypeFromClassOrInterfaceReference` (62851:48) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `resolveBaseTypesOfInterface` (60017:39) ← `getBaseTypes` (59919:24) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `getPropertyOfType` (61994:29) ← `getIterationTypesOfMethod` (86136:37) ← `getIterationTypesOfIteratorSlow` (86220:43) ← `getIterationTypesOfIteratorFast` (86047:43) ← `getIterationTypesOfIteratorWorker` (86032:45) ← `getIterationTypesOfIterableSlow` (85994:43) ← `getIterationTypesOfIterableWorker` (85882:45) ← `getIterationTypesOfIterable` (85813:39) ← `getIteratedTypeOrElementType` (85662:40) ← `checkIteratedTypeOrElementType` (85649:42) ← `checkRightHandSideOfForOf` (85645:37) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.4% |  21.6ms |      17 | `createTypeChecker` (`node_modules/typescript/lib/typescript.js:50070:27`) ← `getTypeChecker` (124848:26) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.4% |  19.9ms |      15 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `(anonymous)` (`node_modules/typescript/lib/typescript.js:22201:60`) ← `findIndex` (2484:19) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `matchFiles` (22171:20) ← `readDirectory` (8844:27) ← `getFileNamesFromConfigSpecs` (42891:37) ← `getFileNames` (42379:24) ← `parseJsonConfigFileContentWorker` (42261:42) ← `parseJsonSourceFileConfigFileContent` (42230:46) ← `getParsedCommandLineOfConfigFile` (41625:42)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.3% |  17.3ms |      12 | `shouldNormalizeIntersection` (`node_modules/typescript/lib/typescript.js:67429:39`) ← `getNormalizedUnionOrIntersectionType` (67416:48) ← `getNormalizedType` (67408:29) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.3% |  15.5ms |      12 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.2% |  13.7ms |       3 | `SymbolObject` (`node_modules/typescript/lib/typescript.js:148449:14`) ← `createSymbol` (51236:24) ← `instantiateSymbol` (66013:29) ← `createInstantiatedSymbolTable` (60275:41) ← `resolveObjectTypeMembers` (60465:36) ← `resolveTypeReferenceMembers` (60519:39) ← `resolveStructuredTypeMembers` (61345:40) ← `isWeakType` (69852:22) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `compareTypesAssignable` (66469:34) ← `getInferredType` (71816:27) ← `(anonymous)` (70790:49) ← `getMappedType` (65907:25) ← `getMappedType` (65907:25) ← `(anonymous)` (66062:49) ← `map` (2580:13) ← `getObjectTypeInstantiation` (66040:38) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getConditionalType` (65229:30) ← `getConditionalTypeInstantiation` (66239:43) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `getTypeAliasInstantiation` (62886:37) ← `getTypeFromTypeAliasReference` (62903:41) ← `getTypeReferenceType` (63005:32) ← `getTypeFromTypeReference` (63179:36) ← `getTypeFromTypeNodeWorker` (65782:37) ← `getTypeFromTypeNode` (65779:31) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIndexedAccessType` (83644:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeParameter` (82927:30) ← `checkTypeParameters` (86558:31) ← `checkSignatureDeclaration` (83087:37) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 0.2% |  13.2ms |      10 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkReturnStatement` (86275:32) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkFunctionDeclarationDiagnostics` (84580:49) ← `addLazyDiagnostic` (88652:25) ← `checkFunctionDeclaration` (84578:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  13.2ms |      10 | `recursiveTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:68323:36`) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.2% |  12.8ms |       3 | `TypeObject` (`node_modules/typescript/lib/typescript.js:148564:14`) ← `createType` (53676:22) ← `createTypeWithSymbol` (53684:32) ← `createObjectType` (53707:28) ← `createTypeReference` (62794:31) ← `createNormalizedTypeReference` (63796:41) ← `instantiateTypeWorker` (66283:33) ← `instantiateTypeWithAlias` (66266:36) ← `instantiateType` (66256:27) ← `getReturnTypeOfSignature` (62462:36) ← `getReturnTypeOfSignature` (62462:36) ← `compareSignaturesRelated` (67064:36) ← `signatureRelatedTo` (69635:32) ← `signaturesRelatedTo` (69505:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `isPropertySymbolTypeRelated` (69211:41) ← `propertyRelatedTo` (69230:31) ← `propertiesRelatedTo` (69333:33) ← `structuredTypeRelatedToWorker` (68537:43) ← `structuredTypeRelatedTo` (68467:37) ← `recursiveTypeRelatedTo` (68323:36) ← `isRelatedTo` (67753:25) ← `checkTypeRelatedTo` (67445:30) ← `checkTypeAssignableTo` (66493:33) ← `checkTypeArgumentConstraints` (83481:40) ← `(anonymous)` (83533:27) ← `addLazyDiagnostic` (88652:25) ← `checkTypeReferenceOrImport` (83529:38) ← `checkTypeReferenceNode` (83518:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkTypeAliasDeclaration` (87285:37) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 0.2% |  12.4ms |       9 | `getUnionOrIntersectionProperty` (`node_modules/typescript/lib/typescript.js:61892:42`) ← `getPropertyOfUnionOrIntersectionType` (61929:48) ← `getPropertiesOfUnionOrIntersectionType` (61386:50) ← `getReducedType` (61933:26) ← `getReducedApparentType` (61750:34) ← `getPropertyOfType` (61994:29) ← `checkPropertyAccessExpressionOrQualifiedName` (77201:56) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.2% |  11.0ms |       9 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionCached` (82440:33) ← `checkDeclarationInitializer` (82464:39) ← `getTypeForVariableLikeDeclaration` (58745:45) ← `getWidenedTypeForVariableLikeDeclaration` (59264:52) ← `getTypeOfVariableOrParameterOrPropertyWorker` (59354:56) ← `getTypeOfVariableOrParameterOrProperty` (59343:50) ← `getTypeOfSymbol` (59663:27) ← `checkVariableLikeDeclaration` (85202:40) ← `checkVariableDeclaration` (85396:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkVariableDeclarationList` (85407:40) ← `checkVariableStatement` (85414:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.2% |  10.9ms |       8 | `parseJSDocCommentWorker` (`node_modules/typescript/lib/typescript.js:38286:37`) ← `(anonymous)` (38259:63) ← `doInsideOfContext` (32908:29) ← `parseJSDocComment` (38255:31) ← `(anonymous)` (32748:71) ← `mapDefined` (2696:20) ← `withJSDoc` (32743:21) ← `parsePropertyOrMethodSignature` (34548:42) ← `parseTypeMember` (34591:27) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseObjectTypeMembers` (34635:34) ← `parseInterfaceDeclaration` (37747:37) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseModuleOrNamespaceDeclaration` (37800:45) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseModuleBlock` (37789:28) ← `parseAmbientExternalModuleDeclaration` (37814:49) ← `parseModuleDeclaration` (37833:34) ← `parseDeclarationWorker` (37124:34) ← `(anonymous)` (37111:56) ← `doInsideOfContext` (32908:29) ← `parseDeclaration` (37095:28) ← `parseStatement` (36979:26) ← `parseListElement` (33694:28) ← `parseList` (33673:21) ← `parseSourceFileWorker` (32711:33) ← `parseSourceFile` (32523:27) ← `createSourceFile` (32345:26) ← `(anonymous)` (123071:10) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `(anonymous)` (125782:35) ← `forEach` (2378:17) ← `processReferencedFiles` (125781:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processTypeReferenceDirectiveWorker` (125820:47) ← `processTypeReferenceDirective` (125814:41) ← `processTypeReferenceDirectives` (125794:42) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `processImportedModules` (125960:34) ← `findSourceFileWorker` (125566:32) ← `findSourceFile` (125549:26) ← `(anonymous)` (125505:7) ← `getSourceFileFromReferenceWorker` (125461:44) ← `processSourceFile` (125502:29) ← `processRootFile` (125290:27) ← `(anonymous)` (124028:24) ← `forEach` (2378:17) ← `createProgram` (123840:23)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 0.2% |  10.9ms |       8 | `getNodeId` (`node_modules/typescript/lib/typescript.js:50052:19`) ← `getNodeLinks` (51499:24) ← `getResolvedSymbol` (71910:29) ← `checkIdentifier` (74242:27) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkPrefixUnaryExpression` (81376:38) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkTruthinessExpression` (85549:37) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkIfStatement` (85423:28) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkForOfStatement` (85574:31) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionOrMethodDeclaration` (84693:44) ← `checkMethodDeclaration` (83318:34) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkClassDeclaration` (86712:33) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34) |
| 0.2% |  10.5ms |       8 | `/^\/tmp\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))nix\-shell\.K1HXIc\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))profiler\-md\-input\-generation\.EdvtIc\/zod\/src(\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))[^/.][^/]*)*?\/(?!(node_modules\|bower_components\|jspm_packages)(\/\|$))([^./]([^./]\|(\.(?!min\.js$))?)*)?$/i` ← `test` ← `(anonymous)` (`node_modules/typescript/lib/typescript.js:22201:60`) ← `findIndex` (2484:19) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `visitDirectory` (22185:26) ← `matchFiles` (22171:20) ← `readDirectory` (8844:27) ← `getFileNamesFromConfigSpecs` (42891:37) ← `getFileNames` (42379:24) ← `parseJsonConfigFileContentWorker` (42261:42) ← `parseJsonSourceFileConfigFileContent` (42230:46) ← `getParsedCommandLineOfConfigFile` (41625:42)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.2% |   9.8ms |       7 | `checkTypeRelatedTo` (`node_modules/typescript/lib/typescript.js:67445:30`) ← `isTypeRelatedTo` (67361:27) ← `isTypeIdenticalTo` (66463:29) ← `isTypeOrBaseIdenticalTo` (71779:35) ← `inferFromMatchingTypes` (71402:36) ← `inferFromTypes` (71184:28) ← `inferFromContravariantTypes` (71429:41) ← `inferFromContravariantTypesIfStrictFunctionTypes` (71434:62) ← `applyToParameterTypes` (70732:33) ← `inferFromSignature` (71739:32) ← `inferFromSignatures` (71727:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferFromProperties` (71715:33) ← `inferFromObjectTypes` (71615:34) ← `invokeOnce` (71374:24) ← `inferFromTypes` (71184:28) ← `inferTypes` (71175:22) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkPropertyAssignment` (82547:35) ← `checkObjectLiteral` (76097:30) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionForMutableLocation` (82534:45) ← `checkArrayLiteral` (75934:29) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionWithContextualType` (82417:45) ← `inferTypeArguments` (77951:30) ← `chooseOverload` (78765:28) ← `resolveCall` (78594:23) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkNonNullExpression` (76990:34) ← `checkPropertyAccessExpression` (77069:41) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `resolveCallExpression` (78984:33) ← `resolveSignature` (79450:28) ← `getResolvedSignature` (79468:32) ← `checkCallExpression` (79584:31) ← `checkExpressionWorker` (82811:33) ← `checkExpression` (82771:27) ← `checkExpressionStatement` (85419:36) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkTryStatement` (86397:29) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `forEach` (2378:17) ← `checkBlock` (85011:22) ← `checkSourceElementWorker` (88208:36) ← `checkSourceElement` (88199:30) ← `checkFunctionExpressionOrObjectLiteralMethodDeferred` (81135:64) ← `checkDeferredNode` (88499:29) ← `forEach` ← `checkDeferredNodes` (`node_modules/typescript/lib/typescript.js:88492:30`) ← `checkSourceFileWorker` (88583:33) ← `checkSourceFile` (88552:27) ← `checkSourceFileWithEagerDiagnostics` (88649:47) ← `getDiagnosticsWorker` (88656:32) ← `getDiagnostics2` (88635:27) ← `(anonymous)` (124967:37) ← `runWithCancellationToken` (124947:36) ← `getBindAndCheckDiagnosticsForFileNoCache` (124966:52) ← `getAndCacheDiagnostics` (125252:34) ← `getBindAndCheckDiagnosticsForFile` (124963:45) ← `getSemanticDiagnosticsForFile` (124957:41) ← `(anonymous)` (124899:76) ← `flatMap` (2625:17) ← `getDiagnosticsHelper` (124895:32) ← `getSemanticDiagnostics` (124909:34)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
