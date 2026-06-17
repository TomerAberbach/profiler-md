# CPU profile

Took 101.6ms over 89 samples (1.1ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 56.7% | 57.6ms |      45 |
| ours     | 43.3% | 44.0ms |      44 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function                            | Location                                                                                                                    |
| ---: | -----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`                              | `<unknown>`                                                                                                                 |
| 3.9% |  4.0ms |       4 | `insertBefore`                      | `<unknown>`                                                                                                                 |
| 3.9% |  4.0ms |       4 | `getPropertyValue`                  | `<unknown>`                                                                                                                 |
| 3.0% |  3.0ms |       3 | `stringsMatchAnyRegularExpressions` | FormMetadata.js:3:8216                                                                                                      |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/wiki/Profiling_(computer_programming):6:19                                                         |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812                      |
| 1.0% |  1.0ms |       1 | `resolveIndex`                      | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352                      |
| 1.0% |  1.0ms |       1 | `load`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748                      |
| 1.0% |  1.0ms |       1 | `parse`                             | `<unknown>`                                                                                                                 |
| 1.0% |  1.0ms |       1 | `splitModuleKey`                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720                      |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24                |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24                     |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420                             |
| 1.0% |  1.0ms |       1 | `doPropagation`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254                       |
| 1.0% |  1.0ms |       1 | `add`                               | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286                            |
| 1.0% |  1.0ms |       1 | `createHTMLDocument`                | `<unknown>`                                                                                                                 |
| 1.0% |  1.0ms |       1 | `jar.js`                            | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20                    |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86 |
| 1.0% |  1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627                    |
| 1.0% |  1.0ms |       1 | `Title.js`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105                    |

#### Lines

Lines ranked by contribution to each function's self time.

##### `stringsMatchAnyRegularExpressions` (FormMetadata.js:3:8216)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 3.0ms |       3 | FormMetadata.js:3 |

##### `resolveIndex` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352)

|      % |  Time | Samples | Location                                                                                           |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17 |

##### `load` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748)

|      % |  Time | Samples | Location                                                                                           |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20 |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|      % |  Time | Samples | Location                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `eval` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                                                                                               |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 10.0ms |      10 | `indirectEval` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216 |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                                              |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------- |
| 75.0% | 3.0ms |       3 | `addToHead`   | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909 |
| 25.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868      |

##### `getPropertyValue` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                                                                                 |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `getHeadingScrollOffset` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840 |

##### `stringsMatchAnyRegularExpressions` (FormMetadata.js:3:8216)

|      % |  Time | Samples | Caller                                                | Location                |
| -----: | ----: | ------: | ----------------------------------------------------- | ----------------------- |
| 100.0% | 3.0ms |       3 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | FormMetadata.js:3:19474 |

##### `(anonymous)` (https://en.wikipedia.org/wiki/Profiling_(computer_programming):6:19)

|      % |  Time | Samples | Caller      | Location                                                            |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/wiki/Profiling_(computer_programming):6:10 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812)

|      % |  Time | Samples | Caller      | Location                                                                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1 |

##### `resolveIndex` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352)

|      % |  Time | Samples | Caller     | Location                                                                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `register` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249 |

##### `load` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `init` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645 |

##### `parse` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `load` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748 |

##### `splitModuleKey` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `impl` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `impl` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `impl` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420)

|      % |  Time | Samples | Caller        | Location                                                                                       |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:92 |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|      % |  Time | Samples | Caller        | Location                                                                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558 |

##### `add` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286)

|      % |  Time | Samples | Caller        | Location                                                                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515 |

##### `createHTMLDocument` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                          |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282 |

##### `jar.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20)

|      % |  Time | Samples | Caller    | Location                                                                                              |
| -----: | ----: | ------: | --------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `require` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86)

|      % |  Time | Samples | Caller      | Location                                                                                              |
| -----: | ----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627)

|      % |  Time | Samples | Caller        | Location                                                                                                 |
| -----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:578 |

##### `Title.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105)

