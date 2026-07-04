# CPU profile

Took 102.2ms over 91 samples (1.1ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| stdlib   | 69.7% | 71.2ms |      60 |
| ours     | 30.3% | 31.0ms |      31 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |   Time | Samples | Function             | Location                                                                                                                           |
| ---: | -----: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 9.8% | 10.0ms |      10 | `eval`               | `<unknown>`                                                                                                                        |
| 5.9% |  6.0ms |       6 | `insertBefore`       | `<unknown>`                                                                                                                        |
| 4.9% |  5.0ms |       5 | `getPropertyValue`   | `<unknown>`                                                                                                                        |
| 1.0% |  1.0ms |       1 | `(anonymous)`        | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812                             |
| 1.0% |  1.0ms |       1 | `register`           | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249                             |
| 1.0% |  1.0ms |       1 | `parse`              | `<unknown>`                                                                                                                        |
| 1.0% |  1.0ms |       1 | `doPropagation`      | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254                              |
| 1.0% |  1.0ms |       1 | `(anonymous)`        | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24 |
| 1.0% |  1.0ms |       1 | `(anonymous)`        | https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24                              |
| 1.0% |  1.0ms |       1 | `each`               | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105                                    |
| 1.0% |  1.0ms |       1 | `execute`            | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868                             |
| 1.0% |  1.0ms |       1 | `createOptions`      | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604                                   |
| 1.0% |  1.0ms |       1 | `createHTMLDocument` | `<unknown>`                                                                                                                        |
| 1.0% |  1.0ms |       1 | `sortDependencies`   | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612                              |
| 1.0% |  1.0ms |       1 | `(anonymous)`        | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627                           |
| 1.0% |  1.0ms |       1 | `add`                | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368                            |
| 1.0% |  1.0ms |       1 | `(anonymous)`        | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193                             |
| 1.0% |  1.0ms |       1 | `URL`                | `<unknown>`                                                                                                                        |
| 1.0% |  1.0ms |       1 | `init`               | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342                       |
| 1.0% |  1.0ms |       1 | `get`                | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902                          |

#### Lines

Lines ranked by contribution to each function's self time.

##### `register` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249)

|      % |  Time | Samples | Location                                                                                           |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17 |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|      % |  Time | Samples | Location                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5 |

##### `execute` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868)

|      % |  Time | Samples | Location                                                                                           |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12 |

##### `sortDependencies` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612)

|      % |  Time | Samples | Location                                                                                          |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:7 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `eval` (`<unknown>`)

|      % |   Time | Samples | Caller         | Location                                                                                               |
| -----: | -----: | ------: | -------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 10.0ms |      10 | `indirectEval` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216 |

##### `insertBefore` (`<unknown>`)

|     % |  Time | Samples | Caller        | Location                                                                                              |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------- |
| 66.7% | 4.0ms |       4 | `addToHead`   | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909 |
| 33.3% | 2.0ms |       2 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868      |

##### `getPropertyValue` (`<unknown>`)

|      % |  Time | Samples | Caller                   | Location                                                                                                 |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `getHeadingScrollOffset` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812)

|      % |  Time | Samples | Caller      | Location                                                                                            |
| -----: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1 |

##### `register` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249)

|      % |  Time | Samples | Caller        | Location                                                                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812 |

##### `parse` (`<unknown>`)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `load` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748 |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|      % |  Time | Samples | Caller        | Location                                                                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `impl` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24)

|      % |  Time | Samples | Caller | Location                                                                                               |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `impl` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205 |

##### `each` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105)

|      % |  Time | Samples | Caller        | Location                                                                                        |
| -----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:420 |

##### `execute` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868)

|      % |  Time | Samples | Caller          | Location                                                                                              |
| -----: | ----: | ------: | --------------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `doPropagation` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254 |

##### `createOptions` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604)

|      % |  Time | Samples | Caller        | Location                                                                                         |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:751 |

##### `createHTMLDocument` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                          |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282 |

##### `sortDependencies` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612)

|      % |  Time | Samples | Caller             | Location                                                                                              |
| -----: | ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `sortDependencies` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627)

|      % |  Time | Samples | Caller        | Location                                                                                                 |
| -----: | ----: | ------: | ------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:578 |

##### `add` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368)

|      % |  Time | Samples | Caller        | Location                                                                                                               |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=wikibase.databox.fromWikidata&skin=vector-2022&version=9kykt:1:128 |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193)

|      % |  Time | Samples | Caller                                 | Location                                                                                               |
| -----: | ----: | ------: | -------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `resources/src/mediawiki.api/index.js` | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:159 |

##### `URL` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location                                                                                                              |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.targetLoader&skin=vector-2022&version=1m9dx:9:10 |

