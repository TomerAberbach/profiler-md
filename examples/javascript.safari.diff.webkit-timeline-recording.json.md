# CPU profile diff

Took 101.6ms → 102.2ms (+0.5ms, +0.5%) over 89 samples → 91 samples (1.1ms per sample).

| Category | Change |  Delta |             % |            Time | Samples |
| -------- | -----: | -----: | ------------: | --------------: | ------: |
| stdlib   |  +7.9% | +4.5ms | 56.7% → 60.8% | 57.6ms → 62.2ms | 45 → 51 |
| ours     |  -9.1% | -4.0ms | 43.3% → 39.2% | 44.0ms → 40.0ms | 44 → 40 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |  Delta |           % |          Time | Samples | Function                            | Location                                                                                                       |
| ------: | -----: | ----------: | ------------: | ------: | ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|  +50.0% | +2.0ms | 3.9% → 5.9% | 4.0ms → 6.0ms |   4 → 6 | `insertBefore`                      | `<unknown>`                                                                                                    |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `register`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:249         |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `execute`                           | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868         |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `each`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105                |
|  +25.0% | +1.0ms | 3.9% → 4.9% | 4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                  | `<unknown>`                                                                                                    |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `add`                               | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368        |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery.makeCollapsible&skin=vector-2022&version=1yvlc:2:91 |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | FormMetadata.js:3:77436                                                                                        |
| +100.0% | +1.0ms | 1.0% → 2.0% | 1.0ms → 2.0ms |   1 → 2 | `collectMatchingElementsInFlatTree` | `<unknown>`                                                                                                    |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `createOptions`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:41:604               |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `sortDependencies`                  | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:6:612          |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `(anonymous)`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.api&skin=vector-2022&version=1yqeu:1:193         |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `URL`                               | `<unknown>`                                                                                                    |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `init`                              | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.preferences&skin=vector-2022&version=11u78:1:342   |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `get`                               | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:902      |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `filter`                            | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:37:404               |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `updateTooltipOnElement`            | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:15:1080      |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `isXMLDoc`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:915                |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `dataAttr`                          | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:51:398               |
|     new | +1.0ms | 0.0% → 1.0% |   0ms → 1.0ms |   0 → 1 | `remove`                            | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:62:821               |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |  Delta |           % |        Time | Samples | Function                  | Location                                                                                                                    |
| ------: | -----: | ----------: | ----------: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `resolveIndex`            | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352                      |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `splitModuleKey`          | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720                      |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:11:203              |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24                     |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:61:27                             |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `jar.js`                  | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20                    |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86 |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `Title.js`                | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105                    |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `eventSender.js`          | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28                    |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `forEach`                 | `<unknown>`                                                                                                                 |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildEvent`              | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:16:842                   |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `isInSample`              | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.wikimediaEvents&skin=vector-2022&version=lu7fs:28:619               |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `buildFragment`           | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:59:231                            |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.uls.interface&skin=vector-2022&version=pe1oy:1:171                  |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fireWith`                | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:150                            |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `exec`                    | `<unknown>`                                                                                                                 |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `cleanData`               | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:76:830                            |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)`             | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.toc&skin=vector-2022&version=i14xp:1:791                      |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `setInitialActiveSection` | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:7:167                    |
| removed | -1.0ms | 1.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `parseImageUrl`           | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.util&skin=vector-2022&version=1vbcg:10:55                     |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |   Delta |             % |            Time | Samples | Function                                                       | Location                                                                                                 |
| -------: | ------: | ------------: | --------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +1100.0% | +11.0ms |  1.0% → 11.7% |  1.0ms → 12.0ms |  1 → 12 | `(anonymous)`                                                  | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:12:421   |
|   +25.0% |  +3.0ms | 11.8% → 14.7% | 12.0ms → 15.0ms | 12 → 15 | `execute`                                                      | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:868   |
|   +23.1% |  +3.0ms | 12.8% → 15.7% | 13.0ms → 16.0ms | 13 → 16 | `doPropagation`                                                | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:5:254    |
|   +37.5% |  +3.0ms |  7.9% → 10.8% |  8.0ms → 11.0ms |  8 → 11 | `each`                                                         | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:5:105          |
|  +100.0% |  +3.0ms |   3.0% → 5.9% |   3.0ms → 6.0ms |   3 → 6 | `forEach`                                                      | `<unknown>`                                                                                              |
|   +22.2% |  +2.0ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `_collectMetadata`                                             | FormMetadata.js:3:78950                                                                                  |
|   +22.2% |  +2.0ms |  8.9% → 10.8% |  9.0ms → 11.0ms |  9 → 11 | `formsAndMetadata`                                             | FormMetadata.js:3:82286                                                                                  |
|   +50.0% |  +2.0ms |   3.9% → 5.9% |   4.0ms → 6.0ms |   4 → 6 | `insertBefore`                                                 | `<unknown>`                                                                                              |
|  +200.0% |  +2.0ms |   1.0% → 2.9% |   1.0ms → 3.0ms |   1 → 3 | `_stringsToEvaluateToDetermineIfElementIsFollowedByAffordance` | FormMetadata.js:3:21490                                                                                  |
|      new |  +2.0ms |   0.0% → 2.0% |     0ms → 2.0ms |   0 → 2 | `get`                                                          | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.user&skin=vector-2022&version=163ne:4:740  |
|    +4.0% |  +1.0ms | 24.6% → 25.4% | 25.0ms → 26.0ms | 25 → 26 | `runScript`                                                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:11:59    |
|   +12.5% |  +1.0ms |   7.9% → 8.8% |   8.0ms → 9.0ms |   8 → 9 | `_collectFormMetadata`                                         | FormMetadata.js:3:62833                                                                                  |
|   +33.3% |  +1.0ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `addToHead`                                                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:3:909    |
|   +33.3% |  +1.0ms |   3.0% → 3.9% |   3.0ms → 4.0ms |   3 → 4 | `newStyleTag`                                                  | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:4:59     |
|   +50.0% |  +1.0ms |   2.0% → 2.9% |   2.0ms → 3.0ms |   2 → 3 | `domManip`                                                     | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:74:285         |
|   +14.3% |  +1.0ms |   6.9% → 7.8% |   7.0ms → 8.0ms |   7 → 8 | `resources/skins.vector.js/skin.js`                            | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:1:155 |
|   +25.0% |  +1.0ms |   3.9% → 4.9% |   4.0ms → 5.0ms |   4 → 5 | `getPropertyValue`                                             | `<unknown>`                                                                                              |
|   +25.0% |  +1.0ms |   3.9% → 4.9% |   4.0ms → 5.0ms |   4 → 5 | `getHeadingScrollOffset`                                       | https://en.wikipedia.org/w/load.php?lang=en&modules=skins.vector.js&skin=vector-2022&version=1v3o6:5:840 |
|  +100.0% |  +1.0ms |   1.0% → 2.0% |   1.0ms → 2.0ms |   1 → 2 | `add`                                                          | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.base&skin=vector-2022&version=13iwe:4:368  |
|  +100.0% |  +1.0ms |   1.0% → 2.0% |   1.0ms → 2.0ms |   1 → 2 | `_collectControlMetadata`                                      | FormMetadata.js:3:46804                                                                                  |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |  Delta |             % |            Time | Samples | Function                     | Location                                                                                                                    |
| ------: | -----: | ------------: | --------------: | ------: | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
|  -50.0% | -2.0ms |   3.9% → 2.0% |   4.0ms → 2.0ms |   4 → 2 | `enqueue`                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:10:255                      |
|  -40.0% | -2.0ms |   4.9% → 2.9% |   5.0ms → 3.0ms |   5 → 3 | `require`                    | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:8:344                       |
| removed | -2.0ms |   2.0% → 0.0% |     2.0ms → 0ms |   2 → 0 | `_findHiddenUsernameElement` | FormMetadata.js:3:75498                                                                                                     |
|   -7.7% | -1.0ms | 12.8% → 11.7% | 13.0ms → 12.0ms | 13 → 12 | `mightThrow`                 | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:44:918                            |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                | https://en.wikipedia.org/wiki/Profiling_(computer_programming):8:44                                                         |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`                  | https://en.wikipedia.org/wiki/Profiling_(computer_programming):6:10                                                         |
|  -20.0% | -1.0ms |   4.9% → 3.9% |   5.0ms → 4.0ms |   5 → 4 | `(program)`                  | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:1:1                         |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `resolveIndex`               | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:17:352                      |
|  -50.0% | -1.0ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `init`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:20:645                      |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `splitModuleKey`             | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:15:720                      |
|  -33.3% | -1.0ms |   3.0% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `impl`                       | https://en.wikipedia.org/w/load.php?lang=en&modules=startup&only=scripts&raw=1&skin=vector-2022:18:205                      |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`                  | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.quicksurveys.lib&skin=vector-2022&version=kdhjm:1:1                 |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:24                     |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(program)`                  | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:1:1                      |
|  -50.0% | -1.0ms |   2.0% → 1.0% |   2.0ms → 1.0ms |   2 → 1 | `Deferred`                   | https://en.wikipedia.org/w/load.php?lang=en&modules=jquery&skin=vector-2022&version=r2z40:43:832                            |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `jar.js`                     | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:3:20                    |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `index.js`                   | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.cookie&skin=vector-2022&version=spq95:1:106                   |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `(anonymous)`                | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.visualEditor.core.utils.parsing&skin=vector-2022&version=962r8:1:86 |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `Title.js`                   | https://en.wikipedia.org/w/load.php?lang=en&modules=mediawiki.Title&skin=vector-2022&version=1fg2m:1:105                    |
| removed | -1.0ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `eventSender.js`             | https://en.wikipedia.org/w/load.php?lang=en&modules=ext.testKitchen&skin=vector-2022&version=45lgo:10:28                    |