|      % |  Time | Samples | Caller      | Location                                                                                              |
| -----: | ----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                            | Location                                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 26.6% | 27.0ms |      27 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558   |
| 24.6% | 25.0ms |      25 | `runScript`                         | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59    |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217    |
| 12.8% | 13.0ms |      13 | `doPropagation`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254    |
| 12.8% | 13.0ms |      13 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421   |
| 12.8% | 13.0ms |      13 | `mightThrow`                        | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918         |
| 12.8% | 13.0ms |      13 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636         |
| 11.8% | 12.0ms |      12 | `eval`                              | `<unknown>`                                                                                              |
| 11.8% | 12.0ms |      12 | `indirectEval`                      | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216   |
| 11.8% | 12.0ms |      12 | `asyncEvalTask`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381   |
| 11.8% | 12.0ms |      12 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294   |
| 11.8% | 12.0ms |      12 | `execute`                           | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868   |
|  8.9% |  9.0ms |       9 | `_collectMetadata`                  | FormMetadata.js:3:78950                                                                                  |
|  8.9% |  9.0ms |       9 | `formsAndMetadata`                  | FormMetadata.js:3:82286                                                                                  |
|  7.9% |  8.0ms |       8 | `each`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105          |
|  7.9% |  8.0ms |       8 | `_collectFormMetadata`              | FormMetadata.js:3:62833                                                                                  |
|  6.9% |  7.0ms |       7 | `resources/skins.vector.js/skin.js` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155 |
|  5.9% |  6.0ms |       6 | `main`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965 |
|  4.9% |  5.0ms |       5 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812   |
|  4.9% |  5.0ms |       5 | `(program)`                         | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1      |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558)

|     % |   Time | Samples | Callee          | Location                                                                                                           |
| ----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| 48.1% | 13.0ms |      13 | `doPropagation` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254              |
| 44.4% | 12.0ms |      12 | `(anonymous)`   | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294             |
|  3.7% |  1.0ms |       1 | `(anonymous)`   | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:30:633      |
|  3.7% |  1.0ms |       1 | `doMaintenance` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.centralNotice.startUp&skin=vector-2022&version=bw1m8:3:383 |

##### `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59)

|     % |  Time | Samples | Callee                              | Location                                                                                                                    |
| ----: | ----: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 28.0% | 7.0ms |       7 | `resources/skins.vector.js/skin.js` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155                    |
| 12.0% | 3.0ms |       3 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:57                              |
|  8.0% | 2.0ms |       2 | `index.js`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:1:109                |
|  4.0% | 1.0ms |       1 | `index.js`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106                   |
|  4.0% | 1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86 |

##### `flushCssBuffer` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217)

|     % |   Time | Samples | Callee        | Location                                                                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 81.2% | 13.0ms |      13 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421 |
| 18.7% |  3.0ms |       3 | `newStyleTag` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59   |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|     % |   Time | Samples | Callee    | Location                                                                                               |
| ----: | -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------ |
| 92.3% | 12.0ms |      12 | `execute` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421)

|      % |   Time | Samples | Callee      | Location                                                                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

##### `mightThrow` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918)

|     % |  Time | Samples | Callee                     | Location                                                                                                      |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 30.8% | 4.0ms |       4 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977 |
| 23.1% | 3.0ms |       3 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:2:199 |
|  7.7% | 1.0ms |       1 | `fireWith`                 | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150              |
|  7.7% | 1.0ms |       1 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:356      |
|  7.7% | 1.0ms |       1 | `bound setupEventHandlers` | `<unknown>`                                                                                                   |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636)

|      % |   Time | Samples | Callee       | Location                                                                                         |
| -----: | -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 13.0ms |      13 | `mightThrow` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918 |

##### `eval` (`<unknown>`)

|    % |  Time | Samples | Callee      | Location                                                                                                    |
| ---: | ----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------------- |
| 8.3% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1 |
| 8.3% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1      |

##### `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216)

|      % |   Time | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 12.0ms |      12 | `eval` | `<unknown>` |

##### `asyncEvalTask` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381)

|      % |   Time | Samples | Callee         | Location                                                                                               |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 12.0ms |      12 | `indirectEval` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294)

|      % |   Time | Samples | Callee          | Location                                                                                               |
| -----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 12.0ms |      12 | `asyncEvalTask` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381 |

##### `execute` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868)

|      % |   Time | Samples | Callee      | Location                                                                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

##### `_collectMetadata` (FormMetadata.js:3:78950)

|     % |  Time | Samples | Callee                 | Location                |
| ----: | ----: | ------: | ---------------------- | ----------------------- |
| 88.9% | 8.0ms |       8 | `_collectFormMetadata` | FormMetadata.js:3:62833 |
| 11.1% | 1.0ms |       1 | `_logicalFormsInPage`  | FormMetadata.js:3:27143 |

##### `formsAndMetadata` (FormMetadata.js:3:82286)