##### `init` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342)

|      % |  Time | Samples | Caller           | Location                                                                                                     |
| -----: | ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| 100.0% | 1.0ms |       1 | `ULSPreferences` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:163 |

##### `get` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902)

|      % |  Time | Samples | Caller      | Location                                                                                                |
| -----: | ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.0ms |       1 | `sessionId` | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:3:628 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |   Time | Samples | Function                            | Location                                                                                                 |
| ----: | -----: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 27.4% | 28.0ms |      28 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558   |
| 25.4% | 26.0ms |      26 | `runScript`                         | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59    |
| 15.7% | 16.0ms |      16 | `doPropagation`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254    |
| 15.7% | 16.0ms |      16 | `flushCssBuffer`                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217    |
| 14.7% | 15.0ms |      15 | `execute`                           | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868   |
| 11.7% | 12.0ms |      12 | `eval`                              | `<unknown>`                                                                                              |
| 11.7% | 12.0ms |      12 | `indirectEval`                      | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216   |
| 11.7% | 12.0ms |      12 | `asyncEvalTask`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:381   |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294   |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421   |
| 11.7% | 12.0ms |      12 | `mightThrow`                        | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918         |
| 11.7% | 12.0ms |      12 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636         |
| 10.8% | 11.0ms |      11 | `each`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105          |
|  7.8% |  8.0ms |       8 | `resources/skins.vector.js/skin.js` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155 |
|  6.9% |  7.0ms |       7 | `main`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965 |
|  5.9% |  6.0ms |       6 | `insertBefore`                      | `<unknown>`                                                                                              |
|  5.9% |  6.0ms |       6 | `forEach`                           | `<unknown>`                                                                                              |
|  4.9% |  5.0ms |       5 | `getPropertyValue`                  | `<unknown>`                                                                                              |
|  4.9% |  5.0ms |       5 | `getHeadingScrollOffset`            | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840 |
|  4.9% |  5.0ms |       5 | `setupTableOfContents`              | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:558)

|     % |   Time | Samples | Callee          | Location                                                                                               |
| ----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------ |
| 57.1% | 16.0ms |      16 | `doPropagation` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254  |
| 42.9% | 12.0ms |      12 | `(anonymous)`   | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:294 |

##### `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59)

|     % |  Time | Samples | Callee                              | Location                                                                                                     |
| ----: | ----: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 30.8% | 8.0ms |       8 | `resources/skins.vector.js/skin.js` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155     |
| 11.5% | 3.0ms |       3 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:1:57               |
|  7.7% | 2.0ms |       2 | `index.js`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:1:109 |
|  3.8% | 1.0ms |       1 | `resources/ext.popups/index.js`     | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.popups&skin=vector-2022&version=lo8hx:1:224          |
|  3.8% | 1.0ms |       1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:66      |

##### `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254)

|     % |   Time | Samples | Callee    | Location                                                                                               |
| ----: | -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------ |
| 93.8% | 15.0ms |      15 | `execute` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868 |

##### `flushCssBuffer` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:217)

|     % |   Time | Samples | Callee        | Location                                                                                               |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------ |
| 75.0% | 12.0ms |      12 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421 |
| 25.0% |  4.0ms |       4 | `newStyleTag` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59   |

##### `execute` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868)

|     % |   Time | Samples | Callee      | Location                                                                                              |
| ----: | -----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 93.3% | 14.0ms |      14 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

##### `eval` (`<unknown>`)

|    % |  Time | Samples | Callee      | Location                                                                                                                          |
| ---: | ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 8.3% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:1 |
| 8.3% | 1.0ms |       1 | `(program)` | https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:1                              |

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

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421)

|      % |   Time | Samples | Callee      | Location                                                                                              |
| -----: | -----: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 12.0ms |      12 | `runScript` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59 |

##### `mightThrow` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918)

|     % |  Time | Samples | Callee                     | Location                                                                                                           |
| ----: | ----: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 33.3% | 4.0ms |       4 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977      |
| 25.0% | 3.0ms |       3 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:2:199      |
|  8.3% | 1.0ms |       1 | `init`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.watch.ajax&skin=vector-2022&version=1rpbn:3:897 |
|  8.3% | 1.0ms |       1 | `(anonymous)`              | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:2:356           |
|  8.3% | 1.0ms |       1 | `bound setupEventHandlers` | `<unknown>`                                                                                                        |

##### `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:45:636)

|      % |   Time | Samples | Callee       | Location                                                                                         |
| -----: | -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 12.0ms |      12 | `mightThrow` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918 |

##### `each` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105)