|      % |  Time | Samples | Callee             | Location                |
| -----: | ----: | ------: | ------------------ | ----------------------- |
| 100.0% | 9.0ms |       9 | `_collectMetadata` | FormMetadata.js:3:78950 |

##### `each` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105)

|     % |  Time | Samples | Callee        | Location                                                                                                          |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| 50.0% | 4.0ms |       4 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722   |
| 12.5% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:46:515                  |
| 12.5% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:17:26           |
| 12.5% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:363 |
| 12.5% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:4:805            |

##### `_collectFormMetadata` (FormMetadata.js:3:62833)

|     % |  Time | Samples | Callee                                                | Location                |
| ----: | ----: | ------: | ----------------------------------------------------- | ----------------------- |
| 50.0% | 4.0ms |       4 | `_isElementFollowedByForgotUserNameOrEmailAffordance` | FormMetadata.js:3:19474 |
| 25.0% | 2.0ms |       2 | `_findHiddenUsernameElement`                          | FormMetadata.js:3:75498 |
| 12.5% | 1.0ms |       1 | `(anonymous)`                                         | FormMetadata.js:3:14331 |
| 12.5% | 1.0ms |       1 | `_collectControlMetadata`                             | FormMetadata.js:3:46804 |

##### `resources/skins.vector.js/skin.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155)

|     % |  Time | Samples | Callee | Location                                                                                                 |
| ----: | ----: | ------: | ------ | -------------------------------------------------------------------------------------------------------- |
| 85.7% | 6.0ms |       6 | `main` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965 |
| 14.3% | 1.0ms |       1 | `init` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:835 |

##### `main` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965)

|     % |  Time | Samples | Callee | Location                                                                                                  |
| ----: | ----: | ------: | ------ | --------------------------------------------------------------------------------------------------------- |
| 83.3% | 5.0ms |       5 | `main` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660  |
| 16.7% | 1.0ms |       1 | `init` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:42:160 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812)

|     % |  Time | Samples | Callee        | Location                                                                                               |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 40.0% | 2.0ms |       2 | `load`        | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:946 |
| 20.0% | 1.0ms |       1 | `register`    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249 |
| 20.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156 |

##### `(program)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1)

|      % |  Time | Samples | Callee        | Location                                                                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 5.0ms |       5 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9.8% | 10.0ms |      10 | `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                              |
| 3.9% |  4.0ms |       4 | `getPropertyValue` ← `getHeadingScrollOffset` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840) ← `setupTableOfContents` (6:197) ← `main` (7:660) ← `main` (1:965) ← `resources/skins.vector.js/skin.js` (1:155) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `(anonymous)` (12:421) ← `flushCssBuffer` (4:217)                                                                                                                                        |
| 3.0% |  3.0ms |       3 | `insertBefore` ← `addToHead` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909) ← `newStyleTag` (4:59) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.0% |  3.0ms |       3 | `stringsMatchAnyRegularExpressions` (FormMetadata.js:3:8216) ← `_isElementFollowedByForgotUserNameOrEmailAffordance` (3:19474) ← `_collectFormMetadata` (3:62833) ← `_collectMetadata` (3:78950) ← `formsAndMetadata` (3:82286)                                                                                                                                                                                                                                                                                                                                                            |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/wiki/Profiling_(computer_programming):6:19) ← `(program)` (6:10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |  1.0ms |       1 | `resolveIndex` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352) ← `register` (17:249) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |  1.0ms |       1 | `load` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                    |
| 1.0% |  1.0ms |       1 | `parse` ← `load` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |  1.0ms |       1 | `splitModuleKey` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720) ← `impl` (18:205) ← `(anonymous)` (https://en.wikipedia.org/wiki/Profiling_(computer_programming):8:44) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:23:156) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                    |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:24) ← `impl` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205) ← `(program)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1) ← `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558) |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24) ← `impl` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205) ← `(program)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1) ← `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)           |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                |
| 1.0% |  1.0ms |       1 | `add` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:42:286) ← `(anonymous)` (46:515) ← `each` (5:105) ← `Deferred` (43:832) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `createHTMLDocument` ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `jar.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20) ← `require` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344) ← `index.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                             |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                  |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627) ← `(anonymous)` (1:578) ← `o` (1:132) ← `r` (1:114) ← `(anonymous)` (1:66) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                          |
| 1.0% |  1.0ms |       1 | `Title.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                        |
| 1.0% |  1.0ms |       1 | `eventSender.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28) ← `require` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344) ← `index.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:105) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                      |