|     % |  Time | Samples | Callee        | Location                                                                                                          |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------------------- |
| 36.4% | 4.0ms |       4 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722   |
|  9.1% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:106:794                 |
|  9.1% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:17:26           |
|  9.1% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.cite.ux-enhancements&skin=vector-2022&version=1cpqh:1:363 |
|  9.1% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91    |

##### `resources/skins.vector.js/skin.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155)

|     % |  Time | Samples | Callee    | Location                                                                                                 |
| ----: | ----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 87.5% | 7.0ms |       7 | `main`    | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965 |
| 12.5% | 1.0ms |       1 | `require` | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344    |

##### `main` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:965)

|     % |  Time | Samples | Callee          | Location                                                                                                  |
| ----: | ----: | ------: | --------------- | --------------------------------------------------------------------------------------------------------- |
| 71.4% | 5.0ms |       5 | `main`          | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:660  |
| 14.3% | 1.0ms |       1 | `init`          | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:42:160 |
| 14.3% | 1.0ms |       1 | `dropdownMenus` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:393 |

##### `forEach` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location                                                                                                                |
| ----: | ----: | ------: | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 16.7% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:56:287               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:40:292               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:54:529               |
| 16.7% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203          |
| 16.7% | 1.0ms |       1 | `(anonymous)` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.clientPreferences&skin=vector-2022&version=1vmjt:9:688 |

##### `getHeadingScrollOffset` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 5.0ms |       5 | `getPropertyValue` | `<unknown>` |

##### `setupTableOfContents` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:6:197)

|      % |  Time | Samples | Callee                   | Location                                                                                                 |
| -----: | ----: | ------: | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `getHeadingScrollOffset` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 9.8% | 10.0ms |      10 | `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4.9% |  5.0ms |       5 | `getPropertyValue` ← `getHeadingScrollOffset` (https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840) ← `setupTableOfContents` (6:197) ← `main` (7:660) ← `main` (1:965) ← `resources/skins.vector.js/skin.js` (1:155) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `(anonymous)` (12:421) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.9% |  4.0ms |       4 | `insertBefore` ← `addToHead` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909) ← `newStyleTag` (4:59) ← `flushCssBuffer` (4:217)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.0% |  2.0ms |       2 | `insertBefore` ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:77:868) ← `domManip` (74:285) ← `(anonymous)` (79:610) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:722) ← `each` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:3:674) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.page.ready&skin=vector-2022&version=1et5k:1:977) ← `mightThrow` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918) ← `(anonymous)` (45:636) |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |  1.0ms |       1 | `register` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |  1.0ms |       1 | `parse` ← `load` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:748) ← `init` (20:645) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |  1.0ms |       1 | `sort` ← `sortQuery` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:13:33) ← `doRequest` (13:755) ← `batchRequest` (13:660) ← `work` (16:424) ← `enqueue` (10:255) ← `load` (18:946) ← `(anonymous)` (22:812) ← `(program)` (1:1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.0% |  1.0ms |       1 | `doPropagation` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:24) ← `impl` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205) ← `(program)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.desktopArticleTarget.init&skin=vector-2022&version=1xmtn:1:1) ← `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                     |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:24) ← `impl` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205) ← `(program)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mmv.bootstrap&skin=vector-2022&version=176u6:1:1) ← `eval` ← `indirectEval` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:216) ← `asyncEvalTask` (15:381) ← `(anonymous)` (15:294) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `each` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `createOptions` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604) ← `(anonymous)` (41:751) ← `Deferred` (43:832) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |  1.0ms |       1 | `createHTMLDocument` ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:132:282) ← `(anonymous)` (1:420) ← `(anonymous)` (1:92) ← `(anonymous)` (1:57) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |  1.0ms |       1 | `execute` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |  1.0ms |       1 | `sortDependencies` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612) ← `sortDependencies` (6:612) ← `resolve` (7:274) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:6:539) ← `resources/ext.popups/index.js` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.popups&skin=vector-2022&version=lo8hx:1:224) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.uls.data&skin=vector-2022&version=1ey9x:1:627) ← `(anonymous)` (1:578) ← `o` (1:132) ← `r` (1:114) ← `(anonymous)` (1:66) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |  1.0ms |       1 | `add` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368) ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=wikibase.databox.fromWikidata&skin=vector-2022&version=9kykt:1:128) ← `(anonymous)` (1:80) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                              |
| 1.0% |  1.0ms |       1 | `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193) ← `resources/src/mediawiki.api/index.js` (1:159) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.0% |  1.0ms |       1 | `URL` ← `(anonymous)` (https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.targetLoader&skin=vector-2022&version=1m9dx:9:10) ← `(anonymous)` (1:80) ← `runScript` (https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59) ← `execute` (10:868) ← `doPropagation` (5:254) ← `(anonymous)` (22:558)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
